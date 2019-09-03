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
 * limitations under the License.  */

const React = require("react");

const HomeSplash = require(`${process.cwd()}` + `/core/HomeSplash.js`);

const Container = require("../../../../react-bootstrap/Container.js");
const Button = require("../../../../react-bootstrap/Button.js");
const translate = require("../../server/translate.js").translate;

function Community(props) {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const CommunityResource = props => (
    <div>
      <hr className="mt-5 mb-5" />
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  );

  const Forum = () => (
    <CommunityResource title={<translate>Forum 👥</translate>}>
      The Cryptoeconomics.Study community forum is the best place to ask
      questions and stay up to date with the latest news.
      <p>
        <Button
          variant="dark"
          size="sm"
          href="https://forum.cryptoeconomics.study/"
          className="m-1"
        >
          General 📒
        </Button>
        <Button
          variant="dark"
          size="sm"
          href="https://forum.cryptoeconomics.study/t/introduction-of-self/141"
          className="m-1"
        >
          Intros 👋
        </Button>
        <Button
          variant="dark"
          size="sm"
          href="https://forum.cryptoeconomics.study/t/technical-difficulties-thread/512"
          className="m-1"
        >
          Technical Difficulties 💻
        </Button>
        <Button
          variant="dark"
          size="sm"
          href="https://forum.cryptoeconomics.study/t/new-course-feedback/519"
          className="m-1"
        >
          Course Feedback 🥕
        </Button>
        <Button
          variant="dark"
          size="sm"
          href="https://forum.cryptoeconomics.study/t/community-nominations/522"
          className="m-1"
        >
          Nominations 🥕
        </Button>
        <Button
          variant="dark"
          size="sm"
          href="https://forum.cryptoeconomics.study/t/official-contribution-guidelines/453"
          className="m-1"
        >
          Contributing 🐹
        </Button>
      </p>
    </CommunityResource>
  );

  const DAO = () => (
    <CommunityResource title={<translate>DAO 🦅</translate>}>
      The Cryptoeconomics.Study DAO is the main way that we make decisions as a
      community. We also have bounties and weekly Carrot allocations! 🥕
      <p>
        <Button
          variant="dark"
          size="sm"
          href="https://rinkeby.aragon.org/#/0xEAA147020b006e6Bfe9e3e1A9f1FaD330A9E20F5/0xa000c2e3484a19b598d0162c8cca5ddf80ab37bb"
          className="m-1"
        >
          Gerbils 🐹
        </Button>
        <Button
          variant="dark"
          size="sm"
          href="https://rinkeby.aragon.org/#/0xEAA147020b006e6Bfe9e3e1A9f1FaD330A9E20F5/0x923d9e31cf95bd93e6de1950397621900e119450"
          className="m-1"
        >
          Gerbils Votes 🐹
        </Button>
        <Button
          variant="dark"
          size="sm"
          href="https://rinkeby.aragon.org/#/0xEAA147020b006e6Bfe9e3e1A9f1FaD330A9E20F5/0x2625a091eab924da6a45aab3f181e8b66cec48e1"
          className="m-1"
        >
          Carrots 🥕
        </Button>
        <Button
          variant="dark"
          size="sm"
          href="https://rinkeby.aragon.org/#/0xEAA147020b006e6Bfe9e3e1A9f1FaD330A9E20F5/0x7147928551406adaeca76cf3e04557bd3412cf53"
          className="m-1"
        >
          Carrots Votes 🥕
        </Button>
        <Button
          variant="dark"
          size="sm"
          href="https://rinkeby.aragon.org/#/0xEAA147020b006e6Bfe9e3e1A9f1FaD330A9E20F5/0x2225ca26a71af7dd81cf2ebbcd4b16d0090cfe10"
          className="m-1"
        >
          Carrot Allocation Votes 🥕
        </Button>
        <Button
          variant="dark"
          size="sm"
          href="https://rinkeby.aragon.org/#/0xEAA147020b006e6Bfe9e3e1A9f1FaD330A9E20F5/0x32016d05910e344470ec832ed344a385ab18ae6b"
          className="m-1"
        >
          Carrot Bounties 🥕
        </Button>
      </p>
    </CommunityResource>
  );

  const Newsletter = () => (
    <CommunityResource title={<translate>Newsletter 📧</translate>}>
      Get the latest updates on the Cryptoeconomics.Study course and community.
      <p>
        <Button
          variant="dark"
          size="sm"
          href="https://cryptoeconomicsstudy.substack.com/subscribe"
          className="m-1"
        >
          Sign up now!
        </Button>
      </p>
    </CommunityResource>
  );

  return (
    <div>
      <HomeSplash
        siteConfig={siteConfig}
        language={language}
        title={<translate>Community</translate>}
        tagline={<translate>Join the Conversation!</translate>}
        padding={0}
      />
      <div className="mainContainer">
        <Container>
          <p>
            The Cryptoeconomics.Study community is both technical and friendly,
            and we would be happy for you to join!
          </p>
          <Forum />
          <DAO />
          <Newsletter />
          <br />
        </Container>
      </div>
    </div>
  );
}

Community.title = "Community";
Community.description =
  "Learn about and engage with the Cryptoeconomics.Study community.";
module.exports = Community;
