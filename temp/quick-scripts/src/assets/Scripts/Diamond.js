"use strict";
cc._RF.push(module, 'e7832HtvipMvYuALRfKsNxg', 'Diamond');
// Scripts/Diamond.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    //убирание рядов
    var left = cc.director.getPhysicsManager().rayCast(cc.v2(selfCollider.node.x, selfCollider.node.y), cc.v2(selfCollider.node.x - 75, selfCollider.node.y), cc.RayCastType.All);
    var right = cc.director.getPhysicsManager().rayCast(cc.v2(selfCollider.node.x, selfCollider.node.y), cc.v2(selfCollider.node.x + 75, selfCollider.node.y), cc.RayCastType.All);

    if (left.length == 1 && right.length == 1) {
      //console.log("ttt");
      if (left[0].collider.node.color == right[0].collider.node.color && right[0].collider.node.color == selfCollider.node.color) {
        console.log("test");
      }
    }
  },
  onEndContact: function onEndContact(contact, selfCollider, otherCollider) {},
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
    //горизонт
    var left = cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y), cc.v2(this.node.x - 75, this.node.y), cc.RayCastType.All);
    var right = cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y), cc.v2(this.node.x + 75, this.node.y), cc.RayCastType.All);

    if (left.length == 1 && right.length == 1 && this.node._active) {
      if (left[0].collider.node.color._val == right[0].collider.node.color._val && right[0].collider.node.color._val == this.node.color._val && left[0].collider.node.name == right[0].collider.node.name && right[0].collider.node.name == this.node.name) {
        this.node.runAction(cc.moveTo(0, 900, 0));
        left[0].collider.node.runAction(cc.moveTo(0, 900, 0));
        ;
        right[0].collider.node.runAction(cc.moveTo(0, 900, 0));
        ;
      }
    } //вертикаль


    var down = cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y), cc.v2(this.node.x, this.node.y - 75), cc.RayCastType.All);
    var up = cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y), cc.v2(this.node.x, this.node.y + 75), cc.RayCastType.All);

    if (down.length == 1 && up.length == 1 && this.node._active) {
      if (down[0].collider.node.color._val == up[0].collider.node.color._val && up[0].collider.node.color._val == this.node.color._val && down[0].collider.node.name == up[0].collider.node.name && up[0].collider.node.name == this.node.name) {
        this.node.runAction(cc.moveTo(0, 900, 0));
        down[0].collider.node.runAction(cc.moveTo(0, 900, 0));
        ;
        up[0].collider.node.runAction(cc.moveTo(0, 900, 0));
        ;
      }
    } //диагональное падение


    var border;
    var test = cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y), cc.v2(this.node.x, this.node.y - 75), cc.RayCastType.All);

    if (test.length > 0) {
      var results = cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y), cc.v2(this.node.x - 75, this.node.y - 75), cc.RayCastType.All);
      border = cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y), cc.v2(this.node.x - 75, this.node.y), cc.RayCastType.All);

      if (results.length == 0 && test[0].collider.node.name == "diam" && border.length == 0) {
        var x = this.node.x - 75.0;
        var y = this.node.y - 75.0;
        this.node.x = x;
        this.node.y = y;
      }

      var results = cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y), cc.v2(this.node.x + 75, this.node.y - 75), cc.RayCastType.All);
      border = cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y), cc.v2(this.node.x + 75, this.node.y), cc.RayCastType.All);

      if (results.length == 0 && test[0].collider.node.name == "diam" && border.length == 0) {
        var x = this.node.x + 75.0;
        var y = this.node.y - 75.0;
        this.node.x = x;
        this.node.y = y;
      }
    }
  }
});

cc._RF.pop();