const { syncPages } = require('./sync-util')

const GIT_REF = 'master'
const REPO = 'cryptoeconomics-study/code/'

// note: for the sync scripts to work the contentLocation fields are CASE SENSITIVE

const pages = [
	{
		destination: 'docs/sync/ch1.1-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'c1_CentralPaymentOperator/1.1-Hashes_and_Signatures/README.md'
	}
]

const locationReferenceMap = {}

syncPages(pages, locationReferenceMap, GIT_REF, REPO)

