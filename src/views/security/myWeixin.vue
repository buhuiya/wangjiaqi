<template>
  <div>

    <div class="drawer">
      <div @click="open()">11111</div>
      <div class="setbox" :class="{show: isshow}">
        <div class="header">
          <p class="fl">标题</p>
          <button class="off" @click="close">关闭</button>
        </div>
      </div>
    </div>

    <div class="kuang">
    <el-row justify="end" type="flex" class="row-shang">
      <el-col :span="24">
        <!-- <el-card class="card"> -->
          <div class="div-shang">
            <div>
              <form id="notice-form">
                <input type="hidden" name="fromSource" value="1">
                <input type="hidden" id="deptId" name="deptId"> <input type="hidden" id="parentId" name="parentId">
                <div class="select-list">
                  <ul class="ul" style="list-style-type:none;float: left;" >
                    <li class="li">会员编号：
                      <input type="text" name="memberNumber" onkeyup="this.value=this.value.replace(/\D/g,'')">
                    </li>
                    <li class="li">openid:
                      <input type="text" name="minaOpenid">
                    </li>
                    <li class="li">管理员:
                      <select type="text" name="managerDeptId">
                          <option value="">请选择</option>
                          <option value="2">管理员</option>
                          <option value="1">普通会员</option>
                      </select>
                    </li>
                    <li class="li">余额:
                      <select type="text" name="balanceStatus">
                          <option value="">请选择</option>
                          <option value="1">&gt;0</option>
                          <option value="2">=0</option>
                          <option value="3">&lt;0</option>
                      </select>
                    </li >
                    <li class="li" style="float:left">
                      <a class="btn btn-primary btn-rounded btn-sm" onclick="$.table.search()">
                        <i class="fa fa-search">
                        </i>
                        &nbsp;搜索
                      </a>
                      <a class="btn btn-warning btn-rounded btn-sm" onclick="$.form.reset()">
                        <i class="fa fa-refresh">
                        </i>
                        &nbsp;重置
                      </a>
                    </li>
                  </ul>                
                </div>
              </form>
            </div>
          </div>
        <!-- </el-card> -->
      </el-col>
    </el-row>  
     
    <el-row justify="end" type="flex" class="row-xia" >
      <el-col :span="24">
        <!-- <el-card class="card"> -->
          <div class="div-xia table-striped select-table">
            <div class="bootstrap-table">
              <div class="fixed-table-toolbar">
                <div class="bs-bars pull-left">
                </div>
                <div class="columns columns-right btn-group pull-right">
                  <button class="btn btn-default btn-outline" type="button" name="showSearch" title="搜索">
                    <i class="glyphicon glyphicon-search">
                    </i>
                  </button>
                  <button class="btn btn-default btn-outline" type="button" name="refresh" title="刷新">
                    <i class="glyphicon glyphicon-refresh icon-refresh">

                    </i>
                  </button>
                  <button class="btn btn-default btn-outline" type="button" name="toggle" title="切换">
                    <i class="glyphicon glyphicon-list-alt icon-list-alt">

                    </i>
                  </button>
                  <div class="keep-open btn-group" title="列">
                    <button type="button" class="btn btn-default btn-outline dropdown-toggle" data-toggle="dropdown">
                      <i class="glyphicon glyphicon-th icon-th">

                      </i> 
                      <span class="caret">

                      </span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                      <li>
                        <label>
                          <input type="checkbox" data-field="id" value="1" checked="checked"> 
                          标识
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" data-field="minaOpenid" value="2" checked="checked">
                          openid
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" data-field="memberNumber" value="3" checked="checked">
                          会员编号
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" data-field="balance" value="4" checked="checked">
                          账户余额
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" data-field="managerDeptId" value="5" checked="checked">
                          是否管理员
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" data-field="createTime" value="6" checked="checked">
                          创建时间
                          
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" data-field="lastLoginTime" value="7" checked="checked">
                          最后登录时间
                        </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" data-field="unitName" value="8" checked="checked">
                            所属小程序
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" data-field="9" value="9" checked="checked">
                            操作
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="fixed-table-container" style="padding-bottom: 0px;">
                  <div class="fixed-table-header" style="display: none;">
                    <table>

                    </table>
                  </div>
                  <div class="fixed-table-body">
                    <div class="fixed-table-loading" style="top: 41px; display: none;">
                      正在努力地加载数据中，请稍候……
                    </div>
                    <table id="bootstrap-table" class="table table-hover">
                      <thead>
                        <tr>
                          <th class="bs-checkbox " style="width: 36px; " data-field="0" tabindex="0">
                            <div class="th-inner ">
                              <input name="btSelectAll" type="checkbox" style="width:2cm">
                            </div>
                            <div class="fht-cell">

                            </div>
                          </th>
                          <th style="" data-field="id" tabindex="0">
                            <div class="th-inner ">
                              标识
                            </div>
                            <div class="fht-cell">

                            </div>
                          </th>
                          <th style="" data-field="minaOpenid" tabindex="0">
                            <div class="th-inner ">
                              openid
                            </div>
                            <div class="fht-cell">

                            </div>
                          </th>
                          <th style="" data-field="memberNumber" tabindex="0">
                            <div class="th-inner ">
                              会员编号
                            </div>
                            <div class="fht-cell">

                            </div>
                          </th>
                          <th style="" data-field="balance" tabindex="0">
                            <div class="th-inner ">
                              账户余额
                            </div>
                            <div class="fht-cell">

                            </div>
                          </th>
                          <th style="" data-field="managerDeptId" tabindex="0">
                            <div class="th-inner ">
                              是否管理员
                            </div>
                            <div class="fht-cell">

                            </div>
                          </th>
                          <th style="" data-field="createTime" tabindex="0">
                            <div class="th-inner sortable both">
                              <div class="list-sort">
                                <div style="display: flex;align-items: center;">
                                  <div @click="onSort">创建时间</div>
                                  <div>
                                    <div :class="{'active':isSort==1}" class="iconfont icon-jiantou-shang1" style="margin:0"></div>
                                    <div :class="{'active':isSort==2}" class="iconfont icon-jiantou-xia1" style="margin:0;margin-top: -0.45cm;;margin-bottom: -0.1cm;"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="fht-cell">

                            </div>
                          </th>
                          <th style="" data-field="lastLoginTime" tabindex="0">
                            <div class="th-inner sortable both">
                              <div class="list-sort">
                                <div style="display: flex;align-items: center;">
                                  <div @click="onSort">最后登录时间</div>
                                  <div>
                                    <div :class="{'active':isSort==1}" class="iconfont icon-jiantou-shang1" style="margin:0"></div>
                                    <div :class="{'active':isSort==2}" class="iconfont icon-jiantou-xia1" style="margin:0;margin-top: -0.45cm;;margin-bottom: -0.1cm;"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="fht-cell">

                            </div>
                          </th>
                          <th style="" data-field="unitName" tabindex="0">
                            <div class="th-inner sortable both">
                              <div class="list-sort">
                                <div style="display: flex;align-items: center;">
                                  <div @click="onSort">所属小程序</div>
                                  <div>
                                    <div :class="{'active':isSort==1}" class="iconfont icon-jiantou-shang1" style="margin:0"></div>
                                    <div :class="{'active':isSort==2}" class="iconfont icon-jiantou-xia1" style="margin:0;margin-top: -0.45cm;;margin-bottom: -0.1cm;"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="fht-cell">

                            </div>
                          </th>
                          <th style="text-align: center; " data-field="9" tabindex="0">
                            <div class="th-inner ">
                              操作
                            </div>
                            <div class="fht-cell">

                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="no-records-found">
                          <td colspan="10">
                            没有找到匹配的记录
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="fixed-table-footer" style="display: none;">
                    <table>
                      <tbody>
                        <tr>

                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="fixed-table-pagination" style="display: none;">
                    <div class="pull-left pagination-detail">
                      <span class="pagination-info">
                        第 1 到 0 条，共  0 条记录。
                      </span>
                      <span class="page-list" style="display: none;">
                        <span class="btn-group dropup">
                          <button type="button" class="btn btn-default btn-outline dropdown-toggle" data-toggle="dropdown">
                            <span class="page-size">
                              10
                            </span>
                            <span class="caret">

                            </span>
                          </button>
                          <ul class="dropdown-menu" role="menu">
                            <li class="active">
                              <a href="javascript:void(0)">
                                10
                              </a>
                            </li>
                          </ul>
                        </span>
                        条记录每页
                      </span>
                    </div>
                    <div class="pull-right pagination" style="display: none;">
                      <ul class="pagination pagination-outline">
                        <li class="page-pre">
                          <a href="javascript:void(0)">
                            ›
                          </a>
                        </li>
                        <li class="page-number active">
                          <a href="javascript:void(0)">
                            1
                          </a>
                        </li>
                        <li class="page-next">
                          <a href="javascript:void(0)">
                            ›
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            <div class="clearfix">
            </div>
          </div>
        <!-- </el-card> -->
      </el-col>
    </el-row> 
    </div>
  </div>


