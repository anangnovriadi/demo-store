"use strict";

module.exports = {
  up: async queryInterface =>
    queryInterface.bulkInsert(
      "product_variants",
      [
        {
          product_id: 1,
          type: "size",
          description: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_id: 1,
          type: "color",
          description: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_id: 2,
          type: "size",
          description: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_id: 2,
          type: "color",
          description: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_id: 4,
          type: "color",
          description: "",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    ),
  down: async queryInterface => {}
};
