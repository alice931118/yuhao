//这里是一个默认的url，可以没有
let urlParams = {
    baseUrl: "",
}
console.log('process.env.VUE_APP_ENV_ALIAS:'+process.env.VUE_APP_ENV_ALIAS);
switch (process.env.VUE_APP_ENV_ALIAS) {
    case 'test':
        urlParams.baseUrl = "/api"
        break
    case 'production':
        urlParams.baseUrl = "/api"
        break
    default:
        urlParams.baseUrl = '/localApi'
}
export default urlParams;