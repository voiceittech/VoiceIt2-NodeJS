let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const deleteVideoEnrollmentTestCases = [
  {
    enrollmentId:'fakeEnrollmentId',
    expectedRc: responseCode.INVALID_ENROLLMENT_ID,
    expectedSc: 400,
    expectedMessage:'Invalid enrollment id'
  },
  {
    enrollmentId: null,
    expectedRc: responseCode.SUCCESS,
    expectedSc: 200,
    expectedMessage:'Deleted video enrollment with id : (.*) for user with userId : usr_([a-z0-9]){32}'
  }
];
module.exports = deleteVideoEnrollmentTestCases;
