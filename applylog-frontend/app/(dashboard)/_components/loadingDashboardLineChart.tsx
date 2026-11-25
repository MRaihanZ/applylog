export default function LoadingDashboardLineChart() {
	return (
		<div className="h-72 w-full">
			<div className="animate-pulse flex flex-col justify-center items-center h-full w-full">
				<div className="flex justify-between w-full px-7 mb-3">
					<section className="bg-(--custom-foreground-disabled)/40 h-5 w-44"></section>
					<section className="bg-(--custom-foreground-disabled)/40 h-5 w-32"></section>
				</div>
				<section className="bg-(--custom-foreground-disabled)/40 w-11/12 h-52" />
			</div>
		</div>
	);
}
