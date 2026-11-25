"use client";

import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	Title,
	type ChartOptions,
	type ChartData,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

import { type Plugin } from "chart.js";

const centerTextPlugin: Plugin<"doughnut"> = {
	id: "centerText",

	afterDraw(chart) {
		const { ctx, chartArea } = chart;

		if (!chartArea) return;

		const centerX = (chartArea.left + chartArea.right) / 2;
		const centerY = (chartArea.top + chartArea.bottom) / 2;

		ctx.save();

		// Main text
		ctx.font = "bold 28px sans-serif";
		ctx.fillStyle = "#f5f5f5";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";

		ctx.fillText(String(chart.data.datasets[0].data[0]), centerX, centerY - 10);

		// Subtitle
		ctx.font = "12px sans-serif";
		ctx.fillStyle = "#b8b8b8";

		ctx.fillText("Total", centerX, centerY + 18);

		ctx.restore();
	},
};

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const options: ChartOptions<"doughnut"> = {
	responsive: true,
	maintainAspectRatio: false,

	cutout: "65%",

	plugins: {
		legend: {
			display: false,
		},

		title: {
			display: true,
			text: "Applications by Status",
			align: "center",
			color: "#f5f5f5",

			font: {
				size: 18,
				weight: "bold",
			},

			padding: {
				bottom: 20,
			},
		},

		tooltip: {
			enabled: true,
			backgroundColor: "#001220",
			padding: 12,
			cornerRadius: 8,
		},
	},
};

interface Props {
	dataProps: number[];
}

export default function DashboardDoughnutChart({ dataProps }: Props) {
	const data: ChartData<"doughnut"> = {
		labels: ["Applied", "In Progress", "Interview", "Accepted", "Rejected"],

		datasets: [
			{
				label: "Applications",
				data: dataProps,
				backgroundColor: [
					"#fbae3c",
					"#42a5f5",
					"#35b779",
					"#bae721",
					"#ef5350",
				],
				borderWidth: 0,
				hoverOffset: 8,
			},
		],
	};
	return (
		<div className="w-full h-72 flex justify-center items-center pe-5">
			<div className="h-52">
				<Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
			</div>
			<section className="h-full flex flex-col justify-center gap-2 mt-10">
				<div className="grid grid-cols-7 justify-items-center content-center pb-2 border-b border-b-(--custom-border-glass)">
					<span className="w-4 h-4 bg-[#fbae3c] rounded-full my-auto"></span>
					<p className="text-sm my-auto col-span-3">Applied</p>
					<p className="text-sm my-auto col-span-2">{dataProps[0]}</p>
					<p className="text-sm my-auto">50%</p>
				</div>
				<div className="grid grid-cols-7 justify-items-center content-center pb-2 border-b border-b-(--custom-border-glass)">
					<span className="w-4 h-4 bg-[#42a5f5] rounded-full my-auto"></span>
					<p className="text-sm my-auto col-span-3">In Progress</p>
					<p className="text-sm my-auto col-span-2">{dataProps[1]}</p>
					<p className="text-sm my-auto">50%</p>
				</div>
				<div className="grid grid-cols-7 justify-items-center content-center pb-2 border-b border-b-(--custom-border-glass)">
					<span className="w-4 h-4 bg-[#35b779] rounded-full my-auto"></span>
					<p className="text-sm my-auto col-span-3">Interview</p>
					<p className="text-sm my-auto col-span-2">{dataProps[2]}</p>
					<p className="text-sm my-auto">50%</p>
				</div>
				<div className="grid grid-cols-7 justify-items-center content-center pb-2 border-b border-b-(--custom-border-glass)">
					<span className="w-4 h-4 bg-[#bae721] rounded-full my-auto"></span>
					<p className="text-sm my-auto col-span-3">Accepted</p>
					<p className="text-sm my-auto col-span-2">{dataProps[3]}</p>
					<p className="text-sm my-auto">50%</p>
				</div>
				<div className="grid grid-cols-7 justify-items-center content-center pb-2 border-b border-b-(--custom-border-glass)">
					<span className="w-4 h-4 bg-[#ef5350] rounded-full my-auto"></span>
					<p className="text-sm my-auto col-span-3">Rejected</p>
					<p className="text-sm my-auto col-span-2">{dataProps[4]}</p>
					<p className="text-sm my-auto">50%</p>
				</div>
			</section>
		</div>
	);
}
