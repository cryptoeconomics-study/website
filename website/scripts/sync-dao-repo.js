const { syncPages } = require("./sync-util");

const GIT_REF = "master";
const REPO = "cryptoeconomics-study/dao/";

// note: for the sync scripts to work the contentLocation fields are CASE SENSITIVE

const pages = [
  // welcome
  {
    destination: "docs/sync/dao-welcome.md",
    title: "Welcome",
    contentLocation: "about/welcome.md"
  },
  // gerbils
  {
    destination: "docs/sync/dao-gerbils.md",
    title: "Gerbils 🐹",
    contentLocation: "about/gerbils.md"
  },
  // carrots
  {
    destination: "docs/sync/dao-carrots.md",
    title: "Carrots 🥕",
    contentLocation: "about/carrots.md"
  },
  // advisors
  {
    destination: "docs/sync/dao-advisors.md",
    title: "Advisers 🧙",
    contentLocation: "about/advisors.md"
  },
  // help wanted
  {
    destination: "docs/sync/dao-help-wanted.md",
    title: "Help Wanted 🙌",
    contentLocation: "about/help-wanted.md"
  },
  // code of conduct
  {
    destination: "docs/sync/dao-code-of-conduct.md",
    title: "Code of Conduct ❤️"",
    contentLocation: "about/code-of-conduct.md"
  }
];

const locationReferenceMap = {};

syncPages(pages, locationReferenceMap, GIT_REF, REPO);
