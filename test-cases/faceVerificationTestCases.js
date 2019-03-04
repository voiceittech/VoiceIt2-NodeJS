let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const faceVerificationTestCases = [
{
    expectedRc: responseCode.SUCCESS,
    expectedSc: 200,
    videoFilePath: config.FACE_VERIFICATION_FILE_B_1,
    expectedMessage:'Successfully verified face for user with userId : usr_([a-z0-9]){32}'
}
];
module.exports = faceVerificationTestCases;
