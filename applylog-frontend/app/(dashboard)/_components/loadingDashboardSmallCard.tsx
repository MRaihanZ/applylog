export default function LoadingDashboardSmallCard() {
	return (
		<div className="flex-1 border border-(--custom-border-glass) bg-(--custom-border)/20 rounded-xl">
			<section className="flex items-center justify-center gap-5 animate-pulse py-4">
				<section className="flex justify-center items-center rounded-full w-14 h-14 bg-(--custom-foreground-disabled)/40"></section>
				<div className="flex flex-col gap-2">
					<section className="bg-(--custom-foreground-disabled)/40 w-32 h-5"></section>
					<section className="bg-(--custom-foreground-disabled)/40 w-32 h-5"></section>
					<section className="bg-(--custom-foreground-disabled)/40 w-32 h-5"></section>
				</div>
			</section>
		</div>
	);
}
