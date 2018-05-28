

window.onload = function()
{
  var arr = ["1-qazokm123987:qazokm",
              "michaelm1121:puppy3" ,
              "Guazimodo:gsant98" ,
              "ESDTfusion:bwl1207" ,
              "CookedFurby:Cracker" ,
              "Rollatore:juventus20" ,
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
