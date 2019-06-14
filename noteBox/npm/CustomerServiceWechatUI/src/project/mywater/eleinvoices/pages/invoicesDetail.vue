<template>
 <div class="invoices-detail">
      <page-header>
      <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>返回</header-link>
      <header-title>发票详情</header-title>
    </page-header>
    <page-content>
    	<div class="header-pic">
    		<img :src="invoice" alt="" width="100%"/>
    	</div>
    	<p class="form-button"><m-button size="large" :round="true">保 存 到 本 地</m-button></p>
    </page-content>
  </div>
</template>

<script>
	export default{
		data(){
			return {
				invoice:require('@/project/assets/img/fapiao.png'),
			}
		}
	}
</script>

<style scoped lang="less">
.invoices-detail{
	p{
		width: 60%;
		margin: auto;
		margin-top: 1rem;
	}
}
</style>