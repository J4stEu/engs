(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c7c":function(t,e,n){},"11f2":function(t,e,n){},"325c":function(t,e,n){"use strict";var s=n("e8fe"),a=n.n(s);a.a},3285:function(t,e,n){},"35a8":function(t,e,n){},"4e22":function(t,e,n){"use strict";var s=n("5efc"),a=n.n(s);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Preloader"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"preloader"},[n("div",{staticClass:"loader"},[n("ul",[n("li"),n("li"),n("li")]),n("div",{staticClass:"cup"},[n("span")])])])])},r=[],c={name:"preloader",data:function(){return{loading:!0}},mounted:function(){this.$nextTick((function(){var t=this;setTimeout((function(){t.loading=!1}),1e3)}))}},l=c,u=(n("c634"),n("2877")),d=Object(u["a"])(l,o,r,!1,null,"429f9990",null),p=d.exports,v={name:"App",data:function(){return{}},mounted:function(){},components:{Preloader:p}},m=v,g=(n("5c0b"),Object(u["a"])(m,a,i,!1,null,null,null)),_=g.exports,f=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPg_wrapper"},[n("section",{attrs:{id:"MainPg_section"}},[n("div",{staticClass:"MainBar"},[n("div",{staticClass:"MainBar_wrapper"},[n("div",{staticClass:"logoCoffee"}),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.logoAccent,expression:"logoAccent"}],staticClass:"logo"})]),n("MainPgNav",{attrs:{onMenu:t.onMenu},on:{onMenuComp:function(e){t.onMenu=!t.onMenu},logoAccentComp:function(e){t.logoAccent=!t.logoAccent}}}),n("div",{staticClass:"addition"},[n("a",{attrs:{href:t.creator.link,target:"blank"}},[t._v(t._s(t.creator.copyright))]),t.$store.getters.engTranslate?n("div",{staticClass:"lang",on:{click:function(e){return t.$store.dispatch("changeLang")}}},[t._v("ru")]):n("div",{staticClass:"lang",on:{click:function(e){return t.$store.dispatch("changeLang")}}},[t._v("en")])])],1)]),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.onMenu,expression:"onMenu"}],staticClass:"MainBarMenu_sign"})])],1),n("Contacts")],1)},b=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[t.$store.getters.engTranslate?n("ul",t._l(t.menu,(function(e){return n("li",{key:e.title,class:{menuFocus:t.onMenu&!e.onAb},on:{mouseenter:function(n){e.onAb=t.overMenuItem(e.onAb)},mouseleave:function(n){e.onAb=t.overMenuItem(e.onAb)},click:e.action}},[e.path?n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.engTitle.toUpperCase()))]):n("p",[t._v(t._s(e.engTitle.toUpperCase()))])],1)})),0):n("ul",t._l(t.menu,(function(e){return n("li",{key:e.title,class:{menuFocus:t.onMenu&!e.onAb},on:{mouseenter:function(n){e.onAb=t.overMenuItem(e.onAb)},mouseleave:function(n){e.onAb=t.overMenuItem(e.onAb)},click:e.action}},[e.path?n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.title.toUpperCase()))]):n("p",[t._v(t._s(e.title.toUpperCase()))])],1)})),0),this.$store.getters.engTranslate?n("ul",{staticClass:"menuSign"},t._l(t.menu,(function(e){return n("li",{key:e.abTitle,class:{menuSignShow:e.onAb}},[t._v(t._s(e.engAbTitle))])})),0):n("ul",{staticClass:"menuSign"},t._l(t.menu,(function(e){return n("li",{key:e.abTitle,class:{menuSignShow:e.onAb}},[t._v(t._s(e.abTitle))])})),0)])},C=[],$=n("f13c"),T={data:function(){return{menu:[{title:"о нас",engTitle:"about us",abTitle:"вся необходимая информация о нас",engAbTitle:"some information about us",action:!1,path:"/about",onAb:!1},{title:"галерея",engTitle:"gallery",abTitle:"посмотрите на нас вживую",engAbTitle:"look at us live",action:!1,path:"/gallery",onAb:!1},{title:"новости",engTitle:"news",abTitle:"вся необходимая информация для вас",engAbTitle:"some information for you",action:!1,path:"/news",onAb:!1},{title:"контакты",engTitle:"contacts",abTitle:"свяжитесь с нами",engAbTitle:"contact us",action:!1,path:!1,onAb:!1}]}},props:["onMenu"],methods:{overMenuItem:function(t){return this.$emit("logoAccentComp"),window.innerWidth>1e3&&window.innerHeight>500&&(1024!==window.innerWidth||1366!==window.innerHeight)?(this.$emit("onMenuComp"),!t):t}},mounted:function(){this.$nextTick((function(){this.menu[0].action=function(){return!0},this.menu[1].action=function(){return!0},this.menu[2].action=function(){return!0},this.menu[3].action=function(){var t={easing:"linear"};$.scrollTo("#contacts",500,t)}}))}},P=T,x=(n("4e22"),Object(u["a"])(P,w,C,!1,null,"cf167bc0",null)),A=x.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"contacts"}},[n("div",{directives:[{name:"rellax",rawName:"v-rellax",value:{speed:4},expression:"{\n          speed: 4,\n      }"}],staticClass:"wheel"}),n("div",{directives:[{name:"rellax",rawName:"v-rellax",value:{speed:6},expression:"{\n              speed: 6,\n          }"}],staticClass:"phoneBox"}),n("div",{staticClass:"contactsWrapper"},[n("div",{staticClass:"card"},[n("div",{staticClass:"whiteShape"}),n("ul",t._l(t.contacts,(function(e){return n("li",{key:e.contact},[n("p",{domProps:{innerHTML:t._s(e.svg)}}),n("p",{class:{contactFocus:t.onContact&!e.onThisContact},domProps:{innerHTML:t._s(t.interActive(e.interactive,e.contact,e.interactiveDescr))},on:{mouseenter:function(n){t.onContact=!t.onContact,e.onThisContact=!e.onThisContact},mouseleave:function(n){t.onContact=!t.onContact,e.onThisContact=!e.onThisContact}}})])})),0),n("div",{staticClass:"returnToMain",on:{click:function(e){return t.goToMain()}}},[n("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[n("path",{attrs:{d:"M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"}})])])])])])},S=[],M=n("f13c"),E={data:function(){return{contacts:[{contact:"+7-914-521-92-09",onThisContact:!1,svg:'<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path style="fill: #A57869" d="M16 22.621l-3.521-6.795c-.007.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.082-1.026-3.492-6.817-2.106 1.039c-1.639.855-2.313 2.666-2.289 4.916.075 6.948 6.809 18.071 12.309 18.045.541-.003 1.07-.113 1.58-.346.121-.055 2.102-1.029 2.11-1.033zm-2.5-13.621c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-4.5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/></svg>',interactive:!0,interactiveDescr:"tel"},{contact:"rusnikonov@mail.ru",onThisContact:!1,svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path style="fill: #A57869" d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>',interactive:!0,interactiveDescr:"mailto"},{contact:"г.Чита, ул. Журавлёва, 77",onThisContact:!1,svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path style="fill: #A57869" d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>',interactive:!1,interactiveDescr:!1}],onContact:!1}},methods:{interActive:function(t,e,n){return t?'<a href="'+n+":"+e+'">'+e+"</a>":e},goToMain:function(){var t={easing:"linear"};M.scrollTo("#MainPg_section",500,t)}}},L=E,O=(n("da7c"),Object(u["a"])(L,y,S,!1,null,"caccebca",null)),k=O.exports,N={name:"MainPg",data:function(){return{creator:{copyright:"©J4stEu",link:"https://vk.com/id188091326"},onMenu:!1,logoAccent:!1}},components:{MainPgNav:A,Contacts:k}},I=N,j=(n("b138"),Object(u["a"])(I,h,b,!1,null,"23af6c72",null)),z=j.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"aboutUs"}},[s("router-link",{staticClass:"backToMain",attrs:{to:"/"}},[s("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[s("path",{attrs:{d:"M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"}})])]),s("div",{staticClass:"info"},[s("div",{staticClass:"infoWrapper"},[s("div",{staticClass:"aboutInfo"},[s("div",{staticClass:"about_1 about"},[s("div",{staticClass:"aboutTitle"},[t._v(" Основное ")]),s("p",{staticClass:"about_section_1_main_text"},[t._v("В English School преподаватели применяют индивидуальный подход при изучении английского языка. С нами разговорный английский станет вашим вторым языком! Вы сможете легко выражаться и поддерживать разговор с носителями языка. Школа английского English School также научит вас выражать свои мысли письменно,читать литературу на иностранном языке. Изучение иностранного языка станет для вас интересным занятием, приносящим удовольствие, а вместе с ним и знания.")]),s("p",{staticClass:"about_section_1_more"},[t._v("Интересными плюсами обучения в English School можно назвать то, что при изучении английского языка мы:")]),t._m(0),s("p",{staticClass:"about_section_1_main_text"},[t._v("Благодаря этому изучение английскому языку становится интересным и познавательным и самое главное-способствует получению новых знаний! Обучение иностранному проводится по современным европейским методикам, что позволяет в кротчайшие сроки добиться высоких результатов.")]),s("p",{staticClass:"about_section_1_more"},[t._v("Английская школа это:")]),t._m(1),s("p",{staticClass:"about_section_1_main_text"},[t._v(' English School-это популярные европейские методики обучения, которые позволят забыть о "языковом барьере" и начать свободно говорить, используя даже небольшой словарный запас. Обучение английскому языку базируется на проверенных временем программах и индивидуальном подходе к процессу обучения. ')]),s("p",{staticClass:"about_section_1_more"},[t._v(" English School-ваше преимущество и успех в будущем, гарантия, что вы изучите разговорный англиский язык! ")]),s("img",{attrs:{src:n("718e"),alt:"aboutCover"}})]),t._m(2),t._m(3),t._m(4)]),s("div",{staticClass:"filesInfo"},[s("div",{staticClass:"filesWrapper"},[s("div",{staticClass:"filesTitle"},[t._v(" Дополнительный материал ")]),s("div",{staticClass:"files"},[s("div",{staticClass:"filesList"},t._l(t.files,(function(e){return s("div",{key:e.id},[s("p",{staticClass:"fileTitle"},[t._v(t._s(e.title))]),s("a",{attrs:{href:e.src,download:""}},[s("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[s("path",{attrs:{d:"M11.5 8h1v7.826l2.5-3.076.753.665-3.753 4.585-3.737-4.559.737-.677 2.5 3.064v-7.828zm7 12h-13c-2.481 0-4.5-2.019-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.79c.185-3.447 3.031-6.146 6.48-6.146 3.449 0 6.295 2.699 6.479 6.146l.043.79.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.481-2.019 4.5-4.5 4.5m.979-9.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408"}})])])])})),0)])])])])])],1)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"about_section_1_more_pluses"},[n("li",[t._v("обсуждаем на уроках-туризмы,новости, утончённый английский юмор и реалии англо-говорящих стран!")]),n("li",[t._v("смотрим классические и страноведческие фильмы!")]),n("li",[t._v("поём известные на весь мир песни!")]),n("li",[t._v("читаем литературу англо-говорящих стран!")]),n("li",[t._v("знакомимся с творчеством и биографией знаменитых людей!")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"about_section_1_more_pluses"},[n("li",[t._v("только опытные сотрудники и преподаватели со стажем;")]),n("li",[t._v("владение учителями в совершенстве иностранным языком, что позволяет сделать работу по изучению языков наиболее качественной;")]),n("li",[t._v("максимально комфортные условия,которые помогают студентам легко и быстро пройти обучение английскому языку. Мы добиваемся этого благадоря формированию небольших групп и подаче материала в доступной каждому форме. Занятия в English School не похожи на скучную зарубежку.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about_2 about"},[n("div",{staticClass:"aboutTitle"},[t._v(" Обучение ")]),n("p",{staticClass:"about_section_1_main_text"},[t._v(" Английский язык является одним из самых популярных на сегодняшний день. Это обусловлено тем,что очень многие страны используют его как второй государственный язык. Практически каждый пятый житель нашей планеты знает его на уровне общения. Поэтому азов,полученных за школьной партой много лет тому назад,не всегда достаточно, чтобы найти общий язык на работе или во время путешествий, что сказывается на качестве выполняемой работы и внутренней неуверенности во время отдыха. ")]),n("p",{staticClass:"about_section_1_main_text"},[t._v(" В English School вы сможете выбрать тот курс, который максимально удовлетворит ваши желания и действительно подойдёт вам по всем критериям выбора. ")]),n("p",{staticClass:"about_section_1_more",staticStyle:{"text-align":"center","text-indent":"0"}},[t._v("Цена+качество=отличный результат")]),n("p",{staticClass:"about_section_1_more redAccent noLeftSpace"},[t._v("Starter (90 ак.часов)")]),n("p",{staticClass:"about_section_1_main_text"},[t._v(' Базовый уровень. Английский язык, как и любой другой, начинается с изучения алфавита и основных правил построения предложения. Грамматика состоит из простых форм частей речи и простых предложений. Базовый набор необходимых понятий (500-1000 словосочетаний и слов) позволит объясняться на бытовом уровне и понимать стандартный набор фраз. Обучение проводится в форме диалога и живого общения, что помогает студентам снять "языковой барьер" с первого занятия. ')]),n("p",{staticClass:"about_section_1_more redAccent noLeftSpace"},[t._v("Elementary (102.ак часа)")]),n("p",{staticClass:"about_section_1_main_text"},[t._v(" Грамматический уровень. Продолжается изучение лексического и грамматического строя английского языка. Благодаря дельному изучению и практическому использованию сложных грамматических структур, студенты учатся свободно говорить, читать и понимать говорящего на английском. На данном этапе обучения основной акцент делается на изучении основ грамматики, развития словарей лексики (активного и пассивного). Структура занятий построена на основе системы EFL-English as a Foreign Language, разработанной Британским советом и кафедрой английского языка Гарвардского Университета (США) для преподавания английского языка для иностранцев в течение короткого периода времени. Преимуществом данного метода является индивидуальный подход с учётом структуры родного языка студентов. После обучения на данном уровне, выпускники свободно переходят на другой язык и без проблем говорят с иностранцами. ")]),n("p",{staticClass:"about_section_1_more redAccent noLeftSpace"},[t._v("Pre-Intermediate-Intermediate (102 ак.часа)")]),n("p",{staticClass:"about_section_1_main_text"},[t._v(' "Начальный средний" и "средний" уровни нацелены на то, чтобы повысить речевую подготовку студента и уровень владения речевыми штампами и готовыми оборотами речи, что помогает понимать живую речь. Обучение иностранному языку-это обязательное использование в речи устойчивых выражений, клише и идиом (не менее 500-600 фраз). Важно отметить роль пассивного словарного запаса, который обогащает активный и облегчает процесс изучения языка. На данном этапе всё внимание уделяется активному общению с применением изученных форм грамматики,фонетики и лексики. ')]),n("p",{staticClass:"about_section_1_more redAccent noLeftSpace"},[t._v("Upper-Intermediate - Advanced")]),n("p",{staticClass:"about_section_1_main_text"},[t._v(' "Выше среднего" и "продвинутый" уровни предназначены для студентов, которые стремятся максимально повысить свою речевую готовность и правильно изъясняться на английском языке. На этих двух этапах студентами совершенствуется разговорная и деловая речь, свободно и эффективно используется фразеологизмы и крылатые выражения, сленг (разговорные американский и британский варианты), крылатые и устойчивые выражения. В программу курса включены сравнительная характеристика американского и британского произношений. Практические занятия включают использование современных видео- и аудиоматериалов. Курс подойдёт для тех, кто собирается говорить на английском языке или переехать за границу. ')]),n("p",{staticClass:"about_section_1_more"},[t._v(" Таким образом, вы можете начать обучение с любого уровня! ")]),n("p",{staticClass:"about_section_1_more"},[t._v(" Для определения уровня ваших начальных знаний рекомендуем пройти тестирование. ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about_3 about"},[n("div",{staticClass:"aboutTitle"},[t._v(" Методика обучения ")]),n("p",{staticClass:"about_section_1_main_text"},[t._v(' Не секрет, что во всех сферах профессиональной деятельности огромным "плюсом" считается значение иностранных языков. Стоит заняться их изучением сегодня,чтобы завтра они стали вашим "козырем" перед работодателем и коллегами. ')]),n("p",{staticClass:"about_section_1_main_text"},[t._v(" Существует множество технологий изучения иностранных языков, но лучшей считается коммуникативная методика, которая акцентирует внимание на изучении речи (говорение) и слуховом восприятии, так как именно это является основной составляющей продуктивного общения. ")]),n("p",{staticClass:"about_section_1_main_text"},[t._v(" В English School успешно практикуются все формы обучения-интерактивное обучение в игровой форме, групповые дискуссии.Это позволяет сделать каждое занятие ярким, интересным и запоминающимся, что значительно облегчает изучение нового языка. Обучение иностранным языкам проводится по пяти аспектам владения языковой речи, чтение, письмо, грамматика.Таким образом, обучаясь в English School вы приобретёте, практические навыки использования иностранного языка, а отличная коммуникативная методика наряду с опытом преподавания-гарантия того, что вы сможете выучить иностранный язык быстро, качественно и с удовольствием. ")]),n("p",{staticClass:"about_section_1_more redAccent noLeftSpace"},[t._v("Realize your communication!")]),n("p",{staticClass:"about_section_1_more redAccent noLeftSpace"},[t._v("We teach to communicate!")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about_4 about"},[n("div",{staticClass:"aboutTitle"},[t._v(" Наша уникальность ")]),n("p",{staticClass:"about_section_1_main_text"},[t._v(" Enlish School-это не просто образовательный центр. Это возможность изучать иностранные языки в комфортной атмосфере под руководством профессиональных педагогов. ")]),n("p",{staticClass:"about_section_1_main_text"},[t._v(" Мы предлагаем несколько программ обучения! Вы сможете подобрать то, что подходит именно вам. ")]),n("p",{staticClass:"about_section_1_more"},[t._v("Становясь студентом English School, вы получаете:")]),n("ul",{staticClass:"about_section_1_more_pluses"},[n("li",[t._v("индивидуальный подход к обучению, учитывающий возрастные особенности и профессиональные интересы каждого студента;")]),n("li",[t._v("непринуждённую атмосферу в группах, что помогает легче и быстрее адаптироваться к новому языку. Программа курсов не только даёт прочную базу знания иностранного языка, но и расширяет кругозор учащихся;")]),n("li",[t._v("подборку художественных, документальных и образовательных фильмов на иностранных языках в нашей видеотеке;")]),n("li",[t._v("подборку современных учебных материалов для изучения выбранного языка, которая остаётся у вас навсегда,а не будет предаваться от студента к студенту;")]),n("li",[t._v("возможность изучать язык под руководством преподавателей-профессионалов;")]),n("li",[t._v("аудитории, специально оборудованные для занятий в оптимальной форме обучения;")]),n("li",[t._v("психологические тренинги, которые нацелены на адаптацию к новой языковой среде и комфортное общение независимо от того, какой у вас словарный запас;")]),n("li",[t._v("подготовку для студентов всех возрастов к сдаче любых экзаменов на получение международных сертификатов.")])])])}],B={data:function(){return{}},computed:{files:function(){return this.$store.getters.files}},methods:{},created:function(){this.$store.dispatch("initFiles")}},D=B,R=(n("a868"),Object(u["a"])(D,W,F,!1,null,"486e5c5c",null)),G=R.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"gallery"}},[n("router-link",{staticClass:"backToMain",attrs:{to:"/"}},[n("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[n("path",{attrs:{d:"M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"}})])]),n("div",{staticClass:"galleryWrapper"},t._l(t.imgs,(function(e){return n("div",{key:e.id,staticClass:"galleryImg",class:"img"+e.id,style:{backgroundImage:"url('"+e.preview_src+"')"},on:{click:function(n){return t.openImg(e)}}},[n("div",{staticClass:"interactiveShadow"},[n("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[n("path",{attrs:{d:"M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5zm-4.5 8h4v-4h1v4h4v1h-4v4h-1v-4h-4v-1z"}})])])])})),0),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.imgOpened,expression:"imgOpened"}],staticClass:"imageModal"},[n("div",{staticClass:"imageShadow",on:{click:function(e){t.imgOpened=!t.imgOpened}}}),n("img",{staticClass:"openedImage",attrs:{src:!!t.imgOpened&&t.imgOpened.src,alt:""}}),n("div",{staticClass:"moveLeft moveImage",on:{click:function(e){t.imgs[t.imgOpened.id-2]&&t.openImg(t.imgs[t.imgOpened.id-2])}}},[n("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[n("path",{attrs:{d:"M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"}})])]),n("div",{staticClass:"moveRight moveImage",on:{click:function(e){t.imgs[t.imgOpened.id]&&t.openImg(t.imgs[t.imgOpened.id])}}},[n("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[n("path",{attrs:{d:"M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"}})])])])])],1)},Y=[],U={data:function(){return{imgOpened:!1}},computed:{imgs:function(){return this.$store.getters.imgs}},methods:{openImg:function(t){this.imgOpened=t},closeImg:function(){this.imgOpened=!1},btnPlace:function(){document.querySelector(".imageModal img").onload=function(){var t=0;t=window.innerWidth>900?60:30,document.querySelector(".moveRight").style.right=(window.innerWidth-document.querySelector(".imageModal img").width)/2-t+"px",document.querySelector(".moveLeft").style.left=(window.innerWidth-document.querySelector(".imageModal img").width)/2-t+"px"}}},watch:{imgOpened:"btnPlace"},created:function(){this.$store.dispatch("initGallery")}},q=U,J=(n("d121"),Object(u["a"])(q,H,Y,!1,null,"6fb4c350",null)),V=J.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"news"}},[n("router-link",{staticClass:"backToMain",attrs:{to:"/"}},[n("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[n("path",{attrs:{d:"M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"}})])]),n("div",{staticClass:"postsWrapper"},[t._l(t.news,(function(e){return n("router-link",{key:e.id,attrs:{to:{name:"Post",params:{id:e.id}}}},[n("p",{staticClass:"title"},[t._v(t._s(e.title))]),n("p",{staticClass:"date"},[t._v(t._s(t._f("dateFilter")(e.created)))]),t.$store.getters.engTranslate?n("p",{staticClass:"actionAccent"},[t._v("Keep reading...")]):n("p",{staticClass:"actionAccent"},[t._v("Подробнее...")]),n("p",{staticClass:"someInfo",domProps:{innerHTML:t._s(e.text)}})])})),n("div",{staticClass:"loadMore",on:{click:function(e){t.$store.commit("NEWS_LOADING"),t.$store.dispatch("initMorePosts")}}},[n("div",{staticClass:"preloader"},[n("div",{staticClass:"loader"},[n("ul",[n("li",{class:{moreLoading:t.$store.getters.moreLoading}}),n("li",{class:{moreLoading:t.$store.getters.moreLoading}}),n("li",{class:{moreLoading:t.$store.getters.moreLoading}})]),n("div",{staticClass:"cup",class:{cupInteractive:!t.loadAvailable}},[n("span")])])]),t.$store.getters.loadAvailable?n("transition",{attrs:{name:"fade"}},[t.$store.getters.engTranslate?n("p",{directives:[{name:"show",rawName:"v-show",value:!t.$store.getters.moreLoading,expression:"!$store.getters.moreLoading"}]},[t._v("Load more...")]):n("p",{directives:[{name:"show",rawName:"v-show",value:!t.$store.getters.moreLoading,expression:"!$store.getters.moreLoading"}]},[t._v("Загрузить ещё...")])]):t._e(),t.$store.getters.loadAvailable?n("transition",{attrs:{name:"fade"}},[t.$store.getters.engTranslate?n("p",{directives:[{name:"show",rawName:"v-show",value:t.$store.getters.moreLoading,expression:"$store.getters.moreLoading"}],staticClass:"loading"},[t._v("Loading...")]):n("p",{directives:[{name:"show",rawName:"v-show",value:t.$store.getters.moreLoading,expression:"$store.getters.moreLoading"}],staticClass:"loading"},[t._v("Загрузка...")])]):t._e()],1)],2)],1)},Q=[];n("4de4");s["a"].filter("dateFilter",(function(t){var e=new Date(Date.parse(t));return(e.getDate()>10?e.getDate():"0"+e.getDate())+"."+(e.getMonth()>10?e.getMonth():"0"+e.getMonth())+"."+(e.getFullYear()>10?e.getFullYear():"0"+e.getFullYear())}));var X={data:function(){return{}},computed:{news:function(){return this.$store.getters.news},loadAvailable:function(){return this.$store.getters.loadAvailable}},created:function(){this.$store.dispatch("initNews")}},Z=X,tt=(n("b115"),Object(u["a"])(Z,K,Q,!1,null,"7b7b7a4a",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"post"}},[n("div",{staticClass:"info"},[n("div",{staticClass:"infoWrapper"},[n("div",{staticClass:"postInfo"},[n("p",{staticClass:"title"},[t._v(t._s(this.$store.getters.post.title))]),n("div",{staticClass:"text"},[n("p",{domProps:{innerHTML:t._s("<p>"+t.$store.getters.post.text+"</p>")}}),t.$store.getters.post.img?n("img",{attrs:{src:t.$store.getters.post.img,alt:"postImg"}}):t._e(),n("p",{staticClass:"proverb",domProps:{innerHTML:t._s("Proverb: `"+t.proverb.text+"`")}})])]),n("div",{staticClass:"postAttr"},[n("div",{staticClass:"postAttrWrapper"},[n("div",{staticClass:"mainAttr"},[t.$store.getters.engTranslate?n("p",{staticClass:"date"},[n("u",[t._v("Published:")]),t._v(" "+t._s(t._f("dateFilter")(t.$store.getters.post.created)))]):n("p",{staticClass:"date"},[n("u",[t._v("Опубликовано:")]),t._v(" "+t._s(t._f("dateFilter")(t.$store.getters.post.created)))]),t.$store.getters.engTranslate?n("p",{staticClass:"hashTag"},[n("u",[t._v("Tags:")]),t._v(" post")]):n("p",{staticClass:"hashTag"},[n("u",[t._v("Теги:")]),t._v(" post")])]),n("div",{staticClass:"move"},[n("div",{staticClass:"nextMove"},[n("p",{staticClass:"nextPostTitle"},[t._v(t._s(t.$store.getters.nearbyPost.title))]),t.$store.getters.engTranslate&&this.$route.params.id!=t.$store.getters.lastPost?n("router-link",{staticClass:"nextPostButton",attrs:{to:{name:"Post",params:{id:parseInt(this.$route.params.id)+1}}},nativeOn:{mouseover:function(e){t.$store.dispatch("initNearbyPost",parseInt(t.$route.params.id)+1)}}},[t._v(" Next post ")]):t._e(),t.$store.getters.engTranslate||this.$route.params.id==t.$store.getters.lastPost?t._e():n("router-link",{staticClass:"nextPostButton",attrs:{to:{name:"Post",params:{id:parseInt(this.$route.params.id)+1}}},nativeOn:{mouseover:function(e){t.$store.dispatch("initNearbyPost",parseInt(t.$route.params.id)+1)}}},[t._v(" Следующая запись ")]),t.$store.getters.engTranslate&&1!=this.$route.params.id?n("router-link",{staticClass:"previousePostButton",attrs:{to:{name:"Post",params:{id:parseInt(this.$route.params.id)-1}}},nativeOn:{mouseover:function(e){t.$store.dispatch("initNearbyPost",parseInt(t.$route.params.id)-1)}}},[t._v(" Previouse post ")]):t._e(),t.$store.getters.engTranslate||1==this.$route.params.id?t._e():n("router-link",{staticClass:"previousePostButton",attrs:{to:{name:"Post",params:{id:parseInt(this.$route.params.id)-1}}},nativeOn:{mouseover:function(e){t.$store.dispatch("initNearbyPost",parseInt(t.$route.params.id)-1)}}},[t._v(" Предыдущая запись ")]),t.$store.getters.engTranslate?n("router-link",{attrs:{to:"/news"}},[t._v(" Back ")]):n("router-link",{attrs:{to:"/news"}},[t._v(" Назад ")])],1)])])])])])])},st=[],at={data:function(){return{headerProverb:!1}},methods:{fetchData:function(){0==this.$store.getters.news.length?this.$store.dispatch("initPost",this.$route.params.id):this.$store.getters.news[this.$route.params.id-1]?(this.$store.commit("SET_POST",[this.$store.getters.news[this.$route.params.id-1]]),this.$store.commit("CLEAN_NEARBY_POST"),this.$store.dispatch("countPosts")):this.$store.dispatch("initPost",this.$route.params.id),this.$store.dispatch("initProverbs")}},computed:{proverb:function(){return this.$store.getters.proverb}},created:function(){this.fetchData()},watch:{$route:"fetchData"}},it=at,ot=(n("7983"),Object(u["a"])(it,nt,st,!1,null,"2f59e95a",null)),rt=ot.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"notFound"}},[n("router-link",{staticClass:"backToMain",attrs:{to:"/"}},[n("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[n("path",{attrs:{d:"M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"}})])])],1)},lt=[],ut={},dt=ut,pt=(n("325c"),Object(u["a"])(dt,ct,lt,!1,null,"304da2e5",null)),vt=pt.exports;s["a"].use(f["a"]);var mt=[{path:"/",name:"MainPg",component:z},{path:"/about",name:"AboutUs",component:G},{path:"/gallery",name:"Gallery",component:V},{path:"/news",name:"News",component:et},{path:"/news/post/:id",name:"Post",component:rt},{path:"*",name:"NotFound",component:vt}],gt=new f["a"]({mode:"history",base:"/",routes:mt}),_t=gt,ft=n("bc3a"),ht=n.n(ft),bt=n("a7fe"),wt=n.n(bt),Ct=n("2f62"),$t=n("bc3a").default,Tt={files:[]},Pt={SET_FILES:function(t,e){t.files=e}},xt={initFiles:function(t){var e=t.commit;0==Tt.files.length&&$t.post("/api/get_files").then((function(t){e("SET_FILES",t.data)})).catch((function(t){console.log(t)}))}},At={files:function(t){return t.files}},yt={state:Tt,getters:At,actions:xt,mutations:Pt},St=n("bc3a").default,Mt={imgs:[]},Et={SET_GALLERY:function(t,e){t.imgs=e}},Lt={initGallery:function(t){var e=t.commit;0==Mt.imgs.length&&St.post("/api/gallery").then((function(t){e("SET_GALLERY",t.data)})).catch((function(t){console.log(t)}))}},Ot={imgs:function(t){return t.imgs}},kt={state:Mt,getters:Ot,actions:Lt,mutations:Et},Nt=(n("d3b7"),n("bc3a").default),It={news:[],moreLoading:!1,loadAvailable:!0,post:{id:!1,title:!1,text:!1,created:!1},nearbyPost:{id:!1,title:"...",text:!1,created:!1},lastPost:!1},jt={SET_NEWS:function(t,e){t.news=e},NEWS_LOADING:function(t){t.moreLoading=!t.moreLoadings},LOAD_MORE_NEWS:function(t,e){for(var n=0;n<=e.length-1;n++)t.news.push(e[n])},SET_POST:function(t,e){t.post.id=e[0].id,t.post.title=e[0].title,t.post.text=e[0].text,t.post.img=e[0].img,t.post.created=e[0].created},LAST_POST:function(t,e){t.lastPost=e},NEARBY_POST:function(t,e){t.nearbyPost.id=e[0].id,t.nearbyPost.title=e[0].title,t.nearbyPost.text=e[0].text,t.nearbyPost.created=e[0].created},CLEAN_NEARBY_POST:function(t){t.nearbyPost.id=!1,t.nearbyPost.title="...",t.nearbyPost.text=!1,t.nearbyPost.created=!1}},zt={initNews:function(t){var e=t.commit;0==It.news.length&&Nt.post("/api/news").then((function(t){e("SET_NEWS",t.data)})).catch((function(t){console.log(t)}))},initMorePosts:function(t){var e=t.commit;Nt.post("/api/get_more_news",{postsCounted:It.news.length}).then((function(t){e("LOAD_MORE_NEWS",t.data),t.data.length<5?It.loadAvailable=!1:It.loadAvailable=!0})).catch((function(t){console.log(t)})).finally((function(){return It.moreLoading=!It.moreLoading}))},initPost:function(t,e){var n=t.commit,s=t.dispatch;Nt.post("/api/init_post",{postId:e}).then((function(t){n("SET_POST",t.data)})).catch((function(t){console.log(t)})).finally((function(){s("countPosts")}))},initNearbyPost:function(t,e){var n=t.commit;if(e<1)return!1;Nt.post("/api/init_post",{postId:e}).then((function(t){n("NEARBY_POST",t.data)})).catch((function(t){console.log(t)}))},countPosts:function(t){var e=t.commit;Nt.post("/api/posts_count").then((function(t){e("LAST_POST",t.data)})).catch((function(t){console.log(t)}))}},Wt={news:function(t){return t.news},moreLoading:function(t){return t.moreLoading},loadAvailable:function(t){return t.loadAvailable},post:function(t){return t.post},nearbyPost:function(t){return t.nearbyPost},lastPost:function(t){return t.lastPost}},Ft={state:It,getters:Wt,actions:zt,mutations:jt},Bt=n("bc3a").default,Dt={proverb:!1},Rt={SET_PROVERBS:function(t,e){t.proverb=e[0]}},Gt={initProverbs:function(t){var e=t.commit;Bt.post("/api/proverb").then((function(t){e("SET_PROVERBS",t.data)})).catch((function(t){console.log(t)}))}},Ht={proverb:function(t){return t.proverb}},Yt={state:Dt,getters:Ht,actions:Gt,mutations:Rt},Ut={engTranslate:!1},qt={CHANGE_LANG:function(t){t.engTranslate=!t.engTranslate}},Jt={changeLang:function(t){var e=t.commit;e("CHANGE_LANG")}},Vt={engTranslate:function(t){return t.engTranslate}},Kt={state:Ut,getters:Vt,actions:Jt,mutations:qt};s["a"].use(Ct["a"]);var Qt=new Ct["a"].Store({modules:{lang:Kt,news:Ft,proverbs:Yt,gallery:kt,files:yt}}),Xt=(n("7482"),n("d0bc")),Zt=n("f13c"),te=n.n(Zt);s["a"].use(wt.a,ht.a),s["a"].use(Xt["a"]),s["a"].use(te.a),s["a"].config.productionTip=!1,new s["a"]({router:_t,store:Qt,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("9c0c"),a=n.n(s);a.a},"5efc":function(t,e,n){},"718e":function(t,e,n){t.exports=n.p+"../shared_assets/frontend_assets/img/aboutCover.18721bae.jpg"},7482:function(t,e,n){},7983:function(t,e,n){"use strict";var s=n("11f2"),a=n.n(s);a.a},"7eeb":function(t,e,n){},9852:function(t,e,n){},"9c0c":function(t,e,n){},a868:function(t,e,n){"use strict";var s=n("9852"),a=n.n(s);a.a},b115:function(t,e,n){"use strict";var s=n("35a8"),a=n.n(s);a.a},b138:function(t,e,n){"use strict";var s=n("0c7c"),a=n.n(s);a.a},c634:function(t,e,n){"use strict";var s=n("7eeb"),a=n.n(s);a.a},d121:function(t,e,n){"use strict";var s=n("3285"),a=n.n(s);a.a},da7c:function(t,e,n){"use strict";var s=n("f940"),a=n.n(s);a.a},e8fe:function(t,e,n){},f940:function(t,e,n){}});