"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BuildingComplex, RotateCcwClock } from "lucide-react";
import Image from "next/image";

const STATUS_INDEX: Record<number, React.ReactNode> = {
	0: (
		<p className="w-fit bg-[#fbae3c]/25 text-[#fbae3c] rounded-xl py-1.5 px-4 text-xs font-semibold">
			Applied
		</p>
	),
	1: (
		<p className="w-fit bg-[#42a5f5]/25 text-[#42a5f5] rounded-xl py-1.5 px-4 text-xs font-semibold">
			In Progress
		</p>
	),
	2: (
		<p className="w-fit bg-[#35b779]/25 text-[#35b779] rounded-xl py-1.5 px-4 text-xs font-semibold">
			Interview
		</p>
	),
	3: (
		<p className="w-fit bg-[#bae721]/25 text-[#bae721] rounded-xl py-1.5 px-4 text-xs font-semibold">
			Accepted
		</p>
	),
	4: (
		<p className="w-fit bg-[#ef5350]/25 text-[#ef5350] rounded-xl py-1.5 px-4 text-xs font-semibold">
			Rejected
		</p>
	),
};

export default function DashboardRecentApplication() {
	const [statusApplication, setStatusApplication] = useState<string>("");
	const availableStatus: string[] = [
		"Applied",
		"In Progress",
		"Interview",
		"Accepted",
		"Rejected",
	];
	console.log(statusApplication);

	const handleStatusApplicationOption = (
		e: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setStatusApplication(e.target.value);
	};
	return (
		<div className="flex flex-col justify-center items-center gap-2">
			<div className="w-full flex justify-between items-center mt-3 px-5">
				<div className="flex gap-2 items-center">
					<RotateCcwClock />
					<p>Recent Applications</p>
				</div>
				<Link
					href="/application"
					className="flex items-center gap-3 py-1.5 px-3 text-sm text-[#fbae3c] rounded-xl hover:bg-linear-to-r from-(--custom-yellow-gradient)/40 to-(--custom-orange-gradient)/40"
				>
					View All
					<ArrowRight size={15} color="#fbae3c" />
				</Link>
			</div>
			<section className="w-full h-full px-7">
				<table className="w-full h-full table-auto border-collapse">
					<thead className="bg-(--custom-border-glass)/60">
						<tr>
							<th
								colSpan={2}
								className="rounded-tl-xl py-1.5 ps-5 text-sm font-medium text-start"
							>
								Company
							</th>
							<th className="py-1.5 text-sm font-medium text-start">
								Position
							</th>
							<th className="py-1.5 text-sm font-medium text-start">
								Applied At
							</th>
							<th
								colSpan={2}
								className="rounded-tr-xl text-sm font-medium text-start"
							>
								Status
							</th>
						</tr>
					</thead>
					<tbody>
						{Array.from({ length: 6 }, (_, index) => (
							<tr
								key={index}
								className="border-b border-b-(--custom-border-glass) hover:bg-(--custom-border-glass)/40"
							>
								<td className="w-13 whitespace-nowrap">
									{/* <Image
									src="/assets/img/logo/GoogleG.png"
									width={52}
									height={52}
									alt="Google Logo"
									className="rounded-full"
								/> */}
									<BuildingComplex size={52} className="p-2.5" />
								</td>
								<td>Google</td>
								<td>Frontend Developer</td>
								<td>Nov 14, 2026</td>
								<td>{index === 5 ? STATUS_INDEX[0] : STATUS_INDEX[index]}</td>
								<td className="text-end pe-5">
									<select
										name="statusApplication"
										id="statusApplication"
										value={statusApplication}
										onChange={handleStatusApplicationOption}
										className="px-3 py-0.5 rounded-lg border border-(--custom-border-glass) text-sm"
									>
										{availableStatus.map((stats, i) => (
											<option
												key={i}
												value={stats}
												className="bg-(--custom-border)"
											>
												{stats}
											</option>
										))}
									</select>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</div>
	);
}
