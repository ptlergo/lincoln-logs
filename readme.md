# lincoln-logs
A honest debugging tool.

## Install
Install all 'lincoln-logs' as a dev-dependency
```
npm install lincoln-logs --save-dev
```

## Usage
Create a `log` folder in your project with the file `lincoln.log`. This will be to save all your debug messages.
```
/logs/lincoln.log
```

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

> visit my [app-store](https://github.com/ptlergo/App-Store) project to see it in action.  
