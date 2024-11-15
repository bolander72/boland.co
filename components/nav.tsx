import CustomLink from "./custom-link";

export function Nav() {
	return (
		<header className="mb-8">
			<nav aria-label="Main navigation">
				<div
					className="flex w-full flex-col items-start justify-between space-y-2 sm:flex-row
            sm:items-center sm:space-y-0"
				>
					<CustomLink href="/" aria-label="Home">
						<h1 className="text-left text-5xl font-medium">Michael Boland</h1>
					</CustomLink>
					<ul
						className="flex space-x-4 text-lg sm:grid sm:grid-cols-2 sm:space-x-0"
						aria-label="Secondary navigation"
					>
						<li>
							<CustomLink href="/notes">notes</CustomLink>
						</li>
						<li>
							<CustomLink href="/colophon">colophon</CustomLink>
						</li>
						<li>
							<CustomLink href="/credo">credo</CustomLink>
						</li>
						<li>
							<CustomLink href="/now">now</CustomLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
