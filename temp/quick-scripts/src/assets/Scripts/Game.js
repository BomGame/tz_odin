"use strict";
cc._RF.push(module, '8d14326kORFYo697ZKQPTcG', 'Game');
// Scripts/Game.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.director.getPhysicsManager().enabled = true;
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();