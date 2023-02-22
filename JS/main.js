var dic;
var king;
//var move_div = $('#move_div');
//var main_table = $('#main_table');

$(document).ready(function(){
    var mainTable = $('#main_table');
        for(var i = 1; i <= 13; i++){
            mainTable.append("<tr></tr>");
            for(var j = 1; j <= 31; j++){
                mainTable.append("<td id='" + abc(i) + "_" + j + "'></td>");
            }
        }

    $("td").on("click",(object)=>{
        //king = object.attr("id");
        king = object.target.id;
        console.log(object.target.id);
        console.log(object);
        move();
    })
})

function addTable(){
    var mainTable = $('#main_table');
    for(var i = 1; i <= 13; i++){
        mainTable.append("<tr></tr>");
        for(var j = 1; j <= 31; j++){
            mainTable.append("<td id='" + abc(i) + "_" + j + "'></td>");
        }
    }
}

function dice(){
    var dic = Math.floor(Math.random() * 24) + 1;
    var user_dice_div = $('#user_dice_div');
    user_dice_div.html("<span>" + dic + "</span>");
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
    for(let i=king.split("_")[0].charCodeAt(0)-65-dic; dic; i++){
        for(let j=king.split("_"[1]-dic); dic; j++){
           console.log(i+":"+j);
        }
    }
}

function move2(){
    
}