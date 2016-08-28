/* eslint prefer-template: 0 */
const colors = require('colors');
const logSymbols = require('log-symbols');

// Theme colors for message types
colors.setTheme({
  prompt: 'grey',
  help: 'cyan',
  warn: 'yellow',
  fail: 'red',
  win: 'green',
});

// Time formatting
const date = new Date();
const timeIso = date.toISOString();
const printTime = '[ ' + timeIso + ' ]';

// Debug method
exports.debug = (obj) => {
  const msg = '[ ' + obj.msg + ']';
  const info = obj.info;
  const success = 'finished successfully';
  const statement = obj.msg + obj.info + '\n';

  // DISPLAY only when DEBUG=true
  if (process.env.DEBUG) {
    if (obj.info === 'err' || obj.info === 'undefined') {
      throw console.log(logSymbols.fail, 'ERROR!');
    }
    // Display formatted debug log
    console.log('\n', printTime.prompt,
    '\n', msg.help, '\n ', info, '\n',
     '[ '.win, logSymbols.success, success.win, logSymbols.success, ' ]\n'.win);
  }

  return obj;
};
// For the bumper functionally
exports.lincolnLogsBumper = (version, bump) => {
  let major;
  let minor;
  let patch;

  console.log(version);
  console.log(bump);

  const bumper = [];
  for (let i = 0; i < version.length; i++) {
    if (version[i] === '.') {
      bumper.push(i);
    }
  }

  major = version.substring(bumper[0],
  bumper[0] - version.length);

  minor = version.substring(bumper[0] + 1,
  bumper[1]);

  patch = version.substring(bumper[1] + 1,
  version.length);

  if (bump === 'major') {
    // If the user calls for major it will bump up it one.
    major++;
    minor = 0;
    patch = 0;
  } else if (bump === 'minor') {
    // If the user calls for minor it will bump up it one.
    minor++;
    patch = 0;
  } else if (bump === 'patch') {
    // If the user calls for patch it will bump up it one.
    patch++;
  } else {
    console.log('Nothing Was Updated');
  }




  version = major + '.' + minor + '.' + patch;
  console.log('Updated version to: ' + version);
};
