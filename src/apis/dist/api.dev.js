"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var api = function api() {
  //SBDB Close-Approach Data API (CAD) - GET
  var apiCAD = 'https://ssd-api.jpl.nasa.gov/cad.api'; //Fireball Data API (FD) - GET

  var apiFD = 'https://ssd-api.jpl.nasa.gov/fireball.api'; //Near-Earth Object Human Space Flight Accessible Targets Study API (NHATS) - Near Earth Asteroids - GET

  var apiNHATS = 'https://ssd-api.jpl.nasa.gov/nhats.api'; //Scout Data API (SD) - Near Earth Hazards - GET

  var apiSD = 'https://ssd-api.jpl.nasa.gov/scout.api'; //Metor Shower - NASA - GET

  var apiMSNASA = 'https://www.data.nasa.gov/resource/gh4g-9sfh.json'; //Space Weather Notification - NASA - GET

  var apiSWN = 'https://api.nasa.gov/DONKI/notifications'; //Lunar & Solar Eclipses - NASA

  var apiE = require('./eclipses.json');

  return {
    apiCAD: apiCAD,
    apiFD: apiFD,
    apiNHATS: apiNHATS,
    apiSD: apiSD,
    apiMSNASA: apiMSNASA,
    apiSWN: apiSWN,
    apiE: apiE
  };
};

var NASA_KEY = 'q0W8trWIeEZOKtTk2prwVmoiMbnWf0aLiYXYbe9d';
var DONKI = "?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=".concat(NASA_KEY);
console.log(api().apiSWN + DONKI);
var _default = api;
exports["default"] = _default;