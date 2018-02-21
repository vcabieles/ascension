$(function(){
    models.loadModels();
    let camera, scene, renderer, meshControls;
    let arenaDom = {
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

        for(let i=0; i<200; i++){
            let neo = models.newSphere();
            let randomSize = Math.random();
            let randomColor = models.colors[Math.floor(Math.random() * 5)];
            neo.name = "star "+i;
            neo.material.color = randomColor;
            neo.scale.set(randomSize,randomSize,randomSize);
            neo.position.set(models.randomNum(1500,-1500),models.randomNum(2500,-2500),models.randomNum(-800,-4800));
            scene.add(neo)
        }

        for(let i=0; i<200; i++){
            let neo = models.newSphere();
            let randomSize = Math.random();
            let randomColor = models.colors[Math.floor(Math.random() * 5)];
            neo.name = "star "+i;
            neo.material.color = randomColor;
            neo.scale.set(randomSize,randomSize,randomSize);
            neo.position.set(models.randomNum(1500,-1500),models.randomNum(2500,-2500),models.randomNum(4800,800));
            scene.add(neo)
        }

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
            if(event.mouseEvent.key === "w"){
                camera.position.z -= 1;
                camera.updateProjectionMatrix();
            }else if(event.mouseEvent.key === "s"){
                camera.position.z += 1;
                camera.updateProjectionMatrix();
            }
        });

    }

    function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    }

    init();
    animate();

});

