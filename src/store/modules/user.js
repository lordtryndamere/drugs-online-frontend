export default{
    state:{
       user:{},
       authToken:''
    },
    mutations:{
        setUserData(state,data){
            state.user = data
        },
        setAuthToken(state,data){
            localStorage.setItem('auth',data)
            state.authToken = data
        }
    },
    getters:{
        getAuthToken:state =>{
            return state.authToken
        }
    },
    actions:{
         login: async ({commit},form) =>{
            try {
                
               const  response = await this.$axios.$post(
                    '/user/login', form
                  );
                  if (response.code === 200) {
                    commit('setAuthToken', response.authToken, { root: true });
                  }
            
                  return response;

            } catch (e) {
                if (e.response.data.message) {
                    return {
                      code: 102,
                      message: e.response.data.message,
                      error: e
                    }
                  } else {
                    return {
                      code: 101,
                      message: 'Ocurrió un error en el servidor. Intente nuevamente más tarde',
                      error: e
                    }
                  }
            }
        },

        register:async ({commit },form) =>{
            try {
                
 
                const response = await this.$axios.$post('/user/register',form)
                if (response.code === 200) {
                    commit('setUserData', response.user);
                  }
            
                  return response;

            } catch (e) {
                if (e.response.data.message) {
                    return {
                      code: 102,
                      message: e.response.data.message,
                      error: e
                    }
                  } else {
                    return {
                      code: 101,
                      message: 'Ocurrió un error en el servidor. Intente nuevamente más tarde',
                      error: e
                    }
                  }
                
            }
        }
    }
    
}