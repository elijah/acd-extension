# AI Content Disclosure

A lightweight browser extension that visually labels page content based on disclosure metadata. It adds a dashed outline around elements marked with an `ai-disclosure` attribute and uses color coding to communicate whether the content is:

- `human-only`
- `ai-assisted`
- `ai-autonomous`

This helps surface AI involvement in a page without changing the underlying content structure.

## Features

- Injects a content script on every page
- Scans the DOM for elements with the `ai-disclosure` attribute
- Applies a CSS class based on the disclosure value
- Uses subtle visual cues for quick identification

## Installation

1. Open your browser's extensions page.
2. Enable Developer mode.
3. Click "Load unpacked".
4. Select this repository folder.

## Usage

Add the attribute to any element you want labeled:

```html
<div ai-disclosure="ai-assisted">This section was assisted by AI.</div>
<div ai-disclosure="human-only">This content was created by a human.</div>
<div ai-disclosure="ai-autonomous">This content was generated autonomously by AI.</div>
```

The extension will automatically apply the corresponding class and styling.

## Supported values

```text
human-only
ai-assisted
ai-autonomous
```

## Project structure

```text
acd-extension/
├── manifest.json
├── content.js
├── content.css
└── README.md
```

- `manifest.json`: extension configuration and content script registration
- `content.js`: scans the DOM and applies disclosure classes
- `content.css`: defines the visual outline styles for each disclosure state

## How it works

The extension registers a content script in `manifest.json` that runs when the page is idle. `content.js` queries for elements matching `[ai-disclosure]` and validates the attribute value. If the value is one of the supported states, it adds the appropriate class, and `content.css` applies the corresponding highlight.

## Example

```css
.acd-label.acd-human-only {
  outline: 1px dashed #6bc71f;
  outline-offset: 4px;
}

.acd-label.acd-ai-assisted {
  outline: 1px dashed #f9d000;
  outline-offset: 4px;
}

.acd-label.acd-ai-autonomous {
  outline: 1px dashed #ee4231;
  outline-offset: 4px;
}
```

## License

This project is intentionally minimal and dependency-free.
