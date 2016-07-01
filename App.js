import React from 'react';
import MDForm from './src/MDForm.jsx';

const fields = [
  {
    fieldName: 'q',
    displayName: 'keywords',
    placeholder: 'keywords',
    type: 'text'
  },
];

const buttons = [
  {
    text: 'bing',
    type: 'submit',
  },
];

const App = () => (
  <div>
    <MDForm
      fields={fields}
      buttons={buttons}
      url="http://cn.bing.com/search"
      method="GET"
    />
  </div>
);

export default App;
