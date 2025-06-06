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
		<section>
			<div className="space-y-4">
				{content.map((paragraph, index) => (
					<p key={index}>
						{paragraph}
					</p>
				))}
			</div>
			<div className="flex flex-row items-center justify-between mt-4">
				<div className="flex flex-col gap-1">
					<CardTitle>{authorName}</CardTitle>
					<CardDescription>
						{authorTitle}, {authorCompany}
					</CardDescription>
				</div>
				<div>
					<img
						src={authorImageSrc}
						alt={authorName}
						className="h-15 w-15 rounded-full border"
					/>
				</div>
			</div>
		</section>
	);
}