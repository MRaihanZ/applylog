import type { Metadata } from "next";

import HeaderDashboard from "./_components/headerDashboard";
import DashboardSmallCard from "./_components/dashboardSmallCard";

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
			<div className="border border-amber-50 h-[100rem]"></div>
		</>
	);
}
