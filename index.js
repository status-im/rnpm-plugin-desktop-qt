module.exports = [{
  func: require('./src/desktop-qt'),
  description: 'Generate React Native Desktop template project',
  name: 'desktop-qt [name]',
  options: [{
    command: '--verbose',
    description: 'Enables logging.',
    default: false,
  }],
},
];
