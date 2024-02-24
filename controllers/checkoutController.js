"use-strict";

const models = require("../models");

const checkout = async (req, res) => {
  try {
    const payload = req.body.data;

    if (payload.length > 0) {
      for (let i = 0; i < payload.length; i++) {
        const product = await models.product.findOne({
          attributes: ["id", "name", "qty", "price"],
          include: [
            {
              model: models.warehouse,
              as: "warehouse",
              attributes: ["id", "name", "stock"]
            }
          ],
          where: {
            id: payload[i].product_id
          }
        });

        if (product && product.qty < payload[i].qty) {
          return req.output(
            req,
            res,
            {
              message: "failed",
              info: `product ${product.name} exceeds the qty limit`,
              data: payload[i]
            },
            "info",
            400
          );
        }
      }

      for (let i = 0; i < payload.length; i++) {
        const product = await models.product.findOne({
          attributes: ["id", "name", "qty", "price"],
          include: [
            {
              model: models.warehouse,
              as: "warehouse",
              attributes: ["id", "name", "stock"]
            }
          ],
          where: {
            id: payload[i].product_id
          }
        });

        await models.product.update(
          {
            qty: product.qty - Number(payload[i].qty),
            tax: payload[i].tax
          },
          {
            where: {
              id: product.id
            }
          }
        );

        await models.warehouse.update(
          {
            stock: Number(product.warehouse.stock) - Number(payload[i].qty)
          },
          {
            where: {
              id: product.warehouse.id
            }
          }
        );

        await models.order.create({
          product_id: payload[i].product_id,
          qty: Number(payload[i].qty),
          tax: Number(payload[i].tax),
          sub_total:
            product.price * Number(payload[i].qty) - Number(payload[i].tax)
        });
      }
    }

    return req.output(
      req,
      res,
      {
        message: "success",
        data: payload
      },
      "info",
      200
    );
  } catch (err) {
    throw err;
  }
};

module.exports = { checkout };
