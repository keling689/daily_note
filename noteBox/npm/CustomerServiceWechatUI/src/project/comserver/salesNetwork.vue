<template>
	<div class="sales-network">
      <page-header>
      <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>返回</header-link>
      <header-title>营业网点</header-title>
    </page-header>
    <page-content>
    	<div class="content-padded">
        <div class="row">
          <div class="col-100">
          	<form-list>
          		<form-item>
		          <div class="item-content">
		            <div class="item-title label">所属水司：</div>
		            <div class="item-input">
		              <select>
		                <option>梧州</option>
		                <option>儋州</option>
		              </select>
		            </div>
		          </div>
		          <!-- Date -->
		        </form-item>
          	</form-list>
          </div>
          <div class="col-100">
          	<el-amap
		        vid="amapDemo"  
		        :center="center"
		        :zoom="zoom"  
		        class="amap-demo">
		        </el-amap>
		        <el-amap-marker v-for="(marker,index) in markers" :position="marker.position" :events="marker.events" :key="index"></el-amap-marker>
        		<el-amap-info-window v-if="window" :position="window.position" :visible="window.visible" :content="window.content"></el-amap-info-window>
	    	  </div>
        </div>
     </div>
    </page-content>
  </div>
</template>

<script>
export default {
	data(){
		let self = this;
		return {
			zoom: 16,
      center: [121.59996, 31.197646],
      markers: [],
      windows: [],
      window: ''
		}
	},
	mounted() {
    let markers = [];
    let windows = [];

    let num = 10;
    let self = this;

    for (let i = 0 ; i < num ; i ++) {
      markers.push({
        position: [121.59996, 31.197646 + i * 0.001],
        events: {
          click() {
            self.windows.forEach(window => {
              window.visible = false;
            });

            self.window = self.windows[i];
            self.$nextTick(() => {
              self.window.visible = true;
            });
          }
        }
      });

      windows.push({
        position: [121.59996, 31.197646 + i * 0.001],
        content: `<div class="prompt">${ i }</div>`,
        visible: false
      });
    }

    this.markers = markers;
    this.windows = windows;
 },
	methods: {
    getMap() {
      // amap vue component
      console.log(amapManager._componentMap);
      // gaode map instance
      console.log(amapManager._map);
    }
  }
}
</script>

<style scoped lang="less">
.sales-network{
	.content-padded{
		margin:0;
		.list{
			margin: 0;
		}
		.amap-demo{
			margin-top: -0.5rem;
			/*height: calc(90vh+0.9rem);*/
			height: 90vh;
		}
		.prompt {
      background: white;
      width: 100px;
      height: 30px;
      text-align: center;
    }
	}
	
}
</style>