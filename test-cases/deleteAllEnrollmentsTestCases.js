let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const deleteAllEnrollmentsTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  expectedMessage:'All enrollments for user with userId : usr_([a-z0-9]){32} were deleted'
}
];

module.exports = deleteAllEnrollmentsTestCases;
