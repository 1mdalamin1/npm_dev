![vir-za](https://www.linkedin.com/in/1mdalamin1/)

# Facebook Like vir-za

This is a package to add a feature same like **facebook** [vir-za](https://www.facebook.com/search/top?q=vir-za)

## Installation

To install this package, first you need node js. Then You need to follow

```console

$ npm install  all-clock

```

## Use Case

```js
import { analogClock } from "all-clock";

console.log(analogClock);
```

# all-clock

All types of clocks are digital, analog, countdown, publishedTimeAgo etc.

## USAGE

```js
import { digitalClock, publishedTimeAgo, countdown } from 'all-clock'
// this also works:
// const { digitalClock, analogClock } = require('all-clock')
console.log(countdown("Dec 6, 2050 15:37:25"));
```

examples:
digitalClock('id_clock_display')
publishedTimeAgo(timestamp)
analogClock()
-addDate = "Dec 6, 2050 15:37:25" (example)
