let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const createFaceEnrollmentByUrlTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 201,
  videoFileURL: config.getURL(config.FACE_ENROLLMENT_FILE_ARMAAN_1),
  expectedMessage:'Successfully enrolled face for user with userId : usr_([a-z0-9]){32}'
}
];
module.exports = createFaceEnrollmentByUrlTestCases;
