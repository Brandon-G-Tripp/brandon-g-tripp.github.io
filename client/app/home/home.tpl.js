System.register(["angular"],function(_export){var angular;return{setters:[function(_angular){angular=_angular["default"]}],execute:function(){"use strict";angular.module("app/home/home.tpl.html",[]).run(["$templateCache",function($templateCache){$templateCache.put("app/home/home.tpl.html",'<main-wrap layout-orientation="none" layout="column" flex="" layout-fill=""><md-content class="no-bg" layout="column" flex="" layout-padding="lg"><div ng-if="homeCtrl.$mdMedia(\'lg\') || homeCtrl.$mdMedia(\'gt-lg\')" class="responsive-shim"><br></div><h2 class="banner-logo">Open Legend | Open-source Role-playing Game <img src="/assets/img/open_legend_lg_logo.png" alt="Open Legend Logo"></h2><div ng-if="homeCtrl.$mdMedia(\'lg\') || homeCtrl.$mdMedia(\'gt-lg\')" class="responsive-shim"><br><br><br><br><br><br><br></div><div flex=""><div flex="" layout="row" layout-wrap="" class="dark-bg" md-theme="dark"><md-content class="no-bg" flex="100" flex-gt-xs="66" layout-padding="sm"><h2 class="md-display-1">What is Open Legend?</h2><p><em>Open Legend</em> is a tabletop roleplaying game (or RPG) in which the players take the part of mighty heroes and wicked villains in order to tell stories of epic proportion. Every game of <em>Open Legend</em> revolves around intrepid characters performing heroic deeds. They will fight mythic beasts, break ancient curses, solve mind-boggling puzzles, discover untold treasures, and more.</p><p><em>Open Legend</em> was designed to let you tell big stories using small rules. It’s not that the system is shallow, but that it’s streamlined. The rules get complex when they need to, but never cumbersome, and wherever they could be cut out or simplified, they have been. Some of the highlights that get at the heart of <em>Open Legend</em> are explained below.</p><p><a href="/core-rules"><md-icon size="md" aria-label="Link Icon" md-svg-icon="share"></md-icon>Or dive right in with the core rules</a></p><h2 class="md-display-1">Tell Stories of Legend, Not Cliché</h2><strong>ONE TYPE OF ROLL, UNLIMITED CHARACTER POTENTIAL</strong><p>Unlike other RPGs, you\'re not forced to choose a specific class with a few minor customization options. Instead, you build your character from scratch (or get started with one of our quick builds). Your canvas is blank, so you get to select the abilities that match your vision and ignore the ones that don’t. And, unlike other classless systems, there’s no plethora of charts and tables to reference, just one type of roll for any action. <a href="/core-rules#h.apb0p5l7v84u"><md-icon size="md" aria-label="Link Icon" md-svg-icon="share"></md-icon>Find out more about character building</a></p><div class="fade-img" ng-if="homeCtrl.$mdMedia(\'xs\')"><a ng-href="/core-rules"><img src="/assets/img/open_legend_get_started.jpg" alt=""></a></div><h2 class="md-display-1">Smite Your Foes, Shield Your Friends</h2><strong>BANES & BOONS FOR EVERY CHARACTERS</strong><p><em>Open Legend</em> features a collection of banes and boons that any character can use as long as they are trained in the appropriate attributes. Banes allow you to stun your enemies, set them ablaze, or otherwise hinder them with devastating status effects. Boons are perks that you grant yourself or allies, such as magical healing, damage resistance, and flight. In <em>Open Legend</em>, no fighter is just a walking meat shield with a blade. He’s a trained combatant who can stun, blind, cripple, and hurl his foes across the battlefield. And when a sorceress summons an icy storm from the skies, she decides at the time of casting if she also wants it to slow, knockdown, or immobilize her enemies. <a href="/banes"><md-icon size="md" aria-label="Link Icon" md-svg-icon="share"></md-icon>See a list of banes</a></p><h2 class="md-display-1">Roll Dice, Roll Lots of Dice</h2><strong>AND WATCH THEM EXPLODE</strong><p>In <em>Open Legend</em>, dice explode! That means that whenever any die rolls maximum, you get to reroll it and add the new roll to your total, ad infinitum. We love to tell a good story, but rolling dice is just so much fun, we thought that occasionally, you should get to roll a lot of them. The volatile nature of exploding dice makes every roll count, and every session of <em>Open Legend</em> is full of tense moments when the tides can turn at a moment’s notice, for better or worse. <a href="/core-rules#h.bsxt6tn5jtf9"><md-icon size="md" aria-label="Link Icon" md-svg-icon="share"></md-icon>Learn more about the unified action roll system</a></p><div class="fade-img" ng-if="homeCtrl.$mdMedia(\'xs\')"><a href="https://app.roll20.net/lfg/listing/39654/open-legend-playtest-series-feb-24-2016"><img src="/assets/img/open_legend_try_the_system.jpg" alt=""></a></div><h2 class="md-display-1">Craft Your Setting, Create Your World</h2><strong>ANY GENRE, ENDLESS POSSIBILITIES</strong><p>The core rules are written to reflect a high fantasy, sword and sorcery setting, but <em>Open Legend</em> was purposefully designed to be open to any genre. The mechanics of the game focus on effects rather than flavor so that your gaming table can tell whatever kind of story it wants. Struggle for survival in a post-apocalyptic zombie wasteland. Soar amidst the clouds on your crystal-powered airship in a steampunk inspired campaign of swashbuckling sky pirates. Explore an alien-infested space station abandoned at the edge of the universe. The possibilities are endless.</p><div class="fade-img" ng-if="homeCtrl.$mdMedia(\'xs\')"><a href="https://trello.com/c/ePUp1RDS/35-an-open-development-process-for-an-open-source-project" target="_blank"><img src="/assets/img/open_legend_contribute.jpg" alt=""></a></div><h2 class="md-display-1">Share the Legend</h2><strong>OPEN SOURCE RULES</strong><p>That’s right. The core rules can be copied on internet forums, shared via PDF, etc. without fear of copyright infringement; they are released under a <a target="_blank" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution License (CC-BY)</a>. We know you’ll love the game as much as we do, and we hope you’ll spread the love by publishing your own adventures, rules supplements, and more.</p></md-content><md-content ng-if="homeCtrl.$mdMedia(\'gt-xs\')" class="no-bg" flex="33" layout-padding="sm"><div layout-padding="sm" layout-wrap=""><div class="fade-img"><a ng-href="/core-rules"><img src="/assets/img/open_legend_get_started.jpg" alt=""></a></div></div><div layout-padding="sm" layout-wrap=""><div class="fade-img"><a href="https://app.roll20.net/lfg/listing/39654/open-legend-playtest-series-feb-24-2016" target="_blank"><img src="/assets/img/open_legend_try_the_system.jpg" alt=""></a></div></div><div layout-padding="sm" layout-wrap=""><div class="fade-img"><a href="https://trello.com/c/ePUp1RDS/35-an-open-development-process-for-an-open-source-project" target="_blank"><img src="/assets/img/open_legend_contribute.jpg" alt=""></a></div></div><br><br><md-toolbar><div class="md-toolbar-tools"><h3 class="md-display-1">Upcoming Playtest Sessions</h3></div></md-toolbar><md-list class="overflow-normal link-list"><md-list-item class="md-long-text" layout="row"><md-button ng-href="https://app.roll20.net/lfg/listing/39654/open-legend-playtest-series-feb-24-2016" target="_blank"><h4>Feb 24 (Wed), 2016 - 8:30pm EST</h4><p>Weekday evening playtest session for East & West Coast</p></md-button></md-list-item></md-list></md-content><div class="no-bg" flex="100" ng-include="\'common/directives/mainwrap/footer.tpl.html\'"></div></div></div><br><br><br></md-content></main-wrap>')}])}}});