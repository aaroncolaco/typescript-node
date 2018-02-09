'use strict';
import 'mocha';

const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

import Config from '../config'

chai.use(chaiHttp);

const hostURL = Config.getURL();
const rootUrl = '/users';
const completeURL = hostURL + rootUrl;

let url = '/';

describe('User', () => {
  describe('GET ' + rootUrl + url, () => {
    it('should have status 200', (done) => {
      chai.request(completeURL)
        .get(url)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res).to.be.an('object');
          done();
        });
    });
  });
});
