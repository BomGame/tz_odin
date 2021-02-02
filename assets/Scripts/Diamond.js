cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onBeginContact: function (contact, selfCollider, otherCollider) {
        //диагональное падение
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
                    this.node.runAction(cc.moveTo(0,x,y));
                    
                }
            }
        }

        //убирание рядов
        var left=cc.director.getPhysicsManager().rayCast(cc.v2(selfCollider.node.x, selfCollider.node.y), cc.v2(selfCollider.node.x-75, selfCollider.node.y),cc.RayCastType.All);
        var right=cc.director.getPhysicsManager().rayCast(cc.v2(selfCollider.node.x, selfCollider.node.y), cc.v2(selfCollider.node.x+75, selfCollider.node.y),cc.RayCastType.All);
        if(left.length==1&&right.length==1)
        {
            //console.log("ttt");
            if(left[0].collider.node.color==right[0].collider.node.color&&right[0].collider.node.color==selfCollider.node.color)
            {
                console.log("test");
            }
        }
        //console.log(left[0].collider.node.color);
        //console.log(selfCollider.node.color);
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
        var left=cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y), cc.v2(this.node.x-75, this.node.y),cc.RayCastType.All);
        var right=cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y), cc.v2(this.node.x+75, this.node.y),cc.RayCastType.All);
        if(left.length==1&&right.length==1)
        {
            //console.log("ttt");
            if(left[0].collider.node.color._val==right[0].collider.node.color._val&&right[0].collider.node.color._val==this.node.color._val&&left[0].collider.node.name==right[0].collider.node.name&&right[0].collider.node.name==this.node.name)
            {
                //left[0].collider.node.destroy();
                //right[0].collider.node.destroy();
                this.node.removeFromParent();
                
               //this.node.color=cc.Color.BLACK;
                console.log("test");

            }
            //console.log(this.node.color._val);
        }
    },
});
