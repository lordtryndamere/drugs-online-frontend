<template >
  <v-app>
    <v-main>
      <div id="particles-js"></div>
      <v-layout fill-height column justify-center align-center>
        <v-container class="fill-height light-blue accent-1" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8">
              <v-card class="elevation-12">
                <v-window>
                  <v-window-item>
                    <v-row class="fill-height">
                      <v-col cols="12" md="4" class="light-blue lighten-3">
                        <v-card-text class="white--text mt-12">
                          <h5 class="text-center"></h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn rounded outlined dark @click="goToRouter">
                            Volver al inicio</v-btn
                          >
                        </div>
                      </v-col>
                      <v-col cols="12" md="8">
                        <v-card-text class="mt-12">
                          <h1
                            class="
                              text-center
                              display-2
                              light-blue--text
                              text--lighten-3
                            "
                          >
                            <strong> Perfil </strong>
                          </h1>
                          <h4 class="text-center mt-4">
                            Puedes actualizar lo que desees!
                          </h4>
                        <SnackNotification
                            icon="check_circle_outline"
                            color="green lighten-2"
                            :snackbar="successData.showSuccess"
                            :text="successData.message"
                          />
                          <SnackNotification
                            icon="error_outline"
                            color="red accent-2"
                            :snackbar="errorData.showError"
                            :text="errorData.message"
                          />
                          <v-form
                            ref="form"
                            @submit.prevent="updateProfile"
                            v-model="valid"
                            lazy-iscreatedMessage
                          >
                            <v-text-field
                              label="Name"
                              name="Name"
                              prepend-icon="person"
                              type="text"
                              v-model="user.fullName"
                              required
                            />

                            <v-text-field
                              label="Document"
                              name="Document"
                              prepend-icon="mdi-dialpad"
                              type="text"
                              v-model="user.document"
                              required
                            />
                            <v-text-field
                              label="Address"
                              name="Address"
                              prepend-icon="ballot"
                              type="text"
                              v-model="user.address"
                              required
                            />
                            <v-text-field
                              label="Phone"
                              name="Phone"
                              prepend-icon="phone"
                              type="text"
                              v-model="user.phoneNumber"
                              required
                            />
                          </v-form>
                        </v-card-text>
                        <div class="text-center mt-n5">
                          <v-btn
                            @click="goToRouter"
                            rounded
                            color="grey lighten-1"
                            dark
                            style="margin-right: 10px"
                          >
                            Cancelar
                          </v-btn>
                          <v-btn
                            rounded
                            @click="updateProfile"
                            color="light-blue lighten-1"
                            dark
                          >
                            Actualizar perfil
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                </v-window>
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

//import Alert from '../components/Alert'
import SnackNotification from "../../components/SnackNotification";
export default {
  name: "Profile",
  components: {
    //Alert,
    SnackNotification,
  },
  mounted: function () {
    this.getProfileUser();
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
  data: () => ({
    user: {},
    valid:true,
    errorData: {
      showError: false,
      message: "",
    },
    successData: {
      showSuccess: false,
      message: "",
    },
  }),
  props: {
    source: String,
  },
  methods: {
    getProfileUser() {
      this.$store.dispatch("getprofile").then((profile) => {
        if (profile.data.code == 100) {
          this.user = profile.data.data.user;
        } else {
          this.user = "undefined";
          console.log("No retorno el usuario por ", profile);
        }
      });
    },
    goToRouter() {
      this.$router.push({ name: "Droguerias", params: {} });
    },
    updateProfile() {
      this.$store.dispatch("updateProfile", { ...this.user }).then((result) => {
        if (result.data.code == 100) {
          this.successData.message = "Perfil actualizado!";
          this.successData.showSuccess = true;
          setTimeout(() => {
            this.successData.showSuccess = false;
          }, 3500);
        } else {
          this.errorData.message = `Ocurrio un error al intentar actualizar tu perfil :(`;
          this.errorData.showError = true;
          setTimeout(() => {
            this.errorData.showError = false;
          }, 3500);
        }
      });
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