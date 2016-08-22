[ ![Codeship Status for ptlergo/lincoln-logs](https://codeship.com/projects/b830ccd0-4a7b-0134-67f7-62ab521e7ba6/status?branch=master)](https://codeship.com/projects/169666)
# lincoln-logs

A simple debug tool to display debug messages where needed.
Perfect for testing models, and routes.

## Install

```
npm install lincoln-logs --save-dev
```

## Usage
Create a `log` folder in your project with the file `lincoln.log`. This will be to save all your debug messages.
```
/log/lincoln.log
```
Require the tool package.
``` javascript
const util = require('lincoln-logs');
```

### .debug
user can decide what the output message should be. A 2nd parameter is available for data output object.
``` javascript
util.debug({msg: 'message', info: object })
```

## Run
lincoln-logs runs only when the Environmental Variable 'DEBUG' is on.
```
DEBUG=true
```

> visit my [app-store](https://github.com/ptlergo/App-Store) project to see it in action.  
