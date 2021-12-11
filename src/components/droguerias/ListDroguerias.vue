<template>
  <v-app>
    <v-main>
      <div id="particles-js"></div>
      <v-layout fill-height column justify-center align-center>
        <v-container class="fill-height light-blue accent-1" fluid>
          <v-row align="center" justify="center">
            <v-col
              v-for="item in droguerias"
              :key="item.idDrug"
              class="b-divide__line colum-products mb-6"
              cols="3"
              lg="2"
              md="4"
              xs="5"
            >
              <v-card color="blue lighten-5" class="mx-auto" max-width="300">
                <v-img
                  class="white--text align-end"
                  height="180px"
                  :src="item.img"
                >
                </v-img>
                <v-card-title>
                  <h3 class="blue--text text--darken-0">
                    <strong> {{ item.name }} </strong>
                  </h3>
                </v-card-title>
                <v-card-subtitle class="pb-0">
                  Horario : {{ item.hoursAttention }}
                </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>Contacto: {{ item.phone }}</div>

                  <div>Nit: {{ item.nit }}</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                    class="ma-2"
                    color="primary"
                    @click="goToProducts(item)"
                    dark
                  >
                    Explorar
                    <v-icon light right> fas fa-search </v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import "particles.js/particles";
//import FooterComponent from "../../components/FooterComponent";
//import Alert from '../components/Alert'
import SnackNotification from "../../components/SnackNotification";
export default {
  name: "ListDroguerias",
  components: {
    // FooterComponent,
    //Alert,
    SnackNotification,
  },
  mounted: function () {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#42A5F5",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 12,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 100,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  },
  data: () => ({}),
  props: {
    droguerias: Array,
  },
  methods: {
    goToProducts(data) {
      this.$router.push({
        name: "DrogueriasProductos",
        params: { drug: data },
      });
      this.$store.dispatch("saveDrug", { data }).then((value) => {});
    },
  },
};
</script>
<style scoped>
#particles-js {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ffffffe0;
}
.text-center {
  cursor: pointer;
}
</style>