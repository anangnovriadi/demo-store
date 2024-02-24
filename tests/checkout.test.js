const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../main");

chai.use(chaiHttp);
chai.should();

const payloadSuccess = {
  data: [
    {
      product_id: 1,
      qty: 1,
      tax: 10
    },
    {
      product_id: 2,
      qty: 1,
      tax: 12
    }
  ]
};

const payloadFailed = {
  data: [
    {
      product_id: 1,
      qty: 1,
      tax: 10
    },
    {
      product_id: 4,
      qty: 1,
      tax: 12
    }
  ]
};

describe("Checkout", () => {
  describe("POST /api/checkout", () => {
    it("should checkout exceeds the qty limit", done => {
      chai
        .request(app)
        .post("/api/checkout")
        .send(payloadFailed)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          done();
        });
    });

    it("should checkout exceeds the qty limit", done => {
      chai
        .request(app)
        .post("/api/checkout")
        .send(payloadSuccess)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
