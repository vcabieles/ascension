/**
 * Created by vcabieles on 6/29/16.
 */
$( document ).ready(function () {

    ///// Sequence bounce on home page.
    
    var _bounce = setTimeout(bounceOn, 2000);
    function bounceOn() {

        $("#box1").effect( "bounce", {times:1}, 2300, function(){
            $("#box2").effect( "bounce", {times:1}, 2300, function(){
                $("#box3").effect( "bounce", {times:1}, 2300);

            });
        });

        clearInterval(_bounce);
    }

    ///// End Sequence bounce.
    
    
    
});