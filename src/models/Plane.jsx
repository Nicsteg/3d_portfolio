import { useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = ({ isRotate, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        //console.log('isRotate:', isRotate);
        if (isRotate) {
            actions['Take 001'].reset().play();
        } else {
            actions['Take 001'].stop();
        }
    }, [ actions, isRotate]); // Only react to changes in isRotate

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    );
}

export default Plane;
