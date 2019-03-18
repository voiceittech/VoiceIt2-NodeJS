let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const createUserTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 201,
  message: 'Successfully expired active userTokens for user with userId : usr_([a-z0-9]){32}',
}

];
module.exports = createUserTestCases;
