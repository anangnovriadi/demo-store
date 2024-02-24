const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../main");

chai.use(chaiHttp);
chai.should();

describe("Product", () => {
  describe("GET /products", () => {
    it("should get all product", done => {
      chai
        .request(app)
        .get("/api/products")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });

  describe("GET /product/:id", () => {
    it("should get detail product", done => {
      chai
        .request(app)
        .get("/api/product/1")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    it("should get not found detail product", done => {
      chai
        .request(app)
        .get("/api/product/100")
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
