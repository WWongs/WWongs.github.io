var myself = document.getElementById("myself"),
    iconfont = document.getElementById("iconfont"),
    list = document.getElementById("list"),
    main = document.getElementById("main"),
    body = document.getElementsByClassName("body")[0];

var Fadeflag = true;

function Fade() {
    this.show = function(obj) {
        var num = 0;
        if (Fadeflag) {
            var st = setInterval(function() {
                num++;
                Fadeflag = false;
                obj.style.opacity = num / 10;
                if (num >= 10) {
                    clearInterval(st);
                    Fadeflag = true;
                }
            }, 40);
        }
    }
}
var fade = new Fade();
fade.show(myself);
fade.show(iconfont);
fade.show(list);
fade.show(main);
// fade.show(body);

// function Slidedown(){

//    this.show = function(obj){
//       var num = 120;
//       var timer = setInterval(function(){
//       	if(num <= 150){
//       		num += 2;
//       		obj.style.marginTop = num + "px";
//       	}else{
//       		clearInterval(timer);
//       	}
//       },20);
//    }

// }
// var slide = new Slidedown();
// slide.show(main);