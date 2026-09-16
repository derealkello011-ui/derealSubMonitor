const ai = require("../../../assets/icons/ai.png");
const canva = require("../../../assets/icons/canva.png");
const chatgpt = require("../../../assets/icons/chatgpt.png");
const claudeAi = require("../../../assets/icons/claude-ai.png");
const cursorAi = require("../../../assets/icons/cursor-ai.png");
const dropbox = require("../../../assets/icons/dropbox.png");
const figma = require("../../../assets/icons/figma.png");
const github = require("../../../assets/icons/github.png");
const medium = require("../../../assets/icons/icons8-medium-50.png");
const notion = require("../../../assets/icons/notion.png");
const spotify = require("../../../assets/icons/spotify.png");

const analytics = require("../../../assets/tabIcons/analytics_24.png");
const dataExploration = require("../../../assets/tabIcons/data_exploration.png");
const home = require("../../../assets/tabIcons/home_24.png");
const settings = require("../../../assets/tabIcons/settings_24.png");
const menu = require("../../../assets/tabIcons/menu.png");
const wallet = require("../../../assets/icons/wallet.png");

export const mediaIcons = [
    ai,
    canva,
    chatgpt,
    claudeAi,
    cursorAi,
    dropbox,
    figma,
    github,
    medium,
    notion,
    spotify,
] as const;

export const tabIcons = {
  home,
  dataExploration,
  analytics,
  settings,
  menu,
  wallet,
} as const;