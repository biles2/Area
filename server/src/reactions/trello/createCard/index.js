const path = require('path');

const metadata = {
  name: path.basename(__dirname),
  displayName: 'Create a card',
  description: 'This Action will create a card on the specified list in specified board',
  params: [
    {
      name: 'board',
      type: 'string',
      placeholder: 'Please select',
    },
    {
      name: 'ListName',
      type: 'string',
      placeholder: '',
    },
    {
      name: 'title',
      type: 'string',
      placeholder: 'Enter title...',
    },
    {
      name: 'description',
      type: 'string',
      placeholder: 'Enter description...',
    },
  ],
};

module.exports = metadata;