"use client"
import React, { useState } from 'react';
import { Button } from './gamecomp/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './gamecomp/ui/card';
import { BridgeGame } from './BridgeGame';
import { SphinxGame } from './SphinxGame';
import { ArrowLeft, BookOpen, Brain } from 'lucide-react';

type GameType = 'menu' | 'bridge' | 'sphinx';

export function GameSelector() {
  const [currentGame, setCurrentGame] = useState<GameType>('menu');

  if (currentGame === 'bridge') {
    return (
      <div>
        <div className="mb-6 flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={() => setCurrentGame('menu')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Menu
          </Button>
          <h1>The Broken Bridge Challenge</h1>
        </div>
        <BridgeGame />
      </div>
    );
  }

  if (currentGame === 'sphinx') {
    return (
      <div>
        <div className="mb-6 flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={() => setCurrentGame('menu')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Menu
          </Button>
          <h1>The Sphinx of Logic</h1>
        </div>
        <SphinxGame />
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className='font-bold'>🎮 Coding Quest Academy</h1>
        <p className="text-muted-foreground text-lg">
          Master programming fundamentals through interactive challenges and puzzles!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-gradient-to-br from-blue-50 to-green-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="text-4xl">🌉</div>
              <div>
                <h2 className='pb-2'>The Broken Bridge</h2>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  Loops & Iteration
                </span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Learn programming loops by building bridges! Write correct loop logic to place planks one by one. 
                Make a mistake, and watch your bridge break mid-construction.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  <span>For Loops, While Loops, Iteration</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Brain className="h-4 w-4 text-blue-600" />
                  <span>4 Progressive Levels</span>
                </div>
              </div>

              <Button 
                onClick={() => setCurrentGame('bridge')}
                className="w-full bg-sky-200 hover:background-blur-md rounded-xl shadow-md transition-all duration-300 ease-in-out hover:border-white/30 hover:shadow-xl"
              >
                Start Bridge Challenge
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="text-4xl">🐱‍👤</div>
              <div>
                <h2 className='pb-2'>The Sphinx of Logic</h2>
                <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded">
                  Conditionals & Logic
                </span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Face the ancient Sphinx and solve logic riddles using if-else statements! 
                Each puzzle tests your understanding of conditional logic and boolean reasoning.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="h-4 w-4 text-amber-600" />
                  <span>If-Else, Boolean Logic, Conditions</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Brain className="h-4 w-4 text-amber-600" />
                  <span>4 Mind-bending Riddles</span>
                </div>
              </div>

              <Button 
                onClick={() => setCurrentGame('sphinx')}
                className="w-full bg-amber-200 hover:background-blur-md rounded-xl shadow-md transition-all duration-300 ease-in-out hover:border-white/30   hover:shadow-xl"
                variant="default"
              >
                Face the Sphinx
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center pt-8">
        <div className="inline-flex items-center px-4  bg-muted rounded-lg">
          <span className="text-sm text-muted-foreground">
            More challenges coming soon! Master these fundamentals first. 🚀
          </span>
        </div>
      </div>
    </div>
  );
}