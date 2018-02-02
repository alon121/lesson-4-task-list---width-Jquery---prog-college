

 $("#add").click(function(){
    if($("option:selected").text() == "sun"){
       $("#sun").append($("#task").val() + "<hr>");
    }});
     ;

