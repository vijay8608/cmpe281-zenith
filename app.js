// Getting started with select restaurant page
// create react component
var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
  render: function () {
    return React.createElement('h1', { className: 'header' }, 'React Component');
  }
});
var reactComponentElement = React.createElement(ReactClass);
//manage state
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));
{
  getInitialState: function () {
    return {
      isHidden: false
    };
  },

  render: function () {
    if (this.state.isHidden) {
      return null;
    }

    return React.createElement('h1', { className: 'header' }, 'React Component');
  }
}


