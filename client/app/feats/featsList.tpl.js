System.register(["angular"],function(_export){var angular;return{setters:[function(_angular){angular=_angular["default"]}],execute:function(){"use strict";angular.module("app/feats/featsList.tpl.html",[]).run(["$templateCache",function($templateCache){$templateCache.put("app/feats/featsList.tpl.html",'<main-wrap subnav-toggle="true" toolbar-template="app/feats/feats.header.tpl.html" layout="column" flex=""><md-content class="paper-bg" layout="row" flex="" layout-align="space-between start"><div class="inner-pad" flex="" layout="column"><md-list class="paper-bg list-fill" layout-padding="lg" flex=""><div class="right-toc-sidebar title-only"><div class="inner-wrap" ng-class="{ expanded: sidebarExpanded }"><md-button class="sidebar-pinned md-primary md-icon-button md-raised" ng-click="sidebarExpanded = !sidebarExpanded"><md-icon ng-if="!sidebarExpanded" size="md" aria-label="Expand Icon" md-svg-icon="menu-down"></md-icon><md-icon ng-if="sidebarExpanded" size="md" aria-label="Collapse Icon" md-svg-icon="menu-up"></md-icon><md-tooltip>{{ (sidebarExpanded) ? \'Show Less\' : \'Show More\' }}</md-tooltip></md-button><div layout-padding="lg-b lg-l lg-r"><br><strong layout-padding="lg-t">Table of Contents</strong><div id="toc"><ul><li ng-repeat="item in featsCtrl.powers track by $index"><a ng-href="{{ \'#\' + featsCtrl.Link.nameToUrlPath(item.name) }}">{{ item.name }}</a></li></ul></div></div></div></div><div ng-if="!featsCtrl.headerForm.$pristine" class="md-primary"><md-button class="md-default" ng-click="featsCtrl.forceHeaderOpen = !featsCtrl.forceHeaderOpen"><md-icon ng-if="!featsCtrl.forceHeaderOpen" size="lg" aria-label="Plus Icon" md-svg-icon="plus"></md-icon><md-icon ng-if="featsCtrl.forceHeaderOpen" size="lg" aria-label="Minus Icon" md-svg-icon="minus"></md-icon>{{ (featsCtrl.forceHeaderOpen) ? \'Hide\' : \'Show\' }} Explanation</md-button></div><div class="accordion" ng-class="{ \'expanded\': ( featsCtrl.forceHeaderOpen || featsCtrl.headerForm.$pristine) }"><h1 class="md-display-2">Feats</h1><h2 class="md-display-1">Reading a feat Description</h2><p>Below, each boon description includes the following elements.</p><p><strong>Cost</strong>. This is the number of feat points required to take this feat. Characters get 6 feat points at 1st level, and 3 feat points each time they level up. If a feat has multiple tiers, the cost is the same for each tier of the feat, so higher tier abilities require purchasing the same feat repeatedly.</p><p><strong>Prerequisites</strong>. Feats can have prerequisites that you must meet when you select it. They can either require a minimum attribute score or they can sometimes require other feats.</p><p><strong>Description</strong>. This entry simply provides a general idea of what the feat could look like in the story.</p><p><strong>Effect</strong>. This entry indicates the mechanical effects of the feat on the rules of the game.</p></div><h2>Length: {{ featsCtrl.powers.length }}</h2><md-list-item id="{{ featsCtrl.Link.nameToUrlPath(item.name) }}" ng-repeat="item in featsCtrl.powers | filter:featsCtrl.textSearchFilter(item) | filter:featsCtrl.powerLevelFilter(item) | filter:featsCtrl.attackAttrSearchFilter(item) track by $index"><div class="md-list-item-text"><h2 class="md-display-1">{{item.name}}&nbsp;<md-button class="md-icon-button md-exclude" ui-sref="featsSingle({ name: featsCtrl.Link.nameToUrlPath(item.name) })" ui-sref-opts="{ reload: true }"><md-icon size="lg" aria-label="Link Icon" md-svg-icon="share"></md-icon><md-tooltip md-direction="bottom">View this Feat</md-tooltip></md-button><md-button ng-if="$mdMedia(\'gt-sm\')" class="md-icon-button md-exclude" ng-click="featsCtrl.Link.copyLinkToClip( [item], \'feats\')"><md-icon size="lg" aria-label="Link Icon" md-svg-icon="link-variant"></md-icon><md-tooltip md-direction="bottom">Copy Link</md-tooltip></md-button></h2><p><strong>Cost:</strong> {{ featsCtrl.getCost(item.cost) }}</p><strong>Prerequisites</strong><ul compile="featsCtrl.featPrereqOutput(item.prerequisites)"></ul><div ng-if="item.description"><strong>Description</strong><p class="description" ng-bind-html="item.description | unsafe"></p></div><div ng-if="item.effect"><strong>Effect</strong><p class="effect" ng-bind-html="item.effect | unsafe"></p></div><div ng-if="item.special"><strong>Special</strong><p ng-bind-html="item.special | unsafe"></p></div><br></div><md-divider ng-if="!$last"></md-divider></md-list-item></md-list><div flex="" class="dark-bg"><div md-theme="dark" ng-include="\'common/directives/mainwrap/footer.tpl.html\'"></div></div></div></md-content></main-wrap>')}])}}});