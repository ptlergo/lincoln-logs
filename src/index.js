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
      if (msg === 'log') {
        const log = statement + date + timeIso + printTime;
        console.log(log);
      } else if (msg === 'error') {
        const error = statement + date + timeIso + printTime;
        console.log(log);
        console.error(error);
      } else if (msg === 'warn') {
        const warn = statement + date + timeIso + printTime;
        console.warn(warn);
    };

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

// Version Number Increaser
exports.bump = (oldVersion, UpdateVersion) => {
  let major = oldVersion.major;
  let minor = oldVersion.minor;
  let patch = oldVersion.patch;
  if (UpdateVersion) {
    if (UpdateVersion === 'major') {
      major += 1;
      minor  = 0;
      patch  = 0;
    }
    if (UpdateVersion === 'minor') {
      minor += 1;
      patch  = 0;
    }
    if (UpdateVersion === 'patch') {
      patch += 1;
    }
  } else {
    console.warn('Enter major, minor, or patch as a 2nd param');
  }
  return major + '.' + minor + '.' + patch;
};
