import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface Props {
	content: string[];
	authorName: string;
	authorTitle: string;
	authorCompany: string;
	authorImageSrc: string;
}

export default function ReferenceCard({
	content,
	authorName,
	authorTitle,
	authorCompany,
	authorImageSrc,
}: Props) {
	return (
		<Card className="shadow-none">
			<CardContent className="space-y-4">
				{content.map((paragraph, index) => (
					<p key={index} className="!text-sm">
						{paragraph}
					</p>
				))}
			</CardContent>
			<CardHeader className="flex flex-row items-center justify-between">
				<div className="flex flex-col gap-1">
					<CardTitle className="!font-normal">{authorName}</CardTitle>
					<CardDescription className="!font-normal">
						{authorTitle}, {authorCompany}
					</CardDescription>
				</div>
				<CardAction>
					<img
						src={authorImageSrc}
						alt={authorName}
						className="h-15 w-15 rounded-full border"
					/>
				</CardAction>
			</CardHeader>
		</Card>
	);
}
