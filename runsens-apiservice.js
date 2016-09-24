(function() {
  
  //On tests un commit encore
	var apiservice = angular.module('apiservice', ['ngResource']);
  
  
  
  apiservice.factory('ApiService',  ['$resource',function ($resource)
{
  
  return{
    Parametres: $resource ( 'parametres/:id', { id: '@id' },
                           {
                              get:{method:'GET', params:{}, isArray:false},
                              update:{method:'PATCH', params: { id: '@id' }, isArray:false}
                              
                            }),
    Demandes: $resource ( 'demandes/:id', {},
                            {
                              get:{method:'GET', params:{}, isArray:false},
                              
                            })
  };

  
}]);


})();
/*
 *
 *
(function() {

var IonicModule = angular.module('ionic', ['ngAnimate', 'ngSanitize', 'ui.router', 'ngIOS9UIWebViewPatch']),
  extend = angular.extend,
  forEach = angular.forEach,
  isDefined = angular.isDefined,
  isNumber = angular.isNumber,
  isString = angular.isString,
  jqLite = angular.element,
  noop = angular.noop;

IonicModule
.factory('$ionicActionSheet', [
  '$rootScope',
  '$compile',
  '$animate',
  '$timeout',
  '$ionicTemplateLoader',
  '$ionicPlatform',
  '$ionicBody',
  'IONIC_BACK_PRIORITY',
function($rootScope, $compile, $animate, $timeout, $ionicTemplateLoader, $ionicPlatform, $ionicBody, IONIC_BACK_PRIORITY) {

  return {
    show: actionSheet
  };
 *
 *
 **/