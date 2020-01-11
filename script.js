//targetとeventのボタンを押した時にactive classを実装する
//targetを押した場合は複数選択
//どれが今押されているかを配列で格納する
//targetボタンを押した時の処理
var target_console_list = document.querySelectorAll('#target_select_toggle li a');
var type_target_array = new Array();
var test_array;
$(function() {
    array = document.getElementsByClassName('square');
    for (let index = 0; index < array.length; index++) {
        element = array[index];
        
    }
    target_console_list.forEach(function(val, index, ar) {
        val.addEventListener('click', function(event) {
            array = document.getElementsByClassName('square');
            for (let index = 0; index < array.length; index++) {
                element = array[index];
                element.style.backgroundColor = 'white';
                
            }
            if (this.className) {
                delete type_target_array[index];
                this.classList.remove("active");
//                square_1.removeEventListener(active, {handleEvent: console_output2});
            } else {
                type_target_array[index] = val.textContent;
                this.classList.add("active");
            }
        }, false);
    });
});

//eventを押した場合は排他制御
//どのイベントで実行するか変数に格納する
//eventボタンを押した時の処理
var event_console_list = document.querySelectorAll('#event_select_toggle li a');
var active = '';
$(function() {
    event_console_list.forEach(function(val, index, ar) {
        val.addEventListener('click', function(event) {
            array = document.getElementsByClassName('square');
            for (let index = 0; index < array.length; index++) {
                element = array[index];
                element.style.backgroundColor = 'white';
                
            }
            $(this).css('pointer-events','none');
            if (!this.className) {
                this.classList.add("active");
                //activeを保持したtextデータを取得して別の関数で使用できるようにする。
                active = val.textContent;;
                console.log(active);
                console_output(type_target_array, active);  
            }
        }, false);
    });
});

//target eventの選択を行ったら、squire_1にホバーすることでコンソールにeventtype,targettype,target_idを出力させる
function console_output(type_target_array, active) {
    var count = 0;
    console_output2 = function() {
        console.log(count ++);
        console.log(this.name);
        var target_id = event.target === null ? '' : event.target.id;
        var relatedTarget_id = event.relatedTarget === null ? '' : event.relatedTarget.id;
        var currentTarget_id = event.currentTarget === null ? '' : event.currentTarget.id;

        type_target_array.forEach(function(type_target) {
            if (type_target == 'target') {
                document.getElementById('output').innerHTML +=
                    event.type + ': ' + '<span style="color:red;">' +
                    'target=[' + 'id=' + target_id + "]" +
                    '</span><br />';
            }

            if (type_target == 'relatedTarget') {
                document.getElementById('output').innerHTML +=
                    event.type + ': ' + '<span style="color:blue;">' +
                    'relatedTarget=[' + 'id=' + relatedTarget_id + "]" +
                    '</span><br />';
            }
            if (type_target == 'currentTarget') {
                document.getElementById('output').innerHTML +=
                    event.type + ': ' + '<span style="color:green;">' +
                    'currentTarget=[' + 'id=' + currentTarget_id + "]" +
                    '</span><br />';
            }
            event.target.style.background = 'pink'
            $('#output').animate({ 'scrollTop': $('#output')[0].scrollHeight }, { duration: 'slow' });
        });
    }
    console.log(active);
    square_1.addEventListener(active, {name: active,handleEvent: console_output2}, false);
}

//accourdionメニュー　表示　非表示設定
//target select
$("#target_select_toggle").toggle();
$("#target_select").click(function() {
    var setLeft = $(this).position().left;
    var setTop = $(this).position().top + $(this).outerHeight();
    $("#target_select_toggle").css("left", setLeft);
    $("#target_select_toggle").css("top", setTop);
    $("#target_select_toggle").slideToggle();
});

//event select
$("#event_select_toggle").toggle();
$("#event_select").click(function() {
    var setLeft = $(this).position().left;
    var setTop = $(this).position().top + $(this).outerHeight();
    $("#event_select_toggle").css("left", setLeft);
    $("#event_select_toggle").css("top", setTop);
    $("#event_select_toggle").slideToggle();
});