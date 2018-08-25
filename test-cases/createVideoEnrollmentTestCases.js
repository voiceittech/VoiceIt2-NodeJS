let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const createVideoEnrollmentTestCases = [
{
    expectedRc: responseCode.SUCCESS,
    expectedSc: 201,
    contentLanguage: config.CONTENT_LANGUAGE_REAL,
    videoFilePath: config.VIDEO_ENROLLMENT_FILE_ARMAAN_1,
    expectedText: config.ENGLISH_PHRASE,
    phrase: config.ENGLISH_PHRASE,
    expectedMessage:'Successfully enrolled video for user with userId : usr_([a-z0-9]){32}'
}
];
module.exports = createVideoEnrollmentTestCases;
