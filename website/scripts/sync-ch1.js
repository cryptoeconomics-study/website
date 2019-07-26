const { syncPages } = require('./sync-util')

const GIT_REF = 'master'
const REPO = 'cryptoeconomics-study/code/'

// note: for the sync scripts to work the contentLocation fields are CASE SENSITIVE

const pages = [
	{
		destination: 'docs/sync/ch1.1-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'c1_CentralPaymentOperator/1.1%20-%20Hashes_and_Signatures/README.md'
	},
	{
		destination: 'docs/sync/ch1.2-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'c1_CentralPaymentOperator/1.2%20-%20State%20Transitions%20%26%20Payment%20Processor%20Implementation/README.md'
	},
	{
		destination: 'docs/sync/ch1.3-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'c1_CentralPaymentOperator/1.3%20-%20Replay%20Protection/README.md'
	},
	{
		destination: 'docs/sync/ch1.4-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'c1_CentralPaymentOperator/1.4%20-%20Account%20Model%20vs.%20UTXOs/README.md'
	},
	{
		destination: 'docs/sync/ch1.5-code-challenge.md',
		title: 'Code Challenge',
		contentLocation: 'c1_CentralPaymentOperator/1.5%20-%20Properties%20of%20Centralized%20Systems/README.md'
	}
]

const locationReferenceMap = {}

syncPages(pages, locationReferenceMap, GIT_REF, REPO)

