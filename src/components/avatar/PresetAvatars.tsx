"use client";

import React from 'react';
import { AvatarConfig, defaultAvatarConfig } from '@/types/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AvatarPreview } from './AvatarPreview';
import { Wand2 } from 'lucide-react';

interface PresetAvatarsProps {
  onSelect: (config: AvatarConfig) => void;
}

const presets: { name: string; config: Partial<AvatarConfig> }[] = [
  {
    name: 'Professional',
    config: {
      faceShape: 'oval',
      skinTone: '#E8B4A0',
      eyeShape: 'almond',
      eyeColor: '#4A3728',
      hairStyle: 'short',
      hairColor: '#3D2914',
      facialHair: 'none',
      glasses: 'square',
      clothing: 'suit',
      clothingColor: '#1E3A5F',
      backgroundColor: '#E8F4F8',
    },
  },
  {
    name: 'Creative',
    config: {
      faceShape: 'round',
      skinTone: '#C68642',
      eyeShape: 'round',
      eyeColor: '#27AE60',
      hairStyle: 'curly',
      hairColor: '#9B59B6',
      facialHair: 'stubble',
      glasses: 'round',
      clothing: 'hoodie',
      clothingColor: '#E67E22',
      backgroundColor: '#E8E0F0',
    },
  },
  {
    name: 'Minimal',
    config: {
      faceShape: 'square',
      skinTone: '#F5D0C5',
      eyeShape: 'monolid',
      eyeColor: '#708090',
      hairStyle: 'buzz',
      hairColor: '#1A1A1A',
      facialHair: 'none',
      glasses: 'none',
      clothing: 'turtleneck',
      clothingColor: '#1F2937',
      backgroundColor: '#F3F4F6',
    },
  },
  {
    name: 'Friendly',
    config: {
      faceShape: 'heart',
      skinTone: '#8D5524',
      eyeShape: 'upturned',
      eyeColor: '#4A3728',
      hairStyle: 'wavy',
      hairColor: '#6B4423',
      facialHair: 'goatee',
      glasses: 'none',
      clothing: 'polo',
      clothingColor: '#27AE60',
      backgroundColor: '#E8F5E9',
    },
  },
  {
    name: 'Tech',
    config: {
      faceShape: 'oblong',
      skinTone: '#F5D0C5',
      eyeShape: 'hooded',
      eyeColor: '#4A90D9',
      hairStyle: 'medium',
      hairColor: '#D4A84B',
      facialHair: 'full-beard',
      glasses: 'aviator',
      clothing: 'hoodie',
      clothingColor: '#4A90D9',
      backgroundColor: '#E0F7FA',
    },
  },
  {
    name: 'Classic',
    config: {
      faceShape: 'oval',
      skinTone: '#6B4423',
      eyeShape: 'almond',
      eyeColor: '#4A3728',
      hairStyle: 'short',
      hairColor: '#1A1A1A',
      facialHair: 'mustache',
      glasses: 'none',
      clothing: 'suit',
      clothingColor: '#6B7280',
      backgroundColor: '#FFF8E7',
    },
  },
];

export function PresetAvatars({ onSelect }: PresetAvatarsProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Wand2 className="w-5 h-5 text-primary" />
          Quick Presets
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3">
          {presets.map((preset) => (
            <Button
              key={preset.name}
              variant="outline"
              className="flex flex-col items-center gap-2 h-auto py-3 hover:border-primary hover:bg-primary/5"
              onClick={() => onSelect({ ...defaultAvatarConfig, ...preset.config })}
            >
              <AvatarPreview 
                config={{ ...defaultAvatarConfig, ...preset.config }} 
                size={60} 
              />
              <span className="text-xs font-medium">{preset.name}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}