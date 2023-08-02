<template>
  <div class="topView-container">
    <el-row :gutter="25">
      <el-col :span="6">
        <el-card shadow="hover">
          <access-view></access-view>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover"><article-view></article-view></el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover"><leave-view></leave-view></el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover"><user-view></user-view></el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UngotmoneyView from "@/components/UngotmoneyView/index";
import RentincomeView from "@/components/RentincomeView/index";
import DepositView from "@/components/DepositView/index";
import GotmoneyView from "@/components/GotmoneyView/index"

export default {
  name: "TopView",
  components: { UngotmoneyView, RentincomeView, DepositView, GotmoneyView},
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.topView-container{
  padding-bottom: 2%;
  background-color: #ecf0f1;
  color: grey;
}
</style>
