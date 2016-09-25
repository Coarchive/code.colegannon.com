/*
TODO:
+ Permissons
+ Screen Stuff
+ Battery -
+ Stats of website
*/
var battery;
navigator.getBattery().then(function (batteryManager) {
  battery.charging = batteryManager.charging;
  battery.percent = batteryManager.level * 100;
  if (battery.charging) {
    battery.time = batteryManager.chargingTime;
  } else {
    battery.time = batteryManager.dischargingTime;
  }
  batteryManager.onlevelchange = function () {
    battery.percent = batteryManager.level * 100;
  };
  batteryManager.onchargingchange = function () {
    battery.charging = batteryManager.charging;
    if (battery.charging) {
      battery.time = batteryManager.chargingTime;
    } else {
      battery.time = batteryManager.dischargingTime;
    }
  };
  batteryManager.onchargingtimechange = batteryManager.ondischargingtimechange = function () {
    if (battery.charging) {
      battery.time = batteryManager.chargingTime;
    } else {
      battery.time = batteryManager.dischargingTime;
    }
  }
}, function (err) {
  console.error('Failed to get Battery');
  console.error(err);
});

var os = navigator.userAgent.slice(navigator.userAgent.indexOf('(')+1, navigator.userAgent.indexOf(')'));
