module.exports = {
  name: 'gestion-stock',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/gestion-stock',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
