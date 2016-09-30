/*
TODO:
+ Permissons
+ Screen Stuff
+ Battery - Done
+ Stats of website
+ OS - Done
+ Geolocation
+ Notifications
+ Online
+ Type of connection
+ Language
+ Platform
+ Cookies
+ Do not track
+ Vendor
+ Plugins
*/
var battery = {};
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
  };
}, function (err) {
  console.error('Failed to get Battery');
  console.error(err);
});

var os = navigator.userAgent.slice(navigator.userAgent.indexOf('(')+1, navigator.userAgent.indexOf(')'));

var theScreen = {
  avail: {
   top: screen.availTop,
   left: screen.availLeft,
   height: screen.availHeight,
   width: screen.availWidth
  },
  dims: {
    top: 0,
    left: 0,
    height: screen.height,
    width: screen.width
  },
  orient: screen.orientation,
  turnOff: function () {
    if (screen.mozEnabled) {
      screen.mozEnabled = false;
    }
    if (screen.webkitEnabled) {
      screen.webkitEnabled = false;
    }
    if (screen.enabled) {
      screen.enabled = false;
    }
  },
  canTurnOff: function () {
    return typeof (screen.enabled || screen.mozEnabled || screen.webkitEnabled) !== 'undefined';
  },
  depth: {
    pixel: screen.pixelDepth,
    color: screen.colorDepth
  }
};

var permissions = {};

navigator.permissions;
/*
Permissions:
+ geolocation
+ notifications
+ push
+ midi
*/
