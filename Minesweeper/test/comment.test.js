const { expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');


chai.use(chaiHttp);

describe('Comments from Users', () => {


/*
GET all comments...
*/
    it('It should GET all comments', ( done ) => {
        chai.request(server)
            .get('/api/comments')
            .end(( err, res ) => {
                chai.expect( res ).to.have.status(200);
            done()
            });
    });
    it('it should throw an Error for bad request', (done) => {
        chai.request(server)
          .post('/api/comments')
          .end((err, res) => {
              chai.expect( res ).to.have.status(404)  
            done();
          });
      });

/*

    
 /*
POST Comment...
*/
    it('It should POST a new Comment.', ( done ) => {
        chai.request(server)
            .post('/api/comment')
            .send({
                    email: 'Albert@gmail.com',
                    comment: 'Hello Alberto.'
            })
            .end(( err, res ) => {
                chai.expect( res ).to.have.status(200);
            done()
            });
    });
    it('it should throw an Error for bad request', (done) => {
        chai.request(server)
          .post('/api/comment')
          .send({
            email: 'pepito@gmail.com',
            comment: ''
          })
          .end((err, res) => {
              chai.expect( res ).to.have.status(400)   
              chai.expect( res.body ).to.eql({
               success: false,
               error: 'Data must be complete to Post.'
            })
            done();
          });
      });   

/*

DELETE Comment...
*/
     it('It should delete one selected comment.', ( done ) => {
        chai.request(server)
            .del('/api/comments/:id')
            .end(( err, res ) => {
                chai.expect( res ).to.have.status(200); 
                chai.expect( res.body ).to.eql({
                    success: true,
                    message: 'Comment deleted successfully.'
                })
            done()
            });
    });
    
   
});