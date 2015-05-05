var React = require('react');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton; 

var MyAwesomeReactComponent = React.createClass({

    render: function() {
        return (
            <RaisedButton label="Default" />
            );
    }

});

React.render(<MyAwesomeReactComponent />, document.body);
