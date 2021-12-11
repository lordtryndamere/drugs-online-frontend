import axios from 'axios'
export default {
  state: {
    user: {},
    authToken: '',
    accessToken: '',
    drug:{},
    users: []
  },
  mutations: {
    setUserData(state, data) {
      state.user = data
      localStorage.setItem('user', JSON.stringify(data))
    },
    setDrugData(state,data){
      state.drug = data;
      localStorage.setItem('drug', JSON.stringify(data))
    },
    setAuthToken(state, data) {
      localStorage.setItem('auth', data)
      state.authToken = data
    },
    setAccessToken(state, data) {
      localStorage.setItem('access-token', data)
      state.accessToken = data
    }
  },
  getters: {
    getAuthToken: state => {
      return state.authToken || localStorage.getItem('auth')
    },
    getAccessToken: state => {
      return state.accessToken || localStorage.getItem('access-token')
    },
    getUser: state => {
      return state.user || localStorage.getItem('user')
    },
    getDrug: state => {
      return  JSON.parse(localStorage.getItem('drug')) || state.drug 
    }
  },
  actions: {
    getAccessToken: async ({ commit }, { }) => {
      try {
        const response = await axios.get('/users/generate-access-token')

        if (response.data.code === 100) {
          commit('setAccessToken', response.data.data.accessToken, { root: true });
        }

        return response;
      } catch (error) {
        if (e.response.data.message) {
          return {
            data: {
              code: 400,
              message: e.response.data.message,
              error: e.message
            }

          }
        } else {
          return {
            data: {
              code: 400,
              message: "Ocurrio un error en el servidor",

            }

          }
        }
      }
    },
    login: async ({ commit, getters }, form) => {
      try {

        const response = await axios.post(
          '/users/login', form, {
          headers: { 'X-DRUGS-Access-Token': getters.getAccessToken, 'content-type': 'application/json' }
        }
        );

        if (response.data.code === 100) {

          commit('setAuthToken', response.data.data.authToken, { root: true });
        }

        return response;

      } catch (e) {
        if (e.response.data.message) {
          return {
            data: {
              code: 400,
              message: e.response.data.message,
              error: e.message
            }

          }
        } else {
          return {
            data: {
              code: 400,
              message: "Ocurrio un error, o su contraseña o email son incorrectas",

            }

          }
        }

      }
    },
    saveDrug: async ({ commit, getters }, form) => {
          commit('setDrugData', form, { root: true });
          return  form
    },
    getDrug: async ({ commit, getters }) => {
      return getters.getDrug
    },

    sendVerifyEmail: async ({ commit, getters }, form) => {
      try {

        const response = await axios.post(
          '/users/send-password-recovery-code', form, {
          headers: { 'X-DRUGS-Access-Token': getters.getAccessToken, 'content-type': 'application/json' }
        }
        );


        return response;

      } catch (e) {
        if (e.response.data.message) {
          return {
            data: {
              code: 400,
              message: e.response.data.message,
              error: e.message
            }

          }
        } else {
          return {
            data: {
              code: 400,
              message: "Ocurrio un error, o su contraseña o email son incorrectas",

            }

          }
        }

      }
    },
    updatePassword: async ({ commit, getters }, form) => {
      try {

        const response = await axios.put(
          '/users/update-password', form, {
          headers: { 'X-DRUGS-Access-Token': getters.getAccessToken, 'content-type': 'application/json' }
        }
        );


        return response;

      } catch (e) {
        if (e.response.data.message) {
          return {
            data: {
              code: 400,
              message: e.response.data.message,
              error: e.message
            }

          }
        } else {
          return {
            data: {
              code: 400,
              message: "Ocurrio un error, o su contraseña o email son incorrectas",

            }

          }
        }

      }
    },
    activeUser: async ({ commit, getters }, form) => {
      try {

        const response = await axios.put(
          '/users/active-user', form, {
          headers: { 'X-DRUGS-Access-Token': getters.getAccessToken, 'content-type': 'application/json' }
        }
        );


        return response;

      } catch (e) {
        if (e.response.data.message) {
          return {
            data: {
              code: 400,
              message: e.response.data.message,
              error: e.message
            }

          }
        } else {
          return {
            data: {
              code: 400,
              message: "Ocurrio un error, o su contraseña o email son incorrectas",

            }

          }
        }

      }
    },
    getDrugs: async ({ commit, getters },form) => {
      try {

        const response = await axios.post(
          '/drugs/get-drugs', form,{
          headers: { 'X-DRUGS-Access-Token': getters.getAccessToken, 'content-type': 'application/json' }
        }
        );


        return response;

      } catch (e) {
        if (e.response.data.message) {
          return {
            data: {
              code: 400,
              message: e.response.data.message,
              error: e.message
            }

          }
        } else {
          return {
            data: {
              code: 400,
              message: "Ocurrio un error, o su contraseña o email son incorrectas",

            }

          }
        }

      }
    },
    getProducts: async ({ commit, getters },form) => {
      try {

        const response = await axios.post(
          '/products/get-products', form,{
          headers: { 'X-DRUGS-Access-Token': getters.getAccessToken, 'content-type': 'application/json' }
        }
        );


        return response;

      } catch (e) {
        if (e.response.data.message) {
          return {
            data: {
              code: 400,
              message: e.response.data.message,
              error: e.message
            }

          }
        } else {
          return {
            data: {
              code: 400,
              message: "Ocurrio un error, o su contraseña o email son incorrectas",

            }

          }
        }

      }
    },
    updateProfile: async ({ commit, getters }, form) => {
      try {

        const response = await axios.put(
          '/users/update-profile', form, {
          headers: { 'X-DRUGS-Auth-Token': getters.getAuthToken, 'content-type': 'application/json' }
        }
        );


        return response;

      } catch (e) {
        if (e.response.data.message) {
          return {
            data: {
              code: 400,
              message: e.response.data.message,
              error: e.message
            }

          }
        } else {
          return {
            data: {
              code: 400,
              message: "Ocurrio un error, o su contraseña o email son incorrectas",

            }

          }
        }

      }
    },
    sendVerifyEmailRegister: async ({ commit, getters }, form) => {
      try {

        const response = await axios.post(
          '/users/veriphy-email', form, {
          headers: { 'X-DRUGS-Access-Token': getters.getAccessToken, 'content-type': 'application/json' }
        }
        );


        return response;

      } catch (e) {
        if (e.response.data.message) {
          return {
            data: {
              code: 400,
              message: e.response.data.message,
              error: e.message
            }

          }
        } else {
          return {
            data: {
              code: 400,
              message: "Ocurrio un error, o su contraseña o email son incorrectas",

            }

          }
        }

      }
    },


    register: async ({ commit, getters }, form) => {
      try {

        const response = await axios.post(
          '/users/create-account', form, {
          headers: { 'X-DRUGS-Access-Token': getters.getAccessToken, 'content-type': 'application/json' }
        }
        );

        //  if (response.data.code === 100) {

        //    commit('setAuthToken', response.data.data.authToken, { root: true });
        //  }

        return response;

      } catch (e) {
        if (e.response.data.message) {
          return {
            data: {
              code: 400,
              message: e.response.data.message,
              error: e.message
            }

          }
        } else {
          return {
            data: {
              code: 400,
              message: "Ocurrio un error, o su contraseña o email son incorrectas",

            }

          }
        }

      }
    },

    getprofile: async ({ commit, getters }) => {

      try {

        const response = await axios.get('/users/get-profile', {
          headers: { 'X-DRUGS-Auth-Token': getters.getAuthToken }
        })

        console.log(response.data);
        if (response.data.code === 100) {
          commit('setUserData', response.data.data.user, { root: true });

        }


        return response;

      } catch (e) {
        if (e.response.data.message) {
          return {
            data: {
              code: 400,
              message: e.response.data.message,
              error: e.message
            }

          }
        } else {
          return {
            data: {
              code: 400,
              message: "Ocurrio un error  en el servidor intente mas tarde",

            }

          }
        }

      }
    },

    getusers: async ({ commit }) => {
      try {
        const response = await axios.post('/user/getUsers', {
          headers: { 'auth-token': this.getters.getAuthToken }
        })

        return response;

      } catch (e) {
        if (e.response.data.message) {
          return {
            data: {
              code: 400,
              message: e.response.data.message,
              error: e.message
            }

          }
        } else {
          return {
            data: {
              code: 400,
              message: "Ocurrio un error  en el servidor intente mas tarde",

            }

          }
        }

      }
    },
    logout({ commit }) {
      commit('setUserData', {}, { root: true });
      commit('setAuthToken', {}, { root: true });
      localStorage.clear()
    }
  }

} 