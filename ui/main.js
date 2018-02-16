console.log('Loaded!');
//change text
var element = document.getElementById('main-text');

element.innerHTML = 'newvalue';

//move 
var img = document.getElementById('madi');
img.onclick = function()
{
    
    img.style.marginLeft = '100px';
    
};
