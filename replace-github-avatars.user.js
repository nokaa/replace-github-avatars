// Copyright (C)  2016 nokaa <nokaa@cock.li>
// This software is licensed under the terms of the
// GNU General Public License version 3. You should have
// received a copy of this license with this software.
// The license may also be found at https://gnu.org/licenses/gpl.txt

// ==UserScript==
// @name        replace-github-avatars
// @version     1.0.0
// @namespace   replace-github-avatars
// @description Replaces all users' avatars on Github with yours.
// @license     GPLv3, https://gnu.org/licenses/gpl.txt
// @include     https://github.com/*
// @include     http://github.com/*
// @grant       none
// @updateURL   https://raw.githubusercontent.com/nokaa/replace-github-avatars/master/replace-github-avatars.user.js
// @downloadURL https://raw.githubusercontent.com/nokaa/replace-github-avatars/master/replace-github-avatars.user.js
// ==/UserScript==

var a = document.getElementsByClassName("timeline-comment-avatar");
var b = document.getElementsByClassName("avatar");

let avatar_src = b[0].src;

for (var i = (a.length - 1); i >= 0; i--) {
    a[i].src = avatar_src;
}

for (var i = (b.length - 1); i >= 0; i--) {
    b[i].src = avatar_src;
}
