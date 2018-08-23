let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const checkUserExistsTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedExists: true,
  expectedSc: 200,
  message:'User with userId : usr_([a-z0-9]){32} exists'
},
{
  userId: config.FAKE_USER_ID,
  expectedExists: false,
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  message:'User with userId : usr_([a-z0-9]){32} does not exist'
}
];

module.exports = checkUserExistsTestCases;
