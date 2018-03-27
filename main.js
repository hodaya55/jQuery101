var h1 = $('h1');
var divR=$('.red-div');
var li1=$('ul :first-child');
var li2=$('ul :nth-child(2)');
var divB=$('#brown-div');


h1.css('color', 'blue');
divR.css('color', 'red');
li1.css('color', 'green');
li2.css('color', 'pink');
divB.css('color', 'brown');

var alertVal= function(){
    alert($('#my-input1').val());
}
$('#btn1').click(alertVal);

var inputVal= $('#my-input2').val();
var appendToList= function(){
    $('.students').append('<li>'+inputVal+'</li>');
}
$('#btn2').click(appendToList);


var RemoveItem=function(){
    // ???
    
    $('.students').find().remove();
}
$('.students').click(RemoveItem);