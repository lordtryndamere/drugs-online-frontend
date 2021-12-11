import axios from "axios";
import Vue from 'vue'

const devInstance = createInstance('https://drugs-online-mysql.herokuapp.com/v1');
const localInstance = createInstance('http://localhost:8080/v1');
//const productionInstance = createInstance("http://localhost:3000"); // will change later

function createInstance(baseURL){
    return axios.create({
        baseURL
    });
}

export default {
    install () {
        Vue.prototype.$http = localInstance
    }
}; // Check debug/build mode