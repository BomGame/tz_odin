cc.Class({
    extends: cc.Component,

    properties: {
        diamond: {
            default: null,
            type: cc.Prefab,
          },
    },
    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var scene = cc.director.getScene();
        var Diamond = cc.instantiate(this.diamond);
        Diamond.parent = scene;
        var node = this.node;
        Diamond.setPosition(node.x, node.y);
        Diamond.name='diam';
    },

    // update (dt) {},
});
