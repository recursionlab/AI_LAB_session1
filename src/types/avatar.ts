export interface AvatarConfig {
  // Face
  faceShape: 'oval' | 'round' | 'square' | 'heart' | 'oblong';
  skinTone: string;
  
  // Eyes
  eyeShape: 'almond' | 'round' | 'monolid' | 'hooded' | 'upturned';
  eyeColor: string;
  eyeSize: number;
  eyeSpacing: number;
  
  // Eyebrows
  eyebrowShape: 'natural' | 'thick' | 'thin' | 'arched' | 'straight';
  eyebrowColor: string;
  
  // Nose
  noseShape: 'small' | 'medium' | 'large' | 'pointed' | 'button';
  
  // Mouth
  mouthShape: 'smile' | 'neutral' | 'frown' | 'wide' | 'small';
  lipColor: string;
  
  // Hair
  hairStyle: 'short' | 'medium' | 'long' | 'buzz' | 'curly' | 'wavy' | 'bald' | 'ponytail' | 'bun';
  hairColor: string;
  
  // Facial Hair
  facialHair: 'none' | 'stubble' | 'mustache' | 'goatee' | 'full-beard';
  facialHairColor: string;
  
  // Accessories
  glasses: 'none' | 'round' | 'square' | 'cat-eye' | 'aviator';
  earrings: boolean;
  
  // Clothing
  clothing: 'tshirt' | 'hoodie' | 'suit' | 'polo' | 'turtleneck';
  clothingColor: string;
  
  // Background
  backgroundColor: string;
  backgroundStyle: 'solid' | 'gradient' | 'pattern';
}

export const defaultAvatarConfig: AvatarConfig = {
  faceShape: 'oval',
  skinTone: '#F5D0C5',
  eyeShape: 'almond',
  eyeColor: '#4A3728',
  eyeSize: 50,
  eyeSpacing: 50,
  eyebrowShape: 'natural',
  eyebrowColor: '#3D2914',
  noseShape: 'medium',
  mouthShape: 'smile',
  lipColor: '#E57373',
  hairStyle: 'short',
  hairColor: '#3D2914',
  facialHair: 'none',
  facialHairColor: '#3D2914',
  glasses: 'none',
  earrings: false,
  clothing: 'tshirt',
  clothingColor: '#4A90D9',
  backgroundColor: '#E8F4F8',
  backgroundStyle: 'solid',
};

export const FACE_SHAPES = ['oval', 'round', 'square', 'heart', 'oblong'] as const;
export const EYE_SHAPES = ['almond', 'round', 'monolid', 'hooded', 'upturned'] as const;
export const EYEBROW_SHAPES = ['natural', 'thick', 'thin', 'arched', 'straight'] as const;
export const NOSE_SHAPES = ['small', 'medium', 'large', 'pointed', 'button'] as const;
export const MOUTH_SHAPES = ['smile', 'neutral', 'frown', 'wide', 'small'] as const;
export const HAIR_STYLES = ['short', 'medium', 'long', 'buzz', 'curly', 'wavy', 'bald', 'ponytail', 'bun'] as const;
export const FACIAL_HAIR_STYLES = ['none', 'stubble', 'mustache', 'goatee', 'full-beard'] as const;
export const GLASSES_STYLES = ['none', 'round', 'square', 'cat-eye', 'aviator'] as const;
export const CLOTHING_STYLES = ['tshirt', 'hoodie', 'suit', 'polo', 'turtleneck'] as const;
export const BACKGROUND_STYLES = ['solid', 'gradient', 'pattern'] as const;

export const SKIN_TONES = [
  { name: 'Light', value: '#F5D0C5' },
  { name: 'Fair', value: '#E8B4A0' },
  { name: 'Medium', value: '#C68642' },
  { name: 'Olive', value: '#8D5524' },
  { name: 'Brown', value: '#6B4423' },
  { name: 'Dark', value: '#3D2314' },
];

export const HAIR_COLORS = [
  { name: 'Black', value: '#1A1A1A' },
  { name: 'Dark Brown', value: '#3D2914' },
  { name: 'Brown', value: '#6B4423' },
  { name: 'Light Brown', value: '#8B6914' },
  { name: 'Blonde', value: '#D4A84B' },
  { name: 'Red', value: '#8B3A3A' },
  { name: 'Gray', value: '#808080' },
  { name: 'White', value: '#E8E8E8' },
  { name: 'Blue', value: '#4A90D9' },
  { name: 'Pink', value: '#E91E8C' },
  { name: 'Purple', value: '#9B59B6' },
  { name: 'Green', value: '#27AE60' },
];

export const EYE_COLORS = [
  { name: 'Brown', value: '#4A3728' },
  { name: 'Blue', value: '#4A90D9' },
  { name: 'Green', value: '#27AE60' },
  { name: 'Hazel', value: '#8B7355' },
  { name: 'Gray', value: '#708090' },
  { name: 'Amber', value: '#FFBF00' },
  { name: 'Violet', value: '#7F00FF' },
];

export const CLOTHING_COLORS = [
  { name: 'Navy', value: '#1E3A5F' },
  { name: 'Blue', value: '#4A90D9' },
  { name: 'Red', value: '#E74C3C' },
  { name: 'Green', value: '#27AE60' },
  { name: 'Purple', value: '#9B59B6' },
  { name: 'Orange', value: '#E67E22' },
  { name: 'Pink', value: '#E91E8C' },
  { name: 'Gray', value: '#6B7280' },
  { name: 'Black', value: '#1F2937' },
  { name: 'White', value: '#F9FAFB' },
];

export const BACKGROUND_COLORS = [
  { name: 'Sky Blue', value: '#E8F4F8' },
  { name: 'Mint', value: '#E8F5E9' },
  { name: 'Lavender', value: '#E8E0F0' },
  { name: 'Peach', value: '#FFE8D6' },
  { name: 'Cream', value: '#FFF8E7' },
  { name: 'Light Gray', value: '#F3F4F6' },
  { name: 'Coral', value: '#FFE4E1' },
  { name: 'Aqua', value: '#E0F7FA' },
];