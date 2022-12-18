# Hepatitis B Analysis Interpretation Helper

You can see a live version here:
[hbaih.org](hbaih.org)

This app helps you to interpret your hepatitis B blood analysis before your appointment with the doctor.

It uses public sources of information, particularly the [hepbcommunity.org](https://www.hepbcommunity.org/t/explainer-lab-results-and-their-interpretation/27) website and other publically available sources.

## Disclaimer

<sub>I'm not a doctor.
The information, including but not limited to, text, graphics, images and other material contained on this repository and website are for informational purposes only. No material on this site is intended to be a substitute for professional medical advice, diagnosis or treatment. Always seek the advice of your physician or other qualified health care provider with any questions you may have regarding a medical condition or treatment and before undertaking a new health care regimen, and never disregard professional medical advice or delay in seeking it because of something you have read on this website or in the source code.</sub>

## Initial setup:

1. Install the node.js (tested with v18)
   https://nodejs.org/en/download/

2. Install the latest version of [pnpm package manager](https://pnpm.io/installation#using-npm)
   `npm install -g pnpm` or `brew install pnpm`

3. Install the dependencies
   `pnpm install`

## Running

`pnpm start`

## Production build

`pnpm build`

To run the preview server with the production build:

`pnpm preview`

## Testing

Live mode
`pnpm test`

Coverage check
`pnpm coverage`

Pre-commit checks
`pnpm pre-commit`
