<template>
  <div id="app">
  	<selects
  		:selects-list="selects.selectsList"
  		:default-obj="selects.defaultObj"
  		:on-choice="choice"
  		>
  	</selects>
  	<selects
  		:selects-list="selects2.selectsList"
  		:default-obj="selects2.defaultObj"
  		:on-choice="choice"
  		>
  	</selects>
  </div>
</template>

<script>
import selects from 'components/'
// import Grid from '../lib/components/'

export default {
	components: {
		selects,
	},
	data () {
		return {
			selects: {
				selectsList: [{
					text: 'whole',
					id: '0'
				},{
					text: 'selects1',
					id: '1'
				},{
					text: 'selects2',
					id: '2'
				},{
					text: 'selects3',
					id: '3'
				},{
					text: 'selects4',
					id: '4'
				}],
				defaultObj: {}
			},
			selects2: {
				selectsList: [{
					text: 'whole',
					id: '0'
				},{
					text: 'selects1',
					id: '1'
				},{
					text: 'selects2',
					id: '2'
				},{
					text: 'selects3',
					id: '3'
				},{
					text: 'selects4',
					id: '4'
				}],
				defaultObj: {
					text: 'selects4',
					id: '4'
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

<style lang="less">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 14px;
	box-sizing: border-box;
	.lable{
		display: inline-block;
		width: 100px;
	}
	.calendar{
		display: inline-block;
		width: 200px;
		margin-bottom: 20px;
	}
}
</style>
