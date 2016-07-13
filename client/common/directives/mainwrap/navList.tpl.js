System.register(["angular"],function(_export){var angular;return{setters:[function(_angular){angular=_angular["default"]}],execute:function(){"use strict";angular.module("common/directives/mainwrap/navList.tpl.html",[]).run(["$templateCache",function($templateCache){$templateCache.put("common/directives/mainwrap/navList.tpl.html",'<md-list class="button-list"><md-item layout="row"><md-button ng-href="/home"><span><md-icon size="lg" md-svg-icon="home" alt="Home Icon"></md-icon>&nbsp;Home</span></md-button></md-item><md-item layout="row"><md-button target="_blank" ng-href="http://community.openlegendrpg.com"><span><md-icon size="lg" md-svg-icon="account-multiple" alt="Community Icon"></md-icon>&nbsp;Community</span></md-button></md-item><md-item layout="row"><md-button target="_blank" ng-href="http://eepurl.com/b7W-Kz"><span><md-icon size="lg" md-svg-icon="email" alt="Email Icon"></md-icon>&nbsp;Mailing List</span></md-button></md-item><md-item layout="row"><md-button target="_blank" ng-href="http://blog.openlegendrpg.com"><span><md-icon size="lg" md-svg-icon="pencil" alt="Blog Icon"></md-icon>&nbsp;Blog</span></md-button></md-item><md-item layout="row"><md-button ng-click="chapterListExpanded = !chapterListExpanded"><span><md-icon size="lg" md-svg-icon="book-open-variant" alt="Expand Table of Contents"></md-icon>&nbsp;&nbsp;Core Rules</span><md-icon class="subnav-toggle" ng-class="{\'expanded\': (chapterListExpanded)}" size="lg" md-svg-icon="menu-down" alt="Expand Table of Contents"></md-icon></md-button></md-item><md-list class="button-list sliding-list" ng-class="{\'expanded\': (chapterListExpanded)}"><md-item layout="row"><md-button ng-href="/core-rules/00-introduction"><span>&nbsp;&nbsp;&nbsp;&nbsp;Introduction</span></md-button></md-item><md-item layout="row"><md-button ng-href="/core-rules/01-character-creation"><span>&nbsp;&nbsp;&nbsp;&nbsp;1: Character Creation</span></md-button></md-item><md-item layout="row"><md-button ng-href="/core-rules/02-actions-attributes"><span>&nbsp;&nbsp;&nbsp;&nbsp;2: Actions &amp; Attributes</span></md-button></md-item><md-item layout="row"><md-button ng-href="/core-rules/03-feats"><span>&nbsp;&nbsp;&nbsp;&nbsp;3: Feats</span></md-button></md-item><md-item layout="row"><md-button ng-href="/core-rules/04-wealth-equipment"><span>&nbsp;&nbsp;&nbsp;&nbsp;4: Wealth &amp; Equipment</span></md-button></md-item><md-item layout="row"><md-button ng-href="/core-rules/05-banes-boons"><span>&nbsp;&nbsp;&nbsp;&nbsp;5: Banes &amp; Boons</span></md-button></md-item><md-item layout="row"><md-button ng-href="/core-rules/06-combat"><span>&nbsp;&nbsp;&nbsp;&nbsp;6: Combat</span></md-button></md-item><md-item layout="row"><md-button ng-href="/core-rules/07-running-the-game"><span>&nbsp;&nbsp;&nbsp;&nbsp;7: Running the Game</span></md-button></md-item></md-list><md-item layout="row"><md-button ng-href="/banes"><span><md-icon size="lg" md-svg-icon="lightning" alt="Bane Icon"></md-icon>&nbsp;&nbsp;Banes</span></md-button></md-item><md-item layout="row"><md-button ng-href="/boons"><span><md-icon size="lg" md-svg-icon="account-level-up" alt="Boon Icon"></md-icon>&nbsp;&nbsp;Boons</span></md-button></md-item><md-item layout="row"><md-button ng-href="/feats"><span><md-icon size="lg" md-svg-icon="trending-up" alt="Feats Icon"></md-icon>&nbsp;&nbsp;Feats</span></md-button></md-item></md-list>')}])}}});