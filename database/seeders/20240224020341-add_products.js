"use strict";

module.exports = {
  up: async queryInterface =>
    queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Baju Bola",
          warehouse_id: 1,
          display_image:
            "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/455359/item/idgoods_55_455359.jpg",
          price: "240",
          qty: 4,
          description: "Lorem ipsum",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Sepatu Casual",
          warehouse_id: 1,
          display_image:
            "https://hips.hearstapps.com/hmg-prod/images/cushioned-shoes-15407-1632754173.jpg",
          price: "120",
          qty: 24,
          description: "Lorem ipsum",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Jam Tangan",
          warehouse_id: 2,
          display_image:
            "https://upload.jaknot.com/2023/05/images/products/8ba71c/original/jam-tangan-digital-sport-pria-wanita-waterproof-50m-1995.jpeg",
          price: "40",
          qty: 62,
          description: "Lorem ipsum",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Boneka",
          warehouse_id: 4,
          display_image:
            "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/7/13/5997c090-a6f5-4fd7-8063-d6984e386abb.jpg",
          price: "10",
          qty: 0,
          description: "Lorem ipsum",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    ),
  down: async queryInterface => {}
};
