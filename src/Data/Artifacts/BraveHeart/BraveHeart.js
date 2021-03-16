import flower from './Item_Medal_of_the_Brave.png'
import plume from './Item_Prospect_of_the_Brave.png'
import sands from './Item_Fortitude_of_the_Brave.png'
import goblet from './Item_Outset_of_the_Brave.png'
import circlet from './Item_Crown_of_the_Brave.png'
let artifact = {
  name: "勇士之心", rarity: [3, 4],
  pieces: {
    flower: "勇士的勋章",
    plume: "勇士的期许",
    sands: "勇士的坚毅",
    goblet: "勇士的壮行",
    circlet: "勇士的冠冕"
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
      text: "攻击力提高18%。",
      stats: { atk_: 18 }
    },
    4: {
      text: "对生命值高于50%的敌人，造成的伤害增加30%。",
      conditional: {
        type: "artifact",
        sourceKey: "BraveHeart_4",
        maxStack: 1,
        stats: {
          dmg_: 30,
        }
      }
    }
  }
}
export default artifact