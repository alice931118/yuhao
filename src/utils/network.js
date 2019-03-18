import common from '@/common/constant';


const env = common.env.VUE_APP_ENV_ALIAS;
let envConfig = {blockchain: 'eos'};

if (env == 'tobetio') {
    envConfig.host = "tobet.io";
    envConfig.port = 443;
    envConfig.protocol = "https";
    envConfig.chainId = "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906";
    envConfig.diceBankerAccount = 'tobetioadmin';
    envConfig.pledgeAccount = 'tobetiostake';
}else {
    envConfig.host = "192.168.0.108";
    envConfig.port = 80;
    envConfig.protocol = "http";
    envConfig.chainId = "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f";
    envConfig.diceBankerAccount = 'dappdicedpos';
    envConfig.pledgeAccount = 'tobetiostake';
}
export default envConfig;