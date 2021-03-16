import flower from './Item_Adventurer\'s_Flower.png'
import plume from './Item_Adventurer\'s_Tail_Feather.png'
import sands from './Item_Adventurer\'s_Pocket_Watch.png'
import goblet from './Item_Adventurer\'s_Golden_Goblet.png'
import circlet from './Item_Adventurer\'s_Bandana.png'
import DisplayPercent from '../../../Components/DisplayPercent'
let artifact = {
  name: "冒险家", rarity: [3],
  pieces: {
    flower: "冒险家之花",
    plume: "冒险家尾羽",
    sands: "冒险家怀表",
    goblet: "冒险家之花",
    circlet: "冒险家头带"
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
      text: "生命值上限提升1000点。",
      stats: { hp: 1000 }
    },
    4: {
      text: (charFinalStats) => <span>开启各类宝箱后5秒内，持续恢复30%生命值{DisplayPercent(30, charFinalStats, "finalHP")}。</span>,
    }
  }
}
export default artifact

