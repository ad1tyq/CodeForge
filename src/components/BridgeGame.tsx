"use client"
import React, { useState, useEffect } from 'react';
import { Button } from './gamecomp/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './gamecomp/ui/card';
import { Alert, AlertDescription } from './gamecomp/ui/alert';
import { Play, RotateCcw, CheckCircle, AlertTriangle } from 'lucide-react';
import { CodingTips } from './CodingTips';

interface GameState {
  level: number;
  planks: boolean[];
  isRunning: boolean;
  currentPlank: number;
  isComplete: boolean;
  isBroken: boolean;
  error: string;
}

interface Level {
  name: string;
  description: string;
  bridgeLength: number;
  starterCode: string;
  hint: string;
  solution: string;
}

const levels: Level[] = [
  {
    name: "Basic Bridge",
    description: "Build a simple 5-plank bridge. Place one plank at each position.",
    bridgeLength: 5,
    starterCode: "for (let i = 0; i < 5; i++) {\n  placePlank();\n}",
    hint: "Use a for loop to place 5 planks consecutively",
    solution: "for (let i = 0; i < 5; i++) {\n  placePlank();\n}"
  },
  {
    name: "Skip Bridge",
    description: "Build a 7-position bridge, but only place planks on even positions (0, 2, 4, 6)",
    bridgeLength: 7,
    starterCode: "for (let i = 0; i < 7; i++) {\n  // Add condition here\n}",
    hint: "Check if the position is even using i % 2 === 0",
    solution: "for (let i = 0; i < 7; i++) {\n  if (i % 2 === 0) {\n    placePlank();\n  }\n}"
  },
  {
    name: "Pattern Bridge",
    description: "Build an 8-position bridge with planks at positions 1, 2, 5, and 6 only",
    bridgeLength: 8,
    starterCode: "for (let i = 0; i < 8; i++) {\n  // Your logic here\n}",
    hint: "Place planks when i equals 1, 2, 5, or 6",
    solution: "for (let i = 0; i < 8; i++) {\n  if (i === 1 || i === 2 || i === 5 || i === 6) {\n    placePlank();\n  }\n}"
  },
  {
    name: "Advanced Pattern",
    description: "Build a 10-position bridge. Place planks every 3 positions starting from 1 (1, 4, 7)",
    bridgeLength: 10,
    starterCode: "for (let i = 1; i < 10; i += 3) {\n  // Your logic here\n}",
    hint: "Use i += 3 to increment by 3 each time, or use modulo arithmetic",
    solution: "for (let i = 1; i < 10; i += 3) {\n  placePlank();\n}"
  }
];

