module.exports = {
  name: 'gestion-employer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/gestion-employer',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
