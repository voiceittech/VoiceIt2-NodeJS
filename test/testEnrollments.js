let assert = require('assert');
let config = require('../utilities/test-config');
let voiceit = require('../index');
let utilities = require('../utilities/utilities');
let responseCode = require('../utilities/response-code');
let createVoiceEnrollmentTestCases = require('../test-cases/createVoiceEnrollmentTestCases');
let createVoiceEnrollmentByUrlTestCases = require('../test-cases/createVoiceEnrollmentByUrlTestCases');
let createFaceEnrollmentTestCases = require('../test-cases/createFaceEnrollmentTestCases');
let createFaceEnrollmentByUrlTestCases = require('../test-cases/createFaceEnrollmentByUrlTestCases');
let createVideoEnrollmentTestCases = require('../test-cases/createVideoEnrollmentTestCases');
let createVideoEnrollmentByUrlTestCases = require('../test-cases/createVideoEnrollmentByUrlTestCases');
let getEnrollmentsTestCases = require('../test-cases/getEnrollmentsTestCases');
let getFaceEnrollmentsTestCases = require('../test-cases/getFaceEnrollmentsTestCases');
let deleteEnrollmentTestCases = require('../test-cases/deleteEnrollmentTestCases');
let deleteFaceEnrollmentTestCases = require('../test-cases/deleteFaceEnrollmentTestCases');
let myVoiceIt = new voiceit(process.env.VIAPIKEY, process.env.VIAPITOKEN);
let MAX_TIMEOUT =   100000;
let SETUP_TIMEOUT = 100000;

const enrollments  = {
  currentUserId:'',
  currentEnrollmentIds:[],
  currentVoiceEnrollmentIds:[],
  currentVideoEnrollmentIds:[],
  currentFaceEnrollmentIds:[],
  setup:(next)=>{
    myVoiceIt.createUser((jsonResponse)=>{
      if(jsonResponse.responseCode == responseCode.SUCCESS){
        enrollments.currentUserId = jsonResponse.userId;
        console.log("Started Node Test!", jsonResponse.message);
        next();
      } else {
        console.log("Failed to create user");
      }
    });
  },
  cleanup:()=>{
    myVoiceIt.deleteUser({ userId : enrollments.currentUserId },(jsonResponse)=>{
      console.log("Done!", jsonResponse.message);
    });
  }
};

