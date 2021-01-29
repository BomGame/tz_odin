"use strict";
cc._RF.push(module, '2fca2I4fTFBNpG9os7aFiI3', 'SpawnScript');
// Scripts/SpawnScript.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    diamond: {
      "default": null,
      type: cc.Prefab
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    var scene = cc.director.getScene();
    var Diamond = cc.instantiate(this.diamond);
    Diamond.parent = scene;
    var node = this.node;
    Diamond.setPosition(node.x, node.y);
    Diamond.name = 'diam';
  } // update (dt) {},

});

cc._RF.pop();