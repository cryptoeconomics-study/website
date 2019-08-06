const { syncPages } = require('./sync-util')

const GIT_REF = 'master'
//const REPO = 'cryptoeconomics-study/code/'
const REPO = 'burrrata/code/'

// note: for the sync scripts to work the contentLocation fields are CASE SENSITIVE

const pages = [
	{
		destination: 'docs/sync/ch1.1-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch1/1.1/README.md'
	},
	{
		destination: 'docs/sync/ch1.2-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch1/1.2/README.md'
	},
	{
		destination: 'docs/sync/ch1.3-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch1/1.3/README.md'
	},
	{
		destination: 'docs/sync/ch1.4-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch1/1.4/README.md'
	},
	{
		destination: 'docs/sync/ch1.5-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'ch1/1.5/README.md'
	}
]

const locationReferenceMap = {}

syncPages(pages, locationReferenceMap, GIT_REF, REPO)

