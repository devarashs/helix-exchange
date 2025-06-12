"use client";

import { TagIcon } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Scatter,
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

    // Create scatter points that are guaranteed to be different
    // Only show scatter points for some data points
    let scatterValue = null;
    if (Math.random() > 0.4) {
      // Increased probability to show more scatter points
      // Ensure minimum offset of 5 units (either up or down)
      const minOffset = 5;
      const direction = Math.random() > 0.5 ? 1 : -1;
      const offset = minOffset + Math.random() * 10; // Between 5-15 units offset

      scatterValue = Math.round(salesValue + direction * offset);

      // Ensure scatter value is positive
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
    color: "#000000",
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
          <AreaChart
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
              {/* Create multiple gradient bands to achieve the layered effect */}
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="25%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="50%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.2}
                />
                <stop
                  offset="75%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.05}
                />
              </linearGradient>

              {/* Add additional pattern with stripes for texture */}
              <pattern
                id="stripePattern"
                patternUnits="userSpaceOnUse"
                width="10"
                height="10"
                patternTransform="rotate(45)"
              >
                <rect width="10" height="10" fill="url(#salesGradient)" />
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="10"
                  stroke="#ff3000"
                  strokeWidth="5"
                  strokeOpacity="0.2"
                />
              </pattern>
            </defs>

            {/* Main area with primary gradient */}
            <Area
              dataKey="sales"
              type="monotone"
              fill="url(#salesGradient)"
              fillOpacity={1}
              stroke="#ff6b4a"
              strokeWidth={1}
            />

            {/* Additional transparent areas for layered effect */}
            <Area
              dataKey="sales"
              type="monotone"
              fill="#ff2000"
              fillOpacity={0.2}
              stroke="none"
            />

            <Scatter
              dataKey="scatter"
              fill="black"
              stroke="white"
              strokeWidth={1}
              r={3}
            />
          </AreaChart>
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
