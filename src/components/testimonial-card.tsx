import React from "react";

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

export default function TestimonialCard({
	content,
	authorName,
	authorTitle,
	authorCompany,
	authorImageSrc,
}: Props) {
	return (
		<Card className="border-none shadow-none">
			<CardContent className="space-y-4 px-0">
				{content.map((paragraph, index) => (
					<p key={index}>
						{paragraph}
					</p>
				))}
			</CardContent>
			<CardHeader className="flex flex-row items-center justify-between px-0">
				<div className="flex flex-col gap-1">
					<CardTitle>{authorName}</CardTitle>
					<CardDescription>
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