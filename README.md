# TechAachen Webpage v2

It is going to be the second Version of TechAachen's Webpage.

Webside structure:
- [ ] Mainpage
  - [ ] About us, Our Mission
  - [ ] Projects
    - [ ] Add Texts, Files and better images
- [ ] Contact
  - [ ] Logo-position
  - [ ] Hallo-size in smartphone view
  - [ ] legal: vertical alignment
  - [x] Impressum
  - [x] Datenschutz
  - [x] Satzung

All those bulled-points represent a `*.md`-file in root with a corresponding layout, stored in `_layouts`, as so:

| Page           | Layouts-Name     | Info                           |
| :------------- | :-------------   | :-------------                 |
| index.html     | front.html       | Front-Page                     |
| about.md       | page.html        | About us and Mission           |
| [project].html | page.html        | individual Projectpage         |
| contact.md     | contactpage.html | contactpage inherits page.html |
| impressum.md   | paperwork.html   | impressum                      |
| datenschutz.md | paperwork.html   | Datenschutzerklärung           |
| satzung.md     | paperwork.html   | Satzung TechAachen             |

Layout-ToDos:
- [ ] Paperwork add Download as PDF-Button
- [ ] Paperwork make goback-button floating
- [ ] Struktur die von default.html erben soll erstellen.

The front-page contains mostly subpages, created from card in `_includes`.
Other includes are:
- [ ] navbar
  - [ ] implementation of dynamic navbar
  - [ ] error in tabled view
- [x] socialmedia
  - [x] smaller version suitable for Footer
  - [x] removed from includes
- [ ] members (images and links to all members)
  - [x] ugly workaround
- [x] mitgliederversammlung
  - [x] on contact
- [x] deleted paperwork.html
- [ ] persons (board members etc.)
  - [ ] needs to become cards and replaced on aboutus
- [ ] Header
- [x] Footer
  - [x] Logo
  - [x] remove bulled-points
  - [x] alignment
  - [x] border-top
  - [x] socialmedia buttons

Variables accessable all over the webside are stored in `config.yml`

Data like members, project on front etc. are stored in `_data`.


***



## Creative Theme for Jekyll

A Jekyll implementation of the [Creative Theme](http://startbootstrap.com/template-overviews/creative/) template by [Start Bootstrap](http://startbootstrap.com).

Creative is a one page Bootstrap theme for creatives, small businesses, and other multipurpose uses.
The theme includes a number of rich features and plugins that you can use as a great boilerplate for your next Jekyll project!

See it live in action at <https://volny.github.io/creative-theme-jekyll/>

### To use the Creative Theme template in your project

- Start by adding your info in `_config.yml`
- In `_layouts/front.html` reorder or remove section as you prefer.
