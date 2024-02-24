"use-strict";

const models = require("../models");

const checkAddTocart = async (req, res) => {
  try {
    const product = await models.product.findOne({
      attributes: ["id", "name", "qty", "price"],
      where: {
        id: req.params.product_id
      }
    });

    let response = {
      message: "success"
    };

    if (!product) {
      response.message = "failed";
      response.info = "product not found";
      response.statusCode = 404;
    } else {
      response.statusCode = product && product.qty === 0 ? 400 : 200;
      response.info = product && product.qty === 0 ? "qty is empty" : "";
    }

    return req.output(
      req,
      res,
      {
        message: response.message,
        info: response.info,
        data: product
      },
      "info",
      response.statusCode
    );
  } catch (err) {
    throw err;
  }
};

module.exports = { checkAddTocart };
