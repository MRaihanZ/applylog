import {
	BriefcaseBusiness,
	ArrowUp,
	ArrowDown,
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
	0: <BriefcaseBusiness size={30} color="#fbae3c" />,
	1: <Send size={30} color="#42a5f5" />,
	2: <Check size={30} color="#35b779" />,
	3: <Handshake size={30} color="#bae721" />,
	4: <X size={30} color="#ef5350" />,
};

const BG_INDEX: Record<number, string> = {
	0: "flex justify-center items-center rounded-full p-3 bg-[#fbae3c]/40",
	1: "flex justify-center items-center rounded-full p-3 bg-[#42a5f5]/40",
	2: "flex justify-center items-center rounded-full p-3 bg-[#35b779]/40",
	3: "flex justify-center items-center rounded-full p-3 bg-[#bae721]/40",
	4: "flex justify-center items-center rounded-full p-3 bg-[#ef5350]/40",
};

interface Props {
	type: number;
	totalNumber: number;
	totalPercentage: number;
	stateIndicator: boolean;
}

export default function DashboardSmallCard({
	type,
	totalNumber,
	totalPercentage,
	stateIndicator,
}: Props) {
	return (
		<div className="flex-1 flex items-center justify-center gap-5 border border-(--custom-border-glass) hover:border-(--custom-orange-burnt) bg-(--custom-border)/20 hover:bg-(--custom-orange-burnt)/50 rounded-xl py-4">
			<section className={BG_INDEX[type]}>{ICON_INDEX[type]}</section>
			<section>
				<p className="text-xs">{TITLE_INDEX[type]}</p>
				<p className="text-3xl my-1">{totalNumber}</p>
				<div className="flex text-xs gap-1">
					{stateIndicator ? (
						<ArrowUp size={15} color="#35b779" />
					) : (
						<ArrowDown size={15} color="#ef5350" />
					)}
					<span className="text-(--custom-success)">
						{stateIndicator ? "+" : "-"}
						{totalPercentage}%
					</span>
					<p>from last month</p>
				</div>
			</section>
		</div>
	);
}
