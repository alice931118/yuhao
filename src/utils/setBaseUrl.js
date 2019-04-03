//这里是一个默认的url，可以没有
let urlParams = {
    baseUrl: "",
}
console.log('process.env.VUE_APP_ENV_ALIAS:'+process.env.VUE_APP_ENV_ALIAS);
switch (process.env.VUE_APP_ENV_ALIAS) {
    case 'test':
        urlParams.baseUrl = "http://35.198.235.4:8080/api/"
        break
    case 'production':
        urlParams.baseUrl = "http://35.198.235.4:8080/api/"
        break
    default:
        urlParams.baseUrl = '/localApi'
}
export default urlParams;