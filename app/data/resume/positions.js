
const positions = [
  {
    company: 'Microsoft (Azure Data)',
    position: 'Software Engineering intern',
    link: 'https://www.microsoft.com/en-us/',
    daterange: 'June 2020 - August 2020',
    points: [
      "Built an extension for Azure Data Studio to add MySQL support, the platform’s #1 most requested feature, \
      by refactoring the already-released Postgres extension backend to support multiple providers.",
      "Added support for many of the features already supported in the Postgres extension, such as Intellisense, \
      table definition handling, and live table editing.",
      "Merged new backend into production code after fixing the 700+ test errors triggered by the reorganization."
    ],
  },
  {
    company: 'Tulip',
    position: 'Software Engineering intern',
    link: 'https://tulip.co',
    daterange: 'June 2019 - August 2019',
    points: [
      "Increased feature richness of Tables, a tool inside Tulip’s platform that helps manufacturers manage and optimize \
       assembly line processes by allowing them to view/edit their data in a table.",
      "Added Tables features such as row deletion, a datetime type, real-time data syncing across clients.",
      "Built features using full-stack technologies, including a Meteor + Go backend and React + Redux frontend."
    ],
  },
];

export default positions;
