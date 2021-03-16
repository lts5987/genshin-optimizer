import flower from './Item_Gambler\'s_Brooch.png'
import plume from './Item_Gambler\'s_Feather_Accessory.png'
import sands from './Item_Gambler\'s_Pocket_Watch.png'
import goblet from './Item_Gambler\'s_Dice_Cup.png'
import circlet from './Item_Gambler\'s_Earrings.png'
let artifact = {
  name: "赌徒赌徒", rarity: [3, 4],
  pieces: {
    flower: "赌徒的胸花",
    plume: "赌徒的羽饰",
    sands: "赌徒的怀表",
    goblet: "赌徒的骰盅",
    circlet: "赌徒的耳环"
  },
  icons: {
    flower,
    plume,
    sands,
    goblet,
    circlet
  },
  setEffects: {
    2: {
      text: "元素战技造成的伤害提升20%。",
      stats: { skill_dmg_: 20 }
    },
    4: {
      text: "击败敌人时，有100%概率清除元素战技的冷却时间。该效果每15秒至多触发一次。",
      conditional: {
        type: "artifact",
        sourceKey: "Gambler_4",
        maxStack: 1,
        stats: {
          skillCDRed_: 100,
        }
      }
    }
  }
}
export default artifact