// ==UserScript==
// @name     _Hide Discover Luna Link on Twitch
// @author       xaby_xd
// @description  Basic script to hide Luna
// @grant    GM_addStyle
// @source      https://github.com/xaby-xd/hide-discover-Luna-twitch
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitch.tv
// @version      2024-03-05
// @include  https://www.twitch.tv/*
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle('a.top-nav__external-link[data-test-selector="top-nav__presto-link"][href="https://www.amazon.com/luna"] { display: none !important; }');
})();