export function BridgeGame() {
  const [gameState, setGameState] = useState<GameState>({
    level: 0,
    planks: new Array(levels[0].bridgeLength).fill(false),
    isRunning: false,
    currentPlank: 0,
    isComplete: false,
    isBroken: false,
    error: ''
  });

  const [code, setCode] = useState(levels[0].starterCode);
  const [showSolution, setShowSolution] = useState(false);

  const currentLevel = levels[gameState.level];

  const resetGame = () => {
    setGameState(prev => ({
      ...prev,
      planks: new Array(currentLevel.bridgeLength).fill(false),
      isRunning: false,
      currentPlank: 0,
      isComplete: false,
      isBroken: false,
      error: ''
    }));
  };

  const nextLevel = () => {
    if (gameState.level < levels.length - 1) {
      const nextLevelIndex = gameState.level + 1;
      const nextLevel = levels[nextLevelIndex];
      setGameState({
        level: nextLevelIndex,
        planks: new Array(nextLevel.bridgeLength).fill(false),
        isRunning: false,
        currentPlank: 0,
        isComplete: false,
        isBroken: false,
        error: ''
      });
      setCode(nextLevel.starterCode);
      setShowSolution(false);
    }
  };

  const executeCode = async () => {
    if (gameState.isRunning) return;

    resetGame();
    setGameState(prev => ({ ...prev, isRunning: true }));

    try {
      // Simple code parser for for loops and if statements
      const plankPositions: number[] = [];
      let currentPos = 0;

      // Create a mock environment for code execution
      const placePlank = () => {
        plankPositions.push(currentPos);
      };

      // Handle different loop patterns
      const bodyMatch = code.match(/\{([\s\S]*?)\}/);
      const body = bodyMatch ? bodyMatch[1] : '';

      // Check for different loop patterns
      const forLoopPatterns = [
        // Standard i++ pattern
        /for\s*\(\s*let\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\+\+\s*\)/,
        // i += 3 pattern
        /for\s*\(\s*let\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+=\s*(\d+)\s*\)/
      ];

      let loopExecuted = false;

      // Try standard i++ loop
      const standardLoop = code.match(forLoopPatterns[0]);
      if (standardLoop) {
        const startNum = parseInt(standardLoop[1]);
        const endNum = parseInt(standardLoop[2]);
        
        for (let i = startNum; i < endNum; i++) {
          currentPos = i;
          
          // Handle if statements
          if (body.includes('if')) {
            const conditions = [
              { pattern: /if\s*\(\s*i\s*%\s*2\s*===\s*0\s*\)/, test: (i: number) => i % 2 === 0 },
              { pattern: /if\s*\(\s*i\s*===\s*1\s*\|\|\s*i\s*===\s*2\s*\|\|\s*i\s*===\s*5\s*\|\|\s*i\s*===\s*6\s*\)/, 
                test: (i: number) => [1, 2, 5, 6].includes(i) }
            ];

            const matchedCondition = conditions.find(cond => cond.pattern.test(body));
            if (matchedCondition && matchedCondition.test(i)) {
              placePlank();
            }
          } else if (body.includes('placePlank()')) {
            placePlank();
          }
        }
        loopExecuted = true;
      }

      // Try i += n loop
      const incrementLoop = code.match(forLoopPatterns[1]);
      if (incrementLoop && !loopExecuted) {
        const startNum = parseInt(incrementLoop[1]);
        const endNum = parseInt(incrementLoop[2]);
        const increment = parseInt(incrementLoop[3]);
        
        for (let i = startNum; i < endNum; i += increment) {
          currentPos = i;
          if (body.includes('placePlank()')) {
            placePlank();
          }
        }
      }

      // Animate plank placement
      for (let i = 0; i < plankPositions.length; i++) {
        const position = plankPositions[i];
        
        if (position >= currentLevel.bridgeLength) {
          // Bridge breaks - trying to place plank outside bounds
          setGameState(prev => ({ 
            ...prev, 
            isBroken: true, 
            error: `Bridge broke! Tried to place plank at position ${position}, but bridge only has ${currentLevel.bridgeLength} positions.`,
            isRunning: false
          }));
          return;
        }

        await new Promise(resolve => setTimeout(resolve, 500));
        
        setGameState(prev => ({
          ...prev,
          planks: prev.planks.map((plank, index) => index === position ? true : plank),
          currentPlank: position
        }));
      }

      // Check if bridge is complete (all required planks placed)
      setTimeout(() => {
        const requiredPlanks = getCurrentLevelRequiredPlanks();
        const placedCorrectly = requiredPlanks.every((required, index) => 
          required ? gameState.planks[index] || plankPositions.includes(index) : true
        );

        if (placedCorrectly && plankPositions.length > 0) {
          setGameState(prev => ({ 
            ...prev, 
            isComplete: true, 
            isRunning: false 
          }));
        } else if (plankPositions.length === 0) {
          setGameState(prev => ({ 
            ...prev, 
            error: "No planks were placed! Check your loop logic.",
            isRunning: false 
          }));
        } else {
          setGameState(prev => ({ 
            ...prev, 
            error: "Bridge incomplete or planks placed incorrectly!",
            isRunning: false 
          }));
        }
      }, 1000);

    } catch (error) {
      setGameState(prev => ({ 
        ...prev, 
        error: "Code error! Check your syntax.",
        isRunning: false 
      }));
    }
  };

  const getCurrentLevelRequiredPlanks = (): boolean[] => {
    switch (gameState.level) {
      case 0: // Basic bridge - all planks
        return new Array(5).fill(true);
      case 1: // Even positions only (0, 2, 4, 6)
        return [true, false, true, false, true, false, true];
      case 2: // Specific positions (1, 2, 5, 6)
        return [false, true, true, false, false, true, true, false];
      case 3: // Every 3 positions starting from 1 (1, 4, 7)
        return [false, true, false, false, true, false, false, true, false, false];
      default:
        return new Array(currentLevel.bridgeLength).fill(true);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <CodingTips />
      
      <Card className='bacground-blur-md border-none shadow-xl'>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🌉 The Broken Bridge Challenge
            <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded">
              Level {gameState.level + 1}: {currentLevel.name}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{currentLevel.description}</p>
          
          {gameState.error && (
            <Alert className="mb-4 border-destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-destructive">
                {gameState.error}
              </AlertDescription>
            </Alert>
          )}

          {gameState.isComplete && (
            <Alert className="mb-4 border-none bg-green-200">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription className="text-green-700">
                🎉 Bridge completed successfully! Well done!
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <Card className='border-none bg-blue-100'>
          <CardHeader>
            <CardTitle className='font-semibold'>Code Editor</CardTitle>
            <p className="text-sm text-muted-foreground">{currentLevel.hint}</p>
          </CardHeader>
          <CardContent>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full bg-white h-48 p-4 border rounded-lg shadow-xl border-none font-mono text-sm bg-muted/30"
              placeholder="Write your loop here..."
            />
            
            <div className="flex gap-2 mt-4">
              <Button 
                onClick={executeCode} 
                disabled={gameState.isRunning}
                className="flex items-center gap-2 text-white bg-black"
              >
                <Play className="h-4 w-4" />
                {gameState.isRunning ? 'Building...' : 'Run Code'}
              </Button>
              
              <Button variant="outline" onClick={resetGame}>
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>

              <Button 
                variant="outline" 
                onClick={() => setShowSolution(!showSolution)}
              >
                {showSolution ? 'Hide' : 'Show'} Solution
              </Button>

              {gameState.isComplete && gameState.level < levels.length - 1 && (
                <Button onClick={nextLevel} className="ml-auto text-white bg-black">
                  Next Level →
                </Button>
              )}
            </div>

            {showSolution && (
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm mb-2">Solution:</p>
                <pre className="text-sm font-mono">{currentLevel.solution}</pre>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Bridge Visualization */}
        <Card className='bg-violet-100 border-none'>
          <CardHeader>
            <CardTitle className='font-semibold'>Bridge Visualization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              {/* Bridge Structure */}
              <svg width="400" height="200" className="border rounded-lg bg-sky-100 border-none shadow-xl mt-3">
                {/* Sky background */}
                <rect width="400" height="200" fill="#e0f2fe" />
                
                {/* Ground/Cliffs */}
                <rect x="0" y="150" width="80" height="50" fill="#8b5a2b" />
                <rect x="320" y="150" width="80" height="50" fill="#8b5a2b" />
                
                {/* Bridge supports */}
                <line x1="80" y1="150" x2="320" y2="150" stroke="#654321" strokeWidth="4" />
                
                {/* Bridge planks */}
                {gameState.planks.map((isPlaced, index) => {
                  const x = 80 + (index * (240 / currentLevel.bridgeLength));
                  const width = (240 / currentLevel.bridgeLength) - 2;
                  
                  if (isPlaced) {
                    return (
                      <rect
                        key={index}
                        x={x}
                        y={140}
                        width={width}
                        height={10}
                        fill="#8b4513"
                        stroke="#654321"
                        strokeWidth="1"
                        className={gameState.currentPlank === index ? 'animate-pulse' : ''}
                      />
                    );
                  } else {
                    // Show placeholder for missing planks
                    return (
                      <rect
                        key={index}
                        x={x}
                        y={145}
                        width={width}
                        height={2}
                        fill="#ddd"
                        stroke="#ccc"
                        strokeWidth="1"
                        strokeDasharray="2,2"
                      />
                    );
                  }
                })}

                {/* Character/Builder */}
                <g className={gameState.isRunning ? 'animate-bounce' : ''}>
                  <circle cx="50" cy="140" r="8" fill="#ff6b6b" />
                  <rect x="46" y="148" width="8" height="12" fill="#4ecdc4" />
                  {/* Builder's tool */}
                  <rect x="54" y="138" width="6" height="2" fill="#8b4513" />
                </g>
                
                {/* Goal/Target character on the other side */}
                <g>
                  <circle cx="350" cy="140" r="8" fill="#4ecdc4" />
                  <rect x="346" y="148" width="8" height="12" fill="#ff6b6b" />
                  {gameState.isComplete && (
                    <text x="350" y="130" textAnchor="middle" fontSize="16">🎉</text>
                  )}
                </g>
                
                {/* Broken bridge effect */}
                {gameState.isBroken && (
                  <g className="animate-bounce">
                    <text x="200" y="100" textAnchor="middle" fill="#dc2626" fontSize="24">
                      💥 CRACK!
                    </text>
                  </g>
                )}

                {/* Success effect */}
                {gameState.isComplete && (
                  <g>
                    <text x="200" y="50" textAnchor="middle" fill="#16a34a" fontSize="20">
                      🎉 Success!
                    </text>
                  </g>
                )}
              </svg>

              {/* Progress indicator */}
              <div className="mt-4 w-full max-w-sm">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{gameState.planks.filter(Boolean).length} / {getCurrentLevelRequiredPlanks().filter(Boolean).length}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${(gameState.planks.filter(Boolean).length / getCurrentLevelRequiredPlanks().filter(Boolean).length) * 100}%` 
                    }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}