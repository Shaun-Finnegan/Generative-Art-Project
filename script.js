window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
    ctx.lineWidth = 30;
    ctx.lineCap = 'round';
    let size = 100;
    ctx.rotate(0.1)
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.strokeStyle = 'yellow'
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, canvas.height/2);
    ctx.lineTo(size, canvas.height/2);
    ctx.stroke();

});