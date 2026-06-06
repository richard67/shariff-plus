# Changelog

## v3.1.0, 2026-06-06

- Add Bluesky service ([#33](https://github.com/richard67/shariff-plus/pull/33))
- Replace StumbleUpon service by Mix ([#34](https://github.com/richard67/shariff-plus/pull/34))
- Update dependencies and GitHub actions

## v3.0.0, 2026-01-02

- Port to vanilla Javacript, without jQuery or other dependencies ([#22](https://github.com/richard67/shariff-plus/pull/22))
- Minify CSS and JS, update dependencies & documentation, fix issues from PR [#22](https://github.com/richard67/shariff-plus/pull/22) ([#26](https://github.com/richard67/shariff-plus/pull/26))
- Add Fontawesome v6/v7 classes ([#27](https://github.com/richard67/shariff-plus/pull/27))
- Clean up package lock and update indirect development dependencies ([#28](https://github.com/richard67/shariff-plus/pull/28))
- Migrate styles from less to dart sass and update fontawesome to v7 ([#29](https://github.com/richard67/shariff-plus/pull/29))

## v2.3.2, 2025-04-18

Updated dependencies.

Fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Update twitter button ([heiseonline#441](https://github.com/heiseonline/shariff/pull/441)).

Fetched open pull requests from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Fix tests failing due to PhantomJS not starting ([heiseonline#444](https://github.com/heiseonline/shariff/pull/444)).

## v2.3.1, 2023-10-21

Remove Flattr service ([#23](https://github.com/richard67/shariff-plus/pull/23)).

## v2.3.0, 2023-10-19

Fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Remove AddThis service ([heiseonline#424](https://github.com/heiseonline/shariff/pull/424)).
- Add button for Mastodon/Fediverse ([heiseonline#405](https://github.com/heiseonline/shariff/pull/405)).
- Twitter: Updated max text length ([heiseonline#401](https://github.com/heiseonline/shariff/pull/401)).
- Feature: copy to clipboard ([heiseonline#389](https://github.com/heiseonline/shariff/pull/389)).
- Add support for shariff-share custom event ([heiseonline#266](https://github.com/heiseonline/shariff/pull/266)).
- Compatibility to WordPress Theme Twentyseventeen ([heiseonline#265](https://github.com/heiseonline/shariff/pull/265)).
- Update README.md to https ([heiseonline#432](https://github.com/heiseonline/shariff/pull/432)).
- Code style changes.
- Dependency updates.

Fetched open pull requests from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Fix missing services in demo, fix README files and add missing CSS for fediverse ([heiseonline#434](https://github.com/heiseonline/shariff/pull/434)).

## v2.2.3, 2021-06-13

Fixed npm package.

## v2.2.2, 2021-06-13

Fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Remove LinkedIn share count from backend.json ([heiseonline#365](https://github.com/heiseonline/shariff/pull/365)).

Fetched open pull requests from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Updated WhatsApp URL to WhatsApp Web ([heiseonline#381](https://github.com/heiseonline/shariff/pull/381)).
- Updated LinkedIn URL to 2020 Version ([heiseonline#382](https://github.com/heiseonline/shariff/pull/382)).
- Updated max. text length for Twitter ([heiseonline#401](https://github.com/heiseonline/shariff/pull/401)).

Other changes:

- Open WhatsApp link in new tab (see [heiseonline#381 (comment)](https://github.com/heiseonline/shariff/pull/381#issuecomment-761708915))
- Update iframe code for the Facebook Like button ([#21](https://github.com/richard67/shariff-plus/pull/21)).
- Updated dependencies.

## v2.2.1, 2019-05-27

Fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Added translations for French, Italian, Polish, Russian and Dutch to print service ([heiseonline#362](https://github.com/heiseonline/shariff/pull/362)).
- Updated dependencies.

## v2.2.0, 2019-04-01

- Add allow="encrypted-media" to iframe code of FB Like button in FacebookLike dialog ([#20](https://github.com/richard67/shariff-plus/pull/20)).

Fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Added buffer service ([heiseonline#361](https://github.com/heiseonline/shariff/pull/361)).
- Updated dependencies.
- Updated Font Awesome to version 5.8.1 ([heiseonline#360](https://github.com/heiseonline/shariff/pull/360)).
- Updated Xing share URL ([heiseonline#354](https://github.com/heiseonline/shariff/pull/354)).

## v2.1.1, 2019-01-29

Fixed deployment to npmjs.com.

## v2.1.0, 2019-01-29

Fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Improved build process ([heiseonline#326](https://github.com/heiseonline/shariff/pull/326)).
- Fixed creator being appended to title even though data-title has been set ([heiseonline#328](https://github.com/heiseonline/shariff/pull/328)).
- Replaced third party Java backend in readme ([heiseonline#332](https://github.com/heiseonline/shariff/pull/332)).
- Name is diaspora* and not Diaspora ([heiseonline#342](https://github.com/heiseonline/shariff/pull/342)).
- Fixed canonical URL handling ([heiseonline#345](https://github.com/heiseonline/shariff/pull/345)).
- Removed googleplus service ([heiseonline#348](https://github.com/heiseonline/shariff/pull/348)).
- Added Pocket service ([heiseonline#349](https://github.com/heiseonline/shariff/pull/349)).
- Fixed typo in README ([heiseonline#350](https://github.com/heiseonline/shariff/pull/350)).
- Upgraded dependencies.

Note that the Google+ service has been removed due to the shutdown of Google+.
See [https://developers.google.com/+/integrations-shutdown](https://developers.google.com/+/integrations-shutdown)
and [https://developers.google.com/+/web/+1button/](https://developers.google.com/+/web/+1button/):
> Google+ APIs will be shut down on March 7, 2019. This includes Google+ Sign-in. Learn more.
> Google+ integrations for web and mobile apps will also cease to function March 7, 2019. Learn more.
> This will be a progressive shutdown, with intermittent failures starting as early as January 28, 2019.

## v2.0.2, 2018-04-17

Fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Fix installation instructions.
- Fixed XSS vulnerability discovered by JoJoAction in twitter service ([heiseonline#319](https://github.com/heiseonline/shariff/pull/319)).
- Update package-lock.json to match dependencies.

## v2.0.1, 2018-03-15

Fixed demo/index.html

## v2.0.0, 2018-03-15

Fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Updated Font Awesome to version 5 (free 1.0.3) ([heiseonline#302](https://github.com/heiseonline/shariff/pull/302)).
- Added Flipboard service ([heiseonline#303](https://github.com/heiseonline/shariff/pull/303)).
- Fixed compatibility with Bootstrap 4 ([heiseonline#304](https://github.com/heiseonline/shariff/pull/304)).
- Fixed reddit icon ([heiseonline#305](https://github.com/heiseonline/shariff/pull/305)).
- Add new option data-button-style to enable small buttons ([heiseonline#309](https://github.com/heiseonline/shariff/pull/309)).
- Improved default service list documentation ([heiseonline#310](https://github.com/heiseonline/shariff/pull/310)).

## v1.0.9, 2018-02-23

Fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Fixed crashes occuring if HTML document is missing a valid `<title>` tag ([heiseonline#295](https://github.com/heiseonline/shariff/pull/295)).
- Improved translations and translation documentation ([heiseonline#296](https://github.com/heiseonline/shariff/pull/296)).
- Fixed typo in documentation ([heiseonline#299](https://github.com/heiseonline/shariff/pull/299)).

This version 1.0.9 of Shariff-Plus is equal to Shariff 2.1.3 plus the `facebooklike` service.

## v1.0.8, 2018-02-17

- Remove GooglePlus counter from demo and docs ([#16](https://github.com/richard67/shariff-plus/pull/16), see also [heiseonline#286](https://github.com/heiseonline/shariff/pull/286)).
- Show differences between Shariff-Plus and Shariff in documents ([#17](https://github.com/richard67/shariff-plus/pull/17)).
- Add facebooklike to the default services, change default info url to German version so it fits to the language default, and let default button for Facebook counter be the facebooklike button ([#18](https://github.com/richard67/shariff-plus/pull/18)).

Fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Added czech translations ([heiseonline#287](https://github.com/heiseonline/shariff/pull/287)).
- Remove node backend from readme ([heiseonline/shariff@96f45f2](https://github.com/heiseonline/shariff/commit/96f45f2df2dddec3fac3a9e9a240c60efe698df2)).
- Remove perl backend from readme ([heiseonline/shariff@7a8bc9a](https://github.com/heiseonline/shariff/commit/7a8bc9a7205f3f915d9356888b63a65c4a5eace2)).
- Fixed handling of `data-mail-subject` ([heiseonline#291](https://github.com/heiseonline/shariff/pull/291)).
- Improved distinguishability of reddit icon ([heiseonline#293](https://github.com/heiseonline/shariff/pull/293)).

This version 1.0.8 of Shariff-Plus is equal to Shariff 2.1.2 plus the `facebooklike` service plus the changes fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff) mentioned above, which will be included in the next Shariff release.

## v1.0.7, 2018-01-14

- Open telegram in a popup ([heiseonline/shariff@1555a72](https://github.com/heiseonline/shariff/commit/1555a72ced1a0362f203f0c2eb3fe8f071b76c14)).
- Add option data-facebooklike-css ([#14](https://github.com/richard67/shariff-plus/pull/14)).
- Add rel="nofollow" to all sharing buttons' links ([#15](https://github.com/richard67/shariff-plus/pull/15), see also [heiseonline#283](https://github.com/heiseonline/shariff/pull/283)).

This version 1.0.7 of Shariff-Plus is equal to Shariff 2.1.2 plus the `facebooklike` service.

## v1.0.6, 2018-01-03

- Use Serbian language for facebooklike "Close" button if Shariff-Plus language is Serbian ([#11](https://github.com/richard67/shariff-plus/pull/11)).
- Remove locale for Facebook "like" button ([#12](https://github.com/richard67/shariff-plus/pull/12)).
- Remove case insensivity from check of the data-info-display option ([#13](https://github.com/richard67/shariff-plus/pull/13)).
- Fetched from Shariff 2.1.0 and 2.1.1: Add VK and Telegram services ([heiseonline#279](https://github.com/heiseonline/shariff/pull/279)).

All other changes from Shariff 2.1.0 and 2.1.1 have been implemented in Shariff-Plus in a previous version.

So this version of Shariff-Plus is equal to Shariff 2.1.1 plus the `facebooklike` service.

## v1.0.5, 2017-12-27

- Correct counter display for facebooklike in case if facebook is not enabled ([#10](https://github.com/richard67/shariff-plus/pull/10)).

## v1.0.4, 2017-12-26

- Remove wrong data-info-url from parameters listing in 3rd example of demo ([#8](https://github.com/richard67/shariff-plus/pull/8)).
- Add new project homepage for Shariff-Plus to docs and package info and make this the default for the "data-info-url" parameter ([#9](https://github.com/richard67/shariff-plus/pull/9)).

## v1.0.3, 2017-12-24

Fixed npm deployment.

## v1.0.2, 2017-12-24

- Use getTitle() for facebooklike dialog heading ([#6](https://github.com/richard67/shariff-plus/pull/6)).
- Add npm deployment for shariff-plus ([#7](https://github.com/richard67/shariff-plus/pull/7)).

## v1.0.1, 2017-12-22

- Remove twitter backend from docs and demo ([heiseonline#276](https://github.com/heiseonline/shariff/pull/276)).
- Add facebooklike to demo ([#4](https://github.com/richard67/shariff-plus/pull/4)).
- Correct facebooklike size calculations ([#5](https://github.com/richard67/shariff-plus/pull/5)).
- Add links to the Shariff-Plus demo in documents.

## v1.0.0, 2017-12-21

- New option info display ([#2](https://github.com/richard67/shariff-plus/pull/2)).
- Add rel="noopener noreferrer" if target="_blank" ([#3](https://github.com/richard67/shariff-plus/pull/3)).
- Corrected base name for deployment.

## v1.0.0-rc, 2017-12-21

- Initial version based on Shariff v2.0.4 from 2017-11-03
