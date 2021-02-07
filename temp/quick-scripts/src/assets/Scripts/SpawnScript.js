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
    },
    isSpawn: boolean = true
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.director.getCollisionManager().enabled = true;
    isSpawn = true;
  },
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    isSpawn = false; //otherCollider.body.linearVelocity=cc.v2(0,-30);
  },
  onEndContact: function onEndContact(contact, selfCollider, otherCollider) {
    var results = cc.director.getPhysicsManager().rayCast(cc.v2(selfCollider.node.x, selfCollider.node.y - 40), cc.v2(selfCollider.node.x, selfCollider.node.y + 40), cc.RayCastType.All);

    if (results.length == 1) {
      var scene = cc.director.getScene();
      var Diamond = cc.instantiate(this.diamond);
      Diamond.parent = scene;
      Diamond.setPosition(selfCollider.node.x, selfCollider.node.y);
      Diamond.name = 'diam';
      var color = Math.floor(Math.random() * 5);

      switch (color) {
        case 0:
          Diamond.color = cc.Color.CYAN;
          break;

        case 1:
          Diamond.color = cc.Color.RED;
          break;

        case 2:
          Diamond.color = cc.Color.ORANGE;
          break;

        case 3:
          Diamond.color = cc.Color.GREEN;
          break;

        case 4:
          Diamond.color = cc.Color.WHITE;
          break;
      }
    }
  },
  start: function start() {},
  update: function update(dt) {
    if (isSpawn) {
      var scene = cc.director.getScene();
      var Diamond = cc.instantiate(this.diamond);
      Diamond.parent = scene;
      var node = this.node;
      Diamond.setPosition(node.x, node.y);
      Diamond.name = 'diam';
      var color = Math.floor(Math.random() * 5);

      switch (color) {
        case 0:
          Diamond.color = cc.Color.CYAN;
          break;

        case 1:
          Diamond.color = cc.Color.RED;
          break;

        case 2:
          Diamond.color = cc.Color.ORANGE;
          break;

        case 3:
          Diamond.color = cc.Color.GREEN;
          break;

        case 4:
          Diamond.color = cc.Color.WHITE;
          break;
      }
    }
  }
});

cc._RF.pop();