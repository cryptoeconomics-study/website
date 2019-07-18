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
const Badge = require("../../../../react-bootstrap/Badge.js");
const translate = require('../../server/translate.js').translate;

class CodingChallenges extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
    const pageUrl = page => baseUrl + (language ? `${language}/` : "") + page;

    const TutorialCards = props =>
      props.data.map(tutorial => (
        <Col md={3} className="mb-3 d-flex align-items-stretch">
          <Card>
            <Card.Img variant="top" src={tutorial.img ? tutorial.img : `${baseUrl}img/ces-logo-small.png`} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{tutorial.title}</Card.Title>
              <Card.Text>{tutorial.text}</Card.Text>
              <div className="mt-auto">
                <Badge
                  variant={
                    tutorial.difficulty == `hard`
                      ? `danger`
                      : tutorial.difficulty == `medium`
                      ? `warning`
                      : `success`
                  }
                  className="m-1"
                >
                  {tutorial.difficulty.charAt(0).toUpperCase() + tutorial.difficulty.slice(1)}
                </Badge>
                <Badge variant={
                    tutorial.length > 4
                      ? `danger`
                      : tutorial.length > 2
                      ? `warning`
                      : `success`
                  }
                  className="m-1">
                  {tutorial.length} Hour{tutorial.length > 1 ? `s` : ``}
                </Badge>
                <Badge variant={
                    tutorial.prerequisite == true
                      ? `warning`
                      : `success`
                  }
                  className="m-1">
                  {
                    tutorial.prerequisite == true
                      ? `Prerequisites`
                      : `No Prerequisites`
                  }
                </Badge>
              </div>
            </Card.Body>
            <Card.Footer>
              <Button variant="secondary" className="primary-color" href={tutorial.href}>Try it now!</Button>
            </Card.Footer>
          </Card>
        </Col>
      ));

		const Chapter1 = () => (
      <div>
        <h2>
          <translate>
						Chapter 1: Payment Processor
          </translate>
        </h2>
        <hr />
        <Row>
          <TutorialCards
            data={[
              {
                img: `${baseUrl}img/ces-logo-small.png`,
                title: <translate>Ch1.1 Hashes and Signatures</translate>,
                text: <translate>Learn the magic of hash functions and how signatures work!</translate>,
                difficulty: "easy",
                length: "1",
                prerequisite: false,
                href: `${docUrl("sync/ch1.1-code-challenge")}`
              },
              {
                img: `${baseUrl}img/ces-logo-small.png`,
                title: <translate>Ch1.2 Payment Processor</translate>,
                text: <translate>Learn about beautiful state & state transitions, as well as how we use this design pattern to construct our simple payment processor!</translate>,
                difficulty: "easy",
                length: "1",
                prerequisite: false,
                href: `${docUrl("sync/ch1.2-code-challenge")}`
              },
              {
                img: `${baseUrl}img/ces-logo-small.png`,
                title: <translate>Ch1.3 Replay Protection</translate>,
                text: <translate>Learn how signed messages can be used for unsavory ends! Replay protection is critical!</translate>,
                difficulty: "easy",
                length: "1",
                prerequisite: false,
                href: `${docUrl("sync/ch1.3-code-challenge")}`
              },
              {
                img: `${baseUrl}img/ces-logo-small.png`,
                title: <translate>Ch1.4 Account Model vs UTXOs</translate>,
                text: <translate>Learn how to implement the UTXO model & why you might want to!</translate>,
                difficulty: "easy",
                length: "1",
                prerequisite: false,
                href: `${docUrl("sync/ch1.4-code-challenge")}`
              },
              {
                img: `${baseUrl}img/ces-logo-small.png`,
                title: <translate>Ch1.5 Centralized Systems</translate>,
                text: <translate>We go over some common pitfalls of building systems which do not account for particularly nasty failure modes--system faults, monopoly pricing, censorship, & fraud. With cryptoeconomics we can make sure these bad things don't happen!</translate>,
                difficulty: "easy",
                length: "1",
                prerequisite: false,
                href: `${docUrl("sync/ch1.5-code-challenge")}`
              },
            ]}
          />
        </Row>
      </div>
    );

    const Chapter2 = () => (
      <div className="mt-4">
        <h2>
          <translate>
						Chapter 2: Network Models
          </translate>
        </h2>
        <hr />
        <Row>
          <TutorialCards
            data={[
              {
                img: `${baseUrl}img/under-construction.png`,
                title: <translate>TBD</translate>,
                text: <translate>Something cool</translate>,
                difficulty: "easy",
                length: "1",
                prerequisite: true,
              },
              {
                img: `${baseUrl}img/under-construction.png`,
                title: <translate>TBD</translate>,
                text: <translate>Something cool</translate>,
                difficulty: "easy",
                length: "3",
                prerequisite: true,
              },
              {
                img: `${baseUrl}img/under-construction.png`,
                title: <translate>TBD</translate>,
                text: <translate>Something cool.</translate>,
                difficulty: "easy",
                length: "4",
                prerequisite: true,
              },
              {
                img: `${baseUrl}img/under-construction.png`,
                title: <translate>TBD</translate>,
                text: <translate>Something cool</translate>,
                difficulty: "easy",
                length: "1",
                prerequisite: true,
              },
            ]}
          />
        </Row>
      </div>
    );

    const Chapter3 = () => (
      <div className="mt-4">
        <h2>
          <translate>
						Chapter 3: Proof of Work
          </translate>
        </h2>
        <hr />
        <Row>
          <TutorialCards
            data={[
              {
                img: `${baseUrl}img/under-construction.png`,
                title: <translate>Create a Proof of Work Blockchain simulation</translate>,
                text: <translate>Learn to create a blockchain network that uses Proof of Work to validate blocks</translate>,
                difficulty: "medium",
                length: "4",
                prerequisite: true,
              },
            ]}
          />
        </Row>
      </div>
    );

    return (
      <div>
        <HomeSplash
          siteConfig={siteConfig}
          language={language}
          title={<translate>Cryptoeconomics.Study Coding Challenges</translate>}
          tagline={<translate>Let's learn together!</translate>}
          padding={5}
        />
        <div className="mainContainer">
          <Container>
            <Chapter1 />
            <Chapter2 />
            <Chapter3 />
          </Container>
        </div>
      </div>
    );
  }
}

CodingChallenges.title = 'Coding Challenges';
CodingChallenges.description = 'Cryptoeconomics.Study Coding Challenges.';
module.exports = CodingChallenges;
