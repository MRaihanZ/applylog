import { ReactNode } from "react";

import SideBar from "./_components/sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-1 relative w-full overflow-hidden bg-slate-950">
			{/* Blurred circle on the top-left edge */}
			<div className="pointer-events-none absolute -top-140 -left-100 h-[100rem] w-180 rounded-full rotate-45 bg-linear-to-r from-(--custom-yellow-gradient) to-(--custom-orange-gradient) blur-[250px]"></div>

			{/* Blurred circle on the bottom-right edge */}
			<div className="pointer-events-none absolute -right-24 -bottom-200 h-[100rem] w-160 rounded-full rotate-45 bg-linear-to-l from-(--custom-yellow-gradient) to-(--custom-orange-gradient) blur-[250px]"></div>
			<div className="z-10 flex-1">
				<section className="relative min-h-full min-w-full flex bg-(--custom-surface)/20 backdrop-blur-md shadow-xl text-(--custom-foreground) overflow-hidden">
					<SideBar />
					<main className="h-screen bg-(--custom-background)/60 flex-1 overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-(--custom-foreground-muted) scrollbar-track-(--custom-background-secondary)/60 px-8 pt-5">
						{children}
					</main>
				</section>
			</div>
		</div>
	);
}
