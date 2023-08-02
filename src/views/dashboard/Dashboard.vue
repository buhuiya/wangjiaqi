<template>
  <div class="dashboard-container">
    <!-- 头部视图 -->
    <top-view></top-view>
    <el-divider/>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>小王轮椅</span>
          </div>
          <div class="body" >
            <p>
              写点什么......
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>技术选型</span>
          </div>
          <el-collapse accordion>
            <el-collapse-item title="前端技术">
              <ol>
                <li>Vue</li>
                <li>Vuex</li>
                <li>Element-ui</li>
                <li>Axios</li>
                <li>Scss</li>
                <li>dayjs...</li>
              </ol>
            </el-collapse-item>
          </el-collapse>
          <el-collapse accordion>
            <el-collapse-item title="后端技术">
              <ol>
                <li>Spring Boot</li>
                <li>Mybatis-Plus</li>
                <li>Spring Security</li>
                <li>JWT</li>
                <li>Fastjson</li>
                <li>captcha...</li>
              </ol>
            </el-collapse-item>
          </el-collapse>
          <el-collapse accordion>
            <el-collapse-item title="开发环境">
              <ol>
                <li>JDK1.8</li>
                <li>MySQL8.0.13</li>
                <li>Maven3.3.9</li>
                <li>Redis3.2...</li>
              </ol>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          写点什么...........
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TopView from "./components/TopView.vue";

export default {
  name: "Dashboard",
  components: {TopView},
  data() {
    return {
      // 版本号
      version: "3.8.3",
    };
  },

  mounted() {
  },

  methods: {
    goTarget(href) {
      window.open(href, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  height: 100%;
  width: 100%;

  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }

  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}
</style>
