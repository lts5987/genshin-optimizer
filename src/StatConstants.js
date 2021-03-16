import ElementalData from "./Data/ElementalData";

export const hitTypes = { hit: "伤害", avgHit: "平均伤害", critHit: "暴击伤害" }
export const hitMoves = { normal: "普通攻击", charged: "重击", plunging: "落下攻击", skill: "元素战技", burst: "元素爆发" }
export const hitElements = ElementalData
export const transformativeReactions = {
  overloaded: { name: "超载", variants: { pyro: 4 } },
  shattered: { name: "碎冰", variants: { physical: 3 } },
  electrocharged: { name: "感电", variants: { electro: 2.4 } },
  superconduct: { name: "超导", variants: { cryo: 1 } },
  swirl: { name: "扩散", variants: { pyro: 1.2, hydro: 1.2, electro: 1.2, cryo: 1.2 } },
}
export const amplifyingReactions = {
  vaporize: { name: "蒸发", variants: { pyro: 1.5, hydro: 2 } },
  melt: { name: "融化", variants: { pyro: 2, cryo: 1.5 } },
}
export const otherReactions = {
  burning: "燃烧",
  crystalize: "结晶",
}
export const ReactionMatrix = {
  overloaded: [37.4371542286, -4.3991155718, 0.9268181504, -0.0314790536, 0.0005189440, -0.0000027646],
  superconduct: [7.4972486411, -0.4750909512, 0.1836799174, -0.0064237710, 0.0001110078, -0.0000006038],
  electrocharged: [20.8340255487, -1.6987232790, 0.4742385201, -0.0162160738, 0.0002746679, -0.0000014798],
  shattered: [31.2160750111, -3.7397755267, 0.7174530144, -0.0239673351, 0.0003895953, -0.0000020555],
  swirl: [13.5157684329, -1.7733381829, 0.3097567417, -0.0103922088, 0.0001679502, -0.0000008854],
  crystalize: [83.06561, -4.42541, 0.5568372, -0.01637168, 0.0002253889, -0.000001088197]
}
