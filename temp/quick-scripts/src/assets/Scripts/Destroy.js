"use strict";
cc._RF.push(module, '6bb17CTL41DcIPV17TFLhyM', 'Destroy');
// Scripts/Destroy.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    otherCollider.node.destroy();
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();