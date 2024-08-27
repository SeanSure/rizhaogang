<template>
  <div class="container"
       @contextmenu.prevent>
    <div class="viewer">
      <div class="btn">
        <button @click.stop="changeScene">切换场景</button>
        <button @click.stop="showArea">区域</button>
        <button v-if="!hasLabel"
                @click.stop="loadDevices">标注</button>
        <button v-else
                @click.stop="hideDevices">取消标注</button>
        <button v-if="!isEdit"
                @click.stop="editPoint">开启编辑</button>

        <button v-else
                @click.stop="endEditPoint">结束编辑</button>
        <button v-if="isEdit"
                @click.stop="deletePoint">删除上一个点位</button>
        <button v-if="isEdit == !0"
                @click.stop="exportJSON">导出json</button>

      </div>
    </div>

  </div>
</template>

<script>

const EventEmitter = require('events').EventEmitter
const event = new EventEmitter()
// import Viewer from './viewer'
import Viewer from './viewer'
import devices from "./device.json"
import devicesLan from "./deviceLan.json"
import FileSaver from 'file-saver';
export default {
  name: 'viewer',
  props: {
  },
  data() {
    return {

      size: 100,
      color1: "#40576E",
      color2: '#0BA8A8',
      color3: '#0A51B5',
      color4: "#000000",
      color5: "#657074",
      value1: 1.5,
      value2: 1.5,
      roughness: 0.6,
      metalness: 0.21,
      jzxEmissive: "#061B21",
      jzxcolor: "#00486E",
      jzxroughness: 0.4,
      jzxmetalness: 0.72,
      jzxxEmissive: "#0B8F8F",
      jzxxcolor: "#001617",
      jzxxroughness: 0.5,
      jzxxmetalness: 0.5,
      plEmissive: "#00E3B2",
      plroughness: 1.0,
      hasLabel: !!0,
      isEdit: !!0,
      dvJson: [],
      devicesNames: ["设备1", "设备2"],
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.viewer.clearScene();
  },
  methods: {
    init() {
      this.viewer = new Viewer(".viewer", event);  //初始化场景
      // this.loadModels();
      event.on('setDevice', device => {
        // 设备id

        if (device) {
          this.dvJson.push(device)
        } else {
          this.dvJson.pop();
        }

      })
    },
    showArea() {
      this.viewer.showArea();
    },
    changeScene() {

      this.viewer.changeScene();

      if (this.hasLabel) {
        this.hideDevices();
      }
    },
    changeWaterColor(v) {
      this.viewer.changeWaterColor(v)
    },
    changeSize(v) {
      if (!this.viewer.water) return;
      this.viewer.changeSize(v)
    },
    loadDevices() {
      //加载设备
      if (!this.viewer.isShiJiuGang) {

        this.viewer.loadDevices(devicesLan)
      } else {
        this.viewer.loadDevices(devices)
      }

      this.hasLabel = !0;
    },
    hideDevices() {
      //隐藏
      this.viewer.hideDevices()
      this.hasLabel = !!0;
    },
    editPoint() {
      //开始编辑
      this.viewer.deviceCount = 0;
      this.isEdit = !0;
      this.viewer.isEdit = !0;
      this.viewer.devicesNames = this.devicesNames;
    },
    endEditPoint() {
      //结束编辑
      this.isEdit = !!0;
      this.viewer.isEdit = !!0;
      this.viewer.deviceCount = 0;
      this.viewer.devicesNames = [];
    },
    deletePoint() {
      //删除典韦
      this.viewer.deletePoint();
    },
    exportJSON() {
      // 将json转换成字符串
      const data = JSON.stringify(this.dvJson);
      const blob = new Blob([data], { type: '' });
      if (this.viewer.isShiJiuGang) FileSaver.saveAs(blob, 'device.json');
      else FileSaver.saveAs(blob, 'deviceLan.json');
    },
    changeAmbient(v) {
      console.log('环境光', v);
      this.viewer.changeAmbient(v)
    },
    changeDirect(v) {
      console.log('平行光', v);
      this.viewer.changeDirect(v)
    },
    changeamV(v) {
      this.viewer.changeamV(v)
    },
    changeDirV(v) {
      this.viewer.changeDirV(v)
    },
    changeModelColor(v) {
      this.viewer.changeModelColor(v)
    },
    changeModelColor1(v) {
      this.viewer.changeModelColor1(v)
    },
    changeRoughness(v) {
      this.viewer.changeRoughness(v)
    },
    changeMetalness(v) {
      this.viewer.changeMetalness(v)
    },
    changejzxEmissive(v) {
      this.viewer.changejzxEmissive(v);
    },
    changejzxcolor(v) {
      this.viewer.changejzxcolor(v)
    },
    changejzxroughness(v) {
      this.viewer.changejzxroughness(v)
    },
    changejzxmetalness(v) {
      this.viewer.changejzxmetalness(v)
    },
    changejzxxEmissive(v) {
      this.viewer.changejzxxEmissive(v);
    },
    changejzxxcolor(v) {
      this.viewer.changejzxxcolor(v)
    },
    changejzxxroughness(v) {
      this.viewer.changejzxxroughness(v)
    },
    changejzxxmetalness(v) {
      this.viewer.changejzxxmetalness(v)
    },
    changeplEmissive(v) {
      this.viewer.changeplEmissive(v)
    },
    changeplroughness(v) {
      this.viewer.changeplroughness(v)
    },
    // loadModels() {
    //   //加载模型
    //   this.viewer.loadModels(models, callback => {
    //     if (callback) {
    //       this.loadDevices();
    //     }
    //   })
    // },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  .viewer {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    .btn {
      position: absolute;
      left: 60px;
      top: 60px;
      z-index: 5;
    }
    .all {
      position: absolute;
      left: 300px;
      top: 30px;
      display: flex;
      div {
        width: 200px;
      }
    }
  }
}
</style>
