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

var _0xodV = 'jsjiami.com.v7';
const _0x124220 = _0x3432;
((function (
  _0x75d544,
  _0xe04925,
  _0x1e4676,
  _0x53d0f7,
  _0x2c959d,
  _0x1c83cd,
  _0x37e490
) {
  return (
    (_0x75d544 = _0x75d544 >> 0x2),
    (_0x1c83cd = 'hs'),
    (_0x37e490 = 'hs'),
    (function (_0xcc7036, _0xb2483f, _0x4f3fc7, _0x575e41, _0x5a4327) {
      const _0x32f465 = _0x3432;
      (_0x575e41 = 'tfi'),
        (_0x1c83cd = _0x575e41 + _0x1c83cd),
        (_0x5a4327 = 'up'),
        (_0x37e490 += _0x5a4327),
        (_0x1c83cd = _0x4f3fc7(_0x1c83cd)),
        (_0x37e490 = _0x4f3fc7(_0x37e490)),
        (_0x4f3fc7 = 0x0);
      const _0x3117dd = _0xcc7036();
      while (!![] && --_0x53d0f7 + _0xb2483f) {
        try {
          _0x575e41 =
            parseInt(_0x32f465(0x6db, '9@W9')) / 0x1 +
            (-parseInt(_0x32f465(0x85b, 'o7f1')) / 0x2) *
              (-parseInt(_0x32f465(0x72a, 'LMyx')) / 0x3) +
            (parseInt(_0x32f465(0x530, 'v]cc')) / 0x4) *
              (parseInt(_0x32f465(0x3ff, 'ZmW^')) / 0x5) +
            (-parseInt(_0x32f465(0x369, 'rmSV')) / 0x6) *
              (parseInt(_0x32f465(0x5b5, 'Kk69')) / 0x7) +
            -parseInt(_0x32f465(0x778, ')bs3')) / 0x8 +
            -parseInt(_0x32f465(0x3c6, 'niup')) / 0x9 +
            (-parseInt(_0x32f465(0x57d, 'ZmW^')) / 0xa) *
              (parseInt(_0x32f465(0x7b7, 'qNG@')) / 0xb);
        } catch (_0x46b190) {
          _0x575e41 = _0x4f3fc7;
        } finally {
          _0x5a4327 = _0x3117dd[_0x1c83cd]();
          if (_0x75d544 <= _0x53d0f7)
            _0x4f3fc7
              ? _0x2c959d
                ? (_0x575e41 = _0x5a4327)
                : (_0x2c959d = _0x5a4327)
              : (_0x4f3fc7 = _0x5a4327);
          else {
            if (
              _0x4f3fc7 == _0x2c959d['replace'](/[WXUqMLFxtkOpVCrATPbK=]/g, '')
            ) {
              if (_0x575e41 === _0xb2483f) {
                _0x3117dd['un' + _0x1c83cd](_0x5a4327);
                break;
              }
              _0x3117dd[_0x37e490](_0x5a4327);
            }
          }
        }
      }
    })(
      _0x1e4676,
      _0xe04925,
      function (
        _0x3ce109,
        _0x1bdc9a,
        _0x577193,
        _0x54eb04,
        _0x19f78e,
        _0x43e7f4,
        _0x434e6a
      ) {
        return (
          (_0x1bdc9a = '\x73\x70\x6c\x69\x74'),
          (_0x3ce109 = arguments[0x0]),
          (_0x3ce109 = _0x3ce109[_0x1bdc9a]('')),
          (_0x577193 = '\x72\x65\x76\x65\x72\x73\x65'),
          (_0x3ce109 = _0x3ce109[_0x577193]('\x76')),
          (_0x54eb04 = '\x6a\x6f\x69\x6e'),
          (0x17fee2, _0x3ce109[_0x54eb04](''))
        );
      }
    )
  );
})(0x32c, 0xbab9f, _0x3381, 0xcd),
_0x3381) && (_0xodV = 0xcd);
const ENTIRE_SCENE = 0x0,
  BLOOM_SCENE = 0x1,
  bloomLayer = new Layers();
function _0x3432(_0x3eba61, _0x793552) {
  const _0x338186 = _0x3381();
  return (
    (_0x3432 = function (_0x343289, _0x400f64) {
      _0x343289 = _0x343289 - 0x1b4;
      let _0x328f68 = _0x338186[_0x343289];
      if (_0x3432['MQAkdY'] === undefined) {
        var _0x58f200 = function (_0x2c0ff8) {
          const _0x39416f =
            'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
          let _0x3b65cb = '',
            _0x2454fa = '';
          for (
            let _0x20c059 = 0x0, _0x227ce5, _0x1f5790, _0x294419 = 0x0;
            (_0x1f5790 = _0x2c0ff8['charAt'](_0x294419++));
            ~_0x1f5790 &&
            ((_0x227ce5 =
              _0x20c059 % 0x4 ? _0x227ce5 * 0x40 + _0x1f5790 : _0x1f5790),
            _0x20c059++ % 0x4)
              ? (_0x3b65cb += String['fromCharCode'](
                  0xff & (_0x227ce5 >> ((-0x2 * _0x20c059) & 0x6))
                ))
              : 0x0
          ) {
            _0x1f5790 = _0x39416f['indexOf'](_0x1f5790);
          }
          for (
            let _0x3b3a06 = 0x0, _0x3ec839 = _0x3b65cb['length'];
            _0x3b3a06 < _0x3ec839;
            _0x3b3a06++
          ) {
            _0x2454fa +=
              '%' +
              ('00' + _0x3b65cb['charCodeAt'](_0x3b3a06)['toString'](0x10))[
                'slice'
              ](-0x2);
          }
          return decodeURIComponent(_0x2454fa);
        };
        const _0x12b6f2 = function (_0x46cff0, _0x147ad7) {
          let _0x1041b6 = [],
            _0x3ec421 = 0x0,
            _0x299d2b,
            _0x167c4b = '';
          _0x46cff0 = _0x58f200(_0x46cff0);
          let _0x2c76c9;
          for (_0x2c76c9 = 0x0; _0x2c76c9 < 0x100; _0x2c76c9++) {
            _0x1041b6[_0x2c76c9] = _0x2c76c9;
          }
          for (_0x2c76c9 = 0x0; _0x2c76c9 < 0x100; _0x2c76c9++) {
            (_0x3ec421 =
              (_0x3ec421 +
                _0x1041b6[_0x2c76c9] +
                _0x147ad7['charCodeAt'](_0x2c76c9 % _0x147ad7['length'])) %
              0x100),
              (_0x299d2b = _0x1041b6[_0x2c76c9]),
              (_0x1041b6[_0x2c76c9] = _0x1041b6[_0x3ec421]),
              (_0x1041b6[_0x3ec421] = _0x299d2b);
          }
          (_0x2c76c9 = 0x0), (_0x3ec421 = 0x0);
          for (
            let _0x25156d = 0x0;
            _0x25156d < _0x46cff0['length'];
            _0x25156d++
          ) {
            (_0x2c76c9 = (_0x2c76c9 + 0x1) % 0x100),
              (_0x3ec421 = (_0x3ec421 + _0x1041b6[_0x2c76c9]) % 0x100),
              (_0x299d2b = _0x1041b6[_0x2c76c9]),
              (_0x1041b6[_0x2c76c9] = _0x1041b6[_0x3ec421]),
              (_0x1041b6[_0x3ec421] = _0x299d2b),
              (_0x167c4b += String['fromCharCode'](
                _0x46cff0['charCodeAt'](_0x25156d) ^
                  _0x1041b6[
                    (_0x1041b6[_0x2c76c9] + _0x1041b6[_0x3ec421]) % 0x100
                  ]
              ));
          }
          return _0x167c4b;
        };
        (_0x3432['pEpSFG'] = _0x12b6f2),
          (_0x3eba61 = arguments),
          (_0x3432['MQAkdY'] = !![]);
      }
      const _0x26715c = _0x338186[0x0],
        _0x1d29cf = _0x343289 + _0x26715c,
        _0x14211e = _0x3eba61[_0x1d29cf];
      return (
        !_0x14211e
          ? (_0x3432['MRxnAm'] === undefined && (_0x3432['MRxnAm'] = !![]),
            (_0x328f68 = _0x3432['pEpSFG'](_0x328f68, _0x400f64)),
            (_0x3eba61[_0x1d29cf] = _0x328f68))
          : (_0x328f68 = _0x14211e),
        _0x328f68
      );
    }),
    _0x3432(_0x3eba61, _0x793552)
  );
}
bloomLayer[_0x124220(0x7c2, ')bs3')](BLOOM_SCENE);
const params = {
    exposure: 0.9,
    bloomStrength: 0.38,
    bloomThreshold: 0x0,
    bloomRadius: 0.09,
  },
  darkMaterial = new MeshBasicMaterial({
    color: _0x124220(0x1e2, 'ZXoK'),
    transparent: !0x0,
    opacity: 0x1,
  }),
  materials = {};
function _0x3381() {
  const _0x172e6e = (function () {
    return [
      _0xodV,
      'TxUjCWkstjpXViMaPXmri.bFcbotFOmqtL.AvkK7==',
      'WQlcPgi1oa',
      'W7mNc8k0vG',
      'WO/cHGa',
      'W6u4gCoaWPlcTKJcUSoafmo5W61P',
      'WPhcJHTCsG',
      'tmoCxCo0WQxdHdddTG',
      'WQNdNcrjwq',
      'hKBcICo6qW',
      'A1ldLXTb',
      '6yw+5Qwsr8oH',
      'W7zKW6CCWOddMCk5qq',
      'kmk8kCkkW44',
      'BKupWQ7cOW',
      'WOZcJaC',
      'W6zUW70PWOBdGSkNw8kGW7bfWRW',
      'WObrjSkF',
      'bq4LW6tcJmkG',
      'c3ueAvK',
      'mCozW5/dS1hdOG',
      'k38Hxq',
      'buaXW4fapW',
      'DH7dOmkXW5ZcUWKqWQGRWP0',
      'WRddNZddKd0cja',
      'uCowwSo8WR3dGZRdQ3O',
      'pSk7W6ikdWxdOv8',
      'W54jWOJcIKyF',
      'WQq0WOJcN8oN',
      'W7z+W7SBWP3dHmoVqSkTW6XFWQ3dMCoyACkIcCkmwuuGW7qTr31SWRfgrSobWRDtkmkcshVcQCoGgb/cJCo4WQRcNmkHeSoPxf1QvmknW6LcWQnAWO8xzmo7sSoUFSk/ESkIWODsW5ebW7rxWQ/dMSohb1FdILOHs8orW7RcKrNdIIKUamoo',
      'W5r7WPOfaMhdJmodnbH1o8oQoLLlwSoMrwTjgsVcSmoVpSkTohdcO8oqWOVcRSo6W6WGF8opW6K1hW40WP/cS8o7CmoKWQG4W4jpWRtcSSoZW4ZdSZpdGmk2qHu1W4DGWRhcImkVot7cKmk3W5mTWPXVra7cUHNdGJaGwCozmeBdLSo7WRi+WQJcRSo6xwtdUGy5W4qho1xdJanAi8k7hu8LW4VcK8oNW6/dHWhdMKGCeSkrW4pcTCk9iXP4dcr2bmk9ebFdLSkSruSMuSo9Fa3dSWddI8kDAJHWheVdNSoecCkWsSkqWR3cQ3HqWQtdSSkwgZr5WP3cKNiDW4tcS8kondOTwM3cIaddTYhdMK7dKxiDDmo8ANKBrYhdKHCZn8kddftdRqtcO11cbKOFmSo5WQffpmkNg8k3WPddOKJcS8ojjSoHEXLnW4mbA3tcUcOyWOBcG0yrWQrCW6eKqIhcKCoYWQBcMYRcTSocW4VdTSkOW4lcQSoCqvDptmoyWRhdTb1oWOhdSSoLW4NdJSoJyCoKW4VcL8kzg8oRC8oNWOtcOcKyECoVWRJdLSoIq8kQgSkbW6jLd8k2W7xdPCk5W63dUbjxW4ldRmkxW53dMadcUh/cUSkStWFdUuSKuCoSECopW7FcT8ohBCoja8kyWPqOvs7dP0NdRmk1W5/dO25eW7CqtmkRWOhcRYldRSkqxmkVFSk9rHdcVSkYWO5pWRBcU8kbW7JdKreRWRGmvmkwW4VcOSoMW6ZdS2lcL8kxECk/o8oNoqj1W5JdKwebamk9W6z7WQhcM8ohymkaW7bJomk4WPNdVSkzWRJdOIFcKmo+cCoJsJldIbxcG09aWPVdU8oonmoBsCkNWP8LW6fwfbmTW77cJSoWfLGSg0aLW40iWPfuhmkWl8kcjSokW4uaW7VdSxVdQmoPhalcRd/dP8kvWP0+W73cHmkBWPuEWPyrsSooWP/cSSkUq8kXW5JcRgBdPZxcMmodW5iRdCorWQVcMrTIA8oiWQupWOziWOJcQ8kxE1G2a8obW5JdQapcM8oqkhFdGIFcNSoPW4pcUmofW5FdRZxcUmofmmkzW5vJgalcS0ZcTSklW6VcSd19sqBdMMhcLSk1oaRcNmksW6ujz0bBgmokWQ7dOmkon8kyW63dOmoLn24YFgtcQ38it8k3CCoLW6ZcSSoAzmk9WRRcRCopCrddLYldJCoAmSkyWOHfiCkpWP8WjSkwCCkbsmoGWOdcVtqNaa06h11mWQziWRCckeZdVsWcWOa0WPrPWQFdH8oKrCkdW53cMLXYWRVcOmoIW5JcL8oEW54f',
      'arimW6tcK8k7',
      'W5hdTmouWRZdMJddRH/dG8oyWP4ruCkQEa',
      'hHGgW6xcMSk6WQXC',
      'dSk1fcddKNbGWQ0',
      'WRhdLtddSd0tdSkTWOP9W7ldGW',
      'WPG0WOXKjW',
      'F0SjWO7cSmk1WQS',
      'vJLKWPpcLge',
      'WPT6WPhdU8o1cI0',
      'WO09WQ3dJa',
      'uSojtCo+WRm',
      'xJuoW6WcW6dcN0C',
      'D8oKFmo8WR4',
      'W6hcHNBdTaSKoq',
      'ue8AWRvrCG',
      'juvkW4rA',
      'WQlcMKG',
      'b21qWPFcQG',
      'WQpcLheimG',
      'abGgW6BcI8kG',
      'b0iKW4vGnw9fFmkf',
      'CmoPB8o3WOG',
      'WPm3WR/dH1pcPmkrW445la',
      'WOW3WRJdIvpcV8kaW5qL',
      'W7O4umkSWQi',
      'W7ykrSkkWRNdPHKTCKJcUq',
      'ENGiWOhcKthdS1ddUx0T',
      'BZ3dVMxcRmoiWOTR',
      'W50hWOhcIG',
      'W7RcKM3dHSkH',
      'i38TFgCnWOZdQKpdNq',
      'hHiDW6BcL8kMWQXDDq',
      'WOPZvqJdO8k3mq',
      'W6qqA8oAWOdcKcVdKmoNothcR2lcS8oTtWtcM8o8W5JdHrdcRgeTafbuWOqpAbBcGmklW5ldMaNdGmkDW67cVmoaWOJdQb8QW4faESkHWOHFWOJdOmkTWRmMxx7cNvWeWOj2W6ddOSoLW63cS8oYWQNdOGT7gCkgWRP5tI4TW5Ggra4tWQRcKmkCnv4siW/dISk6tKDWW79egSokWRtdQ8knurNcHexcNmoplSk4WRHZWQW9g8ocW4JcISkqfmojbmkDWOVcOCosW6dcSSo/bSoiWOxdLHtdRmkEc2XcWQSkuX9AW7VcR1iZWQxdTNayxCoNw3ZdNZvwe13cI00HW43dLSkZgCkigSoJyW88dKCbv8ocWOFdR0lcTx9OFKT+W7RdQSofW5ddN8oCASk1WRfqBLjOpN5kWO10i0pdRehdRchcSmkjkmkwWOJcNvOQW6dcJ3yHW5mXwMOGnglcGmoVmSkgA8klWP5SW6pdQW4TnCoDWRFcOapcU8oMaLXEWQNcJmkYlq7cVSonufpdMZ3dRmozW6BdM8k7EdxcHbpcN8oaW6rIAmowWR0vxwpdRc7cJsubuNvOsmoxW4qcoSoDgbFdVw0hcCocW61TdCosW7mlEwVcOuJdRmomW6CmWOiZWPlcPwidW40IhmkwzWfZr1P6oCoLWQrjomoxWQlcRsdcJG4VWQTmyCkoWP3dLmofcmoKASk2ASoPasnasrDdnSoRWO4',
      'W6u+dmoQWOu',
      'oSk7kmkHW53dRbFdVmkFkvmgW6BdU8kwW7O',
      'EaJdRxRcJa',
      'W7ZcThJdVmkXw3dcQW',
      'WO7cStaRhG',
      'W5NdRmkiWO1r',
      'lJaWWRHgmchdNq',
      'WQBcH1ONoqGSWQq',
      'W5hdS8oBWQBdNdZdJr/dHCoXWPCwu8kXFW',
      'W5yiWO3cJuyj',
      'imouW57dUvS',
      'umkScqNdR0Xj',
      '6ywA5QsKW5lcMq',
      'v8o9rCoRWRO',
      'W7JdGmkiWOX6W73cNcm',
      '57Ys5QkeWOdcOa4',
      'oZeIWRnEpa',
      'DdFcJmoCW6G7zH4',
      'ifvOW5HeWPe',
      'zd3cLSo7W7mUBW',
      'ngJdKSkzWQXLpq',
      'WReyWQ9fiCoRW6xcTSoHWO16FmkdWPtdVG',
      'j2vFWPJdJt4',
      'W4BdUSoiWQ/dNI3cSa',
      'm3SJW5rg',
      'nguUFwiAWOtdRfNdGf94',
      'uuBdKSkRW6K',
      'WOhdPZhdQcW',
      'WOtdQc5uAmkQ',
      'rKaEWRzmyCocWRa',
      'aKC2W4D0',
      'r1NdMSkLW68p',
      'lCoDW5tdS03dMSk0WOVdT8ozba',
      'W4aokCkvBa',
      'x1uTWOtcUa',
      'rCoHrCo3WPW',
      'W7zKW7Kr',
      'dXWfW6tcJCkP',
      'WP/cGHKxluC',
      'kKLvW4q',
      'W7exbmonWPG',
      'vXCNWPq',
      'W7xdMf3cHmkHW5ldVmoCD8oOWQNcIfFdUmkygsWPbca/W5PmWOmsW5v6WPmjp8kYW5bMgCkWW6yurCo/eCkgwtWAcG5fWQZcI09mWPRcNxaNW7yffvepwvHugJhdMc/dICkVW73dKmkhBx7dNmo8xK4UE8o9W51TWR0KvcJdKJxcOLtcNmk/WP3dTbjZWP0Nqw5Xas7cM8oDpNtdQNbUySomwvniWRbHma',
      'W6xdJSkvWOD8W6C',
      'm8ozW4pdSLddU8kkWOddSSoi',
      'a0yXW41lp35nxmkAW5GRpCo1s8kR',
      'lSoDW4xdTLldOCkHWPZdPq',
      'rIywW78vW6e',
      'WPyZWRJdJu0',
      'j2veWPJdKZ4',
      'DdNcJ8onW6G1',
      'WReqWQfKdCo4W7pcOq',
      'WRaEWQTL',
      'amk7dJhdGxbVWQtdJK3dKCo2WO0K',
      'W6JcRqpdR8oQ',
      'W5X5hdZdPslcMSoQ',
      'pxdcVSozFq',
      'W7S8gCoJWPlcSetcLq',
      'W6u1bmo2',
      'W7ZdKvvzeHi',
      'WPL6WPBdS8o1bHPp',
      'FeOAWQNcVCkZ',
      'WQ/dNYjADq',
      'Er/dOCkuW53cNbyd',
      'FJxcHq',
      'W6ddT1zObG',
      'W5v9dW3dUbNcMSoI',
      'vfhdN8kLW4SlqSoL',
      'W7ldKv9ihWGXfJdcICoGW5fUDa',
      'AdiiW4RcKxRdTq',
      'ltO3WPbgltZdMSooeNf3',
      'BeOsWQ3cVSkKWQ4q',
      'iSkWW4m',
      'xKBdN8kGW58pr8o/W456WO8',
      'WQtcLfCKoq',
      'WPhcJaeboG',
      'hKBcI8o0zmkxW6LwWP0LimkIfq',
      'W7zoW6FcVSkCea',
      'yt3dP2xcRmoa',
      'WOi9WQldNf7cUmklW4iKcSotn8keueO',
      'W5ddKbfzdbmWawlcTSoOW4vQECoYW7bz',
      'W7BcVtZdR8oh',
      'WOi9WRZdKq',
      'umosv8o4WQpdNG',
      'WRFcMfiL',
      'crabW7lcJmkHWR9l',
      'W7ShqSkaWQ3dLGGNyLxcVuPSlsmkW6JcOfmS',
      'BbldQmkW',
      'W7G4cmoIWPpcJfxcNCoadCo5',
      'WOpcQ8kiW7RcJwJcT0ZdSmoZWRemESk2',
      'mSo7W5RdGLC',
      'WOnrp8kFW5ldMwRcNa',
      'W6/cTgxdOCk3xxpcTG',
      'Fv/dQdLT',
      'W7lcOWhcRSozW64wW5S6wJDtFmkLW58',
      'W7HKW60nWP7dHq',
      'W6pdL35Bha',
      'ghjUW7Xr',
      'qcldNW',
      'WQ42W5jpCa',
      'W7i8auNcT8oYsmkKW7FdOmkEvNj+mCkGWOvmW7ZcJtpdKL40w2eUW5BcHMvxWPLok8o/aYFcHCkZWOevASoSBSkWWPFcLCkIW65PW6KJW6BdKSkiAmoVCSkfBSoDW4RdUCkiWQRcSSomW7r2WQjLW5fPkwG2CKCxW6FdPL4sWP1kWOWcAJ4bE8odAmkyW7vZW4/dMSoLWRbrW4n1W5XLWRf9C8oKW4DvW614W60qlJ1gW40eW63cI33cK2/dUGBdI8oDgxaIeCowBINcP0JdOmoKymkSf14xW6LyW6HxBgnFoSkgWP9bpCoXW6LrW7xcJ2DIlsemW4hcK08JewBcJmoioNCBpmkldCo4W5dcUHSTBSomphr9WRb5WRaKjmobW6BdPmkHWQxcICoNW7VdRdafdCo5fLnSW6PvW5dcRLTrlhlcGxhcUCk+xmoyW68slCofaxeWW5zVgtv3hCovWRCWWR4sWPhdT8kzW6CQACoCW4pcVIKfW4S6WQvZWPNcVMGQW4OHW4/cNJ3cUCkMWRpcRYSntW0/urbmsHuJACo0W4VcG8oLvCouW5NdSuakW5enhmkpWPBdHCkqWPaMrCoZW7ZdNCoGj3e+EZa2W5JdK8kQsuxdSCkBz3TZtYDmWQJdL3hdSmosW4zNtxFcJepdTSoCWRC3WR7dT8oiCbtdL8k/W4tdMXykW4JdUmoScJT4lJPjuxddOCkEW5OrpSkVWRuKWPO8W4evWPqItf4JfYL9W6JdNstdOmo7WQRcISoHvmkviI/dOvhdUwXEq8oZW6SRW4rUx2OLoHb6WOpdJ8oCgSkmBKldPvJcV8oqwCkPqIhcPcXTsSkFW5dcM8kbruJdUMm4tJySySovWQNcU0/dGCkiomk4AvHFhb1qoNZcPJ4EzmkbamooW5FdUx8HWPhcSb/cNmogW4mcqe7dQ8kGpYOTy0JdHcbyWQvHW6zdWQFdLCotF8oUqConfmoYvrddKrX6WO4qCgyvmIjuqb7cL19MW4BdHSk2W6D1zZPIuCo6W5RdOCkPWP5CAHLFWPWNW6ldQmonnCkia8oHmgtdNCoEW6tcNCodB8kjbJ9BpG',
      'W5Tzc8kyW5y',
      'W7ZdL194fXiReIZcVCoS',
      'uITDWPpcLwdcR1a',
      'kbyGW6lcTa',
      'W415h8k4W5XzW6/dHKJcVG',
      'WROYW4LvttlcIq',
      'lgHjWPVdRslcOeJcQhm',
      'WO/cGbuEoG',
      'W4ddTmopWQ/dKZFdPqNdGG',
      'vtapW47dOxHmAmkjtSkN',
      'oM7cRCoYxq',
      'WR4PWPZcNmorW6/cPG',
      'W7/dKunrhW0',
      'AMBdNsvE',
      'W492kmkYW4naW6ldJW',
      'WPJcHHmMmhqOWPS',
      'ssGFW6m',
      'W7xdM0DvhqqwfW',
      'cv0DW4zFmG',
      'reJdKSkXW74',
      'cbifW4tcK8kTWQrlAmkh',
      'W59IcZRdTq',
      'W4hdUmoFWQBdNG',
      'WQ4EWR5Gpmo8W5K',
      'hxbQWPddQG',
      'qeSBWRvazW',
      'uI/dLSkfW6m',
      'x0BdMSkHW7Cz',
      'ouLwW5rdWPdcTNu',
      'iCk6W4qthW3dULq',
      'W7bMW6aBWOhdN8kJvW',
      'nZiKW75Kpc3dH8odftq8W6vArG',
      'WRdcMvBcHmkJW4q',
      'omk4W5aVgqG',
      'xcvhWOlcHMdcOfKoWQ9OWPBdO8kbxW',
      'W7JdJSkyWOXKW6C',
      'tre1WPKRW6NdTa',
      'W4hdR8oiWQ3dMJtdRbpdN8o1WOG',
      'WP3cHXa',
      't8owwG',
      'WODdgmksW4NdUMlcHCkalthcOq',
      'bYuqWOj5',
      'dMrKWRpcGG',
      'hXubW7e',
      'W4aok8koBcX3W4m',
      'b8kXfIZdG3XcWQ7dIxtdJa',
      'W4afWO3cG08',
      'CIxdUg3cLW',
      'WReEWQ5KjmoQ',
      'DJZcHG',
      'W4tdUSowWR3dNG',
      'W69QW51SCHJcH8kb',
      'WOBdRsC',
      'W7O8fmoJWPlcQG',
      'W5f0pCk7W5q',
      'uYTqWPpcLxO',
      'W7BcRXldPmo9W6iuW4m',
      'WQ0VW4HaqYZcGmkkEL0M',
      'W556aJZdTd8',
      'WPBdPGFdSa4',
      'WOH4WOFdS8oKaqfnWPjDWR8irG',
      'a0e+W5Dnm2beA8k/W5qXkCo0sq',
      'W4hdVSoo',
      'WPv9vqZdPCk7cCoO',
      'i3u2ugGnWQJdQW',
      'kmk6omkIW5NdPHtdM8kJkeuaW6RdTSksW6qGW5m1umogWQm',
      'WRm+W5rpsWFcJCkxCuO',
      'DJZcHSo4W7SNEq',
      'xKBdN8kGW74o',
      'wWZdO1JcMa',
      'W73dN0Hzdbi',
      'hKPPWPBdMa',
      'bwzyWR3cRNDPFSkCDSkcWONcVZBcMbe',
      'omkWiSkqW4RdObFdRCkHceuBW6tdVCkh',
      'W5u6u8kpWPO',
      'WOP9WO3dLmow',
      'WRaPWOFcM8ogW7xcUSkm',
      'WOhcGGHF',
      'x0JdISkHW6Kdumo6',
      'DuucWQ7cO8kL',
      'wcicW7urW7C',
      'WObMWQJdV8oYbW',
      'omk3lCkkW4ZdRc7dQCkNjviXW6ZdUCkCW7O',
      'WOZcJbvd',
      'WQ1udCk2W4i',
      'ptaTWQvtmcddLSoE',
      'W7u8amoJWPlcUa',
      'WP8kWQFcQSo4',
      'W63cQw7dTa',
      'v07dRbTUWQXcrHBdUvFdSZ7dKW',
      'xCkcWQyAemos',
      'W7TQW6qn',
      'dw9BW5FcR3nZB8kICCkEWO/cTZNcKraUuCoRuq',
      'W7/dN1Xz',
      'WQPyWOtdRCog',
      'rsfEWPhcHq',
      'uYnhWPpcLa',
      'xJLzWPpcHh0',
      'WRiIWO0',
      'fd49W67cMa',
      'm016WRNcNG',
      'WRFcM1OZmb8',
      'E0GuWQtcVmkvWQWoW5pdIuGsW7C',
      'D0ydWQpcIa',
      'Cv3dRCkcW5u',
      'a0idW4PO',
      'W5ahWOhcILGn',
      'W4ddKeTxeq',
      'WRaPWOxcGmog',
      'DrRdSCkWW53cHXGy',
      'W7S4hW',
      'WQ/cIf3cImkLW5ldRG',
      'n3yJW7PG',
      'W5acimkuEW',
      'jSkFW5irkq',
      'W7nCW5pcVSkDcW',
      'WO91rr3dV8oOxSo0WQ/dU8oweZS5ECo0WP9AWQZdLsJcKb93ecz8WPNdKYStWPqhmmo/fJVdLSkOWPrznmkUzmoVW5ddJmkEW7S9WO0YW6JcGSogl8oOE8kElmkCWONcSSopW7JdVCkzWROYWQ82WPGZBhiNyLCsW6FdT04cW40F',
      'W6hcTg/dSmkPqq',
      'eMa4W5ze',
      'WRlcL13cJmkWW5VdTmoskq',
      'W6hdJSksWOXfW7xcJt/dTmoEWRBcV8kqWR/cVguNWQ3cMa',
      'W4xcMK7dLSkN',
      'fSknfCkPW7O',
      'nhmJq1G',
      'W4ldRSojWQa',
      'WRPEWOBdNSou',
      'WOOyW5roCa',
      'W40eimkEBrzRW5tcH8oFlW',
      'rmkFWQmjgCotWQBcKq',
      'kgTnWOq',
      'pCk0W5uFbXC',
      'uCosvSozWRJdNIVdUwFdI0O',
      'W4ynimkxEY1V',
      'W6ldNvrsgW',
      'W40eimkEBrbSW5hcLG',
      'WQ0RW5zmvG',
      'W57dUSodWQ3dIsO',
      'amoSW4FdTeG',
      'hWGgW4xcLSk6WQXnCSkAr8oQ',
      'W6m1W4xcUSkHt1ubW74uW7HaeSoPW7biW5hdMSkpdedcI8oSW5OskIe8CSkqEmkZW6vLWOvhucFcHNNcL8oQmfq2r8oDWQjnxSomr8k6hsxcG1lcHSoXW53dRmkaWRtcKSkvWP/cMsKNW5uFvIuNWO3dJSk/wSoXfs1/sCkTrSkfWRy1W5RdV19cWQW6xWGQW61mnLuUW5XbW63dVvRdJSokuhCcW4ZdJmk0Dmo8WQJcJvVdPCouWOuvtWddGmoPu2ivWQ3cGh1+jCkwWRPbWQXbqvyZaHPUgd9Gd8kkWOiig8k+p308fCoUW7JdQmohWOddMr7cImkqmcjPW4ruuSkGrJ44W7BdVYfCvSkFpaPMFCkzWQP1WP5Mx3aKgfG+u2Gpk8k8W5FcQ8oUC0ldHXvWBuxcUhbxfKq5sSo8raWjW7NdUIhcLghdG8ogbvNdPhtcIIpdOhz4iItcHYq9W6SfWQqeDWlcUXeftSogW7NdGSkmWONdNsutySkIz8o/DdxdNI3dH8kWW7uDW51oW7TtWQ1VfwbOWQpdQ8ozWOlcPqBdRSkcWPhdICkPbaC6W7iQWOxcKfRdPvOXEHi1lSoPq8kzhgxdKSobW40jAmkgmCoXWOtdLKqaWPtdMmo5jM1SWQNdR8kvsNFcH8onW57cOmo4ECoFWPbEkGVdKfNcGJGCW5XHW73cQxhcVvBdSSkOWRm3W4NcRN3cGSovWOVcQryOW77dJmk1W4yMWOldLrFdHuGmiSolzh7dMsBcRXPHfXuQbvvlrSoJbcSOWPWzWQ7dR8kKb0LeiwGNFSkVW7tcNSkEWPxdQ31Xh8o6W6pdSSoGW47cH8kACSkQorCpW6DSWRKacCozWQxdVJvxW7mVwZD3W67dPSoTW5pdQHJdHWddPNzUwI8cWPe6a8kiW5FdKYpcKu/dGCkohmk6DqzkW6WNWPBcOGVcSmkSW6pdTviKbCoMW4DakXGEkuiWW5ZdKmoqW7X9WOHcFgH3WO/cULddSmo6W5xcV2GCcCojlG',
      'WOhcGHzsEgbrkmoQFehcT19JW7G',
      'dSkXfctdJhDKWRldJW',
      'uvjLW58FjJ5DlCklWOm',
      'WO7dUHbzC8kbW4VdOXxdICosW7u',
      'yttdQ27cUCoeWOTPW6ZcGrtcRmkZfCkKosu',
      'WO0/WOFdNhC',
      'ruddMSkWW7nqaSkKW51NW4DaW6BcVMXwW6XfW6RdJSkNoGpcP2NdIZ5dW5qItmk1vwyrWQHIzSoQ',
      'W6ldGmkiWOX6',
      't8oBr8oT',
      'amk8asVdH3XRWRVdHgldVCo/WPa/W4CAeru',
      'v0pdSs8',
      'WRpcKv8',
      'W7uar8klWQBdGa',
      'W4zYo8kdW557W6ldHW',
      'dwXsWP3cQLPtr8kC',
      'n8kWlCkaW6/dQaRdOmk2jgWBW63dSmka',
      'WRXdWQhdN8oV',
      'WOa2WQJdUfdcUmklW5m',
      'W74auCkRWQVdKae',
      'jMfjWPZdJspcPf/cVG',
      'WPFdPIPFBSk4',
      '57Yw5QcSCaK9',
      'WPyxWP/cQmow',
      'FHiQWRGb',
      'WPSuW5XCsa',
      'ge4hW4KpW4BcOq',
      'W7X4W5OaWPVdVmk8r8kfW6rFWR4',
      'tdJdHhpcTW',
      'xuSsWRrqrSoFWQFdMSkMW7a',
      'fMDsWPZcVwbIEa',
      'WOGkW7beva',
      'WPFcULKlka',
      'jCkNW5ymdHBdPL8',
      'sYml',
      'cM8wW5j8',
      'WQ8bWQzOpa',
      'WR/cKe8Wmbq6WRlcJa',
      'WQBdMtFdGsyugCkdWPPNW7pdLG',
      'imoxW4hdRG',
      'W6BdICkvWPK',
      'WOFcGbfvAMbjka',
      'ssTfWOpcGG',
      'W7zaW7/cV8kIaIPkdgBdNfuxWONdUq',
      'EXtdQCk6W50',
      'WQhcLLO9oq',
      'us9mWPlcLfZcVLGDWPnO',
      'BrxdRmkZW4dcNbqh',
      'W7Klr8k+WQxdMGC9',
      'tcLiWPRcGG',
      'WRxcLuJdJSkhW5ldVSoCi8kqWRRcN1NcQmowxG',
      'WOldPYjtDSkU',
      'sd/dMhxcLq',
      'W6JcIqddHmoU',
      'WPm9WRJdIuVcTmk9',
      'WR/cLe80lHm+WQ0',
      'WQbDrIZdHG',
      'xSkmWQ8A',
      'WOP5tW3dSSkGkSoOWRJcR8ot',
      'W4nZomkhW5bAW7a',
      'WQ/dLGxdVrm',
      'gvFcI8o2DCkaW6HW',
      'EXFdRmkWW4hcMIe',
      'W63cRWRdTmoQ',
      'W5hdTmokWRe',
      'su7dRd5NWQfiuqa',
      'qeSdWPfxz8oDWQRdMCkNW6fG',
      'W6hcUN/dSmk3w37cQq',
      'W5j0bZFdSG',
      'f8kMatpdHwTYWQq',
      'qeZdKmkGW74yvmoK',
      'ytpdUNK',
      'W7jUW70PWOJdN8k4r8k2W61qWRxdVCoenCk+aW',
      'W7LoW7pcVSkCaG',
      'WOG8WRJdJu3cOSkaW4qIdCounmkgw0Pj',
      'wL06WRvqEW',
      'vJqkW4ZdRYu1y8k5FmkxWRNcVW',
      'va/cL8oXW78',
      'bfBcP8oLy8kA',
      'h0RcNSoHzmkxW4i',
      'WRhcNvVcGmk9W5NdUmoBpW',
      'aeRcJSoLFmkb',
      'W4hdVSooWONdJY3dSHpdK8oLWO8D',
      'sbXVWQ7cKG',
      'W5ajWPZcLG',
      'WQ40W4LmvIJcG8kn',
      'WOhcGHzsA2ztpG',
      'WPhcJbaxm1u',
      'sb0YWRqSW7pdUcFdTa',
      'W6NcTMldPSk2w2NcOa',
      'WOP0WOJdV8oZdG',
      'W5bQW7ObWPZdKq',
      'W7BcOqldPmoJW7G',
      'bXVdMMDnW7DR',
      'W7hdGCoQWO/dLa',
      'oW0hW7pcHq',
      'WQKZW5ngsG',
      'WRRcTci',
      'DIj5WO/cLW',
      'BuS9WQlcQCkZWQC',
      'W4VdK8oqWPldGG',
      'WO/cJaXdA2bEiq',
      'W5tcGLe',
      'W70drSkdWQ/dNr0',
      'WOJcI3/cICkG',
      'DuSAWQ8',
      'EtpdICkmW5u',
      'W5r2ctVdUY4',
      'W4i8WQ/cRu8',
      'pvreW4TsWOVcQN4',
      'WOufWO/cJSoD',
      'WQaJWP3cRSoaW67cPmkwu8owW5NdTq',
      'WOXXWOVdLmom',
      'ss7dQSkGW54',
      'W7nyW7RcRmkD',
      'W6FdHmkrWOz+W7e',
      'W44amCkFBcP6W5W',
      'WPX1uHNdUmkHdCodWQxcR8olbG',
      'WRa+W59burtcNmkhDuWW',
      'arWdW6tcQmkTWRPA',
      'jeLbW5HBWOO',
      'jSovW5JdPe3dPSkYWOO',
      'waa2WQqX',
      'imoxW5ZdP0VdU8kHWRNdS8oFfCo9WOJdO8kzW4C2BgvG',
      'k3WZthW',
      'uuBdKmkWW6KfxCoL',
      'WRBcPaiAjq',
      'j8knW6uXeW',
      'WOm+WQ3dI1q',
      'WR8NWPdcISogW6K',
      'zd3cLG',
      'WQlcMLi/ka',
      'WRhdLtddTrSMp8klWQrNW6FdGKhdVa',
      'WQRcMupcLmk0',
      'WPi7WRBdJq',
      'W7ZcRNJdVq',
      'W4hdRSouWPJdLcRdQq7dMmo/WPu',
      'W6ldNvjglq',
      'WRxcKeiRma',
      'xX0WWPKQW6ddGs3dQxxcL8o1mJe1W4e',
      'WO7cGHLcxwHmjCo9ugJcT1zUW78',
      'WRrTvI3dNW',
      'W5vXgYNdUdJcNSobAfWcW5W',
      'mmkzoJddIG',
      'WRORWO7dGmoeW7/cV8ktxSowWPZcVMr1jG',
      'W7eHWRtcT0q',
      'h0dcMCo0F8kaW75yWPuJjSk8gshdRq',
      'bq47W6NcLSkcWQbBqCksrSoJ',
      'omk4W5bvaGFdULtdMmk9W6iLW5m',
      'WOBcMxO+mG',
      'xu8AWRu',
      'lMPCWP/dJsG',
      'jxWVvMyRWO7dOL3dHKnZWQq',
      'W7BcOqldPmoJWQqgW4C8qMKiA8kQW5z5W7npWOynuq',
      'W4KSsmkmWP8',
      'cfpcJ8oUza',
      'gutcMmoNDCkg',
      'v0a+WQBcOG',
      'jh8Wqa',
      'W7pdImksWOHKW5FcKIldRCoFWQlcN8kA',
      'aeZcJ8odF8kxW71ZWP00kSkRhJq',
      'W4XYoCkZW4j8W7pdH13cRWG',
      'cua+W4zEeLPSvq',
      'W5ZdMmo4WQhdKa',
      'W7BdICkDWODVW7hcRqpdKSoaWRdcMCkbWRVcQG',
      'v17dTG9KWRXevHRdPgK',
      'WQVcMvVcHmkJ',
      'W77cOGpdT8oUW78CW4a7',
      'W7uYaCoPWPi',
      'cgnEWP3cTge',
      'W6hcUNpdHCkQxN7cTYxcR8oDW6RdGa',
      'W5WaWORcNe8yW69+WPuroa',
      'WP10WPFdVCoKgW',
      'veRdTJPN',
      'W7LaW7dcR8kCdcHQ',
      'WQ8sWQ9Vlq',
      'W7Oyj8k3sa',
      'WRldItBdNaa',
      'ptaZWQG',
      'W7ZdM0vDeG86ade',
      'W6SnWP3cOuK',
      'W7ldKv9ida4Zaa',
      'pgvjWPJdKW',
      'W6DKW70jWOBdK8kp',
      'W4jWasK',
      'WONcKXatk0m',
      'W5ajlmkk',
      'ydNcLSonW6G',
      'W4aok8koFYP1W5xcLmo8i8k5mmk2',
      'WPdcNJ1/BG',
      'WQBdMtBdLcOtfCkRWOzPW6RdQK3dQCkEi8k+',
      'WOiZWQhdJu3cSa',
      'ptaTWQvanIldGa',
      'W6ncW687WPy',
      'mvitqe8',
      'W41sW5m',
      'aSk8W5KpgaVdVf7cImo/',
      'o0LrW5XdWPdcTNu',
      'W65DW7/cRCkletD8',
      'W4X/W6aKWPK',
      'kSolW7ZdSK3dPW',
      'W7LhW7FcT8kkesf3',
      'l21oWO3dJJ7cPa',
      'ogfj',
      'ogDEWOFdSG',
      'ltCSWQz2pdJdMSopaKr8W7XzqmouWRq',
      'kNOdW7nG',
      'WQhdNYRdHsGoeSkHWPPFW6/dGLddPG',
      'DdtcJCogW78',
      'FrxdPmk3W4pcIW',
      'W6HaW6RcUSkAbHW',
      'tuxdTJP5WOD5BZ8',
      'pwHTW59r',
      'WOJcKrueoLq6WPO',
      'ke9iWPZcGq',
      'xCkmWRyAdSoiWRtcMa',
      'mmorW5xdSG',
      'WR/cL1/cMa',
      '57Yk5QoJFSouWPK',
      'WOX7WOtdUmoTcG',
      'W7jsetFdGG',
      'W5b4kmk2W4vmW5S',
      'WO7cJaevn0GSWOZdQq',
      'Aa7dTSk9',
      'p21qWPG',
      'W4fLoCk2W4vmW4BdJ1NcTGJdRXe',
      'pdyTWRu',
      'WPuLWQNdJvhcKmklW447i8ocoW',
      'juDhW5HBWOO',
      'WOtcLrLhswHmpG',
      'bwzy',
      'WPhdQc9eFW',
      'FSo5DSorWP8',
      'ztFcL8opW7i6BX7cPa',
      'bum5W5bFm3He',
      'e8kHeY0',
      'WOC9WR7dRv7cSSkn',
      'EKSvWR/cO8k5WQ8q',
      'WO1FjCkoW5ldN2FcGW',
      'r1CHWRPV',
      'W7ixpSodWRC',
      'W6NcOrpdPSoNW6uqW5WM',
      'W7FdKKHOesKWhIC',
      'y2G5WP5R',
      'nSkWW5GxdHddP0m',
      'W5fgW6OHWOe',
      'W4D6nCkKW4jaW7xdHG',
      'ogDCWONdLsJcS2/cPhn9ibK',
      '57+a5QkcaaTo',
      'WQ7dKt3dLdSu',
      'WPT6WPhdU8o1bHPp',
      'WRhcNvO/oX8VWQ3cJruWWQ4kWQanW74X',
      'W4n3hdJdOYlcLmoO',
      'mmoBW5ddU1VcP8o1W4pcP8ke',
      'W7tdM8kvWOr9W6dcLq',
      'ytpdPM/cRa',
      'amk8asVdH3XRWRVdHgldM8o9WPuJW4y',
      'WRVcHNy0lXi',
      'W6pdGmkqWPXT',
      'js8kW7hcPq',
      'n8okW5ddOvVdVCk3WOO',
      'nCkWW4etcahdLLxcNmo9W6y',
      'W595btW',
      'WOSFWRm',
      'iSokW5tdTG',
      'FLKAWPjZ',
    ].concat(
      (function () {
        return [
          'wCoDt8o/WR3dIa',
          'agTkWPhcVhDuACkXC8kqWO8',
          'nSkWkmkbW4FdUG',
          'W45YmSkWW4vb',
          'wrqPWP8KW4BdVINdOx/cImociq',
          'BstdTW',
          'WRddKsRdLsyk',
          'q8kzWRStgq',
          'l8kBmHtdSq',
          'mZ43WRramc/dNW',
          'aHWfW6q',
          'jMTzWPJdJt4',
          'W7VdOSkUWOTL',
          'W6OotCkkWQxdNG',
          'WQePWPZcImoCW7tcS8kmqG',
          'AbtdTSk8W5VcHXyA',
          'W69FW7RcUSkAbG',
          'WO0ZWRxdJu3cOG',
          'ee8+W4za',
          'pHW8W4ZcMq',
          'emk3bsVdHq',
          'tSowqmo5WRtdNZRdQG',
          'W6C8WQxcT1i',
          'W7xcRWVdPa',
          'WR/cL0hcLCkJW5JdSCoB',
          'h8k0bmkhW6a',
          'kd4VWQrx',
          'D0eEWQ/cOSkdWRmhW4ldKL4',
          'W7C5cq',
          'x2PzWPhcV3PZma',
          'W7qaqSkkWOFdLGCJENdcVuS',
          'WOVcQbGlkq',
          'W508tqBdTSk2dCoG',
          'xI5n',
          'W6tdHWTKAe5QWRlcIbivWR8m',
          'WQlcMKG4kbmWWQ8',
          'hXGCW5lcNmkPWQvpDa',
          'W6ldG8kZWP9A',
          'WOHCmSkUW4/dTg7cHSkUlZO',
          'iCk6W4q',
          'WPKJWOTkmq',
          'gffoWORdIW',
          'WPe+W6HetG',
          'h3idC2C',
          'j2TCWPNdRcJcR0BcPa',
          'W4i4E8kIWRa',
          'lCk+imkrW44',
          'WRiIWO3cQSocW7/cUmklFCokW57dPgTRjga',
          'h0KA',
          'WRi0W5TbBIdcGSkWFfK7xmkRDb4',
          'W71FW5VcRSkV',
          'WRa6W5Da',
          'WR4NWP3cISogW7pcT8kt',
          'WPFdQdfuDmk/',
          'WRFcULmKnW',
          'WRyOWOJcJCoyW78',
          'W7BdSSoZWOVdQW',
          'W4adWPJcRL4yW4P+WPmqjmk6',
          'WRLswa/dUa',
          'tXjDWR3cIG',
          'v1VdTdz/',
          'AX7dSq',
          'WPdcGHyxm1u',
          'sZ0gW7CsW6BcHa',
          '57+j5QgteSozW7RdRfG',
          'WRBdNWldMdecga',
          'WOVcGb8jF2vqoSk2reRcUq',
          'W6HJmCkGW5i',
          'W5zLpCkHW5rBW7ddHG',
          'W5momG',
          'WO/cQsf1Aa',
          'W7ZdKvvzeK47fIZcUCo9W5q0E8oWW7C',
          'W6LIfmkbW7q',
          'bJSrW4RcRa',
          'W6DKW70jWOBdK8kn',
          'W54hWPJcILGfW5L7',
          'sXC1WPK9W6ZdVIRcOq',
          'W4aakmkFBci',
          'WQDLiCk2W6O',
          'WOhdPJf0E8kOW4O',
          'WQGyWPnRha',
          'ium2W4P2',
          'WQW5W7DYva',
          'n8k5W44UbcddSeZcGmoWW7C',
          'WPiIWQddGuS',
          'tc9D',
          'W7/cVN/dHSkSshO',
          'zcJdRKVcNq',
          'B0uxWR7cTa',
          'W7tdKCoQWQpdTa',
          '576t5QkmDCkgEq',
          'WO7cGHLc',
          'W4DHoCk5W4u',
          'WPTal8kBW5tdLvVcGSkOjJRcPxdcTCoWtgNcJmoTW4NcN0G',
          'DIJcKSonW7qWsqxcVSoasW',
          'W41GeHxcP8kUwSo4W6pcVmkp',
          'W7LhW7/cTCkjbI5JhgRdL2yxWOVdSmonW6mY',
          'W5j3gca',
          'wcGBW7StW7VcG0W',
          'W6FdN11jgW',
          'W4ajjmkuEszXW4RcNSotj8k4mmk/k8kCkmkRbW',
          'avvRW75e',
          'pu9iW5G',
          'W6SkvW',
          'WO1FjCkoW4hdMwxcLCk1bdRcR2pcTmoR',
          'd8kgecldIq',
          'WPNcJH0g',
          'zdhcMmon',
          'jhGHv2WnWOddONS',
          'vLRdLXro',
          'W6Skv8kOWRJdNaqAy1tcUvDaiYSvW5JcPKO7FxS',
          'f3zfWPtcVq',
          'W67cGrtdTmoy',
          'W53dS0vyjW',
          'sXC1WPK9W6ZdVIO',
          'gbiy',
          'pCk0W5uFbY3dUf3cMG',
          'WOZcJaCBk08MWPe',
          'W7DaW7RcVSkctcXSc2VdH3XyWOddSSok',
          'WPfRBmkRWOnvWRFdNW0',
          'WRxdJZfwxG',
          'kSowW4xdSLddVmkTWPVdRW',
          'rYiBW7SlW7ZcIvfS',
          'kJOWWQu',
          'iNeZugup',
          'W7tdHCky',
          'BHRdQCkGW4O',
          'WQ46W4Hatdu',
          'W7DlW7xcKSke',
          'wmowsCojWR7dVZ7dVa',
          'eKeKW4jym2fp',
          'WOPZva7dV8k8dCo3WQq',
          'su7dTJvIWOLmvHBdUq',
          'W63cUxJdUSkPr2VcOa',
          'W77cOaFdO8oJW64',
          'WOCNWQ3cQCo4',
          'Br8gW4Sw',
          'EZ3cJmopW648',
          'zddcI8oy',
          'tqdcR8orW54',
          'u8kcWQWldSooWRNcHW',
          'emkXfa',
          'W5zOW6qLWQu',
          'W6S/WRy',
          'W4j9ha',
          'WRRcOJn0Fa',
          'jgD3W5LD',
          'nwqfyvi',
          'W48apmkFBda',
          'W7FdL19y',
          'xcTeWPpcLwG',
          'de8PW4zEkq',
          'W7nIW5WeWP0',
          'e0y5W5m',
          'WRi6W5HatJi',
          'W7OYdmoI',
          'WQqvWRJdHxy',
          'W4frW4aWWOO',
          'dSk7bcddJgO',
          'wIGCW7mtW7VcG0W',
          'W5Can8kDEZC',
          'sCoDr8o7WR7dNZldQW',
          'WRddNZddKd0oe8kQ',
          '576p5QgNW6uu',
          'WO7cJafdA3O',
          'WRyRWOdcNmohW7pcOmkA',
          'n38Zuh8bWO7dOq',
          'W5zritxdPW',
          'uCoCw8oUWRq',
          'zZtcL8ogW7mYzr/cUSoF',
          'W6ddUezQba',
          'f08KW4zE',
          'd8k1aIddJgO',
          'W5W0jCobWRG',
          'aLxcJCk4WQ8wamoQWP8',
          'W7qaqSkkWOBdKGCAE13cSMjilI0',
          'amkEosddTq',
          'dd0UWPzF',
          'rIGoW74cW7y',
          'WQ7cTXLXDa',
          'qLZdJCkS',
          'WQaBWQ7dQL4',
          'uYviWPi',
          'fg1pWPhcRhTOza',
          'WRddGGXJFa',
          'W7/cS2tdOSkeqhRcPa',
          'WQZdKsNdLa',
          'drKmW4FcK8kNWR5IB8kDtq',
          'W7BdJSkmWPa',
          'W7LQW6SnWP7dV8k4vCkX',
          'WPmZWRxdI17cOSkrW4iK',
          'bSoAW4ldLx0',
          'mmoDW4u',
          'WO00WOxdQvu',
          'WR3cNeS',
          'W4f4mmk4W4m',
          'wbC2WOK',
          'a0qQtMW',
          'oxdcImoUza',
          'iulcJ8o1Da',
          'de8YW4zacgTpFCksW4m9pa',
          'WRi0W5Tb',
          'emkgdY/dPa',
          'WOtdPI1fE8kIW4ZdSYddOmozW7TGWODs',
          'WQ7dOrniAG',
          'v3RdUCk9W4W',
          'ssycW78vW7m',
          'oJy1',
          'W6iVdmoOWPpcV0RcI8om',
          'W7DkW7dcSCkhjsvTaxu',
          'CexdSSkkW5u',
          'vuefWPvcCmoh',
          'nhu0',
          'W485emk/uG',
          'W7S4gCoNWOZcT0dcISos',
          'm23dRuNcJSo4WOfL',
          'vHKYWPu7W6ZdScG',
          'W515etZdPtG',
          'W58hWPxcILGF',
          'W7q1WPNcVMm',
          'WQ04W59lrW',
          'tYnkWP3cO2ZcUfuFWOi',
          'xCkmWQKAl8ooWQdcGeW',
          'W4qnmCkCuIX6W5tcG8oz',
          'WQ/dMdZdKWy',
          'WRKjWRPUo8oSW7lcSa',
          'DdFcJmoCW7S9zaJcPq',
          'WRBdHYhdLcCMeSkTWOvPW7ldGW',
          'W77cTh/dTmkXw3dcQW',
          'v0tdL8kW',
          'W7uov8klWRJdMGGL',
          'WR/cKfu7ntW+WRxcMGG',
          'DHRdQmkW',
          'WPz5ra3dPmkhgmoGWRBcTmoB',
          'Adr/W4xdP3xcHW',
          'mmkXW5mQcHFdPG',
          'WQ/cM0RcJ8k0',
          'amk1dsddKNG',
          'W7JcOrBdUa',
          'WOjFkSkE',
          'W5nIoCkLW4H6W6BdJ1NcUbNdRHC',
          'owPYW7vc',
          'WQ3cMWWyfW',
          'WOPZvqJdO8k7b8oQ',
          'W74gtCkpWQBdSayKy1pcR0bB',
          'W5X3hsRdSG',
          'WOz3WO/dV8oIgW',
          'nSkwpmkVW6q',
          'WR4PWO3cISoyW6K',
          'W53dUCkkWQTS',
          'W6WDqSkyWQ/dGrOS',
          'W7zaW7K',
          'W6xcUgtdUW',
          'WPeKzCoHW5vLW6ldPLBcTq',
          'W6ldJKnvcGqS',
          'WPCZWQddNvO',
          'jguZtwqfWQldOehdHKi',
          'WOyYWQFcLCoy',
          'WRO0W5DGtItcGCkgEKW',
          'W6/cUMBdSmk3uW',
          'd8k1aIddJfbVWRxdMwJdJSoZWPu',
          'WPPBhSkDW64',
          'W5eenSkvCJzVW5NcICof',
          'W6nLdSksW4u',
          'W4ChWP7cIe8y',
          'yYRcG8oEW78MEqG',
          'cg1DWPW',
          'WOFcGXLeDwW',
          'WOT5vsJdO8kMgSoTWRxcTCokeW',
          'd0G2W5bjlKzeCmkqW5KS',
          'WOS6WO7dSM4',
          'cCkhW5euaG',
          'i8kIW6ylhG',
          'W6VcKKldUCk1',
          'gCoHW5FdOeG',
          'WOtdPI1fE8kIW4ZdSYddV8ovW7zZWOC',
          'W79cW7FcQmkDcJj8',
          'm8oxW4ldVKRdPSkRWOe',
          'WRaUWOdcG8oqW6JcS8kr',
          'k8kWp8knW5/dObBdPG',
          'lda2WRzAnYVdGmoF',
          'W4D5bcZdSG',
          'W6v+W7Oa',
          'j2TCWPNdPsZcSKtcQgvsjrj1WQm',
          'j0DiW5G',
          'qrqFWPGJ',
          'wIGgW7qt',
          'W7tdKLrrgW8R',
          'W71dW6RcVCkIdcv9axu',
          'WQ/dLtddKcujgCk3WPS',
          'W4CPc8knFq',
          'qeRdLa9b',
          'W5eomCkBAIzd',
          'hX4nW6/cMG',
          'smosxmo6WRtdMq',
          'WP1YqaVdU8k3',
          'wmowwmo0WRldIcZdLMJdHuRdJW',
          'vJBcUSoPW4a',
          'WOuWWRdcHCo9',
          'l8ozW5pdSLldHSkQWPVdS8oFf8o5WPW',
          'W6JcQXldImoHW68qW5C',
          'uKRdTcPU',
          'WRRcRwSKcW',
          'WPXrjCkEW4/dNq',
          'W74xqSkpWPRdKHO6',
          'uexdKCkRW7y5rCoKW4HXWPTCW6S',
          'WRhdHd3dNsW',
          'setdVW',
          'a0tcH8oL',
          'WOBcPafvCW',
          'jmk+W6a0dW',
          '57+I5QgAW5ZdNX4',
          'nerfWRNcLW',
          'W63cV28',
          'veSdWODmyCodWQFdQ8k9W6zSiSkGymkI',
          'WQNdGGvjAq',
          'DeOWWRfR',
          'WPL5WPddTmoOcrPtWRnh',
          'WQaLWOZcGCor',
          'FvOwW4efWOxdQgCZ',
          'W5/dVSooWQNdLZFdPqNdGG',
          'W43dUmkM',
          'xe3dMtjy',
          'omkxhSk1W6m',
          'gfdcG8oK',
          'FSo/imklW4RdRrZdRa',
          'FrBdRmkMW5ZcHW8r',
          'v0JdUYvy',
          'WR8EWQzUoG',
          'WRyNWOxcJCon',
          'W6NcTwRdT8kPvW',
          'jmopW4xdPNW',
          'eCkXdsRdLNXcWQNdLxBdNa',
          'jMvjWPJdKYtcOea',
          'jCoxW4pdKL/dRmkS',
          'WPi3WRJdQuVcPCkxW440n8ocoW',
          'W77dIezMnG',
          'aetcNSoLySkBW7P5',
          'se7dTJH/WQC',
          'W5xcIs7dM8oT',
          'FGuvW7CM',
          'pmkZomkcW6FdPHJdRmk2mG',
          'e0SKW6jylNXiE8kcW4u9',
          'W7qXaSoPWO3cI0tcNCoidmoV',
          'smobt8oZWQldIZddQMq',
          'W4ankSkuEW',
          'iMNdKmkAWQHIoItcR8okyCk3WRC',
          'b25tWPBcVq',
          'quSzWRrgyCo7WQldICk1W7bXza',
          'vJL6WP7cJKpcP0K7WOzJWPG',
          'WOy1WQxdJey',
          'WQ/dKtddLdSohCkO',
          'WQ0iWQvrcG',
          'W4eUn8oSWOS',
          'WPTZtX3dTSk7bSoHWQxcImoBhZu2zq',
          'CdpdVMhcQSoeWRi',
          'W64ot8kBWQ8',
          'WPtdQIzFFW',
          'WRC2W51Wuc0',
          'BuxdLYP/',
          'rsv/WQ/cVG',
          'uGSlWPu6W60',
          'WO3cIX5vFh1Ojmo8qeW',
          'W44oiCkFCJa',
          'W4OKcmkoBG',
          'WPRcIHOtm2uMWPldQSoyWR8gga',
          'WOWZWRJdJu3cUmkeW4S',
          'mJOTWRzgmq',
          'W6dcUNldSmk3qq',
          'WP10WPFdVCoKg0q',
          'W4JcSepdTSko',
          'DeupWQ7cO8k/WQip',
          'EHuGWPKt',
          'n0OQW4jz',
          'W4f3gZddOYlcLmoOkG',
          'veBdJmkbW7Ojwq',
          '57YY5QoOuxlcKeyW',
          'W4iQaCoOWOu',
          'W5eomCkBAIP0W54',
          'WRpcKv8xmbuOWO3cLHqG',
          'W7VcUN/dSmk3',
          'oHrlW7RdP8oNW7q',
          'WRhcMutcHmkuW5BdRSoC',
          'WPlcGGS',
          'WQ3dQJjuua',
          'WQ/cKeBcKq',
          'y2GoWPfS',
          'WQ/dPcNdSJ4',
          'W6hcJ2hdKSko',
          'fh/cUCoQwW',
          'jeDrW5HfWPdcUhC',
          'WQxdU3NdSmk1v37cSv/dI8kAWQBcHCk2wcJdTCkdWRDVW6ZcRG7dRgjNvqZcH8kwWPqazLhdHmoNwCojWOJcUSo5wrquzCkwWO7cJmoxlmkVomoFaWG0h8kiWQhcNCkos8oJcSkGWQ0cWOv0CSoyWP3dSSkUWPHVWO1LWRGvk8obqwNcN1ubpqvJcCkhWR0JW5SApJFdLmoAiaxdG8ovAMGqF8kGW7OaWP00W5LTWRHRz1K',
          'rIynW78lW6e',
          'ythcKCobW7G4BW',
          'W7DoW6RcVSkCcIv1',
          'FZhcHCoaW6O',
          'WPxdPJDqBSkIW43dUa',
          'W7TUW6WmWOhdO8kLvSkJW7fu',
          'WRxdKtddLdS',
          'WOOhWRxdQLa',
          'rCkDWQyEcmoe',
          'W6yUi8kdDa',
          'WPhdRKBcOCkVWQTvWO91ccbDlmoRWPG+W6joW45brG9YWObPW4KQW7ucgeHCeSoFsf1olgtcOs4HWQ7cTGFdKmk/W5hdT34OWQlcMLqBpmk0ySkilSokW5lcLCkIWOG1W5XpyxpdQCkHW4f3W5LEqmoxWOzLiSkYumkgn8kZWOZdPLKJW7JcUSo5dmk7W5ZdJsVdNxn4ueLFWRnanCk+W6JcRCkNEmkzW6/dMSkZW5FcHmo8gH9bESkiffFcPYumc8o+h8oozCoXWRu/WQzHW7VcOqrYp8kJuCk9rmodW7BcIfldK8kUyIXdsmkTdYtdSZeBW57cK39vt1xcQLW7E1HHwrOguq3cKfNcNmofW5lcI8kmW7q4abRdQ2GpWPhcHWDbWRtdHL4HWQ0QW4i+c8k+WRlcVMCRW7xdSSo0gSoufSkPW5BcICkvoXRdQvz4t1DJx3xdHSkMWRldVuZcP8oNWPaTe23dJCkBWQLdWR1aW6NdRIjxx8kKyx3cQaXScmkNWRlcQCoveCoeeNGCcSkzW6NdJmocy3ZcUSkdh0ugoCoFsJ3dQSowW7xcQCoDW6BdQSkEaYW8WQSXW5FcHmkpWR9TWPddNmk4or08FqddQCofEmoDWP1RWOVdTCkQWRr9bCoXW7pdUCoQqSoSy2BcVrVcMw3cMYpdOvldL8oqWRDRcd3dPmo/WRHKwmkaWOznuN7cKSkHgKJdLHTRymkWWQldHSkkW7Hsx8otW4ldH8kIwmojwdWlWOtdVCktWQmiW5xcIXVdVgBcVvJcLgZcSSo8W4ZdUKOCamoTWRmmWRddM8k8WRNdQ8o3iZ5TW6TIW4S9oNuLW7FdIJ/cS2VcQ8kfm8ksW6ZcMq8GWO3dIMtcHMfxt8oYb0q5aCk/W6qGn8kKWQmWWQCfnbdcV8opWPRcOaHAW4iRbcSBabBdNSkkW6nVdWTerCoNWPxcNSkJECkSBHRcP0SrEHldJdzGDr8Ao8k3W6xdV8o6EWbrlqObW4HqWRFdQZizomkfWRBdUKtcJb8sW5bLfMzBCCkKECkEW687gmkJzmowDWNdP17cPdZdKYSlhhuegCowf0T0mmkJzgRdSIxcK2LffeVdMbX4WP7dSmkdlNCiW7n3n8oNfCoueCo7b8oCWRL6WONdQMnfW5BdUHBdKe7cQCoeyCkOg3hcLHeZaSkOWPhdGCo3WOldJSosWPSLamkoicPcWOmQESkwWQ3cNCo3W7iBWRRcMxjQWOVcR8kOAYrBF8kbBdldQ8k4i1X0WRCFWQWmWPHHFCoOhCoBW4K9W5WsW4m4WR49dSkneH4DW7BdOcRcPs9HW59KWQxdH8krW4jkfZxdGhmDytenW63dSSoVaSk1cuxcO11kvf9ZWOazWQ3dS3SIW4tdOSkEfsfUbLCwkhvRW5iAqG40pSolW5/dSrxcRfpdUmk5uSoMW4lcGJC+W5LUw2RcOb7cPSkvb8ksW7n4WOKPW6RdH01YWPu',
          'BCoTFmorWP/cVuZdU8kKkhaeW60',
          'W7TyW6eyWRe',
          'amkdgrldPG',
          'W7rXW6afWOFdGSk9',
          'oKnrW7XdWO3cQ3jHW65xFa',
          'nx81xMmgWOtdVf4',
          'xvxcKG',
          'WOldSdT2tW',
          'W7ZdKvvzeK4+htpcT8oOW5O0E8oWW7C',
          'tSoCwSo8WQxdHdddTG',
          'W7BdJSksWP1PW73cKYRdR8oNWRJcNSkCWQC',
          'W4f4mSkJW4ngW6/dKa',
          'n8oxW5/dSNpdRSk0WP/dV8odbG',
          'AwGWWPLm',
          'W6e6W5ZcK8keW6BdOSkdamoFWP4',
          'W6jAW5/cVmkG',
          'dXigW7xcJCkNWQvD',
          'imoxW5/dO1/dPSkQWORdPa',
          'ruRdTJbo',
          'WOGMWOHjga',
          'rsjOWPFcTq',
          'kmoqW7NdUe4',
          'WPhcGcq/eG',
          'W7KlrW',
          'cXGhW6ZcMSk8WRTx',
          'WQTZWOZdTCos',
          'W6DKW7WpWPRdMmkWqCkX',
          'p2vpWPRdHdK',
          'WQ7cNuhcHCk0W4xdUmoA',
          'pmk6omk0W4ldSrZdPmkbivqBW6W',
          'W6/cThVdRa',
          'oKnr',
          'WPdcTvVcHCki',
          'W7OgtCkk',
          'W7/cUg7dU8kG',
          'WOBdUYVcTCoLeJ/dPutdOCkAWQBcHCk2wcJdTCowW7KMWQRdOvZcOwiHxqRcLCksW5GaCHVdJSoIsmoeW5FcTCk3iebDi8opWOpdJ8kyySo7FCkrvXj3wSogWQpcMCkocCoRcmkUW6OkW4rYz8ojW5ddT8obWO0XW6KXW71hmmkdacRdLbjtCLaTtCkkW648W4anFw/cISknjvpcL8kgAw1DtmkUW7ilWOzHWRr3WQL7yKlcNXeLi1/cQxRdGCkkxZeMWPn7WPZcUmoGW7XpjmkCpXZdTCkQW4T0BCo9talcVCo8W7BcTCkQWOLMlWKRsL51bHNdN3imlSoAvmk/CSojWOlcImk4fmoWW6BdOMbDW41rWPddNgRcVSk8WOaFWPZdNWe+W6fvBCovcXzuWOhdKxmHW6/cNCouW4TNE8krDYtcQmoNzmkyd8oFWRa1WQ5nsCoIWRXHW67dQqX7WOejnqldJmkDW73cQCoObSosWRfIh8oOuSoinSoGkSoQWOldLvJdMSk5W5RcUWFdMsJcMSo3W5nuuCo0W6erlmoWWPpcGSkZrJdcJCoIcSkkWPFdHCkXWR7dNNhdQmk9W5nllJ7dGSk2W6lcILFdHJJdNmknvvBdVwVdJWlcOw8yW6pdOglcGmoBw8oHkmoSW53cKNxdSSogW78nustcHGrjWPKsg0/cNHldV3ZdSrXgWOm+FCkch8oFW5fIW7tdU8o+ArxcO8ojj8kMW7VdNeCramoDlmkremkms8oQoSkNWPHW',
          '576P5QcGef7cP8knwq',
          'lMHyWPddHcpcTq',
          'W5ldKgTYgq',
          'ifKjvxS',
          'cSkPiCkwW5G',
          'zI9nWP3cJG',
          'fCk1ddddHq',
          'W4X4lSk6W5bfW6RdMvK',
          'W6LkW6RcImkhgse',
          'rvNdVt4',
          'WReqWR5KoSoWW6hcUq',
          'ovZcO8oPwq',
          'WQn5pSkcW7q',
          'w8o6z8oXWQe',
          'WPv1tY/dVSk+hmoHWQu',
          'v1/dM8kQW68',
          'WOBdUYzq',
          'WONdHaxdQc4',
          'W6bLW6aoWP3dHmk4qq',
          'WP/cIXuCoemJWOxdOSofWQmwdtPWpvPs',
          'W79FW6RcTCk+',
          'iKWEWQlcTSk+WRDz',
          'kJa3WRbE',
          'W6BdGSkzWODT',
          'WR8zWQnTlmoRW6xcUW',
          'WQmPWPRcHSoaW7pcUCkr',
          'q0eeWRLxESoaWQ0',
          'W7rkW7VcV8kDnJr9bxpdLW',
          'dKNcHCoUDq',
          'WP/cJaql',
          'omkZi8kkW44',
          'ltWMWR9x',
          'n8k2j8kuW5i',
          'qx7dQJzh',
          'nmokW5ddP20',
          'EJ3cJmocW7msAXNcSSoE',
          'W7nIW6CjWP7dTCk6x8kYW6PcWRZdJG',
          'mmoBW5ldRw0',
          'WO7cJaatk08MWPe',
          'WR0ZW5TlrstcHSkzBh04CSk5AraDhW',
          'wsiB',
          'vx4mWOtdQ241DSoK',
          'tmoCxCo0WQxdHdddTJK',
          'W6ShtmkzWO7dLH8GCfNcNuTalsSnW74',
          'W7zKW6CCWPpdN8k7v8kWW41uWRddM8ocjG',
          'WQOPW5TtrZpcN8kg',
          'W6dcSMxdSa',
          'W7yotSkl',
          'e00XW49jCJ8pkSoBWOb2FCk1',
          'W5n0bZBdUH/cK8o0F0aFW4nScG',
          'W7JcOqRdRSo9',
          'oK5mW40',
          'WPahWOdcRCoo',
          'W4lcIwRdHCkt',
          'egnoWP/cVwy3',
          'WPXFp8kBW5tdLvm',
          'AWLhWP3cTq',
          'vr/cTSofW6a',
          'WOW9WQJdJvpdVSkjW4y4mCoEp8knx19utsZdKColW4lcOW',
          'W7jzW4eIWPW',
          'WPhcNqPpBwXm',
          'W43cVcldHmoG',
          'WONcKhxcQmkY',
          'fmkRcmkDW4W',
          'WRhcLfy0lHS',
          'CZhcKCoyW7uNBW',
          'WPFdPJbyBSkIW43dUa',
          'CtFcKmoTW7S3yG',
          'WP5ZuYZdTSkXaa',
          'WPlcGGTpBwbqiW',
          'f2fzWPBcVq',
          'W6yOhSoU',
          'qZRdRhhcHW',
          'h0dcH8oVzSkxW4T0WPOYlW',
          'FKFdJ8kLW5u',
          'jMaWxgum',
          'e8k7eYZdLhbUWQ8',
          'cbqBW7hcKmk7WQW',
          'WO8ZWQhdJq',
          'x0ewWRrUDSobWQNdKG',
          'W5molmkuAG',
          'W69nnCkBW7W',
          'WPNcHXO8eG',
          'xCoxsG',
          'e2b7WQ3dJG',
          'vZefW47cVf5Mt8k6Cq',
          'W5ZdUSoxWQ0',
          'WPhcQSkiW7NcIwJcSG',
          'W7JcOqJdTCoUW6iBW4ONF2KzEmkJ',
          'uHuH',
          'BgGkWQlcLW',
          'i2C5FuC',
          'WQFdSGVdVse',
          'sr0OWPqSW7FdTdy',
          'W7zQW6qnWOddLW',
          'W5/dUSooWQ3dItddOry',
          'uSoCxmoWWRddGtBdOMW',
          'WOHXWOhdN8o3cHTvWPjDWQSuv8oXW7ri',
          'vrKRWPu',
          'WPxcKdKxle4',
          'quRdN8kOW74',
          'WRldNZFdMd0oe8kQ',
          'W552pZddUs/cLmoXsfyeW4v6cW',
          'WOP9WOtdTmoMcJHoWRPrWRqJxCoZW75i',
          'WPhcHGatm0GSWOZdQq',
          'WP90WONdR8oK',
          'xK8dWRvrESooWQ8',
          'hKdcNG',
          'W7pdJSkoWQXPW7FcLq',
          'tcjaWOy',
          'sCodsSo8WQxdIa',
          'WQaJWP0',
          'W69KW5ZcSmkp',
          'W6ldNvbqgW',
          'ueezWQrrFmodWRa',
          'WP81WPPaudpcG8krnfa0A8k6FXCohG',
          'WQhcLLGRdW',
          'W5b1cJddSIxcJ8oQvLOqW4r0',
          'W6RcThNdKmkKuxC',
          'rIibW70tW7O',
          'WR3dQZRcPCo9bY/cKqxcLSo5W4hdTq',
          'W7JdGmkxWOXeW7xcKW',
          'WRS7WQnkma',
          'W6qOi8oCWQO',
          'nSk+j8kbW6xdPGVdVmk7',
          'W5j3bdBdPq',
          'ibOaW7tcLW',
          'W7CIk8krta',
          'dehcJSoqCCkbW6G',
          'iSk9W54k',
          'WQ/dMsRdTYalcmkHWPO',
          'j8knatFdQq',
        ].concat(
          (function () {
            return [
              'a0i/W41j',
              'W7JdJwjufYS2bGxcV8oNW5i',
              'pt4UWRraoa',
              'WP/cMgKIpq',
              'WPdcGG0xlvu',
              'W67cT2tdUSkOCxdcQbtcRSojW6pdLW',
              'WOCiWQldUfi',
              'cxDFWQPxWQldNa',
              'WQmmWRNcPCoZ',
              'v07dRa',
              'DfWhWQjs',
              'WP0HWQtcP8ox',
              'W6xdK8kzWP9TW7RcIqVdUmowWRdcJ8keWRS',
              'va7cJ8o+W4i',
              'EIeOWRqd',
              'xKpdSSkEW6m',
              'W4aoWOxcNW',
              'WQOqWQz0lq',
              'nryyW6NcJa',
              'W5ZdKSoPWP7dJG',
              'W73dKvby',
              'cgnfWP3cQMe',
              'eeeJW4Pym2fp',
              'hbiBW6JcI8kHWQza',
              'WPTal8kqW7C',
              'W7zoW7ZcVSkc',
              'W67cOa/dP8oGW7KyW5W',
              'WOr0WPhdV8oZbHrn',
              'nCk+iCkb',
              'imozW5ZdSKZdRG',
              'x0KqWP55',
              'WPPLWONdS8oIcJrtWQW',
              '576T5QoFruvV',
              'W7SYgmo1WOxcTLpcNmot',
              'WRGuWQ1vj8olW6hcSq',
              'ceVcI8oIFmkx',
              'W6qYgmoHWOJcT0dcISos',
              'WQRdHtjdFG',
              'WQNcLZzXua',
              'W7NdJSkDWO1fW7VcMsRdSq',
              'r0tdTITQWQzdrWhdG2ldUY3dKYy',
              'nhu0Eh8CWPpdPK/dNerZ',
              'WO/cIaXhDwDApSoR',
              'ueeBWR9r',
              'WR09W45KtG',
              'WQdcMK8Wkb8h',
              'W5ddTmoTWPVdMa',
              'xKetWRvpya',
              'aSkWbatdKMTUWRy',
              'h0tcHmoKF8kF',
              'WR00W4PC',
              'W4/dJSkfWPXS',
              'W7BcQXldOmoJW6uqW5WM',
              'WRPEWQhdMCoy',
              '576p5QgNWOOxfa',
              'uKCnWR1r',
              'BdNdR2tcRCo0WPPJW7ZcNba',
              'W7hdHq1GhKHU',
              'kN81sM4',
              'zmouBmoWWOm',
              'W7BdJSksWP16W7VcKtW',
              'WOVcNJvdAMe',
              'W63cQ3VdSmkRvLZcRq3cRCoE',
              'le7cJCoYsa',
              'WQZcGv3cJmky',
              'b21sWOZcQN1REq',
              'WRm6W45aucJcJCkp',
              'W4BdTmooWQNdLW',
              'WP1tkSkwW4u',
              'W7HoW4NcVSki',
              'WQ8fWRnTlq',
              'W4f4mCkNW4rDW6BdR1xcTqJdHqZdImoGs8owySoDWOm',
              'W513dW',
              'mLOrW7zM',
              'WPTVoq',
              'WPqnWR4',
              'W4uhWOdcMK8',
              'fmk9g8k9W5O',
              'EJFcHSonW7z7zWJcUCogrSo0WQJcMmo/',
              'W7XaW6ZcNSkpacW',
              'WQBcGH44hq',
              'WRxcI2lcHmkIW58',
              'WO18WPFdV8oIgXXoWRbvWRqSw8o4W7Lo',
              'WP1XsbRdPmk7hSoH',
              'CtNdVG',
              'iL5QWO3dLG',
              'WPhcGGaxlu8OWPm',
              'WOTStqddOW',
              'W7VdGmkrWOW',
              'W6a5wCkJWOS',
              'xvWvWPjM',
              'W4nZoa',
              'qeCnWRu',
              'dKeIW45nnG',
              'uCoCsSo4WR3dNG',
              'kwJcICojyW',
              'uCoswSo4WQpdHd7dTa',
              'WQLbzCoApMm7WPddHSklASo9zmkOjSkanmkXgSkoWQ3cOaKfiCozW5NcG8kZWRldL3OVWQj5cCoLWPldSCkGFr0zW7rFW7DVdSo9emoxWOiHW5jbW5xdP8kTl8o0pCo5D1zKE8kIiCoHmHldTmoDW4ldQG4ZWQGGW5ldQuNcO8kistRcPwFcLmoSBCoxkXxdN8kvWQldUNhdRfCwhXhcKSozW4JcQSovfHtcLmo+vCo2WQNdHCo9EhyJWRbzCCk4umkqW4xcHW3dRCk7W5lcHmkVWPuJmhpcGetcUI8mySoKga/dUKKtWQRcV8kdqSkUFwSdW57dPSoyAwGpACo/WRD4WPfVWOlcJqhcGmo5WOCIWQlcPfhcQ3T4W48Ba8ksASo2qgBcTelcICkGh2pcJ8o2wSokWRLgW4iYW6m4',
              'WP51tWJdU8krb8oPWQFcR8oneYa',
              'WPtdHavWuG',
              'WRBdMsNdLa',
              'oLjxW5HwWPtcTxjTW75q',
              'iN4Hw2Cn',
              'W7BdK8kzWOH8W7hcUcpdUmoDWRtcLmkC',
              'W4mjWP/cHL4fW5D5',
              'x8oCqmoPWRddHdhdVxS',
              'W5j4l8k+W4vaW6ZdJq',
              'WOldPcPcACkIW5tdSW',
              'W6JcQXldH8o9W6qyW7WLqgupzCkOW5LYWOeoWO4tvXi',
              'lIOWWRK',
              'q0eeWRLxESoaWQ3cIW',
              'W6GaumkhWR7dMGyN',
              'cwnxWP3cNxn0FG',
              'WQFdNs3dHq',
              'W6hdKujvcGGWhq',
              'AuSiWQlcPCk/WQWn',
              'W7mWbmo1WPpcSfpcNa',
              'umostmo4WR3dVZRdTM3dJv3dMu8',
              'ptmSWR9x',
              'W6xcTMZcUSkHw2ZcPKRcSCouW6e',
              'WPCDCmkglt8PW4ZdL8oxEG',
              'W7O0kmkJsW',
              'W6JcQXi',
              'eLG0WPu5W6ddSddcQHRdM8khC2v8WO7cQCk4W7dcUNtdSZhcNrNcQvxdISonWPDpW7WKrYNdK8olqwn4WPehWQeDvwJcTSoyW7RcPHVdVmomW4FcGYn3W7iyl8oRDsddOrpcP8kbW5ldNwFcKLhcLCouW5/cQCo2DSorW7JcLCoAjCkAW6rJWRBcS8knDSoQW6hcHmkTemkJymoPACo8jhj8CKpdKLdcHdj9AmkdWONdKby',
              'qe0sWR5g',
              'WQ3dOcr1DG',
              'BrhcQSoqW40',
              'AX7dSCkfW4BcLHWyWPS+WOZcOmoK',
              'h0RcN8oNEmkCW75MWOC',
              'jmkkW4u',
              'W6a8aCoZWOu',
              'CdpdVMhcQSoiWOvP',
              'e00XW49j',
              'W7/cVN/dKCkGrhBcPGe',
              'WRi6W5HatGJcGSkxCuOJESkM',
              'W7HwW4VcGCkQ',
              'xmkmWQaAemos',
              'zCkFW64mdYRdUq',
              'WOHXWOe',
              'W5LMW4NdJ8kuWRRdTSoFeCkdWO3cSc4LytldJSoMomkNWO/cM8ojqNpdLchcImoZqhjGW7NcRsafuchcSqimw8kNeJjzu2CTm1FdTXpdQGtcPCozW5pcKSkEkhtcISkoW6qhsILHWQBcKCozWP0jnhhcICkIAmkCW77cOxiKW5zQv8oAWOyncqyDWQ4PW7uPWPvnFb9gWRdcHtK1W5P8ymo3WRr2W7FcQ3tcSSoIWQTqCuVdLSoiBgbjwrm/W7NdIqSGW7LmaSksW5fSjb1MW6GAlCkgrSoBsSkxtXRdMtG3pSo3AhrYySkiW7e1WRtdLJ0bWQ3dKwPQWR8lhwdcQKjnWRFcTLxdGfH6o8kWW4rSWO7dRJeQpGPDCSk3W6hcOanRWRzibSogW5pdJrHoWRdcMSknx8kMyNBcIfxdVmkDgYC5kSkCkW7cGSo1Af4gWPfObrFdI8oxWOJdVmkRW7fsb8oaW6OdduRdR8o8af9DdXJcK8kfW6BdJSk6W5aaW7vMW6lcIL0/W5rXWR/cHmkKAelcUmkEW7qKBCo0W5JdMIe4Fmo4WRyGW5NdImkep8o6WQBdKSoYjmoUWOVdV8k/W4/dIqaQWQtcIIPeW70XW4VcKeGAW7/cQ1yVFmo2W5xcPJ/cQSkGWP/dQSo3CSk0nq7cNSoAW6fkWP7dRmowzmoEW7jIrgNcRSkFi8oaBmobA8kCmCoUgmokWQfpWQSQW6zPweFdP8kRcrhdOSk+CCkbbmo5W5OsAmkkWOZdTColecrFdmktnwdcGefsW4ZcT1xcJ8kQWR1tWPTOW7VcICk0sNldVcbDWPb9qmkbW4GUWRpdISk5WP8tc1/cK8kvW5lcQSkxW5JcQSk2qaHfW7dcP8orCmkVih7dOmkHvmoIW4hcHSkdEsLXahC8yK8VWR5GW4j8WRKOW7T7CLmuW6f2W4uDBHOrWQfOWPxdPtPnBqvZc8oGiSorWRpcPmkDdmkohwJcRIdcPM1fpdZdLq17dmkPcmoqW5HVFmoCtHylWP94WOpdMSoJWPxdKcBdK8kffSkcvmkRxCoVy8oblCkEW6r3W6pcJ0utzZDGW4z7WQBcO8otFqXzvWGQwq7cOYHXWQb4dCo5ECkTeeFdSbLzWPyGvCoMW7q8FSk8dexdLCoXimoeCmoRtL7dJ2/dRraIW6NcUJ4UcfewW7VdSsqDWR8gm8omW4pcRWD7W6hcH1lcK8ooWR8fWRvrvSobiSoRW6tcSCk3zL7dGmoMerJcOwqYfgBcT1BdVxZdK8otE8k+W4OiWQuhWPTzcK0NW7BcKCkTbNOYdqjetNP6nSk5WQNdH8oNkwyZgZZcUmoLW58UWQxcGmoVW7lcM1ikWONdM8o1fCoWheTPAmoGW61ex03dJSk8W6ldJSoUx19zas8bAJ0bbSkKWRWJx8oKBmk4qK/dKmoTj2qjW5mCW6HSW5hcShddS8kxC8oFW4NdVmoXemkxW7PYd8kBiw09jL94W7q4s8otWQRcGmkpzKRcVc7cHt3cQ8kzWQe6dmkQeHFdTw7dJMalWQftvCovWO7dG8oga8o+osxdOCo5whJdHLNcH8oVWPCVeCkOWQhdTGpcTIBcJLmQW5xcPtXyxmoGW6BcJSktW7ldQfi1W7/cSdRdICo6WQ4TvSoJWRjgmmooW5zRbciQW4JcOxddJvXAcmotWQ3cGmkfW5FdR11Jt8kLWR54EmosWR18A8kMW7RdUwunntZcOmoQAGvIW5q1WRTSe8kiqCoNeNldOa3cVmk5kdHbdSoKWQpcO0hdSSo/W53cKmo7sCk8WQ/dMN4CW4hcH8kSBG7cGttcHI4tdgzOoCosbCozW4NdPmomfrhdQCogWQnfW5XsWO9iW5q+WRvFaeLXEWPLsmkSW5bGWQxcVSoNc8kQWPBdKmoceCkXW6u5v8kgWO3cRSkxEqBdJdBcKSoPW63dN8kzjHaPWPdcGmobW5JcQmoeFSkxW4iYW4SDWRdcL8ofhJC1awFcTSopW7LyWP8NWPRcHmojWPhcQCk+W5rLr8kLoGnPWPhcLCkaW73dG8kWW4K/WOJdSINdGrNcN8oqFaKwW6uMW51rW69IWOLEjJuyWRnEWQiUvIFcK8oExtLGWRNcRmoDA8oKgdBdR8kmvCo5WRZdOCoBW71Rx8knW4PoWO5PaSoOD8kyW7ddMmozcu17WQ5uDMFdL8oex8oQlmkMWONdUZOGECotfe7cK1e1W6RcQf47r3r3WQVdH1xcNcu1W5BdISkgWOBcJwxdSb9ZcgZcGdunnXNdOgFdGcVdU8osq8omWRXpW6VdOZVcSCossCkrrCo/p8k/b3utamkOW44KWRFcM8k+qSoTWRneW5VcMmoNfmo9WRu3emoRegHtWOLNqhb+WQJcRXFdLCkSu2rPWQnyWRmuoCkEWPjRvSoqlqfoW6e',
              'W4f4lmkU',
              'W6WouCkjWQ/dHW',
              'WRpcH14W',
              'W7ukv8kpWQBdNqW6ya',
              'cCkmW60',
              'WQpdLca',
              'WQdcMK8WkbmWWQ8',
              'WP1aWO3dV8oh',
              'WRayWQrKoW',
              'WPT9taZdPCkZ',
              'W6xdJSkpWOb8W73cKIe',
              'iNDWWPJdKIu',
              'W6lcUMBdSa',
              'WQGdWQT3lCoRW7pcSa',
              'kZeQWRDDkYpdGa',
              'W5CpWP7cIKKyW5f4WP8epmktW5rUFf4z',
              '57645QcPW5FcQSkZmeq',
              'ufWsWRfxDSoQWQ/dNSk/W7bRiG',
              'o0nlW5LsWOVcVgK',
              'eMnqWO3cVq',
              'W7ShqSkaWQ3dLIqMD1NcSgzglculWQO',
              'lwqxvey',
              'WO50yWpdLG',
              'WOfKwIxcPdFdJ8o6k09c',
              'WRmhWR1Baa',
              'WP/cJbOgluKLWOW',
              'nZiKW75fodRdLSoEcwPGW7HvtCotW7/cI8kMW50',
              'qeJdH8kOW74dvSo+',
              'W77cUN7dR8kj',
              'nhmHvw4',
              'qKBdJCkTW68dxSo4',
              'r0tdQcy',
              'jMvwWPJdRYlcS1JcPq',
              'W7NcQ2/dTmkXvW',
              'W6SvjSktDW',
              'gLC+W6Xd',
              'WORcIbfbCx0fE8oOtb/cSLfLW6NdNLr8WReOW6uOW6uUfcq7W7vjW7hdJCkIzuRcK8kQvZzAWQtcNSkDlY7cQ37cImkuje/cJSoIW4pcLmoOhvxdJ30',
              'WOy+WRJdJNpcVSkeW4mZma',
              'WRdcL07cHCkcW5/dTmoy',
              'pmk0W4mFgq3dTfy',
              'aNPDWPNcIhn0Eq',
              'W7HQW70nWOddN8k0xG',
              'W5VdQmo3WQ3dIde',
              'WPX7WP/dUmoB',
              'W7VdHmkzWO17W4hcJsVdVmoeWRq',
              'W7/dM1rydtqVfYpcQSoS',
              'rYyBW78vW7VcJu4',
              '57+e5Qc3WRHFW4i',
              'wsqkW7qc',
              'u20iWORcPG',
              'WQxdNdddLWuihCkGWO16',
              'omkWpmkD',
              'W6VcSvZdVmkd',
              'WP8RWQLiW5lcLSo1eSoIW6rfWQ3dJSodmmkNeSkaf1CPW6LHvIT6WRziumoaWP0sFCowb2ddS8oTuxJcImoPWQBdLmo6qmkNs1CMtCkAWRagW6TqWO4bk8oWtSoEyCk/DmkPWOy+WRDeWQXmW7/cLCkutGpcQKmUa8oAW7BcKX/cNJy9bSogW54EuvZcVXHRW43dOCksESkZzmoxWOVdLmoZW6JdJtaBfmkQeCoYw2ldLtrpnIPfCdr0WQNcIw/cRx/cQfpdICkqW53dNSoJamoTWQ5oBmkmkSo3EaNdSfRdTNdcK1WLa8kMmCktW6pdUYJcNCk3W6hdPZtdHCo1W6pcPe8NdmozWQZdMSkqW7VcV8o9W5rLWQ8hC01RW4irW4VcSvjzr8ocgcRcJdNcHSovWO9GW7DqWR8CW5tcNSkiWP/dT8kLBhZcN1ddJ3CfWOtcR0ihW413w8k7WPhcSXShW5hdQIFdVSk1W57cRrxdJ8kNW71VWRqDW7u9W4xcMM/dSqnSm8kMW4CEWONcPmkYumohhsvvW45LhcrMweRcNXhdOMpcSCofm8kaW6hcJmolsZpdT8oFhSkNCYXpjCkylmkSW4dcU2JdU8oMCxJcMmkHW4xdVJpcTwVdMGqeW68oW6ZcUmkiWOZcMNhcPmoyre/cQMRdNYb1W4KDWQOjxGxcI8odsmkDzCk1W6bUW4T5W43cHHSUW53dH8obW7uWow1FqSoi',
              'quBdSsX4WQzBrW',
              'W6hdN0nzeburhcBcUW',
              'WQ7dGIpdPHS',
              'bCk4grhdJ11KWRFdLxNdNq',
              'W4v5gJ7dSJ8',
              '57YX5QcsymkrgGu/',
              'pNfuWPK',
              'x1ZdJ8k1W4m',
              'guXkW4D8',
              'nxuUxw4AWOtdVq',
              'agtcV8oIFq',
              'WONdRtDbqa',
              'ld46WRjtkJRdLSoE',
              'WRhcMKSO',
              'uYviWPlcTghcP0W',
              'cCo/W4VdHv0',
              'W7ecrmobWPZdLGO9Fe7dRXihmcqE',
              'mCkGirddQG',
              'WPiXWQNdHLO',
              'kNe0xhKbWOddOW',
              'ASoVFCouWPpcVeNdNmkYf2m1W5m',
              'owfqWPldLYG',
              'W5j5btZdPsO',
              'oCk2iSka',
              'sutdVdPNWRW',
              'WPfVBaZdPmk6',
              'W6/cTgxdOCkKw3hcObBcLSotW6ldKCo+',
              'jNqK',
              'W5arkCktAG',
              'uIT/WP7cTW',
              'W5CpWP/cN0uFW51qWOmkjCkV',
              'oJaUWPrEpcpdLSoceW',
              'WQhcLLOLkb8TWOlcLGGMWQuh',
              'iSkHW44wdG',
              'W5VdQmoPWQddKHpdQq/dTSoXWPuF',
              'WQVcMvVcHmkJW7tdSSoei8kq',
              'BaNdPmkJW4RcNaOr',
              'dK89W4y',
              'e2niWP3cQLfOzSk/Bq',
              'WOtcGGPJEgPx',
              'WRhdKYFdIXO',
              'W5pdV8oEWO3dJtZdRG7dVCo5WOGmu8kSACo/',
              'uvVdM8kLW68pDmo6W4HYWPLgW7C',
              'W4uEWQhcVLi',
              'W6dcUMNdSmkPyhRcQWdcPmoiW6pdLW',
              'zcJcJSobW64',
              'WPhcGH8xcem6WOS',
              'dSoCW4ddRvW',
              'W6DKW70jWOBdN8k6xa',
              'h0DtWPBdSW',
              'W77cPtpdSSoy',
              'dK3cI8oUD8kxW4HGWPOulmkIhZi',
              'W6SmrSkaWQ8',
              'W5HDW48CWRm',
              'WOHWvaFdVSk0b8o2WRRcSW',
              'WQJcL1VcGmk9',
              'mSkNW5iBhWhdKfBcJmo+W7CLW4a',
              'gZTAW6zvW67dMf4Vq8kR',
              'pSkPkCkkW58',
              'WOJcHtP8sa',
              'W6zOW6WgWPC',
              'W73dKmkYWPPJ',
              'ouLwW5rdWPdcTNuZ',
              'W4FdTCotWQ7dLcVdRqK',
              'q8kzWRaAhComWRNcNuRcNGu',
              'WQFdNchdHYGtfCkRWOy',
              'sNpdGa95',
              'WQ40W4O',
              'tsiBW4OoW6RcIu5nxSoSW73dKW',
              'C0ZdL8k3W6O',
              'BCouyCo1WPS',
              'WPe9WR/dGuVcUmkkW4K',
              'rxS5WODg',
              'WPTUraJdO8k3lCoOWRlcRCoBgcy',
              'W51iiSk2W6/dPum',
              'W6vNW7WgWPVdKmk6qmkVW7y',
              'WQRdVfxcT8k2W6e+W40mEvy',
              'EXpdPmk7W4JcIW',
              'ru8BWQvg',
              'cSkNlsddK3e',
              'WQaJWP3cPSoAW77cS8kh',
              'WPhcUGuGoG',
              'rIynW78lW5VcGuvS',
              'mSkSh8kmW4ldGXddVCkuiu4v',
              'iwZdIdJcMmkzWQW',
              'WQO6W4HcrZu',
              'yZNcKmopW78G',
              'C8owFmo8WR0',
              'W7DaW7RcVSkcea',
              'W6xdJfbkgXmSfG',
              'DWpdUa',
              'x8oCxSoK',
              'WPaGWQRcQwWQW74',
              't8owwSoCWQxdMs3dSwVdNvVdMq',
              'EXtdQ8kHW53cGruh',
              'lSozW4xdSKZdPSkLWOm',
              'WPlcGHKx',
              'jh8SvNK',
              'W7SatCkAWQVdMGCSyq',
              'm8oxW4ldVKRdPSkRWOhcPG',
              'jMTzWPJdJwlcQvNcOM1RiLj3WRWu',
              'WPdcGG1bCwDApSoR',
              'b21sWOZcUxTPB8kIsmkyWPNcRJa',
              'W6BdKCkqWOb8',
              'W4n3ht7dVYxcNSo1Aq',
              'p8kWW5iEgdhdPv7cImoNW7C',
              'WRyWWOZcGCoa',
              'WPm3WR/dGuxcTa',
              'l8oxW5y',
              'EmoVFmoqWPpcVZW',
              'WRlcMulcHa',
              'FZhcHSonW54XFatcTmojxa',
              'WPNcJruqm0m',
              'v8kKWOStda',
              'FeGEWR3cSmkIWQOmW40',
              'W7X4W4qnWOhdNG',
              'm8oqW4JdPfFdRmkLWOpdUSouiSo3WOldN8ktW5yVqwb0r8kVW78',
              'W6Oav8kpWR7dLJe',
              'W5minSkXtG',
              'W7VdO8kvWQ1F',
              'e148W4Py',
              'usTeWPm',
              'kMbz',
              'rmkmWRaygCovW6u',
              'WQPxcmkOW7G',
              'cKNcHCo3xmkBW7vWWOC',
              'W6BdImkgWOW',
              'W6BdHmki',
              'wGxdKa',
              'cxDzWQSLWQddNq',
              'fg1p',
              'xYKgW7WiW6dcGve',
              'uI9hWPZcJK/cR0GzWPu',
              'WQZdSY/dQt8',
              'v0CeWQbmymokWOtdICk9W6b1',
              'WQKFWQnNj8oRW63cPG',
              'ueRdQJHUWRS',
              'W4zWatRdVW',
              'bSk6asFdJhW',
              'AXJdPSkVW7W',
              'jSowW5ddTvldQG',
              'WRiqWQDK',
              'WRJcKvZcKCk+W4tdUmoVpSknW7ZdMa',
              'W7ShsSkcWQ7dGqWN',
              'WP5FomktW5tdMwtcNG',
              'W4ldTmok',
              'W7WJWPhcJSozW6RcUSkAqSkmW4FdOYfPkhdcNCoPFmo1W47dMmkgtq',
              'rcycW78',
              'W7ldJfrDcGqAhYFcS8oSW5TU',
              'uSows8o5WQldUc/dVgJdNeO',
              'n3FcHmoYFa',
              'WRFcR0BcRSkj',
              'WQddVb7dMGS',
              '572Q5QgeD8ohECoAWQa',
              'agTpWOJcT2fItCkICmkeWO0',
              'luDxW5zsWPFcL3rTW5LpDSoHv1uO',
              'yYZdUMxcSmofWQLVW7tcHbe',
              'tmokxmoWWPG',
              'WOBdRsDHE8k4W5e',
              '57215QcxWQHVp8kqha',
              'W6WazCkhWRldLG0',
              'i0BcVCogEq',
              'suRdRdP5WQzmtG',
              'W6RdGSoG',
              'WQ/cNvS',
              'wbaNWP4UW6ddGIFdTh7cNG',
              'WPLUraG',
              'kx8YvgOeWOJdTuG',
              'WPr9waZdPCkH',
              'WQ0+W44',
              'W5r1asRdPclcJCoJ',
              'WQvYWOddR8oL',
              'W6xdJCkjWODHW7lcKJ3dSmod',
              'WOHEcmkZW7e',
              'iq8pW4lcMW',
              'zvOUWRzh',
              'WPpcKfiIlq',
              'sKRdTtO',
              'WPHnWOBdMmoN',
              'W5b4kCkWW5LhW6BdKe8',
              'WQGqWRHMlCoTWRa',
              'a0y5W49ikgTp',
              'buGFW41o',
              'WQ7cL1RcHSk5W5NdUmoBpW',
              'W7SatCkAWRJdNau6',
              'xmkcWQmB',
              'WRtcMKKuprK3',
              'WR00W5rrqYJcGSkgzM88F8k+CG',
              'xcvhWOlcHMdcOfKo',
              'WR4NWPZcPCoh',
              'WRaqWRnKoSoQ',
              'WQ7dNYxdLq',
              'WPhcQ8kkW7NcJwJcTW',
              'DYNdO2q',
              'W5monSktAIP0W54',
              'j0naW5LeWQZcQx9IW69g',
              'WRaEWQTLbCo8W67cV8o8WQH0Fa',
              'W7TFW67cVSkabWDXdwVdLG',
              'WQJdHcNdTqe',
              'l8k+pSkdW47dVuK',
              'awyCW7Pw',
              'WRi6W4naudi',
              'yY7dR2e',
              's3/dL8kTW7q',
              'WOZdKG3dQrS',
              'sbSJWP4S',
              'DbRdP8kWW4pcVbWAWQ06WORcRmo5',
              'i8kuaSkiW4G',
              'tsvDWPFcK2ZcLa',
              'WP5Foa',
              'W6ddJ8kvWO9NW6BcKdW',
              'WOycW6a',
              'CX/dOvxcTW',
              'autcK8oLySkb',
              'W7Sau8kx',
              'W6DUW6CmWPFdHmkbxCkrW6zdWRZdMCoe',
              'WQZcOZbmva',
              'WR8qWQDKoSo4',
              'W7NdJSkDWO1mW7xcJIFdUmouWP3cK8kgWQRcOa',
              'nSk+omkbW5NdObJdPa',
              'WODddSkEW4NdHa',
              'lSoxW5xdSLldVa',
              'W78ZgCoJWO7cQKZcJCoy',
              'WPhcJHLkFceoyCkPhq',
              'WQSRW55evIq',
              'WOP6WPxdOW',
              'vKZdImkTW7GpCSo5W5HXWOG',
              'W7ZdN0vzdaG+hW',
              '57275Qg7xSkTv8onW50',
              'WOv6WOtdVSomabfeWRi',
              'j8oDW4FdVL3dQSkhWOddO8odfq',
              'ws8gW6O',
              'W65AW6ZcUCkhbY1Thq',
              'WRxdGYxdOXG',
              'W4ejWPJcJL4fW5D5',
              'WRBcNeK0pW42WQ7cKrSPWOulWQKaW7LZ',
              'WPLueCk2W4G',
              'W7JdHmksWOnHW5lcNdVdUmoc',
              'lSozW5RdSM3dOmkXWPVdVG',
              'W5hdTmouWRZdItBdRaK',
              'n8k+nCkbW5NdUG',
              'WR/cT2eGcq',
              'WPuEWOFdU1G',
              'uHyOWPu7W43dHqNdNq',
              'W5ylWOxcNfKfW45Y',
              'kmkVimknW58',
              'bee9W6zap2neD8kd',
              'AKCEWQxcTa',
              'EJNcLSonW6G9AWe',
              'pMPuWPVdJJ/cRf8',
              'ChRdIb5r',
              'WPRcVxaeca',
              'W7ldKL5sgW',
              'arWCW6tcJCkHWQHc',
              'W6LkW6RcMSkAfZzWbNldHNC',
              'W6qqA8oAWOdcKcVdKmoNothcR2lcS8oTtWtcNSo4W5BcHLZcQNXZkWinW69ClwldHCotWOBcJvVcRmotWORdNmkVW67dRXXJW5rozCk8W4rjWPVcV8kzW78ZqcxcTWGYWOTHW7VdUSodW63dSmkmW7ZcSe5Gm8kSWPnqtI0IW4mzqHizWQRcGmkvoq1gDtVdKmoXlcWTWPm+gmkEW5FcHCknhfJdJqVcLmoglSokW4qyW5DnE8kLW4JdHSk5n8oyvSoAWR7cJCorW6pcR8kTamoIWQFdLKdcQCogxZKqW64XyvGtW73dRKW3WPJdVsbfcmoUnfRdN2mJrv3cGK0QW6tcQCkXfSoJDmkXm0zpqqjod8ocW47cQKZcPgKUm1LzWR3cPSoiW47cKmkzj8kxWPDhDKHOD3jBW5urDuRdVMVdJZRcMSkJaCk/WQhdGhadW4NdIdPEWRvJgW',
              'WR0ZW5TlrstcRCkoDLeWDCk+',
              'xSo/Dmo2WPm',
              'jh8UtxKhWO3dVa',
              'WOZcGGPlEgvwn8o9',
              'juDCW5HfWOO',
              'ngqHs38',
              'WOnFl8kFW4ZdGW',
              'WOtdPJni',
              'W73cUXtdQCoz',
              'W6VcOrxdQmo7W6iAW4e',
              'W4n9bJ3dSJNcNSo0',
              'zdpdUexcV8ocWOi',
              'e8k1dIddJa',
              'WP1NWOtdRmoKhqze',
              'EKuwWQ7cO8k3',
              'W5BdVSoDWPZdLaVdOr4',
              'v0FdN8kMW7Cp',
              'WOtdPI1fAmkKW47dPq',
              'W7bpnCkqW6y',
              'W7JcOqJdTCoUW6iBW4ONyguuA8kJW4W',
              'dCk1dsa',
              'WPuGWQ3dNLRcO8kwW4i',
              'nYWqWRLBeYFdHSoRbMT1',
              'W7xcOrtdRmoUW6CCW5uW',
              'wsvBWRpcHMRcPG',
              'l0LxW7HwWPRcSq',
              'mmoBW5tdUvS',
              'WQmQWPZcGCoDW7ZcUCknxmoq',
              'WORdQdDuAmkIW4pdUG',
              'WQZdLshdLtOYdmkGWOL8W6m',
              'W4aokmkkAZD+W7ZcJ8ofl8kzlCkTm8kti8k7eCkA',
              'pmkWW5KqaIldTe7cJmoH',
              'WRFcPemllW',
              'W4f3atFdOW',
              'W5RdNSojWR3dSG',
              'oxZdQghcVCokWO11W7lcNrVcP8okd8k6oN8',
              'W7ZdJmkBW4zEW7hcNJVdSSocW6ddLmkyWQhcTa',
              'W4nLoCk2',
              'fhbzWO7cVxXZtSk1ECkqWOJcTIW',
              'BXldOCkHW4FdLa',
              'auO0',
              'W4ifiq',
              'W7NdJSkDWO1eW7xcKXZdTCorWR/cVCkjWQhcTa',
              'dw9BW5FcQhDUzSk/ASoaW5pcScJcMG',
              'WR8EWRP4',
              'wsqoW7yc',
              'CHHyWOlcIa',
              'cSk5b2RdTNXIWRxdK2JcI8kNW5C8W5Ou',
              'u03dMG',
              'lNmVvW',
              'wmosxmo2WRtdGXhdT2FdQKpdK1jnW51W',
              'cgnEWP3cTebIzmk0ESkdWPJcQa',
              'x8osq8o4WQpdJa',
              'qZqQW74oW6y',
              'vh9JW7esEw7cK8kmbNfMW6DDq8ovWQxcHmo2W5XPWQNdMCkBWOBdG8k+cSkdW4pdN17cMSkeW7CtWOPsWQxdUsldRmktW74fWQJcVb7dM8kouhlcQCkChSk2wSkjWRxdKZVcVJSMW7ecWOJcLtdcUs4QzSoxxLVdKX8Gkt7cHrVdTZ0bzqixF8kkn8kpA8kRWP0mcCkSW5WgaqjYymoxWRWGWPXDE0xdHCoxW4dcUCk4W6NdJ1BdImkkwKjpfmkNW7FcSW0JFbvxW4pdGMXmpxNcMSoCWPpcSCofW7pdJNpdIbPlbrXEW4xdIZxcICobW48zW6a5pbOIo2tcLmkPW601W78VW7NdPdCGb2HuW4rXW4HdW4S8AmoiW5NcJaNdQgnMW7jpcCont8oWWPNdVaOVW5dcMGbKW7uwrmkoE8oZFmkXgSkQhSkhnWpdH2VcMCkVx8kxW7D2W6NdM8kwW4JdGConW6xdPs7dUaVcHsTEW7vpcmkPWPxdPb1pWQjKeSkwW5ddKCofWOGscIVdHu7cMmofWRfJWQZcU8kFWOy3EtXRW4FcR3PMc1OvWQPUWRyEzfZcIvVdT3ZcP2XVj3PfiXVcVeSYW61LwcP0WOa+W4NdNtC3WQT6EmoVkhO8f1TmWRxcM8ouD8kWWOVdJ8ouWQ8tkWbSgqNdQ8oOlLHoWQ4OwIOLqh3dH8kmgCkubYvktG',
              'W69lW63cQmk+',
              'EHRdKSkWW4K',
              'vIDoW5NcSwZcRuGtWPu+W4VcQSkzrCoU',
              'tbKYWPu7',
              'DdFcKSor',
              'W4JdISoWWRZdGW',
              'BbtdG8k8W5FcIX0',
              'W5b8W4ehWQy',
              'WRCJWP/cHSoxW7/cLCkqrmonW5K',
              'WQBcH1O/lXWWWRpcKG',
              'EeaF',
              'owftWPNdHd/cPf4',
              'xcvzWO8',
              'CfC2WQ7cOSk+',
              'ydddPw/cS8oIWOvQW63cHWBcPSkc',
              'WQzIWQ/dN8or',
              'W5/dTmoEWQ3dLYO',
              'BbRdT8kYW4RcMG',
              'mmkNW5iB',
              'WQ/cNvVcP8kJW5JdSmoRlCkpW6ZdMHy',
              'WRNcLuBcKSkIW57dQ8on',
              'WQLNiSksW4e',
              'vH0OWPOGW4pdSdddTgi',
              'WRaPWOFcM8ovW7pcUmkAq8oRW4JdUwLTnq',
              'tYvaWPJcK3O',
              'WO/cLHOImfuGWOVdS8oyWQi',
              'hZibW4/cNa',
              'BtldNwNcSmofWOvWW4/cJqBcQSkkhW',
              'WPeNWR/dGa',
              'tq4MW7yx',
              'W6yYhSoVWPtcSeRcLW',
              'WPhcJHLkFa',
              'W4tcVNyjwCoZW6q',
              'W4f3gZddOYlcLmoO',
              'cbGpW5xcKmkAWQHk',
              'amk7dJhdKNzTWRi',
              'zJxdUxdcSCosWO9aW6/cHWdcSW',
              'W6FdJSkjWO5GW7RcMdZdRG',
              'W7SQdmkvAG',
              'WOaXWQldJ34',
              'W5XXdrRdUc7cNCoGC1aEW4LUgG',
              'WO/cGHXdDxO',
              'W7KOuCk0WPG',
              'zZFcKCobW649zqm',
              'dxvyWO/cQW',
              'dHehW67cKSklWQzdDSkCw8oHba',
              'WRlcNuRcHCkIW6ldRComlCkwW6W',
              'WONcJr0umfqKWOW',
              'WOpcIrX2DMbroq',
              'bfBcUCoOECk4W7jGWRm2lCkP',
              'vSkdWRi+hW',
              '57+k5QoYv8k2WR/dLeq',
              'lCkRgmkHW4O',
              'WRhcMvVcHmkJW57dVmoe',
              'xeZdM8kGW6G/qCoYW4XRWPK',
              'fmknW5SCpG',
              'W4udWOxcLw4',
              'WR/cML80maK',
              'W5nNhCkeW50',
              'WOaPw2dcRNZdJSoIxLegW5zf',
              'kJCXWRrbmshdN8oi',
              'W7tdK1Hi',
              '57Y15Qc+dCopW6HnnG',
              'W6S1WO3cV1m',
            ];
          })()
        );
      })()
    );
  })();
  _0x3381 = function () {
    return _0x172e6e;
  };
  return _0x3381();
}
export default class Veiwer {
  constructor(_0x2b41c7, _0xa3f18f) {
    const _0x64a91e = _0x124220,
      _0xb3e240 = {
        JTSPL: function (_0x1cadcc, _0x238241) {
          return _0x1cadcc / _0x238241;
        },
        oftMc: '#00486E',
        KzNWI: '#121212',
        aHLYz: function (_0x455a67, _0xe476a4) {
          return _0x455a67 > _0xe476a4;
        },
        eBOLh: _0x64a91e(0x689, 'zYl*'),
        KWRao: _0x64a91e(0x2af, 'rmSV'),
        FVoJL: function (_0x21ed0c, _0x570eb7) {
          return _0x21ed0c !== _0x570eb7;
        },
        AmfiZ: _0x64a91e(0x663, 'UchA'),
        hsqYv: function (_0xdce38d, _0x5d53ea) {
          return _0xdce38d(_0x5d53ea);
        },
        tLKSg: _0x64a91e(0x242, 'i#24'),
        qhcvB: function (_0x2462a2, _0x462cef) {
          return _0x2462a2 > _0x462cef;
        },
        Grprq: function (_0x3762ba, _0x2c6779) {
          return _0x3762ba < _0x2c6779;
        },
        nCRbm: 'laRoI',
        daLPJ: _0x64a91e(0x598, 'u[Qt'),
        Yedki: function (_0x5ee9f5, _0x11977c) {
          return _0x5ee9f5 * _0x11977c;
        },
        likpy: _0x64a91e(0x5d4, 'ZXoK'),
        eUriL: 'points',
      };
    (this[_0x64a91e(0x410, 'u[Qt')] =
      document[_0x64a91e(0x35c, 'rmSV')](_0x2b41c7)),
      (this['event'] = _0xa3f18f),
      (this[_0x64a91e(0x21e, 'Aj*g')] =
        this['container'][_0x64a91e(0x3d6, 'DX0Q')]),
      (this[_0x64a91e(0x67c, 'Kk69')] =
        this[_0x64a91e(0x625, 'ZWj!')][_0x64a91e(0x379, 'a]m&')]),
      window[_0x64a91e(0x720, 'ZmW^')](
        _0xb3e240[_0x64a91e(0x443, 'ZmW^')],
        this[_0x64a91e(0x489, '9@W9')][_0x64a91e(0x580, 'ZmW^')](this),
        ![]
      ),
      this['init'](),
      (this[_0x64a91e(0x6d1, '7%kX')] = !0x0),
      (this['streamlines'] = []),
      (this[_0x64a91e(0x53b, '9r9(')] = []),
      (this[_0x64a91e(0x7f3, '!vuU')] = []),
      (this['labelImgs'] = []),
      (this[_0x64a91e(0x645, 'cwps')] = !!0x0),
      (this[_0x64a91e(0x64f, 'u[Qt')] = 0x0),
      (this['devicesNames'] = []),
      (this[_0x64a91e(0x74a, 'wFk%')] = new Group()),
      (this[_0x64a91e(0x824, '@cxu')][_0x64a91e(0x58e, 'a]m&')] =
        _0xb3e240[_0x64a91e(0x444, 'UchA')]),
      this[_0x64a91e(0x3aa, 'tNI4')]['add'](this['points']);
    const _0x22e425 = () => {
      const _0x4a843f = _0x64a91e,
        _0x166bac = {
          TOleL: _0xb3e240['oftMc'],
          hXPuW: _0x4a843f(0x5ea, '!ncs'),
          lfIAj: _0xb3e240[_0x4a843f(0x4cd, 'DX0Q')],
          mTjGK: function (_0x7950b, _0x24cb30) {
            const _0x4d7d58 = _0x4a843f;
            return _0xb3e240[_0x4d7d58(0x1cc, 'u9nJ')](_0x7950b, _0x24cb30);
          },
          jAFqP: _0xb3e240[_0x4a843f(0x47f, '&A2z')],
          XExrt: _0xb3e240[_0x4a843f(0x709, 'uUNF')],
        };
      if (
        _0xb3e240['FVoJL'](
          _0xb3e240[_0x4a843f(0x3e0, 'VCBb')],
          _0xb3e240[_0x4a843f(0x2bd, 'a]m&')]
        )
      ) {
        if (!this[_0x4a843f(0x813, '@cxu')]) return;
        let _0x53c35b = this[_0x4a843f(0x589, 'zYl*')](
          0xa,
          0.1,
          0.5,
          new _0x21837d(0x0, 0x1, 0x1),
          0.2
        );
        _0x53c35b['position'][_0x4a843f(0x44b, '!ncs')](0x17, -0x2, -0x20),
          _0x53c35b[_0x4a843f(0x5de, 'rAev')](
            _0xb3e240[_0x4a843f(0x230, 'a]m&')](-_0x299fa2['PI'], 0x2)
          ),
          _0x53c35b[_0x4a843f(0x66d, 'JVJG')][_0x4a843f(0x233, 'u9nJ')](
            _0x4edd06
          ),
          this[_0x4a843f(0x505, 'uUNF')][_0x4a843f(0x7b5, 'niup')](_0x53c35b);
      } else {
        _0xb3e240['hsqYv'](requestAnimationFrame, _0x22e425),
          TWEEN[_0x4a843f(0x554, 'ks5y')](),
          console['log'](
            this[_0x4a843f(0x7da, '2djq')]['position'],
            this[_0x4a843f(0x495, 'uKRM')][_0x4a843f(0x56d, '9@W9')]
          ),
          this['labelRenderer']['render'](
            this[_0x4a843f(0x280, 'LMyx')],
            this[_0x4a843f(0x36f, 'ks5y')]
          ),
          this['renderBloom'](),
          this[_0x4a843f(0x447, 'rccG')]['render']();
        if (this[_0x4a843f(0x6a3, 'VCBb')])
          this[_0x4a843f(0x21d, 'niup')]['material'][_0x4a843f(0x5a8, ')bs3')][
            _0xb3e240[_0x4a843f(0x65b, 'ZXoK')]
          ]['value'] += _0xb3e240[_0x4a843f(0x79e, 'u9nJ')](0x1, 0x3c);
        if (
          _0xb3e240['qhcvB'](this['streamlines'][_0x4a843f(0x26f, 'rmSV')], 0x0)
        )
          for (
            let _0x3e83c4 = 0x0;
            _0xb3e240[_0x4a843f(0x4b1, 'uKRM')](
              _0x3e83c4,
              this[_0x4a843f(0x50c, 'JVJG')][_0x4a843f(0x3db, 'RyL6')]
            );
            _0x3e83c4++
          ) {
            if (
              _0xb3e240[_0x4a843f(0x278, 'wFk%')] !==
              _0xb3e240[_0x4a843f(0x38f, 'UchA')]
            ) {
              const _0x3c1eba = this[_0x4a843f(0x7a9, ')bs3')][_0x3e83c4];
              if (
                _0xb3e240[_0x4a843f(0x631, 'a]m&')](
                  _0x3c1eba[_0x4a843f(0x381, 'u[Qt')]['y'],
                  0x28
                )
              )
                _0x3c1eba[_0x4a843f(0x28f, 'zYl*')]['y'] = -0x5;
              _0x3c1eba[_0x4a843f(0x519, '$cvL')]['y'] += _0xb3e240[
                _0x4a843f(0x428, 'ZWj!')
              ](0.02, _0x3c1eba[_0x4a843f(0x279, 'rAev')]);
            } else {
              const _0x5a90cd = '1|2|5|4|3|0'[_0x4a843f(0x833, '9r9(')]('|');
              let _0x30cf3d = 0x0;
              while (!![]) {
                switch (_0x5a90cd[_0x30cf3d++]) {
                  case '0':
                    _0x1a1d8f['layers']['enable'](_0x401830);
                    continue;
                  case '1':
                    _0x3cb351[_0x4a843f(0x792, 'rmSV')]['color'] =
                      new _0x2d607f(_0x166bac['TOleL']);
                    continue;
                  case '2':
                    _0x1c52a0[_0x4a843f(0x3df, 'ZTP3')]['emissive'] =
                      new _0x3e8184(_0x166bac[_0x4a843f(0x39a, 'zYl*')]);
                    continue;
                  case '3':
                    _0x4357c0[_0x4a843f(0x3df, 'ZTP3')][
                      _0x4a843f(0x355, 'Yv(m')
                    ] = !0x0;
                    continue;
                  case '4':
                    _0x35fc53['material'][_0x4a843f(0x48b, 'Jare')] = 0.72;
                    continue;
                  case '5':
                    _0x425c5d[_0x4a843f(0x2a0, 'tNI4')]['roughness'] = 0.4;
                    continue;
                }
                break;
              }
            }
          }
        if (this[_0x4a843f(0x650, '!ncs')]) {
          this['ship'][_0x4a843f(0x7a1, 'v]cc')]['x'] += 0.04;
          if (
            this[_0x4a843f(0x21c, 'Aj*g')][_0x4a843f(0x465, '@cxu')]['x'] > 0x3c
          )
            this[_0x4a843f(0x837, 'wFk%')][_0x4a843f(0x4be, 'jZCM')]['x'] = 3.9;
        }
        _0xb3e240['qhcvB'](this[_0x4a843f(0x7e4, 'ZWj!')]['length'], 0x0) &&
          this['lines']['forEach']((_0x2646d3) => {
            const _0x1f53f0 = _0x4a843f;
            if (
              _0x166bac[_0x1f53f0(0x3f0, 'ks5y')](
                _0x2646d3[_0x1f53f0(0x72d, 'wFk%')][_0x1f53f0(0x6cf, 'Jare')][
                  _0x1f53f0(0x2d2, 'JVJG')
                ]['value'],
                0x1
              )
            ) {
              if (_0x166bac[_0x1f53f0(0x832, 'a]m&')] !== _0x166bac['XExrt'])
                _0x2646d3[_0x1f53f0(0x718, 'Pw)Z')]['uniforms'][
                  _0x1f53f0(0x50b, '&A2z')
                ][_0x1f53f0(0x29a, 'ZmW^')] = 0x0;
              else {
                const _0x15ef47 = _0x1f53f0(0x31a, 'Ta41')[
                  _0x1f53f0(0x2a8, 'UchA')
                ]('|');
                let _0x2c57dc = 0x0;
                while (!![]) {
                  switch (_0x15ef47[_0x2c57dc++]) {
                    case '0':
                      _0x5045ea[_0x1f53f0(0x4e9, 'qNG@')][
                        _0x1f53f0(0x4cb, '2djq')
                      ] = 0.3;
                      continue;
                    case '1':
                      _0x3c0707['material'][_0x1f53f0(0x803, 'Aj*g')] = !0x0;
                      continue;
                    case '2':
                      _0x1bf7f6['layers'][_0x1f53f0(0x5d9, 'Jare')](_0x21f6d6);
                      continue;
                    case '3':
                      _0x59515f['material'][_0x1f53f0(0x4db, 'Kk69')] = 0.5;
                      continue;
                    case '4':
                      _0x38cf54[_0x1f53f0(0x60b, 'UchA')]['emissive'] =
                        new _0x12d9f2(_0x166bac[_0x1f53f0(0x32d, 'ZXoK')]);
                      continue;
                  }
                  break;
                }
              }
            }
            _0x2646d3[_0x1f53f0(0x352, 'rAev')][_0x1f53f0(0x5ec, '!ncs')][
              'time'
            ]['value'] += 0.001;
          }),
          this[_0x4a843f(0x45f, 'DX0Q')][_0x4a843f(0x2f5, 'niup')] > 0x0 &&
            this[_0x4a843f(0x36a, '$cvL')][_0x4a843f(0x682, 'JVJG')](
              (_0x5996e6, _0x3f48e9) => {
                const _0x3b18e9 = _0x4a843f;
                _0x5996e6[_0x3b18e9(0x1c7, 'DX0Q')]['rotation'] =
                  -this[_0x3b18e9(0x1df, 'Ta41')]['getAzimuthalAngle']() +
                  Math['PI'] / 0x2;
              }
            );
      }
    };
    _0x22e425();
  }
  ['init']() {
    const _0x5cb81a = _0x124220,
      _0x37efd6 = {
        GvgKO: _0x5cb81a(0x717, 'i#24'),
        xMMrL: function (_0xd2a411, _0x399c28) {
          return _0xd2a411 !== _0x399c28;
        },
        bNsfe: _0x5cb81a(0x2ba, 'cwps'),
        kWiOX: function (_0x4cf24d, _0x29d6cc) {
          return _0x4cf24d > _0x29d6cc;
        },
        kzdQF: function (_0x562dec, _0x176465) {
          return _0x562dec !== _0x176465;
        },
        mTmCw: _0x5cb81a(0x412, '9r9('),
        LnqaN: _0x5cb81a(0x4f7, 'Jare'),
        OtDyg: _0x5cb81a(0x3f7, 'niup'),
        ryNKX: 'baseTexture',
        NKFxs: _0x5cb81a(0x713, 'ZXoK'),
        Lghuh: function (_0x1b9493, _0x31b069) {
          return _0x1b9493 * _0x31b069;
        },
        DiICP: _0x5cb81a(0x2f1, 'ks5y'),
        cWyWF: _0x5cb81a(0x5fb, 'tNI4'),
        hxHuR: 'labels',
        jfXKZ: _0x5cb81a(0x675, 'LMyx'),
        aanoE: _0x5cb81a(0x78f, 'tNI4'),
      };
    (this[_0x5cb81a(0x79a, ')bs3')] = new Scene()),
      (this['ambientlLight'] = new AmbientLight(0x537087, 1.5)),
      this[_0x5cb81a(0x563, '!ncs')][_0x5cb81a(0x7e6, 'tNI4')](
        this[_0x5cb81a(0x7c0, 'G#Vj')]
      ),
      (this['directionalLight'] = new DirectionalLight(0x7de5e5, 1.5)),
      this['directionalLight']['position'][_0x5cb81a(0x7c2, ')bs3')](
        0x0,
        0x12c,
        0x514
      ),
      this['scene']['add'](this[_0x5cb81a(0x4f9, 'G#Vj')]),
      (this[_0x5cb81a(0x654, 'zYl*')] = new DirectionalLight(0xc2f6f4, 0.1)),
      this[_0x5cb81a(0x542, 'S7tx')][_0x5cb81a(0x30b, '!ncs')][
        _0x5cb81a(0x767, 'v]cc')
      ](0x0, 0x12c, 0x0),
      this[_0x5cb81a(0x636, 'VCBb')]['add'](this[_0x5cb81a(0x220, '&A2z')]),
      (this[_0x5cb81a(0x36f, 'ks5y')] = new PerspectiveCamera(
        0x1e,
        this[_0x5cb81a(0x231, '&A2z')] / this[_0x5cb81a(0x7cd, 'ZmW^')],
        0x1,
        0x3e8
      ));
    const _0x5089b3 = {
      precision: _0x37efd6[_0x5cb81a(0x462, 'ZmW^')],
      antialias: !0x0,
      logarithmicDepthBuffer: !!0x0,
      depth: !0x0,
      preserveDrawingBuffer: !!0x0,
      alpha: !0x0,
    };
    (this[_0x5cb81a(0x281, 'uUNF')] = new WebGLRenderer(_0x5089b3)),
      this[_0x5cb81a(0x572, 'H]sX')][_0x5cb81a(0x2c2, 'ks5y')](
        this[_0x5cb81a(0x754, 'LMyx')],
        this[_0x5cb81a(0x7a6, 'ZWj!')]
      ),
      this[_0x5cb81a(0x673, '9@W9')][_0x5cb81a(0x526, 'u9nJ')](
        window[_0x5cb81a(0x1ed, 'VCBb')]
      ),
      this[_0x5cb81a(0x673, '9@W9')]['setClearColor'](0x0, 0x1),
      (this['renderer'][_0x5cb81a(0x40b, 'u[Qt')] = ACESFilmicToneMapping),
      (this['renderer'][_0x5cb81a(0x7fc, 'wFk%')] = Math[
        _0x5cb81a(0x2b1, 'Aj*g')
      ](params[_0x5cb81a(0x34d, '9r9(')], 0x4)),
      (this[_0x5cb81a(0x855, 'Ta41')]['outputEncoding'] = sRGBEncoding),
      (this[_0x5cb81a(0x545, 'JVJG')][_0x5cb81a(0x5dd, 'u[Qt')] = !0x0);
    const _0x218bc2 = new RenderPass(this['scene'], this['camera']),
      _0x24c4f8 = new UnrealBloomPass(
        new Vector2(
          this[_0x5cb81a(0x763, '$cvL')],
          this[_0x5cb81a(0x3ce, 'Yv(m')]
        ),
        1.5,
        0.4,
        0.85
      );
    (_0x24c4f8[_0x5cb81a(0x6dc, 'RyL6')] = params[_0x5cb81a(0x454, '9@W9')]),
      (_0x24c4f8['strength'] = params[_0x5cb81a(0x39d, 'Ta41')]),
      (_0x24c4f8['radius'] = params[_0x5cb81a(0x3c3, '2djq')]),
      (this[_0x5cb81a(0x4ac, 'ks5y')] = new EffectComposer(
        this[_0x5cb81a(0x82d, 'o7f1')]
      )),
      (this[_0x5cb81a(0x7ea, 'ZTP3')][_0x5cb81a(0x640, 'rccG')] = ![]),
      this[_0x5cb81a(0x270, 'VCBb')][_0x5cb81a(0x357, 'v]cc')](_0x218bc2),
      this[_0x5cb81a(0x6ae, 'Pw)Z')][_0x5cb81a(0x7c7, 'niup')](_0x24c4f8);
    const _0x82e9f7 =
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x0a\x09\x09\x09void\x20main()\x20{\x0a\x0a\x09\x09\x09\x09vUv\x20=\x20uv;\x0a\x0a\x09\x09\x09\x09gl_Position\x20=\x20projectionMatrix\x20*\x20modelViewMatrix\x20*\x20vec4(\x20position,\x201.0\x20);\x0a\x0a\x09\x09\x09}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
      _0x5acd55 = _0x5cb81a(0x668, 'cwps'),
      _0xdd135e = new ShaderPass(
        new ShaderMaterial({
          uniforms: {
            baseTexture: { value: null },
            bloomTexture: {
              value:
                this[_0x5cb81a(0x1fa, 'H]sX')][_0x5cb81a(0x3c8, 'uKRM')][
                  'texture'
                ],
            },
          },
          vertexShader: _0x82e9f7,
          fragmentShader: _0x5acd55,
          defines: {},
        }),
        _0x37efd6['ryNKX']
      );
    (_0xdd135e[_0x5cb81a(0x80a, 'Aj*g')] = !![]),
      (this[_0x5cb81a(0x447, 'rccG')] = new EffectComposer(
        this[_0x5cb81a(0x6ff, 'jZCM')]
      )),
      this[_0x5cb81a(0x3d9, 'Jare')][_0x5cb81a(0x84a, 'rmSV')](_0x218bc2),
      this[_0x5cb81a(0x509, 'Yv(m')][_0x5cb81a(0x607, '@cxu')](_0xdd135e),
      (this[_0x5cb81a(0x55b, 'o7f1')] = new ShaderPass(FXAAShader));
    const _0x4690f3 = this['renderer'][_0x5cb81a(0x41c, 'ZmW^')]();
    (this['fxaaPass'][_0x5cb81a(0x64c, '$cvL')][_0x5cb81a(0x5f0, '9r9(')][
      _0x37efd6[_0x5cb81a(0x3a7, '@cxu')]
    ][_0x5cb81a(0x2cf, '$cvL')]['x'] =
      0x1 /
      _0x37efd6[_0x5cb81a(0x4a1, 'jZCM')](
        this[_0x5cb81a(0x5cf, 'o7f1')],
        _0x4690f3
      )),
      (this[_0x5cb81a(0x247, 'DX0Q')][_0x5cb81a(0x352, 'rAev')]['uniforms'][
        _0x37efd6['NKFxs']
      ][_0x5cb81a(0x7b6, ')bs3')]['y'] =
        0x1 / _0x37efd6['Lghuh'](this[_0x5cb81a(0x2d4, 'cwps')], _0x4690f3)),
      this[_0x5cb81a(0x201, 'wFk%')][_0x5cb81a(0x4a3, '7%kX')](
        this['fxaaPass']
      ),
      this[_0x5cb81a(0x7d9, 'RyL6')][_0x5cb81a(0x2ca, 'niup')](
        this[_0x5cb81a(0x480, 'VCBb')][_0x5cb81a(0x798, 'jZCM')]
      ),
      (this['labelRenderer'] = new CSS2DRenderer()),
      this['labelRenderer'][_0x5cb81a(0x732, 'niup')](
        this['containerWidth'],
        this[_0x5cb81a(0x7c1, 'a]m&')]
      ),
      (this[_0x5cb81a(0x69c, 'o7f1')][_0x5cb81a(0x798, 'jZCM')][
        _0x5cb81a(0x58a, 'v]cc')
      ][_0x5cb81a(0x30b, '!ncs')] = _0x37efd6[_0x5cb81a(0x2a4, ')bs3')]),
      (this[_0x5cb81a(0x334, 'a]m&')][_0x5cb81a(0x71b, 'H]sX')]['style'][
        _0x5cb81a(0x2df, 'jZCM')
      ] = _0x5cb81a(0x405, '7%kX')),
      this[_0x5cb81a(0x5cb, 'rAev')][_0x5cb81a(0x605, 'Pw)Z')](
        this[_0x5cb81a(0x51c, 'uUNF')][_0x5cb81a(0x65f, 'a]m&')]
      ),
      (this['controls'] = new OrbitControls(
        this[_0x5cb81a(0x2b9, 'Aj*g')],
        this['labelRenderer'][_0x5cb81a(0x588, 'RyL6')]
      )),
      (this[_0x5cb81a(0x5c7, 'u9nJ')][_0x5cb81a(0x20c, 'ks5y')] =
        Math['PI'] * 0.3),
      (this['controls'][_0x5cb81a(0x785, '$cvL')] = 0x5),
      (this[_0x5cb81a(0x284, '!vuU')][_0x5cb81a(0x807, 'uUNF')] = 0xfa),
      this[_0x5cb81a(0x4a9, 'RyL6')]['position'][_0x5cb81a(0x2f9, 'LMyx')](
        0x52,
        0x78,
        0x6c
      ),
      this[_0x5cb81a(0x40a, 'rmSV')]['target'][_0x5cb81a(0x4fb, 'Pw)Z')](
        -0x3,
        -0x9,
        -0x8
      ),
      (this[_0x5cb81a(0x57f, '9@W9')][_0x5cb81a(0x5a7, 'JVJG')] = new Vector3()[
        _0x5cb81a(0x2cd, '9@W9')
      ](this[_0x5cb81a(0x4c4, 'u[Qt')]['position'])),
      (this[_0x5cb81a(0x7b0, 'Aj*g')][_0x5cb81a(0x630, 'ZmW^')] = new Vector3()[
        _0x5cb81a(0x41d, 'ks5y')
      ](this[_0x5cb81a(0x7d0, 'tNI4')][_0x5cb81a(0x6b1, 'u9nJ')])),
      this['controls']['update'](),
      this[_0x5cb81a(0x222, 'RyL6')][_0x5cb81a(0x7cc, 'o7f1')](
        _0x5cb81a(0x5b6, 'u9nJ'),
        (_0x37421c) => {
          const _0x15b93b = _0x5cb81a;
          if (
            _0x37efd6['xMMrL'](_0x15b93b(0x42f, 'cwps'), _0x37efd6['bNsfe'])
          ) {
            const _0x2e5fbc = new Vector3()['copy'](
              this[_0x15b93b(0x730, 'niup')][_0x15b93b(0x374, 'S7tx')]
            );
            if (
              _0x37efd6[_0x15b93b(0x600, '!vuU')](
                _0x2e5fbc[_0x15b93b(0x3be, 'UchA')](),
                0x3c
              )
            ) {
              if (
                _0x37efd6['kzdQF'](_0x37efd6[_0x15b93b(0x3ef, '&A2z')], 'cIuRd')
              )
                this['camera'][_0x15b93b(0x2de, 'VCBb')][
                  _0x15b93b(0x330, 'VCBb')
                ](this['camera']['position1']),
                  this[_0x15b93b(0x1b8, 'DX0Q')]['target'][
                    _0x15b93b(0x214, 'RyL6')
                  ](this[_0x15b93b(0x66b, 'H]sX')][_0x15b93b(0x3dd, 'G#Vj')]);
              else {
                (this['isShiJiuGang'] = !this[_0x15b93b(0x82a, 'rccG')]),
                  (this[_0x15b93b(0x208, '!vuU')] = null),
                  this[_0x15b93b(0x5f7, '!vuU')](
                    this[_0x15b93b(0x66f, 'cwps')]
                  );
                this[_0x15b93b(0x6b2, 'v]cc')] &&
                  (this[_0x15b93b(0x587, 'S7tx')](this['area']),
                  (this[_0x15b93b(0x68e, 'rmSV')] = null));
                if (!this[_0x15b93b(0x813, '@cxu')]) {
                  const _0x5300b7 = _0x15b93b(0x5a2, '!ncs')[
                    _0x15b93b(0x5d0, 'wFk%')
                  ]('|');
                  let _0xa6ff8a = 0x0;
                  while (!![]) {
                    switch (_0x5300b7[_0xa6ff8a++]) {
                      case '0':
                        this[_0x15b93b(0x67a, '@cxu')][
                          _0x15b93b(0x736, ')bs3')
                        ] = new _0x12d6bc()[_0x15b93b(0x794, '!ncs')](
                          this[_0x15b93b(0x621, 'rAev')][
                            _0x15b93b(0x5be, 'qNG@')
                          ]
                        );
                        continue;
                      case '1':
                        this[_0x15b93b(0x7ee, 'S7tx')]['position'][
                          _0x15b93b(0x340, 'H]sX')
                        ](-32.91, 135.76, 157.6);
                        continue;
                      case '2':
                        this[_0x15b93b(0x250, 'cwps')][
                          _0x15b93b(0x73e, 'Ta41')
                        ]();
                        continue;
                      case '3':
                        this[_0x15b93b(0x31b, 'rAev')]();
                        continue;
                      case '4':
                        this[_0x15b93b(0x221, 'ZXoK')][
                          _0x15b93b(0x5cc, 'u[Qt')
                        ] = new _0x2d0ee7()[_0x15b93b(0x805, 'i#24')](
                          this['camera'][_0x15b93b(0x7a1, 'v]cc')]
                        );
                        continue;
                      case '5':
                        this[_0x15b93b(0x4e3, 'wFk%')][
                          _0x15b93b(0x374, 'S7tx')
                        ]['set'](-54.01, -6.7, 15.85);
                        continue;
                    }
                    break;
                  }
                } else {
                  const _0x5dd254 = _0x37efd6['GvgKO']['split']('|');
                  let _0x17d380 = 0x0;
                  while (!![]) {
                    switch (_0x5dd254[_0x17d380++]) {
                      case '0':
                        this[_0x15b93b(0x6ea, 'rccG')][
                          _0x15b93b(0x21b, 'Jare')
                        ]();
                        continue;
                      case '1':
                        this[_0x15b93b(0x53c, 'Yv(m')][
                          _0x15b93b(0x75b, 'G#Vj')
                        ][_0x15b93b(0x2fc, '9@W9')](0x52, 0x78, 0x6c);
                        continue;
                      case '2':
                        this[_0x15b93b(0x751, 'niup')]['position0'] =
                          new _0x37e764()[_0x15b93b(0x5c4, 'uUNF')](
                            this[_0x15b93b(0x744, 'jZCM')][
                              _0x15b93b(0x4be, 'jZCM')
                            ]
                          );
                        continue;
                      case '3':
                        this['loadModel']();
                        continue;
                      case '4':
                        this[_0x15b93b(0x730, 'niup')]['target0'] =
                          new _0x4f46e2()['copy'](
                            this[_0x15b93b(0x4e8, 'o7f1')]['target']
                          );
                        continue;
                      case '5':
                        this['controls'][_0x15b93b(0x534, 'rAev')][
                          _0x15b93b(0x7ab, 'uUNF')
                        ](-0x3, -0x9, -0x8);
                        continue;
                    }
                    break;
                  }
                }
              }
            } else
              (this[_0x15b93b(0x69d, 'uUNF')]['position1'] = new Vector3()[
                'copy'
              ](this[_0x15b93b(0x642, '9r9(')]['position'])),
                (this[_0x15b93b(0x658, ')bs3')]['target1'] = new Vector3()[
                  _0x15b93b(0x23b, '!vuU')
                ](this['controls'][_0x15b93b(0x392, 'uUNF')]));
          } else
            (_0x38fc76['material'][_0x15b93b(0x838, 'DX0Q')] = new _0x4f5408(
              _0x360cb3
            )),
              (_0x3a00ec[_0x15b93b(0x352, 'rAev')][_0x15b93b(0x1d8, 'qNG@')] =
                !0x0);
        }
      ),
      (this['gltfLoader'] = new GLTFLoader());
    const _0x31507b = new DRACOLoader();
    _0x31507b[_0x5cb81a(0x7dd, 'UchA')](_0x37efd6[_0x5cb81a(0x401, 'LMyx')]),
      this[_0x5cb81a(0x3c1, 'ZmW^')][_0x5cb81a(0x1e6, '&A2z')](_0x31507b);
    function _0x36f80a(_0x2b8260) {
      const _0xfceb2a = _0x5cb81a;
      _0x2b8260[_0xfceb2a(0x60b, 'UchA')] &&
        (_0xfceb2a(0x697, 'ZWj!') !== _0x37efd6[_0xfceb2a(0x46d, 'Ta41')]
          ? _0x2b8260[_0xfceb2a(0x7d2, 'Ta41')][_0xfceb2a(0x464, 'niup')]()
          : (_0x2bf338[_0xfceb2a(0x3bd, '7%kX')][_0xfceb2a(0x30e, '&A2z')] =
              -this['controls'][_0xfceb2a(0x857, 'rccG')]() +
              _0x32e7a6['PI'] / 0x2));
    }
    (this['models'] = new Group()),
      this[_0x5cb81a(0x211, '9r9(')][_0x5cb81a(0x248, 'o7f1')](this['models']),
      (this['labels'] = new Group()),
      (this[_0x5cb81a(0x2aa, 'Jare')]['name'] = _0x37efd6['hxHuR']),
      this['scene'][_0x5cb81a(0x502, 'rmSV')](this['labels']),
      (this['panel'] = new Group()),
      (this['panel'][_0x5cb81a(0x67d, 'LMyx')] =
        _0x37efd6[_0x5cb81a(0x7ae, 'o7f1')]),
      this['scene'][_0x5cb81a(0x81b, 'zYl*')](this['panel']),
      (this['raycaster'] = new Raycaster()),
      (this[_0x5cb81a(0x76a, 'Jare')] = new Vector2()),
      this[_0x5cb81a(0x637, 'u9nJ')][_0x5cb81a(0x36e, 'qNG@')][
        _0x5cb81a(0x29b, 'tNI4')
      ](
        _0x37efd6[_0x5cb81a(0x411, 'UchA')],
        this['mouseUp'][_0x5cb81a(0x420, 'rAev')](this),
        !!0x0
      ),
      this['loadModel']();
  }
  ['mouseUp'](_0x6c0e67) {
    const _0x223ebc = _0x124220,
      _0x2c023d = {
        ggidy: function (_0x4b7e80, _0x5a325a) {
          return _0x4b7e80 !== _0x5a325a;
        },
        TWDxH: function (_0xce01ab, _0x805cfd) {
          return _0xce01ab - _0x805cfd;
        },
        eyxGU: function (_0x506fe9, _0x325191) {
          return _0x506fe9 * _0x325191;
        },
        UVDEn: function (_0x37f4af, _0x5363f4) {
          return _0x37f4af + _0x5363f4;
        },
        updjW: function (_0x412fce, _0x10b040) {
          return _0x412fce(_0x10b040);
        },
        OyODJ: function (_0x14621b, _0x207614) {
          return _0x14621b(_0x207614);
        },
      };
    _0x6c0e67[_0x223ebc(0x68f, 'o7f1')]();
    if (
      _0x2c023d[_0x223ebc(0x3ca, 'ZXoK')](
        _0x6c0e67[_0x223ebc(0x5f2, '9@W9')],
        0x1
      )
    )
      return;
    (this[_0x223ebc(0x314, 'uUNF')]['x'] = _0x2c023d['TWDxH'](
      _0x2c023d[_0x223ebc(0x406, '@cxu')](
        _0x6c0e67['clientX'] / this['containerWidth'],
        0x2
      ),
      0x1
    )),
      (this['mouse']['y'] = _0x2c023d[_0x223ebc(0x820, 'G#Vj')](
        _0x2c023d['eyxGU'](
          -(_0x6c0e67['clientY'] / this[_0x223ebc(0x76e, 'ZXoK')]),
          0x2
        ),
        0x1
      )),
      this[_0x223ebc(0x575, 'RyL6')][_0x223ebc(0x6e3, '2djq')](
        this['mouse'],
        this['camera']
      );
    const _0x2a2976 = this[_0x223ebc(0x32a, 'ZXoK')]['intersectObjects'](
      this[_0x223ebc(0x5c1, '9sEE')][_0x223ebc(0x61e, 'a]m&')]
    );
    if (_0x2a2976['length'] < 0x1) return;
    const _0x5e8291 = {};
    (_0x5e8291['x'] = _0x2c023d[_0x223ebc(0x4bf, 'cwps')](
      Number,
      _0x2a2976[0x0][_0x223ebc(0x68a, '9@W9')]['x'][_0x223ebc(0x2ad, '&A2z')](
        0x3
      )
    )),
      (_0x5e8291['y'] = Number(
        _0x2a2976[0x0]['point']['y'][_0x223ebc(0x6a6, 'u9nJ')](0x3)
      )),
      (_0x5e8291['z'] = _0x2c023d[_0x223ebc(0x6e8, 'UchA')](
        Number,
        _0x2a2976[0x0][_0x223ebc(0x38a, '!ncs')]['z'][_0x223ebc(0x6a6, 'u9nJ')](
          0x3
        )
      ));
    if (this[_0x223ebc(0x69e, '!ncs')])
      this[_0x223ebc(0x83f, 'rAev')](
        new Vector3(_0x5e8291['x'], _0x5e8291['y'], _0x5e8291['z'])
      );
  }
  [_0x124220(0x6bb, 'Pw)Z')]() {
    const _0x56196b = _0x124220,
      _0x29952d = {
        sonLD: function (_0x39acb5, _0x5b2212) {
          return _0x39acb5 / _0x5b2212;
        },
        ZRnrl: _0x56196b(0x372, 'Aj*g'),
        MVFtA: function (_0x1d6eeb, _0x53409c) {
          return _0x1d6eeb / _0x53409c;
        },
        MrgCd: function (_0x58ddbd, _0x8018ab) {
          return _0x58ddbd * _0x8018ab;
        },
      };
    (this['containerWidth'] =
      this[_0x56196b(0x510, 'uUNF')][_0x56196b(0x20d, 'S7tx')]),
      (this[_0x56196b(0x337, '@cxu')] =
        this[_0x56196b(0x34e, 'niup')][_0x56196b(0x379, 'a]m&')]),
      (this[_0x56196b(0x76d, 'Pw)Z')][_0x56196b(0x7e5, 'ZWj!')] = _0x29952d[
        'sonLD'
      ](this[_0x56196b(0x37f, '@cxu')], this['containerHeight'])),
      this[_0x56196b(0x1bc, 'G#Vj')][_0x56196b(0x2c9, 'cwps')](),
      this['renderer'][_0x56196b(0x42b, '9sEE')](
        this[_0x56196b(0x624, 'qNG@')],
        this[_0x56196b(0x6fe, ')bs3')]
      ),
      this['bloomComposer']['setSize'](
        this[_0x56196b(0x47b, 'Kk69')],
        this[_0x56196b(0x44f, 'rccG')]
      ),
      this[_0x56196b(0x360, 'rAev')]['setSize'](
        this['containerWidth'],
        this['containerHeight']
      ),
      this[_0x56196b(0x595, 'ks5y')]['setSize'](
        this['containerWidth'],
        this[_0x56196b(0x6b7, 'tNI4')]
      );
    const _0x15ed3c =
      this[_0x56196b(0x41b, '!vuU')][_0x56196b(0x5ad, '!ncs')]();
    (this[_0x56196b(0x39c, 'rAev')][_0x56196b(0x64c, '$cvL')]['uniforms'][
      _0x29952d[_0x56196b(0x5ff, '7%kX')]
    ][_0x56196b(0x399, 'UchA')]['x'] = _0x29952d[_0x56196b(0x59e, 'rccG')](
      0x1,
      this[_0x56196b(0x409, 'wFk%')] * _0x15ed3c
    )),
      (this[_0x56196b(0x762, 'Ta41')][_0x56196b(0x5c8, 'u[Qt')][
        _0x56196b(0x766, 'ZTP3')
      ]['resolution'][_0x56196b(0x2c4, 'ZTP3')]['y'] =
        0x1 /
        _0x29952d[_0x56196b(0x617, 'jZCM')](
          this[_0x56196b(0x810, 'DX0Q')],
          _0x15ed3c
        ));
  }
  [_0x124220(0x835, '&A2z')](_0x329ced) {
    const _0x5ba1f7 = _0x124220,
      _0x57581b = {
        BlLNN: _0x5ba1f7(0x68d, 'wFk%'),
        ZYfwv: function (_0xd6be9f, _0x11c8bf) {
          return _0xd6be9f / _0x11c8bf;
        },
        Ykphs: _0x5ba1f7(0x423, 'Yv(m'),
        nrbBE: function (_0x3d1e16, _0x5620af) {
          return _0x3d1e16 !== _0x5620af;
        },
        cHRQH: 'iyZiS',
        QxxjH: _0x5ba1f7(0x460, 'Kk69'),
        KtAYg: function (_0x5d1828, _0x1a1af3) {
          return _0x5d1828 === _0x1a1af3;
        },
        VQJav: _0x5ba1f7(0x362, 'G#Vj'),
        byUZD: _0x5ba1f7(0x4a5, '&A2z'),
        RXiGW: function (_0x1c525c, _0xd178c4) {
          return _0x1c525c !== _0xd178c4;
        },
        aZAsR: 'Wdzau',
        nXXPr: function (_0xf7561f, _0x177c56) {
          return _0xf7561f !== _0x177c56;
        },
        WFNHV: _0x5ba1f7(0x3b5, 'tNI4'),
        WugRd: _0x5ba1f7(0x34c, '&A2z'),
      };
    while (
      _0x329ced[_0x5ba1f7(0x43b, '9r9(')][_0x5ba1f7(0x710, 'jZCM')] > 0x0
    ) {
      const _0x3d567d =
        _0x329ced[_0x5ba1f7(0x5f8, 'rAev')][_0x5ba1f7(0x5fa, ')bs3')]();
      _0x3d567d[_0x5ba1f7(0x540, '9r9(')]((_0x42daf1) => {
        const _0x3f5e12 = _0x5ba1f7,
          _0x162ff4 = {
            rwQqu: function (_0x300745, _0x3fe834) {
              return _0x300745 == _0x3fe834;
            },
            hqNsk: _0x57581b[_0x3f5e12(0x4b9, 'jZCM')],
          };
        if (_0x42daf1[_0x3f5e12(0x7f7, '9sEE')]) {
          _0x42daf1[_0x3f5e12(0x256, 'v]cc')]['dispose']();
          if (_0x42daf1[_0x3f5e12(0x2a0, 'tNI4')]) {
            if (
              _0x57581b[_0x3f5e12(0x501, 'uKRM')](
                _0x57581b[_0x3f5e12(0x3af, 'ZmW^')],
                _0x57581b[_0x3f5e12(0x35e, 'Jare')]
              )
            ) {
              _0x42daf1['material']['dispose']();
              for (const _0xe00bf7 of Object['keys'](_0x42daf1['material'])) {
                const _0x2d395b = _0x42daf1['material'][_0xe00bf7];
                if (
                  _0x2d395b &&
                  _0x57581b[_0x3f5e12(0x434, '&A2z')](
                    typeof _0x2d395b,
                    _0x57581b[_0x3f5e12(0x82e, 'qNG@')]
                  ) &&
                  _0x57581b[_0x3f5e12(0x52e, '9sEE')] in _0x2d395b
                ) {
                  if (
                    _0x57581b[_0x3f5e12(0x67b, 'rmSV')](
                      _0x3f5e12(0x3e1, 'a]m&'),
                      _0x57581b['aZAsR']
                    )
                  ) {
                    const _0x440786 = new _0x1a0ada(0xa, 0x5),
                      _0x55dbcd = new _0x2284ae({
                        color: 0xffffff,
                        transparent: !0x0,
                        opacity: 0x1,
                        depthTest: !!0x0,
                        map: new _0x2157c7()['load'](
                          _0x57581b[_0x3f5e12(0x33e, 'Ta41')]
                        ),
                      }),
                      _0x10d617 = new _0x54a125(_0x440786, _0x55dbcd);
                    _0x10d617[_0x3f5e12(0x511, 'rmSV')]['set'](
                      -0x7,
                      -1.8,
                      0x1e
                    ),
                      _0x10d617[_0x3f5e12(0x6bf, 'DX0Q')]['set'](5.6, 3.3),
                      _0x10d617[_0x3f5e12(0x23f, 'rmSV')](
                        _0x57581b['ZYfwv'](-_0x4dca3a['PI'], 0x2)
                      ),
                      _0x10d617[_0x3f5e12(0x219, 'rccG')](
                        _0x57581b[_0x3f5e12(0x37e, 'u[Qt')](
                          _0x1db6ff['PI'],
                          0x2
                        )
                      ),
                      _0x10d617[_0x3f5e12(0x7bb, 'ZWj!')][
                        _0x3f5e12(0x728, 'S7tx')
                      ](_0x354a65);
                    const _0x4dcf88 = new _0x4994ea(_0x191101);
                    (_0x4dcf88['position']['z'] = 0x5),
                      _0x10d617[_0x3f5e12(0x538, '&A2z')](_0x4dcf88),
                      this[_0x3f5e12(0x7dc, 'ks5y')][_0x3f5e12(0x476, 'uUNF')](
                        _0x10d617
                      );
                  } else _0x2d395b['dispose']();
                }
              }
            } else {
              if (!_0x1afeee[_0x3f5e12(0x6f0, 'jZCM')]) return;
              _0x162ff4[_0x3f5e12(0x37c, 'v]cc')](
                _0xbe0eba[_0x3f5e12(0x29f, 'qNG@')],
                _0x162ff4[_0x3f5e12(0x5a6, 'wFk%')]
              ) &&
                ((_0x3e9cda['material'][_0x3f5e12(0x5ca, 'H]sX')] =
                  new _0x1251b0(_0x17a2f3)),
                (_0x3f29af[_0x3f5e12(0x644, 'ZmW^')][_0x3f5e12(0x5d2, 'v]cc')] =
                  !0x0));
            }
          }
        }
        _0x42daf1[_0x3f5e12(0x808, 'Aj*g')] &&
          _0x42daf1[_0x3f5e12(0x424, 'i#24')][_0x3f5e12(0x74b, 'u[Qt')] &&
          (_0x57581b[_0x3f5e12(0x5ab, 'UchA')](
            _0x57581b['WFNHV'],
            _0x57581b['WugRd']
          )
            ? _0x42daf1[_0x3f5e12(0x38b, '$cvL')][_0x3f5e12(0x56a, '$cvL')][
                _0x3f5e12(0x3b8, 'LMyx')
              ](_0x42daf1[_0x3f5e12(0x1c9, 'rAev')])
            : ((this[_0x3f5e12(0x656, 'wFk%')] = _0x2ad3bd['scene']['clone']()),
              this['menjiFater']['scale'][_0x3f5e12(0x6e2, 'Jare')](
                0.02,
                0.03,
                0.02
              ),
              this[_0x3f5e12(0x446, 'niup')][_0x3f5e12(0x2b0, 'rmSV')](
                (_0x1198f0) => {
                  const _0x39f296 = _0x3f5e12;
                  if (!_0x1198f0[_0x39f296(0x582, 'Yv(m')]) return;
                  _0x1198f0['material'][_0x39f296(0x311, 'tNI4')] =
                    new _0x369557(0x1e5fe0);
                }
              ),
              this['menjiFater'][_0x3f5e12(0x2b0, 'rmSV')]((_0x42c391) => {
                const _0x168960 = _0x3f5e12;
                if (!_0x42c391[_0x168960(0x4f8, '!vuU')]) return;
                _0x42c391[_0x168960(0x4fd, 'Jare')]['color'] = new _0x500f11(
                  0x3567a4
                );
              }),
              _0x3bcfc9[_0x3f5e12(0x822, 'rAev')]((_0x3c3067) => {
                const _0x2803e4 = _0x3f5e12,
                  _0x137ce8 =
                    this[_0x2803e4(0x2f0, 'UchA')][_0x2803e4(0x3c7, 'o7f1')]();
                _0x137ce8[_0x2803e4(0x725, 'RyL6')][_0x2803e4(0x743, 'rccG')](
                  _0x3c3067[_0x2803e4(0x6ed, 'Jare')]
                ),
                  _0x137ce8[_0x2803e4(0x35f, 'Yv(m')][_0x2803e4(0x41d, 'ks5y')](
                    _0x3c3067[_0x2803e4(0x2ee, 'a]m&')]
                  ),
                  this['models']['add'](_0x137ce8);
              })));
      }),
        _0x329ced[_0x5ba1f7(0x7d4, '!ncs')](_0x3d567d);
    }
  }
  ['clearScene']() {
    const _0x4a61fc = _0x124220;
    this[_0x4a61fc(0x1f0, '9@W9')](this[_0x4a61fc(0x77e, 'rccG')]),
      this[_0x4a61fc(0x82d, 'o7f1')]['dispose']();
  }
  [_0x124220(0x4ce, 'wFk%')]() {
    const _0x402bf5 = _0x124220,
      _0x19df4e = {
        nShpC: _0x402bf5(0x64d, '!ncs'),
        LZaWm: function (_0x2f7756, _0x4b9e5f) {
          return _0x2f7756 !== _0x4b9e5f;
        },
        LLNEL: 'NmzMA',
        Utbkz: 'IiAIj',
        DkHcK: function (_0x5e9c2f, _0xe8ffa2) {
          return _0x5e9c2f === _0xe8ffa2;
        },
        riOgb: function (_0x383f62, _0xe55228) {
          return _0x383f62 !== _0xe55228;
        },
        CWuYe: _0x402bf5(0x4ad, 'ZXoK'),
        rNhuh: _0x402bf5(0x651, '9sEE'),
        lRpgi: 'rayleigh',
        XRfni: _0x402bf5(0x6c8, '9@W9'),
        BJXLN: 'mieDirectionalG',
        xAdRj: function (_0x185a50) {
          return _0x185a50();
        },
        UNTky: _0x402bf5(0x6e9, 'uKRM'),
        gpEuA: _0x402bf5(0x70a, '&A2z'),
        JABiY: '#00486E',
        mfALZ: _0x402bf5(0x4e0, 'zYl*'),
        HXvBd: function (_0xfd6c69, _0x42e013) {
          return _0xfd6c69 == _0x42e013;
        },
        SMZuj: _0x402bf5(0x30f, 'qNG@'),
        rtEXY: '网格275_1',
        tUheF: function (_0x1bc240, _0x21fe25) {
          return _0x1bc240 === _0x21fe25;
        },
        NdEms: _0x402bf5(0x373, 'rmSV'),
        rbMWv: _0x402bf5(0x6d4, 'ZmW^'),
        vUNWe: _0x402bf5(0x6c0, '@cxu'),
        MmRsa: _0x402bf5(0x799, '9@W9'),
        ovwZH: function (_0x3b9adf, _0x481877) {
          return _0x3b9adf / _0x481877;
        },
        JiHGX: function (_0x2c16e5, _0xc3ffbc) {
          return _0x2c16e5 === _0xc3ffbc;
        },
        xCUog: 'pQOKD',
        QUouq: _0x402bf5(0x2a7, 'ZWj!'),
        EjlHH: _0x402bf5(0x257, 'rccG'),
        bWsBh: function (_0x2ce7c9, _0x40d599) {
          return _0x2ce7c9 - _0x40d599;
        },
        CMawG: _0x402bf5(0x738, 'H]sX'),
        zoaMf: _0x402bf5(0x349, 'ZWj!'),
        XSaPy: function (_0x17c5c1, _0x1436f8) {
          return _0x17c5c1 === _0x1436f8;
        },
        udssP: _0x402bf5(0x56c, 'LMyx'),
        zlYhj: function (_0x71304f, _0x1f6194) {
          return _0x71304f(_0x1f6194);
        },
        GXiQq: function (_0x17a51, _0x5c06b2, _0x368ef2) {
          return _0x17a51(_0x5c06b2, _0x368ef2);
        },
        sWEMe: function (_0x4083e6, _0x59e6b2) {
          return _0x4083e6 > _0x59e6b2;
        },
        pfUMU: _0x402bf5(0x216, 'S7tx'),
        PFNNH: function (_0x41ed6a, _0x24e31f) {
          return _0x41ed6a < _0x24e31f;
        },
        pLWHu: _0x402bf5(0x7e3, 'ZWj!'),
        mdkIj: function (_0xa590f3, _0x95aec8) {
          return _0xa590f3 === _0x95aec8;
        },
        LZAjY: 'QQuEI',
        Mfzhs: function (_0x47abd6, _0x269493, _0x126c5b) {
          return _0x47abd6(_0x269493, _0x126c5b);
        },
        bLZkB: function (_0x10abf3, _0x282ca1) {
          return _0x10abf3 * _0x282ca1;
        },
        EEXiw: _0x402bf5(0x3b1, 'ZmW^'),
        ZfMsS: _0x402bf5(0x3bf, 'Kk69'),
        mDYSq: _0x402bf5(0x331, 'H]sX'),
        ECcOR: _0x402bf5(0x1fb, 'Kk69'),
      };
    this[_0x402bf5(0x78a, 'i#24')]['load'](
      _0x19df4e['ECcOR'],
      (_0x49ca8c) => {
        const _0x33518f = _0x402bf5,
          _0x4530c7 = {
            vIfSd: function (_0x127ec8, _0xff195f) {
              const _0x16cb2a = _0x3432;
              return _0x19df4e[_0x16cb2a(0x77f, '$cvL')](_0x127ec8, _0xff195f);
            },
            DgCRX: _0x19df4e[_0x33518f(0x1d3, 'u9nJ')],
            BfioS: _0x19df4e[_0x33518f(0x827, 'VCBb')],
            zoVYY: function (_0x5a4ff4, _0x2f5f92) {
              const _0x3e7e9b = _0x33518f;
              return _0x19df4e[_0x3e7e9b(0x715, 'rAev')](_0x5a4ff4, _0x2f5f92);
            },
            mARdj: _0x33518f(0x6b9, 'Jare'),
            pisKP: _0x19df4e[_0x33518f(0x7e2, 'G#Vj')],
            PToDK: _0x19df4e['zoaMf'],
            kgMvY: function (_0x2f562e, _0x5ad715) {
              const _0x8981b2 = _0x33518f;
              return _0x19df4e[_0x8981b2(0x6df, 'S7tx')](_0x2f562e, _0x5ad715);
            },
            IIJMH: _0x19df4e[_0x33518f(0x6a0, '9sEE')],
            OwJEP: function (_0x3c7a80, _0x33b475) {
              const _0x22515c = _0x33518f;
              return _0x19df4e[_0x22515c(0x389, 'VCBb')](_0x3c7a80, _0x33b475);
            },
            NFegu: function (_0x1682d4, _0x4a810b, _0xf7baef) {
              return _0x19df4e['GXiQq'](_0x1682d4, _0x4a810b, _0xf7baef);
            },
            PUTYm: function (_0x4f1df0, _0x17735b) {
              return _0x19df4e['sWEMe'](_0x4f1df0, _0x17735b);
            },
          };
        if (_0x19df4e['pfUMU'] === _0x19df4e['pfUMU']) {
          _0x49ca8c['scene']['traverse']((_0x5ede62) => {
            const _0x35e425 = _0x33518f,
              _0xd6429f = { iEMtp: _0x19df4e[_0x35e425(0x400, 'rccG')] };
            if (
              _0x19df4e[_0x35e425(0x31f, 'DX0Q')](
                _0x19df4e[_0x35e425(0x7db, 'tNI4')],
                _0x19df4e['Utbkz']
              )
            ) {
              if (_0x5ede62[_0x35e425(0x731, 'JVJG')]) {
                _0x5ede62[_0x35e425(0x507, 'uUNF')]['side'] = DoubleSide;
                if (
                  _0x19df4e[_0x35e425(0x285, 'ZmW^')](_0x5ede62['name'], '海面')
                ) {
                  if (
                    _0x19df4e['riOgb'](
                      _0x19df4e[_0x35e425(0x73a, '&A2z')],
                      _0x19df4e[_0x35e425(0x85c, 'niup')]
                    )
                  ) {
                    this[_0x35e425(0x7af, 'jZCM')][_0x35e425(0x2e1, 'Jare')][
                      'x'
                    ] += 0.04;
                    if (this[_0x35e425(0x818, 'uUNF')]['position']['x'] > 0x3c)
                      this[_0x35e425(0x4b7, 'S7tx')][_0x35e425(0x4be, 'jZCM')][
                        'x'
                      ] = 3.9;
                  } else {
                    (this['water'] = new Water(
                      _0x5ede62[_0x35e425(0x417, 'jZCM')],
                      {
                        textureWidth: 0x200,
                        textureHeight: 0x200,
                        waterNormals: new TextureLoader()[
                          _0x35e425(0x1cb, 'ZTP3')
                        ](_0x35e425(0x54d, 'RyL6'), (_0x12e9f7) => {
                          const _0x1b6115 = _0x35e425;
                          _0x12e9f7[_0x1b6115(0x6fa, 'tNI4')] = _0x12e9f7[
                            'wrapT'
                          ] = RepeatWrapping;
                        }),
                        sunDirection: this['directionalLight'][
                          _0x35e425(0x30b, '!ncs')
                        ]
                          [_0x35e425(0x3c5, 'Aj*g')]()
                          [_0x35e425(0x680, 'Kk69')](),
                        sunColor: 0xffffff,
                        waterColor: 0x669ab,
                        distortionScale: 3.7,
                      }
                    )),
                      this['water'][_0x35e425(0x7b9, '2djq')]['enable'](
                        ENTIRE_SCENE
                      ),
                      this[_0x35e425(0x3e8, 'ks5y')]['position'][
                        _0x35e425(0x771, 'ZXoK')
                      ](_0x5ede62['position']),
                      (this['water']['material'][_0x35e425(0x63b, 'wFk%')][
                        _0x35e425(0x5e7, 'wFk%')
                      ][_0x35e425(0x48c, 'G#Vj')] = 0x1b),
                      _0x5ede62[_0x35e425(0x2a1, '@cxu')]['add'](
                        this[_0x35e425(0x208, '!vuU')]
                      ),
                      setTimeout(() => {
                        const _0x4329d2 = _0x35e425;
                        if (
                          _0x4530c7[_0x4329d2(0x223, 'rccG')](
                            _0x4530c7['DgCRX'],
                            _0x4530c7[_0x4329d2(0x5e5, 'cwps')]
                          )
                        ) {
                          const _0x1ebe7b = _0x5d7b01['scene'];
                          _0x1ebe7b['position'][_0x4329d2(0x2d3, 'rAev')](
                            39.571,
                            -2.361,
                            -47.172
                          ),
                            _0x1ebe7b[_0x4329d2(0x450, 'qNG@')]((_0x405af4) => {
                              const _0x3f4b18 = _0x4329d2;
                              if (!_0x405af4[_0x3f4b18(0x4e4, 'DX0Q')]) return;
                              _0x405af4[_0x3f4b18(0x611, 'Yv(m')][
                                _0x3f4b18(0x50d, 'H]sX')
                              ](_0x37a5c);
                            }),
                            this[_0x4329d2(0x860, '7%kX')][
                              _0x4329d2(0x248, 'o7f1')
                            ](_0x1ebe7b);
                        } else
                          _0x5ede62['material'][_0x4329d2(0x22c, 'i#24')](),
                            _0x5ede62['parent']['remove'](_0x5ede62);
                      }, 0x0);
                    const _0x8e34db = new Sky();
                    _0x8e34db['scale']['setScalar'](0x2710),
                      this['scene']['add'](_0x8e34db);
                    const _0x550fcc =
                      _0x8e34db[_0x35e425(0x275, 'RyL6')][
                        _0x35e425(0x435, 'rccG')
                      ];
                    (_0x550fcc[_0x19df4e[_0x35e425(0x7fa, 'a]m&')]][
                      'value'
                    ] = 0xa),
                      (_0x550fcc[_0x19df4e[_0x35e425(0x2d5, 'LMyx')]][
                        'value'
                      ] = 0x2),
                      (_0x550fcc[_0x19df4e[_0x35e425(0x37b, 'v]cc')]][
                        'value'
                      ] = 0.005),
                      (_0x550fcc[_0x19df4e[_0x35e425(0x24a, 'uUNF')]][
                        _0x35e425(0x839, 'ZWj!')
                      ] = 0.8);
                    const _0x234781 = { elevation: 0x0, azimuth: 0x0 },
                      _0x35e12f = new PMREMGenerator(this['renderer']),
                      _0x4b896b = new Vector3(),
                      _0x408326 = () => {
                        const _0x59ecfc = _0x35e425,
                          _0xa34c = {
                            zrnIg: function (_0x478c6d, _0x30150a) {
                              return _0x478c6d == _0x30150a;
                            },
                          };
                        if (
                          _0x4530c7[_0x59ecfc(0x71a, 'ks5y')](
                            _0x4530c7[_0x59ecfc(0x418, 'G#Vj')],
                            _0x59ecfc(0x506, '7%kX')
                          )
                        ) {
                          const _0x4f13ad = {
                            lXUEL: function (_0xbc8049, _0x137662) {
                              return _0xa34c['zrnIg'](_0xbc8049, _0x137662);
                            },
                          };
                          this[_0x59ecfc(0x7a7, 'wFk%')][
                            _0x59ecfc(0x2b0, 'rmSV')
                          ]((_0x446155) => {
                            const _0x2e9f5c = _0x59ecfc;
                            if (!_0x446155['isMesh']) return;
                            _0x4f13ad[_0x2e9f5c(0x341, 'Aj*g')](
                              _0x446155[_0x2e9f5c(0x5c9, 'Jare')],
                              '网格'
                            ) &&
                              ((_0x446155[_0x2e9f5c(0x275, 'RyL6')][
                                _0x2e9f5c(0x38d, '&A2z')
                              ] = _0x44f066),
                              (_0x446155['material']['needsUpdate'] = !0x0));
                          });
                        } else {
                          const _0x5c96ba = MathUtils[_0x59ecfc(0x793, 'Jare')](
                              _0x4530c7[_0x59ecfc(0x3d4, 'ZWj!')](
                                0x5a,
                                _0x234781[_0x59ecfc(0x5db, 'ZTP3')]
                              )
                            ),
                            _0x58b3b7 = MathUtils[_0x59ecfc(0x6c2, 'jZCM')](
                              _0x234781[_0x59ecfc(0x402, 'rccG')]
                            );
                          _0x4b896b['setFromSphericalCoords'](
                            0x1,
                            _0x5c96ba,
                            _0x58b3b7
                          ),
                            _0x8e34db[_0x59ecfc(0x758, '2djq')][
                              _0x59ecfc(0x662, 'i#24')
                            ][_0x4530c7[_0x59ecfc(0x2fe, 'JVJG')]]['value'][
                              _0x59ecfc(0x533, 'rmSV')
                            ](_0x4b896b),
                            this[_0x59ecfc(0x218, 'i#24')][
                              _0x59ecfc(0x64c, '$cvL')
                            ]['uniforms'][_0x4530c7[_0x59ecfc(0x5df, 'Aj*g')]][
                              'value'
                            ]
                              ['copy'](_0x4b896b)
                              [_0x59ecfc(0x42a, 'rmSV')]();
                        }
                      };
                    _0x19df4e['xAdRj'](_0x408326);
                  }
                } else {
                  if (
                    _0x5ede62[_0x35e425(0x276, 'jZCM')] ===
                    _0x19df4e[_0x35e425(0x7cb, 'i#24')]
                  ) {
                    const _0x46948b =
                        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vRoughness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20vColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec3\x20emissive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20roughness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20uv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vColor\x20=\x20emissive;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vRoughness\x20=\x20roughness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20modelViewMatrix\x20*\x20vec4(\x20position,\x201.0\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                      _0x36f36b = _0x35e425(0x783, 'Yv(m');
                    _0x5ede62['geometry'][_0x35e425(0x1dd, 'u[Qt')](),
                      (this[_0x35e425(0x59f, 'Yv(m')] = {
                        roughness: { value: 0x6 },
                        emissive: {
                          value: new Color(_0x19df4e[_0x35e425(0x29e, '9sEE')]),
                        },
                        opacity: { value: 0.34 },
                        baseTexture: {
                          value: new TextureLoader()[_0x35e425(0x2c7, 'DX0Q')](
                            _0x35e425(0x1f2, 'tNI4')
                          ),
                        },
                      });
                    const _0x3f5778 = new ShaderMaterial({
                      uniforms: this[_0x35e425(0x3a9, 'G#Vj')],
                      vertexShader: _0x46948b,
                      fragmentShader: _0x36f36b,
                      transparent: !![],
                    });
                    (_0x5ede62[_0x35e425(0x60b, 'UchA')] = _0x3f5778),
                      (_0x5ede62[_0x35e425(0x661, 'niup')][
                        _0x35e425(0x287, 'ZTP3')
                      ] = !0x0),
                      _0x5ede62[_0x35e425(0x7ca, '$cvL')][
                        _0x35e425(0x26c, 'uUNF')
                      ](BLOOM_SCENE);
                  } else {
                    if (
                      _0x5ede62[_0x35e425(0x61a, 'UchA')] ==
                      _0x35e425(0x25a, '$cvL')
                    )
                      (_0x5ede62[_0x35e425(0x72d, 'wFk%')]['color'] = new Color(
                        _0x19df4e['JABiY']
                      )),
                        (_0x5ede62['material'][_0x35e425(0x24c, 'a]m&')] =
                          new Color(_0x19df4e[_0x35e425(0x84b, '&A2z')])),
                        (_0x5ede62[_0x35e425(0x77a, 'cwps')][
                          'roughness'
                        ] = 0.4),
                        (_0x5ede62[_0x35e425(0x718, 'Pw)Z')][
                          _0x35e425(0x4db, 'Kk69')
                        ] = 0.72),
                        (_0x5ede62[_0x35e425(0x344, 'VCBb')]['needsUpdate'] =
                          !0x0),
                        _0x5ede62[_0x35e425(0x80c, ')bs3')]['enable'](
                          BLOOM_SCENE
                        );
                    else {
                      if (_0x5ede62[_0x35e425(0x5e2, 'ZWj!')] == '网格170_1') {
                        const _0x4f1397 = _0x35e425(0x2cb, 'Yv(m')[
                          _0x35e425(0x65e, 'ZmW^')
                        ]('|');
                        let _0x139c41 = 0x0;
                        while (!![]) {
                          switch (_0x4f1397[_0x139c41++]) {
                            case '0':
                              _0x5ede62[_0x35e425(0x57c, 'H]sX')][
                                _0x35e425(0x71c, 'jZCM')
                              ] = 0.5;
                              continue;
                            case '1':
                              _0x5ede62[_0x35e425(0x345, '9@W9')][
                                _0x35e425(0x7e9, 'zYl*')
                              ](BLOOM_SCENE);
                              continue;
                            case '2':
                              _0x5ede62[_0x35e425(0x48d, 'uKRM')][
                                _0x35e425(0x536, 'rAev')
                              ] = 0.5;
                              continue;
                            case '3':
                              _0x5ede62[_0x35e425(0x4e9, 'qNG@')]['color'] =
                                new Color(_0x35e425(0x629, ')bs3'));
                              continue;
                            case '4':
                              _0x5ede62[_0x35e425(0x482, ')bs3')][
                                _0x35e425(0x6d6, 'Ta41')
                              ] = !0x0;
                              continue;
                            case '5':
                              _0x5ede62[_0x35e425(0x685, '@cxu')]['emissive'] =
                                new Color('#0B8F8F');
                              continue;
                          }
                          break;
                        }
                      } else
                        _0x19df4e[_0x35e425(0x365, 'wFk%')](
                          _0x5ede62[_0x35e425(0x848, 'RKdF')],
                          _0x19df4e[_0x35e425(0x1f1, 'LMyx')]
                        ) ||
                        _0x5ede62[_0x35e425(0x5d7, '!vuU')] == '网格274_1' ||
                        _0x5ede62[_0x35e425(0x719, 'S7tx')] ==
                          _0x19df4e[_0x35e425(0x2ff, 'H]sX')]
                          ? _0x19df4e[_0x35e425(0x53a, 'G#Vj')](
                              _0x19df4e[_0x35e425(0x1ff, 'ZTP3')],
                              _0x19df4e[_0x35e425(0x2be, 'qNG@')]
                            )
                            ? this['controls'][_0x35e425(0x3fc, 'RKdF')]()
                            : ((_0x5ede62['material'][
                                _0x35e425(0x258, 'rmSV')
                              ] = new Color('#000000')),
                              (_0x5ede62[_0x35e425(0x700, 'LMyx')][
                                _0x35e425(0x4a0, '9@W9')
                              ] = new Color(
                                _0x19df4e[_0x35e425(0x5b1, 'uKRM')]
                              )),
                              (_0x5ede62[_0x35e425(0x482, ')bs3')][
                                'roughness'
                              ] = 0.58),
                              (_0x5ede62['material'][
                                _0x35e425(0x714, 'ZXoK')
                              ] = 0.23),
                              (_0x5ede62['material'][_0x35e425(0x287, 'ZTP3')] =
                                !0x0))
                          : _0x5ede62[_0x35e425(0x4bc, 'o7f1')][
                              _0x35e425(0x72f, 'RyL6')
                            ](BLOOM_SCENE);
                    }
                  }
                }
              }
            } else
              this[_0x35e425(0x81c, 'rAev')][_0x35e425(0x804, 'RKdF')](
                (_0x329589) => {
                  const _0x14bbc9 = _0x35e425;
                  if (!_0x329589[_0x14bbc9(0x3d5, 'VCBb')]) return;
                  _0x329589['name'] == _0xd6429f[_0x14bbc9(0x3d8, 'Aj*g')] &&
                    ((_0x329589['material'][_0x14bbc9(0x24b, 'niup')] =
                      _0x20f2bb),
                    (_0x329589[_0x14bbc9(0x1c7, 'DX0Q')][
                      _0x14bbc9(0x6d6, 'Ta41')
                    ] = !0x0));
                }
              );
          }),
            this[_0x33518f(0x79f, 'Ta41')][_0x33518f(0x6aa, 'ZTP3')](
              _0x49ca8c[_0x33518f(0x809, '$cvL')]
            );
          const _0x47c79a = [
            new Vector3(-0x17, -0x8, 0xc),
            new Vector3(0x1a, -0x8, 0xb),
            new Vector3(0x12, -0x8, -0x27),
            new Vector3(-0x7, -0x8, -0x34),
          ];
          _0x47c79a[_0x33518f(0x499, 'ks5y')]((_0x3e85f5) => {
            const _0x4cfab8 = _0x33518f,
              _0x2509a4 = this['glowLines'](_0x3e85f5),
              _0x452bf1 = Math[_0x4cfab8(0x39b, 'cwps')]();
            (_0x2509a4[_0x4cfab8(0x4d8, '7%kX')] = _0x452bf1),
              this[_0x4cfab8(0x5a9, 'RKdF')][_0x4cfab8(0x800, ')bs3')](
                _0x2509a4
              ),
              this[_0x4cfab8(0x26e, 'ZmW^')][_0x4cfab8(0x7b8, '@cxu')](
                _0x2509a4
              );
          });
          for (
            let _0x410a08 = 0x0;
            _0x19df4e[_0x33518f(0x6e1, 'Aj*g')](_0x410a08, 0x3);
            _0x410a08++
          ) {
            _0x19df4e[_0x33518f(0x3de, 'ks5y')](
              _0x19df4e[_0x33518f(0x35d, 'JVJG')],
              _0x33518f(0x770, 'Kk69')
            )
              ? (_0x4a0653 &&
                  (_0x4530c7[_0x33518f(0x6af, 'G#Vj')](_0x12ad1d, _0x3bedc6),
                  _0x7b38d7++,
                  (_0x2fb56c = null)),
                (_0x49f00b = _0x4530c7['NFegu'](
                  _0x51b3e1,
                  () => {
                    const _0x568e4e = _0x33518f;
                    if (_0x183c45 === 0x1)
                      this[_0x568e4e(0x5d3, 'tNI4')][_0x568e4e(0x2d6, 'Jare')](
                        _0x4530c7['PToDK'],
                        _0x38750c
                      );
                    else {
                      if (_0x4530c7['kgMvY'](_0x172a82, 0x2))
                        this[_0x568e4e(0x2c8, 'rmSV')][
                          _0x568e4e(0x6dd, '$cvL')
                        ](_0x4530c7['IIJMH'], _0x1171f1);
                    }
                    (_0xeb463 = 0x1), _0x367939(_0x5aeb25), (_0x194f3e = null);
                  },
                  0xc8
                )))
              : setTimeout(() => {
                  const _0x1c008a = _0x33518f;
                  if (
                    _0x19df4e[_0x1c008a(0x787, 'jZCM')](
                      _0x19df4e[_0x1c008a(0x4aa, 'zYl*')],
                      _0x1c008a(0x707, 'uUNF')
                    )
                  ) {
                    if (!this['isShiJiuGang']) return;
                    let _0x372bd6 = this['scatterCircle'](
                      0x10,
                      0.1,
                      0.5,
                      new Vector3(0x0, 0x1, 0x1),
                      0.2
                    );
                    _0x372bd6[_0x1c008a(0x312, 'H]sX')][
                      _0x1c008a(0x6e2, 'Jare')
                    ](1.019, -0x2, 1.224),
                      _0x372bd6[_0x1c008a(0x234, '9sEE')](
                        _0x19df4e[_0x1c008a(0x54b, '9r9(')](-Math['PI'], 0x2)
                      ),
                      _0x372bd6[_0x1c008a(0x76c, '9sEE')][
                        _0x1c008a(0x75c, 'ZTP3')
                      ](BLOOM_SCENE),
                      this[_0x1c008a(0x364, 'tNI4')]['add'](_0x372bd6);
                  } else {
                    const _0x36ac1f = this['streamlines'][_0x3b65cb];
                    if (
                      _0x4530c7[_0x1c008a(0x757, '7%kX')](
                        _0x36ac1f[_0x1c008a(0x7a0, 'JVJG')]['y'],
                        0x28
                      )
                    )
                      _0x36ac1f['position']['y'] = -0x5;
                    _0x36ac1f['position']['y'] +=
                      0.02 * _0x36ac1f[_0x1c008a(0x6f2, 'u[Qt')];
                  }
                }, _0x410a08 * 0xbb8);
          }
          for (
            let _0x31943e = 0x0;
            _0x19df4e[_0x33518f(0x255, 'uKRM')](_0x31943e, 0x3);
            _0x31943e++
          ) {
            _0x19df4e[_0x33518f(0x2ec, '9sEE')](
              _0x19df4e[_0x33518f(0x712, 'uUNF')],
              _0x33518f(0x7fe, 'ZmW^')
            )
              ? this['makeLan'](
                  _0x5a75a9,
                  _0xd82a74[_0x9b21ba][_0x33518f(0x75f, 'niup')],
                  _0x13a145[_0x2ffed5][_0x33518f(0x7b2, 'S7tx')],
                  _0x34089b[_0x362512][_0x33518f(0x63a, 'cwps')],
                  _0x3d6f39[_0x4d3251]['rotation']
                )
              : _0x19df4e['Mfzhs'](
                  setTimeout,
                  () => {
                    const _0x5b25de = _0x33518f;
                    if (
                      _0x19df4e[_0x5b25de(0x319, '2djq')](
                        _0x19df4e[_0x5b25de(0x7e7, 'jZCM')],
                        _0x5b25de(0x4a6, 'LMyx')
                      )
                    )
                      _0x3ec421['material'][_0x5b25de(0x63b, 'wFk%')][
                        _0x5b25de(0x776, 'u9nJ')
                      ][_0x5b25de(0x769, 'zYl*')] = 0x0;
                    else {
                      if (!this['isShiJiuGang']) return;
                      let _0x24d375 = this['scatterCircle'](
                        0xa,
                        0.1,
                        0.5,
                        new Vector3(0x0, 0x1, 0x1),
                        0.2
                      );
                      _0x24d375[_0x5b25de(0x516, 'rAev')][
                        _0x5b25de(0x2c1, 'ZWj!')
                      ](0x17, -0x2, -0x20),
                        _0x24d375[_0x5b25de(0x845, 'ZXoK')](-Math['PI'] / 0x2),
                        _0x24d375[_0x5b25de(0x7a4, '!vuU')][
                          _0x5b25de(0x3b6, 'ks5y')
                        ](BLOOM_SCENE),
                        this[_0x5b25de(0x1b9, 'Jare')]['add'](_0x24d375);
                    }
                  },
                  _0x19df4e['bLZkB'](_0x31943e, 0xbb8)
                );
          }
          for (
            let _0x1e4068 = 0x0;
            _0x19df4e['PFNNH'](_0x1e4068, 0xe);
            _0x1e4068++
          ) {
            _0x19df4e[_0x33518f(0x2f4, '!ncs')](
              setTimeout,
              () => {
                const _0xfd5a27 = _0x33518f;
                if (!this[_0xfd5a27(0x58b, ')bs3')]) return;
                this[_0xfd5a27(0x327, 'jZCM')]();
              },
              _0x19df4e[_0x33518f(0x66a, 'uUNF')](_0x1e4068, 0x708)
            );
          }
          this[_0x33518f(0x577, 'ZWj!')](),
            this[_0x33518f(0x387, 'i#24')](dashedLineData, 0x912727, 0.03),
            this['loadDengta'](),
            this[_0x33518f(0x298, 'i#24')]();
          const _0x3b3088 = [
            { position: { x: -14.865, y: -2.361, z: 31.599 } },
            { position: { x: -2.692, y: -2.361, z: 31.414 } },
          ];
          this[_0x33518f(0x643, 'wFk%')](_0x3b3088, 0xff00, 0.03);
          const _0x3c27f1 = [
            { position: { x: -14.753, y: -2.361, z: 17.975 } },
            { position: { x: -2.822, y: -2.361, z: 18.1 } },
          ];
          this['loadDashedLines'](_0x3c27f1, 0xff00, 0.03);
        } else {
          const _0x27936d = this['glowLines'](_0x466edd),
            _0xb4078e = _0x1b963e['random']();
          (_0x27936d[_0x33518f(0x272, '&A2z')] = _0xb4078e),
            this[_0x33518f(0x7bd, 'qNG@')][_0x33518f(0x46a, '2djq')](_0x27936d),
            this[_0x33518f(0x860, '7%kX')][_0x33518f(0x831, '!ncs')](_0x27936d);
        }
      },
      function (_0x2a2879) {
        const _0x3d8e7e = _0x402bf5;
        console[_0x3d8e7e(0x5d5, 'u[Qt')](
          _0x19df4e[_0x3d8e7e(0x601, '&A2z')](
            _0x19df4e[_0x3d8e7e(0x3bc, '$cvL')](
              _0x2a2879[_0x3d8e7e(0x7c8, 'Ta41')],
              _0x2a2879[_0x3d8e7e(0x439, 'RyL6')]
            ),
            0x64
          ) + _0x19df4e['EEXiw']
        );
      },
      function (_0xdc5b0a) {
        const _0x77be51 = _0x402bf5;
        if (_0x19df4e['ZfMsS'] === _0x19df4e[_0x77be51(0x2b2, 'DX0Q')]) {
          if (_0x419ff7[_0x77be51(0x7f7, '9sEE')])
            _0x21a14d['layers'][_0x77be51(0x2f2, 'Kk69')](_0x52084f);
        } else console[_0x77be51(0x39f, 'UchA')](_0x77be51(0x496, 'qNG@'));
      }
    );
  }
  [_0x124220(0x29d, 'qNG@')]() {
    const _0xfabace = _0x124220,
      _0x4f73c0 = {
        nIFfs: function (_0x803143, _0x9b9ae4) {
          return _0x803143 / _0x9b9ae4;
        },
        fiUlo: function (_0x5250aa, _0x21f91c, _0x2b592d) {
          return _0x5250aa(_0x21f91c, _0x2b592d);
        },
        veizD: function (_0x528aff, _0x4bc36d) {
          return _0x528aff - _0x4bc36d;
        },
        qZCBe: _0xfabace(0x1ea, ')bs3'),
        CZPGo: _0xfabace(0x80e, 'jZCM'),
        mYqRe: _0xfabace(0x3e9, 'ZTP3'),
        HZHvR: _0xfabace(0x1bf, 'UchA'),
        fnCIQ: 'QqKbB',
        wsaRQ: function (_0x41ce19, _0x3a4453) {
          return _0x41ce19 === _0x3a4453;
        },
        NcWFi: 'rkVoj',
        AkgrX: _0xfabace(0x7e0, 'o7f1'),
        vhBjA: _0xfabace(0x202, '7%kX'),
        vXRKx: function (_0x1ab095) {
          return _0x1ab095();
        },
        zIHxW: _0xfabace(0x5c5, 'S7tx'),
        ERAKy: function (_0x2a6c90, _0x59e94b) {
          return _0x2a6c90 == _0x59e94b;
        },
        MLqrd: '#00486E',
        Qnzko: _0xfabace(0x543, 'G#Vj'),
        VtYfd: _0xfabace(0x812, 'a]m&'),
        tiYjT: '#657074',
        sGfEa: '网格176',
        uKBka: '1|3|0|2|4',
        qIgTx: _0xfabace(0x3ab, 'JVJG'),
        vxMQx: _0xfabace(0x3a3, 'S7tx'),
        ZWXLz: _0xfabace(0x555, 'Aj*g'),
        HsNCs: function (_0x158ff4, _0x3cf4d5) {
          return _0x158ff4 == _0x3cf4d5;
        },
        SgiXt: _0xfabace(0x608, 'UchA'),
        CTvcv: _0xfabace(0x801, 'G#Vj'),
        geyzl: _0xfabace(0x825, 'H]sX'),
        BIEeO: _0xfabace(0x51f, 'Aj*g'),
        qyoPB: _0xfabace(0x829, 'VCBb'),
        VCfai: function (_0x51c6c7, _0x5ab4fb) {
          return _0x51c6c7 / _0x5ab4fb;
        },
        xFZdV: function (_0x1c4917, _0x1ba9c5) {
          return _0x1c4917 < _0x1ba9c5;
        },
        JIsAw: function (_0x7e54a4, _0x537560) {
          return _0x7e54a4 !== _0x537560;
        },
        gRHJn: _0xfabace(0x296, 'qNG@'),
        WKGrM: function (_0x373eb0, _0x21ec71) {
          return _0x373eb0 * _0x21ec71;
        },
        GSuQI: function (_0x504b94, _0x2269c2) {
          return _0x504b94 + _0x2269c2;
        },
        qaJYn: function (_0x323dbe, _0xe17500) {
          return _0x323dbe / _0xe17500;
        },
        LORQQ: _0xfabace(0x28c, 'Yv(m'),
        lmKtH: _0xfabace(0x76f, '$cvL'),
        BGXXn: _0xfabace(0x45d, 'ZXoK'),
      };
    this[_0xfabace(0x565, '&A2z')][_0xfabace(0x753, '9r9(')](
      _0x4f73c0[_0xfabace(0x1f3, 'S7tx')],
      (_0x1b1bc2) => {
        const _0x304bb2 = _0xfabace,
          _0x4cfb4d = {
            LqwDH: function (_0x18a65e, _0x35c514, _0x2dfddf) {
              const _0x5a6554 = _0x3432;
              return _0x4f73c0[_0x5a6554(0x304, 'rccG')](
                _0x18a65e,
                _0x35c514,
                _0x2dfddf
              );
            },
            wlziC: function (_0x44bbc8, _0x45dcae) {
              const _0x56770c = _0x3432;
              return _0x4f73c0[_0x56770c(0x6d8, 'S7tx')](_0x44bbc8, _0x45dcae);
            },
            clSiD: _0x4f73c0[_0x304bb2(0x1ce, 'S7tx')],
            kNkvk: _0x4f73c0[_0x304bb2(0x1c0, ')bs3')],
            jhBZQ: _0x4f73c0[_0x304bb2(0x5ba, 'Jare')],
            lcoym: _0x4f73c0['HZHvR'],
            bifdX: _0x4f73c0[_0x304bb2(0x616, 'cwps')],
            BGTmz: function (_0x36882d, _0x2d163f) {
              const _0x480617 = _0x304bb2;
              return _0x4f73c0[_0x480617(0x652, '&A2z')](_0x36882d, _0x2d163f);
            },
            TZIXx: function (_0x427ec9, _0x287088) {
              return _0x427ec9 !== _0x287088;
            },
            ednNM: _0x4f73c0[_0x304bb2(0x60a, '7%kX')],
            NvyeU: _0x4f73c0[_0x304bb2(0x4e6, '7%kX')],
            JkPjP: _0x304bb2(0x54e, 'Ta41'),
            Bjolo: _0x4f73c0[_0x304bb2(0x549, 'Yv(m')],
            CnZNg: _0x304bb2(0x734, '9r9('),
            PyUXn: function (_0x2b4c58) {
              const _0x35a868 = _0x304bb2;
              return _0x4f73c0[_0x35a868(0x1e1, 'v]cc')](_0x2b4c58);
            },
            cftAl: _0x304bb2(0x72b, 'niup'),
            CtSFN: _0x4f73c0[_0x304bb2(0x525, 'niup')],
            EObZt: _0x304bb2(0x4dd, 'qNG@'),
            RtAUJ: '#061B21',
            TCnkR: function (_0x595369, _0x520b18) {
              const _0xfb23a3 = _0x304bb2;
              return _0x4f73c0[_0xfb23a3(0x294, '9r9(')](_0x595369, _0x520b18);
            },
            sRojD: _0x4f73c0[_0x304bb2(0x4cc, '@cxu')],
            UCgbD: _0x4f73c0[_0x304bb2(0x7ef, '$cvL')],
            ruNZJ: _0x4f73c0[_0x304bb2(0x618, 'uKRM')],
            iwdws: _0x304bb2(0x47a, ')bs3'),
            obSZK: _0x4f73c0[_0x304bb2(0x2bc, '9r9(')],
            bEFXD: _0x4f73c0[_0x304bb2(0x844, 'Kk69')],
            TVCAG: _0x4f73c0[_0x304bb2(0x493, '9sEE')],
            AnXAZ: _0x4f73c0[_0x304bb2(0x760, '$cvL')],
            QAhSV: _0x4f73c0[_0x304bb2(0x594, 'S7tx')],
            IRbpZ: '网格003',
            XbCJl: _0x4f73c0[_0x304bb2(0x299, 'rAev')],
            QgOhJ: function (_0x2e2e20, _0x4daeea) {
              const _0x3c6ea0 = _0x304bb2;
              return _0x4f73c0[_0x3c6ea0(0x2d1, 'JVJG')](_0x2e2e20, _0x4daeea);
            },
            NUgxC: _0x4f73c0['SgiXt'],
            NbIXR: function (_0x318e16, _0xb6c868) {
              return _0x318e16 == _0xb6c868;
            },
            HplHy: _0x4f73c0[_0x304bb2(0x80d, 'u[Qt')],
            acngA: _0x4f73c0[_0x304bb2(0x1ec, 'zYl*')],
            JigDl: '5|4|0|3|2|1',
            JGvhz: '#00C7FA',
            mcPMM: _0x4f73c0['BIEeO'],
            NMEzU: '#000000',
            SnkdH: _0x4f73c0[_0x304bb2(0x3cc, '9r9(')],
            maVhP: _0x304bb2(0x3cd, '2djq'),
            iZWpw: _0x304bb2(0x79c, 'i#24'),
            ZFGIo: function (_0x55c0c9, _0x143e22) {
              const _0x48a247 = _0x304bb2;
              return _0x4f73c0[_0x48a247(0x1d0, 'tNI4')](_0x55c0c9, _0x143e22);
            },
          };
        _0x1b1bc2['scene'][_0x304bb2(0x2b0, 'rmSV')]((_0x3bd268) => {
          const _0x7680c9 = _0x304bb2,
            _0x238cc8 = {
              GyBSN: function (_0x36878f, _0x4b8d89) {
                return _0x36878f == _0x4b8d89;
              },
            };
          if (_0x4cfb4d[_0x7680c9(0x73d, 'a]m&')] === _0x4cfb4d['bifdX']) {
            if (_0x3bd268['isMesh']) {
              _0x3bd268[_0x7680c9(0x661, 'niup')][_0x7680c9(0x23a, 'u[Qt')] =
                DoubleSide;
              if (
                _0x4cfb4d[_0x7680c9(0x45c, 'niup')](
                  _0x3bd268[_0x7680c9(0x719, 'S7tx')],
                  '海面'
                )
              ) {
                if (
                  _0x4cfb4d[_0x7680c9(0x282, 'S7tx')](
                    _0x4cfb4d[_0x7680c9(0x475, 'Jare')],
                    _0x4cfb4d[_0x7680c9(0x1d2, 'G#Vj')]
                  )
                )
                  _0x4cfb4d[_0x7680c9(0x1ef, 'Yv(m')](
                    _0x4bd3ae,
                    () => {
                      if (!this['isShiJiuGang']) return;
                      this['addFlowLine']();
                    },
                    _0x24970e * 0x708
                  );
                else {
                  (this['water'] = new Water(_0x3bd268['geometry'], {
                    textureWidth: 0x200,
                    textureHeight: 0x200,
                    waterNormals: new TextureLoader()[_0x7680c9(0x307, '2djq')](
                      _0x4cfb4d['NvyeU'],
                      (_0x2668e1) => {
                        const _0xf3cf39 = _0x7680c9;
                        _0x2668e1[_0xf3cf39(0x445, 'u[Qt')] = _0x2668e1[
                          'wrapT'
                        ] = RepeatWrapping;
                      }
                    ),
                    sunDirection: this['directionalLight'][
                      _0x7680c9(0x5b0, 'ZXoK')
                    ]
                      [_0x7680c9(0x51d, 'RyL6')]()
                      [_0x7680c9(0x483, 'uUNF')](),
                    sunColor: 0xffffff,
                    waterColor: 0x669ab,
                    distortionScale: 3.7,
                  })),
                    this['water'][_0x7680c9(0x345, '9@W9')][
                      _0x7680c9(0x2a3, 'tNI4')
                    ](ENTIRE_SCENE),
                    this[_0x7680c9(0x218, 'i#24')][_0x7680c9(0x519, '$cvL')][
                      _0x7680c9(0x552, 'UchA')
                    ](_0x3bd268[_0x7680c9(0x323, 'o7f1')]),
                    (this[_0x7680c9(0x21d, 'niup')]['material'][
                      _0x7680c9(0x4c1, 'Kk69')
                    ][_0x7680c9(0x1e8, 'ZXoK')][
                      _0x7680c9(0x5b7, 'uKRM')
                    ] = 0x1b),
                    _0x3bd268['parent']['add'](this[_0x7680c9(0x317, 'a]m&')]),
                    setTimeout(() => {
                      const _0x140b89 = _0x7680c9;
                      _0x3bd268['material'][_0x140b89(0x789, 'qNG@')](),
                        _0x3bd268[_0x140b89(0x2eb, 'qNG@')][
                          _0x140b89(0x57e, 'i#24')
                        ](_0x3bd268);
                    }, 0x0);
                  const _0x51c3e2 = new Sky();
                  _0x51c3e2[_0x7680c9(0x550, 'H]sX')][_0x7680c9(0x290, 'jZCM')](
                    0x2710
                  ),
                    this[_0x7680c9(0x660, 'ZTP3')][_0x7680c9(0x691, 'a]m&')](
                      _0x51c3e2
                    );
                  const _0x3b75aa =
                    _0x51c3e2[_0x7680c9(0x4fd, 'Jare')][
                      _0x7680c9(0x541, 'RyL6')
                    ];
                  (_0x3b75aa['turbidity']['value'] = 0xa),
                    (_0x3b75aa[_0x4cfb4d['JkPjP']][
                      _0x7680c9(0x769, 'zYl*')
                    ] = 0x2),
                    (_0x3b75aa[_0x4cfb4d['Bjolo']][
                      _0x7680c9(0x84e, 'Kk69')
                    ] = 0.005),
                    (_0x3b75aa[_0x4cfb4d[_0x7680c9(0x425, '$cvL')]][
                      _0x7680c9(0x3d0, 'rAev')
                    ] = 0.8);
                  const _0x2a7644 = { elevation: 0x0, azimuth: 0x0 },
                    _0x7e5ea2 = new PMREMGenerator(
                      this[_0x7680c9(0x6ab, 'i#24')]
                    ),
                    _0x3a330f = new Vector3(),
                    _0x2b35b7 = () => {
                      const _0xdc265f = _0x7680c9,
                        _0x4efb47 = MathUtils['degToRad'](
                          _0x4cfb4d['wlziC'](0x5a, _0x2a7644['elevation'])
                        ),
                        _0x3bbcc1 = MathUtils[_0xdc265f(0x81d, 'rmSV')](
                          _0x2a7644['azimuth']
                        );
                      _0x3a330f[_0xdc265f(0x513, 'Kk69')](
                        0x1,
                        _0x4efb47,
                        _0x3bbcc1
                      ),
                        _0x51c3e2[_0xdc265f(0x3df, 'ZTP3')][
                          _0xdc265f(0x73c, 'uKRM')
                        ][_0x4cfb4d[_0xdc265f(0x7ed, 'a]m&')]][
                          _0xdc265f(0x249, '@cxu')
                        ]['copy'](_0x3a330f),
                        this[_0xdc265f(0x74f, 'ZXoK')][
                          _0xdc265f(0x3df, 'ZTP3')
                        ][_0xdc265f(0x5a8, ')bs3')][
                          _0x4cfb4d[_0xdc265f(0x72c, 'uUNF')]
                        ][_0xdc265f(0x385, '9@W9')]
                          [_0xdc265f(0x6ac, 'ZWj!')](_0x3a330f)
                          [_0xdc265f(0x610, 'H]sX')]();
                    };
                  _0x4cfb4d['PyUXn'](_0x2b35b7);
                }
              } else {
                if (
                  _0x3bd268[_0x7680c9(0x3a0, '7%kX')] ===
                  _0x4cfb4d[_0x7680c9(0x4d3, 'qNG@')]
                ) {
                  const _0x30a120 = _0x7680c9(0x6fc, 'qNG@'),
                    _0x3d7a3a = _0x7680c9(0x532, 'tNI4');
                  _0x3bd268['geometry']['computeVertexNormals'](),
                    (this[_0x7680c9(0x5b4, 'rccG')] = {
                      roughness: { value: 0x1 },
                      emissive: {
                        value: new Color(_0x4cfb4d[_0x7680c9(0x7ec, 'Ta41')]),
                      },
                      opacity: { value: 0.8 },
                      baseTexture: {
                        value: new TextureLoader()['load'](
                          _0x7680c9(0x694, 'o7f1')
                        ),
                      },
                    });
                  const _0x564683 = new ShaderMaterial({
                    uniforms: this['pluniforms'],
                    vertexShader: _0x30a120,
                    fragmentShader: _0x3d7a3a,
                    transparent: !![],
                  });
                  (_0x3bd268[_0x7680c9(0x507, 'uUNF')] = _0x564683),
                    (_0x3bd268[_0x7680c9(0x700, 'LMyx')][
                      _0x7680c9(0x3f9, 'rccG')
                    ] = !0x0),
                    _0x3bd268[_0x7680c9(0x627, '9r9(')][
                      _0x7680c9(0x1cd, '9@W9')
                    ](BLOOM_SCENE);
                } else {
                  if (
                    _0x3bd268[_0x7680c9(0x354, 'u9nJ')] ==
                    _0x4cfb4d[_0x7680c9(0x82f, 'zYl*')]
                  )
                    (_0x3bd268[_0x7680c9(0x72d, 'wFk%')][
                      _0x7680c9(0x740, 'Aj*g')
                    ] = new Color(_0x7680c9(0x5d6, 'ZmW^'))),
                      (_0x3bd268['material'][_0x7680c9(0x512, '@cxu')] =
                        new Color(_0x4cfb4d[_0x7680c9(0x57a, 'LMyx')])),
                      (_0x3bd268[_0x7680c9(0x55a, 'v]cc')][
                        _0x7680c9(0x6c5, 'wFk%')
                      ] = 0.4),
                      (_0x3bd268['material']['metalness'] = 0.72),
                      (_0x3bd268[_0x7680c9(0x644, 'ZmW^')]['needsUpdate'] =
                        !0x0),
                      _0x3bd268[_0x7680c9(0x1e3, 'tNI4')][
                        _0x7680c9(0x4ca, '7%kX')
                      ](BLOOM_SCENE);
                  else {
                    if (
                      _0x4cfb4d[_0x7680c9(0x802, 'qNG@')](
                        _0x3bd268[_0x7680c9(0x4c3, 'ZmW^')],
                        _0x7680c9(0x56e, 'a]m&')
                      )
                    )
                      (_0x3bd268[_0x7680c9(0x57c, 'H]sX')][
                        _0x7680c9(0x51b, '2djq')
                      ] = new Color(_0x4cfb4d['lcoym'])),
                        (_0x3bd268[_0x7680c9(0x507, 'uUNF')][
                          _0x7680c9(0x261, 'Pw)Z')
                        ] = new Color('#001617')),
                        (_0x3bd268[_0x7680c9(0x1d6, 'Aj*g')][
                          _0x7680c9(0x527, '7%kX')
                        ] = 0.5),
                        (_0x3bd268['material'][_0x7680c9(0x823, 'i#24')] = 0.5),
                        (_0x3bd268[_0x7680c9(0x786, 'ZWj!')]['needsUpdate'] =
                          !0x0),
                        _0x3bd268[_0x7680c9(0x750, 'i#24')][
                          _0x7680c9(0x842, '@cxu')
                        ](BLOOM_SCENE);
                    else {
                      if (
                        _0x4cfb4d['TCnkR'](
                          _0x3bd268[_0x7680c9(0x268, '9@W9')],
                          _0x7680c9(0x23c, 'ZmW^')
                        )
                      )
                        (_0x3bd268[_0x7680c9(0x507, 'uUNF')][
                          _0x7680c9(0x20a, '2djq')
                        ] = new Color(_0x4cfb4d[_0x7680c9(0x336, 'LMyx')])),
                          (_0x3bd268[_0x7680c9(0x4c2, 'G#Vj')][
                            _0x7680c9(0x569, 'UchA')
                          ] = new Color(_0x4cfb4d[_0x7680c9(0x4f0, 'a]m&')])),
                          (_0x3bd268[_0x7680c9(0x3df, 'ZTP3')][
                            _0x7680c9(0x419, 'rccG')
                          ] = 0.4),
                          (_0x3bd268[_0x7680c9(0x239, 'RKdF')][
                            _0x7680c9(0x342, '2djq')
                          ] = 0.72),
                          (_0x3bd268[_0x7680c9(0x6d5, '!vuU')][
                            _0x7680c9(0x560, '$cvL')
                          ] = !0x0),
                          _0x3bd268[_0x7680c9(0x1e3, 'tNI4')][
                            _0x7680c9(0x23d, 'G#Vj')
                          ](BLOOM_SCENE);
                      else {
                        if (
                          _0x4cfb4d[_0x7680c9(0x4a2, 'Aj*g')](
                            _0x3bd268[_0x7680c9(0x479, ')bs3')],
                            _0x4cfb4d['UCgbD']
                          )
                        ) {
                          const _0x4b5fa1 =
                            _0x4cfb4d[_0x7680c9(0x49e, '2djq')]['split']('|');
                          let _0x24a273 = 0x0;
                          while (!![]) {
                            switch (_0x4b5fa1[_0x24a273++]) {
                              case '0':
                                _0x3bd268[_0x7680c9(0x6d5, '!vuU')][
                                  _0x7680c9(0x215, '$cvL')
                                ] = 0.5;
                                continue;
                              case '1':
                                _0x3bd268[_0x7680c9(0x48d, 'uKRM')][
                                  'emissive'
                                ] = new Color(_0x7680c9(0x5bd, 'Pw)Z'));
                                continue;
                              case '2':
                                _0x3bd268[_0x7680c9(0x25b, '&A2z')][
                                  _0x7680c9(0x1cd, '9@W9')
                                ](BLOOM_SCENE);
                                continue;
                              case '3':
                                _0x3bd268[_0x7680c9(0x6d5, '!vuU')][
                                  _0x7680c9(0x527, '7%kX')
                                ] = 0.5;
                                continue;
                              case '4':
                                _0x3bd268['material'][
                                  _0x7680c9(0x3f9, 'rccG')
                                ] = !0x0;
                                continue;
                              case '5':
                                _0x3bd268[_0x7680c9(0x72d, 'wFk%')][
                                  _0x7680c9(0x7f0, 'tNI4')
                                ] = new Color(
                                  _0x4cfb4d[_0x7680c9(0x5a4, 'DX0Q')]
                                );
                                continue;
                            }
                            break;
                          }
                        } else {
                          if (_0x3bd268[_0x7680c9(0x326, '&A2z')] == '网格')
                            (_0x3bd268[_0x7680c9(0x666, 'jZCM')][
                              _0x7680c9(0x613, '9@W9')
                            ] = new Color(_0x4cfb4d[_0x7680c9(0x6cc, 'o7f1')])),
                              (_0x3bd268[_0x7680c9(0x3cb, '&A2z')][
                                _0x7680c9(0x455, 'Kk69')
                              ] = new Color(_0x4cfb4d['obSZK'])),
                              (_0x3bd268[_0x7680c9(0x62b, 'Aj*g')]['y'] += 0.3),
                              (_0x3bd268['material']['roughness'] = 0.6),
                              (_0x3bd268[_0x7680c9(0x792, 'rmSV')][
                                _0x7680c9(0x2e6, '!ncs')
                              ] = 0.21),
                              (_0x3bd268[_0x7680c9(0x4c2, 'G#Vj')][
                                _0x7680c9(0x203, 'rmSV')
                              ] = !0x0);
                          else {
                            if (
                              _0x4cfb4d[_0x7680c9(0x59a, 'i#24')](
                                _0x3bd268[_0x7680c9(0x848, 'RKdF')],
                                _0x4cfb4d['bEFXD']
                              )
                            ) {
                              const _0x50883d =
                                _0x4cfb4d[_0x7680c9(0x7bf, '&A2z')][
                                  _0x7680c9(0x585, 'Aj*g')
                                ]('|');
                              let _0x59d8b0 = 0x0;
                              while (!![]) {
                                switch (_0x50883d[_0x59d8b0++]) {
                                  case '0':
                                    _0x3bd268[_0x7680c9(0x7f1, 'u9nJ')][
                                      _0x7680c9(0x4fa, 'Yv(m')
                                    ] = new Color(
                                      _0x4cfb4d[_0x7680c9(0x1d4, '9sEE')]
                                    );
                                    continue;
                                  case '1':
                                    _0x3bd268[_0x7680c9(0x7c3, 'Yv(m')][
                                      _0x7680c9(0x253, 'Kk69')
                                    ] = 0.3;
                                    continue;
                                  case '2':
                                    _0x3bd268[_0x7680c9(0x57c, 'H]sX')][
                                      'needsUpdate'
                                    ] = !0x0;
                                    continue;
                                  case '3':
                                    _0x3bd268[_0x7680c9(0x561, '!ncs')][
                                      'metalness'
                                    ] = 0.5;
                                    continue;
                                  case '4':
                                    _0x3bd268[_0x7680c9(0x76c, '9sEE')][
                                      _0x7680c9(0x393, 'Yv(m')
                                    ](BLOOM_SCENE);
                                    continue;
                                }
                                break;
                              }
                            } else {
                              if (
                                _0x4cfb4d[_0x7680c9(0x45b, 'ZWj!')](
                                  _0x3bd268[_0x7680c9(0x58e, 'a]m&')],
                                  '道路'
                                )
                              ) {
                                const _0x3e5be5 =
                                  _0x4cfb4d[_0x7680c9(0x395, 'niup')]['split'](
                                    '|'
                                  );
                                let _0x176d5b = 0x0;
                                while (!![]) {
                                  switch (_0x3e5be5[_0x176d5b++]) {
                                    case '0':
                                      _0x3bd268[_0x7680c9(0x7bc, 'Kk69')][
                                        _0x7680c9(0x73f, 'u[Qt')
                                      ] = !0x0;
                                      continue;
                                    case '1':
                                      _0x3bd268['material']['metalness'] = 0.21;
                                      continue;
                                    case '2':
                                      _0x3bd268['material'][
                                        _0x7680c9(0x5d1, '9@W9')
                                      ] = 0.6;
                                      continue;
                                    case '3':
                                      _0x3bd268['material']['color'] =
                                        new Color(_0x7680c9(0x764, 'i#24'));
                                      continue;
                                    case '4':
                                      _0x3bd268[_0x7680c9(0x3cb, '&A2z')][
                                        'emissive'
                                      ] = new Color(_0x7680c9(0x4ae, '!ncs'));
                                      continue;
                                  }
                                  break;
                                }
                              } else {
                                if (
                                  _0x3bd268[_0x7680c9(0x4ff, 'wFk%')] ==
                                    _0x4cfb4d['QAhSV'] ||
                                  _0x3bd268[_0x7680c9(0x5f6, '9r9(')] ==
                                    _0x4cfb4d[_0x7680c9(0x265, 'jZCM')]
                                ) {
                                  if (
                                    _0x4cfb4d[_0x7680c9(0x309, 'rccG')](
                                      _0x4cfb4d[_0x7680c9(0x297, 'H]sX')],
                                      'Htcii'
                                    )
                                  ) {
                                    const _0x195aa8 = '5|4|2|1|0|3'[
                                      _0x7680c9(0x80b, 'qNG@')
                                    ]('|');
                                    let _0x220673 = 0x0;
                                    while (!![]) {
                                      switch (_0x195aa8[_0x220673++]) {
                                        case '0':
                                          _0x56f6d1[_0x7680c9(0x482, ')bs3')][
                                            _0x7680c9(0x3f9, 'rccG')
                                          ] = !0x0;
                                          continue;
                                        case '1':
                                          _0x1d7535['material'][
                                            _0x7680c9(0x4db, 'Kk69')
                                          ] = 0.5;
                                          continue;
                                        case '2':
                                          _0x196855['material'][
                                            _0x7680c9(0x2ef, 'Yv(m')
                                          ] = 0.5;
                                          continue;
                                        case '3':
                                          _0x4cb514[_0x7680c9(0x310, 'DX0Q')][
                                            _0x7680c9(0x5f5, 'u[Qt')
                                          ](_0x55fac7);
                                          continue;
                                        case '4':
                                          _0x53569b[_0x7680c9(0x4fd, 'Jare')][
                                            'color'
                                          ] = new _0x40a779(
                                            _0x4cfb4d[_0x7680c9(0x37a, 'ZXoK')]
                                          );
                                          continue;
                                        case '5':
                                          _0x58556e['material'][
                                            _0x7680c9(0x774, 'jZCM')
                                          ] = new _0x7a0550(
                                            _0x4cfb4d[_0x7680c9(0x70c, 'JVJG')]
                                          );
                                          continue;
                                      }
                                      break;
                                    }
                                  } else
                                    (_0x3bd268[_0x7680c9(0x3b9, 'i#24')][
                                      _0x7680c9(0x404, 'H]sX')
                                    ] = 0.55),
                                      (_0x3bd268[_0x7680c9(0x57c, 'H]sX')][
                                        _0x7680c9(0x834, 'zYl*')
                                      ] = 0x0),
                                      (_0x3bd268[_0x7680c9(0x758, '2djq')][
                                        'needsUpdate'
                                      ] = !0x0),
                                      _0x3bd268[_0x7680c9(0x4ab, 'Jare')][
                                        _0x7680c9(0x728, 'S7tx')
                                      ](BLOOM_SCENE);
                                } else {
                                  if (
                                    _0x4cfb4d[_0x7680c9(0x5af, 'uUNF')](
                                      _0x3bd268[_0x7680c9(0x61a, 'UchA')],
                                      _0x4cfb4d['NUgxC']
                                    ) ||
                                    _0x4cfb4d['NbIXR'](
                                      _0x3bd268[_0x7680c9(0x5fc, '!ncs')],
                                      _0x4cfb4d[_0x7680c9(0x6e6, '@cxu')]
                                    )
                                  )
                                    _0x4cfb4d['HplHy'] !== _0x4cfb4d['HplHy']
                                      ? this['models'][
                                          _0x7680c9(0x266, 'u[Qt')
                                        ]((_0x5cc783) => {
                                          const _0x1e68bb = _0x7680c9;
                                          if (
                                            !_0x5cc783[_0x1e68bb(0x7d5, 'G#Vj')]
                                          )
                                            return;
                                          _0x238cc8['GyBSN'](
                                            _0x5cc783[_0x1e68bb(0x29f, 'qNG@')],
                                            '网格170'
                                          ) &&
                                            ((_0x5cc783['material'][
                                              _0x1e68bb(0x24c, 'a]m&')
                                            ] = new _0x187914(_0x3a1b2e)),
                                            (_0x5cc783['material'][
                                              _0x1e68bb(0x6f5, 'u9nJ')
                                            ] = !0x0));
                                        })
                                      : ((_0x3bd268['material'][
                                          _0x7680c9(0x384, 'RyL6')
                                        ] = 0.55),
                                        (_0x3bd268['material'][
                                          'metalness'
                                        ] = 0x0),
                                        (_0x3bd268['material']['needsUpdate'] =
                                          !0x0),
                                        _0x3bd268[_0x7680c9(0x4ab, 'Jare')][
                                          'enable'
                                        ](BLOOM_SCENE));
                                  else {
                                    if (
                                      _0x4cfb4d[_0x7680c9(0x635, '&A2z')](
                                        _0x3bd268[_0x7680c9(0x7d7, 'DX0Q')],
                                        _0x4cfb4d[_0x7680c9(0x6c7, 'ZXoK')]
                                      )
                                    ) {
                                      const _0x4bf5af =
                                        _0x4cfb4d[_0x7680c9(0x524, '@cxu')][
                                          _0x7680c9(0x4fe, 'Yv(m')
                                        ]('|');
                                      let _0x56cb05 = 0x0;
                                      while (!![]) {
                                        switch (_0x4bf5af[_0x56cb05++]) {
                                          case '0':
                                            _0x3bd268[_0x7680c9(0x77a, 'cwps')][
                                              _0x7680c9(0x61c, 'rmSV')
                                            ] = 0.55;
                                            continue;
                                          case '1':
                                            _0x3bd268[_0x7680c9(0x300, 'Aj*g')][
                                              'enable'
                                            ](BLOOM_SCENE);
                                            continue;
                                          case '2':
                                            _0x3bd268[_0x7680c9(0x57c, 'H]sX')][
                                              _0x7680c9(0x716, 'rAev')
                                            ] = !0x0;
                                            continue;
                                          case '3':
                                            _0x3bd268[_0x7680c9(0x77a, 'cwps')][
                                              'metalness'
                                            ] = 0.5;
                                            continue;
                                          case '4':
                                            _0x3bd268[_0x7680c9(0x786, 'ZWj!')][
                                              _0x7680c9(0x83b, 'u9nJ')
                                            ] = new Color(
                                              _0x4cfb4d[
                                                _0x7680c9(0x1e0, 'Jare')
                                              ]
                                            );
                                            continue;
                                          case '5':
                                            _0x3bd268[_0x7680c9(0x852, 'ks5y')][
                                              _0x7680c9(0x6b4, '!vuU')
                                            ] = new Color('#00FFFF');
                                            continue;
                                        }
                                        break;
                                      }
                                    } else {
                                      if (
                                        _0x3bd268[_0x7680c9(0x67d, 'LMyx')] ==
                                        '网格006_1'
                                      ) {
                                        const _0x43e584 =
                                          _0x4cfb4d[_0x7680c9(0x415, 'Jare')][
                                            'split'
                                          ]('|');
                                        let _0xe8975e = 0x0;
                                        while (!![]) {
                                          switch (_0x43e584[_0xe8975e++]) {
                                            case '0':
                                              _0x3bd268[
                                                _0x7680c9(0x7d3, 'ZTP3')
                                              ][_0x7680c9(0x6f4, 'a]m&')](
                                                BLOOM_SCENE
                                              );
                                              continue;
                                            case '1':
                                              _0x3bd268[
                                                _0x7680c9(0x1c7, 'DX0Q')
                                              ][_0x7680c9(0x4df, 'Pw)Z')] =
                                                !0x0;
                                              continue;
                                            case '2':
                                              _0x3bd268[
                                                _0x7680c9(0x846, 'zYl*')
                                              ][_0x7680c9(0x74d, 'u[Qt')] = 0x0;
                                              continue;
                                            case '3':
                                              _0x3bd268[
                                                _0x7680c9(0x3bd, '7%kX')
                                              ]['roughness'] = 0.55;
                                              continue;
                                            case '4':
                                              _0x3bd268[
                                                _0x7680c9(0x55c, 'rccG')
                                              ][_0x7680c9(0x380, '9sEE')] =
                                                new Color(
                                                  _0x4cfb4d[
                                                    _0x7680c9(0x791, 'UchA')
                                                  ]
                                                );
                                              continue;
                                            case '5':
                                              _0x3bd268[
                                                _0x7680c9(0x718, 'Pw)Z')
                                              ]['color'] = new Color(
                                                _0x4cfb4d['SnkdH']
                                              );
                                              continue;
                                          }
                                          break;
                                        }
                                      } else
                                        _0x3bd268[_0x7680c9(0x27d, 'ZXoK')][
                                          _0x7680c9(0x377, 'DX0Q')
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
          } else
            _0x146ff5[_0x7680c9(0x590, 'DX0Q')]((_0xc97ce1) => {
              const _0x54e8aa = _0x7680c9;
              _0x49701b[_0x54e8aa(0x514, 'RyL6')](
                new _0x430ff1(
                  _0xc97ce1[_0x54e8aa(0x725, 'RyL6')]['x'],
                  _0xc97ce1['position']['y'],
                  _0xc97ce1[_0x54e8aa(0x28f, 'zYl*')]['z']
                )
              );
            });
        }),
          this[_0x304bb2(0x6d9, 'zYl*')]['add'](
            _0x1b1bc2[_0x304bb2(0x348, 'qNG@')]
          );
        for (
          let _0xdf8bc4 = 0x0;
          _0x4f73c0['xFZdV'](_0xdf8bc4, 0x3);
          _0xdf8bc4++
        ) {
          if (
            _0x4f73c0[_0x304bb2(0x564, 'ZTP3')](
              _0x4f73c0[_0x304bb2(0x45e, 'rccG')],
              _0x304bb2(0x5c0, 'uUNF')
            )
          ) {
            let _0x4bda86 = this['scatterCircle'](
              0x10,
              0.1,
              0.5,
              new _0x5c1958(0x0, 0x1, 0x1),
              0.2
            );
            _0x4bda86[_0x304bb2(0x6e5, 'uUNF')][_0x304bb2(0x7ab, 'uUNF')](
              -18.851,
              0.5,
              13.5
            ),
              _0x4bda86[_0x304bb2(0x45a, 'cwps')](
                _0x4f73c0['nIFfs'](-_0x40286c['PI'], 0x2)
              ),
              _0x4bda86[_0x304bb2(0x750, 'i#24')][_0x304bb2(0x2a3, 'tNI4')](
                _0x2766bf
              ),
              this[_0x304bb2(0x6c9, 'DX0Q')]['add'](_0x4bda86);
          } else
            _0x4f73c0['fiUlo'](
              setTimeout,
              () => {
                const _0x5a179e = _0x304bb2;
                if (
                  _0x4cfb4d[_0x5a179e(0x586, 'ZWj!')] ===
                  _0x4cfb4d[_0x5a179e(0x4fc, 'i#24')]
                ) {
                  if (_0x40b275['deviceId'] === _0x533ce0)
                    _0x34c663 = _0x434edf;
                } else {
                  let _0x1f5543 = this[_0x5a179e(0x259, 'i#24')](
                    0x10,
                    0.1,
                    0.5,
                    new Vector3(0x0, 0x1, 0x1),
                    0.2
                  );
                  _0x1f5543[_0x5a179e(0x6c1, '9@W9')]['set'](
                    -18.851,
                    0.5,
                    13.5
                  ),
                    _0x1f5543[_0x5a179e(0x6f6, '&A2z')](
                      _0x4cfb4d[_0x5a179e(0x40c, 'uKRM')](-Math['PI'], 0x2)
                    ),
                    _0x1f5543[_0x5a179e(0x4bc, 'o7f1')][
                      _0x5a179e(0x3b6, 'ks5y')
                    ](BLOOM_SCENE),
                    this['models']['add'](_0x1f5543);
                }
              },
              _0x4f73c0[_0x304bb2(0x78e, '7%kX')](_0xdf8bc4, 0xbb8)
            );
        }
        this[_0x304bb2(0x1ee, 'DX0Q')](dashedLineDataLan, 0x912727, 0.03),
          this[_0x304bb2(0x28a, 'rAev')]();
      },
      function (_0x3e21cd) {
        const _0x77ff7a = _0xfabace;
        console[_0x77ff7a(0x4ef, '9@W9')](
          _0x4f73c0[_0x77ff7a(0x347, 'S7tx')](
            _0x4f73c0[_0x77ff7a(0x70f, 'zYl*')](
              _0x3e21cd[_0x77ff7a(0x31e, '!ncs')],
              _0x3e21cd[_0x77ff7a(0x4ea, ')bs3')]
            ) * 0x64,
            _0x4f73c0[_0x77ff7a(0x274, 'LMyx')]
          )
        );
      },
      function (_0x49d6bf) {
        const _0x50aee1 = _0xfabace;
        console['log'](_0x4f73c0[_0x50aee1(0x815, 'ZXoK')]);
      }
    );
  }
  [_0x124220(0x69b, 'uUNF')](_0x13809e) {
    const _0x53ff0c = _0x124220;
    _0x13809e[_0x53ff0c(0x5b8, 'LMyx')] &&
      bloomLayer[_0x53ff0c(0x2e7, 'RyL6')](
        _0x13809e[_0x53ff0c(0x632, 'qNG@')]
      ) === ![] &&
      ((materials[_0x13809e['uuid']] = _0x13809e['material']),
      (_0x13809e[_0x53ff0c(0x7f1, 'u9nJ')] = darkMaterial));
  }
  [_0x124220(0x1f4, '7%kX')](_0x33fb91) {
    const _0x43b39c = _0x124220,
      _0x5cb67d = {
        LMtdY: _0x43b39c(0x1c3, 'DX0Q'),
        NdNsi: _0x43b39c(0x2e2, '9sEE'),
        XgBmR: _0x43b39c(0x655, 'cwps'),
      };
    if (materials[_0x33fb91['uuid']]) {
      if (_0x5cb67d[_0x43b39c(0x4e2, 'uUNF')] === _0x5cb67d['XgBmR'])
        (_0x33fb91[_0x43b39c(0x3cb, '&A2z')] =
          materials[_0x33fb91[_0x43b39c(0x56f, 'i#24')]]),
          delete materials[_0x33fb91[_0x43b39c(0x3b0, '7%kX')]];
      else {
        const _0x38dd3a = [
          {
            position: new _0x178fab(1.7, -2.45, -3.35),
            rotation: new _0x48f79d(0x0, 0x0, 0x0, 'XYZ'),
          },
          {
            position: new _0x26edf9(1.7, -2.45, -13.15),
            rotation: new _0x544002(0x0, 0x0, 0x0, _0x5cb67d['LMtdY']),
          },
          {
            position: new _0x1b6e66(1.7, -2.45, -21.95),
            rotation: new _0x14e259(
              0x0,
              0x0,
              0x0,
              _0x5cb67d[_0x43b39c(0x238, 'o7f1')]
            ),
          },
          {
            position: new _0x3fd606(-3.4, -2.45, 59.142),
            rotation: new _0x52f48f(0x0, 0x0, 0x0, _0x43b39c(0x5e9, 'Pw)Z')),
          },
          {
            position: new _0x312360(-16.6, -2.45, 35.985),
            rotation: new _0x119025(
              0x0,
              0x0,
              0x0,
              _0x5cb67d[_0x43b39c(0x41f, '!vuU')]
            ),
          },
          {
            position: new _0x2ac82e(-16.6, -2.45, 28.043),
            rotation: new _0x557c42(0x0, 0x0, 0x0, _0x43b39c(0x5e9, 'Pw)Z')),
          },
          {
            position: new _0xe48b1d(-16.6, -2.45, 20.358),
            rotation: new _0x1184a3(
              0x0,
              0x0,
              0x0,
              _0x5cb67d[_0x43b39c(0x724, 'wFk%')]
            ),
          },
          {
            position: new _0x172385(12.7, -2.45, -0x19),
            rotation: new _0x212c1d(
              0x0,
              -0.21,
              0x0,
              _0x5cb67d[_0x43b39c(0x2dd, '$cvL')]
            ),
          },
          {
            position: new _0x25c9fb(-3.4, -2.45, 51.226),
            rotation: new _0x34e201(0x0, 0x0, 0x0, _0x43b39c(0x7f2, 'Aj*g')),
          },
          {
            position: new _0x16c1d0(11.7, -2.45, -0x12),
            rotation: new _0xb5a9c7(0x0, -0.21, 0x0, _0x43b39c(0x2fb, 'S7tx')),
          },
        ];
        this['gltfLoader'][_0x43b39c(0x376, 'o7f1')](
          _0x5cb67d[_0x43b39c(0x82b, 'Pw)Z')],
          (_0x105645) => {
            const _0x340c78 = _0x43b39c;
            _0x105645[_0x340c78(0x442, 'RyL6')][_0x340c78(0x1cf, 'JVJG')](
              (_0x126da2) => {
                const _0x44c412 = _0x340c78;
                if (_0x126da2[_0x44c412(0x55d, ')bs3')])
                  _0x126da2[_0x44c412(0x1e3, 'tNI4')][_0x44c412(0x679, 'Ta41')](
                    _0x6d6200
                  );
              }
            ),
              _0x105645['scene']['scale'][_0x340c78(0x41e, 'JVJG')](
                0.3,
                0.3,
                0.3
              ),
              _0x38dd3a[_0x340c78(0x24e, 'ZXoK')]((_0x280e8a) => {
                const _0x2994ee = _0x340c78,
                  _0x33ace5 =
                    _0x105645[_0x2994ee(0x755, 'Kk69')][
                      _0x2994ee(0x853, '9@W9')
                    ]();
                _0x33ace5['position']['copy'](
                  _0x280e8a[_0x2994ee(0x2e1, 'Jare')]
                ),
                  _0x33ace5[_0x2994ee(0x2ce, '!ncs')][_0x2994ee(0x4d9, 'qNG@')](
                    _0x280e8a[_0x2994ee(0x25c, 'G#Vj')]
                  ),
                  this[_0x2994ee(0x4d6, 'uKRM')][_0x2994ee(0x32e, '!vuU')](
                    _0x33ace5
                  );
              }),
              (this[_0x340c78(0x456, 'JVJG')] =
                _0x105645[_0x340c78(0x421, 'ks5y')]['clone']()),
              this[_0x340c78(0x81a, 'UchA')][_0x340c78(0x43d, 'uKRM')][
                _0x340c78(0x340, 'H]sX')
              ](3.9, -2.45, 5.708),
              this[_0x340c78(0x490, 'ZWj!')][_0x340c78(0x71d, 'Yv(m')](
                -_0x5d58e9['PI'] / 0x2
              ),
              this['models'][_0x340c78(0x699, 'Ta41')](this['ship']);
          }
        );
      }
    }
  }
  [_0x124220(0x849, 'Yv(m')]() {
    const _0x48bed7 = _0x124220;
    this['scene'][_0x48bed7(0x237, 'Jare')](
      this[_0x48bed7(0x604, 'JVJG')][_0x48bed7(0x244, 'RyL6')](this)
    ),
      this[_0x48bed7(0x6cd, 'jZCM')]['render'](),
      this['scene']['traverse'](this['restoreMaterial']['bind'](this));
  }
  [_0x124220(0x5e6, '7%kX')](_0x221fd6) {
    const _0x267173 = _0x124220,
      _0x3d4a5d = {
        BUfVV: _0x267173(0x488, '&A2z'),
        yHjZy: _0x267173(0x36c, 'H]sX'),
        JGDLF: _0x267173(0x2d7, 'niup'),
        IAECb: _0x267173(0x51e, 'ks5y'),
      },
      _0x44c635 = new Group(),
      _0x4ab39e = [];
    _0x4ab39e[_0x267173(0x320, 'Ta41')](
      new Vector3(_0x221fd6['x'], -0x8, _0x221fd6['z'])
    ),
      _0x4ab39e[_0x267173(0x386, 'rccG')](
        new Vector3(_0x221fd6['x'], -0x2, _0x221fd6['z'])
      );
    const _0x3a172a = new BufferGeometry()['setFromPoints'](_0x4ab39e),
      _0x427a35 = new LineDashedMaterial({
        color: 0x22caeb,
        dashSize: 0.1,
        gapSize: 0.2,
      }),
      _0xfd5e6c = new Line(_0x3a172a, _0x427a35);
    _0xfd5e6c[_0x267173(0x4ee, 'rmSV')](),
      _0xfd5e6c[_0x267173(0x25b, '&A2z')][_0x267173(0x842, '@cxu')](
        BLOOM_SCENE
      ),
      _0x44c635[_0x267173(0x81b, 'zYl*')](_0xfd5e6c);
    const _0xb2de8c = _0x267173(0x69f, 'RyL6'),
      _0x2810ef = _0x267173(0x71e, 'cwps'),
      _0xa50173 = [0x1],
      _0xecb664 = [0.13, 0.8, 0.95],
      _0x249399 = [_0x221fd6['x'], -0x2, _0x221fd6['z']],
      _0x1cb4d0 = new BufferGeometry();
    _0x1cb4d0[_0x267173(0x1b4, ')bs3')](
      _0x3d4a5d['BUfVV'],
      new Float32BufferAttribute(_0x249399, 0x3)
    ),
      _0x1cb4d0[_0x267173(0x6ee, 'rccG')](
        _0x3d4a5d[_0x267173(0x1c6, ')bs3')],
        new Float32BufferAttribute(_0xecb664, 0x3)
      ),
      _0x1cb4d0[_0x267173(0x5c6, 'uUNF')](
        _0x3d4a5d['JGDLF'],
        new Float32BufferAttribute(_0xa50173, 0x1)
      );
    const _0x9d3b96 = new ShaderMaterial({
        uniforms: {
          color: { value: new Color(0xffffff) },
          pointTexture: {
            value: new TextureLoader()['load'](
              _0x3d4a5d[_0x267173(0x7fd, 'ks5y')]
            ),
          },
          alphaTest: { value: 0x1 },
        },
        vertexShader: _0xb2de8c,
        fragmentShader: _0x2810ef,
      }),
      _0x1312aa = new Points(_0x1cb4d0, _0x9d3b96);
    return (
      _0x1312aa[_0x267173(0x303, 'a]m&')][_0x267173(0x377, 'DX0Q')](
        BLOOM_SCENE
      ),
      _0x44c635['add'](_0x1312aa),
      _0x44c635
    );
  }
  [_0x124220(0x76b, '7%kX')](
    _0x2741fe,
    _0x2965a0,
    _0x277b28,
    _0xff5f10,
    _0x5e27e4
  ) {
    const _0x1de54a = _0x124220,
      _0x406413 = {
        UtNzl: function (_0x54e64f, _0x322dc3) {
          return _0x54e64f <= _0x322dc3;
        },
        TBzmA: function (_0x5d6f43, _0x5e676f) {
          return _0x5d6f43 / _0x5e676f;
        },
        liBaB: function (_0xa3b20d, _0x4e33f4) {
          return _0xa3b20d * _0x4e33f4;
        },
        gwtqB: function (_0x30214e, _0x296258) {
          return _0x30214e >= _0x296258;
        },
        RaTMf: function (_0x1c9087, _0x2a2082) {
          return _0x1c9087 === _0x2a2082;
        },
        mxVzX: _0x1de54a(0x316, '$cvL'),
        ndtpZ: _0x1de54a(0x2f7, 'niup'),
      };
    var _0x4b2bee = {
        u_color: { value: _0xff5f10 },
        u_r: { value: _0x2965a0 },
        u_ring: { value: _0x277b28 },
      },
      _0x3b1c11 = _0x1de54a(0x508, 'Aj*g'),
      _0x33bd72 = _0x1de54a(0x80f, 'G#Vj');
    const _0x3baee5 = new CircleGeometry(_0x2741fe, 0x40);
    var _0x3065ad = new ShaderMaterial({
      vertexShader: _0x3b1c11,
      fragmentShader: _0x33bd72,
      side: DoubleSide,
      uniforms: _0x4b2bee,
      transparent: !![],
      depthWrite: !![],
      blending: AdditiveBlending,
      transparent: !0x0,
    });
    const _0xd2c36e = new Mesh(_0x3baee5, _0x3065ad);
    function _0x48c455() {
      const _0x4c0025 = _0x1de54a;
      if (
        _0x406413[_0x4c0025(0x36d, 'tNI4')](
          _0x4b2bee[_0x4c0025(0x271, 'u9nJ')][_0x4c0025(0x286, 'RyL6')],
          (_0x2741fe * 0x2) / 0x3
        ) &&
        _0x4b2bee[_0x4c0025(0x5c3, 'Pw)Z')][_0x4c0025(0x797, 'Ta41')] >=
          _0x406413[_0x4c0025(0x3c0, '!ncs')](
            _0x406413['liBaB'](_0x2741fe, 0x1),
            0x3
          )
      )
        _0x4b2bee[_0x4c0025(0x4f1, 'cwps')][_0x4c0025(0x36b, 'ZXoK')] +=
          _0x5e27e4;
      else
        _0x4b2bee[_0x4c0025(0x4f2, 'ZXoK')][_0x4c0025(0x2ea, 'u9nJ')] +=
          _0x5e27e4 * 0.1;
      _0x406413[_0x4c0025(0x3b7, 'u[Qt')](
        _0x4b2bee[_0x4c0025(0x528, 'v]cc')][_0x4c0025(0x1e7, '!vuU')],
        _0x2741fe
      ) &&
        (_0x406413[_0x4c0025(0x27f, 'jZCM')](
          _0x406413['mxVzX'],
          _0x406413[_0x4c0025(0x574, '@cxu')]
        )
          ? (this[_0x4c0025(0x5ef, 'uKRM')](this[_0x4c0025(0x7f9, 'ks5y')]),
            this[_0x4c0025(0x281, 'uUNF')][_0x4c0025(0x470, 'jZCM')]())
          : (_0x4b2bee['u_r']['value'] = _0x2965a0)),
        requestAnimationFrame(_0x48c455);
    }
    return _0x48c455(), _0xd2c36e;
  }
  ['makeLan'](_0x1d6763, _0x24e6a2, _0x39f24e, _0x133dd5, _0x1cc0f3) {
    const _0x4df4fa = _0x124220,
      _0x5f1432 = new PlaneGeometry(0x1, 0x1),
      _0x3f8ae0 = new MeshBasicMaterial({
        color: 0xffffff,
        transparent: !0x0,
        opacity: 0x1,
        depthTest: !!0x0,
        map: new TextureLoader()['load'](_0x24e6a2),
      }),
      _0x331a04 = new Mesh(_0x5f1432, _0x3f8ae0);
    _0x331a04[_0x4df4fa(0x383, 'ZmW^')]['copy'](_0x133dd5),
      _0x331a04[_0x4df4fa(0x4d4, 'zYl*')](-Math['PI'] / 0x2),
      (_0x331a04[_0x4df4fa(0x3e6, 'Aj*g')]['z'] = _0x1cc0f3),
      _0x331a04[_0x4df4fa(0x4eb, 'cwps')][_0x4df4fa(0x492, 'tNI4')](
        _0x39f24e['x'],
        _0x39f24e['y'],
        0x1
      ),
      _0x331a04[_0x4df4fa(0x3dc, 'ks5y')][_0x4df4fa(0x393, 'Yv(m')](
        ENTIRE_SCENE
      );
    const _0x550340 = new CSS2DObject(_0x1d6763);
    (_0x550340[_0x4df4fa(0x725, 'RyL6')]['z'] = 0x5),
      _0x331a04[_0x4df4fa(0x502, 'rmSV')](_0x550340),
      this[_0x4df4fa(0x433, '@cxu')]['add'](_0x331a04);
  }
  [_0x124220(0x34a, 'RKdF')](_0x518fc4) {
    const _0x52b865 = _0x124220,
      _0x2b51a7 = {
        NKsIn: _0x52b865(0x7a3, 'RyL6'),
        sMFAH: function (_0x15b999, _0x27db25) {
          return _0x15b999 / _0x27db25;
        },
      },
      _0x3f5d06 = new PlaneGeometry(0xa, 0x5),
      _0x2425d3 = new MeshBasicMaterial({
        color: 0xffffff,
        transparent: !0x0,
        opacity: 0x1,
        depthTest: !!0x0,
        map: new TextureLoader()[_0x52b865(0x35b, 'cwps')](_0x2b51a7['NKsIn']),
      }),
      _0x4dd6ca = new Mesh(_0x3f5d06, _0x2425d3);
    _0x4dd6ca[_0x52b865(0x7a1, 'v]cc')][_0x52b865(0x32c, 'u[Qt')](
      -0x7,
      -1.8,
      0x1e
    ),
      _0x4dd6ca[_0x52b865(0x696, '!ncs')][_0x52b865(0x492, 'tNI4')](5.6, 3.3),
      _0x4dd6ca[_0x52b865(0x3cf, 'Pw)Z')](
        _0x2b51a7[_0x52b865(0x50a, '@cxu')](-Math['PI'], 0x2)
      ),
      _0x4dd6ca[_0x52b865(0x639, 'ZWj!')](_0x2b51a7['sMFAH'](Math['PI'], 0x2)),
      _0x4dd6ca[_0x52b865(0x632, 'qNG@')][_0x52b865(0x5f3, 'LMyx')](
        ENTIRE_SCENE
      );
    const _0x29a8df = new CSS2DObject(_0x518fc4);
    (_0x29a8df[_0x52b865(0x722, 'ks5y')]['z'] = 0x5),
      _0x4dd6ca['add'](_0x29a8df),
      this[_0x52b865(0x26a, 'u[Qt')]['add'](_0x4dd6ca);
  }
  ['makeWest'](_0x2a2bf2) {
    const _0x370795 = _0x124220,
      _0x56af66 = {
        efOnb: 'img/Vector3.png',
        RXNbl: function (_0x16fc0d, _0x7e421c) {
          return _0x16fc0d / _0x7e421c;
        },
      },
      _0x172a5e = new PlaneGeometry(0x5, 0xa),
      _0x326247 = new MeshBasicMaterial({
        color: 0xffffff,
        depthTest: !!0x0,
        transparent: !0x0,
        opacity: 0x1,
        map: new TextureLoader()[_0x370795(0x35b, 'cwps')](
          _0x56af66[_0x370795(0x61f, 'a]m&')]
        ),
      }),
      _0x184052 = new Mesh(_0x172a5e, _0x326247);
    _0x184052[_0x370795(0x5f9, 'cwps')]['set'](-0x6, -1.8, -0x12),
      _0x184052[_0x370795(0x71f, '2djq')][_0x370795(0x48e, '7%kX')](2.8, 3.3),
      _0x184052[_0x370795(0x705, 'G#Vj')](_0x56af66['RXNbl'](-Math['PI'], 0x2)),
      this[_0x370795(0x42c, 'UchA')][_0x370795(0x248, 'o7f1')](_0x184052);
    const _0x496b68 = new CSS2DObject(_0x2a2bf2);
    (_0x496b68['position']['z'] = 0x5),
      _0x184052[_0x370795(0x288, '2djq')](_0x496b68);
  }
  [_0x124220(0x553, 'i#24')](_0x3f0324) {
    const _0x7a7a8a = _0x124220,
      _0x14e528 = {
        EbsBC: function (_0x5e58ab, _0x27e402) {
          return _0x5e58ab / _0x27e402;
        },
      },
      _0x525ccd = new PlaneGeometry(0xa, 0x5),
      _0x2d53cf = new MeshBasicMaterial({
        color: 0xffffff,
        transparent: !0x0,
        opacity: 0x1,
        depthTest: !!0x0,
        map: new TextureLoader()[_0x7a7a8a(0x622, 'RKdF')]('img/Vector39.png'),
      }),
      _0x29a9f = new Mesh(_0x525ccd, _0x2d53cf);
    _0x29a9f[_0x7a7a8a(0x722, 'ks5y')][_0x7a7a8a(0x60d, '!vuU')](
      12.4,
      -1.8,
      -0x26
    ),
      _0x29a9f['scale'][_0x7a7a8a(0x7ab, 'uUNF')](3.4, 9.7),
      _0x29a9f[_0x7a7a8a(0x2b6, 'rccG')](
        _0x14e528[_0x7a7a8a(0x32b, 'u[Qt')](-Math['PI'], 0x2)
      ),
      console[_0x7a7a8a(0x367, '9sEE')](_0x29a9f),
      this['area'][_0x7a7a8a(0x248, 'o7f1')](_0x29a9f);
    const _0x2eb9ae = new CSS2DObject(_0x3f0324);
    (_0x2eb9ae['position']['z'] = 0x5),
      _0x29a9f[_0x7a7a8a(0x531, 'G#Vj')](_0x2eb9ae);
  }
  [_0x124220(0x752, '9r9(')](_0x216514) {
    const _0x323b3b = _0x124220,
      _0x53cf2c = { CdFLb: _0x323b3b(0x77d, 'Kk69') },
      _0x5c18eb = new PlaneGeometry(0x7, 0xa),
      _0x682c71 = new MeshBasicMaterial({
        color: 0xff0000,
        transparent: !0x0,
        opacity: 0x1,
        depthTest: !!0x0,
        map: new TextureLoader()[_0x323b3b(0x706, 'ZXoK')](
          _0x53cf2c[_0x323b3b(0x7d8, 'cwps')]
        ),
      }),
      _0x27845a = new Mesh(_0x5c18eb, _0x682c71);
    _0x27845a[_0x323b3b(0x4bd, 'a]m&')]['set'](1.004, -1.8, -36.629),
      _0x27845a[_0x323b3b(0x696, '!ncs')]['set'](0x1, 1.3),
      _0x27845a[_0x323b3b(0x390, 'Aj*g')](-Math['PI'] / 0x2),
      _0x27845a['rotateZ'](1.52),
      this['area'][_0x323b3b(0x531, 'G#Vj')](_0x27845a);
    const _0x23ce2c = new CSS2DObject(_0x216514);
    (_0x23ce2c[_0x323b3b(0x5f9, 'cwps')]['z'] = 0x5),
      _0x27845a['add'](_0x23ce2c);
  }
  [_0x124220(0x325, 'ks5y')](_0x133a17) {
    const _0x55e45f = _0x124220,
      _0x13e414 = {
        GhlTB: function (_0x3cfbfe, _0x339b47) {
          return _0x3cfbfe !== _0x339b47;
        },
        CJynU: _0x55e45f(0x3a8, 'uKRM'),
        lTlpn: function (_0x5482d1, _0x24e4aa) {
          return _0x5482d1 === _0x24e4aa;
        },
        lUXkV: 'uNCzy',
        tNHbf: _0x55e45f(0x7cf, 'G#Vj'),
        zhAaR: _0x55e45f(0x2e3, 'rmSV'),
        RbmGm: 'img/Vector33.png',
        TdAWl: _0x55e45f(0x841, '!vuU'),
      };
    if (this['area']) {
      this[_0x55e45f(0x1d7, 'Yv(m')](this['area']), (this['area'] = null);
      return;
    }
    (this[_0x55e45f(0x535, 'zYl*')] = new Group()),
      this['models'][_0x55e45f(0x416, 'rAev')](this['area']);
    if (this[_0x55e45f(0x4a8, '$cvL')]) {
      if (
        _0x13e414['lTlpn'](
          _0x13e414['lUXkV'],
          _0x13e414[_0x55e45f(0x236, 'JVJG')]
        )
      ) {
        const _0xcb1a9f = new _0x536864(),
          _0x1a4f9d = [];
        _0x1a4f9d[_0x55e45f(0x6bc, 'ZXoK')](
          new _0x5e0072(_0x2f7708['x'], -0x8, _0x235034['z'])
        ),
          _0x1a4f9d[_0x55e45f(0x24d, 'LMyx')](
            new _0x1495ad(_0x47e2a0['x'], -0x2, _0x5847d4['z'])
          );
        const _0x5aa848 = new _0x77bc()['setFromPoints'](_0x1a4f9d),
          _0x21f8b2 = new _0x232f68({
            color: 0x22caeb,
            dashSize: 0.1,
            gapSize: 0.2,
          }),
          _0x38a58c = new _0x1f0f38(_0x5aa848, _0x21f8b2);
        _0x38a58c[_0x55e45f(0x687, 'Aj*g')](),
          _0x38a58c[_0x55e45f(0x346, 'S7tx')][_0x55e45f(0x1f9, 'i#24')](
            _0x35c663
          ),
          _0xcb1a9f[_0x55e45f(0x831, '!ncs')](_0x38a58c);
        const _0xf8369c = _0x55e45f(0x568, 'rccG'),
          _0x47827a =
            '\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec3\x20color;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x09uniform\x20sampler2D\x20pointTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x09uniform\x20float\x20alphaTest;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x09varying\x20vec3\x20vColor;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x09void\x20main()\x20{\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x09\x09gl_FragColor\x20=\x20vec4(\x20color\x20*\x20vColor,\x201.0\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x09\x09gl_FragColor\x20=\x20gl_FragColor\x20*\x20texture2D(\x20pointTexture,\x20gl_PointCoord\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x09\x09if\x20(\x20gl_FragColor.a\x20<\x20alphaTest\x20)\x20discard;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x09}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
          _0x1f3b66 = [0x1],
          _0x28b590 = [0.13, 0.8, 0.95],
          _0x2ae88e = [_0x49f2b8['x'], -0x2, _0x3b90ec['z']],
          _0x601878 = new _0x57591a();
        _0x601878['setAttribute']('position', new _0x16a94f(_0x2ae88e, 0x3)),
          _0x601878[_0x55e45f(0x2a5, 'S7tx')](
            'customColor',
            new _0x182d65(_0x28b590, 0x3)
          ),
          _0x601878[_0x55e45f(0x6ee, 'rccG')](
            _0x55e45f(0x503, 'uKRM'),
            new _0x543b1e(_0x1f3b66, 0x1)
          );
        const _0x4d5893 = new _0x2e0a74({
            uniforms: {
              color: { value: new _0x453eec(0xffffff) },
              pointTexture: {
                value: new _0x56d274()[_0x55e45f(0x4bb, '$cvL')](
                  'img/disc.png'
                ),
              },
              alphaTest: { value: 0x1 },
            },
            vertexShader: _0xf8369c,
            fragmentShader: _0x47827a,
          }),
          _0x10cd37 = new _0x42633c(_0x601878, _0x4d5893);
        return (
          _0x10cd37[_0x55e45f(0x4ab, 'Jare')]['enable'](_0x3674d1),
          _0xcb1a9f[_0x55e45f(0x3a5, 'ks5y')](_0x10cd37),
          _0xcb1a9f
        );
      } else {
        const _0x30df46 =
          _0x13e414[_0x55e45f(0x413, 'ZWj!')][_0x55e45f(0x5e1, 'a]m&')]('|');
        let _0x13b381 = 0x0;
        while (!![]) {
          switch (_0x30df46[_0x13b381++]) {
            case '0':
              this[_0x55e45f(0x597, 'Jare')](_0x133a17[0x1]);
              continue;
            case '1':
              return;
            case '2':
              this['makeNorth'](_0x133a17[0x2]);
              continue;
            case '3':
              this[_0x55e45f(0x657, 'u[Qt')](_0x133a17[0x0]);
              continue;
            case '4':
              this[_0x55e45f(0x3ea, '!vuU')](_0x133a17[0x3]);
              continue;
          }
          break;
        }
      }
    }
    const _0x18a13b = [
      {
        scale: new Vector2(11.9, 12.4),
        pos: new Vector3(-43.4, 0x1, 55.3),
        rotation: 0.03,
        img: _0x13e414[_0x55e45f(0x31d, 'RyL6')],
      },
      {
        scale: new Vector2(0xa, 6.8),
        pos: new Vector3(-35.6, 0x1, 43.4),
        rotation: 0.51,
        img: _0x55e45f(0x579, 'rAev'),
      },
      {
        scale: new Vector2(4.5, 3.8),
        pos: new Vector3(-26.035, 0x1, 50.171),
        rotation: 0.045,
        img: _0x55e45f(0x698, 'LMyx'),
      },
      {
        scale: new Vector2(11.3, 3.4),
        pos: new Vector3(-23.068, 0x1, 46.6),
        rotation: 0.06,
        img: _0x13e414['TdAWl'],
      },
      {
        scale: new Vector2(0xe, 0x6),
        pos: new Vector3(-0x16, 0x1, 0x2d),
        rotation: 0.06,
        img: 'img/Vector36.png',
      },
      {
        scale: new Vector2(4.3, 0x4),
        pos: new Vector3(-0x17, 0x1, 40.592),
        rotation: 0.1,
        img: _0x55e45f(0x6a2, 'ZWj!'),
      },
    ];
    _0x133a17[_0x55e45f(0x48f, 'wFk%')]((_0x266bea, _0x26f1f9) => {
      const _0xe222fc = _0x55e45f;
      _0x13e414['GhlTB'](
        _0x13e414[_0xe222fc(0x23e, '9@W9')],
        _0x13e414['CJynU']
      )
        ? ((_0x2b3ef7[_0x41b1b5[_0xe222fc(0x62a, 'Pw)Z')]] =
            _0x33b03d[_0xe222fc(0x718, 'Pw)Z')]),
          (_0x564f5e[_0xe222fc(0x3df, 'ZTP3')] = _0xe33d11))
        : this[_0xe222fc(0x49c, 'wFk%')](
            _0x266bea,
            _0x18a13b[_0x26f1f9][_0xe222fc(0x47c, 'VCBb')],
            _0x18a13b[_0x26f1f9][_0xe222fc(0x494, '$cvL')],
            _0x18a13b[_0x26f1f9][_0xe222fc(0x70d, 'zYl*')],
            _0x18a13b[_0x26f1f9][_0xe222fc(0x52a, 'Pw)Z')]
          );
    });
  }
  async ['addFlowLine']() {
    const _0x1bd29b = _0x124220,
      _0x2bb7a2 = {
        NgMHc: function (_0x227c88, _0x2cb9f9) {
          return _0x227c88 == _0x2cb9f9;
        },
        wVFXu: function (_0x448f53, _0x500003) {
          return _0x448f53 === _0x500003;
        },
        xVzMA: _0x1bd29b(0x2ae, 'DX0Q'),
        GWiha: _0x1bd29b(0x1b7, 'qNG@'),
        cJYeU: 'color',
        PjozK: _0x1bd29b(0x451, 'ks5y'),
      },
      _0x2c7db8 = _0x1bd29b(0x422, 'ks5y'),
      _0x294ae6 = _0x1bd29b(0x3fe, 'Kk69');
    for (let _0x497b92 = 0x0; _0x497b92 < roadData['length']; _0x497b92++) {
      const _0x27f93b = roadData[_0x497b92],
        _0x94c20f = {
          amplitude: { value: 0x5 },
          opacity: { value: 0.6 },
          color: { value: new Color(0xffffff) },
          time: { value: 0x0 },
          random: { value: 0x0 },
          flowTexture: {
            value: new TextureLoader()[_0x1bd29b(0x322, 'ZWj!')](
              _0x2bb7a2[_0x1bd29b(0x500, 'rAev')]
            ),
          },
        },
        _0x298b3b = new ShaderMaterial({
          uniforms: _0x94c20f,
          vertexShader: _0x2c7db8,
          fragmentShader: _0x294ae6,
          side: DoubleSide,
          transparent: !![],
          polygonOffset: !0x0,
          polygonOffsetFactor: -0x1,
          polygonOffsetUnits: -0x3,
        }),
        _0x1ee45b = [];
      _0x27f93b[_0x1bd29b(0x3e3, 'Ta41')]((_0x33bb15) => {
        const _0x2817ea = _0x1bd29b;
        if (
          _0x2bb7a2[_0x2817ea(0x1b5, 'ZWj!')]('wKlyv', _0x2817ea(0x28b, 'Jare'))
        )
          _0x1ee45b[_0x2817ea(0x241, 'u9nJ')](
            new Vector3(_0x33bb15[0x0], _0x33bb15[0x1], _0x33bb15[0x2])
          );
        else {
          if (!_0x288f3e[_0x2817ea(0x6f0, 'jZCM')]) return;
          _0x2bb7a2[_0x2817ea(0x4b2, 'tNI4')](
            _0x4da46c[_0x2817ea(0x53f, 'ks5y')],
            '网格'
          ) &&
            ((_0x4afe97[_0x2817ea(0x4fd, 'Jare')][_0x2817ea(0x527, '7%kX')] =
              _0x1bb5f6),
            (_0x523ec6['material'][_0x2817ea(0x716, 'rAev')] = !0x0));
        }
      });
      const _0x502b68 = new PolyLine(0.03, !!0x0, !!0x0),
        _0x4eedb0 = _0x502b68['spliceArr'](_0x1ee45b),
        [_0xbe6b8c, _0x23136d, _0x56e081, _0x324a48, _0x9faed2] =
          await _0x502b68[_0x1bd29b(0x4d7, 'LMyx')](
            _0x4eedb0[0x0],
            _0x4eedb0[0x1]
          ),
        _0x50b7fc = new BufferGeometry();
      _0x50b7fc[_0x1bd29b(0x4d0, 'H]sX')](
        _0x2bb7a2[_0x1bd29b(0x6b5, 'cwps')],
        new BufferAttribute(_0xbe6b8c, 0x3)
      ),
        _0x50b7fc['setAttribute'](
          _0x1bd29b(0x504, 'a]m&'),
          new BufferAttribute(new Float32Array(_0x23136d), 0x3)
        ),
        _0x50b7fc[_0x1bd29b(0x5b9, 'tNI4')](_0x56e081),
        _0x50b7fc[_0x1bd29b(0x667, '9sEE')](
          'uv',
          new BufferAttribute(new Float32Array(_0x324a48), 0x2)
        ),
        _0x50b7fc[_0x1bd29b(0x701, '&A2z')](
          _0x2bb7a2[_0x1bd29b(0x31c, 'LMyx')],
          new BufferAttribute(new Float32Array(_0x9faed2), 0x3)
        );
      const _0x3de5be = new Mesh(_0x50b7fc, _0x298b3b);
      _0x3de5be[_0x1bd29b(0x772, 'uUNF')]['enable'](BLOOM_SCENE),
        (_0x3de5be['name'] = _0x2bb7a2[_0x1bd29b(0x571, 'JVJG')]),
        this['lines']['push'](_0x3de5be),
        this[_0x1bd29b(0x79f, 'Ta41')]['add'](_0x3de5be);
    }
  }
  [_0x124220(0x559, '!vuU')]() {
    const _0x179032 = _0x124220,
      _0x3fd544 = {
        xKNlc: function (_0x36b347, _0x196d0a) {
          return _0x36b347 / _0x196d0a;
        },
        pyrmI: _0x179032(0x3ad, 'wFk%'),
      },
      _0x2c2e07 = [
        {
          position: new Vector3(1.7, -2.45, -3.35),
          rotation: new Euler(0x0, 0x0, 0x0, _0x3fd544['pyrmI']),
        },
        {
          position: new Vector3(1.7, -2.45, -13.15),
          rotation: new Euler(0x0, 0x0, 0x0, 'XYZ'),
        },
        {
          position: new Vector3(1.7, -2.45, -21.95),
          rotation: new Euler(
            0x0,
            0x0,
            0x0,
            _0x3fd544[_0x179032(0x4e7, '!vuU')]
          ),
        },
        {
          position: new Vector3(-3.4, -2.45, 59.142),
          rotation: new Euler(0x0, 0x0, 0x0, _0x3fd544['pyrmI']),
        },
        {
          position: new Vector3(-16.6, -2.45, 35.985),
          rotation: new Euler(
            0x0,
            0x0,
            0x0,
            _0x3fd544[_0x179032(0x213, '&A2z')]
          ),
        },
        {
          position: new Vector3(-16.6, -2.45, 28.043),
          rotation: new Euler(0x0, 0x0, 0x0, _0x179032(0x537, 'v]cc')),
        },
        {
          position: new Vector3(-16.6, -2.45, 20.358),
          rotation: new Euler(
            0x0,
            0x0,
            0x0,
            _0x3fd544[_0x179032(0x7b3, 'Pw)Z')]
          ),
        },
        {
          position: new Vector3(12.7, -2.45, -0x19),
          rotation: new Euler(
            0x0,
            -0.21,
            0x0,
            _0x3fd544[_0x179032(0x606, 'uUNF')]
          ),
        },
        {
          position: new Vector3(-3.4, -2.45, 51.226),
          rotation: new Euler(0x0, 0x0, 0x0, _0x3fd544['pyrmI']),
        },
        {
          position: new Vector3(11.7, -2.45, -0x12),
          rotation: new Euler(0x0, -0.21, 0x0, _0x179032(0x1c8, 'ks5y')),
        },
      ];
    this[_0x179032(0x38c, '9sEE')][_0x179032(0x628, '&A2z')](
      _0x179032(0x5cd, 'i#24'),
      (_0xc5a97d) => {
        const _0x6e1e43 = _0x179032;
        _0xc5a97d[_0x6e1e43(0x59d, 'rAev')]['traverse']((_0x588eb1) => {
          const _0x2a4e3e = _0x6e1e43;
          if (_0x588eb1['isMesh'])
            _0x588eb1[_0x2a4e3e(0x659, 'ZmW^')]['enable'](BLOOM_SCENE);
        }),
          _0xc5a97d['scene'][_0x6e1e43(0x487, 'Ta41')]['set'](0.3, 0.3, 0.3),
          _0x2c2e07[_0x6e1e43(0x3ba, 'u[Qt')]((_0x445d46) => {
            const _0x5b4d73 = _0x6e1e43,
              _0x5c018b =
                _0xc5a97d[_0x5b4d73(0x79a, ')bs3')][_0x5b4d73(0x441, 'ZmW^')]();
            _0x5c018b[_0x5b4d73(0x6cb, 'niup')][_0x5b4d73(0x200, 'H]sX')](
              _0x445d46[_0x5b4d73(0x46f, 'LMyx')]
            ),
              _0x5c018b[_0x5b4d73(0x3e6, 'Aj*g')][_0x5b4d73(0x805, 'i#24')](
                _0x445d46[_0x5b4d73(0x25e, '9@W9')]
              ),
              this[_0x5b4d73(0x6fd, 'jZCM')][_0x5b4d73(0x288, '2djq')](
                _0x5c018b
              );
          }),
          (this[_0x6e1e43(0x2f6, 'niup')] =
            _0xc5a97d[_0x6e1e43(0x57b, 'ZXoK')]['clone']()),
          this[_0x6e1e43(0x4a4, 'v]cc')]['position'][_0x6e1e43(0x521, 'Kk69')](
            3.9,
            -2.45,
            5.708
          ),
          this[_0x6e1e43(0x305, 'a]m&')][_0x6e1e43(0x79b, '9r9(')](
            _0x3fd544[_0x6e1e43(0x638, 'ZmW^')](-Math['PI'], 0x2)
          ),
          this[_0x6e1e43(0x7de, 'RKdF')][_0x6e1e43(0x28d, 'ZWj!')](
            this[_0x6e1e43(0x305, 'a]m&')]
          );
      }
    );
  }
  [_0x124220(0x59c, '7%kX')](_0x148dc8) {}
  ['changeWaterColor'](_0x3d03d6) {
    const _0x2a0303 = _0x124220;
    this['water']['material']['uniforms'][_0x2a0303(0x58f, 'o7f1')][
      _0x2a0303(0x4f3, 'S7tx')
    ] = new Color(_0x3d03d6);
  }
  ['changeSize'](_0x21c00f) {
    const _0x209522 = _0x124220;
    this[_0x209522(0x3fa, '&A2z')][_0x209522(0x352, 'rAev')]['uniforms'][
      'size'
    ]['value'] = _0x21c00f;
  }
  [_0x124220(0x60e, 'VCBb')]() {
    const _0xaaa370 = _0x124220,
      _0x4b0c25 = {
        zTgzR: _0xaaa370(0x207, 'UchA'),
        muqqX: 'sunDirection',
        gjWiF: _0xaaa370(0x224, 'H]sX'),
        WXsYL: _0xaaa370(0x3ae, 'UchA'),
        uOruW: '3|2|1|4|0|5',
      };
    (this[_0xaaa370(0x7ac, 'cwps')] = !this[_0xaaa370(0x5bc, 'ZmW^')]),
      (this['water'] = null),
      this['disposeGroup'](this[_0xaaa370(0x505, 'uUNF')]);
    if (this['area']) {
      if (
        _0x4b0c25[_0xaaa370(0x567, 'ks5y')] !==
        _0x4b0c25[_0xaaa370(0x7f4, 'a]m&')]
      )
        this[_0xaaa370(0x603, 'o7f1')](this[_0xaaa370(0x633, 'Pw)Z')]),
          (this[_0xaaa370(0x60f, 'Yv(m')] = null);
      else {
        const _0x2cd15f = _0x554780[_0xaaa370(0x678, ')bs3')](
            0x5a - _0x495550[_0xaaa370(0x5aa, '&A2z')]
          ),
          _0xd91795 = _0x9e0286[_0xaaa370(0x4c9, '9r9(')](
            _0x4bb6ab[_0xaaa370(0x2ab, '!ncs')]
          );
        _0x258e9e[_0xaaa370(0x7c5, 'ZmW^')](0x1, _0x2cd15f, _0xd91795),
          _0x427fc0[_0xaaa370(0x64c, '$cvL')][_0xaaa370(0x30d, 'uUNF')][
            _0x4b0c25[_0xaaa370(0x721, 'Pw)Z')]
          ][_0xaaa370(0x2ea, 'u9nJ')][_0xaaa370(0x836, 'u[Qt')](_0x97c570),
          this[_0xaaa370(0x74f, 'ZXoK')][_0xaaa370(0x42d, '9r9(')][
            _0xaaa370(0x5ec, '!ncs')
          ][_0x4b0c25[_0xaaa370(0x570, 'Ta41')]][_0xaaa370(0x429, 'LMyx')]
            ['copy'](_0x4e7c22)
            [_0xaaa370(0x66c, 'DX0Q')]();
      }
    }
    if (!this[_0xaaa370(0x1f5, 'jZCM')]) {
      const _0x22e683 =
        _0x4b0c25[_0xaaa370(0x2dc, 'Kk69')][_0xaaa370(0x596, 'niup')]('|');
      let _0x4a9735 = 0x0;
      while (!![]) {
        switch (_0x22e683[_0x4a9735++]) {
          case '0':
            this[_0xaaa370(0x2f8, 'RKdF')][_0xaaa370(0x61d, '9r9(')] =
              new Vector3()[_0xaaa370(0x84f, ')bs3')](
                this['controls']['target']
              );
            continue;
          case '1':
            this[_0xaaa370(0x54c, 'Jare')][_0xaaa370(0x27c, '9sEE')]();
            continue;
          case '2':
            this[_0xaaa370(0x24f, 'ZTP3')][_0xaaa370(0x5f1, 'UchA')][
              _0xaaa370(0x22d, 'i#24')
            ](-54.01, -6.7, 15.85);
            continue;
          case '3':
            this['camera']['position']['set'](-32.91, 135.76, 157.6);
            continue;
          case '4':
            this[_0xaaa370(0x359, 'LMyx')][_0xaaa370(0x3e2, '9@W9')] =
              new Vector3()[_0xaaa370(0x35a, 'Kk69')](
                this[_0xaaa370(0x745, 'Jare')][_0xaaa370(0x30b, '!ncs')]
              );
            continue;
          case '5':
            this[_0xaaa370(0x693, 'wFk%')]();
            continue;
        }
        break;
      }
    } else
      this[_0xaaa370(0x33a, '!ncs')]['position']['set'](0x52, 0x78, 0x6c),
        this['controls'][_0xaaa370(0x5bf, 'niup')]['set'](-0x3, -0x9, -0x8),
        this['controls'][_0xaaa370(0x649, 'qNG@')](),
        (this['camera'][_0xaaa370(0x515, 'uKRM')] = new Vector3()[
          _0xaaa370(0x746, 'JVJG')
        ](this[_0xaaa370(0x858, '9sEE')][_0xaaa370(0x43d, 'uKRM')])),
        (this[_0xaaa370(0x5c7, 'u9nJ')][_0xaaa370(0x459, 'o7f1')] =
          new Vector3()[_0xaaa370(0x2cd, '9@W9')](
            this[_0xaaa370(0x40f, 'jZCM')]['target']
          )),
        this[_0xaaa370(0x64e, 'G#Vj')]();
  }
  [_0x124220(0x768, 'Ta41')](_0x307081, _0x1b7f51, _0x2b63fb) {
    const _0x15ea83 = _0x124220,
      _0x2ba8d5 = {
        FqVOi: function (_0x53089f, _0x5d4c0c) {
          return _0x53089f !== _0x5d4c0c;
        },
        jtmDH: _0x15ea83(0x782, 'qNG@'),
        yNWOg: _0x15ea83(0x578, 'u[Qt'),
        baWef: _0x15ea83(0x33b, 'RyL6'),
        yZSjK: 'style',
        YybMV: 'mouseout',
        NzXEH: 'click',
        YtiLk: _0x15ea83(0x368, 'ks5y'),
      };
    _0x307081[_0x15ea83(0x2bb, '@cxu')]((_0x30772f, _0x4479e2) => {
      const _0x5945bc = _0x15ea83,
        _0x14271d = {
          Aeisq: function (_0x1976fe, _0x1ed933) {
            const _0x511901 = _0x3432;
            return _0x2ba8d5[_0x511901(0x741, 'ZTP3')](_0x1976fe, _0x1ed933);
          },
          LeDPR: _0x5945bc(0x252, '2djq'),
          FJZqr: _0x5945bc(0x7c9, 'Pw)Z'),
          CcmMW: function (_0x388ed1, _0x1695fe) {
            return _0x388ed1 / _0x1695fe;
          },
          TlAon: _0x2ba8d5[_0x5945bc(0x62f, '&A2z')],
          MZiLM: function (_0x4e2d36, _0x90fed4) {
            return _0x4e2d36 === _0x90fed4;
          },
          nGncJ: 'pickDevice',
          tmRBs: _0x2ba8d5[_0x5945bc(0x784, 'rmSV')],
          VjzBs: function (_0x31465f, _0xab83a) {
            return _0x31465f(_0xab83a);
          },
        },
        _0x556968 = document[_0x5945bc(0x544, 'uKRM')](_0x2ba8d5['baWef']);
      _0x556968[_0x5945bc(0x851, 'uKRM')]('id', _0x30772f['id']);
      const _0x3d93b7 = document[_0x5945bc(0x50e, 'wFk%')](
        _0x2ba8d5[_0x5945bc(0x4ec, '9sEE')]
      );
      _0x556968[_0x5945bc(0x62e, '9sEE')](_0x3d93b7),
        _0x3d93b7['setAttribute'](
          _0x2ba8d5[_0x5945bc(0x3f1, '7%kX')],
          _0x5945bc(0x6fb, 'rccG')
        );
      const _0x4bb487 = document[_0x5945bc(0x243, 'rmSV')](
          _0x2ba8d5[_0x5945bc(0x6a1, 'u9nJ')]
        ),
        _0x5508f3 = _0x30772f[_0x5945bc(0x485, 'VCBb')]['length'];
      _0x1b7f51
        ? _0x4bb487[_0x5945bc(0x403, 'JVJG')](
            _0x5945bc(0x273, 'RKdF'),
            _0x5945bc(0x690, 'u9nJ') +
              _0x1b7f51 +
              _0x5945bc(0x289, 'o7f1') +
              _0x1b7f51 +
              _0x5945bc(0x68c, 'Pw)Z') +
              _0x30772f[_0x5945bc(0x3d2, 'qNG@')] +
              _0x5945bc(0x749, '!vuU')
          )
        : _0x4bb487[_0x5945bc(0x765, 'RyL6')](
            _0x2ba8d5['yZSjK'],
            _0x5945bc(0x816, 'Ta41') +
              _0x30772f['imgUrl'] +
              _0x5945bc(0x522, 'VCBb')
          );
      this[_0x5945bc(0x329, 'rccG')]['push'](_0x4bb487),
        _0x3d93b7[_0x5945bc(0x2ca, 'niup')](_0x4bb487),
        (_0x2b63fb[_0x4479e2][_0x5945bc(0x204, 'a]m&')] = ''),
        _0x3d93b7[_0x5945bc(0x46e, 'H]sX')](_0x2b63fb[_0x4479e2]);
      let _0x5423ba = 0x1,
        _0x423618 = null;
      _0x556968[_0x5945bc(0x484, 'G#Vj')](_0x5945bc(0x4c8, '2djq'), () => {
        const _0x7acd5a = _0x5945bc;
        if (
          _0x14271d[_0x7acd5a(0x5ae, 'Ta41')](
            _0x14271d[_0x7acd5a(0x6f1, 'H]sX')],
            _0x14271d['FJZqr']
          )
        )
          _0x2b63fb[_0x4479e2]['innerHTML'] = _0x30772f['name'];
        else {
          const _0x39471f = _0x13d19d['scene'][_0x7acd5a(0x232, 'niup')]();
          _0x3fb8e5[_0x7acd5a(0x4f6, '9sEE')]((_0x313660) => {
            const _0x2e42b1 = _0x7acd5a,
              _0x2c549f = _0x39471f[_0x2e42b1(0x43f, '7%kX')]();
            _0x2c549f[_0x2e42b1(0x50f, 'S7tx')]['copy'](
              _0x313660[_0x2e42b1(0x293, 'v]cc')]
            ),
              _0x2c549f['scale']['copy'](_0x313660[_0x2e42b1(0x52b, 'a]m&')]),
              _0x2c549f[_0x2e42b1(0x539, 'zYl*')][_0x2e42b1(0x576, 'zYl*')](
                _0x313660['rotation']
              ),
              this['models'][_0x2e42b1(0x248, 'o7f1')](_0x2c549f);
          });
        }
      }),
        _0x556968[_0x5945bc(0x592, ')bs3')](
          _0x2ba8d5[_0x5945bc(0x212, 'Aj*g')],
          () => {
            const _0x388055 = _0x5945bc;
            _0x2b63fb[_0x4479e2][_0x388055(0x65c, 'VCBb')] = '';
          }
        ),
        _0x556968['addEventListener'](_0x2ba8d5['NzXEH'], () => {
          const _0x402a45 = _0x5945bc;
          _0x14271d['Aeisq'](_0x14271d['tmRBs'], 'GSjlG')
            ? (_0x423618 &&
                (_0x14271d['VjzBs'](clearTimeout, _0x423618),
                _0x5423ba++,
                (_0x423618 = null)),
              (_0x423618 = setTimeout(() => {
                const _0x10a3ba = _0x3432,
                  _0x298b15 = {
                    mKkwE: function (_0x382d6b, _0x1f8801) {
                      const _0xaa8d7f = _0x3432;
                      return _0x14271d[_0xaa8d7f(0x2fa, 'rccG')](
                        _0x382d6b,
                        _0x1f8801
                      );
                    },
                  };
                if (
                  _0x14271d[_0x10a3ba(0x619, 'zYl*')](
                    _0x14271d[_0x10a3ba(0x1f7, 'zYl*')],
                    'pmhjR'
                  )
                )
                  _0xd23b01[_0x10a3ba(0x523, 'uKRM')][_0x10a3ba(0x854, 'LMyx')](
                    (_0x2ef438) => {
                      const _0x400679 = _0x10a3ba;
                      if (_0x2ef438['isMesh'])
                        _0x2ef438['layers'][_0x400679(0x4ca, '7%kX')](
                          _0x24402e
                        );
                    }
                  ),
                    _0x20e2ea[_0x10a3ba(0x7f5, 'Aj*g')][
                      _0x10a3ba(0x83c, 'zYl*')
                    ][_0x10a3ba(0x5e8, 'wFk%')](0.3, 0.3, 0.3),
                    _0x319278[_0x10a3ba(0x466, 'niup')]((_0x1089ec) => {
                      const _0x54163c = _0x10a3ba,
                        _0x3e0c44 =
                          _0x25c46a[_0x54163c(0x6eb, 'ZmW^')][
                            _0x54163c(0x4a7, 'a]m&')
                          ]();
                      _0x3e0c44['position'][_0x54163c(0x440, 'Jare')](
                        _0x1089ec[_0x54163c(0x4be, 'jZCM')]
                      ),
                        _0x3e0c44[_0x54163c(0x449, 'Jare')][
                          _0x54163c(0x41d, 'ks5y')
                        ](_0x1089ec[_0x54163c(0x653, 'S7tx')]),
                        this['models']['add'](_0x3e0c44);
                    }),
                    (this[_0x10a3ba(0x759, '2djq')] =
                      _0x36ce8c[_0x10a3ba(0x43a, 'wFk%')]['clone']()),
                    this[_0x10a3ba(0x21a, '9@W9')][_0x10a3ba(0x51a, 'ZTP3')][
                      _0x10a3ba(0x612, 'qNG@')
                    ](3.9, -2.45, 5.708),
                    this[_0x10a3ba(0x21c, 'Aj*g')][_0x10a3ba(0x85e, '7%kX')](
                      _0x298b15['mKkwE'](-_0x4a67f5['PI'], 0x2)
                    ),
                    this['models']['add'](this[_0x10a3ba(0x3ed, '!vuU')]);
                else {
                  if (_0x14271d[_0x10a3ba(0x474, 'rmSV')](_0x5423ba, 0x1))
                    this[_0x10a3ba(0x1fd, '7%kX')][_0x10a3ba(0x773, 'zYl*')](
                      _0x14271d['nGncJ'],
                      _0x30772f
                    );
                  else {
                    if (_0x5423ba === 0x2)
                      this[_0x10a3ba(0x432, 'Ta41')]['emit'](
                        _0x10a3ba(0x2bf, 'v]cc'),
                        _0x30772f
                      );
                  }
                  (_0x5423ba = 0x1),
                    clearTimeout(_0x423618),
                    (_0x423618 = null);
                }
              }, 0xc8)))
            : (_0x3e5f09[_0x2ef8a3][_0x402a45(0x235, 'UchA')] = '');
        });
      const _0x2f7acc = new CSS2DObject(_0x556968);
      (_0x2f7acc[_0x5945bc(0x67d, 'LMyx')] =
        _0x2ba8d5[_0x5945bc(0x229, 'rccG')]),
        (_0x2f7acc[_0x5945bc(0x7c4, 'H]sX')] = _0x30772f['id']),
        _0x2f7acc[_0x5945bc(0x1b7, 'qNG@')][_0x5945bc(0x1e4, 'niup')](
          _0x30772f[_0x5945bc(0x2de, 'VCBb')]['x'],
          _0x30772f['position']['y'],
          _0x30772f[_0x5945bc(0x53d, 'wFk%')]['z']
        ),
        this[_0x5945bc(0x3f4, '!ncs')][_0x5945bc(0x584, 'H]sX')](_0x2f7acc);
    }),
      this[_0x15ea83(0x22f, 'RyL6')]();
  }
  [_0x124220(0x44e, 'rAev')]() {
    const _0x1761bc = _0x124220,
      _0x4be489 = {
        dIysj: _0x1761bc(0x6ca, 'rAev'),
        AIbBa: function (_0x9e9295, _0x2986f1, _0x1f3c6c) {
          return _0x9e9295(_0x2986f1, _0x1f3c6c);
        },
      };
    this[_0x1761bc(0x397, 'u[Qt')] = setInterval(() => {
      const _0x4af6b3 = _0x1761bc,
        _0x46c482 = {
          bBOmq: _0x4be489[_0x4af6b3(0x3a1, 'DX0Q')],
          khHop: function (_0x452eb8, _0x3f361c, _0x49ccfd) {
            const _0x309594 = _0x4af6b3;
            return _0x4be489[_0x309594(0x321, 'ZXoK')](
              _0x452eb8,
              _0x3f361c,
              _0x49ccfd
            );
          },
        };
      this[_0x4af6b3(0x5bb, '!ncs')][_0x4af6b3(0x703, 'ZTP3')]((_0x33d244) => {
        const _0x1de306 = _0x4af6b3;
        _0x46c482['bBOmq'] !== 'aGrZR'
          ? ((_0x2f4678[_0x1de306(0x48d, 'uKRM')][_0x1de306(0x83b, 'u9nJ')] =
              new _0x167051(_0x209e99)),
            (_0x3475bf['material']['needsUpdate'] = !0x0))
          : ((_0x33d244[_0x1de306(0x2db, 'o7f1')]['transform'] = _0x1de306(
              0x25f,
              'u[Qt'
            )),
            _0x46c482[_0x1de306(0x414, 'u[Qt')](
              setTimeout,
              () => {
                const _0x471d97 = _0x1de306;
                _0x33d244[_0x471d97(0x39e, '&A2z')][_0x471d97(0x6a9, 'zYl*')] =
                  'scale(1.3,1.3)';
              },
              0x708
            ));
      });
    }, 0x3e8);
  }
  [_0x124220(0x5d8, 'niup')]() {
    const _0x27f033 = _0x124220;
    this[_0x27f033(0x6c4, 'Pw)Z')](this[_0x27f033(0x735, 'i#24')]);
    if (this[_0x27f033(0x370, 'LMyx')])
      clearInterval(this[_0x27f033(0x52d, 'qNG@')]);
  }
  ['thinLabel']() {
    const _0x3ec148 = _0x124220,
      _0x580cdc = {
        XdFPo: function (_0x4ff431, _0x407cf4) {
          return _0x4ff431 > _0x407cf4;
        },
        rauzL: function (_0x56d35c, _0x5d9b61) {
          return _0x56d35c < _0x5d9b61;
        },
        IeuhU: function (_0x21f885, _0x1c1aa2) {
          return _0x21f885 === _0x1c1aa2;
        },
        WOFAF: _0x3ec148(0x4d5, ')bs3'),
      };
    this[_0x3ec148(0x318, 'LMyx')]['children'][_0x3ec148(0x623, 'zYl*')](
      (_0x4001f1) => {
        const _0x3434e6 = _0x3ec148;
        if (!_0x4001f1[_0x3434e6(0x7a8, 'VCBb')]) _0x4001f1['visible'] = !0x0;
      }
    );
    let _0x4f496b = 0x0;
    while (
      _0x580cdc[_0x3ec148(0x54f, 'ks5y')](
        _0x4f496b,
        this[_0x3ec148(0x806, 'v]cc')][_0x3ec148(0x382, 'tNI4')][
          _0x3ec148(0x49a, '!ncs')
        ]
      )
    ) {
      if (
        _0x580cdc['IeuhU'](
          _0x580cdc[_0x3ec148(0x7e8, 'o7f1')],
          _0x580cdc['WOFAF']
        )
      )
        this[_0x3ec148(0x246, 'JVJG')]['children'][_0x3ec148(0x467, 'Yv(m')](
          (_0x3a4202, _0x370046) => {
            const _0x47ca54 = _0x3ec148;
            if (
              !_0x3a4202[_0x47ca54(0x3f5, 'niup')] ||
              _0x370046 == _0x4f496b ||
              !this[_0x47ca54(0x52f, 'RKdF')]['children'][_0x4f496b]['visible']
            )
              return;
            const _0x487e38 = new Vector3()
              ['copy'](_0x3a4202[_0x47ca54(0x323, 'o7f1')])
              ['add'](
                new Vector3()[_0x47ca54(0x695, '9r9(')](
                  this[_0x47ca54(0x306, 'qNG@')]['children'][_0x4f496b][
                    _0x47ca54(0x2de, 'VCBb')
                  ]
                )
              )
              [_0x47ca54(0x26d, 'o7f1')](0x2);
            if (
              _0x580cdc[_0x47ca54(0x477, 'i#24')](
                _0x487e38['distanceTo'](
                  this[_0x47ca54(0x302, 'ZWj!')]['position']
                ),
                0x3c
              )
            )
              _0x3a4202['visible'] = !!0x0;
          }
        ),
          _0x4f496b++;
      else {
        const _0x4a8c83 = {
          bwpAN: function (_0x10a8db, _0x640c33) {
            return _0x10a8db == _0x640c33;
          },
        };
        this[_0x3ec148(0x505, 'uUNF')][_0x3ec148(0x5c2, '$cvL')](
          (_0x216f7e) => {
            const _0x1095de = _0x3ec148;
            if (!_0x216f7e[_0x1095de(0x5dc, 'rccG')]) return;
            _0x4a8c83['bwpAN'](
              _0x216f7e[_0x1095de(0x283, 'Kk69')],
              _0x1095de(0x6d3, 'Kk69')
            ) &&
              ((_0x216f7e[_0x1095de(0x482, ')bs3')]['color'] = new _0x293500(
                _0x324f49
              )),
              (_0x216f7e[_0x1095de(0x3da, 'ZXoK')]['needsUpdate'] = !0x0));
          }
        );
      }
    }
  }
  [_0x124220(0x669, 'qNG@')](_0x2694ee) {
    const _0x210070 = _0x124220;
    this['ambientlLight'][_0x210070(0x32f, 'rmSV')] = new Color(_0x2694ee);
  }
  ['changeDirect'](_0x16f541) {
    const _0x36410b = _0x124220;
    this['directionalLight'][_0x36410b(0x4d2, 'uKRM')] = new Color(_0x16f541);
  }
  [_0x124220(0x2d8, 'H]sX')](_0x1b0516) {
    const _0x2ddb9e = _0x124220;
    this[_0x2ddb9e(0x498, '9@W9')][_0x2ddb9e(0x2e5, 'u[Qt')] = _0x1b0516;
  }
  ['changeDirV'](_0x449203) {
    const _0x22b224 = _0x124220;
    this['directionalLight'][_0x22b224(0x647, '2djq')] = _0x449203;
  }
  [_0x124220(0x48a, 'G#Vj')](_0x2af4f2) {
    const _0x43389b = _0x124220,
      _0x320ec7 = {
        xRBXn: function (_0x16d1a2, _0x23e100) {
          return _0x16d1a2 in _0x23e100;
        },
        NRaPV: _0x43389b(0x431, 'Yv(m'),
        MwmBP: function (_0x2d2691, _0x368184) {
          return _0x2d2691 == _0x368184;
        },
        mOcJh: _0x43389b(0x828, 'qNG@'),
      };
    this[_0x43389b(0x860, '7%kX')][_0x43389b(0x830, 'v]cc')]((_0x38b288) => {
      const _0x2ac8ae = _0x43389b,
        _0x3092e6 = {
          rRDYA: function (_0x57f059, _0x463e02) {
            return _0x57f059 === _0x463e02;
          },
          EXlfU: function (_0x206b3d, _0x288703) {
            return _0x320ec7['xRBXn'](_0x206b3d, _0x288703);
          },
          ekUsW: _0x320ec7[_0x2ac8ae(0x458, 'ks5y')],
        };
      if (!_0x38b288[_0x2ac8ae(0x486, 'Jare')]) return;
      if (
        _0x320ec7[_0x2ac8ae(0x26b, 'uKRM')](
          _0x38b288[_0x2ac8ae(0x283, 'Kk69')],
          '网格'
        )
      ) {
        if (_0x320ec7['mOcJh'] !== _0x2ac8ae(0x3fd, 'Aj*g')) {
          _0xa8ca6a[_0x2ac8ae(0x3f2, 'JVJG')][_0x2ac8ae(0x22c, 'i#24')]();
          for (const _0x1c7a8e of _0x5911a7['keys'](
            _0x16e63c[_0x2ac8ae(0x4e9, 'qNG@')]
          )) {
            const _0xc8bcd2 = _0x4ba374[_0x2ac8ae(0x792, 'rmSV')][_0x1c7a8e];
            _0xc8bcd2 &&
              _0x3092e6[_0x2ac8ae(0x723, 'Jare')](
                typeof _0xc8bcd2,
                _0x2ac8ae(0x7be, '9@W9')
              ) &&
              _0x3092e6[_0x2ac8ae(0x6d7, 'v]cc')](
                _0x3092e6[_0x2ac8ae(0x59b, 'Kk69')],
                _0xc8bcd2
              ) &&
              _0xc8bcd2[_0x2ac8ae(0x464, 'niup')]();
          }
        } else
          (_0x38b288[_0x2ac8ae(0x792, 'rmSV')]['emissive'] = new Color(
            _0x2af4f2
          )),
            (_0x38b288[_0x2ac8ae(0x1c7, 'DX0Q')]['needsUpdate'] = !0x0);
      }
    });
  }
  [_0x124220(0x547, 'rAev')](_0x54bec1) {
    const _0x5710e4 = _0x124220,
      _0x2c842e = {
        nAcwy: function (_0x217705, _0x3577d6) {
          return _0x217705 === _0x3577d6;
        },
      };
    this['models'][_0x5710e4(0x375, 'niup')]((_0x51eb17) => {
      const _0x56a9ff = _0x5710e4;
      if (!_0x51eb17[_0x56a9ff(0x263, 'zYl*')]) return;
      if (_0x51eb17[_0x56a9ff(0x452, 'rAev')] == '网格') {
        if (
          _0x2c842e['nAcwy'](_0x56a9ff(0x333, '7%kX'), _0x56a9ff(0x614, 'G#Vj'))
        )
          (_0x51eb17[_0x56a9ff(0x7d2, 'Ta41')]['color'] = new Color(_0x54bec1)),
            (_0x51eb17[_0x56a9ff(0x3f6, '9sEE')][_0x56a9ff(0x803, 'Aj*g')] =
              !0x0);
        else {
          if (!this[_0x56a9ff(0x3c9, 'ZWj!')]) return;
          this[_0x56a9ff(0x3e7, 'zYl*')]();
        }
      }
    });
  }
  ['changeRoughness'](_0x50208a) {
    const _0x1a7c07 = _0x124220,
      _0x5ebe4a = {
        nDoWD: function (_0x3f900d, _0x5b34ba) {
          return _0x3f900d == _0x5b34ba;
        },
        qpASl: function (_0x256227, _0x41305a) {
          return _0x256227 !== _0x41305a;
        },
        nCkXv: _0x1a7c07(0x2f3, 'tNI4'),
      };
    this[_0x1a7c07(0x4d6, 'uKRM')]['traverse']((_0xa71718) => {
      const _0x5750b9 = _0x1a7c07;
      if (!_0xa71718[_0x5750b9(0x4e4, 'DX0Q')]) return;
      _0x5ebe4a['nDoWD'](_0xa71718[_0x5750b9(0x388, 'JVJG')], '网格') &&
        (_0x5ebe4a[_0x5750b9(0x6da, 'rmSV')](
          _0x5ebe4a['nCkXv'],
          _0x5ebe4a[_0x5750b9(0x5ee, '&A2z')]
        )
          ? ((_0x1aff88['material'][_0x5750b9(0x620, '!vuU')] = 0.55),
            (_0x4d6c4b[_0x5750b9(0x60b, 'UchA')][
              _0x5750b9(0x850, 'UchA')
            ] = 0x0),
            (_0x3a2ca3['material'][_0x5750b9(0x5fe, 'uUNF')] = !0x0),
            _0x283a74[_0x5750b9(0x627, '9r9(')][_0x5750b9(0x393, 'Yv(m')](
              _0x3cfec6
            ))
          : ((_0xa71718[_0x5750b9(0x644, 'ZmW^')][_0x5750b9(0x78c, ')bs3')] =
              _0x50208a),
            (_0xa71718[_0x5750b9(0x2b7, 'S7tx')][_0x5750b9(0x55f, 'wFk%')] =
              !0x0)));
    });
  }
  [_0x124220(0x727, ')bs3')](_0x5f38f8) {
    const _0x2a44ab = _0x124220,
      _0x36bc8e = {
        ANyfo: function (_0x2d6a37, _0x32a0e5) {
          return _0x2d6a37 == _0x32a0e5;
        },
      };
    this['models'][_0x2a44ab(0x366, 'rAev')]((_0x2accdf) => {
      const _0x4e6fd6 = _0x2a44ab;
      if (!_0x2accdf['isMesh']) return;
      _0x36bc8e[_0x4e6fd6(0x2a6, 'Yv(m')](
        _0x2accdf[_0x4e6fd6(0x7e1, '$cvL')],
        '网格'
      ) &&
        ((_0x2accdf['material'][_0x4e6fd6(0x6f7, 'uUNF')] = _0x5f38f8),
        (_0x2accdf['material'][_0x4e6fd6(0x203, 'rmSV')] = !0x0));
    });
  }
  [_0x124220(0x44a, 'qNG@')](_0x44489d) {
    const _0x1048a0 = _0x124220,
      _0x646fd3 = { MUpaP: _0x1048a0(0x2c6, '&A2z') };
    this['models'][_0x1048a0(0x830, 'v]cc')]((_0x4bf538) => {
      const _0xdbca25 = _0x1048a0;
      if (!_0x4bf538['isMesh']) return;
      _0x4bf538[_0xdbca25(0x479, ')bs3')] ==
        _0x646fd3[_0xdbca25(0x7ce, 'rAev')] &&
        ((_0x4bf538[_0xdbca25(0x2b7, 'S7tx')]['emissive'] = new Color(
          _0x44489d
        )),
        (_0x4bf538[_0xdbca25(0x239, 'RKdF')][_0xdbca25(0x43e, '9sEE')] = !0x0));
    });
  }
  ['changejzxcolor'](_0x4b171b) {
    const _0x509081 = _0x124220,
      _0x3b396b = {
        EQvGb: function (_0x495bfc, _0xfd42af) {
          return _0x495bfc == _0xfd42af;
        },
        kbHFM: _0x509081(0x72e, 'u[Qt'),
      };
    this[_0x509081(0x646, 'u[Qt')][_0x509081(0x854, 'LMyx')]((_0x562944) => {
      const _0x4167b7 = _0x509081;
      if (!_0x562944['isMesh']) return;
      _0x3b396b[_0x4167b7(0x826, 'tNI4')](
        _0x562944['name'],
        _0x3b396b['kbHFM']
      ) &&
        ((_0x562944[_0x4167b7(0x2b7, 'S7tx')][_0x4167b7(0x4a0, '9@W9')] =
          new Color(_0x4b171b)),
        (_0x562944[_0x4167b7(0x756, '9@W9')][_0x4167b7(0x43e, '9sEE')] = !0x0));
    });
  }
  [_0x124220(0x436, 'Jare')](_0x5c71fc) {
    const _0x6e77af = _0x124220,
      _0x479a04 = {
        yViio: function (_0x758415, _0x5dc6b9) {
          return _0x758415 !== _0x5dc6b9;
        },
        FJPkO: _0x6e77af(0x6d2, 'RKdF'),
        lrWrI: _0x6e77af(0x40e, '9sEE'),
        wbOvR: function (_0x96444a, _0x118af9) {
          return _0x96444a == _0x118af9;
        },
        yRkjM: '网格170',
      };
    this[_0x6e77af(0x1da, 'JVJG')][_0x6e77af(0x375, 'niup')]((_0x57ac94) => {
      const _0x4ca12d = _0x6e77af;
      if (
        _0x479a04[_0x4ca12d(0x634, 'Ta41')](
          _0x479a04[_0x4ca12d(0x2c5, ')bs3')],
          _0x479a04['lrWrI']
        )
      ) {
        if (!_0x57ac94[_0x4ca12d(0x22a, 'u[Qt')]) return;
        _0x479a04[_0x4ca12d(0x291, 'wFk%')](
          _0x57ac94[_0x4ca12d(0x471, 'ZXoK')],
          _0x479a04[_0x4ca12d(0x742, 'uUNF')]
        ) &&
          ((_0x57ac94[_0x4ca12d(0x2b7, 'S7tx')][_0x4ca12d(0x404, 'H]sX')] =
            _0x5c71fc),
          (_0x57ac94[_0x4ca12d(0x685, '@cxu')][_0x4ca12d(0x6ce, '!vuU')] =
            !0x0));
      } else
        (_0x29d5cc[_0x4ca12d(0x7c3, 'Yv(m')][_0x4ca12d(0x5ce, 'DX0Q')] =
          _0x45fca6),
          (_0x2db364[_0x4ca12d(0x1c7, 'DX0Q')][_0x4ca12d(0x62c, 'JVJG')] =
            !0x0);
    });
  }
  [_0x124220(0x2cc, '9sEE')](_0x201857) {
    const _0x5705e1 = _0x124220,
      _0x517227 = {
        zQJtx: function (_0x2ee2ad, _0x7980b5) {
          return _0x2ee2ad - _0x7980b5;
        },
        DEFeo: 'sunDirection',
        JcRuK: function (_0x3b7198, _0x310a45) {
          return _0x3b7198 !== _0x310a45;
        },
        mAUbm: _0x5705e1(0x21f, 'DX0Q'),
        XkUzD: function (_0x4eae87, _0xd36d4c) {
          return _0x4eae87 == _0xd36d4c;
        },
      };
    this['models'][_0x5705e1(0x67e, 'ZXoK')]((_0x3427be) => {
      const _0x27d7de = _0x5705e1,
        _0x1f9b3e = {
          CfYga: function (_0x223311, _0x44dfce) {
            const _0x38f278 = _0x3432;
            return _0x517227[_0x38f278(0x6a5, ')bs3')](_0x223311, _0x44dfce);
          },
          nISVu: _0x517227[_0x27d7de(0x702, '9r9(')],
        };
      if (
        _0x517227[_0x27d7de(0x843, 'Pw)Z')](
          _0x517227[_0x27d7de(0x573, '7%kX')],
          'XvzSd'
        )
      ) {
        if (!_0x3427be[_0x27d7de(0x5dc, 'rccG')]) return;
        _0x517227['XkUzD'](
          _0x3427be[_0x27d7de(0x4c3, 'ZmW^')],
          _0x27d7de(0x562, 'rccG')
        ) &&
          ((_0x3427be[_0x27d7de(0x685, '@cxu')][_0x27d7de(0x811, 'LMyx')] =
            _0x201857),
          (_0x3427be[_0x27d7de(0x2b7, 'S7tx')]['needsUpdate'] = !0x0));
      } else {
        const _0x528c78 = _0x5c470b[_0x27d7de(0x761, '9@W9')](
            _0x1f9b3e['CfYga'](0x5a, _0x57b5e6[_0x27d7de(0x209, 'Kk69')])
          ),
          _0x4612b6 = _0x39c542[_0x27d7de(0x2ed, 'uUNF')](
            _0x31b8e3[_0x27d7de(0x260, 'wFk%')]
          );
        _0x3ac1f0[_0x27d7de(0x2da, 'rAev')](0x1, _0x528c78, _0x4612b6),
          _0x5ab93f['material'][_0x27d7de(0x541, 'RyL6')]['sunPosition'][
            'value'
          ][_0x27d7de(0x84f, ')bs3')](_0x407ec9),
          this[_0x27d7de(0x6ec, 'ZTP3')][_0x27d7de(0x6d5, '!vuU')]['uniforms'][
            _0x1f9b3e[_0x27d7de(0x4ba, ')bs3')]
          ][_0x27d7de(0x529, '2djq')]
            [_0x27d7de(0x856, 'Pw)Z')](_0x498b02)
            [_0x27d7de(0x7fb, '!vuU')]();
      }
    });
  }
  [_0x124220(0x819, 'LMyx')](_0x4d7c00) {
    const _0x168450 = _0x124220,
      _0x135576 = {
        JcqeJ: function (_0x1bc40c, _0x4b79ff) {
          return _0x1bc40c == _0x4b79ff;
        },
      };
    this[_0x168450(0x66f, 'cwps')][_0x168450(0x58d, 'u9nJ')]((_0x172b42) => {
      const _0x1b295f = _0x168450;
      if (!_0x172b42[_0x1b295f(0x582, 'Yv(m')]) return;
      _0x135576[_0x1b295f(0x3ec, '@cxu')](
        _0x172b42[_0x1b295f(0x1f8, 'uKRM')],
        _0x1b295f(0x6de, 'o7f1')
      ) &&
        ((_0x172b42[_0x1b295f(0x57c, 'H]sX')][_0x1b295f(0x7a2, 'rccG')] =
          new Color(_0x4d7c00)),
        (_0x172b42[_0x1b295f(0x4e9, 'qNG@')][_0x1b295f(0x4df, 'Pw)Z')] = !0x0));
    });
  }
  [_0x124220(0x262, 'LMyx')](_0x1e8d74) {
    const _0x8bfd2a = _0x124220,
      _0x51779f = {
        SKDCY: 'style',
        zynOo: function (_0x5da528, _0x4e1522) {
          return _0x5da528 == _0x4e1522;
        },
        lggNZ: _0x8bfd2a(0x4b6, 'Ta41'),
      };
    this[_0x8bfd2a(0x75a, '$cvL')][_0x8bfd2a(0x676, 'G#Vj')]((_0x3f90c6) => {
      const _0x4f6627 = _0x8bfd2a;
      if (!_0x3f90c6[_0x4f6627(0x22a, 'u[Qt')]) return;
      _0x51779f[_0x4f6627(0x556, 'a]m&')](
        _0x3f90c6['name'],
        _0x4f6627(0x602, 'VCBb')
      ) &&
        (_0x51779f[_0x4f6627(0x4c5, 'uKRM')] !== _0x4f6627(0x2d9, 'UchA')
          ? ((_0x3f90c6[_0x4f6627(0x3df, 'ZTP3')][_0x4f6627(0x70e, 'o7f1')] =
              new Color(_0x1e8d74)),
            (_0x3f90c6[_0x4f6627(0x57c, 'H]sX')][_0x4f6627(0x686, '&A2z')] =
              !0x0))
          : _0x5de67d['setAttribute'](
              _0x51779f[_0x4f6627(0x4dc, 'G#Vj')],
              'width:' +
                _0x42a986 +
                _0x4f6627(0x438, 'ZTP3') +
                _0x1705d3 +
                ';\x20background:url(' +
                _0x449627[_0x4f6627(0x7a5, 'v]cc')] +
                _0x4f6627(0x3f3, 'ks5y')
            ));
    });
  }
  ['changejzxxroughness'](_0x568e1c) {
    const _0x352b18 = _0x124220,
      _0x3e33cc = {
        DJGUr: _0x352b18(0x3e4, 'LMyx'),
        nCBik: _0x352b18(0x65a, 'zYl*'),
        omZWX: function (_0x2a6eb1, _0x2ca9f1) {
          return _0x2a6eb1 == _0x2ca9f1;
        },
      };
    this[_0x352b18(0x1be, 'Kk69')]['traverse']((_0x496425) => {
      const _0x162c26 = _0x352b18,
        _0x3821eb = { TUbnt: _0x3e33cc['DJGUr'] };
      if (_0x162c26(0x1c1, 'jZCM') === _0x3e33cc[_0x162c26(0x205, ')bs3')]) {
        const _0x4a41a8 = { CVmVX: _0x3821eb[_0x162c26(0x332, '7%kX')] };
        this[_0x162c26(0x30a, 'LMyx')][_0x162c26(0x84c, '7%kX')](
          (_0x20a21f) => {
            const _0x257af7 = _0x162c26;
            if (!_0x20a21f[_0x257af7(0x85a, 'uKRM')]) return;
            _0x20a21f['name'] == _0x4a41a8[_0x257af7(0x4b4, 'niup')] &&
              ((_0x20a21f['material'][_0x257af7(0x3ac, ')bs3')] = _0xc15242),
              (_0x20a21f[_0x257af7(0x239, 'RKdF')][_0x257af7(0x83d, 'ZWj!')] =
                !0x0));
          }
        );
      } else {
        if (!_0x496425[_0x162c26(0x704, 'ZWj!')]) return;
        _0x3e33cc['omZWX'](_0x496425[_0x162c26(0x848, 'RKdF')], '网格170_1') &&
          ((_0x496425['material'][_0x162c26(0x240, 'Jare')] = _0x568e1c),
          (_0x496425[_0x162c26(0x5c8, 'u[Qt')][_0x162c26(0x82c, 'uKRM')] =
            !0x0));
      }
    });
  }
  [_0x124220(0x2d0, 'Aj*g')](_0x5450f7) {
    const _0x2f6280 = _0x124220,
      _0x3f0028 = {
        cxpTx: _0x2f6280(0x63d, 'Pw)Z'),
        YUmYU: function (_0x5b991f, _0x1e0caf) {
          return _0x5b991f == _0x1e0caf;
        },
        eVjFS: _0x2f6280(0x2ac, 'rAev'),
        lrgWR: function (_0x1d9b97, _0x1bd905) {
          return _0x1d9b97 === _0x1bd905;
        },
        pJPJG: _0x2f6280(0x371, 'cwps'),
        TBSrV: _0x2f6280(0x61b, 'G#Vj'),
      };
    this[_0x2f6280(0x277, 'i#24')]['traverse']((_0x498267) => {
      const _0xa6125b = _0x2f6280;
      if (_0xa6125b(0x779, 'u[Qt') !== _0x3f0028[_0xa6125b(0x1dc, 'VCBb')]) {
        const _0x57c7e3 = _0xa6125b(0x54a, '9@W9')[_0xa6125b(0x2c0, 'ZXoK')](
          '|'
        );
        let _0x433d2e = 0x0;
        while (!![]) {
          switch (_0x57c7e3[_0x433d2e++]) {
            case '0':
              this[_0xa6125b(0x481, 'rccG')][_0xa6125b(0x50f, 'S7tx')][
                _0xa6125b(0x4b0, 'UchA')
              ](-32.91, 135.76, 157.6);
              continue;
            case '1':
              this['controls'][_0xa6125b(0x459, 'o7f1')] = new _0x507dd8()[
                'copy'
              ](this[_0xa6125b(0x217, '$cvL')][_0xa6125b(0x41a, 'i#24')]);
              continue;
            case '2':
              this['controls'][_0xa6125b(0x20e, 'G#Vj')][
                _0xa6125b(0x492, 'tNI4')
              ](-54.01, -6.7, 15.85);
              continue;
            case '3':
              this[_0xa6125b(0x6c3, 'LMyx')][_0xa6125b(0x491, 'uUNF')]();
              continue;
            case '4':
              this[_0xa6125b(0x70b, 'uKRM')][_0xa6125b(0x2b8, 'VCBb')] =
                new _0x43009a()[_0xa6125b(0x41d, 'ks5y')](
                  this[_0xa6125b(0x463, 'zYl*')][_0xa6125b(0x2de, 'VCBb')]
                );
              continue;
            case '5':
              this[_0xa6125b(0x83a, '9sEE')]();
              continue;
          }
          break;
        }
      } else {
        if (!_0x498267[_0xa6125b(0x5dc, 'rccG')]) return;
        if (
          _0x3f0028[_0xa6125b(0x520, 'Aj*g')](
            _0x498267[_0xa6125b(0x6ef, 'cwps')],
            _0x3f0028['eVjFS']
          )
        ) {
          if (
            _0x3f0028[_0xa6125b(0x56b, '&A2z')](
              _0x3f0028[_0xa6125b(0x4af, 'tNI4')],
              _0x3f0028['TBSrV']
            )
          ) {
            const _0x527c52 =
              _0x419db[_0xa6125b(0x358, '!vuU')][_0xa6125b(0x441, 'ZmW^')]();
            _0x527c52[_0xa6125b(0x551, 'Ta41')][_0xa6125b(0x63f, 'rAev')](
              _0x520226['position']
            ),
              _0x527c52['rotation'][_0xa6125b(0x670, '@cxu')](
                _0x2cbf71[_0xa6125b(0x599, 'rccG')]
              ),
              this['models']['add'](_0x527c52);
          } else
            (_0x498267[_0xa6125b(0x48d, 'uKRM')]['metalness'] = _0x5450f7),
              (_0x498267[_0xa6125b(0x3b9, 'i#24')][_0xa6125b(0x777, '2djq')] =
                !0x0);
        }
      }
    });
  }
  [_0x124220(0x74c, 'a]m&')](_0x4b4718) {
    const _0x2b3c4e = _0x124220;
    this['pluniforms'][_0x2b3c4e(0x1bb, 'ks5y')][_0x2b3c4e(0x4b8, '9r9(')] =
      new Color(_0x4b4718);
  }
  [_0x124220(0x7d6, 'ZmW^')](_0x56ce31) {
    const _0x60e842 = _0x124220;
    this[_0x60e842(0x817, 'wFk%')][_0x60e842(0x3f2, 'JVJG')][
      _0x60e842(0x83e, 'u9nJ')
    ][_0x60e842(0x58c, '!vuU')]['value'] = new Color(_0x56ce31);
  }
  [_0x124220(0x206, 'wFk%')](_0x5c459b) {
    const _0x3a40a6 = _0x124220;
    if (this[_0x3a40a6(0x615, 'wFk%')])
      this['pluniforms']['opacity'][_0x3a40a6(0x546, 'o7f1')] = _0x5c459b;
  }
  [_0x124220(0x25d, 'zYl*')](_0x4e733b) {
    const _0x4690e4 = _0x124220;
    if (this[_0x4690e4(0x315, 'niup')])
      this[_0x4690e4(0x684, 'tNI4')]['roughness'][_0x4690e4(0x264, 'wFk%')] =
        _0x4e733b;
  }
  [_0x124220(0x6d0, 'DX0Q')](_0x3481b1) {
    const _0x174d76 = _0x124220,
      _0x4cc30a = {
        SUswj: 'div',
        nbxhY: 'style',
        Ytpff: _0x174d76(0x69a, 'H]sX'),
        pQYdd: _0x174d76(0x52c, 'ks5y'),
      },
      _0x425ee4 = document[_0x174d76(0x5a1, 'v]cc')](
        _0x4cc30a[_0x174d76(0x737, 'a]m&')]
      ),
      _0xdd963d = document[_0x174d76(0x593, 'Ta41')](_0x4cc30a['SUswj']);
    _0x425ee4['appendChild'](_0xdd963d),
      _0xdd963d[_0x174d76(0x3bb, 'ZXoK')](
        _0x4cc30a[_0x174d76(0x7eb, 'ZTP3')],
        'color:white;height:6px;display:flex;flex-direction:row;position:relative;left:50%;margin-left:-3px;'
      );
    const _0x110a4d = document[_0x174d76(0x5b2, 'Yv(m')](
      _0x4cc30a[_0x174d76(0x295, 'i#24')]
    );
    _0x110a4d[_0x174d76(0x2a5, 'S7tx')](
      _0x4cc30a['nbxhY'],
      _0x174d76(0x7f8, 'Yv(m')
    ),
      _0xdd963d['appendChild'](_0x110a4d);
    const _0x3b9261 = document[_0x174d76(0x5fd, '$cvL')]('div');
    _0x3b9261[_0x174d76(0x3c2, 'a]m&')](
      _0x174d76(0x273, 'RKdF'),
      _0x174d76(0x557, 'DX0Q')
    ),
      (_0x3b9261[_0x174d76(0x81e, 'o7f1')] =
        this[_0x174d76(0x394, 'uUNF')][this[_0x174d76(0x6a8, 'tNI4')]]),
      _0xdd963d[_0x174d76(0x4e5, 'ks5y')](_0x3b9261);
    const _0x141478 = new CSS2DObject(_0x425ee4);
    (_0x141478[_0x174d76(0x276, 'jZCM')] = _0x4cc30a[_0x174d76(0x77c, 'UchA')]),
      _0x141478['position'][_0x174d76(0x566, 'ZmW^')](_0x3481b1),
      this[_0x174d76(0x74a, 'wFk%')]['add'](_0x141478),
      this[_0x174d76(0x7b1, 'LMyx')]++,
      this['event'][_0x174d76(0x351, 'Ta41')](
        _0x4cc30a[_0x174d76(0x6e0, 'zYl*')],
        {
          name: this['devicesNames'][this[_0x174d76(0x64b, 'Ta41')]],
          position: _0x3481b1,
          imgUrl: _0x174d76(0x1f6, 'v]cc'),
          id: this[_0x174d76(0x267, 'v]cc')],
        }
      );
  }
  ['deletePoint']() {
    const _0x82b0e2 = _0x124220,
      _0x5d37f9 = {
        pifyO: function (_0x29f5f7, _0x490ec3) {
          return _0x29f5f7 < _0x490ec3;
        },
        tyVjL: _0x82b0e2(0x1ba, 'VCBb'),
      };
    if (
      _0x5d37f9['pifyO'](
        this['points'][_0x82b0e2(0x22b, '9sEE')]['length'],
        0x1
      )
    )
      return;
    const _0x2dbb86 = this['points']['children'][_0x82b0e2(0x5ac, 'qNG@')]();
    this[_0x82b0e2(0x6b8, 'ZWj!')][_0x82b0e2(0x1d5, 'wFk%')](_0x2dbb86);
    const _0x4fc438 = _0x2dbb86['element'];
    _0x4fc438['parentNode']['removeChild'](_0x4fc438),
      this[_0x82b0e2(0x64f, 'u[Qt')]--,
      this[_0x82b0e2(0x5a3, 'ZmW^')][_0x82b0e2(0x518, '&A2z')](
        _0x5d37f9[_0x82b0e2(0x251, 'uKRM')],
        this[_0x82b0e2(0x79d, 'uKRM')]
      );
  }
  async [_0x124220(0x81f, 'ZmW^')](_0x4ca95b, _0x24bf60, _0x573cbf) {
    const _0x1d7c3a = _0x124220,
      _0x1bb325 = {
        PFyAO: function (_0x4eeffd, _0x38f5ec) {
          return _0x4eeffd !== _0x38f5ec;
        },
        EwHoT: function (_0x12a968, _0x4f21b0) {
          return _0x12a968 * _0x4f21b0;
        },
        UhZIc: function (_0x25ee51, _0x6ce788) {
          return _0x25ee51 / _0x6ce788;
        },
        wJekB: function (_0x577694, _0x222ca3) {
          return _0x577694(_0x222ca3);
        },
        gJiKx: _0x1d7c3a(0x671, 'Kk69'),
        TyIiI: 'qjyWF',
        nBiDW: _0x1d7c3a(0x3e5, '2djq'),
        VvYjI: 'position',
        Qvmrs: _0x1d7c3a(0x790, '$cvL'),
        ukWNd: 'color',
      },
      _0x3c30fa = [];
    this[_0x1d7c3a(0x67f, 'RyL6')]
      ? _0x1bb325[_0x1d7c3a(0x3ee, 'uKRM')](
          _0x1bb325[_0x1d7c3a(0x42e, '7%kX')],
          _0x1bb325['TyIiI']
        )
        ? _0x1d810f[_0x1d7c3a(0x789, 'qNG@')]()
        : _0x4ca95b[_0x1d7c3a(0x48f, 'wFk%')]((_0x191c63) => {
            const _0x5cf2a3 = _0x1d7c3a;
            _0x3c30fa['push'](
              new Vector3(
                _0x191c63['position']['x'],
                _0x191c63['position']['y'],
                _0x191c63[_0x5cf2a3(0x6be, '2djq')]['z']
              )
            );
          })
      : _0x1bb325[_0x1d7c3a(0x5e0, 'wFk%')] === _0x1d7c3a(0x363, 'ZmW^')
      ? ((_0x13f9b1[_0x1d7c3a(0x352, 'rAev')] = _0xaf6ef3[_0x33b2f8['uuid']]),
        delete _0x161ca7[_0x3eedbc['uuid']])
      : _0x4ca95b['forEach']((_0x376a4d) => {
          const _0x44a136 = _0x1d7c3a,
            _0x1dd60f = {
              HHKUT: function (_0x4bea26, _0x561ce2) {
                const _0x3b5c2d = _0x3432;
                return _0x1bb325[_0x3b5c2d(0x3a4, 'o7f1')](
                  _0x4bea26,
                  _0x561ce2
                );
              },
              RFrgD: function (_0x49f5aa, _0x18d6be) {
                return _0x49f5aa - _0x18d6be;
              },
              ObWYq: function (_0x5bac0b, _0x20090b) {
                const _0x354945 = _0x3432;
                return _0x1bb325[_0x354945(0x6a7, 'rccG')](
                  _0x5bac0b,
                  _0x20090b
                );
              },
              LgSTG: function (_0x3344ce, _0x4306c1) {
                const _0x2b151c = _0x3432;
                return _0x1bb325[_0x2b151c(0x461, '!vuU')](
                  _0x3344ce,
                  _0x4306c1
                );
              },
              QTKAf: function (_0x1e506a, _0x43e128) {
                const _0x3af42a = _0x3432;
                return _0x1bb325[_0x3af42a(0x7f6, 'v]cc')](
                  _0x1e506a,
                  _0x43e128
                );
              },
              tajBz: function (_0x3f2550, _0xbbc02f) {
                return _0x3f2550(_0xbbc02f);
              },
            };
          if (
            _0x1bb325[_0x44a136(0x747, '2djq')] !==
            _0x1bb325[_0x44a136(0x49d, '9r9(')]
          ) {
            _0x339bb2[_0x44a136(0x4b3, 'wFk%')]();
            if (
              _0x1dd60f[_0x44a136(0x664, 'zYl*')](
                _0x39259e[_0x44a136(0x1c2, 'qNG@')],
                0x1
              )
            )
              return;
            (this[_0x44a136(0x361, '9@W9')]['x'] = _0x1dd60f[
              _0x44a136(0x2e4, '@cxu')
            ](
              _0x1dd60f[_0x44a136(0x4f4, 'ZmW^')](
                _0x1dd60f['LgSTG'](
                  _0x635d8d[_0x44a136(0x84d, 'u9nJ')],
                  this[_0x44a136(0x583, 'ks5y')]
                ),
                0x2
              ),
              0x1
            )),
              (this['mouse']['y'] =
                -(_0x2c5f71['clientY'] / this[_0x44a136(0x4cf, 'UchA')]) * 0x2 +
                0x1),
              this['raycaster'][_0x44a136(0x6b3, '!vuU')](
                this[_0x44a136(0x4e1, 'H]sX')],
                this[_0x44a136(0x73b, '@cxu')]
              );
            const _0xda87ed = this['raycaster'][_0x44a136(0x859, 'ZXoK')](
              this['models']['children']
            );
            if (_0xda87ed['length'] < 0x1) return;
            const _0x32527a = {};
            (_0x32527a['x'] = _0x1dd60f['QTKAf'](
              _0x106a34,
              _0xda87ed[0x0][_0x44a136(0x1e5, 'zYl*')]['x']['toFixed'](0x3)
            )),
              (_0x32527a['y'] = _0x1dd60f[_0x44a136(0x780, 'JVJG')](
                _0x3ede21,
                _0xda87ed[0x0][_0x44a136(0x473, 'Aj*g')]['y'][
                  _0x44a136(0x1c5, 'ZTP3')
                ](0x3)
              )),
              (_0x32527a['z'] = _0x1dd60f['tajBz'](
                _0x241325,
                _0xda87ed[0x0]['point']['z'][_0x44a136(0x609, 'rAev')](0x3)
              ));
            if (this[_0x44a136(0x69e, '!ncs')])
              this[_0x44a136(0x821, 'ZXoK')](
                new _0x19691d(_0x32527a['x'], _0x32527a['y'], _0x32527a['z'])
              );
          } else
            _0x3c30fa['push'](
              new Vector3(_0x376a4d[0x0], _0x376a4d[0x1], _0x376a4d[0x2])
            );
        });
    const _0x1068bd = new MeshBasicMaterial({
        color: _0x24bf60,
        side: DoubleSide,
      }),
      _0x4875fb = new PolyLine(_0x573cbf, !0x0, !0x0),
      _0x36fe10 = _0x4875fb[_0x1d7c3a(0x4c6, 'G#Vj')](_0x3c30fa),
      [_0x337390, _0x358298, _0x11bf07, _0x2bb836, _0x5c20f8] = await _0x4875fb[
        _0x1d7c3a(0x75e, 'u9nJ')
      ](_0x36fe10[0x0], _0x36fe10[0x1]),
      _0x1ac11d = new BufferGeometry();
    _0x1ac11d['setAttribute'](
      _0x1bb325[_0x1d7c3a(0x396, 'tNI4')],
      new BufferAttribute(_0x337390, 0x3)
    ),
      _0x1ac11d[_0x1d7c3a(0x378, 'Yv(m')](
        _0x1bb325[_0x1d7c3a(0x427, 'ZmW^')],
        new BufferAttribute(new Float32Array(_0x358298), 0x3)
      ),
      _0x1ac11d[_0x1d7c3a(0x398, 'Kk69')](_0x11bf07),
      _0x1ac11d[_0x1d7c3a(0x2a5, 'S7tx')](
        'uv',
        new BufferAttribute(new Float32Array(_0x2bb836), 0x2)
      ),
      _0x1ac11d[_0x1d7c3a(0x1d1, 'tNI4')](
        _0x1bb325[_0x1d7c3a(0x3a2, 'v]cc')],
        new BufferAttribute(new Float32Array(_0x5c20f8), 0x3)
      );
    const _0x39f316 = new Mesh(_0x1ac11d, _0x1068bd);
    _0x39f316[_0x1d7c3a(0x66d, 'JVJG')]['enable'](BLOOM_SCENE),
      this[_0x1d7c3a(0x6f9, 'S7tx')]['add'](_0x39f316);
  }
  ['createPanel'](_0x692fe6, _0xb5c951) {
    const _0x3ac2e5 = _0x124220,
      _0x55dfa1 = {
        ungTF: function (_0x3ae62f, _0x43bb0b) {
          return _0x3ae62f == _0x43bb0b;
        },
        AYnDJ: _0x3ac2e5(0x4c0, '9sEE'),
      },
      _0xd9c285 = this[_0x3ac2e5(0x3f4, '!ncs')]['children'][
        _0x3ac2e5(0x301, '$cvL')
      ]((_0x448686) => {
        const _0x4fabf1 = _0x3ac2e5;
        return _0x55dfa1['ungTF'](
          _0x448686[_0x4fabf1(0x795, '$cvL')],
          _0xb5c951['id']
        );
      });
    if (!_0xd9c285) return;
    const _0x18fdc3 = new CSS2DObject(_0x692fe6);
    _0x18fdc3[_0x3ac2e5(0x485, 'VCBb')] = _0x55dfa1[_0x3ac2e5(0x4b5, 'VCBb')];
    const _0x47945b = new Vector3()[_0x3ac2e5(0x670, '@cxu')](
      _0xd9c285['position']
    );
    _0x18fdc3[_0x3ac2e5(0x30b, '!ncs')]['copy'](_0x47945b),
      this[_0x3ac2e5(0x20f, 'UchA')]['add'](_0x18fdc3);
  }
  [_0x124220(0x46c, '7%kX')]() {
    const _0x81046a = _0x124220;
    this[_0x81046a(0x5ef, 'uKRM')](this[_0x81046a(0x27e, 'a]m&')]);
  }
  async [_0x124220(0x292, 'cwps')](_0x2edf7a, _0x5034b2) {
    const _0x856d77 = _0x124220,
      _0x1ca8ce = {
        TMxSS: function (_0x3da237, _0x4c58ec) {
          return _0x3da237 === _0x4c58ec;
        },
        mauJs: function (_0x3bc68d, _0x5a785e) {
          return _0x3bc68d == _0x5a785e;
        },
        Zoyud: _0x856d77(0x72e, 'u[Qt'),
        eSGyW: _0x856d77(0x2c3, 'Pw)Z'),
      };
    let _0x3990b1;
    this[_0x856d77(0x20b, 'o7f1')]['traverse']((_0x20dfee) => {
      if (_0x1ca8ce['TMxSS'](_0x20dfee['deviceId'], _0x2edf7a))
        _0x3990b1 = _0x20dfee;
    });
    if (_0x3990b1) {
      if (_0x1ca8ce[_0x856d77(0x339, 'Ta41')] !== _0x856d77(0x3fb, 'ZXoK'))
        await this['deviceFly'](_0x3990b1);
      else {
        if (!_0x92038[_0x856d77(0x53e, 'i#24')]) return;
        _0x1ca8ce[_0x856d77(0x626, 'tNI4')](
          _0x10cb83[_0x856d77(0x4c3, 'ZmW^')],
          _0x1ca8ce[_0x856d77(0x4da, 'wFk%')]
        ) &&
          ((_0x12c92[_0x856d77(0x72d, 'wFk%')][_0x856d77(0x1db, 'u[Qt')] =
            new _0x3e13bf(_0x340469)),
          (_0x43fba0['material'][_0x856d77(0x6f5, 'u9nJ')] = !0x0));
      }
    }
  }
  ['deviceFly'](_0x11eacc) {
    const _0x4e1a98 = {
      TsPhq: function (_0x1162f6) {
        return _0x1162f6();
      },
    };
    return new Promise((_0x5ce2b0) => {
      const _0x1f6f02 = _0x3432,
        _0x556c49 = new Vector3();
      _0x11eacc[_0x1f6f02(0x3a6, 'uKRM')](_0x556c49);
      const _0x173d65 = new Vector3()[_0x1f6f02(0x566, 'ZmW^')](_0x556c49);
      (_0x173d65['y'] += 0x3),
        (_0x173d65['z'] += 0x5),
        this[_0x1f6f02(0x34f, '&A2z')](
          this[_0x1f6f02(0x677, 'ZTP3')][_0x1f6f02(0x672, 'Kk69')],
          _0x173d65,
          0xbb8
        ),
        this[_0x1f6f02(0x245, 'ZXoK')](
          this[_0x1f6f02(0x210, '9sEE')][_0x1f6f02(0x30c, 'Aj*g')],
          _0x556c49,
          0xbb8,
          (_0x5e6ec9) => {
            const _0x112449 = _0x1f6f02;
            if (_0x5e6ec9) _0x4e1a98[_0x112449(0x1ca, '!vuU')](_0x5ce2b0);
          }
        );
    });
  }
  [_0x124220(0x254, '$cvL')]() {
    const _0x1a85e1 = _0x124220;
    this['tweenAnimate'](
      this[_0x1a85e1(0x73b, '@cxu')][_0x1a85e1(0x27b, 'u9nJ')],
      this[_0x1a85e1(0x70b, 'uKRM')][_0x1a85e1(0x44d, 'uUNF')],
      0xbb8
    ),
      this['tweenAnimate'](
        this['controls'][_0x1a85e1(0x1fe, '7%kX')],
        this[_0x1a85e1(0x4e8, 'o7f1')][_0x1a85e1(0x5e4, 'RKdF')],
        0xbb8
      );
  }
  [_0x124220(0x245, 'ZXoK')](_0x5ea227, _0x2f4d48, _0x367bc8, _0x2db176) {
    const _0x2d97ff = _0x124220,
      _0x72ba85 = {
        jFyKS: function (_0x32ecd6, _0x2ce859) {
          return _0x32ecd6 !== _0x2ce859;
        },
        XkiFt: function (_0x4c3467, _0xaf3812) {
          return _0x4c3467(_0xaf3812);
        },
      },
      _0xb6ae42 = new TWEEN['Tween'](_0x5ea227)['to'](
        { x: _0x2f4d48['x'], y: _0x2f4d48['y'], z: _0x2f4d48['z'] },
        _0x367bc8
      );
    _0xb6ae42[_0x2d97ff(0x6f8, 'v]cc')](() => {
      const _0x2259c2 = _0x2d97ff;
      this[_0x2259c2(0x77b, 'ks5y')]['update']();
    }),
      _0xb6ae42[_0x2d97ff(0x2e8, 'H]sX')](
        TWEEN[_0x2d97ff(0x1bd, 'rccG')][_0x2d97ff(0x226, 'v]cc')][
          _0x2d97ff(0x3d3, 'UchA')
        ]
      ),
      _0xb6ae42[_0x2d97ff(0x66e, 'H]sX')](),
      _0xb6ae42[_0x2d97ff(0x788, 'rmSV')](() => {
        const _0x48f37f = _0x2d97ff;
        if (
          _0x72ba85[_0x48f37f(0x2b5, 'jZCM')]('QCkbU', _0x48f37f(0x1fc, 'rAev'))
        ) {
          const _0x3be21f = _0x48f37f(0x40d, 'tNI4')[_0x48f37f(0x585, 'Aj*g')](
            '|'
          );
          let _0x39f089 = 0x0;
          while (!![]) {
            switch (_0x3be21f[_0x39f089++]) {
              case '0':
                _0x2cb7fd[_0x48f37f(0x5c8, 'u[Qt')][
                  _0x48f37f(0x27a, 'tNI4')
                ] = 0.5;
                continue;
              case '1':
                _0xededf2[_0x48f37f(0x756, '9@W9')]['needsUpdate'] = !0x0;
                continue;
              case '2':
                _0x113cd9[_0x48f37f(0x57c, 'H]sX')][_0x48f37f(0x65d, 'S7tx')] =
                  new _0x26fce8(_0x48f37f(0x356, 'i#24'));
                continue;
              case '3':
                _0x37ddc5[_0x48f37f(0x659, 'ZmW^')][_0x48f37f(0x72f, 'RyL6')](
                  _0x118736
                );
                continue;
              case '4':
                _0x293223[_0x48f37f(0x64c, '$cvL')][
                  _0x48f37f(0x85f, '!vuU')
                ] = 0.5;
                continue;
              case '5':
                _0x7fe575['material'][_0x48f37f(0x740, 'Aj*g')] = new _0x12d4a3(
                  _0x48f37f(0x733, 'niup')
                );
                continue;
            }
            break;
          }
        } else {
          if (_0x2db176) _0x72ba85['XkiFt'](_0x2db176, !0x0);
        }
      });
  }
  [_0x124220(0x62d, '9r9(')]() {
    const _0x46a89c = _0x124220,
      _0x379329 = {
        XAgEQ: function (_0x59e327, _0x26c3f1) {
          return _0x59e327 + _0x26c3f1;
        },
        CAiBz: function (_0x367766, _0x2aa2e9) {
          return _0x367766 === _0x2aa2e9;
        },
        NNHjM: _0x46a89c(0x55e, 'G#Vj'),
        eOhuk: function (_0x5941b4, _0x2991cb) {
          return _0x5941b4 !== _0x2991cb;
        },
        IhPyp: _0x46a89c(0x2fd, 'DX0Q'),
        gIIlp: _0x46a89c(0x60c, ')bs3'),
        oJVRK: _0x46a89c(0x4f5, 'niup'),
        YzSSK: 'model/huolun.glb',
      },
      _0x383a36 = [
        {
          pos: new Vector3(-37.46, 1.43, 53.386),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(0x0, 0.12, 0x0, _0x379329['gIIlp']),
        },
        {
          pos: new Vector3(-37.75, 1.43, 51.141),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(
            0x0,
            0.12,
            0x0,
            _0x379329[_0x46a89c(0x6bd, '!ncs')]
          ),
        },
        {
          pos: new Vector3(-35.8, 1.43, 0x30),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(0x0, -0x1, 0x0, _0x379329['gIIlp']),
        },
        {
          pos: new Vector3(-32.87, 1.43, 45.805),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(0x0, -0x1, 0x0, _0x379329['gIIlp']),
        },
        {
          pos: new Vector3(-29.13, 1.43, 52.227),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(
            0x0,
            -0x3,
            0x0,
            _0x379329[_0x46a89c(0x5da, 'RKdF')]
          ),
        },
        {
          pos: new Vector3(-29.39, 1.43, 50.308),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(0x0, -0x3, 0x0, _0x46a89c(0x225, 'rccG')),
        },
        {
          pos: new Vector3(-29.6, 1.43, 48.672),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(
            0x0,
            -0x3,
            0x0,
            _0x379329[_0x46a89c(0x313, '9@W9')]
          ),
        },
        {
          pos: new Vector3(-29.82, 1.43, 46.857),
          scale: new Vector3(0.008, 0.008, 0.008),
          rotation: new Euler(
            0x0,
            -0x3,
            0x0,
            _0x379329[_0x46a89c(0x426, 'H]sX')]
          ),
        },
      ];
    this[_0x46a89c(0x711, 'a]m&')][_0x46a89c(0x748, 'VCBb')](
      _0x379329['oJVRK'],
      (_0x281c3c) => {
        const _0x154628 = _0x46a89c,
          _0x5cd8ca = {
            aizmr: function (_0x29f657, _0x43cfa5) {
              const _0x6c1beb = _0x3432;
              return _0x379329[_0x6c1beb(0x847, 'Yv(m')](_0x29f657, _0x43cfa5);
            },
            llsuw: function (_0x352e39, _0x26498c) {
              return _0x379329['CAiBz'](_0x352e39, _0x26498c);
            },
            uLqiF: _0x154628(0x68b, ')bs3'),
          };
        if (
          _0x379329[_0x154628(0x457, 'tNI4')](
            _0x379329[_0x154628(0x641, 'DX0Q')],
            _0x379329['NNHjM']
          )
        ) {
          const _0x730f41 = _0x281c3c[_0x154628(0x391, 'jZCM')]['clone']();
          _0x383a36['forEach']((_0xf646ed) => {
            const _0x2e50ba = _0x154628,
              _0x3e94fd = {
                sOiNc: function (_0x125dee, _0x3afe79) {
                  const _0x3838c1 = _0x3432;
                  return _0x5cd8ca[_0x3838c1(0x4de, 'uKRM')](
                    _0x125dee,
                    _0x3afe79
                  );
                },
                dwyDL: function (_0x172472, _0x1ea6fc) {
                  return _0x172472 * _0x1ea6fc;
                },
              };
            if (
              _0x5cd8ca[_0x2e50ba(0x1de, 'H]sX')](
                _0x5cd8ca[_0x2e50ba(0x47d, 'ZTP3')],
                'hEsuI'
              )
            ) {
              const _0x76364a = _0x730f41[_0x2e50ba(0x665, '$cvL')]();
              _0x76364a[_0x2e50ba(0x6c1, '9@W9')][_0x2e50ba(0x1b6, 'S7tx')](
                _0xf646ed[_0x2e50ba(0x3eb, 'DX0Q')]
              ),
                _0x76364a[_0x2e50ba(0x78b, 'Jare')][_0x2e50ba(0x1b6, 'S7tx')](
                  _0xf646ed['scale']
                ),
                _0x76364a['rotation'][_0x2e50ba(0x328, 'wFk%')](
                  _0xf646ed[_0x2e50ba(0x25e, '9@W9')]
                ),
                this['models'][_0x2e50ba(0x692, 'Aj*g')](_0x76364a);
            } else
              _0x34f3ec['log'](
                _0x3e94fd[_0x2e50ba(0x6ba, 'jZCM')](
                  _0x3e94fd[_0x2e50ba(0x47e, 'H]sX')](
                    _0x3f9cc1['loaded'] / _0x687070[_0x2e50ba(0x5a0, '!vuU')],
                    0x64
                  ),
                  '%\x20loaded'
                )
              );
          });
        } else
          _0x51ade9[_0x154628(0x1e9, 'ks5y')](
            new _0x4863bd(
              _0x883e60[_0x154628(0x7a1, 'v]cc')]['x'],
              _0x311590['position']['y'],
              _0x14da8d[_0x154628(0x43c, 'tNI4')]['z']
            )
          );
      }
    );
    const _0x5c10ee = [
      {
        pos: new Vector3(-36.5, 0.3, 53.061),
        rotation: new Euler(0x0, 3.28, 0x0, _0x46a89c(0x537, 'v]cc')),
      },
      {
        pos: new Vector3(-35.3, 0.3, 48.9),
        rotation: new Euler(
          0x0,
          2.23,
          0x0,
          _0x379329[_0x46a89c(0x430, 'uUNF')]
        ),
      },
      {
        pos: new Vector3(-0x1e, 0.3, 52.158),
        rotation: new Euler(0x0, 0.14, 0x0, 'XYZ'),
      },
      {
        pos: new Vector3(-30.7, 0.3, 47.2),
        rotation: new Euler(
          0x0,
          0.14,
          0x0,
          _0x379329[_0x46a89c(0x37d, 'ks5y')]
        ),
      },
    ];
    this[_0x46a89c(0x558, 'ZXoK')]['load'](
      _0x379329[_0x46a89c(0x7ad, 'RyL6')],
      (_0xf2e030) => {
        const _0x216aee = _0x46a89c;
        if (
          _0x379329[_0x216aee(0x2a2, 'zYl*')](
            _0x379329[_0x216aee(0x338, '@cxu')],
            _0x379329[_0x216aee(0x1c4, 'ZWj!')]
          )
        ) {
          const _0x30d2db = _0x216aee(0x44c, 'o7f1')['split']('|');
          let _0x190168 = 0x0;
          while (!![]) {
            switch (_0x30d2db[_0x190168++]) {
              case '0':
                this[_0x216aee(0x1d9, 'jZCM')](_0x1e504d[0x1]);
                continue;
              case '1':
                this['makeSouth'](_0x1ab21c[0x0]);
                continue;
              case '2':
                this[_0x216aee(0x517, 'o7f1')](_0x38a7db[0x3]);
                continue;
              case '3':
                this[_0x216aee(0x49f, 'ZmW^')](_0x326bef[0x2]);
                continue;
              case '4':
                return;
            }
            break;
          }
        } else {
          _0xf2e030['scene'][_0x216aee(0x228, '9sEE')]((_0x45d375) => {
            const _0x3ea236 = _0x216aee;
            if (_0x45d375[_0x3ea236(0x5dc, 'rccG')])
              _0x45d375[_0x3ea236(0x74e, '!ncs')][_0x3ea236(0x50d, 'H]sX')](
                BLOOM_SCENE
              );
          }),
            _0xf2e030[_0x216aee(0x5a5, 'rccG')][_0x216aee(0x840, 'ZWj!')][
              'set'
            ](0.3, 0.3, 0.3);
          const _0x229038 = _0xf2e030['scene']['clone']();
          _0x5c10ee['forEach']((_0x1a8bfd) => {
            const _0x59a94a = _0x216aee,
              _0x51ccce = _0x229038['clone']();
            _0x51ccce['position']['copy'](_0x1a8bfd[_0x59a94a(0x6ed, 'Jare')]),
              _0x51ccce[_0x59a94a(0x30e, '&A2z')][_0x59a94a(0x7d1, 'DX0Q')](
                _0x1a8bfd[_0x59a94a(0x3f8, '@cxu')]
              ),
              this[_0x59a94a(0x6b0, ')bs3')][_0x59a94a(0x7aa, 'Jare')](
                _0x51ccce
              );
          });
        }
      }
    );
  }
  ['loadDengta']() {
    const _0x1427b0 = _0x124220,
      _0x11539a = {
        WKdvP: function (_0x13977e, _0x2db4c5) {
          return _0x13977e !== _0x2db4c5;
        },
        AffqY: _0x1427b0(0x2b4, 'rmSV'),
        HVako: _0x1427b0(0x6c6, 'Aj*g'),
      };
    this['gltfLoader'][_0x1427b0(0x322, 'ZWj!')](
      _0x1427b0(0x2b3, '$cvL'),
      (_0x1187f0) => {
        const _0x369f2a = _0x1427b0;
        if (
          _0x11539a['WKdvP'](
            _0x11539a[_0x369f2a(0x46b, 'Pw)Z')],
            _0x11539a[_0x369f2a(0x75d, '@cxu')]
          )
        ) {
          const _0x48eacd = _0x1187f0[_0x369f2a(0x469, 'o7f1')];
          _0x48eacd['position'][_0x369f2a(0x41e, 'JVJG')](
            39.571,
            -2.361,
            -47.172
          ),
            _0x48eacd[_0x369f2a(0x726, 'zYl*')]((_0x14b930) => {
              const _0x456cc2 = _0x369f2a;
              if (!_0x14b930[_0x456cc2(0x263, 'zYl*')]) return;
              _0x14b930['layers'][_0x456cc2(0x5d9, 'Jare')](BLOOM_SCENE);
            }),
            this[_0x369f2a(0x7b4, '9r9(')][_0x369f2a(0x831, '!ncs')](_0x48eacd);
        } else _0x1cb613[_0x369f2a(0x63e, '7%kX')]['enable'](_0x1d75b3);
      }
    );
  }
  [_0x124220(0x472, 'uKRM')]() {
    const _0x28b46a = _0x124220,
      _0x1ba1ec = { scczS: _0x28b46a(0x29c, 'H]sX'), EGtmI: 'model/menji.glb' },
      _0x35c01d = [
        {
          pos: new Vector3(-2.7, -1.6, 59.109),
          rotation: new Euler(0x0, -3.13, 0x0, _0x1ba1ec['scczS']),
        },
        {
          pos: new Vector3(-15.9, -1.6, 35.815),
          rotation: new Euler(
            0x0,
            -3.13,
            0x0,
            _0x1ba1ec[_0x28b46a(0x3b3, 'UchA')]
          ),
        },
        {
          pos: new Vector3(-15.764, -1.6, 28.28),
          rotation: new Euler(0x0, -3.13, 0x0, _0x1ba1ec['scczS']),
        },
        {
          pos: new Vector3(-15.86, -1.6, 20.497),
          rotation: new Euler(0x0, -3.13, 0x0, _0x28b46a(0x63c, 'qNG@')),
        },
        {
          pos: new Vector3(12.2, -1.6, -16.7),
          rotation: new Euler(0x0, 0x3, 0x0, _0x1ba1ec['scczS']),
        },
        {
          pos: new Vector3(-2.7, -1.6, 0x33),
          rotation: new Euler(
            0x0,
            -3.13,
            0x0,
            _0x1ba1ec[_0x28b46a(0x6e4, 'DX0Q')]
          ),
        },
        {
          pos: new Vector3(13.33, -1.6, -0x18),
          rotation: new Euler(
            0x0,
            0x3,
            0x0,
            _0x1ba1ec[_0x28b46a(0x448, 'u[Qt')]
          ),
        },
      ];
    this['gltfLoader'][_0x28b46a(0x335, 'qNG@')](
      _0x1ba1ec[_0x28b46a(0x308, 'ZXoK')],
      (_0x40a7b9) => {
        const _0x1a61e = _0x28b46a,
          _0x5caef1 = _0x40a7b9[_0x1a61e(0x683, 'u[Qt')]['clone']();
        _0x5caef1[_0x1a61e(0x7b2, 'S7tx')][_0x1a61e(0x4b0, 'UchA')](
          0.008,
          0.008,
          0.008
        ),
          _0x35c01d[_0x1a61e(0x33f, 'uKRM')]((_0x5d47bc) => {
            const _0x12eb1e = _0x1a61e,
              _0x2cc2d6 = _0x5caef1['clone']();
            _0x2cc2d6[_0x12eb1e(0x5b0, 'ZXoK')][_0x12eb1e(0x6a4, 'niup')](
              _0x5d47bc['pos']
            ),
              _0x2cc2d6[_0x12eb1e(0x350, 'ks5y')][_0x12eb1e(0x771, 'ZXoK')](
                _0x5d47bc['rotation']
              ),
              this[_0x12eb1e(0x3d7, 'Aj*g')][_0x12eb1e(0x5e3, 'i#24')](
                _0x2cc2d6
              );
          });
      }
    );
    const _0x544f41 = [
      {
        pos: new Vector3(1.03, -1.9, -2.074),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1ba1ec[_0x28b46a(0x7ff, 'H]sX')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -3.874),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1ba1ec[_0x28b46a(0x3b3, 'UchA')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -5.674),
        rotation: new Euler(0x0, -1.57, 0x0, _0x1ba1ec['scczS']),
      },
      {
        pos: new Vector3(1.03, -1.9, -7.474),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1ba1ec[_0x28b46a(0x591, '&A2z')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -9.274),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1ba1ec[_0x28b46a(0x497, 'zYl*')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -11.074),
        rotation: new Euler(0x0, -1.57, 0x0, _0x1ba1ec['scczS']),
      },
      {
        pos: new Vector3(1.03, -1.9, -12.874),
        rotation: new Euler(0x0, -1.57, 0x0, _0x1ba1ec['scczS']),
      },
      {
        pos: new Vector3(1.03, -1.9, -14.674),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1ba1ec[_0x28b46a(0x7ff, 'H]sX')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -16.474),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1ba1ec[_0x28b46a(0x22e, 'i#24')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -18.274),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1ba1ec[_0x28b46a(0x5f4, 'u9nJ')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -20.074),
        rotation: new Euler(0x0, -1.57, 0x0, 'XYZ'),
      },
      {
        pos: new Vector3(1.03, -1.9, -21.874),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1ba1ec[_0x28b46a(0x6e7, '7%kX')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -23.674),
        rotation: new Euler(
          0x0,
          -1.57,
          0x0,
          _0x1ba1ec[_0x28b46a(0x1eb, '$cvL')]
        ),
      },
      {
        pos: new Vector3(1.03, -1.9, -25.474),
        rotation: new Euler(0x0, -1.57, 0x0, _0x1ba1ec['scczS']),
      },
      {
        pos: new Vector3(1.03, -1.9, -27.274),
        rotation: new Euler(0x0, -1.57, 0x0, 'XYZ'),
      },
      {
        pos: new Vector3(1.03, -1.9, -29.074),
        rotation: new Euler(0x0, -1.57, 0x0, _0x28b46a(0x269, 'tNI4')),
      },
      {
        pos: new Vector3(1.03, -1.9, -30.874),
        rotation: new Euler(0x0, -1.57, 0x0, _0x1ba1ec['scczS']),
      },
      {
        pos: new Vector3(1.03, -1.9, -32.674),
        rotation: new Euler(0x0, -1.57, 0x0, _0x28b46a(0x781, 'u9nJ')),
      },
    ];
    this[_0x28b46a(0x34b, 'Aj*g')][_0x28b46a(0x6f3, 'H]sX')](
      _0x28b46a(0x407, '$cvL'),
      (_0x2711fa) => {
        const _0x303d26 = _0x28b46a;
        (this[_0x303d26(0x7c6, 'qNG@')] =
          _0x2711fa[_0x303d26(0x3d1, '@cxu')][_0x303d26(0x729, 'u[Qt')]()),
          this['menjiFater'][_0x303d26(0x7ba, 'rmSV')][
            _0x303d26(0x2a9, 'u9nJ')
          ](0.02, 0.03, 0.02),
          this[_0x303d26(0x33d, '9sEE')][_0x303d26(0x830, 'v]cc')](
            (_0x15a801) => {
              const _0x2f56f0 = _0x303d26;
              if (!_0x15a801['isMesh']) return;
              _0x15a801[_0x2f56f0(0x55a, 'v]cc')][_0x2f56f0(0x3b2, 'u9nJ')] =
                new Color(0x1e5fe0);
            }
          ),
          this[_0x303d26(0x6b6, 'VCBb')]['traverse']((_0x550063) => {
            const _0x5ee1e6 = _0x303d26;
            if (!_0x550063[_0x5ee1e6(0x6ad, 'ZTP3')]) return;
            _0x550063['material'][_0x5ee1e6(0x739, 'Ta41')] = new Color(
              0x3567a4
            );
          }),
          _0x544f41[_0x303d26(0x681, 'ZWj!')]((_0x3ba07e) => {
            const _0x4d6c73 = _0x303d26,
              _0xae0341 =
                this[_0x4d6c73(0x353, 'zYl*')][_0x4d6c73(0x51d, 'RyL6')]();
            _0xae0341[_0x4d6c73(0x468, 'DX0Q')][_0x4d6c73(0x64a, 'G#Vj')](
              _0x3ba07e[_0x4d6c73(0x5eb, 'o7f1')]
            ),
              _0xae0341[_0x4d6c73(0x227, 'JVJG')]['copy'](
                _0x3ba07e[_0x4d6c73(0x408, 'uUNF')]
              ),
              this[_0x4d6c73(0x581, 'UchA')][_0x4d6c73(0x2e9, 'wFk%')](
                _0xae0341
              );
          });
      }
    );
  }
  [_0x124220(0x775, 'rAev')](_0x689156) {
    const _0x42a5ba = _0x124220,
      _0xd8c66d = { WKORf: 'aoxCk' };
    this[_0x42a5ba(0x6b6, 'VCBb')] &&
      (_0xd8c66d[_0x42a5ba(0x324, '@cxu')] !== _0xd8c66d['WKORf']
        ? this[_0x42a5ba(0x2e0, 'v]cc')][_0x42a5ba(0x674, 'Pw)Z')](
            (_0x2c67db) => {
              const _0x4ae326 = _0x42a5ba;
              (_0x2c67db[_0x4ae326(0x4ed, '9r9(')][_0x4ae326(0x3c4, 'uUNF')] =
                _0x4ae326(0x648, 'DX0Q')),
                _0x574b8e(() => {
                  const _0x4cd6fb = _0x4ae326;
                  _0x2c67db['style'][_0x4cd6fb(0x33c, '2djq')] = _0x4cd6fb(
                    0x453,
                    'a]m&'
                  );
                }, 0x708);
            }
          )
        : this[_0x42a5ba(0x688, 'v]cc')][_0x42a5ba(0x58d, 'u9nJ')](
            (_0x403bc6) => {
              const _0x12fbd5 = _0x42a5ba;
              if (!_0x403bc6[_0x12fbd5(0x85d, '7%kX')]) return;
              _0x403bc6['material']['emissive'] = new Color(_0x689156);
            }
          ));
  }
  [_0x124220(0x814, 'Pw)Z')](_0x2683cb) {
    const _0x63bcb0 = _0x124220,
      _0x30daf1 = {
        jtWmM: function (_0x1cecd6, _0x584e62) {
          return _0x1cecd6 == _0x584e62;
        },
        PaDmz: _0x63bcb0(0x4c7, 'Jare'),
        dHNwc: 'CmgFj',
        BcOCq: _0x63bcb0(0x437, '9sEE'),
      };
    if (this[_0x63bcb0(0x5ed, 'ZWj!')]) {
      if (_0x30daf1[_0x63bcb0(0x38e, 'Aj*g')] !== _0x30daf1['BcOCq'])
        this['menjiFater'][_0x63bcb0(0x708, '!ncs')]((_0x28c1fd) => {
          const _0x508c5a = _0x63bcb0;
          if (!_0x28c1fd[_0x508c5a(0x796, 'a]m&')]) return;
          _0x28c1fd[_0x508c5a(0x4e9, 'qNG@')][_0x508c5a(0x3b4, '9r9(')] =
            new Color(_0x2683cb);
        });
      else {
        if (!_0x5bc2ae[_0x63bcb0(0x582, 'Yv(m')]) return;
        _0x30daf1[_0x63bcb0(0x548, 'H]sX')](
          _0xa40c7b[_0x63bcb0(0x7df, 'rccG')],
          _0x30daf1['PaDmz']
        ) &&
          ((_0x35a741[_0x63bcb0(0x561, '!ncs')][_0x63bcb0(0x4d1, 'DX0Q')] =
            _0x17d7d7),
          (_0x397ae6[_0x63bcb0(0x5c8, 'u[Qt')]['needsUpdate'] = !0x0));
      }
    }
  }
}
var version_ = 'jsjiami.com.v7';
