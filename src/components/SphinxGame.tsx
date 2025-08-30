"use client"
import React, { useState } from 'react';
import { Button } from './gamecomp/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './gamecomp/ui/card';
import { Alert, AlertDescription } from './gamecomp/ui/alert';
import { Play, RotateCcw, CheckCircle, AlertTriangle, Eye } from 'lucide-react';
import { ConditionalTips } from './ConditionalTips';

interface GameState {
  level: number;
  isRunning: boolean;
  isComplete: boolean;
  isFailed: boolean;
  error: string;
  currentStep: number;
  executionSteps: string[];
}

interface Riddle {
  name: string;
  story: string;
  problem: string;
  starterCode: string;
  hint: string;
  solution: string;
  testCases: TestCase[];
}

interface TestCase {
  description: string;
  variables: Record<string, string | number | boolean>;
  expectedResult: string | number | boolean;
  explanation: string;
}

const riddles: Riddle[] = [
  {
    name: "The Three Keys",
    story: "You stand before three ancient keys. Legend says one is real gold, one is fool's gold, and one is cursed. The sphinx whispers: 'Test their weight to find the truth.'",
    problem: "Write an if-else statement to identify the key type based on its weight.",
    starterCode: "function identifyKey(weight) {\n  // weight: 50 = real gold, 30 = fool's gold, 10 = cursed\n  if (weight === 50) {\n    return \"real gold\";\n  }\n  // Add more conditions here\n}",
    hint: "Use else if for the second condition and else for the final case",
    solution: "function identifyKey(weight) {\n  if (weight === 50) {\n    return \"real gold\";\n  } else if (weight === 30) {\n    return \"fool's gold\";\n  } else {\n    return \"cursed\";\n  }\n}",
    testCases: [
      {
        description: "Heavy key (weight 50)",
        variables: { weight: 50 },
        expectedResult: "real gold",
        explanation: "The heaviest key is pure gold"
      },
      {
        description: "Medium key (weight 30)",
        variables: { weight: 30 },
        expectedResult: "fool's gold",
        explanation: "The medium weight key is fool's gold"
      },
      {
        description: "Light key (weight 10)",
        variables: { weight: 10 },
        expectedResult: "cursed",
        explanation: "The lightest key is cursed"
      }
    ]
  },
  {
    name: "The Guardian's Password",
    story: "A magical guardian blocks your path. It demands a password that follows ancient rules: 'The word must be long enough to hold power, and contain the sacred symbol.'",
    problem: "Create conditions to validate a password that is at least 8 characters long AND contains the symbol '@'.",
    starterCode: "function validatePassword(password) {\n  // Check if password is valid\n  if (password.length >= 8 && password.includes('@')) {\n    return \"access granted\";\n  }\n  // What should happen if invalid?\n}",
    hint: "Use logical AND (&&) to combine conditions, and provide a response for invalid passwords",
    solution: "function validatePassword(password) {\n  if (password.length >= 8 && password.includes('@')) {\n    return \"access granted\";\n  } else {\n    return \"access denied\";\n  }\n}",
    testCases: [
      {
        description: "Valid password",
        variables: { password: "sphinx@123" },
        expectedResult: "access granted",
        explanation: "Password is 9+ characters and contains '@'"
      },
      {
        description: "Too short",
        variables: { password: "abc@" },
        expectedResult: "access denied",
        explanation: "Password is only 4 characters long"
      },
      {
        description: "Missing symbol",
        variables: { password: "verylongpassword" },
        expectedResult: "access denied",
        explanation: "Password lacks the sacred '@' symbol"
      }
    ]
  },
  {
    name: "The Treasure Chamber",
    story: "Three treasure chests await, each with different locks. The sphinx explains: 'Gold opens with ancient numbers, silver with modern codes, bronze with sacred words.'",
    problem: "Write nested if-else logic to determine what unlocks each chest type and whether the key matches.",
    starterCode: "function unlockChest(chestType, keyType, keyValue) {\n  if (chestType === \"gold\") {\n    // Gold chests need numbers < 100\n    // Add your logic here\n  } else if (chestType === \"silver\") {\n    // Silver chests need numbers >= 100\n    // Add your logic here  \n  } else {\n    // Bronze chests need the word \"sphinx\"\n    // Add your logic here\n  }\n}",
    hint: "Nest conditions inside each chest type check. For gold: number < 100, silver: number >= 100, bronze: word === 'sphinx'",
    solution: "function unlockChest(chestType, keyType, keyValue) {\n  if (chestType === \"gold\") {\n    if (keyType === \"number\" && keyValue < 100) {\n      return \"treasure found\";\n    } else {\n      return \"wrong key\";\n    }\n  } else if (chestType === \"silver\") {\n    if (keyType === \"number\" && keyValue >= 100) {\n      return \"treasure found\";\n    } else {\n      return \"wrong key\";\n    }\n  } else {\n    if (keyType === \"word\" && keyValue === \"sphinx\") {\n      return \"treasure found\";\n    } else {\n      return \"wrong key\";\n    }\n  }\n}",
    testCases: [
      {
        description: "Gold chest with correct key",
        variables: { chestType: "gold", keyType: "number", keyValue: 42 },
        expectedResult: "treasure found",
        explanation: "Gold chest opens with numbers < 100"
      },
      {
        description: "Silver chest with correct key",
        variables: { chestType: "silver", keyType: "number", keyValue: 150 },
        expectedResult: "treasure found",
        explanation: "Silver chest opens with numbers >= 100"
      },
      {
        description: "Bronze chest with magic word",
        variables: { chestType: "bronze", keyType: "word", keyValue: "sphinx" },
        expectedResult: "treasure found",
        explanation: "Bronze chest opens with the sacred word"
      },
      {
        description: "Wrong key for gold chest",
        variables: { chestType: "gold", keyType: "number", keyValue: 200 },
        expectedResult: "wrong key",
        explanation: "Number too high for gold chest"
      }
    ]
  },
  {
    name: "The Oracle's Prophecy",
    story: "The ancient oracle speaks in riddles about fate: 'When the moon is full AND the hour is sacred, OR when the stars align with ancient power, then shall the prophecy be fulfilled.'",
    problem: "Implement complex boolean logic with multiple conditions using AND (&&) and OR (||) operators.",
    starterCode: "function checkProphecy(moonPhase, hour, starAlignment, ancientPower) {\n  // Prophecy fulfilled if:\n  // (moonPhase === \"full\" AND hour === 13) OR\n  // (starAlignment === true AND ancientPower === true)\n  if (/* your conditions here */) {\n    return \"prophecy fulfilled\";\n  } else {\n    return \"prophecy pending\";\n  }\n}",
    hint: "Use parentheses to group conditions: (A && B) || (C && D)",
    solution: "function checkProphecy(moonPhase, hour, starAlignment, ancientPower) {\n  if ((moonPhase === \"full\" && hour === 13) || (starAlignment === true && ancientPower === true)) {\n    return \"prophecy fulfilled\";\n  } else {\n    return \"prophecy pending\";\n  }\n}",
    testCases: [
      {
        description: "Full moon at sacred hour",
        variables: { moonPhase: "full", hour: 13, starAlignment: false, ancientPower: false },
        expectedResult: "prophecy fulfilled",
        explanation: "Full moon at hour 13 fulfills the prophecy"
      },
      {
        description: "Stars aligned with power",
        variables: { moonPhase: "new", hour: 10, starAlignment: true, ancientPower: true },
        expectedResult: "prophecy fulfilled",
        explanation: "Star alignment with ancient power fulfills the prophecy"
      },
      {
        description: "Incomplete conditions",
        variables: { moonPhase: "full", hour: 10, starAlignment: true, ancientPower: false },
        expectedResult: "prophecy pending",
        explanation: "Neither condition group is fully satisfied"
      }
    ]
  }
];

