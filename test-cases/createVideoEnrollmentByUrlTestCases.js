let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const createVideoEnrollmentByUrlTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 201,
  contentLanguage: config.CONTENT_LANGUAGE_REAL,
  videoFileURL: config.getURL(config.VIDEO_ENROLLMENT_FILE_ARMAAN_2),
  expectedText: config.ENGLISH_PHRASE,
  phrase: config.ENGLISH_PHRASE,
  expectedMessage:'Successfully enrolled video for user with userId : usr_([a-z0-9]){32}'
}
];
module.exports = createVideoEnrollmentByUrlTestCases;
