/**
 * Copyright 2019 Cryptoconomics.Study
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

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const translate = require('../../server/translate.js').translate;

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `${siteConfig.repoUrl}/edit/source/website/data/users.js`;
    const showcase = siteConfig.users.map(user => (
      <a href={user.homepage} key={user.homepage}>
        <img style={{borderRadius: '50%',}} src={user.image} alt={user.name} title={user.name} />
        <p className="text-dark">{user.name}</p>
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div>
              <h1>
                <translate>Cryptoeconomics.Study Contributors</translate>
              </h1>
              <p>
                <translate>We're shaping the future of positive-sum system development.</translate>
              </p>
            </div>
            <hr />
            <div className="logos">{showcase}</div>
            <hr />
          </div>
        </Container>
      </div>
    );
  }
}

Users.title = 'Contributors';
Users.description = 'Cryptoeconomics.Study community contributors';
module.exports = Users;
