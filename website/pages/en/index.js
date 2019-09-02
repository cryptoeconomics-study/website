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
const React = require("react");

const HomeSplash = require(`${process.cwd()}` + `/core/HomeSplash.js`);

const Container = require("../../../../react-bootstrap/Container.js");
const Button = require("../../../../react-bootstrap/Button.js");
const Card = require("../../../../react-bootstrap/Card.js");
const Row = require("../../../../react-bootstrap/Row.js");
const Col = require("../../../../react-bootstrap/Col.js");
const Image = require("../../../../react-bootstrap/Image.js");
const translate = require("../../server/translate.js").translate;

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
    const pageUrl = page => baseUrl + (language ? `${language}/` : "") + page;

    // Feature
    const Feature = props => (
      <Row
        style={{
          minHeight: "30vmin",
          paddingTop: "5vmin",
          paddingBottom: "5vmin"
        }}
        className={
          (props.background
            ? props.background == `dark`
              ? `bg-dark text-white`
              : `bg-` + props.background
            : ``) + ` p-sm-5`
        }
      >
        <Col
          md={7}
          className={props.imageAlign == `right` ? `order-md-1` : `order-md-2`}
        >
          <h2>{props.title}</h2>
          <p className="lead">{props.children}</p>
        </Col>
        <Col
          md={5}
          className={props.imageAlign == `right` ? `order-md-2` : `order-md-1`}
        >
          <Image src={props.image} alt={props.title} />
        </Col>
      </Row>
    );

    // Feature w resized logo
    const FeatureWlogo = props => (
      <Row
        style={{
          minHeight: "30vmin",
          paddingTop: "5vmin",
          paddingBottom: "5vmin",
          margin: "auto 2em",
          textAlign: "center"
        }}
        className={
          (props.background
            ? props.background == `dark`
              ? `bg-dark text-white`
              : `bg-` + props.background
            : ``) + ` p-sm-5`
        }
      >
        <Col
          md={7}
          className={props.imageAlign == `right` ? `order-md-1` : `order-md-2`}
        >
          <h2>{props.title}</h2>
          <p className="lead">{props.children}</p>
        </Col>
        <Col
          md={5}
          className={props.imageAlign == `right` ? `order-md-2` : `order-md-1`}
        >
          <Image src={props.image} alt={props.title} />
        </Col>
      </Row>
    );

    // Feature w iframe
    const FeatureWiframe = props => (
      <Row
        style={{
          minHeight: "30vmin",
          textAligh: "center",
          paddingTop: "5vmin",
          paddingBottom: "5vmin"
        }}
        className={
          (props.background
            ? props.background == `dark`
              ? `bg-dark text-white`
              : `bg-` + props.background
            : ``) + ` p-sm-5`
        }
      >
        <Col
          md={7}
          className={props.imageAlign == `right` ? `order-md-1` : `order-md-2`}
        >
          <h2>{props.title}</h2>
          <p className="lead">{props.children}</p>
        </Col>
        <Col
          md={5}
          className={props.imageAlign == `right` ? `order-md-2` : `order-md-1`}
        >
          <div className="videoWrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/m-0escxJ-j8"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    );

    const HotspotCard = props => (
      <Col
        md={4}
        className="mb-3 d-flex align-items-stretch"
        style={{
          textAlign: "center"
        }}
      >
        <Card>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
          </Card.Body>
          <Card.Footer>{props.children}</Card.Footer>
        </Card>
      </Col>
    );

    const Hotspots = () => (
      <Row>
        <HotspotCard
          title={<translate>A Course Of Course!</translate>}
          text={
            <translate>
              Cryptoeconomics.Study is a fun and engaging course built to help
              you understand the basics of cryptoeconomic mechanism design.
            </translate>
          }
        >
          <Button
            variant="secondary"
            //href={docUrl('getting-started')}
            href="https://www.youtube.com/channel/UCGagQMCWglF-oGt8HKZfHNg"
            className="m-1 primary-color"
          >
            <translate>Try It Out!</translate>
          </Button>
        </HotspotCard>
        <HotspotCard
          title={<translate>Community</translate>}
          text={
            <translate>
              Cryptoeconomics.Study has a rapidly growing, friendly, and engaged
              community. Ask questions and work together to solve coding
              challenges.
            </translate>
          }
        >
          <Button
            variant="secondary"
            href={pageUrl("community")}
            className="m-1 primary-color"
          >
            <translate>Community Page</translate>
          </Button>
        </HotspotCard>
        <HotspotCard
          title={<translate>Coding Challenges</translate>}
          text={
            <translate>
              Cryptoeconomics.Study has a range of coding challenges to help you
              go from speculator to builder.
            </translate>
          }
        >
          <Button
            variant="secondary"
            href={pageUrl("coding-challenges")}
            className="m-1 primary-color"
          >
            <translate>Coding Challenges</translate>
          </Button>
        </HotspotCard>
      </Row>
    );

    // Learn Anchor
    const LearnAnchor = () => <div id="learn"></div>;

    // What is CES
    const WhatIsCES = () => (
      <div
        className="productShowcaseSection mb-5 mt-5"
        style={{ textAlign: "center" }}
      >
        <h2 className="text-dark">
          <translate>What is Cryptoeconomics.Study?</translate>
        </h2>
        <h2 className="primary-color-text">&#11015;</h2>
      </div>
    );

    // Highlight 1
    const Highlight1 = () => (
      <FeatureWlogo
        image={`${baseUrl}img/ces-logo-small.png`}
        imageAlign="right"
        title={
          <translate>
            A 1 Stop Shop For Cryptoeconomic Mechanism Design
          </translate>
        }
        background="light"
      >
        <ul className="lead">
          <li>
            <translate>Passionate and collaborative community</translate>
          </li>
          <li>
            <translate>
              Engaging lectures that break complex topics into bite sized chunks
            </translate>
          </li>
          <li>
            <translate>
              Detailed documentation and resources to dive deeper on all topics
              covered
            </translate>
          </li>
          <li>
            <translate>Interactive visualizations of key concepts</translate>
          </li>
          <li>
            <translate>
              Challenging coding assignments that get you familiar with the
              tooling used to build cryptoeconomic systems in the real world
            </translate>
          </li>
        </ul>
      </FeatureWlogo>
    );

    // Lectures Highlight
    const Lectures = () => (
      <FeatureWiframe
        //image={`${baseUrl}img/undraw_mind_map.svg`}
        background="dark"
        imageAlign="left"
        title={<translate>Fun Fastpaced Lectures</translate>}
      >
        <translate>
          Our goal is to make it as easily as possible to understand the inner
          workings of protocols like Bitcoin and Ethereum. We start by learning
          about how a simple payment processor like Paypal works and go all the
          way to understanding Bitcoin and (coming soon!) cutting-edge Ethereum
          research like Proof of Stake and Plasma. Through our fun, animated
          lectures, we’ll give you a high-level overview of all of the key
          concepts needed to understand Blockchain protocols.
        </translate>
      </FeatureWiframe>
    );

    // Coding Challenges Highlight
    const CodingChallenges = () => (
      <Feature
        background="dark"
        image="https://i.imgur.com/RSqFMdk.png"
        imageAlign="right"
        title={<translate>Challenging Code Assignments</translate>}
      >
        <translate>
          Each lecture is accompanied by a challenging coding assignment, where
          you will implement the concepts from the lecture. By actually building
          the protocols and attacks from the lectures, you’ll learn all of the
          nitty-gritty technical details in a fun, hands-on way. After
          completing the coding assignments, you’ll have the knowledge to start
          contributing to research discussions and development of cryptoeconomic
          designs.
        </translate>
      </Feature>
    );

    // Community DAO Highlight
    const CommunityDAO = () => (
      <Feature
        background="dark"
        image="https://i.imgur.com/I1dcOlB.png"
        imageAlign="left"
        title={<translate>Community Driven</translate>}
      >
        <translate>
          Cryptoeconomics.Study has a DAO! This allows the community to
          transparently make decisions, manage funds, and reward community
          contributors. As the community grows we will move more and more from
          core contributors (gerbils) to community contributors (carrot
          holders). This will allow us to create a truly decentralized, self
          sovereign, incentive aligned community :)
        </translate>
      </Feature>
    );

    // Community Showcase
    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.homepage} key={user.homepage}>
            <img
              style={{
                borderRadius: "50%"
              }}
              src={user.image}
              alt={user.name}
              title={user.name}
            />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : "") + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>
            <translate>Cryptoeconomics.Study Contributors</translate>
          </h2>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl("users.html")}>
              <translate>More Cryptoeconomics.Study Contributors</translate>
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash
          siteConfig={siteConfig}
          language={language}
          title={siteConfig.title}
          tagline={siteConfig.tagline}
          buttons={[
            {
              name: "Get Started, It's Free!",
              href: `${docUrl("getting-started/welcome")}`
            },
            {
              name: "Community DAO",
              href:
                "https://rinkeby.aragon.org/#/0xEAA147020b006e6Bfe9e3e1A9f1FaD330A9E20F5/"
            }
          ]}
          padding={5}
        />
        <div className="mainContainer">
          <Container>
            <br />
            <Lectures />
            <br />
            <CodingChallenges />
            <br />
            <CommunityDAO />
            <br />
            <Showcase />
            <br />
          </Container>
        </div>
      </div>
    );
  }
}

Index.title = "Cryptoeconomics.Study";
Index.description =
  "A free, open-source course on the fundamentals of Blockchain protocols";
module.exports = Index;
