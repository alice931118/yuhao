<template>
    <div class="header-page">
        <Icon class="icon" type="ios-ionitron-outline" size="24" />
        <div class="logo">Enterprise-search</div>
    </div>
</template>

<script>
export default {
    name: 'myHeader',
    data(){
        return{}
    }
}
</script>
<style scoped>
.header-page{
    padding: 0 30px;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    text-align: left;
    background-color: #fff;
    box-shadow: 0 0 1px 0 rgba(10, 31, 68, 0.08), 0 3px 4px 0 rgba(10, 31, 68, 0.1);
}
.logo, .icon{
    display: inline-block;
    margin: 0 10px;
}
</style>

