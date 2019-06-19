<template>
  <div class="my-page">
    <page-header>
      <header-title>微信公众号</header-title>
    </page-header>
    <page-content>
      <header class='demos-header'>
        <h1 class="demos-title">我的用水</h1>
      </header>
      <div class="grids grids-small">
        <router-link :to="{ path: 'home' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/page.png" alt="">
          </div>
          <p class="grid_label">
            vum界面
          </p>
        </router-link>
        <router-link :to="{ path: 'waterquery' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/button.png" alt="">
          </div>
          <p class="grid_label">
          水费查缴
          </p>
        </router-link>
        <router-link :to="{ path: 'eleinvoices' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/column.png" alt="">
          </div>
          <p class="grid_label">
            电子发票
          </p>
        </router-link>
        <router-link :to="{ path: 'businesshand' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/grid.png" alt="">
          </div>
          <p class="grid_label">
            业务办理
          </p>
        </router-link>
        <router-link :to="{ path: '/personalcenter' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/list.png" alt="">
          </div>
          <p class="grid_label">
            个人中心
          </p>
        </router-link>
        <router-link :to="{ path: '/bill' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/contacts.png" alt="">
          </div>
          <p class="grid_label">
            账单
          </p>
        </router-link>
      
      </div>
      <header class='demos-header'>
        <h1 class="demos-title">公共服务</h1>
      </header>
      <div class="grids grids-small">
        <router-link :to="{ path: 'salesNetwork' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/page.png" alt="">
          </div>
          <p class="grid_label">
            营业网点
          </p>
        </router-link>
        <router-link :to="{ path: 'waterPriceInfo' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/button.png" alt="">
          </div>
          <p class="grid_label">
            水价信息
          </p>
        </router-link>
        <router-link :to="{ path: 'qualityReport' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/column.png" alt="">
          </div>
          <p class="grid_label">
            水质报告
          </p>
        </router-link>
        <router-link :to="{ path: 'announcemen' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/grid.png" alt="">
          </div>
          <p class="grid_label">
            通知公告
          </p>
        </router-link>
        <router-link :to="{ path: '/gdhInfo' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/list.png" alt="">
          </div>
          <p class="grid_label">
          粤海资讯
          </p>
        </router-link>
      </div>
      <h2 class="demos-title">更多精彩</h2>
      <div class="grids grids-small">
        <router-link :to="{ path: 'complaintreport' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/modal.png" alt="">
          </div>
          <p class="grid_label">
            投诉举报
          </p>
        </router-link>
        <router-link :to="{ path: 'leakandrepairs' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/preloader.png" alt="">
          </div>
          <p class="grid_label">
            报修/报漏
          </p>
        </router-link>
        <router-link :to="{ path: 'intelservice' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/toast.png" alt="">
          </div>
          <p class="grid_label">
            智慧客服
          </p>
        </router-link>
        <router-link :to="{ path: 'thePipe' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/tab.png" alt="">
          </div>
          <p class="grid_label">
            水管家
          </p>
        </router-link>
    
      
      
      
       
       
      </div>
    </page-content>
  </div>
</template>
<script>
//import'../components/grid'
//import { Header, HeaderLink, HeaderTitle } from '../components/header'
//import Content from '../components/content'

export default {
//components: {
//  'page-header': Header,
//  HeaderLink,
//  HeaderTitle,
//  'page-content': Content,
////  Grid
//}
}
</script>
