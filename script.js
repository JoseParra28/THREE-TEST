// const { Mesh } = require("three")
// import * as THREE from 'three'
// import gsap from "gsap"


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 900,
    height: 850
}

// Scene
const scene = new THREE.Scene()

// Object
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: '#7c7d29'
})
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
cubeMesh.position.set(0.7, -0.6, 1)
cubeMesh.position.x = 0.7
cubeMesh.position.y = -0.6
cubeMesh.position.z = 1
scene.add(cubeMesh)

// Scale
// cubeMesh.scale.x = 2
// cubeMesh.scale.y = 0.5
// cubeMesh.scale.z = 0.5
// cubeMesh.scale.set(2, 0.5, 0.5)

// Rotation
// cubeMesh.rotation.reorder('YXZ')
// cubeMesh.rotation.x = Math.PI * 0.25
// cubeMesh.rotation.y = Math.PI * 0.25

// -----Objests
// const group = new THREE.Group()
// group.position.y = 1 
// group.scale.y = 2
// group.rotation.y = 1
// scene.add(group)

// const cube1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0xff0000})
// )
// group.add(cube1)

// const cube2 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0x00ff00})
// )
// cube2.position.x = -2
// group.add(cube2)

// const cube3 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0x0000ff})
// )
// cube3.position.x = 2
// group.add(cube3)


// Axis helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)


// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.y = 2
camera.position.x = 3
scene.add(camera)

camera.lookAt(cubeMesh.position)




// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Clock
const clock = new THREE.Clock()



// Animation
const tick = () => {

    // Clock
    const elapsedTime =clock.getElapsedTime()
    console.log(elapsedTime)

    // update objects
    camera.position.y = Math.sin(elapsedTime)
    camera.position.x = Math.sin(elapsedTime)
    camera.lookAt(cubeMesh.position)
   
  
// renderer
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()