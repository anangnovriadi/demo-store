"use-strict";

const models = require("../models");

const listProduct = async (req, res) => {
  try {
    const products = await models.product.findAll({
      where: {
        is_active: true
      },
      include: [
        {
          model: models.warehouse,
          as: "warehouse",
          attributes: ["name", "stock", "is_active"]
        }
      ]
    });

    return req.output(
      req,
      res,
      {
        message: "success",
        total: products.length,
        data: products
      },
      "info",
      200
    );
  } catch (err) {
    throw err;
  }
};

const detailProduct = async (req, res) => {
  try {
    let product = await models.product.findOne({
      where: {
        id: req.params.id,
        is_active: true
      },
      include: [
        {
          model: models.warehouse,
          as: "warehouse",
          attributes: ["name", "stock", "is_active"]
        }
      ]
    });

    if (!product) {
      return req.output(
        req,
        res,
        {
          message: "failed",
          info: "product not found"
        },
        "info",
        404
      );
    }

    const productVariant = await models.productVariant.findAll({
      where: {
        product_id: product.id
      }
    });

    const productDetailImage = await models.productDetailImage.findAll({
      attributes: ["image"],
      where: {
        product_id: product.id
      }
    });

    let variants = [];
    if (productVariant && productVariant.length > 0) {
      for (let i = 0; i < productVariant.length; i++) {
        const productVariantDetail = await models.productVariantDetail.findAll({
          attributes: ["product_variant_id", "name"],
          where: {
            product_variant_id: productVariant[i].dataValues.id
          }
        });

        variants.push({
          id: productVariant[i].dataValues.id,
          type: productVariant[i].dataValues.type,
          list: productVariantDetail
        });
      }
    }

    product.dataValues.images =
      productDetailImage && productDetailImage.length > 0
        ? productDetailImage.map(val => val.image)
        : [];
    product.dataValues.variants = variants;

    return req.output(
      req,
      res,
      {
        message: "success",
        data: product
      },
      "info",
      200
    );
  } catch (err) {
    throw err;
  }
};

module.exports = { listProduct, detailProduct };
