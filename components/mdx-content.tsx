import * as runtime from "react/jsx-runtime";
import CustomLink from "@/components/custom-link";
import { Post } from "@/.velite";
import { ReactNode } from "react";
import Blockquote from "@/components/mdx-blockquote";
import { cn } from "@/lib/utils";
import ReferenceList from "@/components/references/reference-list";
import ContributionList from "@/components/contributions/contribution-list";

const useMDXComponent = (code: string) => {
	const fn = new Function(code);
	return fn({ ...runtime }).default;
};

interface Props {
	code: string;
	components?: Record<string, React.ComponentType>;
	children?: ReactNode;
	post?: Post;
	className?: string;
}

export function MDXContent({
	code,
	components,
	children,
	post,
	className,
}: Props) {
	const Component = useMDXComponent(code);

	return (
		<div
			className={cn(
				"space-y-4 prose-headings:font-medium prose-headings:tracking-wide",
				"prose-headings:text-primary prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl",
				"prose-p:text-base prose-p:text-primary prose-ol:ml-8 prose-ol:list-decimal",
				`prose-ol:space-y-1.5 prose-ul:ml-8 prose-ul:list-disc prose-ul:space-y-1.5
        prose-ul:text-primary`,
				className,
			)}
			dangerouslySetInnerHTML={post ? { __html: post.content } : undefined}
		>
			{post ? undefined : (
				<Component
					components={{
						...components,
						a: CustomLink,
						Blockquote,
						ContributionList,
						ReferenceList,
					}}
				/>
			)}
			{children}
		</div>
	);
}
