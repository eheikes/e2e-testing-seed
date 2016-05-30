# Seed Project for End-to-End Testing

This is a starter project for writing and running end-to-end (functional) tests, using [Nightwatch.js](http://nightwatchjs.org/) and (optionally) [Sauce Labs](https://saucelabs.com/).

## Getting Started

1. This project uses [Node and npm](https://nodejs.org/), so you'll need that installed on your machine first.
1. The default configuration uses Chrome for testing, so you'll need that installed as well.
1. [Clone](https://help.github.com/articles/cloning-a-repository/) or [download](https://github.com/eheikes/e2e-testing-seed/archive/master.zip) this repository onto your local machine.
1. Open a terminal in the cloned folder and run `npm install`.

## Running Tests

Type `npm test` on the command line to run the tests.

## Writing Tests

Check the Nightwatch website for a [full reference](http://nightwatchjs.org/api).

## Configuring Nightwatch

Check the Nightwatch website for a [developer guide](http://nightwatchjs.org/guide).

## Using Sauce Labs

To run your tests under Sauce Labs:

1. Sign up for a free trial account at [saucelabs.com](https://saucelabs.com).
2. Make a note of your SL username and access key (which can be found on the [User Profile -> User Settings](https://saucelabs.com/beta/user-settings) page).
3. Store your username and access key on the command line:

  ```
  export SAUCE_USERNAME=your_username_here
  export SAUCE_ACCESS_KEY=your-access-key-here
  ```

4. Run your tests under Sauce Labs by specifying the `saucelabs` environment:

  ```
  env=saucelabs npm test
  ```

You can modify the `saucelabs` environment in the Nightwatch configuration file.

## MIT License

Copyright (c) 2016 Eric Heikes.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
