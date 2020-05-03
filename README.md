# TechAachen Webseite

It is ~~going to be~~ the second Version of TechAachen's Webpage.

"l'preview" for every branch pushed to this Github repository is automatiocally build using *Github Actions* and published on https://preview.techaachen.de/.
Note: This feature does not work for forks of this repository.

Website structure:
- [x] Mainpage
  - [x] About us, Our Mission:
    - [ ] Ziele ergänzen.
    - [ ] Fenstergröße anpassen
  - [x] Projects
    - [x] Add Texts, Files and better images
    - [x] Add Kompetenztreffenpage
    - [x] finalize Kompetenztreffen
- [x] Contact
  - [x] Logo-position
  - [x] Hallo-size in smartphone view
  - [x] legal: vertical alignment
  - [x] Impressum
  - [x] Datenschutz
  - [x] Satzung

All those bulled-points represent a `*.md`-file in root with a corresponding layout, stored in `_layouts`, as so:

| Page            | Layouts-Name     | Info                           |
| :------------- | :-------------   | :-------------                 |
| index.html     | front.html       | Front-Page                     |
| about.md       | page.html        | About us and Mission           |
| *{project}*.html | page.html      | individual Projectpage         |
| contact.md     | contactpage.html | contactpage inherits page.html |
| impressum.md   | paperwork.html   | impressum                      |
| datenschutz.md | paperwork.html   | Datenschutzerklärung           |
| satzung.md     | paperwork.html   | Satzung TechAachen             |

Unimportant Layout-ToDos:
- [ ] Paperwork add Download as PDF-Button
- [ ] Paperwork make goback-button floating
- [ ] Struktur die von default.html erben soll erstellen.
- [x] Add pictures

The front-page contains mostly subpages, created from card in `_includes`.
Other includes are:
- [x] card
- [x] navbar
  - [x] implementation of dynamic navbar
  - [x] error in tabled view
- [x] socialmedia
  - [x] smaller version suitable for Footer
  - [x] removed from includes
- [x] members (images and links to all members)
  - [x] ugly workaround
- [x] mitgliederversammlung
  - [x] on contact
- [x] deleted paperwork.html
- [x] persons (board members etc.)
  - [x] needs to become cards and replaced on aboutus
  - [ ] sizing
- [x] Header
  - [x] general design
  - [ ] responsive design not working really good
  - [ ] scroll down button or smaller background image
- [x] persons um Mittmachen Feld ergänzen
- [x] Footer
  - [x] responsivnes
  - [x] Logo
  - [x] remove bulled-points
  - [x] alignment
  - [x] border-top
  - [x] socialmedia buttons

Variables accessible all over the website are stored in `config.yml`

Data like members, project on front etc. are stored in `_data`.
