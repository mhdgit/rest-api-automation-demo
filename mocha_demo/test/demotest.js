var request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://jsonplaceholder.typicode.com"

describe('Basic RESTful API test', function() {
    
    it('should GET a resource', function(done) {
        request.get({ url: baseUrl + '/posts/1' },
            function(error, response, body) {
            		var responseBody = JSON.parse(body);
                    expect(responseBody.id).to.equal(1);
                    expect(responseBody.hasOwnProperty("title")).is.true
                    expect(response.statusCode).to.equal(200);
                    //console.log(body);
                done();
            });
    });

    it('should POST a resource', function(done) {
        var payload = {
          "title": "mh",
          "body": "mhtest",
          "userId": 1
        };
        request.post({url: baseUrl + "/posts", form: payload}, function(error, response, body){
                    var responseBody = JSON.parse(body);
                    //console.log("POST response body: " + body)
                    expect(responseBody.title).to.equal("mh")
                    expect(response.statusCode).to.equal(201);
                    done();
        });
    });

    it('should PUT a resource', function(done) {
        var payload = {
          "title": "mhupdated",
          "body": "mhtest",
          "userId": 1
        };
        request.put({url: baseUrl + "/posts/1", form: payload}, function(error, response, body){
                    var responseBody = JSON.parse(body);
                    //console.log("POST response body: " + body)
                    expect(responseBody.title).to.equal("mhupdated")
                    expect(response.statusCode).to.equal(200);
                    done();
        });
    });

    it('should DELETE a resource', function(done) {
        request.delete({url: baseUrl + "/posts/1"}, function(error, response, body){
                    var responseBody = JSON.parse(body);
                    expect(Object.keys(responseBody).length).to.equal(0)
                    expect(response.statusCode).is.JSON
                    done();
        });
    });

});
