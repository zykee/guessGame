/**
 * Created by coco on 17-7-18.
 */
'use strict';
const readline = require("readline-sync");
const Random = {
    randomFig: function()
    {
        let fig = [];
        for(;fig.length<4;)
        {
            let random = parseInt(Math.random()*10);
            if(fig.indexOf(random)<0)
            {
                fig.push(random);
            }
        }
        return fig.toString();
    },
    getFig : function ()
    {
        let fig =  readline.question("Please input four figures\n");
        return fig;
    }
};

function guessFig() {
    let fig =  Random.getFig();
    // let randomFig = new Random();
    let FIGURE = Random.randomFig();
    let A = 0;
    let B = 0;
    for(let i = 0;i<fig.length;i++)
    {
        if(FIGURE.indexOf(fig[i])>=0)
        {
            if(FIGURE.indexOf(fig[i])===i)
            {
                A++;
            }
            else
            {
                B++;
            }
        }
    }
    return `${A}A${B}B`
}
module.exports.Random = Random;
module.exports.guessFig = guessFig;
//guessFig();