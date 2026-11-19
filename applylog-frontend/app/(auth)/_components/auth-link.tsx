"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PATH_INDEX: Record<string, number> = {
	"/signin": 0,
	"/signup": 1,
};

function getInitialTab(path: string): number {
	const state = PATH_INDEX[path] ?? 0;
	return state;
}

export default function AuthLink() {
	const pathName = usePathname();
	const [activeIndex, setActiveIndex] = useState<number>(() =>
		getInitialTab(pathName),
	);
	return (
		<div className="relative flex justify-center items-center flex-1 rounded-3xl border border-(--custom-border) bg-(--custom-surface) overflow-hidden">
			{/* active link background */}
			<div
				className="absolute left-0 w-[calc(50%)] h-full rounded-3xl bg-linear-to-r from-(--custom-yellow-gradient) to-(--custom-orange-gradient) transition-transform duration-300 ease-in-out"
				style={{
					transform: `translateX(${activeIndex * 100}%)`,
				}}
			/>
			<Link
				href="/signin"
				className="z-10 flex-1 text-center text-lg font-semibold py-2"
				onClick={() => setActiveIndex(0)}
			>
				Sign In
			</Link>
			<Link
				href="/signup"
				className="z-10 flex-1 text-center text-lg font-semibold py-2"
				onClick={() => setActiveIndex(1)}
			>
				Sign Up
			</Link>
		</div>
	);
}
