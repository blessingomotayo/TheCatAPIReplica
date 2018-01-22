import angular from 'angular';
import component from './catapi.component';
import service from './catapi.service';

angular
  .module('myApp', [])
  .component('catapi', component)
  .factory('catapiService', service);
