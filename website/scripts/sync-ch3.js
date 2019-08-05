const { syncPages } = require('./sync-util')

const GIT_REF = 'master'
const REPO = 'cryptoeconomics-study/code/'

// note: for the sync scripts to work the contentLocation fields are CASE SENSITIVE

const pages = [
	{
		destination: 'docs/sync/ch3.1-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch3/3.1/README.md'
	},
	{
		destination: 'docs/sync/ch3.2-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch3/3.2/README.md'
	},
	{
		destination: 'docs/sync/ch1.3-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch3/3.3/README.md'
	},
	{
		destination: 'docs/sync/ch1.4-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch3/3.4/README.md'
	},
	{
		destination: 'docs/sync/ch1.5-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch3/3.5/README.md'
	}
]

const locationReferenceMap = {}

syncPages(pages, locationReferenceMap, GIT_REF, REPO)