describe('Testing All Enrollment API Calls', function(){
  before(function(done){
    this.timeout(SETUP_TIMEOUT);
    enrollments.setup(done);
  });

  after(function(){
    this.timeout(MAX_TIMEOUT);
    enrollments.cleanup();
  });

  describe('Test Get All Enrollments for User', function(){
      getEnrollmentsTestCases.forEach(function(testCase){
        it(`should return ${testCase.expectedRc}`, function(done){
          this.timeout(MAX_TIMEOUT);
          let itThis = this;
          myVoiceIt.getAllEnrollmentsForUser(
            {
              userId : testCase.userId ? testCase.userId : enrollments.currentUserId
            },(jsonResponse) => {
              utilities.printIfError(testCase.expectedRc, jsonResponse);
              assert.equal(jsonResponse.responseCode, testCase.expectedRc);
              assert.equal(jsonResponse.status, testCase.expectedSc);
              assert.ok(utilities.compare(jsonResponse.message, testCase.expectedMessage));
              done();
            });
        });
      });
  });

  describe('Test Get Face Enrollments for User', function(){
      getFaceEnrollmentsTestCases.forEach(function(testCase){
        it(`should return ${testCase.expectedRc}`, function(done){
          this.timeout(MAX_TIMEOUT);
          let itThis = this;
          myVoiceIt.getFaceEnrollmentsForUser(
            {
              userId : testCase.userId ? testCase.userId : enrollments.currentUserId
            },(jsonResponse) => {
              utilities.printIfError(testCase.expectedRc, jsonResponse);
              assert.equal(jsonResponse.responseCode, testCase.expectedRc);
              assert.equal(jsonResponse.status, testCase.expectedSc);
              assert.ok(utilities.compare(jsonResponse.message, testCase.expectedMessage));
              done();
            });
        });
      });
  });

  describe('Test Create Voice Enrollment', function(){
      createVoiceEnrollmentTestCases.forEach(function(testCase){
        it(`should return ${testCase.expectedRc}`, function(done){
          this.timeout(MAX_TIMEOUT);
          let itThis = this;
          myVoiceIt.createVoiceEnrollment(
            {
              userId : testCase.userId ? testCase.userId : enrollments.currentUserId,
              contentLanguage : testCase.contentLanguage,
              audioFilePath : testCase.audioFilePath
            },(jsonResponse) => {
              utilities.printIfError(testCase.expectedRc, jsonResponse);
              if(jsonResponse.responseCode == responseCode.SUCCESS){
                enrollments.currentVoiceEnrollmentIds.push(jsonResponse.id);
                assert.equal(utilities.low(jsonResponse.text), utilities.low(testCase.expectedText));
              }
              assert.equal(jsonResponse.responseCode, testCase.expectedRc);
              assert.equal(jsonResponse.status, testCase.expectedSc);
              assert.ok(utilities.compare(jsonResponse.message, testCase.expectedMessage));
              done();
            });
        });
      });
  });

  describe('Test Create Voice Enrollment by URL', function(){
      createVoiceEnrollmentByUrlTestCases.forEach(function(testCase){
        it(`should return ${testCase.expectedRc}`, function(done){
          this.timeout(MAX_TIMEOUT);
          let itThis = this;
          myVoiceIt.createVoiceEnrollmentByUrl(
            {
              userId : testCase.userId ? testCase.userId : enrollments.currentUserId,
              contentLanguage : testCase.contentLanguage,
              audioFileURL : testCase.audioFileURL
            },(jsonResponse) => {
              utilities.printIfError(testCase.expectedRc, jsonResponse);
              if(jsonResponse.responseCode == responseCode.SUCCESS){
                enrollments.currentVoiceEnrollmentIds.push(jsonResponse.id);
                enrollments.currentEnrollmentIds.push(jsonResponse.id);
                assert.equal(utilities.low(jsonResponse.text), utilities.low(testCase.expectedText));
              }
              assert.equal(jsonResponse.responseCode, testCase.expectedRc);
              assert.equal(jsonResponse.status, testCase.expectedSc);
              assert.ok(utilities.compare(jsonResponse.message, testCase.expectedMessage));
              done();
            });
        });
      });
  });

  describe('Test Delete Enrollment for User', function(){
      deleteEnrollmentTestCases.forEach(function(testCase){
        it(`should return ${testCase.expectedRc}`, function(done){
          this.timeout(MAX_TIMEOUT);
          let itThis = this;
          myVoiceIt.deleteEnrollmentForUser(
            {
              userId : testCase.userId ? testCase.userId : enrollments.currentUserId,
              enrollmentId : (testCase.enrollmentId == null) ? enrollments.currentEnrollmentIds[0] : testCase.enrollmentId
            },(jsonResponse) => {
              utilities.printIfError(testCase.expectedRc, jsonResponse);
              assert.equal(jsonResponse.status, testCase.expectedSc);
              assert.ok(utilities.compare(jsonResponse.message, testCase.expectedMessage));
              done();
            });
        });
      });
  });

  describe('Test Create Face Enrollment', function(){
      createFaceEnrollmentTestCases.forEach(function(testCase){
        it(`should return ${testCase.expectedRc}`, function(done){
          this.timeout(MAX_TIMEOUT);
          let itThis = this;
          myVoiceIt.createFaceEnrollment(
            {
              userId : testCase.userId ? testCase.userId : enrollments.currentUserId,
              videoFilePath : testCase.videoFilePath,
              doBlinkDetection : false
            },(jsonResponse) => {
              utilities.printIfError(testCase.expectedRc, jsonResponse);
              if(jsonResponse.responseCode == responseCode.SUCCESS){
                enrollments.currentFaceEnrollmentIds.push(jsonResponse.faceEnrollmentId);
              }
              assert.equal(jsonResponse.responseCode, testCase.expectedRc);
              assert.equal(jsonResponse.status, testCase.expectedSc);
              assert.ok(utilities.compare(jsonResponse.message, testCase.expectedMessage));
              done();
            });
        });
      });
  });

  describe('Test Create Face Enrollment By URL', function(){
      createFaceEnrollmentByUrlTestCases.forEach(function(testCase){
        it(`should return ${testCase.expectedRc}`, function(done){
          this.timeout(MAX_TIMEOUT);
          let itThis = this;
          myVoiceIt.createFaceEnrollmentByUrl(
            {
              userId : testCase.userId ? testCase.userId : enrollments.currentUserId,
              videoFileURL : testCase.videoFileURL,
              doBlinkDetection : false
            },(jsonResponse) => {
              utilities.printIfError(testCase.expectedRc, jsonResponse);
              if(jsonResponse.responseCode == responseCode.SUCCESS){
                enrollments.currentFaceEnrollmentIds.push(jsonResponse.faceEnrollmentId);
              }
              assert.equal(jsonResponse.responseCode, testCase.expectedRc);
              assert.equal(jsonResponse.status, testCase.expectedSc);
              assert.ok(utilities.compare(jsonResponse.message, testCase.expectedMessage));
              done();
            });
        });
      });
  });

  describe('Test Delete Face Enrollment', function(){
      deleteFaceEnrollmentTestCases.forEach(function(testCase){
        it(`should return ${testCase.expectedRc}`, function(done){
          this.timeout(MAX_TIMEOUT);
          let itThis = this;
          myVoiceIt.deleteFaceEnrollment(
            {
              userId : testCase.userId ? testCase.userId : enrollments.currentUserId,
              faceEnrollmentId : (testCase.faceEnrollmentId == null) ? enrollments.currentFaceEnrollmentIds[0] : testCase.faceEnrollmentId
            },(jsonResponse) => {
              utilities.printIfError(testCase.expectedRc, jsonResponse);
              assert.equal(jsonResponse.status, testCase.expectedSc);
              assert.ok(utilities.compare(jsonResponse.message, testCase.expectedMessage));
              done();
            });
        });
      });
  });

  describe('Test Create Video Enrollment', function(){
      createVideoEnrollmentTestCases.forEach(function(testCase){
        it(`should return ${testCase.expectedRc}`, function(done){
          this.timeout(MAX_TIMEOUT);
          let itThis = this;
          myVoiceIt.createVideoEnrollment(
            {
              userId : testCase.userId ? testCase.userId : enrollments.currentUserId,
              videoFilePath : testCase.videoFilePath,
              contentLanguage : testCase.contentLanguage
            },(jsonResponse) => {
              utilities.printIfError(testCase.expectedRc, jsonResponse);
              if(jsonResponse.responseCode == responseCode.SUCCESS){
                enrollments.currentVideoEnrollmentIds.push(jsonResponse.id);
                assert.equal(utilities.low(jsonResponse.text), utilities.low(testCase.expectedText));
              }
              assert.equal(jsonResponse.responseCode, testCase.expectedRc);
              assert.equal(jsonResponse.status, testCase.expectedSc);
              assert.ok(utilities.compare(jsonResponse.message, testCase.expectedMessage));
              done();
            });
        });
      });
  });

  describe('Test Create Video Enrollment by URL', function(){
      createVideoEnrollmentByUrlTestCases.forEach(function(testCase){
        it(`should return ${testCase.expectedRc}`, function(done){
          this.timeout(MAX_TIMEOUT);
          let itThis = this;
          myVoiceIt.createVideoEnrollmentByUrl(
            {
              userId : testCase.userId ? testCase.userId : enrollments.currentUserId,
              videoFileURL : testCase.videoFileURL,
              contentLanguage : testCase.contentLanguage
            },(jsonResponse) => {
              utilities.printIfError(testCase.expectedRc, jsonResponse);
              if(jsonResponse.responseCode == responseCode.SUCCESS){
                enrollments.currentVideoEnrollmentIds.push(jsonResponse.id);
                assert.equal(utilities.low(jsonResponse.text), utilities.low(testCase.expectedText));
              }
              assert.equal(jsonResponse.responseCode, testCase.expectedRc);
              assert.equal(jsonResponse.status, testCase.expectedSc);
              assert.ok(utilities.compare(jsonResponse.message, testCase.expectedMessage));
              done();
            });
        });
      });
  });
});
