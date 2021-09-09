'use strict';


let textBox = document.querySelector('#textBox');
textBox.addEventListener('input',function(){
    let text = this.value;
    let char = text.length;
    
    document.querySelector('#char').innerHTML = char;
     text= text.trim();
    let words = text.split(" ");
    let cleanList= words.filter(function(el){
        return el !== "";
    })
    
    document.querySelector('#word').innerHTML = cleanList.length;
})