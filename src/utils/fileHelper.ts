
function canvasToFile(canvas:HTMLCanvasElement, fileName = 'image.png', type = 'image/png') {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(new File([blob as Blob], fileName, { type }));
    }, type);
  });
}
function getBlackImageFile(width = 200, height = 200) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, width, height);

  return canvasToFile(canvas);
}
export {getBlackImageFile}