import React from 'react';
import MDForm from './src/MDForm.jsx';

const fields = [
  {
    fieldName: 'q',
    displayName: '关键词',
    placeholder: '输入您的关键词',
    type: 'text'
  },
];

const buttons = [
  {
    text: '必应搜索',
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
