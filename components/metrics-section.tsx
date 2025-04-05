"use client"

import { useState } from "react"
import { CircularProgress } from "./circular-progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RadarMetricsChart } from "./radar-chart"
import { MetricsBarChart } from "./metrics-bar-chart"

const metricsData = [
  { label: "Sleep", value: 82 },
  { label: "Recovery", value: 65 },
  { label: "Hydration", value: 55 },
  { label: "Nutrition", value: 60 },
  { label: "Training", value: 95 },
  { label: "HRV", value: 82 },
  { label: "Adaptation", value: 78 },
  { label: "Energy", value: 68 },
]

const weeklyData = [
  { day: "Mon", score: 78 },
  { day: "Tue", score: 82 },
  { day: "Wed", score: 75 },
  { day: "Thu", score: 85 },
  { day: "Fri", score: 90 },
  { day: "Sat", score: 88 },
  { day: "Sun", score: 85 },
]

const radarData = metricsData.map((item) => ({
  subject: item.label,
  value: item.value,
  fullMark: 100,
}))

export function MetricsSection() {
  const [activeTab, setActiveTab] = useState("score")

  // Calculate average score
  const averageScore = 85

  return (
    <section className="py-12 container">
      <Card className="bg-encytex-card-bg border-none">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Performance Metrics</CardTitle>
          <CardDescription>Track your health and performance metrics in real-time</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="score" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="score">Encytex Score</TabsTrigger>
              <TabsTrigger value="metrics">Metrics</TabsTrigger>
              <TabsTrigger value="radar">Radar</TabsTrigger>
            </TabsList>

            <TabsContent value="score" className="flex flex-col items-center">
              <CircularProgress value={averageScore} size={240} strokeWidth={16} className="mb-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-encytex-green">{averageScore}</div>
                  <div className="text-sm text-muted-foreground mt-1">Overall Score</div>
                </div>
              </CircularProgress>

              <div className="mt-8 flex justify-center gap-4">
                <Button className="early-access-btn" asChild>
                  <Link href="/early-access">Get Early Access</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="metrics">
              <div className="max-w-3xl mx-auto">
                <div className="bg-background/5 backdrop-blur-sm p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-medium mb-4 text-center">Performance Metrics</h3>
                  <MetricsBarChart data={metricsData} />
                </div>

                <div className="mt-8 flex justify-center gap-4">
                  <Button className="early-access-btn" asChild>
                    <Link href="/early-access">Get Early Access</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/sign-in">Sign In</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="radar">
              <div className="max-w-3xl mx-auto">
                <RadarMetricsChart data={radarData} />

                <div className="mt-8 flex justify-center gap-4">
                  <Button className="early-access-btn" asChild>
                    <Link href="/early-access">Get Early Access</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/sign-in">Sign In</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}

