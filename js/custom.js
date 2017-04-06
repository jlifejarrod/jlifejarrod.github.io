
if ($("#owl-carousel1").length) {

  $("#owl-carousel1").owlCarousel({

    items:3,
    autoplayTimeout:5000,
    loop:true,
    autoplay:true,

  });

};

if ($("#owl-carousel2").length) {

  $("#owl-carousel2").owlCarousel({

    items:2,
    autoplayTimeout:5000,
    loop:true,
    autoplay:true,

  });

};

var flashInterval;

$('#box1').hover(
    function () {
    flashInterval = setInterval(function () {
        $('#box1').toggleClass('red-border');
    }, 100);
}, function () {
    clearInterval(flashInterval);
    $('#box1').removeClass('red-border');
});

var flashInterval;

$('#box2').hover(
    function () {
    flashInterval = setInterval(function () {
        $('#box2').toggleClass('red-border');
    }, 100);
}, function () {
    clearInterval(flashInterval);
    $('#box2').removeClass('red-border');
});

var flashInterval;

$('#box3').hover(
    function () {
    flashInterval = setInterval(function () {
        $('#box3').toggleClass('red-border');
    }, 100);
}, function () {
    clearInterval(flashInterval);
    $('#box3').removeClass('red-border');
});

var flashInterval;

$('#box4').hover(
    function () {
    flashInterval = setInterval(function () {
        $('#box4').toggleClass('red-border');
    }, 100);
}, function () {
    clearInterval(flashInterval);
    $('#box4').removeClass('red-border');
});

var flashInterval;

$('#box5').hover(
    function () {
    flashInterval = setInterval(function () {
        $('#box5').toggleClass('red-border');
    }, 100);
}, function () {
    clearInterval(flashInterval);
    $('#box5').removeClass('red-border');
});

var flashInterval;

$('#box6').hover(
    function () {
    flashInterval = setInterval(function () {
        $('#box6').toggleClass('red-border');
    }, 100);
}, function () {
    clearInterval(flashInterval);
    $('#box6').removeClass('red-border');
});

var flashInterval;

$('#footflash').hover(
    function () {
    flashInterval = setInterval(function () {
        $('#footflash').toggleClass('black-border');
    }, 150);
}, function () {
    clearInterval(flashInterval);
    $('#footflash').removeClass('black-border');
});

var flashInterval = setInterval(function() {
    $('#flash').toggleClass('yellow-border');
}, 200);

var flashInterval = setInterval(function() {
    $('#sat').toggleClass('white-flash');
}, 500);

var flashInterval = setInterval(function() {
    $('#hypnoc').toggleClass('show-flash');
}, 12000);


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


var lawn = new Audio('sounds/lawn-mower-07.mp3');

if ($("header").hasClass("home")){
   lawn.play(); 
}

var up = new Audio('sounds/The5thDimension-UpUpAndAway1967.mp3');

if ($("header").hasClass("ourteam")){
   up.play();
}

var modem = new Audio('sounds/dial-up-modem-02.mp3');

if ($("header").hasClass("contactus")){
   modem.play(); 
}

var power = new Audio('sounds/8d82b5_He-Man_I_Have_The_Power_Sound_Effect.mp3');

$("#heman").on("mouseover",function(){
   power.play();

});

var power = new Audio('sounds/8d82b5_He-Man_I_Have_The_Power_Sound_Effect.mp3');

$("#heman").on("mouseout",function(){
   power.pause();
   power.currentTime = 0;
});

var cat = new Audio('sounds/Kitty_Cat_Dance_Song_short.mp3');

$("#dcat1").on("mouseover",function(){
   cat.play();
});

var cat = new Audio('sounds/Kitty_Cat_Dance_Song_short.mp3');

$("#dcat1").on("mouseout",function(){
   cat.pause();
   cat.currentTime = 0;
});

var cat2 = new Audio('sounds/Kitty_Cat _Dance_Tecno_short.mp3');

$("#dcat2").on("mouseover",function(){
   cat2.play();
});

var cat2 = new Audio('sounds/Kitty_Cat _Dance_Tecno_short.mp3');

$("#dcat2").on("mouseout",function(){
    cat2.pause();
    cat2.currentTime = 0;
});

var pullstart = new Audio('sounds/26481__roscoetoon__lawnmower-ns.wav');

$("#start").on("mouseover",function(){
   pullstart.play();
});

var pullstart = new Audio('sounds/26481__roscoetoon__lawnmower-ns.wav');

$("#start").on("mouseout",function(){
    pullstart.pause();
    pullstart.currentTime = 0;
});

var streetfighter = new Audio('sounds/33.-guile-stage.mp3');

$("#magicbutton").on("mouseover",function(){
   streetfighter.play();
});

$("#magicbutton").on("mouseout",function(){
    streetfighter.pause();
    streetfighter.currentTime = 0;
});


var img1 = document.getElementById("magicbutton"),
    img2 = document.getElementById("macgyver"),
    img3 = document.getElementById("gremlin"),
    img4 = document.getElementById("vintageposter"),
    img5 = document.getElementById("dhalsim"),
    img6 = document.getElementById("sonicboom");

$("#magicbutton").on("mouseover",function(){
img2.style.display = "block",
img3.style.display = "block",
img4.style.display = "block",
img5.style.display = "block",
img6.style.display = "block";

});

$("#magicbutton").on("mouseout",function(){
img2.style.display = "none",
img3.style.display = "none",
img4.style.display = "none",
img5.style.display = "none",
img6.style.display = "none";

});

var img7 = document.getElementById("dcat1"),
    img8 = document.getElementById("musiccat1"),
    img9 = document.getElementById("musiccat2");

$("#dcat1").on("mouseover",function(){
img8.style.display = "block",
img9.style.display = "block";
});

$("#dcat1").on("mouseout",function(){
img8.style.display = "none",
img9.style.display = "none";
});

var img10 = document.getElementById("dcat2"),
    img11 = document.getElementById("djcat11"),
    img12 = document.getElementById("djcat2"),
    img13 = document.getElementById("djcat3");

$("#dcat2").on("mouseover",function(){
img11.style.display = "block",
img12.style.display = "block",
img13.style.display = "block";
});

$("#dcat2").on("mouseout",function(){
img11.style.display = "none",
img12.style.display = "none",
img13.style.display = "none";
});




// var img5 = document.getElementById("deletebutton"),
    // img6 = document.getElementById("taco");

// img5.onmouseover = function(){
// img6.style.display = "block";
// }

// img5.onmouseout = function(){
// img6.style.display = "none";
// }





document.getElementById('onButton').onclick = closeError;

function closeError() {
  document.getElementById('onButton').style.visibility = "hidden";
}

document.getElementById('onButton2').onclick = closeError2;

function closeError2() {
  document.getElementById('onButton2').style.visibility = "hidden";
}
