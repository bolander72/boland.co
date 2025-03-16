import ReferenceCard from "@/components/references/reference-card";

const references = [
	{
		content: [
			"When working on our products, Mike doesn't simply stick in new code. He has repeatedly improved and cleaned up existing code rather than implementing quick and dirty solutions on top of weak foundations. I appreciate that his default is to reinforce the foundation of the codebase rather than blindly slap features on top, which saved us a lot of hours in the long run.",
			"His experience has informed the overall architecture of our code base as we added new features. He's been a voice of reason to build things right the first time.",
			"I would absolutely recommend Mike's services to others. Mike's a pleasure to work with and knows how to communicate.",
		],
		authorName: "Red Sheehan",
		authorTitle: "Co-Founder",
		authorCompany: "Bitcoin Layers",
		authorImageSrc: "/references/01.jpg",
	},
	{
		content: [
			"One of the biggest benefits of working with Michael was his ability to solve problems quickly. Whether it was fine-tuning page functionality or making sure our CMS setup was optimized, he got it done efficiently and is a great communicator - all while managing multiple projects.",
			"I'd definitely recommend him for any web development work, especially if you need someone comfortable working in a custom CMS. He's reliable, knowledgeable, and such a great person to work with!",
		],
		authorName: "Jess Catorc",
		authorTitle: "Co-Founder",
		authorCompany: "Carry",
		authorImageSrc: "/references/02.jpg",
	},
	{
		content: [
			"Mike is very easy to work with and produces great work.",
			"He is everything you want in a product developer. He is able to ask clarifying questions when he needs information and is also able to deeply understand the goals of the product. Understanding and intuiting business needs and user needs make his initial builds really good.",
		],
		authorName: "Brian Harrington",
		authorTitle: "Head of Marketing",
		authorCompany: "Fold",
		authorImageSrc: "/references/03.jpg",
	},
	{
		content: [
			"We needed a developer who understands the technical depths of what we do.",
			"The most valuable part of our product is making AI-driven execution feel seamless for users. The real challenge isn't just running the AI models - it's presenting them in a way that's easy to interact with while still giving users control.",
			"Our AI models operate in real time pulling from thousands of data points and we needed someone who could present that complexity in a clean, intuitive way. You delivered on that.",
		],
		authorName: "Chris Berger",
		authorTitle: "Co-Founder",
		authorCompany: "Mainline",
		authorImageSrc: "/references/04.jpg",
	},
];

export default function ReferenceList() {
	return references.map((reference) => (
		<ReferenceCard
			key={reference.authorName}
			content={reference.content}
			authorName={reference.authorName}
			authorTitle={reference.authorTitle}
			authorCompany={reference.authorCompany}
			authorImageSrc={reference.authorImageSrc}
		/>
	));
}
