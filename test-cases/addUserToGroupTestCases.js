let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const addUserToGroupTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedExists: true,
  expectedSc: 200,
  expectedMessage:'Successfully added user with userId : usr_([a-z0-9]){32} to group with groupId : grp_([a-z0-9]){32}'
}
];

module.exports = addUserToGroupTestCases;
