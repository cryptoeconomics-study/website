const { syncPages } = require('./sync-util')

const GIT_REF = 'master'
const REPO = 'cryptoeconomics-study/code/'

// note: for the sync scripts to work the contentLocation fields are CASE SENSITIVE

const pages = [
	{
		destination: 'docs/sync/ch2.1-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: ''
	},
	{
		destination: 'docs/sync/ch2.2-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: ''
	},
	{
		destination: 'docs/sync/ch2.3-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: ''
	},
	{
		destination: 'docs/sync/ch2.4-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: ''
	}
]

const locationReferenceMap = {}

syncPages(pages, locationReferenceMap, GIT_REF, REPO)

