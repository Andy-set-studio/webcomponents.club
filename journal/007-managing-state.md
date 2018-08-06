---
layout: 'layouts/post.njk'
title: '007: Managing state'
date: '2018-08-06'
tags: 'journal'
---

One of the first things that was a concern for me with web components was state management, or rather, a lack-of it. Managing state in a trivial manner is something I've become almost reliant on with the React and Vue work that I do and the thought of going back to DOM based state management was not even an option.

I'd been mulling around with some ideas, but I noted down that Redux works in a vanilla stack well, so I'd _just_ go with that.

After some more thought though, I tweeted this:

> I’ve been thinking about super lightweight JS things recently and I think a < 100(ish) line state system is doable. 
>
> Obviously no where near as powerful as Redux, MobX or Vuex, but handy for smaller projects.  
>
> I’m going to have a play and maybe write some stuff about it.
>
> — <cite><em>[@hankchizljaw](https://twitter.com/hankchizljaw) on [Twitter](https://twitter.com/hankchizljaw/status/1001219361003237376)</em></cite>



I took that thinking further and [created a prototype](https://codepen.io/hankchizljaw/project/editor/a7eeabf2783faf9dfb447c8652721b2f), which I sent to [Chris Coyier](https://twitter.com/chriscoyier) from [CSS-Tricks](https://css-tricks.com) to see if he would publish a new tutorial about how to write a state management system from scratch. [That got published](https://css-tricks.com/build-a-state-management-system-with-vanilla-javascript/) and went down really well with folks. This, along with this system's successful use on [mybrowser.fyi](https://mybrowser.fyi), which was my first proper project with web components *(I'll make some notes on that in another article)*, made me think that others could benefit from a more "plug and play" version, so I made [Beedle](https://github.com/hankchizljaw/beedle). 



### Making an open source library

I'm not overly strong with open source stuff, so I was nervous. The approach I took was to put together some really quick prototypes that would need state management and then refactor the existing system from [mybrowser.fyi](https://mybrowser.fyi) until it became self sufficient and useful for those prototypes.

I then documented the library up, wrote some tests and [put it all out there](https://www.npmjs.com/package/beedle). Hopefully it'll help some folks out — not just vanilla JavaScript fans, but also folks using React and Vue et. al.



### Long-term concerns

I've enjoyed working with [ES6 Modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), so creating and subsequently relying on an [npm package](https://www.npmjs.com/package/beedle) is a concern now. There might well be a way to get the best of both worlds that I'm not aware of yet. It's something to add to the *very* long list of things to learn about. I'm also not averse to working with a [lightweight bundler](https://github.com/hankchizljaw/beedle/blob/master/bundler.js), like I made for [Beedle](https://github.com/hankchizljaw/beedle).



I am happy that I can managed state with a dependecy that's less than 1kb when compressed 🙂