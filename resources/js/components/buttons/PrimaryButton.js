var mui = require('material-ui');
var React = require('react');
var RaisedButton = mui.RaisedButton;
var PrimaryButton;

PrimaryButton = React.createClass({

    render: function() {
        return (
            <RaisedButton label="primary" />
            );
    }

});

export default PrimaryButton;
