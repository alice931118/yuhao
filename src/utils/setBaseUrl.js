//这里是一个默认的url，可以没有
let urlParams = {
    baseUrl: "",
}
console.log('process.env.VUE_APP_ENV_ALIAS:'+process.env.VUE_APP_ENV_ALIAS);
switch (process.env.VUE_APP_ENV_ALIAS) {
    case 'test':
        urlParams.baseUrl = "https://35.198.235.4:8080/"
        break
    case 'tobetio':
        urlParams.baseUrl = "https://35.198.235.4:8080/"
        break
    default:
        urlParams.baseUrl = '/localApi'
}

export default urlParams;