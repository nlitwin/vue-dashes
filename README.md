<h1 align="center">vue-dashes</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-dashes"><img src="https://img.shields.io/npm/v/vue-dashes.svg" /></a>
  <img src="https://circleci.com/gh/nlitwin/vue-dashes/tree/master.svg?style=svg" />
  <a href="https://coveralls.io/github/nlitwin/vue-dashes"><img src="https://coveralls.io/repos/github/nlitwin/vue-dashes/badge.svg" alt="Coverage Status" /></a>
</p>


<p align="center">A Vue component for creating dashes of different sizes using SVG.</p>

![image](https://user-images.githubusercontent.com/5829188/62751319-1709a400-ba18-11e9-9207-8b5cd33a3b7f.png)

### Installation

```bash
npm install --save vue-dashes
```

### How to use

Include the plugin in your `main.js` file.

```javascript
import VueDashes from 'vue-dashes'

Vue.use(VueDashes)
```

Then use the component

```html
<vue-dashes
  color="papayawhip"
  :num-dashes="5"
  :dash-height="6"
  :dash-length="3"
  :space-length="2"
/>
```

### Properties

| Name | Required | Type | Default | Description |
| --- | --- | --- | --- | --- |
| color | false | String | '#000' | hex code or HTML color name of the dashes |
| numDashes | false | Number | 10 | number of dashes |
| dashHeight | false | Number | 1 | the height of the dashes |
| dashLength | false | Number | 1 | the length of the dashes |
| spaceLength | false | Number | 1 | the length of the spaces between dashes |

### Contributing

Pull requests are welcomed and encouraged!

To develop locally:

```bash
npm start
```

Make sure linting passes and unit tests are added or updated before submitting your pull request:

```bash
npm run lint
```

```bash
npm run test:watch
```
