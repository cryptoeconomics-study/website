const { syncPages } = require("./sync-util");

const GIT_REF = "master";
const REPO = "cryptoeconomics-study/code/";

// note: for the sync scripts to work the contentLocation fields are CASE SENSITIVE

const pages = [
  // development setup
  {
    destination: "docs/sync/getting-started-development-setup.md",
    title: "Development Setup",
    contentLocation: "README.md"
  },
  // chromebook
  {
    destination: "docs/sync/getting-started-chromebook.md",
    title: "Chromebook",
    contentLocation: "chromebook.md"
  },
  // 1.1
  {
    destination: "docs/sync/1.1-code-challenge.md",
    title: "Code Challenge",
    contentLocation: "ch1/1.1/README.md"
  },
  // 1.2
  {
    destination: "docs/sync/1.2-code-challenge.md",
    title: "Code Challenge",
    contentLocation: "ch1/1.2/README.md"
  },
  // 1.3
  {
    destination: "docs/sync/1.3-code-challenge.md",
    title: "Code Challenge",
    contentLocation: "ch1/1.3/README.md"
  },
  // 1.4
  {
    destination: "docs/sync/1.4-code-challenge.md",
    title: "Code Challenge",
    contentLocation: "ch1/1.4/README.md"
  },
  // 1.5
  {
    destination: "docs/sync/1.5-code-challenge.md",
    title: "Code Challenge",
    contentLocation: "ch1/1.5/README.md"
  },
	// 2.1
	{
		destination: 'docs/sync/2.1-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch2/2.1/README.md'
	},
	// 2.2
	{
		destination: 'docs/sync/2.2-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch2/2.2/README.md'
	},
	// 2.3
	{
		destination: 'docs/sync/2.3-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch2/2.3/README.md'
	},
	// 2.4
	{
		destination: 'docs/sync/2.4-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch2/2.4/README.md'
	},
	// 3.1
	{
		destination: 'docs/sync/3.1-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch3/3.1/README.md'
	},
	// 3.2
	{
		destination: 'docs/sync/3.2-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch3/3.2/README.md'
	},
	// 3.3
	{
		destination: 'docs/sync/1.3-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch3/3.3/README.md'
	},
	// 3.4
	{
		destination: 'docs/sync/1.4-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch3/3.4/README.md'
	},
	// 3.5
	{
		destination: 'docs/sync/1.5-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch3/3.5/README.md'
	}
];

const locationReferenceMap = {};

syncPages(pages, locationReferenceMap, GIT_REF, REPO);
