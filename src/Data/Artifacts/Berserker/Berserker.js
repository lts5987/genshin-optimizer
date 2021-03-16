import flower from './Item_Berserker\'s_Rose.png'
import plume from './Item_Berserker\'s_Indigo_Feather.png'
import sands from './Item_Berserker\'s_Timepiece.png'
import goblet from './Item_Berserker\'s_Bone_Goblet.png'
import circlet from './Item_Berserker\'s_Battle_Mask.png'
let artifact = {
  name: "战狂", rarity: [3, 4],
  pieces: {
    flower: "战狂的蔷薇",
    plume: "战狂的翎羽",
    sands: "战狂的时计",
    goblet: "战狂的骨杯",
    circlet: "战狂的鬼面"
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
      text: "暴击率提高12%。",
      stats: { critRate_: 12 }
    },
    4: {
      text: "生命值低于70%时，暴击率额外提升24%。",
      conditional: {
        type: "artifact",
        sourceKey: "Berserker_4",
        maxStack: 1,
        stats: {
          critRate_: 24,
        }
      }
    }
  }
}
export default artifact