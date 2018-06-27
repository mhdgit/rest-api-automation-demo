var rest = require('rest');
var baseUrl = "https://jsonplaceholder.typicode.com"

describe('Jest framework quick demo', function() {
    
  describe('Basic RESTful API test', function() {
    
    it('should GET a resource', function(done) {
      rest(baseUrl+"/posts/1").then(function(response) {
        var responseBody = JSON.parse(response.entity);         
        expect(responseBody.id).toEqual(1);                    
        expect(response.status.code).toEqual(200);
        console.log(response.entity);
        done();
      });
    });
    
  });
});