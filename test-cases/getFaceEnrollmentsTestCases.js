let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const getFaceEnrollmentsTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  expectedMessage:'Successfully got all face enrollments for user with userId : usr_([a-z0-9]){32}'
}
];

module.exports = getFaceEnrollmentsTestCases;
