---
layout: 'layouts/post.njk'
title: '003: Do I need Polymer though?'
date: '2018-05-22'
---
Yeh yeh, I know I said I wanted to look at Shadow DOM in the [last post,](/journal/002-a-whistle-stop-tour/) but I’ve [been reading](https://hackernoon.com/web-components-the-react-way-8ed5b6f4f942?source=linkShare-dca915473cbb-1527021346) and the “vanilla” web components API looks it could possibly be quite straightforward, so I thought I’d jot down some thoughts.

### Keeping things light

I yearn to deliver the lightest possible payload to a browser and going “frameworkless” with JavaScript while using portable, reusable components feels like a dream.

There has to be a trade-off though, right? Efficient re-rendering and that almost magic feeing when a state-driven app _just_ updates itself are very useful things that frameworks give us. Maybe writing and reusing some tiny boilerplate code and base classes is the answer to almost recreating that. Maybe there’s functionality there that I’m yet to learn. It’s exciting not knowing, for sure. 

All this again seems relevant to the Shadow DOM, so I’ll stay on course now (I promise). I’m just going to consider wether Polymer as a whole is worth looking at before I get too deep. Maybe I just take parts like the [awesome router](https://github.com/Polymer/pwa-helpers/blob/master/router.js) that I keep going on about instead.
