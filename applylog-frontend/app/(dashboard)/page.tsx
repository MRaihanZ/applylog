import { Suspense } from "react";

import type { Metadata } from "next";

import HeaderDashboard from "./_components/headerDashboard";
import DashboardSmallCard from "./_components/dashboardSmallCard";
import DashboardLineChart from "./_components/dashboardLineChart";
import DashboardDoughnutChart from "./_components/dashboardDoughnutChart";
import DashboardRecentApplication from "./_components/dashboardRecentApplications";
import DashboardDeadline from "./_components/dashboardDeadline";
import LoadingDashboardSmallCard from "./_components/loadingDashboardSmallCard";
import LoadingDashboardLineChart from "./_components/loadingDashboardLineChart";
import LoadingDashboardDoughnutChart from "./_components/loadingDashboardDoughnutChart";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Dashboard Page | Developed by MRaihanZ",
};

// Generate random application data
const generateRandomData = (length: number, min: number, max: number) =>
	Array.from(
		{ length: length },
		() => Math.floor(Math.random() * (max - min + 1)) + min,
	);

export default function DashboardPage() {
	const lineChartData = {
		Applied: generateRandomData(10, 5, 50),
		InProgress: generateRandomData(10, 5, 50),
		Interview: generateRandomData(10, 5, 50),
		Accepted: generateRandomData(10, 5, 50),
		Rejected: generateRandomData(10, 5, 50),
	};
	const doughnutChartData: number[] = [
		lineChartData.Applied[0],
		lineChartData.InProgress[0],
		lineChartData.Interview[0],
		lineChartData.Accepted[0],
		lineChartData.Rejected[0],
	];
	return (
		<>
			<HeaderDashboard />
			<div className="flex gap-5 mb-5">
				<Suspense fallback={<LoadingDashboardSmallCard />}>
					<DashboardSmallCard
						type={0}
						totalNumber={lineChartData.Applied[0]}
						totalPercentage={12}
						stateIndicator="up"
					/>
				</Suspense>
				<Suspense fallback={<LoadingDashboardSmallCard />}>
					<DashboardSmallCard
						type={1}
						totalNumber={lineChartData.InProgress[0]}
						totalPercentage={27}
						stateIndicator="up"
					/>
				</Suspense>
				<Suspense fallback={<LoadingDashboardSmallCard />}>
					<DashboardSmallCard
						type={2}
						totalNumber={lineChartData.Interview[0]}
						totalPercentage={25}
						stateIndicator="up"
					/>
				</Suspense>
				<Suspense fallback={<LoadingDashboardSmallCard />}>
					<DashboardSmallCard
						type={3}
						totalNumber={lineChartData.Accepted[0]}
						totalPercentage={0}
						stateIndicator="equal"
					/>
				</Suspense>
				<Suspense fallback={<LoadingDashboardSmallCard />}>
					<DashboardSmallCard
						type={4}
						totalNumber={lineChartData.Rejected[0]}
						totalPercentage={17}
						stateIndicator="down"
					/>
				</Suspense>
			</div>
			<div className="flex flex-wrap justify-between gap-y-4">
				<div className="basis-[calc(60%-0.5rem)] min-h-72 bg-(--custom-border)/20 border border-(--custom-border-glass) rounded-xl">
					<Suspense fallback={<LoadingDashboardLineChart />}>
						<DashboardLineChart dataProps={lineChartData} />
					</Suspense>
				</div>
				<div className="basis-[calc(40%-0.5rem)] min-h-72 bg-(--custom-border)/20 border border-(--custom-border-glass) rounded-xl">
					<Suspense fallback={<LoadingDashboardDoughnutChart />}>
						<DashboardDoughnutChart dataProps={doughnutChartData} />
					</Suspense>
				</div>
				<div className="basis-[calc(60%-0.5rem)] h-100 bg-(--custom-border)/20 border border-(--custom-border-glass) rounded-xl overflow-hidden scroll-auto">
					<Suspense fallback={<LoadingDashboardLineChart />}>
						<DashboardRecentApplication />
					</Suspense>
				</div>
				<div className="basis-[calc(40%-0.5rem)] h-100 bg-(--custom-border)/20 border border-(--custom-border-glass) rounded-xl">
					<Suspense fallback={<LoadingDashboardLineChart />}>
						<DashboardDeadline />
					</Suspense>
				</div>
			</div>
		</>
	);
}
