# Solid Rock Montessori School website

A responsive static website for Solid Rock Montessori School in Kissi, Komenda-Edina-Eguafo-Abirem (KEEA) District, Central Region, Ghana. Built with plain HTML, CSS and vanilla JavaScript; there is no build step or framework.

## Run locally

- Open `index.html` directly in a modern browser, or
- Start a static server from this folder, for example `python -m http.server 8000`, then open `http://localhost:8000`.

## Site files

```text
index.html
about.html
academics.html
campus-life.html
gallery.html
admissions.html
blog.html
portal.html
contact.html
css/style.css
js/main.js
assets/
design-system.md
content-gaps.md
```

All pages share the navigation, footer, responsive design tokens and interactions in `css/style.css` and `js/main.js`.

## School images

The header and footer use the Solid Rock crest in `assets/logo.jpeg`. The school motto is “On Christ the Solid Rock we stand.” The address supplied by the school is Cemetery Road, South Africa, Kissi, Ghana.

Confirm permission to publish the school photographs and logo before launch. Keep below-the-fold images lazy-loaded; the home hero and lead image are loaded eagerly.

## Add a photo to the gallery

Gallery entries are managed in the single `schoolPhotos` array in `js/main.js`. Add an object with a title, one of the visible category names, a path or URL, and descriptive alt text:

```js
{
  title: "Children working with practical-life materials",
  category: "Montessori Learning",
  image: "assets/classroom-work.webp",
  altText: "Children practising a classroom activity with hands-on materials"
}
```

Place local web-optimised images in `assets/` and use one of the available categories: `Classroom`, `Montessori Learning`, or `Community`. The gallery provides category filters and a lightbox with captions, previous/next controls and keyboard navigation.

## Forms and portal setup

- Admission, contact and footer forms validate in the browser. Until configured, they show that delivery is not configured and do not claim a message was sent.
- Replace `FORM_ENDPOINT` in `js/main.js` with the school's approved form service endpoint. Do not remove the placeholder-state check unless the replacement has been tested.
- Newsletter signup uses its separate `NEWSLETTER_ENDPOINT` placeholder. Replace it with the mailing-list provider's approved endpoint.
- The parent and student links open the Smart School system's own sign-in pages; no credentials are collected on this website. The portal links are centralized in the `PORTAL_URLS` object at the top of `js/main.js`.
- Host the website over HTTPS. If the management system moves to a custom domain later (for example, `portal.myschool.com`), update the URLs in `PORTAL_URLS` only.
- Before launch, test the links with one real parent account and one real student account.

## Before launch

Review [content-gaps.md](content-gaps.md) and replace every remaining placeholder with school-approved details. Confirm the location pin, headteacher message, programme information, fees, dates, images and all service endpoints.
