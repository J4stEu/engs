<template>
  <section id="aboutUs">
    <router-link to="/" class="backToMain">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
    </router-link>
    <div class="info">
      <div class="infoWrapper">
        <div class="aboutInfo">
          <div class="about_1 about">
            <div class="aboutTitle" v-if="!$store.getters.engTranslate">
              Основное
            </div>
            <div class="aboutTitle" v-else>
              Main
            </div>
            <p class="about_section_1_main_text">В English School преподаватели применяют индивидуальный подход при изучении английского языка. С нами разговорный английский станет вашим вторым языком! Вы сможете легко выражаться и поддерживать разговор с носителями языка. Школа английского English School также научит вас выражать свои мысли письменно,читать литературу на иностранном языке. Изучение иностранного языка станет для вас интересным занятием, приносящим удовольствие, а вместе с ним и знания.</p>
            <p class="about_section_1_more">Интересными плюсами обучения в English School можно назвать то, что при изучении английского языка мы:</p>
            <ul class="about_section_1_more_pluses">
              <li>обсуждаем на уроках-туризмы,новости, утончённый английский юмор и реалии англо-говорящих стран!</li>
              <li>смотрим классические и страноведческие фильмы!</li>
              <li>поём известные на весь мир песни!</li>
              <li>читаем литературу англо-говорящих стран!</li>
              <li>знакомимся с творчеством и биографией знаменитых людей!</li>
            </ul>
            <p class="about_section_1_main_text">Благодаря этому изучение английскому языку становится интересным и познавательным и самое главное-способствует получению новых знаний! Обучение иностранному проводится по современным европейским методикам, что позволяет в кротчайшие сроки добиться высоких результатов.</p>
            <p class="about_section_1_more">Английская школа это:</p>
            <ul class="about_section_1_more_pluses">
              <li>только опытные сотрудники и преподаватели со стажем;</li>
              <li>владение учителями в совершенстве иностранным языком, что позволяет сделать работу по изучению языков наиболее качественной;</li>
              <li>максимально комфортные условия,которые помогают студентам легко и быстро пройти обучение английскому языку. Мы добиваемся этого благадоря формированию небольших групп и подаче материала в доступной каждому форме. Занятия в English School не похожи на скучную зарубежку.</li>
            </ul>
            <p class="about_section_1_main_text">
              English School-это популярные европейские методики обучения, которые позволят забыть о "языковом барьере" и начать свободно говорить, используя даже небольшой словарный запас. Обучение английскому языку базируется на проверенных временем программах и индивидуальном подходе к процессу обучения. 
            </p>
            <p class="about_section_1_more">
              English School-ваше преимущество и успех в будущем, гарантия, что вы изучите разговорный англиский язык!
            </p>
            <img v-bind:src="require('@/assets/visual/aboutCover.jpg')" alt="aboutCover">
          </div>
          <div class="about_2 about">
            <div class="aboutTitle" v-if="!$store.getters.engTranslate">
              Обучение
            </div>
            <div class="aboutTitle" v-else>
              Education
            </div>
            <p class="about_section_1_main_text">
              Английский язык является одним из самых популярных на сегодняшний день. Это обусловлено тем,что очень многие страны используют его как второй государственный язык. Практически каждый пятый житель нашей планеты знает его на уровне общения. Поэтому азов,полученных за школьной партой много лет тому назад,не всегда достаточно, чтобы найти общий язык на работе или во время путешествий, что сказывается на качестве выполняемой работы и внутренней неуверенности во время отдыха.
            </p>    
            <p class="about_section_1_main_text">
              В English School вы сможете выбрать тот курс, который максимально удовлетворит ваши желания и действительно подойдёт вам по всем критериям выбора.
            </p> 
            <p class="about_section_1_more" style="text-align: center; text-indent:0">Цена+качество=отличный результат</p>
            <p class="about_section_1_more redAccent noLeftSpace">Starter (90 ак.часов)</p>
            <p class="about_section_1_main_text">
              Базовый уровень. Английский язык, как и любой другой, начинается с изучения алфавита и основных правил построения предложения. Грамматика состоит из простых форм частей речи и простых предложений. Базовый набор необходимых понятий (500-1000 словосочетаний и слов) позволит объясняться на бытовом уровне и понимать стандартный набор фраз. Обучение проводится в форме диалога и живого общения, что помогает студентам снять "языковой барьер" с первого занятия.
            </p>
            <p class="about_section_1_more redAccent noLeftSpace">Elementary (102.ак часа)</p>
            <p class="about_section_1_main_text">
              Грамматический уровень. Продолжается изучение лексического и грамматического строя английского языка. Благодаря дельному изучению и практическому использованию сложных грамматических структур, студенты учатся свободно говорить, читать и понимать говорящего на английском. На данном этапе обучения основной акцент делается на изучении основ грамматики, развития словарей лексики (активного и пассивного). Структура занятий построена на основе системы EFL-English as a Foreign Language, разработанной Британским советом и кафедрой английского языка Гарвардского Университета (США) для преподавания английского языка для иностранцев в течение короткого периода времени. Преимуществом данного метода является индивидуальный подход с учётом структуры родного языка студентов. После обучения на данном уровне, выпускники свободно переходят на другой язык и без проблем говорят с иностранцами.
            </p>
            <p class="about_section_1_more redAccent noLeftSpace">Pre-Intermediate-Intermediate (102 ак.часа)</p>
            <p class="about_section_1_main_text">
              "Начальный средний" и "средний" уровни нацелены на то, чтобы повысить речевую подготовку студента и уровень владения речевыми штампами и готовыми оборотами речи, что помогает понимать живую речь. Обучение иностранному языку-это обязательное использование в речи устойчивых выражений, клише и идиом (не менее 500-600 фраз). Важно отметить роль пассивного словарного запаса, который обогащает активный и облегчает процесс изучения языка. На данном этапе всё внимание уделяется активному общению с применением изученных форм грамматики,фонетики и лексики.
            </p>
            <p class="about_section_1_more redAccent noLeftSpace">Upper-Intermediate - Advanced</p>
            <p class="about_section_1_main_text">
              "Выше среднего" и "продвинутый" уровни предназначены для студентов, которые стремятся максимально повысить свою речевую готовность и правильно изъясняться на английском языке. На этих двух этапах студентами совершенствуется разговорная и деловая речь, свободно и эффективно используется фразеологизмы и крылатые выражения, сленг (разговорные американский и британский варианты), крылатые и устойчивые выражения. В программу курса включены сравнительная характеристика американского и британского произношений. Практические занятия включают использование современных видео- и аудиоматериалов. Курс подойдёт для тех, кто собирается говорить на английском языке или переехать за границу.
            </p>
            <p class="about_section_1_more">
              Таким образом, вы можете начать обучение с любого уровня! 
            </p>
            <p class="about_section_1_more">
              Для определения уровня ваших начальных знаний рекомендуем пройти тестирование.
            </p>
          </div>
          <div class="about_3 about">
            <div class="aboutTitle" v-if="!$store.getters.engTranslate">
              Методика обучения
            </div>
            <div class="aboutTitle" v-else>
              Education methods
            </div>
            <p class="about_section_1_main_text">
              Не секрет, что во всех сферах профессиональной деятельности огромным "плюсом" считается значение иностранных языков. Стоит заняться их изучением сегодня,чтобы завтра они стали вашим "козырем" перед работодателем и коллегами.
            </p> 
            <p class="about_section_1_main_text">
              Существует множество технологий изучения иностранных языков, но лучшей считается коммуникативная методика, которая акцентирует внимание на изучении речи (говорение) и слуховом восприятии, так как именно это является основной составляющей продуктивного общения.
            </p>  
            <p class="about_section_1_main_text">
              В English School успешно практикуются все формы обучения-интерактивное обучение в игровой форме, групповые дискуссии.Это позволяет сделать каждое занятие ярким, интересным и запоминающимся, что значительно облегчает изучение нового языка. Обучение иностранным языкам проводится по пяти аспектам владения языковой речи, чтение, письмо, грамматика.Таким образом, обучаясь в English School вы приобретёте, практические навыки использования иностранного языка, а отличная коммуникативная методика наряду с опытом преподавания-гарантия того, что вы сможете выучить иностранный язык быстро, качественно и с удовольствием.
            </p>     
            <p class="about_section_1_more redAccent noLeftSpace">Realize your communication!</p>
            <p class="about_section_1_more redAccent noLeftSpace">We teach to communicate!</p> 
          </div>
          <div class="about_4 about">
            <div class="aboutTitle" v-if="!$store.getters.engTranslate">
              Наша уникальность
            </div>
            <div class="aboutTitle" v-else>
              Our uniqueness
            </div>
            <p class="about_section_1_main_text">
              Enlish School-это не просто образовательный центр. Это возможность изучать иностранные языки в комфортной атмосфере под руководством профессиональных педагогов.
            </p> 
            <p class="about_section_1_main_text">
              Мы предлагаем несколько программ обучения! Вы сможете подобрать то, что подходит именно вам.
            </p> 
            <p class="about_section_1_more">Становясь студентом English School, вы получаете:</p>
            <ul class="about_section_1_more_pluses">
              <li>индивидуальный подход к обучению, учитывающий возрастные особенности и профессиональные интересы каждого студента;</li>
              <li>непринуждённую атмосферу в группах, что помогает легче и быстрее адаптироваться к новому языку. Программа курсов не только даёт прочную базу знания иностранного языка, но и расширяет кругозор учащихся;</li>
              <li>подборку художественных, документальных и образовательных фильмов на иностранных языках в нашей видеотеке;</li>
              <li>подборку современных учебных материалов для изучения выбранного языка, которая остаётся у вас навсегда,а не будет предаваться от студента к студенту;</li>
              <li>возможность изучать язык под руководством преподавателей-профессионалов;</li>
              <li>аудитории, специально оборудованные для занятий в оптимальной форме обучения;</li>
              <li>психологические тренинги, которые нацелены на адаптацию к новой языковой среде и комфортное общение независимо от того, какой у вас словарный запас;</li>
              <li>подготовку для студентов всех возрастов к сдаче любых экзаменов на получение международных сертификатов.</li>
            </ul>
          </div>
        </div>
        <div class="filesInfo">
          <div class="filesWrapper">
            <div class="filesTitle">
              Дополнительный материал
            </div>
            <div class="files">
              <div class="filesList">
                <div v-for="file in files" :key="file.id">
                  <p class="fileTitle">{{file.title}}</p>
                  <a v-bind:href="file.src" download>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 8h1v7.826l2.5-3.076.753.665-3.753 4.585-3.737-4.559.737-.677 2.5 3.064v-7.828zm7 12h-13c-2.481 0-4.5-2.019-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.79c.185-3.447 3.031-6.146 6.48-6.146 3.449 0 6.295 2.699 6.479 6.146l.043.79.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.481-2.019 4.5-4.5 4.5m.979-9.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data: function () {
        return {
          
        }
    },
    computed: {
      files() {
        return this.$store.getters.files;
      }
    },
    methods: {

    },
    created() {
      this.$store.dispatch('initFiles')
    },
}
</script>

