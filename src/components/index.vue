<template>
	<div class="selects-container" :class="{'selects-active': show}" >
		<template v-if="type=='read'">
			<a href="javascript:void(0)" class="selects-choice-disabled">
				<span class="choice-chosen">{{chosen.text}}</span>
				<span class="choice-arrow"><b :class="show ? arrowType.triangleUp : arrowType.triangleDown"></b></span>
			</a>
		</template>
		<template v-else>
			<a href="javascript:void(0)" class="selects-choice" @click="openDropDown">
				<span class="choice-chosen">{{chosen.text}}</span>
				<span class="choice-arrow"><b :class="show ? arrowType.triangleUp : arrowType.triangleDown"></b></span>
			</a>
		</template>
		<div class="selects-dropdown" v-show="show">
			<ul>
				<li v-for="item in selectsList" :class='{yourchosen: item.id == chosen.id}' @click="choiceOne(item)">{{item.text}}</li>
			</ul>
		</div>
		<div class="overlay" @click="hideDrop" v-show="show"></div>
	</div>
</template>

<script>
export default {
	props: {
		selectsList: Array,
		/**
		 * include edit and read kinds
		 */
		type: {
			type: String,
			default: 'edit'
		},
		defaultObj: {
			type: Object
		},
		onChoice: Function
	},
	data(){
		return {
			arrowType: {
				triangleUp: 'triangle-up',
				triangleDown: 'triangle-down'
			},
			show: false,
			chosen: {}
		}
	},
	watch: {
		defaultObj(value){
			this.initDefault()
		}
	},
	created(){
		this.initDefault()
	},
	methods: {
		/**
		 * init default data
		 */
		initDefault(){
			var _this = this

			if(this.defaultObj && this.defaultObj.hasOwnProperty('id')){
				this.chosen = this.defaultObj
				this.onChoice && this.onChoice(this.chosen)
			}
		},
		/**
		 * open drop down list
		 */
		openDropDown(){
			this.show = !this.show
		},
		/**
		 * hide drop down list
		 */
		hideDrop(){
			this.show = false
		},
		blur(){
			let _this = this

			setTimeout(() => {
				if(_this.show){
					_this.show = false
				}
			}, 100)
		},
		/**
		 * choice what you want
		 */
		choiceOne(item){
			this.chosen = item
			this.hideDrop()
			this.onChoice && this.onChoice(item)
		}
	}
}
</script>

<style lang="less" scoped>
.selects-container{
	font-size: 13px;
	min-width: 120px;
	ze: 12px;
	text-indent: 0;
	position: relative;
	display: inline-block;
	vertical-align: middle;
	box-sizing: border-box;
	cursor: pointer;
	ul, li{
		padding: 0;
	}
	a{
		color: #5bc0de;
		transition: all .3s;
		-moz-transition: all .3s;
		-webkit-transition: all .3s;
		-o-transition: all .3s;
	}
	.overlay{
		position: fixed;
		height: 100%;
		width: 100%;
		background: transparent;
		z-index: 200;
		left: 0;
		top: 0;
	}
	.selects-choice, .selects-choice-disabled{
	    background-color: #fcfcfc;
		display: block;
		height: 36px;
		line-height: 36px;
		padding: 0 0 0 10px;
		overflow: hidden;
		position: relative;
		border: 1px solid #e2e3e5;
		text-decoration: none;
		background-clip: padding-box;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		.choice-chosen{
			margin-right: 30px;
			display: block;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.choice-arrow{
			display: inline-block;
		    width: 34px;
		    height: 100%;
		    position: absolute;
		    right: 0;
		    top: 0;
			b{
				display: block;
				margin: 13px 0 0 9px;
			}
		}
	}
	.selects-choice-disabled{
	    color: #a59c9c;
	    background: #e2e3e5;
	}
	.selects-dropdown{
	    box-sizing: border-box;
		background-color: #fcfcfc;
		border: 1px solid #e2e3e5;
		position: absolute;
		top: 100%;
		left: 0;
		z-index: 9999;
		width: 100%;
		min-width: 120px;
	    max-height: 200px;
		overflow-x: hidden;
		overflow-y: auto;
		ul{
			li{
				list-style-type:none;
				padding: 11px 7px;
				cursor: pointer;
				user-select: none;
				line-height: 100%;
			}
			.yourchosen{
				color: #5bc0de;
			}
			li:hover{
				color: #5bc0de;
				background: rgba(237, 238, 241, .5)
			}
		}
	}

	&.selects-active{
		.selects-choice{
			border: 1px solid #5bc0de;
		}
	}
	.triangle-up{
		width: 0;
		height: 0;
		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		border-bottom: 10px solid #5bc0de;
	}
	.triangle-down{
		width: 0;
		height: 0;
		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		border-top: 10px solid #e5e5e5;
	}
}
</style>
