# vue-dashes

A Vue component for creating dashes

### Install

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
  num-dashes="5"
  dash-height="6"
  dash-length="3"
  space-length="2"
/>
```

### Properties

| Name | Required | Type | Default | Description |
| --- | --- | --- | --- | --- |
| color | false | String | '#000' | color of the dashes |
| numDashes | false | Number | 10 | number of dashes |
| dashHeight | false | Number | 1 | the height of the dashes |
| dashLength | false | Number | 1 | the length of the dashes |
| spaceLength | false | Number | 1 | the length of the spaces between dashes |