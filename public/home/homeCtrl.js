/**
 * Created by victo on 6/29/2016.
 */

(function(){
    
    angular.module('app').
    controller("homeCtrl",homeCtrl);

    
    
    function homeCtrl(){
        var home = this;
        
        home.title = "Whut up biatch";
    }
    
}());
