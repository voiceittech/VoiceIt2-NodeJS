let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const voiceIdentificationTestCases = [
  {
    expectedRc: responseCode.SUCCESS,
    expectedSc: 200,
    contentLanguage: config.CONTENT_LANGUAGE_REAL,
    audioFilePath: config.VERIFICATION_FILE_A_1,
    expectedText: config.ENGLISH_PHRASE,
    phrase: config.ENGLISH_PHRASE,
    user: 'B',
    expectedMessage:'Successfully identified voice for user with userId : usr_([a-z0-9]){32} in group with groupId : grp_([a-z0-9]){32}'
  },
  {
    expectedRc: responseCode.SUCCESS,
    expectedSc: 200,
    contentLanguage: config.CONTENT_LANGUAGE_REAL,
    audioFilePath: config.VERIFICATION_FILE_D_1,
    expectedText: config.ENGLISH_PHRASE,
    phrase: config.ENGLISH_PHRASE,
    user: 'C',
    expectedMessage:'Successfully identified voice for user with userId : usr_([a-z0-9]){32} in group with groupId : grp_([a-z0-9]){32}'
  }
];

module.exports = voiceIdentificationTestCases;
