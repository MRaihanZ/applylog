"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, BuildingComplex } from "lucide-react";
import React from "react";

const BADGE_INDEX: Record<number, React.ReactNode> = {
	0: (
		<p className="w-fit bg-[#123B30] text-[#4ADE80] border border-[#226347] rounded-xl py-1.5 px-4 text-xs font-semibold">
			3 days left
		</p>
	),
	1: (
		<p className="w-fit bg-[#403817] text-[#FACC15]  border border-[#66551D] rounded-xl py-1.5 px-4 text-xs font-semibold">
			3 days left
		</p>
	),
	2: (
		<p className="w-fit bg-[#482B18] text-[#FB923C]  border border-[#754323] rounded-xl py-1.5 px-4 text-xs font-semibold">
			3 days left
		</p>
	),
	3: (
		<p className="w-fit bg-[#451F27] text-[#FB7185]  border border-[#71303D] rounded-xl py-1.5 px-4 text-xs font-semibold">
			3 days left
		</p>
	),
};

export default function DashboardDeadline() {
	return (
		<div className="w-full h-full flex flex-col items-center">
			<div className="w-full flex justify-between items-center px-5 mt-5">
				<div className="flex justify-center items-center gap-2">
					<Calendar />
					<p>Upcoming Deadlines</p>
				</div>
				<Link
					href="/calendar"
					className="flex items-center gap-3 py-1.5 px-3 text-sm text-[#fbae3c] rounded-xl hover:bg-linear-to-r from-(--custom-yellow-gradient)/40 to-(--custom-orange-gradient)/40"
				>
					View Calendar
					<ArrowRight size={15} color="#fbae3c" />
				</Link>
			</div>
			<section className="w-full mt-5 px-5 flex flex-col">
				{Array.from({ length: 4 }, (_, index) => (
					<div
						key={index}
						className="w-full flex justify-between items-center py-1 hover:rounded-lg ps-3 pe-5 border border-white/0 border-b-(--custom-border-glass) hover:border hover:border-(--custom-border-glass) hover:bg-(--custom-border-glass)/60"
					>
						<div className="flex justify-center items-center">
							{/* <Image
							src="/assets/img/logo/GoogleG.png"
							width={64}
							height={64}
							alt="Google Logo"
							className="rounded-full"
						/> */}
							<BuildingComplex size={64} className="p-2.5" />
							<div className="flex flex-col justify-center">
								<p className="font-semibold">Google</p>
								<p className="text-sm font-light">Frontend Developer</p>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center gap-1">
							{BADGE_INDEX[index]}
							<p className="text-sm font-light">Nov 21, 2026</p>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}
