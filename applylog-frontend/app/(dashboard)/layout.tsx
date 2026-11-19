import { ReactNode } from "react";

import SideBar from "./_components/sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-1 relative w-full overflow-hidden bg-slate-950">
			{/* Blurred circle on the top-left edge */}
			<div className="pointer-events-none absolute -top-140 -left-100 h-[100rem] w-180 rounded-full rotate-45 bg-linear-to-r from-(--custom-yellow-gradient) to-(--custom-orange-gradient) blur-[250px]"></div>

			{/* Blurred circle on the bottom-right edge */}
			<div className="pointer-events-none absolute -right-24 -bottom-200 h-[100rem] w-160 rounded-full rotate-45 bg-linear-to-l from-(--custom-yellow-gradient) to-(--custom-orange-gradient) blur-[250px]"></div>
			<div className="relative z-10 flex-1">
				<section className="min-h-full min-w-full flex relative bg-(--custom-surface)/20 backdrop-blur-md shadow-xl text-(--custom-foreground)">
					<SideBar />
					<main className="bg-(--custom-background)/70 w-full overflow-auto">
						{children}
					</main>
				</section>
			</div>
		</div>
	);
}
