import Logger from 'js-logger';
// import Api from './Api';

function init() {
  Logger.useDefaults({
    defaultLevel: Logger.INFO,
    formatter: function (messages, context) {
       messages.unshift(new Date().toUTCString())
    }
  });
  let consoleHandler = Logger.createDefaultHandler();
  let myHandler = function (messages, context) {
    // Api.log({ message: messages[0] });
  }
  Logger.setHandler(function (messages, context) {
    consoleHandler(messages, context);
    myHandler(messages, context);
  })
}

export default {
  init
}
