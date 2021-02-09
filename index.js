let x=-128;
let y=(window.innerHeight-32)/3;
let speedx=1;
let speedy=0;
let vx=speedx;
let vy=speedy;
let botan_get_x=0;
let botan_set_x=(window.innerWidth-32)/2-64;
let botan_set_y=(window.innerHeight-32)*2/3-64;
let text=false;
let sumaho=false;

let canvas = document.getElementById('stage');
let ctx = canvas.getContext('2d');

const mikan = new Image();
const botan = new Image();
const arm = new Image();
const shade = new Image();
const mikan_text = new Image();
const push = new Audio('push5.mp3');
push.onload = function(){
    push.play();
    push.stop();
} 
mikan.src = "mikan_vivid.png";
botan.src = "switch.png";
arm.src = "arm.png";
shade.src= "shade.png";
mikan_text.src = "mikan_text.png";

const loop = () => {
    botan_set_x=(window.innerWidth-32)/2-64;
    otan_set_y=(window.innerHeight-32)*2/3-64;
    canvas.addEventListener('touchstart',()=>{
        botan_get_x=128;
        push.currentTime = 0;
        push.play();
        text=true;
        sumaho=true;
    })
    canvas.addEventListener('mousedown',()=>{
        if(!sumaho){
            botan_get_x=128;
            push.currentTime = 0;
            push.play();
            text=true;
        }
    })
    canvas.addEventListener('touchend',()=>{
        botan_get_x=0;
        sumaho=true;
    })
    canvas.addEventListener('mouseup',()=>{
        if(!sumaho){
            botan_get_x=0;
        }
    })
    canvas.width=window.innerWidth-32;
    canvas.height=window.innerHeight-32;
    ctx.clearRect(0,0,window.innerWidth+128-32,innerHeight-32);
    ctx.fillStyle="#FCD7A1"
    ctx.fillRect(0,0,window.innerWidth+128-32,innerHeight-32);
    ctx.drawImage(botan, botan_get_x, 0, 128, 128, botan_set_x, botan_set_y, 128, 128);
    ctx.drawImage(mikan_text, 0, 0, 128, 128, botan_set_x, botan_set_y+48, 128, 128);
    ctx.drawImage(arm, 0, 0, 128, 256, botan_set_x, 0, 128, 256);
    ctx.drawImage(shade, 0, 0, 128, 128, botan_set_x, y, 128, 128);
    ctx.drawImage(mikan, x, y);
    if(text){
        ctx.fillStyle = '#007B43';
        ctx.font = 'bold 20px serif';
        ctx.textAlign = 'left';
        ctx.fillText("ミカンは", 10, y);
        ctx.fillText("骨粗しょう症のリスクを", 10, y+50);
        ctx.fillText("下げると言われています。", 10, y+100);
    }
    if(x>window.innerWidth-32)x=-128;
    x+=vx;
    y+=vy;
        y=(window.innerHeight-32)/3;
    botan_set_x=(window.innerWidth-32)/2-64;
    botan_set_y=(window.innerHeight-32)*2/3-64;
    window.requestAnimationFrame(loop);
}

loop();
