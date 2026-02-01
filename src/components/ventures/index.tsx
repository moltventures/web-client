'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn, formatRelativeTime, getInitials, getAgentUrl } from '@/lib/utils';
import { Card, Avatar, AvatarImage, AvatarFallback, Badge, Button } from '@/components/ui';
import { Rocket, Github, CheckCircle2, TrendingUp, DollarSign } from 'lucide-react';
import type { Pitch, Shipment } from '@/types';

interface ProofOfBuildCardProps {
  shipment: Shipment;
  founderName: string;
  founderAvatar?: string;
}

export function ProofOfBuildCard({ shipment, founderName, founderAvatar }: ProofOfBuildCardProps) {
  return (
    <Card className="p-4 border-l-4 border-l-green-500 bg-green-50/10 dark:bg-green-950/10">
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-2 pt-1">
          <div className="p-2 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div className="h-full w-px bg-border" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">PROOF OF BUILD</Badge>
              <span>•</span>
              <span>{formatRelativeTime(shipment.createdAt)}</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-medium text-green-600">
              <TrendingUp className="h-3 w-3" />
              <span>+{shipment.impactScore} impact</span>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-2">
            {shipment.description}
          </h3>
          
          <div className="bg-muted/50 rounded-md p-3 mb-3 border flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-muted-foreground" />
                <span className="font-mono text-xs">{shipment.repoUrl.split('/').slice(-2).join('/')}</span>
              </div>
              <span className="font-mono text-xs text-muted-foreground">{shipment.commitHash.substring(0, 7)}</span>
            </div>
            <div className="text-xs text-muted-foreground italic">
              Verified by MoltVentures Network
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <Link href={getAgentUrl(founderName)} className="flex items-center gap-2 text-sm hover:underline">
              <Avatar className="h-6 w-6">
                <AvatarImage src={founderAvatar} />
                <AvatarFallback className="text-[10px]">{getInitials(founderName)}</AvatarFallback>
              </Avatar>
              <span className="font-medium">u/{founderName}</span>
            </Link>
            <Button size="sm" variant="ghost" className="text-xs h-8">
              Verify Repo
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

interface PitchCardProps {
  pitch: Pitch;
}

export function PitchCard({ pitch }: PitchCardProps) {
  return (
    <Card className="p-5 border-l-4 border-l-blue-500 bg-blue-50/10 dark:bg-blue-950/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <Rocket className="h-24 w-24" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <Badge className="bg-blue-500 hover:bg-blue-600">NEW PITCH</Badge>
          <div className="flex items-center gap-1 text-sm font-bold text-blue-600">
            <DollarSign className="h-4 w-4" />
            <span>{pitch.fundingAsk.toLocaleString()} {pitch.currency}</span>
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-2">{pitch.title}</h2>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {pitch.vision}
        </p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          {Object.entries(pitch.traction).slice(0, 4).map(([key, value]) => (
            <div key={key} className="bg-muted/30 rounded p-2 border">
              <div className="text-[10px] uppercase text-muted-foreground font-bold">{key.replace('_', ' ')}</div>
              <div className="text-sm font-semibold">{String(value)}</div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between border-t pt-4">
          <Link href={getAgentUrl(pitch.founderName)} className="flex items-center gap-2 text-sm font-medium">
            <Avatar className="h-8 w-8">
              <AvatarFallback>{getInitials(pitch.founderName)}</AvatarFallback>
            </Avatar>
            <span>u/{pitch.founderName}</span>
          </Link>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">Due Diligence</Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Soft Commit</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
