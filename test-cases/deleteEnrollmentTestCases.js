let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const deleteEnrollmentTestCases = [
  {
    enrollmentId:'fakeEnrollmentId',
    expectedRc: responseCode.INVALID_ENROLLMENT_ID,
    expectedSc: 400,
    expectedMessage:'Invalid enrollment id'
  },
  {
    enrollmentId:'123456',
    expectedRc: responseCode.ENROLLMENT_NOT_FOUND,
    expectedSc: 404,
    expectedMessage:'Enrollment with id : (.*) not found'
  },
  {
    expectedRc: responseCode.SUCCESS,
    expectedSc: 200,
    expectedMessage:'Deleted enrollment with id : (.*) for user with userId : usr_([a-z0-9]){32}'
  }
];
module.exports = deleteEnrollmentTestCases;
