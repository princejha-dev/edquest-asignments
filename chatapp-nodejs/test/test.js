const chai = require("chai");
const chaiHttp = require("chai-http");

const { request } = chaiHttp;  // 👈 important change

const expect = chai.expect;

const app = "http://localhost:3000";

describe("Message API", () => {

  it("should get all messages", (done) => {
    request(app)  
      .get("/api/messages")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

});