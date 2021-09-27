'use strict';


let textBox = document.querySelector('#textBox');
textBox.addEventListener('input',function(){
    let text = this.value;
    text= text.trim();
    let char = text.length;
    let words = text.split(" ");
    char = char-(words.length-1)
    document.querySelector('#char').innerHTML = char;
    let cleanList= words.filter(function(el){
        return el !== "";
    })
    
    document.querySelector('#word').innerHTML = cleanList.length;
})
