
document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
   var total = document.getElementById('balance');
   var ucolor;
   var utype;

   // выборка элементов
   var colors=document.getElementById('colors');
   var typech=document.getElementById('typech');
   var number=document.getElementById('number');
   var play=document.getElementById('play');
   var changecolors=document.getElementById('changecolors');
   var vibor=document.getElementById('vibor');
   var backclr=document.getElementById('backclr');
   var backtype=document.getElementById("backtype");
   var changetype=document.getElementById('changetype');
   var vvod=document.getElementById('vvod');
   var backnumber=document.getElementById('backnumber');
   var red=document.getElementById('red');
   var black=document.getElementById('black');
   var chet=document.getElementById('chet');
   var nechet=document.getElementById('nechet');
var selchislo=document.getElementById('chislo');
   //обнуление элементов
function nullparam(){
   ucolor=0;
   utype=0;
   uchislo=0;
   selchislo.selectedIndex = 0;


   chet.style.backgroundColor="white";
 nechet.style.backgroundColor="white";
 red.style.backgroundColor="white";
 black.style.backgroundColor="white";
 }
 function hideEl(){
   // скрвыаем элементы
   vibor.style.display="inline";
   colors.style.display="none";
   typech.style.display="none";
   number.style.display="none";
   play.style.display="none";

 }
hideEl();
 nullparam();


selchislo.onfocus=function(){
  play.style.display="inline";
  uchislo=selchislo.value;
}
  selchislo.onchange=function(){
uchislo=selchislo.value;


  }
function typeofchislo (chislot){
chislot= chislot % 2;
  if( chislot == 0 ){
    return chislot ="четное";
  }
  else {
    return chislot ="нечетное";
  }
}
  function getRandomInt(min, max)
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


//кнопки
chet.onclick=function () {
  chet.style.backgroundColor="red";
nechet.style.backgroundColor="white";
  utype="четное";
  play.style.display="inline";
}
nechet.onclick=function () {
  chet.style.backgroundColor="white";
nechet.style.backgroundColor="rgb(90,133,205)"
  utype="нечетное";
  play.style.display="inline";
}
red.onclick=function () {
  red.style.backgroundColor="red";
black.style.backgroundColor="white";
  ucolor="красное";
  play.style.display="inline";
}
black.onclick=function () {
  black.style.backgroundColor="rgb(90,133,205)";
red.style.backgroundColor="white";
  ucolor="черное";
  play.style.display="inline";
}

// действия менюшки
changecolors.onclick = function() {
vibor.style.display="none";
  colors.style.display="inline";


};
changetype.onclick = function() {
vibor.style.display="none";
  typech.style.display="inline";
};
vvod.onclick = function() {
vibor.style.display="none";
  number.style.display="inline";


};
backclr.onclick = function() {
vibor.style.display="inline";
  colors.style.display="none";
  typech.style.display="none";
  number.style.display="none";
    play.style.display="none";
    red.style.backgroundColor="white";
    black.style.backgroundColor="white";
    nullparam();
};
backtype.onclick = function() {
vibor.style.display="inline";
  colors.style.display="none";
  typech.style.display="none";
  number.style.display="none";
    play.style.display="none";
    nullparam();
};
backnumber.onclick = function() {
vibor.style.display="inline";
  colors.style.display="none";
  typech.style.display="none";
  number.style.display="none";
    play.style.display="none";
    nullparam();
};
//массив чисел рулетки
var numbers = ['1 красное','2 черное','3 красное','4 черное','5 красное','6 черное'
,'7 красное','8 черное','9 красное' , '10 черное','11 черное', '12 черное', '13 красное',
'14 черное', '15 красное', '16 черное', '17 красное', '18 черное', '19 красное', '20 черное',
'21 красное', '22 черное', '23 красное', '24 черное', '25 красное', '26 черное', '27 красное',
'28 черное', '29 черное', '30 красное', '31 черное', '32 красное', '33 черное', '34 красное',
'35 черное', '36 красное']
rand=getRandomInt(0,35);
var result= numbers[rand];
var color=result.substring(2,10);
var chislo=result.substring(0,2);
var chtype;
color=color.replace(/(^\s+|\s+$)/g,'');
chislo=chislo.replace(/(^\s+|\s+$)/g,'');
chtype=typeofchislo(chislo);

var button=document.getElementById('play');
var ured=document.getElementById('red');
var ublack=document.getElementById('black');


button.onclick = function() {

alert(uchislo);

  if(uchislo==chislo && uchislo!=0){
  alert('вы выйграли '+chislo+color);
nullparam();
hideEl();
location.reload();
  }
  if(uchislo!=chislo && uchislo!=0){

  alert('вы не угадали число '+chislo+color);

location.reload();
  }



if(utype==chtype && utype!=0){
alert('вы выйграли '+chislo+color);
location.reload();

}
if(utype!=chtype && utype!=0){

alert('вы не угадали число '+chislo+color);
location.reload();
}

if(ucolor==color && ucolor !=0){

alert('вы выйграли '+chislo+color);
location.reload();
}

if(ucolor!=color && ucolor !=0){

alert('вы не угадали число '+chislo+color);
location.reload();
}
  };
});
