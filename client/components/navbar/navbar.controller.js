'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('q3AssessmentApp')
  .controller('NavbarController', NavbarController);
