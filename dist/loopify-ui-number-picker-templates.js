(function() {
'use strict';

angular.module('loopify.ui.numberPicker.templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('templates/numberPicker.html','<div class="loopify-number-picker" ng-class="{\'has-max\': isMaxValue, \'has-min\': isMinValue}"><div layout="column" layout-align="center center"><md-button ng-class="{disabled: !canUp}" ng-disabled="!canUp" ng-click="incrementValue()"><md-icon md-font-icon="fa fa-sort-asc"></md-icon></md-button><div><md-input-container><input class="loopify-widh-input" type="text" ng-disabled="disabled" ng-readonly="enter" id="{{id}}" style="text-align:center" ng-model="value" loopify-input-number-picker=""></md-input-container></div><md-button ng-class="{disabled: !canDown}" ng-disabled="!canDown" ng-click="decrementValue()"><md-icon md-font-icon="fa fa-sort-desc"></md-icon></md-button></div></div>');}]);

})();