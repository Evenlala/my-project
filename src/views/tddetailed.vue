<template>
    <div class="box1">
        <van-cell-group title="简历详情">
            <div class="div1">
                <div class="nul"></div>
                <div class="head"><img src="../assets/wallhaven-147752.jpg" alt="头像"></div>
            </div>

            <van-cell title="姓名" :value="name" />
            <van-cell title="性别" value="内容" />
            <van-cell title="民族" value="内容" />
            <van-cell title="政治面貌" value="内容" />
            <van-cell title="婚姻状况" value="内容" />
            <van-cell title="健康状况" value="内容" />
            <van-cell title="计算机等级" value="内容" />
            <van-cell title="普通话等级" value="内容" />
            <van-cell title="期望薪资" value="内容" />
            <van-cell title="联系电话" value="内容" />
            <van-cell title="联系邮箱" value="内容" />
            <van-cell title="专业信息" value="内容" />
            <van-cell title="专业方向" value="内容" />
            <van-cell title="意向单位性质" value="内容" />
            <van-cell title="意向单位行业" value="内容" />
            <van-cell title="意向工作地点" value="内容" />
            <van-cell title="自我介绍" value="内容" />
            <van-cell title="自荐信" value="内容" />
        </van-cell-group>
        <van-cell-group title="职业技能信息">
            <van-cell title="职业技能" value="内容" />
            <van-cell title="熟练程度" value="内容" />
        </van-cell-group>
        <van-cell-group title="外语技能信息">
            <van-cell title="语言" value="内容" />
            <van-cell title="读写" value="内容" />
            <van-cell title="听说" value="内容" />
            <van-cell title="熟练" value="内容" />
        </van-cell-group>
        <van-button type="info" size="small"  @click="onClick">未查看</van-button>
        <van-button type="info" size="small">不符合</van-button>
        <van-button type="info" size="small">通知面试</van-button>

    </div>


</template>
<script>
    export default{
        name:"tddetailed",
        data(){
            return{
                img:'',
                name:'',
                sex:'',


            }
        }

    }
</script>
<style lang="less">
    .box1{
        width: 90%;
        margin-left: 5%;
        .div1{
            width: 100%;
            .nul{
                height: 30px;
                width: 100%;
            }
            .head{
                width: 100px;
                height: 100px;
                margin: 0 auto;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }

        }
        .van-button{
            margin-left: 35px;
            margin-top: 20px;
            margin-bottom: 10px;

        }

    }

</style>