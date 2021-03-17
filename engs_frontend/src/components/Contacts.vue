<template>
  <section id="contacts">
      <div  class="wheel"
        v-rellax="{
            speed: 4,
        }"
      ></div>
      <div  class="phoneBox"
            v-rellax="{
                speed: 6,
            }">
      </div>
      <div class="contactsWrapper">
        <div class="card">
            <div class="whiteShape"></div>
            <ul>
                <li v-for="contact in contacts" :key="contact.contact">
                    <p v-html="contact.svg"></p>
                    <p  v-bind:class="{contactFocus: onContact & !contact.onThisContact}"
                        @mouseenter="onContact = !onContact, contact.onThisContact = !contact.onThisContact"
                        @mouseleave="onContact = !onContact, contact.onThisContact = !contact.onThisContact"
                        v-html="interActive(contact.interactive, contact.contact, contact.interactiveDescr)"
                    >
                    </p>
                </li>
            </ul>
            <div class="returnToMain" @click="goToMain()">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
var VueScrollTo = require('vue-scrollto');

export default {
    data: function () {
        return {
            contacts: [
                {
                    contact: '+7-914-521-92-09',
                    onThisContact: false,
                    svg: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path style="fill: #A57869" d="M16 22.621l-3.521-6.795c-.007.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.082-1.026-3.492-6.817-2.106 1.039c-1.639.855-2.313 2.666-2.289 4.916.075 6.948 6.809 18.071 12.309 18.045.541-.003 1.07-.113 1.58-.346.121-.055 2.102-1.029 2.11-1.033zm-2.5-13.621c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-4.5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/></svg>',
                    interactive: true,
                    interactiveDescr: 'tel'
                },
                {
                    contact: 'rusnikonov@mail.ru',
                    onThisContact: false,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path style="fill: #A57869" d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>',
                    interactive: true,
                    interactiveDescr: 'mailto'
                },
                {
                    contact: 'г.Чита, ул. Журавлёва, 77',
                    onThisContact: false,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path style="fill: #A57869" d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>',
                    interactive: false,
                    interactiveDescr: false
                }
            ],
            onContact: false
        }
    },
    methods: {
        interActive(isInteractive, val, varDescr) {
            if (isInteractive) return '<a href="' + varDescr + ':' + val + '">' + val + '</a>';
            else return val;
        },
        goToMain() {
            var options = {
                easing: 'linear',
                /*offset: -60,
                force: true,
                cancelable: true,
                onStart: function(element) {
                // scrolling started
                },
                onDone: function(element) {
                // scrolling is done
                },
                onCancel: function() {
                // scrolling has been interrupted
                },
                x: false,
                y: true*/
            };
            VueScrollTo.scrollTo("#MainPg_section", 500, options);
        }
    },
}
</script>

