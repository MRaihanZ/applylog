import { ReactNode } from "react";
import type { Metadata } from "next";

import { BriefcaseBusiness } from "lucide-react";

import AuthLink from "./_components/auth-link";

export const metadata: Metadata = {
	title: "Auth",
	description: "Auth Page | Developed by MRaihanZ",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex justify-center items-center flex-1 relative w-full overflow-hidden bg-slate-950">
			{/* Blurred circle on the top-left edge */}
			<div className="pointer-events-none absolute -top-140 -left-100 h-[100rem] w-180 rounded-full rotate-45 bg-linear-to-r from-(--custom-yellow-gradient) to-(--custom-orange-gradient) blur-[250px]"></div>

			{/* Blurred circle on the bottom-right edge */}
			<div className="pointer-events-none absolute -right-24 -bottom-200 h-[100rem] w-160 rounded-full rotate-45 bg-linear-to-l from-(--custom-yellow-gradient) to-(--custom-orange-gradient) blur-[250px]"></div>

			<div className="relative z-10 text-white p-px overflow-hidden rounded-2xl">
				{/* Blurred circle on the top-right edge */}
				<div className="pointer-events-none absolute -top-16 -right-10 h-24 w-52 rotate-210 bg-linear-to-t from-(--custom-yellow-gradient) to-(--custom-orange-gradient) blur-[30px]"></div>
				{/* Blurred circle on the bottom-left edge */}
				<div className="pointer-events-none absolute -bottom-16 -left-10 h-24 w-52 rotate-45 bg-linear-to-t from-(--custom-yellow-gradient) to-(--custom-orange-gradient) blur-[30px]"></div>
				<section className="bg-(--custom-surface)/20 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-6 text-white w-md">
					<div className="flex flex-1 justify-center items-center gap-3 mb-7 mt-3">
						<BriefcaseBusiness color="#f99a1a" size={40} />
						<h1 className="bold text-3xl text-center">ApplyLog</h1>
					</div>
					<AuthLink />
					<main>{children}</main>
				</section>
			</div>
		</div>
	);
}
