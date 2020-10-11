import axios from 'axios'
export default{
    state:{
       user:{},
       authToken:'',
       users:[]
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
        },
        getUser : state =>{
          return state.user
        }
    },
    actions:{
         login: async ({commit},form) =>{
            try {
                
               const  response = await axios.post(
                    '/user/login', form
                  );
                  if (response.data.code === 200) {
                    commit('setAuthToken', response.data.token, { root: true });
                  }
            
                  return response;

            } catch (e) {
              if (e.response.data.message) {
                  return {
                    data:{
                      code: 400,
                      message: e.response.data.message,
                      error: e.message
                    }
                   
                  }
                } else {
                  return {
                    data:{
                      code: 400,
                      message: "Ocurrio un error  al intentar loguearse intente mas tarde",
                  
                    }
                   
                  }
                }
              
          }
        },

        register:async (form) =>{
            try {
                const response = await axios.post('/user/register',form)
            
                  return response;

            } catch (e) {
                if (e.response.data.message) {
                    return {
                      data:{
                        code: 400,
                        message: e.response.data.message,
                        error: e.message
                      }
                     
                    }
                  } else {
                    return {
                      data:{
                        code: 400,
                        message: "Ocurrio un error  al registrarse intente mas tarde",
                    
                      }
                     
                    }
                  }
                
            }
        },

        getprofile: async () =>{
          try {
            const response = await axios.post('/user/getProfile',{
              headers:{'auth-token':this.getters.getAuthToken}
            })
        
              return response;

        } catch (e) {
            if (e.response.data.message) {
                return {
                  data:{
                    code: 400,
                    message: e.response.data.message,
                    error: e.message
                  }
                 
                }
              } else {
                return {
                  data:{
                    code: 400,
                    message: "Ocurrio un error  en el servidor intente mas tarde",
                
                  }
                 
                }
              }
            
        }
        },

        getusers:async()=>{
          try {
            const response = await axios.post('/user/getUsers',{
              headers:{'auth-token':this.getters.getAuthToken}
            })
        
              return response;

        } catch (e) {
            if (e.response.data.message) {
                return {
                  data:{
                    code: 400,
                    message: e.response.data.message,
                    error: e.message
                  }
                 
                }
              } else {
                return {
                  data:{
                    code: 400,
                    message: "Ocurrio un error  en el servidor intente mas tarde",
                
                  }
                 
                }
              }
            
        }
        }
    }
    
}