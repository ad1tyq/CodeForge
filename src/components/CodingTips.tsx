"use client"
import { Card, CardContent, CardHeader, CardTitle } from './gamecomp/ui/card';
import { Lightbulb, Code, Target, Zap } from 'lucide-react';

export function CodingTips() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Code className="h-4 w-4 text-blue-600" />
            For Loops
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            Use <code className="bg-white px-1 rounded">for (let i = 0; i &lt; n; i++)</code> to repeat actions n times.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Target className="h-4 w-4 text-green-600" />
            Conditions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            Use <code className="bg-white px-1 rounded">if (condition)</code> to place planks selectively.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Zap className="h-4 w-4 text-yellow-600" />
            Modulo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            Use <code className="bg-white px-1 rounded">i % 2 === 0</code> to check if a number is even.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Lightbulb className="h-4 w-4 text-purple-600" />
            Debug Tip
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            Count your loop iterations carefully to avoid placing too many planks!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}