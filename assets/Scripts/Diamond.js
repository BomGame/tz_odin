cc.Class({
    extends: cc.Component,

    properties: {
        destroy: boolean=true,
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

        //var world=selfCollider.node.world;
        //console.log(world);
        //console.log("valid "+cc.isValid(selfCollider));
    },

    onEndContact (contact, selfCollider, otherCollider)
    {
    },

    // onLoad () {},

    start () {
        destroy=true;
    },

    update (dt) {
        if(destroy)
        {
            var left=cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y), cc.v2(this.node.x-75, this.node.y),cc.RayCastType.All);
            var right=cc.director.getPhysicsManager().rayCast(cc.v2(this.node.x, this.node.y), cc.v2(this.node.x+75, this.node.y),cc.RayCastType.All);
            if(left.length==1&&right.length==1&&this.node._active)
            {
                if(left[0].collider.node.color._val==right[0].collider.node.color._val&&right[0].collider.node.color._val==this.node.color._val&&left[0].collider.node.name==right[0].collider.node.name&&right[0].collider.node.name==this.node.name)
                {
                    //console.log("valid "+cc.isValid(this.node));
                    //this.node.removeFromParent();
                    //this.node.active=false;
                    this.node.runAction(cc.moveTo(0,900,0));
                    left[0].collider.node.runAction(cc.moveTo(0,900,0));;
                    right[0].collider.node.runAction(cc.moveTo(0,900,0));;
                    //this.node.destroy();
                    //left[0].collider.node.destroy();
                    //right[0].collider.node.destroy();
                    /*console.log("left"+left[0].collider.node.name);
                    console.log("right"+right[0].collider.node.name);
                    console.log("this"+this.node.name);*/
                
                    //this.node.color=cc.Color.BLACK;
                    destroy=false;
                }
                //console.log(this.node.color._val);
            }
            return;
        }
        if(!destroy)
        {
            //this.node.destroy();
            //left[0].collider.node.destroy();
            //right[0].collider.node.destroy();
            return;
        }
    },
});
