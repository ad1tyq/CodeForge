"use client"
import { Card, CardContent, CardHeader, CardTitle } from './gamecomp/ui/card';
import { Lightbulb, GitBranch, Zap, Target } from 'lucide-react';

export function ConditionalTips() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm">
            <GitBranch className="h-4 w-4 text-purple-600" />
            If-Else
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            Use <code className="bg-white px-1 rounded">if (condition) {'{ ... }'} else {'{ ... }'}</code> to make decisions.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Target className="h-4 w-4 text-blue-600" />
            Comparisons
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            Use <code className="bg-white px-1 rounded">===, !==, &lt;, &gt;, &lt;=, &gt;=</code> to compare values.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Zap className="h-4 w-4 text-green-600" />
            Logic Operators
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            Combine conditions with <code className="bg-white px-1 rounded">&amp;&amp;</code> (AND) and <code className="bg-white px-1 rounded">||</code> (OR).
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Lightbulb className="h-4 w-4 text-amber-600" />
            Else If
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            Chain multiple conditions with <code className="bg-white px-1 rounded">else if</code> for complex logic.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}