import flower from './Item_Snowswept_Memory.png'
import plume from './Item_Icebreaker\'s_Resolve.png'
import sands from './Item_Frozen_Homeland\'s_Demise.png'
import goblet from './Item_Frost-Weaved_Dignity.png'
import circlet from './Item_Broken_Rime\'s_Echo.png'
let artifact = {//Icebreaker
  name: "冰风迷途的勇士", rarity: [4, 5],
  pieces: {
    flower: "历经风雪的思念",
    plume: "摧冰而行的执望",
    sands: "冰雪故园的终期",
    goblet: "遍结寒霜的傲骨",
    circlet: "破冰踏雪的回音"
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
      text: <span>获得15%<span className="text-cryo">冰元素伤害加成</span>。</span>,
      stats: { cryo_dmg_: 15 }
    },
    4: {
      text: <span>攻击处于<span className="text-cryo">冰元素</span>影响下的敌人时，暴击率提高20%；若敌人处于冻结状态下，则暴击率额外提高20%。</span>,
      conditional: [{
        type: "artifact",
        sourceKey: "BlizzardStrayer_4",
        condition: "Enemy affected by Cryo",
        maxStack: 1,
        stats: {
          critRate_: 20,
        }
      }, {
        type: "artifact",
        sourceKey: "BlizzardStrayer_4",
        condition: "Frozen Enemy",
        maxStack: 1,
        stats: {
          critRate_: 40,
        }
      }]
    }
  }
}
export default artifact