const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../main");

chai.use(chaiHttp);
chai.should();

describe("Cart", () => {
  describe("GET /api/cart/:product_id", () => {
    it("should check add to cart success", done => {
      chai
        .request(app)
        .get("/api/cart/1")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    it("should check add to cart failed", done => {
      chai
        .request(app)
        .get("/api/cart/4")
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
