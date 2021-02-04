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
        //otherCollider.body.linearVelocity=cc.v2(0,-30);
    },

    onEndContact (contact, selfCollider, otherCollider)
    {
        //console.log("valid "+cc.isValid(otherCollider));
            
        var scene = cc.director.getScene();
        var Diamond = cc.instantiate(this.diamond);
        Diamond.parent = scene;
        Diamond.setPosition(selfCollider.node.x, selfCollider.node.y);
        Diamond.name='diam';
        var color=Math.floor(Math.random()*5);
        switch(color)
        {
            case 0:
                Diamond.color=cc.Color.CYAN;
                break;
            case 1:
                Diamond.color=cc.Color.RED;
                break;
            case 2:
                Diamond.color=cc.Color.ORANGE;
                break;
            case 3:
                Diamond.color=cc.Color.GREEN;
                break;
            case 4:
                Diamond.color=cc.Color.WHITE;
                break;
        }
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
            var color=Math.floor(Math.random()*5);
            switch(color)
            {
                case 0:
                    Diamond.color=cc.Color.CYAN;
                    break;
                case 1:
                    Diamond.color=cc.Color.RED;
                    break;
                case 2:
                    Diamond.color=cc.Color.ORANGE;
                    break;
                case 3:
                    Diamond.color=cc.Color.GREEN;
                    break;
                case 4:
                    Diamond.color=cc.Color.WHITE;
                    break;
            }
        }
    },
});
