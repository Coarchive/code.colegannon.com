/*jshint esversion: 6 */
/*
TODO:
+ Permissons - Done
+ Screen Stuff
+ Battery - Done
+ Stats of website
+ OS - Done
+ Geolocation
+ Notifications
+ Online - Done
+ Type of connection - Done
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
function permission(name, uvo) {
  navigator.permissions.query({name: name, userVisibleOnly:uvo}).then(function (result) {
    switch (result.state) {
      case "granted":
        permissions[name] = true;
        break;
      case "denied":
        permissions[name] = false;
        break;
      case "prompt":
        permissions[name] = null;
        break;
      default:
        console.error("Unknown state " + result.state);
        break;
    }
  }, function (err) {
    console.error("Failed to get permission '" + name + "'.");
    console.error(err);
  });
}

//Permissions:
//  + geolocation
permission("geolocation");
//  + notifications
permission('notifications');
//  + push
permission('push', true);
//  + midi
permission('midi');

var connection={
    onLine : navigator.onLine,
    type : navigator.connection.type,
};
navigator.connection.onchange = function () {
  connection.onLine = navigator.onLine;
};
navigator.connection.ontypechange = function () {
  connection.type = navigator.connection.type;
};
var cookies=navigator.cookieEnabled;
