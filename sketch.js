var ball,database;
var position;

function setup(){
    database=firebase.database();
    console.log(database);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballposition=database.ref('BALL/POSITION');
    ballposition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('BALL/POSITION').set({
        'x':position.x+x,
        'y':position.x+y


    })
}
function readPosition(data){
position=data.val();
console.log(position.x);
ball.x=position.x;
ball.y=position.x;
}
function showError(){
console.log("Error in writing to the database")

}