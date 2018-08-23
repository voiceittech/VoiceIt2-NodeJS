let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const deleteFaceEnrollmentTestCases = [
  {
    faceEnrollmentId:'fakeEnrollmentId',
    expectedRc: responseCode.INVALID_ENROLLMENT_ID,
    expectedSc: 400,
    expectedMessage:'Invalid faceEnrollmentId'
  },
  {
    expectedRc: responseCode.SUCCESS,
    expectedSc: 200,
    expectedMessage:'Deleted face enrollment with faceEnrollmentId : (.*) for user with userId : usr_([a-z0-9]){32}'
  }
];
module.exports = deleteFaceEnrollmentTestCases;
