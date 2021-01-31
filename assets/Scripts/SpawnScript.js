cc.Class({
    extends: cc.Component,

    properties: {
        diamond: {
            default: null,
            type: cc.Prefab,
          },
        isSpawn: boolean = true,

    },
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getCollisionManager().enabled = true;
        isSpawn=true;
    },

    onBeginContact: function (contact, selfCollider, otherCollider) {
        isSpawn=false;
        otherCollider.body.linearVelocity=cc.v2(0,-30);
    },

    onEndContact (contact, selfCollider, otherCollider)
    {
        var scene = cc.director.getScene();
        var Diamond = cc.instantiate(this.diamond);
        Diamond.parent = scene;
        Diamond.setPosition(selfCollider.node.x, selfCollider.node.y);
        Diamond.name='diam';
        Diamond.color=cc.Color.CYAN;
    },

    start () { },

    update (dt) {
        if(isSpawn)
        {
            var scene = cc.director.getScene();
            var Diamond = cc.instantiate(this.diamond);
            Diamond.parent = scene;
            var node = this.node;
            Diamond.setPosition(node.x, node.y);
            Diamond.name='diam';
        }
    },
});
