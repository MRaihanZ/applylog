"use client";

import { useState, SubmitEvent } from "react";
import { Plus, Search } from "lucide-react";

export default function HeaderDashboard() {
	const [csrfToken, setCsrfToken] = useState<string | null>(null);
	const [search, setSearch] = useState<string>("");

	//* handle search submit
	const handleSearchSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		alert(formData.get("search"));
	};

	return (
		<div className="flex justify-between mb-7">
			<section className="flex flex-col justify-between gap-1">
				<h1 className="font-medium text-3xl">Dashboard</h1>
				<p>
					Track your job applications and recruitment progress in one place.
				</p>
			</section>
			<section className="flex gap-4 items-center">
				<form
					onSubmit={handleSearchSubmit}
					className="relative border-e border-(--custom-border) pe-4"
				>
					<Search size={20} className="absolute z-10 top-2 left-3" />
					<input
						name="search"
						type="text"
						value={search}
						onChange={(e) => setSearch(e.currentTarget.value)}
						placeholder="Search application..."
						className="border border-(--custom-border-glass) bg-(--custom-surface) rounded-xl py-1.5 ps-10 pe-3 w-xs"
					/>
				</form>
				<button className="flex items-center justify-center align-middle text-sm gap-2 py-2.5 px-4 rounded-xl bg-linear-to-r from-(--custom-yellow-gradient) hover:from-(--custom-yellow-gradient)/80 to-(--custom-orange-gradient) hover:to-(--custom-orange-gradient)/80 cursor-pointer">
					<Plus size={17} />
					New Application
				</button>
			</section>
		</div>
	);
}
