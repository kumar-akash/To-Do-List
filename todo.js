//strike through when we clicked the li of the list\
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
//deleting the todo when we click on X
$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(250 , function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if(event.which===13){
        //grabbing the data entered in the input box
        var newTodo = $(this).val();
        $(this).val("");
        //create a new li and add it to ul
        $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span>" + newTodo + "</li>");
    }
}) ;

$(".fa-chevron-circle-down").click(function(){
    $("input[type='text'").fadeToggle();
});