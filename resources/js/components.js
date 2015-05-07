var mui = require('material-ui');
var React = require('react');
var DatePicker = mui.DatePicker;
var DateComponent;

DateComponent = React.createClass({

    render: function() {
        return (
            <DatePicker hintText="Portrait Dialog" />
            );
    }

});

module.exports = function() {
    return DateComponent;
};

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
