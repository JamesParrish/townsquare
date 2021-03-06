import Vue from "vue";
import App from "./App";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const faIcons = [
  "BookOpen",
  "BroadcastTower",
  "Camera",
  "Chair",
  "CheckSquare",
  "Cog",
  "Copy",
  "Dice",
  "ExchangeAlt",
  "FileUpload",
  "HandPointRight",
  "Heartbeat",
  "Image",
  "Link",
  "PeopleArrows",
  "Question",
  "Random",
  "RedoAlt",
  "SearchMinus",
  "SearchPlus",
  "Skull",
  "Square",
  "TheaterMasks",
  "Times",
  "TimesCircle",
  "TrashAlt",
  "Undo",
  "User",
  "UserEdit",
  "UserFriends",
  "Users",
  "VoteYea"
];
const fabIcons = ["Github", "Discord"];
library.add(
  ...faIcons.map(i => fas["fa" + i]),
  ...fabIcons.map(i => fab["fa" + i])
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
