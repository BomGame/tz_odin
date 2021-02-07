
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm1hc3MiLCJOb2RlIiwib25Mb2FkIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImVuYWJsZWQiLCJub2RlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIm9uVG91Y2hTdGFydCIsImV2ZW50IiwidG91Y2hMb2MiLCJ0b3VjaCIsImdldExvY2F0aW9uIiwicmF5IiwicmF5Q2FzdCIsInYyIiwieCIsInkiLCJSYXlDYXN0VHlwZSIsIkFsbCIsImNvbGxpZGVyIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJNYXRoIiwiYWJzIiwidGVtcCIsImNvbG9yIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUVKLEVBQUUsQ0FBQ0s7QUFERCxHQUhQO0FBT0w7QUFFQUMsRUFBQUEsTUFUSyxvQkFTSztBQUNOTixJQUFBQSxFQUFFLENBQUNPLFFBQUgsQ0FBWUMsaUJBQVosR0FBZ0NDLE9BQWhDLEdBQTBDLElBQTFDO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFYLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRTyxTQUFSLENBQWtCQyxXQUEvQixFQUE0QyxLQUFLQyxZQUFqRCxFQUErRCxJQUEvRDtBQUNBVixJQUFBQSxJQUFJLEdBQUMsSUFBTDtBQUNILEdBYkk7QUFlTFUsRUFBQUEsWUFmSyx3QkFlU0MsS0FmVCxFQWVnQjtBQUNqQixRQUFJQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxXQUFaLEVBQWY7QUFDQSxRQUFJQyxHQUFHLEdBQUNuQixFQUFFLENBQUNPLFFBQUgsQ0FBWUMsaUJBQVosR0FBZ0NZLE9BQWhDLENBQXdDcEIsRUFBRSxDQUFDcUIsRUFBSCxDQUFNTCxRQUFRLENBQUNNLENBQVQsR0FBVyxFQUFqQixFQUFxQk4sUUFBUSxDQUFDTyxDQUE5QixDQUF4QyxFQUEwRXZCLEVBQUUsQ0FBQ3FCLEVBQUgsQ0FBTUwsUUFBUSxDQUFDTSxDQUFULEdBQVcsRUFBakIsRUFBcUJOLFFBQVEsQ0FBQ08sQ0FBOUIsQ0FBMUUsRUFBMkd2QixFQUFFLENBQUN3QixXQUFILENBQWVDLEdBQTFILENBQVI7O0FBRUEsUUFBR04sR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLElBQVIsSUFBY2YsSUFBSSxJQUFFLElBQXBCLElBQTBCZSxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9PLFFBQVAsQ0FBZ0JoQixJQUFoQixDQUFxQmlCLElBQXJCLElBQTJCLE1BQXhELEVBQ0E7QUFDSXZCLE1BQUFBLElBQUksR0FBQ2UsR0FBRyxDQUFDLENBQUQsQ0FBUjtBQUNBO0FBQ0g7O0FBQ0QsUUFBR2YsSUFBSSxJQUFFLElBQU4sSUFBWWUsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFRLElBQXBCLElBQTBCQSxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9PLFFBQVAsQ0FBZ0JoQixJQUFoQixDQUFxQmlCLElBQXJCLElBQTJCLE1BQXhELEVBQ0E7QUFDSUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVl6QixJQUFJLENBQUNzQixRQUFMLENBQWNoQixJQUFkLENBQW1CWSxDQUFuQixHQUFxQkgsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPTyxRQUFQLENBQWdCaEIsSUFBaEIsQ0FBcUJZLENBQTFDLEdBQTRDLEdBQTVDLEdBQWdEbEIsSUFBSSxDQUFDc0IsUUFBTCxDQUFjaEIsSUFBZCxDQUFtQmEsQ0FBbkUsR0FBcUVKLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT08sUUFBUCxDQUFnQmhCLElBQWhCLENBQXFCYSxDQUF0Rzs7QUFDQSxVQUFHTyxJQUFJLENBQUNDLEdBQUwsQ0FBUzNCLElBQUksQ0FBQ3NCLFFBQUwsQ0FBY2hCLElBQWQsQ0FBbUJZLENBQW5CLEdBQXFCSCxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9PLFFBQVAsQ0FBZ0JoQixJQUFoQixDQUFxQlksQ0FBbkQsS0FBdUQsRUFBdkQsSUFBNkRRLElBQUksQ0FBQ0MsR0FBTCxDQUFTM0IsSUFBSSxDQUFDc0IsUUFBTCxDQUFjaEIsSUFBZCxDQUFtQmEsQ0FBbkIsR0FBcUJKLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT08sUUFBUCxDQUFnQmhCLElBQWhCLENBQXFCYSxDQUFuRCxLQUF1RCxFQUF2SCxFQUNBO0FBQ0EsWUFBSVMsSUFBSSxHQUFDNUIsSUFBSSxDQUFDc0IsUUFBTCxDQUFjaEIsSUFBZCxDQUFtQnVCLEtBQTVCO0FBQ0E3QixRQUFBQSxJQUFJLENBQUNzQixRQUFMLENBQWNoQixJQUFkLENBQW1CdUIsS0FBbkIsR0FBeUJkLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT08sUUFBUCxDQUFnQmhCLElBQWhCLENBQXFCdUIsS0FBOUM7QUFDQWQsUUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPTyxRQUFQLENBQWdCaEIsSUFBaEIsQ0FBcUJ1QixLQUFyQixHQUEyQkQsSUFBM0I7QUFDQTVCLFFBQUFBLElBQUksR0FBQyxJQUFMO0FBQ0FlLFFBQUFBLEdBQUcsR0FBQyxJQUFKO0FBQ0M7QUFDSjtBQUNKLEdBcENJO0FBc0NMZSxFQUFBQSxLQXRDSyxtQkFzQ0ksQ0FFUixDQXhDSSxDQTBDTDs7QUExQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBtYXNzOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgbWFzcz1udWxsO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblRvdWNoU3RhcnQgKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRvdWNoTG9jID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB2YXIgcmF5PWNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkucmF5Q2FzdChjYy52Mih0b3VjaExvYy54LTM1LCB0b3VjaExvYy55KSwgY2MudjIodG91Y2hMb2MueCszNSwgdG91Y2hMb2MueSksY2MuUmF5Q2FzdFR5cGUuQWxsKTtcclxuXHJcbiAgICAgICAgaWYocmF5WzBdIT1udWxsJiZtYXNzPT1udWxsJiZyYXlbMF0uY29sbGlkZXIubm9kZS5uYW1lPT1cImRpYW1cIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hc3M9cmF5WzBdO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1hc3MhPW51bGwmJnJheVswXSE9bnVsbCYmcmF5WzBdLmNvbGxpZGVyLm5vZGUubmFtZT09XCJkaWFtXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYXNzLmNvbGxpZGVyLm5vZGUueC1yYXlbMF0uY29sbGlkZXIubm9kZS54K1wiIFwiK21hc3MuY29sbGlkZXIubm9kZS55LXJheVswXS5jb2xsaWRlci5ub2RlLnkpO1xyXG4gICAgICAgICAgICBpZihNYXRoLmFicyhtYXNzLmNvbGxpZGVyLm5vZGUueC1yYXlbMF0uY29sbGlkZXIubm9kZS54KTw9NzUgJiYgTWF0aC5hYnMobWFzcy5jb2xsaWRlci5ub2RlLnktcmF5WzBdLmNvbGxpZGVyLm5vZGUueSk8PTc1KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB0ZW1wPW1hc3MuY29sbGlkZXIubm9kZS5jb2xvcjtcclxuICAgICAgICAgICAgbWFzcy5jb2xsaWRlci5ub2RlLmNvbG9yPXJheVswXS5jb2xsaWRlci5ub2RlLmNvbG9yO1xyXG4gICAgICAgICAgICByYXlbMF0uY29sbGlkZXIubm9kZS5jb2xvcj10ZW1wO1xyXG4gICAgICAgICAgICBtYXNzPW51bGw7XHJcbiAgICAgICAgICAgIHJheT1udWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==