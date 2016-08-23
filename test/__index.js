const expect = require('chai').expect;
const util = require('../src/index');

// Test utility tool
describe('Util Tool', () => {
  const testPath = './logs/lincoln.log';

  // Fake object
  const testObj = {
    msg: 'testing',
    info: 'parameter',
  };

  it('should have a function debug()', (done) => {
    expect(util.debug).to.be.a('function');
    done();
  });

  it('should grab object parameter and check its keys (msg: , info: )', (done) => {
    expect(util.debug(testObj)).to.have.ownProperty('msg');
    expect(util.debug(testObj)).to.have.ownProperty('info');
    done();
  });
});// END of Util Tool describe

// Version Increaser
describe('Version Increaser', () => {
  it('Should Increase The Version Number', (done) => {
    expect(util.bump).to.not.equal(null);
    done();
  });
});
