var DatePicker = mui.DatePicker;
var DateComponent;

DateComponent = React.createClass({

    render: function() {
        return (
            <DatePicker hintText="Portrait Dialog" />
            );
    }

});

module.exports = {
    DateComponent: DateComponent
};

var RaisedButton = mui.RaisedButton;
var PrimaryButton;

PrimaryButton = React.createClass({

    render: function() {
        return (
            <RaisedButton label="primary" />
            );
    }

});

module.exports = {
    PrimaryButton: PrimaryButton
}
