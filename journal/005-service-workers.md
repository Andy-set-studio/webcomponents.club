---
layout: 'layouts/post.njk'
title: '005: Service workers'
date: '2018-06-04'
---
Arguably a prerequisite for performant, front-end development, the humble service worker is quite incredible.

With only a few lines of JavaScript, you can create a system that will cache assets and provide your users with a blazing fast site as they browse. As a special bonus, you can provide cached assets by default which allows an "offline first" approach. This means that if a page is in the cache and a user visits while offline, they will get content. Add a fallback "offline.html" (or similar) page and you're granting your users a nice, branded offline experience.

### Required reading

I strongly recommend that you read [Going Offline](https://abookapart.com/products/going-offline) by [Jeremy Keith](https://twitter.com/adactio). Before his book, I found the concept of service workers quite daunting and convinced myself that it's one of those things that I'll have to set aside a big chunk of time to learn. I got through Jeremy's book in a few hours and felt confident and inspired. This is because he's very good at explaining concepts in a friendly, concise manner.

I can only hope that one day, I'm a tenth as good as he is at teaching.

### A crude example

I run an open source project called [Boilerform](https://github.com/hankchizljaw/boilerform) and its [website](https://boilerform.design/) is an ideal candidate to be a guinea pig for my service worker learning. If you go along now, you'll be able to see the service worker in action. It's really basic, but writing it has helped cement the core concepts in my head. You can check out [the code here](https://github.com/hankchizljaw/boilerform-website/blob/master/service-worker.js) if you want to learn for yourself.

The thought of rolling out an offline-first progressive web app with nothing but native, vanilla browser technologies is exciting, to say the least. I'm geared up to hopefully make that a reality in the near future with my continued learning of web components and the tools that compliment them, such as service workers.

**Update 05/05/2017:** [This recipe resource](https://serviceworke.rs/) from [Mozilla](http://mozilla.org) looks handy for helping to learn various service worker scenarios.
