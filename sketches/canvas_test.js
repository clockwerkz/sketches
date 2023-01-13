const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.transform(1,-0.60,.50,1,-60,700);
    for (let i=0; i < 35; i++) {
      let rectWidth = [200, 400, 600][Math.floor(Math.random() * 3)];
      let rectHeight = [20, 50, 100][Math.floor(Math.random() * 3)];
      let x = Math.floor(Math.random() * (width - rectWidth));
      let y = Math.floor(Math.random() * (height - rectHeight));
      context.strokeStyle = 'white';
      context.lineWidth = 4;
      context.strokeRect(x, y, rectWidth, rectHeight);
    }
  };
};

canvasSketch(sketch, settings);
