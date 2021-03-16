import flower from './Item_Flower_of_Creviced_Cliff.png'
import plume from './Item_Feather_of_Jagged_Peaks.png'
import sands from './Item_Sundial_of_Enduring_Jade.png'
import goblet from './Item_Goblet_of_Chiseled_Crag.png'
import circlet from './Item_Mask_of_Solitude_Basalt.png'
let artifact = {
  name: "悠古的磐岩", rarity: [4, 5],
  pieces: {
    flower: "磐陀裂生之花",
    plume: "嵯峨群峰之翼",
    sands: "星罗圭壁之晷",
    goblet: "巉岩琢塑之樽",
    circlet: "不动玄石之相"
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
      text: <span>获得15%<span className="text-geo">岩元素伤害加成</span>。</span>,
      stats: { geo_dmg_: 15 }
    },
    4: {
      text: "获得元素反应形成的晶片时，队伍中所有角色获得35%对应元素伤害加成，持续10秒。同时只能通过该效果获得一种元素伤害加成。",
      conditional: [{//TODO all party conditional
        type: "artifact",
        condition: "Pyro",
        sourceKey: "ArchaicPetra_4",
        maxStack: 1,
        stats: {
          pyro_dmg_: 35,
        }
      }, {
        type: "artifact",
        condition: "Electro",
        sourceKey: "ArchaicPetra_4",
        maxStack: 1,
        stats: {
          electro_dmg_: 35,
        }
      }, {
        type: "artifact",
        condition: "Hydro",
        sourceKey: "ArchaicPetra_4",
        maxStack: 1,
        stats: {
          hydro_dmg_: 35,
        }
      }, {
        type: "artifact",
        condition: "Cryo",
        sourceKey: "ArchaicPetra_4",
        maxStack: 1,
        stats: {
          cryo_dmg_: 35,
        }
      }]
    }
  }
}
export default artifact