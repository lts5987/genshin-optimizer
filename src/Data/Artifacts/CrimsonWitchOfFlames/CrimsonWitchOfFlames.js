import flower from './Item_Witch\'s_Flower_of_Blaze.png'
import plume from './Item_Witch\'s_Ever-Burning_Plume.png'
import sands from './Item_Witch\'s_End_Time.png'
import goblet from './Item_Witch\'s_Heart_Flames.png'
import circlet from './Item_Witch\'s_Scorching_Hat.png'
let artifact = {
  name: "炽烈的炎之魔女", rarity: [4, 5],
  pieces: {
    flower: "魔女的炎之花",
    plume: "魔女常燃之羽",
    sands: "魔女破灭之时",
    goblet: "魔女的心之火",
    circlet: "焦灼的魔女帽"
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
      text: <span>获得15%<span className="text-pyro">火元素伤害加成</span>。</span>,
      stats: { pyro_dmg_: 15 }
    },
    4: {
      text: "超载、燃烧反应造成的伤害提升40%，蒸发、融化反应的加成系数提高15%。施放元素战技后的10秒内，二件套的效果提高50%，该效果最多叠加3次。",
      stats: {
        overloaded_dmg_: 40,
        burning_dmg_: 40,
        vaporize_dmg_: 15,
        melt_dmg_: 15,
      },
      conditional: {
        type: "artifact",
        sourceKey: "CrimsonWitchOfFlames_4",
        maxStack: 3,
        stats: {
          pyro_dmg_: 7.5
        }
      }
    }
  }
}
export default artifact