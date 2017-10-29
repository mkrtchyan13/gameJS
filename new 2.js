const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  
  
  const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
  };
  
  const colorArray= ['Aqua', 'AntiqueWhite', 'Bisque', 'LightSlateGray', 'Black', 'Wheat'];
  
  const createPoint = function(count, canvasWidth, canvasHeight) {
    const k = [];
    const recursion = function(a) {
      if (a < 1) {return}
      k.push({
        x: rand(canvasWidth - 100),
        y: rand(canvasHeight - 100),
        width: 20,
        height: 20,
        xDelta: 3,
        yDelta: 3,
        color: colorArray[rand(6)-1]
      });
      recursion(a-1)
    }
    recursion(count);
    return k;
  };
  
  const points = createPoint(5, canvas.width, canvas.height);	
  
  
  const draw = function() {
    context.clearRect(0,0, canvas.width, canvas.height);
    const drawevery = function(arr, b) {
      if(b === arr.length) {
        return;
      }
      
      context.fillStyle = arr[b].color;
      context.fillRect(arr[b].x, arr[b].y, arr[b].width, arr[b].height);
      drawevery(arr, b+1);
    };
    drawevery(points, 0);
  };
  
  const updateData = function() {
    const updateEvery = function(arr, c){
      if(c === arr.length) {
        return;
      }
      
      if(arr[c].x >= canvas.width-arr[c].width || arr[c].x<=0){
        arr[c].xDelta = -arr[c].xDelta;
		arr[c].color = colorArray[rand(6)-1];
      }
      
      if(arr[c].y >= canvas.height-arr[c].height || arr[c].y<=0){
        arr[c].yDelta = -arr[c].yDelta;
		arr[c].color = colorArray[rand(6)-1];
      }
      
      arr[c].x = arr[c].x + arr[c].xDelta;
      arr[c].y = arr[c].y + arr[c].yDelta;
      updateEvery(arr, c+1);
    };
    updateEvery(points, 0)
  };
  
  const loop = function(){
    
    draw();
    updateData();
    window.requestAnimationFrame(loop);
  };
  
  loop();