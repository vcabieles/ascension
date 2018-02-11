$(function(){
var camera, scene, renderer;
var meshControls;
var arenaDom = {
    element: document.getElementById("arena"),
    container: document.getElementById("canvasContainer"),
    width: function (){ return this.container.clientWidth},
    height: function (){ return this.container.clientHeight},
    colors: ["#ba3748","#6d0e36","#8eecbb","#f4ad0e","#b91768"],
    randomPos: function () {
        return (Math.random() * (9-(-9)))+(-9)
    }
};

function init() {

    // #Camera & Scene
    camera = new THREE.PerspectiveCamera( 65, arenaDom.width() / arenaDom.height(), 0.01, 3000 );
    camera.name = "Camera";
    camera.position.set(0,0,0);
    scene = new THREE.Scene();
    scene.name = "Scene";
    scene.add(camera);

    // #Light
    const pointLight = new THREE.PointLight( 0xffffff, 1, 100 );
    pointLight.position.set( 10, 15, 15 );
    pointLight.name = "PointLight";
    scene.add( pointLight );



    renderer = new THREE.WebGLRenderer( { antialias: true, canvas: arenaDom.element} );
    renderer.setSize( arenaDom.width(), window.innerHeight );

    //#Controls
    meshControls = new THREE.MeshControls(camera,scene,arenaDom.element);

    meshControls.addEventListener("click",function(event){

    });
    meshControls.addEventListener("mouseup",function(event){

    });

    meshControls.addEventListener("dragend",function(event){


    });

    meshControls.addEventListener("dragstart",function(event){

    });

    meshControls.addEventListener("drag",function(event){

    });

    meshControls.addEventListener("keydown",function(event){

    });

}

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

init();
animate();

});