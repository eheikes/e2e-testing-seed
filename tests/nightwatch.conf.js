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
    },
    saucelabs: {
      launch_url: 'http://example.com/',
      filter: '*.spec.js',
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium_host: 'ondemand.saucelabs.com',
      selenium_port: 80,
      username: '${SAUCE_USERNAME}',
      access_key: '${SAUCE_ACCESS_KEY}',
      use_ssl: false,
      disable_colors: true,
      silent: true,
      output: true,
      screenshots: {
        enabled: false,
        on_failure: true,
        path: ''
      },
      selenium: {
        start_process: false
      }
    }
  }
};
