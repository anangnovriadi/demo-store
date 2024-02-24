"use strict";

module.exports = {
  up: async queryInterface =>
    queryInterface.bulkInsert(
      "warehouses",
      [
        {
          name: "SwiftStack Warehousing",
          stock: 48,
          address: "Surabaya",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Nexus Logistics Center",
          stock: 100,
          address: "Malang",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Alpha Omega Warehouses",
          stock: 240,
          address: "Jakarta",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Zenith Supply Chain Center",
          stock: 2200,
          address: "Jember",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    ),
  down: async queryInterface => {}
};
