import angular from 'angular';
import LocalStorageModule from 'angular-local-storage';
import AngularizeEditor from './editor';
import Cache from './providers/cache';
import PostService from './providers/post';
import Ajax from './providers/ajax';
import CurrentUser from './providers/current-user';
import ToolbarService from './providers/toolbar.service';
import AppComponent from './app';
import RecentPosts from './components/recent-posts/';
import AuthorPopover from './components/author-popover';
import BookFlight from './components/book-flight';
import LikeDirective from './components/like';

// for syntax highlighting on demo page
require('prismjs');

import '../style/app.scss';

const MODULE_NAME = 'angularize';

angular.module(MODULE_NAME, [
  LocalStorageModule,
  AngularizeEditor // allow us to use <settings> etc
  ])
  .component('app', AppComponent)
  .component('recentPost', RecentPosts)
  .component('authorPopover', AuthorPopover)
  .component('bookFlight', BookFlight)
  .directive('like', LikeDirective)
  .service('Cache', Cache)
  .service('PostService', PostService)
  .service('Ajax', Ajax)
  .service('CurrentUser', CurrentUser)
  .service('ToolbarService', ToolbarService)
  .factory('httpRequestInterceptor', function ($window) {
    'ngInject';
    return {
      request: function (config) {
        if($window.wp_rest_object)        
          config.headers['X-WP-Nonce'] = $window.wp_rest_object.nonce;
        return config;
      }
    };
  })
  .config(function (localStorageServiceProvider, $httpProvider) {
    localStorageServiceProvider
      .setPrefix(MODULE_NAME)
      .setStorageType('localStorage') // or sessionStorage
      .setNotify(true, true);

    $httpProvider.interceptors.push('httpRequestInterceptor')
  });

export default MODULE_NAME;