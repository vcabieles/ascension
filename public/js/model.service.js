var models = {
    loadModels: ()=>{
      this.sphereGeometry = new THREE.SphereGeometry( 20, 32, 32 );
      this.sphereMaterial = new THREE.MeshPhongMaterial( {color: 0x0000ff} );
    },
    newSphere: ()=>{
        return new THREE.Mesh(this.sphereGeometry, this.sphereMaterial.clone());
    },
    customSphere: (radius, color)=>{
        let geometry =  new THREE.SphereGeometry( radius, 32, 32 );
        let material = new THREE.MeshPhongMaterial( {color: color} );
        return new THREE.Mesh(geometry, material);
    },
    randomNum: (max, min)=>{
        return Math.floor(Math.random()*(max-min+1)+min);
    },
    colors: [
        new THREE.Color( 0xf4b380 ),
        new THREE.Color( 0x7fb7f0 ),
        new THREE.Color( 0x8c3b1e ),
        new THREE.Color( 0xb87d51 ),
        new THREE.Color( 0xe26473 )
    ]

};