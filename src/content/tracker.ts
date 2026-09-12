// ---------------------------------------------------------------------------
// LIVE TRAIL TRACKER
//
// Paste the tracker embed snippet Wesley supplies between the backticks below.
// It can be an <iframe>, a <script> tag, or any block of HTML. The component
// that renders it (src/components/tracker-embed.tsx) injects the markup and
// re-runs any <script> tags, so third-party trackers work as expected.
//
// Leave it empty and the site shows a friendly "coming soon" panel instead.
//
// Example:
//
// export const trackerEmbedHtml = `
//   <iframe
//     src="https://example.com/tracker"
//     style="width:100%;height:70vh;border:0"
//     loading="lazy"
//     title="Live trail tracker"
//   ></iframe>
// `;
// ---------------------------------------------------------------------------

export const trackerEmbedHtml = `
  <div id="corsa-embed">
    Loading map...
  </div>
  <script
    src="https://d2ugbf2pkr6nwe.cloudfront.net/corsa-bundle-2.js"
    data-corsa-public-id="2a535858-b0cf-40c3-9acf-93a650ab5983"
    data-mount="#corsa-embed"
    async
  ></script>
`;
