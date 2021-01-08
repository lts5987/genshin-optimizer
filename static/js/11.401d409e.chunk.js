(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[11],{120:function(e,t,a){"use strict";a.d(t,"a",(function(){return ie}));var n=a(84),c=a(2),s=a(85),i=a(91),r=a(99),l=a(98),j=a(81),d=a(23),o=a(0),b=a.n(o),h=a(162),u=a(163),x=a(200),O=a(207),m=a(206),f=a(145),p=a(217),v=a(11),g=a(143),y=a(104),S=a(31),N=a(30),k=a(117),C=a(39),K=a(108),_=a(105),I=a(89),w=a(100),T=a(88),A=a(92),E=a(82),W=a(216),B=a(94),V=a(123),L=a(93),U=a(97),z=a(83),q=a(96);var P=function(e){var t=Object(o.useState)(!1),a=Object(E.a)(t,2),n=a[0],s=a[1],i=e.character,r=i.characterKey,l=i.compareAgainstEquipped,j=i.artifactConditionals,d=e.equippedBuild,b=e.newBuild,h=e.editable,u=e.forceUpdate,x=e.setState,O=e.character,m=b||d;b&&(j=b.artifactConditionals);var f=T.a.getElementalKey(r),p=["hp","atk","def","ele_mas","crit_rate","crit_dmg","crit_multi","ener_rech","heal_bonu","phy_dmg","phy_avg_dmg"];p.push("".concat(f,"_ele_dmg")),p.push("".concat(f,"_ele_avg_dmg"));var v=["inc_heal","pow_shield","red_cd","phy_dmg","phy_res","norm_atk_dmg","char_atk_dmg","skill_dmg","burst_dmg"];T.a.getElementalKeys().forEach((function(e){v.push("".concat(e,"_ele_dmg")),v.push("".concat(e,"_ele_res"))})),v=v.filter((function(e){return!p.includes(e)}));var k=function(e){var t,a=T.a.getStatValueWithOverride(O,e),n=z.e.getStatUnit(e),s=((null===m||void 0===m||null===(t=m.finalStats)||void 0===t?void 0:t[e])||0)-a;return Object(c.jsxs)(N.a,{xs:12,md:6,xl:4,children:[Object(c.jsxs)("h6",{className:"d-inline",children:[Object(U.a)(e)," ",z.e.getStatName(e)]}),Object(c.jsxs)("span",{className:"float-right ".concat(h&&T.a.hasOverride(O,e)?"text-warning":""),children:[(null===a||void 0===a?void 0:a.toFixed(z.e.fixedUnit(e)))+n,s?Object(c.jsxs)("span",{className:s>0?"text-success":"text-danger",children:[" ",s>0&&"+",(null===s||void 0===s?void 0:s.toFixed(z.e.fixedUnit(e)))+n]}):null]})]},e)},K=function(e){var t,a,n,s=(null===d||void 0===d||null===(t=d.finalStats)||void 0===t?void 0:t[e])||T.a.getStatValueWithOverride(O,e),i=z.e.getStatUnit(e),r=((null===b||void 0===b||null===(a=b.finalStats)||void 0===a?void 0:a[e])||0)-((null===d||void 0===d||null===(n=d.finalStats)||void 0===n?void 0:n[e])||0);return Object(c.jsxs)(N.a,{xs:12,md:6,xl:4,children:[Object(c.jsxs)("h6",{className:"d-inline",children:[Object(U.a)(e)," ",z.e.getStatName(e)]}),Object(c.jsxs)("span",{className:"float-right ".concat(h&&T.a.hasOverride(O,e)?"text-warning":""),children:[(null===s||void 0===s?void 0:s.toFixed(z.e.fixedUnit(e)))+i,r?Object(c.jsxs)("span",{className:r>0?"text-success":"text-danger",children:[" (",r>0?"+":"",(null===r||void 0===r?void 0:r.toFixed(z.e.fixedUnit(e)))+i,")"]}):null]})]},e)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(C.a,{children:Object(c.jsx)(N.a,{className:"mb-2",children:Object(c.jsx)(W.a,{children:Object(c.jsxs)(S.a,{className:"h-100",bg:"lightcontent",text:"lightfont",children:[Object(c.jsx)(S.a.Header,{children:Object(c.jsxs)(C.a,{children:[Object(c.jsx)(N.a,{children:Object(c.jsx)("span",{children:"Character Stats"})}),Object(c.jsx)(N.a,{xs:"auto",children:Object(c.jsx)(W.a.Toggle,{as:y.a,variant:"info",eventKey:"showOtherStats",onClick:function(){return s(!n)},size:"sm",children:"".concat(n?"Hide":"Show"," Other Stats")})})]})}),Object(c.jsxs)(S.a.Body,{children:[Object(c.jsx)(C.a,{children:b&&l?p.map(K):p.map(k)}),Object(c.jsx)(W.a.Collapse,{eventKey:"showOtherStats",children:Object(c.jsx)(C.a,{children:b&&l?v.map(K):v.map(k)})})]}),b?Object(c.jsx)(S.a.Footer,{children:Object(c.jsx)(y.a,{size:"sm",onClick:function(){T.a.equipArtifacts(O.id,b.artifactIds),null===u||void 0===u||u()},children:"Equip All artifacts to current character"})}):null]})})})}),Object(c.jsx)(C.a,{children:Object(c.jsx)(N.a,{children:Object(c.jsxs)(C.a,{children:[Object(c.jsx)(N.a,{sm:6,lg:4,className:"mb-2",children:Object(c.jsxs)(S.a,{className:"h-100 d-flex flex-column",bg:"lightcontent",text:"lightfont",children:[Object(c.jsx)(S.a.Header,{children:"Artifact Set Effects"}),Object(c.jsx)(S.a.Body,{className:"flex-grow-1",children:Object(c.jsx)(C.a,{children:Object.entries(B.a.getArtifactSetEffects(m.setToSlots)).map((function(e){var t=Object(E.a)(e,2),a=t[0],n=t[1];return Object(c.jsxs)(N.a,{xs:12,className:"mb-2",children:[Object(c.jsx)("h5",{children:B.a.getArtifactSetName(a)}),Object(c.jsx)(C.a,{children:n.map((function(e){var t=B.a.getArtifactSetNumStats(a,e),n=0,s=B.a.getArtifactSetEffectConditional(a,e);if(s){n=q.a.getConditionalNum(j,{srcKey:a,srcKey2:e});var i=B.a.getArtifactConditionalStats(a,e,n);i&&(t||(t={}),Object.entries(i).forEach((function(e){var a=Object(E.a)(e,2),n=a[0],c=a[1];return t[n]=(t[n]||0)+c})))}var r=Object(c.jsx)(L.a,{disabled:!!b,conditional:s,conditionalNum:n,setConditional:function(t){return function(e,t,a){return null===x||void 0===x?void 0:x((function(n){return{artifactConditionals:q.a.setConditional(n.artifactConditionals,{srcKey:e,srcKey2:t},a)}}))}(a,e,t)},defEle:Object(c.jsxs)(g.a,{variant:"success",children:[e,"-Set"]})});return Object(c.jsxs)(N.a,{xs:12,className:"mb-2",children:[Object(c.jsxs)("h6",{children:[r," ",B.a.getArtifactSetEffectText(a,e,m.finalStats)]}),t?Object(c.jsx)(C.a,{children:Object.entries(t).map((function(e){var t=Object(E.a)(e,2),a=t[0],n=t[1];return Object(c.jsxs)(N.a,{xs:12,children:[z.e.getStatName(a),": ",n,z.e.getStatUnit(a)]},a)}))}):null]},e)}))})]},a)}))})})]})}),Object.values(m.artifactIds).map((function(e){return e?Object(c.jsx)(N.a,{sm:6,lg:4,className:"mb-2",children:Object(c.jsx)(V.a,{artifactId:e,forceUpdate:u})},e):null}))]})})})]})},F=a(86),M=a(201),D=a(164),H=a(107),R=a(102),X=a(103),J=a(130),G=a(112);var Q=function(e){var t=e.value,a=e.placeholder,s=e.defaultValue,i=e.onValueChange,r=e.percent,l=Object(G.a)(e,["value","placeholder","defaultValue","onValueChange","percent"]);return Object(c.jsxs)(m.a,Object(n.a)(Object(n.a)({},l),{},{children:[Object(c.jsx)(m.a.Prepend,{children:Object(c.jsx)(m.a.Text,{children:e.name})}),r?Object(c.jsx)(R.a,{placeholder:a,value:t,onValueChange:i}):Object(c.jsx)(R.b,{placeholder:a,value:t,onValueChange:i}),r?Object(c.jsx)(m.a.Append,{children:Object(c.jsx)(m.a.Text,{children:"%"})}):null,void 0!==s?Object(c.jsx)(m.a.Append,{children:Object(c.jsx)(M.a,{placement:"top",overlay:Object(c.jsx)(D.a,{children:"Reset this override to the default value."}),children:Object(c.jsx)("span",{className:"d-inline-block",children:Object(c.jsx)(y.a,{onClick:function(){return i(s)},disabled:t===s,style:t===s?{pointerEvents:"none"}:{},children:Object(c.jsx)(d.a,{icon:j.D})})})})}):null]}))};function Y(e){var t,a=e.character,s=a.characterKey,i=a.constellation,r=e.editable,l=e.setOverridelevel,b=e.setConstellation,u=Object(o.useState)(!1),x=Object(E.a)(u,2),O=x[0],f=x[1],p=T.a.getElementalKey(s),v=T.a.getWeaponTypeKey(s),g=T.a.getLevelWithOverride(e.character);return Object(c.jsxs)(C.a,{children:[Object(c.jsx)(N.a,{xs:12,lg:3,children:Object(c.jsxs)(S.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(c.jsx)(S.a.Img,{src:T.a.getCard(s),className:"w-100 h-auto"}),Object(c.jsx)(S.a.Body,{children:Object(c.jsxs)(C.a,{children:[Object(c.jsxs)(N.a,{xs:12,children:[Object(c.jsxs)("h3",{children:[T.a.getName(s)," ",Object(c.jsx)(h.a,{src:H.a.elements[p],className:"inline-icon"})," ",Object(c.jsx)(h.a,{src:null===(t=H.a.weaponTypes)||void 0===t?void 0:t[v],className:"inline-icon"})]}),Object(c.jsx)("h6",{children:Object(c.jsx)(X.a,{stars:T.a.getStar(s),colored:!0})})]}),Object(c.jsx)(N.a,{children:O?Object(c.jsx)(C.a,{children:Object(c.jsx)(N.a,{children:Object(c.jsxs)(m.a,{children:[Object(c.jsx)(m.a.Prepend,{children:Object(c.jsx)(m.a.Text,{children:"Lvl."})}),Object(c.jsx)(R.b,{onValueChange:l,value:g}),Object(c.jsx)(m.a.Append,{children:Object(c.jsx)(M.a,{placement:"bottom",overlay:Object(c.jsx)(D.a,{children:"Changes the display level. Cosmetic only."}),children:Object(c.jsx)(y.a,{variant:"danger",onClick:function(){return f(!O)},size:"sm",children:Object(c.jsx)("span",{children:Object(c.jsx)(d.a,{icon:j.s})})})})})]})})}):Object(c.jsxs)(C.a,{children:[Object(c.jsx)(N.a,{children:Object(c.jsxs)("h5",{children:["Level: ",g]})}),r?Object(c.jsx)(N.a,{xs:"auto",className:"pr-1 pl-1",children:Object(c.jsx)(y.a,{variant:"info",onClick:function(){return f(!O)},size:"sm",children:Object(c.jsx)("span",{children:Object(c.jsx)(d.a,{icon:j.g})})})}):null]})}),Object(c.jsx)(N.a,{xs:12,children:Object(c.jsxs)(C.a,{children:[Object(c.jsx)(N.a,{xs:12,children:Object(c.jsx)("h5",{children:T.a.getConstellationName(s)})}),Object(c.jsx)(N.a,{children:Object(c.jsx)(C.a,{className:"px-2",children:Object(F.a)(Array(6).keys()).map((function(e){return Object(c.jsx)(N.a,{xs:4,className:"p-1",children:Object(c.jsx)(h.a,{src:T.a.getConstellationImg(s,e),className:"w-100 h-auto ".concat(i>e?"":"overlay-dark"),style:{cursor:"pointer"},roundedCircle:!0,onClick:r?function(){return b(e+1===i?e:e+1)}:null})},e)}))})})]})})]})})]})}),Object(c.jsxs)(N.a,{xs:12,lg:9,children:[Object(c.jsx)(Z,Object(n.a)({},e)),Object(c.jsx)($,Object(n.a)({},e))]})]})}function Z(e){var t=Object(o.useState)(!1),a=Object(E.a)(t,2),n=a[0],s=a[1],i=Object(o.useState)(!1),r=Object(E.a)(i,2),l=r[0],u=r[1],m=e.character,f=m.characterKey,p=m.weapon,v=e.editable,g=e.setState,k=e.equippedBuild,_=e.newBuild,I=_||k,A=function(e,t){return g((function(a){return"key"===e&&(a.weapon.conditionalNum=0),a.weapon[e]=t,{weapon:a.weapon}}))},W=w.a.getWeaponSubStatKey(p.key),B=T.a.getWeaponTypeKey(f),V=p.overrideMainVal||w.a.getWeaponMainStatVal(p.key,p.levelKey),q=p.overrideSubVal||w.a.getWeaponSubStatVal(p.key,p.levelKey),P=w.a.getWeaponPassiveName(p.key),M=w.a.getWeaponBonusStat(p.key,p.refineIndex),D=w.a.getWeaponConditionalStat(p.key,p.refineIndex,p.conditionalNum),R=w.a.getWeaponConditional(p.key),J=p.conditionalNum,G=Object(c.jsx)(L.a,{conditional:R,conditionalNum:J,setConditional:function(e){return A("conditionalNum",e)},defEle:Object(c.jsx)("h6",{className:"d-inline mb-0",children:P})});return Object(c.jsxs)(S.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(c.jsx)(S.a.Header,{children:Object(c.jsxs)(C.a,{children:[Object(c.jsx)(N.a,{children:Object(c.jsx)("span",{children:"Weapon"})}),Object(c.jsx)(N.a,{xs:"auto",children:Object(c.jsx)(y.a,{variant:"info",size:"sm",onClick:function(){return u(!l)},children:Object(c.jsxs)("span",{children:[Object(c.jsx)(d.a,{icon:j.r})," ",l?"Hide Desc.":"Show Desc."]})})}),v?Object(c.jsx)(N.a,{xs:"auto",children:Object(c.jsx)(y.a,{variant:n?"danger":"info",onClick:function(){return s(!n)},size:"sm",children:Object(c.jsxs)("span",{children:[Object(c.jsx)(d.a,{icon:n?j.s:j.g})," ",n?"EXIT":"EDIT"]})})}):null]})}),Object(c.jsxs)(S.a.Body,{children:[Object(c.jsxs)(C.a,{className:"mb-2",children:[Object(c.jsx)(N.a,{xs:12,md:3,children:Object(c.jsx)(h.a,{src:H.a.weapons[p.key],className:"w-100 h-auto",thumbnail:!0})}),n?Object(c.jsx)(N.a,{children:Object(c.jsxs)(C.a,{children:[Object(c.jsx)(N.a,{lg:"auto",xs:6,className:"mb-2 pr-0",children:Object(c.jsx)(O.a,{title:w.a.getWeaponName(p.key),children:Object(F.a)(Array(5).keys()).reverse().map((function(e){return e+1})).map((function(e,t,a){return Object(c.jsxs)(b.a.Fragment,{children:[Object(c.jsx)(x.a.ItemText,{children:Object(c.jsx)(X.a,{stars:e})},"star"+e),Object.entries(w.a.getWeaponsOfType(B)).filter((function(t){var a=Object(E.a)(t,2);a[0];return a[1].rarity===e})).map((function(e){var t=Object(E.a)(e,2),a=t[0],n=t[1];return Object(c.jsx)(x.a.Item,{onClick:function(){return A("key",a)},children:n.name},a)})),t!==a.length-1&&Object(c.jsx)(x.a.Divider,{})]},e)}))})}),Object(c.jsx)(N.a,{lg:"auto",xs:6,className:"mb-2 pr-0",children:Object(c.jsxs)(O.a,{title:w.a.getLevelName(p.levelKey),children:[Object(c.jsx)(x.a.ItemText,{children:Object(c.jsx)("span",{children:"Select Weapon Level"})}),Object.entries(K.a).map((function(e){var t=Object(E.a)(e,2),a=t[0],n=t[1];return Object(c.jsx)(x.a.Item,{onClick:function(){return A("levelKey",a)},children:n},a)}))]})}),P&&Object(c.jsx)(N.a,{lg:"auto",xs:6,className:"mb-2",children:Object(c.jsxs)(O.a,{title:"Refinement ".concat(p.refineIndex+1),className:"w-100",children:[Object(c.jsx)(x.a.ItemText,{children:Object(c.jsx)("span",{children:"Select Weapon Refinment"})}),Object(F.a)(Array(5).keys()).map((function(e){return Object(c.jsx)(x.a.Item,{onClick:function(){return A("refineIndex",e)},children:"Refinement ".concat(e+1)},e)}))]})}),Object(c.jsx)(N.a,{xs:12,className:"mb-2",children:Object(c.jsx)(Q,{name:Object(c.jsxs)("span",{children:[Object(c.jsx)(d.a,{icon:j.k,className:"mr-2"}),"ATK"]}),placeholder:"Weapon Attack",value:V,percent:!1,onValueChange:function(e){return A("overrideMainVal",e)},defaultValue:w.a.getWeaponMainStatVal(p.key,p.levelKey)})}),W&&Object(c.jsx)(N.a,{xs:12,className:"mb-2",children:Object(c.jsx)(Q,{name:Object(c.jsxs)("span",{children:[Object(c.jsx)("span",{className:"mr-2",children:Object(U.a)(W)}),z.e.getStatName(W)]}),placeholder:"Weapon Substat",value:q,percent:"%"===z.e.getStatUnit(W),onValueChange:function(e){return A("overrideSubVal",e)},defaultValue:w.a.getWeaponSubStatVal(p.key,p.levelKey)})})]})}):Object(c.jsxs)(N.a,{children:[Object(c.jsx)(C.a,{className:"mb-2",children:Object(c.jsxs)(N.a,{children:[Object(c.jsxs)("h5",{className:"mb-0",children:[w.a.getWeaponName(p.key)," ",w.a.getLevelName(p.levelKey)," ",P&&"(Refinement ".concat(p.refineIndex+1,")")]}),Object(c.jsx)("small",{children:Object(c.jsx)(X.a,{stars:w.a.getWeaponRarity(p.key)})})]})}),Object(c.jsx)(C.a,{children:Object(c.jsx)(N.a,{children:G})}),Object(c.jsx)("p",{children:P&&w.a.getWeaponPassiveDescription(p.key,p.refineIndex,I.finalStats)}),Object(c.jsxs)(C.a,{children:[Object(c.jsx)(N.a,{xs:12,md:6,children:Object(c.jsxs)("h5",{children:["ATK: ",V]})}),W&&Object(c.jsx)(N.a,{xs:12,md:6,children:Object(c.jsxs)("h5",{children:[z.e.getStatName(W),": ",q,z.e.getStatUnit(W)]})})]}),Object(c.jsxs)(C.a,{children:[(D||M)&&Object(c.jsx)(N.a,{xs:12,children:Object(c.jsx)("h6",{className:"mb-0",children:"Bonus Stats:"})}),M&&Object.entries(M).map((function(e){var t=Object(E.a)(e,2),a=t[0],n=t[1];return Object(c.jsxs)(N.a,{xs:12,md:6,children:[z.e.getStatName(a),": ",n,z.e.getStatUnit(a)]},"bonu"+a)})),D&&Object.entries(D).map((function(e){var t=Object(E.a)(e,2),a=t[0],n=t[1];return Object(c.jsxs)(N.a,{xs:12,md:6,children:[z.e.getStatName(a),": ",n,z.e.getStatUnit(a)]},"cond"+a)}))]})]})]}),l&&Object(c.jsx)(C.a,{children:Object(c.jsx)(N.a,{children:Object(c.jsx)("small",{children:w.a.getWeaponDescription(p.key)})})})]})]})}function $(e){var t=Object(o.useState)(!1),a=Object(E.a)(t,2),s=a[0],i=a[1],r=Object(o.useState)(!1),l=Object(E.a)(r,2),b=l[0],h=l[1],u=["hp","atk","def","ele_mas","crit_rate","crit_dmg","ener_rech","heal_bonu"],f=["stam","inc_heal","pow_shield","red_cd","phy_dmg","phy_res"];T.a.getElementalKeys().forEach((function(e){f.push("".concat(e,"_ele_dmg")),f.push("".concat(e,"_ele_res"))}));var p=["phy_avg_dmg","norm_atk_dmg","char_atk_dmg","skill_dmg","burst_dmg","skill_crit_rate","burst_crit_rate","crit_multi","dmg","move_spd","atk_spd","weakspot_dmg"],v=e.editable,g=e.character,k=e.setOverride,K=e.equippedBuild,_=e.newBuild,I=e.character.compareAgainstEquipped,w=_||K,A=T.a.getStatValueWithOverride(g,"specializedStatKey"),W=T.a.getStatValueWithOverride(g,"specializedStatVal"),B=z.e.getStatUnit(A),V="%"===z.e.getStatUnit(A),L={placeholder:"Character Special Stat",value:T.a.getStatValueWithOverride(g,"specializedStatVal"),onValueChange:function(e){return k("specializedStatVal",e)}},q=V?Object(c.jsx)(R.a,Object(n.a)({},L)):Object(c.jsx)(R.b,Object(n.a)({},L)),P=function(e){var t,a=T.a.getStatValueWithOverride(g,e),n=z.e.getStatUnit(e),s=((null===w||void 0===w||null===(t=w.finalStats)||void 0===t?void 0:t[e])||0)-a;return Object(c.jsxs)(N.a,{xs:12,lg:6,children:[Object(c.jsxs)("h6",{className:"d-inline",children:[Object(U.a)(e)," ",z.e.getStatName(e)]}),Object(c.jsxs)("span",{className:"float-right ".concat(v&&T.a.hasOverride(g,e)?"text-warning":""),children:[(null===a||void 0===a?void 0:a.toFixed(z.e.fixedUnit(e)))+n,s?Object(c.jsxs)("span",{className:s>0?"text-success":"text-danger",children:[" ",s>0&&"+",(null===s||void 0===s?void 0:s.toFixed(z.e.fixedUnit(e)))+n]}):null]})]},e)},F=function(e){var t,a,n,s=(null===K||void 0===K||null===(t=K.finalStats)||void 0===t?void 0:t[e])||T.a.getStatValueWithOverride(g,e),i=z.e.getStatUnit(e),r=((null===_||void 0===_||null===(a=_.finalStats)||void 0===a?void 0:a[e])||0)-((null===K||void 0===K||null===(n=K.finalStats)||void 0===n?void 0:n[e])||0);return Object(c.jsxs)(N.a,{xs:12,lg:6,children:[Object(c.jsxs)("h6",{className:"d-inline",children:[Object(U.a)(e)," ",z.e.getStatName(e)]}),Object(c.jsxs)("span",{className:"float-right ".concat(v&&T.a.hasOverride(g,e)?"text-warning":""),children:[(null===s||void 0===s?void 0:s.toFixed(z.e.fixedUnit(e)))+i,r?Object(c.jsxs)("span",{className:r>0?"text-success":"text-danger",children:[" (",r>0&&"+",(null===r||void 0===r?void 0:r.toFixed(z.e.fixedUnit(e)))+i,")"]}):null]})]},e)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(S.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(c.jsx)(S.a.Header,{children:Object(c.jsxs)(C.a,{children:[Object(c.jsx)(N.a,{children:Object(c.jsx)("span",{children:"Main Base Stats"})}),v?Object(c.jsx)(N.a,{xs:"auto",children:Object(c.jsx)(y.a,{variant:s?"danger":"info",onClick:function(){return i(!s)},size:"sm",children:Object(c.jsxs)("span",{children:[Object(c.jsx)(d.a,{icon:s?j.s:j.g})," ",s?"EXIT":"EDIT"]})})}):null]})}),s?Object(c.jsx)(S.a.Body,{children:Object(c.jsxs)(C.a,{className:"mb-2",children:[u.map((function(t){return Object(c.jsx)(N.a,{lg:6,xs:12,children:Object(c.jsx)(ee,Object(n.a)(Object(n.a)({},e),{statKey:t,icon:U.b[t]}))},t)})),Object(c.jsx)(N.a,{lg:6,xs:12,children:Object(c.jsxs)(m.a,{children:[Object(c.jsxs)(O.a,{title:z.e.getStatNameWithPercent(A,"Specialized Stat"),as:m.a.Prepend,children:[Object(c.jsx)(x.a.ItemText,{children:"Select Specialized Stat "}),J.b.map((function(e){return Object(c.jsx)(x.a.Item,{onClick:function(){return k("specializedStatKey",e)},children:z.e.getStatNameWithPercent(e)},e)}))]}),q,V&&Object(c.jsx)(m.a.Append,{children:Object(c.jsx)(m.a.Text,{children:"%"})})]})})]})}):Object(c.jsx)(S.a.Body,{children:Object(c.jsxs)(C.a,{className:"mb-2",children:[_&&I?u.map(F):u.map(P),W?Object(c.jsxs)(N.a,{lg:6,xs:12,children:[Object(c.jsxs)("span",{children:[Object(c.jsx)("b",{children:"Specialized:"})," ",Object(c.jsx)("span",{className:T.a.hasOverride(g,"specializedStatKey")?"text-warning":"",children:z.e.getStatName(A)})]}),Object(c.jsx)("span",{className:"float-right ".concat(T.a.hasOverride(g,"specializedStatVal")?"text-warning":""),children:"".concat(W).concat(B)})]}):null]})})]}),Object(c.jsxs)(S.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(c.jsx)(S.a.Header,{children:Object(c.jsxs)(C.a,{children:[Object(c.jsx)(N.a,{children:Object(c.jsx)("span",{children:"Other Stats"})}),v?Object(c.jsx)(N.a,{xs:"auto",children:Object(c.jsx)(y.a,{variant:b?"danger":"info",onClick:function(){return h(!b)},size:"sm",children:Object(c.jsxs)("span",{children:[Object(c.jsx)(d.a,{icon:b?j.s:j.g})," ",b?"EXIT":"EDIT"]})})}):null]})}),b?Object(c.jsx)(S.a.Body,{children:Object(c.jsx)(C.a,{className:"mb-2",children:f.map((function(t){return Object(c.jsx)(N.a,{lg:6,xs:12,children:Object(c.jsx)(ee,Object(n.a)(Object(n.a)({},e),{statKey:t,icon:U.b[t]}))},t)}))})}):Object(c.jsx)(S.a.Body,{children:Object(c.jsx)(C.a,{className:"mb-2",children:_&&I?f.map(F):f.map(P)})})]}),Object(c.jsxs)(S.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(c.jsx)(S.a.Header,{children:Object(c.jsx)(C.a,{children:Object(c.jsx)(N.a,{children:Object(c.jsx)("span",{children:"Misc Stats"})})})}),Object(c.jsx)(S.a.Body,{children:Object(c.jsx)(C.a,{className:"mb-2",children:_&&I?p.map(F):p.map(P)})})]})]})}function ee(e){var t=e.character,a=t.characterKey,n=t.levelKey,s=e.statKey,i=e.icon,r=e.setOverride;return Object(c.jsx)(Q,{className:"mb-2",name:Object(c.jsxs)("span",{children:[i&&Object(c.jsx)(d.a,{icon:i,className:"fa-fw"})," ",z.e.getStatName(s)]}),placeholder:"Base ".concat(z.e.getStatName(s)),value:T.a.getStatValueWithOverrideRaw(e.character,s),percent:!1,onValueChange:function(e){return r(s,e)},defaultValue:T.a.getBaseStatValue(a,n,s)})}var te=a(221);function ae(e){var t=e.character,a=t.levelKey,s=t.constellation,i=e.editable,r=e.setState,l=T.a.getAscension(a),j=Object(n.a)(Object(n.a)({},e),{},{ascension:l});return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(C.a,{children:[["auto","Normal/Charged Attack"],["skill","Elemental Skill"],["burst","Elemental Burst"]].map((function(e){var t=Object(E.a)(e,2),a=t[0],s=t[1];return Object(c.jsx)(N.a,{xs:12,md:6,lg:4,className:"mb-2",children:Object(c.jsx)(ne,Object(n.a)(Object(n.a)({},j),{},{talentKey:a,subtitle:s}))},a)}))}),Object(c.jsx)(C.a,{children:[["passive1","Unlocked at Ascension 1",1],["passive2","Unlocked at Ascension 4",4],["passive3","Unlocked by Default",0]].map((function(e){var t=Object(E.a)(e,3),a=t[0],s=t[1],i=t[2],r=l>=i;return Object(c.jsx)(N.a,{style:{opacity:r?1:.5},xs:12,md:4,className:"mb-2",children:Object(c.jsx)(ne,Object(n.a)(Object(n.a)({},j),{},{talentKey:a,subtitle:s}))},a)}))}),Object(c.jsx)(C.a,{children:Object(c.jsx)(N.a,{children:Object(c.jsxs)("h5",{className:"text-center",children:["Constellation Lv. ",s]})})}),Object(c.jsx)(C.a,{children:Object(F.a)(Array(6).keys()).map((function(e){var t="constellation".concat(e+1);return Object(c.jsx)(N.a,{xs:12,md:4,className:"mb-2",style:{opacity:s>e?1:.5},children:Object(c.jsx)(ne,Object(n.a)(Object(n.a)({},j),{},{talentKey:t,subtitle:"Contellation Lv. ".concat(e+1),onClickTitle:i?function(){return r({constellation:e+1===s?e:e+1})}:void 0}))},e)}))})]})}function ne(e){var t=e.character,a=e.character,s=a.characterKey,i=a.constellation,r=a.autoInfused,l=void 0!==r&&r,j=e.talentKey,d=e.subtitle,o=e.ascension,b=e.equippedBuild,u=e.newBuild,m=e.editable,f=e.setState,p=e.onClickTitle,v=void 0===p?null:p,g=Object(G.a)(e,["onClickTitle"]),k=u||b,K=null,_=T.a.getTalentLevelKey(t,j,i,!0),I=_.talentLvlKey,w=void 0===I?void 0:I,A=_.levelBoost,W=void 0===A?0:A,B=null;if("auto"===j&&T.a.isAutoInfusable(s)){var V=T.a.getElementalKey(s);B=Object(c.jsx)(N.a,{xs:"auto",children:Object(c.jsx)(y.a,{variant:l?V:"secondary",className:"text-white",disabled:!m,onClick:m?function(){return f((function(e){return{autoInfused:!e.autoInfused}}))}:void 0,size:m?null:"sm",children:l?Object(c.jsxs)("span",{children:["Infused with ",Object(c.jsx)("b",{children:T.a.getElementalName(V)})]}):"Not Infused"})})}if("number"===typeof w)if(m){K=Object(c.jsx)(S.a.Header,{children:Object(c.jsxs)(C.a,{children:[Object(c.jsx)(N.a,{xs:"auto",children:Object(c.jsx)(O.a,{title:"Talent Lv. ".concat(w+1),children:Object(F.a)(Array(15).keys()).map((function(e){return e>=W&&Object(c.jsxs)(x.a.Item,{onClick:function(){return t=j,a=e-W,f((function(e){var n=e.talentLevelKeys||{};return n[t]=a,{talentLevelKeys:n}}));var t,a},children:["Talent Lv. ",e+1]},e)}))})}),B]})})}else K=Object(c.jsx)(S.a.Header,{children:Object(c.jsxs)(C.a,{children:[Object(c.jsx)(N.a,{xs:"auto",children:"Talent Level: ".concat(w+1)}),Object(c.jsx)(N.a,{xs:"auto",children:B})]})});var U=null,P=T.a.getTalentStats(s,j,i,o);return P&&(U=Object(c.jsx)(C.a,{children:Object(c.jsx)(N.a,{children:Object(c.jsx)(S.a,{bg:"darkcontent",text:"lightfont",className:"mt-2 ml-n2 mr-n2",children:Object(c.jsx)(te.a,{className:"text-white",variant:"flush",children:Object.entries(P).map((function(e,t){var a=Object(E.a)(e,2),n=a[0],s=a[1];return Object(c.jsx)(te.a.Item,{variant:t%2?"customdark":"customdarker",className:"p-2",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:Object(c.jsx)("b",{children:z.e.getStatName(n)})}),Object(c.jsxs)("span",{className:"float-right text-right",children:[s,z.e.getStatUnit(n)]})]})},n)}))})})})})),Object(c.jsxs)(S.a,{bg:"lightcontent",text:"lightfont",className:"h-100",children:[K,Object(c.jsxs)(S.a.Body,{children:[Object(c.jsxs)(C.a,{className:"d-flex flex-row mb-245",onClick:v,style:{cursor:m&&v?"pointer":"default"},children:[Object(c.jsx)(N.a,{xs:"auto",className:"flex-shrink-1 d-flex flex-column",children:Object(c.jsx)(h.a,{src:T.a.getTalentImg(s,j),className:"thumb-mid"})}),Object(c.jsxs)(N.a,{className:"flex-grow-1",children:[Object(c.jsx)(S.a.Title,{children:T.a.getTalentName(s,j)}),Object(c.jsx)(S.a.Subtitle,{children:d})]})]}),T.a.getTalentDocument(s,j).map((function(e,a){if("function"===typeof e&&(e=e(i,o)),!e)return null;var s=e.text;"function"===typeof s&&(s=s(w,k.finalStats,t));var r=e.fields||[],l=e.conditional;"function"===typeof l&&(l=l(w,i,o));var d=null;if(l){var b=q.a.getConditionalNum(t.talentConditionals,{srcKey:j,srcKey2:l.conditionalKey}),h={},u=[];b&&(h=T.a.getTalentConditionalStats(l,b,{}),h=Object.fromEntries(Object.entries(h).filter((function(e){var t=Object(E.a)(e,2),a=t[0];t[1];return"formulaOverrides"!==a}))),u=T.a.getTalentConditionalFields(l,b,[]));d=Object(c.jsx)(C.a,{children:Object(c.jsx)(N.a,{children:Object(c.jsxs)(S.a,{bg:"darkcontent",text:"lightfont",className:"mt-2 ml-n2 mr-n2",children:[Object(c.jsx)(S.a.Header,{children:Object(c.jsx)(L.a,{disabled:!m,conditional:l,conditionalNum:b,setConditional:function(e){return f((function(t){return{talentConditionals:q.a.setConditional(t.talentConditionals,{srcKey:j,srcKey2:l.conditionalKey},e)}}))},defEle:Object(c.jsx)("span",{children:l.condition})})}),Object(c.jsxs)(te.a,{className:"text-white",variant:"flush",children:[Object.entries(h).map((function(e,t){var a=Object(E.a)(e,2),n=a[0],s=a[1];return Object(c.jsx)(te.a.Item,{variant:t%2?"customdark":"customdarker",className:"p-2",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:Object(c.jsx)("b",{children:z.e.getStatName(n)})}),Object(c.jsxs)("span",{className:"float-right text-right",children:[s,z.e.getStatUnit(n)]})]})},n)})),u.map((function(e,t){var a,s;return Object(c.jsx)(ce,Object(n.a)({index:t+((null===(s=h)||void 0===s?void 0:s.length)||0)},Object(n.a)({field:e,talentLvlKey:w,ascension:o},g)),t+((null===(a=h)||void 0===a?void 0:a.length)||0))}))]})]})})})}return Object(c.jsx)(C.a,{className:"mt-2",children:Object(c.jsxs)(N.a,{xs:12,children:[Object(c.jsx)("span",{children:s}),r.length>0&&Object(c.jsx)(te.a,{className:"text-white ml-n2 mr-n2",children:r.map((function(e,t){return Object(c.jsx)(ce,Object(n.a)({index:t},Object(n.a)({field:e,talentLvlKey:w,ascension:o},g)),t)}))}),d]})},"section"+a)})),U]})]})}function ce(e){var t,a,n=e.character,s=e.character,i=s.compareAgainstEquipped,r=s.constellation,l=e.field,o=e.index,b=e.talentLvlKey,h=void 0===b?0:b,u=e.ascension,x=e.equippedBuild,O=e.newBuild,m=O||x;if("function"===typeof l&&(l=l(r,u)),!l)return null;var f=l.text;"function"===typeof f&&(f=null===(t=f)||void 0===t?void 0:t(h,m.finalStats,n));var p=l.basicVal;"function"===typeof p&&(p=null===(a=p)||void 0===a?void 0:a(h,m.finalStats,n)),p&&(p=Object(c.jsx)(M.a,{placement:"top",overlay:Object(c.jsx)(D.a,{children:p}),children:Object(c.jsx)(d.a,{icon:j.q,className:"ml-2",style:{cursor:"help"}})}));var v,g=l.value?l.value:l.finalVal;"function"===typeof g&&(g=null===(v=g)||void 0===v?void 0:v(h,m.finalStats,n));if("number"===typeof g&&(g=Math.round(g)),i&&x&&"number"===typeof g){var y,S,N,k=l.value?l.value:l.finalVal;"function"===typeof k&&(k=parseInt(null===(y=k)||void 0===y||null===(S=y(h,x.finalStats,n))||void 0===S||null===(N=S.toFixed)||void 0===N?void 0:N.call(S,0)));var C=g-k;g=Object(c.jsxs)("span",{children:[k,C?Object(c.jsxs)("span",{className:C>0?"text-success":"text-danger",children:[" (",C>0?"+":"",C,")"]}):""]})}return Object(c.jsx)(te.a.Item,{variant:o%2?"customdark":"customdarker",className:"p-2",children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:[Object(c.jsx)("b",{children:f}),p]}),Object(c.jsx)("span",{className:"float-right text-right",children:g})]})})}var se=b.a.forwardRef((function(e,t){var a=e.children,n=e.style,s=e.className,i=e["aria-labelledby"];return Object(c.jsx)("div",{ref:t,style:{style:n,minWidth:"25rem"},className:s,"aria-labelledby":i,children:Object(c.jsx)(C.a,{children:b.a.Children.toArray(a).map((function(e,t){return Object(c.jsx)(N.a,{xs:6,children:e},t)}))})})})),ie=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).forceUpdateComponent=function(){n.state.id&&n.setState(A.a.getCharacter(n.state.id)),n.props.forceUpdate?n.props.forceUpdate():n.forceUpdate()},n.setSetState=function(e){return n.setState(e)},n.setCharacterKey=function(e){return n.setState({characterKey:e,name:Object(I.g)(T.a.getTitles(e)),weapon:a.getIntialWeapon(e)})},n.setLevelKey=function(e){return n.setState({levelKey:e,baseStatOverrides:{}})},n.setOverride=function(e,t){return n.setState((function(a){var c=Object(I.e)(a.baseStatOverrides);return T.a.getBaseStatValue(n.state.characterKey,n.state.levelKey,e)===t?(delete c[e],{baseStatOverrides:c}):(c[e]=t,{baseStatOverrides:c})}))},n.setOverridelevel=function(e){return n.setState((function(t){var a=T.a.getLevel(t.levelKey);return e===a?{overrideLevel:0}:{overrideLevel:e}}))},n.setConstellation=function(e){return n.setState({constellation:e})},Object(_.a)(),e.characterId?n.state=A.a.getCharacter(e.characterId):n.state=a.getInitialState(),n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){if(this.props.characterId&&this.state.id!==this.props.characterId&&this.setState(A.a.getCharacter(this.props.characterId)),this.props.editable){var e=Object(I.e)(this.state);if(delete e.compareAgainstEquipped,this.state.id)A.a.updateCharacter(e);else{var t=A.a.addCharacter(e);this.setState({id:t})}}}},{key:"render",value:function(){var e,t,a,s,i,r,l=this,o=this.props,b=o.footer,K=o.newBuild,_=o.editable,I=o.onClose,w=this.state,A=this.state,E=A.characterKey,W=A.levelKey,B=A.compareAgainstEquipped,V=T.a.calculateBuild(this.state),L=Object(c.jsxs)("span",{children:[Object(c.jsx)(h.a,{src:T.a.getThumb(E),className:"thumb-small my-n1 ml-n2",roundedCircle:!0}),Object(c.jsxs)("h6",{className:"d-inline",children:[" ",T.a.getName(E)," "]})]});return Object(c.jsxs)(S.a,{bg:"darkcontent",text:"lightfont",children:[Object(c.jsx)(S.a.Header,{children:Object(c.jsxs)(C.a,{children:[Object(c.jsx)(N.a,{xs:"auto",children:_?Object(c.jsxs)(u.a,{children:[Object(c.jsxs)(x.a,{children:[Object(c.jsx)(k.a,{as:y.a,children:L}),Object(c.jsx)(x.a.Menu,{as:se,children:T.a.getAllCharacterKeys().map((function(e){return Object(c.jsx)(x.a.Item,{onClick:function(){return l.setCharacterKey(e)},children:Object(c.jsxs)("span",{children:[Object(c.jsx)(h.a,{src:T.a.getThumb(e),className:"thumb-small my-n1",roundedCircle:!0}),Object(c.jsxs)("h6",{className:"d-inline",children:[T.a.getName(e)," "]})]})},e)}))})]}),Object(c.jsxs)(O.a,{as:u.a,title:Object(c.jsxs)("h6",{className:"d-inline",children:[T.a.getlevelNames(W)," "]}),children:[Object(c.jsx)(x.a.ItemText,{children:Object(c.jsx)("span",{children:"Select Base Stat Template"})}),T.a.getlevelKeys().map((function(e){return Object(c.jsx)(x.a.Item,{onClick:function(){return l.setLevelKey(e)},children:Object(c.jsxs)("h6",{children:[T.a.getlevelNames(e)," "]})},e)}))]})]}):Object(c.jsxs)("span",{children:[L," Lvl. ",T.a.getLevelWithOverride(this.state)]})}),Object(c.jsx)(N.a,{className:"pl-0 pr-0",children:_?Object(c.jsxs)(m.a,{children:[Object(c.jsx)(m.a.Prepend,{children:Object(c.jsxs)(m.a.Text,{children:[Object(c.jsx)(d.a,{icon:j.u})," Name"]})}),Object(c.jsx)(f.a,{placeholder:"Name",value:this.state.name,onChange:function(e){return l.setState({name:e.target.value})}})]}):Object(c.jsx)(S.a.Title,{className:"mb-0 align-self-center",children:Object(c.jsx)("span",{children:this.state.name})})}),K?Object(c.jsx)(N.a,{xs:"auto",children:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(y.a,{variant:B?"primary":"success",disabled:!B,onClick:function(){return l.setState({compareAgainstEquipped:!1})},children:Object(c.jsx)("small",{children:"Show New artifact Stats"})}),Object(c.jsx)(y.a,{variant:B?"success":"primary",disabled:B,onClick:function(){return l.setState({compareAgainstEquipped:!0})},children:Object(c.jsx)("small",{children:"Compare against equipped artifact"})})]})}):null,Object(c.jsx)(N.a,{xs:"auto",children:Object(c.jsx)(y.a,{variant:"danger",onClick:I,children:Object(c.jsx)(d.a,{icon:j.A})})})]})}),Object(c.jsx)(S.a.Body,{children:Object(c.jsxs)(p.a.Container,{defaultActiveKey:K?"newartifacts":"character",children:[Object(c.jsxs)(v.a,{variant:"pills",className:"mb-2 ml-2",children:[Object(c.jsx)(v.a.Item,{children:Object(c.jsx)(v.a.Link,{eventKey:"character",children:"Character"})}),K?Object(c.jsx)(v.a.Item,{children:Object(c.jsx)(v.a.Link,{eventKey:"newartifacts",children:"New Artifacts"})}):null,Object(c.jsx)(v.a.Item,{children:Object(c.jsx)(v.a.Link,{eventKey:"artifacts",children:K?"Current Artifacts":"Artifacts"})}),Object(c.jsx)(v.a.Item,{children:Object(c.jsxs)(v.a.Link,{eventKey:"talent",disabled:"TEMPLATE"===((null===(e=T.a.getCDataObj(E))||void 0===e||null===(t=e.talent)||void 0===t||null===(a=t.skill)||void 0===a?void 0:a.name)||"TEMPLATE"),children:["Talents ","TEMPLATE"===((null===(s=T.a.getCDataObj(E))||void 0===s||null===(i=s.talent)||void 0===i||null===(r=i.skill)||void 0===r?void 0:r.name)||"TEMPLATE")&&Object(c.jsx)(g.a,{variant:"warning",children:"WIP"})]})}),Object(c.jsx)(v.a.Item,{children:Object(c.jsxs)(v.a.Link,{eventKey:"team",disabled:!0,children:["Team ",Object(c.jsx)(g.a,{variant:"warning",children:"WIP"})]})})]}),Object(c.jsxs)(p.a.Content,{children:[Object(c.jsx)(p.a.Pane,{eventKey:"character",children:Object(c.jsx)(Y,Object(n.a)({setState:this.setSetState,setOverride:this.setOverride,setOverridelevel:this.setOverridelevel,setConstellation:this.setConstellation},{character:w,editable:_,equippedBuild:V,newBuild:K}))}),Object(c.jsx)(p.a.Pane,{eventKey:"artifacts",children:Object(c.jsx)(P,Object(n.a)(Object(n.a)({},{character:w,equippedBuild:V,editable:_,forceUpdate:this.forceUpdateComponent}),{},{setState:this.setSetState}))}),K?Object(c.jsx)(p.a.Pane,{eventKey:"newartifacts",children:Object(c.jsx)(P,Object(n.a)({},{character:w,newBuild:K,equippedBuild:V,editable:_,forceUpdate:this.forceUpdateComponent}))}):null,Object(c.jsx)(p.a.Pane,{eventKey:"talent",children:Object(c.jsx)(ae,Object(n.a)(Object(n.a)({},{character:w,newBuild:K,equippedBuild:V,editable:_}),{},{setState:this.setSetState}))})]})]})}),b&&Object(c.jsx)(S.a.Footer,{children:b})]})}}]),a}(b.a.Component);ie.initialState={name:"",characterKey:"",levelKey:"L1",overrideLevel:0,equippedArtifacts:{},artifactConditionals:[],baseStatOverrides:{},weapon:{key:"",levelKey:K.c[0],refineIndex:0,overrideMainVal:0,overrideSubVal:0,conditionalNum:0},talentLevelKeys:{auto:0,skill:0,burst:0},autoInfused:!1,talentConditionals:[],constellation:0,compareAgainstEquipped:!1},ie.getIntialWeapon=function(e){var t=Object(I.e)(ie.initialState.weapon);return t.key=Object.keys(w.a.getWeaponsOfType(T.a.getWeaponTypeKey(e)))[0],t},ie.getInitialState=function(){var e=Object(I.e)(ie.initialState);return e.characterKey=Object(I.g)(T.a.getAllCharacterKeys()),e.name=Object(I.g)(T.a.getTitles(e.characterKey)),e.weapon=ie.getIntialWeapon(e.characterKey),e}},139:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(86),c=a(83),s={};function i(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=s[e]||[];null===(t=s[e])||void 0===t||t.forEach((function(e){var t;return(t=i).push.apply(t,Object(n.a)(s[e]||[]))})),a.forEach((function(e){var t,a=c.c[e.key]||{},s=a.key,r=a.dependency,l=void 0===r?[]:r;i.includes(s)&&(t=i).push.apply(t,Object(n.a)(l))})),i=Object(n.a)(new Set(i));var r=Object.keys(c.b).filter((function(t){return t===e||i.includes(t)})),l=Object.keys(c.d).filter((function(t){return t===e||i.includes(t)}));return{formulaKeys:r,statkeys:l}}Object.keys(c.b).forEach((function(e){return function(e){var t={},a=[];Object.keys(c.d).filter((function(t){return t!==e})).forEach((function(e){Object.defineProperty(t,e,{get:function(){return a.push(e),Object.defineProperty(t,e,{get:function(){return 0}}),0},configurable:!0})})),Object(c.a)(t),"number"===typeof t[e]&&(s[e]=a)}(e)}))},211:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return r}));var n=a(2),c=a(55),s=a(120),i=a(105);a(139);function r(e){return Object(i.a)(),Object(n.jsx)(c.a,{children:Object(n.jsx)(s.a,{editable:!0,characterId:"character_2"})})}},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(86),c=a(2),s=a(95),i=a(81),r=a(23),l=a(0),j=a.n(l),d=a(143),o=a(200),b=a(104);function h(e){var t=e.conditional,a=e.conditionalNum,l=e.setConditional,h=e.defEle,u=e.disabled;if(!t)return h;if(Array.isArray(t)){var x,O=a,m=null,f=Object(s.a)(t);try{for(f.s();!(x=f.n()).done;){var p=x.value;if(!(O>p.maxStack)){m=p;break}O-=p.maxStack}}catch(N){f.e(N)}finally{f.f()}m||(O=0,m=t[0]);var v=0===O?"Not Active":Object(c.jsxs)("span",{children:[m.condition," ",m.maxStack>1?": ".concat(O," stack").concat(O>1?"s":""):""]}),g=Object(c.jsx)(d.a,{variant:0===O?"secondary":"success",children:v}),y=0;return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(o.a.Toggle,{size:"sm",disabled:u,children:Object(c.jsxs)("h6",{className:"mb-0 d-inline",children:[h," ",g]})}),Object(c.jsxs)(o.a.Menu,{children:[Object(c.jsx)(o.a.Item,{onClick:function(){return l(0)},children:Object(c.jsx)("span",{children:"Not Active"})}),t.map((function(e,t){return Object(c.jsx)(j.a.Fragment,{children:Object(n.a)(Array(e.maxStack).keys()).map((function(e){return e+1})).map((function(t){var a=++y;return Object(c.jsxs)(o.a.Item,{onClick:function(){return l(a)},children:[e.condition,m.maxStack>1?": ".concat(t," stack").concat(t>1?"s":""):""]},a)}))},t)}))]})]})}if(t.maxStack>1){var S=Object(c.jsx)(d.a,{variant:0===a?"secondary":"success",children:a>0?"".concat(a," stack").concat(a>1?"s":""):"Not Active"});return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(o.a.Toggle,{size:"sm",disabled:u,children:Object(c.jsxs)("h6",{className:"mb-0 d-inline",children:[h," ",S]})}),Object(c.jsxs)(o.a.Menu,{children:[Object(c.jsx)(o.a.Item,{onClick:function(){return l(0)},children:Object(c.jsx)("span",{children:"Not Active"})}),Object(n.a)(Array(t.maxStack).keys()).map((function(e){return e+1})).map((function(e){return Object(c.jsx)(o.a.Item,{onClick:function(){return l(e)},children:"".concat(e," stack").concat(e>1?"s":"")},e)}))]})]})}return 1===t.maxStack?Object(c.jsx)(b.a,{size:"sm",onClick:function(){return l(a?0:1)},disabled:u,children:Object(c.jsxs)("h6",{className:"mb-0",children:[Object(c.jsx)(r.a,{icon:a?i.b:i.x})," ",h]})}):void 0}},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(2),c=a(81),s=a(23),i={hp:c.B,hp_:c.B,atk:c.j,atk_:c.j,def:c.t,def_:c.t,ele_mas:c.o,crit_rate:c.e,crit_dmg:c.f,ener_rech:c.z,heal_bonu:c.i},r=function(e){return i[e]?Object(n.jsx)(s.a,{icon:i[e],className:"fa-fw"}):null};t.b=i}}]);
//# sourceMappingURL=11.401d409e.chunk.js.map