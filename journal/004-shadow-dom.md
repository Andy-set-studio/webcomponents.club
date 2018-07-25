---
layout: 'layouts/post.njk'
title: '004: Shadow DOM'
date: '2018-05-30'
tags: 'journal'
---
The shadow DOM has always sounded like some sort of superhero to me. I've totally discounted it (wrongly) as a poorly supported bleeding-edge thing, but that's [certainly not the case](https://caniuse.com/#feat=shadowdomv1).

While looking around for resources, I found this [handy post](https://developers.google.com/web/fundamentals/web-components/shadowdom) by [Eric Bidelman](https://twitter.com/ebidel) on the Google Developers site/blog. Instead of regurgitating what I've read, you should go ahead and [read it](https://developers.google.com/web/fundamentals/web-components/shadowdom).

The way I see it, the shadow DOM is like an iframe* , but allows a bit more access in either direction. I know that's a pretty crude summary, but I think it's actually a reasonably accurate analogy.

### A quick example of what I've learned

I've made a real quick prototype that by default, will render a heading and a paragraph. If everything is supported, I change the colour of the paragraph and also render a button that's clickable.

It's a super simple prototype, but it contains:

*   Scoped styles
*   Global styles
*   Slots and "light DOM"
*   Progressive enhancement 
*   CSS Custom Properties

Check out the CodePen demo: [https://codepen.io/hankchizljaw/pen/ZREjYg/](https://codepen.io/hankchizljaw/pen/ZREjYg/).

### Thoughts about existing projects

I can't help but think how useful this will be for rendering components on [Astrum](http://astrum.nodividestudio.com), which I help maintain at my day job. I think that the shadow DOM and scoping can help with not just CSS, but also an Astrum component's _state_ which we are aiming to implement after a [core application rebuild](https://medium.com/no-divide/astrum-looking-forward-3e3973b08f62).

For now, I feel pretty good about this portion of learning. I think the next steps are that I need to make something meatier with web components because I learn best by doing, rather than reading.

Stay tuned.
