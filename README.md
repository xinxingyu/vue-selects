# vue-selects
<p>
    <img height="18" src="https://img.shields.io/badge/vue-v2.1.10-green.svg">
    <img height="18" src="https://img.shields.io/badge/npm-v0.0.1-blue.svg">
</p>

> grid component used for pc

## Show my face
<p>
	<img width="600px" src="https://github.com/xinxingyu/vue-selects/blob/master/static/img/select.jpg">
<p>

## Installation
``` bash
# install grid component
npm install vue-selects --save
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## DEMO

```javascript

<template>
  <div id="app">
  	<selects
  		:selects-list="selects.selectsList"
  		:default-obj="selects.defaultObj"
  		:on-choice="choice"
  		>
  	</selects>
  </div>
</template>

<script>
import selects from 'components/'
export default {
	components: {
		selects,
	},
	data () {
		return {
			selects2: {
				selectsList: [{
					text: 'whole',
					id: '0'
				},{
					text: 'selects1',
					id: '1'
				}],
				defaultObj: {
					text: 'selects4',
					id: '1'
				}
			}
		}
	},
	methods: {
		choice(item){
			console.log(item);
		}
	}
}
</script>
```

### API
* 属性说明

|属性|说明|类型|默认值|是否必传|
|---|----|---|-----|-------|
|selects-list|data list|Function|-|否|
|default-obj|default value, it will be showed|Object|-|否|
|on-choice|the callback function, when choice one item|Function|-|否|


### 版本升级
#### 0.0.1
* 基本功能实现
