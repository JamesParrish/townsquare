(function(e){function t(t){for(var a,o,n=t[0],l=t[1],h=t[2],u=0,m=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,h||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],a=!0,n=1;n<i.length;n++){var l=i[n];0!==s[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var a={},s={app:0},r=[];function o(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=a,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(i,a,function(t){return e[t]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/townsquare/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var h=0;h<n.length;h++)t(n[h]);var d=l;r.push(["56d7","chunk-vendors"]),i()})({"0025":function(e,t,i){},"30db":function(e,t,i){"use strict";var a=i("0025"),s=i.n(a);s.a},3636:function(e,t,i){"use strict";var a=i("d4b2"),s=i.n(a);s.a},"56d7":function(e,t,i){"use strict";i.r(t);var a=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app",tabindex:"-1"},on:{keyup:e.keyup}},[i("TownInfo",{attrs:{players:e.players}}),i("TownSquare",{attrs:{"is-public":e.isPublic,players:e.players,roles:e.roles}}),i("div",{staticClass:"controls"},[i("font-awesome-icon",{attrs:{icon:"cogs"},on:{click:function(t){e.isControlOpen=!e.isControlOpen}}}),e.isControlOpen?i("ul",[i("li",{on:{click:e.togglePublic}},[e._v("Toggle "),i("em",[e._v("G")]),e._v("rimoire")]),e.players.length<20?i("li",{on:{click:e.addPlayer}},[i("em",[e._v("A")]),e._v("dd Player ")]):e._e(),e.players.length>4?i("li",{on:{click:e.togglePublic}},[e._v(" Select Roles ")]):e._e(),e.players.length>2?i("li",{on:{click:e.randomizeSeatings}},[i("em",[e._v("R")]),e._v("andomize Seatings ")]):e._e()]):e._e()],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"square",class:{public:e.isPublic},attrs:{id:"townsquare"}},[i("ul",{staticClass:"circle",class:["size-"+e.players.length]},e._l(e.players,(function(t,a){return i("Player",{key:a,attrs:{player:t,roles:e.roles,"is-public":e.isPublic},on:{"add-reminder":e.openReminderModal,"set-role":e.openRoleModal,"remove-player":e.removePlayer}})})),1),i("Modal",{directives:[{name:"show",rawName:"v-show",value:e.availableReminders.length,expression:"availableReminders.length"}],on:{close:e.closeModal}},[i("h2",[e._v("Choose a reminder token:")]),i("ul",{staticClass:"reminders"},e._l(e.availableReminders,(function(t){return i("li",{key:t.role+" "+t.name,staticClass:"reminder",class:[t.role],on:{click:function(i){return e.addReminder(t)}}},[e._v(" "+e._s(t.name)+" ")])})),0)]),i("Modal",{directives:[{name:"show",rawName:"v-show",value:e.availableRoles.length,expression:"availableRoles.length"}],on:{close:e.closeModal}},[i("h2",[e._v("Choose a new role:")]),i("ul",{staticClass:"tokens"},e._l(e.availableRoles,(function(t){return i("li",{key:t.id,staticClass:"token",class:[t.id,t.team],on:{click:function(i){return e.setRole(t)}}},[e._v(" "+e._s(t.name)+" ")])})),0)])],1)},n=[],l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("div",{staticClass:"player",class:{dead:e.player.hasDied,"no-vote":e.player.hasVoted,traveller:e.player.role&&"traveller"===e.player.role.team}},[i("div",{staticClass:"shroud",on:{click:function(t){return e.toggleStatus()}}}),i("div",{staticClass:"life",on:{click:function(t){return e.toggleStatus()}}}),i("div",{staticClass:"token",class:[e.player.role.id],on:{click:function(t){return e.changeRole()}}},[e.player.role.firstNight?i("span",{staticClass:"leaf-left"}):e._e(),e.player.role.otherNight?i("span",{staticClass:"leaf-right"}):e._e(),e.player.role.reminders&&e.player.role.reminders.length?i("span",{class:["leaf-top"+e.player.role.reminders.length]}):e._e(),e.player.role.setup?i("span",{staticClass:"leaf-orange"}):e._e(),i("div",[e._v(e._s(e.player.role.name))])]),e.player.role.ability?i("div",{staticClass:"ability"},[e._v(" "+e._s(e.player.role.ability)+" ")]):e._e(),i("div",{staticClass:"name",on:{click:e.changeName}},[e._v(" "+e._s(e.player.name)+" "),i("span",{staticClass:"remove",on:{click:function(t){return t.stopPropagation(),e.$emit("remove-player",e.player)}}},[i("font-awesome-icon",{attrs:{icon:"times-circle"}})],1)])]),e.player.reminders?e._l(e.player.reminders,(function(t){return i("div",{key:t.role+" "+t.name,staticClass:"reminder",class:[t.role],on:{click:function(i){return e.removeReminder(t)}}},[e._v(" "+e._s(t.name)+" ")])})):e._e(),i("div",{staticClass:"reminder add",on:{click:function(t){return e.$emit("add-reminder",e.player)}}})],2)},h=[],d={props:{player:{type:Object,required:!0},roles:{type:Map,required:!0},isPublic:{type:Boolean,required:!0}},data(){return{}},methods:{toggleStatus(){this.isPublic?this.player.hasDied?this.player.hasVoted?(this.$set(this.player,"hasVoted",!1),this.$set(this.player,"hasDied",!1)):this.$set(this.player,"hasVoted",!0):this.$set(this.player,"hasDied",!0):this.$set(this.player,"hasDied",!this.player.hasDied)},changeRole(){this.$emit("set-role",this.player)},changeName(){const e=prompt("Player name",this.player.name);this.player.name=e||this.player.name},removeReminder(e){this.player.reminders.splice(this.player.reminders.indexOf(e),1)}}},u=d,m=(i("74c9"),i("2877")),f=Object(m["a"])(u,l,h,!1,null,null,null),c=f.exports,y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{name:"modal-fade"}},[i("div",{staticClass:"modal-backdrop",on:{click:e.close}},[i("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"},on:{click:function(e){e.stopPropagation()}}},[e._t("default")],2)])])},p=[],g={methods:{close(){this.$emit("close")}}},b=g,N=(i("30db"),Object(m["a"])(b,y,p,!1,null,null,null)),v=N.exports,k={components:{Modal:v,Player:c},props:{isPublic:{type:Boolean,required:!0},players:{type:Array,required:!0},roles:{type:Map,required:!0}},data(){return{selectedPlayer:!1,availableReminders:[],availableRoles:[]}},methods:{openReminderModal(e){this.selectedPlayer=e,this.availableReminders=[],this.roles.forEach(e=>{this.players.some(t=>t.role.id===e.id)&&(this.availableReminders=[...this.availableReminders,...e.reminders.map(t=>({role:e.id,name:t}))])}),this.availableReminders.push({role:"good",name:"Good"}),this.availableReminders.push({role:"evil",name:"Evil"})},openRoleModal(e){this.selectedPlayer=e,this.availableRoles=[],this.roles.forEach(t=>{t.id!==e.role&&this.availableRoles.push(t)}),this.availableRoles.push({})},addReminder(e){this.selectedPlayer.reminders.push(e),this.closeModal()},setRole(e){this.selectedPlayer.role=e,this.closeModal()},closeModal(){this.selectedPlayer=!1,this.availableReminders=[],this.availableRoles=[]},removePlayer(e){confirm(`Do you really want to remove ${e.name}?`)&&this.players.splice(this.players.indexOf(e),1)}}},w=k,_=(i("3636"),Object(m["a"])(w,o,n,!1,null,null,null)),D=_.exports,M=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",{staticClass:"info"},[e.players.length<5?i("li",[e._v("Please add more players!")]):e._e(),i("li",[e._v(" "+e._s(e.players.length)+" "),i("font-awesome-icon",{staticClass:"players",attrs:{icon:"users"}}),e._v(" "+e._s(e.teams.alive)+" "),i("font-awesome-icon",{staticClass:"alive",attrs:{icon:"heartbeat"}}),e._v(" "+e._s(e.teams.votes)+" "),i("font-awesome-icon",{staticClass:"votes",attrs:{icon:"vote-yea"}})],1),e.players.length>=5?i("li",[e._v(" "+e._s(e.teams.townsfolk)+" "),i("font-awesome-icon",{staticClass:"townsfolk",attrs:{icon:"user-friends"}}),e._v(" "+e._s(e.teams.outsiders)+" "),i("font-awesome-icon",{staticClass:"outsider",attrs:{icon:e.teams.outsiders>1?"user-friends":"user"}}),e._v(" "+e._s(e.teams.minions)+" "),i("font-awesome-icon",{staticClass:"minion",attrs:{icon:e.teams.minions>1?"user-friends":"user"}}),e._v(" "+e._s(e.teams.demons)+" "),i("font-awesome-icon",{staticClass:"demon",attrs:{icon:e.teams.demons>1?"user-friends":"user"}}),e.teams.travellers?[e._v(" "+e._s(e.teams.travellers)+" "),i("font-awesome-icon",{staticClass:"traveller",attrs:{icon:e.teams.travellers>1?"user-friends":"user"}})]:e._e()],2):e._e()])},S=[],B=i("634a"),T={props:{players:{type:Array,required:!0}},computed:{teams:function(){const e=this.players.filter(e=>"traveller"!==e.role.team).length,t=this.players.filter(e=>!0!==e.hasDied).length;return{...B[e-5],travellers:this.players.length-e,alive:t,votes:t+this.players.filter(e=>!0===e.hasDied&&!0!==e.hasVoted).length}}}},R=T,E=(i("8d43"),Object(m["a"])(R,M,S,!1,null,null,null)),P=E.exports,O=i("b1d9");const C=new Map(O.filter(e=>e.set===(window.location.hash.substr(1)||"TB")).sort((e,t)=>t.team.localeCompare(e.team)).map(e=>[e.id,e]));var x={components:{TownSquare:D,TownInfo:P},data:()=>({isPublic:!0,isControlOpen:!1,players:[],roles:C,set:"TB"}),methods:{togglePublic(){this.isPublic=!this.isPublic,this.isControlOpen=!1},addPlayer(){const e=prompt("Player name");e&&this.players.push({name:e,role:{},reminders:[]})},randomizeSeatings(){confirm("Are you sure you want to randomize seatings?")&&(this.players=this.players.map(e=>[Math.random(),e]).sort((e,t)=>e[0]-t[0]).map(e=>e[1]))},keyup({key:e}){switch(e){case"g":this.togglePublic();break;case"a":this.addPlayer();break;case"r":this.randomizeSeatings();break}}},mounted(){localStorage.players&&(this.players=JSON.parse(localStorage.players))},watch:{players:{handler(e){console.log("new player",e),localStorage.players=JSON.stringify(e)},deep:!0}}},V=x,I=(i("5c0b"),Object(m["a"])(V,s,r,!1,null,null,null)),A=I.exports,Y=i("ecee"),j=i("c074"),$=i("ad3d");Y["c"].add(j["f"],j["b"],j["g"],j["e"],j["d"],j["c"],j["a"]),a["a"].component("font-awesome-icon",$["a"]),a["a"].config.productionTip=!1,new a["a"]({render:e=>e(A)}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var a=i("9c0c"),s=i.n(a);s.a},"634a":function(e){e.exports=JSON.parse('[{"townsfolk":3,"outsiders":0,"minions":1,"demons":1},{"townsfolk":3,"outsiders":1,"minions":1,"demons":1},{"townsfolk":5,"outsiders":0,"minions":1,"demons":1},{"townsfolk":5,"outsiders":1,"minions":1,"demons":1},{"townsfolk":5,"outsiders":2,"minions":1,"demons":1},{"townsfolk":7,"outsiders":0,"minions":2,"demons":1},{"townsfolk":7,"outsiders":1,"minions":2,"demons":1},{"townsfolk":7,"outsiders":2,"minions":2,"demons":1},{"townsfolk":9,"outsiders":0,"minions":3,"demons":1},{"townsfolk":9,"outsiders":1,"minions":3,"demons":1},{"townsfolk":9,"outsiders":2,"minions":3,"demons":1}]')},"74c9":function(e,t,i){"use strict";var a=i("9fd8"),s=i.n(a);s.a},"7a65":function(e,t,i){},"8d43":function(e,t,i){"use strict";var a=i("7a65"),s=i.n(a);s.a},"9c0c":function(e,t,i){},"9fd8":function(e,t,i){},b1d9:function(e){e.exports=JSON.parse('[{"id":"washerwoman","name":"Washerwoman","set":"TB","team":"townsfolk","firstNight":true,"otherNight":false,"reminders":["Townsfolk","Decoy"],"setup":false,"ability":"You start knowing 1 of 2 players is a particular Townsfolk."},{"id":"librarian","name":"Librarian","set":"TB","team":"townsfolk","firstNight":true,"otherNight":false,"reminders":["Outsider","Decoy"],"setup":false,"ability":"You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play)"},{"id":"investigator","name":"Investigator","set":"TB","team":"townsfolk","firstNight":true,"otherNight":false,"reminders":["Minion","Decoy"],"setup":false,"ability":"You start knowing 1 of 2 players is a particular Minion."},{"id":"chef","name":"Chef","set":"TB","team":"townsfolk","firstNight":true,"otherNight":false,"reminders":[],"setup":false,"ability":"You start knowing how many pairs of evil players there are."},{"id":"empath","name":"Empath","set":"TB","team":"townsfolk","firstNight":true,"otherNight":true,"reminders":[],"setup":false,"ability":"Each night, you learn how many of your 2 alive neighbours are evil."},{"id":"fortuneteller","name":"Fortune Teller","set":"TB","team":"townsfolk","firstNight":true,"otherNight":true,"reminders":["Decoy"],"setup":false,"ability":"Each night, choose 2 players: you learn if either is a Demon. There is 1 good player that registers falsely to you."},{"id":"undertaker","name":"Undertaker","set":"TB","team":"townsfolk","firstNight":false,"otherNight":true,"reminders":["Executed"],"setup":false,"ability":"Each night*, you learn which character died by execution today."},{"id":"monk","name":"Monk","set":"TB","team":"townsfolk","firstNight":false,"otherNight":true,"reminders":["Protected"],"setup":false,"ability":"Each night*, choose a player (not yourself): they are safe from the Demon tonight."},{"id":"ravenkeeper","name":"Ravenkeeper","set":"TB","team":"townsfolk","firstNight":false,"otherNight":true,"reminders":[],"setup":false,"ability":"If you die at night, you are woken to choose a player: you learn their character."},{"id":"mayor","name":"Mayor","set":"TB","team":"townsfolk","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"ability":"If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead."},{"id":"slayer","name":"Slayer","set":"TB","team":"townsfolk","firstNight":false,"otherNight":false,"reminders":["Used"],"setup":false,"ability":"Once per game, during the day, publicly choose a player: if they are the Demon, they die."},{"id":"soldier","name":"Soldier","set":"TB","team":"townsfolk","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"ability":"You are safe from the Demon."},{"id":"virgin","name":"Virgin","set":"TB","team":"townsfolk","firstNight":false,"otherNight":false,"reminders":["Used"],"setup":false,"ability":"The first time you are nominated, if the nominator is a Townsfolk, they are executed immediately."},{"id":"butler","name":"Butler","set":"TB","team":"outsider","firstNight":true,"otherNight":true,"reminders":["Master"],"setup":false,"ability":"Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too."},{"id":"drunk","name":"Drunk","set":"TB","team":"outsider","firstNight":false,"otherNight":false,"reminders":["Drunk"],"setup":true,"ability":"You do not know you are the Drunk. You think you are a Townsfolk, but your ability malfunctions."},{"id":"recluse","name":"Recluse","set":"TB","team":"outsider","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"ability":"You might register as evil and as a Minion or Demon, even if dead."},{"id":"saint","name":"Saint","set":"TB","team":"outsider","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"ability":"If you die by execution, your team loses."},{"id":"baron","name":"Baron","set":"TB","team":"minion","firstNight":false,"otherNight":false,"reminders":[],"setup":true,"ability":"There are extra Outsiders in play. [+2 Outsiders]"},{"id":"poisoner","name":"Poisoner","set":"TB","team":"minion","firstNight":true,"otherNight":true,"reminders":["Poisoned"],"setup":false,"ability":"Each night, choose a player: their ability malfunctions tonight and tomorrow day."},{"id":"spy","name":"Spy","set":"TB","team":"minion","firstNight":true,"otherNight":true,"reminders":[],"setup":false,"ability":"Each night, you see the Grimoire. You might register as good and as a Townsfolk or Outsider, even if dead."},{"id":"scarletwoman","name":"Scarlet Woman","set":"TB","team":"minion","firstNight":false,"otherNight":true,"reminders":["Demon"],"setup":false,"ability":"If there are 5 or more players alive (Travellers don\'t count) and the Demon dies, you become the Demon."},{"id":"imp","name":"Imp","set":"TB","team":"demon","firstNight":false,"otherNight":true,"reminders":["Die"],"setup":false,"ability":"Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp."},{"id":"grandmother","set":"BMR","firstNight":true,"otherNight":true,"reminders":["Grandchild"],"setup":false,"name":"Grandmother","team":"townsfolk","ability":"You start knowing a good player & character. If the Demon kills them, you die too."},{"id":"sailor","set":"BMR","firstNight":true,"otherNight":true,"reminders":["Drunk"],"setup":false,"name":"Sailor","team":"townsfolk","ability":"Each night, choose a player: either you or they are drunk until dusk. You can not die."},{"id":"chambermaid","set":"BMR","firstNight":true,"otherNight":true,"reminders":[],"setup":false,"name":"Chambermaid","team":"townsfolk","ability":"Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability."},{"id":"exorcist","set":"BMR","firstNight":false,"otherNight":true,"reminders":["Chosen"],"setup":false,"name":"Exorcist","team":"townsfolk","ability":"Each night*, choose a player (not the same as last night): the Demon, if chosen, learns who you are & does not act tonight."},{"id":"innkeeper","set":"BMR","firstNight":false,"otherNight":true,"reminders":["Protected","Drunk"],"setup":false,"name":"Innkeeper","team":"townsfolk","ability":"Each night*, choose 2 players: they cannot die tonight, but 1 is drunk until dusk."},{"id":"gambler","set":"BMR","firstNight":false,"otherNight":true,"reminders":["Die"],"setup":false,"name":"Gambler","team":"townsfolk","ability":"Each night*, choose a player & guess their character: if you guess wrong, you die."},{"id":"gossip","set":"BMR","firstNight":false,"otherNight":true,"reminders":["Die"],"setup":false,"name":"Gossip","team":"townsfolk","ability":"Each day, you may make a public statement. Tonight, if it was true, a player dies."},{"id":"courtier","set":"BMR","firstNight":true,"otherNight":true,"reminders":["Drunk 1","Drunk 2","Drunk 3","Used"],"setup":false,"name":"Courtier","team":"townsfolk","ability":"Once per game, at night, choose a character: they are drunk for 3 nights & 3 days."},{"id":"professor","set":"BMR","firstNight":false,"otherNight":true,"reminders":["Alive","Used"],"setup":false,"name":"Professor","team":"townsfolk","ability":"Once per game, at night*, choose a dead player. If they are a Townsfolk, they are resurrected."},{"id":"minstrel","set":"BMR","firstNight":false,"otherNight":true,"reminders":["Everyone drunk"],"setup":false,"name":"Minstrel","team":"townsfolk","ability":"If a Minion died today, all other players (except Travelers) are drunk all night, until dusk."},{"id":"tealady","set":"BMR","firstNight":false,"otherNight":false,"reminders":["Protected"],"setup":false,"name":"Tea Lady","team":"townsfolk","ability":"If both your alive neighbors are good, they can not die."},{"id":"pacifist","set":"BMR","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"name":"Pacifist","team":"townsfolk","ability":"Executed good players might not die."},{"id":"fool","set":"BMR","firstNight":false,"otherNight":false,"reminders":["Used"],"setup":false,"name":"Fool","team":"townsfolk","ability":"The first time you die, you don\'t."},{"id":"tinker","set":"BMR","firstNight":false,"otherNight":true,"reminders":["Die"],"setup":false,"name":"Tinker","team":"outsider","ability":"You might die at any time."},{"id":"moonchild","set":"BMR","firstNight":false,"otherNight":true,"reminders":["Die"],"setup":false,"name":"Moonchild","team":"outsider","ability":"When you learn that you died, choose 1 alive player: if good, they die tonight."},{"id":"goon","set":"BMR","firstNight":true,"otherNight":true,"reminders":["Drunk"],"setup":false,"name":"Goon","team":"outsider","ability":"Each night, the 1st player to choose you with their ability is drunk until dusk. You become their alignment."},{"id":"lunatic","set":"BMR","firstNight":true,"otherNight":true,"reminders":["Attack 1","Attack 2","Attack 3","Decoy"],"setup":false,"name":"Lunatic","team":"outsider","ability":"You think you are a Demon, but your abilities malfunction. The Demon knows who you are & who you attack."},{"id":"godfather","set":"BMR","firstNight":true,"otherNight":true,"reminders":["Died today","Die"],"setup":true,"name":"Godfather","team":"minion","ability":"You start knowing which Outsiders are in-play. If 1 died today, choose a player tonight: they die. [-1 or +1 Outsider]"},{"id":"devilsadvocate","set":"BMR","firstNight":true,"otherNight":true,"reminders":["Survives execution"],"setup":false,"name":"Devils Advocate","team":"minion","ability":"Each night, choose a living player (not the same as last night): if executed tomorrow, they do not die."},{"id":"assassin","set":"BMR","firstNight":false,"otherNight":true,"reminders":["Die","Used"],"setup":false,"name":"Assassin","team":"minion","ability":"Once per game, at night*, choose a player: they die, even if for some reason they could not."},{"id":"mastermind","set":"BMR","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"name":"Mastermind","team":"minion","ability":"If the Demon dies by execution, play for 1 more day. If a player is then executed, their team loses."},{"id":"po","set":"BMR","firstNight":false,"otherNight":true,"reminders":["Die 1","Die 2","Die 3","Attack x3"],"setup":false,"name":"Po","team":"demon","ability":"Each night*, you may choose a player: they die. If you chose no-one last night, choose 3 players tonight."},{"id":"zombuul","set":"BMR","firstNight":false,"otherNight":true,"reminders":["No death today","Die"],"setup":false,"name":"Zombuul","team":"demon","ability":"Each night*, if no-one died today, choose a player: they die. The 1st time you die, you live but register as dead."},{"id":"pukka","set":"BMR","firstNight":true,"otherNight":true,"reminders":["Poisoned","Die"],"setup":false,"name":"Pukka","team":"demon","ability":"Each night, choose a player: they are poisoned until tomorrow night, then die. You act on the 1st night."},{"id":"shabaloth","set":"BMR","firstNight":false,"otherNight":true,"reminders":["Die 1","Die 2","Alive"],"setup":false,"name":"Shabaloth","team":"demon","ability":"Each night*, choose 2 players: they die. A dead player you chose last night might be regurgitated."},{"id":"clockmaker","set":"SNV","firstNight":true,"otherNight":false,"reminders":[],"setup":false,"name":"Clockmaker","team":"townsfolk","ability":"You start knowing how many steps from the Demon to its nearest Minion."},{"id":"dreamer","set":"SNV","firstNight":true,"otherNight":true,"reminders":[],"setup":false,"name":"Dreamer","team":"townsfolk","ability":"Each night, choose a player (not yourself): you learn 1 good & 1 evil character, 1 of which is correct."},{"id":"snakecharmer","set":"SNV","firstNight":true,"otherNight":true,"reminders":["Poisoned"],"setup":false,"name":"Snake Charmer","team":"townsfolk","ability":"Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned."},{"id":"mathematician","set":"SNV","firstNight":true,"otherNight":true,"reminders":["Abnormal effect"],"setup":false,"name":"Mathematician","team":"townsfolk","ability":"Each night, you learn how many players\' abilities worked abnormally (since dawn) due to another character\'s ability."},{"id":"flowergirl","set":"SNV","firstNight":false,"otherNight":true,"reminders":["Demon did vote","Demon did not vote"],"setup":false,"name":"Flowergirl","team":"townsfolk","ability":"Each night*, you learn if the Demon voted today."},{"id":"towncrier","set":"SNV","firstNight":false,"otherNight":true,"reminders":["No Minion nominated","Minion nominated"],"setup":false,"name":"Town Crier","team":"townsfolk","ability":"Each night*, you learn if a Minion nominated today."},{"id":"oracle","set":"SNV","firstNight":false,"otherNight":true,"reminders":[],"setup":false,"name":"Oracle","team":"townsfolk","ability":"Each night*, you learn how many dead players are evil."},{"id":"savant","set":"SNV","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"name":"Savant","team":"townsfolk","ability":"Each day, you may visit the Storyteller to learn 2 things in private: 1 is true & 1 is false."},{"id":"seamstress","set":"SNV","firstNight":true,"otherNight":true,"reminders":["Used"],"setup":false,"name":"Seamstress","team":"townsfolk","ability":"Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment."},{"id":"philosopher","set":"SNV","firstNight":true,"otherNight":true,"reminders":["Used","Drunk"],"setup":false,"name":"Philosopher","team":"townsfolk","ability":"Once per game, at night, choose a good character: become them. If you duplicate an in-play character, they are drunk."},{"id":"artist","set":"SNV","firstNight":false,"otherNight":false,"reminders":["Used"],"setup":false,"name":"Artist","team":"townsfolk","ability":"Once per game, during the day, privately ask the Storyteller any yes/no question."},{"id":"juggler","set":"SNV","firstNight":false,"otherNight":true,"reminders":["Correct"],"setup":false,"name":"Juggler","team":"townsfolk","ability":"On your 1st day, publicly guess up to 5 player\'s characters. That night, you learn how many you got correct."},{"id":"sage","set":"SNV","firstNight":false,"otherNight":true,"reminders":[],"setup":false,"name":"Sage","team":"townsfolk","ability":"If the Demon kills you, you learn that it is 1 of 2 players."},{"id":"mutant","set":"SNV","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"name":"Mutant","team":"outsider","ability":"If you are \\"mad\\" about being an Outsider, you might be executed."},{"id":"sweetheart","set":"SNV","firstNight":false,"otherNight":true,"reminders":["Drunk"],"setup":false,"name":"Sweetheart","team":"outsider","ability":"If you die, 1 player is drunk from now on."},{"id":"barber","set":"SNV","firstNight":false,"otherNight":true,"reminders":["Swap"],"setup":false,"name":"Barber","team":"outsider","ability":"If you die, tonight the Demon may choose 2 players to swap characters."},{"id":"klutz","set":"SNV","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"name":"Klutz","team":"outsider","ability":"When you learn that you died, publicly choose 1 alive good player: if they are evil, your team loses."},{"id":"eviltwin","set":"SNV","firstNight":true,"otherNight":false,"reminders":["Twin"],"setup":false,"name":"Evil Twin","team":"minion","ability":"You & an opposing player know each other. If the good player is executed, evil wins. Good can\'t win if you both live."},{"id":"witch","set":"SNV","firstNight":true,"otherNight":true,"reminders":["Cursed"],"setup":false,"name":"Witch","team":"minion","ability":"Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability."},{"id":"cerenovus","set":"SNV","firstNight":true,"otherNight":true,"reminders":["Mad"],"setup":false,"name":"Cerenovus","team":"minion","ability":"Each night, choose a player & a good character: they are \\"mad\\" they are this character tomorrow, or might be executed."},{"id":"pithag","set":"SNV","firstNight":false,"otherNight":true,"reminders":[],"setup":false,"name":"Pit Hag","team":"minion","ability":"Each night*, choose a player & a character they become (if not-in-play). If a Demon is made, deaths tonight are arbitrary."},{"id":"fanggu","set":"SNV","firstNight":false,"otherNight":true,"reminders":["Die"],"setup":true,"name":"Fang Gu","team":"demon","ability":"Each night*, choose a player: they die. The 1st Outsider chosen becomes an evil Fang Gu & you die instead. [+1 Outsider]"},{"id":"vigormortis","set":"SNV","firstNight":false,"otherNight":true,"reminders":["Die","Poisoned","Ability active"],"setup":true,"name":"Vigormortis","team":"demon","ability":"Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbor. [-1 Outsider]."},{"id":"nodashii","set":"SNV","firstNight":false,"otherNight":true,"reminders":["Die","Poisoned"],"setup":false,"name":"No Dashii","team":"demon","ability":"Each night*, choose a player: they die. Your 2 Townsfolk neighbors are poisoned."},{"id":"vortox","set":"SNV","firstNight":false,"otherNight":true,"reminders":["Die"],"setup":false,"name":"Vortox","team":"demon","ability":"Each night*, choose a player: they die. Good abilities yield false information. Each day, if no-one was executed, evil wins."},{"id":"scapegoat","set":"TB","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"name":"Scapegoat","team":"traveler","ability":"If a player of your alignment is executed, you might be executed instead."},{"id":"gunslinger","set":"TB","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"name":"Gunslinger","team":"traveler","ability":"Each day, after the 1st vote has been tallied, you may choose a player that voted: they die."},{"id":"beggar","set":"TB","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"name":"Beggar","team":"traveler","ability":"You must use a vote token to vote. Dead players may choose to give you theirs. If so, you learn their alignment."},{"id":"bureaucrat","set":"TB","firstNight":true,"otherNight":true,"reminders":["Vote x3"],"setup":false,"name":"Bureaucrat","team":"traveler","ability":"Each night, choose a player (not yourself): their vote counts as 3 votes tomorrow."},{"id":"thief","set":"TB","firstNight":true,"otherNight":true,"reminders":["Negative vote"],"setup":false,"name":"Thief","team":"traveler","ability":"Each night, choose a player (not yourself): their vote counts negatively tomorrow."},{"id":"apprentice","set":"BMR","firstNight":true,"otherNight":false,"reminders":["Apprentice ability"],"setup":false,"name":"Apprentice","team":"traveler","ability":"On your 1st night, you gain a Townsfolk ability (if good), or a Minion ability (if evil)."},{"id":"matron","set":"BMR","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"name":"Matron","team":"traveler","ability":"Each day, you may choose up to 3 pairs of players to swap seats. Players may not leave their seats to talk in private."},{"id":"voudon","set":"BMR","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"name":"Voudon","team":"traveler","ability":"Only you & the dead can vote. They don\'t need a vote token to do so. A 50% majority is not required."},{"id":"judge","set":"BMR","firstNight":false,"otherNight":false,"reminders":["Used"],"setup":false,"name":"Judge","team":"traveler","ability":"Once per game, if another player nominated, you may choose to force the current execution to pass or fail."},{"id":"bishop","set":"BMR","firstNight":false,"otherNight":false,"reminders":["Nominate Good","Nominate Evil"],"setup":false,"name":"Bishop","team":"traveler","ability":"Only the Storyteller can nominate. At least 1 opposite player must be nominated each day."},{"id":"butcher","set":"SNV","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"name":"Butcher","team":"traveler","ability":"Each day, after the 1st execution, you nominate again."},{"id":"bonecollector","set":"SNV","firstNight":false,"otherNight":true,"reminders":["Used","Ability active"],"setup":false,"name":"Bone Collector","team":"traveler","ability":"Once per game, at night, choose a dead player: they regain their ability until dusk."},{"id":"harlot","set":"SNV","firstNight":false,"otherNight":true,"reminders":["Die"],"setup":false,"name":"Harlot","team":"traveler","ability":"Each night*, choose a living player: if they agree, you learn their character, but you both might die."},{"id":"barista","set":"SNV","firstNight":true,"otherNight":true,"reminders":["Ability x2","Healthy & Sober"],"setup":false,"name":"Barista","team":"traveler","ability":"Each night, until dusk, 1) a player becomes sober, healthy & gets true info, or 2) their ability works twice. They learn which."},{"id":"deviant","set":"SNV","firstNight":false,"otherNight":false,"reminders":[],"setup":false,"name":"Deviant","team":"traveler","ability":"If you were funny today, you can not be exiled."}]')},d4b2:function(e,t,i){}});
//# sourceMappingURL=app.d427fa24.js.map