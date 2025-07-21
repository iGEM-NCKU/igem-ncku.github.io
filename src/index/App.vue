<template>
    <div class = 'screen center-align valign-wrapper' v-if = loading>
        <div class = center>
            <div class = center-align>
                <div class="preloader-wrapper big active">
                    <template v-for = 'i in [`blue`, `red`, `yellow`, `green`]' :key = 'i'>
                    <div class="spinner-layer" :class = '`spinner-${i}`'>
                        <div class="circle-clipper left">
                        <div class="circle"></div>
                        </div><div class="gap-patch">
                        <div class="circle"></div>
                        </div><div class="circle-clipper right">
                        <div class="circle"></div>
                        </div>
                    </div>
                    </template>
                </div>
                <br>
                <b> 請稍等 </b>
            </div>
        </div>
    </div>

    <template v-for = 'i, j in pre' :key = 'i'>
        <div class = 'screen' :style = 'vw[j] ? `` : `size: 0px; width: 0px; height: 0px; opacity: 0%; top: -1000px;`'>
            <div class = container>
                <div class = card>
                    <div class = card-content>
                        <div class = card-title> {{ title(i) }} </div>
                        <div :style = 'vw[j] ? `` : `size: 0px`'>
                        </div>
                    </div>
                    <div class = card-action>
                        <a @click = 'endview(j)' class = 'btn btn-flat waves-effect waves-yellow'> <i class = material-icons> close </i>CLOSE </a>
                    </div>
                </div>
            </div>
        </div>
    </template>
    
    <navi class = 'block' @mouseenter = 'show_nav = true' @mouseleave = 'show_nav = false'>
        <a href = 'index.html' class = 'unfocused' @mouseenter = "submit">
            <!-- <img src = 'logo.png' width = '10%' /> -->
            Bye<font color = 'green'>film</font>
        </a>
        <i class = 'material-icons right'> apps </i>
        <div :style = 'show_nav ? `font-size: 20px` : `font-size: 0px`'>
            <div v-for = 'i in pre' :key = 'i'>
                <a :href = 'i'> {{ title(i) }} </a>
            </div>
        </div>
    </navi>
    <!-- <nav>
        <div class = brand-logo>
            <a href = 'index.html'>
                &nbsp;iGEM Tainan
            </a>
        </div>

        <ul class = right>
            <li> <a href = 'members.html'> Members </a> </li>
        </ul>
    </nav> -->
    <br><br><br><br><br>
    <div class = container>
        <div class = row>
            <div class = 'col s6'>
                <div class = card>
                    <div class = 'card-content center-align'>
                        <div class = card-title>
                            <!-- iGEM -->
                        </div>
                        <img src = 'banner.png' width = '100%' alt = 'placeholder' />
                        <img src = 'logo.png' width = '100%' alt = 'placeholder' />
                    </div>
                </div>
            </div>
            <div class = 'col s3' v-for = 'i, j in pre' :key = 'i'>
                <!-- <a :href = '`${i}.html`'> -->
                    <div class = 'card waves-block waves-effect hoverable' @click = 'view(j)'>
                        <div class = 'card-content'>
                            <b> {{ title(i.replace('-', ' ')) }} </b>
                        </div>
                    </div>
                <!-- </a> -->
            </div>
        </div>
    </div>
    <v-btn block rounded = 'xl' color = 'cyan'>
        <v-icon icon = '$account' />
        Button
    </v-btn>
</template>

<script>
import $ from 'jquery'
import M from 'materialize-css'

export default {
    name: 'App',
    data() {
        return {
            loading: true,
            pre: ['attributions', 'contribution', 'description', 'education', 'engineering', 'entrepreneurship', 'experiments', 'hardware', 'home', 'human-practices', 'inclusivity', 'measurement', 'medal', 'members', 'model', 'notebook', 'plant', 'results', 'safety-and-security', 'software', 'sustainability'],
            vw: [],
            show_nav: false
        }
    },
    mounted() {
        M.AutoInit();
        this.title('this is a book');
        $.get('.')
        this.vw = new Array(this.pre.length);
        setTimeout(() => {
            this.loading = false;
        }, 1000);
    },
    methods: {
        submit() {
            M.toast({html: 'submit'});
            return;
        },
        title(x) {
            var f = [];
            for(var i of x.split(' ')) {
                f.push(i[0].toUpperCase() + i.substr(1).toLowerCase());
            }
            return (f.join(' '));
        },
        view(i) {
            this.vw[i] = true;
        },
        endview(i) {
            this.vw[i] = false;
        }
    }
}
</script>

<style>
* {
  transition: 1s all;
}
/* body {
    background-color: wheat;
} */
.screen {
  background-color: rgba(255, 255, 255, .75);
  z-index: 500;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  backdrop-filter: blur(50px);
}
.blur {
  z-index: 10;
  background-color: rgba(255, 255, 255, .75);
  backdrop-filter: blur(5px);
  position: absolute;

}
.center {
  position: fixed;
  left: calc(50% - 70px);
  transform: translateX(50%);
}
.bold {
  font-weight: 700;
}
nav {
    z-index: 100;
    position: fixed;
    background-color: rgba(32, 128, 32, .75);
    border-radius: 10px;
    margin: 10px;
    width: calc(100vw - 20px);
    backdrop-filter: blur(5px);
}
nav:hover {
    z-index: 100;
    position: fixed;
    background-color: green;
    border-radius: 0px;
    margin: 0px;
    width: 100vw;
    backdrop-filter: none;
}

a.unfocused, a.unfocused:visited, a.unfocused:hover, a.unfocused:active {
    color: inherit;
}
.button {
    text-decoration: none;
}
.block {
    background-color: rgba(200, 255, 200, .5);
    text-decoration: none;
    color: black;
    transition: 1s all;
    /* display: flex; */
    padding: 10px;
    font-size: large;
    font-weight: 100;
    backdrop-filter: blur(25px);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    width: calc(100vw - 30px * 2);
    border-radius: 10px;
    margin: 15px;
    padding: 15px;
}
.block:hover {
    background-color: rgba(0, 100, 0, .9);
    text-decoration: none;
    color: wheat;
    font-size: xx-large;
    transition: 1s all;
    font-weight: 900;
    backdrop-filter: blur(50px);
}
.placeholder {
    background-color: transparent;
    /* display: block; */
    height: 120px;
    /* position: absolute; */
}
navi>a:hover {
    height: 100%;
    background-color: grey;
    border-radius: 10px;
}
.msgbox {
    z-index: 1000;
    position: fixed;
    backdrop-filter: blur(20px);
    background-color: rgba(100, 100, 100, .75);
    top: 10vh;
    left: 35vw;
    width: 30vw;
    height: 50vh;
    border-radius: 10px;
}
</style>