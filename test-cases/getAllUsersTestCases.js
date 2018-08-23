let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const getAllUsersTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  expectedMessage: 'Successfully got all users'
}
];

module.exports = getAllUsersTestCases;
