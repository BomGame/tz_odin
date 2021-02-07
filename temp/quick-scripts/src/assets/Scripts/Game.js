"use strict";
cc._RF.push(module, '8d14326kORFYo697ZKQPTcG', 'Game');
// Scripts/Game.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    mass: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.director.getPhysicsManager().enabled = true;
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    mass = null;
  },
  onTouchStart: function onTouchStart(event) {
    var touchLoc = event.touch.getLocation();
    var ray = cc.director.getPhysicsManager().rayCast(cc.v2(touchLoc.x - 35, touchLoc.y), cc.v2(touchLoc.x + 35, touchLoc.y), cc.RayCastType.All);

    if (ray[0] != null && mass == null && ray[0].collider.node.name == "diam") {
      mass = ray[0];
      return;
    }

    if (mass != null && ray[0] != null && ray[0].collider.node.name == "diam") {
      console.log(mass.collider.node.x - ray[0].collider.node.x + " " + mass.collider.node.y - ray[0].collider.node.y);

      if (Math.abs(mass.collider.node.x - ray[0].collider.node.x) <= 75 && Math.abs(mass.collider.node.y - ray[0].collider.node.y) <= 75) {
        var temp = mass.collider.node.color;
        mass.collider.node.color = ray[0].collider.node.color;
        ray[0].collider.node.color = temp;
        mass = null;
        ray = null;
      }
    }
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();