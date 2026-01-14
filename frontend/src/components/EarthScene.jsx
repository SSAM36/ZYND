import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, useTexture, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useEarthTextures } from '../hooks/useEarthTextures';

const FloodMarker = ({ lat, lon, intensity = 1 }) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const radius = 1.01; // Just above earth surface
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = (radius * Math.sin(phi) * Math.sin(theta));
    const y = (radius * Math.cos(phi));
    const position = [x, y, z];

    const meshRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (meshRef.current) {
            const scale = 1 + Math.sin(t * 4) * 0.05 * intensity;
            meshRef.current.scale.set(scale, scale, scale);
            meshRef.current.material.opacity = 0.6 + Math.sin(t * 4) * 0.3;
        }
    });

    return (
        <mesh ref={meshRef} position={position} lookAt={(new THREE.Vector3(...position)).multiplyScalar(2)}>
            <circleGeometry args={[0.08 * intensity, 32]} />
            <meshBasicMaterial color="#ff3b30" transparent opacity={0.6} side={THREE.DoubleSide} depthWrite={false} />
        </mesh>
    );
};

const EarthScene = ({ setRotation, crisisLevel = 'NORMAL' }) => {
    const earthRef = useRef();
    const cloudsRef = useRef();
    const groupRef = useRef();
    const wireframeRef = useRef();

    // Load textures
    const { colorMap, normalMap, specularMap, cloudsMap, lightsMap } = useEarthTextures();

    // Mock high-risk flood zones
    const floodZones = [
        { lat: 13.75, lon: 100.50, intensity: 1.5 }, // Bangkok
        { lat: 23.81, lon: 90.41, intensity: 1.8 }, // Dhaka
        { lat: 25.76, lon: -80.19, intensity: 1.2 }, // Miami
    ];

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        // Rotate Earth slowly
        if (earthRef.current) {
            earthRef.current.rotation.y = elapsedTime / 20;
        }

        // Rotate Clouds slightly faster/independently
        if (cloudsRef.current) {
            cloudsRef.current.rotation.y = elapsedTime / 15 + 0.5; // Offset start
        }
    });

    return (
        <group ref={groupRef} rotation={[0, 0, 23.5 * Math.PI / 180]} >
            {/* Cinematic Atmosphere Glow */}
            <mesh scale={[1.15, 1.15, 1.15]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshBasicMaterial
                    color={crisisLevel === 'EMERGENCY' ? "#ff5500" : "#4db5ff"}
                    transparent
                    opacity={0.15}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Clouds Layer - Enhanced */}
            <mesh ref={cloudsRef} scale={[1.02, 1.02, 1.02]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    map={cloudsMap}
                    transparent={true}
                    opacity={0.5}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Earth Sphere - Premium Material */}
            <mesh ref={earthRef}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshPhongMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    specularMap={specularMap}
                    shininess={15}
                    specular={new THREE.Color(0x333333)}
                />
            </mesh>

            {/* Night Lights */}
            <mesh scale={[1.002, 1.002, 1.002]} rotation={[0, 0, 0]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshBasicMaterial
                    map={lightsMap}
                    transparent={true}
                    opacity={0.6}
                    blending={THREE.AdditiveBlending}
                    color={crisisLevel === 'EMERGENCY' ? "#ffaa55" : "#ffccaa"} // Tint redder in emergency
                />
            </mesh>

            {/* Flood Risk Markers */}
            <group rotation={[0, -Math.PI / 2, 0]}> {/* Adjusting rotation to match texture mapping usually if needed, mostly just container */}
                {floodZones.map((zone, idx) => (
                    <FloodMarker key={idx} {...zone} />
                ))}
            </group>

        </group>
    );
};

export default EarthScene;
