import type { Metadata } from "next";

import HeaderDashboard from "./_components/headerDashboard";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Dashboard Page | Developed by MRaihanZ",
};

export default function DashboardPage() {
	return (
		<>
			<HeaderDashboard />
			<div className="border border-amber-50 h-[100rem]"></div>
		</>
	);
}
