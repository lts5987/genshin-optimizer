import { clamp } from "./Util/Util";
import { ReactionMatrix, hitTypes, hitMoves, hitElements, transformativeReactions, amplifyingReactions } from "./StatConstants"

const StatData = {
  flat: { name: "", default: 1 },

  // Character Stats
  characterHP: { name: "生命值", pretty: "角色基础生命值", const: true },
  characterDEF: { name: "防御力", pretty: "角色基础防御力", const: true },
  characterATK: { name: "攻击力", pretty: "角色基础攻击力", const: true },
  characterEle: { name: "角色元素", default: "anemo", const: true },
  characterLevel: { name: "角色等级", default: 1, const: true },

  // Weapon Stats
  weaponATK: { name: "武器攻击力", pretty: "武器攻击力", const: true },

  // Character & Weapon Stats
  baseATK: { name: "攻击力", pretty: "基础攻击力", const: true }, // characterATK + weaponATK

  // Weapon & Artifact Stats
  hp: { name: "生命值", pretty: "固定生命值" },//flat hp
  hp_: { name: "生命值", unit: "%", pretty: "生命加成" },
  atk: { name: "攻击力", pretty: "固定攻击力" },
  atk_: { name: "攻击力", unit: "%", pretty: "攻击力加成" },
  def: { name: "防御力", pretty: "固定防御力" },
  def_: { name: "防御力", unit: "%", pretty: "防御力加成" },
  dmg_: { name: "全伤害加成", unit: "%" },

  // Attack-related Character, Weapon & Artifact Stats
  finalHP: { name: "生命值", pretty: "生命值" },
  finalATK: { name: "攻击力", pretty: "攻击力" },
  finalDEF: { name: "防御力", pretty: "防御力" },

  eleMas: { name: "元素精通", },
  enerRech_: { name: "元素充能效率", unit: "%" },
  critRate_: { name: "暴击率", unit: "%" },

  critDMG_: { name: "暴击伤害", unit: "%" },
  weakspotDMG_: { name: "弱点伤害", unit: "%" },

  // Misc. Stats
  heal_: { name: "治疗加成", unit: "%" },
  incHeal_: { name: "受治疗加成", unit: "%" },
  powShield_: { name: "护盾强效", unit: "%" },
  cdRed_: { name: "冷却缩减", unit: "%" },
  skillCDRed_: { name: "元素战技冷却缩减", unit: "%" },
  burstCDRed_: { name: "元素爆发冷却缩减", unit: "%" },
  moveSPD_: { name: "移动速度", unit: "%" },
  atkSPD_: { name: "攻击速度", unit: "%" },
  stamina: { name: "体力" },
  staminaDec_: { name: "体力消耗降低", unit: "%" },
  staminaGlidingDec_: { name: "滑翔体力消耗降低", unit: "%" },
  staminaChargedDec_: { name: "重击体力消耗降低", unit: "%" },

  heal_multi: { name: "治疗倍率", unit: "multi" },

  // Reaction
  amplificative_dmg_: { name: "强化元素反应伤害加成", unit: "%" },
  transformative_dmg_: { name: "转变元素反应伤害加成", unit: "%" },
  crystalize_eleMas_: { name: "结晶加成 (元素精通)", unit: "%", variant: "crystalize" },
  crystalize_multi: { name: "结晶倍率", unit: "multi", const: true, variant: "crystalize" },
  crystalize_dmg_: { name: "结晶加成", unit: "%", variant: "crystalize" },
  crystalize_hit: { name: "结晶盾生命", variant: "crystalize" },
  burning_dmg_: { name: "燃烧伤害加成", variant: "burning" },

  // Enemy
  enemyLevel: { name: "敌人等级", const: true },
  enemyLevel_multi: { name: "敌人等级抗性倍率", unit: "multi", const: true },
  enemyDEFRed_: { name: "敌人防御抗性", unit: "%", const: true }
}
const Formulas = {
  // Basic Stats
  baseATK: (s, c) => c.characterATK + c.weaponATK,
  finalATK: (s, c) => c.baseATK * (1 + s.atk_ / 100) + s.atk,
  finalHP: (s, c) => c.characterHP * (1 + s.hp_ / 100) + s.hp,
  finalDEF: (s, c) => c.characterDEF * (1 + s.def_ / 100) + s.def,

  enemyLevel_multi: (s, c) => (100 + c.characterLevel) / ((100 + c.characterLevel) + (100 + c.enemyLevel) * (1 - c.enemyDEFRed_ / 100)),

  heal_multi: (s) => (1 + s.heal_ / 100 + s.incHeal_ / 100),

  // Reactions
  amplificative_dmg_: (s) => 2500 / 9 * s.eleMas / (1400 + s.eleMas),
  transformative_dmg_: (s) => 6000 / 9 * s.eleMas / (1400 + s.eleMas),

  crystalize_eleMas_: (s) => 4000 / 9 * s.eleMas / (1400 + s.eleMas),
  crystalize_multi: (s, c) => ReactionMatrix["crystalize"].reduce((accu, val, i) => accu + val * Math.pow(c.characterLevel, i), 0),
  crystalize_hit: (s, c) => (100 + s.crystalize_dmg_ + s.crystalize_eleMas_) / 100 * c.crystalize_multi,
}

