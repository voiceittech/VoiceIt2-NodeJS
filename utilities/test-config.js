const TestConfig = {
  CONTENT_LANGUAGE_REAL : 'en-US',
  FAKE_USER_ID: 'usr_asdsadsadsa',
  FAKE_GROUP_ID: 'grp_asdsadsadsa',
  S3_FILES_URL:'https://s3.amazonaws.com/voiceit-api2-testing-files/',
  ENROLLMENT_FILE_FACE_AND_VOICE: 'test-data/enrollmentArmaanMyFaceAndVoice.m4a',
  ENROLLMENT_FILE_ARMAAN_1 : 'test-data/enrollmentArmaan1.wav',
  ENROLLMENT_FILE_ARMAAN_2 : 'test-data/enrollmentArmaan2.wav',
  ENROLLMENT_FILE_ARMAAN_3 : 'test-data/enrollmentArmaan3.wav',
  VERIFICATION_FILE_ARMAAN_1 : 'test-data/verificationArmaan1.wav',
  ENROLLMENT_FILE_STEPHEN_1 : 'test-data/enrollmentStephen1.wav',
  ENROLLMENT_FILE_STEPHEN_2 : 'test-data/enrollmentStephen2.wav',
  ENROLLMENT_FILE_STEPHEN_3 : 'test-data/enrollmentStephen3.wav',
  VIDEO_ENROLLMENT_FILE_ARMAAN_1 : 'test-data/videoEnrollmentArmaan1.mov',
  VIDEO_ENROLLMENT_FILE_ARMAAN_2 : 'test-data/videoEnrollmentArmaan2.mov',
  VIDEO_ENROLLMENT_FILE_ARMAAN_3 : 'test-data/videoEnrollmentArmaan3.mov',
  VIDEO_VERIFICATION_FILE_ARMAAN_1 : 'test-data/videoVerificationArmaan1.mov',
  VIDEO_ENROLLMENT_FILE_STEPHEN_1 : 'test-data/videoEnrollmentStephen1.mov',
  VIDEO_ENROLLMENT_FILE_STEPHEN_2 : 'test-data/videoEnrollmentStephen2.mov',
  VIDEO_ENROLLMENT_FILE_STEPHEN_3 : 'test-data/videoEnrollmentStephen3.mov',
  FACE_ENROLLMENT_FILE_ARMAAN_1 : 'test-data/faceEnrollmentArmaan1.mp4',
  FACE_ENROLLMENT_FILE_ARMAAN_2 : 'test-data/faceEnrollmentArmaan2.mp4',
  FACE_ENROLLMENT_FILE_ARMAAN_3 : 'test-data/faceEnrollmentArmaan3.mp4',
  FACE_VERIFICATION_FILE_ARMAAN_1 : 'test-data/faceVerificationArmaan1.mp4',
  FACE_VERIFICATION_FILE_STEPHEN_1 : 'test-data/faceVerificationStephen1.mp4',
  ENGLISH_PHRASE : 'Never forget tomorrow is a new day',
  getURL:(filePath)=>{
    return `${TestConfig.S3_FILES_URL}${filePath}`;
  }
}
module.exports = TestConfig;
