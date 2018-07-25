---
layout: 'layouts/post.njk'
title: '006: PWA Checklist'
date: '2018-06-14'
tags: 'journal'
---
First up, what's a PWA? A PWA is a _Progressive Web App_. A PWA is essentially a website that behaves like a native app, in essence. I feel that definition will change when the aim of a PWA is no longer to imitate native iOS and Android apps though.

The main benefit of a PWA is that it's delivered on the open web, so we get to use technologies that exist already and that we're comfortable with. We also get the benefit of not having to deploy our app through App Stores, which is great for inclusivity. Lastly, on that point, we get to use URLs for routing, which is where the web has always trumped other options.

For me, web components and PWAs are almost synonymous with each other. In my mind, if I'm going to build any sort of app with web components, it'll be following some the standards of a PWA, even if that's just creating a cached and/or offline experience with [service workers](http://servi).

### But, there are rules

To qualify as a proper PWA, rules and standards still need to be followed. I imagine that this is mainly to maintain a level of quality in the ecosystem, which I'm personally all for. There's a handy [checklist by Google](https://developers.google.com/web/progressive-web-apps/checklist) that outlines the standard that your app needs to meet. In return, your app is installable on a user's device and on some platforms, will appear in app stores.

It's worth mentioning that there's a really useful tool for testing this stuff called [Lighthouse (Google)](https://developers.google.com/web/tools/lighthouse/), which is already baked into Chrome.

### A useful podcast

The main reason I'm jotting this all down is that I listened to a very handy [episode](https://syntax.fm/show/050/progressive-web-apps) of [Syntax](https://syntax.fm) by [Wes Bos](https://twitter.com/wesbos) and [Scott Tolinski](https://twitter.com/stolinski), where they go through that checklist and give more detail with their considerable joint expertise.

You should definitely [check it out](https://syntax.fm/show/050/progressive-web-apps) if like me, you're learning this sort of thing.
