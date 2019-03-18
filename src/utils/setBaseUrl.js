//这里是一个默认的url，可以没有
let urlParams = {
    baseUrl: "",
    mqttUrl: "",
    apiAsiaUrl:"",
    mqttAsiaUrl:"",
}
console.log('process.env.VUE_APP_ENV_ALIAS:'+process.env.VUE_APP_ENV_ALIAS);
switch (process.env.VUE_APP_ENV_ALIAS) {
    case 'test':
        urlParams.baseUrl = "http://192.168.0.33/api/",  //投骰子游戏服务器地址
        urlParams.mqttUrl = 'mqtt://192.168.0.16:8083/mqtt',//MQTT地址
        urlParams.platformUrl = 'http://192.168.0.16', //平台管理后台服务器地址（用于初次请求维护状态）
        urlParams.fruitGameUrl = 'http://192.168.0.16' //水果机游戏服务器地址
        break
    case 'tobetio':
        urlParams.baseUrl = "https://tobet.io/api",   //tobet.io生产环境url
        urlParams.mqttUrl = 'wss://mqtt.tobet.io/mqtt',
        urlParams.platformUrl = 'https://api-console.tobet.io'
        urlParams.fruitGameUrl = 'https://api-console.tobet.io'
        break
    case 'tobetone':
        urlParams.baseUrl = "https://tobet.one/api",   //tobet.one生产环境url
        urlParams.apiAsiaUrl = "https://api-asia.tobet.one/api",   //tobet.one生产环境url
        urlParams.mqttUrl = 'wss://mqtt.tobet.one/mqtt',//tobet.one生产环境亚洲地区接口地址
        urlParams.mqttAsiaUrl = 'wss://mqtt-asia.tobet.one/mqtt',//tobet.one生产环境mqtt地址
        urlParams.platformUrl = 'https://api-console.tobet.one'
        urlParams.fruitGameUrl = 'https://api-console.tobet.one'
        break
    case 'tobetvip':
        urlParams.baseUrl = "https://api.tobet.vip/api",   //tobet.vip生产环境url
        urlParams.mqttUrl = 'wss://mqtt.tobet.vip/mqtt',
        urlParams.platformUrl = 'https://api-console.tobet.vip'
        urlParams.fruitGameUrl = 'https://api-console.tobet.vip'
        break
    default:
        urlParams.baseUrl = '/localApi', 
        urlParams.mqttUrl = 'mqtt://192.168.0.16:8083/mqtt',
        urlParams.platformUrl = 'http://192.168.0.16'
        urlParams.fruitGameUrl = 'http://192.168.0.116:8080'
}

export default urlParams;