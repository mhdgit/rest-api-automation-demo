var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://jsonplaceholder.typicode.com";


var baseUrl = "https://jsonplaceholder.typicode.com"; //public test API

describe('API request demo', function() {

  it('should GET a resource', function(done) {
    request.get(baseUrl + "/posts/1", function(error, response, body){
      var responseBody = JSON.parse(body);
      console.log("GET /posts/1: " + body)
      expect(responseBody.userId).to.equal(1);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should POST a resource', function(done) {
    var payload = {
      "title": 'foo',
      "body": 'bar',
      "userId": 1
    };
    request.post({url: baseUrl + "/posts", form: payload}, function(error, response, body){
                var responseBody = JSON.parse(body);
                console.log("POST response body: " + body)
                expect(responseBody.title).to.equal("foo")
                expect(response.statusCode).to.equal(201);
                done();
    });
  });
});