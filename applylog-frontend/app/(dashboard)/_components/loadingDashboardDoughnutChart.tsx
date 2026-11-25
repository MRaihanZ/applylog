export default function LoadingDashboardDoughnutChart() {
	return (
		<div className="w-full h-72">
			<div className="h-full w-full flex justify-center items-center animate-pulse">
				<div className="basis-6/12 flex flex-col justify-between items-center gap-5 mt-1">
					<div className="h-5 w-48 bg-(--custom-foreground-disabled)/40"></div>
					<div className="h-40 w-40 bg-(--custom-foreground-disabled)/40"></div>
				</div>
				<section className="basis-4/12 h-full flex flex-col justify-center gap-2 mt-10">
					<div className="bg-(--custom-foreground-disabled)/40 h-7 w-52"></div>
					<div className="bg-(--custom-foreground-disabled)/40 h-7 w-52"></div>
					<div className="bg-(--custom-foreground-disabled)/40 h-7 w-52"></div>
					<div className="bg-(--custom-foreground-disabled)/40 h-7 w-52"></div>
					<div className="bg-(--custom-foreground-disabled)/40 h-7 w-52"></div>
				</section>
			</div>
		</div>
	);
}
