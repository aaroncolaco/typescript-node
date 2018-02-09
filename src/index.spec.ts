let app = null;

// start http server
describe('Start Server', () => {
  it('should start server', () => {
    app = require('./index');
  });
});


// import test files in the order to be run
import './users/users.spec';

// stop http server
describe('Stop Server', () => {
  it('should stop server', () => {
    app.stopServer()
  });
});
