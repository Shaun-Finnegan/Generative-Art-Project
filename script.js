window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';

    ctx.shadowColor = 'rgba(0,0,0,0.7';
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 10;

    let size = 200;
    let sides = 5;
    let maxLevel = 4;
    let scale = 0.5;
    let spread = 0.5;
    let branches = 2;
    let color = 'hsl('+ Math.random() * 360 +'0, 100%, 50%)';


    ctx.fillStyle = 'green'
    


    function drawBranch(level){
        if(level > maxLevel) return;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(size, 0);
        ctx.stroke();
        for (let i = 0; i < branches; i++){
            ctx.save();
            ctx.translate(size - (size/branches) * i, 0);
            ctx.scale(scale, scale);
            ctx.rotate(spread);
            drawBranch(level + 1);
            ctx.restore();
    
            ctx.save();
            ctx.translate(size -(size/branches) * i, 0);
            ctx.scale(scale, scale);
            ctx.rotate(-spread);
            drawBranch(level + 1);
            ctx.restore();
        }
       
    };

   
    
function drawFractal (){
    ctx.save();
    ctx.strokeStyle = color;
    ctx.translate(canvas.width/2, canvas.height/2);

    for(i = 0; i < sides; i++){
   
    ctx.rotate((Math.PI * 2)/sides);
    drawBranch(0);
    
};
ctx.restore();
};


drawFractal();
 

   


    ctx.restore();

});