
$(document).ready(
    function(){
        $("#sub1,#sub2,#sub3,#sub4,#sub5,#sub6,#sub7").hide();
        $("#subimg").mouseenter(function(){
           $("#sub1,#sub2,#sub3,#sub4,#sub5,#sub6,#sub7").hide();
           $("#sub").show();
        })
        $("#subimg1").mouseenter(function(){
            $("#sub,#sub2,#sub3,#sub4,#sub5,#sub6,#sub7").hide();
            $("#sub1").show();
         })
         
         $("#subimg2").mouseenter(function(){
            $("#sub1,#sub,#sub3,#sub4,#sub5,#sub6,#sub7").hide();
            $("#sub2").show();
         })
         
         $("#subimg3").mouseenter(function(){
            $("#sub1,#sub2,#sub,#sub4,#sub5,#sub6,#sub7").hide();
            $("#sub3").show();
         })
         
         $("#subimg4").mouseenter(function(){
            $("#sub1,#sub2,#sub3,#sub,#sub5,#sub6,#sub7").hide();
            $("#sub4").show();
         })
         
         $("#subimg5").mouseenter(function(){
            $("#sub1,#sub2,#sub3,#sub4,#sub,#sub6,#sub7").hide();
            $("#sub5").show();
         })
         
         $("#subimg6").mouseenter(function(){
            $("#sub1,#sub2,#sub3,#sub4,#sub5,#sub,#sub7").hide();
            $("#sub6").show();
         })
         
         $("#subimg7").mouseenter(function(){
            $("#sub1,#sub2,#sub3,#sub4,#sub5,#sub6,#sub").hide();
            $("#sub7").show();
         })
         
        
    }
)
                    
                     
     