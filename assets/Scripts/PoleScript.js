cc.Class({
    extends: cc.Component,

    properties: {
        block: {
            default: null,
            type: cc.Prefab,
          },
        colis: {
            default: null,
            type: cc.Prefab,
        },
        spawn: {
            default: null,
            type: cc.Prefab,
        },
    },
    

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let pole = [[]];
        pole = [
            ['b','s','s','s','s','s','s','s','s','s','s'],
            ['-','-','-','-','-','-','-','-','-','-','-'],
            ['-','b','b','-','-','-','-','-','-','-','-'],
            ['-','-','b','-','-','-','-','-','-','-','-'],
            ['-','-','b','-','b','-','-','-','-','-','-'],
            ['-','-','-','-','-','b','-','-','-','-','-'],
            ['-','-','-','-','-','-','b','-','-','-','-'],
            ['-','-','-','-','-','-','-','b','-','-','-'],
            ['-','-','-','-','-','-','-','-','b','-','-'],
        ]

        for(let i=0; i<11; i++)
        {
            for(let j=0; j<9; j++)
            {
                if(pole[j][i]=='-')
                {
                    var scene = cc.director.getScene();
                    var Block = cc.instantiate(this.block);
                    Block.parent = scene;
                    Block.setPosition(45+75*i, 720-75*j);
                }
                else if(pole[j][i]=='b')
                {
                    var scene = cc.director.getScene();
                    var Colis=cc.instantiate(this.colis);
                    Colis.parent = scene;
                    Colis.setPosition(45+75*i, 720-75*j);
                }
                else if(pole[j][i]=='s')
                {
                    var scene = cc.director.getScene();
                    var Spawn=cc.instantiate(this.spawn);
                    Spawn.parent = scene;
                    Spawn.setPosition(45+75*i, 720-75*j);
                }
            }
        }
    },

    start () {
        
    },

    // update (dt) {},

    
});
