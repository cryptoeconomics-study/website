const { syncPages } = require("./sync-util");

const GIT_REF = "master";
const REPO = "cryptoeconomics-study/lectures/";

// note: for the sync scripts to work the contentLocation fields are CASE SENSITIVE

const pages = [
  // welcome
  {
    destination: "docs/sync/welcome.md",
    title: "Welcome",
    contentLocation: "getting-started/welcome.md"
  },
  // course overview
  {
    destination: "docs/sync/course-overview.md",
    title: "Course Overview",
    contentLocation: "getting-started/course-overview.md"
  }
  // 1.1
  {
    destination: "docs/sync/1.1-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/1.1/lecture.md"
  },
  // 1.2
  {
    destination: "docs/sync/1.2-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/1.2/lecture.md"
  },
  // 1.3
  {
    destination: "docs/sync/1.3-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/1.3/lecture.md"
  },
  // 1.4
  {
    destination: "docs/sync/1.4-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/1.4/lecture.md"
  },
  // 1.5
  {
    destination: "docs/sync/1.5-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/1.5/lecture.md"
  },
  // 2.1
  {
    destination: "docs/sync/2.1-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/2.1/lecture.md"
  },
  // 2.2
  {
    destination: "docs/sync/2.2-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/2.2/lecture.md"
  },
  // 2.3
  {
    destination: "docs/sync/2.3-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/2.3/lecture.md"
  },
  // 2.4
  {
    destination: "docs/sync/2.4-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/2.4/lecture.md"
  },
  // 3.1
  {
    destination: "docs/sync/3.1-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/3.1/lecture.md"
  },
  // 3.2
  {
    destination: "docs/sync/3.2-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/3.2/lecture.md"
  },
  // 3.3
  {
    destination: "docs/sync/3.3-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/3.3/lecture.md"
  },
  // 3.4
  {
    destination: "docs/sync/3.4-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/3.4/lecture.md"
  },
  // 3.5
  {
    destination: "docs/sync/3.5-lecture.md",
    title: "Lecture",
    contentLocation: "ch1/3.5/lecture.md"
  },
];

const locationReferenceMap = {};

syncPages(pages, locationReferenceMap, GIT_REF, REPO);
