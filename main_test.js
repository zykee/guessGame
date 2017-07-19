/**
 * Created by coco on 17-7-18.
 */
const main = require("./main");
const sinon = require("sinon");


function mainTest() {
    //const randomFig = new main.Random();
    let a = sinon.stub(main.Random,"randomFig").callsFake(function () {
        return '1234';
    });
    let b = sinon.stub(main.Random,"getFig").callsFake(function () {
        return '1234';
    });
    //let aFig = randomFig.randomFig();
    let output = main.guessFig();
    console.log(output);
    a.restore();
    //b.restore();
}
mainTest();