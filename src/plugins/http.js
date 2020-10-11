import axios from "axios";
import Vue from 'vue'

const devInstance = createInstance(' https://drugs-online-api.herokuapp.com/API');
//const productionInstance = createInstance("http://localhost:3000"); // will change later

function createInstance(baseURL){
    return axios.create({
        baseURL
    });
}

export default {
    install () {
        Vue.prototype.$http = devInstance
    }
}; // Check debug/build mode