
window.onload = function()
{
  var arr = ["أخر المعروف ضرب الكفوف.",
              ,"أبرد من مية طوبة." ,
              "البرميل الفارغ يرن.",
              "بصلة المحب خروف." ,
              "البطيخة القرعة لبها كتير." ,
              "البطيخة ما تكبرش إلا في بيتها." ,
              "البطن ما تجبش عدو." ,
              "بطينه ولا غسيل البرك." ,
              "بعد أمي وأختي الكل جيراني." ,
              "بعد الجوعة والقلة بقاله حمار وبغلة." ,
              "بعد ما كان واتكا قال دا ريحته مستكة." ,
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
