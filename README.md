# VisaHub Worldwide Website

A free-hosting-ready static website built with HTML, CSS and JavaScript.

## Files

- `index.html` — main website
- `styles.css` — design and responsive layout
- `script.js` — mobile menu, country selection and WhatsApp enquiry
- `privacy.html` — sample privacy policy
- `terms.html` — sample terms
- `disclaimer.html` — visa / government affiliation disclaimer

## 1. Add your WhatsApp number

Open `script.js`.

Find:

```js
const WHATSAPP_NUMBER = "";
```

Add your number in international format without `+`, spaces or dashes.

Example:

```js
const WHATSAPP_NUMBER = "919876543210";
```

## 2. Add your business details

Open `index.html` and replace:

- `your-email@example.com`
- `+00 00000 00000`
- `Add your city / business address`

Also review the Privacy Policy, Terms and Disclaimer.

## 3. Test website on your computer

Double-click `index.html`.

The website will open in your browser.

## 4. Upload to GitHub

1. Create a free GitHub account.
2. Create a new public repository, e.g. `visahub-worldwide`.
3. Upload all files from this folder.
4. Commit the files.

## 5. Publish free on Cloudflare Pages

1. Create a free Cloudflare account.
2. Open **Workers & Pages**.
3. Create a Pages project.
4. Connect your GitHub account.
5. Select your `visahub-worldwide` repository.
6. For this plain HTML/CSS/JS site:
   - Framework preset: None
   - Build command: leave blank
   - Build output directory: `/` or repository root as Cloudflare allows
7. Deploy.

Cloudflare will give you a free address similar to:

`visahub-worldwide.pages.dev`

## 6. Future updates

Whenever you want to change text, phone, services, countries or design:

1. Edit the file in GitHub or on your computer.
2. Commit/push the updated file.
3. Cloudflare Pages will automatically deploy the new version if Git integration is enabled.

## Important legal note

This website includes cautious wording, but you should still confirm all legal, licence, advertising and immigration-consultancy requirements that apply to your business and target countries before offering paid advice or representation.
