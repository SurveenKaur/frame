function preload(){

}

function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
}

function draw(){

stroke(0.120,0);
circle(100,50,70);
fill(1,250,0);

ctx.lineWidth=5;
ctx.beginPath();
ctx.moveTo(100,50);
ctx.stroke();

}

function take_snapshot(){
    save('myPic.png');
}

function filter_tint(){
    tint_color=document.getElementById("color_Name").value;

}

