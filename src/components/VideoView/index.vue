<template>
  <div class="article-container">
    <div class="icon-container">
      <svg-icon icon="article-create" class="icon-style"></svg-icon>
    </div>
    <div class="content-container">
      <p class="font">视频流数量</p>
      <p class="font-num">{{total}}</p>
    </div>
  </div>
</template>

<script>
import {getAllStreams} from "@/api/videoStream";

export default {
  name: "VideoView",

  data() {
    return {
      total:0,
    };
  },

  mounted() {
    this.getAllStreams();
  },

  methods: {
    getAllStreams() {
      getAllStreams().then(res => {
        this.total = res.data.length;
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.article-container {
  padding-top: 10px;
  height: 70px;
  width: 100%;
  .icon-container {
    float: left;
    height: 100%;
    padding-left: 20px;

    .icon-style {
      color: #36a3f7;
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
</style>
