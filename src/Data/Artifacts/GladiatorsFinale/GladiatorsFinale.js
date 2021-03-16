import flower from './Item_Gladiator\'s_Nostalgia.png'
import plume from './Item_Gladiator\'s_Destiny.png'
import sands from './Item_Gladiator\'s_Longing.png'
import goblet from './Item_Gladiator\'s_Intoxication.png'
import circlet from './Item_Gladiator\'s_Triumphus.png'
let artifact = {
  name: "角斗士的终幕礼", rarity: [4, 5],
  pieces: {
    flower: "角斗士的留恋",
    plume: "角斗士的归宿",
    sands: "角斗士的希冀",
    goblet: "角斗士的酣醉",
    circlet: "角斗士的凯旋"
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
      text: "装备该圣遗物套装的角色为单手剑、双手剑、长柄武器角色时，角色普通攻击造成的伤害提高35%。",
      conditional: {
        type: "artifact",
        sourceKey: "GladiatorsFinale_4",
        maxStack: 1,
        stats: {
          normal_dmg_: 35
        }
      }
    }
  }
}
export default artifact