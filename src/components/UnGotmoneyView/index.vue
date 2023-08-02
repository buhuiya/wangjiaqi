<template>
    <div class="col-sm-3">
							<div class="ibox float-e-margins">
								<div class="ibox-title">
									<span class="label warning-light pull-right">总共</span>
									<h5>未提取</h5>

									<div class="ibox-tools">
										<a class="collapse-link">
											<i class="fa fa-chevron-up"></i>
										</a>
										<a class="close-link">
											<i class="fa fa-times"></i>
										</a>
									</div>
								</div>
								<div class="ibox-content" style="display: block;">
									<h1 class="no-margins">0.00</h1>
									<div class="stat-percent font-bold text-danger"> <i class="fa fa-spoon"></i>
									</div>
									<small>未提取金额</small>
								</div>
							</div>
						</div>
  
  </template>
  
  <script>
  export default {
    name: "UngotmoneyView",
  
    data() {
      return {};
    },
  
    mounted() {},
  
    methods: {},
  };
  </script>
  
  <!-- <style lang="scss" scoped>
  .access-container {
    padding-top: 10px;
    height: 70px;
    width: 100%;
    .icon-container {
      float: left;
      height: 100%;
      padding-left: 20px;
  
      .icon-style {
        color: #40c9c6;
        font-size: 60px;
        font-weight: 900;
      }
    }
  
    .content-container {
      padding-right: 25px;
      float: right;
  
      .font {
        margin-top: 0;
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
        font-weight: 700;
      }
  
      .font-num {
        margin-top: 0;
        color: #666;
        font-size: 20px;
        font-weight: 800;
      }
    }
  }
  </style> -->
  