const ElementToReactionKeys = {
  physical: [],
  anemo: ["electro_swirl_hit", "pyro_swirl_hit", "cryo_swirl_hit", "hydro_swirl_hit"],
  geo: ["crystalize_hit", "shattered_hit"],
  electro: ["overloaded_hit", "electrocharged_hit", "superconduct_hit"],
  hydro: ["electrocharged_hit", "shattered_hit"],//"hydro_vaporize_multi",
  pyro: ["overloaded_hit"],// "burning_hit","pyro_vaporize_multi", "pyro_melt_multi", 
  cryo: ["shattered_hit", "superconduct_hit"],//"cryo_melt_multi", 
  dendro: []
}
function resMultiplier(res) {
  res = res / 100
  if (res < 0) return 1 - res / 2
  else if (res >= 0.75) return 1 / (res * 4 + 1)
  return 1 - res
}

Object.entries(hitMoves).forEach(([move, moveName]) => {
  StatData[`${move}_dmg_`] = { name: `${moveName}伤害加成`, unit: "%" }
  StatData[`${move}_critRate_`] = { name: `${moveName}暴击率加成`, unit: "%" }
  StatData[`final_${move}_critRate_`] = { name: `${moveName}暴击率`, unit: "%" }

  Formulas[`final_${move}_critRate_`] = (s) => clamp(s.critRate_ + s[`${move}_critRate_`], 0, 100)
})

Object.entries(hitElements).forEach(([ele, { name: eleName }]) => {
  const opt = { variant: ele }
  // DONT CHANGE. needed for screenshot parsing
  StatData[`${ele}_dmg_`] = { name: `${eleName}伤害加成`, unit: "%", ...opt }
  StatData[`${ele}_res_`] = { name: `${eleName}伤害抗性`, unit: "%", ...opt }

  StatData[`${ele}_enemyRes_`] = { name: `敌人${eleName}伤害抗性`, unit: "%", default: 10, const: true, ...opt }
  StatData[`${ele}_enemyImmunity`] = { name: `敌人${eleName}免疫`, default: false, const: true, ...opt }

  StatData[`${ele}_enemyRes_multi`] = { name: `敌人${eleName}抗性倍率`, unit: "multi", const: true, ...opt }
  StatData[`${ele}_bonus_multi`] = { name: `${eleName}攻击加成伤害倍率`, unit: "multi", ...opt }

  Object.entries(hitTypes).forEach(([type, typeName]) => {
    StatData[`${ele}_elemental_${type}`] = { name: `${eleName}攻击${typeName}`, ...opt }
    StatData[`${ele}_elemental_${type}_multi`] = { name: `${eleName}攻击${typeName} Multiplier`, unit: "multi" }

    Formulas[`${ele}_elemental_${type}`] = (s) => s.finalATK * s[`${ele}_elemental_${type}_multi`]
  })

  Formulas[`${ele}_elemental_hit_multi`] = (s, c) => (1 + (s.dmg_ + s[`${ele}_dmg_`]) / 100) * c.enemyLevel_multi * c[`${ele}_enemyRes_multi`]
  Formulas[`${ele}_elemental_critHit_multi`] = (s) => s[`${ele}_elemental_hit_multi`] * (1 + s.critDMG_ / 100)
  Formulas[`${ele}_elemental_avgHit_multi`] = (s) => s[`${ele}_elemental_hit_multi`] * (1 + s.critDMG_ * s[`critRate_`] / 10000)

  Formulas[`${ele}_enemyRes_multi`] = (s, c) => c[`${ele}_enemyImmunity`] ? 0 : resMultiplier(c[`${ele}_enemyRes_`])
})

