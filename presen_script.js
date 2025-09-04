'use strict';


function clickedButton(){
    let output = document.getElementById("answer1");
    let input = document.getElementById("textbox");
    if (input.value === "あろうず"){
        output.innerHTML = "正解です！";
    } else {
        output.innerHTML = "不正解です！";
    }
}

function buttonClick(){
    let input = document.querySelector('input[name="howManyPeople"]:checked');
    let output = document.getElementById("answer2");

    if (input.value === "5,715"){
        output.innerHTML = "正解です！"
    } else {
        output.innerHTML = "不正解です！"
    }
}





// 最後のボタンをクリックしたらどんな動きをしてほしいのかのイメージ


