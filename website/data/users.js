/**
 * Copyright 2019 Cryptoeconomics.Study
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// List of projects listed on the 'users' page.
// Names are alphabetized, so order does not matter.

// INSTRUCTIONS:
// If you would like to add your name to this list, please open a Pull Request.
// Please include the following information in your PR:
// 'name': Your name.
// 'image': A link to your Github profile image.
// 'homepage': This will be the link users go to when they click on a profile image. 
// 'github': Your Github repo.
// 'pinned': Determines whether the profile is pinned to the homepage or just shows up in the users.js page.

const usersList = [
  {
    name: 'K-Ho',
    image: 'https://avatars3.githubusercontent.com/u/5341583?s=460&v=4',
    homepage: 'http://kevinjho.co/',
		github: 'https://github.com/K-Ho',
    pinned: true,
  },
	{
    name: 'burrrata',
    image: 'https://avatars2.githubusercontent.com/u/42473928?s=460&v=4',
    homepage: 'https://burrrata.ch/website',
    github: 'https://github.com/burrrata',
    pinned: true,
  },
	{
		name: 'Goki Gnanendran',
		image: 'https://avatars0.githubusercontent.com/u/18605279?s=460&v=4',
		homepage: 'https://github.com/gqln',
		github: 'https://github.com/gqln',
		pinned: true,
	},
	{
		name: 'Nichanan Kesonpat',
		image: 'https://avatars1.githubusercontent.com/u/15038946?s=460&v=4',
		homepage: 'http://www.nichanank.com/',
		github: 'https://github.com/nichanank',
		pinned: true,
	},
	{
		name: 'Jinglan Wang',
		image: 'https://avatars2.githubusercontent.com/u/9970082?s=460&v=4',
		homepage: 'https://github.com/Jinglan',
		github: 'https://github.com/Jinglan',
		pinned: true,
	},
	{
		name: 'Karl Floersch',
		image: 'https://avatars1.githubusercontent.com/u/706123?s=460&v=4',
		homepage: 'https://karl.tech/',
		github: 'https://github.com/karlfloersch',
		pinned: true,
	},
];

function alphabetize(a, b) {
  if (a.name.toUpperCase() < b.name.toUpperCase()) {
    return -1;
  }
  if (a.name.toUpperCase() > b.name.toUpperCase()) {
    return 1;
  }
  return 0;
}

module.exports = usersList.sort(alphabetize);
