# Captain Bond Static Website

This version does not need Node.js, npm, React, or Python.

## Run locally

Double-click `index.html`.

## Connect to Google Sheets

1. Create a new Google Sheet.
2. In the Sheet, go to **Extensions > Apps Script**.
3. Paste the code from `google-apps-script.js`.
4. Click **Deploy > New deployment**.
5. Select **Web app**.
6. Set **Execute as** to `Me`.
7. Set **Who has access** to `Anyone`.
8. Click **Deploy** and copy the Web App URL.
9. Open `script.js`.
10. Paste the URL here:

```js
const GOOGLE_SCRIPT_URL = "PASTE_YOUR_WEB_APP_URL_HERE";
```

11. Save the file and open `index.html` again.

Registrations are also saved in the browser's local storage as a fallback.

## Upload to GitHub Pages

Upload these files to your repository:

- `index.html`
- `style.css`
- `script.js`

Then enable GitHub Pages from **Settings > Pages**.
