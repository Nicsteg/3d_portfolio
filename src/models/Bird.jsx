import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import birdScene from '../assets/3d/bird.glb';

const Bird = () => {
    const { scene, animations } = useGLTF(birdScene);
    const ref = useRef(); // Create a reference to the mesh
    const { actions } = useAnimations(animations, ref); // Get the actions from the animations

    useEffect(() => {
        if (actions['Take 001']) {  // Ensure the action exists
            actions['Take 001'].play();
        }
    }, [actions]); // Include actions in the dependency array

    useFrame((state) => { 
        if (ref.current) {  // Check if ref.current is available
            // Update position based on elapsed time for a smooth wave-like motion
            ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2 + 2;

            // Adjust bird's x position and rotation based on camera position
            if (ref.current.position.x > state.camera.position.x + 10) {
                ref.current.rotation.y = Math.PI;
            } else if (ref.current.position.x < state.camera.position.x - 10) {
                ref.current.rotation.y = 0;
            }

            if (ref.current.rotation.y === 0) {
              ref.current.position.x += 0.01;
              ref.current.position.z -= 0.01;
            } else {
              ref.current.position.x -= 0.01;
              ref.current.position.z -= 0.01;
            }
        }
    });

    return (
        <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={ref}>
            <primitive object={scene} />
        </mesh>
    );
}

export default Bird;
