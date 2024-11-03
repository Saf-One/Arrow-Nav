// ==UserScript==
// @name         Arrow Nav
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Navigate between pages using arrow keys (universal)
// @author       Your Name
// @match        *://*/*page=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const urlPattern = /.*\/page=(\d+)/;

    const currentPageMatch = window.location.href.match(urlPattern);
    const currentPage = currentPageMatch ? parseInt(currentPageMatch[1]) : 1;

    const pageIncrement = 1;

    function updatePageNumber(newPage) {
        const newUrl = window.location.href.replace(urlPattern, `.../page=${newPage}/...`);
        window.location.href = newUrl;
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            updatePageNumber(currentPage + pageIncrement);
        } else if (event.key === 'ArrowLeft') {
            updatePageNumber(currentPage - pageIncrement);
        }
    });
})();
