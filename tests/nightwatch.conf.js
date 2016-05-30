module.exports = {
  src_folders: 'tests',
  output_folder: false,
  test_settings: {
    default: {
      launch_url: 'http://example.com/',
      filter: '*.spec.js',
      screenshots: {
        enabled: false,
        path: ''
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
};
