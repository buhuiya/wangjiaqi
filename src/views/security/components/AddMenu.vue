<template>
  <div>
    <el-dialog
        title="添加菜单"
        width="700px"
        :visible.sync="visible">
      <el-form ref="form" :model="menu" label-width="100px">
        <el-form-item label="菜单名称">
          <el-input v-model="menu.name"/>
        </el-form-item>
        <el-form-item label="菜单路径名">
          <el-input v-model="menu.path" aria-placeholder="英文"/>
        </el-form-item>
        <el-form-item label="菜单前缀">
          <div class="block">
            <el-cascader :props="params" clearable v-model="menuPrefix" :options="options" @change="handleChange"/>
          </div>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
    <el-button @click="closeAddMenu">取 消</el-button>
    <el-button type="primary" @click="add">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>

import {addMenu} from "@/api/security";

export default {
  name: "AddMenu",
  data() {
    return {
      visible: false,
      menuPrefix: '',
      menu: {
        url: '',
        path: '',//前端访问路径
        component: '',
        name: '',
        requireAuth: '',
        parentId: '',
      },
      options: [],
      params: {
        checkStrictly: false,
        expandTrigger: 'hover',
        value: "path",
        label: "name",
        children: "children",
      }
    };
  },
  methods: {
    handleChange() {
      this.options.forEach(i => {
        if (this.menuPrefix[0] === i.path) {
          this.menu.parentId = i.id;
        }
      })
    },
    closeAddMenu() {
      this.visible = false
    },
    add() {
      if (this.menuPrefix[0] !== '/') {
        this.menu.path = this.menuPrefix[0] + '/' + this.menu.path;
        this.menu.url = this.menuPrefix[0] + '/' + this.menu.path + '/**';
        this.menu.component = this.menu.path;
      } else this.menu.component = 'Main';
      this.menu.requireAuth = 1;
      addMenu(this.menu).then(res => {
        console.log(res.data);
        this.closeAddMenu();
      })
    }
  },
}
</script>

<style scoped>

</style>
