let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const videoVerifcationByUrlTestCases = [
  {
    expectedRc: responseCode.SUCCESS,
    expectedSc: 200,
    contentLanguage: config.CONTENT_LANGUAGE_REAL,
    videoFileURL: config.getURL(config.VIDEO_VERIFICATION_FILE_B_2),
    expectedText: config.ENGLISH_PHRASE,
    phrase: config.ENGLISH_PHRASE,
    expectedMessage:'Successfully verified video for user with userId : usr_([a-z0-9]){32}'
  }
  ];

module.exports = videoVerifcationByUrlTestCases;
