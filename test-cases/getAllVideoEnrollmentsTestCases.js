let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const getAllVideoEnrollmentsTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  expectedMessage:'Successfully got all video enrollments for user with userId : usr_([a-z0-9]){32}'
}
];

module.exports = getAllVideoEnrollmentsTestCases;
