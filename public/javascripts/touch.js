/**
 * Created by p2admin on 11/12/2015.
 */

//$(document).on("pagecreate","#pageone",function(){
//    $("p").on("swipe",function(){
//        $("span").text("Swipe detected!");
//    });
//});

if( window.OrientationEvent || typeof(window.onorientationchange) != "undefined"){
    $('#pageone h2').html('This is a mobile device!');
} else {
    $('#pageone h2').html('This is not a mobile device!');
}