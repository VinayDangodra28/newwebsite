const fs = require('fs');
const files = [
  'work/kairo-studio.tsx',
  'work/meridian-atelier.tsx',
  'work/north-field-crm.tsx',
  'blog/automation/6-automations-every-service-business-needs.tsx',
  'blog/automation/how-i-automated-my-client-onboarding.tsx',
  'blog/automation/kill-the-spreadsheet.tsx',
  'blog/automation/make-vs-zapier-honest-comparison.tsx',
  'blog/design/color-that-converts.tsx',
  'blog/design/motion-is-a-sentence.tsx',
  'blog/design/swiss-grid-stops-being-a-cage.tsx',
  'blog/design/why-figma-autolayout-changed-everything.tsx',
  'blog/development/animating-svg-paths-with-intent.tsx',
  'blog/development/building-a-headless-cms-that-teams-actually-use.tsx',
  'blog/development/rebuilt-a-crm-in-11-days.tsx',
  'blog/development/why-i-switched-from-gatsby-to-nextjs.tsx',
  'blog/thinking/the-most-expensive-hour-in-any-project.tsx',
  'blog/thinking/websites-are-only-the-beginning.tsx',
  'blog/thinking/what-clients-really-mean-when-they-say-clean.tsx',
  'blog/thinking/why-one-person-can-out-build-an-agency.tsx'
];
files.forEach(f => {
  const path = 'src/routes/' + f;
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/from "\.\.\/\.\.\/\.\.\/components\/ui"/g, 'from "@/components/ui"');
  content = content.replace(/from "\.\.\/\.\.\/\.\.\/\.\.\/components\/ui"/g, 'from "@/components/ui"');
  fs.writeFileSync(path, content);
  console.log('Fixed:', f);
});