</template>


<script>     

export default {
 
  name: "weixin",
  data(){
			return{
        msg:'weixin',
				list:[],
				isSort:0 ,//1为升序，2为降序


        
        isshow: false
			}
		},

  methods:{
    onSort(){ //排序
      if(this.isSort < 1){
        this.isSort = 1
        this.list.sort((a,b)=>{
          return a.actualPrice -b.actualPrice
        })
      }else if(this.isSort == 1){
        this.isSort = 2
        this.list.sort((a,b)=>{
          return b.actualPrice -a.actualPrice
        })
      }else if(this.isSort == 2){
        this.isSort = 1
        this.list.sort((a,b)=>{
          return a.actualPrice -b.actualPrice
        })
      }
    },



    close() {
      this.isshow = false
    },
    open(){
      this.isshow = true
    }
  }
}

</script>


<style>
@import url('//at.alicdn.com/t/c/font_4191402_0c7gj6zvyl5a.css');

.kuang{
  height: auto;
  width: 100%;
  position: relative;
}
.row-shang{
  height: 2.5cm;
  width: 100%;
  margin-bottom: 10px;
  flex-wrap: wrap
}
.row-xia{
  height: 15cm;
  width: 100%;
  flex-wrap: wrap
}
.card{
  height: 100%;
}
.div-shang {
  padding-right: 15px;
  padding-left: 15px;
  background: #fff;
  border-radius: 6px;
  margin-top: 10px;
  padding-top: 5px;
  padding-bottom: 13px;
  box-shadow: 1px 1px 3px rgba(0,0,0,.2);
  height: 100%;
  position: absolute;
  margin-bottom: 1px;
  width:expression(window.screen.width - (border 边框) - (scroll width 滚动条宽度) );
  float:left;
  height: 2cm;

  }
