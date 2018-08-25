let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const deleteAllFaceEnrollmentsTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  expectedMessage:'All face enrollments for user with userId : usr_([a-z0-9]){32} were deleted'
}
];

module.exports = deleteAllFaceEnrollmentsTestCases;
