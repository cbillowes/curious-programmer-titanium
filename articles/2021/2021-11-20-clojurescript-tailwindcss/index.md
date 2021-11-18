---
title: How can I use Tailwind CSS in my ClojureScript web app using the Clojure CLI tools?
date: 2021-11-17 05:00 +0400
photo: clojure.jpg
credit: Tom & Rich Hickey
creditLink: https://en.wikipedia.org/wiki/Clojure
creditSource: wikipedia
tags:
  - Technical
  - ClojureScript
  - Tailwind CSS
---

The goal of this guide is to integrate [Tailwind CSS][tailwindcss.com] into a ClojureScript web app using the Clojure CLI tools.
The assumption is that you are already familiar with Tailwind CSS and know how to
[create][create-cljs-project] a new ClojureScript project.

## Version of dependencies used in this guide

| Dependency      |  Version |
|-----------------|----------|
| ClojureScript   | 1.10.879 |
| Node            |  16.13.0 |
| npm/npx         |    8.1.3 |
| Webpack         |   5.64.1 |
| Webpack-cli     |    4.9.1 |
| Figwheel-Main   |   0.2.15 |
| 🟢 Tailwind CSS |   2.2.19 |
| 🟢 PostCSS      |   8.3.11 |
| 🟢 Autprefixer  |   10.4.0 |


## Get started

### Create a ClojureScript project

We are going to add to an existing ClojureScript project with npm.
[Learn][cljs-from-scratch] how to create one from scratch.

### Install Tailwind CSS

> Note that you need Node.js 12.13.0 or higher to proceed.

1. I followed the Tailwind CSS [installation guide][tailwindcss-install] as a PostCSS plugin.

1. I used the Tailwind CSS PostCSS plugin [guide][postcss-plugin-guide].

   ```bash
   npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
   ```

1. Create a bare bones PostCSS config file `postcss.config.js`.

   ```javascript
   module.exports = {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     }
   }
   ```

1. Initialize Tailwind CSS configuration. Generates `tailwind.config.js`. Learn more about [configuring][configure-tailwind].

   ```bash
   npx tailwindcss init
   ```

   ```javascript
   module.exports = {
     purge: [],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }
   ```

1. Update CSS in `resources/public/style.css` to include received

   ```css
   ```





















## Install React using Reagent

1. Add the following to your `:deps` key in `deps.edn`

   ```clojure
   ...
   ;; A minimalistic ClojureScript interface to React.js
   ;; https://github.com/reagent-project/reagent
   reagent/reagent           {:mvn/version "1.1.0"}   ;; React-based framework

   ;; Facilities for async programming and communication in Clojure
   ;; https://github.com/clojure/core.async
   org.clojure/core.async    {:mvn/version "1.4.627"}

   ;; Pure Clojure/Script logging library
   ;; https://github.com/ptaoussanis/timbre
   com.taoensso/timbre       {:mvn/version "5.1.2"}
   ...
   ```

1. We are now introduced to [CLJSJS][cljsjs] which we will use to install React.
   Packages can be found on the [CLJSJS packages][cljsjs-packages] repository on Github
   which is described as "Javascript libraries packaged up with Google Closure externs".

   Add the following to your `:deps` key in `deps.edn`

   ```clojure
   ;; A Javascript library for building user interfaces
   ;; http://facebook.github.io/react/
   cljsjs/react              {:mvn/version "17.0.2-0"}

   ;; A Javascript library for building user interfaces
   ;; http://facebook.github.io/react/
   cljsjs/react-dom          {:mvn/version "17.0.2-0"}
   ```

## Update core app component

```clojure
(ns ^:figwheel-hooks leads.app
  (:require [reagent.core :as r]))


(defn app-component []
  [:div
   [:h1 "Example App!"]
   [:h2 "Using hiccup, reagent and stuff!"]])


(defn mount [component]
  (r/render-component [component] (.getElementById js/document "app")))


(defn reload! []
  (mount app-component))


(defn app! []
  (mount app-component))

```

## Resources








[tailwindcss.com]: https://tailwindcss.com/
[tailwindcss-install]: https://tailwindcss.com/docs/installation#installing-tailwind-css-as-a-post-css-plugin
[create-cljs-project]: /blog/how-can-i-create-a-clojure-script-web-app-from-scratch/
[postcss-plugin-guide]: https://tailwindcss.com/docs/installation#installing-tailwind-css-as-a-post-css-plugin
[configure-tailwind]: https://tailwindcss.com/docs/configuration
[cljsjs]: http://cljsjs.github.io/
[cljsjs-packages]: https://github.com/cljsjs/packages


[cljs-from-scratch]: /blog/how-do-i-create-a-clojure-script-web-app-from-scratch-that-uses-npm/

---

https://figwheel.org/docs/classpaths.html
The Classpath as a search path

```bash
❯ clj -Spath |  sed -e 's/:/\'$'\n/g' | head
src
resources
target
tests
/Users/clarice/.m2/repository/cljsjs/react/17.0.2-0/react-17.0.2-0.jar
/Users/clarice/.m2/repository/cljsjs/react-dom/17.0.2-0/react-dom-17.0.2-0.jar
/Users/clarice/.m2/repository/com/bhauman/figwheel-main/0.2.15/figwheel-main-0.2.15.jar
/Users/clarice/.m2/repository/com/bhauman/rebel-readline-cljs/0.1.4/rebel-readline-cljs-0.1.4.jar
/Users/clarice/.m2/repository/com/taoensso/timbre/5.1.2/timbre-5.1.2.jar
/Users/clarice/.m2/repository/org/clojure/clojure/1.10.3/clojure-1.10.3.jar
```
