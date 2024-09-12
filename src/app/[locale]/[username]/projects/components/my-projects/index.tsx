import React from 'react';
import { FileText, Plus, MoreHorizontal } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'; 
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

const projects = [
  { id: 1, name: 'Project A', updated: '1d ago', progress: '45%' },
  { id: 2, name: 'Project B', updated: '3h ago', progress: '60%' },
  { id: 3, name: 'Project C', updated: '5d ago', progress: '20%' },
];

const chartConfig = {
  solar: {
    label: "Solar Power (kWh)",
    color: "#f59e0b",
  },
  grid: {
    label: "Grid Power (kWh)",
    color: "#34d399",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", solar: 320, grid: 150 },
  { month: "February", solar: 400, grid: 200 },
  { month: "March", solar: 450, grid: 180 },
  { month: "April", solar: 380, grid: 220 },
  { month: "May", solar: 500, grid: 210 },
  { month: "June", solar: 550, grid: 190 },
];

const performanceData = [
  { label: '1W', value: '2.34%', positive: true },
  { label: '1M', value: '10.56%', positive: true },
  { label: '3M', value: '15.75%', positive: true },
  { label: '6M', value: '8.12%', positive: true },
  { label: 'YTD', value: '35.50%', positive: true },
  { label: '1Y', value: '48.90%', positive: true },
];

const ProjectList = () => {
  return (
    <div className="bg-background m-0 top-0 p-0 text-foreground w-full h-screen pb-20 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mt-4 px-4 pb-4 border-b-2 border-b-border">
        <h2 className="text-lg font-bold">My Projects</h2>
        <div className="flex space-x-2">
          <button className="p-1 hover:secondary rounded">
            <Plus size={18} />
          </button>
          <button className="p-1 hover:secondary rounded">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Project List */}
      <ul className="flex-grow overflow-auto pt-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className={`flex justify-between items-center p-4 cursor-pointer ${
              project.name === 'Project A' ? 'bg-muted' : 'hover:bg-secondary'
            }`}
          >
            <div className="flex items-center">
              <FileText size={18} className="mr-2" />
              <div>
                <p className="text-sm font-medium">{project.name}</p>
                <p className="text-xs text-gray-400">Updated {project.updated}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400">{project.progress}</span>
          </li>
        ))}
      </ul>

      {/* Project A Details Section with Full-Width Chart */}
      <div className="w-full p-0 m-0 pt-4 px-4 mt-4 border-t-2 border-t-border">
        <h3 className="text-md font-bold mb-2">Project A Details</h3>
        <div className="grid gap-4">
          {/* Bar Chart */}
          <div className="w-full">
            <h4 className="text-sm font-medium mb-1">Electricity Generation</h4>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-40 pr-5">
              <BarChart data={chartData} className="w-full">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="solar" fill="#f59e0b" radius={4} />
                <Bar dataKey="grid" fill="#34d399" radius={4} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>

      {/* Performance Section */}
      <div className="bg-dark-800 p-4 rounded mt-4">
        <h3 className="text-md font-bold mb-2">Performance</h3>
        <div className="grid grid-cols-3 gap-2">
          {performanceData.map((item) => (
            <div
              key={item.label}
              className={`flex flex-col items-center p-2 rounded ${
                item.positive ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              <span className="text-white text-sm font-medium">{item.label}</span>
              <span className="text-white text-lg font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
