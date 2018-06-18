var request = require("request");
var baseUrl = "https://jsonplaceholder.typicode.com"; //public test API

describe('API request demo', function() {

  it('should GET a resource', function(done) {
    request.get(baseUrl + "/posts/1", function(error, response, body){
      var responseBody = JSON.parse(body);
      console.log("GET /posts/1: " + body)
      expect(responseBody.userId).toEqual(1)
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
                expect(responseBody.title).toEqual("foo")
                done();
    });
  });



});