Object.entries(hitMoves).forEach(([move, moveName]) => {
  Object.entries(hitElements).forEach(([ele, { name: eleName }]) => {
    const opt = { variant: ele }
    Object.entries(hitTypes).forEach(([type, typeName]) => {
      StatData[`${ele}_${move}_${type}`] = { name: `${moveName} ${typeName}`, ...opt }
      StatData[`${ele}_${move}_${type}_multi`] = { name: `${moveName} ${typeName}倍率`, unit: "multi", ...opt }

      Formulas[`${ele}_${move}_${type}`] = (s) => s.finalATK * s[`${ele}_${move}_${type}_multi`]
    })

    Formulas[`${ele}_${move}_hit_multi`] = (s, c) => (1 + (s.dmg_ + s[`${ele}_dmg_`] + s[`${move}_dmg_`]) / 100) * c.enemyLevel_multi * c[`${ele}_enemyRes_multi`]
    Formulas[`${ele}_${move}_critHit_multi`] = (s) => s[`${ele}_${move}_hit_multi`] * (1 + s.critDMG_ / 100)
    Formulas[`${ele}_${move}_avgHit_multi`] = (s) => s[`${ele}_${move}_hit_multi`] * (1 + s.critDMG_ * s[`final_${move}_critRate_`] / 10000)
  })
})

Object.entries(transformativeReactions).forEach(([reaction, { name, variants }]) => {
  const opt = { variant: reaction }
  StatData[`${reaction}_dmg_`] = { name: `${name}伤害加成`, unit: "%", ...opt }
  StatData[`${reaction}_multi`] = { name: `${name}倍率`, unit: "multi", const: true, ...opt }

  Formulas[`${reaction}_multi`] = (s, c) => ReactionMatrix[reaction].reduce((accu, val, i) => accu + val * Math.pow(c.characterLevel, i), 0)
  if (Object.keys(variants).length === 1) {
    const [ele] = Object.keys(variants), opt = { variant: reaction }
    StatData[`${reaction}_hit`] = { name: `${name}伤害`, ...opt }
    Formulas[`${reaction}_hit`] = (s, c) => (100 + s.transformative_dmg_ + s[`${reaction}_dmg_`]) / 100 * c[`${reaction}_multi`] * c[`${ele}_enemyRes_multi`]
  } else {
    Object.entries(variants).forEach(([ele, baseMulti]) => {
      const opt = { variant: ele }

      StatData[`${ele}_${reaction}_hit`] = { name: `${hitElements[ele].name} ${name}伤害`, ...opt }
      Formulas[`${ele}_${reaction}_hit`] = (s, c) => (100 + s.transformative_dmg_ + s[`${reaction}_dmg_`]) / 100 * c[`${reaction}_multi`] * c[`${ele}_enemyRes_multi`]
    })
  }
})

