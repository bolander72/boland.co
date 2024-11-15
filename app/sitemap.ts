import { Post, posts, pages } from "@/.velite";

export default async function sitemap() {
	const notes = posts.map((post: Post) => {
		return {
			url: `https://boland.co${post.permalink}`,
			lastModified: new Date(post.date).toISOString().split("T")[0],
		};
	});

	const routes = ["", "/notes", ...pages.map((page) => `/${page.slug}`)]
		.sort()
		.map((route) => ({
			url: `https://boland.co${route}`,
			lastModified: new Date().toISOString().split("T")[0],
		}));

	return [...routes, ...notes];
}
