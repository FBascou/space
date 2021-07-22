"use strict";

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NASA_KEY = 'q0W8trWIeEZOKtTk2prwVmoiMbnWf0aLiYXYbe9d'; // const ACCOUNT_ID = '32fd1b14-f7f6-422b-8a76-56b4d13df5b0';

var date = new Date();
var todayUpdate = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split("T")[0]; // console.log(Object.values(api()))

var DONKI = "?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=".concat(NASA_KEY);
console.log((0, _api["default"])().apiSWN + DONKI);