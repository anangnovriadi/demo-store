const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const cartController = require("../controllers/cartController");
const checkoutController = require("../controllers/checkoutController");

module.exports = app => {
  router.get("/check-health", (req, res) => {
    res.status(200).send("OK");
  });

  router.get("/products", productController.listProduct);
  router.get("/product/:id", productController.detailProduct);
  router.get("/cart/:product_id", cartController.checkAddTocart);
  router.post("/checkout", checkoutController.checkout);

  app.use("/api", router);
};
