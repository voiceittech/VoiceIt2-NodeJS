let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const faceVerificationByUrlTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  videoFileURL: config.getURL(config.FACE_VERIFICATION_FILE_ARMAAN_1),
  expectedMessage:'Successfully verified face for user with userId : usr_([a-z0-9]){32}'
}
];
module.exports = faceVerificationByUrlTestCases;
