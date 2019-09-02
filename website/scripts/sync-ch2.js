const { syncPages } = require('./sync-util')

const GIT_REF = 'master'
const REPO = 'cryptoeconomics-study/code/'

// note: for the sync scripts to work the contentLocation fields are CASE SENSITIVE

const pages = [
	{
		destination: 'docs/sync/2.1-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch2/2.1/README.md'
	},
	{
		destination: 'docs/sync/2.2-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch2/2.2/README.md'
	},
	{
		destination: 'docs/sync/2.3-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch2/2.3/README.md'
	},
	{
		destination: 'docs/sync/2.4-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch2/2.4/README.md'
	}
]

const locationReferenceMap = {}

syncPages(pages, locationReferenceMap, GIT_REF, REPO)

