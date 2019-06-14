<template>
	<div class="complaint-report">
	<page-header>
      <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>返回</header-link>
      <header-title>投诉举报</header-title>
    </page-header>
    <page-content>
    	<div class="header-pic">
    		<img :src="header" alt="" width="30%"/>
    	</div>
    	<tab :active="0">
        <tab-item title="投诉举报">
	       <form-list>
	       	  <form-item>
	          <div class="item-media">
	            <img src="../assets/images/form/i-form-gender.png" alt="" width="30" />
	          </div>
	          <div class="item-content">
	            <div class="item-title label">所属</div>
	            <div class="item-input">
	              <select>
	                <option>梧州</option>
	                <option>常平</option>
	              </select>
	            </div>
	          </div>
	          <!-- Date -->
	        </form-item>
	        <form-item>
	          <div class="item-media">
	            <img src="../assets/images/form/i-form-name.png" alt="" width="30" />
	          </div>
	          <div class="item-content">
	            <div class="item-title label">投诉人</div>
	            <div class="item-input">
	              <input type="text" placeholder="投诉人">
	            </div>
	          </div>
	        </form-item>
	          <form-item>
	          <div class="item-media">
	            <img src="../assets/images/form/i-form-name.png" alt="" width="30" />
	          </div>
	          <div class="item-content">
	            <div class="item-title label">联系方式</div>
	            <div class="item-input">
	              <input type="text" placeholder="联系方式">
	            </div>
	          </div>
	        </form-item>
	           	  <form-item>
	          <div class="item-media">
	            <img src="../assets/images/form/i-form-gender.png" alt="" width="30" />
	          </div>
	          <div class="item-content">
	            <div class="item-title label">投诉类型</div>
	            <div class="item-input">
	              <select>
	                <option>供水</option>
	                <option>收费</option>
	              </select>
	            </div>
	          </div>
	          <!-- Date -->
	        </form-item>
	    
	 
	        <form-item>
	          <div class="item-media">
	            <img src="../assets/images/form/i-form-comment.png" alt="" width="30" />
	          </div>
	          <div class="item-content">
	            <div class="item-title label">投诉类容</div>
	            <div class="item-input">
	              <textarea></textarea>
	            </div>
	          </div>
	        </form-item>
	         <form-item>
	          <div class="item-media">
	            <img src="../assets/images/form/i-form-toggle.png" alt="" width="30" />
	          </div>
	          <div class="item-content">
	            <div class="item-title label">拍照图片</div>
	            <div class="item-input">
	             <img src="../assets/img/icon-02.png" alt="" width="40"/>
	            </div>
	          </div>
	        </form-item>
	      </form-list>
      <div class="content-block content-padded">
        <div class="row">
          <div class="col-50"><m-button type="danger" size="large">重置</m-button></div>
          <div class="col-50"><m-button size="large">提交</m-button></div>
        </div>
      </div>
        </tab-item>
        <tab-item title="我的投诉">
           <table border="0" width="100%">
			  <tr>
			    <th>申报时间</th>
			    <th>投诉内容</th>
			    <th>状态</th>
			  </tr>
			  <tr>
			    <td>10月9号</td>
			    <td>供水</td>
			    <td>提交</td>
			  </tr>
			</table>
        </tab-item>
      </tab>
    </page-content>
  </div>
</template>

<script>
export default {
	data(){
		return {
			header:require('@/project/assets/img/header.png'),
		}
	},
	  methods: {
	    onShow () {
	    }
	  }
}
</script>

<style scoped lang="less">
.complaint-report{
		.header-pic{
			padding: 5px 5px 0 5px;
		
			}
			.list{
				margin: 0;
				.list-title{
					padding: 0;
				}
			}
			table{
				th{
					background: #51A5E8;
					color: #fff;
					padding: .2rem;
				}
				td{
					text-align: center;
					border-bottom: 1px solid #00B4C2;
					padding: .2rem;
				}
			}
			.form-list .item-content img{
				position: absolute;
				top: .2rem;
				left: 50%;
			}
		}
</style>