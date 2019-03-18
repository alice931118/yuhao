import Vue from 'vue'

import axios from 'axios';
import urlParams from '../utils/setBaseUrl'

const constant = {};
constant.env = process.env;
constant.url = urlParams;


axios.defaults.baseURL = urlParams.baseUrl;


axios.defaults.withCredentials = true;
axios.defaults.timeout = 30000;
Vue.prototype.$axios = axios;

export default constant;