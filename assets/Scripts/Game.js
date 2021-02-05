cc.Class({
    extends: cc.Component,

    properties: {
        mass: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        mass=null;
    },

    onTouchStart (event) {
        let touchLoc = event.touch.getLocation();
        var ray=cc.director.getPhysicsManager().rayCast(cc.v2(touchLoc.x-35, touchLoc.y), cc.v2(touchLoc.x+35, touchLoc.y),cc.RayCastType.All);

        //console.log(ray[0].collider.node.name);
        if(mass!=null&&ray[0]!=null&&ray[0].collider.node.name=="diam")
        {
            var temp=mass.collider.node.color;
            mass.collider.node.color=ray[0].collider.node.color;
            ray[0].collider.node.color=temp;
            mass=null;
            ray=null;
            
        }
        if(ray[0]!=null&&mass!=ray[0]&&ray[0].collider.node.name=="diam")
        {
            mass=ray[0];
        }
    },

    start () {

    },

    // update (dt) {},
});
