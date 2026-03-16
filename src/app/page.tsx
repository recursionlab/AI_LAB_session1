"use client";

import React, { useState, useEffect } from 'react';
import { AvatarPreview } from '@/components/avatar/AvatarPreview';
import { AvatarControls } from '@/components/avatar/AvatarControls';
import { PresetAvatars } from '@/components/avatar/PresetAvatars';
import { ExportOptions } from '@/components/avatar/ExportOptions';
import { AvatarConfig, defaultAvatarConfig } from '@/types/avatar';
import { Bot, RotateCcw, Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function Home() {
  const [config, setConfig] = useState<AvatarConfig>(defaultAvatarConfig);

  // Load config from URL if present
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const avatarParam = params.get('avatar');
    if (avatarParam) {
      try {
        const decodedConfig = JSON.parse(atob(avatarParam));
        setConfig({ ...defaultAvatarConfig, ...decodedConfig });
        toast.success('Avatar loaded from shared link!');
      } catch (err) {
        console.error('Failed to parse avatar config from URL');
      }
    }
  }, []);

  const handleReset = () => {
    setConfig(defaultAvatarConfig);
    toast.success('Avatar reset to default');
  };

  const handleRandomize = () => {
    const randomConfig: AvatarConfig = {
      faceShape: ['oval', 'round', 'square', 'heart', 'oblong'][Math.floor(Math.random() * 5)] as any,
      skinTone: ['#F5D0C5', '#E8B4A0', '#C68642', '#8D5524', '#6B4423', '#3D2314'][Math.floor(Math.random() * 6)],
      eyeShape: ['almond', 'round', 'monolid', 'hooded', 'upturned'][Math.floor(Math.random() * 5)] as any,
      eyeColor: ['#4A3728', '#4A90D9', '#27AE60', '#8B7355', '#708090', '#FFBF00'][Math.floor(Math.random() * 6)],
      eyeSize: Math.floor(Math.random() * 50) + 40,
      eyeSpacing: Math.floor(Math.random() * 50) + 40,
      eyebrowShape: ['natural', 'thick', 'thin', 'arched', 'straight'][Math.floor(Math.random() * 5)] as any,
      eyebrowColor: ['#1A1A1A', '#3D2914', '#6B4423', '#808080'][Math.floor(Math.random() * 4)],
      noseShape: ['small', 'medium', 'large', 'pointed', 'button'][Math.floor(Math.random() * 5)] as any,
      mouthShape: ['smile', 'neutral', 'frown', 'wide', 'small'][Math.floor(Math.random() * 5)] as any,
      lipColor: ['#E57373', '#F48FB1', '#C2185B', '#D4A5A5'][Math.floor(Math.random() * 4)],
      hairStyle: ['short', 'medium', 'long', 'buzz', 'curly', 'wavy', 'bald', 'ponytail', 'bun'][Math.floor(Math.random() * 9)] as any,
      hairColor: ['#1A1A1A', '#3D2914', '#6B4423', '#D4A84B', '#8B3A3A', '#808080'][Math.floor(Math.random() * 6)],
      facialHair: ['none', 'stubble', 'mustache', 'goatee', 'full-beard'][Math.floor(Math.random() * 5)] as any,
      facialHairColor: ['#1A1A1A', '#3D2914', '#6B4423'][Math.floor(Math.random() * 3)],
      glasses: ['none', 'round', 'square', 'cat-eye', 'aviator'][Math.floor(Math.random() * 5)] as any,
      earrings: Math.random() > 0.7,
      clothing: ['tshirt', 'hoodie', 'suit', 'polo', 'turtleneck'][Math.floor(Math.random() * 5)] as any,
      clothingColor: ['#1E3A5F', '#4A90D9', '#E74C3C', '#27AE60', '#9B59B6', '#E67E22'][Math.floor(Math.random() * 6)],
      backgroundColor: ['#E8F4F8', '#E8F5E9', '#E8E0F0', '#FFE8D6', '#FFF8E7', '#F3F4F6'][Math.floor(Math.random() * 6)],
      backgroundStyle: ['solid', 'gradient', 'pattern'][Math.floor(Math.random() * 3)] as any,
    };
    setConfig(randomConfig);
    toast.success('Random avatar generated!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Jarvis (Meta)</h1>
                <p className="text-sm text-slate-500">Virtual Avatar Builder</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleReset} className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
              <Button variant="outline" size="sm" onClick={handleRandomize} className="gap-2">
                <Shuffle className="w-4 h-4" />
                Random
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Avatar Preview */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4 text-center">Your Avatar</h2>
              <div id="avatar-preview" className="flex justify-center">
                <AvatarPreview config={config} size={280} />
              </div>
            </div>
            
            <PresetAvatars onSelect={setConfig} />
            
            <ExportOptions config={config} />
          </div>

          {/* Right Column - Controls */}
          <div className="lg:col-span-8">
            <AvatarControls config={config} onChange={setConfig} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-600">
              <Bot className="w-5 h-5" />
              <span className="text-sm">Jarvis (Meta) - Virtual Avatar Builder</span>
            </div>
            <p className="text-sm text-slate-500">
              Create your unique digital identity
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}