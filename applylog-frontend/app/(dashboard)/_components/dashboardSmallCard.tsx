import {
	BriefcaseBusiness,
	ArrowUp,
	ArrowDown,
	ArrowRight,
	Send,
	Check,
	Handshake,
	X,
} from "lucide-react";

const TITLE_INDEX: Record<number, string> = {
	0: "Total Applications",
	1: "In Progress",
	2: "Interview",
	3: "Offer",
	4: "Rejected",
};

const ICON_INDEX: Record<number, React.ReactNode> = {
	0: <BriefcaseBusiness size={30} color="#FBAE3C" />,
	1: <Send size={30} color="#42a5f5" />,
	2: <Check size={30} color="#35b779" />,
	3: <Handshake size={30} color="#bae721" />,
	4: <X size={30} color="#ef5350" />,
};

const BG_INDEX: Record<number, string> = {
	0: "flex justify-center items-center rounded-full p-3 bg-[#FBAE3C]/40",
	1: "flex justify-center items-center rounded-full p-3 bg-[#42a5f5]/40",
	2: "flex justify-center items-center rounded-full p-3 bg-[#35b779]/40",
	3: "flex justify-center items-center rounded-full p-3 bg-[#bae721]/40",
	4: "flex justify-center items-center rounded-full p-3 bg-[#ef5350]/40",
};

const BG_HOVER_INDEX: Record<number, string> = {
	0: "flex-1 flex items-center justify-center gap-5 border border-(--custom-border-glass) bg-(--custom-border)/20 rounded-xl py-4 hover:border-(--custom-orange-burnt) hover:bg-(--custom-orange-burnt)/50",
	1: "flex-1 flex items-center justify-center gap-5 border border-(--custom-border-glass) bg-(--custom-border)/20 rounded-xl py-4 hover:border-[#42a5f5] hover:bg-[#42a5f5]/50",
	2: "flex-1 flex items-center justify-center gap-5 border border-(--custom-border-glass) bg-(--custom-border)/20 rounded-xl py-4 hover:border-[#35b779] hover:bg-[#35b779]/50",
	3: "flex-1 flex items-center justify-center gap-5 border border-(--custom-border-glass) bg-(--custom-border)/20 rounded-xl py-4 hover:border-[#bae721] hover:bg-[#bae721]/50",
	4: "flex-1 flex items-center justify-center gap-5 border border-(--custom-border-glass) bg-(--custom-border)/20 rounded-xl py-4 hover:border-[#ef5350] hover:bg-[#ef5350]/50",
};

interface Props {
	type: number;
	totalNumber: number;
	totalPercentage: number;
	stateIndicator: string;
}

export default function DashboardSmallCard({
	type,
	totalNumber,
	totalPercentage,
	stateIndicator,
}: Props) {
	return (
		<div className={BG_HOVER_INDEX[type]}>
			<section className={BG_INDEX[type]}>{ICON_INDEX[type]}</section>
			<section>
				<p className="text-xs">{TITLE_INDEX[type]}</p>
				<p className="text-3xl my-1">{totalNumber}</p>
				<div className="flex text-xs gap-1">
					{stateIndicator === "up" && totalPercentage !== 0 ? (
						<ArrowUp size={15} color="#35b779" />
					) : stateIndicator === "equal" ? (
						<ArrowRight size={15} color="#f5f5f5" />
					) : (
						<ArrowDown size={15} color="#ef5350" />
					)}
					<span
						className={
							stateIndicator === "up" && totalPercentage !== 0
								? "text-(--custom-success)"
								: stateIndicator === "down"
									? "text-(--custom-error)"
									: ""
						}
					>
						{stateIndicator === "up" && totalPercentage !== 0
							? "+" + totalPercentage + "%"
							: stateIndicator === "down"
								? "-" + totalPercentage + "%"
								: ""}
					</span>
					{stateIndicator !== "equal" ? (
						<p>from last month</p>
					) : (
						<p>No change</p>
					)}
				</div>
			</section>
		</div>
	);
}
