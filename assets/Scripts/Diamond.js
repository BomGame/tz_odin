cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onBeginContact: function (contact, selfCollider, otherCollider) {
        if(selfCollider.node.name==otherCollider.node.name)
        {
            var flag=true;
            var results=cc.director.getPhysicsManager().rayCast(cc.v2(selfCollider.node.x, selfCollider.node.y),cc.v2(selfCollider.node.x-75, selfCollider.node.y-75),cc.RayCastType.All);
            if(results.length==0)
            {
                if(selfCollider.node.x==otherCollider.node.x && selfCollider.node.y>otherCollider.node.y)
                {
                    var x = selfCollider.node.x-75.0;
                    var y = selfCollider.node.y-75.0;
                    //this.node.color=cc.Color.RED;
                    this.node.runAction(cc.moveTo(0,x,y));
                    flag=false;
                    
                }
            }

            var results=cc.director.getPhysicsManager().rayCast(cc.v2(selfCollider.node.x, selfCollider.node.y),cc.v2(selfCollider.node.x+75, selfCollider.node.y-75),cc.RayCastType.All);
            if(results.length==0)
            {
                if(flag&&selfCollider.node.x==otherCollider.node.x && selfCollider.node.y>otherCollider.node.y)
                {
                    var x = selfCollider.node.x+75.0;
                    var y = selfCollider.node.y-75.0;
                    //this.node.color=cc.Color.RED;
                    this.node.runAction(cc.moveTo(0,x,y));
                    
                }
            }
        }
    },

    onEndContact (contact, selfCollider, otherCollider)
    {
    },

    // onLoad () {},

    start () {

    },

    update (dt) {
        /*var results=cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y),cc.v2(this.node.x-90, this.node.y-90),cc.RayCastType.All);
        //var blocks=cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y), cc.v2(this.node.x, this.node.y-75), cc.RayCastType.All);
        //var blocks2=cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y), cc.v2(this.node.x-75, this.node.y), cc.RayCastType.All);
        if(results.length==0&&flag)
        {
            var x = this.node.x-75.0;
            var y = this.node.y-75.0;
            this.node.color=cc.Color.RED;
            this.node.runAction(cc.moveTo(2,x,y));
        }
        results=cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y),cc.v2(this.node.x-75, this.node.y-75),cc.RayCastType.All);
        blocks=cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y), cc.v2(this.node.x, this.node.y-75), cc.RayCastType.All);
        */
    },
});
