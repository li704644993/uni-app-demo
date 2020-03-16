<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">还款</block>
		</cu-custom>
		<uni-card title="请求使用阿凡达免费接口,每天仅可使用20次" note="Tips">
			<template>
				<view class="padding flex flex-direction">
					<button class="cu-btn bg-grey lg" @click="next">下一页</button>
					<button class="cu-btn block bg-blue margin-tb-sm lg" @click="success">
						<text class="cuIcon-loading2 cuIconfont-spin"></text>
						成功请求
					</button>
					<button class="cu-btn bg-red lg" @click="fail">失败请求404（拦截器）</button>
				</view>
			</template>
		</uni-card>
	</view>
</template>

<script>
import url from '@/http/url.js';
export default {
	data() {
		return {
			href: 'https://uniapp.dcloud.io/collocation/pages?id=easycom'
		};
	},
	methods: {
		next() {
			this.$Router.push({ name: 'second' });
		},
		async success() {
			// this.$Router.push({name:'second'});
			const result = await this.$http.post(url.queryWeather, {
				key:"64f535cc2eea4197abaacbb8370b5acb",
				cityname:"西安",
			});
			if (result.data.reason === 'Succes') {
				uni.showToast({
					title: 'succsss',
					duration: 2000
				});
			} else {
				uni.showToast({
					title: 'fail',
					duration: 2000,
					icon: 'none'
				});
			}
		},
		async fail() {
			const result = await this.$http.post(url.queryWeather, {
				key:"",
				cityname:"西安",
			});
			if (result.data.reason === 'Succes') {
				uni.showToast({
					title: 'succsss',
					duration: 2000
				});
			}
		}
	}
};
</script>

<style>
.container {
	margin-top: 40rpx;
}
.intro {
	font-size: 14px;
	line-height: 24px;
}
</style>
