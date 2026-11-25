import type { Metadata } from "next";

import HeaderDashboard from "./_components/headerDashboard";
import DashboardSmallCard from "./_components/dashboardSmallCard";
import DashboardLineChart from "./_components/dashboardLineChart";
import DashboardDoughnutChart from "./_components/dashboardDoughnutChart";
import LoadingDashboardSmallCard from "./_components/loadingDashboardSmallCard";
import LoadingDashboardLineChart from "./_components/loadingDashboardLineChart";
import LoadingDashboardDoughnutChart from "./_components/loadingDashboardDoughnutChart";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Dashboard Page | Developed by MRaihanZ",
};

// Generate random application data
const generateRandomData = (min: number, max: number) =>
	Array.from(
		{ length: 10 },
		() => Math.floor(Math.random() * (max - min + 1)) + min,
	);

export default function DashboardPage() {
	const chartData = {
		Applied: generateRandomData(5, 50),
		InProgress: generateRandomData(5, 50),
		Interview: generateRandomData(5, 50),
		Offer: generateRandomData(5, 50),
		Rejected: generateRandomData(5, 50),
	};
	return (
		<>
			<HeaderDashboard />
			<div className="flex gap-5 mb-5">
				<Suspense fallback={<LoadingDashboardSmallCard />}>
					<DashboardSmallCard
						type={0}
						totalNumber={28}
						totalPercentage={12}
						stateIndicator="up"
					/>
				</Suspense>
				<Suspense fallback={<LoadingDashboardSmallCard />}>
					<DashboardSmallCard
						type={1}
						totalNumber={14}
						totalPercentage={27}
						stateIndicator="up"
					/>
				</Suspense>
				<Suspense fallback={<LoadingDashboardSmallCard />}>
					<DashboardSmallCard
						type={2}
						totalNumber={5}
						totalPercentage={25}
						stateIndicator="up"
					/>
				</Suspense>
				<Suspense fallback={<LoadingDashboardSmallCard />}>
					<DashboardSmallCard
						type={3}
						totalNumber={2}
						totalPercentage={0}
						stateIndicator="equal"
					/>
				</Suspense>
				<Suspense fallback={<LoadingDashboardSmallCard />}>
					<DashboardSmallCard
						type={4}
						totalNumber={7}
						totalPercentage={17}
						stateIndicator="down"
					/>
				</Suspense>
			</div>
			<div className="flex flex-wrap justify-between gap-y-4">
				<div className="basis-[calc(60%-0.5rem)]  bg-(--custom-border)/20 border border-(--custom-border-glass) rounded-xl">
					<Suspense fallback={<LoadingDashboardLineChart />}>
						<DashboardLineChart dataProps={chartData} />
					</Suspense>
				</div>
				<div className="basis-[calc(40%-0.5rem)] min-h-72 bg-(--custom-border)/20 border border-(--custom-border-glass) rounded-xl">
					<Suspense fallback={<LoadingDashboardDoughnutChart />}>
						<DashboardDoughnutChart />
					</Suspense>
				</div>
			</div>
		</>
	);
}
