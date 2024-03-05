// ==UserScript==
// @name     _Twitch, ocultar enlace Discover Luna
// @author       xaby_xd
// @description  desc
// @source      https://github.com/xaby-xd/hide-discover-Luna-twitch
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitch.tv
// @version      2024-03-05
// @include  https://www.twitch.tv/*
// @grant    GM_addStyle
// ==/UserScript==

window.addEventListener("load", function () {
    waitForKeyElements(".top-nav__external-link[data-test-selector='top-nav__presto-link'][href='https://www.amazon.com/luna']", hideElement);
}, false);

function hideElement(jNode) {
    jNode.hide();
}
