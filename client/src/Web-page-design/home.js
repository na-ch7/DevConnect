$(document).ready(function(){
    $(".ficard").fadeOut(1);
    $(".ficard").fadeIn(500);
    $(".ficon").fadeOut(1);
    $(".ficon").fadeIn(1500);
    $(".ficon2").fadeOut(1);
    $(".ficon2").fadeIn(3000);
})


$("menu-toggle").click(function (e){
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


let banner=document.querySelector('.starter');
let canvas=document.getElementById('dotspro');
canvas.width=canvas.offsetWidth;
canvas.height=canvas.offsetHeight;
let ctx=canvas.getContext('2d');


let dots=[];
let acolor=['#FF8225','#F8EDED','#B43F3F','#173B45','#03346E'];
for(let index=0;index<=50;index++){
    dots.push({x: Math.floor(Math.random()*canvas.width),
        y: Math.floor(Math.random()*canvas.height),
        size:Math.random()*3+5,
        color:acolor[Math.floor(Math.random()*acolor.length)]
    });
}

const drawDot=()=>{
    dots.forEach(dot=>{
        ctx.fillStyle=dot.color;
        ctx.beginPath();
        ctx.arc(dot.x,dot.y,dot.size,0,Math.PI*2);
        ctx.fill();
    })
}
drawDot();
starter.addEventListener('mousemove',(event)=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawDot();
    let mouse={
        x:event.pageX-starter.getBoundingClientRect().left,
        y:event.pageY-starter.getBoundingClientRect().top
    }
    dots.forEach(dot=>{
        let distance=Math.sqrt((mouse.x-dot.x)**2+(mouse.y-dot.y)**2);
        if(distance<300){
            ctx.strokeStyle=dot.color;
            ctx.lineWidth=1;
            ctx.beginPath();
            ctx.moveTo(dot.x,dot.y);
            ctx.lineTo(mouse.x,mouse.y);
            ctx.stroke();
        }
    })
})

starter.addEventListener("mouseout",()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawDot();
})