const { syncPages } = require('./sync-util')

const GIT_REF = 'master'
const REPO = 'cryptoeconomics-study/code/'

// note: for the sync scripts to work the contentLocation fields are CASE SENSITIVE

const pages = [
	{
		destination: 'docs/sync/dev-env-setup.md',
		title: 'Dev Env Setup',
		contentLocation: 'README.md'
	}
]

const locationReferenceMap = {}

syncPages(pages, locationReferenceMap, GIT_REF, REPO)

