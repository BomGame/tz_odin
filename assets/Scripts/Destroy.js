cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onBeginContact: function (contact, selfCollider, otherCollider) {
        otherCollider.node.destroy();
    },

    start () {

    },

    // update (dt) {},
});
