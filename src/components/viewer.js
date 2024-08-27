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

var _0xodv = 'jsjiami.com.v7';
const _0x179150 = _0x3da3;
if (
  ((function (
    _0x9eb878,
    _0xea757,
    _0x5aaadf,
    _0x5f3442,
    _0x8ef4d4,
    _0x1d12c9,
    _0x29a155
  ) {
    return (
      (_0x9eb878 = _0x9eb878 >> 0x6),
      (_0x1d12c9 = 'hs'),
      (_0x29a155 = 'hs'),
      (function (_0x42ff3b, _0x3dddf2, _0x34ea2f, _0x356061, _0x59b196) {
        const _0x9444fe = _0x3da3;
        (_0x356061 = 'tfi'),
          (_0x1d12c9 = _0x356061 + _0x1d12c9),
          (_0x59b196 = 'up'),
          (_0x29a155 += _0x59b196),
          (_0x1d12c9 = _0x34ea2f(_0x1d12c9)),
          (_0x29a155 = _0x34ea2f(_0x29a155)),
          (_0x34ea2f = 0x0);
        const _0x5a50e4 = _0x42ff3b();
        while (!![] && --_0x5f3442 + _0x3dddf2) {
          try {
            _0x356061 =
              -parseInt(_0x9444fe(0x23b, '9s2V')) / 0x1 +
              -parseInt(_0x9444fe(0x5e3, 'BwQE')) / 0x2 +
              (-parseInt(_0x9444fe(0x4ce, '1!$B')) / 0x3) *
                (parseInt(_0x9444fe(0x52f, '*eSd')) / 0x4) +
              (-parseInt(_0x9444fe(0x74f, '@RzQ')) / 0x5) *
                (-parseInt(_0x9444fe(0x6b0, 'Q9e[')) / 0x6) +
              (-parseInt(_0x9444fe(0x5ee, '8(4w')) / 0x7) *
                (parseInt(_0x9444fe(0x143, 'Q9e[')) / 0x8) +
              parseInt(_0x9444fe(0x2e2, 'T#oD')) / 0x9 +
              (parseInt(_0x9444fe(0x3e5, '@RzQ')) / 0xa) *
                (parseInt(_0x9444fe(0x44b, 'Ix9w')) / 0xb);
          } catch (_0x5284b1) {
            _0x356061 = _0x34ea2f;
          } finally {
            _0x59b196 = _0x5a50e4[_0x1d12c9]();
            if (_0x9eb878 <= _0x5f3442)
              _0x34ea2f
                ? _0x8ef4d4
                  ? (_0x356061 = _0x59b196)
                  : (_0x8ef4d4 = _0x59b196)
                : (_0x34ea2f = _0x59b196);
            else {
              if (
                _0x34ea2f == _0x8ef4d4['replace'](/[QGOSfKLYNgBhIFMrpnD=]/g, '')
              ) {
                if (_0x356061 === _0x3dddf2) {
                  _0x5a50e4['un' + _0x1d12c9](_0x59b196);
                  break;
                }
                _0x5a50e4[_0x29a155](_0x59b196);
              }
            }
          }
        }
      })(
        _0x5aaadf,
        _0xea757,
        function (
          _0x48bb2d,
          _0x45855a,
          _0xc1f654,
          _0x2c8ee9,
          _0x4d00c5,
          _0x206813,
          _0x1c5a9c
        ) {
          return (
            (_0x45855a = '\x73\x70\x6c\x69\x74'),
            (_0x48bb2d = arguments[0x0]),
            (_0x48bb2d = _0x48bb2d[_0x45855a]('')),
            (_0xc1f654 = '\x72\x65\x76\x65\x72\x73\x65'),
            (_0x48bb2d = _0x48bb2d[_0xc1f654]('\x76')),
            (_0x2c8ee9 = '\x6a\x6f\x69\x6e'),
            (0x17fead, _0x48bb2d[_0x2c8ee9](''))
          );
        }
      )
    );
  })(0x3140, 0x72a45, _0x2bca, 0xc7),
  _0x2bca)
) {
}
const ENTIRE_SCENE = 0x0,
  BLOOM_SCENE = 0x1,
  bloomLayer = new Layers();
function _0x3da3(_0x36ab2d, _0x293c10) {
  const _0x2bcad7 = _0x2bca();
  return (
    (_0x3da3 = function (_0x3da3a8, _0x2f52ec) {
      _0x3da3a8 = _0x3da3a8 - 0x10b;
      let _0x2ced41 = _0x2bcad7[_0x3da3a8];
      if (_0x3da3['nXmxvN'] === undefined) {
        var _0x125341 = function (_0x4e659e) {
          const _0x131305 =
            'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
          let _0x3496b9 = '',
            _0x252b20 = '';
          for (
            let _0xaf3b80 = 0x0, _0x46d77e, _0x377abe, _0xab9ee3 = 0x0;
            (_0x377abe = _0x4e659e['charAt'](_0xab9ee3++));
            ~_0x377abe &&
            ((_0x46d77e =
              _0xaf3b80 % 0x4 ? _0x46d77e * 0x40 + _0x377abe : _0x377abe),
            _0xaf3b80++ % 0x4)
              ? (_0x3496b9 += String['fromCharCode'](
                  0xff & (_0x46d77e >> ((-0x2 * _0xaf3b80) & 0x6))
                ))
              : 0x0
          ) {
            _0x377abe = _0x131305['indexOf'](_0x377abe);
          }
          for (
            let _0xda6493 = 0x0, _0x38c7a5 = _0x3496b9['length'];
            _0xda6493 < _0x38c7a5;
            _0xda6493++
          ) {
            _0x252b20 +=
              '%' +
              ('00' + _0x3496b9['charCodeAt'](_0xda6493)['toString'](0x10))[
                'slice'
              ](-0x2);
          }
          return decodeURIComponent(_0x252b20);
        };
        const _0x3c392f = function (_0x4f1d90, _0x7a162c) {
          let _0x3c0222 = [],
            _0x3b6e5a = 0x0,
            _0x236cd0,
            _0x187e1b = '';
          _0x4f1d90 = _0x125341(_0x4f1d90);
          let _0x7cd0f0;
          for (_0x7cd0f0 = 0x0; _0x7cd0f0 < 0x100; _0x7cd0f0++) {
            _0x3c0222[_0x7cd0f0] = _0x7cd0f0;
          }
          for (_0x7cd0f0 = 0x0; _0x7cd0f0 < 0x100; _0x7cd0f0++) {
            (_0x3b6e5a =
              (_0x3b6e5a +
                _0x3c0222[_0x7cd0f0] +
                _0x7a162c['charCodeAt'](_0x7cd0f0 % _0x7a162c['length'])) %
              0x100),
              (_0x236cd0 = _0x3c0222[_0x7cd0f0]),
              (_0x3c0222[_0x7cd0f0] = _0x3c0222[_0x3b6e5a]),
              (_0x3c0222[_0x3b6e5a] = _0x236cd0);
          }
          (_0x7cd0f0 = 0x0), (_0x3b6e5a = 0x0);
          for (
            let _0x319b2f = 0x0;
            _0x319b2f < _0x4f1d90['length'];
            _0x319b2f++
          ) {
            (_0x7cd0f0 = (_0x7cd0f0 + 0x1) % 0x100),
              (_0x3b6e5a = (_0x3b6e5a + _0x3c0222[_0x7cd0f0]) % 0x100),
              (_0x236cd0 = _0x3c0222[_0x7cd0f0]),
              (_0x3c0222[_0x7cd0f0] = _0x3c0222[_0x3b6e5a]),
              (_0x3c0222[_0x3b6e5a] = _0x236cd0),
              (_0x187e1b += String['fromCharCode'](
                _0x4f1d90['charCodeAt'](_0x319b2f) ^
                  _0x3c0222[
                    (_0x3c0222[_0x7cd0f0] + _0x3c0222[_0x3b6e5a]) % 0x100
                  ]
              ));
          }
          return _0x187e1b;
        };
        (_0x3da3['lKBxbq'] = _0x3c392f),
          (_0x36ab2d = arguments),
          (_0x3da3['nXmxvN'] = !![]);
      }
      const _0x4b93fa = _0x2bcad7[0x0],
        _0x26f1a2 = _0x3da3a8 + _0x4b93fa,
        _0x18c75e = _0x36ab2d[_0x26f1a2];
      return (
        !_0x18c75e
          ? (_0x3da3['qZMDIK'] === undefined && (_0x3da3['qZMDIK'] = !![]),
            (_0x2ced41 = _0x3da3['lKBxbq'](_0x2ced41, _0x2f52ec)),
            (_0x36ab2d[_0x26f1a2] = _0x2ced41))
          : (_0x2ced41 = _0x18c75e),
        _0x2ced41
      );
    }),
    _0x3da3(_0x36ab2d, _0x293c10)
  );
}
function _0x2bca() {
  const _0x2a39a6 = (function () {
    return [
      _0xodv,
      'QjSsfjBhiNIaDmi.rgcKfGoOmFDI.Mvp7nfQMYLK==',
      'WOpdKKldIYutl8ol',
      'WRfYW7z3W5VcQg7cVa',
      'WQDLhmk8W53dSNzV',
      'W6NcPvdcUeaVAJa',
      'z8kvW7JdICoVCLOG',
      'oHZcSuW',
      'iSkCW5jSW4K',
      'W7JcOK3cTva4vW',
      '57YQ5QgTWOaT',
      'u8omW77cRCkShG',
      'jh1BpSkWWO0',
      'W6xcO3RcU0KTyZVdQau',
      'W7ldKftcRYpcUq',
      'WPmwEZX+Ea',
      'W5uxW5XaWRFdNmoHW7pdQt1Dnsi',
      'W7qJW61DWQW',
      'BINcKCktWPK',
      'WR8zl8kjWPtcNs4',
      'WRZdQCkXvCoyW6qEWQu1pfddPX5OWPFdPhWqW6L8ECkbxSkNWPL/W6lcIsPiW4BdPW7dSSoFWPRdHhL8',
      'WORdHSoVWQFdNt7dLa',
      'W7BcISoKkSot',
      'W4JcK8o0fSo6',
      'WRBcPCkfWQm',
      'WRtcLWVcINS',
      'W4CnW5DgWQ/dPSoQW7RdVG',
      'WQGunmklWP/cNq',
      'jgeGt8kfW6DZ',
      'E8oiW6xcI8ku',
      'nrZdMCkOWRtcOSkS',
      'W7b/f8k4W5KaFL3cHmkdWQ8PqgmJeCkJyxldT8kGWRP5CcNdLmoqW4qFWQRdRSk8FCodlSoAre7dHmoFWR5IW4GHeJWHfmkiW5OIyKxdJmocW4aEh8o5W6RcR8ookgzmW7ZcM8kis8ojWRHqWQnLWPOsx8kkWR0TWQdcHh4UAq',
      'fSkMWR0',
      'o8kAW6bdnW',
      'iGhcSv5ia00t',
      'BKBcRSo5WOe',
      'gdpdNSoEWQVcP1VdKq',
      'WPldLv0',
      'kwHfpmkQWOhcOZ43W5eu',
      'WOpdIhRdJae',
      'ohDgmmkWWOZcJZG',
      'WRJdO8kWt8ov',
      'WQHVWQ1hh8oUW4ZcVmkXvG',
      'W6FdKuBcPdVcTCopW4u',
      'wJFcPmkKWQ8',
      'BuZcM8olWP4',
      'B1FcQ2NdMa',
      'W6tcQfZcSfCiFZRdVrtcIG',
      'jbZdGCkMWRi',
      'WR7cO8kxWRCWW4ZdSt4jW73cJhy',
      'WPRdNuNdIcys',
      'WQXRWQ0',
      'umkzW7ZdQ8kLWPu',
      'amkJWQ1ZxGecEZNcVG',
      'W57cOCksWP3dMZVcTmoLBsNdNCkVrG',
      'pWldNCkXWOe',
      'aKG3WQVcUW',
      'WOL3WOFcQ1dcO8kPd1L1yW',
      'W5tcTmoSb8oBW7xcH8kpW5S',
      'WRz/W7HpW5dcIgRcTG',
      'WQ9HWQPlgCoeW4ZcVG',
      'q8kxW6ldP8kJWP3cIHy',
      'n2u9rCkfW6CWW4O',
      'W6nIn8oPwSk9WROu',
      '57Yb5Qc8yHRdLSomCW',
      'iGJcM1iw',
      'WOPSWOu',
      'WRuPd8oowa',
      'xtHWzdO',
      'W7ldK1ZcVJZcTCowW44',
      'WPSzBJTGDmkBWQy',
      'WQ5Hd8knW4ddIxzN',
      'WRv/W6TlW5BcOM7cVGRcICkHhwC',
      'efG1W7OWWPS4F2hcPW',
      'qqvPWQldLvqJW5KGW50w',
      'd1KfW7WPWOi7Da',
      'kMfhfCkH',
      'raH+WPtdLKGX',
      'iHtcRCoOWRBdIYZcSeBcKdFdOInHvCopsq',
      '572B5QoiWR3cM8kT',
      'r1tcGYNdGsvZW6pdS0hcOfpcO2xdLq',
      'WQj1W6XYW4VcS2tcVa',
      'W5dcV8oScmoaW7VcSSk2W7jx',
      'W6VcQv0',
      'xCoPW7BcSSk8',
      'l8koWRNdPq',
      'kCkEWQtdGmkZaCk0WRDDW6upzq',
      'W4TRW7/cHq',
      'W6P3b8kPW4ntkue',
      'WOPVWOdcOfJcQmkQffPJ',
      'vd7cTmkRWRa6ua',
      'W6PZhCkMW5H8kvNcMCok',
      'WRddT8oNvcC',
      'mmkvW5TaW5ddUq',
      'W7RdKvhcQcpcRW',
      'ACkBW6ddG8oV',
      'WO7dImoUWQNdJcpcI8os',
      'W6tcM2SLW58',
      'WQTGda',
      'W7tcH8k9W6dcMgRdHmkCWPe2W7z7maNdKmo0WOxcKHPmWPhcUXbcWRPPhmkuWRtdSmozee7cQLPZWQZcSCkVWPfyW4lcVXlcOqxdH8oGWOBdP2JcNHGNjCk6ca3dTZDEW6OfW6pcV8ojW4amW4FdSCkXoSkOFXlcVCkua3P2W7f1WRWznSkkW5r0i37dPmkAWRpdSIhdQc3cGb5vWRXtACk/gqldV8oLWOVcOCkKEcpcN3O8W7bqW5SlomkbbuhcVsRcO1ddJCovqHxdJZBdG8kLlXtcRmkgW6jdW7RcJJJdRSknvMRdGLTJdCo+WOfgjSkffSkWDCk7WRf1WRRcUCoqWR1clb7cTCo/BCkUW5ldU8kjCmoRW6RdH8kVWQWsWORcNCkDW7zjycqyW5FdSIfujtndW5pdR8kffIxdMtFcJG',
      'bfyYWQtcOmoTW4tcKG',
      'WP1IWR3cGxO',
      'W5NcS8oWb8okW4NcUSkTW7LeDL3dUdemW5m',
      'b8kSW7LJlSkM',
      'WOBdK1JdHd4ilCowWOC',
      'mHBcVe1zfg4zW4njhW',
      'v8kjW5BdLbO',
      'va55WOxdLq',
      'oCkjWPjpxa',
      'W4ZcVLpcHwC',
      'W7dcHMuKW7LOlvldKra',
      'kgiyWO3cPG',
      'WOZdImoPWQhdJcpcI8os',
      'q8kzW7/dQ8k7',
      'tqb5WOhdI1i1W7K',
      'EmoEWOJcTrnZWR8LW5rhkW',
      'eCkzWORdOSkr',
      'WRFdTCogkbldUaSWcmogrmo3WPdcQ8oy',
      '6ywT5QsDpCov',
      'WOZdRrZcNConlmo2',
      'W6GHzW',
      'fJdcP0WRWP/dUgeiWPhdGHLT',
      'qxFcS1tdMa',
      'WQ8qmSkVWPBcJbyNW5VdKSoVWRnj',
      'ESoqWQNcSYi',
      'W6X4gmkAW6S',
      'ihuHqa',
      'vs9HBZXMWQaX',
      'r8kkW7ddUmkYWOBcLH0',
      'W4RcU8o2b8oB',
      'wCkhW5JdNCoq',
      'jCkKWR1VsW',
      'WQuUnmoOxG',
      'vguXjbxcPXawcW',
      'WOFdRqRcVCoapa',
      'umkxW7/dUSkLWPVcIqS',
      'WRldOSohWPxdQq',
      'qmkDW6u',
      'WQ43p8oZtW',
      'ncdcQKb3',
      'WQlcKHS',
      'aSkDWQS',
      'affZiCk8',
      'b8k0W71VnG',
      'WOpdR2ldLY4',
      'W7zDWQZcKW',
      'fWxcKKzj',
      'oSkzW5ekW5xdUqFcSCk4CvbCW7ifkcVdIL/dQmkY',
      'uWjSWPddJv4MW5yGW4eqW6RcHa',
      'vCodW7lcQSkYgG',
      'nSksWR7dPmk0',
      'gd7cR2u',
      'W5JcVmoZeSoN',
      'W63cJNiQW49KoLC',
      'nLeMySkL',
      'uSklW5/dJXO',
      'kNhdKSoIW6H/fmklpSkOqutcQWypchqinCkkj8kZsZVcNHRcKIJdOfddPCo5W6TWWRGEoZusWPlcOSkWzSobDmk2aIBdRHxdQSkIg3LmDZRcMLH/WRbPcvH3pfbmW6pdJIJcG07cL8kGWQ7dS8oVW4icW5hcK8oMWPymW7RcJ8kZtH5ygYVdJd3dHmo5xmoIcmo6W6eYW6FcVqf/W6T1hYPYnHLmWQxcMxuipLldMgX4Emk5a1zTWRWSW6zPW507EXFcVmk2WQ/dHYJcG2FdMsHekvldLmonW4zoD8oLt8o+WQOvycNcON45zmkswCksWR1ozhnkWOOcW7FdTqPyW64mW67dOCo+W71IrbOZW43cHmorWO7cRMeYnCkytMPcWQZdGSkvW7xdLCoDdcTRW6aCumoans4CzgpcQG1YWP/dKr9SseFdKKjRwXdcNuXqBmkgWP/dQCoGCehcQ8kuW6eqBZlcJedcMu9kWR8FwhqDW43dMtdcG8kyW5X8w8oEBGBdOh/cSCoctmkXWPRcHLdcIYS5WOXZW6qQEhdcLb5pnSkBWPDIlGHxWRJdQ2eIpq/dJLhdM8kcfGFcOXj3WRflW57dMCoNW77cH8kjW5JdGfe8W5f/W4hdUGHMWPCfjWNcKtqrDSkGWONdNmoUzSkfaNWztSoeWPvTWOWrjSk7W6NdH8kBlMeMW4NcKComrmk/BmkaW51vhmo7W6K3kcRcQSkiW6a/emk2WOFdJvJdHCkwuCoXW7SlWPpcHCkNBfFcQhnIwh/dHahdL8obWOtdQSkwg3mwW6e9gqinWROtf8kFW7O1WQddQXhdQr4Uv8kBD2VcISo6WR3dSSkxW7dcTmoclCkyW6dcL8oHWRHoFCkDbCk8W4pcQcdcOmklqtRdP8k9DmoWoH/cMmkVW5RdHdpcMmoRl28sxSoWW4BdMSkknCkbBvxcQrpcSSoFWOG6icVdOWnSWPBcGCojW5BcR0aUW49tw2ibpSoWxspcP8kWW54EWODLWO3dUJtdGr/cTSo3WQLLW58db8ocpYH7a8kvWQFcV8oGW6/dSSkBqSkJymkCW7iFEb8OxWuQW4e+aqhdULO8WQ0gbSoGd8oumSoYkmksdmo9W63cSeTxpfZdKcuwhd1QkSkxACkNhNJcISoVcMvuW6lcNbFdP8kfWO7dSYRcS8o2WRudWRNdTSonW5xcHmoXyMZcTHZcG03cNNpcRCkwW6yWWP5bhHLusmouWQhcM8ohi8k+WQFdKJpdOmkQodnxgIBcKwOUhZbsWQG',
      'iqhcSvH5',
      'kmkEWR3dRSkXea',
      'WO7dHh3cQq',
      'x8otWOpcUYG',
      'W791WQVcULG',
      'pMu3tmktW4yYW5DSivq',
      'xCoiW6FcQCkYeqJcNdm',
      'fSkJW6PMj8k3W7G',
      'lmksWQpdQmkLgCkJ',
      'wKVcHxddSJjJW7i',
      'kKJdV8o1W6tdNhNcVH3cMwW',
      'nSkAWQNdPmk1bG',
      'WQGhj8kAWP/cMWqW',
      'hJZcTM83WPRdR3y',
      'd8kJW6XKmmkQWQL7',
      'W7PaWQ3cL18y',
      'WRJdVwNdRca',
      'A1VcU8oOWQhdHrm',
      'ASocWOCvWPVcOaBcOCkTFfzi',
      'WO3dK8oVWQxdMsFcImovW59ZWQu',
      'W4alW4PcWQhdVmoHW5JdVJfCkG',
      'nw4ZsSkmW7y',
      'WRVcRSka',
      'W6z7eCkLW5rupehcSmorWQaKxq',
      'WR97W6T+W43cS2RcVG',
      's2uRirZcUYeecMJdRsb6',
      'WO7dKbFcGmo6',
      'WOZdGd7cNSoo',
      'aCorWQhcTmoUa1NcK3m',
      'xSkdW6NdICoZ',
      'W5rSWPJcH1i',
      'WQmUpSoRxSk3WQS',
      'eI3dH8k+W7SJamoxlSo0ua',
      'WPddK1NdQcSckG',
      'jmkRWRDJxY0eCZFcOa',
      'nrVcSuzkfgKxW55cgqmQbNFcVa',
      'WQ3dVCovrJddQrOTbCobaCk8',
      'W5SZCr7dTG',
      'WQJdQmk0t8oxWRThW609kq7dUXPTWP7dQxTz',
      'xSomW77cRq',
      'vsVcISkXWOi',
      'qWbGWOhdI1O',
      'cCoffK/cImokW6lcIG',
      'WP3dImoZWRtdIIxcImop',
      'i8kBW59lW5y',
      'cmola07cQColW6RcLG',
      'WRyTkmoVt8kWWRaE',
      'nem6B8kK',
      'WQ3dVCovvc3dPW0',
      'WQzOW75TW5RcQhJcTW',
      'WRiuk8kj',
      'r8kzW6pdQCkYWOddLq',
      'WQ9OdCkVW47dR35SCW',
      'vGbHWPhdNa',
      'rmozWQRcGXe',
      'W7BdMLhcNsdcTCooW58',
      'ErLnrqO',
      'smklW4RdNW3dPq',
      'rmomW6hcR8k7cW',
      'q1ZcKgFdUY51W6tdRW',
      'AWPTyd4',
      'FSkBW6ldICoqEKS8imorWPG0wvtcMd7dS8o2oG',
      'CCojW53cSCkY',
      'WPGvyJT9',
      'W4RcUCkzWPa',
      'vrTGWOZdGq',
      'WPDWWP7cQLG',
      'w8odW7JcNSke',
      'xSkxW7xdQ8k7W5VcLHdcVGFdTX9/WPDuWPlcKJvGtXu',
      'umkxW6hdTW',
      'b8oleLm',
      'WRO4aCkJW6LWmmo9WO0',
      'WQFdRMZdMI0',
      'W5pcO8krWPa',
      'uCo/WRtcKXu',
      'sMuX',
      'WOJdHxVcS1y',
      'WOJdGxxcS1tcH8kdW5dcLSkQWPFdLWC+lrhcOLa',
      'xLBcL2/dOYL/W7K',
      'a10cWQFcOa',
      'zCkuW6FdVmkc',
      'tmouWQVcGaG',
      'itldOSocWQS',
      'WPldRSk5ECoy',
      'pSkiWP1axa',
      'n8kDW4vvW43dQXy',
      'WRRdK8oYWQ/dOG',
      'xComW6FcRCkSfGZcGW',
      'WQ8QWRldGmoNWO7cHYCaw8kmfmkkW4pdGJjof3u+WRjOW5hcRXf+WRRdIcRdOmoFESkKhSoCW4e5jwn1WQyUecTEW7dcRutcQW3dHWbwvfXDlcRdNCoLWOZcV8kDWRJcHmkjl8kkW6T7fCkcW7KugmkmddaoWP5FFSkykColW4FcKmodW7NdRXldJgZcICkSW40mW4VcUu81ECkvbHZdTCooWPaWbSkQwZxcPCkbWQyLWPq7AhrXq8kQWPJcH8kQWRhdHchdVJhdR8kPEepdVKRdRCoRW6qrdemhW5qqt8kHWRivsSklW4xcVCk7hSo6v8ougmoxohhcQCkaWO3cGmkXWOqvBCkrv8oCWONdSSoiW6BcUmkIWRHdW4BdSSk5WQGMWQpdO8kPW44jW4u7W5akW4PCWR7cJ8oTWRGjsmoPW4ldOCoIWQpcJgxcLhRdG8kuW67cMCkMW7NcPCkweCk5W5ecWR4RWQBdL8kAW5z3WPPKnCoJzWtcJuzOCCkFW7uwWPiqW6PRWPddTmohWQ7cP8k4WPVcKwW0W65REqhcLepdPSkHACkpFSkkWQJcVmoxWPeofb1QW4vodchdRIGryg7cIftdKSoVmCkKW7Keu0FdLCkDBbZcRCohnmoWW5jfWRH5W5TZW4XvWO9TC8oygWrvB8kZWOjhW69okGtcIh8SECoBgmobW5/dT8kNW6HzW6X9FSoJjrJdUmopWPHQeCk3d2hdTc/dQ8oxiSkLWO1GW7vMWRjWWOa/WOpcIIvdxq/dKSo9WRNdHt/dJ8okmthcLSo0W6lcQIZcSCkJWQldHmoLWQvsDsJcUghdHqHHwstdKMZdN8k8WOjbD8kgWQxdK8o+jmorW5bSW6adeHZcG8opc0fveCo0W4FdJSomcmkSWQNdV8kYW4PJW6WwWPldNHtcRCkpdSkFWPCYWRaRASk4W7KIhtpdOMNcVI7cPmkYc1FcN8kiW4iZW509htVdR2ipWP8UAW0XWRXsW6tdPCkgmcNcVLajWRhcJGjkWPXLW4rkW44ydCk0WRTGxmkOgCkRWPGmbSk3WO7dOmomumk0W48WWOtcNWZcOcTeEmoxW5DBWQddRSkwWRBcSKniaCkgW693AYhcKXFdRgRcHv/dQseJW7WKEqNdJmoKD8oIWQf0W6aVWR41m0aOjGtcQqBdOrRdReFcOmoaW7/cMZWCrdhcPe7cUGGXW6pcGmoVeCo1aSoBDCk6bsZcGCo3WR4yWRjrW4OUWPdcL0hdJXFcIcdcOYvPW6qdWONcLCkkgCkhW4fHfGPyWOjqW7nuWReitSkJWRuKWOvrWP4/iSkunx5l',
      'CCoEWPNcGqLEWQOTW6DsoLhcJW',
      'qCoYWQHcDCkfWOK',
      'WOBdK1JdHd4ilCow',
      'bJ3dGmos',
      'WQldLJBcVCod',
      'kHldMCkSWRlcRSkvWQ8',
      'WReJl8oJsq',
      'WQWAl8kcWO7cMG',
      'BCkZW67dLCoL',
      'WQZdT8ovzJddUda',
      'wM8RmrJcObSacG',
      'x3aclrO',
      'WRNcPCkkWRm+W5BdUHWjW4xcKgjCW5S',
      'y8khW4hdICoUCW',
      'j2K2xmkiWQK',
      'W6NcOKNcRq',
      'W57cQmku',
      'g8kJWRTZqde',
      'AmoIWRGHySoJW6G3W5qYwCkAeSo0W5n7wxxdP8kyWQdcUCkEW5/dPCoqEeVdRXVcHmkKCmoGW4y5m8k7vGZdO0tcUmozWRdcNb/cUbdcS8oIW5xcHvbEWPVdQIv/W4Six0anDSkIWQGkf8kxdcddLSk0p8o1WPRdOSkuW5vNc8o5oCk4W77dV3pcSstcTsZdUmoNW5LwWQ/cLelcG8oAWRddVNyrW6vhW4banNiPWPWIW5rawCk1WPBdMWxdVXbuW7jwWRCZWOH3W7ZcSxxdIsxcThpdIvnCqelcIXNdHvq2cCoxrCkRW5VdGcmoWR8fqLjhW5yTECokdJ3cSmofWO5lj1RdMZJdMqtdHJGSySkag8o5vxNdGd3dSmofW4LfdGNcLKZcIHVdKmkdxCoGWQi/W4itamkrk3FcK8kgqXmWW4PvW4VcIM8SW5hcHhpdQ8o9DmkiW6/dOCk4eSovfwNcOmkZW74gW5/cUxlcQmoEpmoFWPddL8ozywWQpdzYr8ovW6WpnmolW4q+W7ypouJcKLdcUGvpWPxdT8oLWPjcW4/cL8kFemkxeaDCW4JdKCo8iwFdHub/kCoiWOFdTCkhW7NdNSkSftKAwIldNwZcKXKgiH9kzmoAwCk/W4fvWQ8vWQ7dVSoNWR/dOt7dPCkNW7JdH8khid7cQSo0WRTAW4NdSrDfWQa0sGVdNSkltruGW5NcOmktW5b0gCk9owr+eW',
      'as/dOmosWQZcPG',
      'WQf/W6TAW4VcRNNcUZRcNCkHeq',
      'W7NcQe3cLvaPFtFdVHxcM8kK',
      'W4CnW5DgWRZdOmoOW6W',
      'W7rdWQBcNfy',
      'W6/dJLpcHaO',
      'uSk2W7tdV8kK',
      'E8oAWPNcTbjpWQ4T',
      'eKuDW7e0',
      'WORdLCo8WRBdNtJcL8oz',
      'tI95FYS',
      'WRv2W6T9W7pcTwRcTJ3cMG',
      'W7RcOKRcVva0yda',
      'W7hcRCoZjSob',
      'WQaqcSoJsa',
      'xCocW7FcRCkYda',
      'DCouWOpcPrjjWQmY',
      'bmkNWQ0',
      'eCkRWQFdQCka',
      'ig8HqCkuW7OTW50',
      'W65MmCkIW7a',
      'x8kzW7pdQ8k7WR3cIWZcSH/dQaT0',
      'WRFcR8kqWQyZW5hdSqOi',
      'sgJcKeZdKG',
      'WPZdHSoUWQxdRc/cNmoiW4rKWRm',
      'WRugc8kjWONcGq',
      'WOpdSt3cSmofbCo3hmkShmo7W4i',
      'amobfepcMCogW4RcGG',
      'q1RcGKNdMG',
      'W7r+gSk8',
      'W5KlCcNdTmok',
      'kSkuWQC',
      'F8kAW6xdISoYAvy/',
      'WRiGc8kBW4m',
      'WReumSkjWOJcGby5',
      'W7f3h8k5W5q',
      'gmkwW65jdW',
      'WRBcTq3cN2a',
      'lmkAWRZdTmkI',
      'BSokWP3cQse',
      'vw8KittcPHeafa',
      'iCkQW5vJmG',
      '57Y15QkyuX3dISo8WRi',
      'W7tcQCkgWRFdTa',
      'WRC6f8kYW6C',
      'WPNdL8orWQtdVW',
      'W6r5hCk4W4nvjf4',
      'WOuBEZj3',
      'hmkBW43dSuagW69HWPutBHJdGmkiuv/dSCkvi3SqkJ/dNsrbxSopcXddRL4mbXmkW5TQW5PKDCkjW6BcU8oXyXOpW6Ldi1ZdH1tcHSkbW4BcRcShEmkEEa1MWQ/dQSoGgSkZWOldK8k+DMFdP8k9W6VdNN/dUWlcVdVcL28eksdcL2pcNbiAWORcK10iWQZdQCkvvXGoW78tr0FdLSkqWOhcN2FcJwySoSo5W5qsW5VcNSogifPFW5HdwIHYW79ZDb/dKsnmWQWgWOe9mWyGW4ldMGtdJJFdHrGLEmonWQzrWQbdjCkNw8k4WRjxpq3dVLmfWRJcNXhdN37dLmkwW5tcUCkxACk6WQtcHaz+WPDgz8kLaSoptSoJaY1iaeJdN193CmkRySkcgIuoWRurh8krECoJWOVcHq8KWQWhh2FcTSk2WQNcLSoZn1vBaX8/xbNcPbnwWOzgoSkwawvavSkNWQ/cHgTHWO7dNmo0W78eh8oXWQJdPhNcSudcKvtdNSk7W6TVWQHuENv/W59xW58br0zmgCkQW47dJCoaW7/dMmkfcSosefxdSmoVymoIcCoWWQVcG8k2hmklqmkduSk2WOVdPKLgvHzyWOSOE8oXWP7dLmkiW6bvpmoPW6ddSmofWOBdUSkobH8En2hdUMlcQSk7hJVcS1dcGdhcSWq3W4lcGmksW7KXW59+WRpcRCouW7L9CKxcRhZcTCoxWONdRIW8WPDdWOZcVSkNh8onW5pdLCoFWRpcM1K8W5KoW6/cTu3dOmoif8kDWPzsWRddRCkEhCkmW67dL33dPJ0qymk3WRviFxeVB3hdKhhcMNqwuCktBulcLZ7dJXlcNIyVfa06W5RcLNHPWRtdJSo7WRLlWRbBEmkLmCkfW5auW4uimHtdLCkBDhRcL8oQFHntamoYwNabW4TJwudcU2auWRjvh1v+W7ddI8kjemohc8kcWP9ZwZxcIcW+WQFcRmkvWPVdSg/cPIBcJ1xcU8kHzeCHnsHyjaJcM8kUWPy1WQe7W7n4W7ZcVSovuSkuFxJdUuZdKCkhgsJcRSokWO1dWRZdStVcL8oCWOldJ8kWoSkFWRVcPqaDBdLSlmoIWRldNSoSkCoxg8kRWQqiD010CvjeghxdImoDD8kmtSo6W6CgfmoWBG5zpmkvuKlcPmo0mSkvW6ZdImo5D8oUEeldKv/dUw5nsCoJEexdH2/cVvddR8kSbWBcGmobWOOlcuVdK2bjWPRcMaldIW3cKSkIWQpdOqNcJYudW5HsW6hdTmo3W5xcMSo0WQePqf5yW5JcMrldUxqHDSoCW6n0W6hcNfz/W4BcKtpdPSkSpSkwoSoqWPVdN8kFvJbXW47dICkRWQerEWKNtmkIW6JcG8kzW7CYW659BmoxjwNcH8oEDGuckZdcO33cR8kydSo3ldSqW6NcMmkejSk0vgijW7qrWQ/dH33dISkpWOBdTNBcPwnuWRS9W4ldK18Hp8odxmk5hSkFCqNcI8oDBSkPy8kKhv/cUwKaW5niW5KykSkBWOuFzfH7pmkbDfbaW4e7WO3cQmkpytxcUdFcNYlcTmkvWPesWQnDWQddNI3cHKLIqsFdVwlcTedcKmozW5RdGmkzc8kaomkuWPDPvmosWPlcIdmeW7/dH15OWR4VzxfGd8oFW73dHu7dKfeZW5RcSeS2xtddT8oNh1xcUSosmSoeiwzxW5LqWOz/vx/dJ8oHWPJdTSokW5VdLSkKW5ZcTaJcRdVcP8kmlLldV8ogk8ofFZtdTCkICwlcGCo3s8keWPJcHSksW7byW6BcUxJcQCoKW4CFzSoCkXBdKCkDW6CqvSk6W7mPbeBcUbldMmo+W71tW6BdNbNcG8olW4ddKbz6W4mkW7nhWQZcMdDVu8oWWR7dR8oUW5yzW4DHqmooldVcVCkZW50aACoEnSkEpSoOWRVcVSoGW7VcMfaLWRBcGCo2bI09WRddMSoWzu1Ulmk2nvKsW5/cLSknueXGWPRcVSooAmoHW4akpInwWPtcQCoQohzfW67dL8krcCorW43cTfRdVCoqWRL5v8kOwJj/A8oLW7DGWOKpbcZdKmkedt9vcSoMbI/cRuGAWOHeW5TGW6OtWOZdKdu6s8kpyKBcG8o+WPtdPmobfxa9W4ldJ8khWPVcJLDUWRqXW5uduCo8dwJcJmkescxdQte/W6DSiYO+WOWIWPbHWO/cHSoOEITGumk0vCopWRzhWQRcKZaUmmoTWONcVI4srfBcIXlcNwJdM8o8W40VBCkXWQ3cUtZdISovzLr9W7TlWQ7dKbNdIWntj2utWRPve8ohletdT1uSfGtcKWpdRKf/W5hcIfJdGtnyWPCcW6tcQeddQ8kcFtZcT8o4vKZdTmkUuSogW4ddMfygWRGreMZcGqbPWOHFW5SmcSkJnCkJWO0qW6ZcMf0',
      'E8oqWORcPsG',
      'jhDupCkHWOe',
      'WRpcMqZcHN0Fhga',
      'W5mqxcldOmoheCkcFmoeW7FcV8kIEhKsWRa',
      'WRpdT8ofyIJdRG',
      'i0S0EmkX',
      'WQFdUXJcRmoM',
      'W7iTvcVdHG',
      'fKu7W7aUWOm',
      'xmoIWOVcKGq',
      'W6tdNvtcOsO',
      'tt7cLSkNWQrWxmoECCoKfaRcPufdsG',
      'W5lcRCkBWPhdRtRcTCo9sq',
      'ud3cH8kSWQe5w8ozC8o7',
      'W7dcGhuMW4LKnfxcGG',
      'WQRdPmkX',
      'W77cSSobc8oQ',
      'lxvCkSk3WOZcLJm',
      'o8kFWRq',
      'hmojighcNq',
      'WOZdQSokfmoWW7FcV8kg',
      'qCkhW5RdIqZdV0NdTG',
      'W7WAW69WWOO',
      'oCkuWRZdRSk1',
      'dSkTW7LL',
      'nCoEcgtcKW',
      'Cd3cUSkdWOW',
      'bdpdJmotWPlcOvddMIy',
      'W5f4W7pcJSk0W4JdIhvn',
      'WPRdK0RdIqyalmoRW5/dGXNdHYBdRZG',
      'WQDLa8k8W7ZdTgj3Dq',
      'WRFcMqVcJMu',
      'W4S3W4hdUWNdT8o8mhzPE8kslW',
      'W50xwsNdQ8or',
      'dvKcW7qPWO4m',
      'WRldUCodyIJdRG',
      'hYRdTW',
      'sLZcKM/dTcvtW7JdQv3dPW',
      'r8kcW5ldLbJdS1xdQwxcPCksD8kiWQZcO8khba',
      'A1VcUSoUWR3dJI7cSvO',
      'WOJdTmouqYS',
      'W7zlWQ0',
      'W7dcMu/cNgK',
      'EmouWP/cVafkWQy7W5a',
      'WQuTk8o/',
      'WQv7W6T+W40',
      'W6tcHNu/W5j+pG',
      'zMhcTNxdSG',
      'WRuNlW',
      'x283abJcQH0',
      'ACkBW6ldMmoVDfC/',
      'W7NcQe3cKLyYyG3dRaJcISkZWOhcPSohDI3cICoAWR4LzG',
      'hv01WQxcU8o3',
      'WO3dGSoPWPpdKtdcGq',
      'qW5JWPddMfi6W7a7W6qAW6lcLra',
      'nSkwW7nNba',
      'WRFdTCogkbldUaSWcmogrSoSW47cTCorWQa',
      'ESkbW7/dHa',
      'W6NcV1ZcTva4sJldUq3cISkVWPW',
      'nxy3rSku',
      'WO3dKmkXC8o/',
      'e8ksWPDIFa',
      'W7pcJmosm8oM',
      'W63cIMGLW5rloK/dLWC',
      'tttcHSkJWQqXuCoyBq',
      'WPj3WO9mja',
      'W4CzssNdTq',
      '57+U5QoWW4ddHmkn',
      'DKtcRSoQWRZdLdi',
      'ELVcV8oW',
      'ACkhW6xdVCo3cCo0WQioW6Xp',
      'WQRdSSkWqa',
      'jmkvW4jaW5a',
      'WQNdVaVdPrzSpq',
      'W63cQe3cG0SVyZRdJa/cNmkOWPZcRmojDa',
      'uSkCW7xdNSk4WP3cIWW',
      'emkJW6fIi8kWWRXYWOy',
      'u8ocW6pcSq',
      'WQOTpa',
      'cSoGdxNcVa',
      'iX3cUu5ca1mf',
      'WP7dH33cU1ZcKmkeW5K',
      '576i5QgRxSoGWRHgBW',
      'WPVdHMFcTeFcI8kgW4q',
      'WORcOs3cTLS',
      'BMi1ms8',
      'smoCW6pcSmkF',
      'xxJcQuNdHW',
      'WORdJxa',
      'WRuNl8oht8kTWQ0zW4rsnmkr',
      'tddcI8kNWROS',
      'ENNcJSogWQC',
      'W7NcNMpcOMO',
      'aH/dGSk+WOC',
      'fGRdKZ7cOczFW5ZdL3ddMG',
      'W6JcTSouWRTUW4pcOaviW67dJa',
      'efW/',
      'WPxdK0FdGJG',
      'WQWNc8k2W7X8',
      'W6NcNeSQW45L',
      'W6jGfSkIW4u',
      'vI94BW',
      'W7pcQ2adW7u',
      'vmkgW4BdLbBdSfddOxdcKW',
      'j3SdW4uw',
      'W6tdNvdcOYO',
      'WP/dImofWPpdGa',
      'WR7dKr/cSmo+',
      'WOBdJgdcVf/cJmkmW5NcNq',
      'WOpdSspcVCoFjW',
      'WPJdMxJcTeC',
      'jxLbpmk2WOZcGtO',
      'dtdcS2KH',
      'tCkzW77dNWZdVG',
      'W4VcS8oXc8olW5hcTG',
      'm288xmkbW7OSW5z/aLJcGfvv',
      'rSkIW7tdNCo3',
      'h1uJWQFcOa',
      'W4/cV8oSbSomW4/cKCkUW7HkDW',
      'vITWBJ1AWRe5FGz9',
      'WQ8DbCksW5K',
      'WO3dHMBcMflcGCkb',
      'pmo9oa',
      'WO3dHmo8WQZdNq',
      'WQBdOCkHrmocWRDmW7S',
      'WRBcHXZcQL8',
      'W6FcRflcSxm4FcO',
      'WO3dGSoP',
      'drxdOmoBWOC',
      'W6NcQ2NcNNa',
      'W50zssNdTColeCka',
      'W5vUW77cO8kD',
      'ELVcOCo9WQFdJYFcSq',
      'EmkrW6ldImo4Av4+',
      'gNu5W6mh',
      'WRqTlSoHu8k3WROdW5u',
      'qZ7cN8kYWR0RuCo9E8o6fqhdS2HawJLjECoz',
      'nb3cLxju',
      'maVcSuL9ee0f',
      'WPWzlCk5W6m',
      'tcTMFG',
      'gLGxW7CXWO4',
      'WQVdQmofzJddUa',
      'sw82la3cObOl',
      'emoiWQFcV8kvW4BdLa',
      'WQdcLXlcINSx',
      'ALhcO8oSWRBdLa',
      'gxfzlCkX',
      'WQXTWRXmca',
      'WPVdI8o4WRBdMt7cJCotW58',
      'WQmdgCkFW4u',
      'btxdImo0WRdcQ1ldMspcQSo5fCoBWRC',
      'nvC4WQxcUa',
      'zcvgWRFdJW',
      'W4RcQmoJeSo9',
      'AmkfW5RdOCoe',
      'WOHMWOLucG',
      'r8kzW6pdQCkYWOa',
      'WQ3dK8oTWPddOG',
      'W5RcTSo2bmoLW5lcSSkMW7jx',
      'WP/dJ3JdHsmRk8onW7ddGXNdPW',
      'A8kwW5n0W6ddSHq',
      'u8ocW73cVmk/fGpcIJlcVmoyWPpdIhzo',
      'WQFcNW3cIMOcgMekz8oKqSoeW5TgW5e',
      'WP8wDdTGvCkUWOFcJG',
      'WQX+WRvlgq',
      'W7BdMLe',
      'ELJcOmoNWRa',
      'WQf5W7P1W5O',
      'WR18W7LOW5RcRLZcUZZcNmk9',
      'eSo8d2hcVa',
      'W4hdHfJcHGy',
      'WRGZcW',
      'WR0riG',
      'WPNdHMdcVeFcI8kgW4q',
      'WQZcQ8kiWRi6',
      'WRmYp8oNt8k8',
      'W4mDsq3dS8owaSkfB8oyW6lcTq',
      'WPFdLmoqWQxdIYi',
      'iH3cLuDD',
      'rG5/WQhdMfG8',
      'W40rW7rxWR3dPW',
      'W5JcTmoJamofW5G',
      'ud7cM8kSWRWS',
      'W5ygW6T+WPW',
      'umkyW5ldJbRdPeZdTG',
      'emkTW61MkSkTWQ1KWOC',
      'ghOiWORcJq',
      'W5VcNSoTeCoO',
      'WR8Dl8kaWP7cMXi7',
      'WQJcR8kkWQm6W43dSqS',
      'rZ3cHSkKWOqWvCopE8o6',
      'WOtdMuBdGJWe',
      'jv8rW5iX',
      'hf4FW7K5WPKXDa',
      'WOBdGhRcM1RcJSkDW4/cNa',
      'g8kNWRDXwcO',
      'WOxdJhhcUudcT8kzW47cJ8kSWP0',
      'zmkDW6hdLmoE',
      'WPFdJK7dJa',
      'WPhdVvNdRd8',
      'W6voWRdcKviyDSobAG',
      'hmk/W79aW4G',
      'gJ3dG8otWRdcOW',
      'cZ7cRhuWWPRdTN0',
      'WQRcMbhcINS+j0mO',
      'tcfL',
      'WRGAk8kPWPBcJbOWW7BdIq',
      'W4azuYNdQW',
      'WRaAiq',
      'CeFcGSoSWQBdIa',
      'W7vdWQBcNv44DSowFrVdICkEqa',
      'WPLRWPZcOLxcVmkGca',
      'tCkhW5tcLq/dS1BdV3lcLCoommkrWQ/cRq',
      'q8oiW6FcGCkWgWJcLW',
      'W6hdN1NcUcO',
      'q8kpW5ZdLXRdOK3dQG',
      'WQGunmklWP/cNuC',
      'fSkMWR1twICdyXRcPxfgkCoYrCod',
      'W7BcJMO6W5G',
      'WRv2W6PzW7q',
      'W5NcUve+W5e',
      'WPVdHwhcS1RcHmkgW5JcG8kR',
      'wSklW4ldPSk+WR7cJa3cKaZdSa0',
      'W4bNW7VcK8k0W4FdKwi',
      'eLC1WRBcVCoWW4xcKG',
      'W4zLW7ZcLmk1W4hdI3q',
      'W4VcRCkcWPpdMYe',
      'WQOukSkzWP8',
      'b8kVW7f1',
      'WROrgmknW6q',
      'o8klWQddPmkPeCkfWRzwW7WF',
      'W5fRW6dcH8kIW5O',
      'umkcW5RdLdpdT13dTNe',
      'mtVdQSoeWP4',
      'aCoka0JcLSog',
      'WOZdHSoKWQZdNspcG8ou',
      'uGrJWOddNeKXW6C',
      'pM0QF8kH',
      'WPpdKKRdJYye',
      'jHFdIq',
      'xCkDW7tdQSkKWQhcLrZcTHNdUW',
      'wsPX',
      'umkdW57dNW',
      'bmkYWRv/wa',
      'oNDbomkWWOZcJZG',
      'WRpdUCovyJBdTaKO',
      'W7ToWQVcL18y',
      'gxCgW5a3',
      'oSkKW6riW4W',
    ].concat(
      (function () {
        return [
          't0NcLgpdUsrtW7/dTv/dTW',
          'WRiqi8kiWONcVaCXW7NdICoM',
          'W6X1nCkIW6e',
          'W4KnW4XbWQS',
          'nmkrW5LiW4FdRahcRq',
          'vmoeW6dcUmkXdaG',
          'W6hcNwmU',
          'bCkTWQ13wcScEq',
          'pw82tCkmW6a',
          'ALhcU8opWQFdJYBcGuJcIdZdThG',
          'W5qrtYNdPmowgCkdy8omW7RcNmkiCh0j',
          'r8klW57dNW3dTW',
          'W6TZhCkRW4vs',
          'WPuxDcPZDmkuWQ/cSdPHsGPPWQG',
          'W5lcLgm',
          'oSkhW6vnW4VdKHRcOCknFLfj',
          'sc9NBYb7',
          'W7ldK1ZcUq',
          'hmkrWQTsBq',
          'iM8Nt8kiW70NW4b+',
          'WQSJl8oJsCkWWR4C',
          'W4bKW7pcGSkRW4S',
          'b1K3WRFcQG',
          'ngKHwmkpW6aNW7r/oKtcLa',
          'W5iOW51gWQ8',
          'uJtcNmkMWQ0TuCoz',
          'x8o5W53cJ8kF',
          'AL3cTCoS',
          'dtldJmovWRpcQW',
          'y8oiWO7cGrC',
          'W7tdKvNcOJ0',
          'W4pcHuOUW7u',
          'WQT8WRHucmoFW5dcTq',
          'W7dcGhuMW4LKnfu',
          'fmkTWQLV',
          'WRf7W7j+W43cUW',
          'q0rUWR7dU8oJWPRcNxa4W5a',
          'sIT4ztHQ',
          'qSkEW7/dPmk+',
          'uSkCW7xdNSk2WOFcLG',
          'fLSrWROlWO43BNRcSmkXbSkgA8k2',
          'wYz0zcLQWPmYAHvWhmkRWO/dVa',
          'W5eiW7rlWQO',
          'WRdcLrRcGwW',
          'WPddHeRdJbOamCol',
          'WRFdUSkIqSkjWP3dS8oIWRCfoJhcSxzeWOFcSMZcOqmVld/cPW3dMmoedgWkjNKIWP0mW4RdG8kMbCknpfZdVSopBeBdGSkMWRitWPhcUJldHmojB8kQWQ/cJ3mEz8kwW4jIvYhdJmoaaSoSW4SGW447amo0WOjOvmkKgxFcIZWoWQlcVCk2xeyVWR1SW69TW4lcSYKAW4j+WR7dTwVcOd8fWRhdSdFdQCoYw2ZcQmkcW4Xzt8ktusHDW71UWOP7W7ZdM8osz8kwcrtdTdZcMvNdOSobC3NcUXRcUmkSWRtdKWDEW5BdS1erDmoXyq8WkSkrsSorbmoXcxHfWRFdOI3cPZxcHxXKWRhdI8khW6rfgL7cSX7dOCk1WOtdSSotE8kBWOG2EhbyWRv9kZlcP0JcTSktAbWEWPRcSgRcGZrTnSkJWPXAWQKoWPNcVCo1WONcRSkiW6rWbSoLFhutsWFcQmooW6JcNNpcVwtcVSoeWPdcHdqHW5DDW5T0WP7dRSobW4pdGSoximo7WQnZW5xcRaldLcRcVKxdNSkyW6ZdG8oyWQW5W7BcKCoeomkNWRxdVJVdQmkIW4ZdMsD0j8kGWO7cVY5UpCk1kd3cQeiYW6qBW74Kl8khWQmIhctcQmkMW6PBiLqdASk/WOJcLmozW6BcHmo7W4KMgSopWR4sgs5wk17cUa98WPC2u8ohkNxdMvFcN8k6W6GMzmoGWQH/zum1imkLW7hcHSoXWQpcU8kpkCkhWOjWh0VcUSocW758W7SPymkfe8oEjYpcNK0uW55ulcZcJSkoWRWwzmoNWOHduKVdGCohymkpWQRdQCoYWPr7o8kBW7n2WPSMr8oqW4lcQaCGxtTPWOtcS1jqee4pBMvEWRRcGN9/WR3dUHFdRCoDWPJcJrtdG8k9WPldUumtEbq1W7tcQ8kleSkQgSk2WP1jW6xcKbdcO8kTfCoGWO4VW6/dTmo9WPWdW54NWQ1ga3/dVsqVeSk0W6ZdLhLmW5zFpK1QtmoqW5FdMmomWO/cQwhdRcbMW70xW6CzWR7cJLDPWO/cOCklDSkVCCoOW4lcMmofdCkvWOtcVHVdPxHyWQRdTCk7WQnwW7qwmq92WOr1W5GJW6hcGglcMbVcHJ8iW7hcG8oTWR7cM37cLmoEpSolW7BdGCoFW7pcQXW9l8kvWQdcU3NdKN3cHGJcVmkwW4ZcLH3dUNGeWQ/dSSkXWRPyoSoCbNhdRbS7sCoWx8oZW5JcPmkcx8oBlCkpj0DJkCkhW63cLKNcMJvsqbOnBSo9A3GnzmkeW5ZcTmogWOxdTsxdMCoHWR/dS8kJW5tdQHtcMmowW4xcGYZcTqrpWOSQW7qbWQtdQx5av8keW6ZcPCkRbmosyWDNWOW0W5OfW7JdSmoyxY5OW4hcNCkpqSofWRDwebeWWRLNyCkKbZDAWOWncCkvWPFdM8k/dCkpFmopWQ4gWQpdU8kwm8oyWQZcTNJcU8oTWOnsW4ddMmo5WOZcGuhcRGVdPvLWW5m3W7JdRSk6amo3yg8TqSoKDetdUSkqW4ldKmojrSk5W4hdVmk7W4tcKCosrG3dNeTqpSkjgSolWO41g8kGumo2WQ9PWRVcU8oXWOr+kxCmmbtcJczzks/cSw9oFCoFW5TpmqH9w8kXvr1jWQX1WQiWWO99WOqhfvy+W6jkW5JcGeldV1iIm8oEW6u+DgRcHv8JW5JcRWhcLCkMjv9xWQhcVtOvWPbbW6RcL8oJWOPTlMimpCkaWP/cUuZdICodECo1cSkolG19W6b4W7VdG8kFDXedW7qMgWy8DfO2W5jOo3BdP8kOWP7dTSk+v0lcHqZcSr7dVmkmWRzXWQyzWRmAWP3cIwywWR3dP8kKeuLeW6xdVL/dOvBcMIG0WQ9bW48mas9zpHBdLNFcPNqcb8oKWODqWRm2W605cfBdMmklW58EW5JdTmkAW73dKCoAgJBdSSkeCtRcLwRcLCkHmbRdKmoqWRxcNSk3ngnuWRj4c03dTJpdQHX6juyuWRBdTtVcGSkbW5ywW5/cVg5wrSoHW73dQ8kFW58MpSk9WO91fCo7gSkeW6lcGr1ae8kfWR8IbCo3WPFcS0pcH8kaW6NcMSoJWPNdPCkby8kacLBcKCoczSkToY0Lj8kSWQKllmobo8oYsHVdOvfhW584WQPMWRGRdCo1WRbeW78ZF1RcMSolWO1ZWOXgfbrrctLjsNj/mHXyW4v1WQ7dJSoKmCkczZ/cGCoGWOdcK3pcIuZcLmkiWOJcL8kRWPxdNSkyjmo4ug/dMmk7FSooW5XGuhuNuSoeD8ontSopW63cI1CfWQjeu8ouW5VdMmoqwwhcQmktFSoVWR7cSuddL8kvCSkfWRSyW6NdK1lcRfy+umosx0RcKIVcNMpcJSkUWQqVpZnMm8kuWPecW4KDW6XVnmovWQhcNSoUw8o0mmoBW5nmqmoGWOLoW48HaSkrW78KWQj4',
          'D1xcOSoS',
          'i3aGqCkuW7yX',
          'WQ4AmSknWO7cJc0',
          'p8krW5HcW5BdSa',
          'qqvP',
          'WQfUW6z3W5O',
          'W7mwAGVdKq',
          'W7VcNCoslmob',
          'kwPqoa',
          'WQddPvJcJL0',
          'WObmhCkYW6i',
          'vcpcK8k0WQ0Tr8oo',
          'vqjsyIy',
          'WRjVWQ1hh8oeW4lcVa',
          'DCouWP3cQa',
          'WO5uWRnekq',
          'kSkLW4fXW60',
          'sLBcIupdUYv9W7ldSKC',
          'WRVdTCoiDdFdTb4H',
          'ecVdRSkFWOO',
          'W7lcIMGRW5H/pKK',
          'n8krW4bmW4hdVspcVCkYELn8W74qltC',
          'aLaYWRi',
          'xMWXiZxcPHqbhx0',
          'BmkBW77dQCo8Efm',
          'gLyWWPtcLq',
          'cZddGSozWRO',
          'WQDXd8kdW4S',
          'W4rAWOZcLLK',
          'qW5HWOVdIW',
          'qHXhyIG',
          'W6GrsrBdGq',
          'W4antIq',
          'WQlcJbBcGNWcgW',
          'b8ofd0/cImoc',
          'WQnAWQtcI18',
          'W4CnW4Ll',
          'WRG6dCk+W613kSo0WRpcJZFcSwm',
          'WQ3dVCovvcFdVaqLfq',
          'evmtW7eUWR4KFNtcTSoN',
          'W6zYfW',
          'hve1WQFcVa',
          'WRz+W6zPW7i',
          'o3TunCkH',
          'rsFcL8kSWRW',
          'rmkzW6xdQ8kL',
          'W7RcV1ZcOKeZEXRdUqBcJSk0WOtcSq',
          'g1maW7W+WO4NvhtcR8oNwW',
          'W7n5b8kTW50',
          'WR/dHmk4t8o5',
          'WQ9HWQO',
          'WRPJWRbrhSoeW5xcTq',
          '576n5QgjD8oBW4RcTKy',
          'D2/cT3ZdJq',
          'oXlcPe1Fgf8A',
          'i3u8EmkpW6aRW4DKoL8',
          'ECkxW63dGmo4',
          'xIvCqdC',
          'zmoEWOpcTqvuWQOZ',
          'EfdcQ8omWQpdHsxcTMxcJcRdSNX6qSor',
          'gJxcUW',
          'WQlcMX3cHMWyb2iOB8oVzSoz',
          'WRdcHHpcHN0',
          'W77cR17cPhq',
          'W7aJW5xdRHhdRSoLrHCWmmoWFxJdS8kXbIlcLbhcGmkkWQ7dMCkgW5tdOHtdK8k9xgZcR0e1W4DIW44GW4/dI8kAuxqzu1GmFLdcRe/cOSkMWPBcMY/dIhKRWO7dNSkHWPpdGsNdG8oDuSkaFqxcNNX9yCkUwx7dGW7dSCkvlI86W4JcKG9ohhjnWPBcQeldOgPBW7ldISkYW7dcSCkMbqFcOmkioKxcJ3mrW6ddRCo+WP5vuNniuJSWBZNdR8ofW6tdHhaBWOyEtmkpWRz3CK5uWORcUL3cHCoXbSkgW57cVrhcV2xcT8kwW7rZW4C8zMFcUCoiDdjigb7dUmkUW4Opnb/cJg7dIrnIbZ8cWP/dSColW4ZdUmo1WQPzsv1IzmkZcSoCW6X1WQ7cIwVcUdBdTL3cKmoCW73cRCk+cxtdUComW5tdRZtdT3/dPCkTbCo9W74AWRtdLepdHCk1WQlcQaqquHddSZNcTG3cUrTEvmkfk8oFnCktC03cNmoqiSo4W4jIxSorW7ZdQCoNW4nfWPySxLVcRK3dK8kvW6f/W6D0b8kGpsFcTSkcWPZdTcK6omo0cWNcK8k5W6lcPuBcUJH0W5Sqg8oyjfxdN8oKWOJdHSofWQRdN0ldKa/dKYq6mmoifmosDCkjz8ogW5tcK8oIFtS8CSkiomkQW67dOgVdL8oHWOVdJwFdJmkIAGpdT8o0eJegamk8guRdPCoKWP3cL0PjtepcOuCGW6HnW73dTqedCfXWW5XhW7LVtSoEEvxdJNNcLGNcKIFdKSopWRm3W47cLSkqW6f5WPTyxmkHd8kiW6RcUxtcTCkxW4JdPNNdHsHQWQ/cUCktW7pcSmo7oxZdIeNcK8omeXjtAeZdHCo0WQZdOdH/WRJcJmoFsCkrvdFcKadcJSoIWOHKrhhcJmoXW6VdMhqqWOvskqbfWQdcT8otW69aW4tcMCkqW50DWOy8AmkJW4JdHu/dI8o1FSkTWP7dTeldIYRdQSosyaDRtmoitSksjSo9Fmo5E8kaW7dcVeVdNIvTW7ZcVX8FpbHzxSo6bqXzW4jaWQ/cUSk8W5uIW5j7hSoVWQfDW7ZdP8kkftBcOvODBKbkWPrptSouWRaHpxbgWPJcPCoi',
          'fJdcQ3K2WPRdUh8',
          'W6ZcPfFcSa',
          'WRdcKWS',
          'r8kgW5RdNXhdOMC',
          'a1yMuCkI',
          'W7lcJMGRW5jG',
          'WQOIaCktW6fRo8o7WOVcJZ/cTW',
          'kCklWRZdQmkZ',
          'W5pcU8oVbW',
          'jbVdJmkNWQFcOSkNWRyRzGBdUSkCW4i',
          'cZ3cQNiTWPxdTMeKWOW',
          'W6fUeSkTW6fBo14',
          'lCklW7fyaa',
          'gJNdG8otWRRcVgddKbNcQSoIfCoqWQ0',
          'WRroW7bXW5K',
          'W6pcVMRcVe0xzIVdMWhcGCkM',
          'WO0Kf8kvW6q',
          'WPZdOWlcRCoj',
          'WQPGWRbeaSoFW47cOW',
          'amkUW7DUl8krWQLZWP0MxG',
          'nmkyW4jdW67dTXlcSmkVBq',
          'aqxcQvqj',
          'WRu2dCkYW6q',
          'x8kzW6JdQ8kLWOC',
          'eLCcW7aVWOi1DG',
          'W7rhWQJcNfqot8olFbddGSkPr2bBW7a',
          'WOFdHNxcUwdcISkaW5O',
          'WQRcPCkxWQ4RW5BdUXC',
          'j2GFumkX',
          'WPLIWPJcQ0pcRW',
          'WRaAj8ki',
          'W6BcRfVcSuGuyJNdRW',
          'nrZcVeDF',
          'W7xcN2iUW4LO',
          'c8kVW79ummkV',
          'W57cTCoSfSoiW5tcVCkNW6vTF3JdTJ4q',
          'hfCUWRhcQG',
          'WRJdPCkH',
          'pweMtCksW7OJW58',
          'W7NdN1JcQa',
          'c8kSW6XKmmkWWQ10WOaCt8kebCo+W4v9',
          'oXRcTwTcffGqW4neaIuRhG',
          'W4LzemkQW6q',
          'WR3dT8opCZBdSGq3',
          'tmkDW4pdN8ok',
          'WO/dGglcTfFcH8k6W4NcJ8k0WPNdKa',
          'CSosWP7cOq9vWQO',
          'W7D5amkLW4vtj0m',
          'lSkcW5JdOvzoWQqNW49fiq',
          's2VcSxddVa',
          'W4LRW6VcHCk1W50',
          'sslcT8kMWQeR',
          'tcTTFJT9WQq',
          'WPxdK0xdMsSilmoDW4xdTr7dPdpdQq',
          'WO/dJglcTfdcH8kVW4BcLW',
          'p8k/W5fqW7S',
          'W6P/gmkPW5O',
          'EgqgjCoWWPNdKIPV',
          'rJ7cGmkhWQK8xa',
          'WPJdRrRcUCoykSog',
          'W5tcUCoTda',
          'mXldN8kUWQxcSW',
          'xu3cLMpdTI18W77dSLBdOa',
          'dfutW7S4',
          'W4yoW5zDWQpdJmoRW7ldVdfApYi',
          'W7lcJSoxm8o+',
          'WQ7cO8kjWQi',
          'WPNdPXRcMCoyo8oSamkjcmoHW4a',
          'jrdcTuzi',
          'l8ouW6ddG8o8F14O',
          'u8klW4FdNW0',
          'W4mBwcldOG',
          'WR87fSkdW6DrmCo1WPO',
          'krZdN8kKWQhcQW',
          'vCobW7BcPCk7erK',
          'ELqQbXW',
          's8k9W4ddJCk0',
          'wvJcKgpdPq',
          'WRO7amk5W60',
          'W7pcINi',
          'WQLOb8k3W4O',
          'pgPun8k3WOpcJYqZ',
          'nmkwWQJdPmkO',
          'WQ7cLWVcINSFeMi',
          'WRXHWQLB',
          'W4zIW7pcJSkGW4VdJx1ya8oEw8oFWOtcINWlrcy',
          'WPJdKvpdIcu',
          'W67cGN4QW5i',
          'WQrLbCk8',
          'q8kuW6tdOmk+WPlcIGRcUH4',
          'eLmcW7qXWOuXAwy',
          'gZNdMCoKWRBcTfe',
          'WQLbWRTPiW',
          'W5CDsq3dVColhCkzECofW7FcVmkGExirWQC',
          'x8kxW7ddQG',
          'W7JcQfFcSeeVAIW',
          'WOv9W4X+W5C',
          'jxDrpmkOWPy',
          'W5dcTCoMb8ofWPlcSSkSW6zmE37cVZeiW4u',
          'WQldS8kyrmodWRy',
          'W6n/amk8W55jlwRcJSoxWRi8',
          'vgeUidFcPGCrea',
          'W73cRSoGpGldNLG',
          'W7JcOK3cTva4vG',
          'WPRdTX3cSa',
          'WPVdICo8WQldLc8',
          'W6jTW7FcPSko',
          'W6FcP2RcKKi',
          'W5hcQCkvWPddJqdcSmoTqdtdNW',
          'WRq4gSkKW61SlG',
          'WOLMWOe',
          'pg8ZtmkKW7iXW5TOmx3cJu9yEW',
          'hqdcQ1yb',
          'jHlcVK1b',
          'kCkEWQtdH8k1gSkRWO1pW7GECSklW4viWROcns0demkl',
          'mxi3sq',
          'WRBcQ8kDWQiTW4W',
          'g8kJWQbZxJe',
          'xwuZlbRcRdykdwhdVa',
          'gSkJWQ1ZxISmEW',
          'jSkAW59dW43dQH7cPW',
          'WRWHcSk5W7W',
          'WR5qW7f3W4O',
          'umklW4hdNrRdOG4',
          'WQ7dTSkWt8oe',
          'WPOxFq',
          'r8omW6FcRCkS',
          'WPDMWOhcR13cOmkGfuq',
          'WQfZW6v+',
          'jMe+xCkf',
          'WRhcKsBcMKe',
          'WQv0W4LOW5C',
          'g8koWPJdMCkJ',
          'jrRdG8kT',
          'WOBdQCkfsCo8',
          'WOTGhSkRW6C',
          'WPGExs9g',
          'WQxdIfVdVra',
          'WP/dIgBcULBcLG',
          'hSo2melcNa',
          'tCkeee/cISogW6lcKGhcO2HFW5VdHIj6W4ZcVuSgx3ddOSkooCojzrjTW6/cK0pdUf5sa8kbW7RdU3FdJWvNeSoqimkxpCoxWR5tWRyEk8kRDgFdV8kJeSoepCkfdSoxo0u4W7NcPN/cU8o3WOxcMSk2F0L9WOGukCodosBdSWdcKSoyWP7dICkTv3GHwxbgWRmEW6LcxmkuBSkqWRK2nNrCW6SBl8oFWOhdMSoSEW',
          'WPGphSkhW4O',
          'WP/dRaFcVSodpCoZgG',
          'WOldH33cQq',
          'iqhcSvH+',
          'e8kNWQ9/tYCUEcpcONy',
          'W73cRe3cSvy',
          'Duippd4',
          'dG7cRq',
          'WRHYWOhcMKm',
          'W4GdW5TxWQldNCoHW7hdQdTBpYi',
          'og1gmq',
          'WRtcQ8kjWQi',
          'W5BcICofo8o6',
          'j8kvW4rcW4FdRem',
          'qftcNgpdUa',
          'W6BcRfVcSuGU',
          'E8kEW4xdOSoU',
          'qCklW6hdOCk+',
          'WQ3cLXlcIG',
          'WPSrDbP7BSkoWQVcRbfH',
          'WQ/cLWBcINSf',
          'sfBcLKpdTIn4',
          'td7cK8kM',
          '57215QowWOlcJu/dIq4',
          'WQf/W6TFW5RcRglcSt0',
          'W7raWQFcHKeeBSox',
          'WRFcQ8kqWQiTW5BdTru',
          'WOpdRWNdT8o6kSo9hCked8kIWOVdHSoRcq',
          'BLxcU8oSWQC',
          'W6BcIL/cKgu',
          'fcVdHmkcWQu',
          'WPaPBHrx',
          'ECodW5ZcVCkQ',
          'W6ldI1ZcQq',
          'hfC/WQFcO8oS',
          'WRn9WP97ka',
          'WPxdOSotus8',
          'dCoxl0/cICol',
          'W4KdW41xWRZdPSoLW7m',
          'imk7WOb7xG',
          'ddxdMW',
          'WOBcUd3cGwi',
          'fSkTW55OoSkMWQW',
          'WRX7W7j+',
          'WR/dQmoryIRdUq',
          'cSobb07cICo2W7pcGLVdNs0',
          'WQGJnSoJ',
          'W73cQSkzWOxdNW',
          'b8kJWRDZqa',
          'WQJdQmk0t8oxWRTPW743iqJdUW',
          'WReAiSkjWPBdHHmWW7BdMSo3WR0vWQm/W5u',
          'c0qxW6m4WPKNFW',
          'FfNcPSo6WQBdIt3cPW',
          'W4ugW51ZWRZdVCoRW6G',
          'WPLSWPNcOum',
          'WPqwk8k5WQG',
          'WPddJ8outcK',
          'WPukFZ9MEmk/WQBcPX9HtrK',
          'WRVdUmkxu8oz',
          'zSouWP7cUbrpWQaV',
          'gfu8W63cMCo6W4RcLs42W5nUW6BdHdOI',
          'dLbahmkJ',
          'd8kNW7zRk8kfWQLJWPeH',
          'qfZcGwldPbvGW7pdVuFdTG',
          'W7jdWQZcN1yfDG',
          'FNKTfWG',
          'WOdcI8kZWR45',
          'fSkWW7L3j8kXWRTY',
          'WONdOWpcVCoElG',
          'eLCRWRS',
          'yCoAWPNcTbi',
          'W50rwa/dQmohfSkkzmooW7/cTCkpyW',
          'nrZcVLXFhLif',
          '57665QkvjSoTaq',
          'W5ZcMYldQGldLCoFW7JcL8kSWRBdIaK',
          'WOxdMv/dQZGol8oOW5JdIXNdTdq',
          'WP/dL8oVWPxdIq',
          'b8kTWQP/wcScEq',
          'CZf5WORdQa',
          'WRLHha',
          'phqcWRxcPW',
          'CsTgWQ3dOa',
          'aCkRWQP/tI4i',
          'EJfpWP7dLW',
          'WOa6Etjw',
          'WO7dQXZcVCopo8o3bSkfhmo5W6NdN8oIbSkO',
          'W4bNW7VcLa',
          'kcxcVKOq',
          '572i5QciW77cVSoL',
          'bmkHWRH6sq',
          'W6fgWRRcM1ehzW',
          'WRq2g8kYW7PWp8o0',
          'W77dKfVcQd3cLmo0W6zB',
          'W4OhW5XwWR3dMSo0W7VdRsPm',
          'FCkvW7JdICoV',
          'WPddImoVWQ3dMsy',
          'zSkvW7xdICoVAa',
          'WODuWOWfW77cUmkW',
          'WRSDj8k4W4u',
          'n8kAWQtdPmk1hmkNWRi',
          'fSkSW551W48',
          'WQBcMXBcNhOFbwS',
          'W4/cNxJcNM8',
          'W4/cO8kdWP3dIJZcR8oNeq',
          'WPTNWPe',
          'W4JcU8onimoI',
          'pSkBW5jaW47dQW',
          'WR8zkCkcWP8',
          'WPpdMgtcPxi',
          'WRaAj8kiWRBcIbKgW7ddNmoTWPTAWQO0',
          'lGddOmkSWRpcRW',
          'WOezBJTG',
          'WRzZW6XRW5dcQw7cLsRcH8kGba',
          'ohDCn8kWWPy',
          'W4VcVSkrWOldMYFcS8oS',
          'yqnpWRFdOW',
          'WRrWWP7cN3u',
          'oXBcVKjen18cW49v',
          'WQLRgmkG',
          'WRXHWRvnhW',
          'WPddHSoWWQu',
          'rcbiWQJdNa',
          'WQCMpW',
          'WO/dGgBcUfdcLSkaW4xcGmk5WPtdRGKXkWa',
          'WRFdQ8oSyJFdTq',
          'WR3dT8opCYxdTayHfq',
          'rcHlWO3dLq',
          'dbdcNuja',
          'xg8VhXq',
          'E8ouWONcTaXv',
          'WO7dSmo7WPpdQW',
          'WO/dUH7cT8oFoSoSda',
          'WR84hCksW6L6nG',
          'W5hcOCkiWPhdKq',
          '57+r5QotnN/cIW',
          'W5alW5rx',
          'sweRibu',
          'eSkTW6TOnSkQWQD5',
          'WRf1W69I',
          'wmovW4BcUCkQ',
          'W6pcH28JW5L/pLu',
          'vCkaW7ddR8khWPxcLGS',
          'k3Lypmk2WOq',
          'jSk+W6rxW5q',
          'pMe/tq',
          'amkJWQ1ZxG',
          'W7LkWQZcLKa4DCofAa',
          'DvVcQa',
          'r8kfW53dJH7dV1hdTM/cT8kwESkpWRC',
          'W7jbWQJcKf8o',
          'rtZcM8kXWRS2qSoo',
          'aCkTW7z1mmkSWQrK',
          'vwe8iaVcUG',
          'cd3cKvOR',
          'W5ZcPmkrWPRdMta',
          'WRJcPSklWQGYW7ZdUXqlW73cIMnA',
          'sSkiW7BdH8kH',
          'WOy6WQldKCoXWP/cKa',
          'tvhcJwRdSZj1W7K',
          'vq7cGa',
          'WRBcQ8kgWQiZW7BdUr4i',
          'rJb5WQ7dVa',
          'xcDNBY17WQGYCrn0pSkNWPVdP0i',
          'gSkTWR1Zqde',
          'WPTNWPhcJ0pcVmkQeq',
          'vIv/qWi',
          'WRaAj8kiWR7cIaq9W73dMCopWRvvWQeG',
          'kZxcSuuc',
          'W6FcRflcSwe8FcO',
          'WPuRnCoZsmk2WRyuW4Dl',
          '57+05Qc2WQddL8oZW7hcLG',
          'FmkZW6K',
          'WRLHhmkkW4ZdUNTIBW',
          'DfVcQ8oSWRNdKW',
          'W54DwcJdTmo3amkiBmozW7m',
          'W6foWQxcH1y',
          'eIlcKNK3WPS',
          'a8kMW7Xri8kWWRS',
          'c0meW7C0WO89BMW',
          'e8kRWQPMqZeiuctcO3Dc',
          'WR8AkmkyWOJcHHSM',
          'WO3dL8oVWQNdJc/cLW',
          'WOxdN0RdGs8',
          'lhfgkCkRWPBcHq',
          'ESoAWO/cTaXVWQe1W5bbofNcJa',
          'WRpcP8kdW6G7W5BdPXPvW6lcL2e',
          'W5VcPCkcWPhdNshcQCoMtYhdLSklwW5puq',
          'W6egW4HkWOi',
          'W7CZxcFdKG',
          'WR3dQSoYWRhdNq',
          'W57cTCoSfSoBW5lcV8kX',
          'WQdcMrhcM3Szh30',
          'xSkzW6xdQ8kLWP3cHbq',
          'W5zVW6y',
          'W6/cOfdcP1C0EtS',
          'WR3dSmoiAYddRW0Q',
          'WRC2aSkY',
          'sIfHAZPMWQ4Z',
          'mGddJSkzWRC',
          'jxfqhCkTWPFcHtuQW5qFl8ovbWu',
          'W7roWQtcL0ek',
          'W5vLW6e',
          'WQ3dSmoiDW',
          'd8kTW61Yj8kSWR1J',
          'WQxdOCk4ra',
          'ig8HqCkuW7OTW509',
          'sLdcL3BdUdn1',
          'WRSqomkYW5W',
          'WOejfmoasq',
          'cLGFW7mYWPK5Aq',
          'W7raWRNcIW',
          'WOH+WP5wlG',
          'kHZdICkSWQZcTa',
          'DhJcS3/dSq',
          'oSkzW45wW5S',
          'qSkfW4hdVX7dTvC',
          'WPemmmkyWRa',
          'WRTNWQPsaSoEW4y',
          'qSoiW6dcP8kYcHNcHI/cMG',
          'aCoQbgBcGG',
          'W6BcOLJcSa',
          'W5ZcPmkrWPRdMtdcOCoNucNdM8kODWrovSkwW6yvWRq',
          'WOBdIgdcUehcI8kiW4y',
          'vs9+BWTUWRiP',
          'ixvsDSksWOdcGYiXW49dEmkAgYZdQG',
          'cZtdHmoBWRVcVfhdKq',
          'qW5JWPddMfi6W7a7W7SwW6/cHHddPq',
          'WORcMmkEWOK9',
          'W6T3cSkPW4nj',
          'wCoEW57cRCkTfW',
          'B1xcO8o8WRa',
          'WP/dLCo4WQe',
          'cY7dImowWQVcQ3hdKY/cPmo1hSob',
          'f8oha0BcNW',
          'fmkJW7r0jW',
          'W6pcJMSQW49S',
          'eCkNW6W',
          'jN1hhCkP',
          'WRpdVCopBs3dMWKWaSog',
          'WOpdMwdcMNS',
          'W4nYW7pcGCkxW4/dLhq',
          'WQT5WRXha8oSW43cUCkZrudcQG',
          'WQWunmkjWPtcNtK6W7ZdMa',
          'WQK4hmk+W7XWmCo2',
          'WPFdJ1VdIcKv',
          'W5dcU8o2b8oBW5tcSSkU',
          'D1hcQSoTWQBdTtVcPKJcKtW',
          'WQj7W61+W5hcRKxcVtZcJq',
          'W6ZcPfFcTuGEydpdRa/cNmkKWPO',
          'WONdRqdcRmoEimoYgG',
          'W5yhW4PBWRtdQG',
          'lCkAWQtdPmk1',
          'WR87fSkdW6DDo8oUWPBcHtu',
          'WPxdLeldGs4tj8ow',
          'WPrUWO3cQ14',
          'lCoXjg7cRW',
          'qSomW6RcPmk7fGRcHW',
          'WRpcKZqZWOXXA0FcHWNcVW',
          'W4JcTmoRbmogW4/cVSkX',
          'WQqRnCoI',
          'W7pcP04BW7m',
          'bZxdOSouWRm',
          'jhLmpmk2WPy',
          'WO/cVmki',
          'WRyTka',
          'WOxdThNdNbW',
          'vmo/W6RcKmki',
          'WOWXus1u',
          'W6FcMeVcNN4',
          'tc9NBsT7W7e',
          'xmoiW73cR8kQfW',
          'ELZcRSoNWRldHshcUfhcHJBdQNzM',
          'rSkcW6NdVCkD',
          'bbJcQxT/',
          'qmocW6dcOCkQfGlcGq',
          'tab0WOhdI0G',
          'WP7dOXZcV8ojoW',
          'W6pcGgG7W5XKnv7dGd3dRSo7W7hdOqS',
          'W4hcV0SGW6u',
          'F8odWO7cGci',
          '572P5QgYjtP6',
          'tc9NBsT7',
          'W47cUCoNdmom',
          'W6BcQfFcS1a1',
          'WQ8QWRldGmoNWO7cHYCadConrSotWORcJhvoqtb9WQbOWOFdMKDLWPddOGpdICo2lmoRaCozWPmTlwr8WQ5XvtnMW5RdKHJdLd/cU3uavefDExZdHSopWQBcLSk0WPhcRCooy8o1WPS0rSolWQ1Dv8ocdc0oW44nmCosoSojW4hcGmofW7NdHvpdNNlcJ8k1WPKgWP3cHK8KE8krpHddO8okW6zBuSo4eM3cPCklWQzZW5f4FhXXe8oLW4VdJSo+W7JcI2/dSJhdVSkNAepdT1hdH8obW41UzeX0WP1EcmkHW6rqcCky',
          'W4bfWQJcUfu',
          'WPhdKf/dIWyoi8oCW5ldKa',
          'jLXAcSkc',
          'W5eCwq',
          'WRaJn8oZxG',
          'hSoWfglcTW',
          'xg0SnGRcOama',
          'W5ynW4XvWQBdOCoHW6ZdVW',
          'WPJdINxcSvy',
          'WOuDBH9MACkiWQpcOaDWrG',
          'iXldN8kIWQxcQCk6WQWRzWxdUCkCW51AW7S',
          's1FcHwtdUYu',
          'vgeXiaVcObqj',
          'qCkDW7ZdOCkHWPhcTrNcUqJdSG',
          'mmkBW5PkW5a',
          'iuSIWRtcHq',
          'WPxdK1VdLa',
          '572h5QkhW5ZdPLb5W74',
          'jx1bomkOWOVcHsuT',
          'W6BcHMGUW5fonfBdGHRdUmo3W6q',
          'W4GdW5TxWQldVa',
          'WOJdHNRcQuhcJCkfW5K',
          'W7uSW499WQq',
          'xvhcJxy',
          'wCoaW7tdP8k3halcGxhdMSonWPtdIa',
          'efmxWPxcGW',
          'u8khW7BdLmoO',
        ].concat(
          (function () {
            return [
              'iXRdNSk5WQ/cTmkrWOq3sHZdPG',
              's8kuW5JdQCk9',
              'W47cV8o2',
              'WQmVmSo1smkWWQKv',
              'W7rZb8kFW5Halq',
              'W50zvINdLmonbCkyzq',
              'qZ7cNmk2WQK2wSooBmoFcaddV04',
              'tvBcINldTIL+W7ldRNVdTHtcTgpdHG',
              'i2uME8kjW6KN',
              'gZNdMq',
              'WPVdGCk4BCo3',
              'ttdcHSkNWRO2vCoh',
              'W7PoWR3cL0ecy8oi',
              'iblcVf1i',
              'aCkJW7vKmmkI',
              'v209iby',
              'WQdcNSksWO8s',
              'xmomW7hcRCkYda',
              'wYfLCW',
              'WQZdMGJcKmon',
              'WONdSaVcUCoykSoBbCkoemoWW4VdGG',
              'WORdRSkYi8odW7JcNSksW5i',
              'fSolfKVcJSokW6ZcIa',
              'WR8uk8kjWOJcIa',
              'b8oma0tcNCogW5dcHv/dHY0',
              'wMeOiaVcQa',
              'DfxcU8oSWQFdIsRcRG',
              'oHZcSuXHefaLW4jgbqCKbh8',
              'q8ooW7lcPmk7',
              'a8kRWRrZ',
              'w8krW7BdPSkN',
              'W5bcW6JcT8kK',
              'qmkBW7ddOSkY',
              'W5KlBItdRSoOgCkzsSomW7JcTW',
              'WQRdQSoaCshdRXSH',
              'W4zLW6lcMq',
              'WP7dTKtdVdK',
              'r8kwW4xdV8o7',
              'jNLypa',
              'W4/cO8kdWP3dIJZcR8oN',
              'WQzVW615W5BcVMlcPIe',
              'imkrW4jKW5BdRahcVCkOAKTl',
              'fmkUWRz4sq',
              'ySojWOZcPWvuWRWK',
              'hfKgW6W',
              'mCkyW5LkW4/dMXZcUCk6CeXlW60',
              'WQ3dRmotyIxdSaqTcCorbG',
              'g8kTWRHY',
              'WQJdQmk0t8oxWRTDW7S3kX7dQbnVWPxdV3S',
              'e1CuW7aXWPG',
              'lCkYWQ5+Ea',
              'xSoiW7BcRmkTkH3cIYhcGmoy',
              'tabVWOhdLuG',
              'n8kuWRtdPmkRbG',
              'WOBdRq/cVa',
              'tGrOWOddIM4KW7eOW4Cw',
              's2RcMmkaW6/dUqa',
              'WQlcHbRcJG',
              'W5/dShtcIaW',
              'W4uwvcRdQmoqhCkF',
              'WRFdMuBdVcW',
              'WROKmSkMWR8',
              'hLis',
              'aCkTW6H4',
              'vcf0BGPQWRC0FbDR',
              'cttcSNmYWPy',
              'WQ4AmSknWO7cJc8',
              'WO7dH3xcV1/cHW',
              'gu4xW7qnWOONAq',
              'rmoAW7BcRCkWpGpcHI3cLCojWP8',
              'WOVdPGO',
              'i2uM',
              'WRHRhmk4W5VdSNHT',
              'WOL2WPVcNL7cVCkSeL5/FG',
              'n8kEWQtdOmkRg8kJWQ1m',
              'rmocW73cRCkthH3cNYNcMSoA',
              'WR57W6z+W43cQq',
              'htldHmorWRdcVfNdJa',
              'dHVdG8kJWOG',
              'WOtdQ2tdQaS',
              'wCk2W7NdOSow',
              'pNLzlmkH',
              'WRpcMrBcGx0f',
              'WQWAnCkfWO7cGbG7',
              'eJZcUa',
              'WRSTttLe',
              'hfOzW7S4',
              'vmkiW53dQSkq',
              'WQOToSoIF8k8WRexW5jg',
              'vweNibxcUG',
              'W5ZcQmoNaW',
              'W4fmkH94wmk3WPRcHW',
              'WOVdICo0WQBdLZJcICop',
              'W5zPW7FcJSkI',
              'DCouWOpcPqfpWQeKW4DKj1ZcLmoa',
              'eCkHW7L1nSkMWRPuWP0HtSkcbq',
              'WRq4gSkKW60',
              'pmkAW6fmW4ZdVbZcO8kyEKXhW6ub',
              'WRKhdCk9WRe',
              'WOldMLNcUedcIG',
              'WRpdItZcJSow',
              'WPNdTG/cQSoy',
              'cZ3dGmosWQ3cRW',
              'W5mxuspdTq',
              'WP8lvZTHDq',
              'WOxdLeldNq',
              'iCkBW4ncW4RdTHBcP8k5',
              'W7r1WOVcH2O',
              'W6jAWQdcLG',
              'W6y2wWhdOa',
              'WRRdSCosCYxdSWSHm8oB',
              'iXBdM8kGWQpcOSkYWQ88',
              'W4ZcQCkeWR3dKdhcPCoX',
              'W7bkWQBcN1yFCmoD',
              'WRBcHHVcJN0ti3WlBmoTBCozW5vbW4VcOCkPW5VdRqJdVa',
              'WPOzEdT+BG',
              'WQJcPCkqWQyRW5RdJa',
              'WQ/cMr7cI2Ws',
              'gddcSNK2WPi',
              'WQWBkCk2W4y',
              'WQBcMb7cJwut',
              'e8oRW5xcJSkyosS',
              'h8k6WOXNwa',
              'W6rgCCouW43cJZGEW5pdVSok',
              'vCobW7BcVSk/cWtcGc4',
              'vsfXBYj8',
              'wgqH',
              'qSk7W4FdSdO',
              'hWNcRhddJGP8W5m',
              'cSofd08',
              'WRpdSCkLwCoX',
              'bsJdVmo1WOy',
              'l8kvWRNdP8kOb8kRWQ0',
              'WOpdRWNdT8oki8oXhSofdCo7W4i',
              'jbZdNCkW',
              'lmoMnM3cUa',
              'WPZdRM3dGYi',
              'nrlcVu1Fea',
              'WPVcHbJcVhm',
              'dCoxmulcK8oPW6RcK33dIcyy',
              'A1hcOCoTWRddKI7cSa',
              'WOvQW5HVW7W',
              'W5ZcO8kaWO0',
              'WPpdHSoPWQxdIIpcHCoq',
              'w2BcNSo8WRm',
              'WOHMWPVcQLtcVmkGfa',
              'W7rZb8kiW5rmiu7cMq',
              'WRPGWRHaaCoi',
              'W4HVW6BcGCkRW4ddGNrt',
              'csJcUg81',
              'WRW5dSk1W6r8',
              'm8kwWRFcRSkremkLWQPqW6jinmomW5zhWRe',
              'vSkpW53dNHRdPh3dV3lcJ8ks',
              'W5zJW6JcHq',
              'nmkuWQldRmkMgCkVWQrA',
              'sY10FJPQWRmEDGb7hSkR',
              'W5hcU8o7b8oBW44',
              'WPJdNuBdIa',
              'W5vLW6hcICkZW4FdIgK',
              'WRNcPCkkWRm+W5BdUHWjW5RcNg9pW5S5',
              'W7BdJfdcRa',
              'p8kvW5raW47dIHBcUSkUEK1lW60',
              'WR8AkSkdWOG',
              'o2XmnCkH',
              'WQXRgSkCW47dUh8',
              'WQS4g8k2W7XWmCo2',
              'gWLOWO3dNLmGWQ8',
              'cmofae/cLSoXW6BcIf7dJdOAWOK',
              'WR51W75/W7lcTw/cTZq',
              'W5NcS8oWb8okW4NcUSkTW7LeDL3dUdemW5pcOW',
              'WOVdUaFcTCozo8o2',
              'W5pcRCkjWPhdJcy',
              'WQBdPCkHqmoCWRbiW6q2',
              'W5zVW6BcPSk1W4hdILrqe8ojrSodWOdcG34TwdPSW7y7',
              'vmkfW4ddKWVdV1ddVq',
              'h8oiW6VcQCkZdWhcIJpdM8oxWONcGhjtWOCdWRfZW4/dLSojW5q/',
              'dfmcW4y0WPeX',
              'saNcKmkXWRW',
              'WQOYgW',
              'WRTjW51bW6y',
              'W4/cO8kdWP3dIJZcR8oNea',
              'B8k+W77dKIW',
              'eCokc0ZcLCorW67cLq',
              'zCodWP3cVry',
              'mYbLzvNdQvvfwhRdPJ0UWQmpfwRcOHRcThGaWRXxW7ldQSk3W6GYW5aIBSomyeTOk3ddRM3dOCkADmoRWOtcLSkcWRpdRCodWQTmW6y3WQDshmkbmXBcKcOaWPFcTq/cS2m+W4L+hNG7xd9dW4DgW4KbW6SBW5fXWPpcTmozWP3dGvxcGGJcR8k3W7PBEd59vfOMWRmvEZdcPtlcRHdcHCo5W6ZcLrvMdvJcKJRdUmknWPdcQ8opWRFcVCkEk8oGWODmhXnoW6FcNComW6XgsLnbhSogjSkHFL5gWPddHmoQpCkNlZ/cKCoOmgK/ftqXwmo7W4hdMu1ECHSrWQzqW5TWwwrZW4xcQ0b9jCofBCosW5hcVdFdQ8oPjW1HW7yRW4H1aSoBkSotW4LTxSoTleDXW6GUxmkXxSo9W4f7prWbwuZdSYePtmo+W7ZcUCofrWiOsCkIWRxcUCojs1i6s8o8WQz9WPWEWOqbW6anzrBdU3hcK0NdQwubW6xdP0WsWRhcMGieiMlcG30mWQaVW4xcSCotymo/caddGmkMuwvGW7RcS8o1W4aOyCkvc38cAh/cTNhcPNhdHSkBW5xdMCkRWQXgxcBcL8kSWOW0vW3cVstdSKXUvrC5aCkEvsOpW6W1W5OphSo8WPm5WOFcP8ooAeddRhpcId3cNmknmWJcMM3dMYdcV8kZWRJcRfr8W7vOCK8OCq',
              'uZlcK8kUWQ0',
              'WOFdIg3cUehcKq',
              'ACkvW6hdICoVEG',
              'WRf1W7n0W40',
              'W4nJW7ZcGCkRW63dIgPqfmoFuCoy',
              'o8klWQbxza',
              'avCOWQVcU8o2W4BcJ3a',
              'W657fmoJW6DFk1NcK8okW7r7b3qLaG',
              'hfKVWQFcVCo2W4JcJq',
              'WOZdQSoXzsy',
              'kCkyWRhdTCkZemk0WP1wW6iyBmkh',
              'scfMyZPMWQ4Z',
              'eJZcUdmZWPldRxy7WPhdIGDLi8knWOzExCo8W7u',
              'WP5QWOBcVL7cVCkG',
              'C8owWOtcPq',
              'W4hcOmo1aCkqW74nWRDLmqxdPH1UWOldOsHzWRSJECkvamo1W4LAWQhcGcXjW4ZdHGxdRSkrWPRdHhbVW7aZWQtdKSkTWQ85p8oUW4hdMmk7WOjanh0IAe4eWQnUzCoZW4WYWORdMCoPW4lcKqFcQM7dQa9lD1vlW7Toq8k7mCotWOtdTLldNCoWd1O0Fd3dVCo9WQxcL8otW7xdPIFcJmoWx01btSkoW5XyW4tdUSotmSk9W6ldLCk2WOJcVSkdWOdcPftcGWNcJx4NWQLTqgP0aGHEWOtdPftcPCo3mLzXWRVcGSkRW5zxW5uAW7CxWP3cU8oIW5mKWPXKvNrVWQ1iWPtcKYNdNCkEvG3cUbGFWQuYE0ldMSkGBtBcQaPfW4GVrmoctmopWR/dSbFdStlcQ13dNr7cUCo1W5hcKCk3u8k4W4e3WOTTW4NcVKXqoLtcQmkjzSkpW6reW7ujW6n9',
              'W4OdW5rx',
              'WQNdVq/dPwzVpG',
              'WOZdU37dHau',
              'd8kJW7nKdmkSWRPJWPW',
              'k8k6W51SnW',
              'WPpdMCkp',
              'W5ZcO8kEWOddJdRcRmo6',
              'oNu8q8kA',
              'WOPSWOBcP0xcP8kQca',
              'mbldMCkSWRi',
              'fKeLW5Gn',
              'ouGACCks',
              'pgeRtCksW6a',
              'WP1VWOhcQh3cOCkKaLjI',
              'WQH0pSk6W5C',
              'nbBdMq',
              'WR91W7T+W5pcQq',
              'yJNcPCkyWPK',
              'W65LpSkPW4js',
              'jCkDW4vmW4ddTby',
              'WOaMn8kVW5K',
              'WRKBj8koWPBcJa',
              '57+05Qc2WQpdL8o3W7hcLG',
              'iH7dHmk9',
              'e1KxW7eqWOqWF3K',
              'kHBdMCkOWQZcQCkrWRa2',
              'W4rUa8kuW78',
              'kCkyWRxdR8kI',
              'W5qnW4PBWRRdPSoRW7e',
              'WOirDZS',
              'WPzIWOZcQ0pcVq',
              'uZlcK8kUWQ13bCkhl8kH',
              'btxdImoZWRBcVfhdNd7cOmo/hSouWQ/dUG',
              'W5BdL1/cVJO',
              'W6j6fSkHW5rupa',
              'qLJcHMpdUXj1W7NdUfBdOrJcOq',
              '576i5QgRx8oNWR5gBW',
              'WPuuDtb3',
              'j8k8W5HtW4m',
              'qmkiW73dP8k0WPhcPaRcPq',
              'WPddGSo4WQtdIX/cLmoyW5bIWRm',
              'xCksuXRdG8kBW7BcK13dIIez',
              'W5JcOmkFWOpdSJZcRSoSuG',
              'WPSDBJ9+C8kFWRNcSq',
              'WO0Sa8k2WO4',
              'pSkBW4nwW4C',
              'WQFcNWZcN2yffG',
              'q1JcKgpdPsLXW7S',
              'uhmiiaRcOq',
              'wYf7FI9MWQ84Bq',
              'WOJdJmoLWPldUG',
              'W4yzutNdOG',
              'nrVcSuzkfg46W6vxcImShMe',
              'WR7dVGddOXmBxd/dIbdcHG',
              'WRFcR8kkWQ02W7NdTq0EW6a',
              'W4LRW53cImk+',
              'FmkXW7xdQmom',
              'lSkaWRfvtq',
              'W6DaWRRcM0CcBCok',
              'WRVdR8kMsmoeWRDcW7K',
              'W6KFEJ/dHG',
              'o3OnWQdcHa',
              'WRaKiSkYW7TX',
              'emkNW7zLj8kXWQ1L',
              'dmkVW6bKlq',
              'WQjYW6zOW5BcUwRcVJtcKCkwg3RdRCoXW6HFWPxdICoSW70kWPy',
              'q8ooW7BcPSk7',
              'WQLLbCk8W53dUG',
              'o3Tqn8kH',
              'gfu8W63cUmo+W53cHdmQWO8VWQxdLtG2WO/dMSkhBa',
              'WP/dG8o5WOBdLcxcK8oWW5H4WRm',
              'ddNdISoJWRdcNfxdMW',
              'W6ZcOKVcKuu+zW',
              'WRnVWQbhh8oE',
              'W7qxxIVdSa',
              'WO7dHxhcSfBcJmkD',
              'oCkuWR7dTCk1gSkQWQ0',
              'hvK5WQFcO8oS',
              'B1hcQmoiWPS',
              'WRTNWQThdSozW4RcV8kWrvJcG1TsW79S',
              'WQGVi8oJva',
              'igeGtCkoW6C',
              'qmkDW6xdJ8kJWOdcLXhcTrJdQG8',
              'W47cHuVcM20',
              'xCkzW7ZdQW',
              'DupcKHbRsxG',
              'WRVdTCkMsq',
              'W5vLW6hcICkZW4FdIgKq',
              'WQiNlCoVwmk8WPWFW5njna',
              '57Yl5QohW6dcSCoZkSo3',
              'wYf4EJT7WQqlEGbSf8k2WRldOeq0W7tdUSkB',
              'W4NcRCkCWOhdMW',
              'uJtcN8kTWR46D8odD8oKbq',
              'sMuXba3cVqCmgNRdVde',
              'W54zucK',
              'WRhcMqVcJN0tkq',
              'fmoleq',
              'xcDMEIf8WQq',
              'WP3dLCo4WQhdJc/cOCoqW5r7WRm1za',
              'deipW7K4',
              'W5eitsNdQCogm8kezmobW7i',
              'WQFcKWNcHMOtoMO',
              'WRxcLXpcMMW',
              'rt/cK8kGWQq6',
              'W43cRCkjWPFdNYBcTmoSuW',
              'WQLRbSkTW47dSNLMB8kHzCkbWQ/cHW',
              'WOxdJfNdHd4emq',
              'd1OdW7S0WO07AhJcSq',
              '572P5QgYjd1+umoW',
              'sCklW4FdNW3dV17dVW',
              'kSkuWQpdQmkZhmkPWRa',
              'W63cJM0QW7nIku/dMG',
              'W4PoW4BcQSkk',
              'W7jcWQdcGuacDmob',
              'ALFcQSoNWRa',
              'WPfZW5TJW4S',
              'W7lcIMSGW4TO',
              'W54xtYhdPSoogCkwAa',
              'WPJdMu7dItK0mSoCW5BdLHi',
              'W7dcG3mHW5rRneNdNWy',
              'mHRcOK1obvCzW4rgbWWSdxdcUSkw',
              'AYGfACo0W5xdKa',
              'W7dcGhy',
              'eLK2WQFcVCo+',
              'W5RcRCkdWP3dKdi',
              'WOFdOXRcVCoEjSo/bq',
              'WRtcJGxdVx/dRmkq',
              'W5qrtJJdPSome8kjwCoc',
              '57215QowWOhcIK3dIq4',
              'W7ZcS8oIf8kcW654W4aUpGtdUG',
              'uWr5WRFdMLO4W7q7',
              'umkxW73dOCkL',
              'W67cPeRcPeSUAG',
              'm28Iuq',
              'W5lcRCkeWPhdJdZcOCoL',
              'WR/dGhdcUMe',
              'WQj7W61+W5hcRG',
              'nbddImkNWQu',
              'kXBdG8kUWRtcRW',
              'W6pcG2KHW5G',
              'zCkAW5NdNmo5EK8P',
              'cZdcSxKO',
              'fCk9WRhdKCkx',
              'oHRcVK1E',
              'WPDIWOhcQ0pcP8kKcG',
              'xSkzW7RdQ8kaWPhcLGW',
              'bLOCWPlcNq',
              'WPnWWQBcPLJcHmkSe3bXFSk3',
              'WQXTWRHoca',
              'nrZcVLXmgfatW5G',
              'W7D3AComEmk6WQS3W5W',
              'W71KWR/cTeS',
              'WRaqkmklWO7cGq',
              'nmkFWPRdISkt',
              'wCk/W4ddO8kX',
              'W4ugW50',
              'W6BcRedcSvyU',
              'WPVdNv/dIdGii8ou',
              'WQtcOsVcHLa',
              'dmkJW7vK',
              'W6pdJftcOZZcUSopW5L6',
              'qmkDW6xdISkYWPFcIHZcSH/dJGTSWP4',
              'oCktWRNdRCkJb8kJWRa',
              'WRLIWQb2aSoPW4BcPSk3r1e',
              'oSkhW7TaW5hdSa',
              'avqUWQZcPSo5W4BcKYW3',
              'WP9Oo8kVW5K',
              's2uOkG/cRdynewpdRa',
              'umkxW7/dUSk2WP3cIX3cPtRdTW5SWP4',
              'W6T3eCkPW51ZjuRcJW',
              'vCoaW7RcVa',
              'WOqxBJ9MDmkvWQq',
              'WRu4dSkZW4X4lCoWWPRcGHZcShNdNmoH',
              'WQLRbSkTW47dSNLMB8k+ACkmWRZcH2m',
              'fSobde7cN8orW6BcLa',
              'W75bWQFcL0eJvSoPva',
              'WRZdTmooAcNdNGCPf8oBbSk8WPi',
              'WO7dQX3cQmodpmo7',
              'W4axvcldS8or',
              'WRdcGG3cIMGBh2Cky8o7',
              'WPuzDZTGFa',
              'WRLSb8kUW6VdVMfQFSkttCklWRlcGNBcLXu',
              'wepcGLddRq',
              'WQ/cV8knWQm',
              'AMpcNg7dSG',
              'zv7cO2VdPW',
              'WRuBmSkjWPtcMH4HW6e',
              'WO5aWQ9TbW',
              'WRu4dSkZW619',
              'xSkxW7xdQ8k7WOC',
              'WPVdISo0WRpdIYpcKSoz',
              'WQr7W7nUW5O',
              'WRZcQmkCWRCR',
              'W5jjW4pcJmkn',
              'W5KvwMpdKCohe8kyySoFWQxdPSopz3SA',
              'vg8HibxcUG',
              'WOxdJeFdHd4',
              'wsPXwI98WRi',
              'WQJcPCkqWQyRW5BdUXC',
              'WPSxFJT+BG',
              'nmkEWRxdPCk0imk2WRPEW6qE',
              'WQpdNJr+WO88Aq',
              'gCkNWRXYxXCDCZFcUgC',
              'W6FcOL3cSuGU',
              'D8koW7tdISkI',
              'W74AW6X2WQW',
              'W43cO8kfWPpdLJVcPCo6uG',
              'C8owWOtcOHnpWRKK',
              'qSocW6FcQCkQfGlcGq',
              'W5WzxYNdQ8oRhSkyAmoFW6dcSCkn',
              'W7eQWQ8VWOFdRe4',
              'vSkpW53dNHRdPfRdOq',
              'eCorc04',
              'xmoxW6xcM8k7',
              'WRqzW7VcT3eOrW',
              'v8kjW5ldLHO',
              'WQldOaBcJmov',
              'oHBcVK9zgq',
              'WQ0LdSkHW61RlCo9',
              'W5zPW7pcJmkIWOBcLIKtv8kDgSkzW4O',
              'rdtcHmkRWQS6D8oeA8oMfq',
              'WR47amkGW4rWmmo9WOW',
              'W5uwxc7dQ8oh',
              'W67dUCoDW7bOW7NdHXGVW6lcKa',
              'qmkBW7tdOmkY',
              'WR05aSk9W7e',
              'WPVcRYu',
              'bdpdJmot',
              'W7ZdPhRcLs0',
              'WOBdOWZcVCoapa',
              'WPpdHSo2WQxdRY/cL8oi',
              'W6FcRe3cSvy0BJi',
              'WR3dUComyJBdVa',
              'v2uGiqRcNaubgxVdRq',
              'WQJcPCkrWQa3W5hdSqOi',
              'a8kMW7XenmkMWQzJWRG6xSkAbCoZW5r8',
              'oCkuWQddUa',
              'WPSxFJT+mSkxWQ/cRbHTdqPTWR4',
              'WQfZW7T+',
              'WRaBo8koW60',
              'haxcJhOb',
              'WOBdPWdcV8oyjW',
              'ALhcUW',
              'lGFcUKva',
              'WPpdV2BdMZG',
              'WOJdGxxcS1tcH8k6W4pcLmk9',
              'WOaIh8kTW7K',
              'rSksW5ZdT8kZ',
              'xsb0AcjQ',
              'tcD4BW',
              'A3pcHwFdNW',
              'WPCsh8kvW6i',
              'WPSDDdr7w8kBWR7cPWa',
              'qCkxW6tdQCk/WPRcGaVcPa',
              'WR3dT8orFG',
              'WQRcPCkx',
              'd8kCWQldQ8kv',
              'fZdcVxKOWQhdVh0TWPRdLXb6',
              'aCorWQdcTmoUa1/cK3q',
              'd1Kg',
              'kweb',
              'W7nKeSk6W5rio0G',
              'W4VcU8oUf8om',
              'lCoOagBcJG',
              'WQ/dQCoOWOBdTq',
              'W7tcH8k9W6dcMgRdHmkCWPe2W7z7mf/cKCkMW5ZcJHPcW5FcOGDmWQKVbSkRWRRdT8kqbuRcTvGHW5ldPmoRW5rdW6JcVXlcOqxdH8oGWOBcSsFdL1WNAmo7qupcQx9xWPLmWQ3dUmojWOzaWOJcSmoLoSo+cKtcPSk+aYWgWR4MW7vnF8ofWPPPCZhcT8otW6FdRs/dTg/dO1asWRWflmo8cGlcQCkgW4tdRCoRkJJcTt1WWO8GWPryCCovta7dSWpcVLdcNCkhtaVdNIFdNSkUnq7cHmohW6buW7ddHtJcP8ocv2RdLaufE8k3W4qrs8oeqSoIpmoJWRf/WRRdR8kvW74aAWFcVSkSACk7W5ldUSopDCoRWQddO8k/WQujWQdcNCkDW7zjycqyW5FdSIfujw5PW5pdR8oty3pdMsRcJSkikSklqmoHzmk6d8k3WQrsW7BdIGxdQ8kRWPTJccNcP8knB8kdWP9LWR7cNfJcJHq6yfNcT2mjfN50WQJdKwBdLrmZrcC0mHn9WQxcHLnrW6TaW6FdMSkfWOevW6BcPSk8W6RdMeNdG8opWOCqmCkzW7KfWOpdMdlcLmopW4T5W4T+zLxdI3JcNqLaW7vOWRFdTmkTW5T8gqldTxlcN8ktshedWPtcTSkeWROizmoUW45jmtfei2HEWOtdSfW/vJZdJ8o8W6BdNvZcNsvceN7cLCo2WRtdJ8okWRz6BCobjKJcSNyQidSpW6ldOSkpW50kyv3dLmooWQeljfTc',
              'xLBcL2/dOYL/W7NcRa',
              'WPGzDZS',
              'W7rbWOZcV2m',
              'WQzRcCk9W6ldVNLPDa',
              'WONdTX3cRmodiSoDbSkheSoN',
              'WQO0dSkJW7X8lmoBWPBcLdpcTxi',
              'W4axtIxdS8olh8kc',
              'WQFdR8k0rq',
              'v8ovW43cTbjuWQaZWPvBl0JcKmonhXRcTq',
              'W4/dSu3cNYq',
              'WRuNn8oJwmkT',
              'W43cO8keWPxdIJdcMa',
              'dJxdG8owWRpcJvVdKJRcPSoJfCoh',
              'uCkGW6hdIaK',
              'r8kfW4pdGW',
              'W5jRW6BcHCk1',
              'WPFcPHNcLNa',
              'j1zLp8k+',
              'WQpdPCk8rSoyWQOxWQe1pfddOXjVWPxcOwbpWRmPyCknx8kXWOTMWRRcHcjuW53cVXpdV8kFWORcJceKWOibW4dcUSkQWQy5n8kSW5/dKmo9WOuBAcn8Fuqn',
              'W6NcOLFcOfyYyY0',
              '57Yz5QcKbg7dTmk6W5e',
              'vSkwW7ddRmk7WPe',
              'obJcIuuO',
              'W6NcPvJcUKm4wd/dQaxcNCkcWOFcQCojAa',
              'fmoleupcJSokW6ZcIa',
              'nguKqCkdW7yXW71SoftcLW',
              'W4rUW7y',
              'WPlcO8koWRuE',
              'zSooWP7cUq',
              'BSkBW6hdQCoXFLyPj8ol',
              'ECkxW63dMmoPFKKpimonWPWDra',
              'f8oha0BcN8klWRldIaNcHxLrW4JdJW',
              'F8oiWQJcTqLs',
              'jHZcO0fzgfey',
              'W7v3hCkOW55x',
              'WQFcNWZcN2yffKKwACo9FG',
              'wYf7FJXGWQ0U',
              'jg9homkE',
              'WOLTkCkEW5C',
              'WQ/cMr7cIW',
              'W6n5W7JcSCke',
              'qLBcHwldMIv+W73dTx/dSHm',
              'sCkpW53dKbBdKf7dP3JcKG',
              'rmoFW7lcVSk7dr7cIG',
              'gdpcL8ktWOO1uW',
              'WPldMuZdUsuZi8oC',
              'W5JdVLVcPmkDm8kTfCoBaCkH',
              'btpdICosWRpcVq',
              'hvKIWQFcVCoS',
              'WOarAtDWCCkF',
              'dYpcVMOHWOhdQNy',
              'W5JcUvmvW7q',
              'n2WMtSkSW7WJW5DOjW',
              'jbBcVKXiaW',
              'qXnOWOxdJv4rW7KSW54wW6JcLq',
              'W7vnWR/cNvi',
              'FmkvW6ddMCo4',
              'WRZdSSoUDtC',
              'mmoTbwtcLq',
              'W6hcI2i',
              'ESkBW7/dHCoPCLqI',
              'gmkGWRnZtZy',
              'rX/cGCkNWO8',
              'sNq8krW',
              'W6NcQ8kwmxBcRt0tdmoogSkS',
              'W7rIaCkPW5bxjetcKSoDWRq',
              'WO/dGgFcRvZcKCkmW63cNmk3WO3dKG',
              'hf4xW7S6WO41D0m',
              'wLJcLMhdSJqH',
              'WRn+W7S',
              'WQK7gSk5W6f/mCoQWPlcLq',
              'nKagW4y5',
              'WR/cVmkbWQKR',
              'W4HRW6BcHCk1W4FdHMS',
              'WOvJWOTUia',
              'cdrXCehdSeWZoxBdOXy6',
              'DIDVxbS',
              'WO8rlmkVW6i',
              'WRNdTrZcRSou',
              'WOBdNvNdIcqvdmoxW5pdHW',
              'WRldSCopyJC',
              'W5ZcO8kCWPVdJa',
              'F8keW6JdJCoPFG',
              'WQNdICkCz8oi',
              'svZcMmoaWQ8',
              'ctdcU3uXWOa',
              'm8ofgfRcLG',
              'ACkCW63dGSo6FKSGdmosWPycuK3cGsG',
              'zCopWOZcOXq',
              'qmkpW4xdKXZdS0ZdNxZcJCkABq',
              'W4NcPCkdWP3dNdNcPq',
              'hJ3dGCocWRO',
              'W6pcGhy2',
              'ngKGtCkdW6CRW5XJnf3cQeHAymoXW6K',
              'WPldK0BdQcyel8oDW5NdLG',
              'WQ7dT8osBJddTaCQ',
            ];
          })()
        );
      })()
    );
  })();
  _0x2bca = function () {
    return _0x2a39a6;
  };
  return _0x2bca();
}
bloomLayer[_0x179150(0x71b, 'aCG]')](BLOOM_SCENE);
const params = {
    exposure: 0.9,
    bloomStrength: 0.38,
    bloomThreshold: 0x0,
    bloomRadius: 0.09,
  },
  darkMaterial = new MeshBasicMaterial({
    color: 'black',
    transparent: !0x0,
    opacity: 0x1,
  }),
  materials = {};
export default class Veiwer {
  constructor(_0x18f554, _0x1b9763) {
    const _0x5e4bd8 = _0x179150,
      _0x125f1d = {
        VwHpS: function (_0x875ffe, _0x5a4463) {
          return _0x875ffe > _0x5a4463;
        },
        SsTqM: function (_0x1a8d63, _0x45a093) {
          return _0x1a8d63 < _0x45a093;
        },
        FsjQC: function (_0x2cb7f2, _0x4a7104) {
          return _0x2cb7f2 > _0x4a7104;
        },
        MbISf: 'uTiQX',
        WzaUF: function (_0x33b65c, _0x3abd45) {
          return _0x33b65c + _0x3abd45;
        },
        QYEZt: function (_0xc2b4bd, _0x146d27) {
          return _0xc2b4bd === _0x146d27;
        },
        uzxsJ: _0x5e4bd8(0x628, 'ApUb'),
        vkxRB: function (_0x1e571f, _0x8101e1) {
          return _0x1e571f(_0x8101e1);
        },
        bdUew: 'time',
        cZBuY: function (_0x5c1d7a, _0x412122) {
          return _0x5c1d7a / _0x412122;
        },
        gNseG: 'dShRm',
        zIKsF: function (_0x19f992, _0x33a81f) {
          return _0x19f992 > _0x33a81f;
        },
        CUsIh: function (_0x2136a3, _0x1b9151) {
          return _0x2136a3 * _0x1b9151;
        },
        ojGRf: function (_0x1bfe1d, _0x7d6796) {
          return _0x1bfe1d === _0x7d6796;
        },
        bJHoM: _0x5e4bd8(0x5f0, 'XYL^'),
        aybKT: 'OChbi',
        NygUX: _0x5e4bd8(0x392, 'oYLf'),
        aFsLt: function (_0x178c91) {
          return _0x178c91();
        },
      };
    (this[_0x5e4bd8(0x701, '8(4w')] =
      document[_0x5e4bd8(0x611, 'oYLf')](_0x18f554)),
      (this[_0x5e4bd8(0x284, 'XYL^')] = _0x1b9763),
      (this[_0x5e4bd8(0x240, 'ApUb')] = this['container']['offsetWidth']),
      (this['containerHeight'] =
        this[_0x5e4bd8(0x4ca, 'Yhco')]['offsetHeight']),
      window['addEventListener'](
        _0x125f1d['NygUX'],
        this['onWindowResize']['bind'](this),
        ![]
      ),
      this['init'](),
      (this[_0x5e4bd8(0x52c, 'wxiv')] = !0x0),
      (this[_0x5e4bd8(0x5e4, '3)uO')] = []),
      (this[_0x5e4bd8(0x528, 'f7KG')] = []),
      (this[_0x5e4bd8(0x503, 'ApUb')] = []),
      (this['labelImgs'] = []),
      (this[_0x5e4bd8(0x23e, 'z@b#')] = !!0x0),
      (this['deviceCount'] = 0x0),
      (this[_0x5e4bd8(0x1f9, 'wS^x')] = []),
      (this[_0x5e4bd8(0x309, 'D@kl')] = new Group()),
      (this[_0x5e4bd8(0x159, 'z@b#')]['name'] = 'points'),
      this[_0x5e4bd8(0x10b, '^Pri')]['add'](this[_0x5e4bd8(0x54b, 'XZDo')]);
    const _0x1e4428 = () => {
      const _0xf61678 = _0x5e4bd8,
        _0x54f2a8 = {
          vBclD: function (_0x328c4b, _0x36ff6d) {
            return _0x125f1d['VwHpS'](_0x328c4b, _0x36ff6d);
          },
          tbgpP: function (_0x386d4c, _0xfcebe2) {
            return _0x125f1d['SsTqM'](_0x386d4c, _0xfcebe2);
          },
          vzfVz: function (_0x14ac68, _0x3ff95e) {
            const _0x2fb039 = _0x3da3;
            return _0x125f1d[_0x2fb039(0x66e, '1!$B')](_0x14ac68, _0x3ff95e);
          },
          AWXOD: _0x125f1d[_0xf61678(0x3f5, 'o1!b')],
          qlbKB: function (_0x35370b, _0x3340e1) {
            return _0x125f1d['WzaUF'](_0x35370b, _0x3340e1);
          },
        };
      if (
        _0x125f1d[_0xf61678(0x4c5, 'Ix9w')](
          _0x125f1d[_0xf61678(0x6c6, 'z@b#')],
          _0x125f1d[_0xf61678(0x3a8, 'Sb3(')]
        )
      ) {
        _0x125f1d[_0xf61678(0x4cb, 'yg&L')](requestAnimationFrame, _0x1e4428),
          TWEEN[_0xf61678(0x79d, 'XYL^')](),
          this['labelRenderer'][_0xf61678(0x5d8, 'f7KG')](
            this[_0xf61678(0x3b2, '@RzQ')],
            this['camera']
          ),
          this[_0xf61678(0x468, 's7aT')](),
          this[_0xf61678(0x3c8, 'cSG3')]['render']();
        if (this['water'])
          this[_0xf61678(0x77d, 'XZDo')][_0xf61678(0x607, 'o1!b')][
            _0xf61678(0x41d, '$m][')
          ][_0x125f1d['bdUew']][_0xf61678(0x59f, '@RzQ')] += _0x125f1d[
            _0xf61678(0x43b, 'qOnr')
          ](0x1, 0x3c);
        if (
          _0x125f1d[_0xf61678(0x5cb, 'TZrH')](
            this[_0xf61678(0x3fe, 'BwQE')][_0xf61678(0x76f, '8%Yf')],
            0x0
          )
        )
          for (
            let _0x274899 = 0x0;
            _0x125f1d[_0xf61678(0x683, 'o1!b')](
              _0x274899,
              this['streamlines'][_0xf61678(0x3b3, '1!$B')]
            );
            _0x274899++
          ) {
            if (
              _0x125f1d['QYEZt'](
                _0x125f1d['gNseG'],
                _0x125f1d[_0xf61678(0x5e1, 'z@b#')]
              )
            ) {
              const _0x4156b6 = this['streamlines'][_0x274899];
              if (
                _0x125f1d[_0xf61678(0x3a3, 'c6pd')](
                  _0x4156b6[_0xf61678(0x652, 'D7Uc')]['y'],
                  0x28
                )
              )
                _0x4156b6[_0xf61678(0x4a1, 'wxiv')]['y'] = -0x5;
              _0x4156b6[_0xf61678(0x6cc, '*eSd')]['y'] += _0x125f1d['CUsIh'](
                0.02,
                _0x4156b6[_0xf61678(0x5c5, '3)uO')]
              );
            } else {
              this[_0xf61678(0x633, 'ApUb')][_0xf61678(0x604, 'D7Uc')][
                _0xf61678(0x36f, 's7aT')
              ]((_0x10f42e) => {
                const _0x14f342 = _0xf61678;
                if (!_0x10f42e[_0x14f342(0x5d4, 'c6pd')])
                  _0x10f42e['visible'] = !0x0;
              });
              let _0x13322d = 0x0;
              while (
                _0x54f2a8[_0xf61678(0x209, '1!$B')](
                  _0x13322d,
                  this[_0xf61678(0x3c9, 'oYLf')][_0xf61678(0x176, 'wxiv')][
                    _0xf61678(0x1a8, '3)uO')
                  ]
                )
              ) {
                this[_0xf61678(0x75e, 'BwQE')][_0xf61678(0x35b, 'BwQE')][
                  _0xf61678(0x4e1, '1!$B')
                ]((_0x17e6cb, _0x1e6b2d) => {
                  const _0x3a9ed5 = _0xf61678;
                  if (
                    !_0x17e6cb[_0x3a9ed5(0x2f2, 'qOnr')] ||
                    _0x1e6b2d == _0x13322d ||
                    !this[_0x3a9ed5(0x443, 'c6pd')][_0x3a9ed5(0x395, 'ApUb')][
                      _0x13322d
                    ][_0x3a9ed5(0x4ac, 'Q9e[')]
                  )
                    return;
                  const _0x66fb22 = new _0x53ce63()
                    [_0x3a9ed5(0x30e, 'Zh9d')](
                      _0x17e6cb[_0x3a9ed5(0x5c4, 'f7KG')]
                    )
                    ['add'](
                      new _0x28ad48()[_0x3a9ed5(0x36a, 'qOnr')](
                        this[_0x3a9ed5(0x3e1, 'bvRN')]['children'][_0x13322d][
                          _0x3a9ed5(0x423, 'Ix9w')
                        ]
                      )
                    )
                    [_0x3a9ed5(0x238, 'T#oD')](0x2);
                  if (
                    _0x54f2a8[_0x3a9ed5(0x2ec, 'c6pd')](
                      _0x66fb22[_0x3a9ed5(0x43e, 'BwQE')](
                        this[_0x3a9ed5(0x60c, 'bvRN')][_0x3a9ed5(0x423, 'Ix9w')]
                      ),
                      0x3c
                    )
                  )
                    _0x17e6cb['visible'] = !!0x0;
                }),
                  _0x13322d++;
              }
            }
          }
        if (this['ship']) {
          this[_0xf61678(0x3cc, 'o!d*')]['position']['x'] += 0.04;
          if (
            this[_0xf61678(0x1e0, '8%Yf')][_0xf61678(0x38b, 'XYL^')]['x'] > 0x3c
          )
            this[_0xf61678(0x727, '3)uO')]['position']['x'] = 3.9;
        }
        this[_0xf61678(0x1f3, '8%Yf')][_0xf61678(0x572, 'f7KG')] > 0x0 &&
          this['lines'][_0xf61678(0x76c, '8(4w')]((_0xacd99d) => {
            const _0x2695cb = _0xf61678;
            _0x54f2a8[_0x2695cb(0x54f, 'o!d*')](
              _0xacd99d['material'][_0x2695cb(0x42c, 'yg&L')][
                _0x2695cb(0x592, 'Yhco')
              ]['value'],
              0x1
            ) &&
              (_0xacd99d[_0x2695cb(0x506, 's7aT')][_0x2695cb(0x283, 'Q9e[')][
                _0x2695cb(0x24d, 'ft9i')
              ][_0x2695cb(0x421, 'D@kl')] = 0x0),
              (_0xacd99d['material']['uniforms'][_0x2695cb(0x3ed, 'aCG]')][
                'value'
              ] += 0.001);
          });
        if (
          _0x125f1d['FsjQC'](
            this[_0xf61678(0x34d, 'yg&L')][_0xf61678(0x166, 'aCG]')],
            0x0
          )
        ) {
          if (
            _0x125f1d['ojGRf'](
              _0x125f1d[_0xf61678(0x2fa, 'XYL^')],
              _0x125f1d['aybKT']
            )
          ) {
            const _0x4fffea = {
              oDTJM: function (_0x50ed79, _0x306279) {
                return _0x50ed79 == _0x306279;
              },
            };
            this[_0xf61678(0x6ad, 'qOnr')][_0xf61678(0x6cf, 'D7Uc')](
              (_0x3849eb) => {
                const _0x17b978 = _0xf61678;
                if (!_0x3849eb[_0x17b978(0x4ab, '3)uO')]) return;
                _0x4fffea[_0x17b978(0x509, 'TZrH')](
                  _0x3849eb[_0x17b978(0x3f6, 'D@kl')],
                  '网格'
                ) &&
                  ((_0x3849eb[_0x17b978(0x3db, 'z@b#')][
                    _0x17b978(0x3bc, 'oYLf')
                  ] = _0x438141),
                  (_0x3849eb[_0x17b978(0x6f5, 'bvRN')][
                    _0x17b978(0x4c1, 'yg&L')
                  ] = !0x0));
              }
            );
          } else
            this[_0xf61678(0x1cb, 'z$rz')][_0xf61678(0x31c, 'XYL^')](
              (_0x572bb6, _0x89f9b5) => {
                const _0x18d88c = _0xf61678;
                if ('katWn' !== _0x54f2a8[_0x18d88c(0x6d6, 'Yhco')])
                  _0x572bb6[_0x18d88c(0x11e, '6MN7')][
                    _0x18d88c(0x569, 'bvRN')
                  ] = _0x54f2a8['qlbKB'](
                    -this['controls'][_0x18d88c(0x268, 'XZDo')](),
                    Math['PI'] / 0x2
                  );
                else {
                  if (!_0x55e08c[_0x18d88c(0x4c9, '8(4w')]) return;
                  _0x5480f9[_0x18d88c(0x20b, 'Njc^')]['emissive'] =
                    new _0x37f12c(_0x2ef110);
                }
              }
            );
        }
      } else
        _0x230449[_0xf61678(0x4fc, 'wS^x')][_0xf61678(0x757, 'TZrH')] =
          _0xf61678(0x574, 'TZrH');
    };
    _0x125f1d['aFsLt'](_0x1e4428);
  }
  [_0x179150(0x29a, 'T#oD')]() {
    const _0x58a41f = _0x179150,
      _0x17879e = {
        QZjfD: function (_0x187c04, _0x3895b0) {
          return _0x187c04 === _0x3895b0;
        },
        flAli: 'pickDevice',
        vJdta: function (_0x48f00e, _0x51fdea) {
          return _0x48f00e === _0x51fdea;
        },
        hptGH: function (_0x3e7f84, _0x1f3a22) {
          return _0x3e7f84(_0x1f3a22);
        },
        YVWql: function (_0xaeec3f, _0x5de99e) {
          return _0xaeec3f === _0x5de99e;
        },
        gpLdG: _0x58a41f(0x16a, 'ApUb'),
        omVYJ: function (_0x2f14ee, _0xdc221f) {
          return _0x2f14ee > _0xdc221f;
        },
        MLYwh: 'vhEtc',
        LaPnl: 'amdBA',
        AbBSZ: _0x58a41f(0x3ee, 'Sb3('),
        SPtnQ: _0x58a41f(0x722, 'yg&L'),
        nDoSF: 'resolution',
        dKmwv: function (_0x5d7a4e, _0x538fbd) {
          return _0x5d7a4e / _0x538fbd;
        },
        vXmKF: function (_0x33b54a, _0x17620e) {
          return _0x33b54a / _0x17620e;
        },
        gIMtW: function (_0x57bf47, _0x309137) {
          return _0x57bf47 * _0x309137;
        },
        YXxBu: 'absolute',
        whMxQ: _0x58a41f(0x39f, 'AMG9'),
        WXCVJ: function (_0x19ebeb, _0xcec041) {
          return _0x19ebeb * _0xcec041;
        },
        NEpBj: _0x58a41f(0x332, 'AMG9'),
        ZoFQh: _0x58a41f(0x404, ')39O'),
        twURQ: _0x58a41f(0x278, 'XYL^'),
      };
    (this['scene'] = new Scene()),
      (this[_0x58a41f(0x207, 'xHAe')] = new AmbientLight(0x537087, 1.5)),
      this[_0x58a41f(0x24a, 'wS^x')][_0x58a41f(0x14f, 'Ix9w')](
        this[_0x58a41f(0x6b5, '3)uO')]
      ),
      (this[_0x58a41f(0x145, 'xHAe')] = new DirectionalLight(0x7de5e5, 1.5)),
      this[_0x58a41f(0x352, 'AMG9')]['position'][_0x58a41f(0x3d2, '@RzQ')](
        0x0,
        0x12c,
        0x514
      ),
      this[_0x58a41f(0x522, ']i^)')][_0x58a41f(0x621, 'aCG]')](
        this['directionalLight']
      ),
      (this[_0x58a41f(0x479, '@RzQ')] = new DirectionalLight(0xc2f6f4, 0.1)),
      this[_0x58a41f(0x600, 'z$rz')]['position']['set'](0x0, 0x12c, 0x0),
      this['scene']['add'](this[_0x58a41f(0x511, 'f7KG')]),
      (this[_0x58a41f(0x54d, 'c6pd')] = new PerspectiveCamera(
        0x1e,
        this[_0x58a41f(0x115, 'z$rz')] / this[_0x58a41f(0x1a9, 'c6pd')],
        0x1,
        0x3e8
      ));
    const _0x5798fb = {
      precision: _0x17879e[_0x58a41f(0x30b, ')39O')],
      antialias: !0x0,
      logarithmicDepthBuffer: !!0x0,
      depth: !0x0,
      preserveDrawingBuffer: !!0x0,
      alpha: !0x0,
    };
    (this['renderer'] = new WebGLRenderer(_0x5798fb)),
      this['renderer'][_0x58a41f(0x770, 'yg&L')](
        this[_0x58a41f(0x703, 'ft9i')],
        this['containerHeight']
      ),
      this[_0x58a41f(0x204, '9s2V')]['setPixelRatio'](
        window[_0x58a41f(0x1df, 'Q9e[')]
      ),
      this[_0x58a41f(0x56c, 's7aT')][_0x58a41f(0x67c, 'Ix9w')](0x0, 0x1),
      (this[_0x58a41f(0x127, 'o1!b')][_0x58a41f(0x41b, 'bvRN')] =
        ACESFilmicToneMapping),
      (this[_0x58a41f(0x1de, 'cSG3')][_0x58a41f(0x6db, 'o1!b')] = Math[
        _0x58a41f(0x729, '*YS&')
      ](params[_0x58a41f(0x31b, '6Zuw')], 0x4)),
      (this[_0x58a41f(0x1b5, 'z@b#')]['outputEncoding'] = sRGBEncoding),
      (this[_0x58a41f(0x45c, 'h4vQ')][_0x58a41f(0x4da, 'D7Uc')] = !0x0);
    const _0x504ab2 = new RenderPass(
        this[_0x58a41f(0x14a, 'D7Uc')],
        this['camera']
      ),
      _0x13901d = new UnrealBloomPass(
        new Vector2(this['containerWidth'], this[_0x58a41f(0x46f, 'ft9i')]),
        1.5,
        0.4,
        0.85
      );
    (_0x13901d['threshold'] = params['bloomThreshold']),
      (_0x13901d['strength'] = params[_0x58a41f(0x175, 'qOnr')]),
      (_0x13901d[_0x58a41f(0x5f8, 'Njc^')] = params[_0x58a41f(0x21e, '%1gN')]),
      (this['bloomComposer'] = new EffectComposer(this['renderer'])),
      (this[_0x58a41f(0x333, 'ft9i')][_0x58a41f(0x218, '$m][')] = ![]),
      this[_0x58a41f(0x549, 'BwQE')][_0x58a41f(0x349, '%1gN')](_0x504ab2),
      this['bloomComposer'][_0x58a41f(0x1c3, 'Sb3(')](_0x13901d);
    const _0x148dfb = _0x58a41f(0x3b4, 'TZrH'),
      _0x3d9c34 = _0x58a41f(0x498, '6MN7'),
      _0x11c73f = new ShaderPass(
        new ShaderMaterial({
          uniforms: {
            baseTexture: { value: null },
            bloomTexture: {
              value:
                this[_0x58a41f(0x24b, 'oYLf')][_0x58a41f(0x6b7, '8(4w')][
                  _0x58a41f(0x23f, 'Yhco')
                ],
            },
          },
          vertexShader: _0x148dfb,
          fragmentShader: _0x3d9c34,
          defines: {},
        }),
        _0x17879e[_0x58a41f(0x2e6, ')39O')]
      );
    (_0x11c73f[_0x58a41f(0x32a, 'qOnr')] = !![]),
      (this[_0x58a41f(0x5af, '$m][')] = new EffectComposer(this['renderer'])),
      this['finalComposer'][_0x58a41f(0x55e, 'Yhco')](_0x504ab2),
      this[_0x58a41f(0x48d, 'TZrH')][_0x58a41f(0x349, '%1gN')](_0x11c73f),
      (this[_0x58a41f(0x216, '3)uO')] = new ShaderPass(FXAAShader));
    const _0x2c5ab5 =
      this[_0x58a41f(0x18f, ')39O')][_0x58a41f(0x649, 'D7Uc')]();
    (this[_0x58a41f(0x388, 'TZrH')][_0x58a41f(0x5ec, 'TZrH')][
      _0x58a41f(0x78b, 'f7KG')
    ][_0x17879e[_0x58a41f(0x78a, '$pop')]][_0x58a41f(0x4ff, 'xHAe')]['x'] =
      _0x17879e['dKmwv'](0x1, this['containerWidth'] * _0x2c5ab5)),
      (this[_0x58a41f(0x325, 'Sb3(')][_0x58a41f(0x491, '8%Yf')]['uniforms'][
        _0x17879e[_0x58a41f(0x3b7, 'D@kl')]
      ][_0x58a41f(0x6d3, ')39O')]['y'] = _0x17879e[_0x58a41f(0x14c, '$pop')](
        0x1,
        _0x17879e['gIMtW'](this['containerHeight'], _0x2c5ab5)
      )),
      this['finalComposer'][_0x58a41f(0x55e, 'Yhco')](
        this[_0x58a41f(0x414, 'wS^x')]
      ),
      this[_0x58a41f(0x52e, 'f7KG')][_0x58a41f(0x189, '*YS&')](
        this[_0x58a41f(0x26a, '1!$B')][_0x58a41f(0x5c0, 'o1!b')]
      ),
      (this[_0x58a41f(0x2a1, 'oYLf')] = new CSS2DRenderer()),
      this['labelRenderer'][_0x58a41f(0x266, '$m][')](
        this[_0x58a41f(0x3d6, 'z@b#')],
        this['containerHeight']
      ),
      (this[_0x58a41f(0x59a, 'Njc^')][_0x58a41f(0x601, 'ApUb')][
        _0x58a41f(0x5e2, '8(4w')
      ][_0x58a41f(0x5a9, 'XZDo')] = _0x17879e[_0x58a41f(0x622, '%1gN')]),
      (this[_0x58a41f(0x477, '$pop')]['domElement'][_0x58a41f(0x4fc, 'wS^x')][
        _0x58a41f(0x170, 'Yhco')
      ] = _0x17879e[_0x58a41f(0x227, 'z$rz')]),
      this[_0x58a41f(0x315, 'BwQE')]['appendChild'](
        this['labelRenderer']['domElement']
      ),
      (this['controls'] = new OrbitControls(
        this[_0x58a41f(0x65e, 'Q9e[')],
        this[_0x58a41f(0x471, 'Q9e[')][_0x58a41f(0x1db, 'o!d*')]
      )),
      (this['controls'][_0x58a41f(0x67a, 'Njc^')] = _0x17879e[
        _0x58a41f(0x1dd, ']i^)')
      ](Math['PI'], 0.3)),
      (this['controls'][_0x58a41f(0x2ab, 'c6pd')] = 0x5),
      (this[_0x58a41f(0x76d, 'o1!b')]['maxDistance'] = 0xfa),
      this[_0x58a41f(0x3e7, 'Ix9w')][_0x58a41f(0x5bb, '$pop')][
        _0x58a41f(0x71b, 'aCG]')
      ](0x52, 0x78, 0x6c),
      this['controls'][_0x58a41f(0x61c, 'Ix9w')]['set'](-0x3, -0x9, -0x8),
      (this['camera'][_0x58a41f(0x669, 'ApUb')] = new Vector3()[
        _0x58a41f(0x767, '*eSd')
      ](this[_0x58a41f(0x4dc, 'Zh9d')][_0x58a41f(0x226, 'ft9i')])),
      (this['controls'][_0x58a41f(0x2a5, 'Q9e[')] = new Vector3()['copy'](
        this[_0x58a41f(0x126, 'h4vQ')]['target']
      )),
      this[_0x58a41f(0x184, 'TZrH')][_0x58a41f(0x5f5, 'o1!b')](),
      this[_0x58a41f(0x4e5, '*YS&')][_0x58a41f(0x17c, 'aCG]')](
        _0x17879e[_0x58a41f(0x594, 'XYL^')],
        (_0x1d81f9) => {
          const _0x3f90d7 = _0x58a41f;
          if (
            _0x17879e[_0x3f90d7(0x17f, 'cSG3')](
              _0x17879e[_0x3f90d7(0x737, 'yg&L')],
              _0x17879e[_0x3f90d7(0x427, 'Sb3(')]
            )
          ) {
            const _0x2b64d5 = new Vector3()['copy'](
              this[_0x3f90d7(0x3ca, 'T#oD')][_0x3f90d7(0x18a, 'TZrH')]
            );
            _0x17879e['omVYJ'](_0x2b64d5[_0x3f90d7(0x58a, '6Zuw')](), 0x3c)
              ? _0x17879e[_0x3f90d7(0x2e8, '8%Yf')] !== 'vhEtc'
                ? (_0x31f0f2[_0x3f90d7(0x198, 'BwQE')][
                    _0x3f90d7(0x4fa, 'Yhco')
                  ](),
                  _0x18025e['parent'][_0x3f90d7(0x69f, '*YS&')](_0x3a79a8))
                : (this[_0x3f90d7(0x2dc, '6Zuw')][_0x3f90d7(0x716, '1!$B')][
                    'copy'
                  ](this[_0x3f90d7(0x360, 'qOnr')][_0x3f90d7(0x484, 'AMG9')]),
                  this[_0x3f90d7(0x236, 'BwQE')]['target'][
                    _0x3f90d7(0x698, 'Njc^')
                  ](this[_0x3f90d7(0x356, '@RzQ')][_0x3f90d7(0x61d, 'z$rz')]))
              : ((this[_0x3f90d7(0x581, 'BwQE')]['position1'] = new Vector3()[
                  _0x3f90d7(0x788, 'bvRN')
                ](this[_0x3f90d7(0x6c7, ')39O')]['position'])),
                (this[_0x3f90d7(0x70d, 'oYLf')][_0x3f90d7(0x286, 's7aT')] =
                  new Vector3()[_0x3f90d7(0x3e2, 'Yhco')](
                    this['controls'][_0x3f90d7(0x3ac, '6Zuw')]
                  )));
          } else {
            if (_0x17879e[_0x3f90d7(0x1d9, 'fx&2')](_0x489e16, 0x1))
              this[_0x3f90d7(0x776, 'z$rz')][_0x3f90d7(0x187, '%1gN')](
                _0x17879e['flAli'],
                _0x2c212f
              );
            else {
              if (_0x17879e[_0x3f90d7(0x1b4, 'oYLf')](_0x14093d, 0x2))
                this[_0x3f90d7(0x1f6, 'z@b#')][_0x3f90d7(0x1ad, '^Pri')](
                  'flyToDevice',
                  _0xd69596
                );
            }
            (_0x346b87 = 0x1),
              _0x17879e[_0x3f90d7(0x387, 'T#oD')](_0x1cbae7, _0x5a8c79),
              (_0x55bced = null);
          }
        }
      ),
      (this[_0x58a41f(0x161, 'z@b#')] = new GLTFLoader());
    const _0x1927f2 = new DRACOLoader();
    _0x1927f2[_0x58a41f(0x53a, 'Sb3(')](_0x58a41f(0x47f, 'bvRN')),
      this[_0x58a41f(0x4a6, 'wxiv')]['setDRACOLoader'](_0x1927f2);
    function _0x20f9cd(_0x48f9b3) {
      const _0x152004 = _0x58a41f;
      _0x48f9b3['material'] &&
        (_0x17879e['vJdta']('SprOH', _0x17879e['LaPnl'])
          ? (this[_0x152004(0x667, '@RzQ')][_0x152004(0x631, ']i^)')] =
              new _0x4c2cf3(_0x2f2be9))
          : _0x48f9b3['material'][_0x152004(0x496, 'wxiv')]());
    }
    (this[_0x58a41f(0x405, '*YS&')] = new Group()),
      this['scene'][_0x58a41f(0x654, '1!$B')](this[_0x58a41f(0x302, 'Q9e[')]),
      (this[_0x58a41f(0x708, 'aCG]')] = new Group()),
      (this[_0x58a41f(0x57e, '6Zuw')][_0x58a41f(0x2c3, 'D7Uc')] =
        _0x17879e[_0x58a41f(0x6ef, '9s2V')]),
      this[_0x58a41f(0x4b4, '*YS&')]['add'](this[_0x58a41f(0x404, ')39O')]),
      (this[_0x58a41f(0x172, 'XZDo')] = new Group()),
      (this[_0x58a41f(0x320, '8(4w')][_0x58a41f(0x5a4, 'c6pd')] = _0x58a41f(
        0x2c8,
        'aCG]'
      )),
      this[_0x58a41f(0x136, 'fx&2')][_0x58a41f(0x40e, 'wS^x')](
        this[_0x58a41f(0x27c, 'f7KG')]
      ),
      (this[_0x58a41f(0x787, '%1gN')] = new Raycaster()),
      (this[_0x58a41f(0x430, 'XYL^')] = new Vector2()),
      this['labelRenderer'][_0x58a41f(0x171, 'Ix9w')][_0x58a41f(0x205, 'h4vQ')](
        _0x17879e['twURQ'],
        this['mouseUp']['bind'](this),
        !!0x0
      ),
      this[_0x58a41f(0x756, '$m][')]();
  }
  ['mouseUp'](_0x173e0d) {
    const _0x420d61 = _0x179150,
      _0x50fa07 = {
        Aijsu: function (_0x370571, _0x279d50) {
          return _0x370571 !== _0x279d50;
        },
        EgWkk: function (_0x53de29, _0x23d972) {
          return _0x53de29 - _0x23d972;
        },
        CMoqe: function (_0x1fdc94, _0xf05548) {
          return _0x1fdc94 * _0xf05548;
        },
        PooHl: function (_0x2fa6c7, _0xe081de) {
          return _0x2fa6c7 / _0xe081de;
        },
        Xnpbq: function (_0x404282, _0x8a4fc6) {
          return _0x404282 + _0x8a4fc6;
        },
        bnEZy: function (_0xe50429, _0x40840f) {
          return _0xe50429 / _0x40840f;
        },
        uJRrv: function (_0x3698c9, _0x1eb0ff) {
          return _0x3698c9(_0x1eb0ff);
        },
      };
    _0x173e0d[_0x420d61(0x1f8, '1!$B')]();
    if (_0x50fa07[_0x420d61(0x4ba, '^Pri')](_0x173e0d['which'], 0x1)) return;
    (this[_0x420d61(0x4c6, 'Q9e[')]['x'] = _0x50fa07['EgWkk'](
      _0x50fa07[_0x420d61(0x355, 'yg&L')](
        _0x50fa07['PooHl'](
          _0x173e0d[_0x420d61(0x20e, 's7aT')],
          this['containerWidth']
        ),
        0x2
      ),
      0x1
    )),
      (this[_0x420d61(0x22f, '8%Yf')]['y'] = _0x50fa07['Xnpbq'](
        -_0x50fa07[_0x420d61(0x12b, 'f7KG')](
          _0x173e0d[_0x420d61(0x614, 'Ix9w')],
          this[_0x420d61(0x37a, ')39O')]
        ) * 0x2,
        0x1
      )),
      this[_0x420d61(0x16b, 'qOnr')][_0x420d61(0x1a5, 'h4vQ')](
        this[_0x420d61(0x19f, 'oYLf')],
        this['camera']
      );
    const _0x423a7b = this[_0x420d61(0x501, 'AMG9')][_0x420d61(0x233, '%1gN')](
      this[_0x420d61(0x36c, ']i^)')][_0x420d61(0x606, '1!$B')]
    );
    if (_0x423a7b[_0x420d61(0x3a6, 'bvRN')] < 0x1) return;
    const _0x5bdce6 = {};
    (_0x5bdce6['x'] = _0x50fa07[_0x420d61(0x327, 'Q9e[')](
      Number,
      _0x423a7b[0x0]['point']['x'][_0x420d61(0x2c2, '%1gN')](0x3)
    )),
      (_0x5bdce6['y'] = Number(
        _0x423a7b[0x0]['point']['y'][_0x420d61(0x65b, 'z@b#')](0x3)
      )),
      (_0x5bdce6['z'] = _0x50fa07[_0x420d61(0x5b0, 's7aT')](
        Number,
        _0x423a7b[0x0][_0x420d61(0x6ca, 'Q9e[')]['z']['toFixed'](0x3)
      ));
    if (this[_0x420d61(0x5c3, '9s2V')])
      this[_0x420d61(0x786, 'Sb3(')](
        new Vector3(_0x5bdce6['x'], _0x5bdce6['y'], _0x5bdce6['z'])
      );
  }
  [_0x179150(0x431, 'Q9e[')]() {
    const _0x2801aa = _0x179150,
      _0x23d663 = {
        VNvds: 'resolution',
        nkjIL: function (_0x1ac9b8, _0x4f197c) {
          return _0x1ac9b8 / _0x4f197c;
        },
        GhCCj: function (_0x5f1bd2, _0x20a6c5) {
          return _0x5f1bd2 * _0x20a6c5;
        },
        uCrpi: function (_0x188f6c, _0xa9983f) {
          return _0x188f6c / _0xa9983f;
        },
      };
    (this[_0x2801aa(0x541, 'Sb3(')] =
      this[_0x2801aa(0x61b, 'oYLf')][_0x2801aa(0x14b, 'D7Uc')]),
      (this[_0x2801aa(0x144, 'bvRN')] =
        this[_0x2801aa(0x6e5, 'XYL^')]['offsetHeight']),
      (this[_0x2801aa(0x635, 'Sb3(')][_0x2801aa(0x38c, 'ApUb')] =
        this[_0x2801aa(0x502, 'Zh9d')] / this[_0x2801aa(0x22e, '@RzQ')]),
      this[_0x2801aa(0x459, 'f7KG')][_0x2801aa(0x442, 'xHAe')](),
      this[_0x2801aa(0x547, '$pop')][_0x2801aa(0x6ce, 'BwQE')](
        this['containerWidth'],
        this[_0x2801aa(0x546, 'Zh9d')]
      ),
      this[_0x2801aa(0x3fd, 'Q9e[')][_0x2801aa(0x480, 'wS^x')](
        this[_0x2801aa(0x32c, 's7aT')],
        this[_0x2801aa(0x3ad, 'cSG3')]
      ),
      this[_0x2801aa(0x390, '1!$B')][_0x2801aa(0x3d4, '3)uO')](
        this[_0x2801aa(0x42e, '9s2V')],
        this['containerHeight']
      ),
      this[_0x2801aa(0x4bc, 'o!d*')][_0x2801aa(0x3d8, 'z$rz')](
        this[_0x2801aa(0x771, ')39O')],
        this['containerHeight']
      );
    const _0x5c0c67 =
      this[_0x2801aa(0x4d8, '%1gN')][_0x2801aa(0x6f7, '9s2V')]();
    (this[_0x2801aa(0x1c8, 'ApUb')][_0x2801aa(0x51f, 'AMG9')][
      _0x2801aa(0x72a, 'o1!b')
    ][_0x23d663['VNvds']]['value']['x'] = _0x23d663[_0x2801aa(0x33d, 'Yhco')](
      0x1,
      _0x23d663['GhCCj'](this['containerWidth'], _0x5c0c67)
    )),
      (this[_0x2801aa(0x12c, 'f7KG')][_0x2801aa(0x4c8, 'o!d*')]['uniforms'][
        _0x2801aa(0x372, 'bvRN')
      ][_0x2801aa(0x37e, 'h4vQ')]['y'] = _0x23d663[_0x2801aa(0x72f, 'xHAe')](
        0x1,
        this[_0x2801aa(0x3d7, 'o!d*')] * _0x5c0c67
      ));
  }
  [_0x179150(0x3d0, ']i^)')](_0x483e98) {
    const _0x33b90a = _0x179150,
      _0x54052e = {
        cBwAq: _0x33b90a(0x201, 'z$rz'),
        IvpSd: _0x33b90a(0x4de, '8%Yf'),
        glIKP: _0x33b90a(0x34a, 'wS^x'),
        HTXeo: _0x33b90a(0x398, 'bvRN'),
        YsmCr: function (_0x5b6e94) {
          return _0x5b6e94();
        },
        rygsq: function (_0x257381, _0x9371ca) {
          return _0x257381 === _0x9371ca;
        },
        bbvoa: _0x33b90a(0x323, 'bvRN'),
        eRUvk: function (_0x3fb747, _0x16c020) {
          return _0x3fb747 === _0x16c020;
        },
        TsxBl: 'object',
        lvhpO: function (_0x34746f, _0x8f1f05) {
          return _0x34746f in _0x8f1f05;
        },
        yzvIH: _0x33b90a(0x165, 'T#oD'),
        uHzWc: _0x33b90a(0x2e9, ')39O'),
        mkgtH: _0x33b90a(0x425, 'c6pd'),
        gWTiY: function (_0x32e459, _0x442445) {
          return _0x32e459 !== _0x442445;
        },
        tAYGP: _0x33b90a(0x2c1, 'xHAe'),
        fAeKs: _0x33b90a(0x203, 'Yhco'),
        FXfHa: 'GFUMX',
      };
    while (_0x483e98['children'][_0x33b90a(0x1cd, 'Q9e[')] > 0x0) {
      if (
        _0x54052e[_0x33b90a(0x465, 'Njc^')](
          _0x54052e['fAeKs'],
          _0x54052e[_0x33b90a(0x3e3, '6Zuw')]
        )
      )
        this[_0x33b90a(0x3de, '%1gN')][_0x33b90a(0x5c4, 'f7KG')]['set'](
          -32.91,
          135.76,
          157.6
        ),
          this[_0x33b90a(0x183, '8%Yf')][_0x33b90a(0x248, ']i^)')]['set'](
            -54.01,
            -6.7,
            15.85
          ),
          this['controls']['update'](),
          (this[_0x33b90a(0x1ec, '$pop')][_0x33b90a(0x5a3, 'o!d*')] =
            new _0x356a33()[_0x33b90a(0x6e4, '$pop')](
              this[_0x33b90a(0x446, 'Njc^')]['position']
            )),
          (this['controls']['target0'] = new _0x54390c()[
            _0x33b90a(0x767, '*eSd')
          ](this[_0x33b90a(0x688, 'Sb3(')][_0x33b90a(0x3b1, 'Yhco')])),
          this[_0x33b90a(0x3eb, 'f7KG')]();
      else {
        const _0x3048e8 =
          _0x483e98[_0x33b90a(0x336, 'o!d*')][_0x33b90a(0x59c, 'wS^x')]();
        _0x3048e8['traverse']((_0x5dca5c) => {
          const _0x46035f = _0x33b90a,
            _0x55a290 = {
              kKLRq: _0x54052e['cBwAq'],
              WhPvg: _0x54052e[_0x46035f(0x5ea, 'wS^x')],
              CCQua: function (_0x3e6769, _0x2222cb, _0x3051d0) {
                return _0x3e6769(_0x2222cb, _0x3051d0);
              },
              bjOrs: _0x54052e['glIKP'],
              LTYle: _0x54052e[_0x46035f(0x6fb, '6Zuw')],
              JldFF: _0x46035f(0x139, '$m]['),
              junkz: _0x46035f(0x35f, 'D@kl'),
              mUrJZ: function (_0x393c59) {
                return _0x54052e['YsmCr'](_0x393c59);
              },
            };
          if (_0x5dca5c['isMesh']) {
            if (
              _0x54052e['rygsq'](
                _0x54052e[_0x46035f(0x5da, 'qOnr')],
                _0x46035f(0x44a, 'aCG]')
              )
            ) {
              _0x5dca5c['geometry'][_0x46035f(0x54a, '6Zuw')]();
              if (_0x5dca5c[_0x46035f(0x2f3, 'XYL^')]) {
                _0x5dca5c[_0x46035f(0x198, 'BwQE')][_0x46035f(0x51d, '1!$B')]();
                for (const _0x4686e4 of Object['keys'](_0x5dca5c['material'])) {
                  const _0x70fe3a = _0x5dca5c['material'][_0x4686e4];
                  if (
                    _0x70fe3a &&
                    _0x54052e[_0x46035f(0x23c, 'o!d*')](
                      typeof _0x70fe3a,
                      _0x54052e[_0x46035f(0x21b, 'XYL^')]
                    ) &&
                    _0x54052e['lvhpO'](_0x54052e['yzvIH'], _0x70fe3a)
                  ) {
                    if (
                      _0x54052e[_0x46035f(0x3ef, 'TZrH')] !==
                      _0x54052e[_0x46035f(0x73b, '9s2V')]
                    )
                      _0x70fe3a[_0x46035f(0x1a1, 'bvRN')]();
                    else {
                      const _0xc37357 = _0x46035f(0x6ba, 'bvRN')[
                        _0x46035f(0x110, 'T#oD')
                      ]('|');
                      let _0x2ee8a1 = 0x0;
                      while (!![]) {
                        switch (_0xc37357[_0x2ee8a1++]) {
                          case '0':
                            this[_0x46035f(0x270, '8(4w')](_0x5b526e[0x2]);
                            continue;
                          case '1':
                            this[_0x46035f(0x3d5, 'XZDo')](_0x52b1f[0x0]);
                            continue;
                          case '2':
                            this[_0x46035f(0x52a, 'Sb3(')](_0x54aad6[0x1]);
                            continue;
                          case '3':
                            return;
                          case '4':
                            this[_0x46035f(0x340, '1!$B')](_0x5f56c8[0x3]);
                            continue;
                        }
                        break;
                      }
                    }
                  }
                }
              }
            } else {
              const _0x25161d = { cMAOr: _0x55a290[_0x46035f(0x6c3, 'XZDo')] };
              (this[_0x46035f(0x393, '*YS&')] = new _0x469fb6(
                _0x39ba1a[_0x46035f(0x17a, 's7aT')],
                {
                  textureWidth: 0x200,
                  textureHeight: 0x200,
                  waterNormals: new _0x49db6a()[_0x46035f(0x753, '%1gN')](
                    _0x55a290[_0x46035f(0x13e, 'fx&2')],
                    (_0xcaecc) => {
                      const _0x53de3f = _0x46035f;
                      _0xcaecc[_0x53de3f(0x29b, 'f7KG')] = _0xcaecc['wrapT'] =
                        _0x56264e;
                    }
                  ),
                  sunDirection: this[_0x46035f(0x33a, 'Yhco')][
                    _0x46035f(0x38b, 'XYL^')
                  ]
                    ['clone']()
                    ['normalize'](),
                  sunColor: 0xffffff,
                  waterColor: 0x669ab,
                  distortionScale: 3.7,
                }
              )),
                this[_0x46035f(0x289, 'bvRN')]['layers']['enable'](_0x236339),
                this[_0x46035f(0x393, '*YS&')][_0x46035f(0x4d4, '6MN7')][
                  'copy'
                ](_0x481f05['position']),
                (this[_0x46035f(0x329, 'aCG]')][_0x46035f(0x1d7, 'fx&2')][
                  'uniforms'
                ][_0x46035f(0x1b7, 'h4vQ')][_0x46035f(0x347, 'qOnr')] = 0x1b),
                _0x531be6['parent'][_0x46035f(0x1f2, '3)uO')](
                  this[_0x46035f(0x289, 'bvRN')]
                ),
                _0x55a290[_0x46035f(0x6bc, 'qOnr')](
                  _0x60ada,
                  () => {
                    const _0x2fe4f9 = _0x46035f;
                    _0x3b733a[_0x2fe4f9(0x2be, 'oYLf')][
                      _0x2fe4f9(0x769, 'cSG3')
                    ](),
                      _0x2b76e8[_0x2fe4f9(0x1ac, 'Yhco')][
                        _0x2fe4f9(0x50d, 'cSG3')
                      ](_0x3f1566);
                  },
                  0x0
                );
              const _0x4f1063 = new _0x130912();
              _0x4f1063[_0x46035f(0x202, 'o1!b')][_0x46035f(0x51b, ')39O')](
                0x2710
              ),
                this['scene']['add'](_0x4f1063);
              const _0x23fff0 = _0x4f1063['material']['uniforms'];
              (_0x23fff0[_0x55a290[_0x46035f(0x5dc, 'BwQE')]][
                _0x46035f(0x382, '%1gN')
              ] = 0xa),
                (_0x23fff0[_0x55a290['LTYle']][_0x46035f(0x21c, '6Zuw')] = 0x2),
                (_0x23fff0[_0x55a290['JldFF']]['value'] = 0.005),
                (_0x23fff0[_0x55a290[_0x46035f(0x4a0, 'z$rz')]][
                  _0x46035f(0x5db, 'o1!b')
                ] = 0.8);
              const _0x4e5d13 = { elevation: 0x0, azimuth: 0x0 },
                _0x38f1e1 = new _0x4ea7f9(this['renderer']),
                _0x5c4acc = new _0x688d7d(),
                _0x454484 = () => {
                  const _0x41018d = _0x46035f,
                    _0x38cd0b = _0x52b59b[_0x41018d(0x63c, 'D7Uc')](
                      0x5a - _0x4e5d13[_0x41018d(0x6d2, 'Zh9d')]
                    ),
                    _0xb96aca = _0x322976[_0x41018d(0x4e0, '$m][')](
                      _0x4e5d13['azimuth']
                    );
                  _0x5c4acc[_0x41018d(0x76e, '1!$B')](
                    0x1,
                    _0x38cd0b,
                    _0xb96aca
                  ),
                    _0x4f1063['material']['uniforms'][
                      _0x25161d[_0x41018d(0x796, 'h4vQ')]
                    ][_0x41018d(0x69c, 's7aT')][_0x41018d(0x2dd, '8%Yf')](
                      _0x5c4acc
                    ),
                    this['water'][_0x41018d(0x605, 'Zh9d')][
                      _0x41018d(0x78c, 'T#oD')
                    ]['sunDirection']['value']
                      [_0x41018d(0x3f3, 'TZrH')](_0x5c4acc)
                      [_0x41018d(0x766, '9s2V')]();
                };
              _0x55a290[_0x46035f(0x3a4, '1!$B')](_0x454484);
            }
          }
          if (
            _0x5dca5c['element'] &&
            _0x5dca5c[_0x46035f(0x6bd, '*eSd')][_0x46035f(0x38a, 'Ix9w')]
          ) {
            if (
              _0x54052e[_0x46035f(0x537, 'xHAe')](
                _0x46035f(0x12d, 'XYL^'),
                _0x54052e['tAYGP']
              )
            ) {
              const _0xad229a = _0x540079[_0x46035f(0x4be, 'c6pd')]();
              _0xad229a[_0x46035f(0x5bb, '$pop')]['copy'](
                _0x385a2f[_0x46035f(0x3a0, '*eSd')]
              ),
                _0xad229a['rotation'][_0x46035f(0x585, '*YS&')](
                  _0x16558d['rotation']
                ),
                this['models'][_0x46035f(0x148, '^Pri')](_0xad229a);
            } else
              _0x5dca5c[_0x46035f(0x4e4, 'T#oD')][_0x46035f(0x5f2, 'ApUb')][
                _0x46035f(0x4f5, 'z@b#')
              ](_0x5dca5c[_0x46035f(0x4bb, '3)uO')]);
          }
        }),
          _0x483e98[_0x33b90a(0x411, 'Njc^')](_0x3048e8);
      }
    }
  }
  ['clearScene']() {
    const _0x1c23e = _0x179150;
    this[_0x1c23e(0x5e5, 'T#oD')](this['models']),
      this['renderer'][_0x1c23e(0x239, '9s2V')]();
  }
  [_0x179150(0x4b1, 'wS^x')]() {
    const _0x775ca7 = _0x179150,
      _0x1c1ff5 = {
        kZOXb: _0x775ca7(0x5d1, '6Zuw'),
        xqpxA: function (_0x676060, _0xfb5853) {
          return _0x676060 === _0xfb5853;
        },
        slNFo: 'YGIOA',
        lGfDA: function (_0x29d1a9, _0x2a4410) {
          return _0x29d1a9 / _0x2a4410;
        },
        APMoX: function (_0x4cf04f, _0x9758e9) {
          return _0x4cf04f == _0x9758e9;
        },
        tnEop: function (_0x5ef7c9, _0x34a40f) {
          return _0x5ef7c9 !== _0x34a40f;
        },
        vgrHg: 'RIMrh',
        MiPhL: _0x775ca7(0x4a7, 'Zh9d'),
        NWuKm: _0x775ca7(0x419, 'wxiv'),
        igqOw: 'sunDirection',
        DveDu: function (_0x455830, _0x2a847a) {
          return _0x455830 < _0x2a847a;
        },
        faElB: function (_0x1e8cbe, _0x2859e4) {
          return _0x1e8cbe > _0x2859e4;
        },
        KevCJ: function (_0x3fe57b, _0x49f229) {
          return _0x3fe57b === _0x49f229;
        },
        JKDjH: 'zYOiK',
        KzrVk: function (_0x2e07a4) {
          return _0x2e07a4();
        },
        aoXSx: _0x775ca7(0x677, ')39O'),
        ChMbp: _0x775ca7(0x56f, 'qOnr'),
        uSIzd: '#00486E',
        GDYBu: _0x775ca7(0x781, '*YS&'),
        ndJKT: '#0B8F8F',
        StaVT: '#001617',
        iSBZY: function (_0x2f1b49, _0x1e6b11) {
          return _0x2f1b49 !== _0x1e6b11;
        },
        QNuFM: '#758C8F',
        fRQes: _0x775ca7(0x168, 'o1!b'),
        jRFnh: _0x775ca7(0x293, 'c6pd'),
        cnVjs: function (_0x1a5952, _0x53e2cb, _0x1ef9ba) {
          return _0x1a5952(_0x53e2cb, _0x1ef9ba);
        },
        mikek: function (_0x434ae9, _0x3feb12) {
          return _0x434ae9 * _0x3feb12;
        },
        imxsy: _0x775ca7(0x1ae, 'aCG]'),
        eojZm: 'rFOWl',
        mDezb: _0x775ca7(0x275, 'TZrH'),
        ujMyd: _0x775ca7(0x5c9, 'Zh9d'),
        ZxUDb: function (_0x347fd9, _0x23cb5a) {
          return _0x347fd9 + _0x23cb5a;
        },
        VNfMg: function (_0xcadf02, _0x22c854) {
          return _0xcadf02 * _0x22c854;
        },
        YqXxQ: _0x775ca7(0x640, '*eSd'),
        DZxhe: _0x775ca7(0x1d4, 'Zh9d'),
        fTojf: 'ISTRb',
        SVtyB: _0x775ca7(0x6e2, 'Sb3('),
      };
    this['gltfLoader'][_0x775ca7(0x5aa, '6MN7')](
      _0x1c1ff5[_0x775ca7(0x20f, 'z$rz')],
      (_0x53173e) => {
        const _0x3f13af = _0x775ca7,
          _0xd1fd4 = {
            XxVBD: function (_0x5eeb7c, _0x211f9e) {
              return _0x1c1ff5['APMoX'](_0x5eeb7c, _0x211f9e);
            },
            AuHXd: _0x3f13af(0x4af, 'TZrH'),
            mskdi: function (_0x13b1de, _0xa20c19) {
              const _0x43ab0d = _0x3f13af;
              return _0x1c1ff5[_0x43ab0d(0x155, 'f7KG')](_0x13b1de, _0xa20c19);
            },
            OyxDF: _0x1c1ff5['vgrHg'],
            wnVsh: _0x1c1ff5[_0x3f13af(0x291, '6MN7')],
            jqzrT: function (_0x4ea7b1, _0xebce59) {
              return _0x4ea7b1 - _0xebce59;
            },
            ypgIv: _0x1c1ff5[_0x3f13af(0x2d0, 'BwQE')],
            skTHc: _0x1c1ff5['igqOw'],
            SGcOX: function (_0x4d7c54, _0x223037) {
              return _0x1c1ff5['DveDu'](_0x4d7c54, _0x223037);
            },
            IhnjH: function (_0x59fbb, _0x33fa63) {
              return _0x1c1ff5['faElB'](_0x59fbb, _0x33fa63);
            },
            wVRVo: function (_0xbb3441, _0x33295e) {
              const _0x150457 = _0x3f13af;
              return _0x1c1ff5[_0x150457(0x735, 'AMG9')](_0xbb3441, _0x33295e);
            },
            RbGRq: _0x1c1ff5['JKDjH'],
            viYoK: 'Shuhl',
            aprUq: _0x3f13af(0x694, 'Q9e['),
            ZpRJx: _0x3f13af(0x2df, 'XZDo'),
            XitZF: _0x3f13af(0x4b9, '$m]['),
            PjGsD: function (_0x353c3b) {
              const _0x91df70 = _0x3f13af;
              return _0x1c1ff5[_0x91df70(0x2bc, 'BwQE')](_0x353c3b);
            },
            mlTpE: _0x1c1ff5[_0x3f13af(0x10c, 'yg&L')],
            OFaPP: _0x3f13af(0x256, '8(4w'),
            jKvFx: _0x3f13af(0x710, 'Sb3('),
            oTNGA: _0x1c1ff5[_0x3f13af(0x733, '%1gN')],
            cAudl: _0x1c1ff5[_0x3f13af(0x691, 'ApUb')],
            TPfyy: function (_0x4918d8, _0x1ad063) {
              const _0x13015e = _0x3f13af;
              return _0x1c1ff5[_0x13015e(0x3ae, 'cSG3')](_0x4918d8, _0x1ad063);
            },
            akLWL: _0x1c1ff5[_0x3f13af(0x6e8, '9s2V')],
            XVUZI: _0x1c1ff5[_0x3f13af(0x532, '*YS&')],
            PegGq: _0x1c1ff5[_0x3f13af(0x2ef, 'Njc^')],
            BUigA: _0x3f13af(0x60b, 'Njc^'),
            NizVU: '网格275_1',
            OTUQW: function (_0x3bc7f7, _0x536418) {
              const _0x3f340a = _0x3f13af;
              return _0x1c1ff5[_0x3f340a(0x483, 'D7Uc')](_0x3bc7f7, _0x536418);
            },
            dRyXV: 'nNkUJ',
            yQwTO: _0x1c1ff5[_0x3f13af(0x5a1, 'yg&L')],
            tHnva: function (_0x2becae, _0x4aabf8) {
              return _0x2becae(_0x4aabf8);
            },
            UgrjR: function (_0x32dc45, _0x71a411) {
              return _0x1c1ff5['lGfDA'](_0x32dc45, _0x71a411);
            },
          };
        _0x53173e['scene'][_0x3f13af(0x3fb, '9s2V')]((_0x17ba20) => {
          const _0x48f133 = _0x3f13af;
          if (
            _0xd1fd4['wVRVo'](
              _0xd1fd4[_0x48f133(0x6d4, '9s2V')],
              _0xd1fd4['viYoK']
            )
          ) {
            if (!_0x51e885[_0x48f133(0x53d, 'Q9e[')]) return;
            _0xd1fd4[_0x48f133(0x751, 'oYLf')](
              _0x3530e0['name'],
              _0xd1fd4[_0x48f133(0x28f, '*YS&')]
            ) &&
              ((_0xdcf113[_0x48f133(0x6fc, ']i^)')][_0x48f133(0x182, 'TZrH')] =
                new _0x57034a(_0x575bf5)),
              (_0x267a81[_0x48f133(0x3dc, 'qOnr')]['needsUpdate'] = !0x0));
          } else {
            if (_0x17ba20[_0x48f133(0x37d, 'bvRN')]) {
              _0x17ba20[_0x48f133(0x3c1, '8(4w')][_0x48f133(0x587, 'D7Uc')] =
                DoubleSide;
              if (_0x17ba20[_0x48f133(0x263, 'Zh9d')] === '海面') {
                (this[_0x48f133(0x682, '@RzQ')] = new Water(
                  _0x17ba20[_0x48f133(0x1a0, 'Q9e[')],
                  {
                    textureWidth: 0x200,
                    textureHeight: 0x200,
                    waterNormals: new TextureLoader()[_0x48f133(0x2ae, 'z@b#')](
                      _0xd1fd4[_0x48f133(0x2e4, 'yg&L')],
                      (_0x5e5ac4) => {
                        const _0x6f9637 = _0x48f133;
                        _0x5e5ac4[_0x6f9637(0x29b, 'f7KG')] = _0x5e5ac4[
                          _0x6f9637(0x69e, 'f7KG')
                        ] = RepeatWrapping;
                      }
                    ),
                    sunDirection: this[_0x48f133(0x313, 'T#oD')]['position']
                      [_0x48f133(0x25b, 'Zh9d')]()
                      [_0x48f133(0x50e, 'XZDo')](),
                    sunColor: 0xffffff,
                    waterColor: 0x669ab,
                    distortionScale: 3.7,
                  }
                )),
                  this[_0x48f133(0x2de, '9s2V')][_0x48f133(0x48a, 'T#oD')][
                    _0x48f133(0x668, '%1gN')
                  ](ENTIRE_SCENE),
                  this[_0x48f133(0x5b2, 'TZrH')]['position'][
                    _0x48f133(0x25f, 'fx&2')
                  ](_0x17ba20['position']),
                  (this['water']['material'][_0x48f133(0x486, '$pop')][
                    _0x48f133(0x469, 'TZrH')
                  ]['value'] = 0x1b),
                  _0x17ba20['parent'][_0x48f133(0x5de, 'cSG3')](
                    this[_0x48f133(0x1f7, 'Sb3(')]
                  ),
                  setTimeout(() => {
                    const _0x5c31c9 = _0x48f133;
                    _0x17ba20['material'][_0x5c31c9(0x371, 'fx&2')](),
                      _0x17ba20[_0x5c31c9(0x4ea, 'z$rz')]['remove'](_0x17ba20);
                  }, 0x0);
                const _0x174971 = new Sky();
                _0x174971[_0x48f133(0x3bd, 'T#oD')][_0x48f133(0x344, 'Zh9d')](
                  0x2710
                ),
                  this[_0x48f133(0x62a, '6MN7')][_0x48f133(0x1ce, ')39O')](
                    _0x174971
                  );
                const _0x533a8d =
                  _0x174971[_0x48f133(0x6fc, ']i^)')][_0x48f133(0x39a, '@RzQ')];
                (_0x533a8d['turbidity']['value'] = 0xa),
                  (_0x533a8d['rayleigh'][_0x48f133(0x558, 'D7Uc')] = 0x2),
                  (_0x533a8d[_0xd1fd4['ZpRJx']][
                    _0x48f133(0x4f4, 'AMG9')
                  ] = 0.005),
                  (_0x533a8d[_0xd1fd4[_0x48f133(0x1e9, 'XZDo')]][
                    _0x48f133(0x5fe, '$m][')
                  ] = 0.8);
                const _0x3268dc = { elevation: 0x0, azimuth: 0x0 },
                  _0xccee72 = new PMREMGenerator(
                    this[_0x48f133(0x461, 'wxiv')]
                  ),
                  _0x2106a1 = new Vector3(),
                  _0x4f1cb5 = () => {
                    const _0x1db031 = _0x48f133;
                    if (
                      _0xd1fd4[_0x1db031(0x6e0, 'wxiv')](
                        _0xd1fd4['OyxDF'],
                        _0xd1fd4[_0x1db031(0x28e, 'D7Uc')]
                      )
                    ) {
                      const _0x3c8de1 = MathUtils[_0x1db031(0x648, 'Zh9d')](
                          _0xd1fd4['jqzrT'](
                            0x5a,
                            _0x3268dc[_0x1db031(0x137, 'yg&L')]
                          )
                        ),
                        _0x4e012f = MathUtils[_0x1db031(0x5d0, 'ApUb')](
                          _0x3268dc[_0x1db031(0x47a, '6Zuw')]
                        );
                      _0x2106a1[_0x1db031(0x27d, '*YS&')](
                        0x1,
                        _0x3c8de1,
                        _0x4e012f
                      ),
                        _0x174971[_0x1db031(0x376, 'T#oD')][
                          _0x1db031(0x603, 'ApUb')
                        ][_0xd1fd4[_0x1db031(0x334, 'Sb3(')]][
                          _0x1db031(0x151, 'ft9i')
                        ][_0x1db031(0x45e, 'AMG9')](_0x2106a1),
                        this[_0x1db031(0x258, 'o!d*')][
                          _0x1db031(0x2be, 'oYLf')
                        ]['uniforms'][_0xd1fd4[_0x1db031(0x644, '*eSd')]][
                          'value'
                        ]
                          [_0x1db031(0x3c5, 'ApUb')](_0x2106a1)
                          [_0x1db031(0x766, '9s2V')]();
                    } else
                      _0x5ed60b[_0x1db031(0x516, '6Zuw')][
                        _0x1db031(0x64e, ')39O')
                      ](),
                        _0x40b5e1[_0x1db031(0x521, 'D7Uc')]['remove'](
                          _0x54d26f
                        );
                  };
                _0xd1fd4['PjGsD'](_0x4f1cb5);
              } else {
                if (_0x17ba20['name'] === _0xd1fd4['mlTpE']) {
                  if (
                    _0xd1fd4[_0x48f133(0x712, 'wS^x')](
                      _0xd1fd4[_0x48f133(0x527, '*YS&')],
                      _0xd1fd4[_0x48f133(0x530, 'qOnr')]
                    )
                  ) {
                    const _0x14a4cc =
                        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vRoughness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20vColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec3\x20emissive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20roughness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20uv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vColor\x20=\x20emissive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vRoughness\x20=\x20roughness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20modelViewMatrix\x20*\x20vec4(\x20position,\x201.0\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                      _0x3e0e36 = _0x48f133(0x20a, 'wxiv');
                    _0x17ba20[_0x48f133(0x63f, 'z$rz')][
                      _0x48f133(0x12a, 'z@b#')
                    ](),
                      (this[_0x48f133(0x65a, 'wxiv')] = {
                        roughness: { value: 0x6 },
                        emissive: {
                          value: new Color(_0xd1fd4[_0x48f133(0x1b6, 'bvRN')]),
                        },
                        opacity: { value: 0.34 },
                        baseTexture: {
                          value: new TextureLoader()[_0x48f133(0x229, 'Ix9w')](
                            'img/peilou1.jpg'
                          ),
                        },
                      });
                    const _0x581ee0 = new ShaderMaterial({
                      uniforms: this[_0x48f133(0x53e, '8%Yf')],
                      vertexShader: _0x14a4cc,
                      fragmentShader: _0x3e0e36,
                      transparent: !![],
                    });
                    (_0x17ba20[_0x48f133(0x1b0, '*eSd')] = _0x581ee0),
                      (_0x17ba20[_0x48f133(0x198, 'BwQE')]['needsUpdate'] =
                        !0x0),
                      _0x17ba20['layers'][_0x48f133(0x466, 'XYL^')](
                        BLOOM_SCENE
                      );
                  } else
                    for (
                      let _0x44089e = 0x0;
                      _0xd1fd4['SGcOX'](
                        _0x44089e,
                        this[_0x48f133(0x63a, 'wxiv')]['length']
                      );
                      _0x44089e++
                    ) {
                      const _0x4cccc1 =
                        this[_0x48f133(0x249, 'o!d*')][_0x44089e];
                      if (
                        _0xd1fd4[_0x48f133(0x6a1, '9s2V')](
                          _0x4cccc1[_0x48f133(0x63e, 'Sb3(')]['y'],
                          0x28
                        )
                      )
                        _0x4cccc1['position']['y'] = -0x5;
                      _0x4cccc1[_0x48f133(0x4d3, 'qOnr')]['y'] +=
                        0.02 * _0x4cccc1[_0x48f133(0x210, 'cSG3')];
                    }
                } else {
                  if (_0x17ba20[_0x48f133(0x7a0, 'Yhco')] == '网格170')
                    (_0x17ba20[_0x48f133(0x491, '8%Yf')]['color'] = new Color(
                      _0xd1fd4['cAudl']
                    )),
                      (_0x17ba20[_0x48f133(0x1b0, '*eSd')][
                        _0x48f133(0x35a, '1!$B')
                      ] = new Color('#061B21')),
                      (_0x17ba20[_0x48f133(0x25e, 'xHAe')]['roughness'] = 0.4),
                      (_0x17ba20[_0x48f133(0x6fc, ']i^)')]['metalness'] = 0.72),
                      (_0x17ba20[_0x48f133(0x45f, 'yg&L')][
                        _0x48f133(0x561, '*YS&')
                      ] = !0x0),
                      _0x17ba20[_0x48f133(0x41c, 'D7Uc')][
                        _0x48f133(0x500, 'z@b#')
                      ](BLOOM_SCENE);
                  else {
                    if (
                      _0xd1fd4[_0x48f133(0x5b3, 'xHAe')](
                        _0x17ba20[_0x48f133(0x2aa, 'xHAe')],
                        _0x48f133(0x5b7, 'D@kl')
                      )
                    ) {
                      const _0x26cfca =
                        _0xd1fd4[_0x48f133(0x3ce, '8%Yf')][
                          _0x48f133(0x639, '8%Yf')
                        ]('|');
                      let _0x5bbf39 = 0x0;
                      while (!![]) {
                        switch (_0x26cfca[_0x5bbf39++]) {
                          case '0':
                            _0x17ba20[_0x48f133(0x111, 'D@kl')][
                              'roughness'
                            ] = 0.5;
                            continue;
                          case '1':
                            _0x17ba20['material']['needsUpdate'] = !0x0;
                            continue;
                          case '2':
                            _0x17ba20['material'][
                              _0x48f133(0x77b, 'z@b#')
                            ] = 0.5;
                            continue;
                          case '3':
                            _0x17ba20[_0x48f133(0x6f5, 'bvRN')]['emissive'] =
                              new Color(_0xd1fd4[_0x48f133(0x5d6, 'cSG3')]);
                            continue;
                          case '4':
                            _0x17ba20['layers'][_0x48f133(0x274, 'yg&L')](
                              BLOOM_SCENE
                            );
                            continue;
                          case '5':
                            _0x17ba20[_0x48f133(0x3ea, 'h4vQ')]['color'] =
                              new Color(_0xd1fd4['PegGq']);
                            continue;
                        }
                        break;
                      }
                    } else {
                      if (
                        _0x17ba20[_0x48f133(0x4f7, 'XZDo')] ==
                          _0xd1fd4[_0x48f133(0x742, 'XZDo')] ||
                        _0xd1fd4['TPfyy'](
                          _0x17ba20[_0x48f133(0x46d, 'ApUb')],
                          _0x48f133(0x342, 'TZrH')
                        ) ||
                        _0x17ba20[_0x48f133(0x6d0, 'Ix9w')] ==
                          _0xd1fd4[_0x48f133(0x5ef, 'Yhco')]
                      ) {
                        if (
                          _0xd1fd4[_0x48f133(0x24c, '@RzQ')](
                            _0xd1fd4[_0x48f133(0x6b8, '6Zuw')],
                            _0xd1fd4[_0x48f133(0x3a2, 'bvRN')]
                          )
                        )
                          _0x35a2c2[_0x5dbaa5[_0x48f133(0x2b9, '^Pri')]] &&
                            ((_0x490505[_0x48f133(0x529, 'wxiv')] =
                              _0x553ba4[_0x3fb6d9['uuid']]),
                            delete _0x5be36c[
                              _0x1e9ca4[_0x48f133(0x6de, 'AMG9')]
                            ]);
                        else {
                          const _0x480ba8 = _0x48f133(0x244, 'D@kl')['split'](
                            '|'
                          );
                          let _0x246623 = 0x0;
                          while (!![]) {
                            switch (_0x480ba8[_0x246623++]) {
                              case '0':
                                _0x17ba20[_0x48f133(0x673, ')39O')][
                                  _0x48f133(0x32e, 'z@b#')
                                ] = new Color(_0x48f133(0x517, '^Pri'));
                                continue;
                              case '1':
                                _0x17ba20[_0x48f133(0x72c, 'Ix9w')][
                                  _0x48f133(0x674, '9s2V')
                                ] = !0x0;
                                continue;
                              case '2':
                                _0x17ba20[_0x48f133(0x223, 'wS^x')][
                                  'metalness'
                                ] = 0.23;
                                continue;
                              case '3':
                                _0x17ba20[_0x48f133(0x673, ')39O')][
                                  _0x48f133(0x1e7, ')39O')
                                ] = new Color(
                                  _0xd1fd4[_0x48f133(0x1da, 'Q9e[')]
                                );
                                continue;
                              case '4':
                                _0x17ba20['material']['roughness'] = 0.58;
                                continue;
                            }
                            break;
                          }
                        }
                      } else
                        _0x17ba20[_0x48f133(0x795, 'z@b#')][
                          _0x48f133(0x191, 'ApUb')
                        ](BLOOM_SCENE);
                    }
                  }
                }
              }
            }
          }
        }),
          this['models'][_0x3f13af(0x3b8, 'XZDo')](
            _0x53173e[_0x3f13af(0x42d, 'TZrH')]
          );
        const _0x225e4c = [
          new Vector3(-0x17, -0x8, 0xc),
          new Vector3(0x1a, -0x8, 0xb),
          new Vector3(0x12, -0x8, -0x27),
          new Vector3(-0x7, -0x8, -0x34),
        ];
        _0x225e4c['forEach']((_0x100870) => {
          const _0x474aee = _0x3f13af,
            _0x5518ec = this[_0x474aee(0x4c3, 'AMG9')](_0x100870),
            _0x22ce04 = Math['random']();
          (_0x5518ec[_0x474aee(0x16d, '$m][')] = _0x22ce04),
            this[_0x474aee(0x6b1, 'yg&L')]['push'](_0x5518ec),
            this[_0x474aee(0x2ba, '8%Yf')][_0x474aee(0x1f2, '3)uO')](_0x5518ec);
        });
        for (let _0x6d48a2 = 0x0; _0x6d48a2 < 0x3; _0x6d48a2++) {
          _0x1c1ff5[_0x3f13af(0x791, 'bvRN')](
            _0x1c1ff5[_0x3f13af(0x718, '*eSd')],
            _0x1c1ff5[_0x3f13af(0x458, 'ApUb')]
          )
            ? (_0xd1fd4[_0x3f13af(0x4bf, 'Q9e[')](_0x295406, _0xddf41d),
              _0x5443dd++,
              (_0x3e8d02 = null))
            : _0x1c1ff5['cnVjs'](
                setTimeout,
                () => {
                  const _0x3c4e6f = _0x3f13af;
                  if (!this[_0x3c4e6f(0x181, 'Sb3(')]) return;
                  let _0x463f56 = this[_0x3c4e6f(0x493, '*YS&')](
                    0x10,
                    0.1,
                    0.5,
                    new Vector3(0x0, 0x1, 0x1),
                    0.2
                  );
                  _0x463f56[_0x3c4e6f(0x5df, 'o1!b')]['set'](
                    1.019,
                    -0x2,
                    1.224
                  ),
                    _0x463f56[_0x3c4e6f(0x5ae, 'AMG9')](
                      _0xd1fd4['UgrjR'](-Math['PI'], 0x2)
                    ),
                    _0x463f56[_0x3c4e6f(0x4e2, 'fx&2')][
                      _0x3c4e6f(0x413, 'T#oD')
                    ](BLOOM_SCENE),
                    this[_0x3c4e6f(0x4a9, 'D7Uc')]['add'](_0x463f56);
                },
                _0x1c1ff5['mikek'](_0x6d48a2, 0xbb8)
              );
        }
        for (let _0x38c06d = 0x0; _0x38c06d < 0x3; _0x38c06d++) {
          _0x1c1ff5[_0x3f13af(0x638, ']i^)')](
            _0x1c1ff5[_0x3f13af(0x36e, 'Q9e[')],
            'XjhPD'
          )
            ? (_0xd1fd4[_0x3f13af(0x41e, ']i^)')](
                _0xda6493[_0x3f13af(0x711, '9s2V')][_0x3f13af(0x486, '$pop')][
                  _0x3f13af(0x31f, 'oYLf')
                ][_0x3f13af(0x186, 'Ix9w')],
                0x1
              ) &&
                (_0x7a162c['material'][_0x3f13af(0x42c, 'yg&L')][
                  _0x3f13af(0x24d, 'ft9i')
                ][_0x3f13af(0x714, 'Yhco')] = 0x0),
              (_0x4f1d90[_0x3f13af(0x6f5, 'bvRN')][_0x3f13af(0x665, '8%Yf')][
                'time'
              ][_0x3f13af(0x59f, '@RzQ')] += 0.001))
            : _0x1c1ff5['cnVjs'](
                setTimeout,
                () => {
                  const _0x384d4d = _0x3f13af,
                    _0x3fe5e0 = {
                      LBJyG: _0x1c1ff5[_0x384d4d(0x57d, '^Pri')],
                      kJHgH: '#00486E',
                      dnmjy: _0x384d4d(0x49a, '1!$B'),
                    };
                  if (
                    _0x1c1ff5[_0x384d4d(0x304, 'T#oD')](
                      _0x1c1ff5['slNFo'],
                      _0x1c1ff5[_0x384d4d(0x331, 'Njc^')]
                    )
                  ) {
                    if (!this['isShiJiuGang']) return;
                    let _0x27274f = this[_0x384d4d(0x46b, 'Yhco')](
                      0xa,
                      0.1,
                      0.5,
                      new Vector3(0x0, 0x1, 0x1),
                      0.2
                    );
                    _0x27274f[_0x384d4d(0x4d4, '6MN7')][
                      _0x384d4d(0x634, 'fx&2')
                    ](0x17, -0x2, -0x20),
                      _0x27274f['rotateX'](
                        _0x1c1ff5[_0x384d4d(0x2b5, '1!$B')](-Math['PI'], 0x2)
                      ),
                      _0x27274f[_0x384d4d(0x39e, 'D@kl')][
                        _0x384d4d(0x448, 'xHAe')
                      ](BLOOM_SCENE),
                      this[_0x384d4d(0x687, '6Zuw')]['add'](_0x27274f);
                  } else {
                    const _0x4805a4 =
                      _0x3fe5e0[_0x384d4d(0x29e, '8(4w')][
                        _0x384d4d(0x110, 'T#oD')
                      ]('|');
                    let _0x168596 = 0x0;
                    while (!![]) {
                      switch (_0x4805a4[_0x168596++]) {
                        case '0':
                          _0x4cfe83['material']['needsUpdate'] = !0x0;
                          continue;
                        case '1':
                          _0x24fe5d[_0x384d4d(0x673, ')39O')][
                            'roughness'
                          ] = 0.4;
                          continue;
                        case '2':
                          _0x3ae9d3[_0x384d4d(0x2be, 'oYLf')][
                            _0x384d4d(0x2ce, 'wxiv')
                          ] = new _0x26fe1e(_0x3fe5e0['kJHgH']);
                          continue;
                        case '3':
                          _0x449cfc[_0x384d4d(0x2fb, '*YS&')][
                            _0x384d4d(0x720, 'ft9i')
                          ] = 0.72;
                          continue;
                        case '4':
                          _0x20a9ec[_0x384d4d(0x2ac, 'xHAe')][
                            _0x384d4d(0x18d, '$pop')
                          ](_0x4ff560);
                          continue;
                        case '5':
                          _0x2a9813[_0x384d4d(0x231, 'z$rz')][
                            _0x384d4d(0x568, '9s2V')
                          ] = new _0x18aa58(
                            _0x3fe5e0[_0x384d4d(0x57a, 'XYL^')]
                          );
                          continue;
                      }
                      break;
                    }
                  }
                },
                _0x38c06d * 0xbb8
              );
        }
        for (
          let _0x27514a = 0x0;
          _0x1c1ff5[_0x3f13af(0x565, 'Sb3(')](_0x27514a, 0xe);
          _0x27514a++
        ) {
          if (
            _0x1c1ff5[_0x3f13af(0x452, '6MN7')](
              _0x1c1ff5[_0x3f13af(0x318, '8(4w')],
              _0x1c1ff5[_0x3f13af(0x655, 'bvRN')]
            )
          ) {
            const _0x5b9246 = new _0x1b2667(0xa, 0x5),
              _0x44d9fb = new _0x57562d({
                color: 0xffffff,
                transparent: !0x0,
                opacity: 0x1,
                depthTest: !!0x0,
                map: new _0x288f94()[_0x3f13af(0x5ca, 'xHAe')](
                  'img/Vector39.png'
                ),
              }),
              _0x1cdc0c = new _0x14abd8(_0x5b9246, _0x44d9fb);
            _0x1cdc0c[_0x3f13af(0x625, '$m][')][_0x3f13af(0x58b, 'h4vQ')](
              12.4,
              -1.8,
              -0x26
            ),
              _0x1cdc0c[_0x3f13af(0x745, '^Pri')]['set'](3.4, 9.7),
              _0x1cdc0c['rotateX'](
                _0xd1fd4[_0x3f13af(0x599, '*YS&')](-_0x520ec5['PI'], 0x2)
              ),
              _0x211e9b[_0x3f13af(0x32b, 'h4vQ')](_0x1cdc0c),
              this[_0x3f13af(0x37f, 'yg&L')]['add'](_0x1cdc0c);
            const _0x33ce78 = new _0x2012c5(_0x2404ff);
            (_0x33ce78[_0x3f13af(0x64c, 'wS^x')]['z'] = 0x5),
              _0x1cdc0c[_0x3f13af(0x300, 'wxiv')](_0x33ce78);
          } else
            setTimeout(() => {
              const _0x3e53fc = _0x3f13af;
              if (!this[_0x3e53fc(0x45b, '$pop')]) return;
              this[_0x3e53fc(0x64b, ')39O')]();
            }, _0x1c1ff5[_0x3f13af(0x243, '3)uO')](_0x27514a, 0x708));
        }
        this[_0x3f13af(0x6cb, '$pop')](),
          this['loadDashedLines'](dashedLineData, 0x912727, 0.03),
          this[_0x3f13af(0x428, '*eSd')](),
          this[_0x3f13af(0x5a6, 'Zh9d')]();
        const _0x453221 = [
          { position: { x: -14.865, y: -2.361, z: 31.599 } },
          { position: { x: -2.692, y: -2.361, z: 31.414 } },
        ];
        this['loadDashedLines'](_0x453221, 0xff00, 0.03);
        const _0x3c3ed1 = [
          { position: { x: -14.753, y: -2.361, z: 17.975 } },
          { position: { x: -2.822, y: -2.361, z: 18.1 } },
        ];
        this[_0x3f13af(0x27a, 'z$rz')](_0x3c3ed1, 0xff00, 0.03);
      },
      function (_0x48f3bc) {
        const _0x586bbe = _0x775ca7;
        if (
          _0x1c1ff5[_0x586bbe(0x61e, 'bvRN')](
            _0x1c1ff5[_0x586bbe(0x1c6, 'oYLf')],
            _0x1c1ff5[_0x586bbe(0x590, 'Sb3(')]
          )
        )
          console['log'](
            _0x1c1ff5[_0x586bbe(0x566, 'oYLf')](
              _0x1c1ff5[_0x586bbe(0x43d, 'XZDo')](
                _0x1c1ff5['lGfDA'](
                  _0x48f3bc[_0x586bbe(0x555, 'XYL^')],
                  _0x48f3bc[_0x586bbe(0x66c, ')39O')]
                ),
                0x64
              ),
              _0x1c1ff5[_0x586bbe(0x4ad, 'XYL^')]
            )
          );
        else {
          let _0x80dc5f = this[_0x586bbe(0x42f, '%1gN')](
            0x10,
            0.1,
            0.5,
            new _0x55119e(0x0, 0x1, 0x1),
            0.2
          );
          _0x80dc5f['position'][_0x586bbe(0x230, '6MN7')](-18.851, 0.5, 13.5),
            _0x80dc5f[_0x586bbe(0x61f, ']i^)')](-_0x1dc712['PI'] / 0x2),
            _0x80dc5f[_0x586bbe(0x5d3, '8%Yf')]['enable'](_0x2242ff),
            this[_0x586bbe(0x73f, 'BwQE')]['add'](_0x80dc5f);
        }
      },
      function (_0x4d7811) {
        const _0xf0bd4b = _0x775ca7;
        _0x1c1ff5[_0xf0bd4b(0x731, '9s2V')](
          _0x1c1ff5[_0xf0bd4b(0x551, 'o!d*')],
          _0x1c1ff5[_0xf0bd4b(0x219, 'D7Uc')]
        )
          ? this['models'][_0xf0bd4b(0x2db, '%1gN')]((_0x4f1b62) => {
              const _0x3f8fd1 = _0xf0bd4b;
              if (!_0x4f1b62[_0x3f8fd1(0x433, 'T#oD')]) return;
              _0x4f1b62[_0x3f8fd1(0x232, '^Pri')] == '网格' &&
                ((_0x4f1b62[_0x3f8fd1(0x536, 'ApUb')][
                  _0x3f8fd1(0x48c, 'D7Uc')
                ] = new _0x3de952(_0x3797df)),
                (_0x4f1b62[_0x3f8fd1(0x2be, 'oYLf')][_0x3f8fd1(0x277, 'AMG9')] =
                  !0x0));
            })
          : console[_0xf0bd4b(0x173, 'Ix9w')]('An\x20error\x20happened');
      }
    );
  }
  [_0x179150(0x305, 'Ix9w')]() {
    const _0xfadfac = _0x179150,
      _0x2779d5 = {
        zfVfg: function (_0x5ae33a, _0x3f4762) {
          return _0x5ae33a !== _0x3f4762;
        },
        fDosA: 'eXrQJ',
        YKRVz: function (_0x26bc46, _0x11b4c3) {
          return _0x26bc46 / _0x11b4c3;
        },
        AdvrH: _0xfadfac(0x449, 'bvRN'),
        WyYmr: _0xfadfac(0x211, 'XYL^'),
        HIFxx: function (_0x36f073, _0x3468ba) {
          return _0x36f073 !== _0x3468ba;
        },
        JBVbK: _0xfadfac(0x296, '$pop'),
        erKQK: _0xfadfac(0x495, 'Njc^'),
        pxBri: _0xfadfac(0x18e, 'yg&L'),
        FHuEg: _0xfadfac(0x234, 'f7KG'),
        xpfIE: function (_0x324353) {
          return _0x324353();
        },
        fpGhc: '配楼01',
        RrPbb: _0xfadfac(0x6a8, 'h4vQ'),
        HcmUR: _0xfadfac(0x56b, 'D7Uc'),
        rWOEA: function (_0x1e3f0f, _0x1bfa6d) {
          return _0x1e3f0f == _0x1bfa6d;
        },
        QgMsE: function (_0x35a16c, _0xdd6e37) {
          return _0x35a16c === _0xdd6e37;
        },
        UPPgO: 'gozsZ',
        lvVPH: '2|0|5|4|1|3',
        HNAEC: _0xfadfac(0x335, 'TZrH'),
        hvQSk: _0xfadfac(0x4ee, 'f7KG'),
        zcYrT: '#061B21',
        uCzXa: _0xfadfac(0x6be, 'z@b#'),
        DHrOI: '网格176',
        LEZUQ: _0xfadfac(0x562, 'cSG3'),
        GyhRq: _0xfadfac(0x512, 'D@kl'),
        wCQlJ: _0xfadfac(0x408, '$m]['),
        PRzNb: _0xfadfac(0x77e, 'AMG9'),
        XrgSz: _0xfadfac(0x6f8, '%1gN'),
        FiOsW: _0xfadfac(0x271, 'BwQE'),
        ChCiC: function (_0x3fc1d2, _0x44ebfb) {
          return _0x3fc1d2 < _0x44ebfb;
        },
        vegAN: function (_0x57f554, _0x3b6a7f) {
          return _0x57f554 !== _0x3b6a7f;
        },
        VluDo: function (_0xf51881, _0x5e3c8d, _0x4ef0ae) {
          return _0xf51881(_0x5e3c8d, _0x4ef0ae);
        },
        EXhPm: function (_0x3a1df4, _0x2d8274) {
          return _0x3a1df4 * _0x2d8274;
        },
        LNmHu: function (_0x4ffc1f, _0x37c633) {
          return _0x4ffc1f + _0x37c633;
        },
        Uerhw: function (_0x15aa20, _0x1c31e8) {
          return _0x15aa20 * _0x1c31e8;
        },
        SXiKe: function (_0x1bc186, _0x135b65) {
          return _0x1bc186 / _0x135b65;
        },
        Sfjhg: '%\x20loaded',
        bGWeT: _0xfadfac(0x5ab, '9s2V'),
        BwLab: 'model/lanshangang1.glb',
      };
    this[_0xfadfac(0x141, '@RzQ')][_0xfadfac(0x57c, '$m][')](
      _0x2779d5['BwLab'],
      (_0x5bfac2) => {
        const _0x28fc9f = _0xfadfac,
          _0x15d411 = {
            oNPfz: _0x2779d5[_0x28fc9f(0x292, 'Zh9d')],
            ZpwhT: _0x28fc9f(0x177, 's7aT'),
            SuEdj: function (_0xb5d7c6, _0x3b1a98) {
              return _0xb5d7c6 - _0x3b1a98;
            },
            ePNot: _0x2779d5[_0x28fc9f(0x2bf, 'aCG]')],
            uIvtS: function (_0x25c6ee, _0x525170) {
              const _0x235970 = _0x28fc9f;
              return _0x2779d5[_0x235970(0x68f, 'D@kl')](_0x25c6ee, _0x525170);
            },
            HbhTy: _0x2779d5[_0x28fc9f(0x4d6, '8%Yf')],
            sHRqV: _0x2779d5[_0x28fc9f(0x432, 'Ix9w')],
            cHSMX: _0x28fc9f(0x3f8, 'D7Uc'),
            rspoi: _0x2779d5[_0x28fc9f(0x2d2, '6MN7')],
            laOhy: _0x2779d5[_0x28fc9f(0x2d5, 'D@kl')],
            fcQIb: 'mieDirectionalG',
            noFSc: function (_0x4ec346) {
              const _0x2e3cf0 = _0x28fc9f;
              return _0x2779d5[_0x2e3cf0(0x70f, '^Pri')](_0x4ec346);
            },
            aaxlV: _0x2779d5[_0x28fc9f(0x702, '8(4w')],
            SBuNK: function (_0x41261f, _0x365f0e) {
              return _0x41261f == _0x365f0e;
            },
            AdNyl: _0x2779d5[_0x28fc9f(0x492, 'BwQE')],
            nkXve: _0x2779d5[_0x28fc9f(0x2cf, 'Ix9w')],
            ZAWyf: function (_0x2fc6e9, _0x11d5a8) {
              const _0x5b9f94 = _0x28fc9f;
              return _0x2779d5[_0x5b9f94(0x41f, 'ApUb')](_0x2fc6e9, _0x11d5a8);
            },
            ikWpM: function (_0xd19738, _0x56f3f0) {
              return _0x2779d5['QgMsE'](_0xd19738, _0x56f3f0);
            },
            ptBzb: _0x28fc9f(0x40c, 'ApUb'),
            YBhCa: _0x2779d5['UPPgO'],
            ddyrM: _0x2779d5['lvVPH'],
            LhCiT: _0x2779d5[_0x28fc9f(0x40a, '^Pri')],
            Yupzq: _0x2779d5['hvQSk'],
            FPdRO: _0x28fc9f(0x2e1, 'T#oD'),
            PdnYF: _0x2779d5['zcYrT'],
            vEyDQ: _0x2779d5['uCzXa'],
            iLTYe: function (_0x17c26b, _0x25e95b) {
              return _0x2779d5['rWOEA'](_0x17c26b, _0x25e95b);
            },
            mtQBY: _0x2779d5[_0x28fc9f(0x4ec, '1!$B')],
            dIFil: _0x2779d5[_0x28fc9f(0x689, 'yg&L')],
            Docgw: _0x2779d5[_0x28fc9f(0x2d9, '8(4w')],
            GfVXs: _0x2779d5[_0x28fc9f(0x55a, 'TZrH')],
            PAmLG: _0x28fc9f(0x3b0, 'Yhco'),
            KTMhS: _0x2779d5[_0x28fc9f(0x37b, 'ft9i')],
            ElowG: _0x28fc9f(0x4f2, '*YS&'),
            QFKdl: function (_0x233a3c, _0x2af043) {
              return _0x2779d5['rWOEA'](_0x233a3c, _0x2af043);
            },
            VlvrU: _0x2779d5[_0x28fc9f(0x45a, 'xHAe')],
            XMuPK: _0x2779d5[_0x28fc9f(0x237, 'o1!b')],
          };
        _0x5bfac2['scene'][_0x28fc9f(0x6aa, 'Ix9w')]((_0x693148) => {
          const _0x190aa1 = _0x28fc9f,
            _0x405bb8 = {
              mugZd: _0x15d411[_0x190aa1(0x5b4, 'D@kl')],
              XEclv: _0x15d411['ZpwhT'],
              VRRKN: function (_0x17f0dc, _0xeeb158) {
                return _0x17f0dc < _0xeeb158;
              },
              inPzC: 'ABPMp',
              iwSMP: 'CRDFg',
              sAMOP: function (_0x321887, _0xb3bb35) {
                const _0x7fd2a9 = _0x190aa1;
                return _0x15d411[_0x7fd2a9(0x1e6, 'qOnr')](
                  _0x321887,
                  _0xb3bb35
                );
              },
              hZbHk: 'sunPosition',
              UmCyD: _0x15d411['ePNot'],
            };
          if (_0x693148[_0x190aa1(0x4d7, 'XYL^')]) {
            _0x693148[_0x190aa1(0x2fb, '*YS&')]['side'] = DoubleSide;
            if (_0x693148[_0x190aa1(0x658, 'TZrH')] === '海面') {
              if (
                _0x15d411[_0x190aa1(0x618, '@RzQ')](
                  _0x15d411[_0x190aa1(0x571, '6Zuw')],
                  _0x190aa1(0x1e8, 'Yhco')
                )
              ) {
                const _0x4c00be = _0x190aa1(0x6f6, 'TZrH'),
                  _0x140299 = _0x190aa1(0x73a, '9s2V');
                _0x1f401e[_0x190aa1(0x441, 'qOnr')][_0x190aa1(0x4f3, 'Yhco')](),
                  (this[_0x190aa1(0x215, 'Njc^')] = {
                    roughness: { value: 0x1 },
                    emissive: {
                      value: new _0xdb36f5(_0x405bb8[_0x190aa1(0x1e5, 'Zh9d')]),
                    },
                    opacity: { value: 0.8 },
                    baseTexture: {
                      value: new _0x2c98e5()['load'](_0x405bb8['XEclv']),
                    },
                  });
                const _0xd8fa79 = new _0x1fa0c9({
                  uniforms: this[_0x190aa1(0x504, 'wS^x')],
                  vertexShader: _0x4c00be,
                  fragmentShader: _0x140299,
                  transparent: !![],
                });
                (_0x11edbe[_0x190aa1(0x124, 'XZDo')] = _0xd8fa79),
                  (_0x2e0f87[_0x190aa1(0x3c1, '8(4w')][
                    _0x190aa1(0x193, 'Sb3(')
                  ] = !0x0),
                  _0x3aeea3[_0x190aa1(0x3ab, ')39O')]['enable'](_0x2532c2);
              } else {
                (this[_0x190aa1(0x251, 's7aT')] = new Water(
                  _0x693148['geometry'],
                  {
                    textureWidth: 0x200,
                    textureHeight: 0x200,
                    waterNormals: new TextureLoader()[_0x190aa1(0x5aa, '6MN7')](
                      _0x15d411[_0x190aa1(0x3a1, 'ApUb')],
                      (_0x3a6cd0) => {
                        const _0x572402 = _0x190aa1;
                        if (
                          _0x405bb8['inPzC'] !==
                          _0x405bb8[_0x572402(0x4a3, 'wS^x')]
                        )
                          _0x3a6cd0['wrapS'] = _0x3a6cd0[
                            _0x572402(0x624, 'h4vQ')
                          ] = RepeatWrapping;
                        else {
                          if (
                            _0x405bb8['VRRKN'](
                              this[_0x572402(0x422, 'xHAe')]['children'][
                                _0x572402(0x1a8, '3)uO')
                              ],
                              0x1
                            )
                          )
                            return;
                          const _0x261e58 =
                            this['points'][_0x572402(0x324, 'cSG3')][
                              _0x572402(0x513, 'cSG3')
                            ]();
                          this['points'][_0x572402(0x162, 'ApUb')](_0x261e58);
                          const _0x28785a = _0x261e58[_0x572402(0x2d8, 'qOnr')];
                          _0x28785a[_0x572402(0x38f, 'D7Uc')][
                            _0x572402(0x540, '8(4w')
                          ](_0x28785a),
                            this['deviceCount']--,
                            this[_0x572402(0x5eb, 'ft9i')][
                              _0x572402(0x543, 'bvRN')
                            ]('setDevice', this[_0x572402(0x5ad, '*eSd')]);
                        }
                      }
                    ),
                    sunDirection: this[_0x190aa1(0x2ed, '6Zuw')][
                      _0x190aa1(0x661, 'yg&L')
                    ]
                      ['clone']()
                      [_0x190aa1(0x46a, '*YS&')](),
                    sunColor: 0xffffff,
                    waterColor: 0x669ab,
                    distortionScale: 3.7,
                  }
                )),
                  this[_0x190aa1(0x61a, 'xHAe')]['layers']['enable'](
                    ENTIRE_SCENE
                  ),
                  this[_0x190aa1(0x6fd, '*eSd')][_0x190aa1(0x46e, 'TZrH')][
                    _0x190aa1(0x322, 'D7Uc')
                  ](_0x693148[_0x190aa1(0x494, 'Yhco')]),
                  (this[_0x190aa1(0x783, 'Q9e[')]['material'][
                    _0x190aa1(0x21d, 'fx&2')
                  ]['size'][_0x190aa1(0x730, '*YS&')] = 0x1b),
                  _0x693148['parent'][_0x190aa1(0x707, 'AMG9')](
                    this[_0x190aa1(0x4a2, ']i^)')]
                  ),
                  setTimeout(() => {
                    const _0x327ee6 = _0x190aa1;
                    _0x693148[_0x327ee6(0x3dc, 'qOnr')][
                      _0x327ee6(0x34f, 'D@kl')
                    ](),
                      _0x693148['parent'][_0x327ee6(0x1c1, 'Yhco')](_0x693148);
                  }, 0x0);
                const _0x5d3fa7 = new Sky();
                _0x5d3fa7[_0x190aa1(0x34e, 'ApUb')][_0x190aa1(0x1f0, 'BwQE')](
                  0x2710
                ),
                  this['scene'][_0x190aa1(0x764, 'qOnr')](_0x5d3fa7);
                const _0x581dd6 =
                  _0x5d3fa7[_0x190aa1(0x2f3, 'XYL^')]['uniforms'];
                (_0x581dd6[_0x15d411['cHSMX']]['value'] = 0xa),
                  (_0x581dd6[_0x15d411[_0x190aa1(0x2a9, 'Sb3(')]][
                    _0x190aa1(0x151, 'ft9i')
                  ] = 0x2),
                  (_0x581dd6[_0x15d411[_0x190aa1(0x4d0, 'TZrH')]][
                    _0x190aa1(0x72d, '3)uO')
                  ] = 0.005),
                  (_0x581dd6[_0x15d411['fcQIb']][
                    _0x190aa1(0x6d3, ')39O')
                  ] = 0.8);
                const _0x19c8d8 = { elevation: 0x0, azimuth: 0x0 },
                  _0x2e0d5d = new PMREMGenerator(
                    this[_0x190aa1(0x160, 'ft9i')]
                  ),
                  _0x45f674 = new Vector3(),
                  _0x2fab94 = () => {
                    const _0x2326ca = _0x190aa1,
                      _0x3d93e3 = MathUtils['degToRad'](
                        _0x405bb8[_0x2326ca(0x792, 'o!d*')](
                          0x5a,
                          _0x19c8d8[_0x2326ca(0x44c, 'bvRN')]
                        )
                      ),
                      _0x480c67 = MathUtils['degToRad'](
                        _0x19c8d8[_0x2326ca(0x1eb, 'xHAe')]
                      );
                    _0x45f674[_0x2326ca(0x47d, 'TZrH')](
                      0x1,
                      _0x3d93e3,
                      _0x480c67
                    ),
                      _0x5d3fa7[_0x2326ca(0x491, '8%Yf')][
                        _0x2326ca(0x40b, 'XZDo')
                      ][_0x405bb8[_0x2326ca(0x6a2, 'qOnr')]][
                        _0x2326ca(0x179, '^Pri')
                      ][_0x2326ca(0x1d8, '9s2V')](_0x45f674),
                      this[_0x2326ca(0x29d, '1!$B')][_0x2326ca(0x6b6, 'D7Uc')][
                        'uniforms'
                      ][_0x405bb8['UmCyD']][_0x2326ca(0x5fe, '$m][')]
                        [_0x2326ca(0x322, 'D7Uc')](_0x45f674)
                        ['normalize']();
                  };
                _0x15d411[_0x190aa1(0x65d, 'BwQE')](_0x2fab94);
              }
            } else {
              if (_0x693148['name'] === _0x15d411['aaxlV']) {
                const _0x526be1 = _0x190aa1(0x69d, 'z@b#'),
                  _0x25381e = _0x190aa1(0x1c9, '@RzQ');
                _0x693148['geometry'][_0x190aa1(0x12a, 'z@b#')](),
                  (this[_0x190aa1(0x5e9, 'XYL^')] = {
                    roughness: { value: 0x1 },
                    emissive: { value: new Color(_0x15d411['oNPfz']) },
                    opacity: { value: 0.8 },
                    baseTexture: {
                      value: new TextureLoader()[_0x190aa1(0x608, 'f7KG')](
                        _0x15d411[_0x190aa1(0x402, 'aCG]')]
                      ),
                    },
                  });
                const _0xc82907 = new ShaderMaterial({
                  uniforms: this[_0x190aa1(0x510, 'cSG3')],
                  vertexShader: _0x526be1,
                  fragmentShader: _0x25381e,
                  transparent: !![],
                });
                (_0x693148[_0x190aa1(0x69a, 'cSG3')] = _0xc82907),
                  (_0x693148[_0x190aa1(0x223, 'wS^x')]['needsUpdate'] = !0x0),
                  _0x693148[_0x190aa1(0x47b, 'AMG9')][_0x190aa1(0x4ae, 'Ix9w')](
                    BLOOM_SCENE
                  );
              } else {
                if (
                  _0x15d411[_0x190aa1(0x420, 'o1!b')](
                    _0x693148[_0x190aa1(0x213, '@RzQ')],
                    '网格026'
                  )
                ) {
                  if (_0x15d411['uIvtS'](_0x190aa1(0x675, '*YS&'), 'KbZcV'))
                    this[_0x190aa1(0x504, 'wS^x')][_0x190aa1(0x646, '^Pri')][
                      _0x190aa1(0x3dd, 'f7KG')
                    ] = new _0x1cc022(_0x35cc6d);
                  else {
                    const _0x4c8b62 =
                      _0x15d411[_0x190aa1(0x6dc, 'bvRN')][
                        _0x190aa1(0x212, '*YS&')
                      ]('|');
                    let _0x34a501 = 0x0;
                    while (!![]) {
                      switch (_0x4c8b62[_0x34a501++]) {
                        case '0':
                          _0x693148[_0x190aa1(0x3db, 'z@b#')][
                            _0x190aa1(0x6ab, 'Njc^')
                          ] = new Color(_0x190aa1(0x132, 'Sb3('));
                          continue;
                        case '1':
                          _0x693148['material'][_0x190aa1(0x583, 'ft9i')] = 0.4;
                          continue;
                        case '2':
                          _0x693148[_0x190aa1(0x1d7, 'fx&2')][
                            'metalness'
                          ] = 0.72;
                          continue;
                        case '3':
                          _0x693148['material']['color'] = new Color(
                            _0x15d411['nkXve']
                          );
                          continue;
                        case '4':
                          _0x693148[_0x190aa1(0x491, '8%Yf')][
                            _0x190aa1(0x2d7, 'o!d*')
                          ] = !0x0;
                          continue;
                        case '5':
                          _0x693148[_0x190aa1(0x46c, '@RzQ')][
                            _0x190aa1(0x1b1, 'TZrH')
                          ](BLOOM_SCENE);
                          continue;
                      }
                      break;
                    }
                  }
                } else {
                  if (
                    _0x15d411[_0x190aa1(0x36d, 'o!d*')](
                      _0x693148[_0x190aa1(0x538, '%1gN')],
                      _0x190aa1(0x641, 'z$rz')
                    )
                  ) {
                    if (
                      _0x15d411['ikWpM'](
                        _0x15d411['ptBzb'],
                        _0x15d411[_0x190aa1(0x4d2, 'aCG]')]
                      )
                    )
                      (_0x2fc448[_0x190aa1(0x506, 's7aT')][
                        _0x190aa1(0x30f, 'fx&2')
                      ] = new _0x5e2d19(_0xdc7ba3)),
                        (_0x45213d[_0x190aa1(0x580, '1!$B')]['needsUpdate'] =
                          !0x0);
                    else {
                      const _0x59d0bd =
                        _0x15d411[_0x190aa1(0x1f4, 'D7Uc')]['split']('|');
                      let _0x180978 = 0x0;
                      while (!![]) {
                        switch (_0x59d0bd[_0x180978++]) {
                          case '0':
                            _0x693148[_0x190aa1(0x1b0, '*eSd')]['color'] =
                              new Color(_0x15d411['LhCiT']);
                            continue;
                          case '1':
                            _0x693148[_0x190aa1(0x2be, 'oYLf')][
                              _0x190aa1(0x630, '1!$B')
                            ] = !0x0;
                            continue;
                          case '2':
                            _0x693148[_0x190aa1(0x111, 'D@kl')][
                              _0x190aa1(0x557, 'yg&L')
                            ] = new Color(_0x15d411['Yupzq']);
                            continue;
                          case '3':
                            _0x693148['layers'][_0x190aa1(0x1b1, 'TZrH')](
                              BLOOM_SCENE
                            );
                            continue;
                          case '4':
                            _0x693148[_0x190aa1(0x491, '8%Yf')][
                              _0x190aa1(0x4b2, ']i^)')
                            ] = 0.5;
                            continue;
                          case '5':
                            _0x693148['material']['roughness'] = 0.5;
                            continue;
                        }
                        break;
                      }
                    }
                  } else {
                    if (
                      _0x693148['name'] == _0x15d411[_0x190aa1(0x777, '6MN7')]
                    )
                      (_0x693148['material'][_0x190aa1(0x30f, 'fx&2')] =
                        new Color(_0x15d411['nkXve'])),
                        (_0x693148['material']['emissive'] = new Color(
                          _0x15d411[_0x190aa1(0x33f, 'Njc^')]
                        )),
                        (_0x693148['material']['roughness'] = 0.4),
                        (_0x693148[_0x190aa1(0x607, 'o1!b')][
                          _0x190aa1(0x28a, 'wxiv')
                        ] = 0.72),
                        (_0x693148[_0x190aa1(0x11e, '6MN7')][
                          _0x190aa1(0x167, 'T#oD')
                        ] = !0x0),
                        _0x693148['layers']['enable'](BLOOM_SCENE);
                    else {
                      if (
                        _0x693148[_0x190aa1(0x35c, 'XYL^')] ==
                        _0x190aa1(0x519, 's7aT')
                      )
                        (_0x693148[_0x190aa1(0x3ea, 'h4vQ')]['emissive'] =
                          new Color(_0x15d411[_0x190aa1(0x58f, 'XYL^')])),
                          (_0x693148['material'][_0x190aa1(0x472, 'Ix9w')] =
                            new Color('#001617')),
                          (_0x693148[_0x190aa1(0x198, 'BwQE')][
                            _0x190aa1(0x43a, 'Q9e[')
                          ] = 0.5),
                          (_0x693148[_0x190aa1(0x506, 's7aT')][
                            _0x190aa1(0x265, 'wS^x')
                          ] = 0.5),
                          (_0x693148[_0x190aa1(0x358, 'Sb3(')]['needsUpdate'] =
                            !0x0),
                          _0x693148[_0x190aa1(0x37c, '3)uO')][
                            _0x190aa1(0x6b3, 'z$rz')
                          ](BLOOM_SCENE);
                      else {
                        if (_0x15d411['SBuNK'](_0x693148['name'], '网格')) {
                          const _0x340f83 =
                            _0x15d411[_0x190aa1(0x4d1, 'o1!b')][
                              _0x190aa1(0x208, 'xHAe')
                            ]('|');
                          let _0x3e818e = 0x0;
                          while (!![]) {
                            switch (_0x340f83[_0x3e818e++]) {
                              case '0':
                                _0x693148[_0x190aa1(0x659, '3)uO')][
                                  _0x190aa1(0x6a4, 'bvRN')
                                ] = 0.21;
                                continue;
                              case '1':
                                _0x693148['material'][
                                  _0x190aa1(0x563, 'aCG]')
                                ] = !0x0;
                                continue;
                              case '2':
                                _0x693148['material'][
                                  _0x190aa1(0x1dc, 'BwQE')
                                ] = new Color(_0x190aa1(0x784, '1!$B'));
                                continue;
                              case '3':
                                _0x693148[_0x190aa1(0x71d, 'z$rz')]['y'] += 0.3;
                                continue;
                              case '4':
                                _0x693148[_0x190aa1(0x2fb, '*YS&')][
                                  'roughness'
                                ] = 0.6;
                                continue;
                              case '5':
                                _0x693148[_0x190aa1(0x25e, 'xHAe')][
                                  _0x190aa1(0x5f4, 'AMG9')
                                ] = new Color(_0x190aa1(0x2f9, 'oYLf'));
                                continue;
                            }
                            break;
                          }
                        } else {
                          if (
                            _0x15d411[_0x190aa1(0x588, 'XYL^')](
                              _0x693148['name'],
                              _0x15d411[_0x190aa1(0x453, '$m][')]
                            )
                          )
                            (_0x693148['material'][
                              _0x190aa1(0x129, '*eSd')
                            ] = 0.3),
                              (_0x693148[_0x190aa1(0x673, ')39O')][
                                'metalness'
                              ] = 0.5),
                              (_0x693148[_0x190aa1(0x1b0, '*eSd')][
                                _0x190aa1(0x2cc, 'h4vQ')
                              ] = new Color(
                                _0x15d411[_0x190aa1(0x316, ')39O')]
                              )),
                              (_0x693148['material'][_0x190aa1(0x167, 'T#oD')] =
                                !0x0),
                              _0x693148[_0x190aa1(0x6d7, 's7aT')][
                                _0x190aa1(0x12f, 'wS^x')
                              ](BLOOM_SCENE);
                          else {
                            if (_0x693148[_0x190aa1(0x1ca, 'h4vQ')] == '道路')
                              (_0x693148['material'][_0x190aa1(0x50a, 'qOnr')] =
                                new Color(_0x15d411[_0x190aa1(0x4e3, 'XZDo')])),
                                (_0x693148[_0x190aa1(0x6f5, 'bvRN')][
                                  _0x190aa1(0x1ba, '^Pri')
                                ] = new Color(_0x15d411['GfVXs'])),
                                (_0x693148['material'][
                                  _0x190aa1(0x762, 'h4vQ')
                                ] = 0.6),
                                (_0x693148[_0x190aa1(0x647, 'c6pd')][
                                  'metalness'
                                ] = 0.21),
                                (_0x693148[_0x190aa1(0x580, '1!$B')][
                                  _0x190aa1(0x119, 'Yhco')
                                ] = !0x0);
                            else {
                              if (
                                _0x693148[_0x190aa1(0x310, 'yg&L')] ==
                                  _0x15d411[_0x190aa1(0x3da, '6MN7')] ||
                                _0x693148['name'] ==
                                  _0x15d411[_0x190aa1(0x485, 's7aT')]
                              )
                                (_0x693148[_0x190aa1(0x506, 's7aT')][
                                  _0x190aa1(0x15c, '%1gN')
                                ] = 0.55),
                                  (_0x693148['material'][
                                    _0x190aa1(0x6d9, 'o!d*')
                                  ] = 0x0),
                                  (_0x693148[_0x190aa1(0x376, 'T#oD')][
                                    'needsUpdate'
                                  ] = !0x0),
                                  _0x693148[_0x190aa1(0x222, 'Sb3(')][
                                    _0x190aa1(0x448, 'xHAe')
                                  ](BLOOM_SCENE);
                              else {
                                if (
                                  _0x15d411['ZAWyf'](
                                    _0x693148[_0x190aa1(0x499, 'oYLf')],
                                    _0x15d411['ElowG']
                                  ) ||
                                  _0x15d411['QFKdl'](
                                    _0x693148['name'],
                                    _0x15d411[_0x190aa1(0x798, ']i^)')]
                                  )
                                )
                                  (_0x693148[_0x190aa1(0x111, 'D@kl')][
                                    'roughness'
                                  ] = 0.55),
                                    (_0x693148['material'][
                                      _0x190aa1(0x4c4, 'c6pd')
                                    ] = 0x0),
                                    (_0x693148['material']['needsUpdate'] =
                                      !0x0),
                                    _0x693148[_0x190aa1(0x39e, 'D@kl')][
                                      _0x190aa1(0x32d, 'qOnr')
                                    ](BLOOM_SCENE);
                                else {
                                  if (
                                    _0x693148[_0x190aa1(0x6c5, 'bvRN')] ==
                                    _0x190aa1(0x31e, 'cSG3')
                                  )
                                    (_0x693148[_0x190aa1(0x6b6, 'D7Uc')][
                                      _0x190aa1(0x750, 's7aT')
                                    ] = new Color('#00FFFF')),
                                      (_0x693148[_0x190aa1(0x38d, '@RzQ')][
                                        _0x190aa1(0x437, 'XZDo')
                                      ] = new Color(
                                        _0x15d411[_0x190aa1(0x6ee, 'Sb3(')]
                                      )),
                                      (_0x693148[_0x190aa1(0x580, '1!$B')][
                                        _0x190aa1(0x596, 'Sb3(')
                                      ] = 0.55),
                                      (_0x693148['material'][
                                        _0x190aa1(0x686, '8(4w')
                                      ] = 0.5),
                                      (_0x693148[_0x190aa1(0x605, 'Zh9d')][
                                        _0x190aa1(0x1f1, 'wS^x')
                                      ] = !0x0),
                                      _0x693148[_0x190aa1(0x27f, 'ft9i')][
                                        _0x190aa1(0x696, 'bvRN')
                                      ](BLOOM_SCENE);
                                  else {
                                    if (
                                      _0x15d411[_0x190aa1(0x2da, 'ft9i')](
                                        _0x693148[_0x190aa1(0x364, '6MN7')],
                                        _0x190aa1(0x4bd, 'XYL^')
                                      )
                                    ) {
                                      const _0x50d0d3 = _0x190aa1(
                                        0x399,
                                        'cSG3'
                                      )[_0x190aa1(0x147, 'fx&2')]('|');
                                      let _0x48df53 = 0x0;
                                      while (!![]) {
                                        switch (_0x50d0d3[_0x48df53++]) {
                                          case '0':
                                            _0x693148[_0x190aa1(0x605, 'Zh9d')][
                                              _0x190aa1(0x47c, '6MN7')
                                            ] = 0x0;
                                            continue;
                                          case '1':
                                            _0x693148[_0x190aa1(0x45f, 'yg&L')][
                                              'roughness'
                                            ] = 0.55;
                                            continue;
                                          case '2':
                                            _0x693148['material'][
                                              _0x190aa1(0x752, '*YS&')
                                            ] = new Color(
                                              _0x15d411[
                                                _0x190aa1(0x7a3, 'wS^x')
                                              ]
                                            );
                                            continue;
                                          case '3':
                                            _0x693148[_0x190aa1(0x6c8, '$pop')][
                                              _0x190aa1(0x1fd, 'fx&2')
                                            ] = new Color(
                                              _0x15d411[
                                                _0x190aa1(0x13a, '8%Yf')
                                              ]
                                            );
                                            continue;
                                          case '4':
                                            _0x693148[_0x190aa1(0x4a5, 'z$rz')][
                                              _0x190aa1(0x610, 'c6pd')
                                            ](BLOOM_SCENE);
                                            continue;
                                          case '5':
                                            _0x693148[_0x190aa1(0x282, 'aCG]')][
                                              _0x190aa1(0x582, '8(4w')
                                            ] = !0x0;
                                            continue;
                                        }
                                        break;
                                      }
                                    } else
                                      _0x693148[_0x190aa1(0x280, 'aCG]')][
                                        _0x190aa1(0x60f, '^Pri')
                                      ](BLOOM_SCENE);
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
        }),
          this[_0x28fc9f(0x1a4, 'z$rz')][_0x28fc9f(0x764, 'qOnr')](
            _0x5bfac2[_0x28fc9f(0x579, 'Sb3(')]
          );
        for (
          let _0x278652 = 0x0;
          _0x2779d5[_0x28fc9f(0x74b, '@RzQ')](_0x278652, 0x3);
          _0x278652++
        ) {
          if (
            _0x2779d5[_0x28fc9f(0x4e7, 'h4vQ')](
              'TIgNo',
              _0x28fc9f(0x5dd, '$pop')
            )
          ) {
            if (_0x2c4cb8[_0x28fc9f(0x306, ']i^)')])
              _0x13375a[_0x28fc9f(0x535, '1!$B')][_0x28fc9f(0x274, 'yg&L')](
                _0x160f4f
              );
          } else
            _0x2779d5[_0x28fc9f(0x763, 'BwQE')](
              setTimeout,
              () => {
                const _0x55f8e3 = _0x28fc9f;
                if (
                  _0x2779d5[_0x55f8e3(0x62d, 'z@b#')](
                    _0x2779d5['fDosA'],
                    _0x2779d5[_0x55f8e3(0x15e, '@RzQ')]
                  )
                ) {
                  if (!this[_0x55f8e3(0x142, 'ApUb')]) return;
                  let _0x2c5de9 = this['scatterCircle'](
                    0xa,
                    0.1,
                    0.5,
                    new _0x40e18c(0x0, 0x1, 0x1),
                    0.2
                  );
                  _0x2c5de9[_0x55f8e3(0x73d, 'xHAe')][_0x55f8e3(0x6e9, '8(4w')](
                    0x17,
                    -0x2,
                    -0x20
                  ),
                    _0x2c5de9[_0x55f8e3(0x75d, 'wS^x')](-_0x44f75d['PI'] / 0x2),
                    _0x2c5de9['layers']['enable'](_0x4ad115),
                    this['models'][_0x55f8e3(0x416, '6Zuw')](_0x2c5de9);
                } else {
                  let _0x3e5ec5 = this[_0x55f8e3(0x5a8, 'XYL^')](
                    0x10,
                    0.1,
                    0.5,
                    new Vector3(0x0, 0x1, 0x1),
                    0.2
                  );
                  _0x3e5ec5['position']['set'](-18.851, 0.5, 13.5),
                    _0x3e5ec5[_0x55f8e3(0x246, '6Zuw')](
                      _0x2779d5[_0x55f8e3(0x434, '6Zuw')](-Math['PI'], 0x2)
                    ),
                    _0x3e5ec5['layers'][_0x55f8e3(0x577, 'XZDo')](BLOOM_SCENE),
                    this[_0x55f8e3(0x345, 'h4vQ')][_0x55f8e3(0x621, 'aCG]')](
                      _0x3e5ec5
                    );
                }
              },
              _0x2779d5[_0x28fc9f(0x2fc, 'Q9e[')](_0x278652, 0xbb8)
            );
        }
        this[_0x28fc9f(0x545, 'XYL^')](dashedLineDataLan, 0x912727, 0.03),
          this['loadMenjiLan']();
      },
      function (_0x525755) {
        const _0x1aaa30 = _0xfadfac,
          _0x4cd08d = {
            mjSFf: function (_0x3fa67d, _0x51d5a9, _0x429f54) {
              return _0x3fa67d(_0x51d5a9, _0x429f54);
            },
          };
        if (_0x1aaa30(0x4a4, 'z$rz') !== 'ikTjT')
          console['log'](
            _0x2779d5['LNmHu'](
              _0x2779d5['Uerhw'](
                _0x2779d5[_0x1aaa30(0x2b6, ']i^)')](
                  _0x525755[_0x1aaa30(0x445, 'xHAe')],
                  _0x525755[_0x1aaa30(0x75a, 'xHAe')]
                ),
                0x64
              ),
              _0x2779d5['Sfjhg']
            )
          );
        else {
          const _0x1a200f = {
            icwEL: function (_0x224df9, _0x4b3da2, _0x22e3b6) {
              return _0x224df9(_0x4b3da2, _0x22e3b6);
            },
          };
          this['labelInterval'] = _0x4cd08d[_0x1aaa30(0x276, '1!$B')](
            _0x51ba09,
            () => {
              const _0x19b325 = _0x1aaa30;
              this[_0x19b325(0x542, '3)uO')][_0x19b325(0x2ad, 'o!d*')](
                (_0x379d1e) => {
                  const _0x145a3e = _0x19b325;
                  (_0x379d1e['style'][_0x145a3e(0x539, '^Pri')] = 'scale(1,1)'),
                    _0x1a200f['icwEL'](
                      _0x46acff,
                      () => {
                        const _0x5805ae = _0x145a3e;
                        _0x379d1e['style']['transform'] = _0x5805ae(
                          0x5c2,
                          '$pop'
                        );
                      },
                      0x708
                    );
                }
              );
            },
            0x3e8
          );
        }
      },
      function (_0x4709e2) {
        const _0xffb5e5 = _0xfadfac;
        console[_0xffb5e5(0x789, '*eSd')](_0x2779d5[_0xffb5e5(0x367, 'XYL^')]);
      }
    );
  }
  ['darkenNonBloomed'](_0x27f848) {
    const _0x1a7016 = _0x179150,
      _0x4bd8ec = { fsoRA: _0x1a7016(0x14d, '^Pri'), AnOoO: 'ENCmG' };
    if (
      _0x27f848['isMesh'] &&
      bloomLayer[_0x1a7016(0x12e, 'Yhco')](_0x27f848['layers']) === ![]
    ) {
      if (_0x4bd8ec['fsoRA'] !== _0x4bd8ec[_0x1a7016(0x62f, 'o!d*')])
        (materials[_0x27f848[_0x1a7016(0x43c, 'qOnr')]] =
          _0x27f848[_0x1a7016(0x6fc, ']i^)')]),
          (_0x27f848['material'] = darkMaterial);
      else {
        const _0xef8106 = new _0x2a8195['Tween'](_0x2e37e6)['to'](
          { x: _0x4b9fc7['x'], y: _0xb0699b['y'], z: _0xa78052['z'] },
          _0x301bf
        );
        _0xef8106[_0x1a7016(0x525, 'o1!b')](() => {
          const _0x1fc602 = _0x1a7016;
          this[_0x1fc602(0x34c, 'Ix9w')][_0x1fc602(0x130, 'BwQE')]();
        }),
          _0xef8106[_0x1a7016(0x515, 'AMG9')](
            _0x5bf043['Easing'][_0x1a7016(0x341, '*eSd')][
              _0x1a7016(0x2b8, 'bvRN')
            ]
          ),
          _0xef8106[_0x1a7016(0x5fb, '9s2V')](),
          _0xef8106[_0x1a7016(0x60e, '1!$B')](() => {
            if (_0x2cae6f) _0x1f2be6(!0x0);
          });
      }
    }
  }
  ['restoreMaterial'](_0x414063) {
    const _0x57582b = _0x179150,
      _0x288945 = {
        itiFf: function (_0x11ddde, _0x4209c5) {
          return _0x11ddde === _0x4209c5;
        },
        qsbRS: 'oNWRO',
      };
    materials[_0x414063['uuid']] &&
      (_0x288945['itiFf'](_0x288945['qsbRS'], _0x57582b(0x67b, 'o!d*'))
        ? ((_0x414063[_0x57582b(0x580, '1!$B')] =
            materials[_0x414063[_0x57582b(0x550, 'ft9i')]]),
          delete materials[_0x414063['uuid']])
        : (_0x5150af['wrapS'] = _0x3a063e[_0x57582b(0x13c, '@RzQ')] =
            _0x33e8dc));
  }
  [_0x179150(0x118, '@RzQ')]() {
    const _0x11485b = _0x179150;
    this['scene'][_0x11485b(0x681, 'Sb3(')](
      this[_0x11485b(0x3bf, ']i^)')][_0x11485b(0x39b, '*eSd')](this)
    ),
      this['bloomComposer']['render'](),
      this[_0x11485b(0x1c7, 'xHAe')]['traverse'](
        this['restoreMaterial'][_0x11485b(0x290, ']i^)')](this)
      );
  }
  [_0x179150(0x576, 'XYL^')](_0x4bfb19) {
    const _0x3c03c9 = _0x179150,
      _0x43d132 = {
        erDxY: 'position',
        pdlCZ: _0x3c03c9(0x5a7, '6Zuw'),
        nerDm: _0x3c03c9(0x28b, 'D7Uc'),
        WjaJf: _0x3c03c9(0x351, 'ft9i'),
      },
      _0x795502 = new Group(),
      _0x55ef7d = [];
    _0x55ef7d[_0x3c03c9(0x2a2, 'D@kl')](
      new Vector3(_0x4bfb19['x'], -0x8, _0x4bfb19['z'])
    ),
      _0x55ef7d[_0x3c03c9(0x5bf, '9s2V')](
        new Vector3(_0x4bfb19['x'], -0x2, _0x4bfb19['z'])
      );
    const _0x45476e = new BufferGeometry()[_0x3c03c9(0x2e3, 'ApUb')](_0x55ef7d),
      _0x245e25 = new LineDashedMaterial({
        color: 0x22caeb,
        dashSize: 0.1,
        gapSize: 0.2,
      }),
      _0x31e617 = new Line(_0x45476e, _0x245e25);
    _0x31e617['computeLineDistances'](),
      _0x31e617['layers'][_0x3c03c9(0x3c0, 'o!d*')](BLOOM_SCENE),
      _0x795502[_0x3c03c9(0x663, 'Zh9d')](_0x31e617);
    const _0x3ea6b5 = _0x3c03c9(0x709, '%1gN'),
      _0x3f8286 = _0x3c03c9(0x488, '8(4w'),
      _0x5b9b9a = [0x1],
      _0x4a7b4a = [0.13, 0.8, 0.95],
      _0x36a182 = [_0x4bfb19['x'], -0x2, _0x4bfb19['z']],
      _0xd3eaf3 = new BufferGeometry();
    _0xd3eaf3[_0x3c03c9(0x4f6, '8(4w')](
      _0x43d132['erDxY'],
      new Float32BufferAttribute(_0x36a182, 0x3)
    ),
      _0xd3eaf3['setAttribute'](
        _0x43d132[_0x3c03c9(0x125, 'TZrH')],
        new Float32BufferAttribute(_0x4a7b4a, 0x3)
      ),
      _0xd3eaf3['setAttribute'](
        _0x43d132[_0x3c03c9(0x385, 'D@kl')],
        new Float32BufferAttribute(_0x5b9b9a, 0x1)
      );
    const _0x238d41 = new ShaderMaterial({
        uniforms: {
          color: { value: new Color(0xffffff) },
          pointTexture: {
            value: new TextureLoader()['load'](
              _0x43d132[_0x3c03c9(0x3b5, 'qOnr')]
            ),
          },
          alphaTest: { value: 0x1 },
        },
        vertexShader: _0x3ea6b5,
        fragmentShader: _0x3f8286,
      }),
      _0x49ce22 = new Points(_0xd3eaf3, _0x238d41);
    return (
      _0x49ce22[_0x3c03c9(0x48a, 'T#oD')][_0x3c03c9(0x668, '%1gN')](
        BLOOM_SCENE
      ),
      _0x795502[_0x3c03c9(0x192, ']i^)')](_0x49ce22),
      _0x795502
    );
  }
  [_0x179150(0x5c1, 'o1!b')](
    _0x4f9976,
    _0x3de9c6,
    _0x1f4193,
    _0x277216,
    _0x40b59d
  ) {
    const _0x4ac581 = _0x179150,
      _0x54e013 = {
        cfPJT: function (_0x404cde, _0x4e0bd8) {
          return _0x404cde / _0x4e0bd8;
        },
        FVrzo: function (_0xad5e0b, _0x386047) {
          return _0xad5e0b * _0x386047;
        },
        HijrA: function (_0x4697c6, _0x36df6f) {
          return _0x4697c6 >= _0x36df6f;
        },
        tDmnI: function (_0x10f781, _0x551471) {
          return _0x10f781(_0x551471);
        },
        TVUjx: function (_0x9e88b) {
          return _0x9e88b();
        },
      };
    var _0x520be8 = {
        u_color: { value: _0x277216 },
        u_r: { value: _0x3de9c6 },
        u_ring: { value: _0x1f4193 },
      },
      _0x541f75 = _0x4ac581(0x664, 'yg&L'),
      _0x33f9c5 =
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20vPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec3\x20u_color;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20u_r;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20u_ring;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main(){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20pct=distance(vec2(vPosition.x,vPosition.y),vec2(0.0));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(pct>u_r\x20||\x20pct<(u_r-u_ring)){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(1.0,0.0,0.0,0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}else{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20dis=(pct-(u_r-u_ring))/(u_r-u_ring);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(u_color,dis);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
    const _0x53180f = new CircleGeometry(_0x4f9976, 0x40);
    var _0x17832e = new ShaderMaterial({
      vertexShader: _0x541f75,
      fragmentShader: _0x33f9c5,
      side: DoubleSide,
      uniforms: _0x520be8,
      transparent: !![],
      depthWrite: !![],
      blending: AdditiveBlending,
      transparent: !0x0,
    });
    const _0xbb0950 = new Mesh(_0x53180f, _0x17832e);
    function _0x2c031b() {
      const _0x289e57 = _0x4ac581;
      if (
        _0x520be8['u_r']['value'] <=
          _0x54e013[_0x289e57(0x123, '1!$B')](_0x4f9976 * 0x2, 0x3) &&
        _0x520be8[_0x289e57(0x337, 'z@b#')][_0x289e57(0x3dd, 'f7KG')] >=
          _0x54e013['FVrzo'](_0x4f9976, 0x1) / 0x3
      )
        _0x520be8[_0x289e57(0x29f, 'Njc^')][_0x289e57(0x112, 'Njc^')] +=
          _0x40b59d;
      else
        _0x520be8[_0x289e57(0x68e, 'aCG]')][_0x289e57(0x4cc, 'XZDo')] +=
          _0x40b59d * 0.1;
      _0x54e013[_0x289e57(0x5be, 'ft9i')](
        _0x520be8['u_r']['value'],
        _0x4f9976
      ) && (_0x520be8['u_r'][_0x289e57(0x59f, '@RzQ')] = _0x3de9c6),
        _0x54e013[_0x289e57(0x1fb, '6MN7')](requestAnimationFrame, _0x2c031b);
    }
    return _0x54e013['TVUjx'](_0x2c031b), _0xbb0950;
  }
  ['makeLan'](_0xd5d1a7, _0x12676e, _0x55e5f6, _0x2c09d8, _0x140a9b) {
    const _0x43023b = _0x179150,
      _0x449e1c = {
        vJjEQ: function (_0x2d1455, _0xcf2106) {
          return _0x2d1455 / _0xcf2106;
        },
      },
      _0x484048 = new PlaneGeometry(0x1, 0x1),
      _0x347f0c = new MeshBasicMaterial({
        color: 0xffffff,
        transparent: !0x0,
        opacity: 0x1,
        depthTest: !!0x0,
        map: new TextureLoader()[_0x43023b(0x269, 'Sb3(')](_0x12676e),
      }),
      _0x1d7327 = new Mesh(_0x484048, _0x347f0c);
    _0x1d7327[_0x43023b(0x321, '%1gN')][_0x43023b(0x706, '1!$B')](_0x2c09d8),
      _0x1d7327[_0x43023b(0x60a, '1!$B')](
        _0x449e1c[_0x43023b(0x11a, 'XYL^')](-Math['PI'], 0x2)
      ),
      (_0x1d7327[_0x43023b(0x671, 'yg&L')]['z'] = _0x140a9b),
      _0x1d7327[_0x43023b(0x52d, 'fx&2')][_0x43023b(0x279, 'wxiv')](
        _0x55e5f6['x'],
        _0x55e5f6['y'],
        0x1
      ),
      _0x1d7327['layers'][_0x43023b(0x591, 'Yhco')](ENTIRE_SCENE);
    const _0x3cf250 = new CSS2DObject(_0xd5d1a7);
    (_0x3cf250[_0x43023b(0x46e, 'TZrH')]['z'] = 0x5),
      _0x1d7327[_0x43023b(0x5e8, 'D7Uc')](_0x3cf250),
      this[_0x43023b(0x470, '^Pri')]['add'](_0x1d7327);
  }
  [_0x179150(0x747, 'AMG9')](_0xca5328) {
    const _0x510236 = _0x179150,
      _0x1d4f24 = {
        CxpXN: _0x510236(0x676, 'BwQE'),
        dqOtQ: function (_0x110a87, _0xa7ed18) {
          return _0x110a87 / _0xa7ed18;
        },
      },
      _0x762ec9 = new PlaneGeometry(0xa, 0x5),
      _0x4a8d86 = new MeshBasicMaterial({
        color: 0xffffff,
        transparent: !0x0,
        opacity: 0x1,
        depthTest: !!0x0,
        map: new TextureLoader()[_0x510236(0x6e7, 'AMG9')](
          _0x1d4f24[_0x510236(0x4b3, '3)uO')]
        ),
      }),
      _0x4309c1 = new Mesh(_0x762ec9, _0x4a8d86);
    _0x4309c1[_0x510236(0x5a9, 'XZDo')][_0x510236(0x279, 'wxiv')](
      -0x7,
      -1.8,
      0x1e
    ),
      _0x4309c1[_0x510236(0x489, 'z@b#')][_0x510236(0x359, 'TZrH')](5.6, 3.3),
      _0x4309c1[_0x510236(0x6af, 'h4vQ')](_0x1d4f24['dqOtQ'](-Math['PI'], 0x2)),
      _0x4309c1[_0x510236(0x4f8, 'xHAe')](Math['PI'] / 0x2),
      _0x4309c1['layers'][_0x510236(0x1b8, '$m][')](ENTIRE_SCENE);
    const _0x5c2dab = new CSS2DObject(_0xca5328);
    (_0x5c2dab[_0x510236(0x494, 'Yhco')]['z'] = 0x5),
      _0x4309c1[_0x510236(0x6b4, 'ft9i')](_0x5c2dab),
      this['area'][_0x510236(0x194, 'Yhco')](_0x4309c1);
  }
  [_0x179150(0x57f, 'yg&L')](_0x5c9bb5) {
    const _0x3cb87c = _0x179150,
      _0x20053a = {
        SDxjp: function (_0x4c00cd, _0x365475) {
          return _0x4c00cd / _0x365475;
        },
      },
      _0x56bd3c = new PlaneGeometry(0x5, 0xa),
      _0x5d2070 = new MeshBasicMaterial({
        color: 0xffffff,
        depthTest: !!0x0,
        transparent: !0x0,
        opacity: 0x1,
        map: new TextureLoader()[_0x3cb87c(0x3ff, 'aCG]')](
          _0x3cb87c(0x1c4, 'wS^x')
        ),
      }),
      _0x258c8b = new Mesh(_0x56bd3c, _0x5d2070);
    _0x258c8b[_0x3cb87c(0x62c, '^Pri')]['set'](-0x6, -1.8, -0x12),
      _0x258c8b[_0x3cb87c(0x11d, 'yg&L')]['set'](2.8, 3.3),
      _0x258c8b[_0x3cb87c(0x412, 'Ix9w')](
        _0x20053a[_0x3cb87c(0x6da, 'Yhco')](-Math['PI'], 0x2)
      ),
      this[_0x3cb87c(0x27e, 'z$rz')][_0x3cb87c(0x206, 'Njc^')](_0x258c8b);
    const _0x48a9cf = new CSS2DObject(_0x5c9bb5);
    (_0x48a9cf[_0x3cb87c(0x1bd, 'cSG3')]['z'] = 0x5),
      _0x258c8b[_0x3cb87c(0x44e, '8(4w')](_0x48a9cf);
  }
  [_0x179150(0x508, 'cSG3')](_0x172403) {
    const _0x5998a1 = _0x179150,
      _0x4b69d4 = { IQLyZ: _0x5998a1(0x378, 'D@kl') },
      _0x3879e6 = new PlaneGeometry(0xa, 0x5),
      _0x977b23 = new MeshBasicMaterial({
        color: 0xffffff,
        transparent: !0x0,
        opacity: 0x1,
        depthTest: !!0x0,
        map: new TextureLoader()['load'](_0x4b69d4['IQLyZ']),
      }),
      _0x591dd9 = new Mesh(_0x3879e6, _0x977b23);
    _0x591dd9[_0x5998a1(0x64c, 'wS^x')]['set'](12.4, -1.8, -0x26),
      _0x591dd9[_0x5998a1(0x3ec, 'bvRN')][_0x5998a1(0x417, 'z$rz')](3.4, 9.7),
      _0x591dd9['rotateX'](-Math['PI'] / 0x2),
      console['log'](_0x591dd9),
      this[_0x5998a1(0x1a2, 'cSG3')]['add'](_0x591dd9);
    const _0x4f8bbd = new CSS2DObject(_0x172403);
    (_0x4f8bbd[_0x5998a1(0x507, '*YS&')]['z'] = 0x5),
      _0x591dd9[_0x5998a1(0x654, '1!$B')](_0x4f8bbd);
  }
  ['makeEast'](_0x5550b9) {
    const _0x811074 = _0x179150,
      _0x4281ea = { ccIbK: _0x811074(0x2b3, '6Zuw') },
      _0x2ce023 = new PlaneGeometry(0x7, 0xa),
      _0x529b13 = new MeshBasicMaterial({
        color: 0xff0000,
        transparent: !0x0,
        opacity: 0x1,
        depthTest: !!0x0,
        map: new TextureLoader()[_0x811074(0x619, 'ft9i')](_0x4281ea['ccIbK']),
      }),
      _0x5a5c03 = new Mesh(_0x2ce023, _0x529b13);
    _0x5a5c03['position'][_0x811074(0x20d, 'xHAe')](1.004, -1.8, -36.629),
      _0x5a5c03['scale'][_0x811074(0x6e9, '8(4w')](0x1, 1.3),
      _0x5a5c03[_0x811074(0x700, 'BwQE')](-Math['PI'] / 0x2),
      _0x5a5c03[_0x811074(0x1cc, 'Ix9w')](1.52),
      this['area'][_0x811074(0x663, 'Zh9d')](_0x5a5c03);
    const _0x279e1f = new CSS2DObject(_0x5550b9);
    (_0x279e1f['position']['z'] = 0x5),
      _0x5a5c03[_0x811074(0x40e, 'wS^x')](_0x279e1f);
  }
  ['showArea'](_0x5c3b98) {
    const _0x40e57c = _0x179150,
      _0x24771a = {
        ooQNH: _0x40e57c(0x79a, 'ft9i'),
        NOcfU: function (_0x4e131b, _0x2fae29) {
          return _0x4e131b + _0x2fae29;
        },
        qfnji: function (_0x5627e9, _0xe41af) {
          return _0x5627e9 * _0xe41af;
        },
        EJaaH: function (_0xd53b75, _0x10b93b) {
          return _0xd53b75 / _0x10b93b;
        },
        lkDbB: _0x40e57c(0x250, 'o1!b'),
        HBTGB: function (_0xf3e55a, _0x2968c0) {
          return _0xf3e55a === _0x2968c0;
        },
        efqpN: _0x40e57c(0x741, '6Zuw'),
        wbGPR: 'jpPeG',
        WbptV: _0x40e57c(0x19e, '3)uO'),
        WgSeh: 'Luqro',
        OYdWa: _0x40e57c(0x2d4, '8%Yf'),
        TSqhR: _0x40e57c(0x490, '3)uO'),
        hJoQs: _0x40e57c(0x773, 'BwQE'),
        mcfOM: _0x40e57c(0x55b, 'XZDo'),
        biqkt: _0x40e57c(0x467, '*YS&'),
      };
    if (this[_0x40e57c(0x470, '^Pri')]) {
      if (
        _0x24771a[_0x40e57c(0x52b, '8%Yf')] !==
        _0x24771a[_0x40e57c(0x790, '8(4w')]
      ) {
        this[_0x40e57c(0x5c6, 'xHAe')](this[_0x40e57c(0x409, 'xHAe')]),
          (this['area'] = null);
        return;
      } else {
        (this['isShiJiuGang'] = !this['isShiJiuGang']),
          (this[_0x40e57c(0x783, 'Q9e[')] = null),
          this[_0x40e57c(0x26f, '3)uO')](this[_0x40e57c(0x319, '9s2V')]);
        this['area'] &&
          (this[_0x40e57c(0x34b, 'aCG]')](this[_0x40e57c(0x1d2, 'D@kl')]),
          (this['area'] = null));
        if (!this['isShiJiuGang'])
          this['camera'][_0x40e57c(0x131, '8(4w')][_0x40e57c(0x482, 'XYL^')](
            -32.91,
            135.76,
            157.6
          ),
            this[_0x40e57c(0x357, 'xHAe')][_0x40e57c(0x295, 'T#oD')][
              _0x40e57c(0x68a, 'Sb3(')
            ](-54.01, -6.7, 15.85),
            this[_0x40e57c(0x71a, '9s2V')][_0x40e57c(0x152, '*eSd')](),
            (this[_0x40e57c(0x4dc, 'Zh9d')][_0x40e57c(0x749, 'cSG3')] =
              new _0xa5b0c6()['copy'](
                this[_0x40e57c(0x436, '$m][')][_0x40e57c(0x661, 'yg&L')]
              )),
            (this[_0x40e57c(0x2e0, 'f7KG')][_0x40e57c(0x6a5, '%1gN')] =
              new _0x162edb()[_0x40e57c(0x6e3, 'Sb3(')](
                this['controls']['target']
              )),
            this['loadLanShanGang']();
        else {
          const _0x128b4a = _0x24771a['ooQNH']['split']('|');
          let _0x58a6f6 = 0x0;
          while (!![]) {
            switch (_0x128b4a[_0x58a6f6++]) {
              case '0':
                this[_0x40e57c(0x126, 'h4vQ')]['target'][
                  _0x40e57c(0x58b, 'h4vQ')
                ](-0x3, -0x9, -0x8);
                continue;
              case '1':
                this['controls']['update']();
                continue;
              case '2':
                this[_0x40e57c(0x1bf, 'D7Uc')][_0x40e57c(0x4a1, 'wxiv')][
                  _0x40e57c(0x76b, '*eSd')
                ](0x52, 0x78, 0x6c);
                continue;
              case '3':
                this['controls'][_0x40e57c(0x17b, 'Ix9w')] = new _0x5857ca()[
                  _0x40e57c(0x597, 'BwQE')
                ](this[_0x40e57c(0x2b1, 'qOnr')][_0x40e57c(0x13f, 'Sb3(')]);
                continue;
              case '4':
                this[_0x40e57c(0x514, '8%Yf')][_0x40e57c(0x4f0, 'TZrH')] =
                  new _0xe7f5de()[_0x40e57c(0x788, 'bvRN')](
                    this[_0x40e57c(0x133, 'xHAe')][_0x40e57c(0x629, 'D@kl')]
                  );
                continue;
              case '5':
                this[_0x40e57c(0x732, '8(4w')]();
                continue;
            }
            break;
          }
        }
      }
    }
    (this['area'] = new Group()),
      this['models'][_0x40e57c(0x74a, '6MN7')](this[_0x40e57c(0x692, 'qOnr')]);
    if (this[_0x40e57c(0x3f1, 'XZDo')]) {
      if ('isxCK' !== _0x24771a[_0x40e57c(0x26b, 'D7Uc')]) {
        const _0x358353 = _0x40e57c(0x59b, 'bvRN')[_0x40e57c(0x196, 'aCG]')](
          '|'
        );
        let _0x2c0088 = 0x0;
        while (!![]) {
          switch (_0x358353[_0x2c0088++]) {
            case '0':
              this[_0x40e57c(0x49c, '%1gN')](_0x5c3b98[0x2]);
              continue;
            case '1':
              this[_0x40e57c(0x759, 'Zh9d')](_0x5c3b98[0x0]);
              continue;
            case '2':
              this[_0x40e57c(0x377, 'Yhco')](_0x5c3b98[0x3]);
              continue;
            case '3':
              this[_0x40e57c(0x120, '1!$B')](_0x5c3b98[0x1]);
              continue;
            case '4':
              return;
          }
          break;
        }
      } else {
        const _0x190e45 = _0x4f09b3[_0x40e57c(0x6ea, 'T#oD')]();
        _0x190e45['position'][_0x40e57c(0x6e4, '$pop')](
          _0x2e5e53[_0x40e57c(0x4f9, '$pop')]
        ),
          _0x190e45[_0x40e57c(0x739, 'c6pd')]['copy'](
            _0x3a74d2[_0x40e57c(0x3f0, 'Sb3(')]
          ),
          _0x190e45[_0x40e57c(0x3e6, '$pop')][_0x40e57c(0x5b1, 's7aT')](
            _0x1a4494[_0x40e57c(0x1a3, 'aCG]')]
          ),
          this[_0x40e57c(0x556, 'Sb3(')]['add'](_0x190e45);
      }
    }
    const _0x1cb4fb = [
      {
        scale: new Vector2(11.9, 12.4),
        pos: new Vector3(-43.4, 0x1, 55.3),
        rotation: 0.03,
        img: _0x24771a['OYdWa'],
      },
      {
        scale: new Vector2(0xa, 6.8),
        pos: new Vector3(-35.6, 0x1, 43.4),
        rotation: 0.51,
        img: _0x24771a[_0x40e57c(0x10d, '6Zuw')],
      },
      {
        scale: new Vector2(4.5, 3.8),
        pos: new Vector3(-26.035, 0x1, 50.171),
        rotation: 0.045,
        img: _0x24771a[_0x40e57c(0x3f4, 'ApUb')],
      },
      {
        scale: new Vector2(11.3, 3.4),
        pos: new Vector3(-23.068, 0x1, 46.6),
        rotation: 0.06,
        img: _0x24771a['TSqhR'],
      },
      {
        scale: new Vector2(0xe, 0x6),
        pos: new Vector3(-0x16, 0x1, 0x2d),
        rotation: 0.06,
        img: _0x24771a[_0x40e57c(0x726, 'o!d*')],
      },
      {
        scale: new Vector2(4.3, 0x4),
        pos: new Vector3(-0x17, 0x1, 40.592),
        rotation: 0.1,
        img: _0x24771a['biqkt'],
      },
    ];
    _0x5c3b98[_0x40e57c(0x6bf, 'ApUb')]((_0x3fa4ff, _0x1ea6f4) => {
      const _0x50aa2f = _0x40e57c;
      _0x24771a[_0x50aa2f(0x457, '$pop')](
        _0x24771a[_0x50aa2f(0x699, '@RzQ')],
        _0x50aa2f(0x370, 'Ix9w')
      )
        ? this['makeLan'](
            _0x3fa4ff,
            _0x1cb4fb[_0x1ea6f4][_0x50aa2f(0x424, 'Njc^')],
            _0x1cb4fb[_0x1ea6f4]['scale'],
            _0x1cb4fb[_0x1ea6f4][_0x50aa2f(0x361, 'TZrH')],
            _0x1cb4fb[_0x1ea6f4][_0x50aa2f(0x1a3, 'aCG]')]
          )
        : _0xae4464[_0x50aa2f(0x288, 'c6pd')](
            _0x24771a[_0x50aa2f(0x235, '3)uO')](
              _0x24771a[_0x50aa2f(0x1c2, 'Sb3(')](
                _0x24771a[_0x50aa2f(0x593, 'o!d*')](
                  _0x1813af[_0x50aa2f(0x73c, 'D@kl')],
                  _0x3ed08f[_0x50aa2f(0x1fa, '3)uO')]
                ),
                0x64
              ),
              _0x24771a[_0x50aa2f(0x67d, '9s2V')]
            )
          );
    });
  }
  async [_0x179150(0x4df, 'yg&L')]() {
    const _0x14479c = _0x179150,
      _0x5ccc96 = {
        nhNHl: function (_0x39d8c2, _0x5bcc35) {
          return _0x39d8c2 < _0x5bcc35;
        },
        dPNtP: _0x14479c(0x455, '6Zuw'),
        sDfLH: _0x14479c(0x2f7, 'yg&L'),
        txTBK: _0x14479c(0x79c, 'ApUb'),
        eIMlX: 'line',
      },
      _0x98a6c7 = _0x14479c(0x5a2, 'yg&L'),
      _0x3fb5e4 =
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20uniform\x20vec3\x20color;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20vColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20opacity;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20time;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20random;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20flowTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vUv;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20start\x20=\x20time\x20-\x200.1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(vUv\x20<\x20start)\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(vUv\x20>\x20time)\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20gl_FragColor\x20=\x20vec4(clamp(random,0.1,0.4),clamp(time,0.5,0.8),clamp((vUv-time)*10.0,0.8,1.0),\x20opacity\x20);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4((vUv-start)/0.1*0.3,1.0,1.0-(vUv-start)/0.1,(vUv-start)/0.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20gl_FragColor\x20=\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
    for (
      let _0x52eaf2 = 0x0;
      _0x5ccc96['nhNHl'](_0x52eaf2, roadData[_0x14479c(0x531, 'Ix9w')]);
      _0x52eaf2++
    ) {
      const _0x4212c2 = roadData[_0x52eaf2],
        _0x48aad3 = {
          amplitude: { value: 0x5 },
          opacity: { value: 0.6 },
          color: { value: new Color(0xffffff) },
          time: { value: 0x0 },
          random: { value: 0x0 },
          flowTexture: {
            value: new TextureLoader()[_0x14479c(0x406, '6Zuw')](
              _0x5ccc96[_0x14479c(0x778, 'aCG]')]
            ),
          },
        },
        _0x3f6e62 = new ShaderMaterial({
          uniforms: _0x48aad3,
          vertexShader: _0x98a6c7,
          fragmentShader: _0x3fb5e4,
          side: DoubleSide,
          transparent: !![],
          polygonOffset: !0x0,
          polygonOffsetFactor: -0x1,
          polygonOffsetUnits: -0x3,
        }),
        _0x14f3d0 = [];
      _0x4212c2['forEach']((_0x2d2a3b) => {
        const _0x456646 = _0x14479c;
        _0x14f3d0[_0x456646(0x774, 'o1!b')](
          new Vector3(_0x2d2a3b[0x0], _0x2d2a3b[0x1], _0x2d2a3b[0x2])
        );
      });
      const _0x15b303 = new PolyLine(0.03, !!0x0, !!0x0),
        _0x5eed17 = _0x15b303['spliceArr'](_0x14f3d0),
        [_0x2cdd38, _0x455a9a, _0x442c91, _0x2bde91, _0x3ea958] =
          await _0x15b303[_0x14479c(0x33c, 'wxiv')](
            _0x5eed17[0x0],
            _0x5eed17[0x1]
          ),
        _0x1d88c0 = new BufferGeometry();
      _0x1d88c0[_0x14479c(0x70b, 'D7Uc')](
        _0x14479c(0x3f7, 'AMG9'),
        new BufferAttribute(_0x2cdd38, 0x3)
      ),
        _0x1d88c0['setAttribute'](
          _0x5ccc96[_0x14479c(0x7a1, 'cSG3')],
          new BufferAttribute(new Float32Array(_0x455a9a), 0x3)
        ),
        _0x1d88c0[_0x14479c(0x178, 'bvRN')](_0x442c91),
        _0x1d88c0[_0x14479c(0x794, '*eSd')](
          'uv',
          new BufferAttribute(new Float32Array(_0x2bde91), 0x2)
        ),
        _0x1d88c0[_0x14479c(0x4eb, 'Sb3(')](
          _0x5ccc96[_0x14479c(0x62e, 'h4vQ')],
          new BufferAttribute(new Float32Array(_0x3ea958), 0x3)
        );
      const _0x4435c8 = new Mesh(_0x1d88c0, _0x3f6e62);
      _0x4435c8[_0x14479c(0x23d, 'TZrH')][_0x14479c(0x577, 'XZDo')](
        BLOOM_SCENE
      ),
        (_0x4435c8['name'] = _0x5ccc96[_0x14479c(0x122, '$m][')]),
        this[_0x14479c(0x5f3, 'BwQE')][_0x14479c(0x67f, 'z$rz')](_0x4435c8),
        this[_0x14479c(0x560, 'c6pd')][_0x14479c(0x312, '*eSd')](_0x4435c8);
    }
  }
  [_0x179150(0x225, 'T#oD')]() {
    const _0xdf903d = _0x179150,
      _0x339df1 = {
        EdqxL: function (_0x34e79c, _0x329a0b) {
          return _0x34e79c(_0x329a0b);
        },
        mLGhh: _0xdf903d(0x56e, 'bvRN'),
        fQtJE: _0xdf903d(0x75f, ']i^)'),
        fBPFb: 'model/huolun.glb',
      },
      _0x4029c3 = [
        {
          position: new Vector3(1.7, -2.45, -3.35),
          rotation: new Euler(0x0, 0x0, 0x0, _0x339df1['fQtJE']),
        },
        {
          position: new Vector3(1.7, -2.45, -13.15),
          rotation: new Euler(0x0, 0x0, 0x0, _0x339df1['fQtJE']),
        },
        {
          position: new Vector3(1.7, -2.45, -21.95),
          rotation: new Euler(
            0x0,
            0x0,
            0x0,
            _0x339df1[_0xdf903d(0x2b7, 'c6pd')]
          ),
        },
        {
          position: new Vector3(-3.4, -2.45, 59.142),
          rotation: new Euler(
            0x0,
            0x0,
            0x0,
            _0x339df1[_0xdf903d(0x44f, 's7aT')]
          ),
        },
        {
          position: new Vector3(-16.6, -2.45, 35.985),
          rotation: new Euler(
            0x0,
            0x0,
            0x0,
            _0x339df1[_0xdf903d(0x339, ')39O')]
          ),
        },
        {
          position: new Vector3(-16.6, -2.45, 28.043),
          rotation: new Euler(
            0x0,
            0x0,
            0x0,
            _0x339df1[_0xdf903d(0x40d, 'Ix9w')]
          ),
        },
        {
          position: new Vector3(-16.6, -2.45, 20.358),
          rotation: new Euler(
            0x0,
            0x0,
            0x0,
            _0x339df1[_0xdf903d(0x721, 'o!d*')]
          ),
        },
        {
          position: new Vector3(12.7, -2.45, -0x19),
          rotation: new Euler(
            0x0,
            -0.21,
            0x0,
            _0x339df1[_0xdf903d(0x27b, 'Njc^')]
          ),
        },
        {
          position: new Vector3(-3.4, -2.45, 51.226),
          rotation: new Euler(0x0, 0x0, 0x0, _0x339df1['fQtJE']),
        },
        {
          position: new Vector3(11.7, -2.45, -0x12),
          rotation: new Euler(
            0x0,
            -0.21,
            0x0,
            _0x339df1[_0xdf903d(0x69b, 'z$rz')]
          ),
        },
      ];
    this[_0xdf903d(0x1e1, '8(4w')]['load'](
      _0x339df1[_0xdf903d(0x6b9, '6Zuw')],
      (_0x56f79d) => {
        const _0xdd5217 = _0xdf903d,
          _0x2389a2 = {
            gGbyx: function (_0x23072a, _0xe61726) {
              const _0x3c32ea = _0x3da3;
              return _0x339df1[_0x3c32ea(0x353, 'oYLf')](_0x23072a, _0xe61726);
            },
            eNfLx: _0x339df1[_0xdd5217(0x1d6, 'Yhco')],
          };
        _0x56f79d[_0xdd5217(0x24f, 'f7KG')][_0xdd5217(0x2cb, 'wS^x')](
          (_0x22bf12) => {
            const _0x25ac09 = _0xdd5217,
              _0x3ee014 = {
                qhdIk: function (_0x335aa2, _0xf9c76c) {
                  const _0x100eae = _0x3da3;
                  return _0x2389a2[_0x100eae(0x6ff, 'o1!b')](
                    _0x335aa2,
                    _0xf9c76c
                  );
                },
              };
            if (
              _0x25ac09(0x66d, 'aCG]') !== _0x2389a2[_0x25ac09(0x373, '$pop')]
            ) {
              if (_0x22bf12[_0x25ac09(0x2bd, '$pop')])
                _0x22bf12[_0x25ac09(0x6a9, '*YS&')]['enable'](BLOOM_SCENE);
            } else {
              this[_0x25ac09(0x6b2, 'oYLf')](this['labels']);
              if (this[_0x25ac09(0x56a, 'XZDo')])
                _0x3ee014[_0x25ac09(0x609, 'Q9e[')](
                  _0x33832d,
                  this['labelInterval']
                );
            }
          }
        ),
          _0x56f79d[_0xdd5217(0x50b, 'h4vQ')][_0xdd5217(0x570, 's7aT')][
            _0xdd5217(0x68a, 'Sb3(')
          ](0.3, 0.3, 0.3),
          _0x4029c3[_0xdd5217(0x156, ')39O')]((_0x5d517f) => {
            const _0x33bb4b = _0xdd5217,
              _0x838780 =
                _0x56f79d[_0x33bb4b(0x252, 'XZDo')][_0x33bb4b(0x685, '*eSd')]();
            _0x838780[_0x33bb4b(0x321, '%1gN')][_0x33bb4b(0x1be, 'aCG]')](
              _0x5d517f[_0x33bb4b(0x6ec, 'o!d*')]
            ),
              _0x838780[_0x33bb4b(0x55f, 'ft9i')]['copy'](
                _0x5d517f['rotation']
              ),
              this['models'][_0x33bb4b(0x74d, '*YS&')](_0x838780);
          }),
          (this[_0xdd5217(0x439, 'ApUb')] =
            _0x56f79d['scene'][_0xdd5217(0x6ea, 'T#oD')]()),
          this[_0xdd5217(0x362, 'BwQE')]['position'][_0xdd5217(0x4a8, ']i^)')](
            3.9,
            -2.45,
            5.708
          ),
          this['ship'][_0xdd5217(0x272, '1!$B')](-Math['PI'] / 0x2),
          this[_0xdd5217(0x26c, 'D@kl')][_0xdd5217(0x6b4, 'ft9i')](
            this[_0xdd5217(0x1e0, '8%Yf')]
          );
      }
    );
  }
  [_0x179150(0x214, ']i^)')](_0x104f45) {}
  [_0x179150(0x6c1, 'f7KG')](_0x3b7c62) {
    const _0x1d8da9 = _0x179150;
    this[_0x1d8da9(0x307, 'c6pd')]['material']['uniforms'][
      _0x1d8da9(0x636, 'aCG]')
    ][_0x1d8da9(0x17d, 'cSG3')] = new Color(_0x3b7c62);
  }
  [_0x179150(0x58e, 'T#oD')](_0x483682) {
    const _0x1015b5 = _0x179150;
    this[_0x1015b5(0x2f6, 'o1!b')][_0x1015b5(0x711, '9s2V')][
      _0x1015b5(0x369, 'wS^x')
    ]['size'][_0x1015b5(0x714, 'Yhco')] = _0x483682;
  }
  [_0x179150(0x3e8, '$pop')]() {
    const _0x19c765 = _0x179150;
    (this['isShiJiuGang'] = !this[_0x19c765(0x724, '6Zuw')]),
      (this['water'] = null),
      this[_0x19c765(0x1b3, 'z$rz')](this['models']);
    this[_0x19c765(0x42a, '@RzQ')] &&
      (this[_0x19c765(0x308, 'D7Uc')](this['area']),
      (this[_0x19c765(0x782, '6MN7')] = null));
    if (!this[_0x19c765(0x21a, '1!$B')]) {
      const _0x46e7ea = '3|2|1|5|4|0'['split']('|');
      let _0x4a67f2 = 0x0;
      while (!![]) {
        switch (_0x46e7ea[_0x4a67f2++]) {
          case '0':
            this[_0x19c765(0x758, 'ApUb')]();
            continue;
          case '1':
            this[_0x19c765(0x32f, '%1gN')]['update']();
            continue;
          case '2':
            this[_0x19c765(0x6c9, 'yg&L')]['target'][_0x19c765(0x2e7, 'Zh9d')](
              -54.01,
              -6.7,
              15.85
            );
            continue;
          case '3':
            this['camera'][_0x19c765(0x4d4, '6MN7')][_0x19c765(0x417, 'z$rz')](
              -32.91,
              135.76,
              157.6
            );
            continue;
          case '4':
            this[_0x19c765(0x391, '6Zuw')][_0x19c765(0x616, 'yg&L')] =
              new Vector3()[_0x19c765(0x780, 'h4vQ')](
                this[_0x19c765(0x2b1, 'qOnr')]['target']
              );
            continue;
          case '5':
            this[_0x19c765(0x228, 'wxiv')][_0x19c765(0x2ff, 'AMG9')] =
              new Vector3()[_0x19c765(0x6e3, 'Sb3(')](
                this[_0x19c765(0x3e9, '8(4w')][_0x19c765(0x6f9, 'ApUb')]
              );
            continue;
        }
        break;
      }
    } else {
      const _0x26a1f7 = '2|4|1|3|5|0'['split']('|');
      let _0x550b22 = 0x0;
      while (!![]) {
        switch (_0x26a1f7[_0x550b22++]) {
          case '0':
            this[_0x19c765(0x478, 'D7Uc')]();
            continue;
          case '1':
            this['controls'][_0x19c765(0x22c, 'cSG3')]();
            continue;
          case '2':
            this[_0x19c765(0x326, 'D@kl')][_0x19c765(0x602, 'BwQE')][
              _0x19c765(0x3d9, '$m][')
            ](0x52, 0x78, 0x6c);
            continue;
          case '3':
            this['camera'][_0x19c765(0x365, 'z$rz')] = new Vector3()[
              _0x19c765(0x2dd, '8%Yf')
            ](this[_0x19c765(0x1a7, 's7aT')][_0x19c765(0x4d3, 'qOnr')]);
            continue;
          case '4':
            this[_0x19c765(0x2b1, 'qOnr')][_0x19c765(0x18a, 'TZrH')][
              _0x19c765(0x20d, 'xHAe')
            ](-0x3, -0x9, -0x8);
            continue;
          case '5':
            this[_0x19c765(0x738, '3)uO')][_0x19c765(0x3a5, 'Yhco')] =
              new Vector3()['copy'](this['controls'][_0x19c765(0x185, 'AMG9')]);
            continue;
        }
        break;
      }
    }
  }
  [_0x179150(0x410, 'Yhco')](_0x40b649, _0x119da6, _0x154c11) {
    const _0x14a887 = _0x179150,
      _0x5ec813 = {
        BqtTr: function (_0x3eb5c1, _0x73afcc) {
          return _0x3eb5c1 == _0x73afcc;
        },
        YgOGD: _0x14a887(0x3c6, '9s2V'),
        rgYuH: function (_0x8246f8, _0x34f7db) {
          return _0x8246f8 === _0x34f7db;
        },
        MyVnI: 'pickDevice',
        bIIFx: _0x14a887(0x394, 'XYL^'),
        EPAJK: function (_0x342abd, _0x39a510) {
          return _0x342abd(_0x39a510);
        },
        knkVZ: function (_0x389937, _0x995c3c) {
          return _0x389937 !== _0x995c3c;
        },
        lJnlu: _0x14a887(0x2a4, '@RzQ'),
        byrLe: _0x14a887(0x651, 'o!d*'),
        zuNrJ: function (_0x513d26, _0x33a696, _0x4fbee6) {
          return _0x513d26(_0x33a696, _0x4fbee6);
        },
        IxEmu: _0x14a887(0x5a0, '$pop'),
        YgGsA: _0x14a887(0x626, 'ApUb'),
        IUFDU: _0x14a887(0x1cf, 'D7Uc'),
        WUTBO: 'GvuVG',
        Rfdyg: 'mouseover',
        NskQD: 'click',
        Wazpl: 'icon',
      };
    _0x40b649[_0x14a887(0x474, 'Zh9d')]((_0x52787c, _0x1640be) => {
      const _0x5102d5 = _0x14a887,
        _0x42bea2 = {
          DnHjf: function (_0x2020c1, _0x236afa) {
            return _0x2020c1 === _0x236afa;
          },
          NbHBQ: function (_0x796765, _0x1d46b3) {
            return _0x796765(_0x1d46b3);
          },
          iBSHB: function (_0x4b60f3, _0x2761ee, _0x27be3f) {
            return _0x5ec813['zuNrJ'](_0x4b60f3, _0x2761ee, _0x27be3f);
          },
        };
      if (
        _0x5ec813[_0x5102d5(0x67e, '3)uO')](
          _0x5ec813[_0x5102d5(0x49d, '%1gN')],
          _0x5102d5(0x1bb, 'cSG3')
        )
      ) {
        const _0x3b0fc3 = document[_0x5102d5(0x4fb, 'yg&L')](
          _0x5ec813[_0x5102d5(0x18c, '$m][')]
        );
        _0x3b0fc3['setAttribute']('id', _0x52787c['id']);
        const _0x337d3a = document[_0x5102d5(0x2d1, 'c6pd')](
          _0x5ec813[_0x5102d5(0x4d5, 'XZDo')]
        );
        _0x3b0fc3[_0x5102d5(0x4fd, 'XZDo')](_0x337d3a),
          _0x337d3a[_0x5102d5(0x24e, '6Zuw')](
            _0x5ec813['IUFDU'],
            'cursor:pointer;pointer-events:\x20auto;z-index:20;color:white;display:flex;position:relative;'
          );
        const _0xb6b5f5 = document[_0x5102d5(0x380, '$m][')](
            _0x5ec813['YgGsA']
          ),
          _0x261d91 = _0x52787c['name'][_0x5102d5(0x60d, 'D@kl')];
        if (_0x119da6) {
          if (_0x5ec813[_0x5102d5(0x1e3, '8%Yf')]('sNfjv', _0x5ec813['WUTBO']))
            _0xb6b5f5[_0x5102d5(0x70c, '1!$B')](
              'style',
              _0x5102d5(0x705, 'z$rz') +
                _0x119da6 +
                _0x5102d5(0x476, ')39O') +
                _0x119da6 +
                _0x5102d5(0x64f, 'h4vQ') +
                _0x52787c['imgUrl'] +
                _0x5102d5(0x297, '$pop')
            );
          else {
            if (!_0x1c078a[_0x5102d5(0x174, 'h4vQ')]) return;
            _0x5ec813[_0x5102d5(0x2a0, 'wxiv')](
              _0x22edeb[_0x5102d5(0x3f6, 'D@kl')],
              _0x5ec813['YgOGD']
            ) &&
              ((_0xb55f45[_0x5102d5(0x1b0, '*eSd')][_0x5102d5(0x22b, 'f7KG')] =
                new _0x33e98a(_0x34b473)),
              (_0x211dfa[_0x5102d5(0x200, 'f7KG')][_0x5102d5(0x50f, 'ApUb')] =
                !0x0));
          }
        } else
          _0xb6b5f5['setAttribute'](
            _0x5ec813[_0x5102d5(0x397, '$pop')],
            _0x5102d5(0x615, '6MN7') +
              _0x52787c[_0x5102d5(0x22d, '%1gN')] +
              ')\x20repeat;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:flex;justify-content:center;align-items:center;background-size:100%\x20100%;padding:10%;'
          );
        this[_0x5102d5(0x22a, '1!$B')][_0x5102d5(0x273, '6Zuw')](_0xb6b5f5),
          _0x337d3a[_0x5102d5(0x19c, 'o!d*')](_0xb6b5f5),
          (_0x154c11[_0x1640be][_0x5102d5(0x146, 'c6pd')] = ''),
          _0x337d3a[_0x5102d5(0x2c4, 'BwQE')](_0x154c11[_0x1640be]);
        let _0x1657d5 = 0x1,
          _0x3143a7 = null;
        _0x3b0fc3['addEventListener'](
          _0x5ec813[_0x5102d5(0x684, 'aCG]')],
          () => {
            const _0x309c52 = _0x5102d5,
              _0x41acc4 = {
                NVPQO: function (_0x4355b2, _0x25c80c) {
                  const _0x1b80c7 = _0x3da3;
                  return _0x5ec813[_0x1b80c7(0x28d, 'xHAe')](
                    _0x4355b2,
                    _0x25c80c
                  );
                },
                IWRYR: _0x5ec813[_0x309c52(0x77c, 'fx&2')],
                CnWGV: _0x5ec813[_0x309c52(0x5f6, '6MN7')],
                gluBK: function (_0x2e8475, _0x320705) {
                  const _0x41807f = _0x309c52;
                  return _0x5ec813[_0x41807f(0x2fe, '1!$B')](
                    _0x2e8475,
                    _0x320705
                  );
                },
              };
            _0x5ec813[_0x309c52(0x6e1, 'bvRN')](
              _0x309c52(0x533, 'Sb3('),
              _0x5ec813[_0x309c52(0x285, 'D7Uc')]
            )
              ? (_0x154c11[_0x1640be][_0x309c52(0x548, 'qOnr')] =
                  _0x52787c[_0x309c52(0x4ed, 'Sb3(')])
              : (_0x56422e &&
                  (_0xb1acea(_0x23e77e), _0x30ae89++, (_0x3a4beb = null)),
                (_0x3711a0 = _0xaec4cc(() => {
                  const _0x2a44d8 = _0x309c52;
                  if (_0x41acc4[_0x2a44d8(0x779, '@RzQ')](_0x153cc4, 0x1))
                    this[_0x2a44d8(0x79f, '3)uO')]['emit'](
                      _0x41acc4[_0x2a44d8(0x78f, 'xHAe')],
                      _0x339d3b
                    );
                  else {
                    if (_0x3d1607 === 0x2)
                      this[_0x2a44d8(0x690, '%1gN')][_0x2a44d8(0x6a0, 'T#oD')](
                        _0x41acc4[_0x2a44d8(0x1d0, 'XZDo')],
                        _0x2735dc
                      );
                  }
                  (_0x1a9afa = 0x1),
                    _0x41acc4[_0x2a44d8(0x17e, 'D7Uc')](_0x1cafbf, _0x5615a1),
                    (_0x1f1b89 = null);
                }, 0xc8)));
          }
        ),
          _0x3b0fc3[_0x5102d5(0x584, '%1gN')](_0x5102d5(0x363, '%1gN'), () => {
            const _0x5533ce = _0x5102d5;
            _0x154c11[_0x1640be][_0x5533ce(0x2f4, '^Pri')] = '';
          }),
          _0x3b0fc3['addEventListener'](
            _0x5ec813[_0x5102d5(0x30c, 'wxiv')],
            () => {
              const _0x3fb08e = _0x5102d5,
                _0x50a944 = {
                  HIodH: function (_0x389ad6, _0xd8ad56) {
                    return _0x42bea2['DnHjf'](_0x389ad6, _0xd8ad56);
                  },
                };
              _0x3143a7 &&
                (_0x42bea2['NbHBQ'](clearTimeout, _0x3143a7),
                _0x1657d5++,
                (_0x3143a7 = null)),
                (_0x3143a7 = _0x42bea2[_0x3fb08e(0x15d, '8%Yf')](
                  setTimeout,
                  () => {
                    const _0x321a2b = _0x3fb08e;
                    if (_0x1657d5 === 0x1)
                      this['event']['emit'](
                        _0x321a2b(0x66f, 'cSG3'),
                        _0x52787c
                      );
                    else {
                      if (_0x50a944['HIodH'](_0x1657d5, 0x2))
                        this[_0x321a2b(0x645, 'Yhco')][
                          _0x321a2b(0x2ee, 'TZrH')
                        ]('flyToDevice', _0x52787c);
                    }
                    (_0x1657d5 = 0x1),
                      clearTimeout(_0x3143a7),
                      (_0x3143a7 = null);
                  },
                  0xc8
                ));
            }
          );
        const _0x1ee184 = new CSS2DObject(_0x3b0fc3);
        (_0x1ee184[_0x5102d5(0x46d, 'ApUb')] =
          _0x5ec813[_0x5102d5(0x5f9, '$pop')]),
          (_0x1ee184[_0x5102d5(0x4fe, 'xHAe')] = _0x52787c['id']),
          _0x1ee184['position'][_0x5102d5(0x384, '%1gN')](
            _0x52787c['position']['x'],
            _0x52787c[_0x5102d5(0x4d3, 'qOnr')]['y'],
            _0x52787c['position']['z']
          ),
          this['labels'][_0x5102d5(0x3b8, 'XZDo')](_0x1ee184);
      } else {
        const _0x31e625 = new _0x4bee25(0x5, 0xa),
          _0x4763d8 = new _0x18ebba({
            color: 0xffffff,
            depthTest: !!0x0,
            transparent: !0x0,
            opacity: 0x1,
            map: new _0xa344a8()[_0x5102d5(0x2ae, 'z@b#')](
              _0x5ec813[_0x5102d5(0x64d, 'D@kl')]
            ),
          }),
          _0x1fe0fe = new _0x3ea295(_0x31e625, _0x4763d8);
        _0x1fe0fe['position'][_0x5102d5(0x71b, 'aCG]')](-0x6, -1.8, -0x12),
          _0x1fe0fe[_0x5102d5(0x3bd, 'T#oD')][_0x5102d5(0x3d2, '@RzQ')](
            2.8,
            3.3
          ),
          _0x1fe0fe[_0x5102d5(0x444, 'ft9i')](-_0x5177f0['PI'] / 0x2),
          this[_0x5102d5(0x169, 'ApUb')][_0x5102d5(0x68d, 'xHAe')](_0x1fe0fe);
        const _0x5d5bbf = new _0x29fe4e(_0x5535fc);
        (_0x5d5bbf['position']['z'] = 0x5),
          _0x1fe0fe[_0x5102d5(0x14e, 'XYL^')](_0x5d5bbf);
      }
    }),
      this[_0x14a887(0x54e, 'Zh9d')]();
  }
  ['showDeviceAnimate']() {
    const _0x435e3d = _0x179150,
      _0x953d22 = {
        hACgM: function (_0x120aba, _0x5ccdd9) {
          return _0x120aba === _0x5ccdd9;
        },
        NABAj: _0x435e3d(0x190, 'z$rz'),
        yjSTf: _0x435e3d(0x1d1, '@RzQ'),
        YVSzZ: function (_0x213050, _0x17cfef, _0x3060fa) {
          return _0x213050(_0x17cfef, _0x3060fa);
        },
      };
    this[_0x435e3d(0x350, '9s2V')] = setInterval(() => {
      const _0x311648 = _0x435e3d;
      this[_0x311648(0x338, 'ft9i')][_0x311648(0x245, 'z@b#')]((_0x428280) => {
        const _0x30faee = _0x311648,
          _0x549152 = {
            GKakU: function (_0x44feeb, _0x3703b0) {
              return _0x44feeb == _0x3703b0;
            },
          };
        if (
          _0x953d22['hACgM'](
            _0x953d22[_0x30faee(0x6ae, 'ApUb')],
            _0x953d22['yjSTf']
          )
        ) {
          if (!_0x454b82[_0x30faee(0x154, 'yg&L')]) return;
          _0x549152[_0x30faee(0x354, 'XZDo')](
            _0x188136[_0x30faee(0x658, 'TZrH')],
            '网格'
          ) &&
            ((_0x3bc51f[_0x30faee(0x711, '9s2V')][_0x30faee(0x464, 'TZrH')] =
              _0x1959dc),
            (_0x44351a[_0x30faee(0x198, 'BwQE')]['needsUpdate'] = !0x0));
        } else
          (_0x428280[_0x30faee(0x473, 'D@kl')]['transform'] = _0x30faee(
            0x4b8,
            'z@b#'
          )),
            _0x953d22[_0x30faee(0x1ff, 'o!d*')](
              setTimeout,
              () => {
                const _0xb8079b = _0x30faee;
                _0x428280['style'][_0xb8079b(0x25c, 'D@kl')] = _0xb8079b(
                  0x574,
                  'TZrH'
                );
              },
              0x708
            );
      });
    }, 0x3e8);
  }
  ['hideDevices']() {
    const _0x2327b2 = _0x179150;
    this['disposeGroup'](this['labels']);
    if (this[_0x2327b2(0x350, '9s2V')])
      clearInterval(this[_0x2327b2(0x71f, 'Sb3(')]);
  }
  [_0x179150(0x18b, 's7aT')]() {
    const _0x4d653b = _0x179150,
      _0x6d9d12 = {
        PhWIz: function (_0x1d6937, _0x806a83) {
          return _0x1d6937 == _0x806a83;
        },
        KPwhG: function (_0x1f86c5, _0x441f12) {
          return _0x1f86c5 < _0x441f12;
        },
      };
    this[_0x4d653b(0x429, '8(4w')][_0x4d653b(0x15f, 'Ix9w')][
      _0x4d653b(0x474, 'Zh9d')
    ]((_0x499fa8) => {
      const _0x5c3257 = _0x4d653b;
      if (!_0x499fa8[_0x5c3257(0x5fd, 'AMG9')]) _0x499fa8['visible'] = !0x0;
    });
    let _0x56fdd9 = 0x0;
    while (
      _0x6d9d12[_0x4d653b(0x71c, '*YS&')](
        _0x56fdd9,
        this[_0x4d653b(0x2a7, '1!$B')]['children'][_0x4d653b(0x523, ']i^)')]
      )
    ) {
      this['labels']['children'][_0x4d653b(0x245, 'z@b#')](
        (_0x4688f0, _0x2e24bf) => {
          const _0x326ce5 = _0x4d653b;
          if (
            !_0x4688f0[_0x326ce5(0x2ea, 'aCG]')] ||
            _0x6d9d12[_0x326ce5(0x5f7, 'h4vQ')](_0x2e24bf, _0x56fdd9) ||
            !this[_0x326ce5(0x401, 'wS^x')]['children'][_0x56fdd9][
              _0x326ce5(0x6a6, '*YS&')
            ]
          )
            return;
          const _0x31c41f = new Vector3()
            ['copy'](_0x4688f0[_0x326ce5(0x47e, 's7aT')])
            [_0x326ce5(0x621, 'aCG]')](
              new Vector3()['copy'](
                this['labels'][_0x326ce5(0x164, 'wS^x')][_0x56fdd9][
                  _0x326ce5(0x5a9, 'XZDo')
                ]
              )
            )
            ['divideScalar'](0x2);
          if (
            _0x31c41f[_0x326ce5(0x518, 'XZDo')](
              this[_0x326ce5(0x3de, '%1gN')][_0x326ce5(0x4b5, 'oYLf')]
            ) > 0x3c
          )
            _0x4688f0[_0x326ce5(0x114, '@RzQ')] = !!0x0;
        }
      ),
        _0x56fdd9++;
    }
  }
  ['changeAmbient'](_0x74fc01) {
    const _0x171a35 = _0x179150;
    this[_0x171a35(0x1ef, 'XYL^')][_0x171a35(0x51c, 'Sb3(')] = new Color(
      _0x74fc01
    );
  }
  [_0x179150(0x2c9, '6MN7')](_0x3b67ff) {
    const _0x222a00 = _0x179150;
    this[_0x222a00(0x4e8, 'fx&2')]['color'] = new Color(_0x3b67ff);
  }
  [_0x179150(0x5e6, 'wS^x')](_0x2d0d10) {
    const _0x5b8f2f = _0x179150;
    this[_0x5b8f2f(0x637, 'AMG9')]['intensity'] = _0x2d0d10;
  }
  ['changeDirV'](_0x3d01c4) {
    const _0xc1070c = _0x179150;
    this[_0xc1070c(0x1a6, 'XZDo')][_0xc1070c(0x553, 'Ix9w')] = _0x3d01c4;
  }
  [_0x179150(0x224, 'qOnr')](_0x2d7f99) {
    const _0x2c9c9e = _0x179150;
    this[_0x2c9c9e(0x55c, '8(4w')][_0x2c9c9e(0x2db, '%1gN')]((_0x312032) => {
      const _0x59aa0b = _0x2c9c9e;
      if (!_0x312032['isMesh']) return;
      _0x312032[_0x59aa0b(0x2c6, '*eSd')] == '网格' &&
        ((_0x312032[_0x59aa0b(0x2fb, '*YS&')][_0x59aa0b(0x3d3, '*eSd')] =
          new Color(_0x2d7f99)),
        (_0x312032[_0x59aa0b(0x659, '3)uO')][_0x59aa0b(0x403, 'bvRN')] = !0x0));
    });
  }
  ['changeModelColor1'](_0x115c96) {
    const _0x22216d = _0x179150,
      _0x3e39e8 = {
        XLfQr: _0x22216d(0x76a, 'o!d*'),
        bSzhZ: _0x22216d(0x3c4, '8%Yf'),
        wgVhQ: function (_0x586734, _0x5ef5af) {
          return _0x586734 !== _0x5ef5af;
        },
        sSZvN: _0x22216d(0x16c, 'Q9e['),
      };
    this[_0x22216d(0x719, 'bvRN')][_0x22216d(0x2cb, 'wS^x')]((_0x39307e) => {
      const _0x3a3c52 = _0x22216d;
      if (_0x3e39e8['XLfQr'] !== _0x3e39e8[_0x3a3c52(0x68c, 'f7KG')]) {
        if (!_0x39307e[_0x3a3c52(0x53d, 'Q9e[')]) return;
        _0x39307e[_0x3a3c52(0x310, 'yg&L')] == '网格' &&
          (_0x3e39e8['wgVhQ'](
            _0x3e39e8[_0x3a3c52(0x797, '1!$B')],
            _0x3e39e8['sSZvN']
          )
            ? (this[_0x3a3c52(0x2b4, 'h4vQ')]['material']['uniforms'][
                'waterColor'
              ]['value'] = new _0x16aec1(_0x4f73c8))
            : ((_0x39307e[_0x3a3c52(0x580, '1!$B')][_0x3a3c52(0x51c, 'Sb3(')] =
                new Color(_0x115c96)),
              (_0x39307e[_0x3a3c52(0x516, '6Zuw')][_0x3a3c52(0x6a3, 'z$rz')] =
                !0x0)));
      } else this[_0x3a3c52(0x632, 'ft9i')](this[_0x3a3c52(0x672, 'Sb3(')]);
    });
  }
  [_0x179150(0x1c5, 'Yhco')](_0x33649c) {
    const _0x3a39bb = _0x179150,
      _0x577b99 = { YnlXh: _0x3a39bb(0x15a, 'oYLf') };
    this[_0x3a39bb(0x1a4, 'z$rz')][_0x3a39bb(0x6a7, 'o!d*')]((_0x2b703f) => {
      const _0x42a7e9 = _0x3a39bb;
      if (_0x577b99[_0x42a7e9(0x6f1, '6MN7')] === _0x42a7e9(0x552, 'o!d*'))
        (_0x28c93c[_0xae4a58[_0x42a7e9(0x56d, '$pop')]] =
          _0x8b885[_0x42a7e9(0x2be, 'oYLf')]),
          (_0xe946d9[_0x42a7e9(0x673, ')39O')] = _0x3924db);
      else {
        if (!_0x2b703f['isMesh']) return;
        _0x2b703f['name'] == '网格' &&
          ((_0x2b703f[_0x42a7e9(0x223, 'wS^x')]['roughness'] = _0x33649c),
          (_0x2b703f[_0x42a7e9(0x536, 'ApUb')]['needsUpdate'] = !0x0));
      }
    });
  }
  ['changeMetalness'](_0x24e736) {
    const _0x3cead7 = _0x179150,
      _0x42936f = {
        tXkdx: _0x3cead7(0x1fe, 'Ix9w'),
        vObKN: 'ohRFJ',
        LwqDh: 'uotWz',
      };
    this['models'][_0x3cead7(0x30a, 'AMG9')]((_0x349008) => {
      const _0x3da21d = _0x3cead7,
        _0x47e554 = {
          TTMeu: function (_0x1a8672, _0x11ab3f) {
            return _0x1a8672 == _0x11ab3f;
          },
          UlSvv: _0x42936f['tXkdx'],
        };
      if (!_0x349008['isMesh']) return;
      _0x349008[_0x3da21d(0x328, 'z$rz')] == '网格' &&
        (_0x42936f[_0x3da21d(0x267, 'fx&2')] ===
        _0x42936f[_0x3da21d(0x717, '@RzQ')]
          ? this['models'][_0x3da21d(0x5ce, 'bvRN')]((_0x341eb3) => {
              const _0x341eef = _0x3da21d;
              if (!_0x341eb3[_0x341eef(0x728, 'XZDo')]) return;
              _0x47e554['TTMeu'](
                _0x341eb3['name'],
                _0x47e554[_0x341eef(0x53f, 'Zh9d')]
              ) &&
                ((_0x341eb3[_0x341eef(0x4c8, 'o!d*')][
                  _0x341eef(0x3c7, 'D@kl')
                ] = _0xcd114f),
                (_0x341eb3['material'][_0x341eef(0x193, 'Sb3(')] = !0x0));
            })
          : ((_0x349008[_0x3da21d(0x506, 's7aT')][_0x3da21d(0x720, 'ft9i')] =
              _0x24e736),
            (_0x349008[_0x3da21d(0x2be, 'oYLf')][_0x3da21d(0x38e, 'h4vQ')] =
              !0x0)));
    });
  }
  [_0x179150(0x761, 's7aT')](_0x188f6f) {
    const _0x25eb9f = _0x179150,
      _0xea26a = {
        NoorC: function (_0x1c6cc1, _0xe423a6) {
          return _0x1c6cc1 == _0xe423a6;
        },
        ibQxZ: _0x25eb9f(0x650, 'o1!b'),
      };
    this[_0x25eb9f(0x719, 'bvRN')]['traverse']((_0x3f1a02) => {
      const _0x41b384 = _0x25eb9f;
      if (!_0x3f1a02[_0x41b384(0x79e, 'cSG3')]) return;
      _0xea26a['NoorC'](
        _0x3f1a02[_0x41b384(0x451, '$pop')],
        _0xea26a['ibQxZ']
      ) &&
        ((_0x3f1a02[_0x41b384(0x2b2, 'ft9i')][_0x41b384(0x3d3, '*eSd')] =
          new Color(_0x188f6f)),
        (_0x3f1a02['material'][_0x41b384(0x19d, 'Ix9w')] = !0x0));
    });
  }
  [_0x179150(0x3a7, 'h4vQ')](_0x1a696a) {
    const _0x149f38 = _0x179150,
      _0x3accf2 = {
        gTSfE: function (_0x3867e0, _0x398273) {
          return _0x3867e0 == _0x398273;
        },
        zHWma: '网格170',
      };
    this[_0x149f38(0x36c, ']i^)')][_0x149f38(0x1bc, 'fx&2')]((_0x544ad2) => {
      const _0xe46552 = _0x149f38;
      if (!_0x544ad2[_0xe46552(0x704, 'o1!b')]) return;
      _0x3accf2[_0xe46552(0x589, 'Njc^')](
        _0x544ad2['name'],
        _0x3accf2['zHWma']
      ) &&
        ((_0x544ad2[_0xe46552(0x25e, 'xHAe')][_0xe46552(0x3c3, 'Q9e[')] =
          new Color(_0x1a696a)),
        (_0x544ad2[_0xe46552(0x6c8, '$pop')][_0xe46552(0x346, 'XZDo')] = !0x0));
    });
  }
  [_0x179150(0x6eb, 'T#oD')](_0x3d0ece) {
    const _0x2a884d = _0x179150,
      _0x4048eb = {
        NxcQQ: function (_0x1b6ed9, _0x5d12aa) {
          return _0x1b6ed9 == _0x5d12aa;
        },
        DtooZ: '网格170',
      };
    this[_0x2a884d(0x73f, 'BwQE')][_0x2a884d(0x15b, 's7aT')]((_0x7ce0fd) => {
      const _0x3f06e5 = _0x2a884d;
      if (!_0x7ce0fd['isMesh']) return;
      _0x4048eb[_0x3f06e5(0x613, 'z@b#')](
        _0x7ce0fd[_0x3f06e5(0x2a3, 'ft9i')],
        _0x4048eb[_0x3f06e5(0x6f4, 'yg&L')]
      ) &&
        ((_0x7ce0fd[_0x3f06e5(0x659, '3)uO')][_0x3f06e5(0x15c, '%1gN')] =
          _0x3d0ece),
        (_0x7ce0fd[_0x3f06e5(0x51f, 'AMG9')][_0x3f06e5(0x561, '*YS&')] = !0x0));
    });
  }
  [_0x179150(0x6c4, '6MN7')](_0x57e343) {
    const _0x1a3d5c = _0x179150,
      _0x180d6e = {
        lwraZ: function (_0x2c3a5e, _0x5be949) {
          return _0x2c3a5e == _0x5be949;
        },
        WFyJT: _0x1a3d5c(0x2f0, 'h4vQ'),
      };
    this[_0x1a3d5c(0x5d2, '$m][')][_0x1a3d5c(0x59e, '3)uO')]((_0x54fb4b) => {
      const _0x32f2fc = _0x1a3d5c;
      if (!_0x54fb4b[_0x32f2fc(0x723, 'Ix9w')]) return;
      _0x180d6e[_0x32f2fc(0x5c8, 'D@kl')](
        _0x54fb4b[_0x32f2fc(0x6fa, '$m][')],
        _0x180d6e['WFyJT']
      ) &&
        ((_0x54fb4b[_0x32f2fc(0x282, 'aCG]')][_0x32f2fc(0x10e, 'T#oD')] =
          _0x57e343),
        (_0x54fb4b[_0x32f2fc(0x1b0, '*eSd')]['needsUpdate'] = !0x0));
    });
  }
  ['changejzxxEmissive'](_0x47909e) {
    const _0x8d7ed7 = _0x179150,
      _0x16256b = {
        pqLNA: function (_0xb3a93d, _0xb92fba) {
          return _0xb3a93d === _0xb92fba;
        },
        AvBnd: _0x8d7ed7(0x772, '%1gN'),
        GKOFr: _0x8d7ed7(0x317, 'f7KG'),
        IsVCU: function (_0x2cf09c, _0x3364d4) {
          return _0x2cf09c == _0x3364d4;
        },
        dChGD: _0x8d7ed7(0x78d, 'XYL^'),
      };
    this[_0x8d7ed7(0x75c, 'XZDo')][_0x8d7ed7(0x1d5, 'z@b#')]((_0xf84e7c) => {
      const _0x1690b7 = _0x8d7ed7;
      if (
        _0x16256b['pqLNA'](
          _0x16256b[_0x1690b7(0x693, 'f7KG')],
          _0x16256b[_0x1690b7(0x368, '*eSd')]
        )
      )
        this[_0x1690b7(0x77a, 'cSG3')] &&
          this[_0x1690b7(0x2d6, '%1gN')][_0x1690b7(0x573, 'XYL^')](
            (_0x571686) => {
              const _0x55ae3e = _0x1690b7;
              if (!_0x571686[_0x55ae3e(0x157, 'oYLf')]) return;
              _0x571686[_0x55ae3e(0x647, 'c6pd')][_0x55ae3e(0x437, 'XZDo')] =
                new _0x439fec(_0x3eb320);
            }
          );
      else {
        if (!_0xf84e7c[_0x1690b7(0x438, 'c6pd')]) return;
        _0x16256b['IsVCU'](
          _0xf84e7c['name'],
          _0x16256b[_0x1690b7(0x6cd, 'z$rz')]
        ) &&
          ((_0xf84e7c[_0x1690b7(0x6ac, '%1gN')]['emissive'] = new Color(
            _0x47909e
          )),
          (_0xf84e7c['material'][_0x1690b7(0x407, ')39O')] = !0x0));
      }
    });
  }
  ['changejzxxcolor'](_0x45a1f3) {
    const _0x535bf = _0x179150,
      _0x4c4721 = {
        pWfSS: function (_0x3c0c64, _0x139426) {
          return _0x3c0c64 === _0x139426;
        },
        QNvOj: 'BDTTj',
        QzjNi: function (_0x17b35d, _0x1eec87) {
          return _0x17b35d == _0x1eec87;
        },
        aLder: _0x535bf(0x2af, 's7aT'),
        OIiYB: function (_0x12fd36, _0x561d01) {
          return _0x12fd36 === _0x561d01;
        },
        xmBKg: _0x535bf(0x36b, 'fx&2'),
      };
    this['models'][_0x535bf(0x3fb, '9s2V')]((_0x85a890) => {
      const _0x3041d8 = _0x535bf,
        _0x10d3e6 = { QRGwg: '#00FFFF', eCOvZ: '#00C7FA' };
      if (
        _0x4c4721[_0x3041d8(0x31a, 'yg&L')](
          _0x4c4721[_0x3041d8(0x554, 'fx&2')],
          _0x4c4721[_0x3041d8(0x3cb, 'oYLf')]
        )
      ) {
        if (!_0x85a890[_0x3041d8(0x743, 'wS^x')]) return;
        if (
          _0x4c4721[_0x3041d8(0x754, '$pop')](
            _0x85a890['name'],
            _0x4c4721['aLder']
          )
        ) {
          if (
            _0x4c4721[_0x3041d8(0x217, '%1gN')](
              _0x3041d8(0x45d, 'D7Uc'),
              _0x4c4721[_0x3041d8(0x74e, '$pop')]
            )
          )
            (_0x85a890[_0x3041d8(0x11e, '6MN7')]['color'] = new Color(
              _0x45a1f3
            )),
              (_0x85a890['material'][_0x3041d8(0x193, 'Sb3(')] = !0x0);
          else {
            if (_0x4a9186) _0x915d1d();
          }
        }
      } else {
        const _0x21d4da = _0x3041d8(0x1c0, '8%Yf')[_0x3041d8(0x55d, 'ApUb')](
          '|'
        );
        let _0x2d5da2 = 0x0;
        while (!![]) {
          switch (_0x21d4da[_0x2d5da2++]) {
            case '0':
              _0x408ba4[_0x3041d8(0x23d, 'TZrH')][_0x3041d8(0x463, 'fx&2')](
                _0x218697
              );
              continue;
            case '1':
              _0x268725[_0x3041d8(0x1d7, 'fx&2')][_0x3041d8(0x1f1, 'wS^x')] =
                !0x0;
              continue;
            case '2':
              _0x3e4c57[_0x3041d8(0x607, 'o1!b')][_0x3041d8(0x3bb, '8(4w')] =
                new _0x34826b(_0x10d3e6[_0x3041d8(0x6e6, 'ApUb')]);
              continue;
            case '3':
              _0x50c476[_0x3041d8(0x2f3, 'XYL^')]['metalness'] = 0.5;
              continue;
            case '4':
              _0x1a16af[_0x3041d8(0x111, 'D@kl')][
                _0x3041d8(0x567, 'AMG9')
              ] = 0.55;
              continue;
            case '5':
              _0x50d0f5['material'][_0x3041d8(0x79c, 'ApUb')] = new _0x4ce14d(
                _0x10d3e6[_0x3041d8(0x128, 'wS^x')]
              );
              continue;
          }
          break;
        }
      }
    });
  }
  [_0x179150(0x260, 'TZrH')](_0x3713bd) {
    const _0x1d2626 = _0x179150,
      _0x124ad0 = {
        YYDNR: function (_0x4529eb, _0x13f104) {
          return _0x4529eb == _0x13f104;
        },
        dtmjb: function (_0x199507, _0x5cac73) {
          return _0x199507 == _0x5cac73;
        },
        bqVMY: _0x1d2626(0x505, 'Yhco'),
        taHMI: _0x1d2626(0x2eb, ')39O'),
      };
    this['models'][_0x1d2626(0x623, 'f7KG')]((_0x12d110) => {
      const _0x486b10 = _0x1d2626;
      if (!_0x12d110[_0x486b10(0x113, 's7aT')]) return;
      if (
        _0x124ad0[_0x486b10(0x662, 'cSG3')](
          _0x12d110['name'],
          _0x124ad0[_0x486b10(0x13d, 'o1!b')]
        )
      ) {
        if ('ZPBzn' === _0x124ad0['taHMI'])
          (_0x12d110['material'][_0x486b10(0x1af, 'z$rz')] = _0x3713bd),
            (_0x12d110['material']['needsUpdate'] = !0x0);
        else
          return _0x124ad0[_0x486b10(0x642, 'Njc^')](
            _0x53c797[_0x486b10(0x725, '$pop')],
            _0x54a89e['id']
          );
      }
    });
  }
  ['changejzxxmetalness'](_0x232de7) {
    const _0x4e8bcf = _0x179150;
    this[_0x4e8bcf(0x564, '1!$B')][_0x4e8bcf(0x15b, 's7aT')]((_0x178a64) => {
      const _0xdafc59 = _0x4e8bcf;
      if (!_0x178a64['isMesh']) return;
      _0x178a64[_0xdafc59(0x310, 'yg&L')] == _0xdafc59(0x734, '$pop') &&
        ((_0x178a64[_0xdafc59(0x659, '3)uO')][_0xdafc59(0x41a, '*YS&')] =
          _0x232de7),
        (_0x178a64['material'][_0xdafc59(0x2c5, '$pop')] = !0x0));
    });
  }
  [_0x179150(0x5fa, 'o1!b')](_0x97d80c) {
    const _0x7062d1 = _0x179150;
    this['pluniforms']['emissive'][_0x7062d1(0x59f, '@RzQ')] = new Color(
      _0x97d80c
    );
  }
  [_0x179150(0x5ba, '1!$B')](_0x285c95) {
    const _0x47411a = _0x179150;
    this[_0x47411a(0x768, 'D7Uc')][_0x47411a(0x3db, 'z@b#')][
      _0x47411a(0x299, '6Zuw')
    ][_0x47411a(0x62b, 'fx&2')][_0x47411a(0x5db, 'o1!b')] = new Color(
      _0x285c95
    );
  }
  [_0x179150(0x4cd, 'f7KG')](_0x382010) {
    const _0x7aa19b = _0x179150;
    if (this[_0x7aa19b(0x180, 'T#oD')])
      this[_0x7aa19b(0x264, 'Sb3(')][_0x7aa19b(0x77f, 'h4vQ')]['value'] =
        _0x382010;
  }
  [_0x179150(0x400, '6MN7')](_0x52957a) {
    const _0x294e00 = _0x179150;
    if (this[_0x294e00(0x748, 'z@b#')])
      this[_0x294e00(0x7a2, 's7aT')]['roughness'][_0x294e00(0x1b2, '8%Yf')] =
        _0x52957a;
  }
  [_0x179150(0x6d5, '^Pri')](_0x542f76) {
    const _0x5c74e2 = _0x179150,
      _0x3c89cd = {
        gaHOK: 'div',
        PlHAD: 'style',
        LIyAH: _0x5c74e2(0x247, '@RzQ'),
        zGUiO: _0x5c74e2(0x2b0, 'D7Uc'),
        ipBnA: _0x5c74e2(0x3cd, 'bvRN'),
      },
      _0x31d9fd = document[_0x5c74e2(0x3e4, '6Zuw')](_0x3c89cd['gaHOK']),
      _0x77ba6f = document[_0x5c74e2(0x775, '1!$B')](_0x5c74e2(0x2c0, '$m]['));
    _0x31d9fd['appendChild'](_0x77ba6f),
      _0x77ba6f['setAttribute'](
        _0x3c89cd['PlHAD'],
        'color:white;height:6px;display:flex;flex-direction:row;position:relative;left:50%;margin-left:-3px;'
      );
    const _0x3a8fcf = document[_0x5c74e2(0x5d9, ')39O')](
      _0x3c89cd[_0x5c74e2(0x666, 'wxiv')]
    );
    _0x3a8fcf[_0x5c74e2(0x3f9, 'Q9e[')](
      _0x3c89cd[_0x5c74e2(0x755, 'z@b#')],
      _0x5c74e2(0x620, '3)uO')
    ),
      _0x77ba6f['appendChild'](_0x3a8fcf);
    const _0x316355 = document['createElement']('div');
    _0x316355[_0x5c74e2(0x657, '*YS&')](
      _0x3c89cd['PlHAD'],
      _0x5c74e2(0x5b5, '6MN7')
    ),
      (_0x316355[_0x5c74e2(0x63b, '@RzQ')] =
        this[_0x5c74e2(0x5fc, 's7aT')][this[_0x5c74e2(0x4f1, '*eSd')]]),
      _0x77ba6f[_0x5c74e2(0x627, 'D@kl')](_0x316355);
    const _0x1663e1 = new CSS2DObject(_0x31d9fd);
    (_0x1663e1[_0x5c74e2(0x232, '^Pri')] = _0x3c89cd[_0x5c74e2(0x48e, 'aCG]')]),
      _0x1663e1[_0x5c74e2(0x63d, 'fx&2')][_0x5c74e2(0x51e, 'z$rz')](_0x542f76),
      this['points'][_0x5c74e2(0x3b8, 'XZDo')](_0x1663e1),
      this[_0x5c74e2(0x760, 'o!d*')]++,
      this['event'][_0x5c74e2(0x497, '9s2V')](
        _0x3c89cd[_0x5c74e2(0x49b, 'ApUb')],
        {
          name: this[_0x5c74e2(0x5bc, 'z$rz')][this[_0x5c74e2(0x29c, 'aCG]')]],
          position: _0x542f76,
          imgUrl: _0x3c89cd[_0x5c74e2(0x71e, '3)uO')],
          id: this[_0x5c74e2(0x281, '8(4w')],
        }
      );
  }
  [_0x179150(0x66a, 'f7KG')]() {
    const _0x2ca553 = _0x179150,
      _0x14aacc = {
        Qiltu: function (_0x40e10c, _0x1eadeb) {
          return _0x40e10c < _0x1eadeb;
        },
        xlIgj: _0x2ca553(0x462, '3)uO'),
      };
    if (
      _0x14aacc[_0x2ca553(0x135, 'D@kl')](
        this[_0x2ca553(0x6fe, 'Ix9w')]['children']['length'],
        0x1
      )
    )
      return;
    const _0x304a17 =
      this['points'][_0x2ca553(0x379, '$m][')][_0x2ca553(0x643, 'wxiv')]();
    this['points']['remove'](_0x304a17);
    const _0x327202 = _0x304a17[_0x2ca553(0x255, 'bvRN')];
    _0x327202['parentNode']['removeChild'](_0x327202),
      this[_0x2ca553(0x575, 'z@b#')]--,
      this[_0x2ca553(0x287, '6MN7')][_0x2ca553(0x4b0, ']i^)')](
        _0x14aacc[_0x2ca553(0x3d1, 'Sb3(')],
        this[_0x2ca553(0x134, 'h4vQ')]
      );
  }
  async [_0x179150(0x33e, 'Ix9w')](_0x5d552a, _0x1141a3, _0x423367) {
    const _0x4cea8d = _0x179150,
      _0x1d7a42 = {
        RkySR: function (_0x211062, _0x5d3dda) {
          return _0x211062 > _0x5d3dda;
        },
        RAnTV: function (_0x3c8170, _0x17650c) {
          return _0x3c8170 === _0x17650c;
        },
        KLLSn: 'HOfGu',
        xtjmm: _0x4cea8d(0x520, 'T#oD'),
        eCMvr: _0x4cea8d(0x2d3, '9s2V'),
        duNjr: _0x4cea8d(0x752, '*YS&'),
      },
      _0x3d146c = [];
    this[_0x4cea8d(0x1ab, 'Q9e[')]
      ? _0x1d7a42[_0x4cea8d(0x58c, 'f7KG')] === 'tcMEu'
        ? ((_0x4a094a[_0x4cea8d(0x231, 'z$rz')] = _0x5b8894[_0x19f9df['uuid']]),
          delete _0xb477af[_0x43552c[_0x4cea8d(0x656, '*YS&')]])
        : _0x5d552a['forEach']((_0x12bbd2) => {
            const _0x587dfb = _0x4cea8d;
            _0x3d146c[_0x587dfb(0x4ef, '6MN7')](
              new Vector3(
                _0x12bbd2[_0x587dfb(0x2e5, 'aCG]')]['x'],
                _0x12bbd2[_0x587dfb(0x4a1, 'wxiv')]['y'],
                _0x12bbd2['position']['z']
              )
            );
          })
      : _0x5d552a['forEach']((_0x8c9304) => {
          const _0x18e575 = _0x4cea8d,
            _0x3ec27f = {
              ixcQB: function (_0x41bd13, _0xed4439) {
                const _0x3b865d = _0x3da3;
                return _0x1d7a42[_0x3b865d(0x3a9, 'f7KG')](
                  _0x41bd13,
                  _0xed4439
                );
              },
              reYeo: function (_0x398265, _0x577231) {
                return _0x398265 * _0x577231;
              },
            };
          if (
            _0x1d7a42['RAnTV'](
              _0x1d7a42['KLLSn'],
              _0x1d7a42[_0x18e575(0x1d3, 'T#oD')]
            )
          )
            _0x3d146c[_0x18e575(0x1ea, 'XZDo')](
              new Vector3(_0x8c9304[0x0], _0x8c9304[0x1], _0x8c9304[0x2])
            );
          else {
            const _0x4b7d3c = this[_0x18e575(0x54c, 'xHAe')][_0x3496b9];
            if (
              _0x3ec27f[_0x18e575(0x3af, '9s2V')](
                _0x4b7d3c[_0x18e575(0x131, '8(4w')]['y'],
                0x28
              )
            )
              _0x4b7d3c['position']['y'] = -0x5;
            _0x4b7d3c['position']['y'] += _0x3ec27f[_0x18e575(0x6ed, '8%Yf')](
              0.02,
              _0x4b7d3c['random']
            );
          }
        });
    const _0x24eda3 = new MeshBasicMaterial({
        color: _0x1141a3,
        side: DoubleSide,
      }),
      _0x4f235d = new PolyLine(_0x423367, !0x0, !0x0),
      _0x10ab17 = _0x4f235d[_0x4cea8d(0x4c0, 'Sb3(')](_0x3d146c),
      [_0x3ca4c8, _0x49eea9, _0x4fbd69, _0x5031f6, _0x16c878] = await _0x4f235d[
        _0x4cea8d(0x2cd, 'oYLf')
      ](_0x10ab17[0x0], _0x10ab17[0x1]),
      _0x137874 = new BufferGeometry();
    _0x137874[_0x4cea8d(0x6c2, 'BwQE')](
      _0x1d7a42[_0x4cea8d(0x58d, 'ApUb')],
      new BufferAttribute(_0x3ca4c8, 0x3)
    ),
      _0x137874[_0x4cea8d(0x3be, 'c6pd')](
        _0x4cea8d(0x254, ']i^)'),
        new BufferAttribute(new Float32Array(_0x49eea9), 0x3)
      ),
      _0x137874[_0x4cea8d(0x440, 'AMG9')](_0x4fbd69),
      _0x137874['setAttribute'](
        'uv',
        new BufferAttribute(new Float32Array(_0x5031f6), 0x2)
      ),
      _0x137874[_0x4cea8d(0x153, 'XZDo')](
        _0x1d7a42['duNjr'],
        new BufferAttribute(new Float32Array(_0x16c878), 0x3)
      );
    const _0xd08a9a = new Mesh(_0x137874, _0x24eda3);
    _0xd08a9a['layers'][_0x4cea8d(0x32d, 'qOnr')](BLOOM_SCENE),
      this['models']['add'](_0xd08a9a);
  }
  ['createPanel'](_0x3c424d, _0x13ae62) {
    const _0x3d9526 = _0x179150,
      _0x3255f5 = { uzmhx: _0x3d9526(0x221, 'XYL^') },
      _0x474438 = this[_0x3d9526(0x4e6, '8%Yf')][_0x3d9526(0x53b, '*YS&')][
        _0x3d9526(0x20c, '1!$B')
      ]((_0x2c8320) => {
        return _0x2c8320['deviceId'] == _0x13ae62['id'];
      });
    if (!_0x474438) return;
    const _0x8170bc = new CSS2DObject(_0x3c424d);
    _0x8170bc['name'] = _0x3255f5[_0x3d9526(0x6df, ')39O')];
    const _0x3aebe0 = new Vector3()[_0x3d9526(0x788, 'bvRN')](
      _0x474438[_0x3d9526(0x4d4, '6MN7')]
    );
    _0x8170bc['position']['copy'](_0x3aebe0),
      this['panel'][_0x3d9526(0x5bd, 'TZrH')](_0x8170bc);
  }
  [_0x179150(0x3c2, 'Sb3(')]() {
    const _0xd0f1e = _0x179150;
    this['disposeGroup'](this[_0xd0f1e(0x526, 'Njc^')]);
  }
  async [_0x179150(0x53c, 'fx&2')](_0x437b29, _0x325232) {
    const _0x286fd1 = _0x179150,
      _0x21c783 = {
        cNstK: function (_0x5cb2fe, _0x2a9146) {
          return _0x5cb2fe === _0x2a9146;
        },
        IJDVp: function (_0xc9abe6, _0x53a932) {
          return _0xc9abe6 === _0x53a932;
        },
      };
    let _0x3c31e7;
    this[_0x286fd1(0x199, 'qOnr')][_0x286fd1(0x5d5, 'Njc^')]((_0x1a01e9) => {
      const _0x5285ba = _0x286fd1;
      if (
        _0x21c783['cNstK'](_0x5285ba(0x744, '9s2V'), _0x5285ba(0x481, 'z@b#'))
      )
        (_0x328cca[_0x5285ba(0x1d7, 'fx&2')][_0x5285ba(0x2fd, 'xHAe')] =
          new _0x2b31a7(_0x14575b)),
          (_0x4831f6[_0x5285ba(0x200, 'f7KG')][_0x5285ba(0x2f5, 'oYLf')] =
            !0x0);
      else {
        if (
          _0x21c783[_0x5285ba(0x6f2, 'aCG]')](_0x1a01e9['deviceId'], _0x437b29)
        )
          _0x3c31e7 = _0x1a01e9;
      }
    }),
      _0x3c31e7 && (await this[_0x286fd1(0x241, 'T#oD')](_0x3c31e7));
  }
  [_0x179150(0x43f, ']i^)')](_0x5e6fad) {
    const _0x39d1e5 = _0x179150,
      _0x480eb0 = {
        uBULI: function (_0x4e11d7, _0x30f650) {
          return _0x4e11d7 === _0x30f650;
        },
        XOxRk: _0x39d1e5(0x5a5, 'qOnr'),
        fVkQa: _0x39d1e5(0x460, 'h4vQ'),
      };
    return new Promise((_0x3f3f80) => {
      const _0x2c8e50 = _0x39d1e5;
      if (
        _0x480eb0['uBULI'](
          _0x480eb0[_0x2c8e50(0x5ac, '^Pri')],
          _0x480eb0['fVkQa']
        )
      )
        this[_0x2c8e50(0x383, 'cSG3')][_0x2c8e50(0x3aa, 'bvRN')][
          _0x2c8e50(0x456, ']i^)')
        ](this['camera'][_0x2c8e50(0x48f, '8%Yf')]),
          this['controls'][_0x2c8e50(0x6d8, 'bvRN')][_0x2c8e50(0x36a, 'qOnr')](
            this[_0x2c8e50(0x5b6, '1!$B')][_0x2c8e50(0x5e7, 'o!d*')]
          );
      else {
        const _0x366c0c = new Vector3();
        _0x5e6fad[_0x2c8e50(0x785, '1!$B')](_0x366c0c);
        const _0x4be6c3 = new Vector3()['copy'](_0x366c0c);
        (_0x4be6c3['y'] += 0x3),
          (_0x4be6c3['z'] += 0x5),
          this['tweenAnimate'](
            this[_0x2c8e50(0x581, 'BwQE')][_0x2c8e50(0x63e, 'Sb3(')],
            _0x4be6c3,
            0xbb8
          ),
          this[_0x2c8e50(0x389, 'fx&2')](
            this[_0x2c8e50(0x5b6, '1!$B')][_0x2c8e50(0x6d8, 'bvRN')],
            _0x366c0c,
            0xbb8,
            (_0x4a8977) => {
              if (_0x4a8977) _0x3f3f80();
            }
          );
      }
    });
  }
  [_0x179150(0x253, 'XYL^')]() {
    const _0x1eb787 = _0x179150;
    this[_0x1eb787(0x415, 'bvRN')](
      this[_0x1eb787(0x48b, 'o1!b')][_0x1eb787(0x78e, 'T#oD')],
      this[_0x1eb787(0x3e7, 'Ix9w')]['position0'],
      0xbb8
    ),
      this['tweenAnimate'](
        this[_0x1eb787(0x49f, 'AMG9')]['target'],
        this[_0x1eb787(0x5b6, '1!$B')][_0x1eb787(0x6d1, 'Sb3(')],
        0xbb8
      );
  }
  ['tweenAnimate'](_0x57bf20, _0x557b79, _0x3cabde, _0x307720) {
    const _0x1ade01 = _0x179150,
      _0x5dce5f = {
        oiOcl: function (_0x1fccc3, _0x16915a) {
          return _0x1fccc3 !== _0x16915a;
        },
        uqcEV: _0x1ade01(0x257, 'Sb3('),
        lKguY: _0x1ade01(0x4aa, 'z@b#'),
        YYQEn: function (_0x248119, _0x3c89b0) {
          return _0x248119(_0x3c89b0);
        },
      },
      _0xd59ae7 = new TWEEN[_0x1ade01(0x6bb, 'o1!b')](_0x57bf20)['to'](
        { x: _0x557b79['x'], y: _0x557b79['y'], z: _0x557b79['z'] },
        _0x3cabde
      );
    _0xd59ae7['onUpdate'](() => {
      const _0x5524bc = _0x1ade01;
      _0x5dce5f[_0x5524bc(0x39d, '$m][')](
        _0x5dce5f[_0x5524bc(0x11f, 'xHAe')],
        _0x5dce5f[_0x5524bc(0x242, 'Q9e[')]
      )
        ? this[_0x5524bc(0x5c7, 'Yhco')]['update']()
        : _0x550b86[_0x5524bc(0x2f8, 'o1!b')]['enable'](_0x27d3a1);
    }),
      _0xd59ae7['easing'](
        TWEEN['Easing'][_0x1ade01(0x6c0, 'aCG]')][_0x1ade01(0x6f0, '$m][')]
      ),
      _0xd59ae7[_0x1ade01(0x435, '6Zuw')](),
      _0xd59ae7[_0x1ade01(0x64a, 'wS^x')](() => {
        const _0x5689a9 = _0x1ade01;
        if (_0x307720) _0x5dce5f[_0x5689a9(0x1ed, 'wxiv')](_0x307720, !0x0);
      });
  }
  [_0x179150(0x5cc, 'o!d*')]() {
    const _0x2b7db3 = _0x179150,
      _0x5857fc = { zTvHM: _0x2b7db3(0x679, 'XZDo') },
      _0x590a65 = [
        {
          pos: new Vector3(-37.46, 1.43, 53.386),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(
            0x0,
            0.12,
            0x0,
            _0x5857fc[_0x2b7db3(0x765, '1!$B')]
          ),
        },
        {
          pos: new Vector3(-37.75, 1.43, 51.141),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(
            0x0,
            0.12,
            0x0,
            _0x5857fc[_0x2b7db3(0x138, 'XYL^')]
          ),
        },
        {
          pos: new Vector3(-35.8, 1.43, 0x30),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(
            0x0,
            -0x1,
            0x0,
            _0x5857fc[_0x2b7db3(0x3e0, 'ft9i')]
          ),
        },
        {
          pos: new Vector3(-32.87, 1.43, 45.805),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(
            0x0,
            -0x1,
            0x0,
            _0x5857fc[_0x2b7db3(0x3ba, '$pop')]
          ),
        },
        {
          pos: new Vector3(-29.13, 1.43, 52.227),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(
            0x0,
            -0x3,
            0x0,
            _0x5857fc[_0x2b7db3(0x72e, '%1gN')]
          ),
        },
        {
          pos: new Vector3(-29.39, 1.43, 50.308),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(
            0x0,
            -0x3,
            0x0,
            _0x5857fc[_0x2b7db3(0x220, 'Njc^')]
          ),
        },
        {
          pos: new Vector3(-29.6, 1.43, 48.672),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(0x0, -0x3, 0x0, _0x2b7db3(0x1aa, '1!$B')),
        },
        {
          pos: new Vector3(-29.82, 1.43, 46.857),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(0x0, -0x3, 0x0, _0x5857fc['zTvHM']),
        },
      ];
    this['gltfLoader'][_0x2b7db3(0x5ca, 'xHAe')](
      'model/menji.glb',
      (_0x5cd0cb) => {
        const _0x13f963 = _0x2b7db3,
          _0x8e0e27 =
            _0x5cd0cb[_0x13f963(0x4dd, 'D@kl')][_0x13f963(0x1e4, '$m][')]();
        _0x590a65['forEach']((_0x356e16) => {
          const _0x5c405e = _0x13f963,
            _0x32d7d1 = _0x8e0e27[_0x5c405e(0x70e, 'qOnr')]();
          _0x32d7d1[_0x5c405e(0x23a, '3)uO')][_0x5c405e(0x51e, 'z$rz')](
            _0x356e16['pos']
          ),
            _0x32d7d1[_0x5c405e(0x2f1, 'aCG]')]['copy'](
              _0x356e16[_0x5c405e(0x381, '$pop')]
            ),
            _0x32d7d1[_0x5c405e(0x475, 'XYL^')]['copy'](
              _0x356e16[_0x5c405e(0x418, 'Zh9d')]
            ),
            this['models'][_0x5c405e(0x14e, 'XYL^')](_0x32d7d1);
        });
      }
    );
    const _0x499807 = [
      {
        pos: new Vector3(-36.5, 0.3, 53.061),
        rotation: new Euler(0x0, 3.28, 0x0, 'XYZ'),
      },
      {
        pos: new Vector3(-35.3, 0.3, 48.9),
        rotation: new Euler(0x0, 2.23, 0x0, _0x5857fc['zTvHM']),
      },
      {
        pos: new Vector3(-0x1e, 0.3, 52.158),
        rotation: new Euler(0x0, 0.14, 0x0, _0x5857fc['zTvHM']),
      },
      {
        pos: new Vector3(-30.7, 0.3, 47.2),
        rotation: new Euler(0x0, 0.14, 0x0, _0x2b7db3(0x11c, '$pop')),
      },
    ];
    this[_0x2b7db3(0x5d7, 'z$rz')][_0x2b7db3(0x374, '1!$B')](
      _0x2b7db3(0x746, 'z@b#'),
      (_0xe81351) => {
        const _0x13473a = _0x2b7db3;
        _0xe81351['scene'][_0x13473a(0x1bc, 'fx&2')]((_0x9a9cdb) => {
          const _0x1ba148 = _0x13473a;
          if (_0x9a9cdb['isMesh'])
            _0x9a9cdb[_0x1ba148(0x330, '8(4w')][_0x1ba148(0x158, '@RzQ')](
              BLOOM_SCENE
            );
        }),
          _0xe81351[_0x13473a(0x4db, 'bvRN')][_0x13473a(0x1f5, 'D@kl')][
            _0x13473a(0x417, 'z$rz')
          ](0.3, 0.3, 0.3);
        const _0x4cfba0 =
          _0xe81351[_0x13473a(0x66b, 's7aT')][_0x13473a(0x149, 'h4vQ')]();
        _0x499807[_0x13473a(0x11b, 'T#oD')]((_0x31ad6e) => {
          const _0x238ca4 = _0x13473a,
            _0x2420b1 = _0x4cfba0[_0x238ca4(0x303, 'Ix9w')]();
          _0x2420b1['position']['copy'](_0x31ad6e[_0x238ca4(0x1fc, 'fx&2')]),
            _0x2420b1[_0x238ca4(0x35d, 'Yhco')][_0x238ca4(0x780, 'h4vQ')](
              _0x31ad6e[_0x238ca4(0x1a3, 'aCG]')]
            ),
            this['models'][_0x238ca4(0x534, 'oYLf')](_0x2420b1);
        });
      }
    );
  }
  ['loadDengta']() {
    const _0x2539e0 = _0x179150,
      _0xed0bff = {
        yhLRa: function (_0x49cc73, _0x3917c5) {
          return _0x49cc73 !== _0x3917c5;
        },
        ZigGl: _0x2539e0(0x13b, ')39O'),
      };
    this[_0x2539e0(0x21f, 'Q9e[')][_0x2539e0(0x269, 'Sb3(')](
      _0x2539e0(0x2ca, 'Ix9w'),
      (_0x5d4069) => {
        const _0x399804 = _0x2539e0,
          _0x243398 = {
            dAELe: function (_0x17617e, _0x4437d3) {
              return _0xed0bff['yhLRa'](_0x17617e, _0x4437d3);
            },
            uaOBK: _0xed0bff[_0x399804(0x163, 'wS^x')],
          },
          _0x32f6b1 = _0x5d4069[_0x399804(0x1c7, 'xHAe')];
        _0x32f6b1[_0x399804(0x16e, 'Njc^')][_0x399804(0x25a, 'cSG3')](
          39.571,
          -2.361,
          -47.172
        ),
          _0x32f6b1['traverse']((_0x2fd077) => {
            const _0x4bc069 = _0x399804;
            if (
              _0x243398[_0x4bc069(0x311, ')39O')](
                _0x243398[_0x4bc069(0x301, '@RzQ')],
                _0x4bc069(0x50c, 'D7Uc')
              )
            ) {
              if (!_0x2fd077['isMesh']) return;
              _0x2fd077['layers'][_0x4bc069(0x5b8, 'Sb3(')](BLOOM_SCENE);
            } else
              (_0x381854[_0x4bc069(0x3db, 'z@b#')]['emissive'] = new _0x454664(
                _0x155de4
              )),
                (_0xb00d01[_0x4bc069(0x25e, 'xHAe')][_0x4bc069(0x561, '*YS&')] =
                  !0x0);
          }),
          this[_0x399804(0x44d, 'Yhco')]['add'](_0x32f6b1);
      }
    );
  }
  ['loadMenji']() {
    const _0x38d1b9 = _0x179150,
      _0x1b2e91 = {
        qjINs: function (_0x31c7a7, _0x32b2b0) {
          return _0x31c7a7 * _0x32b2b0;
        },
        AXqPB: function (_0x2e9401, _0x1dc51b) {
          return _0x2e9401 !== _0x1dc51b;
        },
        ZmRLM: function (_0x35b04d, _0x10fd4f) {
          return _0x35b04d !== _0x10fd4f;
        },
        hQWvm: 'aZDkf',
        LRwuP: _0x38d1b9(0x140, 'yg&L'),
        LVxqj: _0x38d1b9(0x2c7, 'AMG9'),
        nmxeo: _0x38d1b9(0x49e, '6MN7'),
        cFwZl: _0x38d1b9(0x586, 'c6pd'),
        lsFYE: _0x38d1b9(0x26d, '@RzQ'),
      },
      _0x2955f4 = [
        {
          pos: new Vector3(-2.7, -1.6, 59.109),
          rotation: new Euler(0x0, -3.13, 0x0, _0x1b2e91['nmxeo']),
        },
        {
          pos: new Vector3(-15.9, -1.6, 35.815),
          rotation: new Euler(0x0, -3.13, 0x0, _0x38d1b9(0x57b, 'xHAe')),
        },
        {
          pos: new Vector3(-15.764, -1.6, 28.28),
          rotation: new Euler(
            0x0,
            -3.13,
            0x0,
            _0x1b2e91[_0x38d1b9(0x2a6, 'o!d*')]
          ),
        },
        {
          pos: new Vector3(-15.86, -1.6, 20.497),
          rotation: new Euler(0x0, -3.13, 0x0, _0x1b2e91['nmxeo']),
        },
        {
          pos: new Vector3(12.2, -1.6, -16.7),
          rotation: new Euler(
            0x0,
            0x3,
            0x0,
            _0x1b2e91[_0x38d1b9(0x25d, '*YS&')]
          ),
        },
        {
          pos: new Vector3(-2.7, -1.6, 0x33),
          rotation: new Euler(0x0, -3.13, 0x0, 'XYZ'),
        },
        {
          pos: new Vector3(13.33, -1.6, -0x18),
          rotation: new Euler(
            0x0,
            0x3,
            0x0,
            _0x1b2e91[_0x38d1b9(0x262, 'cSG3')]
          ),
        },
      ];
    this[_0x38d1b9(0x715, 'D7Uc')][_0x38d1b9(0x753, '%1gN')](
      _0x1b2e91[_0x38d1b9(0x188, 'XYL^')],
      (_0x4907d5) => {
        const _0xf8b7f6 = _0x38d1b9,
          _0x8bdbe9 = {
            fApEj: function (_0x260b0d, _0xc70675, _0x3ad998) {
              return _0x260b0d(_0xc70675, _0x3ad998);
            },
            uLFaN: function (_0x1b4edb, _0x2b22ac) {
              const _0x58f92e = _0x3da3;
              return _0x1b2e91[_0x58f92e(0x2a8, 'o1!b')](_0x1b4edb, _0x2b22ac);
            },
            YZCOi: function (_0x1c3eca, _0x355197) {
              const _0x297bf9 = _0x3da3;
              return _0x1b2e91[_0x297bf9(0x298, 'XYL^')](_0x1c3eca, _0x355197);
            },
            bZHkP: 'crGVL',
          },
          _0x425a30 =
            _0x4907d5[_0xf8b7f6(0x4dd, 'D@kl')][_0xf8b7f6(0x259, 'XYL^')]();
        _0x425a30['scale'][_0xf8b7f6(0x68a, 'Sb3(')](0.008, 0.008, 0.008),
          _0x2955f4['forEach']((_0x2f1403) => {
            const _0x18f719 = _0xf8b7f6,
              _0x3dcbf4 = {
                sHHTN: function (_0x5933bf, _0x27cd26, _0x3185f6) {
                  const _0x36bcef = _0x3da3;
                  return _0x8bdbe9[_0x36bcef(0x19a, 'wS^x')](
                    _0x5933bf,
                    _0x27cd26,
                    _0x3185f6
                  );
                },
                Yszxu: function (_0x24265a, _0x10f951) {
                  const _0x27cdc0 = _0x3da3;
                  return _0x8bdbe9[_0x27cdc0(0x447, 'XYL^')](
                    _0x24265a,
                    _0x10f951
                  );
                },
              };
            if (
              _0x8bdbe9[_0x18f719(0x670, '8%Yf')](
                _0x8bdbe9['bZHkP'],
                _0x8bdbe9['bZHkP']
              )
            ) {
              const _0x5ed327 = {
                hudut: function (_0x4c3ccf, _0x5e0312) {
                  return _0x4c3ccf / _0x5e0312;
                },
              };
              _0x3dcbf4[_0x18f719(0x39c, 'cSG3')](
                _0x43471b,
                () => {
                  const _0x211c51 = _0x18f719;
                  if (!this['isShiJiuGang']) return;
                  let _0x4579b9 = this[_0x211c51(0x695, ')39O')](
                    0xa,
                    0.1,
                    0.5,
                    new _0x57e84d(0x0, 0x1, 0x1),
                    0.2
                  );
                  _0x4579b9[_0x211c51(0x6f9, 'ApUb')][_0x211c51(0x121, 'yg&L')](
                    0x17,
                    -0x2,
                    -0x20
                  ),
                    _0x4579b9['rotateX'](
                      _0x5ed327[_0x211c51(0x68b, '*eSd')](-_0x474378['PI'], 0x2)
                    ),
                    _0x4579b9[_0x211c51(0x4b7, 'wxiv')][
                      _0x211c51(0x696, 'bvRN')
                    ](_0x35fe68),
                    this['models'][_0x211c51(0x793, 'T#oD')](_0x4579b9);
                },
                _0x3dcbf4[_0x18f719(0x3cf, 'o1!b')](_0x3d5a8f, 0xbb8)
              );
            } else {
              const _0x5bce2d = _0x425a30[_0x18f719(0x524, 'cSG3')]();
              _0x5bce2d['position'][_0x18f719(0x40f, '%1gN')](_0x2f1403['pos']),
                _0x5bce2d[_0x18f719(0x544, 'c6pd')][_0x18f719(0x30e, 'Zh9d')](
                  _0x2f1403['rotation']
                ),
                this[_0x18f719(0x65f, '^Pri')][_0x18f719(0x14f, 'Ix9w')](
                  _0x5bce2d
                );
            }
          });
      }
    );
    const _0x32fc5b = [
      {
        pos: new Vector3(1.03, -1.9, -2.074),
        rotation: new Euler(0x0, -1.57, 0x0, _0x1b2e91['nmxeo']),
      },
      {
        pos: new Vector3(1.03, -1.9, -3.874),
        rotation: new Euler(0x0, -1.57, 0x0, _0x38d1b9(0x59d, '8%Yf')),
      },
      {
        pos: new Vector3(1.03, -1.9, -5.674),
        rotation: new Euler(0x0, -1.57, 0x0, _0x38d1b9(0x343, 's7aT')),
      },
      {
        pos: new Vector3(1.03, -1.9, -7.474),
        rotation: new Euler(0x0, -1.57, 0x0, _0x1b2e91['nmxeo']),
      },
      {
        pos: new Vector3(1.03, -1.9, -9.274),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1b2e91[_0x38d1b9(0x261, 'ApUb')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -11.074),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1b2e91[_0x38d1b9(0x3df, '8(4w')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -12.874),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1b2e91[_0x38d1b9(0x31d, 'AMG9')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -14.674),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1b2e91[_0x38d1b9(0x6dd, 'c6pd')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -16.474),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1b2e91[_0x38d1b9(0x396, 'wxiv')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -18.274),
        rotation: new Euler(0x0, -1.57, 0x0, _0x1b2e91['nmxeo']),
      },
      {
        pos: new Vector3(1.03, -1.9, -20.074),
        rotation: new Euler(0x0, -1.57, 0x0, 'XYZ'),
      },
      {
        pos: new Vector3(1.03, -1.9, -21.874),
        rotation: new Euler(0x0, -1.57, 0x0, _0x1b2e91['nmxeo']),
      },
      {
        pos: new Vector3(1.03, -1.9, -23.674),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1b2e91[_0x38d1b9(0x4d9, '%1gN')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -25.474),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1b2e91[_0x38d1b9(0x736, 'XYL^')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -27.274),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1b2e91[_0x38d1b9(0x117, '8%Yf')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -29.074),
        rotation: new Euler(0x0, -1.57, 0x0, _0x1b2e91['nmxeo']),
      },
      {
        pos: new Vector3(1.03, -1.9, -30.874),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1b2e91[_0x38d1b9(0x4e9, '*eSd')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -32.674),
        rotation: new Euler(0x0, -1.57, 0x0, _0x1b2e91['nmxeo']),
      },
    ];
    this[_0x38d1b9(0x3b6, 'ApUb')]['load'](
      _0x1b2e91[_0x38d1b9(0x2bb, 'fx&2')],
      (_0x1c4b48) => {
        const _0x20c4b6 = _0x38d1b9,
          _0xa3dfa4 = {
            fbxpt: function (_0x1d9f91, _0x2bf6ce) {
              const _0x3efe5e = _0x3da3;
              return _0x1b2e91[_0x3efe5e(0x5ed, 'fx&2')](_0x1d9f91, _0x2bf6ce);
            },
            uscPw: _0x1b2e91['hQWvm'],
            QZQIj: _0x1b2e91['LRwuP'],
            iPRmn: _0x1b2e91[_0x20c4b6(0x116, 'o1!b')],
          };
        (this[_0x20c4b6(0x5cd, 's7aT')] = _0x1c4b48['scene']['clone']()),
          this['menjiFater'][_0x20c4b6(0x1f5, 'D@kl')]['set'](0.02, 0.03, 0.02),
          this[_0x20c4b6(0x386, 'BwQE')][_0x20c4b6(0x2cb, 'wS^x')](
            (_0x59124d) => {
              const _0x34414c = _0x20c4b6;
              if (
                _0xa3dfa4[_0x34414c(0x559, 'ft9i')](
                  _0xa3dfa4[_0x34414c(0x1b9, '9s2V')],
                  _0xa3dfa4[_0x34414c(0x35e, ']i^)')]
                )
              )
                _0x1f3a07[_0x18081c][_0x34414c(0x16f, 'xHAe')] = '';
              else {
                if (!_0x59124d[_0x34414c(0x26e, '6MN7')]) return;
                _0x59124d[_0x34414c(0x647, 'c6pd')][_0x34414c(0x74c, 'D@kl')] =
                  new Color(0x1e5fe0);
              }
            }
          ),
          this[_0x20c4b6(0x653, '@RzQ')][_0x20c4b6(0x3f2, 'BwQE')](
            (_0x31d4f6) => {
              const _0x6e87c3 = _0x20c4b6;
              if (_0x6e87c3(0x294, 'ApUb') !== _0xa3dfa4['QZQIj']) {
                const _0x38246f = {
                  OGfbC: function (_0x40eb4f, _0x1ba8ab) {
                    return _0x40eb4f > _0x1ba8ab;
                  },
                };
                this[_0x6e87c3(0x697, '*YS&')][_0x6e87c3(0x678, '6Zuw')](
                  (_0x579b84) => {
                    const _0x1e50ef = _0x6e87c3;
                    _0x38246f['OGfbC'](
                      _0x579b84['material']['uniforms'][
                        _0x1e50ef(0x195, 's7aT')
                      ][_0x1e50ef(0x3b9, '*eSd')],
                      0x1
                    ) &&
                      (_0x579b84['material'][_0x1e50ef(0x454, '*YS&')][
                        _0x1e50ef(0x4b6, 'c6pd')
                      ][_0x1e50ef(0x28c, 'z$rz')] = 0x0),
                      (_0x579b84[_0x1e50ef(0x6fc, ']i^)')][
                        _0x1e50ef(0x78b, 'f7KG')
                      ]['time'][_0x1e50ef(0x730, '*YS&')] += 0.001);
                  }
                );
              } else {
                if (!_0x31d4f6[_0x6e87c3(0x70a, '$m][')]) return;
                _0x31d4f6[_0x6e87c3(0x69a, 'cSG3')][_0x6e87c3(0x472, 'Ix9w')] =
                  new Color(0x3567a4);
              }
            }
          ),
          _0x32fc5b[_0x20c4b6(0x1e2, 'o1!b')]((_0x34a064) => {
            const _0x2664e4 = _0x20c4b6,
              _0x436890 = {
                BuZlt: function (_0x382f91, _0x355fd1) {
                  return _0x382f91 === _0x355fd1;
                },
                tvIdD: _0x2664e4(0x5e0, 'aCG]'),
              };
            if (_0xa3dfa4[_0x2664e4(0x19b, 'Q9e[')] === _0xa3dfa4['iPRmn']) {
              const _0x4907f6 = this['menjiFater'][_0x2664e4(0x3fa, 'aCG]')]();
              _0x4907f6[_0x2664e4(0x47e, 's7aT')][_0x2664e4(0x5ff, 'cSG3')](
                _0x34a064[_0x2664e4(0x598, 'ft9i')]
              ),
                _0x4907f6['rotation'][_0x2664e4(0x1d8, '9s2V')](
                  _0x34a064[_0x2664e4(0x150, 'T#oD')]
                ),
                this[_0x2664e4(0x26c, 'D@kl')][_0x2664e4(0x793, 'T#oD')](
                  _0x4907f6
                );
            } else {
              _0x320ef5[_0x2664e4(0x63f, 'z$rz')][_0x2664e4(0x366, 'o!d*')]();
              if (_0x23584e[_0x2664e4(0x506, 's7aT')]) {
                _0x4d11aa[_0x2664e4(0x607, 'o1!b')][_0x2664e4(0x4c7, 'xHAe')]();
                for (const _0x446bf3 of _0xb7da00['keys'](
                  _0x43b4a1[_0x2664e4(0x680, 'Yhco')]
                )) {
                  const _0x4b6956 =
                    _0x2c871c[_0x2664e4(0x72c, 'Ix9w')][_0x446bf3];
                  _0x4b6956 &&
                    _0x436890['BuZlt'](typeof _0x4b6956, _0x436890['tvIdD']) &&
                    'minFilter' in _0x4b6956 &&
                    _0x4b6956[_0x2664e4(0x6f3, 'Q9e[')]();
                }
              }
            }
          });
      }
    );
  }
  [_0x179150(0x375, 'AMG9')](_0x1926bb) {
    const _0x424f7c = _0x179150,
      _0x225df4 = {
        Swrvx: function (_0x44b032, _0x4949ed) {
          return _0x44b032 !== _0x4949ed;
        },
        KPfHz: 'uHDUU',
        UBDZk: _0x424f7c(0x5b9, 'Njc^'),
      };
    this['menjiFater'] &&
      this[_0x424f7c(0x30d, 'f7KG')][_0x424f7c(0x713, 'yg&L')]((_0x1c19d6) => {
        const _0x47802c = _0x424f7c;
        if (
          _0x225df4[_0x47802c(0x5f1, '6Zuw')](
            _0x225df4[_0x47802c(0x617, '@RzQ')],
            _0x225df4['UBDZk']
          )
        ) {
          if (!_0x1c19d6[_0x47802c(0x348, 'Njc^')]) return;
          _0x1c19d6['material']['emissive'] = new Color(_0x1926bb);
        } else {
          const _0x53af41 =
            _0x400680[_0x47802c(0x66b, 's7aT')][_0x47802c(0x426, 'wS^x')]();
          _0x53af41[_0x47802c(0x71d, 'z$rz')][_0x47802c(0x3fc, 'wS^x')](
            _0x30b63a[_0x47802c(0x46e, 'TZrH')]
          ),
            _0x53af41['rotation'][_0x47802c(0x1ee, 'oYLf')](
              _0x28113a[_0x47802c(0x197, 'D@kl')]
            ),
            this[_0x47802c(0x33b, 'aCG]')][_0x47802c(0x79b, '8%Yf')](_0x53af41);
        }
      });
  }
  [_0x179150(0x73e, 'XZDo')](_0x31a275) {
    const _0x2f3de4 = _0x179150,
      _0x59c5ca = {
        kwdLK: function (_0x3fa090, _0x64a398) {
          return _0x3fa090 !== _0x64a398;
        },
        PERKu: _0x2f3de4(0x612, 'oYLf'),
        sKfPQ: _0x2f3de4(0x487, '9s2V'),
      };
    this[_0x2f3de4(0x65c, '3)uO')] &&
      this[_0x2f3de4(0x595, 'c6pd')]['traverse']((_0x464cb1) => {
        const _0x31c8f4 = _0x2f3de4;
        if (
          _0x59c5ca[_0x31c8f4(0x72b, 'XYL^')](
            _0x59c5ca['PERKu'],
            _0x59c5ca[_0x31c8f4(0x740, 'z$rz')]
          )
        ) {
          if (!_0x464cb1[_0x31c8f4(0x314, 'BwQE')]) return;
          _0x464cb1['material'][_0x31c8f4(0x660, 'o1!b')] = new Color(
            _0x31a275
          );
        } else
          this[_0x31c8f4(0x4cf, 'ft9i')]['traverse']((_0x3f8261) => {
            const _0x406221 = _0x31c8f4;
            if (!_0x3f8261[_0x406221(0x10f, '6Zuw')]) return;
            _0x3f8261[_0x406221(0x20b, 'Njc^')]['emissive'] = new _0x108c06(
              _0x4c5e0a
            );
          });
      });
  }
}
var version_ = 'jsjiami.com.v7';
