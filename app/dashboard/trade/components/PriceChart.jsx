import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PriceChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="h-64 bg-base-200 rounded-box flex items-center justify-center">
        <div className="text-gray-500">No price history available</div>
      </div>
    );
  }

  return (
    <div className="h-64 bg-base-200 rounded-box p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis dataKey="date" tick={{ fill: "#666" }} tickMargin={10} />
          <YAxis
            domain={["dataMin - 0.5", "dataMax + 0.5"]}
            tick={{ fill: "#666" }}
            tickFormatter={(value) => `$${value}`}
            tickMargin={10}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderColor: "#eee",
              borderRadius: "0.5rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
            formatter={(value) => [`$${value}`, "Price per unit"]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#4f46e5"
            strokeWidth={2}
            dot={{ r: 4, fill: "#4f46e5" }}
            activeDot={{
              r: 6,
              fill: "#4f46e5",
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