<style lang="scss" scoped>
    #contacts {
        width: 100vw;
        height: 100vh;
        position: relative;
        background: #FFE4B4;
        display: flex;
        justify-content: center;
        align-items: center;  
        overflow: hidden;
        
        @media screen and (min-width:0) and (max-width:499px) {
            background: white;
        }
    }
    .wheel {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 200px;
        background: url($Wheel) no-repeat center;
        background-size: 100vw 100vh;
        z-index: 0;
    }
    .phoneBox {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 300px;
        background: url($phoneBoxes) no-repeat center bottom;
        background-size: calc(100% - 75px);
        z-index: 0;

        @media screen and (min-width:1600px) and (min-height:1024px) {
            background-size: calc(100% - 105px);
        }
        @media screen and (min-width:2560px) and (min-height:2048px) {
            background-size: calc(100% - 150px);
        }
        @media screen and (min-width:3840px) and (min-height:2400px) {
            background-size: calc(100% - 225px);
        }
    }
    .contactsWrapper {
        position: relative;
        width: $spaceVal * 10 + px;
        height: 100%;
        background: white;
        box-shadow: $shadow;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .card {
            position: relative;
            width: 100%;
            height: 100%;
            min-height: 480px;
            display: flex;
            justify-content: center;
            align-items: center;

            .whiteShape{
                position: absolute;
                width: 100%;
                height: $spaceVal + px;
                bottom: 100%;
                background: white;
            }
            ul{
                display: flex;
                flex-direction: column;
                justify-items: center;
                align-items: center;
                padding: 0;

                li {
                    position: relative;
                    list-style: none;
                    margin: $spaceVal/2 + px 0 $spaceVal/2 + px 0;
                    font-size: 1.2em;
                    color: $red;
                    display: flex;
                    flex-direction: row;

                    p {
                        font-weight: $fMedium;
                        margin: 0;
                        text-align: center;
                        transition: opacity 0.3s;

                        ::v-deep a {
                            font-weight: $fMedium;
                            color: $red;
                            text-decoration: none;
                        }
                        &:first-child {
                            position: absolute;
                            right: calc(100% + #{$spaceVal/4 + px});
                            
                            @media screen and (min-width:2048px) and (min-height:1536px) {
                                transform: scale(1.8);
                                right: calc(100% + #{$spaceVal/2 + px});
                            }
                            @media screen and (min-width:2560px) and (min-height:2048px) {
                                transform: scale(2.5);
                                right: calc(100% + #{$spaceVal + px});
                                top: -13px;
                            }
                            @media screen and (min-width:3840px) and (min-height:2400px) {
                                top: -20px;
                            }
                        }
                    }

                    @media screen and (min-height:720px) {
                        margin: $spaceVal + px 0 $spaceVal + px 0;
                    }
                    @media screen and (min-width:768px) and (min-height:1024px) {
                        font-size: 1.5em;
                    }
                    @media screen and (min-width:1024px) and (min-height:1366px) {
                        font-size: 1.8em;
                        margin: $spaceVal * 1.5 + px 0 $spaceVal * 1.5 + px 0;
                    }
                    @media screen and (min-width:1152px) and (min-height:864px) {
                        font-size: 1.3em;
                    }
                    @media screen and (min-width:1280px) and (min-height:800px) {
                        font-size: 1.3em;
                    }
                    @media screen and (min-width:1280px) and (min-height:1024px) {
                        font-size: 1.5em;
                    }
                    @media screen and (min-width:1600px) and (min-height:1024px) {
                        font-size: 1.6em;
                    }
                    @media screen and (min-width:1600px) and (min-height:1200px) {
                        margin: $spaceVal * 1.5 + px 0 $spaceVal * 1.5 + px 0;
                        font-size: 1.7em;
                    }
                    @media screen and (min-width:1920px) and (min-height:1080px) {
                        font-size: 1.7em;
                        margin: $spaceVal * 1.2 + px 0 $spaceVal * 1.2 + px 0;
                    }
                    @media screen and (min-width:1920px) and (min-height:1200px) {
                        font-size: 1.9em;
                        margin: $spaceVal * 1.2 + px 0 $spaceVal * 1.2 + px 0;
                    }
                    @media screen and (min-width:1920px) and (min-height:1200px) {
                        font-size: 2.2em;
                        margin: $spaceVal * 1.5 + px 0 $spaceVal * 1.5 + px 0;
                    }
                    @media screen and (min-width:2048px) and (min-height:1536px) {
                        font-size: 2.5em;
                    }
                    @media screen and (min-width:2560px) and (min-height:2048px) {
                        font-size: 3.4em;
                        margin: $spaceVal * 2.5 + px 0 $spaceVal * 2.5 + px 0;
                    }
                    @media screen and (min-width:3840px) and (min-height:2400px) {
                        font-size: 3.8em;
                    }
                }       
            }
            .returnToMain {
                position: absolute;
                bottom: $spaceVal + px;
                cursor: pointer;

                svg {

                    path {
                        fill: $coffee;
                        transition: fill 0.3s;   
                    }
                    @media screen and (min-width:1920px) and (min-height:1080px) {
                        transform: scale(1.5);
                    }
                    @media screen and (min-width:2048px) and (min-height:1536px) {
                        transform: scale(2);
                    }
                    @media screen and (min-width:2560px) and (min-height:2048px) {
                        transform: scale(3);
                    }
                }
                &:hover svg path {
                    fill: $red
                }

                @media screen and (min-width:2560px) and (min-height:2048px) {
                    bottom: $spaceVal * 2 + px;
                }
            }
        }

        @media screen and (min-width:0) and (max-width:499px) {
            box-shadow: none;
        }
        @media screen and (min-width:768px) and (min-height:1024px) {
            width: $spaceVal * 10 + 75 + px;
        }
        @media screen and (min-width:1024px) and (min-height:1366px) {
            width: $spaceVal * 10 + 150 + px;
        }
        @media screen and (min-width:1152px) and (min-height:864px) {
            width: $spaceVal * 10 + 75 + px;
        }
        @media screen and (min-width:1280px) and (min-height:800px) {
            width: $spaceVal * 10 + 75 + px;
        }
        @media screen and (min-width:1280px) and (min-height:1024px) {
            width: $spaceVal * 10 + 112.5 + px;
        }
        @media screen and (min-width:1600px) and (min-height:1200px) {
            width: $spaceVal * 10 + 187.5 + px;
        }
        @media screen and (min-width:1920px) and (min-height:1080px) {
            width: $spaceVal * 10 + 150 + px;
        }
        @media screen and (min-width:1920px) and (min-height:1200px) {
            width: $spaceVal * 10 + 225 + px;
        }
        @media screen and (min-width:2048px) and (min-height:1536px) {
            width: $spaceVal * 10 + 262.5 + px;
        }
        @media screen and (min-width:2560px) and (min-height:2048px) {
            width: $spaceVal * 10 + 487.5 + px;
        }
        @media screen and (min-width:3840px) and (min-height:2400px) {
            width: $spaceVal * 10 + 600 + px;
        }
    }
    .contactFocus{
        opacity: 0.5;
    }

    @media screen and (min-width:0) and (max-width:499px) {
        .contactsWrapper {
            box-shadow: none;
        }
        .wheel, .phoneBox {
            background: none;
        }
    }
    @media screen and (min-height:0) and (max-height:479px){
        .contactsWrapper {
            overflow-y: auto;
            overflow-x: hidden;
        } 
    }
</style>