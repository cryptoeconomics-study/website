const { syncPages } = require("./sync-util");

const GIT_REF = "master";
const REPO = "cryptoeconomics-study/code/";

// note: for the sync scripts to work the contentLocation fields are CASE SENSITIVE

const pages = [
  // 1.1
  {
    destination: "docs/sync/1.1-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/1.1/lecture.md"
  },
  {
    destination: "docs/sync/1.1-code-challenge.md",
    title: "Code Challenge",
    contentLocation: "ch1/1.1/README.md"
  },
  // 1.2
  {
    destination: "docs/sync/1.2-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/1.2/lecture.md"
  },
  {
    destination: "docs/sync/1.2-code-challenge.md",
    title: "Code Challenge",
    contentLocation: "ch1/1.2/README.md"
  },
  // 1.3
  {
    destination: "docs/sync/1.3-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/1.3/lecture.md"
  },
  {
    destination: "docs/sync/1.3-code-challenge.md",
    title: "Code Challenge",
    contentLocation: "ch1/1.3/README.md"
  },
  // 1.4
  {
    destination: "docs/sync/1.4-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/1.4/lecture.md"
  },
  {
    destination: "docs/sync/1.4-code-challenge.md",
    title: "Code Challenge",
    contentLocation: "ch1/1.4/README.md"
  },
  // 1.5
  {
    destination: "docs/sync/1.5-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/1.5/lecture.md"
  },
  {
    destination: "docs/sync/1.5-code-challenge.md",
    title: "Code Challenge",
    contentLocation: "ch1/1.5/README.md"
  }
];

const locationReferenceMap = {};

syncPages(pages, locationReferenceMap, GIT_REF, REPO);