Object.entries(amplifyingReactions).forEach(([reaction, { name, variants }]) => {
  const opt = { variant: reaction }
  StatData[`${reaction}_dmg_`] = { name: `${name}伤害加成`, unit: "%", ...opt }
  Object.entries(variants).forEach(([ele, baseMulti]) => {
    StatData[`${ele}_${reaction}_multi`] = { name: `${name}倍率`, unit: "multi", ...opt }
    Formulas[`${ele}_${reaction}_multi`] = (s) => baseMulti * (100 + s.amplificative_dmg_ + s[`${reaction}_dmg_`]) / 100
    Object.entries(hitTypes).forEach(([type, typeName]) => {
      StatData[`${ele}_${reaction}_elemental_${type}`] = { name: `${name} ${typeName}`, ...opt }
      Formulas[`${ele}_${reaction}_elemental_${type}`] = (s) => s[`${ele}_elemental_${type}`] * s[`${ele}_${reaction}_multi`]
      Object.entries(hitMoves).forEach(([move, moveName]) => {
        StatData[`${ele}_${reaction}_${move}_${type}`] = { name: `${name} ${moveName} ${typeName}`, ...opt }
        Formulas[`${ele}_${reaction}_${move}_${type}`] = (s) => s[`${ele}_${move}_${type}`] * s[`${ele}_${reaction}_multi`]
      })
    })
  })
})
if (process.env.NODE_ENV === "development") console.log(StatData)

//assume all the dependency for the modifiers are part of the dependencyKeys as well
function PreprocessFormulas(dependencyKeys, stats, debug = false) {
  const { modifiers = {} } = stats, initialStats = {}, constData = {}
  const formulaList = dependencyKeys.map(key => {
    const modifier = modifiers[key] ?? {}
    const constModifier = Object.entries(modifier).filter(([k]) => StatData[k]?.const)
    const dynamicModifier = Object.entries(modifier).filter(([k]) => !(StatData[k]?.const))
    const constFunc = (s, c) => constModifier.reduce((accu, [k, m]) => accu + c[k] * m, 0)
    const dynamicFunc = (s) => dynamicModifier.reduce((accu, [k, m]) => accu + s[k] * m, 0)

    let funcIndicator = 0
    if (constModifier.length) funcIndicator += 1
    if (dynamicModifier.length) funcIndicator += 2
    if (!Formulas[key]) funcIndicator += StatData[key]?.const ? 4 : 8

    let tmp
    switch (funcIndicator) {
      case 0: tmp = Formulas[key]; break
      case 1: tmp = (s, c) => Formulas[key](s, c) + constFunc(s, c); break
      case 2: tmp = (s, c) => Formulas[key](s, c) + dynamicFunc(s, c); break
      case 3: tmp = (s, c) => Formulas[key](s, c) + constFunc(s, c) + dynamicFunc(s, c); break
      case 4: tmp = (s, c) => c[key]; break
      case 5: tmp = (s, c) => c[key] + constFunc(s, c); break
      case 6: tmp = (s, c) => c[key] + dynamicFunc(s, c); break
      case 7: tmp = (s, c) => c[key] + constFunc(s, c) + dynamicFunc(s, c); break
      case 8: tmp = (s, c) => s[key]; break
      case 9: tmp = (s, c) => s[key] + constFunc(s, c); break
      case 10: tmp = (s, c) => s[key] + dynamicFunc(s, c); break
      default: tmp = (s, c) => s[key] + constFunc(s, c) + dynamicFunc(s, c); break
    }
    const func = tmp

    if (debug) console.log(StatData[key]?.const ? "Const" : "Dynamic", key, constModifier, dynamicModifier, "" + Formulas[key])

    if (!(key in Formulas))
      stats[key] = stats[key] ?? StatData[key]?.default ?? 0

    if (StatData[key]?.const) {
      constData[key] = stats[key]
      constData[key] = func(stats, constData)
      stats[key] = constData[key]
      if (dynamicModifier.length)
        console.error(`Constant key ${key} depends on a dynamic modifer ${dynamicModifier}. The result will be incorrect.`)
      return null
    }

    if (!(key in Formulas))
      initialStats[key] = stats[key]

    return [key, func]
  }).filter((func) => func)

  if (debug) console.log(initialStats, constData)

  return {
    initialStats,
    formula: s => {
      formulaList.forEach(([key, formula]) => s[key] = formula(s, constData))
      // TODO: we shouldn't need to copy *all* constData, only ones that are targets.
      Object.assign(s, constData)
    }
  }
}

export {
  Formulas,
  StatData,
  ElementToReactionKeys,
  PreprocessFormulas,
}
