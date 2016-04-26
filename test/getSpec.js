const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server.js');

const should = chai.should();

const settings = {
  lang: 'EN-US',
  method: 'GET',
  postVar: 'something'
};

chai.use(chaiHttp);

describe('GET /', function() {
  it('should returns success HTML', function(done) {
    chai.request(server)
    .get('/')
    .set('accept-language', settings.lang)
    .end(function(err, res) {
      should.equal(err, null);
      
      res.should.have.status(200);
      res.text.should.to.contain(settings.lang);
      res.text.should.to.contain(settings.method);
      res.text.should.not.contain(settings.postVar);
      res.should.be.html;
      
      done();
    });
  });
});

describe('GET /other', function() {
  it('should returns 404', function(done) {
    chai.request(server)
    .get('/other')
    .end(function(err, res) {
      should.not.equal(err, null);
      res.should.have.status(404);
      done();
    });
  });
});