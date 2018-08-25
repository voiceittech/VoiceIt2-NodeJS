let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const getAllVoiceEnrollmentsTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  expectedMessage:'Successfully got all voice enrollments for user with userId : usr_([a-z0-9]){32}'
}
];

module.exports = getAllVoiceEnrollmentsTestCases;
