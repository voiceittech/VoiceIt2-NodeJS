let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const checkGroupExistsTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedExists: true,
  expectedSc: 200,
  message:'Group with groupId : grp_([a-z0-9]){32} exists'
},
{
  groupId: config.FAKE_GROUP_ID,
  expectedExists: false,
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  message:'Group with groupId : grp_([a-z0-9]){32} does not exist'
}
];

module.exports = checkGroupExistsTestCases;
