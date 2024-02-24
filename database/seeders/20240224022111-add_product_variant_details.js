"use strict";

module.exports = {
  up: async queryInterface =>
    queryInterface.bulkInsert(
      "product_variant_details",
      [
        {
          product_variant_id: 1,
          name: "M",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_variant_id: 1,
          name: "L",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_variant_id: 2,
          name: "Blue",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_variant_id: 2,
          name: "Black",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_variant_id: 3,
          name: "39",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_variant_id: 3,
          name: "40",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_variant_id: 3,
          name: "41",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_variant_id: 3,
          name: "42",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_variant_id: 4,
          name: "Black",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_variant_id: 4,
          name: "White",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_variant_id: 5,
          name: "Pink",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_variant_id: 5,
          name: "Magenta",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    ),
  down: async queryInterface => {}
};