.select-list li input {
  border: 1px solid #ddd;
  border-radius: 4px;
  background: transparent;
  outline: none;
  height: 30px;
  width: 200px;
  padding-left: 5px;
}
.select-list{
  float: left;
  margin: 5px 15px 5px 0px;
    margin-top: 5px;
    margin-right: 15px;
    margin-bottom: 5px;
    margin-left: 0px;
  list-style: none;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  border-radius: 4px;
  background: transparent;
  outline: none;
  padding-left: 5px;
  list-style: none;
    list-style-position: initial;
    list-style-image: initial;
    list-style-type: none;
}
.div-xia {
  border-radius: 5px;
  width: 100%;
  height: 10cm;
  position: absolute;
  margin-top: 1px;
  width:expression(window.screen.width - (border 边框) - (scroll width 滚动条宽度) );
}
.ul{

  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.li{
  float:left;
  padding-right: 1em;
  white-space:pre-wrap;
  word-break : break-all;
  word-wrap: break-word;
  height: 1cm;
  color: #333;
  margin: 5px 15px 5px 0px;
}

input{
  border-radius: 4px;
  background: transparent;
  outline: none;
  height: 30px;
  width: 200px;
  padding-left: 5px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  font: inherit;
  color: inherit;
}
select{
  border: 1px solid #ddd;
  border-radius: 4px;
  background: transparent;
  outline: none;
  height: 30px;
  width: 200px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  text-transform: none;
  margin: 0;
  font: inherit;
  color: inherit;
}
.btn-rounded {
    border-radius: 50px;
}
.btn-primary {
    background-color: #1ab394;
    border-color: #1ab394;
    color: #FFFFFF;
    
}
.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
}
.btn-sm {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
}
.btn-warning {
    background-color: #f8ac59;
    border-color: #f8ac59;
    color: #FFFFFF;
}
a{
  text-decoration: none;
}
.fa{
  display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}

