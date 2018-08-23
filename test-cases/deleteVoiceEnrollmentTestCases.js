let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const deleteVoiceEnrollmentTestCases = [
  {
    expectedRc: responseCode.SUCCESS,
    expectedSc: 200,
    expectedMessage:'Deleted voice enrollment with id : (.*) for user with userId : usr_([a-z0-9]){32}'
  }
];

module.exports = deleteVoiceEnrollmentTestCases;
