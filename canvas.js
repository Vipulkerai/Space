var canvas = document.getElementById("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var ctx = canvas.getContext("2d");

window.addEventListener('resize',
	function(){
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init1();
	init2();
});

function Circle(x,y,dx,dy,radius)
{
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.dx = dx;
	this.dy = dy;
	
	this.draw = function()
	{
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
		ctx.fillStyle = "#fff";
		ctx.shadowColor = '#fff';
		ctx.shadowBlur = 20;
		ctx.fill();
	}
	
	this.update = function()
	{
		this.draw();
		
		if(this.x + this.radius > innerWidth || this.x - this.radius < 0)
		{
			this.dx = -this.dx;
		}

		if(this.y + this.radius > innerHeight || this.y - this.radius < 0)
		{
			this.dy = -this.dy;
		}
		
		this.x += this.dx;
		this.y += this.dy;
	}
}

var circleArray1 = [];

function init1()
{
	circleArray1 = [];
	
	for(var i = 0;i < 100;i++)
	{
		var radius = Math.random() * 2+1;
		
		var x = Math.random() * (innerWidth - radius * 2) + radius;

		var y = Math.random() * (innerHeight - radius * 2) + radius;
		if(radius > 2)
		{
			var dx = (Math.random() - 0.5) * 2;
			var dy = (Math.random() - 0.5) * 2;
	
		}
		else
		{
			var dx = (Math.random() - 0.5);
			var dy = (Math.random() - 0.5);
		}
		
		circleArray1.push(new Circle(x,y,dx,dy,radius));
	}
}

var circleArray2 = [];

function init2()
{
	circleArray2 = [];
	
	for(var i = 0;i < 800;i++)
	{
		var radius = Math.random() * 1;
		
		var x = Math.random() * (innerWidth - radius * 2) + radius;

		var y = Math.random() * (innerHeight - radius * 2) + radius;
		
		var dx = (Math.random() - 0.2);
		var dy = (Math.random() - 0.2);
		
		circleArray2.push(new Circle(x,y,dx,dy,radius));
	}
}

function animation() {
    
    requestAnimationFrame(animation);
	
    ctx.clearRect(0,0,innerWidth,innerHeight);
    
	for(var i = 0;i < circleArray1.length;i++)
	{
		circleArray1[i].update();
		circleArray2[i].update();
	}
	for(var i = 0;i < circleArray2.length;i++)
	{
		
		circleArray2[i].update();
	}
}

init1();
init2();
animation();