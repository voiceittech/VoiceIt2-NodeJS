let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const deleteGroupTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 200,
  expectedMessage:'Successfully deleted group with groupId : grp_([a-z0-9]){32}'
},
{
  groupId: config.FAKE_GROUP_ID,
  expectedRc: responseCode.GROUP_NOT_FOUND,
  expectedSc: 404,
  expectedMessage:'Group with groupId : ' + config.FAKE_GROUP_ID + ' not found'
}
];
module.exports = deleteGroupTestCases;
