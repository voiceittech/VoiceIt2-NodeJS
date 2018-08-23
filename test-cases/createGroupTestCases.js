let config = require('../utilities/test-config');
let responseCode = require('../utilities/response-code');

const createGroupTestCases = [
{
  expectedRc: responseCode.SUCCESS,
  expectedSc: 201,
  message: 'Created group with groupId : grp_([a-z0-9]){32}'
}
];

module.exports = createGroupTestCases;
