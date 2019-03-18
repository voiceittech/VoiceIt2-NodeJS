let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const voiceVerifcationByUrlTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  audioFileURL: config.getURL(config.VERIFICATION_FILE_A_2),
  expectedText: config.ENGLISH_PHRASE,
  phrase: config.ENGLISH_PHRASE,
  expectedMessage:'Successfully verified voice for user with userId : usr_([a-z0-9]){32}'
}
];

module.exports = voiceVerifcationByUrlTestCases;
