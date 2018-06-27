var request = require("request");
var baseUrl = "https://jsonplaceholder.typicode.com"

describe('Jest framework quick demo', function() {
    
  describe('Basic RESTful API test', function() {
      
    beforeAll( function(){
        console.log("Starting REST API test run")
      })
  
      beforeEach( function(){
        console.log("Method call before each test")
      })
  
      afterEach( function(){
        console.log("Method call after each test")
      })
  
      afterAll( function(){
        console.log("REST API Test run finished")
      })
      
    it('should GET a resource', function(done) {
        request.get({ url: baseUrl + '/posts/1' },
            function(error, response, body) {
                var responseBody = JSON.parse(body);          
                expect(responseBody.id).toEqual(1);                    
                expect(response.statusCode).toEqual(200);
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
                    expect(responseBody.title).toEqual("mh")
                    expect(response.statusCode).toEqual(201);
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
                    expect(responseBody.title).toEqual("mhupdated")
                    expect(response.statusCode).toEqual(200);
                    done();
        });
    });
    
    it('should DELETE a resource', function(done) {
        request.delete({url: baseUrl + "/posts/1"}, function(error, response, body){
                    var responseBody = JSON.parse(body);
                    expect(Object.keys(responseBody).length).toEqual(0)
                    expect(response.statusCode).toEqual(200)
                    done();
        });
    });
  });
  describe('Test status', function() {    

    it.skip('should run an inclusive test', function(done) {
      console.log("Inclusive test test")
      done();
    });

    // it.only('should run an exclusive test', function(done) {
    //   console.log("Exclusive test")
    //   done();
    // });
  });

  
});