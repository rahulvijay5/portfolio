"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft, Plus } from "lucide-react";

interface Analytics {
  totalVisits: number;
  browsers: Record<string, number>;
  countries: Record<string, number>;
  devices: Record<string, number>;
  referrers: Record<string, number>;
  visitsOverTime: Array<{ date: string; count: number }>;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export default function AnalyticsPage({
  params,
}: {
  params: { slug: string };
}) {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch(`/api/analytics/${params.slug}`);
      if (!response.ok) {
        throw new Error("Failed to fetch analytics");
      }
      const data = await response.json();
      setAnalytics(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch analytics",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">No analytics data available</h1>
        <Link href="/shorten/manage">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Manage URLs
          </Button>
        </Link>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  const prepareChartData = (data: Record<string, number>) => {
    return Object.entries(data)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black text-black dark:text-white">
      <div className="mx-auto space-y-8">
        <div className="flex w-full justify-between">
          <div className="">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Analytics for
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 break-all">
              rahulvijay.site/{params.slug}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/shorten/manage">
              <Button variant="outline" className="w-full sm:w-auto">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Manage URLs
              </Button>
            </Link>
            <Link href="/shorten">
              <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Create New Short URL
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Total Visits", value: analytics.totalVisits },
                {
                  title: "Top Browser",
                  value:
                    Object.entries(analytics.browsers).sort(
                      (a, b) => b[1] - a[1]
                    )[0]?.[0] || "N/A",
                },
                {
                  title: "Top Country",
                  value:
                    Object.entries(analytics.countries).sort(
                      (a, b) => b[1] - a[1]
                    )[0]?.[0] || "N/A",
                },
                {
                  title: "Top Device",
                  value:
                    Object.entries(analytics.devices).sort(
                      (a, b) => b[1] - a[1]
                    )[0]?.[0] || "N/A",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-gray-800 border-none shadow-lg"
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white dark:bg-gray-800 border-none shadow-lg">
              <CardHeader>
                <CardTitle>Visits Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] sm:h-[400px]">
                  <ResponsiveContainer width="80%" height="100%">
                    <BarChart data={analytics.visitsOverTime.slice().reverse()}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" tickFormatter={formatDate} />
                      <YAxis allowDecimals={false} />
                      <Tooltip labelFormatter={(value) => formatDate(value)} />
                      <Bar dataKey="count" fill="#3B82F6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Top Browsers", data: analytics.browsers },
                { title: "Top Countries", data: analytics.countries },
                { title: "Top Devices", data: analytics.devices },
                { title: "Top Referrers", data: analytics.referrers },
              ].map((chart, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-gray-800 border-none shadow-lg"
                >
                  <CardHeader>
                    <CardTitle>{chart.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="w-full h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={prepareChartData(chart.data)}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label={({ name, percent }) =>
                              `${name} ${(percent * 100).toFixed(0)}%`
                            }
                          >
                            {prepareChartData(chart.data).map(
                              (entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={COLORS[index % COLORS.length]}
                                />
                              )
                            )}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <ul className="w-full mt-4 space-y-2">
                      {prepareChartData(chart.data).map(
                        ({ name, value }, index) => (
                          <li
                            key={index}
                            className="flex justify-between items-center text-sm"
                          >
                            <span className="font-medium">{name}</span>
                            <span className="text-gray-600 dark:text-gray-400">
                              {value}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
