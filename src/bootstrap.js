var angular     = require('angular');
var uibs        = require('angular-ui-bootstrap');
angular.module('spaExercise', [uibs]);

require('./js/service/model-products');
require('./js/directive/layout');
require('./js/directive/menu');
require('./js/directive/list');
require('./js/directive/product');
