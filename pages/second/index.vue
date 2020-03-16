<template>
	<view class="container">
		<uni-card title="uni-ui" note="Tips">
			<template>
				<view>
					<text class="intro">第二个页面</text>
				</view>
				<view>
					<uni-link :href="href" :text="href"></uni-link>
					<button class="cu-btn bg-grey lg" @click="go3">返回</button>
				</view>
			</template>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/collocation/pages?id=easycom'
			}
		},
		methods: {
			go3(){
				this.$Router.back(1);
			}
		}
	}
</script>

<style>
	.intro {
		font-size: 14px;
		line-height: 24px;
	}
</style>
