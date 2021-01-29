
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/SpawnScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3Bhd25TY3JpcHQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkaWFtb25kIiwidHlwZSIsIlByZWZhYiIsInN0YXJ0Iiwic2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiRGlhbW9uZCIsImluc3RhbnRpYXRlIiwicGFyZW50Iiwibm9kZSIsInNldFBvc2l0aW9uIiwieCIsInkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFFO0FBQ0wsaUJBQVMsSUFESjtBQUVMQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSjtBQURELEdBSFA7QUFVTDtBQUVBO0FBRUFDLEVBQUFBLEtBZEssbUJBY0k7QUFDTCxRQUFJQyxLQUFLLEdBQUdSLEVBQUUsQ0FBQ1MsUUFBSCxDQUFZQyxRQUFaLEVBQVo7QUFDQSxRQUFJQyxPQUFPLEdBQUdYLEVBQUUsQ0FBQ1ksV0FBSCxDQUFlLEtBQUtSLE9BQXBCLENBQWQ7QUFDQU8sSUFBQUEsT0FBTyxDQUFDRSxNQUFSLEdBQWlCTCxLQUFqQjtBQUNBLFFBQUlNLElBQUksR0FBRyxLQUFLQSxJQUFoQjtBQUNBSCxJQUFBQSxPQUFPLENBQUNJLFdBQVIsQ0FBb0JELElBQUksQ0FBQ0UsQ0FBekIsRUFBNEJGLElBQUksQ0FBQ0csQ0FBakM7QUFDQU4sSUFBQUEsT0FBTyxDQUFDTyxJQUFSLEdBQWEsTUFBYjtBQUNILEdBckJJLENBdUJMOztBQXZCSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGRpYW1vbmQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdmFyIHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICB2YXIgRGlhbW9uZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGlhbW9uZCk7XHJcbiAgICAgICAgRGlhbW9uZC5wYXJlbnQgPSBzY2VuZTtcclxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMubm9kZTtcclxuICAgICAgICBEaWFtb25kLnNldFBvc2l0aW9uKG5vZGUueCwgbm9kZS55KTtcclxuICAgICAgICBEaWFtb25kLm5hbWU9J2RpYW0nO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==