"use client";

import React, { useRef } from 'react';
import { AvatarConfig } from '@/types/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Copy, Share2, Code } from 'lucide-react';
import { toast } from 'sonner';

interface ExportOptionsProps {
  config: AvatarConfig;
}

export function ExportOptions({ config }: ExportOptionsProps) {
  const handleDownloadSVG = () => {
    const svgElement = document.querySelector('#avatar-preview svg');
    if (!svgElement) {
      toast.error('Avatar not found');
      return;
    }

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'jarvis-avatar.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast.success('Avatar downloaded as SVG!');
  };

  const handleDownloadPNG = () => {
    const svgElement = document.querySelector('#avatar-preview svg');
    if (!svgElement) {
      toast.error('Avatar not found');
      return;
    }

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    canvas.width = 600;
    canvas.height = 600;
    
    img.onload = () => {
      if (ctx) {
        ctx.drawImage(img, 0, 0, 600, 600);
        const pngUrl = canvas.toDataURL('image/png');
        
        const link = document.createElement('a');
        link.href = pngUrl;
        link.download = 'jarvis-avatar.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        toast.success('Avatar downloaded as PNG!');
      }
    };
    
    img.onerror = () => {
      toast.error('Failed to load avatar for export');
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

const handleCopyConfig = async () => {
  try {
    await navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    toast.success('Configuration copied to clipboard!');
  } catch (err) {
    console.error('Copy failed:', err);
    toast.error('Failed to copy configuration');
  }
};

const handleCopyAsCode = async () => {
  const codeString = `const avatarConfig = ${JSON.stringify(config, null, 2)};`;
  try {
    await navigator.clipboard.writeText(codeString);
    toast.success('Code copied to clipboard!');
  } catch (err) {
    console.error('Copy failed:', err);
    toast.error('Failed to copy code');
  }
};

const handleShare = async () => {
  const configString = btoa(unescape(encodeURIComponent(JSON.stringify(config))));
  const shareUrl = `${window.location.origin}?avatar=${configString}`;
  
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'My Jarvis Avatar',
        text: 'Check out my custom avatar!',
        url: shareUrl,
      });
    } catch (err) {
      if (err.name === 'AbortError') return;
      await navigator.clipboard.writeText(shareUrl);
      toast.success('Share link copied to clipboard!');
    }
  } else {
    await navigator.clipboard.writeText(shareUrl);
    toast.success('Share link copied to clipboard!');
  }
};

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Download className="w-5 h-5 text-primary" />
          Export Avatar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={handleDownloadSVG}
          >
            <Download className="w-4 h-4" />
            SVG
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={handleDownloadPNG}
          >
            <Download className="w-4 h-4" />
            PNG
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={handleCopyConfig}
          >
            <Copy className="w-4 h-4" />
            Copy Config
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={handleCopyAsCode}
          >
            <Code className="w-4 h-4" />
            Copy Code
          </Button>
          <Button 
            variant="default" 
            className="flex items-center gap-2 col-span-2"
            onClick={handleShare}
          >
            <Share2 className="w-4 h-4" />
            Share Avatar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}