.table-striped {
    min-height: 75%;
}
.search-collapse, .select-table {
    width: 100%;
    background: #fff;
    border-radius: 6px;
    margin-top: 10px;
    padding-top: 5px;
    padding-bottom: 13px;
    box-shadow: 1px 1px 3px rgba(0,0,0,.2);
}
.table-striped .bootstrap-table {
    border: 0px!important;
}
.fixed-table-toolbar .bs-bars {
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 34px;
}
.pull-left {
    float: left!important;
}
.fixed-table-toolbar .columns {
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 34px;
}
.fixed-table-toolbar .columns-right {
    margin-left: 5px;
}
.pull-right {
    float: right!important;
}
.btn-group {
    display: inline-block;
    vertical-align: middle;
}

.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.btn-group>.btn:first-child {
    margin-left: 0;
}
 .btn-group>.btn {
    position: relative;
    float: left;
}
.btn-outline {
    color: inherit;
    background-color: transparent;
    transition: all .5s;
}
.btn-default {
    border-color: #c2c2c2;
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
}
button {
  font-family: inherit;
  -webkit-appearance: button;    
  text-transform: none;    
  overflow: visible;
  margin: 0;
  font: inherit;  
}
.glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
    border-radius: 0;
}

.btn-group .btn+.btn {
    margin-left: -1px;
}
.glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.fixed-table-toolbar .btn-group>.btn-group {
    display: inline-block;
    margin-left: -1px!important;
}
.btn-group>.btn-group {
    float: left;
}
.btn-group, .btn-group-vertical {
    position: relative;
    vertical-align: middle;
}
.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.fixed-table-toolbar .btn-group>.btn-group:last-child>.btn {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.caret {
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid\9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}
.pull-right .dropdown-menu {
    right: 0;
    left: auto;
}
.fixed-table-toolbar .dropdown-menu {
    text-align: left;
    max-height: 300px;
    overflow: auto;
}
.dropdown-menu {
    border: medium none;
    display: none;
    float: left;
    font-size: 12px;
    list-style: none outside none;
    padding: 0;
    position: absolute;
    text-shadow: none;
    top: 100%;
    z-index: 1000;
    border-radius: 0;
    box-shadow: 0 0 3px rgba(86, 96, 117, 0.3);
}
.dropdown-menu {
    min-width: 118px;
    margin: 2px 0 0;
    background-color: #fff;
    background-clip: padding-box;
}
.fixed-table-toolbar .columns label {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.428571429;
}
label {
    max-width: 100%;
    margin-bottom: 5px;
}
input[type=checkbox] {
    margin: 4px 0 0;
    line-height: normal;
}

input[type=checkbox] {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}
input {
    font-family: inherit;
    font-size: inherit;    
    font: inherit;
    color: inherit;
}
.fixed-table-container {
    border: 0px solid #ddd;
}
.fixed-table-container {
    position: relative;
    clear: both;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    width: 100%;
}
.fixed-table-header {
    overflow: hidden;
}
table {
    border-spacing: 0;
    border-collapse: collapse;    
    background-color: transparent;
    width: 100%;
}
.fixed-table-body {
    overflow-x: auto;
    overflow-y: auto;
    height: 100%;
}
.fixed-table-loading {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: #fff;
    text-align: center;
}
.bootstrap-table .table:not(.table-condensed){
    padding: 8px;
}
.bootstrap-table .table {
    margin-bottom: 0!important;
    border-bottom: 1px solid #ddd;
    border-collapse: collapse!important;
    border-radius: 1px;
}
.fixed-table-container table {
    width: 100%;
}
.table {
    max-width: 100%;
}
table {
    background-color: transparent;
}
table {
    border-spacing: 0;
}
.table-striped table thead {
    background-color: #eff3f8;
}
.table-striped .table>thead:first-child>tr:first-child>th {
    font-weight: normal;
    font-size: 13px;
}

.table-striped .table>thead>tr>th, .table-striped .table>tbody>tr>th {
    border-bottom: 1px solid #ccc!important;
    border-top: 0px!important;
}
.bootstrap-table .table thead>tr>th {
    padding: 0;
    margin: 0;
}
.bootstrap-table .table>thead>tr>th {
    vertical-align: bottom;
}
.fixed-table-container thead th:first-child {
    border-left: none;
    -webkit-border-top-left-radius: 4px;
    -moz-border-radius-topleft: 4px;
}
.fixed-table-container .bs-checkbox, .fixed-table-container .no-records-found {
    text-align: center;
}
.table-striped table>thead>tr>th, .table-striped table>tbody>tr>th, .table-striped table>tfoot>tr>th, .table-striped table>thead>tr>td, .table-striped table>tbody>tr>td, .table-striped table>tfoot>tr>td {
    background-color: transparent;
    border: 0px;
}
.table>thead>tr>th, .table>tbody>tr>th, .table>tfoot>tr>th, .table>thead>tr>td, .table>tbody>tr>td, .table>tfoot>tr>td {
    line-height: 1.42857;
}
.fixed-table-container thead th {
    height: 0;
}
.fixed-table-body thead th .th-inner, .table td, .table th {
    box-sizing: border-box;
}
.fixed-table-container .bs-checkbox .th-inner {
    padding: 2px 0;
}

.fixed-table-container tbody td .th-inner, .fixed-table-container thead th .th-inner {
    line-height: 24px;
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.fixed-table-body thead th .th-inner, .table td, .table th {
    box-sizing: border-box;
}
.fixed-table-container input[type=checkbox] {
    margin: 0 auto!important;
}
input[type=checkbox] {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;    
    line-height: normal;
}
input {
    font-family: inherit;
    font-size: inherit;    
    font: inherit;
    color: inherit;
}
.table-striped .table>thead:first-child>tr:first-child>th {
    font-weight: normal;
    font-size: 13px;
}
.table-striped .table>thead>tr>th {
    border-bottom: 1px solid #ccc!important;
    border-top: 0px!important;
}
.bootstrap-table .table thead>tr>th {
    padding: 0;
    margin: 0;
}
.bootstrap-table .table>thead>tr>th {
    vertical-align: bottom;
}
.table-striped table>thead>tr>th {
    background-color: transparent;
    border: 0px;
}
.table>thead>tr>th {
    line-height: 1.42857;
}
.fixed-table-container thead th {
    height: 0;
    margin: 0;
}
.table th {
    box-sizing: border-box;
}
th {
    text-align: left;
}
.fixed-table-container thead th .th-inner {
    padding: 8px;
    line-height: 24px;
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.fixed-table-body thead th .th-inner {
    box-sizing: border-box;
}
.fixed-table-container .bs-checkbox, .fixed-table-container .no-records-found {
    text-align: center;
}
.bootstrap-table .table:not(.table-condensed)>tbody>tr>td {
    padding: 8px;
}
.fixed-table-container tbody tr:first-child td {
    border-top: none;
}
.fixed-table-container tbody td:first-child {
    border-left: none;
}
.table-striped table>tbody>tr>td {
    border-bottom: 1px solid #e7eaec!important;
    background-color: transparent;
    border: 0px;
}
.table>tbody>tr>td {
    line-height: 1.42857;
    vertical-align: middle;
}
.fixed-table-body thead th .th-inner, .table td, .table th {
    box-sizing: border-box;
}
.fixed-table-footer {
    border-top: 0px solid #ddd;
}
.fixed-table-footer {
    overflow: hidden;
}
.fixed-table-container table {
    width: 100%;
}
table {
    background-color: transparent;
}
table {
    border-spacing: 0;
    border-collapse: collapse;
}
.fixed-table-pagination .pagination-detail {
    margin-top: 10px;
    margin-bottom: 10px;
}
.pull-left {
    float: left!important;
}
.fixed-table-pagination .pagination-info {
    line-height: 34px;
    margin-right: 5px;
}
.fixed-table-pagination .btn-group {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}
.dropup {
    position: relative;
}
.btn-group>.btn:first-child {
    margin-left: 0;
}

.btn-group>.btn {
    position: relative;
    float: left;
}
.btn-outline {
    color: inherit;
    background-color: transparent;
    transition: all .5s;
}
.btn-default {
    border-color: #c2c2c2;
}
.btn .caret {
    margin-left: 0;
}
.dropup .caret {
    content: "";
    border-top: 0;
    border-bottom: 4px dashed;
    border-bottom: 4px solid\9;
}
.caret {
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-top: 4px solid\9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}
.fixed-table-pagination .dropup .dropdown-menu {
    margin-bottom: 0;
}
.dropup .dropdown-menu{
    top: auto;
    bottom: 100%;
}
.dropdown-menu {
    border: medium none;
    display: none;
    float: left;
    font-size: 12px;
    left: 0;
    list-style: none outside none;
    padding: 0;
    position: absolute;
    text-shadow: none;
    z-index: 1000;
    border-radius: 0;
    box-shadow: 0 0 3px rgba(86, 96, 117, 0.3);
}
.dropdown-menu {
    min-width: 118px;
    margin: 2px 0 0;
    text-align: left;
    background-color: #fff;
    background-clip: padding-box;
}
.dropdown-menu>.active>a{
    color: #fff;
    text-decoration: none;
    background-color: #337ab7;
    outline: 0;
}
.dropdown-menu>li>a {
    border-radius: 3px;
    line-height: 25px;
    margin: 4px;
    text-align: left;
    font-weight: normal;
}
.dropdown-menu>li>a {
    display: block;
    padding: 3px 20px;
    clear: both;
    white-space: nowrap;
}
a {
    cursor: pointer;
}
.fixed-table-pagination div.pagination {
    margin-top: 10px;
    margin-bottom: 10px;
}
.pull-right {
    float: right!important;
}
.pagination {
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
}
.fixed-table-pagination div.pagination .pagination {
    margin: 0;
}
.pagination {
    display: inline-block;
    padding-left: 0;
    border-radius: 4px;
}
.pagination>li {
    display: inline;
}
.pagination>li:first-child>a {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.fixed-table-pagination .pagination a {
    padding: 6px 12px;
    line-height: 1.428571429;
}
.pagination>li>a {
    background-color: #FFFFFF;
    border: 1px solid #DDDDDD;
    color: inherit;
    float: left;
    position: relative;
    text-decoration: none;
}
.pagination>.active>a {
    background-color: #f4f4f4;
    border-color: #DDDDDD;
    color: inherit;
    cursor: default;
    z-index: 2;
}
.pagination>li:last-child>a {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
clearfix:before{
  display: table;
  content: " ";
}
:after,:before {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
clearfix:after{
  clear: both;
  display: table;
  content: " ";
}

	.iconfont{
		font-size: 8px;
		margin: 0 3px;
	}
	.active{
		color: red;
	}








  .drawer {
    height: 500px;
    width:100%;
    display:flex;
    display:-webkit-flex;
    flex-direction:column;  
    .setbox{
        position:fixed;
        z-index:1000;
        top:0px;
        bottom:0px;
        width:350px;
        height:100%;
        background:gray;
        border-left: 1px solid #CFD8DC!important;
        box-shadow:0px 3px 12px rgba(0,0,0,0.12);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        right:-460px;
        padding:0px 0px 0px 20px;
    }
    .show {
     right: 0;
    }
  }
</style>