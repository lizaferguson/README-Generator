// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// was trying to make if statements but was not passing the parameter license 

// function renderLicenseBadge(license) {
//   return (license);
//   if (license === 'Apache') {
//     return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
//   }
//   if (license === 'Boost') {
//     return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]'
//   }
//   if (license === 'BSD') {
//     return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]'
//   }
//   if (license === 'Creative Commons') {
//     return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]'
//   }
//   if (license === 'Eclipse') {
//     return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]'
//   }
//   if (license === 'GNU') {
//     return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
//   }
//   if (license === 'IBM') {
//     return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]'
//   }
//   if (license === 'ISC') {
//     return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
//   }
//   if (license === 'MIT') {
//     return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
//   }
//   if (license === 'Mozilla') {
//     return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]'
//   }
//   if (license === 'Open Data Commons') {
//     return '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]'
//   }
//   if (license === 'Perl') {
//     return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]'
//   }
//   if (license === 'SIL') {
//     return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)]'
//   }
//   if (license === 'Unlicense') {
//     return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
//   }
//   if (license === 'WTFPL') {
//     return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]'
//   }
//   if (license === 'Zlib') {
//     return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]'
//   }
//   if (license === undefined) {
//     return 'undefined'
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license === 'Apache') {
//     return '(https://opensource.org/licenses/Apache-2.0)'
//   }
//   if (license === 'Boost') {
//     return '(https://www.boost.org/LICENSE_1_0.txt)'
//   }
//   if (license === 'BSD') {
//     return '(https://opensource.org/licenses/BSD-3-Clause)'
//   }
//   if (license === 'Creative Commons') {
//     return '(http://creativecommons.org/publicdomain/zero/1.0/)'
//   }
//   if (license === 'Eclipse') {
//     return '(https://opensource.org/licenses/EPL-1.0)'
//   }
//   if (license === 'GNU') {
//     return '(https://www.gnu.org/licenses/gpl-3.0)'
//   }
//   if (license === 'IBM') {
//     return '(https://opensource.org/licenses/IPL-1.0)'
//   }
//   if (license === 'ISC') {
//     return '(https://opensource.org/licenses/ISC)'
//   }
//   if (license === 'MIT') {
//     return '(https://opensource.org/licenses/MIT)'
//   }
//   if (license === 'Mozilla') {
//     return '(https://opensource.org/licenses/MPL-2.0)'
//   }
//   if (license === 'Open Data Commons') {
//     return '(https://opendatacommons.org/licenses/odbl/)'
//   }
//   if (license === 'Perl') {
//     return '(https://opensource.org/licenses/Artistic-2.0)'
//   }
//   if (license === 'SIL') {
//     return '(https://opensource.org/licenses/OFL-1.1)'
//   }
//   if (license === 'Unlicense') {
//     return '(http://unlicense.org/)'
//   }
//   if (license === 'WTFPL') {
//     return '(http://www.wtfpl.net/about/)'
//   }
//   if (license === 'Zlib') {
//     return '(https://opensource.org/licenses/Zlib)'
//   }
//   if (license === undefined) {
//     return ' '
//   }
// }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
   * Description
   * Installation
   * Usage
   * Contribution
   * Tests
   * License
   * Questions

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.test}

  ## License
  ${data.license}

  ## Questions
  For any questions, please contact at: \n
  GitHub: ${data.github} \n
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
