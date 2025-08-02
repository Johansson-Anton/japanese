import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import Header from './Header';

// Pachinko game component
const PachinkoGame = ({ onGoBack }) => {
    const mountRef = useRef(null);
    const ballDropRef = useRef(() => {});

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x334155);

        const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 100);
        camera.position.set(0, 10, 20);
        camera.lookAt(0, 10, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        mountRef.current.appendChild(renderer.domElement);

        const onWindowResize = () => {
            if (!mountRef.current) return;
            camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        };
        window.addEventListener('resize', onWindowResize);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 20, 15);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 50;
        directionalLight.shadow.camera.left = -20;
        directionalLight.shadow.camera.right = 20;
        directionalLight.shadow.camera.top = 20;
        directionalLight.shadow.camera.bottom = -20;
        scene.add(directionalLight);

        const world = new CANNON.World();
        world.gravity.set(0, -9.82, 0);

        const groundShape = new CANNON.Plane();
        const groundBody = new CANNON.Body({ mass: 0, shape: groundShape });
        groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
        world.addBody(groundBody);

        const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x6b7280 });
        const wallShape = new CANNON.Box(new CANNON.Vec3(1, 10, 1));
        const pegMaterial = new THREE.MeshStandardMaterial({ color: 0x9ca3af });
        const pegShape = new CANNON.Sphere(0.25);

        const createWalls = () => {
            const wallPositions = [
                [-7.5, 10, 0],
                [7.5, 10, 0],
            ];
            wallPositions.forEach(([x, y, z]) => {
                const wallMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 20, 1), wallMaterial);
                wallMesh.position.set(x, y, z);
                wallMesh.castShadow = true;
                wallMesh.receiveShadow = true;
                scene.add(wallMesh);

                const wallBody = new CANNON.Body({ mass: 0, shape: wallShape });
                wallBody.position.set(x, y, z);
                world.addBody(wallBody);
            });
        };

        const createPegs = () => {
            const pegRadius = 0.25;
            const pegGeometry = new THREE.SphereGeometry(pegRadius, 16, 16);
            const pegPositions = [];

            for (let y = 3; y < 18; y += 1) {
                const rowOffset = (y % 2 === 0) ? 0.5 : 0;
                for (let x = -6; x <= 6; x += 1) {
                    if (x + rowOffset > -7 && x + rowOffset < 7) {
                        pegPositions.push(new THREE.Vector3(x + rowOffset, y, 0));
                    }
                }
            }

            pegPositions.forEach(pos => {
                const pegMesh = new THREE.Mesh(pegGeometry, pegMaterial);
                pegMesh.position.copy(pos);
                pegMesh.castShadow = true;
                pegMesh.receiveShadow = true;
                scene.add(pegMesh);

                const pegBody = new CANNON.Body({ mass: 0, shape: pegShape });
                pegBody.position.copy(pos);
                world.addBody(pegBody);
            });
        };

        createWalls();
        createPegs();

        let balls = [];
        const dropBall = () => {
            const ballRadius = 0.5;
            const ballGeometry = new THREE.SphereGeometry(ballRadius, 32, 32);
            const ballMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
            ballMesh.castShadow = true;

            const ballShape = new CANNON.Sphere(ballRadius);
            const ballBody = new CANNON.Body({ mass: 1, shape: ballShape });
            ballBody.position.set(0, 15, 0); // Drop from the top center

            ballBody.pachinkoMesh = ballMesh;

            scene.add(ballMesh);
            world.addBody(ballBody);

            balls.push({ mesh: ballMesh, body: ballBody });
        };

        ballDropRef.current = dropBall;

        const animate = () => {
            requestAnimationFrame(animate);
            world.step(1/60);

            balls.forEach(ball => {
                ball.mesh.position.copy(ball.body.position);
                ball.mesh.quaternion.copy(ball.body.quaternion);
            });

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            window.removeEventListener('resize', onWindowResize);
        };

    }, []);

    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white flex flex-col items-center">
            <Header title="Pachinko Game" onGoBack={onGoBack} />
            <div className="flex-grow flex flex-col items-center justify-center p-4 w-full">
                <div ref={mountRef} className="pachinko-game-container rounded-2xl shadow-xl overflow-hidden mb-6">
                    {/* The 3D canvas will be rendered here */}
                </div>
                <button
                    onClick={() => ballDropRef.current()}
                    className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full text-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                    Drop Ball
                </button>
            </div>
        </div>
    );
};

export default PachinkoGame;
