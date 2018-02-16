console.log('Loaded!');
//change text
var element = document.getElementById('main-text');

element.innerHTML = 'newvalue';

//move 
var marginLeft = '0';
var img = document.getElementById('madi');
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function()
{
    var interval = setinterval(moveRight, 100);
    
};
