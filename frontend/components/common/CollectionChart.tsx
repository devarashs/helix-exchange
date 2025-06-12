"use client";

import { TagIcon } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Scatter,
  ComposedChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "../ui/button";

// Generate dummy sales data similar to the image
const generateSalesData = () => {
  const data = [];
  const baseValue = 20;
  const days = 7; // 10/11 to 10/17

  for (let i = 0; i < days; i++) {
    const dayNum = i + 11;
    const day = `10/${dayNum}`;

    // Generate sales value
    let value = baseValue + Math.pow(i, 1.5) * 10;
    value += Math.random() * 20 * (i + 1);
    const salesValue = Math.round(value);

    // Create scatter points that blend with the area
    let scatterValue = null;
    if (Math.random() > 0.3) {
      // Make scatter points closer to the area line for better blending
      const offset = (Math.random() - 0.5) * 15; // Random offset between -7.5 and 7.5
      scatterValue = Math.round(salesValue + offset);
      scatterValue = Math.max(scatterValue, 5);
    }

    data.push({
      day,
      sales: salesValue,
      scatter: scatterValue,
    });
  }
  return data;
};

const chartData = generateSalesData();

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-3)",
  },
  scatter: {
    label: "Points",
    color: "#ff6b4a",
  },
} satisfies ChartConfig;

export default function CollectionChart() {
  // Define price levels to display as horizontal lines
  const priceLines = [10, 20, 40, 70, 120, 160];

  return (
    <Card className="bg--white/[0] text-white border-0">
      <CardHeader className="p-0">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-sm">
              <TagIcon className="text-black" fill="white" />
            </span>
            <CardTitle className="text-white uppercase font-bold">
              Sales Graph
            </CardTitle>
          </div>
          <div className="flex items-center gap-1">
            <Button className="bg-white/[0.1] text-white rounded-xs hover:bg-white/[0.15]">
              1D
            </Button>
            <Button className="bg-white/[0.1] text-white rounded-xs hover:bg-white/[0.15]">
              1W
            </Button>
            <Button className="bg-white/[0.1] text-white rounded-xs hover:bg-white/[0.15]">
              1M
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ChartContainer config={chartConfig} className="h-80">
          <ComposedChart
            data={chartData}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            {/* Display XS labels next to price lines */}
            {priceLines.map((price, idx) => (
              <text
                key={`label-${idx}`}
                x={0}
                y={price}
                fill="white"
                fontSize={10}
                textAnchor="start"
                dominantBaseline="middle"
              >
                XS{price}
              </text>
            ))}

            {/* Draw horizontal price lines */}
            {priceLines.map((price, idx) => (
              <CartesianGrid
                key={idx}
                horizontal={true}
                vertical={false}
                strokeDasharray="0"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth={0.5}
                y={price}
              />
            ))}

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "white", fontSize: 10 }}
              interval={0}
            />

            <YAxis hide={true} domain={["dataMin - 5", "dataMax + 10"]} />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <defs>
              {/* Create gradient for area chart */}
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff6b4a" stopOpacity={0.8} />
                <stop offset="25%" stopColor="#ff6b4a" stopOpacity={0.4} />
                <stop offset="50%" stopColor="#ff6b4a" stopOpacity={0.2} />
                <stop offset="75%" stopColor="#ff6b4a" stopOpacity={0.1} />
                <stop offset="100%" stopColor="#ff6b4a" stopOpacity={0.05} />
              </linearGradient>

              {/* Gradient for scatter points to blend with area */}
              <radialGradient id="scatterGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ff6b4a" stopOpacity={1} />
                <stop offset="70%" stopColor="#ff6b4a" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#ff6b4a" stopOpacity={0.3} />
              </radialGradient>
            </defs>

            {/* Main area chart */}
            <Area
              dataKey="sales"
              type="monotone"
              fill="url(#salesGradient)"
              fillOpacity={1}
              stroke="#ff6b4a"
              strokeWidth={2}
            />

            {/* Blended scatter points */}
            <Scatter
              dataKey="scatter"
              fill="url(#scatterGradient)"
              stroke="#ff6b4a"
              strokeWidth={1}
              strokeOpacity={0.8}
              r={4}
              fillOpacity={0.9}
            />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="w-full flex justify-around">
          {/* Green volume bars at the bottom */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="bg-green-400"
              style={{
                width: "2px",
                height: `${Math.random() * 15 + 2}px`,
              }}
            />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
