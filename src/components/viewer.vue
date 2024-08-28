<template>
  <div class="container" @contextmenu.prevent>
    <div class="viewer">
      <div class="btn">
        <button @click.stop="changeScene(!!0)">切换到岚山港</button>
        <button @click.stop="changeScene(!0)">切换到石臼港</button>
        <button @click.stop="showArea">区域</button>
        <button v-if="hasLabel" @click.stop="hideLabels">取消标注</button>
        <button v-else @click.stop="showLabels">开启标注</button>

        <button v-if="!isEdit" @click.stop="editPoint">开启编辑</button>

        <button v-else @click.stop="endEditPoint">结束编辑</button>
        <button v-if="isEdit" @click.stop="deletePoint">删除上一个点位</button>
        <button v-if="isEdit == !0" @click.stop="exportJSON">导出json</button>
        <button @click="flyToHome">主视角</button>
        <!-- 
        <el-color-picker v-model="anqiaoEmissive"
                         @active-change="changeanqiaoEmissive"></el-color-picker>

        <el-color-picker v-model="anqiaoColor"
                         @active-change="changeanqiaoColor"></el-color-picker> -->

        <el-color-picker
          v-model="plEmissive"
          @active-change="changeplEmissive"
        ></el-color-picker>
        <el-color-picker
          v-model="floorEmissive"
          @active-change="changeFloorColor"
        ></el-color-picker>
        <el-color-picker
          v-model="waterColor"
          @active-change="changeWaterColor"
        ></el-color-picker>
        <el-slider
          v-model="plOpacity"
          :step="0.01"
          :min="0"
          :max="1"
          @input="changePLOpacity"
        ></el-slider>
      </div>
    </div>
  </div>
</template>

<script>
const EventEmitter = require('events').EventEmitter;
const event = new EventEmitter();
// import Viewer from './viewer'
import Viewer from './viewer';
import devices from './device.json';
import devicesLan from './deviceLan.json';
import FileSaver from 'file-saver';
export default {
  name: 'viewer',
  props: {},
  data() {
    return {
      size: 100,
      color1: '#40576E',
      color2: '#0BA8A8',
      color3: '#0A51B5',
      color4: '#000000',
      color5: '#657074',
      value1: 1.5,
      value2: 1.5,
      roughness: 0.6,
      metalness: 0.21,
      jzxEmissive: '#061B21',
      jzxcolor: '#00486E',
      jzxroughness: 0.4,
      jzxmetalness: 0.72,
      jzxxEmissive: '#0B8F8F',
      jzxxcolor: '#001617',
      jzxxroughness: 0.5,
      jzxxmetalness: 0.5,
      plEmissive: '#62EBCE',
      plroughness: 1.0,
      isEdit: !!0,
      dvJson: [],
      devicesNames: ['设备1', '设备2'],
      hasLabel: !0,
      isShijiugang: !0,
      plOpacity: 0.7,
      anqiaoEmissive: '#FFFFFF',
      anqiaoColor: '#FFFFFF',
      waterColor: '#0669ab',
      floorEmissive: '#758C8F',
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.viewer.clearScene();
  },
  methods: {
    init() {
      this.viewer = new Viewer('.viewer', event); //初始化场景

      const divs = [];
      devices.forEach((v) => {
        const div = document.createElement('div');
        div.style =
          'font-size:16px;position:absolute;left:32px;top:32px;width: max-content;';
        divs.push(div);
      });

      this.viewer.loadDevices(devices, '32px', divs);
      // this.loadModels();
      event.on('setDevice', (device) => {
        // 设备id

        if (device) {
          this.dvJson.push(device);
        } else {
          this.dvJson.pop();
        }
      });

      const div = document.createElement('div');
      const divChild = document.createElement('div');
      divChild.setAttribute(
        'style',
        `color:white;width:500px;height:360px;background: rgba(0, 0, 0, 0.6);transform: translate(60%, -60%);`
      );
      div.appendChild(divChild);
      divChild.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.viewer.removePanel(); //删除面板
      });
      event.on('pickDevice', (device) => {
        // 设备id
        this.viewer.createPanel(div, device);
      });
      event.on('flyToDevice', (device) => {
        // 设备id
        this.viewer.flyToDevice(device.id);
      });
    },
    flyToHome() {
      this.viewer.flyToHome();
    },
    showArea() {
      //顺序   南 西 北 东
      const divs = [];
      for (let i = 0; i < 6; i++) {
        const div = document.createElement('div');
        div.textContent = i;
        divs.push(div);
      }

      if (this.isShijiugang) this.viewer.showArea(divs);
      else this.viewer.showArea(divs);
    },
    changeScene(bool) {
      this.isShijiugang = bool;
      if (this.isShijiugang == this.viewer.isShiJiuGang) {
        return;
      }

      this.viewer.changeScene();
      this.isShijiugang = this.viewer.isShiJiuGang;
      this.hideLabels();
      this.showLabels();
    },
    showLabels() {
      //加载设备
      if (!this.viewer.isShiJiuGang) {
        this.viewer.loadDevices(devicesLan);
      } else {
        const arr = [];
        devices.forEach((device) => {
          if (device.id % 2 === 0) {
            arr.push(device);
          }
        });

        this.viewer.loadDevices(arr);
      }
      this.hasLabel = !0;
    },
    hideLabels() {
      this.viewer.hideDevices();
      this.hasLabel = !!0;
    },
    changeWaterColor(v) {
      this.viewer.changeWaterColor(v);
    },
    changeSize(v) {
      if (!this.viewer.water) return;
      this.viewer.changeSize(v);
    },
    loadDevices() {
      //加载设备
      if (!this.viewer.isShiJiuGang) {
        this.viewer.loadDevices(devicesLan);
      } else {
        this.viewer.loadDevices(devices);
      }
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
    changeplEmissive(v) {
      this.viewer.changeplEmissive(v);
    },
    changeWaterColor(v) {
      this.viewer.changeWaterColor(v);
    },
    changeFloorColor(v) {
      this.viewer.changeFloorColor(v);
    },
    changeplroughness(v) {
      this.viewer.changeplroughness(v);
    },
    changePLOpacity(v) {
      this.viewer.changePLOpacity(v);
    },
    changeanqiaoEmissive(v) {
      this.viewer.changeanqiaoEmissive(v);
    },
    changeanqiaoColor(v) {
      this.viewer.changeanqiaoColor(v);
    },
  },
};
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
    .label {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
