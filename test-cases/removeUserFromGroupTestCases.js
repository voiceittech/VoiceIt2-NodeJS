let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const removeUserFromGroupTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedExists: true,
  expectedSc: 200,
  expectedMessage: 'Successfully removed user with userId : usr_([a-z0-9]){32} from group with groupId : grp_([a-z0-9]){32}'
}
];

module.exports = removeUserFromGroupTestCases;