<style lang="scss" scoped>
  #aboutUs {
    width: 100vw;
    height: 100vh;
    background: url($BigBen_LondonEye) no-repeat right bottom;
    background-size: calc(100% - 30px);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;

    .info {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .infoWrapper {
        width: calc(100% - #{$spaceVal * 2 + px});
        height: calc(100% - #{$spaceVal * 2 + px});
        display: grid;
        grid-template-rows: 3fr 1fr;

        div {
          padding: $spaceVal/2 + px;

          @media screen and (min-width:2800px) {
            padding: $spaceVal + px;
            padding-bottom: 15px;
          }
        }
        .aboutInfo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(auto-fit, minmax(#{$spaceVal * 10 + px}, 1fr));
          grid-gap: $spaceVal/2 + px;

          div{
            position: relative;
            background: white;
            box-shadow: $shadow;

            p {
              text-indent: $spaceVal + px;

              @media screen and (min-width:0px) and (max-width:730px) {
                font-size: 0.9em;
              }
              @media screen and (min-width:0px) and (max-width:330px) {
                font-size: 0.8em;
              }
              @media screen and (min-width:1800px){
                font-size: 1.4em;
              }
              @media screen and (min-width:2800px){
                font-size: 1.8em;
              }
              @media screen and (min-width:3800px){
                font-size: 2.2em;
              }
            }
            ul {

              li {
                margin-bottom: $spaceVal/4 + px;

                @media screen and (min-width:0px) and (max-width:730px) {
                  font-size: 0.9em;
                }
                @media screen and (min-width:0px) and (max-width:330px) {
                  font-size: 0.8em;
                }
                @media screen and (min-width:1800px){
                  font-size: 1.4em;
                }
                @media screen and (min-width:2800px){
                  font-size: 1.8em;
                }
                @media screen and (min-width:3800px){
                  font-size: 2.2em;
                }
              }
            }
            img {
              width: 100%;
            }
          }
          .about {
            @media screen and (min-width:1800px){
              padding: 30px;
            }
            @media screen and (min-width:2300px){
              padding: 45px;
            }
            @media screen and (min-width:2800px){
              padding: 60px;
            } 
          }
          .aboutTitle {
            box-shadow: none;
            text-decoration: underline;
            color: $coffee;
            font-weight: $fBold;

            @media screen and (min-width:0px) and (max-width:730px) {
              font-size: 0.9em;
            }
            @media screen and (min-width:0px) and (max-width:330px) {
              font-size: 0.8em;
            }
            @media screen and (min-width:1800px){
              font-size: 1.4em;
            }
            @media screen and (min-width:2800px){
              font-size: 1.8em;
            }
            @media screen and (min-width:3800px){
              font-size: 2.2em;
            }
          }

          @media screen and (min-width:0px) and (max-width:600px) {
              grid-template-columns: 1fr;
          }
          @media screen and (min-width:0px) and (max-width:360px) {
            grid-template-rows: 1fr;
          }
        }
        .redAccent {
          color: $red;
        }
        .weightAccent {
          font-weight: $fMedium;
        }
        .noLeftSpace {
          text-indent: 0 !important;
          text-align: center;
        }
        .filesInfo {
          display: flex;
          flex-direction: column;
          padding-top: 0;
          margin-bottom: $spaceVal + px;
          
          .filesWrapper {
            background: white;
            box-shadow: $shadow;

            .filesTitle {
              text-decoration: underline;
              color: $coffee;
              font-weight: $fBold;

              @media screen and (min-width:0px) and (max-width:730px) {
                font-size: 0.9em;
              }
              @media screen and (min-width:0px) and (max-width:330px) {
                font-size: 0.8em;
              }
              @media screen and (min-width:1800px){
                font-size: 1.4em;
              }
              @media screen and (min-width:2800px){
                font-size: 1.8em;
              }
              @media screen and (min-width:3800px){
                font-size: 2.2em;
              }
            }
            .files {
              display: flex;
              justify-content: center;

              .filesList {
                display: grid;
                grid-template-columns: repeat(4, #{$spaceVal * 6 + px});
                grid-gap: $spaceVal/2 + px;

                div {
                  background: white;
                  box-shadow: $shadow;
                  width: $spaceVal * 6 + px;
                  height: $spaceVal * 5 + px;
                  margin: 0;
                  padding: 0;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;

                  svg {
                    transform: scale(1.6);

                    path {
                      fill: $red;
                      transition: fill 0.3s;
                    }

                    &:hover path {
                      fill: $coffee;
                    }

                    @media screen and (min-width:0px) and (max-width:320px) {
                      transform: scale(1.3);
                    }
                    @media screen and (min-width:1800px){
                      transform: scale(2.3);
                    }
                    @media screen and (min-width:2200px){
                      transform: scale(2.6);
                    }
                    @media screen and (min-width:2800px){
                      transform: scale(2.9);
                    }
                    @media screen and (min-width:2800px){
                      transform: scale(3.2);
                    }
                    @media screen and (min-width:2800px){
                      transform: scale(3.5);
                    }
                  }
                  p {
                    text-align: center;

                    @media screen and (min-width:0px) and (max-width:730px) {
                      font-size: 0.9em;
                    }
                    @media screen and (min-width:0px) and (max-width:330px) {
                      font-size: 0.8em;
                    }
                    @media screen and (min-width:0px) and (max-width:320px) {
                      font-size: 0.7em;
                    }
                    @media screen and (min-width:1800px){
                      font-size: 1.4em;
                    }
                    @media screen and (min-width:2800px){
                      font-size: 1.8em;
                    }
                    @media screen and (min-width:3800px){
                      font-size: 2.2em;
                    }
                  }

                  @media screen and (min-width:0px) and (max-width:360px) {
                    width: $spaceVal * 5 + px;
                    height: $spaceVal * 4 + px;
                  }
                  @media screen and (min-width:0px) and (max-width:320px) {
                    width: $spaceVal * 4 + px;
                    height: $spaceVal * 3 + px;
                  }
                  @media screen and (min-width:1400px){
                    width: $spaceVal * 8 + px;
                    height: $spaceVal * 7 + px;
                  }
                  @media screen and (min-width:1800px){
                    width: $spaceVal * 10 + px;
                    height: $spaceVal * 9 + px;
                  }
                  @media screen and (min-width:2200px){
                    width: $spaceVal * 12 + px;
                    height: $spaceVal * 11 + px;
                  }
                  @media screen and (min-width:2800px){
                    width: $spaceVal * 14 + px;
                    height: $spaceVal * 13 + px;
                  }
                  @media screen and (min-width:3300px){
                    width: $spaceVal * 16 + px;
                    height: $spaceVal * 15 + px;
                  }
                  @media screen and (min-width:3800px){
                    width: $spaceVal * 18 + px;
                    height: $spaceVal * 17 + px;
                  }
                }
                @media screen and (min-width:0px) and (max-width:940px) {
                  grid-template-columns: repeat(3, #{$spaceVal * 6 + px});
                }
                @media screen and (min-width:0px) and (max-width:740px) {
                  grid-template-columns: repeat(2, #{$spaceVal * 6 + px});
                }
                @media screen and (min-width:0px) and (max-width:540px) {
                  grid-template-columns: repeat(1, #{$spaceVal * 6 + px});
                }
                @media screen and (min-width:0px) and (max-width:360px) {
                  grid-template-columns: repeat(1, #{$spaceVal * 5 + px});
                }
                @media screen and (min-width:0px) and (max-width:320px) {
                  grid-template-columns: repeat(1, #{$spaceVal * 4 + px});
                }
                @media screen and (min-width:1400px){
                  grid-template-columns: repeat(4, #{$spaceVal * 8 + px});
                }
                @media screen and (min-width:1800px){
                  grid-template-columns: repeat(4, #{$spaceVal * 10 + px});
                }
                @media screen and (min-width:2200px){
                  grid-template-columns: repeat(4, #{$spaceVal * 12 + px});
                }
                @media screen and (min-width:2800px){
                  grid-template-columns: repeat(4, #{$spaceVal * 14 + px});
                }
                @media screen and (min-width:3300px){
                  grid-template-columns: repeat(4, #{$spaceVal * 16 + px});
                }
                @media screen and (min-width:3800px){
                  grid-template-columns: repeat(4, #{$spaceVal * 18 + px});
                }
              }
            }
          }
        }
      }
    }
  }
</style>