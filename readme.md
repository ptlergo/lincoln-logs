[ ![Codeship Status for ptlergo/lincoln-logs](https://codeship.com/projects/b830ccd0-4a7b-0134-67f7-62ab521e7ba6/status?branch=master)](https://codeship.com/projects/169666)
# lincoln-logs
A honest debugging tool.

## Install
Install all 'lincoln-logs' as a dev-dependency
```
npm install lincoln-logs --save-dev
```

## Usage

Require the tool package.
``` javascript
const util = require('lincoln-logs');
```

### .debug
Call the method 'debug' that accepts an object with two keys 'msg', and 'info'.
*developer can add additional keys if needed but must configure in tool file*
``` javascript
util.debug({msg: 'message', info: object })
```

## Run
lincoln-logs runs only when the Environmental Variable 'DEBUG' is on.
```
DEBUG=true
```

## Endpoints

Log Message Displays if hit:
```
statement + date + timeIso + printTime
Log Hit
Aug 25,2016 11:18pm
```

Error Message Displays if hit:
```
statement + date + timeIso + printTime
Error!!
Aug 25,2016 11:18pm
```

Warn Message Displays if hit:
```
statement + date + timeIso + printTime
Warning!!
Aug 25,2016 11:18pm
```

Fail Message Displays if hit:
```
statement + date + timeIso + printTime
Fail
Aug 25,2016 11:18pm
```

> visit my [app-store](https://github.com/ptlergo/App-Store) project to see it in action.  
