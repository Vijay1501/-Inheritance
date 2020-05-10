var drops=[]




function setup() {
  createCanvas(400,400);
  for(var i=0;i<1000;i++){
    drops.push(new Raindrop())
  }
}

function draw() {
  background("black");  
  for(var i=0;i<1000;i++){
    drops[i].display()
    drops[i].update()
  }
}