

window.onload = function()
{
  var arr = ["https://goo.gl/mkGdJw",
              ,"Hayzach:baconbelly" ,
              "ClawMD:01344771396",
              "Rikimaru101:disembowl" ,
              "RagedCarbon:oliver" ,
              "Jimmyhotspurs:hotspurs" ,
              "StuTheBusdriver:0ll13t38um" ,
              "flop_awesome:stefman19" ,
              "Joystiiick:necrons" ,
              "rilez92:raiders!" ,
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
