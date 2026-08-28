# Digitalbank landing page

My solution to the [Digital bank landing page](https://www.frontendmentor.io/challenges/digital-bank-landing-page-WaUhkoDN)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://digital-bank-landing-page.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/digital-bank-landing-page

## Built with

- Next.js 16, App Router, static export
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

**The body grey is darkened from `#9597A5` to `#6D6F80`.** It's one token doing a lot of
work here: every paragraph, the nav links, the article bylines and the excerpts. It fails
AA on all three surfaces it sits on, so one fix covers all of them. Same hue and
saturation, lightness from 62% to 47%, which is the smallest move that clears 4.5:1 on
the worst of the three.

**The button label stays below AA and that's deliberate.** White bold 14px on the brand
gradient is about 2:1. Getting to 4.5 would mean taking the gradient somewhere that isn't
Digitalbank green any more, and the whole page reads off that colour. The design wins,
and I'm recording it here instead.

**The hover accent splits into two tokens.** The design uses one green for hovered
article titles and hovered footer links. On the navy footer it's fine at 5.9:1; on a
white card it's 2.2:1. No single colour passes on both, because white needs the luminance
below 0.18 and the navy needs it above 0.33, so the card hover gets a darker green.

Focus rings are surface-aware for the same reason: one ring colour can't make 3:1 against
both white and the navy footer.

**Breakpoints are 640 / 768 / 1024 / 1280.** The design ships 375, 768 and 1440, and its
tablet frame still has the hamburger, so the desktop nav and the two-column hero wait for
1280 where the headline column fits beside the artwork. 640 and 1024 exist so the feature
and article grids aren't a stretched mobile layout at 700px or two very wide cards at
1100px.

Between 768 and 1279 the hero backdrop crops further as the viewport grows. The band is
fixed at the design's tablet height while the artwork scales to fill the width, and
there's no frame in that range to follow.

**Two article excerpts use the shorter wording from the design file.** The starter HTML
has longer strings that need a fifth line at the design's measure and push the cards 16px
taller.

Scroll reveals are transform-only and gated behind both `prefers-reduced-motion` and
`@supports (animation-timeline: view())`.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
