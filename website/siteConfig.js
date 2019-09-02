/**
 * Copyright 2019 Cryptoeconomics.Study
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects listed on the "users" page.
const users = require("./data/users");

const siteConfig = {
  title: "Cryptoeconomics.Study", // Title for your website.
  tagline:
    "A free, open-source course on the fundamentals of Blockchain protocols",

  // GH-PAGES PUBLISHING PARAMS
  //url: "https://cryptoeconomics-study.github.io",
  //baseUrl: "/website/",
  //projectName: "website",
  //organizationName: "cryptoeconomics-study",
  // Deployment Script
  // GIT_USER=cryptoeconomics-study CURRENT_BRANCH=master yarn run publish-gh-pages

  // SURGE PUBLISHING PARAMS
  //url: "last-powder.surge.sh", // for testing
  //url: "cryptoeconomics.study", // for publishing
  baseUrl: "/",
  projectName: "cryptoeconomics-study",
  organizationName: "cryptoeconomics-study",

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "getting-started/welcome", label: "Course" },
    { href: "community", label: "Community" },
    { doc: "dao/welcome", label: "Contribute" }
    /*
    {
      href:
        "https://forum.cryptoeconomics.study/t/official-contribution-guidelines/453",
      label: "Contribute"
    }
		*/
    //{search: true},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/ces-logo.png",
  //footerIcon: 'img/ces-logo.png',
  favicon: "img/favicon.ico",

  /* Colors for website */
  colors: {
    //primaryColor: '#ff1864',
    primaryColor: "#6da9e2",
    secondaryColor: "#222222"
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Cryptoeconomics.Study`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default",
    defaultLang: "javascript"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,
  // Collapsible Categories
  docsSideNavCollapsible: true,

  // Show documentation's last contributor and update time
  // at the bottom of the page:
  enableUpdateBy: true,
  enableUpdateTime: true,

  // Directories inside which any CSS files will not be processed and
  // concatenated to Docusaurus' styles. This is to support static HTML pages
  // that may be separate from Docusaurus with completely separate styles.
  separateCss: [],

  // Use prism for syntax highlighting
  usePrism: true,

  // Scroll to top button at the bottom
  scrollToTop: true,

  // Style sheets to import
  stylesheets: [
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  ]

  // Stuff TODO

  // You may provide arbitrary config keys to be used as needed by your template. For example, if you need your repo's URL...
  //repoUrl: 'https://github.com/cryptoeconomics-study/cryptoeconomicsstudy.github.io',

  // Edit this page button
  //editUrl: "https://github.com/cryptoeconomics-study/cryptoeconomics-study.github.io/edit/source/docs/",

  // Generate CNAME file when building
  //cname: "cryptoeconomics.study",

  // Translation recruitment link, appears in the language drop down as "Help Translate"
  //translationRecruitingLink: "https://crowdin.com/project/cryptoeconomics.study",

  // Algolia Search
  /*
  algolia: {
    apiKey: 'TBD',
    indexName: 'cryptoeconomics.study',
    algoliaOptions: {
      // https://www.algolia.com/doc/api-reference/api-parameters/
      facetFilters: ["language:LANGUAGE"]
    }
  }
	*/

  // Open Graph and Twitter card images.
  //ogImage: 'img/cryptoeconomics-study-card.png',
  //twitterImage: 'img/cryptoeconomics-study-card.png',
};

module.exports = siteConfig;
