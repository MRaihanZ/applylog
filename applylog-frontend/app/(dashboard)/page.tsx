import type { Metadata } from "next";

import HeaderDashboard from "./_components/headerDashboard";
import DashboardSmallCard from "./_components/dashboardSmallCard";
import DashboardLineChart from "./_components/dashboardLineChart";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Dashboard Page | Developed by MRaihanZ",
};

export default function DashboardPage() {
	return (
		<>
			<HeaderDashboard />
			<div className="flex gap-5 mb-5">
				<DashboardSmallCard
					type={0}
					totalNumber={28}
					totalPercentage={12}
					stateIndicator={true}
				/>
				<DashboardSmallCard
					type={1}
					totalNumber={28}
					totalPercentage={12}
					stateIndicator={true}
				/>
				<DashboardSmallCard
					type={2}
					totalNumber={28}
					totalPercentage={12}
					stateIndicator={true}
				/>
				<DashboardSmallCard
					type={3}
					totalNumber={28}
					totalPercentage={12}
					stateIndicator={true}
				/>
				<DashboardSmallCard
					type={4}
					totalNumber={28}
					totalPercentage={12}
					stateIndicator={true}
				/>
			</div>
			<div className="flex flex-wrap justify-between gap-y-4">
				<div className="basis-[calc(60%-0.5rem)]  bg-(--custom-border)/20 border border-(--custom-border-glass) rounded-xl">
					<DashboardLineChart />
				</div>
				<div className="basis-[calc(40%-0.5rem)] min-h-72 bg-(--custom-border)/20 border border-(--custom-border-glass) rounded-xl"></div>
			</div>
		</>
	);
}
