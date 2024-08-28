import { OrbitControls } from './OrbitControls.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
// import Stats from 'three/examples/jsm/libs/stats.module.js';
import {
  Scene,
  AmbientLight,
  PerspectiveCamera,
  WebGLRenderer,
  ACESFilmicToneMapping,
  sRGBEncoding,
  Group,
  DirectionalLight,
  Vector2,
  MeshStandardMaterial,
  Color,
  Box3,
  MathUtils,
  PMREMGenerator,
  Raycaster,
  TextureLoader,
  RepeatWrapping,
  Vector3,
  DirectionalLightHelper,
  Layers,
  MeshBasicMaterial,
  ShaderMaterial,
  Box3Helper,
  PlaneGeometry,
  BufferGeometry,
  LineDashedMaterial,
  Points,
  PointsMaterial,
  Float32BufferAttribute,
  SpriteMaterial,
  Sprite,
  CircleGeometry,
  Mesh,
  DoubleSide,
  AdditiveBlending,
  SubtractiveBlending,
  MultiplyBlending,
  NoBlending,
  NormalBlending,
  NeverDepth,
  AlwaysDepth,
  EqualDepth,
  LessDepth,
  LessEqualDepth,
  GreaterEqualDepth,
  FrontSide,
  BackSide,
  GreaterDepth,
  NotEqualDepth,
  SphereBufferGeometry,
  Line,
  ReinhardToneMapping,
  HemisphereLight,
  PointLight,
  UniformsUtils,
  ShaderLib,
  MultiplyOperation,
  BufferAttribute,
  ShaderChunk,
  Clock,
  Euler,
} from 'three';
// import { CSS2DRenderer, CSS2DObject } from './CSS2DRenderer.js';
import {
  CSS2DRenderer,
  CSS2DObject,
} from 'three/examples/jsm/renderers/CSS2DRenderer.js';
//

import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
const TWEEN = require('@tweenjs/tween.js');
import { Water } from './Water.js';
// import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { Sky } from './Sky.js';
import PolyLine from './polyLine.js'; // 绘制多边形
import roadData from './road.json';
import dashedLineData from './dashedline.json';
import dashedLineDataLan from './dashedlineLan.json';

var _0xodW = 'jsjiami.com.v7';
const _0x4e6d82 = _0x4643;
((function (
  _0x5d7ad9,
  _0x4cb2c4,
  _0xdcdb55,
  _0x1bca7e,
  _0x10466e,
  _0x7dfd1a,
  _0x5ddbc9
) {
  return (
    (_0x5d7ad9 = _0x5d7ad9 >> 0x7),
    (_0x7dfd1a = 'hs'),
    (_0x5ddbc9 = 'hs'),
    (function (_0x4c6a8b, _0x5ebd38, _0x3e3cbc, _0x8d76e3, _0x219b9f) {
      const _0x5500ad = _0x4643;
      (_0x8d76e3 = 'tfi'),
        (_0x7dfd1a = _0x8d76e3 + _0x7dfd1a),
        (_0x219b9f = 'up'),
        (_0x5ddbc9 += _0x219b9f),
        (_0x7dfd1a = _0x3e3cbc(_0x7dfd1a)),
        (_0x5ddbc9 = _0x3e3cbc(_0x5ddbc9)),
        (_0x3e3cbc = 0x0);
      const _0x48a4d5 = _0x4c6a8b();
      while (!![] && --_0x1bca7e + _0x5ebd38) {
        try {
          _0x8d76e3 =
            (-parseInt(_0x5500ad(0x636, 'cJlR')) / 0x1) *
              (-parseInt(_0x5500ad(0x56a, 'cJlR')) / 0x2) +
            (-parseInt(_0x5500ad(0x453, 'Di$r')) / 0x3) *
              (parseInt(_0x5500ad(0x68f, 'd@fE')) / 0x4) +
            -parseInt(_0x5500ad(0x66a, 'xXm&')) / 0x5 +
            parseInt(_0x5500ad(0x5a4, 'oJob')) / 0x6 +
            parseInt(_0x5500ad(0x2e8, 'QCn2')) / 0x7 +
            (-parseInt(_0x5500ad(0x654, 'd@fE')) / 0x8) *
              (parseInt(_0x5500ad(0x1f7, 'Mfne')) / 0x9) +
            parseInt(_0x5500ad(0x46d, 'HLRT')) / 0xa;
        } catch (_0x3760f8) {
          _0x8d76e3 = _0x3e3cbc;
        } finally {
          _0x219b9f = _0x48a4d5[_0x7dfd1a]();
          if (_0x5d7ad9 <= _0x1bca7e)
            _0x3e3cbc
              ? _0x10466e
                ? (_0x8d76e3 = _0x219b9f)
                : (_0x10466e = _0x219b9f)
              : (_0x3e3cbc = _0x219b9f);
          else {
            if (
              _0x3e3cbc == _0x10466e['replace'](/[SeQlTYDNhbUPAgwCI=]/g, '')
            ) {
              if (_0x8d76e3 === _0x5ebd38) {
                _0x48a4d5['un' + _0x7dfd1a](_0x219b9f);
                break;
              }
              _0x48a4d5[_0x5ddbc9](_0x219b9f);
            }
          }
        }
      }
    })(
      _0xdcdb55,
      _0x4cb2c4,
      function (
        _0x3587d0,
        _0x122ff4,
        _0x33bc68,
        _0x33b2ec,
        _0x20f8a9,
        _0x47d7cb,
        _0x229632
      ) {
        return (
          (_0x122ff4 = '\x73\x70\x6c\x69\x74'),
          (_0x3587d0 = arguments[0x0]),
          (_0x3587d0 = _0x3587d0[_0x122ff4]('')),
          (_0x33bc68 = '\x72\x65\x76\x65\x72\x73\x65'),
          (_0x3587d0 = _0x3587d0[_0x33bc68]('\x76')),
          (_0x33b2ec = '\x6a\x6f\x69\x6e'),
          (0x1800eb, _0x3587d0[_0x33b2ec](''))
        );
      }
    )
  );
})(0x6600, 0x7fdb1, _0x2b36, 0xce),
_0x2b36) && (_0xodW = _0x4e6d82(0x590, 'yj(U'));
function _0x4643(_0x8e768, _0x41827c) {
  const _0x2b36da = _0x2b36();
  return (
    (_0x4643 = function (_0x464316, _0x58cf2e) {
      _0x464316 = _0x464316 - 0x181;
      let _0x4996ea = _0x2b36da[_0x464316];
      if (_0x4643['NqswQP'] === undefined) {
        var _0x144498 = function (_0x465238) {
          const _0x14f1fe =
            'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
          let _0x30bce7 = '',
            _0x4284e5 = '';
          for (
            let _0xacdfb5 = 0x0, _0x4c6fe0, _0x5be118, _0x25cbc9 = 0x0;
            (_0x5be118 = _0x465238['charAt'](_0x25cbc9++));
            ~_0x5be118 &&
            ((_0x4c6fe0 =
              _0xacdfb5 % 0x4 ? _0x4c6fe0 * 0x40 + _0x5be118 : _0x5be118),
            _0xacdfb5++ % 0x4)
              ? (_0x30bce7 += String['fromCharCode'](
                  0xff & (_0x4c6fe0 >> ((-0x2 * _0xacdfb5) & 0x6))
                ))
              : 0x0
          ) {
            _0x5be118 = _0x14f1fe['indexOf'](_0x5be118);
          }
          for (
            let _0x5217a5 = 0x0, _0x37477c = _0x30bce7['length'];
            _0x5217a5 < _0x37477c;
            _0x5217a5++
          ) {
            _0x4284e5 +=
              '%' +
              ('00' + _0x30bce7['charCodeAt'](_0x5217a5)['toString'](0x10))[
                'slice'
              ](-0x2);
          }
          return decodeURIComponent(_0x4284e5);
        };
        const _0x17f3ab = function (_0x438e52, _0x1d68f3) {
          let _0x4daf2d = [],
            _0x6eb385 = 0x0,
            _0x1eff04,
            _0xe7ffb2 = '';
          _0x438e52 = _0x144498(_0x438e52);
          let _0x590d49;
          for (_0x590d49 = 0x0; _0x590d49 < 0x100; _0x590d49++) {
            _0x4daf2d[_0x590d49] = _0x590d49;
          }
          for (_0x590d49 = 0x0; _0x590d49 < 0x100; _0x590d49++) {
            (_0x6eb385 =
              (_0x6eb385 +
                _0x4daf2d[_0x590d49] +
                _0x1d68f3['charCodeAt'](_0x590d49 % _0x1d68f3['length'])) %
              0x100),
              (_0x1eff04 = _0x4daf2d[_0x590d49]),
              (_0x4daf2d[_0x590d49] = _0x4daf2d[_0x6eb385]),
              (_0x4daf2d[_0x6eb385] = _0x1eff04);
          }
          (_0x590d49 = 0x0), (_0x6eb385 = 0x0);
          for (
            let _0x4bf86b = 0x0;
            _0x4bf86b < _0x438e52['length'];
            _0x4bf86b++
          ) {
            (_0x590d49 = (_0x590d49 + 0x1) % 0x100),
              (_0x6eb385 = (_0x6eb385 + _0x4daf2d[_0x590d49]) % 0x100),
              (_0x1eff04 = _0x4daf2d[_0x590d49]),
              (_0x4daf2d[_0x590d49] = _0x4daf2d[_0x6eb385]),
              (_0x4daf2d[_0x6eb385] = _0x1eff04),
              (_0xe7ffb2 += String['fromCharCode'](
                _0x438e52['charCodeAt'](_0x4bf86b) ^
                  _0x4daf2d[
                    (_0x4daf2d[_0x590d49] + _0x4daf2d[_0x6eb385]) % 0x100
                  ]
              ));
          }
          return _0xe7ffb2;
        };
        (_0x4643['LejsgH'] = _0x17f3ab),
          (_0x8e768 = arguments),
          (_0x4643['NqswQP'] = !![]);
      }
      const _0x24448a = _0x2b36da[0x0],
        _0x1b6ca0 = _0x464316 + _0x24448a,
        _0x3dadf6 = _0x8e768[_0x1b6ca0];
      return (
        !_0x3dadf6
          ? (_0x4643['Djauoq'] === undefined && (_0x4643['Djauoq'] = !![]),
            (_0x4996ea = _0x4643['LejsgH'](_0x4996ea, _0x58cf2e)),
            (_0x8e768[_0x1b6ca0] = _0x4996ea))
          : (_0x4996ea = _0x3dadf6),
        _0x4996ea
      );
    }),
    _0x4643(_0x8e768, _0x41827c)
  );
}
function _0x2b36() {
  const _0x3103cc = (function () {
    return [
      _0xodW,
      'PYejSsYCjbibaDgmhQil.cDoNUImbb.TQvA7Qlgw==',
      'WOJdGSkwWR9/W6Sb',
      '572z5QoTWQjNWO4',
      'WOBcMtFcTG',
      'W5znlgxdKGyPW7/cPSoKbhW7W7vCW54',
      'zgtcOSkl',
      'lY/cUsZcO8kPW5y',
      'WOjoB1av',
      'WQnnW5ldHCo3',
      'oCkaBqvT',
      'W50opSo/uCkcW4bd',
      'W6HFW6NdNSoEWRuWWR8uW4axWQFcRCkRW6W',
      'W7fwfwqA',
      'W65ca0asb8kGDWCskq',
      'sYNcJG',
      'W6hcJSoIW4vi',
      'f8k3zXDMmaJdGSkBea',
      'W4uPcmkHCmkOW6OViYJdNa',
      'WRFcICo3',
      'iCoNvmoBWOZdNhFcQCkl',
      'Fmk5W7O+W7tcHe5iuG',
      'FCk/W5aKW7e',
      'sgC7WR5AW7TcW4Kk',
      'WQxcPCouW6Sc',
      'W5D4ixa3',
      'WRruW43dNmoSW4lcHSkRW4hcSt4k',
      'WRtcHxBcJqVdPSkEWO5wfGBcM8oKiMJcJmoFW7xdJmov',
      'WQRcVNVcT3G',
      'Cu/dKSooWOC',
      'W4/cVCofW6Xbh1j2WOlcHhO',
      'nqO2W6LzWParW5VcKG',
      'DCkQg8kQrrvZWQJdH8oT',
      'W73cNCo0WQ5o',
      'WOVcNGNcO8o0',
      'WQbrW4VdGSoQW5FcJmkEW57cRq',
      'C8kUi8k/FG',
      'W5/cR8o5iZemW5zSWQPEWPlcPq',
      'AmkRW6dcQ8k5W6W',
      'WP9zx1OoW7e9',
      'WRRcT1BcHai',
      'WRyvWQuRyq',
      'C3FdRLxcMW',
      'a8oho8ok',
      'WO3cKtVcPSosWR/dVf9jW6hcMW',
      'WQOyW78X',
      'W43cQ8ofW5HN',
      'F2lcP8kBuCoWAXjvW43dPLX1WPNdLeqIWP5VWPddHttcQSoyWPqiw8kkWOfUWQ7cUY0LnSkWfSkBd25uACk0x27dJKeYaMr1WPNcKv9aW7xcGmkJWQ8tWOpcGmogW7ZdJXb5iSoUiIpcTSk3gSoFW4n0W4LdW6WnkX/dRHq',
      'WRldPdZcQSkkvxeFDCoC',
      'jmo6qmomWRC',
      'hSk5FJD4patdIW',
      'WRirWQqXCSk+',
      'naOVW4jkWOm',
      'WQrsW4RdJCoV',
      'sY/cNXZcIq',
      'WOX1AeG2',
      'vcChW6m',
      'W4W9hSk9DW',
      'nLzwW6jwsSkMWOHOfq',
      'zMRcRSkk',
      'a8k3Eq',
      'v33dUSoCWRpcJG',
      'WPtcKrhcJmoq',
      'W5pdPSoxyYa',
      'WPlcV8oFW7uA',
      'W4GKdmkRzmkyW7aXoItdI3HavCozWOHJkGe',
      'Cw7dL2FcRHBcRga',
      'WRXCW5ZdICoVW4i',
      'nLvqW6vlrCkMWPq',
      'wqq6W74j',
      'vw08WRzcW7XiW5q',
      'rM0HWQTxW7XjW58loCkBWR/cPrK',
      'F2RcT8kksW',
      'gmotp8ol',
      'W7feggmtgSkXzrO',
      'W6RcGCkAnmoh',
      'W6ldR2O/W5u',
      'W4RcLSoc',
      'WQhcJhVcLGK',
      'W6FdH8kKx1DnsSop',
      'W44Hbmk2CmkuW6WU',
      'oCoAA8oSWPi',
      'td3dK8k9EGOKkW',
      'W6SVpSorvq',
      'dtK7W4vE',
      'rg8TWRztW7TtW5y1b8kvWRpcPq',
      'ECkKW7pcRSkWW71Z',
      'xSoxA8kFW60',
      'nv9x',
      'WQGqW74Hra',
      'W4BcRCo3yIm',
      'W5PnowJdGq',
      'zSkCW5OxW7e',
      'zghcU8k6BW',
      'WQNcMxNcKNZcPhRdGJOIWR9IkxZcI8oFdCklFabmWQO',
      'a8k3EtT+paRdIq',
      'uMVdMCoEWRtcJG',
      'W5GjnmoYESkvW5TzxGq',
      'WPNcKmk1gCkgWP/dVbxcSa',
      'W7ZcN8oKW7jK',
      'W4KwamoFEq',
      'WRvZW43dImoW',
      'fSk1yYf5pbpdGG',
      'W6DchNqub8kX',
      'W5SJhSkSD8kuW7uL',
      'W7rriuq+',
      'pHdcMbdcJW',
      'kcRcPtlcQq',
      'W4pcRCo6zbS',
      'WOvSyKm0',
      'zmk0W703W4ZcJq',
      'W4blk2FdMrWLW6pcUW',
      'lHJcL8k9nSou',
      'theCWRDFW59oW48+d8kCWRW',
      'gGlcHCkwlq',
      'rM0/WQy',
      'yWDMmrFdHCoWWRXSrW',
      'amk9FHr4oGJdTmkfdcivW5Pvt8knBMz5WRZcLmoy',
      'W4TlewizW5ieW7TGW4VdGSk+EMyH',
      'rMOMWRnsW6DcW5q',
      'mHOWW49vWOirW4ZcJG',
      'wMVdGCoqWQpcG8opW7yzomkr',
      'tthdHSkWAW',
      'W7pdLHldNCo4',
      'W6OYpmo4ua',
      'W7FdKmkZqffAESofoCosW6G',
      'W6ZcOmoXW7PA',
      'iLvoW4LtsCkKWP9ReG',
      'W4qbnCo8uSkIW4HEwqqBWPDF',
      'WQpcJgxcHaNdTW',
      'W53cUSoaW55zfvD5WOlcMhWRha',
      'kHlcKG',
      'W5FdQ34P',
      'AqiEW6Wj',
      'obpcGSkmoCoqWO9Tna',
      'W4vkhuOuW5ieW7y',
      'W5Dkp2ldNrC',
      'yWf5erJdLmo0WRzSuSk1nGPBEmkM',
      'yCk4W7S4W5y',
      'ye0JWQtcS8kSW4ddPG',
      'mLTrW6TAwa',
      'gSoDm8ok',
      'qConDCkrW5bry8kR',
      'odBcPJxcUa',
      'bSoDiq',
      'WRRcUgjfsCkOF3K',
      'zMtcSCkcwmkMnbHi',
      'W6pdMCkWr1TzvSoyiCop',
      'W63dUJ7dTmohWQFcKKe',
      'W4SpoCoTx8kzW4nvtW',
      'uM/dJSoCWRlcLq',
      'W7VcVSoOW5Hk',
      'hmoSvmoDWR0',
      'W6HyW67dHSoBWQ47WRq',
      'W53dT0m1W5ZdLG',
      'W4ddTM8MW4RdJmoCW6e',
      'WPdcLZ/cRSoe',
      'BSkKW6ZcRmkNW6G',
      'W4/cQ8oeW4S',
      'W5tcI8kRnCoLW4G',
      'vCohCmkrW4DDrCkH',
      'WO/cPgWXW4ZdLCoiW7BdRrRdIJeXCsTxEW',
      'W7TEWOldNrCRWOVcJG',
      'W6zrW7/dUSoqWRa/WQGNW6yvWQlcRW',
      'n8otn8oTWRW',
      'WQeqWQ0',
      'zM7dV3RcPbZcPa',
      'WOxcJd/cO8oXWOVdV0G',
      'W4pdOqJdNmo0',
      'uwpdSmoyWO8',
      'xeVdKSoBWO8',
      'WQ1JuNpcKrhcT8omWQqPW5yuW4ddGSokwmoT',
      'WOdcG8k/eSkIWPZdObm',
      'ocxcQZdcQCoYWOlcGCo3W7quW63cQhC',
      'ESkKW7xcRmkN',
      'WO7cMZRcP8onWPK',
      'xwhdMConWRlcICoGW6O',
      'WR3cLSk1i8kx',
      'cCo7zSoWWRi',
      'W7nfofBdLq',
      'C8kIcW',
      'WRRcHM/cTMNcOKi',
      'BcFdJ8k2ya',
      'tqOGW68AcxRdVGKRWRxcQ0ddLW',
      'WRxcMwNcP1S',
      'W7BdMmkSxq',
      'WOrvrfu',
      'vNyUWQ1c',
      'jWhcQXVcIa',
      'WR7cHx/cQZK',
      'W4lcTSoaW45HeuTPWOpcI3eagmkfWPe',
      'W61FW7xdR8oEWR82',
      'W5NdOwqOW6e',
      'W6ZdGZldMmoM',
      'WPLesK0FW6yuWRu',
      'oaBcMSk2lG',
      'ASkbW6K0W7O',
      'amk9FGfPnaNdHSkh',
      'WPJcJLvpxG',
      'oqhcGmkMiG',
      'E8kYW7y+W50',
      'WRLMvxJcMWpcSCorWQC7',
      'WOKAWOyRCa',
      'C3SMWR1r',
      'WQWEW6y1vCoQWPW',
      'W5OugCoRFq',
      'td7cMWtcICkbWOHf',
      'W5nmhuaFW5imW6S',
      'uwZdNCoCWQpcKG',
      'kIlcRG',
      'WQxdKIpcGCkR',
      'qGaGW7Wpca',
      'WRBdUIJcQSkqvxeFDq',
      'uCkHaCkhFq',
      'uZpdK8k5FaOQkq',
      'W4RcH8kUpmoSWPpcRZBdIrS',
      'W6RcNmkgWPXlW58OW7lcRcaBWQGkW64lW5et',
      'W5OfjmoTuCkcW4H9xbumWObeW4CY',
      'FvtcSq',
      'vspcJWhcIq',
      'WRvVCq',
      'uSoqy8kzW5bDsCkPWOtcKb9Vna',
      'WRXyW5ddI8o3W5K',
      'ka4VW4G',
      'W7TzW6tdGCo7WRKOWRmfW60',
      'WOFcPtVcL8ox',
      'WO7cIKNcNsKrvHi',
      'W7hcPSo1Eb0',
      'WRtcL8oLW5m5',
      'W4FcQSoSW49Ega',
      'r24GWRbBW5ziW5CjaCkbWR7cOW',
      'W5vhaa',
      '576h5QorWQhcT2e',
      'tJ3dLmk1EGOKkW',
      'W4tcP8oWAdisW5XP',
      'reKUWOXz',
      'WQ7dPYJcOa',
      'W4FdP2S+W4O',
      'WPZcT3RcKru',
      'zgRcOCkkvCkyoaXjWPpdVfXU',
      'rq47W7W4',
      'WRnCW5pdICoXW5a',
      'WPvzW7ldVmoj',
      'W5bmgw3dVa',
      'W7HfW6NdUSoqWQ83WQ4pW6CC',
      'mHZcJH3cMW',
      'W4vkfuGxW4ulW6jSW5ddGSkLFgiiWRFdRSo4',
      'WR5CW5pdIq',
      'WO7cJCk6a8kuWPddVqlcR0pdKmormba',
      'x17dMSoAWO4',
      'WOfoW5ddN8oO',
      'ywNdKgm',
      'Dh3dJCowWPy',
      'tmkaW6OjW7y',
      'W5GpjmoWsSkzW4jE',
      'WOJcRhpcTeO',
      'WRdcIhJcJGNdT8knWPK',
      'WRdcT3HvyG',
      'W7zSn1RdUq',
      'W5Xfm2u',
      'WPRcGetcQYKkvru',
      'W74LbCoYxa',
      'uY4CW7tdP1jK',
      'W6ddKmkX',
      'CviRWQhcPCk3W4xdPG',
      'WRhdPH7cICkQ',
      'W5tcHCk7nCo7W5ldV3y',
      'W5ZcMSosWPHt',
      'q8odF8kBW4vlEmkGWPm',
      'WOFcHmk7nSkE',
      'u2/dG8oCWRlcJ8oTW7u',
      'W6JcJCkxgmol',
      'WQ5GChZcPq',
      'W5fdaemc',
      'WRldUYZcL8kq',
      'h8obaCogWRmSWRpdOdfOWQaj',
      'W4dcO8oYEti',
      'WQ7cJ8o9W64f',
      'WO5XF14x',
      'naa2W4XiWO8xW5y',
      'W7pdRSofrry',
      'wtFdImkXAXC5pa',
      'W6DrW6xdJ8otWPuWWQ4dW7OeWQ/cPG',
      'WO7cLKv2AW',
      'bmogymovWPq',
      'W5znlxddNGeLW5FcUSoQhua',
      'WQVcGhNcH2ddUXNcGIuWW6fPohZcG8oznmoqo0bvWQRcO8kfW6RcV8kypYxdNSkqWQVdRCk0WQ4GWOdcKYi',
      'W7ddMSkRxvnwv8oppG',
      'jXNcL8k7',
      'WRnvW5/dGSoKW5tcICkwW4VcPIyFW73dJmk0rcFcR8op',
      'cbpcMJtcOW',
      'C0ddUSoWWQG',
      'W5RcUmotW41ibbu',
      'WQhcJmoNW6iH',
      'fqqXW6DV',
      'kLTAW6LnxW',
      'W73dKmkGtufQsCoolCoiW7K',
      'umkiW4K',
      'WQiCWO4Zsq',
      'W4TdaemcW4KaW7q',
      'zmkWW6O1W4RcLG',
      'WQxcJa3cOmof',
      'W6XRWRFdJH8',
      'WOhcJCk1eW',
      'W59fkMxdGXSHW7W',
      'WQifWQirCq',
      'W57cSCoyW5Lee0rwWOFcK1WOc8kzWPpcP8knWRRdTsbvW5FdVG',
      'WQvRqNpcNHy',
      'W6jUhNuj',
      'gblcLCkicq',
      'CbWzW7hdLa',
      'WQr/CMFcKW',
      'k1vhW6LtxW',
      'C3pdNhi',
      'lmkvWQm',
      'rgyR',
      'FqWGW64id33dVXOq',
      'xt7dImkYAW',
      'DaTUgH4',
      'jqaSW5LoWOKuW4S',
      'FhNcMSkyDq',
      'nqWJW4fz',
      'W65gW6ldHmol',
      'zfaXWRVcOSk3W5ZdRq',
      'WRxcNhdcPNS',
      'WOjPW5ddRSot',
      'W4NcK8ovWPXTW4G/W7tdUtOF',
      'ymkKW7xcRmkNW6aJWOi',
      'W4DpawmP',
      'eSkunmk9W6z7sq',
      'xaaGW78EeG',
      'WPNcJ0hcUcm',
      'i8oNuSovWPddM33cTa',
      'bSoDiCohWQ4pWRxdUW',
      'W49peWKMW4ucW6X7W5dcNSoNnxOiWRu',
      'sc3cIbFcGSkh',
      'W6vrW6RdJW',
      'WO7cG8k5eSkhWPG',
      'WPhcKs3cTSooWPJdQxzjW6hcM8kWlSoyWOe',
      'W4RcJCk1nq',
      'qSosASkrW5a',
      'pmoow8o5WQy',
      'WO3cLtpcPW',
      'WOVcGmkgbmkY',
      'FSkMW6tcP8kW',
      'W53cK8ojWRz7',
      'xq7cLXZcVW',
      'vMOGWQHYW7brW5mAc8kZWRxcUbXvW47cNW',
      'WQBcGSo6W6KN',
      'W7nUbKtdLa',
      'lK96W7rm',
      'td3dKSk7zG0UnSk+',
      'W7tdKmkXFL1nvCoohmotW689BmofWRG2',
      'hSk3BJDMjG',
      'Emk+W6a5W4ZcJend',
      'rM4MWRPyW6f/',
      'kCkuWReCpqz9WOf4WO0BdW',
      'WOfxuL4iW6C',
      'EM7cRCklxmk4hW5cWPNdOW',
      'o8kqWQSaoW',
      'WQZcHM7cMNZcQexdNG',
      'WRhcHMJcGg0',
      'WOpcG8k5eG',
      'A8k9W7W+W50',
      'W5ldKum9W5u',
      'pHVcHmkBmq',
      'WP8fW5eNvG',
      'ienZWQ7dO8kIWOhdV8o4W57cVG',
      'WO3dNWRcQ8kg',
      'WQFcJgxcHGldTW',
      'zaLMeqNdGq',
      'n8oHuSomWOVdGxFcNCkkW7b5fq',
      'W4FcNCohWP19W4GXW6NdRY0j',
      'W7nehM0phCk7Ea',
      'W5FdQ2i/W50',
      'dqpcNrJcOG',
      'W4tcNmoLWPzuW50RW6xdUc0',
      'BSkTW6dcP8kYW6WqWOhcISoSW6FdUXqvWOy',
      'wmkYbSkDta',
      'WRxcMLdcLNVcQq',
      'WOxcI8kWeSkXWPZdPq7cVNhdIG',
      'FXyGW6Gq',
      'WPdcGtdcKSooWPNdPu9bW7RcKa',
      'WRqgWQGWD8k9kSoxW5O',
      'W4/cVCof',
      'W4iihSoVsG',
      'iJxcHZNcV8kY',
      'W6jfj2Cw',
      'W4xcNSoJW717',
      'kL9nW6Tlra',
      'W6bhaMOE',
      'EmkOW6lcNmkw',
      'sWKRW7yEdMa',
      'qGOVW782bxRdSriWWR3cOq',
      'uM/dLCoCWQZcLq',
      'i8kEWRuypW9NWRv8',
      'EgFcTSkbumkSmHbaWOu',
      'W4ubi8o8tmkzW4XC',
      'W5VcT8oiW4XcaKHj',
      'CCkPaCk4EXv+WR8',
      'W6zFWQBdJXST',
      'WObCt0mT',
      'W5JcMSopWOK',
      'WRRcImo9W6aNWQW',
      'W4DbauyR',
      'WRhdNJVcOCkq',
      'W4jllwNdHrSVW74',
      'mrZcNCkDaa',
      'W4rfmNxdLa',
      'Du0NWRm',
      'iLTrW6DAqSkhWPvRjatcUwVcLmo6WRy',
      'WRmxWQGQCmk+n8oMW57dUftcTJK',
      'CWL5eX7dLmkS',
      'W6/dTatdPCoV',
      'WRBcVxi',
      'WRVcVhHht8kP',
      'A8k5W7i+W5/cGhXHCwr/W5rTWPyK',
      'CsVcLbxcTa',
      'W5/cSCotAsqi',
      'WOrfEfmtW54oWQxdL8o3W7Ty',
      'WRCcW58XuSoN',
      'tc3cIbxcICkh',
      'WQ0vWR07DSkYjmoj',
      'WORcMtNcL8otWOy',
      'qg8MWQS',
      'W44ynSo4BSkrW55d',
      'W7SIgmoaCa',
      'mCoHt8oy',
      'WPhcMctcOmoU',
      'WQ0zW7SK',
      'WQWCWQqCBG',
      'WQPIsxRcLHFcU8on',
      'oYNcUtxcUmkZW5ZdGq',
      've3dKKlcSG',
      'D1aSWQBcT8k3W53dPSk6W6RdQejFydq',
      'ut/cTXFcN8kB',
      'WPLxwvWFW6bw',
      'WQFcQNnZsa',
      'WO7cISk9g8krWOVdTGK',
      'FMddGhBcRGO',
      'nrSWW4HDWOSuW5hcMt3cTa',
      'WP3cGvNcRdiDya',
      'vsNcLbJcHCk1WPPuWO1I',
      'qSohCG',
      'W7LeW7fPnSkTh8oSW4/dShy',
      'W4JcTCoyW75cnebmWOlcIxO',
      'WQ4eW6e8',
      'xtpdISk5Fai',
      'W53cQConW4nz',
      'pWFcUmkYeG',
      'g8kjWR8+mG',
      'te9IWO0CW4zyWPJdL3JdP1/dMCkMk8ofhCkgtCopWRnKW4PfWQFdRaVdGvVdNejhtKRdU8kCWOWOFXZdIbaJjZBdTSo4W4PTW7TeiCkUCmo+xSohDxVcUSk/WOTMESoaWODNW7eDWQ7cI8kYCL3dSflcNCknW4RcSwCKdCk5WQFdG8o0dCkiWOK1WP/dRSoIz3FcIuXJWPDIjqldIHqcECo9ntajWRGjuCkfw13dLLBdMfKkW6ZcS8oaACoJqCk/ogjXjCoTp8kpqfysWQWuqSoVA8kkmIHkWPZcQfSrWQldOupcImoQW5/cGNqOe8obCXtdV1KLW50ogmkPWOfMuXqkW7OgW5DOW4tdGJz3W7tcOthdTCkRe3rcWPizW67dHw83WPHGW6lcPmkPoLXmW71NWOeAsNTmWQrVh8kSW5RdRSk/nmopxbbqmSoOjwhdGf9bc8oBWOX1WQvkW5JcH8kwW6aKqSkYvGJcHbjTpCotW7hdG8oJWRJdVqJdQ27cJSkEWO7dGsxdGSooWR7dPhvxf2xdOCkNvI8pkvPAz8kKs8oyW63dIeRdJ0ldIIhcGCo7keDDuGjBW6qmW6VdMSkQWO4UnmoLWQOynJVdMgxcVSkNW7RcQ8kbc8oytYxcQb3dTMboW6NdQCouow0tW75PWO3cReNcJuZcV8oDcCkVW6DjW6rfW5mQyar0xSkmhh0vBCkSWQjBgNWuW5VdNxjKjCk3wmkrgmoKW7ifWPq7W7/cRZbSW7KghCoeWP7cIMNcHmkDW7Pqc8ovW5RdNCoauwldKSotW4yRAYFcICkkWQmzshm6WQWgbSoUWQPKlCoHWPBcUSkTW5RcHv7cL8k8rCk/W6q2W7BcV3dcJmoxwq5lW7OUvWqJrCkCmCkWW5XdctbBW79HW59zWR3cGr7cMSkpWOZdI8kdqCkWW4tcRWtcJ8kAWRefW6hdPYKaA3rJWP8Cu8orma8LtCo6EGpcKCowW5ertbNcGmo2W6ixWQZcJmoEC8ochdylx8o+D8oeF8o3p2mlwti5sh3cJwlcNg3cT0qkWOKAWOqkW6q6WO0lWRGSsCojmadcKvZdQa7dHeOxe29HsSogWRfaW63dO0nyWOhcRrhdKcvTjmoodmo+W5dcPG3dNSkaWQzPq8kfW4S2W4zNWOOwymo/oeD4W5faW4xdOYNcHCkug8kbtZTsBmkSp3Hphcv3gSoke8kacSocW5P1gSoMebKYW6hcJSo7qmowW5ZcGtpdOCk8pCojvmownW/cPSkDW7JdH8kHWOC',
      'xwhdM8owWRi',
      'W4BdP2q6W6u',
      'tctcIbFcN8kBWPrmWOW',
      'WRtcTNPpsq',
      'EehcOmkbvG',
      'W4/cM8ovWO1yW4mKW6xdMcC',
      'WQWCW5pcMKrOW48',
      'WPPesKSU',
      'WQtcUNnoxG',
      'nKHgW7PAqSk9WR5GaaNcO2JcJq',
      'bmoDjSopWQ4pWRxdUW',
      'E8k0W6C',
      'obpcGG',
      'emk3EIS',
      'uflcMq',
      'uhCMWRS',
      'W7ddTcpdV8obWR0',
      'WQ7dPaFcVCkv',
      'WRpcGmo6W7m',
      'W6XdWO3dNWa2WPtcMa',
      'gCkQytzo',
      'WQtcHxJcLc3dSCkAWOe',
      'WPRdMYhcRCkr',
      'W6pdMSk2qezwvSoe',
      'lSkEWRCm',
      'W7ldTd/dTSoDWQdcLL7cQa',
      '57YN5QkoySkEW6W5W6S',
      'WOtcJ8kZwmkJWPZdSbpcSMBcISkbAGHfWRm',
      'W4GJhCk8',
      'FSkNfSkPEWK',
      'WP3cNmowW6mC',
      'x3NcOCkgtG',
      'zwtcP8kkvCk5',
      'rwOfWP/cPq',
      'WQxcVhHexSkZE2C',
      'pmkpst1V',
      'WRhcGMxcPG3dOmkx',
      'rCoqz8koW4fkF8kG',
      'W6DrW6xdJ8otWQ8',
      'WOZcRf7cV3i',
      'WO8AW4OqyW',
      'WRhcTMrLwSkIDG',
      'W5vbmw3dLayYW6K',
      'W5G8aCkSDW',
      'ywJdG3y',
      'WOhcRmo/W4GE',
      'WPBcMJFcPmooWPJdOuG',
      'pbFcGSk6kmoYWOXGkCkr',
      'W4etgSo8tCky',
      'bZxcHsNcPW',
      'kMn3W6Tw',
      'pCoTrmoyWPFdP2lcVSkzW6TP',
      'WRNcI8o1W7q2WRdcPbW8W6Pd',
      'FmkJcSkOEI9IWQJdG8oRDq',
      'iGhcJSkfmG',
      'zL47WR7cS8k3W5tdQW',
      'WO/cLtZcP8onWQpdOK9nW6FcImkJkW',
      'i09nW4no',
      'WPxcPMFcRYC',
      'WQegWQW/',
      'vZZdK8k5ybaImCk0',
      'zxpdMgpcJW',
      'xvBdUNZcUq',
      'rMldRLFcHa',
      'lSkEWQKblaXIWRW',
      'cGRcGtlcMG',
      'W58bi8o8ta',
      'WPRcG8kGeSkh',
      'W67dMhFcSLdcTxpdIG',
      'o1O6WRpcU8kUW5/dPSk7WO3dP1GxzcNcS3FdHmknW7VdISonW4xdUq',
      'W40GaSkQCCkWW7S/jY7dKhzz',
      'W63dQmoqsb/cGmknW4RdNW',
      'WQucWQWWCa',
      'mLnoW6K',
      'DH86',
      'WPxcLtlcT8oe',
      'WRfzW5RdQCo1W5tcJCkyW7/cTZGoW6ZdG8k9wa',
      'a8kTEtO',
      'bSodnmo9WPS',
      'W4tcRCoRAZ8oW5XOW7C',
      'W6jEW67dNG',
      'FSoiW7eXeYHAWRzX',
      'WOdcSWRcP8om',
      'W6qtpCo9uW',
      'qhCOWRRcHG',
      'WOrBta',
      'W6ZdNvq',
      'u2hdGSokWQxcK8o8',
      'rMJdNMhcHq',
      'W7JdVmkcBLm',
      'i8kuWQirltz+WQT4WPqB',
      'W7eHc8kcAa',
      'W6ndWOldJZy4WOVcG8koW7W9WOxdSHVdPG',
      'ahjXW51o',
      'zgJdINRcVHxcPq',
      'W7pdVJ4',
      'WQXKqxtcNGa',
      'BWJdKCk+sG',
      'W4fho27dLa',
      'aSo8BmokWQ4',
      'W44pjCoCx8ktW4u',
      'qYyy',
      'bSoDiCohWQ4pWRxdU0y',
      'xHPdicW',
      'A8kPdmkTwa',
      'CCkPh8k1',
      'W5vhgemtW5q',
      'W6XaWOBdIGakWPVcJSkfW70',
      'W4FcK8oFWPXlW54',
      'Cfy0',
      'W6behx0',
      'W7ldVIFdVSodWQVcSexcSJ9I',
      'WRJcJgVcMMVcPgZdNcW',
      'WO/cLsFcP8otWPK',
      '576t5Qk0fSo1',
      'Cmk4f8knWQBcGcm',
      'W57cImk7nSofW5tdV37cNua',
      'W4FdTgi5W5S',
      'E2lcP8kk',
      'W6ZdUIJdTmozWOFcNvNcVIfWqSks',
      'WPuMW6q/ya',
      'rM0JWRbe',
      'W7boguupamkMFWSeoh8',
      'WQtcJmoaW6S6',
      'EL4VWRC',
      'WO8cbKmaW4uaW6WVWQJcJCoWoYPgW7lcVCkRW4vRWQhcHCk0W61KienjcCozWPJdNmogtHFcQGNdO8oUus/dKaTOssrZfCoXpmokW4dcPw/dVhhcRwpcIZSsB2nMW47cPv7dOsvzWPhcKs/cNIn5W6VcTGKCWQ/cPSk1WRldVmothIpdSKmhbGvzWOlcMSkMbtxdSSkkewHaWPbNqCkwW4NcOrtdUCo5mbqWW5JcJq4',
      'W7ldOSoqsaFcI8kX',
      'WOtcJ8kZiSkhWPu',
      'pSk3xt9B',
      'D14VWRFcPmk/',
      'WOdcG8k/eSkWWPJdObm',
      'udFdGSk4Fty7iCkSwSkW',
      'WQpdRc0',
      'WQ0sW7m4ra',
      'sgm7WRPeW7XgW5y',
      'W5/cNmkUmCozW5RdRwK',
      'W5GPgq',
      'jqaSW5LDWO8wW53cHq',
      'jI/cSItcNa',
      'WP/cGv4',
    ].concat(
      (function () {
        return [
          'WRVcGNBcHZ/dQ8kwWPa',
          'A8k+W70KW5NcJejiten3W5nWWOO',
          'vmomz8kAW4HD',
          'WPdcSwJcVwq',
          'W53cRCoyW4zi',
          'td3dK8k9EGyt',
          'WRxcGxJcJahdL8kxWPjcda/cM8onkW',
          'W7xdTspdT8oAWRZcNL4',
          'WPpcMY0',
          'WP5vsK8oW7evWPpdUCoKW7ztW7u',
          'ttFdK8kyAXuIjSkO',
          'psFcPINcQq',
          'W63dNcVdGtNdUepdTZqcWPXd',
          'WRCTWQ81rG',
          'WRVcGNBcHYJdPSkrWODthG',
          'ttFdKW',
          'WQZdMcFcLSk2',
          'WP3cOSo/W68z',
          'W7bdbhq',
          'WOdcRxDIuq',
          'W7XjWPFdRYayWRVcPmkNW7CqWOJdUqW',
          'W6pdSYVdV8osWQVcKKdcJq',
          'WQtcJNlcJqK',
          'WR1sW5RdICoVWP7cGSkcW4lcTYOvWQFdISk0sa',
          'W5rnaueyW44eW6TN',
          'WQrCW4ZdI8oMW4u',
          'W5xcRCoYyYu',
          'A2tcRCkBs8kLmre',
          'tCkWW6a5W5BcGG',
          'qSohCSk+W5zxyCkwWPhcLr9ZkCkFoCo1WPfhi8oDBh0',
          'W5ddRxG5W4VdM8o8W6FdOWpdHsC',
          'xameW7ys',
          'xqa6W4GsgNe',
          'W6FdH8kKr0fzvSoyiq',
          'WOmGWQSzxq',
          'WO5zru8BW70jWRxdOSoEW7bwW7FdJ1y',
          '576g5QoLjbajWP4V',
          'g8otjSolWQGpWRVdUq',
          'WOJcShVcSKy',
          'W7BdSJNdUmoxWQlcLG',
          'jIFcVJNcVSkZW5ldGW',
          'W4lcSmopW49E',
          'WQaCwdW4tmks',
          'W63dQmokqXRcQmkjW43dIu8',
          'itGxW715',
          'W4yTbSkGumksW68/kG',
          'xZBdGW',
          'FMddM3BcSaO',
          'CfyWWRFcTCkQW5RdRmkMW4pdOwDrBYJcPq',
          'W6e/f8kQvq',
          'WPTHtx8k',
          'W6roguubhCk5yX0zlxBcO3/dJIVcLq',
          'WQbsW43dHCo3W5JcJmkc',
          'W6vtdguRfCkNzq',
          'W7xdMSk3BfnCuq',
          'imo4tCovWPa',
          'WRCFW7WXu8ohWPdcGqi',
          'vcpcMXBcV8kBWPjq',
          'WQrPW4JdO8os',
          'tJGwW4NdQG',
          '57+L5Qk4p2FcNW',
          'amk7BZXV',
          'AbHQfXldLmoK',
          'WOdcG8kGeSkhWPddSGS',
          'iLnvW6vBsCkAWPLKcGNcPa',
          'WQTJtNi',
          'W5nBgNaP',
          'W7ddLmkOtebE',
          'W4tdQ305W5VdL8oaW6RcSG',
          'W47cNmohWPTvW4G',
          'W63cJmk1jSoz',
          'lSkzWQ4zoHfRWQe',
          'WOusrbzaWPbr',
          'WRtcGxJcJqK',
          'WP/cLSkwamkD',
          'WOlcHc7cP8opWO7dJ1nbW7NcMG',
          'A2tcRCkBwmkJmWDFWQhdP11OWPy',
          'yg7dJhtcTbFcPwddIq',
          'W5NdQ2O1W4pdJq',
          'gSkfWQy3na',
          'WRRcJgpcHH7dQSkEWOW',
          'W4jxo1pdGG',
          'W4FcPmo3sHa',
          'W6hdQs/dSa',
          'ospcPdJcQCkOW5BdNq',
          'WQJcM3ZcHw3cS1NdLq',
          'W5FcGCkQnmo6W67dRN7cMuz3',
          'WQ0/W5KNra',
          'nu5AW6bA',
          'W5JcSmosW4nphea',
          'q8ohAmkCW4fkACk3',
          'WRBcIxpcPHRdPSkrWPrRfHtcGmoeiwtcJq',
          'WOxcG27cQHC',
          'oCkdWQydoXf9WQO',
          'orpcM8kWlmou',
          'W43cNCouWRXyW44V',
          'WPNcG8kMemkqWO0',
          'W4enmmk2tSkvW4rCuHryW5XhW5y5',
          'zwRcT8kks8kJpa4',
          'W757lG',
          'WPJcLfTcqW',
          'aSoXWRnWWPJdHqWnhJq+WPCKWPq8eZpdTdtdMmojbsFcG8kMW7tcGW7cMe9lvmo/iWObjZv8o3RdVmkPWQZcRv9aW7yQySoNcmo5oKDJeSofW5iGeL87dSovu8ovcCoYWRDHWQWFWR4TmhFcTNKgkdBcNwZcMqNdPSkOWPTlWRtcPqlcMJ1DfSojWPq3CMXrr2/cVcb7WOtdIrnWxxH2W7rlv3RcU8kjWPCTW7JcPCkgWQCxn8k2W6RcLmo9W5pdLuxcG8o9W4ddR8ouWQxdTCkYW6NcO1vbwwJdGSoMWOvZW47cMmoxvZefW4tcG8oaW6VdLmkfs0pcLmkIc8kSWPfLoW1TASoBW6/dU8kyWQBcU2HxWQdcSX0bWOuBW5SQW6hcRmkYeMNcMmkkCComwdTNnZlcJCklvCoJtNaMzCorWQjeWQDFWQ0LWOhdO8kZWOldP3ZdRchcU8omFmkJW7NdPCo7W6BcHCoahslcTmktW4XdqttcJsldVxb8WR4TuHLBW7NdJvPdhCkltKvrWOdcRmkXWRLLwbHcW6avWRpcV8kCW5hdM8kibvqXW7ldRWP4b1RdJNjOWObQpK8UW7TPuYpdMgNdTSkAW6a8wX0qWOa4WPzXWQ3cJ8oLWQzLWO0rW4fPWQjJW7ldPmknWR/cMveeW4VdGHtdMa/cQ0lcKGmWAmkjWR0SW5lcKSkSWQSRkbmEhSkdBCkoWRFdGwRdLedcL8ouW5pcMuBdJ37cPSk3WR0UsCk1z8oXWOFcJ34fWO/dTcVdVmo6fLtcImoJW6xcKmkxWOeeWPxcIuZdHmkZW6GlWQddH2PIW4W6WOBdLh3cM0iPWQtcLCk6W7JdJb/cOCodW67cG8oDW6frlSoIx8kSW6ldKSo3rSkGemoVfvZcKmkQgCoEtrxdRCofW7JcN2FcIaq7bc3cTmkemddcTmofd8kKWQldSG5+W701W5/dHCoEsSkWl8o5WOZdU251WOhcOZSGj1dcLSo0amo7W5ZdKxpcGIm7v8oEnmkhW5vcvaxdMrLKW7BdH8ozECkyre3dPSoeWQedW7Hzr8kQ',
          'WRtcJhRcHH7dOG',
          'W6zvW7pdI8otWRi7WQKv',
          'W4FcTmogWOvjgvzzW4xcMNeG',
          'patcL8kVcq',
          'W5JdPwW1W4pdRmokW6RdPGRdLJb5',
          'prFcMSkQpW',
          'q8odAmkCW4Tv',
          'WQtcJNBcLXJdPSknWQnodqtcMmoe',
          'k1vhW6Lta8kHWO9QcH3cUcRcNSoZWRa',
          'sI4AW7BdSe81W4e',
          'ocxcRZlcQq',
          'W43cTSopW55mguTFWPNcVxyJdCkd',
          'W7W2imk1uq',
          'W40Jh8kaySkEW7i',
          'E8kLW6O8W50',
          'W7pdVJ7dKmobWRRcGutcUszYrG',
          'WRNcJmkyhmk8',
          'WQZdQstcOq',
          'imoGsmom',
          'W5ZcTSovW4TzguPu',
          'CbPQbcG',
          'qCoqy8koW4fwEmkbWOtcMXT0lmki',
          'vs3cJHFcNSkAWPPm',
          'w8klp8k9sa',
          'WOlcMSo2W6i9',
          'W7RdHSkitefx',
          'WQ0uW6y',
          'W7ldHCk1tfXBESocjCoqW7G',
          'ESoNt8k8W5W',
          'W4NcImk6pSoGW53dSwJcLue',
          'fCo1bSolWRC',
          'WRhcIgNcLNRcQeVdNa',
          'urBcKYJcPa',
          'vwmHWRPA',
          'lSkzWQyBoqzDWQzJWOu',
          'D1aSWQBcPmkXW5/dSa',
          'kf9gW6HmECk5WP5KeG0',
          'W7LfWPddGHa1WP0',
          'WONcG8kMhmkqWPFdNqJcS1BdLCoAkXvoWRa',
          'W4nphvi',
          'WO/cGCkEeCkV',
          'rNC8WQTzW7HKW5uvaCka',
          'W6O9fs7cSv3cMa',
          'kbRcN8k6nmofWRO',
          'W73dLmkOta',
          'EgtcTSkGvq',
          'W6NcRSoiW79C',
          'E8k5W7OG',
          'W7bicgOE',
          'WQtcUNDmxG',
          'WQ4EW6e9vCoMWQVcOG',
          'W7JcI8ovW5PN',
          'AmkwkmkCBq',
          'WR7cRSkcmSkb',
          'CCkPa8kJEW',
          'W5JdGHa',
          'WRWDW707tmomWQVcOt5wqLJdLq',
          'tI3cLGFcIq',
          'zaDLaaNdJ8oXWQO',
          'WPRdLmo/zmkXWO3dMW',
          'W6XzWPhdMb0RW4lcM8keW7eFWPJdUqZcRN9Zv8oFW6bZWONdQeyMWPTdW5JcTZRdNCoXWPb4WPNcRK9CksNdMJScWO50WQeCd29JaSkVWP3dPmo6WQuqW4hcUs0xWQfxcJJcVqG1DsWiDIhdHCkcW44yWRiSWQ3dRIShE8kQWO4KW6S7W5S',
          'WQtcNxVcIHG',
          'W5/cR8o5',
          'W5ddOwKeW4ddRmooW6a',
          'EvaMWRFcUSkT',
          'W7DzdhiEbSkNCW',
          'xwhdH8oa',
          'jvvoW7XkwmkSWRzSca3cKM3cISoRWRnvkxFdMG',
          'odBcUdxcUmk/W4a',
          'WRRcJmoQW6iHWRC',
          'W6pdOSoirGe',
          'WOZcGKtcQcGmyq',
          'vc3cMbFcGmka',
          'gSotmmolWRyv',
          'nHOXW4u',
          'yvddQKhcHa',
          'WR/cHNpcH3RcRKBdGW',
          'W6BdM8kSt11nvmoz',
          'osFcSZ/cRCkPW4FdISk2',
          'W7/dMs3dGJ7dSb0',
          'WP3dRmkyWP4vrxXrWOxcMM0o',
          'WRXuW5ddICoW',
          'tqOIW7qj',
          'W4BcRCoTzsmjW5z1',
          'WQmgWQW/Cmk+amojW5ldP1lcTcG',
          'WObzt14wW6C',
          'qWO7W6GEnwq',
          'pSkfWRuqmar6WQC',
          'W4Omomo2u8kJW5Lcwa8oWOzf',
          'pCkTWQmSWOVcMr1rcMGS',
          'eSk8BHn4jWRdKa',
          'W4NcI8k8oCo9W5ldSxq',
          'EmkbW5hcKmk6',
          'fCk3EbDRnG0',
          'pJBcRJ3cUmk/',
          'W63dRmoqtahcH8kjW5u',
          'WRNcJhRcHG',
          'imkqWRmqlaPVWQm',
          'bmokt8o/WQ8',
          'WOxcOCkqh8kf',
          'AqLZiJu',
          'W4i/imkGCmkv',
          'WOhdSsFcK8kh',
          'vColDCkiW4TlAq',
          'pJpcOZG',
          'yGvJhH4',
          'WOVcKqFcPSoS',
          'W4tdQ305W5VdL8oaW6O',
          'uSoqy8kzW5bDxmkKWO/cMby',
          'uJFdICk7EGS',
          'bmk5FJD4',
          'Fmk+W5u5W4dcGeG',
          'WPxdSSoCnbfyW78',
          'W4GTamkGCCkC',
          'WORcG0tcVJurtGm',
          'smoLqmkHW4m',
          'tJWJW7BdSu4',
          'scpcIrVcMmkAWPro',
          'pGdcUmkwlW',
          'kbNcHSkM',
          'kWOSW4DvWQazW4ZcKIO',
          'jHFcGSk6kmoyWOjG',
          'WO5xrL4iW7u',
          '57+s5Qcxxdnl',
          'W4fbkG',
          'WRVcJmoNW6iHWQ3cKHK',
          'n8oTv8ovWOFdL1hcTCknW7f4',
          'WRnZCulcMW',
          'W4hdTgOXW5VdMW',
          'xt3dICkOFaWNnG',
          'ESoAuSkjW7q',
          'W4FdP288W4O',
          'W50qm8o4sSkv',
          'W7hdPmo0uZ0',
          'WRddQs3cRCkwqa',
          'W5SdmSo3wW',
          'W4BcO8oSAtKu',
          'jrFcM8k6',
          'W57cGSocWPHnW4G',
          'lYpcVdxcR8k/W7ddGmkXWRzr',
          'thVdJCo6WPy',
          'WRmxWQWWyq',
          'W5jqfvavW5isW70',
          'W6hdQCoa',
          'ywtdJq',
          'WR0qW78Xu8oU',
          'WObFtNGvW7ebWRBdUCo1W7XAW77dKW',
          'WQ7cGCk5oCkH',
          'W4NcM8oiWP0',
          'F27dNxBcSaO',
          'Ec8nW5yq',
          'yCkQW6dcRq',
          'W4nwgeqa',
          'W4P+W43dNmol',
          'rmoxB8kC',
          'WRWyW7WW',
          'mKHcW7PAxSk6WP8',
          'DqD+eXpdJSo4WQPX',
          'WRtcTNHusCkUCMy',
          'zLa3WRxcVSkWW5BdSmk7',
          'WRirWRO3FSk+',
          'WOKltsrBvmo0nKLrBdRdGJhcIwFdKmoiWObmlbuWWP7dU8oWW5SlWPBcUCkjW5ueyH7dTCo0WRWhWRZcSsFcHqRcSwJdILhdKmovW6RcHmkFWRZcL8oKlwBdGJ9uW7f6m1G1W5bLWOXuc8k2o8oJWPNcQrvWuxH9WPrSnmoqWP/cSMxcH8oqjSoiDSoifsVcOhrYdMRdTmkvW6JdN8oxW6VdNCkgfSoYWRxdNL3cLmoQW4ldTSoaCmoLW5nBW74ZFG/cJI4pw8oRt13dSSkVW4aBWRpcL8okWR5BW6JdKCoRydmrf8oiWPrVWRb5g8k/ymkkW57cJNZdJ2CbBIBdPXHWiSookqPEW6tcM8kEW7xdSttdKgf1a8k2tSo6WPVcUCoXe8kHpSkPBmklf8ouW5D+x0fxFaNdQtLAW6amrCoopf4TWQVcUComWONdHwvsvCk+WPiBWPifW57dVmo7hCkbWRNcUYZcUHNcLL9xeabskSoqjX43WRjQo8oOW6RcTxDMW7X1lazRvCofh8k7W4BcUYLcW4HVW4SUiCkAx2hcLCooWOjoiCoxWRVdO15wbmoHW4arbW3dKGJcJSkub8kqWRBcN18jF8kmW4JdKSk3WPZcUCknB2nJrmooo1jQjcFdLHahW7SzWPy1yfPbWOldJdTypCkEvCoAW7WVjmoXWR5SWRWjixeupN7dL29KqIPGq38XW6RdJYy0W5OfW7HDpvzIBb3dRszze1O+v0XstSkFBs3cTCkHmCkwWPajWOtcJmo/wL9bmSkXbKDas8ogfaPSW4tcHWBdINhcJcBdHmkbWPVcL8o0pSoMWR7cQN3cGvVcG8oFWPPjWQVdRSoHW4fRfSo1W6zWWR4jq8ozWQhcSCkFW5NdNCouW6abosFcPrRdTSonW4hdQConjNZcHJdcLmkJm8okoXZcK8kdfsuOW6LLW4rHWQpcLKDHprpcNSosW4JdIeyIWP3cPKC+tYtdUSozAmoyW57cHty1WPlcISkvWRL+BrNdVLKPWRZdSgmJWRJcS3pcKq7dOSkiWPlcUSoqWPJdHhFdK8oXWORcVmoZWONdIJ92jI3cVmoZW7BdOmk5l31dW7eQeNCfW4/cMd07p8odha0AgbFdRSkygfHIcCoSW50+aSownCkUWOfWw0xdSCkOWOFcO0XJamkPbmoBA8kpradcM8oNW7jyW4mAqW/cSLKlku3dR8kGb8o7a8kpcxv6lmoEj2NdRCklg8kia8kxW7ayW7jnWRDEc3tcJaNdGaxcIaOyW6DcWQRdM8keBCoYowSsWPa3WQ/dLsdcTq0EWO/cNCk/ggmPgCkUyHGrW7mrW54vW7GqW5ZdQIVdTwxdGuNcP8kaC8ojE8kHW5OLWQRcK8oUWPzUWO59i8oAWOPXW67dKwulWO4iWPv5W74WCM9BW5hcKmomob5rW6mhjmkZWQOGw3ldKb9SWPX0W5NdI8ohgxbeW7HMWPPguwK5W4KSW5DGW4qjqfCVFmoGt8kRW5uADaVdU8opWRfTW4/cLXhdS8kYAq8/r2VcG8kokCkwW57cJCkeWPFdJItcGCksFSoWWQbPW57cHCkwlmolW6GFgSkgW6zTjx8ReSoiW4NcRNddLSkXdxlcThVcPHRcL8kSbavNleaQW4ldONddVfVcNXpcKSobgCk1WQCsW7ZdOMzkWONcNcDfWQRdNSkeW7NdJmktrJRcUCoFewBcJ0dcTmoUW5jLWQpcG8kBWOxdI8knW4CUmHVcMCk6xKxcSSkmW7RdP8kzW6aImuG4WQ0/yCkuhSkYW5rZW7K1b2ZcHCkrWOZcM8khW6FdNwRcUSozbhD+W7RdOmoPW7ldQGJcVSk5W4tcOmoDWQLRmMqGzmoyCSkyFSkdWQ9XrfD7k8kBWPO4W6BdHsyPdCkYFuGCWO7dMwiZoatcTSkhhMr1uK7cSgtcT8o6W7ZdRaxcOshcSSkCtmkqW4r/Bbq8W5yToJvFiWBdHCoeW6hcV8kfFCkYBGRcRLaRa8kHW4OraNGGrmkYc8kKBXRcSSk3nSohtSo7s8kfWOWUjN9HWQXud8oanmkEn8oCDmouWO9yDSkUnKS9eCoui1bbtKFcJKTzW6VcICkkW7j1W6FdTmobWRCbWQSwWPLYmNTfW69vwCkbzCkAbmoruZddVSktW7qFhmkQWRmOWQZdIwJdN8kxW7lcOmkJamoIWRlcU8kaxNBdL0pcMWFdGJJcR8oWaYJcJbWEW4HNW6ldPsCoW5qXnSoOW4LqW7aRutiLr8kvW4tdLCkEW7ryW6nNsCkzW45KqSkczNvQiYJcVMNcGmkKWQnAWQFdQ09PFmk1WRxdTmoLpq3cIgDNW4HQW5L3qmoDWOBdTCkQjg8mb8k0vLVdOwiIyffyCI9WtmkiW5VdH8kLgZdcPCoNE8k+f8k1f0e',
          'yCkJg8knFq5GWQxdGmoQzmoY',
          'hmoAhSo6WR4',
          'W5VdNw0JW7u',
          'CCkQamkIBa',
          'qaqJW74',
          'WPRcSv8',
          'emk5zZD4na',
          'EvO2WRpcUSkWW5BdSmk7',
          'WOZcHSkWj8kAWPddVrm',
          'W5znlxddNGeL',
          'gSkRrZD5pq',
          'j8oNz8ovWPZdL3y',
          'WPfIgeBdTZqg',
          'W63dVItdU8oCWOJcKLNcVIe',
          'WRGEW6arqmoSWQW',
          'W5G5a8kbASkpW78OnJxdLNK',
          'Ftj4jXm',
          'tslcKXtcG8kbWPzt',
          'i8k6WQ8sjG',
          'kLTbW6LtxW',
          'W6jnWPFdJGaWWPNcHW',
          'yH5UgG8',
          'eg9TW5rm',
          'ySkNhCkPzW5CWQpdHSo6',
          'WRlcT3Dcv8kK',
          'W7NdIxhcNgNcPu/dLa',
          'umkQjmkusG',
          'xGO9W7ipcxVdTq',
          'emk3zcz4oGNdLa',
          'nayVW5Xn',
          'BwtcQ8kQvW',
          'WPpcRJFcSSof',
          'WQtcGSoMW6a7WQRcLGyR',
          'WQPLtMlcKWZcSmogWRGFW5m8W53dJq',
          'ymkPg8kTFr9l',
          'amkSAYb+',
          'WRddPZ3cPCkxwNed',
          'pYFcUdVcQCkUWOm',
          'W7rkgwejn8k7EGyd',
          'W43cUmomW49Feq',
          'x2yzWQXm',
          'W4PrW6ldQCoz',
          'W6zrW7pdJ8onWRu/WRy',
          'W4tdRw07W6VdM8ozW63dOqO',
          'tqOGW68jd3JdQa',
          'FSkJaCkRFri',
          'WPBcGtFcPG',
          'WRruW43dNmoSW4lcHG',
          'W43cNSo1W49a',
          'W5FcPSo6',
          'W5VcO8oQAsujW5H3',
          'xmodCSkDW5zrBCkP',
          'b8oLWQhdQCo1WQLIW47dN8kRWQ/cTvfgW5xcM2FdIJFcMMxdImoEW7lcTGRdSXJdH8o6WQaEW5JdP8oHWPWng3lcOSkIg8kRW5ZcOmotpSoEdmkFW5ldSmowW6rXgmo4cCoXW73dN8oIDMailavqWR5Uuu1GWR1qWRGGW5RdV8k2W5ddKSkPlI9dWORdPfFcOKddRColW67cJGddMhi4jK8rq3nXW7ZcPmkmW5pdVSoqCbBcPCk2W5Obe8oVs8k3WOGEW5dcJ1BdVCk3v8o8WRBcNKzkCmkpmbxcRctcUZVdTg8bW4zgzCo7WQeZWQxcUSonW67cUgNcRrToW7RdN8oQW6pdOmouW4vbjmohWRhdNf9QcmkZWPnsW596zMKqWPBcHe/cVqBcPCkRbCoVW5voWQJcGSoxCYyfW4VdNufzw0lcQfdcTSoLuCkLW4VdL8onW5OuW6CIW6fiWQWnq8obWQSWW7tcQtFcHSobkCkjW4tcIMxdVSk9WOJcRrrBWQ0Bs8k6WRO2kSkNW5NdJGVcGXhdKmo1dui4WRrNw8kwbJG0WRTCeMP1W6lcPSk3AKBdGSkcASoPWOxdRbaIthNcTmkyurdcM3KCumkcofeOWQGkW4pcHdldHCogaavKgsjHW7dcHxldImoJW5hdHSk6DCoxWQpcHgC+W5ddJL0UDHG0ECobhCklWPVdGJFcLvhcKNzmjSkbW59bywhcMWpcRtJdNW7dQSo+jmk9qezalsddVmkmC8krmWdcSs90WPrCWQVdUmkez3ScsYz4W7ZcRCkWeJpdOX9yr8kmgf/dKmkHW4P8ffmuASojzrZcG8k9W5VdSqPevCoEW4brBCoIW6eXWQhcS1ZcHmkxfgOeeG9wWQb9tKtdT8oDB8kDCaiLW4y3WPpcPuZdSwrxo8oXW4RcNYpdSghdS8odDmkBW61PBmkyhHJcM1XrrMmdd8kLzCo3WQhdSJ0coSkrgfWIuSk4W7H5W5FdVNJdOmonj1reA8kdBeBdK8oXws9RW6FdSmoPtZ/cNgJcTNVdJSo4WR7cHSkZWORcJgLcWRyalYvTzqJcU1naW77cSSk6W6VdMmk1w3aKWQ3dOSoOwrewAmk/qSkbFSk2W6yWtgRdSxDJagWjW4yTWQxcIbrzWQj6bSkbcmorW68UW5iIzZfEW6uVW6m7xSk8w3vUzmkiFxSCzCkysahdUCkcW6ZcJtWOwLDEkCobWOddUSoIWRJdTGK6WPX1W50QhZpdHmo0WRVcQHrdAs7dU8kRcHZdJa3cTxhcH10GDSo4W54g',
          'jSofhCoaWO8',
          'ywldML7cTa',
          'WOdcMY7cUW',
          'uJVdICk5Fq',
          'WOfzsL8',
          'WQBcGSoGW64NWQ3cNbS',
          'W7xdQY7dSmobWQS',
          'W5JcGSokWPbn',
          'gmoxn8okWQK1WQ3dTay',
          'sNNdKSoCWQ7cP8oIW7abn8krWOK',
          'CvmNWQtcT8kQW5RdRmkM',
          'bdWJW6Xm',
          'pb7cN8k8mG',
          'W43cTSonW4vF',
          'WR1LtNpcVWtcRSotWQmMW50',
          'W5RcLSkQmCo9W57dM3BcNv93vdq',
          'WQtdPZVcGCkcuhy',
          'uMhdKa',
          'WQJcT3ZcRIq',
          'WOxdU8kOsbORW61IW6W',
          'W4VdRmkF',
          '57+35QcErrfaW79q',
          'WOdcLtpcP8otWOS',
          'WORcG0tcUq',
          'W53dQMCK',
          'WQpcVCkuhuVdMmkT',
          'W43cTSopW55mguTFWPNcONOUhSkdWOi',
          'sY4xW7BdSfu',
          'WR3cIgBcUtO',
          'WPddRbhcKSkS',
          'z1O2WOhcV8kKW5y',
          'FmkkgCkyCq',
          'FCkQW7lcOmkHW6aTWOa',
          'xmonySkDW4Hl',
          'sgFdHmoqWQlcISoP',
          'WQZcOX3cRCoe',
          'WRqfWOCZta',
          'WRRcJLpcHs4',
          'ESkJgCk5FG',
          'WR5VqKKF',
          'W7RdKmk8q0G',
          'WPicW7GWta',
          'D1CRWR7cSSkSW5BdRq',
          'vMeQWRft',
          'amkSCZ5V',
          'W4Kem8oytmkcW4jh',
          'WQhdPYtcTmkwr3S7FCoDEmoVWRFdMr/cSv3cNmohWOG',
          'wSkXaSk+Cq',
          'W7TFW7tdG8olWRuXWRq',
          'W5JcL8osWR9lW4iQW4pdRsuFWQOB',
          'W4ThaeCCW44eW6TN',
          'WRiBWR0/CmkYkSol',
          'WPxcNs3cQ8odWOBdQq',
          'W7TFW7q',
          'W4BcK8osWPXlW4qMW6W',
          'wYtcMXZcI8kwWQHvWOztrCorWORcOq',
          'yCkJg8kFyab3',
          'WQtcMw7cJWK',
          'W6pdPCofrXtcI8kyW5xdNLlcIeiBW7xdJGldPW',
          'x2ZdMColWO4',
          'W4upiSoQw8kLW50',
          'W6ddLSkGr1C',
          'W6bea3aAhCk6CXS5kxpcHxNdNq',
          'WQdcHmoGW64XWQJcLG',
          'W5tcRSo/BZW',
          'W5NdPwu1W6RdN8oCW7a',
          'WQOjW4ygAG',
          '576g5QoLjXCl',
          'WOusrgvhW6yG',
          'ECk3W6dcV8kWW7SXWOS',
          'mSoSrq',
          'WQbiW43dHa',
          'yxJcKmkhumkanbDQWPFdOf4',
          'lXpcGmk2oCouWQPO',
          'WQfStCoLi8oDWRPRyIRdMgvmw8oFWOeMlXCBW6FcLCkEW6JcH8kyW75KlJxcGMpcVCkYW6lcUCo1zM3cLCkbWRBdRWlcNCk9W5VdMCoWWONcKNpdGabXdJ48WOnsasylrwBcMMxdHrxcHI1jW7RdGmowscb8WONdQmohWP94n8oBqrTaWQRcMmojWOX4W7BdOxzxrSohvYJcLCo4WPtcI8kZqIrYW6mpjSk9W6RdSmklWOVdGCkFBSkcWORdVCkEfCkSW7ZcGCoAm8oiWO7dHSo+eSkaE8onmqRdPSkyhgBcQmkAALFcO8ooWRpdICoZ',
          'W4/dJaNdVSoq',
          '57225QgZx8kKWRj5zq',
          'WR7cNLRcHH/dQW',
          'EvySWPtcV8kYW4FdPSk6',
          'WP5yr3Wv',
          'W43cSCoaW4rkfvvwWQ7cH3y0cSkcWOdcOq',
          'h8oYuCowWPu',
          'A8kWW741W4RcHa',
          'nCoHt8oDWOJdSx3cT8kiW7b/abC',
          'Bg/dV8okWQy',
          'WPpcHXFcUmoy',
          'A3NcP8kDCW',
          'W7ldQmoktrBcNmkQW5xdG1lcKa',
          'qH1thZO',
          'raJdR8kUtq',
          'nSoLsmopWPFdM2tcVW',
          'sGaPW48umNxdVW',
          'W5znb08eW4KoW7yK',
          'WOusrbjiWPyK',
          'qSkHW7tcQmkm',
          'WO5ArfuF',
          'iJxcJZJcPCkU',
          'nSoMqmoEWOJdLW',
          'ht7dTCkbWOBdNSok',
          'WQpcN3BcLqNdSCkmWOu',
          'pcFcVJNcVG',
          'xYxcVdpcHG',
          'WQpcQ3ZcOmo3W7ZdGG',
          'x0RcR8kGDa',
          'dSksWR4fnq',
          'vYaDW7RdTK87W4pdPq',
          'tq0VW7uCbvddSGKzWR/cUW',
          'W6hdMSkWtLPrxmozpW',
          'WO7cQMBcHI0',
          'z2/dKhxcSWVcRwa',
          'kfToW6K',
          'W6XdWO3dNXmWWPBcJSkzW5auWOxdUXBdOq',
          'WRXsW5/dImooW57cH8kjW58',
          'W4lcUmodW49baW',
          'amotpSoBWR8',
          '57YA5QgkW4BdR24',
          '57+J5QcyBJdcHs1X',
          'WQZcNg7cMW',
          'yMVdRvNcUq',
          'uwm9WRHtW6e',
          'CSoOCSkDW6e',
          'lXpcGmk2oCouWRnLpSkgp8kvwbCjkG',
          'BxuvWR/cUG',
          'sdpdI8kPAW',
          'A2tcS8kw',
          'WOlcJ1NcQdqrwqO',
          'WP5gr1izW7eMWQldOG',
          'W5hdQwCK',
          'WO/dRgS5W4JdLSoBWR4',
          'wwddVCobWPm',
          'WRhcHMJcGg3cRLZdLsC',
          'WQhdPZNcVq',
          'WPHoW7/dQSoK',
          'WRmrWR0FCmkVn8omW5xdV0pcVW',
          'WRvtW5/dJSoVW5q',
          'bCocsSoxWRe',
          'ACkGW7FcOmk2W6WlWOO',
          'wtFdK8klyreNiCkDqCkMW78tW6ddV0S',
          'yCk2a8kLFq',
          'W5vxgNyFW5miW6X9W43dGW',
          'WRmxWQGYyCoZDmklWOtcPGBdTg8+',
          'WQFcGMtcIHJdQSkqWO4',
          'W6/dUCoctbu',
          'WRfwW4FdPSo2',
          'WP3cGvJcQI4wxrvx',
          'W7pcQ8o8',
          'DMJdJW',
          'W7bogq',
          'WR8vW7yrv8oQWQRcUajqqKNdGNjEhq',
          'g8oIf8oQWOa',
          'uSoLuSkDW4K',
          'W6bea3ajg8k4zq',
          'WRFcICo3W5CYWRFcGa',
          'zqOtWRGhgSkm',
          'W4rog0KDW6moW7vKW43dNSk1Aq',
          'imkXzcD5oGZdG8kuca',
          'ug/dMSoC',
          'WObtx1OwW7OcWQpdOW',
          'WOZcNeJcRdiDFqPbemkiWPldGW',
          'WPFcLsZcPCoeWP4',
          'W4lcSmo/EJisW4P+',
          'WRtdQsxcSCkg',
          'WRhcIhBcLKtcOeq',
          'sYapW7FdJ0KWW4JcUq',
          'W69zW7tdNSoEWRi9WR8YW6C',
          'W4pdPxO1W50',
          'WQpdRc3cGCkvvNazvmogF8o+WQRdUrxcSq',
          'WPlcN3hcHYy',
          'xmoJv8kFW4y',
          'WOJcJ8k9bmkgWPddPqi',
          'W4RcH8kQpSoS',
          'W6JdUmorAXW',
          'wJFdKCk1BqynkCk0',
          'WQWCW5pcM0jPW4G',
          'uSonASkxW5y',
          'WO7cMxJcOI0',
          'aeX7W5v2',
          'W5NdPxO1W53dL8ooW6G',
          'W6ZdRmogtb/cP8kfW57dNW',
          'p8oNqmoy',
          'yf4WWRxcS8kQWOm',
          'imkuWRmumG1RWRXQ',
          'oYFcUdNcOSkU',
          'W7ddRmowtb3cMG',
          'WOVcVv3cOre',
          'xt3dL8kL',
          'W6RcOCopW6v4',
          'W7ldOSoqsaFcH8khW5C',
          'iCkhWPugka',
          'W6ZcNSkafSo7',
          'W5xcRCoWEdyjW5D+W7zMWPNcQ8knaue',
          'Aq1UeaJdTCoTWR1Jr8k8',
          'ESkWW700W5FcIa',
          'WQjyW5ddImoMW4pcHSkE',
          'ySkPhmkLFrn9WQi',
          'W4tdQ3K',
          'yar/eJFdJ8o8WR1Nqq',
          'EgtcSmkgtCkJmGW',
          'jsFcPZK',
          'qGqSW74xmNhdTr8zWQ7cQKy',
          'q0OAWRZcMW',
          'WPBcQYW',
          'yWf4bbtdK8o4WP5WxmkScG',
          'trCRW7OpbvhdTX4rWRNcOua',
          'W6DrW6xdJ8otWO47WRqcW60aWQVcUa',
          'W5RcI8k/kq',
          'W7ddUItdTmoz',
          'W4bodxiFW6qeW659W4hdIa',
          'AGL/eqNdICo8WRu',
          'iGxcPCk3m8o7WOP5aCkcpCkG',
          'W6xdTY/dVmoqWQdcHW',
          'xYJdJSkXEXCJ',
          'W6HaWPFdJt42WPNcJ8koW6O',
          'lY/cUdNcR8kUW5RdGmkQWRLjWO/dSJLqW6i',
          'WP/cGmoqW6Kv',
          'W7fegwupeCkm',
          'WQmBWRKN',
          'amk9FG',
          'W5VcImkGp8oKW7JdSxFcIf1HxZi',
          'WRmqW6yXu8oMWQxcOa',
          'W5zbovtdNIaHW7q',
          'W7fKe2CM',
          'CaL/eqK',
          'WOFcKtNcLSooWRJdRv8',
          'W7ddMSkRxvnwv8oppSoRW7uWBmoe',
          'eY/cRa',
          'tghdNmopWPC',
          'W6HFW7FdKW',
          'W58hqxOIW6a+WQO',
          'WRxcGSoJW74',
          'WQtcGSoNW6yNWQhcQW',
          'Cmk4eCkmW5tcGIi',
          'ob7cMCkOhSouWPvLjCkgeSkPua4bmCk5',
          'EKldQ37cIa',
          'yCkKW7JcRmkNW7O',
          'W5FdPwm1W53dNW',
          'k1TxW6LnrCkOWPy',
          'WQxcNCoHW64NWQhcGa',
          'WQDCW4RdICoX',
          'tghdGSoEWQJcImoPW6OF',
          'WQjsW4RdJCo3W5tcUW',
          'gCocqSoDWOu',
          'W4tdSx04',
          'WRtcTNHuwSkOChddHG',
          'zgRcUSkks8k5',
          'W5ZcISkUmSoLW54',
          's2mIWRO',
          'ywldMgFcQbZcSLddK1/dOffu',
          'E2/dJxBcRGRcPxddJMldOvDuDXfo',
          'u2S8WRzuW7Lc',
          'W5VcP8oWzJ4MW5HVW6fC',
          'CLaWWPFcT8k9W5S',
          'WOZcHKtcOsikxqG',
          'WPZcJuZcUtiDsIvnd8koWPddKG',
          'amkvmColWPCop8o1WOBcMq9nkCkW',
          'ocxcQZdcQq',
          'stpdK8k5Fa',
          'WOpcGuO',
          'W64IamokCW',
          'WP3cJCkNhSkbWPddVaK',
          'wt7dK8k6qGWQiCkOxa',
          'm09kW6G',
          '57685QckgGXkW4Tw',
          'W4Spj8oG',
          'yamKW4SD',
          'W6DrW77dJ8onWQ8',
          '57+/5QoLWPpcNrGVfa',
          'vc3cMbFcGmkHWP5oWOX1wmoyWPC',
          'W4xcL8odWP1kW7G3W6tdRtWF',
          'W7xdU8kFBL8',
          'kcNcPJpcVG',
          'W5xcHCk2nCo7W4G',
          'iWiRW55pWO8oW50',
          'WRVcTNDe',
          'gSotk8olWQGv',
        ].concat(
          (function () {
            return [
              'wMFdHCoCWQpcKSoLW7ycn8kjWQbRWP3cPmo6uG',
              'sIFdLCk+zWCImCk0',
              'W7xdVSoXwWy',
              'WRnvW5/dGSoKW5tcICkwW4VcVsqwW6BdNW',
              'WRFcICo3W4e/WQVcHdKXW7bo',
              'W6TyaeGg',
              'W6PcW6ldIW',
              'WQ/dQt3cOCkrwN8b',
              's2CQWRTfW4bxW54ygSkx',
              'WR8vW7y',
              'nGigW5HA',
              'W5i0fCkjAW',
              'W4L1dK4s',
              'WRfzW5O',
              'ECoiACkPW64',
              'W5KJgCkKD8kuW7uL',
              'D8kOdSkUzr8',
              'WR/cGmo0WQGfWQhcKae3W6WyWODLy0FcHa',
              'zgddLwBcUq',
              'WR4BW5tcMefVW4VdM8kmW7WeWQddTti',
              'ushcNv3cUSkwWPHuWODIg8ktWPxcVCob',
              'WRWDW707tmoDWQxcQcDmqG',
              'AsBdHSkEza',
              'WRVcGSo3W6i/WRC',
              'sw/dG8oCWRi',
              'WQxcJSo2W6K2',
              'sCk3W43cP8kh',
              'W4ldPwiLW4O',
              'ud0pW6pdLG',
              'wYpcLaBcNSkCWPDt',
              'W7zBje4O',
              'W6tdSJNdOCoAWR3cLG',
              'W7TrW6NdJ8ot',
              'WR9RtgpcLW',
              'WQbsW5FdGSo3W4i',
              'W65kWPFdVYq',
              'yGzQfHFdHq',
              'WRJcGSoHW6OYWQG',
              'ymkNfSkGBbn1WQq',
              'WOXetLO',
              'B13cJ8kiyq',
              'xSkFW7CXW6e',
              'fCotp8olWQGh',
              'WQmBWQCQDSk0kCow',
              'W4BcNCocWPXvWOiJW6xdOI8oWRLuW6WjW5y',
              'W7tdOSoIqaVcI8km',
              'A8k+W70KW5NcJejitfX7W55JWOOP',
              'CKytW7amumo7WOyWgLK',
              'W4OOcq',
              'sZZcLHVcMa',
              'W6DzW6NdJ8om',
              'xre3W7CE',
              'WObxx14iW70gWRW',
              'lmkdWQiu',
              'W79rW7xdJCoAWQG',
              'WRBdVtVcPSkkv3Czyq',
              'WQFcRgvi',
              'W4NcI8kMpSo9',
              'sNZdLSopWQxcLmo/W7W',
              'WRhcHNNcLMtcSG',
              'W61ocgaiiCkKCGGfkq',
              'WOTqyCkOFmocWPW',
              'W7mnW7ZcLmofWONcPq',
              'C2xdNq',
              'mSoSrCoSWOxdGwe',
              'mICKW75k',
              'W6pdOSokxqhcGCkeW4O',
              'WRpdMXZcGmkb',
              'FgRcSCkixmk+',
              'W5JcM8oCWPW',
              'mmoGqmosWOpdL1pcT8kAW7zPcXe',
              'vINcNXBcN8kMWOTeWOLKtW',
              'W4pdMdNdMCog',
              'p8oPwmozWPBdGq',
              'zCk+W7C1W5tcLG',
              'F2ddJxBcRHdcOx8',
              'jCkwBJnt',
              'WONcP2RcQaa',
              'W5RcI8kJp8o7',
              'zSkWW741',
              'WQvRwxpcGby',
              'W4rXogyl',
              'W4nFWPVdUXa',
              'WOjqtuGFW6aWWRNdTmoIW70',
              'W5Xbo2tdGICWW7tcQCoXdq',
              'DqD/fq/dICoYWRC',
              'WQ9ywuOq',
              'W4jhaK8tW4uIW7DHW4ZdMq',
              'u2VdG8oyWQZcImoPW6OF',
              'WP0sW6SKsG',
              'sSkqW7xcRmk4',
              'tv4gWRRcOG',
              'oSkqWRmqla',
              'W73dMSk3rfntumoqkq',
              'BaacW7VdIa',
              'W5FcSmo7Bq',
              'W6O0oCktzW',
              'W5OfoSo2smkv',
              'WQ7dQsVcOCkpyxSdFmokFSoVWR0',
              'sqaHW7yEfgBdOG',
              'qSoby8kwW4e',
              'W4Dgea',
              'W4yTgCkGCCkuW7SN',
              'W4RcKmovWPzvW5GZW6u',
              'W4vdgumcW4e',
              'sI3cGXhcJCkaWO9fWPO',
              'WRauW7CWuSoAWRtcQc9nva',
              'Bg7cR8kktCkVdq1eWPJdUG',
              'WRdcIh/cLMtcK0/dNJeTWQHKlW',
              'F8kNg8kPEXnZWQa',
              'W5OfoCo9w8kcW4Hc',
              'WP7cGCk1g8kq',
              'nv9xW41lwmk7WPnNeXZcSW',
              'W4qblSo8tmkd',
              'WRFcICoAW4Ga',
              'W6fjWOBdJWemWOJcJ8kkW6Wu',
              'W5xcI8kUnmoeW5tdUN/cLa',
              'jvjcW6jysCkeWP9XbWtcUghcISoS',
              'w2ddLSoBWQZcGW',
              'W5WLcCkXA8oh',
              'sg0RWRPAW6y',
              'bSk2yZrLjWJdLa',
              'W55lp2tdLby',
              'uslcLbFcNSk7WQ9TWQq',
              'W5VcO8o1AqqpW4XVW6W',
              'CM3cKSk5Fq',
              'W53cUSoaW4zi',
              'tqO+W6i',
              'WR1CW4RdICoXW5JcGSka',
              'DMJdI3BcVW3cQxZdLeZdR3fyCW1j',
              'vsNcJHpcGmkDWP5tWPS',
              'lv9AW78',
              'W45rW7tdG8orWRS',
              'WOlcGuNcQcOl',
              'jIFcSHJcPCkPW4FdJSkQWRTa',
              'WPdcKsO',
              'W5pcR8o3FYqjW49+',
              'WR/cHNdcG33cTu/dPJa6WQ5KjvVcI8odlCklzae',
              'W4yfmSo9tCkLW51uxbum',
              'W7xdJ8k3u10',
              'i1jbW6fp',
              'WQtcUNDmxSoPlZNcHx4',
              'W6ldImobsZW',
              'W5BdQGpdM8oY',
              'WRZcJvbkBa',
              'pSkuWRm',
              'F8kQW7xcQmkHW6WA',
              'WOdcMZdcTSoaWOpdOL5AW53cM8kRimorWPK',
              'rcaEW6O',
              'u2hdK8oCWQZcLq',
              'W4uTamkG',
              'WRqgWQGOyCkPnSoa',
              'nfvxW61lsCkr',
              'WRtcTMzz',
              'W4jfmgxdNq',
              'W5RcHCkInCo7W5O',
              'jfnnW6G',
              'W5WsnSoVw8kcW55v',
              'WRRcN0hcOby',
              'uJpdNSk5Fba',
              'WPdcNdFcSG',
              'W4nphvudW4KxW70',
              'W4ddPxW3W4RdISkF',
              'WOfxsv4wW6C',
              'W5RdOwS0W5ZdQ8oFW6ddOXVdGq',
              'zfm3WRZcV8k4W5ZdSCkLW5e',
              'Ev42WRFcPmk3W5ldRW',
              'pmoUr8opWOhdHLRcV8krW7HKeq',
              'W5rhguKgW4u',
              'h8obh8olWQKo',
              'iLnqW7Xqx8kS',
              'pmoMDmomWOddK2BcVW',
              'W6Dch2eyamk9EqCqifBcI3BdGtpdGq',
              'W704aCk1Eq',
              'W53cI8kIfCoLW57dS3/cLKy',
              'mvTxW6Ln',
              'W6vDcK8C',
              'EfaL',
              'yCkpo8khtG',
              'xIpcIdFcJCkqWPm',
              'WOXst2SBW6Cu',
              'oXRcG8kXm8oxWOX+k8kq',
              'W6pdOSouua',
              'tcNcGGBcMCkbWP4',
              '57+s5Qcxxdnlk8oL',
              'W61eh2KAgmk9BaW',
              '57YA5QgkW4FdQgO',
              'W6jdW5tdGSowWPy3WQ8HW6KCWQK',
              'W63dPmobAHZcI8koW5/dHv7cLeaDW68',
              'WO4eWQ0YBa',
              'jqaYW5q',
              'W4lcTSoaW45PevzsWO7cJLmUf8koWOu',
              'AaDjpZq',
              'W44hgqPiWQvv',
              'AXyeW5ddJG',
              'yCkKW6pcRmk5W5SNWOdcM8oUW73dSam',
              'WQpcJgxcHaNdT8op',
              'vYahW73dTG',
              'pSoHk8oAWPW',
              'W55fpgxdNqe',
              'W59lk3pdLa',
              'i0XgW6jl',
              'fCoDpmoAWQGjWRBdPG',
              'W5xcRCoWEcupW5vO',
              'DqLLebtdJq',
              'qgm8WRzyW7i',
              'yrbQfsVdGCoUWQO',
              'B2/dS8oFWQi',
              'WQPLug8',
              'WP1zwfioW70iWR4',
              'WR7cQLTfsmkP',
              'W4lcGCo1WPfqW6CUW7xdIYKuWR8',
              'WRBcQ3nb',
              'ySkGW6K7W5m',
              'j1DbW6vAqSk9WPzjdW/cVNa',
              'W6tdH8kKwwy',
              'p8oPq8ozWOJdGq',
              'W5nulMxdNXydW7JcOCoPda',
              'sZZcSddcJG',
              'lJdcRZlcUa',
              'lIVcOY/cV8kZW4xdIG',
              'W4yTbSkGtCksW6G/kG',
              'WRVdJr/cO8ku',
              'WQVcIgNcLNO',
              'ih3cIM/dRqxdSg/cJ1hcTW',
              'W4vngeKc',
              'W53cUSoeW4ri',
              'W7ddTdNdUmobWQFcNem',
              'osNcVJ3cUmk/W6S',
              'WQRcOmkMgmkL',
              'W6vvW6ldJSomWOKUWR4hW7Wx',
              'zSkNhCkRBa4',
              'EqhcOCkmdSoEWQy',
              'WQlcMSo2W6i9WOxcNrW1W79FW5q',
              'W4hdQMC2W4ddJmocW7C',
              'W5znb08eW4KoW7y',
              'A8k5W7i+W5/cGe1dt31/W5HhWO0XdJG',
              'E1exWQlcSSk/W4FdPG',
              'W44IdmkNB8ky',
              'rSodCSkDW5y',
              'W7ddMSkRxubqvCoz',
              'WQmBWQCQzCkYk8oaW4xdNv7cVIH/',
              'WRiqW6SXu8o8',
              'W4xcOCo7yJi',
              'BXPrW6LpsCkOWO4+BeJdTItdMCk/W7iBAJlcICoZW4tcNhmIW40BW5FcHJOZx0HRW5rKn8o0WQRcJh95sdueyw48uvnHW60cW5fIWRBdQrxdNmk4W4LOWP/cQSkQtKXHW7JdRLpcGsJcN8kGW6FdGmknWPJcLSkiW4NcPCkbD8kAgrxcOHGyomkVW5fSAWdcMCkbyCklWRxcGmkRuSoEwsiZmt3dICobWOPF',
              'sYtcKWi',
              'WQtcVgjHt8k1BhZdLIldPYG',
              'WR17BNVcUG',
              'WQ4rWQW6D8konCobW5BdVLi',
              'W4WfiCoWxCkvW55+xaWmWOe',
              'W4ddTLCNW6m',
              'xaO6W7OpbuW',
              'WOdcNd/cRmogWO/dGvrmW7dcKSkbkmovWOlcL3O',
              'lmkvWQmWkazGWRTvWOKncdVdICkIlW',
              'W7ZdGmkXwuDlFmoel8otW7G9DSol',
              'W65kgwejhCk1EG',
              'WQBcJ1TOFG',
              'WQZdHr3cHCkc',
              'W5NcKmoWW4XB',
              'W7ddUJJdTmoBWRRcVulcVZy',
              'ySkPbSkIFqK',
              'iCkEWQyr',
              'lIJcQZ7cOmk/',
              'dSoBc8owWR0',
              'W5jPd0m4',
              'W4pcUmovW49Fgurw',
              'WQlcHMq',
              'W6PuW6m',
              'WQ0uW6ysu8oGWQNcNcfqx0NdLa',
              'WOdcJCkWeSkzWOO',
              'vchdJCk1BW4IA8kUqCk4WRGrWR4',
              'uSokB8kuW4bkACkR',
              'sYOaW7tdTK4',
              'xslcMXdcGmkw',
              'W6pdUIFdTmohWQ8',
              'W4XzWONdIJ8',
              'WOBcGJVcRmov',
              'W57cTCouW4refKPiWOBcMq',
              'fCoDiSox',
              'qYyCW7BdOvi9W4lcU8kHW6NcHSoyW7bGtq',
              'WPNcJSkwWOunW5f2W7ZcVW',
              'kcFcPZNcVSk7',
              'WRpcG8oYW6u/WQe',
              'W5pcRmo/BJSf',
              'W4DqeuC',
              'qu0dWPz+',
              'pKPSW4jX',
              'q8onCSkzW5bDva',
              'WRSFW7m2tCoQ',
              'rCodDmkFW4fm',
              'fZP3W60oWQDLW4GCgmkbWRO',
              'WRPPqxRcLW',
              'tdFdLmkOyreUcmkSwSkWW6qoW6JdVa',
              'gmo5ymofWQe',
              'AxeKWPzx',
              'nqO2',
              'WRxcGSo/W6GH',
              'vw08WRzcW7XiW5ri',
              'k1ngW4HwxSkSWPLXdWFcUgxcLCoy',
              'W5jngKm9W4erW6H9W4ZdISkvy3OjWQhdQmo5WOa',
              'E2lcUCkk',
              'W7pcVxZdS8owavyBF8o7q8oP',
              'W5RcUmotW41iba',
              'WQdcUgjfsq',
              'naa3W4PuWOGDW4VcHa',
              'WRKHW58sra',
              'hSk9zdHJeWtdK8kqfG',
              'tSkrW6pcJSkm',
              'WOZcGv3cTa',
              'W7lcGmoXrGi',
              'WP9GvwFcLW',
              'y8kiW5xcImk0',
              '576h5QorWQpcTwu',
              'vcpcNq',
              'WQ/cPCoEW50L',
              'DdKbW7NdSq',
              'W5JcP8o7Acq1W4L/W6vAWPK',
              'W5hdQwCJW5ZdL8ozW6e',
              'WRryW4JdHCoGW5tcOmkdW4BcSd8',
              'W7tdV8ofxXBcNmkBW5W',
              'yCkVW7BcJCkV',
              'Aw/cPW',
              'WPdcGcFcRSoe',
              'FSkGW7xcImkHW70WWOFcNCo+W7VdSa',
              'W6pcPszCcCk9k2NcHYVcOG',
              'v8oiCmkRW5q',
              'WR1sW4VdN8oMW57cLSky',
              'sWGNW68',
              'WRtcNKjfvG',
              'W5FdLSk/yuS',
              'vcWlW73dPW',
              'FmkMW7y1W5BcPejeu3vQW5i',
              'kCkEWQOWmGzJWQP3WPq',
              'yxJcJSkksSkI',
              'WP5tx3iuW7acWQG',
              'WRn6W6RdICoU',
              'W4VcGCkHnmoSW4NdU2G',
              'jGD6W6ddRSoSW7hdSCkTW5tdVKO',
              '57+E5QcqW5lcNeigW4K',
              'zCkNg8kPEW',
              'W6nnWPRdJGaQ',
              'W5xcRCoUDq',
              'W44momo2tmk9W4XewbmaWPnb',
              'W53dJtFdG0ZcO8oFW4ahcGNcNCohihpcKSkmW6RdN8otrmoVxK/dPM/cOu8JWRtcJmk6WRb0WQXkWOSSCmkXrComWR88WPFcRmoNrSoxWQykWRSHW5nkW6RdJ8ocD8o1shFdJCoqW7DLhmoXW57cLmoBW4yfW7GLaSkSW4/dK8kXWO1DWPiqp2zZymk/W64dWOTpW45+EmoBBmo5rSkIW5XGWOxdHHxcMmo+W4K0WOldMmkBCSkEWPBdSdrnW7ZdIIJdIIRcLbqPyKxdVGf3wSo3W5/cRbFdHSk6W6lcN8k2W6JdUd59W6pcVLSfWPzIWOrxWPdcICobWPNcP8o0DY8CWOataWRcGmoKW6pcMSkazYG5WRPhW55rW6ddMd1daMhdV8kVW5dcNKddTCkRW7LOWONdTMtdRSkaWRLHvIfdBanHpWtdO1/cR8kto2ldRSofWRBcMCkCfSonrYu5WP1XAexcL3pdScVdKbXfxCkeWRbRqxnCWRdcMmkxp8kKamoCAWbBd8oDW4ddQapdN8o7WPODhXFcIfila29xyvqwW5WOtGSvtYFdT8oPW5mIrZ3dN8kuW4BcRmooehldH8klWQzfkCooW73cUcapobRcR04VgfOhWQZcR8oEqJSkc8kEACo7WQmlW7ddOMhcSsmJWQTvWPtdQ8o6WOVcSHfmF8knWPBcTCkMW6lcSmoMsfyoWRtdQSo8rc92qCk5k8o4h8oHWPrVW51+Fmo9W57dLgpcGCoJ',
              'WRTRwxxcKXBcQSogWRG',
              'kaONW4LpWRmiW5ZcLIZcOG',
              'DWD4hq/dICoYWRCY',
              'W5STh8kGBCkj',
              'Bx3cPSkbtq',
              'pSoPvCozWPBdM3pcTG',
              'WRGDW6SatSolWQhcUIDAva',
              'W4xcKmoMW61m',
              'WQL/Av0m',
              'WP1zqLuoW6C',
              'ECo4kNiQDuxcH8ovrgDhWPmwdSobdsy5W67cHCofDcOxaJeWvSk3xCoFmbNdRCksW69yu2HgeSk2wbXhW4pcUJVdTSoNk1JdPYzZWQpcKeddIeRdTCokyZBcUmotWQekW7zBjSocmCotwSkGW7xdRXPcWOVdHmk1Cmo3W5VdRSk5W402W5JdSt4CWOddN8kxa8osFCkglZZcL8oBW7pdLmokW4pcIfXvq8okWOXWsL/cI8k9o8o3WO3dK8kBw8ksisRdVvxcKH7dKCofWRlcT8k3rJtdN8oHbYRdPSocWPZcK8o0pSk7cXhcNI/dIdNcGq10WPGHE8oSASo4WO/cKMJcTSooW4PIWRq+W64EWQqDpbTep1pcVSkotwtdUfldH8oiWRNdJa5aWOhcJCoRWRFcQ1mVoSoGW4qZwmoRWRHEbmoQWRSkzrWucYxcQHRdPImDWP7cQ8oFamk6zwdcV8kLfmk6W45xW5BdO8kLWOZcT8kSg259W6KwW640W7pcUYH8c8kcWPJdL0FcGSkNW6ZcHeHHWOXsWPuVAfGxW4BcHujUWQXZBqZdPmkBWPhcQKpdICoXgmkoW7pcVexdOgJcJ8kcW6WPW4lcVhjHW5mNbK9yzSodWQxdOHJcJ1K1W6iDWRBcHv3cP8k0W7dcVSo9WOSpW7RdNmk1WR0KC8o4oSoahuddKCkpCh9QbtvMF23dUCkaeSktWQ3dQSkDWO4uvSkxW7VdP8kuhI0Vq8o2WOPNWR7cLmodbXpdGf1yWQBcLSomcf7dOmofW6WvW4G1lsNcGCkaWQuWjmonrZhdV3z5W7ZdKgftuSo4oSoBFmkPsCkZW7vuv8o3l8kVCCkZW58kWQugugyCsdBdG3lcHmkgfSk4uCo5WPyMWQtdI1tdQmkzWQe7t8ohuCoXkSkiqsq/W5/cU8oBWORcOSojDW7dRqZdNCktW7tcMSktWR0XcSkFkXRdTbtdMSo9W4TdhbNcLL/cK8kdd8ozWRubWRpdH8k9W68JkwJcTunSWPX+kr/cNWmsWR/dM1tdNmkQwH1zhSoiW5BcISo4kmoOucO/WP3cNmkEiCkqsflcUce4W77cKmkNeLtdR8kvk8kPlb7cJhW6WP4ap8k8t8kgW4aQWPJcTXBcPmkTBenIdgRdPmkpaCkjW4SabY8lWOWZmCoFW4dcHmkfWPj3w8okm8kPk8ojk8oMpmkxWRpcRImyWPNcRYGCDL4CfejDdCopW7xdKSkfhqVcGmkfW74SW6bAgb7cVrzEzXXRo15/W5CauSo6hq3dPCoVW7BdI3TrjCoWDHJcRCoyW7xdK8k5W6DRWONdVmoLxSo9WQOmDGDlW6m0WOdcK8kNvXv/W6ZcVW7cTIaBp23dR8oqF2pdNSo5EZNcTfqjd8oPbSodWR8Sqmo0WPlcS0fEW5rpecxdQe4XW4jdeCoQW59OWQClb3D4ExpdOSoPWPBcIqrOW6GCuIxdQCo3W4ldL8o8ECoaqYeqwSk7nSkbW5zmt3yTWRFdGG',
              'W4ddPxW3W4RdIG',
              'WP10W6JdGSol',
              'WO/dUqVcTCkx',
              'WO7cLsRcP8otWOpdRvC',
              'W6tdSJZdUmorWQVcOe7cUJ9Nuq',
              'yCkJg8kFAHT+WQ3dKa',
              'W5VcO8o1ArSbW5C',
              'xcxcIqlcG8kaWP4',
              'zCkWW6C1W4RcJe1b',
              'Cw3dLN3cUq',
              'WRnsW5ddMmoXW57cJ8kF',
              'fmkcASkxW4vCACkH',
              'p8kEWRisnG1RWRXQ',
              'pWtcL8kPp8odWPbP',
              'W4xcOCo/ydi',
              'W5/cGmohWO9CW580W6u',
              'W4Xpnvyt',
              'DSkVhmk8zGL3WOVdKmoWzCoN',
              'W6xdUJNdUmoBWQK',
              'wIxcLby',
              'E27cTW',
              'BKhdOCoCWOO',
              'WR/cRKNcLMu',
              'yM7dINRcQbdcR33cIW',
              'z8kjn8kjrW',
              'WOrfzL4jW7W',
              'FmkJW7iMW53cL19i',
              'WR5yW5VdImoWW6tcK8kiW5lcQI4',
              'W57cGCk7amoGW4pdU3BcQLnMuY8',
              'W4JcTSotW69me00',
              'WQ7cIgtcKgNcSL7dLsC',
              '576b5QcbWO7cNSk1W67dKG',
              'W4W6l8o9wG',
              'WRVcImoNW6y/WQRcLGyR',
              '57+65QooWPBdIq8',
              'WRlcJhJcL3VcLfRdLdq8WR8',
              'BmkHW6u',
              'fmoRzCoVWRW',
              'AG1LhHldPSo8WQ1Nqq',
              'z1O2WPhcUSk7W5ldSCklW43dOurk',
              'z34JWPZcPW',
              'WOlcKdO',
              'WRlcHmoGW7C8WRFcLJiQW7fEW4e',
              'WORcGeZcRYOD',
              'WO7cJCk6a8khWPBdVXq',
              'WQ/dRt3cPCkpxxSEAW',
              'W43cTSorW5m',
              'wHCVW60EeMFdVG',
              'amo2m8oaWQ8',
              'W59loMxdNqe',
              '57+N5Qo+WQ87zW',
              'x8kro8kNAa',
              'kbRcMCkXpW',
              'W4yJcCkGB8ko',
              'zmkNa8k5Ba',
              'jX0NW4W',
              'sINcLX3cMSkw',
              'WR02W4yXta',
              'W6Pyigeiha',
              'f8ownG',
              'yM7dINRcQbdcR30',
              'W5WxmSo8umkXW4nzuaaDWPC',
              'obxcK8kXpW',
              'WOHatLuo',
              '57+c5QkjW7qEaG',
              'W4BcSCoxDI4',
              'WRaBWRO3CmkYkSol',
              'W5hdQM8YW4pdMW',
              'W5FcHCkInq',
              'WQ4EW7S6vq',
              'kWaMW4HqWPu',
              'qcObW77dP1iMW5q',
              'W6xdTIpdPq',
              'pSkbWQSCkG',
              'AwVdLCoYWRu',
              'kW42W4HoWO8zW5q',
              'fCoyb8oxWRm',
              'zLa2WRpcOSk3W5ZdRq',
              'W5ZdTSkWAMe',
              'W5NcL8oiWP1CW58IW7i',
              'WP/cJCkGfSkbWPddVaK',
              'EKpdGmoTA8kiWOPlj8kPfCkf',
              'W6FdTYxdPSo5WQFcNuJcQa',
              'BKtdGmoXWRm',
              'WQFcTMvjt8kOCxS',
              'kbNcMmkRkmoEWO9/',
              'kCkyWRqfmrbRWOHRWO8lda',
              'WQhdPcBcQSkg',
              'W5JcHSouWPXyW4aRW6NdOI0j',
              'pCoPtmoz',
              'aGuRW5vp',
              'WRldP3VdRCkbWRldG1hdQa',
              'thecWRPfW70',
              'W4nmfuqCW4u',
              'W63dVJ7dSmozWQdcLL7cQa',
              'pSoNrCozWOJdGq',
              'CfyXWQBcT8kWW5ddPSkCW40',
              'WQPTW7NdVmoN',
              'WRXKsxdcNrFcS8oq',
              'WQmCWQGWy8k+aComW4xdNa',
              'A8k+W78/W4O',
              'W4Kem8ojuCkzW4ne',
              'ux7dLSoAWQNcKSo1',
              'jINcRJNcOmkP',
              'W5GvjmoX',
              'W4tcRCoQBsmjW5z1',
              'kahcNJNcOq',
              'rWGPWRqmawddVGKsWRpcVvNdNSkArr1/BCks',
              'WRPVvf/cNahcU8oB',
              'EmkWW701W5q',
              'W4RcImopWPrmW5KV',
              'WR4zW5BcNeDRWRdcNCkmW4W+WO8',
              'Emk1W6xcQmkHW6W',
              'WRBcMNtcQwu',
              'tqKHW7uE',
              'l8kDWQGAmYbHWQjPWO8ngsW',
              'W4zZcLldGa',
              'WPRdMaBcKCkZ',
              'W6ZdUIJdTmozWOFcNKRcQa',
              'W6ddTSkwtwO',
              'mH0JW5TzWPqlW50',
              'AmoaBSk1W54',
              'W4NcI8kMpSo9W4G',
              'WRVcUg9fsCkY',
              'W4KGaSkQBSk+W7uMmJpdINjh',
              'W7ldQmoktrBcNmknW4S',
              'rmomB8kEW4TkyCk2',
              'lSkEWQKbpWPGWQPR',
              'W6pdOSokxrlcH8kgW5ZdNMRcLeehW7m',
              'W5naoG',
              'W5NcOmo0Atqu',
              'qSowDmkDW4vvymkSWO/cMaK',
              'W44GcmkOzSktW64',
              'cNJdJKRdNCobW452WO51qCo5WRi',
              'W6ZdTcVdTq',
              'kc7cOZdcQmkOW5BdGq',
              'jSk6wSkWoWyJWRdcKCoJia',
              'WOHuW7RdVSoj',
              'oSo7BmozWPFdMG',
              'xqyVW7CE',
              'vmouy8kwW5a',
              'W4JcNSojWPDC',
              'W7XyWPRdHXC',
              'tJ3dJSkYEHa',
              'z23cPCkCxmk+fqDeWPhdPK0',
              'jmkcWOirnXC',
              'W7mvnW',
              'f8k9BqzLbWtdGW',
              'W6m/lmkdza',
              'WRJcGg7cG2FcSK8',
              'E8ouASk7W4i',
              '576Y5QoiB8o1WPe',
              'W5HYW6pdUCow',
              'W65ecwexw8kNFGaBjw/cHxddHYddGCogW4CaBG',
              'iGxcU8k6kCoz',
              'W5FdQ2aKW53dKCodW7C',
              'W6fnWO7dJG',
              'p8kEWRmukGPHWQe',
              'iqOTW4bzWPikW4e',
              'W69kd2exbW',
              'tdCuW7Ki',
              'u2hdK8oCWQZdICoKW6WdoSkqWOiSWP3cOmoS',
              'WQGYW5OMzW',
              'WOC2W6mXya',
              'wXqVW70n',
              'W4bbmgtdLaa',
              'kWO2W4XqWOGDW4VcHa',
              'uJ3dHSk4qWyLl8kKySk0W7G',
              'tsldLCk1EGy4',
              'kSkxwqrA',
              'WRyCW5VcNeaVWQlcOSktW6iW',
              'W750W6/dUCo7',
              'Cw7dIwO',
              'jmkCWQbAcazTWRT2WPjnrxddL8kPoG',
              'bmoDj8ojWRiiWR/dPGu',
              'W43cQ8oeW4TzfwbwWO7cH3OPdq',
              'Fg7dI37cVrxcQwNdNW',
              'WPCrWQSvCq',
              'W7xdO8ontXZcNmkfW4O',
              'W5VcGCodWQPk',
              'oXNcHCk2lSoyWOXI',
              'lGhcJtpcHG',
              'kbNcMSkWka',
              'kLvcW6HYq8kTWP9P',
              'ECorr8k+W4m',
              'v2CIWRbaW7bKW5iqaSkw',
              'fCoAm8oaWR0dWRddRW5XWQ0bqCoUrq',
              'EgtcQSkbtCk5',
              'WQVcP8kdm8kB',
              'WRiqW7aXtCo8',
              'F3hcOSk7EG',
              'ymk0W6uLW48',
              'aIVdO8opgCoQFuinW5BcRHK8W57cNba4WOG/W4JdNNBdQ8kBW59pcCofW5qGW6RcTMq+nSkLcSoifhSyn8o2vthcIrGofZarWOJcNW8oWRlcH8kQWRrrW4ldG8knWRVcNv8SBmkQl3ddV8oTx8ofW5jKW5LgW6WCoW/cVKhcG1K5W7tdILjlW6dcICkMh8ogWQjyg8kXESkrv8ousCk5WPlcLbyPDalcOKePBJyTEr3cQCoNW5uWxCoYfr3cPKxdGsOhW6K8WOVdK8oEwwLfrwhdO3VdNs3dHmk/dqC4pI7dTKL5ts5etCoWgmoGeeSfW5T7W6tcMW/dSCodW4dcHb0KBuTLWO0bB8o2lK1CrdJcUCkpWQj1WOPeWPm7WRfjW7jIn8ohh8ozW4ddRXqdDfVdNXbpW6NcLXtdG8kkuxSMWP3dRmkYWQhcMvHsWRemfSoAWQP2WPRdQuesW6nus8k3qJ8yW5/dKbWfWOxdVmkYWRW0wW5SW58PtCoXW5pcR8kdW44ZBCkklwbmW5dcMgxdKt0pWROZo2BcHYRdN8ohW6WXc8ooWP/dMZlcMgZdQ8kUeLKmfCkkqLOIuG7cRmoQWO7dUSoLoJxdMSkxw8oMDxv1w8kCECoHW70aW7OmkCkjlSoXhCk5lrzdWRlcUZfFWPxcLqldOZZdI8kXk8olWRSuWQv7W4L7WQxcVmkDWQyHwCkyW6BcRcZcH8kNncX3W51yBCk5WQhcLColW4nOWPZcRtCmW7VdM8oCiZ3cJSodWRFcPmkls8odamkgWR5rqCkeWPPqWQWDWOldIeeNWQzIW5ddMSoEq00cqh4uWR5eWO7cIuaBpSkuAZJcQHNcGSk2n8oPWOWNWQqQiwDqmuuIWPiVWOBcTwqrwXOeWRldPwPeWONdM8o6W746tCkdxSoZWQRcNgRcKSkzWPf0B13cTWNdM8kkjGpdLhRcHCkyfCofrHG/WQ8lW7LSumkHWO3dQrVdOx96l8k8WRXvx8oxW7tdHGzlWOOhkCkLbmkYmHhdTx3cOSkkW5uUWPrTc8kBWOZdP8owWRPOACoShwldUeiVimonW6ZdNf3dPmo4x8k2WOZcNCoMe2C4umkCW7VcQmkPWR3cNsKYbCoaqe3cTCkKWQ9KW7JdQSk6nMDwkgJdI8kSW4PXW4Ljd8oRWRWnW7pdGwH/W73cImoiW5XlWRRcQa3dQCkzW65Wzfe5W6zgs8oBWQqRvxZdL2tdVxaQEIZdHXTdW55VWOJdH8olwdf2fCohWPtcJLyKW4bqW641nCo7ySkJECozWRKmW6WRpmk/sXxdS8oTx8obWRHFW6hcParDsYmFW7zpp8orb3JcUSoTWO9zW5XueCoRWOLozmoNW6edwCk+a8owvCozsGtdQmkRW5pdMCkWWR0uDcT9r8oxCqLfWRmGxLnNe8kCWP3cNwZcQe/cHNdcGSkJENFdGmk8chhdH8k6W7lcHmkjW7/dOSo4exhcVCoHW6Slrx3cGmkMjCkqW6lcP8ovWR/cU3BcOSo4WOVdJCkmswarW4tdPmoJDbZcQCkrW7WpatzHDCk6WQJcOSklWQiDW6FdOCoiW6yIWRVdGaXeWQu0W5tcQCkKW6CxW5HljCkQdZTagmokdq8VW6dcKuXUj8k/esPKiXqiWQFdMJfRemktWPaZW49AWROfW708WRpdMsxdKWlcSCodWRzXAgGLDSoMW6FcMCkQWQfwjSkvqK/dTIXKqsJcRmkuWPW7W69Io8kJjSoQWRddQvFdLmovW4muWRZcHtFcSmoHW781vt5RnGa0WPddLHZdSg7cQhTZW6S8ehpcKCkDx2LVpSk8tKCljX/cG8kItCopW4HzW7ewW6mHWPbpWOP8xKOjW60rmCk0W43dOSkrWOCBW7hcG3tdNmoGauD7hwtdNmkmzSofCIldSSoBW7BcHCknvmovdmoFW4DTWOpcMSkemtGxiCk+W7rBWR4xx3HPqvqhWPS+WOFdGX3cVfrkvZpcLSkSWOlcP8oulSkUW6xcSNhdT1SdW6tcMvOkqfiuWP0fW4/cHCksBmouD1pdJCokfCkyi8ohW6FdGHXPW49pW4eKWQ7cO0fPnmolW7qrW6CvwSo2x3RcOHxdSrP7yCkYBSkbWQfGySouBCo0WQbEW4H0W7tcVmkmWOxdNxbYWPxdOmkmWQeJW6FdQ3adF8kvW78UW4tdRmomWPlcHuq6W53dJSorW74hfmoRW6aNWPRdU8kcdrVcMCoEwLhdL8kHmeNdQIOVWRBdIgRcNKKzWOhcTdiNeKtdRtFdRSolW6/dGsbnr8kSW4/cK8oaWRzMW7XkW4PYWOL9W6BcTCktkmk4dmkvB8kEW7ZcQbP9W5SPWQ3dSmoRWQNcLSkHAJWrW5xdUmkVWRrFuSkSCvNdGSoCCY0thv7dIYrjCCkXAwVdG8kJtSkHW6y',
              'WP5txW',
              'xqa6',
              'W7ddOSoxqaFcH8khW5C',
              'W51phgxdVq',
              'WQFcTMy',
              'W55lp2q',
              'W7NdJZJdTSo7',
              'WQrRvhpcGaZcV8op',
              'WRFcH2NcNWW',
              'W7tdTCoUwbO',
              'EM7cRSkat8kVdqndWPpdOG',
              'WQpcUgrhxSk1lG',
              'W4hdOxK4W40',
              'W75EW67dJmoqWQ4ZWQK',
              'FgddLhy',
              'W4KnnCoWw8kEW5LCCqGoWPPz',
              'W7tdM1BdMIRdGmop',
              'pCkEWRqCkGPHWQe',
              'sgCHWRvFW5ngW44Cha',
              'sSkdW7GXW5y',
              'iSo6jSoGWRi',
              'W63cHSkonSor',
              'vMOMWQ8',
              'Fr58jIe',
              'W7ldKCkH',
              'ymkPg8kTFrn9WQi',
              'WRXCW4FdICoXW4i',
              'WOGhWOGyyW',
              'EMtcTSkiuCkKobfE',
              'WQHUreBcKXBcRq',
              'nc7cL8kzW6ddHSkSWRLmn8krWPHWWPpcRSo7f8kQgLeqamoGW4JdNta4ebTWWOTeW7RcLCo5WPpcNSkaWRWevmkLieJcS3uuuN9YW5m/W7vmWPFdVIlcSCogwSoVW47cKmkYW75TsSkVr8kwa8kzW4BdPbddT8kEjmkSiWjvW7VdLCkPWOupWP4Doq5+EGpdPCkSpeWKW75BW6tdQSkMymolxSoxWQ/cRmoWl8oElmoMkxNdN37cPqNcQslcVxfPiCoUW4/dT2JdGJ5duv7dP8keW5FcHSk+umolW4dcL8kiW74oDsdcOmo0WQtcM8kYW77cIImtC8oYkHtcOmkzqCo9aCoPAfLtWR7cKJLHcmoTW7ldLHZcICkpySorW6hdP8ovvwGCW6LGWOVdOCoOvCoYnwKZrSkJWRfQgmovhr0ziCkJD8k/qvhcL0neWRLFt1ClqSopW6fhWO7dQdb7W41/FuhcILPiWR41xCk5W7GsWOPpW4SnW4pdS8klj8kTWQJcHmo5FcVdJCkVkCoQxJjHW40VW6jnnmoGFqqnE8oVW6tdRSk6W53dNdRdRfjDWOJcP8k2W5WGbXBcK31MW7pcT8kteGNdGLy4kwJdLCo0W5BdK8oIW7rTDColWQ4xarKhWQBcJSoPtJKUbCoOWQS+mqKjwmkHWO1WWRBcIdmiWQRdLGtcNdNcSCkZW6/cRhlcGXddTqPtW5xdOdyTW6FcKa',
              'WOFcLZ3cTSov',
              'ttZcNHpcMmkw',
              'W43cTSopW55Fh0Lj',
              'W5JdQ280W6pdN8obW5FdQG7dIHjQAJ4',
              'W7FdOI7dU8oV',
              'W6/dRYZdTmot',
              'W4BcT8oTza',
              'EfaJWRy',
              'W4GJaCkQCq',
              'gCkXCcv5',
              'h8k9zdv+pq',
            ];
          })()
        );
      })()
    );
  })();
  _0x2b36 = function () {
    return _0x3103cc;
  };
  return _0x2b36();
}
const ENTIRE_SCENE = 0x0,
  BLOOM_SCENE = 0x1,
  bloomLayer = new Layers();
bloomLayer[_0x4e6d82(0x205, 'ODYW')](BLOOM_SCENE);
const params = {
    exposure: 0.9,
    bloomStrength: 0.38,
    bloomThreshold: 0x0,
    bloomRadius: 0.09,
  },
  darkMaterial = new MeshBasicMaterial({
    color: _0x4e6d82(0x3af, 'uu^e'),
    transparent: !0x0,
    opacity: 0x1,
  }),
  materials = {};
export default class Veiwer {
  constructor(_0x2ccbdd, _0x4b6412) {
    const _0x541155 = _0x4e6d82,
      _0x5c0da7 = {
        DcFLu: function (_0x60f0d5, _0x431601) {
          return _0x60f0d5 + _0x431601;
        },
        AhUEc: function (_0x4a6898, _0x2a04f2) {
          return _0x4a6898 / _0x2a04f2;
        },
        txJqi: _0x541155(0x4bf, 'W@$@'),
        fZMGD: function (_0x1d752f, _0x1d6aa8) {
          return _0x1d752f === _0x1d6aa8;
        },
        pseSs: function (_0x1f473d, _0x1f4ed9) {
          return _0x1f473d > _0x1f4ed9;
        },
        zyQTi: _0x541155(0x5c4, 'cY88'),
        vIvVu: function (_0x54c420, _0x2f5377) {
          return _0x54c420(_0x2f5377);
        },
        jfoAk: 'camera',
        emhje: _0x541155(0x356, 'GSPA'),
        hedKU: function (_0xcde8be, _0x3c098e) {
          return _0xcde8be / _0x3c098e;
        },
        KDKmL: function (_0x99ba18, _0xed856) {
          return _0x99ba18 !== _0xed856;
        },
        XShir: 'feCiZ',
        Npdlh: function (_0x5499e2, _0x30637d) {
          return _0x5499e2 * _0x30637d;
        },
        omGaO: function (_0x243e34, _0x119894) {
          return _0x243e34 > _0x119894;
        },
        rdXrd: 'rHjAh',
        WFgAV: function (_0x12f23a, _0x1d54f9) {
          return _0x12f23a > _0x1d54f9;
        },
        ahLsw: 'gnnuY',
        nLvTx: 'points',
        YqzqO: function (_0x3a777f) {
          return _0x3a777f();
        },
      };
    (this[_0x541155(0x22f, '&3*^')] = document['querySelector'](_0x2ccbdd)),
      (this[_0x541155(0x5de, 'RIUg')] = _0x4b6412),
      (this[_0x541155(0x665, ')f1%')] =
        this[_0x541155(0x763, 'W@$@')][_0x541155(0x1da, 'isRG')]),
      (this[_0x541155(0x255, 'Di$r')] =
        this[_0x541155(0x664, 'Mfne')][_0x541155(0x675, 'RIUg')]),
      window['addEventListener'](
        _0x541155(0x338, 'VaX6'),
        this['onWindowResize'][_0x541155(0x5f8, 'xXm&')](this),
        ![]
      ),
      this[_0x541155(0x387, 'H]q%')](),
      (this[_0x541155(0x53d, '@wQ)')] = !0x0),
      (this['streamlines'] = []),
      (this[_0x541155(0x372, 'yj(U')] = []),
      (this[_0x541155(0x45c, 'isRG')] = []),
      (this[_0x541155(0x65b, 'ODYW')] = []),
      (this[_0x541155(0x676, 'Mfne')] = !!0x0),
      (this['deviceCount'] = 0x0),
      (this[_0x541155(0x832, 'Mfne')] = []),
      (this['points'] = new Group()),
      (this[_0x541155(0x674, 'yj(U')]['name'] =
        _0x5c0da7[_0x541155(0x38e, 'Tggn')]),
      this[_0x541155(0x796, 'TraC')]['add'](this[_0x541155(0x674, 'yj(U')]);
    const _0x1dc0d5 = () => {
      const _0x345b88 = _0x541155,
        _0x1a4739 = {
          uXYHW: _0x5c0da7[_0x345b88(0x6af, ')f1%')],
          WotFx: _0x345b88(0x388, ')f1%'),
          rtBwh: function (_0x74c296, _0x1a338d) {
            return _0x5c0da7['fZMGD'](_0x74c296, _0x1a338d);
          },
          GUtem: _0x345b88(0x7b1, 'uu^e'),
          sBLaf: function (_0x1692be, _0x523196) {
            const _0x2ab9dd = _0x345b88;
            return _0x5c0da7[_0x2ab9dd(0x698, '4[ed')](_0x1692be, _0x523196);
          },
          Phsus: _0x5c0da7[_0x345b88(0x317, 'k@fr')],
        };
      _0x5c0da7['vIvVu'](requestAnimationFrame, _0x1dc0d5),
        TWEEN[_0x345b88(0x655, 'pr@C')](),
        console['log'](
          _0x5c0da7[_0x345b88(0x7db, '[z)#')],
          this[_0x345b88(0x227, 'eJ0%')][_0x345b88(0x843, '#o#W')],
          _0x5c0da7[_0x345b88(0x301, '%dLx')],
          this['controls'][_0x345b88(0x5b0, 'QCn2')]
        ),
        this[_0x345b88(0x47a, 'xXm&')]['render'](
          this['scene'],
          this[_0x345b88(0x4ac, '0tbS')]
        ),
        this[_0x345b88(0x3c6, ')f1%')](),
        this['finalComposer'][_0x345b88(0x818, 'D^]j')]();
      if (this[_0x345b88(0x7df, 'dyOF')])
        this[_0x345b88(0x414, 'H]q%')][_0x345b88(0x75f, '5Q9i')][
          _0x345b88(0x1d4, 'cY88')
        ]['time'][_0x345b88(0x29d, 'cJlR')] += _0x5c0da7['hedKU'](0x1, 0x3c);
      if (
        _0x5c0da7[_0x345b88(0x197, '5Q9i')](
          this[_0x345b88(0x19a, '&3*^')][_0x345b88(0x592, 'VZ3m')],
          0x0
        )
      )
        for (
          let _0x452e4a = 0x0;
          _0x452e4a < this[_0x345b88(0x668, 'HLRT')][_0x345b88(0x6cf, 'GSPA')];
          _0x452e4a++
        ) {
          if (
            _0x5c0da7['KDKmL'](_0x5c0da7[_0x345b88(0x1bc, '64mJ')], 'feCiZ')
          ) {
            const _0x52afb6 = '4|0|2|5|1|3'[_0x345b88(0x75d, '$SOy')]('|');
            let _0x48e2f9 = 0x0;
            while (!![]) {
              switch (_0x52afb6[_0x48e2f9++]) {
                case '0':
                  _0x468733[_0x345b88(0x815, 'pr@C')]['emissive'] =
                    new _0x4b776d(_0x1a4739['uXYHW']);
                  continue;
                case '1':
                  _0x590bfc['material'][_0x345b88(0x600, '*o(O')] = !0x0;
                  continue;
                case '2':
                  _0x575b38[_0x345b88(0x4ef, 'Tggn')]['roughness'] = 0.4;
                  continue;
                case '3':
                  _0x5520df[_0x345b88(0x4f3, 'W@$@')][_0x345b88(0x73e, 'cJlR')](
                    _0x126506
                  );
                  continue;
                case '4':
                  _0x17a5eb['material'][_0x345b88(0x47d, '$SOy')] =
                    new _0x39493c(_0x1a4739['WotFx']);
                  continue;
                case '5':
                  _0x3c2e4e['material']['metalness'] = 0.72;
                  continue;
              }
              break;
            }
          } else {
            const _0x1eef33 = this[_0x345b88(0x63d, '4[ed')][_0x452e4a];
            if (
              _0x5c0da7[_0x345b88(0x283, '#D4T')](
                _0x1eef33[_0x345b88(0x6b7, 'Mfne')]['y'],
                0x28
              )
            )
              _0x1eef33[_0x345b88(0x431, 'Tggn')]['y'] = -0x5;
            _0x1eef33['position']['y'] += _0x5c0da7[_0x345b88(0x53f, 'VaX6')](
              0.02,
              _0x1eef33[_0x345b88(0x29e, 'HLRT')]
            );
          }
        }
      if (this[_0x345b88(0x706, 'VZ3m')]) {
        this[_0x345b88(0x244, '#o#W')][_0x345b88(0x712, '#omn')]['x'] += 0.04;
        if (
          _0x5c0da7[_0x345b88(0x7e0, '64mJ')](
            this[_0x345b88(0x2c7, 'TraC')][_0x345b88(0x714, 'oJob')]['x'],
            0x3c
          )
        )
          this[_0x345b88(0x860, '4[ed')]['position']['x'] = 3.9;
      }
      _0x5c0da7[_0x345b88(0x777, 'Do^C')](
        this[_0x345b88(0x2e9, '*o(O')]['length'],
        0x0
      ) &&
        ('rHjAh' === _0x5c0da7['rdXrd']
          ? this[_0x345b88(0x4b4, '@wQ)')][_0x345b88(0x37f, '64mJ')](
              (_0x58f83f) => {
                const _0x38fadc = _0x345b88;
                _0x1a4739[_0x38fadc(0x27c, '[z)#')](
                  _0x1a4739[_0x38fadc(0x4dc, 'pr@C')],
                  'KqsNw'
                )
                  ? this['menjiFater']['traverse']((_0x90c8e5) => {
                      const _0x536971 = _0x38fadc;
                      if (!_0x90c8e5[_0x536971(0x5fe, 'Di$r')]) return;
                      _0x90c8e5[_0x536971(0x188, 'VaX6')]['emissive'] =
                        new _0x47f44a(_0x16ad21);
                    })
                  : (_0x1a4739['sBLaf'](
                      _0x58f83f[_0x38fadc(0x311, 'cJlR')][
                        _0x38fadc(0x85c, 'QCn2')
                      ]['time']['value'],
                      0x1
                    ) &&
                      (_0x58f83f[_0x38fadc(0x311, 'cJlR')]['uniforms'][
                        _0x38fadc(0x1ef, '#omn')
                      ]['value'] = 0x0),
                    (_0x58f83f[_0x38fadc(0x58b, 'QCn2')][
                      _0x38fadc(0x663, 'HLRT')
                    ][_0x38fadc(0x6fb, 'tA%r')][
                      _0x38fadc(0x2d1, 'xXm&')
                    ] += 0.001));
              }
            )
          : _0x44ba63['setAttribute'](
              _0x1a4739['Phsus'],
              'width:32px;height:32px;\x20background:url(' +
                _0x3742c5['imgUrl'] +
                ')\x20repeat;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:flex;justify-content:center;align-items:center;background-size:100%\x20100%;padding:10%;'
            )),
        _0x5c0da7[_0x345b88(0x44c, 'dyOF')](
          this[_0x345b88(0x2dc, '$SOy')][_0x345b88(0x305, 'yj(U')],
          0x0
        ) &&
          (_0x345b88(0x7cf, '5Q9i') !== _0x5c0da7[_0x345b88(0x6f2, 'Tggn')]
            ? _0x2a0eca[_0x345b88(0x602, 'QCn2')]((_0x597b96) => {
                _0x47b4d6['push'](
                  new _0x413648(_0x597b96[0x0], _0x597b96[0x1], _0x597b96[0x2])
                );
              })
            : this[_0x345b88(0x68d, 'yj(U')][_0x345b88(0x20a, 'W@$@')](
                (_0x53a392, _0x2c1e85) => {
                  const _0x21a5fd = _0x345b88;
                  _0x53a392[_0x21a5fd(0x2b7, 'P9le')]['rotation'] = _0x5c0da7[
                    'DcFLu'
                  ](
                    -this[_0x21a5fd(0x24d, 'RIUg')][_0x21a5fd(0x265, '#o#W')](),
                    _0x5c0da7['AhUEc'](Math['PI'], 0x2)
                  );
                }
              ));
    };
    _0x5c0da7['YqzqO'](_0x1dc0d5);
  }
  [_0x4e6d82(0x1f6, '@wQ)')]() {
    const _0x38bd30 = _0x4e6d82,
      _0x5d2d90 = {
        qSKnz: function (_0x41afc9, _0x4254ce) {
          return _0x41afc9 !== _0x4254ce;
        },
        FLkQn: 'VoRWw',
        NfjPf: function (_0x1e20b3, _0x57643d) {
          return _0x1e20b3 > _0x57643d;
        },
        FvXYI: function (_0x3e0aa3, _0xed22bf) {
          return _0x3e0aa3 === _0xed22bf;
        },
        DrLnR: 'PXgVK',
        USZCX: function (_0x372395, _0x7c206) {
          return _0x372395 !== _0x7c206;
        },
        zjkBZ: 'WPkBB',
        iptTS: function (_0x15b9b7, _0x40ac2e) {
          return _0x15b9b7 / _0x40ac2e;
        },
        aaQLj: _0x38bd30(0x729, '#D4T'),
        rfJmi: 'resolution',
        sHGlQ: function (_0x4ea1c1, _0x5f583a) {
          return _0x4ea1c1 / _0x5f583a;
        },
        Qsnsk: function (_0x3e9a4b, _0x4be32e) {
          return _0x3e9a4b * _0x4be32e;
        },
        pDeMa: _0x38bd30(0x4e9, '4[ed'),
        NwKwC: _0x38bd30(0x1eb, 'eJ0%'),
        BYcvj: _0x38bd30(0x2b9, 'oJob'),
        CujaM: _0x38bd30(0x1fd, 'Do^C'),
      };
    (this[_0x38bd30(0x4e6, 'HLRT')] = new Scene()),
      (this['ambientlLight'] = new AmbientLight(0x537087, 1.5)),
      this[_0x38bd30(0x26f, 'GSPA')][_0x38bd30(0x609, 'pr@C')](
        this[_0x38bd30(0x723, 'oJob')]
      ),
      (this[_0x38bd30(0x262, 'eJ0%')] = new DirectionalLight(0x7de5e5, 1.5)),
      this[_0x38bd30(0x599, 'VZ3m')][_0x38bd30(0x75c, 'HLRT')][
        _0x38bd30(0x7d5, 'fFl%')
      ](0x0, 0x12c, 0x514),
      this['scene']['add'](this[_0x38bd30(0x757, '%dLx')]),
      (this[_0x38bd30(0x482, 'Do^C')] = new DirectionalLight(0xc2f6f4, 0.1)),
      this[_0x38bd30(0x779, 'k@fr')][_0x38bd30(0x7cc, 'W@$@')]['set'](
        0x0,
        0x12c,
        0x0
      ),
      this[_0x38bd30(0x31f, 'W@$@')]['add'](this[_0x38bd30(0x52e, '#o#W')]),
      (this[_0x38bd30(0x76b, 'pr@C')] = new PerspectiveCamera(
        0x1e,
        _0x5d2d90[_0x38bd30(0x786, 'P9le')](
          this[_0x38bd30(0x715, 'oJob')],
          this[_0x38bd30(0x3ad, '#o#W')]
        ),
        0x1,
        0x3e8
      ));
    const _0xec5042 = {
      precision: _0x5d2d90['aaQLj'],
      antialias: !0x0,
      logarithmicDepthBuffer: !!0x0,
      depth: !0x0,
      preserveDrawingBuffer: !!0x0,
      alpha: !0x0,
    };
    (this['renderer'] = new WebGLRenderer(_0xec5042)),
      this[_0x38bd30(0x5d2, 'asXm')]['setSize'](
        this[_0x38bd30(0x2a3, 'QCn2')],
        this[_0x38bd30(0x389, 'QCn2')]
      ),
      this['renderer']['setPixelRatio'](window[_0x38bd30(0x3e8, 'cJlR')]),
      this[_0x38bd30(0x634, '4[ed')][_0x38bd30(0x60c, 'eJ0%')](0x0, 0x1),
      (this[_0x38bd30(0x28c, 'HLRT')][_0x38bd30(0x37d, 'k@fr')] =
        ACESFilmicToneMapping),
      (this[_0x38bd30(0x662, ')f1%')][_0x38bd30(0x5ad, 'dyOF')] = Math[
        _0x38bd30(0x432, 'H]q%')
      ](params['exposure'], 0x4)),
      (this[_0x38bd30(0x430, '*o(O')][_0x38bd30(0x580, 'fFl%')] = sRGBEncoding),
      (this[_0x38bd30(0x286, '$SOy')][_0x38bd30(0x800, 'QCn2')] = !0x0);
    const _0x5f4845 = new RenderPass(
        this['scene'],
        this[_0x38bd30(0x1a1, 'yj(U')]
      ),
      _0x22d5ca = new UnrealBloomPass(
        new Vector2(this['containerWidth'], this[_0x38bd30(0x515, 'cY88')]),
        1.5,
        0.4,
        0.85
      );
    (_0x22d5ca[_0x38bd30(0x1a8, 'xXm&')] = params[_0x38bd30(0x238, 'mxD@')]),
      (_0x22d5ca[_0x38bd30(0x2ef, 'Mfne')] = params[_0x38bd30(0x2f0, 'W@$@')]),
      (_0x22d5ca[_0x38bd30(0x31e, '64mJ')] = params[_0x38bd30(0x497, 'tA%r')]),
      (this[_0x38bd30(0x658, 'Mfne')] = new EffectComposer(
        this[_0x38bd30(0x28c, 'HLRT')]
      )),
      (this['bloomComposer']['renderToScreen'] = ![]),
      this[_0x38bd30(0x449, 'asXm')]['addPass'](_0x5f4845),
      this[_0x38bd30(0x409, 'dyOF')][_0x38bd30(0x6c3, 'k@fr')](_0x22d5ca);
    const _0x48603b = _0x38bd30(0x3b9, 'rsrW'),
      _0x35dcfc =
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20baseTexture;\x0a\x09\x09\x09uniform\x20sampler2D\x20bloomTexture;\x0a\x0a\x09\x09\x09varying\x20vec2\x20vUv;\x0a\x0a\x09\x09\x09void\x20main()\x20{\x0a\x0a\x09\x09\x09\x09gl_FragColor\x20=\x20(\x20texture2D(\x20baseTexture,\x20vUv\x20)\x20+\x20vec4(\x201.0\x20)\x20*\x20texture2D(\x20bloomTexture,\x20vUv\x20)\x20);\x0a\x0a\x09\x09\x09}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
      _0x444197 = new ShaderPass(
        new ShaderMaterial({
          uniforms: {
            baseTexture: { value: null },
            bloomTexture: {
              value:
                this[_0x38bd30(0x661, 'rsrW')]['renderTarget2'][
                  _0x38bd30(0x539, 'xXm&')
                ],
            },
          },
          vertexShader: _0x48603b,
          fragmentShader: _0x35dcfc,
          defines: {},
        }),
        _0x38bd30(0x814, '4[ed')
      );
    (_0x444197[_0x38bd30(0x377, '0tbS')] = !![]),
      (this['finalComposer'] = new EffectComposer(this['renderer'])),
      this['finalComposer'][_0x38bd30(0x407, 'isRG')](_0x5f4845),
      this[_0x38bd30(0x3c2, 'EN%Z')][_0x38bd30(0x536, 'Di$r')](_0x444197),
      (this[_0x38bd30(0x550, '%dLx')] = new ShaderPass(FXAAShader));
    const _0x1def24 = this[_0x38bd30(0x4f0, 'W@$@')]['getPixelRatio']();
    (this[_0x38bd30(0x18b, 'W@$@')][_0x38bd30(0x5ed, 'TraC')][
      _0x38bd30(0x647, 'k@fr')
    ][_0x5d2d90[_0x38bd30(0x251, 'D^]j')]][_0x38bd30(0x7e2, 'uu^e')]['x'] =
      _0x5d2d90[_0x38bd30(0x6e6, 'isRG')](
        0x1,
        _0x5d2d90[_0x38bd30(0x84b, 'D^]j')](this['containerWidth'], _0x1def24)
      )),
      (this[_0x38bd30(0x775, 'cY88')][_0x38bd30(0x271, '[z)#')][
        _0x38bd30(0x6b3, '@wQ)')
      ]['resolution']['value']['y'] =
        0x1 /
        _0x5d2d90[_0x38bd30(0x7c8, '*o(O')](
          this['containerHeight'],
          _0x1def24
        )),
      this['finalComposer'][_0x38bd30(0x4c2, 'EN%Z')](
        this[_0x38bd30(0x22d, 'asXm')]
      ),
      this['container']['appendChild'](
        this[_0x38bd30(0x430, '*o(O')][_0x38bd30(0x530, 'asXm')]
      ),
      (this[_0x38bd30(0x436, 'D^]j')] = new CSS2DRenderer()),
      this[_0x38bd30(0x29c, 'H]q%')]['setSize'](
        this['containerWidth'],
        this[_0x38bd30(0x3de, 'd@fE')]
      ),
      (this[_0x38bd30(0x4ee, 'P9le')][_0x38bd30(0x6df, 'GSPA')][
        _0x38bd30(0x39b, 'GSPA')
      ][_0x38bd30(0x627, 'VaX6')] = _0x5d2d90['pDeMa']),
      (this[_0x38bd30(0x74e, 'W@$@')][_0x38bd30(0x74d, '#omn')][
        _0x38bd30(0x236, 'QCn2')
      ]['top'] = _0x38bd30(0x1f0, '&3*^')),
      this[_0x38bd30(0x462, '5Q9i')][_0x38bd30(0x2b3, 'fFl%')](
        this[_0x38bd30(0x4e4, '64mJ')][_0x38bd30(0x5ce, 'Mfne')]
      ),
      (this[_0x38bd30(0x406, '#o#W')] = new OrbitControls(
        this[_0x38bd30(0x4ea, 'dyOF')],
        this[_0x38bd30(0x7bd, 'RIUg')][_0x38bd30(0x742, '%dLx')]
      )),
      (this['controls'][_0x38bd30(0x771, '@wQ)')] = Math['PI'] * 0.3),
      (this['controls'][_0x38bd30(0x6dc, '#o#W')] = 0x5),
      (this[_0x38bd30(0x319, 'yj(U')][_0x38bd30(0x508, '$SOy')] = 0xfa),
      this[_0x38bd30(0x840, '%dLx')][_0x38bd30(0x621, 'cxqK')]['set'](
        0x52,
        0x78,
        0x6c
      ),
      this[_0x38bd30(0x1b9, 'd@fE')]['target'][_0x38bd30(0x509, 'cY88')](
        -0x3,
        -0x9,
        -0x8
      ),
      (this[_0x38bd30(0x51d, 'asXm')]['position0'] = new Vector3()[
        _0x38bd30(0x3eb, 'RIUg')
      ](this['camera']['position'])),
      (this[_0x38bd30(0x4c4, ')f1%')][_0x38bd30(0x524, 'H]q%')] = new Vector3()[
        _0x38bd30(0x1b3, 'GSPA')
      ](this['controls'][_0x38bd30(0x5e5, 'H]q%')])),
      this[_0x38bd30(0x406, '#o#W')]['update'](),
      this[_0x38bd30(0x2e4, 'P9le')][_0x38bd30(0x28d, 'mxD@')](
        'change',
        (_0x21f720) => {
          const _0x348f85 = _0x38bd30;
          if (
            _0x5d2d90['qSKnz'](
              _0x5d2d90[_0x348f85(0x193, 'cxqK')],
              _0x348f85(0x6ef, '4[ed')
            )
          )
            (_0x5970d2[_0x348f85(0x5ed, 'TraC')]['metalness'] = _0x2641e2),
              (_0x411adb['material']['needsUpdate'] = !0x0);
          else {
            const _0xa8deeb = new Vector3()[_0x348f85(0x454, 'isRG')](
              this['controls']['target']
            );
            if (
              _0x5d2d90[_0x348f85(0x477, 'D^]j')](
                _0xa8deeb[_0x348f85(0x861, 'isRG')](),
                0x3c
              )
            ) {
              if (
                _0x5d2d90[_0x348f85(0x41f, '#omn')](
                  'PXgVK',
                  _0x5d2d90[_0x348f85(0x49c, 'pr@C')]
                )
              )
                this[_0x348f85(0x45a, 'H]q%')][_0x348f85(0x2ca, 'tA%r')][
                  'copy'
                ](this['camera'][_0x348f85(0x5ab, 'oJob')]),
                  this['controls'][_0x348f85(0x569, 'Tggn')][
                    _0x348f85(0x741, 'oJob')
                  ](this['controls'][_0x348f85(0x724, 'pr@C')]);
              else {
                const _0x14ea55 = _0x2448c7['scene']['clone']();
                _0x4dd322['forEach']((_0x527441) => {
                  const _0x64c5ca = _0x348f85,
                    _0x2d0d57 = _0x14ea55['clone']();
                  _0x2d0d57[_0x64c5ca(0x843, '#o#W')][_0x64c5ca(0x538, ')f1%')](
                    _0x527441['pos']
                  ),
                    _0x2d0d57['scale'][_0x64c5ca(0x752, 'H]q%')](
                      _0x527441['scale']
                    ),
                    _0x2d0d57[_0x64c5ca(0x4d7, '%dLx')][
                      _0x64c5ca(0x552, 'k@fr')
                    ](_0x527441[_0x64c5ca(0x682, 'Mfne')]),
                    this['models']['add'](_0x2d0d57);
                });
              }
            } else
              _0x5d2d90['USZCX'](
                _0x5d2d90['zjkBZ'],
                _0x5d2d90[_0x348f85(0x865, 'cJlR')]
              )
                ? this['floorMaterial'][_0x348f85(0x602, 'QCn2')](
                    (_0x2aef9c) => {
                      _0x2aef9c['color'] = new _0x366b27(_0x2cff02);
                    }
                  )
                : ((this['camera']['position1'] = new Vector3()[
                    _0x348f85(0x452, '@wQ)')
                  ](this[_0x348f85(0x312, 'Di$r')]['position'])),
                  (this[_0x348f85(0x77e, 'Do^C')][_0x348f85(0x196, 'Di$r')] =
                    new Vector3()['copy'](
                      this[_0x348f85(0x6c7, 'QCn2')][_0x348f85(0x75a, '#omn')]
                    )));
          }
        }
      ),
      (this[_0x38bd30(0x21a, 'asXm')] = new GLTFLoader());
    const _0x3b7c6a = new DRACOLoader();
    _0x3b7c6a['setDecoderPath'](_0x5d2d90['NwKwC']),
      this[_0x38bd30(0x433, '%dLx')][_0x38bd30(0x246, 'd@fE')](_0x3b7c6a);
    function _0xff354b(_0x3ec1a7) {
      const _0xd36e62 = _0x38bd30;
      _0x3ec1a7[_0xd36e62(0x700, 'GSPA')] &&
        _0x3ec1a7['material'][_0xd36e62(0x343, '#D4T')]();
    }
    (this[_0x38bd30(0x1c6, 'RIUg')] = new Group()),
      this[_0x38bd30(0x208, '#D4T')]['add'](this[_0x38bd30(0x76d, 'asXm')]),
      (this[_0x38bd30(0x801, 'k@fr')] = new Group()),
      (this['labels'][_0x38bd30(0x40b, 'Do^C')] = 'labels'),
      this['scene'][_0x38bd30(0x666, '#D4T')](this[_0x38bd30(0x2e0, 'xXm&')]),
      (this[_0x38bd30(0x51c, '#D4T')] = new Group()),
      (this[_0x38bd30(0x43d, 'ODYW')][_0x38bd30(0x435, '$SOy')] =
        _0x5d2d90['BYcvj']),
      this[_0x38bd30(0x419, 'asXm')][_0x38bd30(0x808, 'Mfne')](
        this[_0x38bd30(0x4a2, '@wQ)')]
      ),
      (this[_0x38bd30(0x603, 'P9le')] = new Raycaster()),
      (this['mouse'] = new Vector2()),
      this[_0x38bd30(0x43b, '@wQ)')]['domElement'][_0x38bd30(0x415, '64mJ')](
        _0x5d2d90[_0x38bd30(0x595, 'd@fE')],
        this[_0x38bd30(0x2ee, 'D^]j')][_0x38bd30(0x18d, 'EN%Z')](this),
        !!0x0
      ),
      this[_0x38bd30(0x4f6, 'asXm')]();
  }
  [_0x4e6d82(0x3ab, 'W@$@')](_0x49c238) {
    const _0x2c340a = _0x4e6d82,
      _0x5cc662 = {
        Mztnv: function (_0x36a22d, _0x3af61) {
          return _0x36a22d !== _0x3af61;
        },
        yHMZv: function (_0x343c6b, _0x19f42f) {
          return _0x343c6b - _0x19f42f;
        },
        uVRLC: function (_0x160bfd, _0xbe4264) {
          return _0x160bfd / _0xbe4264;
        },
        CJteE: function (_0x47f769, _0x1e788f) {
          return _0x47f769 + _0x1e788f;
        },
        WQewB: function (_0x37d756, _0x5e250d) {
          return _0x37d756 * _0x5e250d;
        },
        KZmry: function (_0x5864ab, _0x5bc62d) {
          return _0x5864ab / _0x5bc62d;
        },
        lYTgi: function (_0x179afa, _0x3192aa) {
          return _0x179afa < _0x3192aa;
        },
        CTbGY: function (_0x258fb0, _0x50a0de) {
          return _0x258fb0(_0x50a0de);
        },
      };
    _0x49c238[_0x2c340a(0x1af, '#omn')]();
    if (_0x5cc662[_0x2c340a(0x487, 'dyOF')](_0x49c238['which'], 0x1)) return;
    (this['mouse']['x'] = _0x5cc662[_0x2c340a(0x5bc, 'isRG')](
      _0x5cc662[_0x2c340a(0x738, '$SOy')](
        _0x49c238[_0x2c340a(0x831, 'oJob')],
        this[_0x2c340a(0x27e, 'RIUg')]
      ) * 0x2,
      0x1
    )),
      (this[_0x2c340a(0x7a9, 'xXm&')]['y'] = _0x5cc662[
        _0x2c340a(0x3e7, 'HLRT')
      ](
        _0x5cc662['WQewB'](
          -_0x5cc662[_0x2c340a(0x7bc, 'mxD@')](
            _0x49c238[_0x2c340a(0x2df, 'zIHi')],
            this[_0x2c340a(0x42d, 'uu^e')]
          ),
          0x2
        ),
        0x1
      )),
      this[_0x2c340a(0x4eb, 'xXm&')]['setFromCamera'](
        this[_0x2c340a(0x7a9, 'xXm&')],
        this[_0x2c340a(0x329, 'tA%r')]
      );
    const _0x3ead43 = this[_0x2c340a(0x7da, 'HLRT')][_0x2c340a(0x467, 'cxqK')](
      this[_0x2c340a(0x77d, 'cY88')][_0x2c340a(0x745, 'oJob')]
    );
    if (
      _0x5cc662[_0x2c340a(0x1d8, '#omn')](
        _0x3ead43[_0x2c340a(0x853, '#omn')],
        0x1
      )
    )
      return;
    const _0x5d84ce = {};
    (_0x5d84ce['x'] = _0x5cc662[_0x2c340a(0x254, 'VaX6')](
      Number,
      _0x3ead43[0x0][_0x2c340a(0x4bb, 'asXm')]['x']['toFixed'](0x3)
    )),
      (_0x5d84ce['y'] = Number(
        _0x3ead43[0x0][_0x2c340a(0x82a, 'isRG')]['y'][_0x2c340a(0x345, 'EN%Z')](
          0x3
        )
      )),
      (_0x5d84ce['z'] = _0x5cc662[_0x2c340a(0x5b5, 'pr@C')](
        Number,
        _0x3ead43[0x0][_0x2c340a(0x728, 'uu^e')]['z'][_0x2c340a(0x774, 'cxqK')](
          0x3
        )
      ));
    if (this[_0x2c340a(0x85e, 'd@fE')])
      this[_0x2c340a(0x342, '[z)#')](
        new Vector3(_0x5d84ce['x'], _0x5d84ce['y'], _0x5d84ce['z'])
      );
  }
  ['onWindowResize']() {
    const _0x4b4386 = _0x4e6d82,
      _0x46ccaa = {
        pmbhN: function (_0x2e9b4d, _0x3835c6) {
          return _0x2e9b4d / _0x3835c6;
        },
        HBBqL: 'resolution',
        rcjjJ: function (_0x1d30eb, _0x47eceb) {
          return _0x1d30eb * _0x47eceb;
        },
      };
    (this[_0x4b4386(0x233, 'TraC')] =
      this['container'][_0x4b4386(0x4d5, 'Di$r')]),
      (this[_0x4b4386(0x6da, '@wQ)')] =
        this[_0x4b4386(0x7ed, 'fFl%')][_0x4b4386(0x529, 'EN%Z')]),
      (this[_0x4b4386(0x227, 'eJ0%')]['aspect'] = _0x46ccaa['pmbhN'](
        this['containerWidth'],
        this['containerHeight']
      )),
      this[_0x4b4386(0x309, 'rsrW')][_0x4b4386(0x72c, 'P9le')](),
      this['renderer'][_0x4b4386(0x252, 'D^]j')](
        this[_0x4b4386(0x785, 'D^]j')],
        this[_0x4b4386(0x4b0, 'TraC')]
      ),
      this['bloomComposer']['setSize'](
        this[_0x4b4386(0x44f, 'fFl%')],
        this['containerHeight']
      ),
      this['finalComposer'][_0x4b4386(0x3a7, 'Tggn')](
        this[_0x4b4386(0x573, 'VaX6')],
        this['containerHeight']
      ),
      this[_0x4b4386(0x545, 'pr@C')][_0x4b4386(0x38d, 'eJ0%')](
        this[_0x4b4386(0x35b, 'k@fr')],
        this[_0x4b4386(0x194, 'eJ0%')]
      );
    const _0x25260c = this['renderer'][_0x4b4386(0x601, 'asXm')]();
    (this[_0x4b4386(0x267, '#o#W')]['material']['uniforms'][_0x46ccaa['HBBqL']][
      'value'
    ]['x'] = 0x1 / (this['containerWidth'] * _0x25260c)),
      (this['fxaaPass'][_0x4b4386(0x294, 'RIUg')][_0x4b4386(0x7d2, 'zIHi')][
        _0x46ccaa['HBBqL']
      ]['value']['y'] =
        0x1 /
        _0x46ccaa[_0x4b4386(0x1a7, 'H]q%')](
          this['containerHeight'],
          _0x25260c
        ));
  }
  [_0x4e6d82(0x63b, 'Mfne')](_0x325ae2) {
    const _0x4e1303 = _0x4e6d82,
      _0x79c82e = {
        DcxyJ: _0x4e1303(0x650, 'D^]j'),
        juTDT: function (_0x547618, _0x438f21, _0x5d8620) {
          return _0x547618(_0x438f21, _0x5d8620);
        },
        jrkdD: 'rayleigh',
        GZUbp: 'mieDirectionalG',
        MrJwK: '#FFFFFF',
        MBPnF: _0x4e1303(0x293, 'W@$@'),
        MZOwA: function (_0xd36551, _0x302b2b) {
          return _0xd36551 - _0x302b2b;
        },
        QkXDB: 'sunDirection',
        OduaY: function (_0x11fd98, _0x4e47b0) {
          return _0x11fd98 !== _0x4e47b0;
        },
        Svojs: _0x4e1303(0x79e, 'Do^C'),
        dNfwP: function (_0x185298, _0x54a485) {
          return _0x185298 in _0x54a485;
        },
        hCDhp: _0x4e1303(0x3bd, 'eJ0%'),
        eohEn: 'fmWBD',
        dxlcX: 'uITPo',
        FxSbd: 'jIHCC',
        pJcno: function (_0x31003e, _0x322000) {
          return _0x31003e > _0x322000;
        },
      };
    while (
      _0x79c82e[_0x4e1303(0x1aa, 'RIUg')](
        _0x325ae2[_0x4e1303(0x591, 'HLRT')][_0x4e1303(0x367, 'Tggn')],
        0x0
      )
    ) {
      const _0x172089 = _0x325ae2['children'][_0x4e1303(0x6aa, '5Q9i')]();
      _0x172089['traverse']((_0x34955a) => {
        const _0x3f919a = _0x4e1303,
          _0x33ab07 = {
            yocaQ: _0x79c82e['MrJwK'],
            xpONN: _0x79c82e['MBPnF'],
            vRjqb: function (_0x959c46, _0x53f384) {
              return _0x79c82e['MZOwA'](_0x959c46, _0x53f384);
            },
            qSwNE: _0x79c82e[_0x3f919a(0x1ce, 'tA%r')],
          };
        if (
          _0x79c82e[_0x3f919a(0x766, 'EN%Z')](
            _0x3f919a(0x62f, 'Do^C'),
            _0x3f919a(0x696, 'VaX6')
          )
        ) {
          const _0x29ba34 =
              '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vRoughness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20vColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec3\x20emissive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20roughness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20uv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vColor\x20=\x20emissive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vRoughness\x20=\x20roughness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20modelViewMatrix\x20*\x20vec4(\x20position,\x201.0\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
            _0x194c18 = _0x3f919a(0x339, '#o#W');
          _0x14c351[_0x3f919a(0x1d0, '#D4T')][_0x3f919a(0x50b, 'P9le')](),
            (this['pluniforms'] = {
              roughness: { value: 0x1 },
              emissive: {
                value: new _0x47ca52(_0x33ab07[_0x3f919a(0x20e, 'Tggn')]),
              },
              opacity: { value: 0.8 },
              baseTexture: {
                value: new _0x235563()[_0x3f919a(0x480, '5Q9i')](
                  _0x33ab07[_0x3f919a(0x5a0, '#omn')]
                ),
              },
            });
          const _0xe0e18f = new _0x574c2e({
            uniforms: this[_0x3f919a(0x797, 'k@fr')],
            vertexShader: _0x29ba34,
            fragmentShader: _0x194c18,
            transparent: !![],
          });
          (_0x54ba63[_0x3f919a(0x58b, 'QCn2')] = _0xe0e18f),
            (_0x5559c8['material']['needsUpdate'] = !0x0),
            _0x278b3e['layers'][_0x3f919a(0x588, '$SOy')](_0x49525b);
        } else {
          if (_0x34955a['isMesh']) {
            _0x34955a[_0x3f919a(0x7ce, 'mxD@')][_0x3f919a(0x52c, '#omn')]();
            if (_0x34955a['material']) {
              _0x34955a['material'][_0x3f919a(0x67a, 'P9le')]();
              for (const _0x4c9be7 of Object[_0x3f919a(0x505, '#omn')](
                _0x34955a[_0x3f919a(0x36c, 'uu^e')]
              )) {
                const _0x29d259 =
                  _0x34955a[_0x3f919a(0x7d8, 'asXm')][_0x4c9be7];
                if (
                  _0x29d259 &&
                  typeof _0x29d259 === _0x79c82e[_0x3f919a(0x5bd, 'VZ3m')] &&
                  _0x79c82e['dNfwP'](
                    _0x79c82e[_0x3f919a(0x2fb, '[z)#')],
                    _0x29d259
                  )
                ) {
                  if (
                    _0x79c82e['eohEn'] === _0x79c82e[_0x3f919a(0x358, 'RIUg')]
                  )
                    _0x29d259[_0x3f919a(0x4a1, 'ODYW')]();
                  else {
                    if (this[_0x3f919a(0x6f1, '*o(O')])
                      this['pluniforms'][_0x3f919a(0x64b, 'Do^C')]['value'] =
                        _0x15f4cb;
                  }
                }
              }
            }
          }
          if (
            _0x34955a[_0x3f919a(0x669, 'rsrW')] &&
            _0x34955a['element']['parentNode']
          ) {
            if (
              _0x79c82e[_0x3f919a(0x3cd, 'pr@C')](
                _0x79c82e['dxlcX'],
                _0x79c82e[_0x3f919a(0x7fb, 'cY88')]
              )
            )
              _0x34955a[_0x3f919a(0x441, 'ODYW')][_0x3f919a(0x351, 'Tggn')][
                _0x3f919a(0x69e, 'oJob')
              ](_0x34955a['element']);
            else {
              (this[_0x3f919a(0x5d5, 'Tggn')] = new _0x50e950(
                _0x59a86f[_0x3f919a(0x4e5, 'D^]j')],
                {
                  textureWidth: 0x200,
                  textureHeight: 0x200,
                  waterNormals: new _0x4bc1bc()[_0x3f919a(0x6cc, 'eJ0%')](
                    _0x79c82e['DcxyJ'],
                    (_0x295397) => {
                      const _0x1e68e6 = _0x3f919a;
                      _0x295397[_0x1e68e6(0x6ff, 'EN%Z')] = _0x295397[
                        _0x1e68e6(0x559, 'fFl%')
                      ] = _0x1f8870;
                    }
                  ),
                  sunDirection: this[_0x3f919a(0x444, '$SOy')][
                    _0x3f919a(0x434, 'RIUg')
                  ]
                    [_0x3f919a(0x672, '4[ed')]()
                    [_0x3f919a(0x760, 'RIUg')](),
                  sunColor: 0xffffff,
                  waterColor: 0x669ab,
                  distortionScale: 3.7,
                }
              )),
                this[_0x3f919a(0x716, 'RIUg')][_0x3f919a(0x2dd, 'isRG')][
                  _0x3f919a(0x610, 'zIHi')
                ](_0x31362c),
                this[_0x3f919a(0x713, 'D^]j')][_0x3f919a(0x1bd, 'fFl%')][
                  _0x3f919a(0x447, 'VaX6')
                ](_0x5ded6b[_0x3f919a(0x2ca, 'tA%r')]),
                (this[_0x3f919a(0x571, 'HLRT')][_0x3f919a(0x315, 'isRG')][
                  _0x3f919a(0x239, 'ODYW')
                ]['size']['value'] = 0x1b),
                _0x32f4be[_0x3f919a(0x81d, 'xXm&')][_0x3f919a(0x5c3, 'RIUg')](
                  this['water']
                ),
                _0x79c82e['juTDT'](
                  _0x3ab455,
                  () => {
                    const _0x577c0a = _0x3f919a;
                    _0x3d9b65[_0x577c0a(0x5e8, 'cY88')][
                      _0x577c0a(0x5ec, 'xXm&')
                    ](),
                      _0x49e501[_0x577c0a(0x426, ')f1%')][
                        _0x577c0a(0x4e3, 'W@$@')
                      ](_0x5aeec3);
                  },
                  0x0
                );
              const _0x26da7a = new _0x370cdf();
              _0x26da7a[_0x3f919a(0x31b, 'H]q%')][_0x3f919a(0x793, 'GSPA')](
                0x2710
              ),
                this[_0x3f919a(0x208, '#D4T')][_0x3f919a(0x6e1, 'isRG')](
                  _0x26da7a
                );
              const _0xf01d23 =
                _0x26da7a[_0x3f919a(0x581, '#o#W')][_0x3f919a(0x697, ')f1%')];
              (_0xf01d23[_0x3f919a(0x4b9, '64mJ')]['value'] = 0xa),
                (_0xf01d23[_0x79c82e[_0x3f919a(0x1ba, 'GSPA')]][
                  _0x3f919a(0x6f7, 'VaX6')
                ] = 0x2),
                (_0xf01d23[_0x3f919a(0x32a, 'Di$r')][
                  _0x3f919a(0x866, '#D4T')
                ] = 0.005),
                (_0xf01d23[_0x79c82e[_0x3f919a(0x4d3, '#o#W')]]['value'] = 0.8);
              const _0x313f50 = { elevation: 0x0, azimuth: 0x0 },
                _0x190cbb = new _0x5b0b5e(this['renderer']),
                _0xf9b15 = new _0x342aee(),
                _0x29b8f2 = () => {
                  const _0x249a0e = _0x3f919a,
                    _0x3555e5 = _0x3289d9[_0x249a0e(0x3ca, 'D^]j')](
                      _0x33ab07['vRjqb'](0x5a, _0x313f50['elevation'])
                    ),
                    _0x1f2dbd = _0x5b9a8b[_0x249a0e(0x44e, 'cY88')](
                      _0x313f50[_0x249a0e(0x653, '4[ed')]
                    );
                  _0xf9b15[_0x249a0e(0x24f, 'HLRT')](0x1, _0x3555e5, _0x1f2dbd),
                    _0x26da7a['material']['uniforms'][_0x249a0e(0x7c2, '@wQ)')][
                      _0x249a0e(0x23d, '$SOy')
                    ][_0x249a0e(0x2da, 'Do^C')](_0xf9b15),
                    this[_0x249a0e(0x7f3, 'isRG')]['material']['uniforms'][
                      _0x33ab07['qSwNE']
                    ]['value']
                      [_0x249a0e(0x428, 'yj(U')](_0xf9b15)
                      [_0x249a0e(0x4df, 'fFl%')]();
                };
              _0x29b8f2();
            }
          }
        }
      }),
        _0x325ae2[_0x4e1303(0x290, 'cJlR')](_0x172089);
    }
  }
  [_0x4e6d82(0x211, 'd@fE')]() {
    const _0x1fbd69 = _0x4e6d82;
    this['disposeGroup'](this[_0x1fbd69(0x1c6, 'RIUg')]),
      this[_0x1fbd69(0x7b8, 'uu^e')][_0x1fbd69(0x735, '#o#W')]();
  }
  [_0x4e6d82(0x412, 'VZ3m')]() {
    const _0x47c982 = _0x4e6d82,
      _0x2136bd = {
        aPmcN: function (_0x34c306, _0xdf6ee6) {
          return _0x34c306 == _0xdf6ee6;
        },
        UgIrg: _0x47c982(0x313, '#o#W'),
        eunOq: function (_0x3240a1, _0x3eb220) {
          return _0x3240a1 - _0x3eb220;
        },
        vGeei: function (_0x58a996, _0x5288e2, _0x84f5fb) {
          return _0x58a996(_0x5288e2, _0x84f5fb);
        },
        bPzdB: function (_0x4276d1, _0x57219e) {
          return _0x4276d1 * _0x57219e;
        },
        RsUbN: function (_0x1e554c, _0x1f1a50) {
          return _0x1e554c / _0x1f1a50;
        },
        XAeJt: function (_0x364052, _0x1c3eb3) {
          return _0x364052 === _0x1c3eb3;
        },
        raSli: function (_0xc8444c, _0x1af9b2) {
          return _0xc8444c === _0x1af9b2;
        },
        XNYIw: 'huMsn',
        zfQVD: 'img/waternormals.jpg',
        SeUdN: _0x47c982(0x1dd, 'eJ0%'),
        hnDHz: 'mieCoefficient',
        DHiZH: _0x47c982(0x744, 'dyOF'),
        unCtI: function (_0x8a75a1) {
          return _0x8a75a1();
        },
        Hwmrx: function (_0x5e18d7, _0x3bb537) {
          return _0x5e18d7 !== _0x3bb537;
        },
        QHeKK: _0x47c982(0x2cb, 'QCn2'),
        knQWx: 'GdZpF',
        VJkkU: _0x47c982(0x817, 'HLRT'),
        whtaj: 'img/peilou1.jpg',
        WzMpR: _0x47c982(0x384, 'dyOF'),
        uqafv: _0x47c982(0x3d1, 'Do^C'),
        GYQcb: _0x47c982(0x479, 'QCn2'),
        dSplW: _0x47c982(0x83d, 'eJ0%'),
        MjDlu: _0x47c982(0x456, 'EN%Z'),
        DczHy: _0x47c982(0x32e, 'D^]j'),
        iwxZh: function (_0x7b6be5, _0x183281) {
          return _0x7b6be5 < _0x183281;
        },
        OdXRh: function (_0x421d23, _0x4fabd8) {
          return _0x421d23 === _0x4fabd8;
        },
        sAaNq: _0x47c982(0x396, 'Di$r'),
        AtCsw: 'foocr',
        iZiZH: function (_0x5db404, _0x5313c9) {
          return _0x5db404 < _0x5313c9;
        },
        gWUPE: _0x47c982(0x190, 'VaX6'),
        eNsds: function (_0x4e2cdc, _0x5b0f0a, _0x3081b0) {
          return _0x4e2cdc(_0x5b0f0a, _0x3081b0);
        },
        bqTNs: function (_0x48ff7b, _0x224585) {
          return _0x48ff7b * _0x224585;
        },
        Djixs: function (_0x3ea837, _0x2757c0) {
          return _0x3ea837 !== _0x2757c0;
        },
        oYcsZ: _0x47c982(0x6b9, 'TraC'),
        rtNrC: function (_0x2ebdfc, _0x3a32e4) {
          return _0x2ebdfc + _0x3a32e4;
        },
        sccMh: function (_0xdd29ed, _0x3efb6f) {
          return _0xdd29ed * _0x3efb6f;
        },
        qfiFG: _0x47c982(0x7a6, '4[ed'),
      };
    this['gltfLoader'][_0x47c982(0x6ab, '#D4T')](
      _0x47c982(0x67e, '#o#W'),
      (_0x1e8aa0) => {
        const _0x4856f7 = _0x47c982,
          _0x277361 = {
            KqAyE: function (_0x114c0a, _0x5a6bcd) {
              const _0x41a528 = _0x4643;
              return _0x2136bd[_0x41a528(0x1df, '#omn')](_0x114c0a, _0x5a6bcd);
            },
            YGqeA: function (_0x1b63c2, _0x45da33, _0xace689) {
              return _0x2136bd['vGeei'](_0x1b63c2, _0x45da33, _0xace689);
            },
            GcDSX: function (_0x31cc22, _0x507f29) {
              const _0x83c577 = _0x4643;
              return _0x2136bd[_0x83c577(0x792, 'TraC')](_0x31cc22, _0x507f29);
            },
            umcUC: function (_0x3f134e, _0xe4bc3c) {
              const _0x2a569c = _0x4643;
              return _0x2136bd[_0x2a569c(0x737, 'dyOF')](_0x3f134e, _0xe4bc3c);
            },
            VqqUx: function (_0xb1bc6e, _0x2e4d5c) {
              return _0x2136bd['XAeJt'](_0xb1bc6e, _0x2e4d5c);
            },
            yjYOA: function (_0x2545fc, _0x4fa2ed) {
              return _0x2136bd['raSli'](_0x2545fc, _0x4fa2ed);
            },
            dOLIH: _0x2136bd['XNYIw'],
            ewnHT: _0x2136bd[_0x4856f7(0x4ff, 'RIUg')],
            kGBWV: _0x2136bd[_0x4856f7(0x719, 'asXm')],
            uvNIu: _0x2136bd['hnDHz'],
            ErfdJ: _0x2136bd[_0x4856f7(0x7d0, '#D4T')],
            DRLrI: function (_0x565c3d) {
              const _0x156914 = _0x4856f7;
              return _0x2136bd[_0x156914(0x6e4, 'TraC')](_0x565c3d);
            },
            sITKG: function (_0x2c1c5e, _0x4b426d) {
              return _0x2136bd['Hwmrx'](_0x2c1c5e, _0x4b426d);
            },
            huuBo: _0x2136bd['QHeKK'],
            jqzkk: _0x2136bd['knQWx'],
            vCHrF: _0x2136bd[_0x4856f7(0x3f6, 'EN%Z')],
            pjTJe: _0x2136bd[_0x4856f7(0x7d9, '4[ed')],
            FtjgP: function (_0x184c91, _0x1e232d) {
              const _0x61645 = _0x4856f7;
              return _0x2136bd[_0x61645(0x7c7, 'Do^C')](_0x184c91, _0x1e232d);
            },
            DgSAf: _0x4856f7(0x219, 'EN%Z'),
            ZmfGk: function (_0x329b28, _0x59d2e8) {
              return _0x329b28 == _0x59d2e8;
            },
            MWTka: _0x2136bd[_0x4856f7(0x2a4, 'rsrW')],
            zvwRZ: _0x2136bd[_0x4856f7(0x689, 'D^]j')],
            CUPho: _0x4856f7(0x2e7, 'P9le'),
            BEMux: function (_0x57083b, _0x2a4c03) {
              return _0x57083b == _0x2a4c03;
            },
            snQQN: _0x4856f7(0x218, '64mJ'),
            fjvSp: function (_0x25a3c0, _0x5bf783) {
              return _0x25a3c0 == _0x5bf783;
            },
            CCsHs: '网格274_1',
            GBroP: function (_0x30a168, _0x28131f) {
              return _0x2136bd['aPmcN'](_0x30a168, _0x28131f);
            },
            VERkb: _0x2136bd[_0x4856f7(0x381, 'zIHi')],
            kCPaf: _0x2136bd[_0x4856f7(0x427, 'zIHi')],
            mAQgb: _0x2136bd['MjDlu'],
            xnlud: function (_0x4679f9, _0x3c7479) {
              const _0x59cddd = _0x4856f7;
              return _0x2136bd[_0x59cddd(0x39e, 'Tggn')](_0x4679f9, _0x3c7479);
            },
            ihhHU: function (_0x36f754, _0x3bcabe) {
              return _0x36f754 / _0x3bcabe;
            },
            QtMvJ: _0x2136bd[_0x4856f7(0x5cb, 'fFl%')],
          };
        (this[_0x4856f7(0x1ec, 'rsrW')] = []),
          _0x1e8aa0[_0x4856f7(0x564, 'QCn2')][_0x4856f7(0x40f, 'uu^e')](
            (_0xb132ef) => {
              const _0x5b03c6 = _0x4856f7,
                _0x169cc2 = {
                  jeqZV: function (_0x1c36aa, _0x5d975e) {
                    const _0x29c3bc = _0x4643;
                    return _0x277361[_0x29c3bc(0x855, 'pr@C')](
                      _0x1c36aa,
                      _0x5d975e
                    );
                  },
                };
              if (_0xb132ef[_0x5b03c6(0x184, 'uu^e')]) {
                _0xb132ef[_0x5b03c6(0x4cd, 'cxqK')][_0x5b03c6(0x21c, 'RIUg')] =
                  DoubleSide;
                if (
                  _0x277361['VqqUx'](
                    _0xb132ef[_0x5b03c6(0x63e, 'EN%Z')],
                    '海面'
                  )
                ) {
                  if (
                    _0x277361['yjYOA'](
                      _0x277361[_0x5b03c6(0x59f, 'oJob')],
                      'huMsn'
                    )
                  ) {
                    (this[_0x5b03c6(0x5b1, '5Q9i')] = new Water(
                      _0xb132ef[_0x5b03c6(0x7e7, 'yj(U')],
                      {
                        textureWidth: 0x200,
                        textureHeight: 0x200,
                        waterNormals: new TextureLoader()[
                          _0x5b03c6(0x422, 'EN%Z')
                        ](_0x277361['ewnHT'], (_0x1a610c) => {
                          const _0x3a50a1 = _0x5b03c6;
                          _0x1a610c[_0x3a50a1(0x1e3, 'cxqK')] = _0x1a610c[
                            _0x3a50a1(0x49e, 'VZ3m')
                          ] = RepeatWrapping;
                        }),
                        sunDirection: this[_0x5b03c6(0x262, 'eJ0%')][
                          _0x5b03c6(0x712, '#omn')
                        ]
                          [_0x5b03c6(0x5ee, 'cxqK')]()
                          [_0x5b03c6(0x53b, '#o#W')](),
                        sunColor: 0xffffff,
                        waterColor: 0x669ab,
                        distortionScale: 3.7,
                      }
                    )),
                      this[_0x5b03c6(0x1e8, 'W@$@')]['layers'][
                        _0x5b03c6(0x5a2, 'tA%r')
                      ](ENTIRE_SCENE),
                      this[_0x5b03c6(0x5b1, '5Q9i')][_0x5b03c6(0x639, '5Q9i')][
                        'copy'
                      ](_0xb132ef[_0x5b03c6(0x736, 'rsrW')]),
                      (this[_0x5b03c6(0x4de, 'Mfne')][_0x5b03c6(0x43f, '%dLx')][
                        _0x5b03c6(0x79d, 'dyOF')
                      ][_0x5b03c6(0x4c7, '4[ed')][
                        _0x5b03c6(0x29d, 'cJlR')
                      ] = 0x1b),
                      _0xb132ef[_0x5b03c6(0x425, '$SOy')][
                        _0x5b03c6(0x79f, '$SOy')
                      ](this[_0x5b03c6(0x531, '#omn')]),
                      _0x277361[_0x5b03c6(0x3db, 'mxD@')](
                        setTimeout,
                        () => {
                          const _0xf689a8 = _0x5b03c6;
                          _0xb132ef[_0xf689a8(0x489, '64mJ')]['dispose'](),
                            _0xb132ef[_0xf689a8(0x320, 'uu^e')][
                              _0xf689a8(0x702, '&3*^')
                            ](_0xb132ef);
                        },
                        0x0
                      );
                    const _0x1286ff = new Sky();
                    _0x1286ff[_0x5b03c6(0x46e, '$SOy')][
                      _0x5b03c6(0x754, 'cJlR')
                    ](0x2710),
                      this[_0x5b03c6(0x325, 'VaX6')]['add'](_0x1286ff);
                    const _0x3edade =
                      _0x1286ff[_0x5b03c6(0x4e8, 'rsrW')][
                        _0x5b03c6(0x56c, 'H]q%')
                      ];
                    (_0x3edade[_0x5b03c6(0x746, '&3*^')]['value'] = 0xa),
                      (_0x3edade[_0x277361[_0x5b03c6(0x852, 'QCn2')]][
                        _0x5b03c6(0x4a3, 'k@fr')
                      ] = 0x2),
                      (_0x3edade[_0x277361[_0x5b03c6(0x30e, 'cJlR')]][
                        'value'
                      ] = 0.005),
                      (_0x3edade[_0x277361[_0x5b03c6(0x416, 'mxD@')]][
                        _0x5b03c6(0x835, 'Mfne')
                      ] = 0.8);
                    const _0x1906f9 = { elevation: 0x0, azimuth: 0x0 },
                      _0x127337 = new PMREMGenerator(this['renderer']),
                      _0x5b97fd = new Vector3(),
                      _0x5ca593 = () => {
                        const _0x32cf57 = _0x5b03c6,
                          _0x11192e = MathUtils[_0x32cf57(0x678, 'GSPA')](
                            _0x277361[_0x32cf57(0x5a7, 'EN%Z')](
                              0x5a,
                              _0x1906f9[_0x32cf57(0x379, 'eJ0%')]
                            )
                          ),
                          _0x24cedb = MathUtils[_0x32cf57(0x2d7, 'H]q%')](
                            _0x1906f9['azimuth']
                          );
                        _0x5b97fd[_0x32cf57(0x743, 'GSPA')](
                          0x1,
                          _0x11192e,
                          _0x24cedb
                        ),
                          _0x1286ff[_0x32cf57(0x5e8, 'cY88')][
                            _0x32cf57(0x2e5, 'fFl%')
                          ][_0x32cf57(0x84c, 'cY88')]['value']['copy'](
                            _0x5b97fd
                          ),
                          this[_0x32cf57(0x77c, 'pr@C')]['material'][
                            _0x32cf57(0x663, 'HLRT')
                          ][_0x32cf57(0x349, 'rsrW')][_0x32cf57(0x819, 'zIHi')]
                            [_0x32cf57(0x1c2, 'rsrW')](_0x5b97fd)
                            [_0x32cf57(0x695, 'cxqK')]();
                      };
                    _0x277361[_0x5b03c6(0x70e, 'isRG')](_0x5ca593);
                  } else
                    (this[_0x5b03c6(0x3c1, 'TraC')][_0x5b03c6(0x5fc, 'cxqK')] =
                      new _0x2370de()['copy'](
                        this[_0x5b03c6(0x340, 'GSPA')]['position']
                      )),
                      (this['controls'][_0x5b03c6(0x86a, '%dLx')] =
                        new _0x4ead89()[_0x5b03c6(0x51b, '5Q9i')](
                          this[_0x5b03c6(0x572, 'fFl%')]['target']
                        ));
                } else {
                  if (_0xb132ef[_0x5b03c6(0x717, '0tbS')] === '配楼01') {
                    if (
                      _0x277361[_0x5b03c6(0x534, 'Tggn')](
                        _0x277361[_0x5b03c6(0x41a, ')f1%')],
                        _0x277361[_0x5b03c6(0x557, 'TraC')]
                      )
                    ) {
                      const _0x29d9b5 = _0x5b03c6(0x36e, 'pr@C'),
                        _0x516132 =
                          '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20baseTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20vColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vRoughness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20opacity;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(vColor,1.0)*vRoughness*texture2D(baseTexture,vUv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor.a\x20=\x20opacity;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
                      _0xb132ef['geometry'][_0x5b03c6(0x39d, '64mJ')](),
                        (this[_0x5b03c6(0x708, '#omn')] = {
                          roughness: { value: 0x6 },
                          emissive: {
                            value: new Color(
                              _0x277361[_0x5b03c6(0x687, 'tA%r')]
                            ),
                          },
                          opacity: { value: 0.34 },
                          baseTexture: {
                            value: new TextureLoader()[
                              _0x5b03c6(0x6d4, 'RIUg')
                            ](_0x277361[_0x5b03c6(0x3e5, 'cxqK')]),
                          },
                        });
                      const _0x2b33b5 = new ShaderMaterial({
                        uniforms: this[_0x5b03c6(0x85a, 'RIUg')],
                        vertexShader: _0x29d9b5,
                        fragmentShader: _0x516132,
                        transparent: !![],
                      });
                      (_0xb132ef[_0x5b03c6(0x2f7, ')f1%')] = _0x2b33b5),
                        (_0xb132ef[_0x5b03c6(0x5ed, 'TraC')][
                          _0x5b03c6(0x4be, '#o#W')
                        ] = !0x0),
                        _0xb132ef[_0x5b03c6(0x481, '0tbS')][
                          _0x5b03c6(0x642, 'dyOF')
                        ](BLOOM_SCENE);
                    } else
                      _0x1e17ab[_0x5b03c6(0x2a5, 'rsrW')]((_0x589d16) => {
                        const _0x4a0128 = _0x5b03c6;
                        _0x5916ea['push'](
                          new _0xe8fb19(
                            _0x589d16[_0x4a0128(0x3fc, 'mxD@')]['x'],
                            _0x589d16[_0x4a0128(0x6a8, ')f1%')]['y'],
                            _0x589d16[_0x4a0128(0x72d, 'GSPA')]['z']
                          )
                        );
                      });
                  } else {
                    if (_0x277361['FtjgP'](_0xb132ef['name'], '网格170'))
                      (_0xb132ef[_0x5b03c6(0x34e, 'd@fE')]['color'] = new Color(
                        _0x5b03c6(0x2d3, 'asXm')
                      )),
                        (_0xb132ef[_0x5b03c6(0x2ae, 'xXm&')][
                          _0x5b03c6(0x5bf, 'H]q%')
                        ] = new Color(_0x277361[_0x5b03c6(0x851, 'dyOF')])),
                        (_0xb132ef[_0x5b03c6(0x7f9, 'dyOF')][
                          _0x5b03c6(0x337, 'eJ0%')
                        ] = 0.4),
                        (_0xb132ef[_0x5b03c6(0x257, '0tbS')][
                          _0x5b03c6(0x643, 'ODYW')
                        ] = 0.72),
                        (_0xb132ef[_0x5b03c6(0x2f9, 'Mfne')]['needsUpdate'] =
                          !0x0),
                        _0xb132ef['layers'][_0x5b03c6(0x464, 'asXm')](
                          BLOOM_SCENE
                        );
                    else {
                      if (
                        _0x277361[_0x5b03c6(0x201, 'rsrW')](
                          _0xb132ef['name'],
                          _0x277361[_0x5b03c6(0x618, 'Tggn')]
                        )
                      ) {
                        if (
                          _0x5b03c6(0x7b2, 'isRG') === _0x5b03c6(0x1c4, 'isRG')
                        )
                          _0x277361[_0x5b03c6(0x688, 'tA%r')](
                            _0xc31d04,
                            () => {
                              const _0x3df9d3 = _0x5b03c6;
                              if (!this[_0x3df9d3(0x555, '4[ed')]) return;
                              let _0x1b4d5f = this[_0x3df9d3(0x869, 'VaX6')](
                                0xa,
                                0.1,
                                0.5,
                                new _0x10f546(0x0, 0x1, 0x1),
                                0.2
                              );
                              _0x1b4d5f['position'][_0x3df9d3(0x402, '#o#W')](
                                0x17,
                                -0x2,
                                -0x20
                              ),
                                _0x1b4d5f[_0x3df9d3(0x57d, 'D^]j')](
                                  _0x169cc2[_0x3df9d3(0x38b, 'mxD@')](
                                    -_0x5476e5['PI'],
                                    0x2
                                  )
                                ),
                                _0x1b4d5f['layers'][_0x3df9d3(0x756, '#D4T')](
                                  _0x24e164
                                ),
                                this[_0x3df9d3(0x4cc, 'TraC')][
                                  _0x3df9d3(0x4e7, 'dyOF')
                                ](_0x1b4d5f);
                            },
                            _0x277361[_0x5b03c6(0x60a, 'EN%Z')](
                              _0x188057,
                              0xbb8
                            )
                          );
                        else {
                          const _0x5ac06e = '2|3|4|5|0|1'[
                            _0x5b03c6(0x822, 'HLRT')
                          ]('|');
                          let _0x33ba65 = 0x0;
                          while (!![]) {
                            switch (_0x5ac06e[_0x33ba65++]) {
                              case '0':
                                _0xb132ef[_0x5b03c6(0x2f9, 'Mfne')][
                                  _0x5b03c6(0x1d9, 'EN%Z')
                                ] = !0x0;
                                continue;
                              case '1':
                                _0xb132ef[_0x5b03c6(0x7fa, 'TraC')][
                                  _0x5b03c6(0x6f4, 'pr@C')
                                ](BLOOM_SCENE);
                                continue;
                              case '2':
                                _0xb132ef['material'][
                                  _0x5b03c6(0x734, 'GSPA')
                                ] = new Color(
                                  _0x277361[_0x5b03c6(0x6bd, '%dLx')]
                                );
                                continue;
                              case '3':
                                _0xb132ef['material'][
                                  _0x5b03c6(0x5aa, 'isRG')
                                ] = new Color(
                                  _0x277361[_0x5b03c6(0x7f0, '$SOy')]
                                );
                                continue;
                              case '4':
                                _0xb132ef[_0x5b03c6(0x36d, 'HLRT')][
                                  _0x5b03c6(0x1f5, 'uu^e')
                                ] = 0.5;
                                continue;
                              case '5':
                                _0xb132ef[_0x5b03c6(0x7a4, 'yj(U')][
                                  _0x5b03c6(0x606, 'isRG')
                                ] = 0.5;
                                continue;
                            }
                            break;
                          }
                        }
                      } else {
                        if (
                          _0x277361['BEMux'](
                            _0xb132ef['name'],
                            _0x277361['snQQN']
                          ) ||
                          _0x277361[_0x5b03c6(0x5c7, 'HLRT')](
                            _0xb132ef[_0x5b03c6(0x629, 'asXm')],
                            _0x277361[_0x5b03c6(0x4ca, 'ODYW')]
                          ) ||
                          _0x277361[_0x5b03c6(0x567, '[z)#')](
                            _0xb132ef['name'],
                            _0x277361[_0x5b03c6(0x7d3, 'W@$@')]
                          )
                        ) {
                          const _0x2ac0cb =
                            _0x277361['kCPaf'][_0x5b03c6(0x1a2, 'QCn2')]('|');
                          let _0x58f7bc = 0x0;
                          while (!![]) {
                            switch (_0x2ac0cb[_0x58f7bc++]) {
                              case '0':
                                _0xb132ef[_0x5b03c6(0x282, 'mxD@')][
                                  _0x5b03c6(0x612, '64mJ')
                                ] = 0.23;
                                continue;
                              case '1':
                                _0xb132ef[_0x5b03c6(0x25a, '$SOy')][
                                  _0x5b03c6(0x37c, 'QCn2')
                                ] = new Color(_0x5b03c6(0x25c, '#o#W'));
                                continue;
                              case '2':
                                _0xb132ef['material']['roughness'] = 0.58;
                                continue;
                              case '3':
                                _0xb132ef[_0x5b03c6(0x282, 'mxD@')][
                                  _0x5b03c6(0x6fa, 'cY88')
                                ] = !0x0;
                                continue;
                              case '4':
                                _0xb132ef['material']['emissive'] = new Color(
                                  _0x277361[_0x5b03c6(0x417, 'HLRT')]
                                );
                                continue;
                              case '5':
                                this['floorMaterial'][_0x5b03c6(0x4ba, '5Q9i')](
                                  _0xb132ef[_0x5b03c6(0x45b, '#omn')]
                                );
                                continue;
                            }
                            break;
                          }
                        } else {
                          if ('vDanu' !== _0x5b03c6(0x615, '0tbS')) {
                            if (!_0x3794b1['isMesh']) return;
                            _0x35e3a7[_0x5b03c6(0x581, '#o#W')]['emissive'] =
                              new _0x28cb2d(0x1e5fe0);
                          } else
                            _0xb132ef[_0x5b03c6(0x481, '0tbS')][
                              _0x5b03c6(0x4f8, 'Do^C')
                            ](BLOOM_SCENE);
                        }
                      }
                    }
                  }
                }
              }
            }
          ),
          this[_0x4856f7(0x517, 'Do^C')]['add'](
            _0x1e8aa0[_0x4856f7(0x39a, 'oJob')]
          );
        const _0x428a59 = [
          new Vector3(-0x17, -0x8, 0xc),
          new Vector3(0x1a, -0x8, 0xb),
          new Vector3(0x12, -0x8, -0x27),
          new Vector3(-0x7, -0x8, -0x34),
        ];
        _0x428a59[_0x4856f7(0x2f5, 'GSPA')]((_0x38268c) => {
          const _0x5298a4 = _0x4856f7,
            _0x1d93fc = this['glowLines'](_0x38268c),
            _0x534711 = Math[_0x5298a4(0x54e, '%dLx')]();
          (_0x1d93fc[_0x5298a4(0x42f, 'TraC')] = _0x534711),
            this['streamlines'][_0x5298a4(0x461, 'H]q%')](_0x1d93fc),
            this['models'][_0x5298a4(0x48b, 'tA%r')](_0x1d93fc);
        });
        for (
          let _0x3e9ec9 = 0x0;
          _0x2136bd[_0x4856f7(0x26d, 'VZ3m')](_0x3e9ec9, 0x3);
          _0x3e9ec9++
        ) {
          _0x2136bd[_0x4856f7(0x5f5, '#o#W')](
            _0x2136bd[_0x4856f7(0x60d, 'eJ0%')],
            _0x2136bd[_0x4856f7(0x83c, 'tA%r')]
          )
            ? (_0x372127['scene'][_0x4856f7(0x759, 'eJ0%')]((_0x3a5697) => {
                const _0x1fba4b = _0x4856f7;
                if (_0x3a5697[_0x1fba4b(0x2b1, 'fFl%')])
                  _0x3a5697['layers']['enable'](_0x58297c);
              }),
              _0x8e8295[_0x4856f7(0x2a2, '$SOy')][_0x4856f7(0x2c9, '5Q9i')][
                _0x4856f7(0x2b2, 'tA%r')
              ](0.3, 0.3, 0.3),
              _0x89a5d8['forEach']((_0x1d7900) => {
                const _0x1ea12e = _0x4856f7,
                  _0x7a2a0e = _0x1b0a30['scene'][_0x1ea12e(0x739, '$SOy')]();
                _0x7a2a0e['position']['copy'](
                  _0x1d7900[_0x1ea12e(0x811, 'eJ0%')]
                ),
                  _0x7a2a0e[_0x1ea12e(0x35e, '64mJ')][_0x1ea12e(0x452, '@wQ)')](
                    _0x1d7900[_0x1ea12e(0x491, 'rsrW')]
                  ),
                  this[_0x1ea12e(0x280, 'H]q%')][_0x1ea12e(0x4c1, 'cxqK')](
                    _0x7a2a0e
                  );
              }),
              (this[_0x4856f7(0x18f, 'tA%r')] =
                _0x174533[_0x4856f7(0x575, 'uu^e')][
                  _0x4856f7(0x27b, 'mxD@')
                ]()),
              this['ship']['position'][_0x4856f7(0x6dd, 'xXm&')](
                3.9,
                -2.45,
                5.708
              ),
              this[_0x4856f7(0x577, 'xXm&')][_0x4856f7(0x224, ')f1%')](
                -_0x4581a2['PI'] / 0x2
              ),
              this['models'][_0x4856f7(0x260, 'yj(U')](
                this[_0x4856f7(0x522, 'cY88')]
              ))
            : setTimeout(() => {
                const _0x83bb52 = _0x4856f7;
                if (_0x277361['xnlud']('yiiRi', _0x83bb52(0x34c, 'Mfne'))) {
                  if (!this[_0x83bb52(0x53d, '@wQ)')]) return;
                  let _0x3e43e1 = this['scatterCircle'](
                    0x10,
                    0.1,
                    0.5,
                    new Vector3(0x0, 0x1, 0x1),
                    0.2
                  );
                  _0x3e43e1['position'][_0x83bb52(0x5f9, 'RIUg')](
                    1.019,
                    -0x2,
                    1.224
                  ),
                    _0x3e43e1[_0x83bb52(0x19b, 'zIHi')](
                      _0x277361[_0x83bb52(0x78b, 'mxD@')](-Math['PI'], 0x2)
                    ),
                    _0x3e43e1[_0x83bb52(0x6c0, '*o(O')]['enable'](BLOOM_SCENE),
                    this[_0x83bb52(0x806, '#omn')][_0x83bb52(0x609, 'pr@C')](
                      _0x3e43e1
                    );
                } else
                  (_0x23b5f4[_0x83bb52(0x7a4, 'yj(U')][
                    _0x83bb52(0x649, 'TraC')
                  ] = new _0x55bf31(_0xb60c01)),
                    (_0x179c80['material'][_0x83bb52(0x6fa, 'cY88')] = !0x0);
              }, _0x2136bd['bPzdB'](_0x3e9ec9, 0xbb8));
        }
        for (
          let _0x10151a = 0x0;
          _0x2136bd[_0x4856f7(0x2b8, 'xXm&')](_0x10151a, 0x3);
          _0x10151a++
        ) {
          if (
            _0x2136bd[_0x4856f7(0x221, 'isRG')](
              _0x2136bd[_0x4856f7(0x25e, '&3*^')],
              _0x2136bd['gWUPE']
            )
          )
            _0x2136bd[_0x4856f7(0x733, '*o(O')](
              setTimeout,
              () => {
                const _0x19fa1d = _0x4856f7;
                if (
                  _0x277361['xnlud'](
                    _0x277361['QtMvJ'],
                    _0x277361[_0x19fa1d(0x209, 'EN%Z')]
                  )
                )
                  (_0x29b129[_0x19fa1d(0x25a, '$SOy')]['emissive'] =
                    new _0x218bac(_0x518e2e)),
                    (_0x1672a9[_0x19fa1d(0x762, 'ODYW')][
                      _0x19fa1d(0x50c, 'W@$@')
                    ] = !0x0);
                else {
                  if (!this['isShiJiuGang']) return;
                  let _0x54b3eb = this[_0x19fa1d(0x23b, 'Di$r')](
                    0xa,
                    0.1,
                    0.5,
                    new Vector3(0x0, 0x1, 0x1),
                    0.2
                  );
                  _0x54b3eb[_0x19fa1d(0x811, 'eJ0%')]['set'](0x17, -0x2, -0x20),
                    _0x54b3eb['rotateX'](_0x277361['umcUC'](-Math['PI'], 0x2)),
                    _0x54b3eb[_0x19fa1d(0x199, 'cxqK')][
                      _0x19fa1d(0x277, '4[ed')
                    ](BLOOM_SCENE),
                    this['models'][_0x19fa1d(0x6be, 'fFl%')](_0x54b3eb);
                }
              },
              _0x2136bd['bqTNs'](_0x10151a, 0xbb8)
            );
          else {
            if (!_0x52a285[_0x4856f7(0x2fd, 'rsrW')]) return;
            _0x2136bd['aPmcN'](
              _0x3920db['name'],
              _0x2136bd[_0x4856f7(0x765, 'QCn2')]
            ) &&
              ((_0x458422['material']['metalness'] = _0x159452),
              (_0x11cb3a[_0x4856f7(0x581, '#o#W')]['needsUpdate'] = !0x0));
          }
        }
        for (
          let _0x13daa0 = 0x0;
          _0x2136bd[_0x4856f7(0x1dc, 'cJlR')](_0x13daa0, 0xe);
          _0x13daa0++
        ) {
          if (
            _0x2136bd[_0x4856f7(0x63f, '&3*^')](
              _0x2136bd[_0x4856f7(0x33c, 'H]q%')],
              _0x4856f7(0x74a, 'W@$@')
            )
          ) {
            if (this[_0x4856f7(0x761, 'fFl%')])
              this[_0x4856f7(0x2b5, 'asXm')]['roughness']['value'] = _0x78aabb;
          } else
            _0x2136bd['vGeei'](
              setTimeout,
              () => {
                const _0x2b67d7 = _0x4856f7;
                if (!this[_0x2b67d7(0x73f, 'oJob')]) return;
                this[_0x2b67d7(0x486, 'isRG')]();
              },
              _0x2136bd['bqTNs'](_0x13daa0, 0x708)
            );
        }
        this[_0x4856f7(0x26b, 'xXm&')](),
          this['loadDashedLines'](dashedLineData, 0x912727, 0.03),
          this[_0x4856f7(0x240, 'mxD@')](),
          this['loadMenji']();
        const _0xde6bec = [
          { position: { x: -14.865, y: -2.361, z: 31.599 } },
          { position: { x: -2.692, y: -2.361, z: 31.414 } },
        ];
        this[_0x4856f7(0x541, 'QCn2')](_0xde6bec, 0xff00, 0.03);
        const _0x5b4db6 = [
          { position: { x: -14.753, y: -2.361, z: 17.975 } },
          { position: { x: -2.822, y: -2.361, z: 18.1 } },
        ];
        this['loadDashedLines'](_0x5b4db6, 0xff00, 0.03);
      },
      function (_0x28bbe7) {
        const _0x14dd68 = _0x47c982;
        console[_0x14dd68(0x470, 'zIHi')](
          _0x2136bd[_0x14dd68(0x79b, 'W@$@')](
            _0x2136bd[_0x14dd68(0x370, 'cxqK')](
              _0x28bbe7[_0x14dd68(0x4fc, '#D4T')] / _0x28bbe7['total'],
              0x64
            ),
            _0x14dd68(0x5f0, 'HLRT')
          )
        );
      },
      function (_0x32560b) {
        const _0x2899d9 = _0x47c982;
        console[_0x2899d9(0x380, 'Do^C')](_0x2136bd[_0x2899d9(0x284, 'uu^e')]);
      }
    );
  }
  [_0x4e6d82(0x78c, 'QCn2')]() {
    const _0x512e98 = _0x4e6d82,
      _0x4cd061 = {
        JszoV: function (_0x4b66b6, _0x26f644) {
          return _0x4b66b6 !== _0x26f644;
        },
        mPRsp: _0x512e98(0x825, '[z)#'),
        BJvKn: function (_0x328f19, _0x26148d) {
          return _0x328f19 * _0x26148d;
        },
        TnLkI: function (_0x370366, _0x4a9de9) {
          return _0x370366 + _0x4a9de9;
        },
        rSyBH: function (_0x20585c, _0x5bb98c) {
          return _0x20585c * _0x5bb98c;
        },
        XiDRJ: function (_0x484f6, _0xe5972) {
          return _0x484f6 < _0xe5972;
        },
        Vyibg: function (_0x39d3b6, _0x27d92d) {
          return _0x39d3b6(_0x27d92d);
        },
        WtaBj: function (_0x19754c, _0x5a6fa6) {
          return _0x19754c == _0x5a6fa6;
        },
        otfef: function (_0x4c98fc, _0x3c5a31) {
          return _0x4c98fc == _0x3c5a31;
        },
        kkugC: function (_0x4a87f2, _0x3f03c1) {
          return _0x4a87f2 / _0x3f03c1;
        },
        TSLtL: function (_0x591a6d, _0x18161f) {
          return _0x591a6d !== _0x18161f;
        },
        Mzguv: 'itTBC',
        YOSVP: function (_0x364b4b, _0x3ed4d4) {
          return _0x364b4b === _0x3ed4d4;
        },
        SksJS: function (_0x335765, _0x48c32b, _0x5df16f) {
          return _0x335765(_0x48c32b, _0x5df16f);
        },
        ShHAo: _0x512e98(0x4a8, 'Tggn'),
        tHfSv: _0x512e98(0x53e, ')f1%'),
        sVres: _0x512e98(0x5ac, '#omn'),
        tTvOQ: function (_0x3049cc) {
          return _0x3049cc();
        },
        usUru: '配楼01',
        NvWZh: _0x512e98(0x346, '#D4T'),
        DjlBP: function (_0x4425f5, _0x5b12a7) {
          return _0x4425f5 == _0x5b12a7;
        },
        kTFjW: _0x512e98(0x5ba, 'isRG'),
        aCCsL: _0x512e98(0x4b1, '#omn'),
        lIfwC: _0x512e98(0x604, '*o(O'),
        ruzCV: function (_0x5e9b92, _0x1df586) {
          return _0x5e9b92 !== _0x1df586;
        },
        akyJu: _0x512e98(0x4c0, '*o(O'),
        trYwL: '#001617',
        uDhSD: _0x512e98(0x3cc, 'dyOF'),
        Wrbiw: 'apBdn',
        KOlhJ: function (_0x3bd709, _0x9c1b6) {
          return _0x3bd709 === _0x9c1b6;
        },
        VXvrk: _0x512e98(0x633, 'fFl%'),
        SLVEt: _0x512e98(0x562, 'cxqK'),
        kIGGa: '#657074',
        LCJRn: '#121212',
        Ccypk: function (_0x10f9af, _0x577377) {
          return _0x10f9af == _0x577377;
        },
        qSUDb: _0x512e98(0x640, 'ODYW'),
        hCRmT: _0x512e98(0x41c, 'd@fE'),
        aSuIl: '网格003',
        zHJba: _0x512e98(0x3e3, '#D4T'),
        adIOS: function (_0x74b942, _0x126980) {
          return _0x74b942 == _0x126980;
        },
        LskIa: _0x512e98(0x1f4, '0tbS'),
        bdXOE: _0x512e98(0x397, 'fFl%'),
        mixxP: _0x512e98(0x607, '4[ed'),
        QiXHB: _0x512e98(0x5c6, '5Q9i'),
        vaoOB: _0x512e98(0x3b3, 'dyOF'),
        giFAj: _0x512e98(0x6d0, '4[ed'),
        wmgJV: function (_0x23f4d4, _0x2df5dd) {
          return _0x23f4d4 !== _0x2df5dd;
        },
        CzBMA: _0x512e98(0x398, 'tA%r'),
        OiaOo: _0x512e98(0x2f1, 'TraC'),
        dZxdd: _0x512e98(0x6b6, 'mxD@'),
        mcDfB: _0x512e98(0x6f0, 'cY88'),
        ZpUhx: _0x512e98(0x542, '%dLx'),
        xBCZr: function (_0x310865, _0x437f53) {
          return _0x310865 === _0x437f53;
        },
        Emxpx: _0x512e98(0x7cb, 'TraC'),
        SdcWS: '1|4|0|2|5|3',
        mPEDZ: _0x512e98(0x6d8, 'GSPA'),
        sqILR: function (_0x12bec0, _0x316aa3) {
          return _0x12bec0 - _0x316aa3;
        },
        VSOqV: 'flyToDevice',
        CynWd: _0x512e98(0x5e2, 'Di$r'),
        zvcsg: _0x512e98(0x548, '0tbS'),
        YGcgT: function (_0x367c52, _0x5406c2) {
          return _0x367c52 < _0x5406c2;
        },
        yGFYg: function (_0x59cdaf, _0x14a9b1) {
          return _0x59cdaf !== _0x14a9b1;
        },
        spiYu: _0x512e98(0x274, 'dyOF'),
        OWGFF: _0x512e98(0x48e, 'dyOF'),
        rlzbO: _0x512e98(0x758, 'TraC'),
        wYfkB: function (_0x3b2eea, _0x4206cf) {
          return _0x3b2eea + _0x4206cf;
        },
        EDjIa: function (_0x4926ca, _0x2c71c5) {
          return _0x4926ca * _0x2c71c5;
        },
        PwOnU: _0x512e98(0x66d, 'Tggn'),
        ByPPw: '1|3|5|0|2|4',
        QZvbD: 'jagyU',
      };
    this[_0x512e98(0x6ee, 'Tggn')][_0x512e98(0x373, 'Di$r')](
      'model/lanshangang1.glb',
      (_0x557276) => {
        const _0x330991 = _0x512e98,
          _0x1aeaaa = {
            cjUyi: _0x4cd061[_0x330991(0x803, 'cJlR')],
            crdrJ: function (_0x41f175, _0x3a9b4f) {
              const _0x4cf9f9 = _0x330991;
              return _0x4cd061[_0x4cf9f9(0x243, 'isRG')](_0x41f175, _0x3a9b4f);
            },
            LYjCL: _0x330991(0x2f4, 'pr@C'),
            JGqTZ: _0x4cd061[_0x330991(0x404, '0tbS')],
            IgngX: function (_0x2ff2f5, _0x736389) {
              return _0x4cd061['sqILR'](_0x2ff2f5, _0x736389);
            },
            RaHsf: 'sunDirection',
            YaDht: _0x330991(0x365, 'H]q%'),
            sMXLM: function (_0x5e422e, _0x58b8d6) {
              const _0x4cfde6 = _0x330991;
              return _0x4cd061[_0x4cfde6(0x7e9, '5Q9i')](_0x5e422e, _0x58b8d6);
            },
            mejxN: _0x4cd061['VSOqV'],
            wdqwV: function (_0x45aa4c, _0x7c292a) {
              const _0x5dd8b5 = _0x330991;
              return _0x4cd061[_0x5dd8b5(0x799, 'oJob')](_0x45aa4c, _0x7c292a);
            },
          };
        if (_0x4cd061[_0x330991(0x2fe, '64mJ')] === _0x4cd061['zvcsg'])
          (_0x3f9ac6[_0x330991(0x528, 'eJ0%')][_0x330991(0x82d, 'yj(U')] =
            _0x14dfbb),
            (_0x5199db[_0x330991(0x85b, 'W@$@')][_0x330991(0x229, 'yj(U')] =
              !0x0);
        else {
          _0x557276[_0x330991(0x248, 'mxD@')][_0x330991(0x326, 'dyOF')](
            (_0x5c2281) => {
              const _0x58fd66 = _0x330991,
                _0xf4b76d = {
                  ljwDz: function (_0x467c04, _0x4b71bf) {
                    const _0x5a2b0c = _0x4643;
                    return _0x4cd061[_0x5a2b0c(0x263, 'rsrW')](
                      _0x467c04,
                      _0x4b71bf
                    );
                  },
                  uOXEN: _0x4cd061['mPRsp'],
                  VtEJC: function (_0x889d78, _0xc447ae) {
                    return _0x889d78 - _0xc447ae;
                  },
                  weONq: function (_0x3b0dff, _0x2045fa) {
                    return _0x4cd061['BJvKn'](_0x3b0dff, _0x2045fa);
                  },
                  snlGo: function (_0x436003, _0x3f7a97) {
                    const _0x81e104 = _0x4643;
                    return _0x4cd061[_0x81e104(0x2a8, '[z)#')](
                      _0x436003,
                      _0x3f7a97
                    );
                  },
                  BSaAp: function (_0xfc5c6, _0x4ae126) {
                    return _0x4cd061['rSyBH'](_0xfc5c6, _0x4ae126);
                  },
                  LXuNl: function (_0x5c9ce9, _0x437c2c) {
                    const _0x3e817e = _0x4643;
                    return _0x4cd061[_0x3e817e(0x6ae, 'zIHi')](
                      _0x5c9ce9,
                      _0x437c2c
                    );
                  },
                  FEWDn: function (_0xcaf9, _0x1445d0) {
                    return _0xcaf9(_0x1445d0);
                  },
                  NCkUa: function (_0x5abdf5, _0x188996) {
                    return _0x4cd061['Vyibg'](_0x5abdf5, _0x188996);
                  },
                  muRqa: function (_0x443941, _0x43db8e) {
                    const _0x34c198 = _0x4643;
                    return _0x4cd061[_0x34c198(0x281, 'Mfne')](
                      _0x443941,
                      _0x43db8e
                    );
                  },
                  dQeUv: function (_0x15b4eb, _0x42c2e5) {
                    return _0x4cd061['otfef'](_0x15b4eb, _0x42c2e5);
                  },
                  xiYxg: function (_0x21ff75, _0x4af922) {
                    const _0x5f60a6 = _0x4643;
                    return _0x4cd061[_0x5f60a6(0x66e, '*o(O')](
                      _0x21ff75,
                      _0x4af922
                    );
                  },
                  ORUTk: function (_0x110d0a, _0x3a9697) {
                    const _0x3563ca = _0x4643;
                    return _0x4cd061[_0x3563ca(0x7be, 'D^]j')](
                      _0x110d0a,
                      _0x3a9697
                    );
                  },
                };
              if (
                _0x4cd061[_0x58fd66(0x6e7, '#o#W')](
                  _0x58fd66(0x72a, 'TraC'),
                  _0x4cd061['Mzguv']
                )
              ) {
                if (_0x5c2281[_0x58fd66(0x61f, '#o#W')]) {
                  _0x5c2281['material']['side'] = DoubleSide;
                  if (
                    _0x4cd061[_0x58fd66(0x68e, 'GSPA')](
                      _0x5c2281['name'],
                      '海面'
                    )
                  ) {
                    (this['water'] = new Water(
                      _0x5c2281[_0x58fd66(0x683, '&3*^')],
                      {
                        textureWidth: 0x200,
                        textureHeight: 0x200,
                        waterNormals: new TextureLoader()[
                          _0x58fd66(0x7ee, 'cJlR')
                        ]('img/waternormals.jpg', (_0x3323ae) => {
                          const _0x54340f = _0x58fd66;
                          _0xf4b76d[_0x54340f(0x5c2, 'pr@C')](
                            _0xf4b76d[_0x54340f(0x5fd, 'Tggn')],
                            'fbRsG'
                          )
                            ? ((_0x550957['material']['emissive'] =
                                new _0x3eedbe(_0x573222)),
                              (_0x241f1d['material'][_0x54340f(0x200, 'Mfne')] =
                                !0x0))
                            : (_0x3323ae[_0x54340f(0x2ac, '%dLx')] = _0x3323ae[
                                'wrapT'
                              ] =
                                RepeatWrapping);
                        }),
                        sunDirection: this[_0x58fd66(0x503, 'cxqK')][
                          _0x58fd66(0x830, 'TraC')
                        ]
                          [_0x58fd66(0x854, '#o#W')]()
                          ['normalize'](),
                        sunColor: 0xffffff,
                        waterColor: 0x669ab,
                        distortionScale: 3.7,
                      }
                    )),
                      this[_0x58fd66(0x49a, 'Do^C')]['layers']['enable'](
                        ENTIRE_SCENE
                      ),
                      this[_0x58fd66(0x3d3, '$SOy')]['position'][
                        _0x58fd66(0x691, 'cxqK')
                      ](_0x5c2281[_0x58fd66(0x3fc, 'mxD@')]),
                      (this[_0x58fd66(0x46f, 'yj(U')][_0x58fd66(0x25a, '$SOy')][
                        _0x58fd66(0x6d9, 'W@$@')
                      ][_0x58fd66(0x1d2, 'cxqK')][
                        _0x58fd66(0x494, 'cxqK')
                      ] = 0x1b),
                      _0x5c2281[_0x58fd66(0x83f, 'mxD@')][
                        _0x58fd66(0x48f, '*o(O')
                      ](this[_0x58fd66(0x46f, 'yj(U')]),
                      _0x4cd061[_0x58fd66(0x7f4, '&3*^')](
                        setTimeout,
                        () => {
                          const _0x38158a = _0x58fd66;
                          _0x5c2281[_0x38158a(0x4b6, 'Di$r')][
                            _0x38158a(0x369, '*o(O')
                          ](),
                            _0x5c2281[_0x38158a(0x5dd, 'rsrW')][
                              _0x38158a(0x701, 'VaX6')
                            ](_0x5c2281);
                        },
                        0x0
                      );
                    const _0x11e96f = new Sky();
                    _0x11e96f[_0x58fd66(0x4f1, '[z)#')][
                      _0x58fd66(0x5ea, 'Tggn')
                    ](0x2710),
                      this[_0x58fd66(0x49b, 'isRG')]['add'](_0x11e96f);
                    const _0x4c2829 =
                      _0x11e96f['material'][_0x58fd66(0x3dc, 'cxqK')];
                    (_0x4c2829[_0x58fd66(0x483, 'yj(U')]['value'] = 0xa),
                      (_0x4c2829[_0x4cd061['ShHAo']][
                        _0x58fd66(0x866, '#D4T')
                      ] = 0x2),
                      (_0x4c2829[_0x4cd061[_0x58fd66(0x4c3, '&3*^')]][
                        _0x58fd66(0x410, '64mJ')
                      ] = 0.005),
                      (_0x4c2829[_0x4cd061[_0x58fd66(0x863, '64mJ')]][
                        'value'
                      ] = 0.8);
                    const _0x3c5f70 = { elevation: 0x0, azimuth: 0x0 },
                      _0x47c68f = new PMREMGenerator(
                        this[_0x58fd66(0x1c8, '5Q9i')]
                      ),
                      _0x1f139e = new Vector3(),
                      _0x3ff0b4 = () => {
                        const _0x21dfa4 = _0x58fd66,
                          _0xfa3772 = {
                            DrcoL: _0x1aeaaa[_0x21dfa4(0x631, '0tbS')],
                          };
                        if (
                          _0x1aeaaa[_0x21dfa4(0x3c5, 'RIUg')](
                            _0x1aeaaa[_0x21dfa4(0x544, 'VZ3m')],
                            _0x1aeaaa['JGqTZ']
                          )
                        ) {
                          const _0x1431fa =
                            _0xfa3772['DrcoL'][_0x21dfa4(0x2d5, 'mxD@')]('|');
                          let _0x99b852 = 0x0;
                          while (!![]) {
                            switch (_0x1431fa[_0x99b852++]) {
                              case '0':
                                this[_0x21dfa4(0x49f, 'xXm&')][
                                  _0x21dfa4(0x2f6, '$SOy')
                                ]();
                                continue;
                              case '1':
                                this[_0x21dfa4(0x81f, '[z)#')][
                                  _0x21dfa4(0x266, '*o(O')
                                ][_0x21dfa4(0x328, 'cxqK')](0x52, 0x78, 0x6c);
                                continue;
                              case '2':
                                this['camera'][_0x21dfa4(0x5dc, '%dLx')] =
                                  new _0x2d2a6e()[_0x21dfa4(0x452, '@wQ)')](
                                    this[_0x21dfa4(0x275, 'fFl%')][
                                      _0x21dfa4(0x38f, 'pr@C')
                                    ]
                                  );
                                continue;
                              case '3':
                                this['loadModel']();
                                continue;
                              case '4':
                                this['controls'][_0x21dfa4(0x40e, 'cY88')][
                                  _0x21dfa4(0x1b1, 'TraC')
                                ](-0x3, -0x9, -0x8);
                                continue;
                              case '5':
                                this[_0x21dfa4(0x336, '5Q9i')][
                                  _0x21dfa4(0x7d4, 'VZ3m')
                                ] = new _0x357534()[_0x21dfa4(0x214, '#o#W')](
                                  this[_0x21dfa4(0x6c7, 'QCn2')][
                                    _0x21dfa4(0x24b, '*o(O')
                                  ]
                                );
                                continue;
                            }
                            break;
                          }
                        } else {
                          const _0x16a7f4 = MathUtils[_0x21dfa4(0x44b, '#D4T')](
                              _0x1aeaaa[_0x21dfa4(0x183, 'xXm&')](
                                0x5a,
                                _0x3c5f70['elevation']
                              )
                            ),
                            _0x440d69 = MathUtils['degToRad'](
                              _0x3c5f70[_0x21dfa4(0x442, 'yj(U')]
                            );
                          _0x1f139e['setFromSphericalCoords'](
                            0x1,
                            _0x16a7f4,
                            _0x440d69
                          ),
                            _0x11e96f[_0x21dfa4(0x311, 'cJlR')][
                              _0x21dfa4(0x4fb, 'GSPA')
                            ][_0x21dfa4(0x3fa, 'dyOF')][
                              _0x21dfa4(0x1f1, 'cY88')
                            ][_0x21dfa4(0x20f, 'Tggn')](_0x1f139e),
                            this[_0x21dfa4(0x531, '#omn')][
                              _0x21dfa4(0x22c, 'oJob')
                            ]['uniforms'][_0x1aeaaa[_0x21dfa4(0x3c3, 'Do^C')]][
                              'value'
                            ]
                              [_0x21dfa4(0x538, ')f1%')](_0x1f139e)
                              [_0x21dfa4(0x859, 'Mfne')]();
                        }
                      };
                    _0x4cd061[_0x58fd66(0x26c, '*o(O')](_0x3ff0b4);
                  } else {
                    if (
                      _0x4cd061['YOSVP'](
                        _0x5c2281[_0x58fd66(0x7c5, '*o(O')],
                        _0x4cd061[_0x58fd66(0x484, ')f1%')]
                      )
                    ) {
                      if (
                        _0x4cd061['YOSVP'](
                          _0x58fd66(0x7c1, '#D4T'),
                          _0x58fd66(0x7f8, 'VaX6')
                        )
                      ) {
                        const _0xc2c8d4 = _0x58fd66(0x1a5, '&3*^'),
                          _0x45ed52 = _0x58fd66(0x6a5, 'RIUg');
                        _0x5c2281[_0x58fd66(0x62c, 'VZ3m')][
                          'computeVertexNormals'
                        ](),
                          (this[_0x58fd66(0x597, 'QCn2')] = {
                            roughness: { value: 0x1 },
                            emissive: { value: new Color(_0x4cd061['NvWZh']) },
                            opacity: { value: 0.8 },
                            baseTexture: {
                              value: new TextureLoader()[
                                _0x58fd66(0x32f, 'pr@C')
                              ]('img/peilou1.jpg'),
                            },
                          });
                        const _0x52db69 = new ShaderMaterial({
                          uniforms: this[_0x58fd66(0x527, 'eJ0%')],
                          vertexShader: _0xc2c8d4,
                          fragmentShader: _0x45ed52,
                          transparent: !![],
                        });
                        (_0x5c2281['material'] = _0x52db69),
                          (_0x5c2281[_0x58fd66(0x3ec, 'zIHi')][
                            _0x58fd66(0x608, 'P9le')
                          ] = !0x0),
                          _0x5c2281[_0x58fd66(0x38a, 'VZ3m')][
                            _0x58fd66(0x492, 'Tggn')
                          ](BLOOM_SCENE);
                      } else {
                        const _0x3f6888 = _0x229d4e['scene']['clone']();
                        _0x3f6888[_0x58fd66(0x80f, '&3*^')][
                          _0x58fd66(0x1b1, 'TraC')
                        ](0.008, 0.008, 0.008),
                          _0x2c8e69['forEach']((_0x2007fb) => {
                            const _0x4bd6e4 = _0x58fd66,
                              _0x364745 = _0x3f6888[_0x4bd6e4(0x657, 'D^]j')]();
                            _0x364745[_0x4bd6e4(0x355, 'D^]j')][
                              _0x4bd6e4(0x476, 'W@$@')
                            ](_0x2007fb['pos']),
                              _0x364745[_0x4bd6e4(0x3a2, 'VaX6')]['copy'](
                                _0x2007fb[_0x4bd6e4(0x42a, ')f1%')]
                              ),
                              this[_0x4bd6e4(0x62b, '&3*^')]['add'](_0x364745);
                          });
                      }
                    } else {
                      if (
                        _0x4cd061['DjlBP'](
                          _0x5c2281[_0x58fd66(0x838, '[z)#')],
                          _0x4cd061[_0x58fd66(0x512, '5Q9i')]
                        )
                      ) {
                        const _0x24de58 =
                          _0x4cd061[_0x58fd66(0x705, 'Di$r')][
                            _0x58fd66(0x2d5, 'mxD@')
                          ]('|');
                        let _0x471f33 = 0x0;
                        while (!![]) {
                          switch (_0x24de58[_0x471f33++]) {
                            case '0':
                              _0x5c2281[_0x58fd66(0x294, 'RIUg')][
                                _0x58fd66(0x47f, '&3*^')
                              ] = new Color('#061B21');
                              continue;
                            case '1':
                              _0x5c2281[_0x58fd66(0x478, '@wQ)')][
                                _0x58fd66(0x59d, 'uu^e')
                              ](BLOOM_SCENE);
                              continue;
                            case '2':
                              _0x5c2281[_0x58fd66(0x44a, 'tA%r')][
                                _0x58fd66(0x6e5, 'oJob')
                              ] = 0.72;
                              continue;
                            case '3':
                              _0x5c2281['material'][
                                _0x58fd66(0x718, '#o#W')
                              ] = 0.4;
                              continue;
                            case '4':
                              _0x5c2281[_0x58fd66(0x815, 'pr@C')][
                                _0x58fd66(0x1a6, 'Do^C')
                              ] = new Color(_0x58fd66(0x408, '#omn'));
                              continue;
                            case '5':
                              _0x5c2281['material'][_0x58fd66(0x2bc, '#omn')] =
                                !0x0;
                              continue;
                          }
                          break;
                        }
                      } else {
                        if (
                          _0x4cd061[_0x58fd66(0x245, '5Q9i')](
                            _0x5c2281[_0x58fd66(0x81e, '@wQ)')],
                            _0x4cd061['lIfwC']
                          )
                        ) {
                          if (
                            _0x4cd061['ruzCV'](
                              _0x58fd66(0x42c, 'asXm'),
                              'JcQZb'
                            )
                          )
                            (_0x5c2281[_0x58fd66(0x2f9, 'Mfne')][
                              _0x58fd66(0x30a, 'zIHi')
                            ] = new Color(_0x4cd061[_0x58fd66(0x3fe, '*o(O')])),
                              (_0x5c2281['material']['color'] = new Color(
                                _0x4cd061[_0x58fd66(0x80e, 'RIUg')]
                              )),
                              (_0x5c2281['material']['roughness'] = 0.5),
                              (_0x5c2281[_0x58fd66(0x315, 'isRG')][
                                _0x58fd66(0x606, 'isRG')
                              ] = 0.5),
                              (_0x5c2281[_0x58fd66(0x700, 'GSPA')][
                                _0x58fd66(0x7f6, 'fFl%')
                              ] = !0x0),
                              _0x5c2281[_0x58fd66(0x4cb, 'EN%Z')][
                                _0x58fd66(0x3f5, '*o(O')
                              ](BLOOM_SCENE);
                          else {
                            _0x27a2f9[_0x58fd66(0x2ad, 'HLRT')]();
                            if (_0x25f165[_0x58fd66(0x37b, 'cJlR')] !== 0x1)
                              return;
                            (this['mouse']['x'] = _0xf4b76d['VtEJC'](
                              _0xf4b76d[_0x58fd66(0x70c, 'cY88')](
                                _0x5c41a5['clientX'] /
                                  this[_0x58fd66(0x7c6, '[z)#')],
                                0x2
                              ),
                              0x1
                            )),
                              (this[_0x58fd66(0x54a, '#D4T')]['y'] = _0xf4b76d[
                                _0x58fd66(0x3be, 'Di$r')
                              ](
                                _0xf4b76d[_0x58fd66(0x37a, '&3*^')](
                                  -(
                                    _0x2b25a1[_0x58fd66(0x2c3, 'cJlR')] /
                                    this['containerHeight']
                                  ),
                                  0x2
                                ),
                                0x1
                              )),
                              this[_0x58fd66(0x5da, 'k@fr')][
                                _0x58fd66(0x3a0, '4[ed')
                              ](
                                this[_0x58fd66(0x837, 'P9le')],
                                this[_0x58fd66(0x4ac, '0tbS')]
                              );
                            const _0x3cb02f = this[_0x58fd66(0x2e6, '$SOy')][
                              'intersectObjects'
                            ](this['models']['children']);
                            if (
                              _0xf4b76d[_0x58fd66(0x235, 'P9le')](
                                _0x3cb02f['length'],
                                0x1
                              )
                            )
                              return;
                            const _0x437289 = {};
                            (_0x437289['x'] = _0xf4b76d[
                              _0x58fd66(0x6a1, '[z)#')
                            ](
                              _0x9c9a3f,
                              _0x3cb02f[0x0][_0x58fd66(0x547, 'VZ3m')]['x'][
                                'toFixed'
                              ](0x3)
                            )),
                              (_0x437289['y'] = _0xf4b76d[
                                _0x58fd66(0x845, '$SOy')
                              ](
                                _0x290cda,
                                _0x3cb02f[0x0]['point']['y'][
                                  _0x58fd66(0x307, 'TraC')
                                ](0x3)
                              )),
                              (_0x437289['z'] = _0xf4b76d['NCkUa'](
                                _0x29e532,
                                _0x3cb02f[0x0][_0x58fd66(0x62a, 'tA%r')]['z'][
                                  _0x58fd66(0x4af, ')f1%')
                                ](0x3)
                              ));
                            if (this[_0x58fd66(0x3cf, '$SOy')])
                              this[_0x58fd66(0x7b0, 'zIHi')](
                                new _0x28d5e1(
                                  _0x437289['x'],
                                  _0x437289['y'],
                                  _0x437289['z']
                                )
                              );
                          }
                        } else {
                          if (
                            _0x4cd061[_0x58fd66(0x862, '#o#W')](
                              _0x5c2281[_0x58fd66(0x6b4, 'cxqK')],
                              _0x58fd66(0x7b6, 'isRG')
                            )
                          )
                            (_0x5c2281['material'][_0x58fd66(0x69b, 'cJlR')] =
                              new Color(_0x4cd061[_0x58fd66(0x690, '@wQ)')])),
                              (_0x5c2281[_0x58fd66(0x581, '#o#W')][
                                _0x58fd66(0x47f, '&3*^')
                              ] = new Color(_0x58fd66(0x3d5, 'ODYW'))),
                              (_0x5c2281[_0x58fd66(0x75f, '5Q9i')][
                                _0x58fd66(0x1bf, 'ODYW')
                              ] = 0.4),
                              (_0x5c2281['material'][
                                _0x58fd66(0x606, 'isRG')
                              ] = 0.72),
                              (_0x5c2281[_0x58fd66(0x25a, '$SOy')][
                                'needsUpdate'
                              ] = !0x0),
                              _0x5c2281['layers'][_0x58fd66(0x59c, 'isRG')](
                                BLOOM_SCENE
                              );
                          else {
                            if (
                              _0x4cd061[_0x58fd66(0x6db, 'dyOF')](
                                _0x5c2281[_0x58fd66(0x824, 'cY88')],
                                _0x58fd66(0x256, '5Q9i')
                              )
                            ) {
                              if (
                                _0x4cd061[_0x58fd66(0x1c5, 'RIUg')] !==
                                _0x4cd061['Wrbiw']
                              )
                                _0x17b4f4[_0x58fd66(0x29b, 'cJlR')] = _0x3ce0d7[
                                  'wrapT'
                                ] = _0x8835b;
                              else {
                                const _0x2b9402 = '3|5|0|4|2|1'[
                                  _0x58fd66(0x269, 'EN%Z')
                                ]('|');
                                let _0x2ba3ec = 0x0;
                                while (!![]) {
                                  switch (_0x2b9402[_0x2ba3ec++]) {
                                    case '0':
                                      _0x5c2281[_0x58fd66(0x188, 'VaX6')][
                                        _0x58fd66(0x6c2, 'RIUg')
                                      ] = 0.5;
                                      continue;
                                    case '1':
                                      _0x5c2281['layers']['enable'](
                                        BLOOM_SCENE
                                      );
                                      continue;
                                    case '2':
                                      _0x5c2281[_0x58fd66(0x630, '&3*^')][
                                        'needsUpdate'
                                      ] = !0x0;
                                      continue;
                                    case '3':
                                      _0x5c2281['material']['emissive'] =
                                        new Color(_0x4cd061['akyJu']);
                                      continue;
                                    case '4':
                                      _0x5c2281[_0x58fd66(0x2f9, 'Mfne')][
                                        _0x58fd66(0x341, 'eJ0%')
                                      ] = 0.5;
                                      continue;
                                    case '5':
                                      _0x5c2281['material']['color'] =
                                        new Color(
                                          _0x4cd061[_0x58fd66(0x57c, 'H]q%')]
                                        );
                                      continue;
                                  }
                                  break;
                                }
                              }
                            } else {
                              if (
                                _0x4cd061[_0x58fd66(0x6ca, 'ODYW')](
                                  _0x5c2281[_0x58fd66(0x681, 'd@fE')],
                                  '网格'
                                )
                              ) {
                                if (
                                  _0x4cd061[_0x58fd66(0x4e0, 'VZ3m')](
                                    _0x4cd061['VXvrk'],
                                    'lXmIF'
                                  )
                                )
                                  this[_0x58fd66(0x2d8, 'eJ0%')][
                                    _0x58fd66(0x769, 'H]q%')
                                  ]((_0x5c816f) => {
                                    const _0x1357c0 = _0x58fd66;
                                    if (!_0x5c816f['isMesh']) return;
                                    _0xf4b76d[_0x1357c0(0x805, 'k@fr')](
                                      _0x5c816f[_0x1357c0(0x33e, 'D^]j')],
                                      _0x1357c0(0x26e, 'H]q%')
                                    ) &&
                                      ((_0x5c816f[_0x1357c0(0x762, 'ODYW')][
                                        'color'
                                      ] = new _0x596337(_0x259e05)),
                                      (_0x5c816f['material'][
                                        _0x1357c0(0x4ec, 'tA%r')
                                      ] = !0x0));
                                  });
                                else {
                                  const _0x1f7287 =
                                    _0x4cd061[_0x58fd66(0x2cd, '[z)#')][
                                      _0x58fd66(0x1d1, 'rsrW')
                                    ]('|');
                                  let _0xb3fb9 = 0x0;
                                  while (!![]) {
                                    switch (_0x1f7287[_0xb3fb9++]) {
                                      case '0':
                                        _0x5c2281[_0x58fd66(0x762, 'ODYW')][
                                          _0x58fd66(0x82d, 'yj(U')
                                        ] = 0.6;
                                        continue;
                                      case '1':
                                        _0x5c2281['position']['y'] += 0.3;
                                        continue;
                                      case '2':
                                        _0x5c2281[_0x58fd66(0x2ae, 'xXm&')][
                                          _0x58fd66(0x3c9, 'EN%Z')
                                        ] = new Color(_0x58fd66(0x543, 'Di$r'));
                                        continue;
                                      case '3':
                                        _0x5c2281[_0x58fd66(0x5df, 'EN%Z')][
                                          _0x58fd66(0x21f, 'oJob')
                                        ] = new Color(
                                          _0x4cd061[_0x58fd66(0x5e1, 'QCn2')]
                                        );
                                        continue;
                                      case '4':
                                        _0x5c2281['material'][
                                          _0x58fd66(0x526, 'H]q%')
                                        ] = !0x0;
                                        continue;
                                      case '5':
                                        _0x5c2281[_0x58fd66(0x2ae, 'xXm&')][
                                          _0x58fd66(0x1ed, ')f1%')
                                        ] = 0.21;
                                        continue;
                                    }
                                    break;
                                  }
                                }
                              } else {
                                if (
                                  _0x4cd061[_0x58fd66(0x498, 'yj(U')](
                                    _0x5c2281['name'],
                                    _0x58fd66(0x6d1, 'TraC')
                                  )
                                ) {
                                  const _0x2b7768 = _0x58fd66(0x59a, '4[ed')[
                                    'split'
                                  ]('|');
                                  let _0x43a60d = 0x0;
                                  while (!![]) {
                                    switch (_0x2b7768[_0x43a60d++]) {
                                      case '0':
                                        _0x5c2281[_0x58fd66(0x2a1, 'VZ3m')][
                                          _0x58fd66(0x504, 'xXm&')
                                        ] = 0.5;
                                        continue;
                                      case '1':
                                        _0x5c2281[_0x58fd66(0x311, 'cJlR')][
                                          _0x58fd66(0x5be, 'uu^e')
                                        ] = !0x0;
                                        continue;
                                      case '2':
                                        _0x5c2281[_0x58fd66(0x257, '0tbS')][
                                          _0x58fd66(0x5f1, 'Mfne')
                                        ] = 0.3;
                                        continue;
                                      case '3':
                                        _0x5c2281[_0x58fd66(0x660, '5Q9i')][
                                          _0x58fd66(0x3d0, 'EN%Z')
                                        ](BLOOM_SCENE);
                                        continue;
                                      case '4':
                                        _0x5c2281['material'][
                                          _0x58fd66(0x30a, 'zIHi')
                                        ] = new Color(_0x4cd061['LCJRn']);
                                        continue;
                                    }
                                    break;
                                  }
                                } else {
                                  if (
                                    _0x4cd061[_0x58fd66(0x3d7, 'Mfne')](
                                      _0x5c2281[_0x58fd66(0x717, '0tbS')],
                                      '道路'
                                    )
                                  ) {
                                    const _0x5eee6b =
                                      _0x4cd061[_0x58fd66(0x4c5, '64mJ')][
                                        _0x58fd66(0x21b, 'H]q%')
                                      ]('|');
                                    let _0x2286d1 = 0x0;
                                    while (!![]) {
                                      switch (_0x5eee6b[_0x2286d1++]) {
                                        case '0':
                                          _0x5c2281['material'][
                                            'metalness'
                                          ] = 0.21;
                                          continue;
                                        case '1':
                                          _0x5c2281['material'][
                                            _0x58fd66(0x2de, ')f1%')
                                          ] = new Color(
                                            _0x4cd061[_0x58fd66(0x1ff, 'fFl%')]
                                          );
                                          continue;
                                        case '2':
                                          _0x5c2281[_0x58fd66(0x3ec, 'zIHi')][
                                            'emissive'
                                          ] = new Color(_0x4cd061['hCRmT']);
                                          continue;
                                        case '3':
                                          _0x5c2281[_0x58fd66(0x364, '@wQ)')][
                                            'needsUpdate'
                                          ] = !0x0;
                                          continue;
                                        case '4':
                                          _0x5c2281[_0x58fd66(0x2ae, 'xXm&')][
                                            _0x58fd66(0x73d, '#D4T')
                                          ] = 0.6;
                                          continue;
                                      }
                                      break;
                                    }
                                  } else {
                                    if (
                                      _0x4cd061[_0x58fd66(0x4db, 'tA%r')](
                                        _0x5c2281[_0x58fd66(0x2f8, 'mxD@')],
                                        _0x58fd66(0x3e2, 'cJlR')
                                      ) ||
                                      _0x4cd061['WtaBj'](
                                        _0x5c2281[_0x58fd66(0x63e, 'EN%Z')],
                                        _0x4cd061['aSuIl']
                                      )
                                    )
                                      (_0x5c2281['material'][
                                        _0x58fd66(0x45e, 'Do^C')
                                      ] = 0.55),
                                        (_0x5c2281[_0x58fd66(0x294, 'RIUg')][
                                          _0x58fd66(0x299, '@wQ)')
                                        ] = 0x0),
                                        (_0x5c2281[_0x58fd66(0x58b, 'QCn2')][
                                          _0x58fd66(0x288, 'asXm')
                                        ] = !0x0),
                                        _0x5c2281[_0x58fd66(0x574, 'tA%r')][
                                          _0x58fd66(0x588, '$SOy')
                                        ](BLOOM_SCENE);
                                    else {
                                      if (
                                        _0x5c2281[_0x58fd66(0x465, 'oJob')] ==
                                          _0x4cd061[_0x58fd66(0x1e0, 'zIHi')] ||
                                        _0x4cd061[_0x58fd66(0x4f4, 'isRG')](
                                          _0x5c2281[_0x58fd66(0x321, 'cJlR')],
                                          _0x4cd061['zHJba']
                                        )
                                      ) {
                                        if (
                                          _0x4cd061[_0x58fd66(0x7ca, 'Do^C')](
                                            _0x4cd061[_0x58fd66(0x5a8, 'oJob')],
                                            _0x4cd061['bdXOE']
                                          )
                                        )
                                          (_0x5c2281[_0x58fd66(0x2f7, ')f1%')][
                                            _0x58fd66(0x335, '%dLx')
                                          ] = 0.55),
                                            (_0x5c2281[
                                              _0x58fd66(0x36d, 'HLRT')
                                            ]['metalness'] = 0x0),
                                            (_0x5c2281[
                                              _0x58fd66(0x6ad, 'k@fr')
                                            ][_0x58fd66(0x568, '@wQ)')] = !0x0),
                                            _0x5c2281[_0x58fd66(0x47e, 'asXm')][
                                              _0x58fd66(0x73e, 'cJlR')
                                            ](BLOOM_SCENE);
                                        else {
                                          this[_0x58fd66(0x549, '#D4T')][
                                            _0x58fd66(0x46b, 'zIHi')
                                          ][_0x58fd66(0x1ca, 'mxD@')](
                                            (_0xd1da14) => {
                                              const _0x53d4b2 = _0x58fd66;
                                              if (!_0xd1da14['visible'])
                                                _0xd1da14[
                                                  _0x53d4b2(0x259, 'ODYW')
                                                ] = !0x0;
                                            }
                                          );
                                          let _0x51a908 = 0x0;
                                          while (
                                            _0xf4b76d[_0x58fd66(0x589, '0tbS')](
                                              _0x51a908,
                                              this[_0x58fd66(0x711, '*o(O')][
                                                'children'
                                              ][_0x58fd66(0x7ac, '*o(O')]
                                            )
                                          ) {
                                            this[_0x58fd66(0x3e0, 'QCn2')][
                                              _0x58fd66(0x279, 'Mfne')
                                            ][_0x58fd66(0x602, 'QCn2')](
                                              (_0x15dd8d, _0x43066f) => {
                                                const _0x18acf0 = _0x58fd66;
                                                if (
                                                  !_0x15dd8d[
                                                    _0x18acf0(0x2bd, 'd@fE')
                                                  ] ||
                                                  _0xf4b76d[
                                                    _0x18acf0(0x7af, 'cY88')
                                                  ](_0x43066f, _0x51a908) ||
                                                  !this[
                                                    _0x18acf0(0x261, 'cxqK')
                                                  ][_0x18acf0(0x399, 'eJ0%')][
                                                    _0x51a908
                                                  ]['visible']
                                                )
                                                  return;
                                                const _0x3fed14 =
                                                  new _0x19f69b()
                                                    [_0x18acf0(0x540, '&3*^')](
                                                      _0x15dd8d[
                                                        _0x18acf0(0x627, 'VaX6')
                                                      ]
                                                    )
                                                    [_0x18acf0(0x809, 'oJob')](
                                                      new _0x28fb80()[
                                                        _0x18acf0(0x43c, 'asXm')
                                                      ](
                                                        this[
                                                          _0x18acf0(
                                                            0x55a,
                                                            'EN%Z'
                                                          )
                                                        ][
                                                          _0x18acf0(
                                                            0x191,
                                                            'k@fr'
                                                          )
                                                        ][_0x51a908][
                                                          _0x18acf0(
                                                            0x2eb,
                                                            'uu^e'
                                                          )
                                                        ]
                                                      )
                                                    )
                                                    [_0x18acf0(0x5e9, 'ODYW')](
                                                      0x2
                                                    );
                                                if (
                                                  _0x3fed14[
                                                    _0x18acf0(0x645, 'eJ0%')
                                                  ](
                                                    this[
                                                      _0x18acf0(0x298, 'mxD@')
                                                    ][_0x18acf0(0x2f3, 'asXm')]
                                                  ) > 0x3c
                                                )
                                                  _0x15dd8d[
                                                    _0x18acf0(0x468, 'oJob')
                                                  ] = !!0x0;
                                              }
                                            ),
                                              _0x51a908++;
                                          }
                                        }
                                      } else {
                                        if (
                                          _0x5c2281['name'] ==
                                          _0x4cd061[_0x58fd66(0x230, '$SOy')]
                                        ) {
                                          const _0x160c73 =
                                            _0x4cd061[_0x58fd66(0x7dd, 'asXm')][
                                              'split'
                                            ]('|');
                                          let _0x447b4c = 0x0;
                                          while (!![]) {
                                            switch (_0x160c73[_0x447b4c++]) {
                                              case '0':
                                                _0x5c2281[
                                                  _0x58fd66(0x3ec, 'zIHi')
                                                ][_0x58fd66(0x2ea, 'D^]j')] =
                                                  new Color(
                                                    _0x4cd061[
                                                      _0x58fd66(0x827, '4[ed')
                                                    ]
                                                  );
                                                continue;
                                              case '1':
                                                _0x5c2281[
                                                  _0x58fd66(0x5d6, 'd@fE')
                                                ][_0x58fd66(0x570, 'rsrW')](
                                                  BLOOM_SCENE
                                                );
                                                continue;
                                              case '2':
                                                _0x5c2281['material'][
                                                  _0x58fd66(0x693, '0tbS')
                                                ] = 0.55;
                                                continue;
                                              case '3':
                                                _0x5c2281[
                                                  _0x58fd66(0x44a, 'tA%r')
                                                ][_0x58fd66(0x6e0, 'rsrW')] =
                                                  !0x0;
                                                continue;
                                              case '4':
                                                _0x5c2281['material'][
                                                  _0x58fd66(0x523, 'dyOF')
                                                ] = new Color(
                                                  _0x4cd061[
                                                    _0x58fd66(0x3d4, 'xXm&')
                                                  ]
                                                );
                                                continue;
                                              case '5':
                                                _0x5c2281['material'][
                                                  _0x58fd66(0x3a1, 'dyOF')
                                                ] = 0.5;
                                                continue;
                                            }
                                            break;
                                          }
                                        } else {
                                          if (
                                            _0x4cd061[_0x58fd66(0x3fd, ')f1%')](
                                              _0x5c2281[
                                                _0x58fd66(0x465, 'oJob')
                                              ],
                                              _0x58fd66(0x1c0, '0tbS')
                                            )
                                          ) {
                                            if (
                                              _0x4cd061['wmgJV'](
                                                _0x58fd66(0x1f9, 'W@$@'),
                                                _0x4cd061[
                                                  _0x58fd66(0x776, 'ODYW')
                                                ]
                                              )
                                            ) {
                                              if (
                                                _0x1aeaaa[
                                                  _0x58fd66(0x6fc, 'QCn2')
                                                ](_0x3d9348, 0x1)
                                              )
                                                this[_0x58fd66(0x55d, '$SOy')][
                                                  _0x58fd66(0x6d2, 'cY88')
                                                ](
                                                  _0x1aeaaa[
                                                    _0x58fd66(0x4dd, 'eJ0%')
                                                  ],
                                                  _0x19f9f9
                                                );
                                              else {
                                                if (
                                                  _0x1aeaaa[
                                                    _0x58fd66(0x749, 'ODYW')
                                                  ](_0x10afd4, 0x2)
                                                )
                                                  this[
                                                    _0x58fd66(0x624, 'Di$r')
                                                  ][_0x58fd66(0x3ee, 'H]q%')](
                                                    _0x1aeaaa[
                                                      _0x58fd66(0x78e, 'H]q%')
                                                    ],
                                                    _0x1bb233
                                                  );
                                              }
                                              (_0x4367ff = 0x1),
                                                _0x1aeaaa['wdqwV'](
                                                  _0x42d361,
                                                  _0x32b5b1
                                                ),
                                                (_0x4ad6ea = null);
                                            } else {
                                              const _0x131921 =
                                                _0x4cd061['OiaOo'][
                                                  _0x58fd66(0x6d7, '*o(O')
                                                ]('|');
                                              let _0x3109b9 = 0x0;
                                              while (!![]) {
                                                switch (
                                                  _0x131921[_0x3109b9++]
                                                ) {
                                                  case '0':
                                                    _0x5c2281[
                                                      _0x58fd66(0x2f9, 'Mfne')
                                                    ][
                                                      _0x58fd66(0x2de, ')f1%')
                                                    ] = new Color(
                                                      _0x4cd061[
                                                        _0x58fd66(0x605, 'W@$@')
                                                      ]
                                                    );
                                                    continue;
                                                  case '1':
                                                    _0x5c2281[
                                                      _0x58fd66(0x700, 'GSPA')
                                                    ]['metalness'] = 0x0;
                                                    continue;
                                                  case '2':
                                                    _0x5c2281[
                                                      _0x58fd66(0x574, 'tA%r')
                                                    ]['enable'](BLOOM_SCENE);
                                                    continue;
                                                  case '3':
                                                    _0x5c2281[
                                                      _0x58fd66(0x630, '&3*^')
                                                    ][
                                                      _0x58fd66(0x3ff, 'zIHi')
                                                    ] = 0.55;
                                                    continue;
                                                  case '4':
                                                    _0x5c2281[
                                                      _0x58fd66(0x420, 'H]q%')
                                                    ]['needsUpdate'] = !0x0;
                                                    continue;
                                                  case '5':
                                                    _0x5c2281[
                                                      _0x58fd66(0x630, '&3*^')
                                                    ]['emissive'] = new Color(
                                                      _0x4cd061[
                                                        _0x58fd66(0x458, 'cxqK')
                                                      ]
                                                    );
                                                    continue;
                                                }
                                                break;
                                              }
                                            }
                                          } else {
                                            if (
                                              _0x4cd061[
                                                _0x58fd66(0x394, 'mxD@')
                                              ] === _0x4cd061['ZpUhx']
                                            ) {
                                              if (!this['isShiJiuGang']) return;
                                              let _0xf12e70 = this[
                                                _0x58fd66(0x466, 'cxqK')
                                              ](
                                                0xa,
                                                0.1,
                                                0.5,
                                                new _0x3a253b(0x0, 0x1, 0x1),
                                                0.2
                                              );
                                              _0xf12e70[
                                                _0x58fd66(0x7cc, 'W@$@')
                                              ][_0x58fd66(0x1b2, 'cJlR')](
                                                0x17,
                                                -0x2,
                                                -0x20
                                              ),
                                                _0xf12e70[
                                                  _0x58fd66(0x237, 'yj(U')
                                                ](
                                                  _0xf4b76d['ORUTk'](
                                                    -_0x5dec6b['PI'],
                                                    0x2
                                                  )
                                                ),
                                                _0xf12e70[
                                                  _0x58fd66(0x463, 'RIUg')
                                                ][_0x58fd66(0x628, 'H]q%')](
                                                  _0x533518
                                                ),
                                                this[_0x58fd66(0x390, 'HLRT')][
                                                  _0x58fd66(0x773, 'VaX6')
                                                ](_0xf12e70);
                                            } else
                                              _0x5c2281[
                                                _0x58fd66(0x764, 'Do^C')
                                              ]['enable'](BLOOM_SCENE);
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else
                this[_0x58fd66(0x80c, '%dLx')]['traverse'](
                  this['darkenNonBloomed'][_0x58fd66(0x51e, '#omn')](this)
                ),
                  this[_0x58fd66(0x2d0, 'tA%r')]['render'](),
                  this[_0x58fd66(0x826, 'pr@C')]['traverse'](
                    this[_0x58fd66(0x5a6, 'yj(U')][_0x58fd66(0x32c, '4[ed')](
                      this
                    )
                  );
            }
          ),
            this[_0x330991(0x82f, 'GSPA')][_0x330991(0x751, 'cJlR')](
              _0x557276['scene']
            );
          for (
            let _0x2ec94a = 0x0;
            _0x4cd061['YGcgT'](_0x2ec94a, 0x3);
            _0x2ec94a++
          ) {
            _0x4cd061[_0x330991(0x30b, 'HLRT')](
              _0x4cd061['spiYu'],
              _0x4cd061['OWGFF']
            )
              ? setTimeout(() => {
                  const _0xd351f0 = _0x330991;
                  if (
                    _0x4cd061['xBCZr'](
                      _0x4cd061['Emxpx'],
                      _0xd351f0(0x2fc, '%dLx')
                    )
                  )
                    (_0x1bfef1[_0xd351f0(0x315, 'isRG')][
                      _0xd351f0(0x27f, 'cxqK')
                    ] = _0x1ff293),
                      (_0x4a4d11[_0xd351f0(0x3a5, '4[ed')]['needsUpdate'] =
                        !0x0);
                  else {
                    let _0x26108b = this[_0xd351f0(0x46c, 'zIHi')](
                      0x10,
                      0.1,
                      0.5,
                      new Vector3(0x0, 0x1, 0x1),
                      0.2
                    );
                    _0x26108b[_0xd351f0(0x627, 'VaX6')][
                      _0xd351f0(0x19d, 'HLRT')
                    ](-18.851, 0.5, 13.5),
                      _0x26108b[_0xd351f0(0x45f, '*o(O')](-Math['PI'] / 0x2),
                      _0x26108b[_0xd351f0(0x217, 'cY88')]['enable'](
                        BLOOM_SCENE
                      ),
                      this[_0xd351f0(0x390, 'HLRT')][_0xd351f0(0x4e7, 'dyOF')](
                        _0x26108b
                      );
                  }
                }, _0x4cd061['BJvKn'](_0x2ec94a, 0xbb8))
              : _0x4cd061[_0x330991(0x70d, ')f1%')](
                  _0x2b8ded,
                  () => {
                    const _0x2346b6 = _0x330991;
                    let _0x204b7d = this[_0x2346b6(0x750, 'QCn2')](
                      0x10,
                      0.1,
                      0.5,
                      new _0x5008c4(0x0, 0x1, 0x1),
                      0.2
                    );
                    _0x204b7d['position']['set'](-18.851, 0.5, 13.5),
                      _0x204b7d[_0x2346b6(0x455, 'isRG')](
                        -_0x51730c['PI'] / 0x2
                      ),
                      _0x204b7d['layers']['enable'](_0x9b8b3c),
                      this[_0x2346b6(0x616, '#D4T')][_0x2346b6(0x609, 'pr@C')](
                        _0x204b7d
                      );
                  },
                  _0xf3203b * 0xbb8
                );
          }
          this['loadDashedLines'](dashedLineDataLan, 0x912727, 0.03),
            this[_0x330991(0x68c, 'yj(U')]();
        }
      },
      function (_0x77cf4a) {
        const _0x35dcb5 = _0x512e98;
        if ('pvwVT' !== _0x4cd061[_0x35dcb5(0x18e, 'cY88')])
          console[_0x35dcb5(0x533, 'eJ0%')](
            _0x4cd061[_0x35dcb5(0x23f, 'VaX6')](
              _0x4cd061['EDjIa'](
                _0x77cf4a['loaded'] / _0x77cf4a[_0x35dcb5(0x703, '*o(O')],
                0x64
              ),
              _0x35dcb5(0x353, 'P9le')
            )
          );
        else {
          const _0x54051d = _0xb4d5f3['clone']();
          _0x54051d[_0x35dcb5(0x2f3, 'asXm')][_0x35dcb5(0x598, '0tbS')](
            _0x36d648[_0x35dcb5(0x75e, '0tbS')]
          ),
            _0x54051d['rotation']['copy'](_0x34de15[_0x35dcb5(0x632, 'eJ0%')]),
            this[_0x35dcb5(0x4fa, 'oJob')][_0x35dcb5(0x79f, '$SOy')](_0x54051d);
        }
      },
      function (_0x1fb439) {
        const _0x487724 = _0x512e98;
        if (
          _0x4cd061[_0x487724(0x324, 'Do^C')](
            'jagyU',
            _0x4cd061[_0x487724(0x207, 'yj(U')]
          )
        ) {
          (this[_0x487724(0x440, 'cJlR')] = !this['isShiJiuGang']),
            (this['water'] = null),
            this[_0x487724(0x841, 'EN%Z')](this[_0x487724(0x58f, '[z)#')]);
          this[_0x487724(0x61c, '&3*^')] &&
            (this[_0x487724(0x6e8, '*o(O')](this['area']),
            (this['area'] = null));
          if (!this['isShiJiuGang']) {
            const _0x424172 =
              _0x4cd061[_0x487724(0x36f, '0tbS')][_0x487724(0x791, 'cJlR')](
                '|'
              );
            let _0x37590d = 0x0;
            while (!![]) {
              switch (_0x424172[_0x37590d++]) {
                case '0':
                  this[_0x487724(0x6c8, 'H]q%')]();
                  continue;
                case '1':
                  this[_0x487724(0x840, '%dLx')]['position0'] = new _0x436723()[
                    _0x487724(0x30f, 'cJlR')
                  ](this['camera'][_0x487724(0x6a8, ')f1%')]);
                  continue;
                case '2':
                  this[_0x487724(0x572, 'fFl%')][_0x487724(0x375, 'ODYW')]();
                  continue;
                case '3':
                  this[_0x487724(0x1e6, 'Mfne')][_0x487724(0x7f2, 'QCn2')] =
                    new _0x5eaa95()['copy'](
                      this[_0x487724(0x54c, '0tbS')][_0x487724(0x292, '[z)#')]
                    );
                  continue;
                case '4':
                  this[_0x487724(0x309, 'rsrW')]['position']['set'](
                    -32.91,
                    135.76,
                    157.6
                  );
                  continue;
                case '5':
                  this[_0x487724(0x63a, 'cJlR')][_0x487724(0x5a3, 'HLRT')][
                    _0x487724(0x6a7, 'D^]j')
                  ](-54.01, -6.7, 15.85);
                  continue;
              }
              break;
            }
          } else {
            const _0xfed285 =
              _0x4cd061[_0x487724(0x74c, 'QCn2')][_0x487724(0x376, '4[ed')](
                '|'
              );
            let _0x42f265 = 0x0;
            while (!![]) {
              switch (_0xfed285[_0x42f265++]) {
                case '0':
                  this[_0x487724(0x594, 'ODYW')][_0x487724(0x276, 'H]q%')] =
                    new _0x541f86()['copy'](
                      this[_0x487724(0x7bf, '*o(O')]['position']
                    );
                  continue;
                case '1':
                  this[_0x487724(0x361, 'QCn2')][_0x487724(0x7cc, 'W@$@')][
                    'set'
                  ](0x52, 0x78, 0x6c);
                  continue;
                case '2':
                  this[_0x487724(0x5ef, '*o(O')][_0x487724(0x423, 'eJ0%')] =
                    new _0x476433()['copy'](this['controls']['target']);
                  continue;
                case '3':
                  this[_0x487724(0x49f, 'xXm&')][_0x487724(0x187, 'xXm&')][
                    'set'
                  ](-0x3, -0x9, -0x8);
                  continue;
                case '4':
                  this[_0x487724(0x3df, '*o(O')]();
                  continue;
                case '5':
                  this['controls'][_0x487724(0x322, '4[ed')]();
                  continue;
              }
              break;
            }
          }
        } else console['log']('An\x20error\x20happened');
      }
    );
  }
  [_0x4e6d82(0x868, '#omn')](_0xe672c3) {
    const _0x101a65 = _0x4e6d82,
      _0x1d3c0e = {
        GwiUq: function (_0x13b61b, _0x276f06) {
          return _0x13b61b === _0x276f06;
        },
      };
    _0xe672c3[_0x101a65(0x554, '5Q9i')] &&
      _0x1d3c0e[_0x101a65(0x2c6, 'QCn2')](
        bloomLayer['test'](_0xe672c3[_0x101a65(0x521, 'yj(U')]),
        ![]
      ) &&
      ((materials[_0xe672c3[_0x101a65(0x368, 'cY88')]] =
        _0xe672c3[_0x101a65(0x7f9, 'dyOF')]),
      (_0xe672c3[_0x101a65(0x7fe, '#D4T')] = darkMaterial));
  }
  [_0x4e6d82(0x7a7, 'W@$@')](_0x4779a2) {
    const _0x417d0f = _0x4e6d82;
    materials[_0x4779a2[_0x417d0f(0x6f9, '0tbS')]] &&
      ((_0x4779a2['material'] = materials[_0x4779a2[_0x417d0f(0x332, 'HLRT')]]),
      delete materials[_0x4779a2[_0x417d0f(0x300, '$SOy')]]);
  }
  [_0x4e6d82(0x834, 'RIUg')]() {
    const _0x297dcf = _0x4e6d82;
    this[_0x297dcf(0x3ac, 'fFl%')][_0x297dcf(0x79c, 'xXm&')](
      this[_0x297dcf(0x2be, '[z)#')][_0x297dcf(0x333, 'tA%r')](this)
    ),
      this[_0x297dcf(0x7b4, 'oJob')][_0x297dcf(0x68a, '#D4T')](),
      this[_0x297dcf(0x1ae, '5Q9i')]['traverse'](
        this[_0x297dcf(0x820, 'cY88')][_0x297dcf(0x273, 'k@fr')](this)
      );
  }
  [_0x4e6d82(0x637, 'ODYW')](_0x1635d5) {
    const _0x324ed8 = _0x4e6d82,
      _0x46444a = {
        oFzEB: _0x324ed8(0x553, 'Di$r'),
        sQSRX: _0x324ed8(0x821, 'asXm'),
        jizws: _0x324ed8(0x29a, 'QCn2'),
      },
      _0x9b67eb = new Group(),
      _0x4ff109 = [];
    _0x4ff109[_0x324ed8(0x3e4, 'P9le')](
      new Vector3(_0x1635d5['x'], -0x8, _0x1635d5['z'])
    ),
      _0x4ff109[_0x324ed8(0x1f3, 'GSPA')](
        new Vector3(_0x1635d5['x'], -0x2, _0x1635d5['z'])
      );
    const _0x2e0479 = new BufferGeometry()[_0x324ed8(0x58e, 'tA%r')](_0x4ff109),
      _0x2b1cd9 = new LineDashedMaterial({
        color: 0x22caeb,
        dashSize: 0.1,
        gapSize: 0.2,
      }),
      _0xff8497 = new Line(_0x2e0479, _0x2b1cd9);
    _0xff8497[_0x324ed8(0x2db, '#omn')](),
      _0xff8497['layers']['enable'](BLOOM_SCENE),
      _0x9b67eb[_0x324ed8(0x620, '0tbS')](_0xff8497);
    const _0x51e24e = _0x324ed8(0x6c4, 'Do^C'),
      _0x40031c = _0x324ed8(0x5d9, 'mxD@'),
      _0x160069 = [0x1],
      _0x4934cc = [0.13, 0.8, 0.95],
      _0x9e3d64 = [_0x1635d5['x'], -0x2, _0x1635d5['z']],
      _0x3f5cb5 = new BufferGeometry();
    _0x3f5cb5['setAttribute'](
      _0x46444a[_0x324ed8(0x823, 'EN%Z')],
      new Float32BufferAttribute(_0x9e3d64, 0x3)
    ),
      _0x3f5cb5['setAttribute'](
        _0x324ed8(0x2c1, 'oJob'),
        new Float32BufferAttribute(_0x4934cc, 0x3)
      ),
      _0x3f5cb5[_0x324ed8(0x220, '#o#W')](
        _0x46444a[_0x324ed8(0x2e3, 'cxqK')],
        new Float32BufferAttribute(_0x160069, 0x1)
      );
    const _0x24e008 = new ShaderMaterial({
        uniforms: {
          color: { value: new Color(0xffffff) },
          pointTexture: {
            value: new TextureLoader()['load'](
              _0x46444a[_0x324ed8(0x6ce, 'GSPA')]
            ),
          },
          alphaTest: { value: 0x1 },
        },
        vertexShader: _0x51e24e,
        fragmentShader: _0x40031c,
      }),
      _0x52dd1f = new Points(_0x3f5cb5, _0x24e008);
    return (
      _0x52dd1f[_0x324ed8(0x2dd, 'isRG')][_0x324ed8(0x206, 'k@fr')](
        BLOOM_SCENE
      ),
      _0x9b67eb['add'](_0x52dd1f),
      _0x9b67eb
    );
  }
  [_0x4e6d82(0x29f, 'mxD@')](
    _0x6a63a2,
    _0x4e3cc4,
    _0x3a1421,
    _0x4505e0,
    _0x147750
  ) {
    const _0x3011e3 = _0x4e6d82,
      _0x4d3237 = {
        yTrgN: function (_0x4b1051, _0x93b815) {
          return _0x4b1051 <= _0x93b815;
        },
        ehbmp: function (_0x476a5a, _0x189406) {
          return _0x476a5a / _0x189406;
        },
        WBnCK: function (_0x13c8b9, _0x4f0aa1) {
          return _0x13c8b9 * _0x4f0aa1;
        },
        EdLPJ: function (_0x458b67, _0x8cdb1) {
          return _0x458b67 >= _0x8cdb1;
        },
        SBOYN: 'xNwRQ',
        aEsqr: function (_0x9907ba, _0x187827) {
          return _0x9907ba(_0x187827);
        },
      };
    var _0x4ae300 = {
        u_color: { value: _0x4505e0 },
        u_r: { value: _0x4e3cc4 },
        u_ring: { value: _0x3a1421 },
      },
      _0x1233fd =
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20vPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main(){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vPosition=position;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x09=\x20projectionMatrix\x20*\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
      _0x517db3 = _0x3011e3(0x297, 'TraC');
    const _0x4f71bd = new CircleGeometry(_0x6a63a2, 0x40);
    var _0x1b42e3 = new ShaderMaterial({
      vertexShader: _0x1233fd,
      fragmentShader: _0x517db3,
      side: DoubleSide,
      uniforms: _0x4ae300,
      transparent: !![],
      depthWrite: !![],
      blending: AdditiveBlending,
      transparent: !0x0,
    });
    const _0x2fb716 = new Mesh(_0x4f71bd, _0x1b42e3);
    function _0x692e90() {
      const _0x362a0a = _0x3011e3;
      if (
        _0x4d3237[_0x362a0a(0x6ac, 'ODYW')](
          _0x4ae300[_0x362a0a(0x33f, 'zIHi')]['value'],
          _0x4d3237[_0x362a0a(0x50e, '#omn')](
            _0x4d3237[_0x362a0a(0x2fa, 'EN%Z')](_0x6a63a2, 0x2),
            0x3
          )
        ) &&
        _0x4d3237[_0x362a0a(0x7c0, '*o(O')](
          _0x4ae300['u_r']['value'],
          (_0x6a63a2 * 0x1) / 0x3
        )
      )
        _0x4ae300[_0x362a0a(0x7a8, 'RIUg')][_0x362a0a(0x835, 'Mfne')] +=
          _0x147750;
      else
        _0x4ae300[_0x362a0a(0x58c, '5Q9i')][_0x362a0a(0x71c, 'mxD@')] +=
          _0x147750 * 0.1;
      _0x4ae300[_0x362a0a(0x438, 'cY88')][_0x362a0a(0x3ea, 'yj(U')] >=
        _0x6a63a2 &&
        (_0x4d3237['SBOYN'] === _0x4d3237[_0x362a0a(0x18c, 'W@$@')]
          ? (_0x4ae300['u_r']['value'] = _0x4e3cc4)
          : (_0x1b319c['wrapS'] = _0x1acb2e[_0x362a0a(0x1ad, 'Di$r')] =
              _0x34431f)),
        _0x4d3237[_0x362a0a(0x802, '#o#W')](requestAnimationFrame, _0x692e90);
    }
    return _0x692e90(), _0x2fb716;
  }
  ['makeLan'](_0xe0aa6a, _0x5622b3, _0x2127b2, _0x50a4a7, _0x51ca78) {
    const _0x4441e4 = _0x4e6d82,
      _0x1de77e = {
        WSwbV: function (_0x33f961, _0x35bab7) {
          return _0x33f961 / _0x35bab7;
        },
      },
      _0x1778c7 = new PlaneGeometry(0x1, 0x1),
      _0x171f6a = new MeshBasicMaterial({
        color: 0xffffff,
        transparent: !0x0,
        opacity: 0x1,
        depthTest: !!0x0,
        map: new TextureLoader()[_0x4441e4(0x7ba, '64mJ')](_0x5622b3),
      }),
      _0x4536e9 = new Mesh(_0x1778c7, _0x171f6a);
    _0x4536e9[_0x4441e4(0x81a, 'EN%Z')][_0x4441e4(0x613, 'QCn2')](_0x50a4a7),
      _0x4536e9[_0x4441e4(0x79a, 'tA%r')](
        _0x1de77e[_0x4441e4(0x804, 'VZ3m')](-Math['PI'], 0x2)
      ),
      (_0x4536e9[_0x4441e4(0x720, 'yj(U')]['z'] = _0x51ca78),
      _0x4536e9[_0x4441e4(0x5a5, 'k@fr')]['set'](
        _0x2127b2['x'],
        _0x2127b2['y'],
        0x1
      ),
      _0x4536e9['layers']['enable'](ENTIRE_SCENE);
    const _0x485095 = new CSS2DObject(_0xe0aa6a);
    (_0x485095[_0x4441e4(0x6b7, 'Mfne')]['z'] = 0x5),
      _0x4536e9[_0x4441e4(0x666, '#D4T')](_0x485095),
      this[_0x4441e4(0x59e, 'dyOF')][_0x4441e4(0x327, ')f1%')](_0x4536e9);
  }
  [_0x4e6d82(0x4fe, 'uu^e')](_0x3bf6fb) {
    const _0x225467 = _0x4e6d82,
      _0x5cdf10 = {
        NPxrp: _0x225467(0x496, 'xXm&'),
        IMPqA: function (_0x41b27e, _0x24cdb4) {
          return _0x41b27e / _0x24cdb4;
        },
        guRVB: function (_0x55c45d, _0x21a061) {
          return _0x55c45d / _0x21a061;
        },
      },
      _0x53e531 = new PlaneGeometry(0xa, 0x5),
      _0x4f88e5 = new MeshBasicMaterial({
        color: 0xffffff,
        transparent: !0x0,
        opacity: 0x1,
        depthTest: !!0x0,
        map: new TextureLoader()[_0x225467(0x587, 'Mfne')](_0x5cdf10['NPxrp']),
      }),
      _0x51ac79 = new Mesh(_0x53e531, _0x4f88e5);
    _0x51ac79['position'][_0x225467(0x314, '#D4T')](-0x7, -1.8, 0x1e),
      _0x51ac79[_0x225467(0x7e6, ')f1%')][_0x225467(0x22e, 'rsrW')](5.6, 3.3),
      _0x51ac79[_0x225467(0x446, '#o#W')](
        _0x5cdf10[_0x225467(0x2af, 'Tggn')](-Math['PI'], 0x2)
      ),
      _0x51ac79[_0x225467(0x6f5, 'Di$r')](_0x5cdf10['guRVB'](Math['PI'], 0x2)),
      _0x51ac79[_0x225467(0x1c3, 'Tggn')][_0x225467(0x593, 'xXm&')](
        ENTIRE_SCENE
      );
    const _0x2fb96f = new CSS2DObject(_0x3bf6fb);
    (_0x2fb96f[_0x225467(0x639, '5Q9i')]['z'] = 0x5),
      _0x51ac79[_0x225467(0x84e, 'QCn2')](_0x2fb96f),
      this[_0x225467(0x1e1, 'VaX6')][_0x225467(0x782, 'Tggn')](_0x51ac79);
  }
  [_0x4e6d82(0x77a, '[z)#')](_0x5c5f00) {
    const _0x220d46 = _0x4e6d82,
      _0x394e23 = {
        WuXnM: 'img/Vector3.png',
        heYdM: function (_0x4677e8, _0x495f99) {
          return _0x4677e8 / _0x495f99;
        },
      },
      _0xdd9eca = new PlaneGeometry(0x5, 0xa),
      _0x260523 = new MeshBasicMaterial({
        color: 0xffffff,
        depthTest: !!0x0,
        transparent: !0x0,
        opacity: 0x1,
        map: new TextureLoader()['load'](_0x394e23[_0x220d46(0x437, 'eJ0%')]),
      }),
      _0x47bdf4 = new Mesh(_0xdd9eca, _0x260523);
    _0x47bdf4[_0x220d46(0x30d, 'xXm&')][_0x220d46(0x448, 'GSPA')](
      -0x6,
      -1.8,
      -0x12
    ),
      _0x47bdf4['scale']['set'](2.8, 3.3),
      _0x47bdf4[_0x220d46(0x51a, '#omn')](
        _0x394e23[_0x220d46(0x302, 'cY88')](-Math['PI'], 0x2)
      ),
      this[_0x220d46(0x556, '5Q9i')]['add'](_0x47bdf4);
    const _0x2d91dc = new CSS2DObject(_0x5c5f00);
    (_0x2d91dc['position']['z'] = 0x5),
      _0x47bdf4[_0x220d46(0x60e, 'cY88')](_0x2d91dc);
  }
  [_0x4e6d82(0x55f, 'rsrW')](_0x5923a9) {
    const _0x14b050 = _0x4e6d82,
      _0x35e629 = new PlaneGeometry(0xa, 0x5),
      _0x561731 = new MeshBasicMaterial({
        color: 0xffffff,
        transparent: !0x0,
        opacity: 0x1,
        depthTest: !!0x0,
        map: new TextureLoader()['load'](_0x14b050(0x692, 'Mfne')),
      }),
      _0x5a6726 = new Mesh(_0x35e629, _0x561731);
    _0x5a6726[_0x14b050(0x3fc, 'mxD@')][_0x14b050(0x5a9, '&3*^')](
      12.4,
      -1.8,
      -0x26
    ),
      _0x5a6726[_0x14b050(0x76a, 'cY88')][_0x14b050(0x513, 'Mfne')](3.4, 9.7),
      _0x5a6726[_0x14b050(0x566, '$SOy')](-Math['PI'] / 0x2),
      console[_0x14b050(0x5bb, 'xXm&')](_0x5a6726),
      this['area'][_0x14b050(0x4e7, 'dyOF')](_0x5a6726);
    const _0x607731 = new CSS2DObject(_0x5923a9);
    (_0x607731[_0x14b050(0x2eb, 'uu^e')]['z'] = 0x5),
      _0x5a6726['add'](_0x607731);
  }
  [_0x4e6d82(0x3b0, 'H]q%')](_0x3df229) {
    const _0x8dd4b6 = _0x4e6d82,
      _0x3d6574 = { mGmxO: 'img/Vector7.png' },
      _0x37c607 = new PlaneGeometry(0x7, 0xa),
      _0x39db6d = new MeshBasicMaterial({
        color: 0xff0000,
        transparent: !0x0,
        opacity: 0x1,
        depthTest: !!0x0,
        map: new TextureLoader()['load'](_0x3d6574['mGmxO']),
      }),
      _0x25746b = new Mesh(_0x37c607, _0x39db6d);
    _0x25746b['position']['set'](1.004, -1.8, -36.629),
      _0x25746b[_0x8dd4b6(0x80f, '&3*^')]['set'](0x1, 1.3),
      _0x25746b[_0x8dd4b6(0x5a1, 'HLRT')](-Math['PI'] / 0x2),
      _0x25746b['rotateZ'](1.52),
      this[_0x8dd4b6(0x4e1, 'uu^e')][_0x8dd4b6(0x86c, '5Q9i')](_0x25746b);
    const _0x297114 = new CSS2DObject(_0x3df229);
    (_0x297114[_0x8dd4b6(0x374, 'isRG')]['z'] = 0x5),
      _0x25746b['add'](_0x297114);
  }
  [_0x4e6d82(0x1bb, 'mxD@')](_0x1ddbf8) {
    const _0x4ba9f1 = _0x4e6d82,
      _0x23cb6c = {
        abnrN: _0x4ba9f1(0x48d, 'rsrW'),
        YWbYh: function (_0x11d409, _0x2c060d) {
          return _0x11d409 === _0x2c060d;
        },
        JJcaa: 'qdGFN',
        pZghw: _0x4ba9f1(0x6f8, 'cxqK'),
        DxnOU: '0|2|1|4|3',
        FBWSM: 'img/Vector33.png',
        COiHk: _0x4ba9f1(0x81c, 'dyOF'),
        ThzvP: 'img/Vector35.png',
        VIHKW: _0x4ba9f1(0x493, 'isRG'),
      };
    if (this[_0x4ba9f1(0x807, 'cxqK')]) {
      if (_0x23cb6c['YWbYh'](_0x23cb6c[_0x4ba9f1(0x460, 'EN%Z')], 'vMlqS'))
        this['tweenAnimate'](
          this[_0x4ba9f1(0x59b, '$SOy')][_0x4ba9f1(0x374, 'isRG')],
          this[_0x4ba9f1(0x340, 'GSPA')][_0x4ba9f1(0x20c, '0tbS')],
          0xbb8
        ),
          this[_0x4ba9f1(0x56b, 'isRG')](
            this['controls'][_0x4ba9f1(0x4c6, 'RIUg')],
            this[_0x4ba9f1(0x85d, 'Tggn')]['target0'],
            0xbb8
          );
      else {
        this[_0x4ba9f1(0x7eb, '#D4T')](this[_0x4ba9f1(0x4b7, 'Mfne')]),
          (this[_0x4ba9f1(0x4a9, 'Di$r')] = null);
        return;
      }
    }
    (this[_0x4ba9f1(0x76c, 'QCn2')] = new Group()),
      this['models']['add'](this['area']);
    if (this[_0x4ba9f1(0x7e1, '0tbS')]) {
      if (_0x23cb6c['pZghw'] === _0x4ba9f1(0x732, 'W@$@')) {
        const _0x430d49 =
          _0x23cb6c[_0x4ba9f1(0x429, 'QCn2')][_0x4ba9f1(0x4b3, 'xXm&')]('|');
        let _0x7dc400 = 0x0;
        while (!![]) {
          switch (_0x430d49[_0x7dc400++]) {
            case '0':
              this[_0x4ba9f1(0x25f, 'rsrW')](_0x1ddbf8[0x0]);
              continue;
            case '1':
              this['makeNorth'](_0x1ddbf8[0x2]);
              continue;
            case '2':
              this['makeWest'](_0x1ddbf8[0x1]);
              continue;
            case '3':
              return;
            case '4':
              this[_0x4ba9f1(0x228, '[z)#')](_0x1ddbf8[0x3]);
              continue;
          }
          break;
        }
      } else {
        this[_0x4ba9f1(0x841, 'EN%Z')](this['labels']);
        if (this['labelInterval']) _0x2ec274(this['labelInterval']);
      }
    }
    const _0x2526cf = [
      {
        scale: new Vector2(11.9, 12.4),
        pos: new Vector3(-43.4, 0x1, 55.3),
        rotation: 0.03,
        img: _0x23cb6c[_0x4ba9f1(0x471, 'W@$@')],
      },
      {
        scale: new Vector2(0xa, 6.8),
        pos: new Vector3(-35.6, 0x1, 43.4),
        rotation: 0.51,
        img: _0x23cb6c[_0x4ba9f1(0x721, 'W@$@')],
      },
      {
        scale: new Vector2(4.5, 3.8),
        pos: new Vector3(-26.035, 0x1, 50.171),
        rotation: 0.045,
        img: _0x23cb6c[_0x4ba9f1(0x278, 'asXm')],
      },
      {
        scale: new Vector2(11.3, 3.4),
        pos: new Vector3(-23.068, 0x1, 46.6),
        rotation: 0.06,
        img: _0x23cb6c[_0x4ba9f1(0x721, 'W@$@')],
      },
      {
        scale: new Vector2(0xe, 0x6),
        pos: new Vector3(-0x16, 0x1, 0x2d),
        rotation: 0.06,
        img: _0x23cb6c['VIHKW'],
      },
      {
        scale: new Vector2(4.3, 0x4),
        pos: new Vector3(-0x17, 0x1, 40.592),
        rotation: 0.1,
        img: _0x4ba9f1(0x1c1, '[z)#'),
      },
    ];
    _0x1ddbf8[_0x4ba9f1(0x783, 'P9le')]((_0x3dbb68, _0x512605) => {
      const _0x21b8db = _0x4ba9f1;
      _0x23cb6c[_0x21b8db(0x3aa, 'Do^C')] !== _0x23cb6c['abnrN']
        ? ((_0x4c7c1b[_0x21b8db(0x294, 'RIUg')][_0x21b8db(0x24a, 'dyOF')] =
            _0x1cf528),
          (_0x4ad1f1['material'][_0x21b8db(0x5be, 'uu^e')] = !0x0))
        : this[_0x21b8db(0x411, 'P9le')](
            _0x3dbb68,
            _0x2526cf[_0x512605][_0x21b8db(0x2d6, 'uu^e')],
            _0x2526cf[_0x512605][_0x21b8db(0x5f3, 'uu^e')],
            _0x2526cf[_0x512605]['pos'],
            _0x2526cf[_0x512605][_0x21b8db(0x64e, 'uu^e')]
          );
    });
  }
  async [_0x4e6d82(0x6ec, 'QCn2')]() {
    const _0x451fda = _0x4e6d82,
      _0x1ba677 = {
        pVWTU: _0x451fda(0x6f3, 'uu^e'),
        mZAgn: 'position',
        QtsIw: 'normal',
        YrHTW: _0x451fda(0x4d0, 'asXm'),
        Ruhjn: 'line',
      },
      _0x1ec92f =
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20amplitude;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20vColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec3\x20color;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20uv.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vColor\x20=\x20color;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20modelViewMatrix\x20*\x20vec4(\x20position,\x201.0\x20);\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
      _0x34b5ec = _0x451fda(0x5e4, 'GSPA');
    for (
      let _0x5578d5 = 0x0;
      _0x5578d5 < roadData[_0x451fda(0x72e, 'Do^C')];
      _0x5578d5++
    ) {
      const _0x5c2497 = roadData[_0x5578d5],
        _0x1860cd = {
          amplitude: { value: 0x5 },
          opacity: { value: 0.6 },
          color: { value: new Color(0xffffff) },
          time: { value: 0x0 },
          random: { value: 0x0 },
          flowTexture: {
            value: new TextureLoader()['load'](_0x1ba677['pVWTU']),
          },
        },
        _0x44568a = new ShaderMaterial({
          uniforms: _0x1860cd,
          vertexShader: _0x1ec92f,
          fragmentShader: _0x34b5ec,
          side: DoubleSide,
          transparent: !![],
          polygonOffset: !0x0,
          polygonOffsetFactor: -0x1,
          polygonOffsetUnits: -0x3,
        }),
        _0x5920b5 = [];
      _0x5c2497[_0x451fda(0x1cf, '5Q9i')]((_0x6c8f96) => {
        _0x5920b5['push'](
          new Vector3(_0x6c8f96[0x0], _0x6c8f96[0x1], _0x6c8f96[0x2])
        );
      });
      const _0x3f13e6 = new PolyLine(0.03, !!0x0, !!0x0),
        _0x26e2ae = _0x3f13e6[_0x451fda(0x3ed, 'Di$r')](_0x5920b5),
        [_0x3b9369, _0x11f204, _0x1578f9, _0x1f7286, _0xaa2d5a] =
          await _0x3f13e6[_0x451fda(0x39c, 'W@$@')](
            _0x26e2ae[0x0],
            _0x26e2ae[0x1]
          ),
        _0xfd7044 = new BufferGeometry();
      _0xfd7044['setAttribute'](
        _0x1ba677[_0x451fda(0x6f6, 'mxD@')],
        new BufferAttribute(_0x3b9369, 0x3)
      ),
        _0xfd7044[_0x451fda(0x2a7, 'ODYW')](
          _0x1ba677[_0x451fda(0x740, 'cJlR')],
          new BufferAttribute(new Float32Array(_0x11f204), 0x3)
        ),
        _0xfd7044[_0x451fda(0x651, 'k@fr')](_0x1578f9),
        _0xfd7044['setAttribute'](
          'uv',
          new BufferAttribute(new Float32Array(_0x1f7286), 0x2)
        ),
        _0xfd7044['setAttribute'](
          _0x1ba677[_0x451fda(0x20d, '%dLx')],
          new BufferAttribute(new Float32Array(_0xaa2d5a), 0x3)
        );
      const _0x4ed029 = new Mesh(_0xfd7044, _0x44568a);
      _0x4ed029[_0x451fda(0x574, 'tA%r')][_0x451fda(0x234, 'HLRT')](
        BLOOM_SCENE
      ),
        (_0x4ed029[_0x451fda(0x709, 'RIUg')] =
          _0x1ba677[_0x451fda(0x784, 'yj(U')]),
        this[_0x451fda(0x25b, 'QCn2')][_0x451fda(0x2e2, '&3*^')](_0x4ed029),
        this[_0x451fda(0x32d, 'cxqK')][_0x451fda(0x79f, '$SOy')](_0x4ed029);
    }
  }
  [_0x4e6d82(0x232, 'mxD@')]() {
    const _0x42ab2d = _0x4e6d82,
      _0x8241ce = {
        yJWml: function (_0x211ae1, _0xe5b04) {
          return _0x211ae1 !== _0xe5b04;
        },
        PIbsY: 'JUODr',
        AxTVd: function (_0x51bb3b, _0x2a634c) {
          return _0x51bb3b / _0x2a634c;
        },
        HsAFg: _0x42ab2d(0x400, '4[ed'),
        rimqq: _0x42ab2d(0x2a0, '#omn'),
      },
      _0x24696a = [
        {
          position: new Vector3(1.7, -2.45, -3.35),
          rotation: new Euler(0x0, 0x0, 0x0, _0x42ab2d(0x7aa, 'Di$r')),
        },
        {
          position: new Vector3(1.7, -2.45, -13.15),
          rotation: new Euler(0x0, 0x0, 0x0, _0x42ab2d(0x1fc, 'H]q%')),
        },
        {
          position: new Vector3(1.7, -2.45, -21.95),
          rotation: new Euler(0x0, 0x0, 0x0, _0x8241ce['HsAFg']),
        },
        {
          position: new Vector3(-3.4, -2.45, 59.142),
          rotation: new Euler(
            0x0,
            0x0,
            0x0,
            _0x8241ce[_0x42ab2d(0x3f3, '*o(O')]
          ),
        },
        {
          position: new Vector3(-16.6, -2.45, 35.985),
          rotation: new Euler(
            0x0,
            0x0,
            0x0,
            _0x8241ce[_0x42ab2d(0x69d, 'HLRT')]
          ),
        },
        {
          position: new Vector3(-16.6, -2.45, 28.043),
          rotation: new Euler(0x0, 0x0, 0x0, _0x42ab2d(0x7f7, 'TraC')),
        },
        {
          position: new Vector3(-16.6, -2.45, 20.358),
          rotation: new Euler(0x0, 0x0, 0x0, _0x8241ce['HsAFg']),
        },
        {
          position: new Vector3(12.7, -2.45, -0x19),
          rotation: new Euler(
            0x0,
            -0.21,
            0x0,
            _0x8241ce[_0x42ab2d(0x679, 'rsrW')]
          ),
        },
        {
          position: new Vector3(-3.4, -2.45, 51.226),
          rotation: new Euler(
            0x0,
            0x0,
            0x0,
            _0x8241ce[_0x42ab2d(0x6c1, 'VaX6')]
          ),
        },
        {
          position: new Vector3(11.7, -2.45, -0x12),
          rotation: new Euler(0x0, -0.21, 0x0, _0x8241ce['HsAFg']),
        },
      ];
    this['gltfLoader']['load'](
      _0x8241ce[_0x42ab2d(0x357, '&3*^')],
      (_0x53116a) => {
        const _0x4dc4c7 = _0x42ab2d,
          _0x1c41cf = {
            spJBb: function (_0x17d9af, _0x37354b) {
              const _0x201a73 = _0x4643;
              return _0x8241ce[_0x201a73(0x3e9, 'eJ0%')](_0x17d9af, _0x37354b);
            },
            aKaSo: _0x8241ce['PIbsY'],
          };
        _0x53116a['scene'][_0x4dc4c7(0x79c, 'xXm&')]((_0x158e72) => {
          const _0x15e2a2 = _0x4dc4c7;
          if (
            _0x1c41cf[_0x15e2a2(0x55c, 'xXm&')](
              'XMjHw',
              _0x1c41cf[_0x15e2a2(0x7b9, 'oJob')]
            )
          ) {
            if (_0x158e72[_0x15e2a2(0x849, 'P9le')])
              _0x158e72[_0x15e2a2(0x833, 'Di$r')][_0x15e2a2(0x3d0, 'EN%Z')](
                BLOOM_SCENE
              );
          } else this[_0x15e2a2(0x5f6, 'Tggn')](this[_0x15e2a2(0x652, 'TraC')]);
        }),
          _0x53116a[_0x4dc4c7(0x2c8, '#o#W')]['scale'][
            _0x4dc4c7(0x241, 'yj(U')
          ](0.3, 0.3, 0.3),
          _0x24696a['forEach']((_0x5db43a) => {
            const _0x37f176 = _0x4dc4c7,
              _0x424621 = _0x53116a['scene']['clone']();
            _0x424621['position']['copy'](_0x5db43a['position']),
              _0x424621[_0x37f176(0x3a2, 'VaX6')][_0x37f176(0x741, 'oJob')](
                _0x5db43a['rotation']
              ),
              this[_0x37f176(0x806, '#omn')]['add'](_0x424621);
          }),
          (this[_0x4dc4c7(0x6bc, 'oJob')] =
            _0x53116a[_0x4dc4c7(0x5cc, 'VZ3m')][_0x4dc4c7(0x63c, '64mJ')]()),
          this[_0x4dc4c7(0x577, 'xXm&')][_0x4dc4c7(0x192, '$SOy')]['set'](
            3.9,
            -2.45,
            5.708
          ),
          this[_0x4dc4c7(0x7c9, 'cxqK')][_0x4dc4c7(0x35c, 'Tggn')](
            _0x8241ce[_0x4dc4c7(0x4e2, 'rsrW')](-Math['PI'], 0x2)
          ),
          this[_0x4dc4c7(0x76d, 'asXm')]['add'](this[_0x4dc4c7(0x2aa, 'EN%Z')]);
      }
    );
  }
  [_0x4e6d82(0x3a6, 'xXm&')](_0x4cfd66) {}
  ['changeWaterColor'](_0x376d44) {
    const _0x3d82e5 = _0x4e6d82;
    this[_0x3d82e5(0x44d, '%dLx')][_0x3d82e5(0x4cd, 'cxqK')]['uniforms'][
      _0x3d82e5(0x360, '#o#W')
    ][_0x3d82e5(0x1f1, 'cY88')] = new Color(_0x376d44);
  }
  [_0x4e6d82(0x2ba, 'Mfne')](_0xdb834a) {
    const _0x29a573 = _0x4e6d82;
    this[_0x29a573(0x45d, '*o(O')][_0x29a573(0x311, 'cJlR')][
      _0x29a573(0x34b, 'xXm&')
    ][_0x29a573(0x5ae, 'RIUg')]['value'] = _0xdb834a;
  }
  ['changeScene']() {
    const _0x3cbf75 = _0x4e6d82,
      _0x596ca6 = {
        LkOFA: function (_0x2d0d03, _0x48183e) {
          return _0x2d0d03 !== _0x48183e;
        },
        BlKXC: _0x3cbf75(0x395, 'Tggn'),
        gjPjW: function (_0x34de4c, _0x45eb4e) {
          return _0x34de4c !== _0x45eb4e;
        },
        rokvW: 'wDveC',
      };
    (this[_0x3cbf75(0x185, 'Di$r')] = !this['isShiJiuGang']),
      (this[_0x3cbf75(0x1e9, '[z)#')] = null),
      this[_0x3cbf75(0x60f, 'isRG')](this[_0x3cbf75(0x390, 'HLRT')]);
    this[_0x3cbf75(0x867, 'eJ0%')] &&
      (this['disposeGroup'](this[_0x3cbf75(0x488, '@wQ)')]),
      (this[_0x3cbf75(0x285, 'ODYW')] = null));
    if (!this[_0x3cbf75(0x3b7, 'RIUg')]) {
      if (
        _0x596ca6['LkOFA'](
          _0x3cbf75(0x6a4, 'TraC'),
          _0x596ca6[_0x3cbf75(0x354, 'Tggn')]
        )
      )
        return new _0x45d29b((_0x475eb5) => {
          const _0x37024a = _0x3cbf75,
            _0x57776f = new _0x3d08be();
          _0x4acff1[_0x37024a(0x3f8, 'yj(U')](_0x57776f);
          const _0x49f123 = new _0x53f83e()[_0x37024a(0x741, 'oJob')](
            _0x57776f
          );
          (_0x49f123['y'] += 0x3),
            (_0x49f123['z'] += 0x5),
            this['tweenAnimate'](
              this[_0x37024a(0x7bf, '*o(O')][_0x37024a(0x714, 'oJob')],
              _0x49f123,
              0xbb8
            ),
            this[_0x37024a(0x5cd, 'TraC')](
              this['controls'][_0x37024a(0x5b0, 'QCn2')],
              _0x57776f,
              0xbb8,
              (_0x220c14) => {
                if (_0x220c14) _0x475eb5();
              }
            );
        });
      else {
        const _0x16c472 = '3|1|5|4|0|2'['split']('|');
        let _0x2baa30 = 0x0;
        while (!![]) {
          switch (_0x16c472[_0x2baa30++]) {
            case '0':
              this[_0x3cbf75(0x63a, 'cJlR')][_0x3cbf75(0x546, 'mxD@')] =
                new Vector3()[_0x3cbf75(0x598, '0tbS')](
                  this[_0x3cbf75(0x4ad, 'VaX6')]['target']
                );
              continue;
            case '1':
              this[_0x3cbf75(0x710, 'cxqK')]['target']['set'](
                -54.01,
                -6.7,
                15.85
              );
              continue;
            case '2':
              this['loadLanShanGang']();
              continue;
            case '3':
              this[_0x3cbf75(0x385, 'cY88')][_0x3cbf75(0x30d, 'xXm&')]['set'](
                -32.91,
                135.76,
                157.6
              );
              continue;
            case '4':
              this['camera'][_0x3cbf75(0x3d8, 'VZ3m')] = new Vector3()[
                _0x3cbf75(0x516, 'VZ3m')
              ](this['camera'][_0x3cbf75(0x7cc, 'W@$@')]);
              continue;
            case '5':
              this[_0x3cbf75(0x366, 'D^]j')][_0x3cbf75(0x6c6, 'xXm&')]();
              continue;
          }
          break;
        }
      }
    } else
      _0x596ca6[_0x3cbf75(0x7de, 'k@fr')](
        _0x596ca6[_0x3cbf75(0x451, 'Do^C')],
        _0x3cbf75(0x42b, 'Mfne')
      )
        ? (this[_0x3cbf75(0x840, '%dLx')][_0x3cbf75(0x714, 'oJob')][
            _0x3cbf75(0x402, '#o#W')
          ](0x52, 0x78, 0x6c),
          this['controls'][_0x3cbf75(0x3e6, 'oJob')][_0x3cbf75(0x7b5, 'dyOF')](
            -0x3,
            -0x9,
            -0x8
          ),
          this[_0x3cbf75(0x2d2, '%dLx')][_0x3cbf75(0x318, 'H]q%')](),
          (this[_0x3cbf75(0x4ac, '0tbS')][_0x3cbf75(0x3cb, 'dyOF')] =
            new Vector3()['copy'](
              this[_0x3cbf75(0x329, 'tA%r')][_0x3cbf75(0x6b7, 'Mfne')]
            )),
          (this[_0x3cbf75(0x54d, 'uu^e')][_0x3cbf75(0x6b1, '5Q9i')] =
            new Vector3()['copy'](
              this[_0x3cbf75(0x611, '[z)#')][_0x3cbf75(0x74f, 'mxD@')]
            )),
          this[_0x3cbf75(0x69c, '#omn')]())
        : (this[_0x3cbf75(0x6b5, 'W@$@')][_0x3cbf75(0x41d, 'HLRT')] =
            new _0x4ec28e(_0x1a76c5));
  }
  [_0x4e6d82(0x842, '4[ed')](_0xc6eae7, _0x5df5c5, _0x488bcb) {
    const _0x1d68e5 = _0x4e6d82,
      _0x4ca189 = {
        dcctt: _0x1d68e5(0x2c2, 'k@fr'),
        etlbp: function (_0x241bab, _0x1b54c1) {
          return _0x241bab !== _0x1b54c1;
        },
        RFEXI: _0x1d68e5(0x38c, '64mJ'),
        psIzy: function (_0x30aedd, _0x3123e0) {
          return _0x30aedd(_0x3123e0);
        },
        xRfkf: function (_0x2a43e2, _0x56ddb5) {
          return _0x2a43e2 === _0x56ddb5;
        },
        fIGeF: _0x1d68e5(0x72f, 'W@$@'),
        WAlOM: _0x1d68e5(0x401, 'cxqK'),
        tqNmH: _0x1d68e5(0x2a6, 'TraC'),
        jGgYT: _0x1d68e5(0x65e, 'HLRT'),
        mEbgv: 'yvCNp',
        DsSmd: 'click',
        uewhb: _0x1d68e5(0x788, 'Di$r'),
      };
    _0xc6eae7['forEach']((_0x647d84, _0x17b0e6) => {
      const _0x29c54c = _0x1d68e5,
        _0x383d31 = {
          ALKnV: function (_0x406b4a, _0x17054c) {
            return _0x406b4a == _0x17054c;
          },
          Uwnep: function (_0x256522, _0x219da8) {
            return _0x4ca189['xRfkf'](_0x256522, _0x219da8);
          },
          MxHEv: _0x4ca189[_0x29c54c(0x4cf, 'zIHi')],
          nAOTk: function (_0x2a0ef0, _0x4ca877) {
            return _0x4ca189['xRfkf'](_0x2a0ef0, _0x4ca877);
          },
          HzQHj: function (_0x3f4ca3, _0x4cd8c6) {
            const _0x4a2cc1 = _0x29c54c;
            return _0x4ca189[_0x4a2cc1(0x3c4, 'cY88')](_0x3f4ca3, _0x4cd8c6);
          },
        },
        _0x49ebc9 = document[_0x29c54c(0x40d, 'zIHi')](
          _0x4ca189[_0x29c54c(0x3d6, 'RIUg')]
        );
      _0x49ebc9['setAttribute']('id', _0x647d84['id']);
      const _0x1c4370 = document[_0x29c54c(0x2ec, 'VaX6')](
        _0x4ca189[_0x29c54c(0x1d3, 'isRG')]
      );
      _0x49ebc9['appendChild'](_0x1c4370),
        _0x1c4370[_0x29c54c(0x5c5, 'pr@C')](
          _0x4ca189[_0x29c54c(0x1a3, 'cJlR')],
          _0x29c54c(0x2d4, 'd@fE')
        );
      const _0x46b213 = document[_0x29c54c(0x37e, 'asXm')](
          _0x29c54c(0x20b, 'VZ3m')
        ),
        _0x3a638e =
          _0x647d84[_0x29c54c(0x7d1, '#D4T')][_0x29c54c(0x7a1, 'D^]j')];
      if (_0x5df5c5)
        _0x46b213[_0x29c54c(0x33a, 'Tggn')](
          _0x4ca189[_0x29c54c(0x393, 'VaX6')],
          _0x29c54c(0x4f9, 'rsrW') +
            _0x5df5c5 +
            _0x29c54c(0x3ef, 'H]q%') +
            _0x5df5c5 +
            _0x29c54c(0x76f, 'H]q%') +
            _0x647d84[_0x29c54c(0x225, '[z)#')] +
            _0x29c54c(0x223, 'dyOF')
        );
      else {
        if (_0x4ca189['jGgYT'] !== _0x4ca189['mEbgv'])
          _0x46b213[_0x29c54c(0x5c5, 'pr@C')](
            _0x4ca189[_0x29c54c(0x579, 'k@fr')],
            _0x29c54c(0x7ec, 'P9le') +
              _0x647d84[_0x29c54c(0x189, 'cY88')] +
              _0x29c54c(0x576, '#omn')
          );
        else {
          if (!_0x930401[_0x29c54c(0x641, 'oJob')]) return;
          _0x383d31[_0x29c54c(0x1e7, '$SOy')](_0x7f7f0a['name'], '网格170') &&
            ((_0x15be4d[_0x29c54c(0x22c, 'oJob')]['roughness'] = _0xe9549c),
            (_0x3cf627['material'][_0x29c54c(0x57a, 'VaX6')] = !0x0));
        }
      }
      this['labelImgs'][_0x29c54c(0x3b6, '*o(O')](_0x46b213),
        _0x1c4370[_0x29c54c(0x55b, '#D4T')](_0x46b213),
        (_0x488bcb[_0x17b0e6]['innerHTML'] = ''),
        _0x1c4370['append'](_0x488bcb[_0x17b0e6]);
      let _0x214312 = 0x1,
        _0x215d92 = null;
      _0x49ebc9[_0x29c54c(0x57f, 'Mfne')](_0x29c54c(0x3f1, 'P9le'), () => {
        const _0x6f821f = _0x29c54c;
        _0x488bcb[_0x17b0e6][_0x6f821f(0x26a, 'tA%r')] = _0x647d84['name'];
      }),
        _0x49ebc9[_0x29c54c(0x403, 'tA%r')](_0x29c54c(0x5c8, '*o(O'), () => {
          const _0x485a8b = _0x29c54c;
          _0x488bcb[_0x17b0e6][_0x485a8b(0x4fd, 'xXm&')] = '';
        }),
        _0x49ebc9[_0x29c54c(0x1f2, '*o(O')](_0x4ca189['DsSmd'], () => {
          const _0x5e3ce8 = _0x29c54c,
            _0x4d89df = {
              JtiQE: '3|1|2|0|5|4',
              EuXkA: _0x4ca189[_0x5e3ce8(0x6c5, 'cY88')],
            };
          if (
            _0x4ca189[_0x5e3ce8(0x330, 'dyOF')](
              _0x4ca189[_0x5e3ce8(0x731, 'QCn2')],
              _0x5e3ce8(0x359, 'cY88')
            )
          )
            _0x215d92 &&
              (_0x4ca189[_0x5e3ce8(0x626, 'uu^e')](clearTimeout, _0x215d92),
              _0x214312++,
              (_0x215d92 = null)),
              (_0x215d92 = setTimeout(() => {
                const _0x2bfed4 = _0x5e3ce8;
                if (_0x383d31['Uwnep'](_0x214312, 0x1))
                  this[_0x2bfed4(0x54b, '#omn')][_0x2bfed4(0x787, 'fFl%')](
                    _0x383d31['MxHEv'],
                    _0x647d84
                  );
                else {
                  if (_0x383d31['nAOTk'](_0x214312, 0x2))
                    this[_0x2bfed4(0x1ee, 'VaX6')][_0x2bfed4(0x18a, 'oJob')](
                      _0x2bfed4(0x19f, 'QCn2'),
                      _0x647d84
                    );
                }
                (_0x214312 = 0x1),
                  _0x383d31['HzQHj'](clearTimeout, _0x215d92),
                  (_0x215d92 = null);
              }, 0xc8));
          else {
            const _0x1c8e21 =
              _0x4d89df[_0x5e3ce8(0x848, 'Tggn')][_0x5e3ce8(0x3f9, 'Tggn')](
                '|'
              );
            let _0x23972b = 0x0;
            while (!![]) {
              switch (_0x1c8e21[_0x23972b++]) {
                case '0':
                  _0x404209[_0x5e3ce8(0x815, 'pr@C')][
                    _0x5e3ce8(0x337, 'eJ0%')
                  ] = 0.58;
                  continue;
                case '1':
                  _0x5ea0be['material'][_0x5e3ce8(0x649, 'TraC')] =
                    new _0x55cd25(_0x4d89df[_0x5e3ce8(0x3c7, '%dLx')]);
                  continue;
                case '2':
                  this[_0x5e3ce8(0x5d8, 'W@$@')]['push'](
                    _0x35582c[_0x5e3ce8(0x188, 'VaX6')]
                  );
                  continue;
                case '3':
                  _0x2b43e7[_0x5e3ce8(0x36d, 'HLRT')]['emissive'] =
                    new _0xea0fe4(_0x5e3ce8(0x27a, 'dyOF'));
                  continue;
                case '4':
                  _0x815c18['material']['needsUpdate'] = !0x0;
                  continue;
                case '5':
                  _0x969efe['material'][_0x5e3ce8(0x40c, 'Di$r')] = 0.23;
                  continue;
              }
              break;
            }
          }
        });
      const _0x47bb64 = new CSS2DObject(_0x49ebc9);
      (_0x47bb64[_0x29c54c(0x7ad, '&3*^')] =
        _0x4ca189[_0x29c54c(0x6b2, 'H]q%')]),
        (_0x47bb64[_0x29c54c(0x3b8, 'cJlR')] = _0x647d84['id']),
        _0x47bb64[_0x29c54c(0x192, '$SOy')]['set'](
          _0x647d84[_0x29c54c(0x39f, '@wQ)')]['x'],
          _0x647d84[_0x29c54c(0x811, 'eJ0%')]['y'],
          _0x647d84[_0x29c54c(0x2eb, 'uu^e')]['z']
        ),
        this['labels'][_0x29c54c(0x773, 'VaX6')](_0x47bb64);
    }),
      this[_0x1d68e5(0x829, 'oJob')]();
  }
  [_0x4e6d82(0x457, 'cJlR')]() {
    const _0x2d63dd = _0x4e6d82,
      _0x1a6ac1 = {
        BVWNR: function (_0x8cd6c9, _0x2e7dc7) {
          return _0x8cd6c9 === _0x2e7dc7;
        },
        gqsxt: _0x2d63dd(0x6d6, 'Di$r'),
        jhLTd: function (_0x552b98, _0x4c97ba) {
          return _0x552b98 !== _0x4c97ba;
        },
        ImCnF: 'tfywf',
        FHRQq: function (_0x2377c1, _0x814683, _0x4ae4ef) {
          return _0x2377c1(_0x814683, _0x4ae4ef);
        },
      };
    this[_0x2d63dd(0x1de, 'cY88')] = _0x1a6ac1[_0x2d63dd(0x203, '#omn')](
      setInterval,
      () => {
        const _0x19ab87 = _0x2d63dd,
          _0x3064c4 = { rwvyx: _0x19ab87(0x308, 'uu^e') };
        _0x1a6ac1[_0x19ab87(0x33b, '0tbS')](
          _0x1a6ac1[_0x19ab87(0x445, 'isRG')],
          _0x1a6ac1['ImCnF']
        )
          ? ((_0x56a959['material']['metalness'] = _0x14e1d9),
            (_0x2f1c8e[_0x19ab87(0x630, '&3*^')][_0x19ab87(0x50c, 'W@$@')] =
              !0x0))
          : this[_0x19ab87(0x421, ')f1%')]['forEach']((_0xbcf088) => {
              const _0xb61d5e = _0x19ab87;
              if (
                _0x1a6ac1['BVWNR'](_0x1a6ac1[_0xb61d5e(0x707, 'rsrW')], 'oxDko')
              )
                (_0xbcf088[_0xb61d5e(0x3a8, 'mxD@')][_0xb61d5e(0x730, '[z)#')] =
                  _0xb61d5e(0x7a5, 'asXm')),
                  setTimeout(() => {
                    const _0x8f3667 = _0xb61d5e;
                    _0xbcf088['style'][_0x8f3667(0x253, 'fFl%')] = _0x8f3667(
                      0x77b,
                      '$SOy'
                    );
                  }, 0x708);
              else {
                const _0x2d4990 = '0|5|3|1|2|4'[_0xb61d5e(0x62e, 'Mfne')]('|');
                let _0x586b18 = 0x0;
                while (!![]) {
                  switch (_0x2d4990[_0x586b18++]) {
                    case '0':
                      _0x17e1cb['material'][_0xb61d5e(0x7d6, 'eJ0%')] =
                        new _0x5e609d(_0x3064c4[_0xb61d5e(0x795, 'cJlR')]);
                      continue;
                    case '1':
                      _0x3cf4c0['material']['metalness'] = 0.5;
                      continue;
                    case '2':
                      _0x26baa3[_0xb61d5e(0x6ad, 'k@fr')][
                        _0xb61d5e(0x5db, '&3*^')
                      ] = !0x0;
                      continue;
                    case '3':
                      _0x33c539['material'][_0xb61d5e(0x3da, 'fFl%')] = 0.5;
                      continue;
                    case '4':
                      _0x561be2[_0xb61d5e(0x459, 'pr@C')]['enable'](_0x2a2d34);
                      continue;
                    case '5':
                      _0xaa486a['material']['color'] = new _0x59122b(
                        _0xb61d5e(0x1ac, 'd@fE')
                      );
                      continue;
                  }
                  break;
                }
              }
            });
      },
      0x3e8
    );
  }
  [_0x4e6d82(0x84a, '[z)#')]() {
    const _0x7e2cb2 = _0x4e6d82;
    this['disposeGroup'](this[_0x7e2cb2(0x1cc, '@wQ)')]);
    if (this[_0x7e2cb2(0x7e8, '@wQ)')])
      clearInterval(this[_0x7e2cb2(0x21d, 'ODYW')]);
  }
  [_0x4e6d82(0x6e3, 'TraC')]() {
    const _0x1b7c12 = _0x4e6d82,
      _0x1c38cf = {
        evTPg: function (_0x2e7246, _0x33f074) {
          return _0x2e7246 !== _0x33f074;
        },
        pmDuf: _0x1b7c12(0x551, 'Do^C'),
        EMFlf: function (_0x142161, _0x53fa3c) {
          return _0x142161 == _0x53fa3c;
        },
        SVAFg: function (_0x577b13, _0x195bad) {
          return _0x577b13 > _0x195bad;
        },
      };
    this[_0x1b7c12(0x2e1, '0tbS')][_0x1b7c12(0x198, '[z)#')][
      _0x1b7c12(0x46a, 'eJ0%')
    ]((_0x4cbada) => {
      if (!_0x4cbada['visible']) _0x4cbada['visible'] = !0x0;
    });
    let _0x56285a = 0x0;
    while (
      _0x56285a <
      this[_0x1b7c12(0x549, '#D4T')]['children'][_0x1b7c12(0x73c, 'TraC')]
    ) {
      this[_0x1b7c12(0x525, 'Di$r')]['children'][_0x1b7c12(0x348, 'tA%r')](
        (_0x2f415a, _0x510533) => {
          const _0x59d77d = _0x1b7c12;
          if (
            _0x1c38cf['evTPg'](
              _0x1c38cf[_0x59d77d(0x48c, '&3*^')],
              _0x1c38cf['pmDuf']
            )
          )
            this[_0x59d77d(0x5eb, 'uu^e')](
              _0x45c00b,
              _0x55d7cd[_0x289a0d][_0x59d77d(0x1fb, 'Di$r')],
              _0x71b970[_0x290d5b][_0x59d77d(0x7e6, ')f1%')],
              _0x4eb5fb[_0x5a4d95][_0x59d77d(0x70a, 'GSPA')],
              _0x40baa8[_0x4f43e9]['rotation']
            );
          else {
            if (
              !_0x2f415a['visible'] ||
              _0x1c38cf['EMFlf'](_0x510533, _0x56285a) ||
              !this[_0x59d77d(0x6a2, 'tA%r')]['children'][_0x56285a][
                _0x59d77d(0x259, 'ODYW')
              ]
            )
              return;
            const _0x4f5630 = new Vector3()
              ['copy'](_0x2f415a[_0x59d77d(0x81b, '0tbS')])
              [_0x59d77d(0x71b, '4[ed')](
                new Vector3()[_0x59d77d(0x1be, 'Mfne')](
                  this[_0x59d77d(0x34d, '#omn')]['children'][_0x56285a][
                    _0x59d77d(0x699, 'cJlR')
                  ]
                )
              )
              ['divideScalar'](0x2);
            if (
              _0x1c38cf['SVAFg'](
                _0x4f5630[_0x59d77d(0x1ab, '4[ed')](
                  this[_0x59d77d(0x312, 'Di$r')]['position']
                ),
                0x3c
              )
            )
              _0x2f415a[_0x59d77d(0x204, 'cxqK')] = !!0x0;
          }
        }
      ),
        _0x56285a++;
    }
  }
  [_0x4e6d82(0x4c8, 'EN%Z')](_0x2f12d2) {
    const _0x69d6d8 = _0x4e6d82;
    this['ambientlLight'][_0x69d6d8(0x6cd, 'rsrW')] = new Color(_0x2f12d2);
  }
  [_0x4e6d82(0x3d9, 'D^]j')](_0x2f5851) {
    const _0x5b76f3 = _0x4e6d82;
    this[_0x5b76f3(0x6d3, '#D4T')][_0x5b76f3(0x2ce, 'Tggn')] = new Color(
      _0x2f5851
    );
  }
  [_0x4e6d82(0x247, 'ODYW')](_0x3bcc59) {
    const _0x514840 = _0x4e6d82;
    this[_0x514840(0x558, '#omn')]['intensity'] = _0x3bcc59;
  }
  [_0x4e6d82(0x648, 'VaX6')](_0x27966f) {
    const _0x501761 = _0x4e6d82;
    this['directionalLight'][_0x501761(0x1e2, 'yj(U')] = _0x27966f;
  }
  ['changeModelColor'](_0x1da9c) {
    const _0x511f0d = _0x4e6d82,
      _0x263882 = {
        SuuPq: function (_0x19be4b, _0x64fb5d) {
          return _0x19be4b !== _0x64fb5d;
        },
        POVeJ: _0x511f0d(0x2cc, 'Tggn'),
      };
    this[_0x511f0d(0x64c, '$SOy')][_0x511f0d(0x5ff, 'TraC')]((_0x13146f) => {
      const _0x2676f4 = _0x511f0d,
        _0x242d31 = { Lzpjq: _0x2676f4(0x625, 'fFl%') };
      if (!_0x13146f['isMesh']) return;
      if (_0x13146f[_0x2676f4(0x4d1, 'TraC')] == '网格') {
        if (
          _0x263882['SuuPq'](
            _0x2676f4(0x646, '*o(O'),
            _0x263882[_0x2676f4(0x5fa, 'Do^C')]
          )
        ) {
          if (!_0x31c84d[_0x2676f4(0x554, '5Q9i')]) return;
          _0x4fd834['name'] == _0x242d31[_0x2676f4(0x3c0, 'EN%Z')] &&
            ((_0x3df9e7[_0x2676f4(0x294, 'RIUg')][_0x2676f4(0x71e, 'rsrW')] =
              new _0x63c58(_0x3921ef)),
            (_0x28699d[_0x2676f4(0x45b, '#omn')][_0x2676f4(0x608, 'P9le')] =
              !0x0));
        } else
          (_0x13146f['material']['emissive'] = new Color(_0x1da9c)),
            (_0x13146f[_0x2676f4(0x2a1, 'VZ3m')]['needsUpdate'] = !0x0);
      }
    });
  }
  [_0x4e6d82(0x57e, 'cY88')](_0x3a620b) {
    const _0x4dc055 = _0x4e6d82,
      _0x4a4249 = {
        xzhqF: function (_0x318adf, _0x3983e9) {
          return _0x318adf == _0x3983e9;
        },
      };
    this[_0x4dc055(0x2ed, 'Di$r')][_0x4dc055(0x28f, 'Mfne')]((_0x41a32a) => {
      const _0x50775c = _0x4dc055;
      if (!_0x41a32a[_0x50775c(0x186, 'tA%r')]) return;
      _0x4a4249['xzhqF'](_0x41a32a[_0x50775c(0x3dd, '#omn')], '网格') &&
        ((_0x41a32a[_0x50775c(0x4cd, 'cxqK')][_0x50775c(0x21f, 'oJob')] =
          new Color(_0x3a620b)),
        (_0x41a32a['material'][_0x50775c(0x568, '@wQ)')] = !0x0));
    });
  }
  [_0x4e6d82(0x847, 'pr@C')](_0x188833) {
    const _0x529534 = _0x4e6d82;
    this[_0x529534(0x499, 'isRG')][_0x529534(0x770, 'd@fE')]((_0x5817cc) => {
      const _0x302908 = _0x529534;
      if (!_0x5817cc[_0x302908(0x768, 'H]q%')]) return;
      _0x5817cc['name'] == '网格' &&
        ((_0x5817cc[_0x302908(0x3ec, 'zIHi')][_0x302908(0x45e, 'Do^C')] =
          _0x188833),
        (_0x5817cc[_0x302908(0x2f9, 'Mfne')][_0x302908(0x48a, 'oJob')] = !0x0));
    });
  }
  [_0x4e6d82(0x4f7, '#omn')](_0x5df6ed) {
    const _0x5f0418 = _0x4e6d82,
      _0x4b743c = {
        VNdaY: 'FWhMR',
        KVyhb: function (_0x21e759, _0x4d5058) {
          return _0x21e759 === _0x4d5058;
        },
        MNMIh: _0x5f0418(0x3c8, 'yj(U'),
      };
    this['models'][_0x5f0418(0x3b4, 'pr@C')]((_0x2e9b1a) => {
      const _0x5bba19 = _0x5f0418;
      if (
        _0x4b743c[_0x5bba19(0x4ab, 'TraC')] !==
        _0x4b743c[_0x5bba19(0x4ce, 'GSPA')]
      )
        this['menjiFater'][_0x5bba19(0x790, 'Di$r')]((_0x5c950e) => {
          const _0x380fee = _0x5bba19;
          if (!_0x5c950e[_0x380fee(0x344, 'GSPA')]) return;
          _0x5c950e[_0x380fee(0x4cd, 'cxqK')][_0x380fee(0x24c, 'uu^e')] =
            new _0x1409d8(_0x2c25a9);
        });
      else {
        if (!_0x2e9b1a[_0x5bba19(0x30c, 'VZ3m')]) return;
        _0x2e9b1a['name'] == '网格' &&
          (_0x4b743c[_0x5bba19(0x722, '&3*^')](
            _0x4b743c[_0x5bba19(0x7f1, 'Do^C')],
            _0x4b743c['MNMIh']
          )
            ? ((_0x2e9b1a[_0x5bba19(0x7d8, 'asXm')]['metalness'] = _0x5df6ed),
              (_0x2e9b1a['material'][_0x5bba19(0x47b, '4[ed')] = !0x0))
            : (_0x1a8ea0['style'][_0x5bba19(0x7a2, '64mJ')] =
                'scale(1.3,1.3)'));
      }
    });
  }
  ['changejzxEmissive'](_0x3460b6) {
    const _0x1a0cfa = _0x4e6d82,
      _0x330343 = {
        iELnO: function (_0x5652c8, _0x549fa0) {
          return _0x5652c8 !== _0x549fa0;
        },
        vkLit: _0x1a0cfa(0x73b, 'Di$r'),
        fNZGm: _0x1a0cfa(0x520, 'mxD@'),
        LsOuk: _0x1a0cfa(0x53c, 'cJlR'),
        aftTV: function (_0xdbccca, _0x540bc9) {
          return _0xdbccca === _0x540bc9;
        },
        BVMke: 'MKKUv',
      };
    this[_0x1a0cfa(0x280, 'H]q%')]['traverse']((_0x1ea919) => {
      const _0x5a6c89 = _0x1a0cfa;
      if (
        _0x330343['iELnO'](
          _0x330343['vkLit'],
          _0x330343[_0x5a6c89(0x47c, 'fFl%')]
        )
      ) {
        if (!_0x1ea919[_0x5a6c89(0x2fd, 'rsrW')]) return;
        _0x1ea919[_0x5a6c89(0x321, 'cJlR')] ==
          _0x330343[_0x5a6c89(0x1d7, '$SOy')] &&
          (_0x330343[_0x5a6c89(0x4a5, 'd@fE')](
            _0x5a6c89(0x7e3, 'isRG'),
            _0x330343['BVMke']
          )
            ? (this[_0x5a6c89(0x561, 'P9le')][_0x5a6c89(0x7dc, 'Do^C')][
                'uniforms'
              ]['waterColor']['value'] = new _0x3d220f(_0x172a6b))
            : ((_0x1ea919['material']['emissive'] = new Color(_0x3460b6)),
              (_0x1ea919[_0x5a6c89(0x282, 'mxD@')][_0x5a6c89(0x4be, '#o#W')] =
                !0x0)));
      } else {
        const _0xc1c86f = new _0x34c5f3[_0x5a6c89(0x2b0, 'isRG')](_0x248104)[
          'to'
        ](
          { x: _0x4ed881['x'], y: _0x37c668['y'], z: _0x36c21e['z'] },
          _0x4a3379
        );
        _0xc1c86f[_0x5a6c89(0x52d, 'EN%Z')](() => {
          this['controls']['update']();
        }),
          _0xc1c86f[_0x5a6c89(0x54f, 'oJob')](
            _0x5de39c[_0x5a6c89(0x506, '@wQ)')][_0x5a6c89(0x40a, 'GSPA')][
              'InOut'
            ]
          ),
          _0xc1c86f[_0x5a6c89(0x35d, 'GSPA')](),
          _0xc1c86f[_0x5a6c89(0x846, '4[ed')](() => {
            if (_0x42f043) _0x599d6a(!0x0);
          });
      }
    });
  }
  [_0x4e6d82(0x485, '*o(O')](_0x2e8025) {
    const _0x25b78b = _0x4e6d82,
      _0x5012ff = {
        jIJdb: _0x25b78b(0x6ed, '&3*^'),
        Vkdoz: _0x25b78b(0x26e, 'H]q%'),
        qBFhP: function (_0x3b1a22, _0x1392c1) {
          return _0x3b1a22 !== _0x1392c1;
        },
        oKaII: _0x25b78b(0x7a0, '64mJ'),
        upIJS: _0x25b78b(0x656, 'P9le'),
      };
    this[_0x25b78b(0x499, 'isRG')][_0x25b78b(0x287, 'P9le')]((_0x3f071d) => {
      const _0x5b1ed8 = _0x25b78b;
      if (!_0x3f071d[_0x5b1ed8(0x70b, 'Do^C')]) return;
      if (
        _0x3f071d[_0x5b1ed8(0x222, 'eJ0%')] ==
        _0x5012ff[_0x5b1ed8(0x71a, 'H]q%')]
      ) {
        if (
          _0x5012ff['qBFhP'](
            _0x5012ff['oKaII'],
            _0x5012ff[_0x5b1ed8(0x4a0, '#o#W')]
          )
        )
          (_0x3f071d['material']['color'] = new Color(_0x2e8025)),
            (_0x3f071d[_0x5b1ed8(0x45b, '#omn')][_0x5b1ed8(0x4f5, 'd@fE')] =
              !0x0);
        else {
          if (
            this[_0x5b1ed8(0x5e3, 'Di$r')]['children'][
              _0x5b1ed8(0x181, '5Q9i')
            ] < 0x1
          )
            return;
          const _0x24b56d =
            this[_0x5b1ed8(0x1b6, 'ODYW')][_0x5b1ed8(0x767, '@wQ)')]['pop']();
          this[_0x5b1ed8(0x586, 'Tggn')][_0x5b1ed8(0x61d, 'xXm&')](_0x24b56d);
          const _0x58a6b2 = _0x24b56d[_0x5b1ed8(0x856, 'D^]j')];
          _0x58a6b2[_0x5b1ed8(0x585, 'ODYW')]['removeChild'](_0x58a6b2),
            this[_0x5b1ed8(0x5c0, '*o(O')]--,
            this[_0x5b1ed8(0x671, 'HLRT')][_0x5b1ed8(0x1b8, 'isRG')](
              _0x5012ff['jIJdb'],
              this[_0x5b1ed8(0x210, 'dyOF')]
            );
        }
      }
    });
  }
  [_0x4e6d82(0x7c4, 'dyOF')](_0x36d04a) {
    const _0x202901 = _0x4e6d82,
      _0x4edc3d = {
        ZsGLV: _0x202901(0x350, '#omn'),
        IDFgT: _0x202901(0x3b2, '5Q9i'),
      };
    this['models'][_0x202901(0x334, '#omn')]((_0x4fa034) => {
      const _0x2f410b = _0x202901;
      if (_0x4edc3d[_0x2f410b(0x780, 'EN%Z')] === _0x2f410b(0x1c7, 'eJ0%'))
        _0xbb871c[_0x310bd2[_0x2f410b(0x474, '#omn')]] &&
          ((_0x26dbbd[_0x2f410b(0x528, 'eJ0%')] = _0x304124[_0x7ce6d2['uuid']]),
          delete _0x261a48[_0x22966b[_0x2f410b(0x1b5, 'oJob')]]);
      else {
        if (!_0x4fa034['isMesh']) return;
        _0x4fa034['name'] == _0x4edc3d['IDFgT'] &&
          ((_0x4fa034['material'][_0x2f410b(0x35a, 'isRG')] = _0x36d04a),
          (_0x4fa034[_0x2f410b(0x2ae, 'xXm&')][_0x2f410b(0x42e, '%dLx')] =
            !0x0));
      }
    });
  }
  ['changejzxmetalness'](_0x4600fa) {
    const _0x1eaca9 = _0x4e6d82,
      _0x725da = {
        tddgP: function (_0x1913af, _0x3b73aa) {
          return _0x1913af / _0x3b73aa;
        },
        tLcOl: function (_0x4cf5dd, _0x249f84) {
          return _0x4cf5dd === _0x249f84;
        },
        sNKse: _0x1eaca9(0x1b7, '64mJ'),
        GgPwr: _0x1eaca9(0x242, '64mJ'),
        JeBXW: function (_0x504599, _0x3d7fe7) {
          return _0x504599 == _0x3d7fe7;
        },
        wIQfv: _0x1eaca9(0x617, 'uu^e'),
      };
    this[_0x1eaca9(0x644, 'EN%Z')][_0x1eaca9(0x1cb, 'HLRT')]((_0x1de576) => {
      const _0x83f52b = _0x1eaca9,
        _0x497bb8 = {
          CgnKt: function (_0x10e46e, _0x3b1494) {
            return _0x725da['tddgP'](_0x10e46e, _0x3b1494);
          },
        };
      if (
        _0x725da['tLcOl'](
          _0x725da[_0x83f52b(0x289, 'tA%r')],
          _0x725da[_0x83f52b(0x753, 'D^]j')]
        )
      ) {
        let _0x52de1a = this['scatterCircle'](
          0x10,
          0.1,
          0.5,
          new _0x154959(0x0, 0x1, 0x1),
          0.2
        );
        _0x52de1a['position'][_0x83f52b(0x726, '#omn')](-18.851, 0.5, 13.5),
          _0x52de1a[_0x83f52b(0x514, 'pr@C')](
            _0x497bb8[_0x83f52b(0x7a3, 'Tggn')](-_0x377381['PI'], 0x2)
          ),
          _0x52de1a[_0x83f52b(0x6c0, '*o(O')]['enable'](_0x55eee8),
          this['models']['add'](_0x52de1a);
      } else {
        if (!_0x1de576[_0x83f52b(0x67f, 'cJlR')]) return;
        _0x725da['JeBXW'](
          _0x1de576[_0x83f52b(0x33e, 'D^]j')],
          _0x725da[_0x83f52b(0x584, 'QCn2')]
        ) &&
          ((_0x1de576['material'][_0x83f52b(0x68b, '&3*^')] = _0x4600fa),
          (_0x1de576[_0x83f52b(0x7a4, 'yj(U')][_0x83f52b(0x50c, 'W@$@')] =
            !0x0));
      }
    });
  }
  ['changejzxxEmissive'](_0x4aa068) {
    const _0x5d8911 = _0x4e6d82,
      _0x576011 = {
        sCSdX: function (_0x33cb6e, _0x4e1462) {
          return _0x33cb6e(_0x4e1462);
        },
        eQGvN: function (_0x1a0d9e, _0x4d20b2) {
          return _0x1a0d9e == _0x4d20b2;
        },
        GKkdx: function (_0x1509a6, _0x25c133) {
          return _0x1509a6 !== _0x25c133;
        },
        LEhzz: _0x5d8911(0x6ea, 'P9le'),
      };
    this[_0x5d8911(0x507, 'zIHi')][_0x5d8911(0x3d2, 'mxD@')]((_0x48e5b1) => {
      const _0x52c823 = _0x5d8911;
      if (!_0x48e5b1[_0x52c823(0x5fe, 'Di$r')]) return;
      _0x576011['eQGvN'](_0x48e5b1['name'], '网格170_1') &&
        (_0x576011['GKkdx'](_0x52c823(0x264, 'Di$r'), _0x576011['LEhzz'])
          ? (_0x576011[_0x52c823(0x65c, 'fFl%')](_0x47a2a9, _0x15b826),
            _0x572fb1++,
            (_0x408925 = null))
          : ((_0x48e5b1['material'][_0x52c823(0x50a, 'uu^e')] = new Color(
              _0x4aa068
            )),
            (_0x48e5b1[_0x52c823(0x420, 'H]q%')]['needsUpdate'] = !0x0)));
    });
  }
  [_0x4e6d82(0x69f, '0tbS')](_0x33f0c9) {
    const _0x571f63 = _0x4e6d82,
      _0x192076 = {
        txTRK: function (_0xfb70dc, _0x5b6e40) {
          return _0xfb70dc !== _0x5b6e40;
        },
        iufup: _0x571f63(0x475, 'Di$r'),
        lGaGD: function (_0x341d3a, _0x4cd018) {
          return _0x341d3a === _0x4cd018;
        },
        KWvkA: _0x571f63(0x78f, 'ODYW'),
      };
    this[_0x571f63(0x58f, '[z)#')][_0x571f63(0x5f2, 'cJlR')]((_0x50f632) => {
      const _0x43e5f5 = _0x571f63;
      if (_0x192076[_0x43e5f5(0x3b1, 'tA%r')]('LGhoj', 'LGhoj')) {
        if (_0x1ee2ec[_0x43e5f5(0x7b3, 'QCn2')])
          _0x3f3a91[_0x43e5f5(0x7f5, '#omn')][_0x43e5f5(0x6f4, 'pr@C')](
            _0x5096aa
          );
      } else {
        if (!_0x50f632['isMesh']) return;
        _0x50f632[_0x43e5f5(0x33e, 'D^]j')] == _0x192076['iufup'] &&
          (_0x192076[_0x43e5f5(0x78a, '$SOy')](
            _0x192076[_0x43e5f5(0x21e, 'tA%r')],
            _0x192076['KWvkA']
          )
            ? ((_0x50f632[_0x43e5f5(0x2f7, ')f1%')][_0x43e5f5(0x1a9, '5Q9i')] =
                new Color(_0x33f0c9)),
              (_0x50f632[_0x43e5f5(0x3a5, '4[ed')][_0x43e5f5(0x1d9, 'EN%Z')] =
                !0x0))
            : this['controls'][_0x43e5f5(0x31c, 'W@$@')]());
      }
    });
  }
  [_0x4e6d82(0x70f, 'rsrW')](_0x44cd03) {
    const _0x1189b8 = _0x4e6d82,
      _0xc7b6 = {
        pouOl: function (_0x4344e9, _0x387584) {
          return _0x4344e9 == _0x387584;
        },
      };
    this[_0x1189b8(0x82f, 'GSPA')][_0x1189b8(0x614, 'D^]j')]((_0x41eb79) => {
      const _0x4e8dbd = _0x1189b8;
      if (!_0x41eb79[_0x4e8dbd(0x66f, 'EN%Z')]) return;
      _0xc7b6[_0x4e8dbd(0x2c5, 'RIUg')](_0x41eb79['name'], '网格170_1') &&
        ((_0x41eb79[_0x4e8dbd(0x489, '64mJ')][_0x4e8dbd(0x6e2, 'EN%Z')] =
          _0x44cd03),
        (_0x41eb79[_0x4e8dbd(0x502, '*o(O')][_0x4e8dbd(0x568, '@wQ)')] = !0x0));
    });
  }
  [_0x4e6d82(0x7ef, '*o(O')](_0x588bfa) {
    const _0x581402 = _0x4e6d82,
      _0xe26fac = {
        KEIDx: function (_0x47696e, _0x1bc437) {
          return _0x47696e === _0x1bc437;
        },
        OMMbx: _0x581402(0x510, ')f1%'),
        PECLz: function (_0x56f3fc, _0x2615d8) {
          return _0x56f3fc == _0x2615d8;
        },
        MIVnH: _0x581402(0x5d4, 'd@fE'),
        TcWDX: function (_0x461443, _0x447e3a) {
          return _0x461443 === _0x447e3a;
        },
        bqkOu: _0x581402(0x5e7, '64mJ'),
      };
    this[_0x581402(0x61a, 'rsrW')][_0x581402(0x5f4, '4[ed')]((_0x2261eb) => {
      const _0x22a314 = _0x581402;
      if (
        _0xe26fac[_0x22a314(0x2b4, 'HLRT')](
          _0xe26fac[_0x22a314(0x296, '5Q9i')],
          _0x22a314(0x778, 'Do^C')
        )
      ) {
        if (!_0x2261eb[_0x22a314(0x5cf, 'RIUg')]) return;
        _0xe26fac[_0x22a314(0x1cd, 'P9le')](
          _0x2261eb[_0x22a314(0x518, 'rsrW')],
          _0xe26fac[_0x22a314(0x5e6, '*o(O')]
        ) &&
          (_0xe26fac[_0x22a314(0x1e5, 'cxqK')](
            _0xe26fac['bqkOu'],
            _0xe26fac[_0x22a314(0x7ff, 'VaX6')]
          )
            ? ((_0x2261eb[_0x22a314(0x271, '[z)#')][_0x22a314(0x4da, 'Do^C')] =
                _0x588bfa),
              (_0x2261eb['material'][_0x22a314(0x4d6, '#D4T')] = !0x0))
            : _0x47b28a[_0x22a314(0x1a0, 'tA%r')](
                new _0x3afc67(
                  _0x5d4c2d['position']['x'],
                  _0x4defa4[_0x22a314(0x864, '#D4T')]['y'],
                  _0x3b0065[_0x22a314(0x565, 'ODYW')]['z']
                )
              ));
      } else
        this[_0x22a314(0x19c, 'xXm&')] &&
          this[_0x22a314(0x347, 'ODYW')][_0x22a314(0x5c1, ')f1%')](
            (_0x4b74d5) => {
              const _0x2f3e6d = _0x22a314;
              if (!_0x4b74d5[_0x2f3e6d(0x3bc, 'mxD@')]) return;
              _0x4b74d5[_0x2f3e6d(0x7d8, 'asXm')]['emissive'] = new _0x1eca03(
                _0x1c9dc5
              );
            }
          );
    });
  }
  [_0x4e6d82(0x3bf, 'QCn2')](_0x59eaa8) {
    const _0x2abb2b = _0x4e6d82;
    this[_0x2abb2b(0x2b5, 'asXm')][_0x2abb2b(0x55e, '$SOy')][
      _0x2abb2b(0x49d, 'H]q%')
    ] = new Color(_0x59eaa8);
  }
  ['changeFloorColor'](_0x30b589) {
    const _0xc2698c = _0x4e6d82;
    this['floorMaterial'][_0xc2698c(0x535, 'xXm&')]((_0x2c21e5) => {
      _0x2c21e5['color'] = new Color(_0x30b589);
    });
  }
  ['changeWaterColor'](_0x1cf208) {
    const _0x22dfd1 = _0x4e6d82;
    this[_0x22dfd1(0x306, 'GSPA')]['material']['uniforms'][
      _0x22dfd1(0x1d5, 'cJlR')
    ][_0x22dfd1(0x61b, 'Tggn')] = new Color(_0x1cf208);
  }
  [_0x4e6d82(0x182, 'TraC')](_0x4737a3) {
    const _0x10755b = _0x4e6d82;
    if (this[_0x10755b(0x6fe, '64mJ')])
      this[_0x10755b(0x537, 'cJlR')][_0x10755b(0x270, '%dLx')][
        _0x10755b(0x727, 'tA%r')
      ] = _0x4737a3;
  }
  [_0x4e6d82(0x3a9, ')f1%')](_0x46dab8) {
    const _0xb6b77 = _0x4e6d82;
    if (this['pluniforms'])
      this[_0xb6b77(0x597, 'QCn2')][_0xb6b77(0x5b2, '&3*^')][
        _0xb6b77(0x3e1, '0tbS')
      ] = _0x46dab8;
  }
  [_0x4e6d82(0x64a, 'W@$@')](_0x3a4593) {
    const _0x17cc7c = _0x4e6d82,
      _0x5318e0 = {
        AaeCf: _0x17cc7c(0x213, 'eJ0%'),
        HjoQJ: 'style',
        LsxPb: 'icon',
        foHPg: 'setDevice',
        QBbGC: 'img/icon1.png',
      },
      _0x56d67b = document[_0x17cc7c(0x43a, 'D^]j')]('div'),
      _0x5286cc = document['createElement'](
        _0x5318e0[_0x17cc7c(0x772, '0tbS')]
      );
    _0x56d67b['appendChild'](_0x5286cc),
      _0x5286cc[_0x17cc7c(0x4f2, '#omn')](
        _0x5318e0['HjoQJ'],
        'color:white;height:6px;display:flex;flex-direction:row;position:relative;left:50%;margin-left:-3px;'
      );
    const _0x2829e2 = document[_0x17cc7c(0x7ab, 'HLRT')](
      _0x5318e0[_0x17cc7c(0x363, '@wQ)')]
    );
    _0x2829e2['setAttribute'](
      _0x17cc7c(0x673, 'd@fE'),
      _0x17cc7c(0x6fd, 'RIUg')
    ),
      _0x5286cc['appendChild'](_0x2829e2);
    const _0x38ade3 = document[_0x17cc7c(0x694, 'QCn2')]('div');
    _0x38ade3['setAttribute'](
      _0x5318e0[_0x17cc7c(0x490, 'HLRT')],
      'height:6px;line-height:6px;font-size:4px;margin-left:1.2px;'
    ),
      (_0x38ade3['innerHTML'] =
        this['devicesNames'][this[_0x17cc7c(0x323, '$SOy')]]),
      _0x5286cc[_0x17cc7c(0x27d, 'cY88')](_0x38ade3);
    const _0x3f6ad1 = new CSS2DObject(_0x56d67b);
    (_0x3f6ad1[_0x17cc7c(0x40b, 'Do^C')] = _0x5318e0[_0x17cc7c(0x4d4, 'd@fE')]),
      _0x3f6ad1[_0x17cc7c(0x843, '#o#W')][_0x17cc7c(0x476, 'W@$@')](_0x3a4593),
      this['points']['add'](_0x3f6ad1),
      this[_0x17cc7c(0x747, 'Do^C')]++,
      this[_0x17cc7c(0x810, '@wQ)')][_0x17cc7c(0x5c9, 'D^]j')](
        _0x5318e0['foHPg'],
        {
          name: this[_0x17cc7c(0x57b, 'W@$@')][this[_0x17cc7c(0x316, 'EN%Z')]],
          position: _0x3a4593,
          imgUrl: _0x5318e0[_0x17cc7c(0x58a, '#o#W')],
          id: this[_0x17cc7c(0x4d9, 'dyOF')],
        }
      );
  }
  [_0x4e6d82(0x4ed, 'RIUg')]() {
    const _0xcf23e6 = _0x4e6d82,
      _0x3de929 = { bcJfZ: _0xcf23e6(0x23c, 'yj(U') };
    if (
      this[_0xcf23e6(0x6a0, 'RIUg')][_0xcf23e6(0x66c, '$SOy')]['length'] < 0x1
    )
      return;
    const _0xaafc78 = this[_0xcf23e6(0x65f, 'asXm')]['children']['pop']();
    this[_0xcf23e6(0x4a4, '*o(O')][_0xcf23e6(0x52a, 'dyOF')](_0xaafc78);
    const _0x3b09fc = _0xaafc78['element'];
    _0x3b09fc['parentNode'][_0xcf23e6(0x215, 'ODYW')](_0x3b09fc),
      this[_0xcf23e6(0x74b, 'fFl%')]--,
      this[_0xcf23e6(0x596, 'cY88')][_0xcf23e6(0x62d, 'ODYW')](
        _0x3de929[_0xcf23e6(0x2c0, '[z)#')],
        this['select']
      );
  }
  async [_0x4e6d82(0x202, 'd@fE')](_0x4b3ca0, _0x27d222, _0x58546c) {
    const _0xe0023d = _0x4e6d82,
      _0x1b8480 = {
        KxTqP: function (_0x781f26, _0x1a5680) {
          return _0x781f26 !== _0x1a5680;
        },
        fzrzo: _0xe0023d(0x812, 'P9le'),
        gVLgX: 'position',
        PtaTb: 'color',
      },
      _0x42c44c = [];
    this['isShiJiuGang']
      ? _0x4b3ca0[_0xe0023d(0x78d, '@wQ)')]((_0x491fce) => {
          const _0x3f92c5 = _0xe0023d;
          _0x42c44c[_0x3f92c5(0x64d, 'W@$@')](
            new Vector3(
              _0x491fce[_0x3f92c5(0x7b7, 'yj(U')]['x'],
              _0x491fce['position']['y'],
              _0x491fce['position']['z']
            )
          );
        })
      : _0x1b8480[_0xe0023d(0x31a, 'HLRT')](
          _0x1b8480[_0xe0023d(0x50d, 'fFl%')],
          _0x1b8480['fzrzo']
        )
      ? _0x289927[_0xe0023d(0x502, '*o(O')]['dispose']()
      : _0x4b3ca0['forEach']((_0x161be0) => {
          const _0x10d218 = _0xe0023d;
          _0x42c44c[_0x10d218(0x6cb, 'uu^e')](
            new Vector3(_0x161be0[0x0], _0x161be0[0x1], _0x161be0[0x2])
          );
        });
    const _0x52212b = new MeshBasicMaterial({
        color: _0x27d222,
        side: DoubleSide,
      }),
      _0x489301 = new PolyLine(_0x58546c, !0x0, !0x0),
      _0x56dda9 = _0x489301['spliceArr'](_0x42c44c),
      [_0x1ceeae, _0x22ac29, _0x557891, _0x108314, _0x82a86e] = await _0x489301[
        _0xe0023d(0x2f2, 'GSPA')
      ](_0x56dda9[0x0], _0x56dda9[0x1]),
      _0x3584bf = new BufferGeometry();
    _0x3584bf['setAttribute'](
      _0x1b8480[_0xe0023d(0x4aa, 'RIUg')],
      new BufferAttribute(_0x1ceeae, 0x3)
    ),
      _0x3584bf[_0xe0023d(0x578, '5Q9i')](
        _0xe0023d(0x4a7, 'isRG'),
        new BufferAttribute(new Float32Array(_0x22ac29), 0x3)
      ),
      _0x3584bf[_0xe0023d(0x5d0, 'Di$r')](_0x557891),
      _0x3584bf[_0xe0023d(0x3f4, 'VaX6')](
        'uv',
        new BufferAttribute(new Float32Array(_0x108314), 0x2)
      ),
      _0x3584bf['setAttribute'](
        _0x1b8480[_0xe0023d(0x77f, '[z)#')],
        new BufferAttribute(new Float32Array(_0x82a86e), 0x3)
      );
    const _0x1d9b39 = new Mesh(_0x3584bf, _0x52212b);
    _0x1d9b39[_0xe0023d(0x4d2, 'k@fr')][_0xe0023d(0x4a6, '%dLx')](BLOOM_SCENE),
      this[_0xe0023d(0x517, 'Do^C')]['add'](_0x1d9b39);
  }
  [_0x4e6d82(0x304, 'HLRT')](_0x3ac741, _0x1ca3dd) {
    const _0x2c20f7 = _0x4e6d82,
      _0x5cfde7 = {
        bolig: function (_0x5aa626, _0x498b91) {
          return _0x5aa626 == _0x498b91;
        },
        jRJPv: function (_0x5c90bf, _0x4981a8) {
          return _0x5c90bf !== _0x4981a8;
        },
        TigrY: _0x2c20f7(0x82b, '#D4T'),
        mjdxW: 'label',
      },
      _0x463f49 = this[_0x2c20f7(0x711, '*o(O')]['children']['find'](
        (_0x509f81) => {
          const _0x249a78 = _0x2c20f7,
            _0x129889 = {
              AafVd: function (_0x16dcf7, _0x56f7f9) {
                return _0x5cfde7['bolig'](_0x16dcf7, _0x56f7f9);
              },
            };
          if (
            _0x5cfde7[_0x249a78(0x71f, 'EN%Z')](
              _0x5cfde7[_0x249a78(0x1fe, 'cxqK')],
              'AJXDe'
            )
          ) {
            if (!_0x572f9a[_0x249a78(0x52b, '0tbS')]) return;
            _0x129889[_0x249a78(0x781, '#D4T')](
              _0x25a0dd[_0x249a78(0x2c4, 'fFl%')],
              _0x249a78(0x53a, '#o#W')
            ) &&
              ((_0x7dfb90[_0x249a78(0x257, '0tbS')][_0x249a78(0x563, 'dyOF')] =
                new _0x3510c0(_0x342dfc)),
              (_0x58f3cf[_0x249a78(0x762, 'ODYW')][_0x249a78(0x1db, 'Tggn')] =
                !0x0));
          } else return _0x509f81[_0x249a78(0x76e, 'HLRT')] == _0x1ca3dd['id'];
        }
      );
    if (!_0x463f49) return;
    const _0x3b8ca3 = new CSS2DObject(_0x3ac741);
    _0x3b8ca3[_0x2c20f7(0x2a9, '64mJ')] = _0x5cfde7[_0x2c20f7(0x85f, 'Di$r')];
    const _0x568a66 = new Vector3()[_0x2c20f7(0x5d7, 'uu^e')](
      _0x463f49['position']
    );
    _0x3b8ca3['position'][_0x2c20f7(0x5b6, 'zIHi')](_0x568a66),
      this['panel'][_0x2c20f7(0x609, 'pr@C')](_0x3b8ca3);
  }
  [_0x4e6d82(0x6b0, 'RIUg')]() {
    const _0x3e77b9 = _0x4e6d82;
    this[_0x3e77b9(0x439, '%dLx')](this['panel']);
  }
  async [_0x4e6d82(0x43e, 'dyOF')](_0x5bc630, _0x6f1060) {
    const _0x1667c9 = _0x4e6d82,
      _0x1b242c = {
        kJLvQ: function (_0x102092, _0x496ee1) {
          return _0x102092 * _0x496ee1;
        },
        qVMHE: function (_0x3ee4a1, _0x57cd3d) {
          return _0x3ee4a1 !== _0x57cd3d;
        },
        nMTAa: _0x1667c9(0x258, 'P9le'),
        awUok: function (_0x5d0c45, _0x296c3a) {
          return _0x5d0c45 === _0x296c3a;
        },
        XtcPU: function (_0xa654f3, _0x385354) {
          return _0xa654f3 === _0x385354;
        },
        okBeL: _0x1667c9(0x7ae, '@wQ)'),
        Vjuqe: _0x1667c9(0x5e0, 'tA%r'),
        DBoJU: function (_0x5a4e68, _0x4b97e3) {
          return _0x5a4e68(_0x4b97e3);
        },
        nGMwd: function (_0x4f350a, _0x3e957a) {
          return _0x4f350a(_0x3e957a);
        },
        VxxKl: 'Bnrqj',
      };
    let _0x3f6265;
    this[_0x1667c9(0x858, 'Do^C')][_0x1667c9(0x519, 'VaX6')]((_0x46ea18) => {
      const _0x1c9459 = _0x1667c9,
        _0x4ebd47 = {
          KDJaO: function (_0x193d8b, _0x5940c2, _0x265d8e) {
            return _0x193d8b(_0x5940c2, _0x265d8e);
          },
          yZDAW: function (_0xb73f8d, _0x38c511) {
            return _0x1b242c['kJLvQ'](_0xb73f8d, _0x38c511);
          },
        };
      if (
        _0x1b242c[_0x1c9459(0x582, '5Q9i')](
          _0x1b242c[_0x1c9459(0x5b9, 'pr@C')],
          _0x1b242c[_0x1c9459(0x583, '64mJ')]
        )
      )
        _0x4ebd47['KDJaO'](
          _0x220afb,
          () => {
            const _0x4be004 = _0x1c9459;
            if (!this[_0x4be004(0x440, 'cJlR')]) return;
            this['addFlowLine']();
          },
          _0x4ebd47[_0x1c9459(0x7c3, '$SOy')](_0x3429fc, 0x708)
        );
      else {
        if (
          _0x1b242c[_0x1c9459(0x41e, 'zIHi')](
            _0x46ea18[_0x1c9459(0x3f7, 'pr@C')],
            _0x5bc630
          )
        )
          _0x3f6265 = _0x46ea18;
      }
    }),
      _0x3f6265 &&
        (_0x1b242c[_0x1667c9(0x1a4, 'Mfne')] === _0x1667c9(0x4d8, 'Di$r')
          ? await this[_0x1667c9(0x216, 'P9le')](_0x3f6265)
          : (_0x511038 &&
              (_0x1b242c['nGMwd'](_0x4c24ab, _0x22d6f7),
              _0x1148d8++,
              (_0x5920be = null)),
            (_0xa9b8ee = _0x341bfc(() => {
              const _0x2ad9ee = _0x1667c9;
              if (_0x1b242c['XtcPU'](_0x369fd, 0x1))
                this[_0x2ad9ee(0x34f, '%dLx')][_0x2ad9ee(0x386, 'zIHi')](
                  _0x1b242c[_0x2ad9ee(0x6a9, '#D4T')],
                  _0x2aa142
                );
              else {
                if (_0x2fccdd === 0x2)
                  this['event'][_0x2ad9ee(0x2bf, 'dyOF')](
                    _0x1b242c[_0x2ad9ee(0x5b8, 'k@fr')],
                    _0xdf9cae
                  );
              }
              (_0x423209 = 0x1),
                _0x1b242c[_0x2ad9ee(0x5b7, 'uu^e')](_0x2fbecd, _0x14ae3f),
                (_0x1b0cb3 = null);
            }, 0xc8))));
  }
  [_0x4e6d82(0x41b, 'yj(U')](_0x4ff22b) {
    const _0x342bec = {
      tWTRq: function (_0x251601) {
        return _0x251601();
      },
      tjhwg: 'cJKdi',
      ooNtZ: 'AklRq',
    };
    return new Promise((_0x9400a8) => {
      const _0xcdff75 = _0x4643,
        _0x12ea79 = {
          CcVNx: function (_0x80a646) {
            const _0x48a3a9 = _0x4643;
            return _0x342bec[_0x48a3a9(0x659, '#D4T')](_0x80a646);
          },
        };
      if (_0x342bec['tjhwg'] === _0x342bec[_0xcdff75(0x86b, 'ODYW')])
        this[_0xcdff75(0x4bd, 'P9le')][_0xcdff75(0x4bc, 'Do^C')](
          (_0x217721) => {
            const _0xaa9e56 = _0xcdff75;
            if (!_0x217721[_0xaa9e56(0x52b, '0tbS')]) return;
            _0x217721['name'] == '网格' &&
              ((_0x217721[_0xaa9e56(0x5df, 'EN%Z')]['emissive'] = new _0x410c22(
                _0x682bd6
              )),
              (_0x217721[_0xaa9e56(0x25a, '$SOy')][_0xaa9e56(0x57a, 'VaX6')] =
                !0x0));
          }
        );
      else {
        const _0x86d958 = new Vector3();
        _0x4ff22b[_0xcdff75(0x3f8, 'yj(U')](_0x86d958);
        const _0x1ff8a6 = new Vector3()['copy'](_0x86d958);
        (_0x1ff8a6['y'] += 0x3),
          (_0x1ff8a6['z'] += 0x5),
          this[_0xcdff75(0x622, 'W@$@')](
            this[_0xcdff75(0x51d, 'asXm')]['position'],
            _0x1ff8a6,
            0xbb8
          ),
          this[_0xcdff75(0x378, 'Do^C')](
            this[_0xcdff75(0x80d, '&3*^')][_0xcdff75(0x4b8, '@wQ)')],
            _0x86d958,
            0xbb8,
            (_0x21b816) => {
              if (_0x21b816) _0x12ea79['CcVNx'](_0x9400a8);
            }
          );
      }
    });
  }
  ['flyToHome']() {
    const _0x122e54 = _0x4e6d82;
    this['tweenAnimate'](
      this['camera']['position'],
      this[_0x122e54(0x4ac, '0tbS')][_0x122e54(0x3cb, 'dyOF')],
      0xbb8
    ),
      this['tweenAnimate'](
        this[_0x122e54(0x2bb, 'eJ0%')][_0x122e54(0x74f, 'mxD@')],
        this[_0x122e54(0x680, 'H]q%')][_0x122e54(0x35f, '$SOy')],
        0xbb8
      );
  }
  ['tweenAnimate'](_0x224bf1, _0x2559f5, _0x8e72fe, _0x6ab4f) {
    const _0x1e8b67 = _0x4e6d82,
      _0x2bdc82 = {
        snWMI: function (_0x33cec9, _0x4a7610) {
          return _0x33cec9 !== _0x4a7610;
        },
        PJwHs: 'XFeAX',
      },
      _0x3d2a77 = new TWEEN['Tween'](_0x224bf1)['to'](
        { x: _0x2559f5['x'], y: _0x2559f5['y'], z: _0x2559f5['z'] },
        _0x8e72fe
      );
    _0x3d2a77[_0x1e8b67(0x56f, 'eJ0%')](() => {
      const _0x4a12cb = _0x1e8b67;
      this['controls'][_0x4a12cb(0x322, '4[ed')]();
    }),
      _0x3d2a77[_0x1e8b67(0x5f7, 'ODYW')](
        TWEEN[_0x1e8b67(0x24e, 'TraC')][_0x1e8b67(0x80a, 'D^]j')][
          _0x1e8b67(0x798, 'VaX6')
        ]
      ),
      _0x3d2a77[_0x1e8b67(0x789, 'oJob')](),
      _0x3d2a77['onComplete'](() => {
        const _0x375848 = _0x1e8b67,
          _0x222f34 = {
            umrDk: function (_0x134ea8, _0x31ab9d) {
              return _0x134ea8 == _0x31ab9d;
            },
            HXHby: function (_0xe7775, _0x4bd8ba) {
              return _0xe7775 > _0x4bd8ba;
            },
          };
        if (
          _0x2bdc82[_0x375848(0x7d7, '64mJ')](
            _0x2bdc82[_0x375848(0x638, 'Do^C')],
            'TAeGr'
          )
        ) {
          if (_0x6ab4f) _0x6ab4f(!0x0);
        } else {
          if (
            !_0x3999cf[_0x375848(0x3ae, 'isRG')] ||
            _0x222f34[_0x375848(0x83b, 'cJlR')](_0x3935e6, _0x22bd4b) ||
            !this[_0x375848(0x801, 'k@fr')][_0x375848(0x745, 'oJob')][
              _0x273a93
            ]['visible']
          )
            return;
          const _0x13b10e = new _0xf56e46()
            [_0x375848(0x30f, 'cJlR')](_0x168bb0['position'])
            [_0x375848(0x22a, '64mJ')](
              new _0x3c21c9()[_0x375848(0x613, 'QCn2')](
                this['labels']['children'][_0x152175]['position']
              )
            )
            [_0x375848(0x272, '#omn')](0x2);
          if (
            _0x222f34['HXHby'](
              _0x13b10e['distanceTo'](this['camera'][_0x375848(0x472, '[z)#')]),
              0x3c
            )
          )
            _0x365263[_0x375848(0x391, 'Do^C')] = !!0x0;
        }
      });
  }
  [_0x4e6d82(0x857, 'D^]j')]() {
    const _0x5d0ed9 = _0x4e6d82,
      _0x383326 = {
        ljxUV: function (_0x7001f7, _0x4db16a) {
          return _0x7001f7 > _0x4db16a;
        },
        JvlCf: function (_0x103a96, _0x1dd24b) {
          return _0x103a96 === _0x1dd24b;
        },
        THjhP: _0x5d0ed9(0x67c, 'cY88'),
        ANJvt: function (_0x4f0886, _0x13ca97) {
          return _0x4f0886 !== _0x13ca97;
        },
        XPOUP: 'zqoxL',
        OWCoe: 'XYZ',
        QPntq: 'model/menji.glb',
        fUMmz: _0x5d0ed9(0x686, 'Do^C'),
      },
      _0x2aff6c = [
        {
          pos: new Vector3(-37.46, 1.43, 53.386),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(
            0x0,
            0.12,
            0x0,
            _0x383326[_0x5d0ed9(0x83e, '64mJ')]
          ),
        },
        {
          pos: new Vector3(-37.75, 1.43, 51.141),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(
            0x0,
            0.12,
            0x0,
            _0x383326[_0x5d0ed9(0x1c9, 'GSPA')]
          ),
        },
        {
          pos: new Vector3(-35.8, 1.43, 0x30),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(
            0x0,
            -0x1,
            0x0,
            _0x383326[_0x5d0ed9(0x794, '5Q9i')]
          ),
        },
        {
          pos: new Vector3(-32.87, 1.43, 45.805),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(0x0, -0x1, 0x0, _0x383326['OWCoe']),
        },
        {
          pos: new Vector3(-29.13, 1.43, 52.227),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(0x0, -0x3, 0x0, _0x383326['OWCoe']),
        },
        {
          pos: new Vector3(-29.39, 1.43, 50.308),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(0x0, -0x3, 0x0, 'XYZ'),
        },
        {
          pos: new Vector3(-29.6, 1.43, 48.672),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(
            0x0,
            -0x3,
            0x0,
            _0x383326[_0x5d0ed9(0x3ba, 'ODYW')]
          ),
        },
        {
          pos: new Vector3(-29.82, 1.43, 46.857),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(
            0x0,
            -0x3,
            0x0,
            _0x383326[_0x5d0ed9(0x1e4, 'cxqK')]
          ),
        },
      ];
    this[_0x5d0ed9(0x473, 'yj(U')][_0x5d0ed9(0x66b, 'ODYW')](
      _0x383326['QPntq'],
      (_0x1f40e2) => {
        const _0x2c9cda = _0x5d0ed9,
          _0x274aae = {
            JXJgZ: function (_0x2b9368, _0x4f8785) {
              return _0x2b9368 == _0x4f8785;
            },
            OAewG: function (_0x116389, _0x787c90) {
              const _0x4d62e9 = _0x4643;
              return _0x383326[_0x4d62e9(0x72b, 'RIUg')](_0x116389, _0x787c90);
            },
            SBdSi: function (_0x925d5f, _0x4db060) {
              const _0x431076 = _0x4643;
              return _0x383326[_0x431076(0x67b, 'HLRT')](_0x925d5f, _0x4db060);
            },
            TEnGB: _0x2c9cda(0x52f, 'rsrW'),
            eBmnS: _0x383326[_0x2c9cda(0x1fa, 'eJ0%')],
          };
        if (
          _0x383326[_0x2c9cda(0x331, '@wQ)')](
            _0x383326[_0x2c9cda(0x65a, '64mJ')],
            _0x2c9cda(0x28e, 'zIHi')
          )
        ) {
          const _0x4faaec = _0x1f40e2['scene']['clone']();
          _0x2aff6c['forEach']((_0x22c61d) => {
            const _0x1164ce = _0x2c9cda,
              _0x33515f = {
                mSpdq: function (_0x9bf206, _0x43b5b8) {
                  return _0x274aae['JXJgZ'](_0x9bf206, _0x43b5b8);
                },
                THtNh: function (_0x341263, _0x56c18c) {
                  const _0xf3e7d7 = _0x4643;
                  return _0x274aae[_0xf3e7d7(0x6eb, 'Do^C')](
                    _0x341263,
                    _0x56c18c
                  );
                },
              };
            if (
              _0x274aae[_0x1164ce(0x67d, '@wQ)')](
                _0x274aae[_0x1164ce(0x7cd, 'P9le')],
                _0x274aae['TEnGB']
              )
            ) {
              const _0xa3992f = _0x4faaec[_0x1164ce(0x80b, 'yj(U')]();
              _0xa3992f[_0x1164ce(0x621, 'cxqK')]['copy'](_0x22c61d['pos']),
                _0xa3992f[_0x1164ce(0x22b, 'tA%r')]['copy'](
                  _0x22c61d[_0x1164ce(0x76a, 'cY88')]
                ),
                _0xa3992f[_0x1164ce(0x1b0, '0tbS')]['copy'](
                  _0x22c61d['rotation']
                ),
                this[_0x1164ce(0x517, 'Do^C')][_0x1164ce(0x36b, 'uu^e')](
                  _0xa3992f
                );
            } else
              this['labels'][_0x1164ce(0x755, 'dyOF')]['forEach'](
                (_0x2e243e, _0x5b7622) => {
                  const _0x4c812d = _0x1164ce;
                  if (
                    !_0x2e243e[_0x4c812d(0x3a3, 'cY88')] ||
                    _0x33515f['mSpdq'](_0x5b7622, _0x2aeb23) ||
                    !this[_0x4c812d(0x684, '#o#W')]['children'][_0x6874b1][
                      _0x4c812d(0x28b, 'QCn2')
                    ]
                  )
                    return;
                  const _0x1deccb = new _0x18013d()
                    ['copy'](_0x2e243e[_0x4c812d(0x56d, 'dyOF')])
                    [_0x4c812d(0x71b, '4[ed')](
                      new _0x575b95()[_0x4c812d(0x454, 'isRG')](
                        this['labels']['children'][_0x4a22b1][
                          _0x4c812d(0x39f, '@wQ)')
                        ]
                      )
                    )
                    [_0x4c812d(0x250, 'H]q%')](0x2);
                  if (
                    _0x33515f[_0x4c812d(0x6ba, '0tbS')](
                      _0x1deccb[_0x4c812d(0x413, '@wQ)')](
                        this[_0x4c812d(0x3c1, 'TraC')][_0x4c812d(0x39f, '@wQ)')]
                      ),
                      0x3c
                    )
                  )
                    _0x2e243e['visible'] = !!0x0;
                }
              ),
                _0x56afe9++;
          });
        } else
          this[_0x2c9cda(0x58f, '[z)#')]['traverse']((_0x44e51b) => {
            const _0xfcf2aa = _0x2c9cda;
            if (!_0x44e51b[_0xfcf2aa(0x850, '$SOy')]) return;
            _0x274aae['JXJgZ'](
              _0x44e51b[_0xfcf2aa(0x838, '[z)#')],
              _0x274aae[_0xfcf2aa(0x828, 'xXm&')]
            ) &&
              ((_0x44e51b[_0xfcf2aa(0x4e8, 'rsrW')][_0xfcf2aa(0x424, 'Mfne')] =
                _0x37ae4b),
              (_0x44e51b[_0xfcf2aa(0x5e8, 'cY88')][_0xfcf2aa(0x4c9, 'xXm&')] =
                !0x0));
          });
      }
    );
    const _0x239922 = [
      {
        pos: new Vector3(-36.5, 0.3, 53.061),
        rotation: new Euler(
          0x0,
          3.28,
          0x0,
          _0x383326[_0x5d0ed9(0x6de, 'QCn2')]
        ),
      },
      {
        pos: new Vector3(-35.3, 0.3, 48.9),
        rotation: new Euler(
          0x0,
          2.23,
          0x0,
          _0x383326[_0x5d0ed9(0x392, 'cY88')]
        ),
      },
      {
        pos: new Vector3(-0x1e, 0.3, 52.158),
        rotation: new Euler(0x0, 0.14, 0x0, _0x5d0ed9(0x2cf, 'ODYW')),
      },
      {
        pos: new Vector3(-30.7, 0.3, 47.2),
        rotation: new Euler(0x0, 0.14, 0x0, _0x5d0ed9(0x677, 'rsrW')),
      },
    ];
    this['gltfLoader'][_0x5d0ed9(0x75b, '0tbS')](
      _0x383326[_0x5d0ed9(0x83a, 'H]q%')],
      (_0x3edf97) => {
        const _0x2f6fea = _0x5d0ed9;
        _0x3edf97[_0x2f6fea(0x704, 'xXm&')][_0x2f6fea(0x1cb, 'HLRT')](
          (_0x4abb30) => {
            const _0x449e66 = _0x2f6fea;
            if (_0x4abb30['isMesh'])
              _0x4abb30[_0x449e66(0x212, '4[ed')]['enable'](BLOOM_SCENE);
          }
        ),
          _0x3edf97[_0x2f6fea(0x26f, 'GSPA')][_0x2f6fea(0x748, 'yj(U')][
            _0x2f6fea(0x6a6, 'Di$r')
          ](0.3, 0.3, 0.3);
        const _0x30d0a1 = _0x3edf97['scene']['clone']();
        _0x239922[_0x2f6fea(0x268, 'fFl%')]((_0x406b46) => {
          const _0x58c8ce = _0x2f6fea,
            _0x4b450d = _0x30d0a1[_0x58c8ce(0x3ce, 'Di$r')]();
          _0x4b450d[_0x58c8ce(0x1bd, 'fFl%')][_0x58c8ce(0x3f2, '64mJ')](
            _0x406b46[_0x58c8ce(0x3a4, '@wQ)')]
          ),
            _0x4b450d[_0x58c8ce(0x635, '[z)#')][_0x58c8ce(0x371, 'cY88')](
              _0x406b46['rotation']
            ),
            this[_0x58c8ce(0x806, '#omn')][_0x58c8ce(0x4b2, 'rsrW')](_0x4b450d);
        });
      }
    );
  }
  ['loadDengta']() {
    const _0x3ddaa2 = _0x4e6d82,
      _0x48dd84 = { zdVsz: _0x3ddaa2(0x4ae, '4[ed') };
    this['gltfLoader']['load'](
      _0x48dd84[_0x3ddaa2(0x362, 'oJob')],
      (_0x1d0e00) => {
        const _0x326678 = _0x3ddaa2,
          _0x48f715 = _0x1d0e00[_0x326678(0x623, 'cJlR')];
        _0x48f715[_0x326678(0x434, 'RIUg')]['set'](39.571, -2.361, -47.172),
          _0x48f715[_0x326678(0x51f, 'W@$@')]((_0x5e5646) => {
            const _0x2deaa2 = _0x326678;
            if (!_0x5e5646[_0x2deaa2(0x768, 'H]q%')]) return;
            _0x5e5646[_0x2deaa2(0x463, 'RIUg')][_0x2deaa2(0x352, '5Q9i')](
              BLOOM_SCENE
            );
          }),
          this[_0x326678(0x616, '#D4T')][_0x326678(0x58d, '@wQ)')](_0x48f715);
      }
    );
  }
  ['loadMenji']() {
    const _0x5e4705 = _0x4e6d82,
      _0x184572 = {
        WNAip: function (_0x42221b, _0x3b1eea, _0x310f7f) {
          return _0x42221b(_0x3b1eea, _0x310f7f);
        },
        eGGoJ: function (_0x32a9d1, _0x10af94) {
          return _0x32a9d1 === _0x10af94;
        },
        DdlgR: _0x5e4705(0x560, '64mJ'),
        TbAfX: 'qiPzN',
        CcmNT: _0x5e4705(0x3bb, 'VZ3m'),
        zZsSh: function (_0x1dc30d, _0x4e392e) {
          return _0x1dc30d !== _0x4e392e;
        },
        fvgKg: 'vDoZi',
        MoWmQ: function (_0x418c58, _0x2b8f0d) {
          return _0x418c58 + _0x2b8f0d;
        },
        cGTem: _0x5e4705(0x7aa, 'Di$r'),
        oumgI: 'model/menji.glb',
      },
      _0x54e7c6 = [
        {
          pos: new Vector3(-2.7, -1.6, 59.109),
          rotation: new Euler(
            0x0,
            -3.13,
            0x0,
            _0x184572[_0x5e4705(0x5d1, '*o(O')]
          ),
        },
        {
          pos: new Vector3(-15.9, -1.6, 35.815),
          rotation: new Euler(
            0x0,
            -3.13,
            0x0,
            _0x184572[_0x5e4705(0x5ca, '5Q9i')]
          ),
        },
        {
          pos: new Vector3(-15.764, -1.6, 28.28),
          rotation: new Euler(
            0x0,
            -3.13,
            0x0,
            _0x184572[_0x5e4705(0x61e, 'tA%r')]
          ),
        },
        {
          pos: new Vector3(-15.86, -1.6, 20.497),
          rotation: new Euler(0x0, -3.13, 0x0, _0x5e4705(0x450, 'cJlR')),
        },
        {
          pos: new Vector3(12.2, -1.6, -16.7),
          rotation: new Euler(0x0, 0x3, 0x0, _0x184572['cGTem']),
        },
        {
          pos: new Vector3(-2.7, -1.6, 0x33),
          rotation: new Euler(
            0x0,
            -3.13,
            0x0,
            _0x184572[_0x5e4705(0x2b6, '0tbS')]
          ),
        },
        {
          pos: new Vector3(13.33, -1.6, -0x18),
          rotation: new Euler(0x0, 0x3, 0x0, 'XYZ'),
        },
      ];
    this[_0x5e4705(0x473, 'yj(U')][_0x5e4705(0x6cc, 'eJ0%')](
      _0x184572[_0x5e4705(0x725, 'HLRT')],
      (_0x396602) => {
        const _0x2a4104 = _0x5e4705,
          _0x1d1c47 =
            _0x396602[_0x2a4104(0x7bb, 'H]q%')][_0x2a4104(0x33d, 'Tggn')]();
        _0x1d1c47[_0x2a4104(0x670, 'D^]j')][_0x2a4104(0x328, 'cxqK')](
          0.008,
          0.008,
          0.008
        ),
          _0x54e7c6[_0x2a4104(0x783, 'P9le')]((_0x256679) => {
            const _0x79b7d7 = _0x2a4104,
              _0x5da76d = {
                RTnBP: function (_0x30aa1d, _0x3f514a, _0x3fc311) {
                  const _0x17c76b = _0x4643;
                  return _0x184572[_0x17c76b(0x7ea, 'EN%Z')](
                    _0x30aa1d,
                    _0x3f514a,
                    _0x3fc311
                  );
                },
              };
            if (
              _0x184572[_0x79b7d7(0x69a, '$SOy')](
                'yEVgw',
                _0x184572[_0x79b7d7(0x816, '#o#W')]
              )
            ) {
              const _0x11d571 = _0x1d1c47[_0x79b7d7(0x839, 'TraC')]();
              _0x11d571[_0x79b7d7(0x303, 'H]q%')][_0x79b7d7(0x1c2, 'rsrW')](
                _0x256679[_0x79b7d7(0x231, 'zIHi')]
              ),
                _0x11d571[_0x79b7d7(0x6bf, 'Tggn')]['copy'](
                  _0x256679['rotation']
                ),
                this[_0x79b7d7(0x616, '#D4T')][_0x79b7d7(0x620, '0tbS')](
                  _0x11d571
                );
            } else
              (_0xf3159c[_0x79b7d7(0x28a, '#omn')][_0x79b7d7(0x84d, 'VaX6')] =
                _0x79b7d7(0x50f, '5Q9i')),
                _0x5da76d[_0x79b7d7(0x813, '*o(O')](
                  _0x5f2981,
                  () => {
                    const _0x3e5eac = _0x79b7d7;
                    _0x213ecd[_0x3e5eac(0x4b5, 'D^]j')]['transform'] =
                      _0x3e5eac(0x3fb, 'VaX6');
                  },
                  0x708
                );
          });
      }
    );
    const _0x122ada = [
      {
        pos: new Vector3(1.03, -1.9, -2.074),
        rotation: new Euler(0x0, -1.57, 0x0, _0x5e4705(0x1b4, 'RIUg')),
      },
      {
        pos: new Vector3(1.03, -1.9, -3.874),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x184572[_0x5e4705(0x64f, '$SOy')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -5.674),
        rotation: new Euler(0x0, -1.57, 0x0, _0x5e4705(0x383, 'fFl%')),
      },
      {
        pos: new Vector3(1.03, -1.9, -7.474),
        rotation: new Euler(0x0, -1.57, 0x0, 'XYZ'),
      },
      {
        pos: new Vector3(1.03, -1.9, -9.274),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x184572[_0x5e4705(0x7fc, 'd@fE')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -11.074),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x184572[_0x5e4705(0x405, 'HLRT')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -12.874),
        rotation: new Euler(0x0, -1.57, 0x0, _0x5e4705(0x450, 'cJlR')),
      },
      {
        pos: new Vector3(1.03, -1.9, -14.674),
        rotation: new Euler(0x0, -1.57, 0x0, _0x184572['cGTem']),
      },
      {
        pos: new Vector3(1.03, -1.9, -16.474),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x184572[_0x5e4705(0x7e4, 'Di$r')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -18.274),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x184572[_0x5e4705(0x5fb, 'P9le')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -20.074),
        rotation: new Euler(0x0, -1.57, 0x0, _0x184572['cGTem']),
      },
      {
        pos: new Vector3(1.03, -1.9, -21.874),
        rotation: new Euler(0x0, -1.57, 0x0, _0x5e4705(0x295, 'dyOF')),
      },
      {
        pos: new Vector3(1.03, -1.9, -23.674),
        rotation: new Euler(0x0, -1.57, 0x0, _0x184572['cGTem']),
      },
      {
        pos: new Vector3(1.03, -1.9, -25.474),
        rotation: new Euler(0x0, -1.57, 0x0, _0x184572['cGTem']),
      },
      {
        pos: new Vector3(1.03, -1.9, -27.274),
        rotation: new Euler(0x0, -1.57, 0x0, _0x184572['cGTem']),
      },
      {
        pos: new Vector3(1.03, -1.9, -29.074),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x184572[_0x5e4705(0x1f8, 'cY88')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -30.874),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x184572[_0x5e4705(0x36a, 'QCn2')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -32.674),
        rotation: new Euler(0x0, -1.57, 0x0, _0x184572['cGTem']),
      },
    ];
    this[_0x5e4705(0x443, 'd@fE')][_0x5e4705(0x7fd, '[z)#')](
      _0x5e4705(0x249, '*o(O'),
      (_0x4b6678) => {
        const _0x5932c5 = _0x5e4705,
          _0xabb5b1 = {
            huYxs: function (_0x3c4a29, _0x5ea987) {
              return _0x3c4a29 == _0x5ea987;
            },
            wzaTC: _0x184572[_0x5932c5(0x32b, '[z)#')],
            jhIvt: function (_0x141e39, _0x235dce) {
              const _0x5c1377 = _0x5932c5;
              return _0x184572[_0x5c1377(0x34a, '%dLx')](_0x141e39, _0x235dce);
            },
            uodhL: _0x184572[_0x5932c5(0x532, '#o#W')],
            COvsn: function (_0x1df909, _0x4ab694) {
              const _0x335ea1 = _0x5932c5;
              return _0x184572[_0x335ea1(0x226, 'GSPA')](_0x1df909, _0x4ab694);
            },
          };
        (this[_0x5932c5(0x310, '&3*^')] =
          _0x4b6678['scene'][_0x5932c5(0x619, 'cJlR')]()),
          this['menjiFater'][_0x5932c5(0x500, 'QCn2')][
            _0x5932c5(0x509, 'cY88')
          ](0.02, 0.03, 0.02),
          this[_0x5932c5(0x5b4, 'GSPA')][_0x5932c5(0x79c, 'xXm&')](
            (_0x3aa0b6) => {
              const _0x616e42 = _0x5932c5,
                _0x9340a = {
                  mjytt: function (_0x33d61e, _0x552aef) {
                    const _0x1d3f42 = _0x4643;
                    return _0xabb5b1[_0x1d3f42(0x82c, '#omn')](
                      _0x33d61e,
                      _0x552aef
                    );
                  },
                  DWdcu: _0xabb5b1[_0x616e42(0x6a3, 'RIUg')],
                };
              if (
                _0xabb5b1[_0x616e42(0x84f, 'W@$@')](
                  _0xabb5b1[_0x616e42(0x73a, 'uu^e')],
                  _0x616e42(0x5b3, 'tA%r')
                )
              ) {
                if (!_0x3aa0b6[_0x616e42(0x195, 'xXm&')]) return;
                _0x3aa0b6['material'][_0x616e42(0x418, '[z)#')] = new Color(
                  0x1e5fe0
                );
              } else
                this[_0x616e42(0x58f, '[z)#')][_0x616e42(0x2d9, '#o#W')](
                  (_0xdb773) => {
                    const _0x496d1b = _0x616e42;
                    if (!_0xdb773[_0x496d1b(0x1d6, 'W@$@')]) return;
                    _0x9340a['mjytt'](
                      _0xdb773[_0x496d1b(0x321, 'cJlR')],
                      _0x9340a['DWdcu']
                    ) &&
                      ((_0xdb773['material'][_0x496d1b(0x844, 'H]q%')] =
                        new _0x2f14b4(_0x1ca222)),
                      (_0xdb773['material']['needsUpdate'] = !0x0));
                  }
                );
            }
          ),
          this['menjiFater']['traverse']((_0xe5a902) => {
            const _0x1f73f6 = _0x5932c5;
            if (
              _0x184572[_0x1f73f6(0x6bb, 'asXm')] !== _0x1f73f6(0x31d, ')f1%')
            )
              _0x2d52bf[_0x1f73f6(0x5df, 'EN%Z')][_0x1f73f6(0x2ab, 'QCn2')] =
                _0xabb5b1['COvsn'](
                  -this['controls']['getAzimuthalAngle'](),
                  _0x30edcc['PI'] / 0x2
                );
            else {
              if (!_0xe5a902[_0x1f73f6(0x850, '$SOy')]) return;
              _0xe5a902[_0x1f73f6(0x630, '&3*^')]['color'] = new Color(
                0x3567a4
              );
            }
          }),
          _0x122ada[_0x5932c5(0x291, '4[ed')]((_0x21dbb3) => {
            const _0x1f9b2e = _0x5932c5,
              _0xf61051 = this[_0x1f9b2e(0x6b8, 'oJob')]['clone']();
            _0xf61051[_0x1f9b2e(0x836, 'P9le')][_0x1f9b2e(0x452, '@wQ)')](
              _0x21dbb3[_0x1f9b2e(0x23a, 'cY88')]
            ),
              _0xf61051[_0x1f9b2e(0x7e5, '&3*^')]['copy'](
                _0x21dbb3['rotation']
              ),
              this[_0x1f9b2e(0x4bd, 'P9le')][_0x1f9b2e(0x3b5, 'EN%Z')](
                _0xf61051
              );
          });
      }
    );
  }
  [_0x4e6d82(0x6e9, 'mxD@')](_0x55677f) {
    const _0x5e9c0c = _0x4e6d82,
      _0x53ec4b = {
        gnJxS: function (_0x32be3a, _0x25fee0) {
          return _0x32be3a !== _0x25fee0;
        },
        ejTti: 'hfnKR',
      };
    if (this[_0x5e9c0c(0x25d, ')f1%')]) {
      if (
        _0x53ec4b[_0x5e9c0c(0x3f0, 'Do^C')](
          _0x53ec4b['ejTti'],
          _0x5e9c0c(0x511, 'ODYW')
        )
      )
        this[_0x5e9c0c(0x469, 'uu^e')][_0x5e9c0c(0x71d, 'fFl%')](
          (_0x3741f9) => {
            const _0x26e610 = _0x5e9c0c;
            if (!_0x3741f9[_0x26e610(0x2b1, 'fFl%')]) return;
            _0x3741f9[_0x26e610(0x364, '@wQ)')][_0x26e610(0x50a, 'uu^e')] =
              new Color(_0x55677f);
          }
        );
      else {
        _0xdd7c5d['geometry'][_0x5e9c0c(0x2ff, 'HLRT')]();
        if (_0x43d403['material']) {
          _0x61c76e[_0x5e9c0c(0x2a1, 'VZ3m')][_0x5e9c0c(0x6d5, '$SOy')]();
          for (const _0x2a44c2 of _0x46a4a8['keys'](
            _0x222422[_0x5e9c0c(0x630, '&3*^')]
          )) {
            const _0x4286b1 = _0x4a38f2[_0x5e9c0c(0x7fe, '#D4T')][_0x2a44c2];
            _0x4286b1 &&
              typeof _0x4286b1 === _0x5e9c0c(0x667, 'uu^e') &&
              'minFilter' in _0x4286b1 &&
              _0x4286b1['dispose']();
          }
        }
      }
    }
  }
  [_0x4e6d82(0x56e, 'TraC')](_0x2dbde4) {
    const _0x502945 = _0x4e6d82,
      _0x6a447c = {
        NAbYs: function (_0x2a55b3, _0x5cf4cc) {
          return _0x2a55b3 === _0x5cf4cc;
        },
        bRZbs: 'iItiw',
      };
    if (this['menjiFater']) {
      if (
        _0x6a447c['NAbYs'](
          _0x502945(0x6c9, 'ODYW'),
          _0x6a447c[_0x502945(0x685, 'D^]j')]
        )
      ) {
        const _0x307799 = new _0x27c452();
        _0x59bd09[_0x502945(0x82e, 'fFl%')](_0x307799);
        const _0x5de528 = new _0x37eff5()[_0x502945(0x501, 'D^]j')](_0x307799);
        (_0x5de528['y'] += 0x3),
          (_0x5de528['z'] += 0x5),
          this['tweenAnimate'](
            this['camera'][_0x502945(0x81a, 'EN%Z')],
            _0x5de528,
            0xbb8
          ),
          this['tweenAnimate'](
            this[_0x502945(0x85d, 'Tggn')][_0x502945(0x292, '[z)#')],
            _0x307799,
            0xbb8,
            (_0x1d62ad) => {
              if (_0x1d62ad) _0x1f4b23();
            }
          );
      } else
        this[_0x502945(0x60b, '%dLx')][_0x502945(0x65d, '&3*^')](
          (_0x1202c1) => {
            const _0x4f7443 = _0x502945;
            if (!_0x1202c1[_0x4f7443(0x768, 'H]q%')]) return;
            _0x1202c1['material'][_0x4f7443(0x6cd, 'rsrW')] = new Color(
              _0x2dbde4
            );
          }
        );
    }
  }
}
var version_ = 'jsjiami.com.v7';
