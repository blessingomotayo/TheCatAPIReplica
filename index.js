import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import catapi from './catapimainpage/catapi.module';

angular.module('catapi', [
  uirouter,
  'catapi'
]);