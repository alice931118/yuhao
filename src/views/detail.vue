<template>
    <div class="detail-page">
        <div class="detail-header">
            <div class="back-btn" @click="goBack()">
                <Icon type="md-arrow-back" size="24" style="line-height: 32px;"/>
                <p>Back</p>
            </div>
        </div>
        <div class="detail-content-wrap" v-if="chosenMessage">
            <div class="detail-content">
                <div class="tip">
                    <p class="time canchoose">{{formatTime(chosenMessage.nativeCreatedAt)}}</p>
                    <p class="from canchoose">{{chosenMessage.datasourceName}}</p>
                </div>
                <h1>{{chosenMessage.title}}</h1>
                <div class="img" v-if="chosenMessage.attachment && chosenMessage.attachment.image[0]">
                    <img :src="chosenMessage.attachment.image[0].url" alt="">
                </div>
                <div class="text">
                    {{chosenMessage.content}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import('../assets/css/detail.css');
import utils from '@/utils/utils';

export default {
    name: 'detail',
    props:['chosenMessage'],
    data(){
        return{

        }
    },
    methods:{
        goBack(){
            console.log(32)
            this.$emit('closeDetail',false)
        },

        formatTime(seconds){
            let _date = new Date(seconds);
            let _month = '', _day = '', _year = '';
            _year = _date.getFullYear();
            _month = utils.switchMonthName(_date.getMonth()+1);
            _day = utils.toFillZero(_date.getDate());

            return _month + ' ' +_day + ', ' +_year
        },
    }
}
</script>
