let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const videoVerificationTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  videoFilePath: config.VIDEO_VERIFICATION_FILE_ARMAAN_1,
  expectedText: config.ENGLISH_PHRASE,
  phrase: config.ENGLISH_PHRASE,
  expectedMessage:'Successfully verified video for user with userId : usr_([a-z0-9]){32}'
}
];

module.exports = videoVerificationTestCases;
