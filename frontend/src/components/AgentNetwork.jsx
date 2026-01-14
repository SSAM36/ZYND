import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Utility to convert Lat/Lon to 3D position
const calcPosFromLatLonRad = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));
  return [x, y, z];
};

const AgentNode = ({ position, color, role, label, delay = 0 }) => {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + delay;
    // Pulse effect
    const scale = 1 + Math.sin(t * 3) * 0.1;
    if (meshRef.current) meshRef.current.scale.set(scale, scale, scale);

    // Ring rotation
    if (ringRef.current) {
      ringRef.current.rotation.z = t;
      ringRef.current.rotation.x = t * 0.5;
      const ringScale = 1.2 + Math.sin(t * 2) * 0.2;
      ringRef.current.scale.set(ringScale, ringScale, ringScale);
    }
  });

  return (
    <group position={position}>
      {/* Core Node */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>

      {/* Outer Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.12, 0.01, 16, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} />
      </mesh>

      {/* Point Light for Glow */}
      <pointLight color={color} distance={2} intensity={2} decay={2} />


    </group>
  );
};

const ConnectionLine = ({ start, end, color }) => {
  // Animated line effect
  return (
    <Line
      points={[start, end]}
      color={color}
      lineWidth={1}
      transparent
      opacity={0.3}
      dashed={true}
      dashScale={50}
      dashSize={2}
      dashOffset={0}
    />
  );
};

const AgentNetwork = ({ crisisLevel = 'NORMAL' }) => {
  // Define Agents with Lat/Lon (approx locations of data centers or key regions)
  const agents = useMemo(() => [
    { id: 1, role: 'Prediction', lat: 34.05, lon: -118.24, color: '#4cc9f0' }, // LA
    { id: 2, role: 'Verification', lat: 51.50, lon: -0.12, color: '#7209b7' }, // London
    { id: 3, role: 'Coordination', lat: 35.67, lon: 139.65, color: '#f72585' }, // Tokyo
    { id: 4, role: 'Resources', lat: -33.86, lon: 151.20, color: '#4361ee' }, // Sydney
    { id: 5, role: 'Alerts', lat: 19.07, lon: 72.87, color: '#ffbd00' }, // Mumbai
  ], []);

  const agentPositions = useMemo(() => {
    return agents.map(agent => ({
      ...agent,
      pos: calcPosFromLatLonRad(agent.lat, agent.lon, 1.2) // Slightly above surface (Earth is r=1)
    }));
  }, [agents]);

  // Create connections between all agents (mesh topology)
  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < agentPositions.length; i++) {
      for (let j = i + 1; j < agentPositions.length; j++) {
        lines.push({
          start: agentPositions[i].pos,
          end: agentPositions[j].pos,
          color: '#4cc9f0'
        });
      }
    }
    return lines;
  }, [agentPositions]);

  return (
    <group rotation={[0, 0, 23.5 * Math.PI / 180]}>
      {agentPositions.map((agent, idx) => (
        <AgentNode
          key={agent.id}
          position={agent.pos}
          color={agent.color}
          role={agent.role}
          delay={idx * 0.5}
        />
      ))}

      {connections.map((conn, idx) => (
        <ConnectionLine
          key={idx}
          start={conn.start}
          end={conn.end}
          color={conn.color}
        />
      ))}
    </group>
  );
};

export default AgentNetwork;
