angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('index.html','<!doctype html>\r\n<html ng-app="angularize" lang="en">\r\n\r\n<head>\r\n  <meta charset="UTF-8">\r\n  <title>Angular App</title>\r\n  <link rel="icon" type="image/x-icon" href="/img/favicon.ico">\r\n  <meta name="viewport" content="width=device-width, initial-scale=1">  \r\n  <base href="/">\r\n</head>\r\n\r\n<body>\r\n  <div class="container">\r\n    <div class="header">\r\n      <h1>Angularize WordPress</h1>\r\n      <p>Super-charge your WordPress site with AngularJs components</p>\r\n      <a href="https://github.com/justiceo/Angularize-wp/releases" class="button">Download</a>\r\n      <a href="https://github.com/justiceo/Angularize-wp" class="button light">View on Github</a>\r\n    </div>\r\n\r\n    <p class="notice"><strong>Note:</strong> This plugin is under <a href="https://github.com/justiceo/Angularize-wp/commits/dev">active development</a></p>\r\n\r\n    <h2>Install on WordPress</h2>\r\n    <p><strong>1.</strong> Install and activate <a href="https://wordpress.org/plugins/rest-api/">WP-Rest-API v2</a></p>\r\n\r\n    <p><strong>2.</strong> Download the latest angular_wp.zip file from <a href="https://github.com/justiceo/Angularize-wp/releases">Github</a></p>\r\n\r\n    <p><strong>3.</strong> Finally, install and activate Angularize-WP</p>\r\n\r\n    <h2>For Development (customize & install)</h2>\r\n    <p><strong>1.</strong> Clone the repo <a href="https://github.com/justiceo/Angularize-wp/">Github</a></p>\r\n    <pre><code class="language-bash">git clone https://github.com/justiceo/Angularize-wp</code></pre>\r\n\r\n    <p><strong>2.</strong> Install npm dependencies</p>\r\n    <pre><code class="language-bash">npm install</code></pre>\r\n\r\n    <p><strong>3.</strong> Finally, build to generate plugin files</p>\r\n    <pre><code class="language-bash">webpack -p</code></pre>\r\n\r\n    <h2>All Done!</h2>\r\n    <p>Now you can drop in AngularJs directives, components and providers anywhere in your WordPress site</p>\r\n    <p>Below is an example of an angular hello world component in a WordPress site.</p>\r\n    <pre><code class="language-html">\r\n&lt;!-- Paste this inside a post, page, widget, header etc -->\r\n&lt;echo>&lt;/echo>\r\n&lt;script type="text/javascript" defer data-manual>\r\n  document.addEventListener("DOMContentLoaded", function() {\r\n    angular.module("angularize").component("echo", {\r\n      template: \'Hello World!\',\r\n      controller: function() {}\r\n    })\r\n  });\r\n&lt;/script>\r\n      </code></pre>\r\n\r\n    <h2>A step beyond Hello World!</h2>\r\n    <p>Below is the <a href="https://github.com/justiceo/Angularize-wp/blob/dev/src/app/widgets/recent-posts.js">actual source</a> for the all too famous <a href="https://en.support.wordpress.com/widgets/recent-posts-widget/">Recent posts</a>      widget.</p>\r\n    <pre><code class="language-javascript">\r\nexport class RecentPostsCtrl {\r\n    constructor(RestApi) {\r\n        RestApi.ready().then(\r\n            $wp_v2 => {\r\n                this.posts = $wp_v2.posts({\'per_page\': 5})\r\n                this.posts.get();\r\n            }\r\n        )\r\n    }\r\n}\r\n\r\nlet RecentPosts = {\r\n    controller: RecentPostsCtrl,\r\n    template: `\r\n    &lt;h2>Recent Posts&lt;/h2>\r\n    &lt;ul>\r\n        &lt;li ng-repeat="post in $ctrl.posts">\r\n            &lt;a href="{{ post.attr(\'link\') }}">\r\n                {{ post.attr(\'title\') }}\r\n            &lt;/a>\r\n        &lt;/li>\r\n    &lt;/ul>\r\n    `\r\n}\r\nexport default RecentPosts;\r\n      </code></pre>\r\n\r\n      <p>\r\n        <recent-posts></recent-posts>\r\n      </p>\r\n    <p>How simple is that? And on the bright side, you can now display recent posts anywhere on the page, not just the sidebar</span>\r\n         \r\n    <test></test>\r\n      <div class="footer">\r\n        <h2>Use responsibly</h2>\r\n\r\n        <p><a href="https://www.searchenginejournal.com/warning-youre-killing-seo-efforts-using-angular-js/142031/">Using AngularJs for primary content can affect your WordPress site SEO</a></p>\r\n\r\n        <a href="https://github.com/justiceo/Angularize-wp/releases" class="button">Download</a>\r\n        <a href="https://github.com/justiceo/Angularize-wp" class="button light">View on Github</a>\r\n\r\n        <div class="credit">\r\n          Made with  <i class="fa fa-heart" style="color:red"></i>  by <a href="https://github.com/justiceo">Justice Ogbonna</a>\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n  <!-- demo stuff -->\r\n  <link rel="stylesheet" href="./assets/demo.css">\r\n  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">\r\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism.css">\r\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism-coy.min.css">\r\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/prism.min.js"></script>\r\n\r\n  <!-- angularize stuff -->\r\n  <script src="./assets/main.js"></script>\r\n  <link rel="stylesheet" href="./assets/app.css">\r\n</body>\r\n\r\n</html>');
$templateCache.put('editor/new-post.html','<div class="post-header" style="background-image: url({{ $ctrl.featuredImage }})">\r\n    <upload-file progress="$ctrl.progress($uploadPercent)" upload-id="$ctrl.state.featured_media" upload-url="$ctrl.featuredImage">\r\n        <simple-editor class="angularize-container lg" name="post-title-editor" placeholder="Enter the Title of Your Story" text="$ctrl.state.title"></simple-editor>        \r\n        <simple-editor class="angularize-container" name="post-excerpt-editor" placeholder="Write a short introduction" text="$ctrl.state.excerpt"></simple-editor>        \r\n        <p class="post-author">{{ $ctrl.authorName }}</p>\r\n        <div class="cities">\r\n            <input placeholder="where are you telling this story from?" \r\n            type="text" ng-model="$ctrl.postLocation" \r\n            uib-typeahead="c for c in $ctrl.ALL_CITIES | filter:$viewValue"\r\n                class="form-control">\r\n        </div>\r\n    </upload-file>\r\n</div>\r\n<div class="angularize-container">\r\n    <div class="post-body"></div>\r\n</div>\r\n<div class="angularize-container">\r\n    <div class="post-settings">\r\n        <label>Categories</label>\r\n        <chips class="categories" empty-text="Search for Categories" some-text="Add more categories" \r\n            available="$ctrl.chips.allCategories" \r\n            selected="$ctrl.chips.categories"\r\n            on-change="$ctrl.updateCategories($selected)"></chips>\r\n        <label>Tags</label>\r\n        <chips empty-text="Search for Tags" some-text="Add more tags" \r\n        available="$ctrl.chips.allTags"        \r\n        on-change="$ctrl.updateTags($selected)"\r\n        selected="$ctrl.chips.tags"></chips>    \r\n    </div>\r\n</div>\r\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css">\r\n<style scoped>\r\n    new-post.cover-content {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n    }\r\n\r\n    .angularize-container {\r\n        display: block;\r\n        max-width: 800px;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .angularize-container.lg {\r\n        max-width: 1200px;\r\n    }\r\n\r\n    .post-header {\r\n        min-height: 80vh;\r\n        text-align: center;\r\n        background: orange;\r\n        color: #222;\r\n        background-size: cover;\r\n    }\r\n\r\n    .featured-image {\r\n        margin-top: 200px;\r\n        margin-bottom: 40px;\r\n    }\r\n\r\n    .post-title-editor {\r\n        max-width: 90%;\r\n        margin: 0px auto;\r\n        padding-top: 20px;\r\n        padding-bottom: 20px;\r\n        font-size: 70px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .post-excerpt-editor {\r\n        margin: 0 auto;\r\n        max-width: 70%;\r\n    }\r\n\r\n    .post-title-editor,\r\n    .post-excerpt-editor,\r\n    .post-body {\r\n        outline: none;\r\n    }\r\n\r\n    .post-author {\r\n        margin-top: 100px;\r\n        margin-bottom: 50px;\r\n    }\r\n\r\n    .cities {\r\n        position: absolute;\r\n        right: 10px;\r\n        bottom: -24px;\r\n        z-index: 1;\r\n        font-size: 90%;\r\n    }\r\n\r\n    .cities input, .cities input:focus {\r\n        border: none; \r\n        outline: none;\r\n        padding: 5px 7px;     \r\n        background: transparent;\r\n        border-bottom: 2px solid #222;\r\n        font-size: 90%;\r\n        color: #222;\r\n    }\r\n    .cities input::placeholder {\r\n        color: #222;\r\n        font-style: normal;\r\n    }\r\n    .cities input:focus {\r\n        border-bottom: 2px solid #aaa;\r\n    }\r\n\r\n    .post-body {\r\n        min-height: 400px;\r\n        margin: 0 auto 100px;\r\n        padding: 50px 30px;\r\n    }\r\n\r\n    .post-settings {\r\n        background: #eee;\r\n        padding: 30px;\r\n        position: relative;\r\n    }\r\n\r\n    .post-settings label {\r\n        background: white;\r\n        padding: 10px 18px;\r\n        border: 1px solid #ccc;\r\n        border-bottom: none;\r\n        background: #f3f3f3;\r\n        text-transform: uppercase;\r\n        font-family: sans-serif;\r\n        font-size: 70%;\r\n        font-weight: 600;\r\n    }\r\n\r\n    .post-settings ul.dropdown-menu,\r\n    .cities ul.dropdown-menu {\r\n        position: absolute;\r\n        background: white;\r\n        z-index: 999;\r\n        padding: 10px 15px;\r\n        list-style: none;\r\n        border: 1px solid #ccc;\r\n        border-top: none;\r\n    }\r\n\r\n    .post-settings chips.categories {\r\n        margin-bottom: 40px;\r\n        display: block;\r\n    }\r\n\r\n    i.icons {\r\n        font-size: 40px;\r\n        line-height: 2;\r\n    }\r\n\r\n    .medium-editor-placeholder:after {\r\n        color: #444;\r\n        font-style: normal;\r\n        width: 100%;\r\n        margin: 0 auto;\r\n    }\r\n</style>');
$templateCache.put('editor/upload-file.html','<div ngf-drop="$ctrl.upload($file)" ng-model="$ctrl.file" class="angularize-drop-box" ngf-drag-over-class="\'dragover\'" ngf-pattern="\'image/*,application/pdf\'">\r\n  <img ng-if="$ctrl.showPreview" class="preview" ngf-thumbnail="$ctrl.file">\r\n  <div class="angularize-select-file fa fa-picture-o fa-5x" ngf-select="$ctrl.upload($file)" ng-model="$ctrl.file" name="file"\r\n    ngf-pattern="\'image/*\'" ngf-accept="\'image/*\'" ngf-max-size="20MB" ngf-min-height="100">\r\n  </div>\r\n  <div class="transcluded" ng-transclude></div>\r\n  <simple-editor name="angularize-caption-editor" class="angularize-caption" placeholder="enter photo caption"\r\n    text="$ctrl.caption"></simple-editor>\r\n</div>\r\n<style scoped>\r\n  .angularize-drop-box {\r\n    /*border: 2px dashed #ccc;*/\r\n    position: relative;\r\n  }\r\n\r\n  img.preview {\r\n    position: absolute;\r\n    top: 0;\r\n    height: 100%;\r\n  }\r\n\r\n  .angularize-select-file {\r\n    padding: 100px 50px;\r\n    text-align: center;\r\n    width: 100%;\r\n    position: relative;\r\n  }\r\n\r\n  .angularize-caption {\r\n    position: relative;\r\n    bottom: 10px;\r\n    left: 20px;\r\n    outline: none;\r\n    border: none;\r\n    max-width: 300px;\r\n    font-style: italic;\r\n    font-size: 90%;\r\n    text-align: left;\r\n  }\r\n\r\n  .simple-medium-editor.angularize-caption-editor {\r\n    outline: none;\r\n    max-width: 270px;\r\n    padding: 5px 7px;\r\n    border-bottom: 2px solid #222;\r\n  }\r\n\r\n  .simple-medium-editor.angularize-caption-editor::after {\r\n    font-style: normal;\r\n    color: #222;\r\n  }\r\n\r\n  .transcluded {\r\n    position: relative;\r\n    padding-bottom: 120px;\r\n  }\r\n</style>');
$templateCache.put('public/index.html','<!doctype html>\r\n<html ng-app="angularize" lang="en">\r\n\r\n<head>\r\n  <meta charset="UTF-8">\r\n  <title>Angular App</title>\r\n  <link rel="icon" type="image/x-icon" href="/img/favicon.ico">\r\n  <meta name="viewport" content="width=device-width, initial-scale=1">  \r\n  <base href="/">\r\n</head>\r\n\r\n<body>\r\n  <div class="container">\r\n    <div class="header">\r\n      <h1>Angularize WordPress</h1>\r\n      <p>Super-charge your WordPress site with AngularJs components</p>\r\n      <a href="https://github.com/justiceo/Angularize-wp/releases" class="button">Download</a>\r\n      <a href="https://github.com/justiceo/Angularize-wp" class="button light">View on Github</a>\r\n    </div>\r\n\r\n    <p class="notice"><strong>Note:</strong> This plugin is under <a href="https://github.com/justiceo/Angularize-wp/commits/dev">active development</a></p>\r\n\r\n    <h2>Install on WordPress</h2>\r\n    <p><strong>1.</strong> Install and activate <a href="https://wordpress.org/plugins/rest-api/">WP-Rest-API v2</a></p>\r\n\r\n    <p><strong>2.</strong> Download the latest angular_wp.zip file from <a href="https://github.com/justiceo/Angularize-wp/releases">Github</a></p>\r\n\r\n    <p><strong>3.</strong> Finally, install and activate Angularize-WP</p>\r\n\r\n    <h2>For Development (customize & install)</h2>\r\n    <p><strong>1.</strong> Clone the repo <a href="https://github.com/justiceo/Angularize-wp/">Github</a></p>\r\n    <pre><code class="language-bash">git clone https://github.com/justiceo/Angularize-wp</code></pre>\r\n\r\n    <p><strong>2.</strong> Install npm dependencies</p>\r\n    <pre><code class="language-bash">npm install</code></pre>\r\n\r\n    <p><strong>3.</strong> Finally, build to generate plugin files</p>\r\n    <pre><code class="language-bash">webpack -p</code></pre>\r\n\r\n    <h2>All Done!</h2>\r\n    <p>Now you can drop in AngularJs directives, components and providers anywhere in your WordPress site</p>\r\n    <p>Below is an example of an angular hello world component in a WordPress site.</p>\r\n    <pre><code class="language-html">\r\n&lt;!-- Paste this inside a post, page, widget, header etc -->\r\n&lt;echo>&lt;/echo>\r\n&lt;script type="text/javascript" defer data-manual>\r\n  document.addEventListener("DOMContentLoaded", function() {\r\n    angular.module("angularize").component("echo", {\r\n      template: \'Hello World!\',\r\n      controller: function() {}\r\n    })\r\n  });\r\n&lt;/script>\r\n      </code></pre>\r\n\r\n    <h2>A step beyond Hello World!</h2>\r\n    <p>Below is the <a href="https://github.com/justiceo/Angularize-wp/blob/dev/src/app/widgets/recent-posts.js">actual source</a> for the all too famous <a href="https://en.support.wordpress.com/widgets/recent-posts-widget/">Recent posts</a>      widget.</p>\r\n    <pre><code class="language-javascript">\r\nexport class RecentPostsCtrl {\r\n    constructor(RestApi) {\r\n        RestApi.ready().then(\r\n            $wp_v2 => {\r\n                this.posts = $wp_v2.posts({\'per_page\': 5})\r\n                this.posts.get();\r\n            }\r\n        )\r\n    }\r\n}\r\n\r\nlet RecentPosts = {\r\n    controller: RecentPostsCtrl,\r\n    template: `\r\n    &lt;h2>Recent Posts&lt;/h2>\r\n    &lt;ul>\r\n        &lt;li ng-repeat="post in $ctrl.posts">\r\n            &lt;a href="{{ post.attr(\'link\') }}">\r\n                {{ post.attr(\'title\') }}\r\n            &lt;/a>\r\n        &lt;/li>\r\n    &lt;/ul>\r\n    `\r\n}\r\nexport default RecentPosts;\r\n      </code></pre>\r\n\r\n      <p>\r\n        <recent-posts></recent-posts>\r\n      </p>\r\n    <p>How simple is that? And on the bright side, you can now display recent posts anywhere on the page, not just the sidebar</span>\r\n         \r\n\r\n      <div class="footer">\r\n        <h2>Use responsibly</h2>\r\n\r\n        <p><a href="https://www.searchenginejournal.com/warning-youre-killing-seo-efforts-using-angular-js/142031/">Using AngularJs for primary content can affect your WordPress site SEO</a></p>\r\n\r\n        <a href="https://github.com/justiceo/Angularize-wp/releases" class="button">Download</a>\r\n        <a href="https://github.com/justiceo/Angularize-wp" class="button light">View on Github</a>\r\n\r\n        <div class="credit">\r\n          Made with  <i class="fa fa-heart" style="color:red"></i>  by <a href="https://github.com/justiceo">Justice Ogbonna</a>\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n  <link rel="stylesheet" href="demo.css">\r\n  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">\r\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism.css">\r\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism-coy.min.css">\r\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/prism.min.js"></script>\r\n\r\n</body>\r\n\r\n</html>');
$templateCache.put('public/uploader-demo.html','<!doctype html>\r\n<html ng-app="angularize" lang="en">\r\n\r\n<head>\r\n  <meta charset="UTF-8">\r\n  <title>Angular App</title>\r\n  <link rel="icon" type="image/x-icon" href="/img/favicon.ico">\r\n  <meta name="viewport" content="width=device-width, initial-scale=1">\r\n  <base href="/">\r\n</head>\r\n\r\n<body>\r\n  <div class="container">\r\n    <div class="header">\r\n      <h1>Angularize Uploader Demo</h1>\r\n      <p>Super-charge your WordPress site with AngularJs components</p>\r\n      <a href="#" class="button">Download</a>\r\n      <a href="#" class="button light">View on Github</a>\r\n    </div>\r\n\r\n    <div class="main">\r\n      <p>Upload File Test</p>\r\n      <upload-file></upload-file>\r\n    </div>\r\n\r\n    <div class="footer">\r\n      <h2>Use responsibly</h2>\r\n      <p><a href="#">Using AngularJs for primary content can affect your WordPress site SEO</a></p>\r\n      <a href="#" class="button">Download</a>\r\n      <a href="#" class="button light">View on GitHub</a>\r\n\r\n      <div class="credit">\r\n        Made by <a href="#">Justice Ogbonna</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <link rel="stylesheet" href="demo.css">\r\n  <link rel="stylesheet" href="../../node_modules/prismjs/themes/prism.css">\r\n  <script src="file://home/justice/code/angularize/node_modules/prismjs/prism.js"></script>\r\n\r\n</body>\r\n\r\n</html>');
$templateCache.put('core/smoke-test/test-view.html','<p>{{ $ctrl.sample }}</p>');
$templateCache.put('widgets/book-flight/book-flight.html','<widget>\r\n    <div class="widget-wrapper">\r\n        <div ng-hide="$ctrl.showLocations" class="guage-interest">\r\n            <h3><a ng-click="$ctrl.showLocations = true">I would like to travel to {{ $ctrl.to }}!</a></h3>\r\n        </div>\r\n        <div ng-show="$ctrl.showLocations && !$ctrl.showThanks" class="locations">\r\n            <input ng-model="$ctrl.from" placeholder="From: " />\r\n            <input ng-model="$ctrl.to" value="$ctrl.to" placeholder="To: " />\r\n            <button ng-click="$ctrl.fly(); $ctrl.showThanks = true">Go!</button>\r\n        </div>\r\n        <div ng-show="$ctrl.showThanks" class="thanks">\r\n            <h2><strong>Thank you!</strong></h2>\r\n        </div>\r\n    </div>\r\n    <style scoped>\r\n        .widget-wrapper {\r\n            padding: 30px 20px;\r\n            background: rgba(245,243,245, 0.9);\r\n            border: 1px solid #ccc;\r\n            box-shadow: 0px 0px 2px #ccc;\r\n        }\r\n        .widget-wrapper .hidden { display: none; }\r\n        .widget-wrapper input {\r\n            height: 50px;\r\n            box-shadow: 1px 1px 6px #ccc;\r\n            border: 1px solid #aaa;\r\n            margin: 10px 5px 10px 0;\r\n            padding: 10px;\r\n        }\r\n    </style>\r\n</widget>');}]);