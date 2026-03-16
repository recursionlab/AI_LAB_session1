# Jarvis (Meta) - Virtual Avatar Builder

A modern, customizable virtual avatar builder built with Next.js, React, and Tailwind CSS.

## Features

- **Face Customization**: Choose from different face shapes and skin tones
- **Eye Options**: Customize eye shape, color, size, and spacing
- **Facial Features**: Adjust nose shape, mouth style, and lip color
- **Hair Styles**: Multiple hair styles and colors to choose from
- **Facial Hair**: Add stubble, mustache, goatee, or full beard
- **Accessories**: Add glasses and earrings
- **Clothing**: Choose from various clothing styles and colors
- **Background**: Customize background style and color
- **Presets**: Quick-start with pre-designed avatar templates
- **Export**: Download as SVG or PNG, copy config, or share via URL

## Components

### AvatarPreview
Renders the avatar SVG based on the configuration object.

### AvatarControls
Provides tabbed interface for customizing all avatar features.

### PresetAvatars
Quick selection of pre-designed avatar configurations.

### ExportOptions
Download, copy, and share functionality for the avatar.

## Usage

```tsx
import { AvatarPreview } from '@/components/avatar/AvatarPreview';
import { defaultAvatarConfig } from '@/types/avatar';

function MyComponent() {
  return <AvatarPreview config={defaultAvatarConfig} size={200} />;
}
```

## Configuration

The avatar is configured using the `AvatarConfig` interface:

```typescript
interface AvatarConfig {
  faceShape: 'oval' | 'round' | 'square' | 'heart' | 'oblong';
  skinTone: string;
  eyeShape: 'almond' | 'round' | 'monolid' | 'hooded' | 'upturned';
  eyeColor: string;
  // ... and more
}
```

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Shadcn/UI Components
- Lucide Icons
- Sonner (Toast notifications)