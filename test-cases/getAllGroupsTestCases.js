let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const getAllGroupsTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  expectedMessage: 'Successfully got all groups'
}
];

module.exports = getAllGroupsTestCases;
