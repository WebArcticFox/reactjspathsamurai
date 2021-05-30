import SocialApp from './App';
import store from "./redux/redux-store";
import React from "react";
import * as ReactDOM from "react-dom";

test('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SocialApp store={store} />, div);
  ReactDOM.unmountComponentAtNode(div)
});
