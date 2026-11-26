import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const STATUS_INDEX: Record<number, React.ReactNode> = {
	0: (
		<span className="bg-[#fbae3c]/25 text-[#fbae3c] rounded-xl py-1.5 px-4 text-xs font-semibold">
			Applied
		</span>
	),
	1: (
		<span className="bg-[#42a5f5]/25 text-[#42a5f5] rounded-xl py-1.5 px-4 text-xs font-semibold">
			In Progress
		</span>
	),
	2: (
		<span className="bg-[#35b779]/25 text-[#35b779] rounded-xl py-1.5 px-4 text-xs font-semibold">
			Interview
		</span>
	),
	3: (
		<span className="bg-[#bae721]/25 text-[#bae721] rounded-xl py-1.5 px-4 text-xs font-semibold">
			Accepted
		</span>
	),
	4: (
		<span className="bg-[#ef5350]/25 text-[#ef5350] rounded-xl py-1.5 px-4 text-xs font-semibold">
			Rejected
		</span>
	),
};

export default function DashboardRecentApplication() {
	return (
		<div className="flex flex-col justify-center items-center gap-2">
			<div className="w-full flex justify-between items-center mt-3 px-5">
				<p>Recent Applications</p>
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
							<th className="rounded-tr-xl text-sm font-medium text-start">
								Status
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-b-(--custom-border-glass)">
							<td className="w-13 whitespace-nowrap">
								<Image
									src="/assets/img/logo/GoogleG.png"
									width={52}
									height={52}
									alt="Google Logo"
									className="rounded-full"
								/>
							</td>
							<td>Google</td>
							<td>Frontend Developer</td>
							<td>Nov 14, 2026</td>
							<td>{STATUS_INDEX[0]}</td>
						</tr>
						<tr className="border-b border-b-(--custom-border-glass)">
							<td className="w-13 whitespace-nowrap">
								<Image
									src="/assets/img/logo/GoogleG.png"
									width={52}
									height={52}
									alt="Google Logo"
									className="rounded-full"
								/>
							</td>
							<td>Google</td>
							<td>Frontend Developer</td>
							<td>Nov 14, 2026</td>
							<td>{STATUS_INDEX[1]}</td>
						</tr>
						<tr className="border-b border-b-(--custom-border-glass)">
							<td className="w-13 whitespace-nowrap">
								<Image
									src="/assets/img/logo/GoogleG.png"
									width={52}
									height={52}
									alt="Google Logo"
									className="rounded-full"
								/>
							</td>
							<td>Google</td>
							<td>Frontend Developer</td>
							<td>Nov 14, 2026</td>
							<td>{STATUS_INDEX[2]}</td>
						</tr>
						<tr className="border-b border-b-(--custom-border-glass)">
							<td className="w-13 whitespace-nowrap">
								<Image
									src="/assets/img/logo/GoogleG.png"
									width={52}
									height={52}
									alt="Google Logo"
									className="rounded-full"
								/>
							</td>
							<td>Google</td>
							<td>Frontend Developer</td>
							<td>Nov 14, 2026</td>
							<td>{STATUS_INDEX[3]}</td>
						</tr>
						<tr className="border-b border-b-(--custom-border-glass)">
							<td className="w-13 whitespace-nowrap">
								<Image
									src="/assets/img/logo/GoogleG.png"
									width={52}
									height={52}
									alt="Google Logo"
									className="rounded-full"
								/>
							</td>
							<td>Google</td>
							<td>Frontend Developer</td>
							<td>Nov 14, 2026</td>
							<td>{STATUS_INDEX[4]}</td>
						</tr>
						<tr className="border-b border-b-(--custom-border-glass)">
							<td className="w-13 whitespace-nowrap">
								<Image
									src="/assets/img/logo/GoogleG.png"
									width={52}
									height={52}
									alt="Google Logo"
									className="rounded-full"
								/>
							</td>
							<td>Google</td>
							<td>Frontend Developer</td>
							<td>Nov 14, 2026</td>
							<td>{STATUS_INDEX[0]}</td>
						</tr>
						<tr className="border-b border-b-(--custom-border-glass)">
							<td className="w-13 whitespace-nowrap">
								<Image
									src="/assets/img/logo/GoogleG.png"
									width={52}
									height={52}
									alt="Google Logo"
									className="rounded-full"
								/>
							</td>
							<td>Google</td>
							<td>Frontend Developer</td>
							<td>Nov 14, 2026</td>
							<td>{STATUS_INDEX[1]}</td>
						</tr>
						<tr className="border-b border-b-(--custom-border-glass)">
							<td className="w-13 whitespace-nowrap">
								<Image
									src="/assets/img/logo/GoogleG.png"
									width={52}
									height={52}
									alt="Google Logo"
									className="rounded-full"
								/>
							</td>
							<td>Google</td>
							<td>Frontend Developer</td>
							<td>Nov 14, 2026</td>
							<td>{STATUS_INDEX[2]}</td>
						</tr>
						<tr className="border-b border-b-(--custom-border-glass)">
							<td className="w-13 whitespace-nowrap">
								<Image
									src="/assets/img/logo/GoogleG.png"
									width={52}
									height={52}
									alt="Google Logo"
									className="rounded-full"
								/>
							</td>
							<td>Google</td>
							<td>Frontend Developer</td>
							<td>Nov 14, 2026</td>
							<td>{STATUS_INDEX[3]}</td>
						</tr>
						<tr className="border-b border-b-(--custom-border-glass)">
							<td className="w-13 whitespace-nowrap">
								<Image
									src="/assets/img/logo/GoogleG.png"
									width={52}
									height={52}
									alt="Google Logo"
									className="rounded-full"
								/>
							</td>
							<td>Google</td>
							<td>Frontend Developer</td>
							<td>Nov 14, 2026</td>
							<td>{STATUS_INDEX[4]}</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	);
}
