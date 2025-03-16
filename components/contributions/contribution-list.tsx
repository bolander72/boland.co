import ContributionCard from "@/components/contributions/contribution-card";

const contributions = [
	{
		content: [],
		year: "2025",
		projectName: "Lemon Drop",
		projectDescription: "web3, defi, bitcoin",
		projectLink: "https://x.com/lemondropfi",
		projectImageSrc: "/contributions/04.png",
	},
	{
		content: [],
		year: "2025",
		projectName: "Bitcoin Layers",
		projectDescription: "oss, research, bitcoin",
		projectLink: "https://bitcoinlayers.org",
		projectImageSrc: "/contributions/01.png",
	},
	{
		content: [],
		year: "2025",
		projectName: "Carry",
		projectDescription: "fintech, investing, retirement",
		projectLink: "https://carry.com",
		projectImageSrc: "/contributions/03.png",
	},
	{
		content: [],
		year: "2025",
		projectName: "Fold",
		projectDescription: "fintech, banking, bitcoin",
		projectLink: "https://fold.com",
		projectImageSrc: "/contributions/02.png",
	},
	{
		content: [],
		year: "2024",
		projectName: "Mainline",
		projectDescription: "ai, defi, trading",
		projectLink: "https://mainline.com",
		projectImageSrc: "/contributions/05.png",
	},
];

export default function ContributionList() {
	return contributions.map((contribution) => (
		<ContributionCard
			key={contribution.projectName}
			year={contribution.year}
			content={contribution.content}
			projectName={contribution.projectName}
			projectDescription={contribution.projectDescription}
			projectLink={contribution.projectLink}
			projectImageSrc={contribution.projectImageSrc}
		/>
	));
}
