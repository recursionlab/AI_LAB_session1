"use client";

import React from 'react';
import { AvatarConfig } from '@/types/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { 
  FACE_SHAPES, 
  EYE_SHAPES, 
  EYEBROW_SHAPES, 
  NOSE_SHAPES, 
  MOUTH_SHAPES, 
  HAIR_STYLES, 
  FACIAL_HAIR_STYLES, 
  GLASSES_STYLES, 
  CLOTHING_STYLES, 
  BACKGROUND_STYLES,
  SKIN_TONES,
  HAIR_COLORS,
  EYE_COLORS,
  CLOTHING_COLORS,
  BACKGROUND_COLORS
} from '@/types/avatar';
import { User, Eye, Smile, Sparkles, Shirt, Palette } from 'lucide-react';

interface AvatarControlsProps {
  config: AvatarConfig;
  onChange: (config: AvatarConfig) => void;
}

export function AvatarControls({ config, onChange }: AvatarControlsProps) {
  const updateConfig = (updates: Partial<AvatarConfig>) => {
    onChange({ ...config, ...updates });
  };

  const ColorSwatch = ({ colors, value, onChange }: { colors: { name: string; value: string }[], value: string, onChange: (value: string) => void }) => (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <button
          key={color.value}
          onClick={() => onChange(color.value)}
          className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
            value === color.value ? 'border-primary ring-2 ring-primary/30' : 'border-border'
          }`}
          style={{ backgroundColor: color.value }}
          title={color.name}
        />
      ))}
      <div className="relative">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-8 h-8 rounded-full cursor-pointer opacity-0 absolute inset-0"
        />
        <div 
          className="w-8 h-8 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center text-muted-foreground"
          style={{ backgroundColor: value }}
        >
          <span className="text-xs">+</span>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          Customize Avatar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="face" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-4">
            <TabsTrigger value="face" className="flex flex-col items-center gap-1 py-2">
              <User className="w-4 h-4" />
              <span className="text-xs">Face</span>
            </TabsTrigger>
            <TabsTrigger value="eyes" className="flex flex-col items-center gap-1 py-2">
              <Eye className="w-4 h-4" />
              <span className="text-xs">Eyes</span>
            </TabsTrigger>
            <TabsTrigger value="features" className="flex flex-col items-center gap-1 py-2">
              <Smile className="w-4 h-4" />
              <span className="text-xs">Features</span>
            </TabsTrigger>
            <TabsTrigger value="hair" className="flex flex-col items-center gap-1 py-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs">Hair</span>
            </TabsTrigger>
            <TabsTrigger value="style" className="flex flex-col items-center gap-1 py-2">
              <Shirt className="w-4 h-4" />
              <span className="text-xs">Style</span>
            </TabsTrigger>
            <TabsTrigger value="background" className="flex flex-col items-center gap-1 py-2">
              <Palette className="w-4 h-4" />
              <span className="text-xs">BG</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="face" className="space-y-4">
            <div className="space-y-2">
              <Label>Face Shape</Label>
              <Select value={config.faceShape} onValueChange={(value: any) => updateConfig({ faceShape: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {FACE_SHAPES.map((shape) => (
                    <SelectItem key={shape} value={shape} className="capitalize">
                      {shape}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Skin Tone</Label>
              <ColorSwatch 
                colors={SKIN_TONES} 
                value={config.skinTone} 
                onChange={(value) => updateConfig({ skinTone: value })} 
              />
            </div>
          </TabsContent>

          <TabsContent value="eyes" className="space-y-4">
            <div className="space-y-2">
              <Label>Eye Shape</Label>
              <Select value={config.eyeShape} onValueChange={(value: any) => updateConfig({ eyeShape: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {EYE_SHAPES.map((shape) => (
                    <SelectItem key={shape} value={shape} className="capitalize">
                      {shape}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Eye Color</Label>
              <ColorSwatch 
                colors={EYE_COLORS} 
                value={config.eyeColor} 
                onChange={(value) => updateConfig({ eyeColor: value })} 
              />
            </div>

            <div className="space-y-2">
              <Label>Eye Size: {config.eyeSize}%</Label>
              <Slider
                value={[config.eyeSize]}
                onValueChange={([value]) => updateConfig({ eyeSize: value })}
                min={30}
                max={100}
                step={1}
              />
            </div>

            <div className="space-y-2">
              <Label>Eye Spacing: {config.eyeSpacing}%</Label>
              <Slider
                value={[config.eyeSpacing]}
                onValueChange={([value]) => updateConfig({ eyeSpacing: value })}
                min={30}
                max={100}
                step={1}
              />
            </div>

            <div className="space-y-2">
              <Label>Eyebrow Style</Label>
              <Select value={config.eyebrowShape} onValueChange={(value: any) => updateConfig({ eyebrowShape: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {EYEBROW_SHAPES.map((shape) => (
                    <SelectItem key={shape} value={shape} className="capitalize">
                      {shape}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Eyebrow Color</Label>
              <ColorSwatch 
                colors={HAIR_COLORS} 
                value={config.eyebrowColor} 
                onChange={(value) => updateConfig({ eyebrowColor: value })} 
              />
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-4">
            <div className="space-y-2">
              <Label>Nose Shape</Label>
              <Select value={config.noseShape} onValueChange={(value: any) => updateConfig({ noseShape: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {NOSE_SHAPES.map((shape) => (
                    <SelectItem key={shape} value={shape} className="capitalize">
                      {shape}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Mouth Shape</Label>
              <Select value={config.mouthShape} onValueChange={(value: any) => updateConfig({ mouthShape: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {MOUTH_SHAPES.map((shape) => (
                    <SelectItem key={shape} value={shape} className="capitalize">
                      {shape}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Lip Color</Label>
              <ColorSwatch 
                colors={[
                  { name: 'Natural', value: '#E57373' },
                  { name: 'Pink', value: '#F48FB1' },
                  { name: 'Rose', value: '#C2185B' },
                  { name: 'Nude', value: '#D4A5A5' },
                  { name: 'Berry', value: '#8E4585' },
                  { name: 'Coral', value: '#FF7F7F' },
                ]} 
                value={config.lipColor} 
                onChange={(value) => updateConfig({ lipColor: value })} 
              />
            </div>

            <div className="space-y-2">
              <Label>Facial Hair</Label>
              <Select value={config.facialHair} onValueChange={(value: any) => updateConfig({ facialHair: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {FACIAL_HAIR_STYLES.map((style) => (
                    <SelectItem key={style} value={style} className="capitalize">
                      {style.replace('-', ' ')}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {config.facialHair !== 'none' && (
              <div className="space-y-2">
                <Label>Facial Hair Color</Label>
                <ColorSwatch 
                  colors={HAIR_COLORS} 
                  value={config.facialHairColor} 
                  onChange={(value) => updateConfig({ facialHairColor: value })} 
                />
              </div>
            )}
          </TabsContent>

          <TabsContent value="hair" className="space-y-4">
            <div className="space-y-2">
              <Label>Hair Style</Label>
              <Select value={config.hairStyle} onValueChange={(value: any) => updateConfig({ hairStyle: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {HAIR_STYLES.map((style) => (
                    <SelectItem key={style} value={style} className="capitalize">
                      {style}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {config.hairStyle !== 'bald' && (
              <div className="space-y-2">
                <Label>Hair Color</Label>
                <ColorSwatch 
                  colors={HAIR_COLORS} 
                  value={config.hairColor} 
                  onChange={(value) => updateConfig({ hairColor: value })} 
                />
              </div>
            )}

            <div className="space-y-2">
              <Label>Glasses</Label>
              <Select value={config.glasses} onValueChange={(value: any) => updateConfig({ glasses: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {GLASSES_STYLES.map((style) => (
                    <SelectItem key={style} value={style} className="capitalize">
                      {style}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <Label>Earrings</Label>
              <Switch
                checked={config.earrings}
                onCheckedChange={(checked) => updateConfig({ earrings: checked })}
              />
            </div>
          </TabsContent>

          <TabsContent value="style" className="space-y-4">
            <div className="space-y-2">
              <Label>Clothing</Label>
              <Select value={config.clothing} onValueChange={(value: any) => updateConfig({ clothing: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CLOTHING_STYLES.map((style) => (
                    <SelectItem key={style} value={style} className="capitalize">
                      {style}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Clothing Color</Label>
              <ColorSwatch 
                colors={CLOTHING_COLORS} 
                value={config.clothingColor} 
                onChange={(value) => updateConfig({ clothingColor: value })} 
              />
            </div>
          </TabsContent>

          <TabsContent value="background" className="space-y-4">
            <div className="space-y-2">
              <Label>Background Style</Label>
              <Select value={config.backgroundStyle} onValueChange={(value: any) => updateConfig({ backgroundStyle: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {BACKGROUND_STYLES.map((style) => (
                    <SelectItem key={style} value={style} className="capitalize">
                      {style}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Background Color</Label>
              <ColorSwatch 
                colors={BACKGROUND_COLORS} 
                value={config.backgroundColor} 
                onChange={(value) => updateConfig({ backgroundColor: value })} 
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}