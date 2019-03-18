<template>
    <div class="detail-page">
        <div class="detail-header">
            <div class="back-btn" @click="goBack()">
                <Icon type="md-arrow-back" size="24" style="line-height: 32px;"/>
                <p>Back</p>
            </div>
        </div>
        <div class="detail-content-wrap">
            <div class="detail-content">
                <div class="tip">
                    <p class="time canchoose">Feb 19, 2019 | 1010</p>
                    <p class="from canchoose">ABS CBN News</p>
                </div>
                <h1>Facebook @ 15: Takeaways For Entrepreneurs</h1>
                <div class="img">
                    <img src="../assets/img/message-image.jpg" alt="">
                </div>
                <div class="text">
                    The Academy of Motion Picture Arts and Sciences announced on Tuesday that would be among the performers at the Feb. 24 ceremony in Hollywood but did not say when the band would take the stage.The Academy of Motion Picture Arts and Sciences announced on Tuesday that would be among the performers at the Feb. 24 ceremony in Hollywood but did not say when the band would take the stage. 
                    The Academy of Motion Picture Arts and Sciences announced on Tuesday that would be among the performers at the Feb. 24 ceremony in Hollywood but did not say when the band would take the stage.The Academy of Motion Picture Arts and Sciences announced on Tuesday that would be among the performers at the Feb. 24 ceremony in Hollywood but did not say when the band would take the stage.
                    The Academy of Motion Picture Arts and Sciences announced on Tuesday that would be among the performers at the Feb. 24 ceremony in Hollywood but did not say when the band would take the stage.The Academy of Motion Picture Arts and Sciences announced on Tuesday that would be among the performers at the Feb. 24 ceremony in Hollywood but did not say when the band would take the stage. 
                    The Academy of Motion Picture Arts and Sciences announced on Tuesday that would be among the performers at the Feb. 24 ceremony in Hollywood but did not say when the band would take the stage.The Academy of Motion Picture Arts and Sciences announced on Tuesday that would be among the performers at the Feb. 24 ceremony in Hollywood but did not say when the band would take the stage.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import('../assets/css/detail.css');

export default {
    name: 'detail',
    data(){
        return{

        }
    },
    methods:{
        goBack(){
            console.log(32)
            this.$emit('closeDetail',false)
        }
    }
}
</script>