export function SphinxGame() {
  const [gameState, setGameState] = useState<GameState>({
    level: 0,
    isRunning: false,
    isComplete: false,
    isFailed: false,
    error: '',
    currentStep: 0,
    executionSteps: []
  });

  const [code, setCode] = useState(riddles[0].starterCode);
  const [showSolution, setShowSolution] = useState(false);
  const [testResults, setTestResults] = useState<Array<{
    passed: boolean;
    result: string | number | boolean; // Specify possible types
    expected: string | number | boolean; // Specify possible types
  }>>([]);

  const currentRiddle = riddles[gameState.level];

  const resetGame = () => {
    setGameState(prev => ({
      ...prev,
      isRunning: false,
      isComplete: false,
      isFailed: false,
      error: '',
      currentStep: 0,
      executionSteps: []
    }));
    setTestResults([]);
  };

  const nextLevel = () => {
    if (gameState.level < riddles.length - 1) {
      const nextLevel = gameState.level + 1;
      setGameState({
        level: nextLevel,
        isRunning: false,
        isComplete: false,
        isFailed: false,
        error: '',
        currentStep: 0,
        executionSteps: []
      });
      setCode(riddles[nextLevel].starterCode);
      setShowSolution(false);
      setTestResults([]);
    }
  };

const executeCode = async () => {
  if (gameState.isRunning) return;

  resetGame();
  setGameState(prev => ({ ...prev, isRunning: true }));

  try {
    // Create function from code
    const functionCode = code.replace(/function\s+\w+/, 'function testFunction');
    const func = new Function('return ' + functionCode)();

    const results: Array<{passed: boolean, result: string | number | boolean, expected: string | number | boolean}> = [];
    const steps: string[] = [];

    // Test each case
    for (let i = 0; i < currentRiddle.testCases.length; i++) {
      const testCase = currentRiddle.testCases[i];
      
      setGameState(prev => ({ ...prev, currentStep: i }));
      await new Promise(resolve => setTimeout(resolve, 800));

      try {
        const args = Object.values(testCase.variables);
        const result = func(...args);
        const passed = result === testCase.expectedResult;
        
        results.push({
          passed,
          result,
          expected: testCase.expectedResult
        });

        steps.push(`Test ${i + 1}: ${testCase.description} - ${passed ? '✅ PASSED' : '❌ FAILED'}`);
        
        if (!passed) {
          setGameState(prev => ({
            ...prev,
            isFailed: true,
            error: `Test failed: ${testCase.description}. Expected "${testCase.expectedResult}" but got "${result}".`,
            executionSteps: steps
          }));
          setTestResults(results);
          setGameState(prev => ({ ...prev, isRunning: false }));
          return;
        }
      } catch (error) {
        results.push({
          passed: false,
          result: 'ERROR',
          expected: testCase.expectedResult
        });
        setGameState(prev => ({
          ...prev,
          isFailed: true,
          error: `Runtime error in test case: ${testCase.description}`,
          executionSteps: steps
        }));
        setTestResults(results);
        setGameState(prev => ({ ...prev, isRunning: false }));
        return;
      }
    }

    // All tests passed
    setTestResults(results);
    setGameState(prev => ({
      ...prev,
      isComplete: true,
      isRunning: false,
      executionSteps: steps
    }));

  } catch (error) {
    setGameState(prev => ({
      ...prev,
      error: "Code syntax error! Check your function structure.",
      isRunning: false,
      isFailed: true
    }));
  }
};

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <ConditionalTips />

      {/* Sphinx Header */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="text-3xl">🐱‍👤</div>
            <div>
              <h2 className='mb-2 font-semibold'>The Sphinx of Logic</h2>
              <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded">
                Riddle {gameState.level + 1}: {currentRiddle.name}
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-amber-100/50 rounded-lg border-l-4 border-amber-400">
              <p className="italic text-amber-900">{currentRiddle.story}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg shadow-sm">
              <strong>Challenge:</strong> {currentRiddle.problem}
            </div>
          </div>

          {gameState.error && (
            <Alert className="mt-4 border-destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-destructive">
                {gameState.error}
              </AlertDescription>
            </Alert>
          )}

          {gameState.isComplete && (
            <Alert className="mt-4 border-green-500 bg-green-100">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription className="text-green-700">
                🎉 The Sphinx is pleased! You have solved the riddle with perfect logic!
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <Card className='border-none bg-violet-100 shadow-xl'>
          <CardHeader>
            <CardTitle className='font-semibold'>Your Solution</CardTitle>
            <p className="text-sm text-muted-foreground">{currentRiddle.hint}</p>
          </CardHeader>
          <CardContent>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 p-4 border rounded-lg font-mono text-sm bg-muted/30 border-none bg-white shadow-md"
              placeholder="Write your conditional logic here..."
            />

            <div className="flex gap-2 mt-4">
              <Button
                onClick={executeCode}
                disabled={gameState.isRunning}
                className="flex items-center gap-2 text-white bg-black"
              >
                <Play className="h-4 w-4" />
                {gameState.isRunning ? 'Testing...' : 'Test Solution'}
              </Button>

              <Button variant="outline" onClick={resetGame}>
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>

              <Button
                variant="outline"
                onClick={() => setShowSolution(!showSolution)}
              >
                <Eye className="h-4 w-4" />
                {showSolution ? 'Hide' : 'Reveal'} Solution
              </Button>

              {gameState.isComplete && gameState.level < riddles.length - 1 && (
                <Button onClick={nextLevel} className="ml-auto">
                  Next Riddle →
                </Button>
              )}
            </div>

            {showSolution && (
              <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-sm mb-2 text-amber-800">The Sphinx reveals the answer:</p>
                <pre className="text-sm font-mono bg-white p-3 rounded border border-none shadow-xl">{currentRiddle.solution}</pre>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Test Cases and Visualization */}
        <Card className='border-none bg-green-100 shadow-xl'>
          <CardHeader>
            <CardTitle className='font-semibold'>Test Chamber</CardTitle>
            <p className="text-sm text-muted-foreground">The Sphinx tests your logic with these scenarios</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentRiddle.testCases.map((testCase, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 transition-all ${gameState.isRunning && gameState.currentStep === index
                      ? 'border-blue-400 bg-blue-50 animate-pulse'
                      : testResults[index]?.passed === true
                        ? 'border-green-400 bg-green-50'
                        : testResults[index]?.passed === false
                          ? 'border-red-400 bg-red-50'
                          : 'border-gray-200 bg-gray-50'
                    }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <strong className="text-sm">Test {index + 1}: {testCase.description}</strong>
                    {testResults[index] && (
                      <span className={`text-xs px-2 py-1 rounded ${testResults[index].passed
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                        }`}>
                        {testResults[index].passed ? '✅ PASS' : '❌ FAIL'}
                      </span>
                    )}
                  </div>

                  <div className="text-sm space-y-1">
                    <div><strong>Input:</strong> {JSON.stringify(testCase.variables)}</div>
                    <div><strong>Expected:</strong> {testCase.expectedResult}</div>
                    {testResults[index] && (
                      <div><strong>Got:</strong> {testResults[index].result}</div>
                    )}
                    <div className="text-muted-foreground italic">{testCase.explanation}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sphinx Animation */}
            <div className="flex justify-center mt-6">
              <div className={`text-6xl transition-all duration-1000 ${gameState.isComplete ? 'animate-bounce' :
                  gameState.isFailed ? 'animate-pulse' :
                    gameState.isRunning ? 'animate-pulse' : ''
                }`}>
                {gameState.isComplete ? '😸' : gameState.isFailed ? '😾' : '🐱‍👤'}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}