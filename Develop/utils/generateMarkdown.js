// generateMarkdown.js
// Functions to create license badge, link, and section for the README

function renderLicenseBadge(license) {
  if (!license) return '';
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (!license) return '';
  return `(https://choosealicense.com/licenses/${encodeURIComponent(license.toLowerCase())}/)`;
}

function renderLicenseSection(license) {
  if (!license) return '';
  return `## License
  
This project is licensed under the [${license}]${renderLicenseLink(license)} license.`;
}

// Main function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
