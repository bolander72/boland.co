import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Props {
	year: string;
	content: string[];
	projectName: string;
	projectDescription: string;
	projectLink: string;
	projectImageSrc: string;
}

export default function ContributionCard({
	year,
	content,
	projectName,
	projectDescription,
	projectLink,
	projectImageSrc,
}: Props) {
	return (
		<Card className="shadow-none">
			<CardHeader className="flex flex-row items-center justify-between">
				<div className="flex flex-col gap-1">
					<CardTitle className="!font-normal flex items-center gap-1">
						{projectName}
						<span className="text-[10px]">// {year}</span>
					</CardTitle>
					<CardDescription className="!font-normal !text-sm">
						{projectDescription}
					</CardDescription>
				</div>
				<CardAction>
					<img
						src={projectImageSrc}
						alt={projectName}
						className={cn(
							"h-4.5",
							projectImageSrc.includes("02") && "h-5",
							projectImageSrc.includes("04") && "h-5",
							projectImageSrc.includes("05") && "h-5",
						)}
					/>
				</CardAction>
			</CardHeader>
			{/* <CardContent className="space-y-4">
				{content.map((paragraph, index) => (
					<p key={index} className="!text-sm">
						{paragraph}
					</p>
				))}
			</CardContent> */}
		</Card>
	);
}
