# Outsider
Niche LinkedIn tools that no one asked for. Useful, but sprinkled with memes. Lots. Of. Memes.

// Below is the proposed API. The prototype classes are now ready to be used like this, however, code is available for view.

## Initalize

```javascript
const prototype = require('outsider')
const outsider = new prototype.outsider({authToken: <token>})
```


## Feature: ILYDB (I love you dude, but...)

Find out who you're connected with, but for one reason or another has decided to stop seeing your posts in their feeds.

```javascript

outsider.ilydb()

```

## Feature: 'Thinking Emoji'

Find out a breakdown of who and what posts are being displayed in your feed.

```javascript
outsider.hmmm()
```
