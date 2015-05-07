var angular = require('angular');
var React = require('react');
var ngreact = require('ngreact');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton; 
var MyAwesomeReactComponent;
var DateComponent = require('./components/buttons/DatePicker');

MyAwesomeReactComponent = React.createClass({

    getDefaultProps: function() {
        return {
            buttonLabel: 'default'
        }
    },

    render: function() {
        return (
            <div>
                <p>Hello {this.props.name}, please click the button below</p>
                <RaisedButton label={this.props.buttonLabel} />
            </div>
            );
    }

});

angular.module('app', ['react'])
    .value('MyAwesomeReactComponent', MyAwesomeReactComponent)
    .controller('myController', myController)
    ;

myController.$inject = ['$scope'];

function myController($scope) {
    $scope.name = "Dilbadil";
}
