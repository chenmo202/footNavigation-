<style lang="scss" scoped>
.foot {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
}
.foot ul {
  background: #202021;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
}
.foot ul li {
  width: 100%;
  height: 50px;
  text-align: center;
  border-top: 1px solid #4d4d4d;
}
.foot ul li i {
  display: block;
  margin-top: 5px;
}
.foot ul li i img {
  width: 21px;
  height: 21px;
}
.foot ul li span {
  display: block;
  font-size: 12px;
  margin-top: -2px;
}
</style>

<template>
  <div class="foot">
    <ul>
      <li @click="tapTabs(item, key)" v-for="(item, key) in tabs" :key="key">
        <i>
          <img :src="count === key ? item.actionImg : item.icon" />
        </i>
        <span :style="{'color': count === key ? '#ffffff' : '#909090'}">{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      tabs: [
        {
          title: "首页",
          icon: require("../assets/images/home.png"),
          actionImg: require("../assets/images/home-active.png"),
          route: "/Home",
        },
        {
          title: "频道",
          icon: require("../assets/images/pindao.png"),
          actionImg: require("../assets/images/pindao-active.png"),
          route: "/Channel",
        },
        {
          title: "剧剧",
          icon: require("../assets/images/juju.png"),
          actionImg: require("../assets/images/juju-active.png"),
          route: "/Teleplay",
        },
        {
          title: "我的",
          icon: require("../assets/images/mine.png"),
          actionImg: require("../assets/images/mine-active.png"),
          route: "/Mine",
        },
      ],
    };
  },
  methods: {
    tapTabs(item, key) {
      if (key === this.count) return;
      this.count = key;
      this.$emit("taptabs", item);
    },
  },
};
</script>


