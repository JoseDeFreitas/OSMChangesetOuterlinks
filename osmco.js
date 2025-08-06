// ==UserScript==
// @name        OSM Changeset Outerlinks
// @match       https://www.openstreetmap.org/changeset/*
// @version     1.0.0
// @description Userscript that creates two hyperlinks in changeset pages to more quickly open the changesets in osmcha and achavi.
// ==/UserScript==

const sidebarContent = document.getElementById('sidebar_content');

// Search for changeset ID

const changesetTitle = sidebarContent.querySelector('h2');
const titleContent = changesetTitle.textContent.trim();
const changesetID = titleContent.replace(/^Changeset:\s*/, '');

// Generate outerlinks

const outerlinksDiv = document.createElement('div');
outerlinksDiv.style.marginBottom = '-0.3em';

const osmchaLink = document.createElement('a');
osmchaLink.href = `https://osmcha.org/changesets/${changesetID}`;
osmchaLink.textContent = 'osmcha';
osmchaLink.style.fontSize = '0.6em';
osmchaLink.style.verticalAlign = 'top';
osmchaLink.style.marginRight = '0.4em';

const achaviLink = document.createElement('a');
achaviLink.href = `https://overpass-api.de/achavi/?changeset=${changesetID}`;
achaviLink.textContent = 'achavi';
achaviLink.style.fontSize = '0.6em';
achaviLink.style.verticalAlign = 'top';

outerlinksDiv.appendChild(osmchaLink);
outerlinksDiv.appendChild(achaviLink);

// Append outerlinks to OSM website

changesetTitle.appendChild(outerlinksDiv);
