
function setup() {
  createCanvas(400,400);
}

function draw (){      
  background('lightblue')
  
    if (keyIsDown(DOWN_ARROW))
  {
    background('red')  
    
  }

  if (keyIsDown(LEFT_ARROW))
  {
    background('purple')  
    
  }

  if (keyIsDown(RIGHT_ARROW))
  {
    background('blue')  
    
  }

  if (keyIsDown(UP_ARROW))
  {
    background('yellow')  
    
  }

}
   