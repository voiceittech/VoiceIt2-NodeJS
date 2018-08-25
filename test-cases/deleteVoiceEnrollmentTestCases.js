let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const deleteVoiceEnrollmentTestCases = [
  {
    voiceEnrollmentId:'fakeEnrollmentId',
    expectedRc: responseCode.INVALID_ENROLLMENT_ID,
    expectedSc: 400,
    expectedMessage:'Invalid enrollment id'
  },
  {
    voiceEnrollmentId: null,
    expectedRc: responseCode.SUCCESS,
    expectedSc: 200,
    expectedMessage:'Deleted voice enrollment with id : (.*) for user with userId : usr_([a-z0-9]){32}'
  }
];

module.exports = deleteVoiceEnrollmentTestCases;
