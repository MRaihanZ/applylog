"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import {
	BriefcaseBusiness,
	House,
	BuildingComplex,
	ChartNoAxesColumn,
	Calendar,
	Settings,
	ChevronDown,
	CircleUserRound,
	LogOut,
} from "lucide-react";

const PATH_INDEX: Record<string, number> = {
	"/": 0,
	"/application": 1,
	"/company": 2,
	"/statistic": 3,
	"/calendar": 4,
	"/setting": 5,
};

function getInitialTab(path: string): number {
	const state = PATH_INDEX[path] ?? 0;
	return state;
}

export default function SideBar() {
	const pathName = usePathname();
	const [activeIndex, setActiveIndex] = useState<number>(() =>
		getInitialTab(pathName),
	);
	const [transBgGradient, setTransBgGradient] = useState<string>(
		"absolute left-0 w-full h-[calc(11.6%)] rounded-xl transition-transform duration-300 ease-in-out bg-linear-to-r from-(--custom-yellow-gradient) to-(--custom-orange-gradient)",
	);

	const activeNavLink =
		activeIndex === 5 ? activeIndex * 72.3 : activeIndex * 68.2;

	const router = useRouter();

	const sideNavLinkHover = (state: string, index: number) => {
		//* Mouse enter in the same active index
		if (state === "hover" && index === activeIndex) {
			setTransBgGradient(
				"absolute left-0 w-full h-[calc(11.6%)] rounded-xl transition-transform duration-300 ease-in-out bg-linear-to-r from-(--custom-yellow-gradient)/80 to-(--custom-orange-gradient)/80",
			);
		}

		//* Mouse leave in the same active index
		if (state === "leave" && index === activeIndex) {
			setTransBgGradient(
				"absolute left-0 w-full h-[calc(11.6%)] rounded-xl transition-transform duration-300 ease-in-out bg-linear-to-r from-(--custom-yellow-gradient) to-(--custom-orange-gradient)",
			);
		}
	};

	const handleLogOut = () => {
		router.push("/signin");
	};

	return (
		<aside className="bg-(--custom-background)/80 min-w-64 flex flex-col justify-between border-e border-(--custom-border-glass)">
			<div className="flex-1">
				<div className="flex justify-center items-center gap-3 mb-7 mt-5">
					<BriefcaseBusiness color="#f99a1a" size={40} />
					<h1 className="text-2xl text-center">ApplyLog</h1>
				</div>
				<div className="flex justify-center px-5">
					<section className="relative flex-1 flex flex-col gap-5">
						{/* active link background */}
						<div
							className={transBgGradient}
							style={{
								transform: `translatey(${activeNavLink}px)`,
							}}
						/>
						<Link
							href="/"
							className="z-10 flex gap-3 py-3 ps-4"
							onClick={() => setActiveIndex(0)}
							onMouseEnter={() => sideNavLinkHover("hover", 0)}
							onMouseLeave={() => sideNavLinkHover("leave", 0)}
						>
							<House />
							Dashboard
						</Link>
						<Link
							href="/application"
							className="z-10 flex gap-3 py-3 ps-4"
							onClick={() => setActiveIndex(1)}
							onMouseEnter={() => sideNavLinkHover("hover", 1)}
							onMouseLeave={() => sideNavLinkHover("leave", 1)}
						>
							<BriefcaseBusiness />
							Applications
						</Link>
						<Link
							href="/company"
							className="z-10 flex gap-3 py-3 ps-4"
							onClick={() => setActiveIndex(2)}
							onMouseEnter={() => sideNavLinkHover("hover", 2)}
							onMouseLeave={() => sideNavLinkHover("leave", 2)}
						>
							<BuildingComplex />
							Companies
						</Link>
						<Link
							href="/statistic"
							className="z-10 flex gap-3 py-3 ps-4"
							onClick={() => setActiveIndex(3)}
							onMouseEnter={() => sideNavLinkHover("hover", 3)}
							onMouseLeave={() => sideNavLinkHover("leave", 3)}
						>
							<ChartNoAxesColumn />
							Statistics
						</Link>
						<Link
							href="/calendar"
							className="z-10 flex gap-3 py-3 ps-4"
							onClick={() => setActiveIndex(4)}
							onMouseEnter={() => sideNavLinkHover("hover", 4)}
							onMouseLeave={() => sideNavLinkHover("leave", 4)}
						>
							<Calendar />
							Calendar
						</Link>
						<hr className="border-(--custom-border-glass)" />
						<Link
							href="/setting"
							className="z-10 flex gap-3 py-3 ps-4"
							onClick={() => setActiveIndex(5)}
							onMouseEnter={() => sideNavLinkHover("hover", 5)}
							onMouseLeave={() => sideNavLinkHover("leave", 5)}
						>
							<Settings />
							Settings
						</Link>
					</section>
				</div>
			</div>
			<div className="flex-none flex flex-col px-5 pb-5">
				<button
					onClick={handleLogOut}
					className="flex-1 flex justify-center gap-3 py-3 border border-(--custom-border) bg-linear-to-r from-(--custom-yellow-gradient) hover:from-(--custom-yellow-gradient)/80 to-(--custom-orange-gradient) hover:to-(--custom-orange-gradient)/80 rounded-xl cursor-pointer"
				>
					<LogOut />
					Logout
				</button>
				<section className="flex-1 flex items-center justify-between pt-3 mt-5 border-t border-(--custom-border-glass)">
					<div className="flex-1 flex items-center gap-3">
						{/* <Image
							src="/assets/img/profile.png"
							width={36}
							height={36}
							alt="User Profile Picture"
							className="rounded-full"
						/> */}
						<CircleUserRound size={36} />
						<div>
							<p className="text-lg">user</p>
							<p className="text-xs">user@domain.com</p>
						</div>
					</div>
					<ChevronDown />
				</section>
			</div>
		</aside>
	);
}
