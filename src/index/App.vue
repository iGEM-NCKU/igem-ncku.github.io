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
    <nav class = green>
        <div class = brand-logo>
            <a href = 'index.html'>
                &nbsp;iGEM Tainan
            </a>
        </div>

        <ul class = right>
            <li> <a href = 'members.html'> Members </a> </li>
        </ul>
    </nav>
    <div class = container>
        <div class = row>
            <div class = 'col s6'>
                <div class = card>
                    <div class = 'card-content center-align'>
                        <div class = card-title>
                            iGEM
                        </div>
                        <img src = '' width = '500px' height = '500px' alt = 'placeholder' />
                    </div>
                </div>
            </div>
            <div class = 'col s3' v-for = 'i in pre' :key = 'i'>
                <a :href = '`${i}.html`'>
                    <div class = 'card waves-block waves-effect'>
                        <div class = 'card-content'>
                            <b> {{ title(i.replace('-', ' ')) }} </b>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
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
        }
    },
    mounted() {
        M.AutoInit();
        this.title('this is a book');
        $.get('.')
        this.loading = false;
    },
    methods: {
        submit() {
            return;
        },
        title(x) {
            var f = [];
            for(var i of x.split(' ')) {
                f.push(i[0].toUpperCase() + i.substr(1).toLowerCase());
            }
            return (f.join(' '));
        }
    }
}
</script>

<style>
* {
  transition: 1s all;
}
.screen {
  background-color: rgba(255, 255, 255, .75);
  z-index: 100;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  backdrop-filter: blur(5px);
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
</style>