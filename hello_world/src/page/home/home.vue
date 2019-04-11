<template>
  <div>
    <div>zheshishouye</div>
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple">43242342</div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light">4332424</div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple">24342342424</div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light">3242424</div>
      </el-col>
    </el-row>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <homeHeader/>
    <homeContent :list="list"/>
    <homeFooter/>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
import homeHeader from "./components/homeHeader";
import homeContent from "./components/homeContent";
import homeFooter from "./components/homeFooter";
import axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
  name: "home",
  data() {
    return {
      list: []
    };
  },
  components: {
    homeHeader,
    homeContent,
    homeFooter
  },
  created() {
    axios({
      method: "POST",
      url: "/news/index"
    }).then(res => {
      this.list = res.data.articles;
    });
  },
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapMutations(["increment", "decrement"])
  }
};
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
