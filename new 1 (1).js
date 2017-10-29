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