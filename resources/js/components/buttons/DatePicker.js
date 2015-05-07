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
