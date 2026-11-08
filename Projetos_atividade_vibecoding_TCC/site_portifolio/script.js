
function sendWhats(event){

event.preventDefault();


const name =
document.getElementById("name").value;


const message =
document.getElementById("message").value;


const phone =
"5531995552992";


const text =
`Hello, my name is ${name}.

${message}`;



const url =
`https://wa.me/${phone}?text=${encodeURIComponent(text)}`;



window.open(url,"_blank");


}





// partículas

const canvas =
document.getElementById("particles");

const ctx =
canvas.getContext("2d");


canvas.width =
innerWidth;

canvas.height =
innerHeight;


let particles=[];


for(let i=0;i<120;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*3,

speed:Math.random()*0.5

})

}



function animate(){


ctx.clearRect(0,0,canvas.width,canvas.height);


ctx.fillStyle="#6366f1";


particles.forEach(p=>{


ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.size,
0,
Math.PI*2
);


ctx.fill();


p.y-=p.speed;


if(p.y<0)
p.y=canvas.height;


});


requestAnimationFrame(animate);


}
