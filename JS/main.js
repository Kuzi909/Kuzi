var dic;
var king;
let kilin;
//var move_div = $('#move_div');
//var main_table = $('#main_table');
king="H_16";
$(document).ready(function(){
    var mainTable = $('#main_table');
        for(var i = 1; i <= 15; i++){
            mainTable.append("<tr></tr>");
            for(var j = 1; j <= 31; j++){
                mainTable.append("<td id='" + abc(i) + "_" + j + "'></td>");
            }
        }
        move();
    $("td").on("click",(object)=>{
        if($($(object)[0].currentTarget).attr("style")=="background-color:yellow;"){
            king=$($(object)[0].currentTarget).attr("id");
            move();
        }else{
            console.log("no");
        }
        
    })
})

function addTable(){
    var mainTable = $('#main_table');
    for(var i = 1; i <= 14; i++){
        mainTable.append("<tr></tr>");
        for(var j = 1; j <= 31; j++){
            mainTable.append("<td id='" + abc(i) + "_" + j + "'></td>");
        }
    }
}

function dice(){
    var dic = Math.floor(Math.random() * 6) + 1;
    var user_dice_div = $('#user_dice_div');
    user_dice_div.html("<span>" + dic + "</span>");
    let upcom=king.split("_")[0].charCodeAt(0)-65;
    let leftcom=king.split("_")[1];
    for(let i=((upcom-dic)<0?0:(upcom-dic));i<=((upcom+dic)>14?14:(upcom+dic));i++){
        let far=(upcom-i)<0?-(upcom-i):(upcom-i);
        for(j=((leftcom-(dic-far))<0?0:(leftcom-(dic-far)));j<=((parseInt(leftcom)+(dic-far))>31?31:(parseInt(leftcom)+(dic-far)));j++){
            $("#"+(String.fromCharCode(i+65))+"_"+j)
                .attr("style","background-color:yellow;");
        }
    }
    
    $("#"+king).attr("style","background-color:black;");
}

function start(){
    var dic = Math.floor(Math.random() * 2) + 1;
    var side;
    switch (dic){
        case 1:
            side = "Red";
            break;
        case 2:
            side = "Blue";
            break;
    }
    var user_dice_div = $('#user_dice_div');
    user_dice_div.html("<span>" + side + "</span>");
    $('#dice_button').attr('disabled', false);
    $('#start_button').attr('disabled', true);
}

function move(){
    $("td").each((a,b)=>{
        $(b).attr("style","");
    })

    $("#"+king).attr("style","background-color:black;");

}

function move2(){
    
}