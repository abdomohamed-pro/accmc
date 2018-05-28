
window.onload = function()
{
  var arr = ["https://hastebin.com/iciyoquqap.css.",
              ,"https://hastebin.com/ohomoboyoy.css" ,
              "https://hastebin.com/bimedezuto.css",
              "https://hastebin.com/uhepufezow.css" ,
              "https://hastebin.com/meyovosave.go" ,
              "https://hastebin.com/ucohamijoq.css" ,
];


document.body.style.zoom="90%";

var qLength = arr.length,
button = document.getElementById("click");

button.onclick = function()
{
var rand = Math.floor(Math.random()*(qLength));
var quote = arr[rand];
document.getElementById("quote").innerHTML= quote ;
};


};
