import flower from './Item_Guardian\'s_Flower.png'
import plume from './Item_Guardian\'s_Sigil.png'
import sands from './Item_Guardian\'s_Clock.png'
import goblet from './Item_Guardian\'s_Vessel.png'
import circlet from './Item_Guardian\'s_Band.png'
let artifact = {
  name: "守护之心", rarity: [3, 4],
  pieces: {
    flower: "守护之花",
    plume: "守护徽印",
    sands: "守护座钟",
    goblet: "守护之皿",
    circlet: "守护束带"
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
      text: "防御力提高30%。",
      stats: { def_: 30 }
    },
    4: {
      text: "队伍里每有不同一种元素类型的自己的角色，自身获得30%相应的元素抗性。",
      conditional: [//TODO all party conditional
        {
          type: "artifact",
          condition: "Anemo",
          sourceKey: "DefendersWill_4",
          maxStack: 1,
          stats: {
            anemo_res_: 30
          }
        }, {
          type: "artifact",
          condition: "Geo",
          sourceKey: "DefendersWill_4",
          maxStack: 1,
          stats: {
            geo_res_: 30
          }
        }, {
          type: "artifact",
          condition: "Electro",
          sourceKey: "DefendersWill_4",
          maxStack: 1,
          stats: {
            electro_res_: 30
          }
        }, {
          type: "artifact",
          condition: "Hydro",
          sourceKey: "DefendersWill_4",
          maxStack: 1,
          stats: {
            hydro_res_: 30
          }
        }, {
          type: "artifact",
          condition: "pyro",
          sourceKey: "DefendersWill_4",
          maxStack: 1,
          stats: {
            pyro_res_: 30
          }
        }, {
          type: "artifact",
          condition: "Cryo",
          sourceKey: "DefendersWill_4",
          maxStack: 1,
          stats: {
            cryo_res_: 30
          }
        },
      ]
    }
  }
}
export default artifact