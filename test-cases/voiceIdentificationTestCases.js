let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const voiceIdentificationTestCases = [
  {
    expectedRc: responseCode.SUCCESS,
    expectedSc: 200,
    contentLanguage: config.CONTENT_LANGUAGE_REAL,
    audioFilePath: config.ENROLLMENT_FILE_ARMAAN_1,
    expectedText: config.ENGLISH_PHRASE,
    user: 'Armaan',
    expectedMessage:'Successfully identified voice for user with userId : usr_([a-z0-9]){32} in group with groupId : grp_([a-z0-9]){32}'
  },
  {
    expectedRc: responseCode.SUCCESS,
    expectedSc: 200,
    contentLanguage: config.CONTENT_LANGUAGE_REAL,
    audioFilePath: config.ENROLLMENT_FILE_STEPHEN_1,
    expectedText: config.ENGLISH_PHRASE,
    user: 'Stephen',
    expectedMessage:'Successfully identified voice for user with userId : usr_([a-z0-9]){32} in group with groupId : grp_([a-z0-9]){32}'
  }
];

module.exports = voiceIdentificationTestCases;
