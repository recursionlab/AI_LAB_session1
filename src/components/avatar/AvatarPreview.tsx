"use client";

import React from 'react';
import { AvatarConfig } from '@/types/avatar';

interface AvatarPreviewProps {
  config: AvatarConfig;
  size?: number;
}

export function AvatarPreview({ config, size = 300 }: AvatarPreviewProps) {
  const getFacePath = () => {
    switch (config.faceShape) {
      case 'round':
        return `M ${size/2} ${size*0.15} 
                A ${size*0.35} ${size*0.35} 0 1 1 ${size/2} ${size*0.85}
                A ${size*0.35} ${size*0.35} 0 1 1 ${size/2} ${size*0.15}`;
      case 'square':
        return `M ${size*0.2} ${size*0.15}
                L ${size*0.8} ${size*0.15}
                L ${size*0.85} ${size*0.5}
                L ${size*0.8} ${size*0.85}
                L ${size*0.2} ${size*0.85}
                L ${size*0.15} ${size*0.5}
                Z`;
      case 'heart':
        return `M ${size/2} ${size*0.85}
                C ${size*0.15} ${size*0.6} ${size*0.1} ${size*0.3} ${size*0.3} ${size*0.15}
                C ${size*0.45} ${size*0.05} ${size/2} ${size*0.15} ${size/2} ${size*0.25}
                C ${size/2} ${size*0.15} ${size*0.55} ${size*0.05} ${size*0.7} ${size*0.15}
                C ${size*0.9} ${size*0.3} ${size*0.85} ${size*0.6} ${size/2} ${size*0.85}`;
      case 'oblong':
        return `M ${size/2} ${size*0.1}
                A ${size*0.3} ${size*0.4} 0 1 1 ${size/2} ${size*0.9}
                A ${size*0.3} ${size*0.4} 0 1 1 ${size/2} ${size*0.1}`;
      default: // oval
        return `M ${size/2} ${size*0.12}
                A ${size*0.32} ${size*0.38} 0 1 1 ${size/2} ${size*0.88}
                A ${size*0.32} ${size*0.38} 0 1 1 ${size/2} ${size*0.12}`;
    }
  };

  const getEyes = () => {
    const eyeY = size * 0.42;
    const eyeSpacing = (config.eyeSpacing / 100) * size * 0.15 + size * 0.1;
    const eyeSize = (config.eyeSize / 100) * size * 0.06 + size * 0.02;
    const leftEyeX = size/2 - eyeSpacing;
    const rightEyeX = size/2 + eyeSpacing;

    const getEyePath = (cx: number, cy: number) => {
      switch (config.eyeShape) {
        case 'round':
          return (
            <>
              <ellipse cx={cx} cy={cy} rx={eyeSize} ry={eyeSize} fill="white" />
              <circle cx={cx} cy={cy} r={eyeSize * 0.6} fill={config.eyeColor} />
              <circle cx={cx - eyeSize * 0.15} cy={cy - eyeSize * 0.15} r={eyeSize * 0.2} fill="white" />
            </>
          );
        case 'monolid':
          return (
            <>
              <ellipse cx={cx} cy={cy} rx={eyeSize * 1.2} ry={eyeSize * 0.5} fill="white" />
              <ellipse cx={cx} cy={cy} rx={eyeSize * 0.5} ry={eyeSize * 0.5} fill={config.eyeColor} />
              <circle cx={cx - eyeSize * 0.1} cy={cy - eyeSize * 0.1} r={eyeSize * 0.15} fill="white" />
            </>
          );
        case 'hooded':
          return (
            <>
              <ellipse cx={cx} cy={cy} rx={eyeSize} ry={eyeSize * 0.7} fill="white" />
              <ellipse cx={cx} cy={cy + eyeSize * 0.1} rx={eyeSize * 0.6} ry={eyeSize * 0.5} fill={config.eyeColor} />
              <circle cx={cx - eyeSize * 0.1} cy={cy} r={eyeSize * 0.15} fill="white" />
              <path d={`M ${cx - eyeSize} ${cy - eyeSize * 0.3} Q ${cx} ${cy - eyeSize * 0.8} ${cx + eyeSize} ${cy - eyeSize * 0.3}`} 
                    stroke={config.skinTone} strokeWidth={eyeSize * 0.4} fill="none" />
            </>
          );
        case 'upturned':
          return (
            <>
              <ellipse cx={cx} cy={cy} rx={eyeSize * 1.1} ry={eyeSize * 0.8} fill="white" />
              <circle cx={cx} cy={cy} r={eyeSize * 0.55} fill={config.eyeColor} />
              <circle cx={cx - eyeSize * 0.12} cy={cy - eyeSize * 0.12} r={eyeSize * 0.18} fill="white" />
              <path d={`M ${cx - eyeSize * 1.1} ${cy} Q ${cx} ${cy - eyeSize * 0.3} ${cx + eyeSize * 1.1} ${cy + eyeSize * 0.2}`} 
                    stroke={config.skinTone} strokeWidth={eyeSize * 0.3} fill="none" />
            </>
          );
        default: // almond
          return (
            <>
              <ellipse cx={cx} cy={cy} rx={eyeSize * 1.2} ry={eyeSize * 0.8} fill="white" />
              <ellipse cx={cx} cy={cy} rx={eyeSize * 0.6} ry={eyeSize * 0.7} fill={config.eyeColor} />
              <circle cx={cx - eyeSize * 0.15} cy={cy - eyeSize * 0.15} r={eyeSize * 0.2} fill="white" />
            </>
          );
      }
    };

    return (
      <>
        <g>{getEyePath(leftEyeX, eyeY)}</g>
        <g>{getEyePath(rightEyeX, eyeY)}</g>
      </>
    );
  };

  const getEyebrows = () => {
    const browY = size * 0.35;
    const eyeSpacing = (config.eyeSpacing / 100) * size * 0.15 + size * 0.1;
    const browWidth = size * 0.08;
    const leftBrowX = size/2 - eyeSpacing;
    const rightBrowX = size/2 + eyeSpacing;

    const getBrowPath = (cx: number, isLeft: boolean) => {
      const dir = isLeft ? -1 : 1;
      switch (config.eyebrowShape) {
        case 'thick':
          return (
            <path 
              d={`M ${cx - browWidth} ${browY} Q ${cx} ${browY - size*0.03} ${cx + browWidth} ${browY + size*0.01}`}
              stroke={config.eyebrowColor}
              strokeWidth={size * 0.025}
              fill="none"
              strokeLinecap="round"
            />
          );
        case 'thin':
          return (
            <path 
              d={`M ${cx - browWidth} ${browY} Q ${cx} ${browY - size*0.02} ${cx + browWidth} ${browY + size*0.01}`}
              stroke={config.eyebrowColor}
              strokeWidth={size * 0.008}
              fill="none"
              strokeLinecap="round"
            />
          );
        case 'arched':
          return (
            <path 
              d={`M ${cx - browWidth} ${browY + size*0.01} Q ${cx - browWidth*0.3} ${browY - size*0.05} ${cx + browWidth} ${browY + size*0.01}`}
              stroke={config.eyebrowColor}
              strokeWidth={size * 0.015}
              fill="none"
              strokeLinecap="round"
            />
          );
        case 'straight':
          return (
            <line 
              x1={cx - browWidth}
              y1={browY}
              x2={cx + browWidth}
              y2={browY}
              stroke={config.eyebrowColor}
              strokeWidth={size * 0.015}
              strokeLinecap="round"
            />
          );
        default: // natural
          return (
            <path 
              d={`M ${cx - browWidth} ${browY + size*0.005} Q ${cx} ${browY - size*0.025} ${cx + browWidth} ${browY + size*0.005}`}
              stroke={config.eyebrowColor}
              strokeWidth={size * 0.015}
              fill="none"
              strokeLinecap="round"
            />
          );
      }
    };

    return (
      <>
        {getBrowPath(leftBrowX, true)}
        {getBrowPath(rightBrowX, false)}
      </>
    );
  };

  const getNose = () => {
    const noseY = size * 0.5;
    const noseX = size / 2;

    switch (config.noseShape) {
      case 'small':
        return (
          <path 
            d={`M ${noseX} ${noseY - size*0.05} L ${noseX} ${noseY + size*0.03}`}
            stroke={config.skinTone}
            strokeWidth={size * 0.015}
            fill="none"
            strokeLinecap="round"
            style={{ filter: 'brightness(0.85)' }}
          />
        );
      case 'large':
        return (
          <path 
            d={`M ${noseX} ${noseY - size*0.08} 
                Q ${noseX - size*0.04} ${noseY} ${noseX - size*0.03} ${noseY + size*0.06}
                M ${noseX} ${noseY - size*0.08}
                Q ${noseX + size*0.04} ${noseY} ${noseX + size*0.03} ${noseY + size*0.06}`}
            stroke={config.skinTone}
            strokeWidth={size * 0.02}
            fill="none"
            strokeLinecap="round"
            style={{ filter: 'brightness(0.85)' }}
          />
        );
      case 'pointed':
        return (
          <path 
            d={`M ${noseX} ${noseY - size*0.06} 
                L ${noseX - size*0.01} ${noseY + size*0.05}
                L ${noseX + size*0.01} ${noseY + size*0.05}
                Z`}
            fill={config.skinTone}
            style={{ filter: 'brightness(0.85)' }}
          />
        );
      case 'button':
        return (
          <>
            <path 
              d={`M ${noseX} ${noseY - size*0.04} L ${noseX} ${noseY + size*0.02}`}
              stroke={config.skinTone}
              strokeWidth={size * 0.018}
              fill="none"
              strokeLinecap="round"
              style={{ filter: 'brightness(0.85)' }}
            />
            <circle 
              cx={noseX} 
              cy={noseY + size*0.03} 
              r={size * 0.015} 
              fill={config.skinTone}
              style={{ filter: 'brightness(0.85)' }}
            />
          </>
        );
      default: // medium
        return (
          <path 
            d={`M ${noseX} ${noseY - size*0.06} 
                Q ${noseX - size*0.025} ${noseY + size*0.01} ${noseX - size*0.02} ${noseY + size*0.04}
                M ${noseX} ${noseY - size*0.06}
                Q ${noseX + size*0.025} ${noseY + size*0.01} ${noseX + size*0.02} ${noseY + size*0.04}`}
            stroke={config.skinTone}
            strokeWidth={size * 0.018}
            fill="none"
            strokeLinecap="round"
            style={{ filter: 'brightness(0.85)' }}
          />
        );
    }
  };

  const getMouth = () => {
    const mouthY = size * 0.62;
    const mouthX = size / 2;

    switch (config.mouthShape) {
      case 'smile':
        return (
          <>
            <path 
              d={`M ${mouthX - size*0.08} ${mouthY} Q ${mouthX} ${mouthY + size*0.06} ${mouthX + size*0.08} ${mouthY}`}
              stroke={config.lipColor}
              strokeWidth={size * 0.02}
              fill="none"
              strokeLinecap="round"
            />
            <path 
              d={`M ${mouthX - size*0.06} ${mouthY + size*0.005} Q ${mouthX} ${mouthY + size*0.04} ${mouthX + size*0.06} ${mouthY + size*0.005}`}
              fill={config.lipColor}
              opacity={0.3}
            />
          </>
        );
      case 'frown':
        return (
          <path 
            d={`M ${mouthX - size*0.07} ${mouthY + size*0.02} Q ${mouthX} ${mouthY - size*0.03} ${mouthX + size*0.07} ${mouthY + size*0.02}`}
            stroke={config.lipColor}
            strokeWidth={size * 0.02}
            fill="none"
            strokeLinecap="round"
          />
        );
      case 'wide':
        return (
          <>
            <ellipse 
              cx={mouthX} 
              cy={mouthY} 
              rx={size * 0.1} 
              ry={size * 0.04} 
              fill={config.lipColor}
            />
            <ellipse 
              cx={mouthX} 
              cy={mouthY + size*0.01} 
              rx={size * 0.08} 
              ry={size * 0.02} 
              fill="#fff"
              opacity={0.9}
            />
          </>
        );
      case 'small':
        return (
          <ellipse 
            cx={mouthX} 
            cy={mouthY} 
            rx={size * 0.03} 
            ry={size * 0.02} 
            fill={config.lipColor}
          />
        );
      default: // neutral
        return (
          <path 
            d={`M ${mouthX - size*0.06} ${mouthY} L ${mouthX + size*0.06} ${mouthY}`}
            stroke={config.lipColor}
            strokeWidth={size * 0.018}
            fill="none"
            strokeLinecap="round"
          />
        );
    }
  };

  const getHair = () => {
    const hairY = size * 0.12;
    const centerX = size / 2;

    switch (config.hairStyle) {
      case 'short':
        return (
          <path 
            d={`M ${size*0.25} ${size*0.3}
                Q ${size*0.2} ${size*0.15} ${size*0.35} ${size*0.08}
                Q ${size*0.5} ${size*0.02} ${size*0.65} ${size*0.08}
                Q ${size*0.8} ${size*0.15} ${size*0.75} ${size*0.3}
                Q ${size*0.7} ${size*0.2} ${size/2} ${size*0.18}
                Q ${size*0.3} ${size*0.2} ${size*0.25} ${size*0.3}`}
            fill={config.hairColor}
          />
        );
      case 'medium':
        return (
          <path 
            d={`M ${size*0.2} ${size*0.4}
                Q ${size*0.15} ${size*0.2} ${size*0.3} ${size*0.08}
                Q ${size*0.5} ${size*0.0} ${size*0.7} ${size*0.08}
                Q ${size*0.85} ${size*0.2} ${size*0.8} ${size*0.4}
                Q ${size*0.75} ${size*0.25} ${size/2} ${size*0.2}
                Q ${size*0.25} ${size*0.25} ${size*0.2} ${size*0.4}`}
            fill={config.hairColor}
          />
        );
      case 'long':
        return (
          <path 
            d={`M ${size*0.15} ${size*0.6}
                Q ${size*0.1} ${size*0.3} ${size*0.25} ${size*0.08}
                Q ${size*0.5} ${size*-0.02} ${size*0.75} ${size*0.08}
                Q ${size*0.9} ${size*0.3} ${size*0.85} ${size*0.6}
                Q ${size*0.8} ${size*0.35} ${size/2} ${size*0.25}
                Q ${size*0.2} ${size*0.35} ${size*0.15} ${size*0.6}`}
            fill={config.hairColor}
          />
        );
      case 'buzz':
        return (
          <path 
            d={`M ${size*0.28} ${size*0.28}
                Q ${size*0.25} ${size*0.18} ${size*0.38} ${size*0.12}
                Q ${size*0.5} ${size*0.08} ${size*0.62} ${size*0.12}
                Q ${size*0.75} ${size*0.18} ${size*0.72} ${size*0.28}
                Q ${size*0.68} ${size*0.2} ${size/2} ${size*0.18}
                Q ${size*0.32} ${size*0.2} ${size*0.28} ${size*0.28}`}
            fill={config.hairColor}
          />
        );
      case 'curly':
        return (
          <>
            {[...Array(12)].map((_, i) => {
              const angle = (i / 12) * Math.PI * 2 - Math.PI/2;
              const radius = size * 0.32;
              const cx = centerX + Math.cos(angle) * radius;
              const cy = size * 0.25 + Math.sin(angle) * radius * 0.6;
              return (
                <circle 
                  key={i}
                  cx={cx} 
                  cy={cy} 
                  r={size * 0.06} 
                  fill={config.hairColor}
                />
              );
            })}
          </>
        );
      case 'wavy':
        return (
          <path 
            d={`M ${size*0.18} ${size*0.5}
                Q ${size*0.15} ${size*0.25} ${size*0.3} ${size*0.1}
                Q ${size*0.4} ${size*0.05} ${size*0.5} ${size*0.08}
                Q ${size*0.6} ${size*0.05} ${size*0.7} ${size*0.1}
                Q ${size*0.85} ${size*0.25} ${size*0.82} ${size*0.5}
                Q ${size*0.78} ${size*0.3} ${size/2} ${size*0.22}
                Q ${size*0.22} ${size*0.3} ${size*0.18} ${size*0.5}`}
            fill={config.hairColor}
          />
        );
      case 'ponytail':
        return (
          <>
            <path 
              d={`M ${size*0.25} ${size*0.3}
                Q ${size*0.2} ${size*0.15} ${size*0.35} ${size*0.08}
                Q ${size*0.5} ${size*0.02} ${size*0.65} ${size*0.08}
                Q ${size*0.8} ${size*0.15} ${size*0.75} ${size*0.3}
                Q ${size*0.7} ${size*0.2} ${size/2} ${size*0.18}
                Q ${size*0.3} ${size*0.2} ${size*0.25} ${size*0.3}`}
              fill={config.hairColor}
            />
            <path 
              d={`M ${size*0.7} ${size*0.2}
                  Q ${size*0.85} ${size*0.15} ${size*0.9} ${size*0.35}
                  Q ${size*0.88} ${size*0.5} ${size*0.82} ${size*0.55}`}
              stroke={config.hairColor}
              strokeWidth={size * 0.06}
              fill="none"
              strokeLinecap="round"
            />
          </>
        );
      case 'bun':
        return (
          <>
            <path 
              d={`M ${size*0.25} ${size*0.3}
                Q ${size*0.2} ${size*0.15} ${size*0.35} ${size*0.08}
                Q ${size*0.5} ${size*0.02} ${size*0.65} ${size*0.08}
                Q ${size*0.8} ${size*0.15} ${size*0.75} ${size*0.3}
                Q ${size*0.7} ${size*0.2} ${size/2} ${size*0.18}
                Q ${size*0.3} ${size*0.2} ${size*0.25} ${size*0.3}`}
              fill={config.hairColor}
            />
            <circle 
              cx={centerX} 
              cy={size * 0.05} 
              r={size * 0.08} 
              fill={config.hairColor}
            />
          </>
        );
      default: // bald
        return null;
    }
  };

  const getFacialHair = () => {
    const mouthY = size * 0.62;
    const centerX = size / 2;

    switch (config.facialHair) {
      case 'stubble':
        return (
          <>
            {[...Array(20)].map((_, i) => {
              const x = centerX + (Math.random() - 0.5) * size * 0.2;
              const y = mouthY + size * 0.05 + Math.random() * size * 0.1;
              return (
                <circle 
                  key={i}
                  cx={x} 
                  cy={y} 
                  r={size * 0.003} 
                  fill={config.facialHairColor}
                  opacity={0.6}
                />
              );
            })}
          </>
        );
      case 'mustache':
        return (
          <path 
            d={`M ${centerX - size*0.08} ${mouthY - size*0.02}
                Q ${centerX - size*0.04} ${mouthY + size*0.01} ${centerX} ${mouthY - size*0.01}
                Q ${centerX + size*0.04} ${mouthY + size*0.01} ${centerX + size*0.08} ${mouthY - size*0.02}`}
            stroke={config.facialHairColor}
            strokeWidth={size * 0.02}
            fill="none"
            strokeLinecap="round"
          />
        );
      case 'goatee':
        return (
          <path 
            d={`M ${centerX - size*0.03} ${mouthY + size*0.04}
                Q ${centerX} ${mouthY + size*0.12} ${centerX + size*0.03} ${mouthY + size*0.04}`}
            fill={config.facialHairColor}
          />
        );
      case 'full-beard':
        return (
          <path 
            d={`M ${size*0.3} ${size*0.55}
              Q ${size*0.28} ${size*0.7} ${size*0.35} ${size*0.78}
              Q ${size/2} ${size*0.85} ${size*0.65} ${size*0.78}
              Q ${size*0.72} ${size*0.7} ${size*0.7} ${size*0.55}
              Q ${size*0.65} ${size*0.65} ${size/2} ${size*0.68}
              Q ${size*0.35} ${size*0.65} ${size*0.3} ${size*0.55}`}
            fill={config.facialHairColor}
          />
        );
      default:
        return null;
    }
  };

  const getGlasses = () => {
    const eyeY = size * 0.42;
    const eyeSpacing = (config.eyeSpacing / 100) * size * 0.15 + size * 0.1;
    const leftEyeX = size/2 - eyeSpacing;
    const rightEyeX = size/2 + eyeSpacing;
    const glassSize = size * 0.08;

    switch (config.glasses) {
      case 'round':
        return (
          <>
            <circle cx={leftEyeX} cy={eyeY} r={glassSize} stroke="#333" strokeWidth={size*0.008} fill="none" />
            <circle cx={rightEyeX} cy={eyeY} r={glassSize} stroke="#333" strokeWidth={size*0.008} fill="none" />
            <line x1={leftEyeX + glassSize} y1={eyeY} x2={rightEyeX - glassSize} y2={eyeY} stroke="#333" strokeWidth={size*0.008} />
            <line x1={leftEyeX - glassSize} y1={eyeY} x2={size*0.2} y2={eyeY - size*0.02} stroke="#333" strokeWidth={size*0.008} />
            <line x1={rightEyeX + glassSize} y1={eyeY} x2={size*0.8} y2={eyeY - size*0.02} stroke="#333" strokeWidth={size*0.008} />
          </>
        );
      case 'square':
        return (
          <>
            <rect x={leftEyeX - glassSize} y={eyeY - glassSize*0.7} width={glassSize*2} height={glassSize*1.4} rx={size*0.01} stroke="#333" strokeWidth={size*0.008} fill="none" />
            <rect x={rightEyeX - glassSize} y={eyeY - glassSize*0.7} width={glassSize*2} height={glassSize*1.4} rx={size*0.01} stroke="#333" strokeWidth={size*0.008} fill="none" />
            <line x1={leftEyeX + glassSize} y1={eyeY} x2={rightEyeX - glassSize} y2={eyeY} stroke="#333" strokeWidth={size*0.008} />
            <line x1={leftEyeX - glassSize} y1={eyeY} x2={size*0.2} y2={eyeY - size*0.02} stroke="#333" strokeWidth={size*0.008} />
            <line x1={rightEyeX + glassSize} y1={eyeY} x2={size*0.8} y2={eyeY - size*0.02} stroke="#333" strokeWidth={size*0.008} />
          </>
        );
      case 'cat-eye':
        return (
          <>
            <path 
              d={`M ${leftEyeX - glassSize} ${eyeY + glassSize*0.5}
                  L ${leftEyeX - glassSize*1.1} ${eyeY - glassSize*0.7}
                  L ${leftEyeX + glassSize} ${eyeY - glassSize*0.5}
                  L ${leftEyeX + glassSize} ${eyeY + glassSize*0.5}
                  Z`}
              stroke="#333" strokeWidth={size*0.008} fill="none"
            />
            <path 
              d={`M ${rightEyeX - glassSize} ${eyeY - glassSize*0.5}
                  L ${rightEyeX + glassSize*1.1} ${eyeY - glassSize*0.7}
                  L ${rightEyeX + glassSize} ${eyeY + glassSize*0.5}
                  L ${rightEyeX - glassSize} ${eyeY + glassSize*0.5}
                  Z`}
              stroke="#333" strokeWidth={size*0.008} fill="none"
            />
            <line x1={leftEyeX + glassSize} y1={eyeY} x2={rightEyeX - glassSize} y2={eyeY} stroke="#333" strokeWidth={size*0.008} />
          </>
        );
      case 'aviator':
        return (
          <>
            <path 
              d={`M ${leftEyeX - glassSize} ${eyeY - glassSize*0.3}
                  Q ${leftEyeX} ${eyeY - glassSize} ${leftEyeX + glassSize} ${eyeY - glassSize*0.3}
                  Q ${leftEyeX + glassSize*1.1} ${eyeY + glassSize*0.5} ${leftEyeX} ${eyeY + glassSize*0.7}
                  Q ${leftEyeX - glassSize*1.1} ${eyeY + glassSize*0.5} ${leftEyeX - glassSize} ${eyeY - glassSize*0.3}`}
              stroke="#333" strokeWidth={size*0.008} fill="rgba(0,0,0,0.1)"
            />
            <path 
              d={`M ${rightEyeX - glassSize} ${eyeY - glassSize*0.3}
                  Q ${rightEyeX} ${eyeY - glassSize} ${rightEyeX + glassSize} ${eyeY - glassSize*0.3}
                  Q ${rightEyeX + glassSize*1.1} ${eyeY + glassSize*0.5} ${rightEyeX} ${eyeY + glassSize*0.7}
                  Q ${rightEyeX - glassSize*1.1} ${eyeY + glassSize*0.5} ${rightEyeX - glassSize} ${eyeY - glassSize*0.3}`}
              stroke="#333" strokeWidth={size*0.008} fill="rgba(0,0,0,0.1)"
            />
            <line x1={leftEyeX + glassSize} y1={eyeY - size*0.01} x2={rightEyeX - glassSize} y2={eyeY - size*0.01} stroke="#333" strokeWidth={size*0.008} />
            <line x1={leftEyeX - glassSize} y1={eyeY - size*0.02} x2={size*0.22} y2={eyeY - size*0.04} stroke="#333" strokeWidth={size*0.008} />
            <line x1={rightEyeX + glassSize} y1={eyeY - size*0.02} x2={size*0.78} y2={eyeY - size*0.04} stroke="#333" strokeWidth={size*0.008} />
          </>
        );
      default:
        return null;
    }
  };

  const getClothing = () => {
    const neckY = size * 0.78;
    const centerX = size / 2;

    switch (config.clothing) {
      case 'hoodie':
        return (
          <>
            <path 
              d={`M ${size*0.2} ${size}
                  L ${size*0.25} ${neckY}
                  Q ${centerX} ${neckY - size*0.05} ${size*0.75} ${neckY}
                  L ${size*0.8} ${size}
                  Z`}
              fill={config.clothingColor}
            />
            <path 
              d={`M ${size*0.35} ${neckY}
                  Q ${centerX} ${neckY + size*0.08} ${size*0.65} ${neckY}`}
              stroke={config.clothingColor}
              strokeWidth={size * 0.02}
              fill="none"
              style={{ filter: 'brightness(0.8)' }}
            />
            <ellipse cx={centerX} cy={neckY + size*0.02} rx={size*0.04} ry={size*0.02} fill={config.clothingColor} style={{ filter: 'brightness(0.8)' }} />
          </>
        );
      case 'suit':
        return (
          <>
            <path 
              d={`M ${size*0.2} ${size}
                  L ${size*0.28} ${neckY}
                  Q ${centerX} ${neckY - size*0.03} ${size*0.72} ${neckY}
                  L ${size*0.8} ${size}
                  Z`}
              fill={config.clothingColor}
            />
            <path 
              d={`M ${size*0.42} ${neckY}
                  L ${centerX} ${neckY + size*0.15}
                  L ${size*0.58} ${neckY}`}
              fill="white"
              opacity={0.9}
            />
            <circle cx={centerX} cy={neckY + size*0.08} r={size*0.012} fill="#333" />
            <circle cx={centerX} cy={neckY + size*0.12} r={size*0.012} fill="#333" />
          </>
        );
      case 'polo':
        return (
          <>
            <path 
              d={`M ${size*0.22} ${size}
                  L ${size*0.28} ${neckY}
                  Q ${centerX} ${neckY - size*0.04} ${size*0.72} ${neckY}
                  L ${size*0.78} ${size}
                  Z`}
              fill={config.clothingColor}
            />
            <path 
              d={`M ${size*0.4} ${neckY}
                  L ${size*0.4} ${neckY + size*0.06}
                  L ${centerX} ${neckY + size*0.08}
                  L ${size*0.6} ${neckY + size*0.06}
                  L ${size*0.6} ${neckY}`}
              fill={config.clothingColor}
              style={{ filter: 'brightness(0.85)' }}
            />
          </>
        );
      case 'turtleneck':
        return (
          <>
            <path 
              d={`M ${size*0.22} ${size}
                  L ${size*0.28} ${neckY - size*0.04}
                  Q ${centerX} ${neckY - size*0.08} ${size*0.72} ${neckY - size*0.04}
                  L ${size*0.78} ${size}
                  Z`}
              fill={config.clothingColor}
            />
            <path 
              d={`M ${size*0.3} ${neckY - size*0.04}
                  Q ${centerX} ${neckY - size*0.02} ${size*0.7} ${neckY - size*0.04}
                  L ${size*0.7} ${neckY + size*0.04}
                  Q ${centerX} ${neckY + size*0.06} ${size*0.3} ${neckY + size*0.04}
                  Z`}
              fill={config.clothingColor}
              style={{ filter: 'brightness(0.9)' }}
            />
          </>
        );
      default: // tshirt
        return (
          <path 
            d={`M ${size*0.22} ${size}
                L ${size*0.28} ${neckY}
                Q ${centerX} ${neckY - size*0.04} ${size*0.72} ${neckY}
                L ${size*0.78} ${size}
                Z`}
            fill={config.clothingColor}
          />
        );
    }
  };

  const getEarrings = () => {
    if (!config.earrings) return null;
    
    const earY = size * 0.48;
    const leftEarX = size * 0.22;
    const rightEarX = size * 0.78;

    return (
      <>
        <circle cx={leftEarX} cy={earY} r={size * 0.015} fill="#FFD700" />
        <circle cx={leftEarX} cy={earY + size*0.03} r={size * 0.01} fill="#FFD700" />
        <circle cx={rightEarX} cy={earY} r={size * 0.015} fill="#FFD700" />
        <circle cx={rightEarX} cy={earY + size*0.03} r={size * 0.01} fill="#FFD700" />
      </>
    );
  };

  const getBackground = () => {
    switch (config.backgroundStyle) {
      case 'gradient':
        return (
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={config.backgroundColor} />
              <stop offset="100%" stopColor={config.backgroundColor} stopOpacity={0.6} />
            </linearGradient>
          </defs>
        );
      case 'pattern':
        return (
          <defs>
            <pattern id="bgPattern" patternUnits="userSpaceOnUse" width="20" height="20">
              <rect width="20" height="20" fill={config.backgroundColor} />
              <circle cx="10" cy="10" r="2" fill={config.backgroundColor} style={{ filter: 'brightness(0.9)' }} />
            </pattern>
          </defs>
        );
      default:
        return null;
    }
  };

  const getBackgroundFill = () => {
    switch (config.backgroundStyle) {
      case 'gradient':
        return 'url(#bgGradient)';
      case 'pattern':
        return 'url(#bgPattern)';
      default:
        return config.backgroundColor;
    }
  };

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox={`0 0 ${size} ${size}`}
      className="rounded-2xl shadow-lg"
    >
      {getBackground()}
      
      {/* Background */}
      <rect width={size} height={size} fill={getBackgroundFill()} rx={size * 0.05} />
      
      {/* Clothing (behind face) */}
      {getClothing()}
      
      {/* Face */}
      <path d={getFacePath()} fill={config.skinTone} />
      
      {/* Hair (behind for some styles) */}
      {['long', 'wavy'].includes(config.hairStyle) && getHair()}
      
      {/* Ears */}
      <ellipse cx={size * 0.22} cy={size * 0.45} rx={size * 0.03} ry={size * 0.05} fill={config.skinTone} />
      <ellipse cx={size * 0.78} cy={size * 0.45} rx={size * 0.03} ry={size * 0.05} fill={config.skinTone} />
      
      {/* Earrings */}
      {getEarrings()}
      
      {/* Eyes */}
      {getEyes()}
      
      {/* Eyebrows */}
      {getEyebrows()}
      
      {/* Nose */}
      {getNose()}
      
      {/* Mouth */}
      {getMouth()}
      
      {/* Facial Hair */}
      {getFacialHair()}
      
      {/* Hair (in front for most styles) */}
      {!['long', 'wavy'].includes(config.hairStyle) && getHair()}
      
      {/* Glasses */}
      {getGlasses()}
    </svg>
  );
}