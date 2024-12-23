import { MDXContent } from "@/components/mdx-content";
import { pages } from "@/.velite";

export default function Page() {
	const page = pages.find((page) => page.slug === "home");

	return (
		<section className="space-y-4">
			<MDXContent code={page.body} />
		</section>
	);
}
