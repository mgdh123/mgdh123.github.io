
function div_alert(info){
    $("#dialog_alert_info").html(info);
    $("#dialog_alert_bt").trigger("click");
}
function checklength(str){
var v_temp = str.replace(/^\s+/g, '').replace(/\s+$/g, '');//del the blankspace, like trim().
if(v_temp.length!=0) str = v_temp;
return str.replace(/[^\x00-\xff]/g,"**").length; //A Chinese two ** instead
} 

$(document).ready(function(){

    $(".dh-container").find("a").click(function(){
       var id = $(this).attr("id");

       $.post("ajax.php?t=url_out",{
           id:id
       },function(res){

       },"html");

    });

    
});