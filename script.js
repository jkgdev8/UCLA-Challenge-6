var apiUrl = "https://api.openweathermap.org/data/2.5/weather?zip=91303,us&appid=2aa00d691c7b39f60282f002c288a76c";
var weat = document.querySelector(".weat");
var btn = document.querySelector('#btn');
const ul = document.getElementById('authors');



var clickMe = function() {
    
   
}

fetch(apiUrl).then(async res=>{
    const data = await res.json();
    const help = data[i];
    console.log(data);
    ;
    for (var i = 0; i <= 1; i++) {
        var date = document.createElement("ul");
        date.textContent=  data.coord[i].lon  ;
        
        
        
        weat.appendChild(date);
    }




});
//btn.addEventListener('click',clickMe);










