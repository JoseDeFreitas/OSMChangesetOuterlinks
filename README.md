# OSM Changeset Outerlinks

> Userscript for the OpenStreetMap website that creates two hyperlink elements in changeset pages that redirect to the corresponding changeset osmcha and achavi pages.

To use it, simply download the `osmco.js` file and add it to your preferred userscript manager extension. You can also copy all the code and paste it directly into a blank userscript.

I created this simple userscript so I could open osmcha and achavi changeset analisers more easily. Since the OpenStreetMap website is a Single Page Application (meaning it routes without fully reloading the whole document), the links do not appear right away: **you need to reload the changeset page one time for the hyperlinks to appear**. Maybe in the future I detect document changes so they can appear on first load, but for now it is sufficient for me.

If there are other analisers you want me to add, you can [open an issue](https://github.com/JoseDeFreitas/OSMChangesetOuterlinks/issues/new) or add them by yourself by forking the repo and submitting a pull request.

This is how it looks:

<img width="437" height="266" alt="Example" src="https://github.com/user-attachments/assets/21eeccfc-4fb3-4b09-90b7-12b7396cd1e7" />

## Changelog

- 2025-08-06: Release v1.0.0.
