'use client';
import React, { useEffect } from 'react';
import { NeatConfig, NeatGradient } from '@firecms/neat';

export const NeatGradientComponent = () => {
  useEffect(() => {
    const config: NeatConfig = {
      colors: [
        {
          color: '#001219',
          enabled: true,
        },
        {
          color: '#212529',
          enabled: true,
        },
        {
          color: '#343a40',
          enabled: true,
        },
        {
          color: '#343a40',
          enabled: true,
        },
        {
          color: '#495057',
          enabled: true,
        },
      ],
      speed: 10,
      horizontalPressure: 3,
      verticalPressure: 3,
      waveFrequencyX: 2,
      waveFrequencyY: 4,
      waveAmplitude: 5,
      shadows: 0,
      highlights: 2,
      colorBrightness: 1,
      colorSaturation: 3,
      wireframe: false,
      colorBlending: 5,
      backgroundColor: '#003FFF',
      backgroundAlpha: 1,
      resolution: 1,
    };

    const neat = new NeatGradient({
      ref: document.getElementById('gradient') as HTMLCanvasElement,
      ...config,
    });

    return () => {
      neat.destroy();
    };
  }, []);

  return (
    <canvas
      id="gradient"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};
