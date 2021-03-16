import flower from './Item_Bloodstained_Flower_of_Iron.png'
import plume from './Item_Bloodstained_Black_Plume.png'
import sands from './Item_Bloodstained_Final_Hour.png'
import goblet from './Item_Bloodstained_Chevalier\'s_Goblet.png'
import circlet from './Item_Bloodstained_Iron_Mask.png'
let artifact = {
  name: "染血的骑士道", rarity: [4, 5],
  pieces: {
    flower: "染血的铁之心",
    plume: "染血的黑之羽",
    sands: "骑士染血之时",
    goblet: "染血骑士之杯",
    circlet: "染血的铁假面"
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
      text: <span>造成的<span className="text-physical">物理伤害</span>物理伤害提高25%。</span>,
      stats: { physical_dmg_: 25 }
    },
    4: {
      text: "击败敌人后的10秒内，施放重击时不消耗体力，且造成的伤害提升50%。",
      conditional: {
        type: "artifact",
        sourceKey: "BloodstainedChivalry_4",
        maxStack: 1,
        stats: {
          charged_dmg_: 50,
          staminaDec_: 100,
        }
      }
    }
  }
}
export default artifact