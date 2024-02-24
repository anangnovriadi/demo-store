"use strict";

module.exports = {
  up: async queryInterface =>
    queryInterface.bulkInsert(
      "product_detail_images",
      [
        {
          product_id: 1,
          image: "https://dummyimage.com/600x400/000/fff",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_id: 1,
          image: "https://dummyimage.com/600x400/000/fff",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_id: 1,
          image: "https://dummyimage.com/600x400/000/fff",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_id: 2,
          image: "https://dummyimage.com/600x400/000/fff",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_id: 2,
          image: "https://dummyimage.com/600x400/000/fff",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_id: 3,
          image: "https://dummyimage.com/600x400/000/fff",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_id: 3,
          image: "https://dummyimage.com/600x400/000/fff",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_id: 4,
          image: "https://dummyimage.com/600x400/000/fff",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_id: 4,
          image: "https://dummyimage.com/600x400/000/fff",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    ),
  down: async queryInterface => {}
};
