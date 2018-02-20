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
    camera.position.set(0,0,22);
    scene = new THREE.Scene();

    window.scene = scene;
    scene.name = "Scene";
    scene.add(camera);


    // #Light
    // var directionalLight = new THREE.DirectionalLight( 0xFFFFFF, 0.5 );
    // directionalLight.name = "directionalLight";
    // // directionalLight.rotateX(0.57);
    // // directionalLight.position.set(0,1,6);
    //
    // var directionalLighthelper = new THREE.DirectionalLightHelper( directionalLight, 3 );
    // directionalLighthelper.name = "directionalLighthelper";
    // scene.add( directionalLighthelper );
    // scene.add( directionalLight );

    // #HemLight
    // var light = new THREE.HemisphereLight( 0xffc87f, 0xecb613, 1 );
    var light = new THREE.HemisphereLight( 0xffc87f, 0x000000, 1 );
    light.position.y = 10;
    light.position.z = -5;
    light.name = "HemLight";
    var helper = new THREE.HemisphereLightHelper( light, 2);
    helper.name = "HemLightHelper";
    scene.add( light );
    scene.add( helper );


    var geometry = new THREE.SphereGeometry( 5, 32, 32 );
    var material = new THREE.MeshPhongMaterial( {color: 0x0000ff} );
    var star1 = new THREE.Mesh( geometry, material.clone() );
    star1.position.z = -22;
    star1.name = "star1";
    scene.add( star1 );
    var star2 = new THREE.Mesh( geometry, material.clone() );
    star2.name = "star2";
    star2.position.set(10,10,-50);
    star2.scale.set(0.25, 0.25, 0.25);
    star2.material.color.set(0xf4b380);
    scene.add(star2);
    var star3 = new THREE.Mesh( geometry, material.clone() );
    star3.name = "star3";
    star3.position.set(3,60,-90);
    star3.scale.set(0.33, 0.33, 0.33);
    star3.material.color.set(0x8c3b1e);
    scene.add(star3);
    var star4 = new THREE.Mesh( geometry, material.clone() );
    star4.name = "star4";
    star4.position.set(-100,-7,-180);
    star4.scale.set(0.33, 0.33, 0.33);
    star4.material.color.set(0x7fb7f0);
    scene.add(star4);
    var star5 = new THREE.Mesh( geometry, material.clone() );
    star5.name = "star5";
    star5.position.set(70,-32,-85);
    star5.scale.set(0.33, 0.33, 0.33);
    star5.material.color.set(0xb87d51);
    scene.add(star5);
    var star6 = new THREE.Mesh( geometry, material.clone() );
    star6.name = "star6";
    star6.position.set(0,-60,-200);
    star6.scale.set(0.33, 0.33, 0.33);
    star6.material.color.set(0xe26473);
    scene.add(star6);




    renderer = new THREE.WebGLRenderer( { antialias: true, canvas: arenaDom.element} );
    renderer.setSize( arenaDom.width(), arenaDom.height() );

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
        console.log(event);
    });

}

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

init();
animate();

});

