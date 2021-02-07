
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PoleScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f85f90fl75KQo8d3iqv8iOI', 'PoleScript');
// Scripts/PoleScript.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    block: {
      "default": null,
      type: cc.Prefab
    },
    colis: {
      "default": null,
      type: cc.Prefab
    },
    spawn: {
      "default": null,
      type: cc.Prefab
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var pole = [[]];
    pole = [['b', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'], ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', 'b', '-', '-', '-', '-', '-', '-', '-', '-'], ['-', 'b', 'b', '-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', 'b', '-', 'b', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', 'b', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', 'b', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', 'b', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-', 'b', '-', '-']];

    for (var i = 0; i < 11; i++) {
      for (var j = 0; j < 9; j++) {
        if (pole[j][i] == '-') {
          var scene = cc.director.getScene();
          var Block = cc.instantiate(this.block);
          Block.parent = scene;
          Block.setPosition(45 + 75 * i, 720 - 75 * j);
        } else if (pole[j][i] == 'b') {
          var scene = cc.director.getScene();
          var Colis = cc.instantiate(this.colis);
          Colis.parent = scene;
          Colis.setPosition(45 + 75 * i, 720 - 75 * j);
        } else if (pole[j][i] == 's') {
          var scene = cc.director.getScene();
          var Spawn = cc.instantiate(this.spawn);
          Spawn.parent = scene;
          Spawn.setPosition(45 + 75 * i, 720 - 75 * j);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUG9sZVNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJsb2NrIiwidHlwZSIsIlByZWZhYiIsImNvbGlzIiwic3Bhd24iLCJvbkxvYWQiLCJwb2xlIiwiaSIsImoiLCJzY2VuZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJCbG9jayIsImluc3RhbnRpYXRlIiwicGFyZW50Iiwic2V0UG9zaXRpb24iLCJDb2xpcyIsIlNwYXduIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZOLEtBREM7QUFLUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsSUFETjtBQUVIRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTixLQUxDO0FBU1JFLElBQUFBLEtBQUssRUFBRTtBQUNILGlCQUFTLElBRE47QUFFSEgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRk47QUFUQyxHQUhQO0FBbUJMO0FBRUFHLEVBQUFBLE1BckJLLG9CQXFCSztBQUNOLFFBQUlDLElBQUksR0FBRyxDQUFDLEVBQUQsQ0FBWDtBQUNBQSxJQUFBQSxJQUFJLEdBQUcsQ0FDSCxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBNkIsR0FBN0IsRUFBaUMsR0FBakMsRUFBcUMsR0FBckMsRUFBeUMsR0FBekMsQ0FERyxFQUVILENBQUMsR0FBRCxFQUFLLEdBQUwsRUFBUyxHQUFULEVBQWEsR0FBYixFQUFpQixH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SixDQUFRRCxDQUFSLEtBQVksR0FBZixFQUNMO0FBQ0ksY0FBSUUsS0FBSyxHQUFHYixFQUFFLENBQUNjLFFBQUgsQ0FBWUMsUUFBWixFQUFaO0FBQ0EsY0FBSU0sS0FBSyxHQUFDckIsRUFBRSxDQUFDaUIsV0FBSCxDQUFlLEtBQUtULEtBQXBCLENBQVY7QUFDQWEsVUFBQUEsS0FBSyxDQUFDSCxNQUFOLEdBQWVMLEtBQWY7QUFDQVEsVUFBQUEsS0FBSyxDQUFDRixXQUFOLENBQWtCLEtBQUcsS0FBR1IsQ0FBeEIsRUFBMkIsTUFBSSxLQUFHQyxDQUFsQztBQUNIO0FBQ0o7QUFDSjtBQUNKLEdBOURJO0FBZ0VMVSxFQUFBQSxLQWhFSyxtQkFnRUksQ0FFUixDQWxFSSxDQW9FTDs7QUFwRUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBibG9jazoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIGNvbGlzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwYXduOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgbGV0IHBvbGUgPSBbW11dO1xyXG4gICAgICAgIHBvbGUgPSBbXHJcbiAgICAgICAgICAgIFsnYicsJ3MnLCdzJywncycsJ3MnLCdzJywncycsJ3MnLCdzJywncycsJ3MnXSxcclxuICAgICAgICAgICAgWyctJywnLScsJy0nLCctJywnLScsJy0nLCctJywnLScsJy0nLCctJywnLSddLFxyXG4gICAgICAgICAgICBbJy0nLCctJywnYicsJy0nLCctJywnLScsJy0nLCctJywnLScsJy0nLCctJ10sXHJcbiAgICAgICAgICAgIFsnLScsJ2InLCdiJywnLScsJy0nLCctJywnLScsJy0nLCctJywnLScsJy0nXSxcclxuICAgICAgICAgICAgWyctJywnLScsJ2InLCctJywnYicsJy0nLCctJywnLScsJy0nLCctJywnLSddLFxyXG4gICAgICAgICAgICBbJy0nLCctJywnLScsJy0nLCctJywnYicsJy0nLCctJywnLScsJy0nLCctJ10sXHJcbiAgICAgICAgICAgIFsnLScsJy0nLCctJywnLScsJy0nLCctJywnYicsJy0nLCctJywnLScsJy0nXSxcclxuICAgICAgICAgICAgWyctJywnLScsJy0nLCctJywnLScsJy0nLCctJywnYicsJy0nLCctJywnLSddLFxyXG4gICAgICAgICAgICBbJy0nLCctJywnLScsJy0nLCctJywnLScsJy0nLCctJywnYicsJy0nLCctJ10sXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDsgaTwxMTsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8OTsgaisrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihwb2xlW2pdW2ldPT0nLScpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgQmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICBCbG9jay5wYXJlbnQgPSBzY2VuZTtcclxuICAgICAgICAgICAgICAgICAgICBCbG9jay5zZXRQb3NpdGlvbig0NSs3NSppLCA3MjAtNzUqaik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHBvbGVbal1baV09PSdiJylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBDb2xpcz1jYy5pbnN0YW50aWF0ZSh0aGlzLmNvbGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBDb2xpcy5wYXJlbnQgPSBzY2VuZTtcclxuICAgICAgICAgICAgICAgICAgICBDb2xpcy5zZXRQb3NpdGlvbig0NSs3NSppLCA3MjAtNzUqaik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHBvbGVbal1baV09PSdzJylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBTcGF3bj1jYy5pbnN0YW50aWF0ZSh0aGlzLnNwYXduKTtcclxuICAgICAgICAgICAgICAgICAgICBTcGF3bi5wYXJlbnQgPSBzY2VuZTtcclxuICAgICAgICAgICAgICAgICAgICBTcGF3bi5zZXRQb3NpdGlvbig0NSs3NSppLCA3MjAtNzUqaik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgXHJcbn0pO1xyXG4iXX0=