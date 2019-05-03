<style lang="less">

    .box{
        .box1{
            .head1{
                width: 30px;
                background-color: #2687fc;
                margin-top: 20px;
                line-height: 40px;
            }
            .til1{
                height: 40px;
                background-color: #7cb7fd;
                color: white;
                margin-left: 10px;
                margin-top: 20px;
                line-height: 40px;
            }
            width: 94%;
            margin-left: 3%;
            background-color: white;
            border: 1px solid gainsboro;
            border-radius: 3px;
            box-shadow: 0 0 1px #c7c497;
            .div1{
                height: 30px;
                margin-left: 3%;
            }
            .btn1{
                margin-left: 60px;
            }
            .btn2{
                margin-left: 60px;
                margin-bottom: 20px;
            }
        }
        .box2{
            width: 94%;
            margin-left: 3%;
            background-color: white;
            border: 1px solid gainsboro;
            border-radius: 3px;
            margin-top: 15px;
            .head2{
                width: 30px;
                background-color: #2687fc;
                margin-top: 20px;
                line-height: 40px;
            }
            .til2{
                height: 40px;
                background-color: #7cb7fd;
                color: white;
                margin-left: 10px;
                margin-top: 20px;
                line-height: 40px;
            }
        }
    }

</style>

<template>
    <div class="box">
        <div class="box1">
            <span class="head1">01</span>
            <span class="til1">基本信息</span>
            <div >
                <div class="div1" v-for="item in items">
                    <span style="color: red">*</span>{{ item.title }}:{{item.value}}
                </div>
                <div class="div1" v-for="item in items1">
                    {{ item.title }}:{{item.value}}
                </div>
                <van-button class="btn1" type="info" size="mini">编辑</van-button>
                <van-button class="btn2" type="primary"size="mini">保存</van-button>
            </div>

        </div>
        <div class="box2">
            <span class="head2">02</span>
            <span class="til2">证件信息</span>
        </div>
    </div>


</template>


<script>
    export default {
        name:"user",
        data(){
            return{
                items:[
                    {
                        title:"企业用户名",
                        value:"fegegfu"
                    },
                    {
                        title:"企业名称",
                        value:"成都望子成龙教育科技有限公司"
                    },
                    {
                        title:"注册资金",
                        value:"1234万"
                    },
                    {
                        title:"单位性质",
                        value:"中学教育"
                    },
                    {
                        title:"单位行业",
                        value:"教育"
                    },
                    {
                        title:"联系人",
                        value:"焦老师"
                    },
                    {
                        title:"手机号码",
                        value:"13735468743"
                    },
                    {
                        title:"所在地址",
                        value:"四川成都市"
                    }

                ],
                items1:[
                    {
                        title:"社会行用码",
                        value:""
                    },
                    {
                        title:"营业执照代码",
                        value:""
                    },
                    {
                        title:"组织机构代码",
                        value:""
                    },
                    {
                        title:"固定电话",
                        value:""
                    },
                    {
                        title:"电子邮箱",
                        value:""
                    },
                    {
                        title:"邮政编码",
                        value:""
                    },
                    {
                        title:"传真号码",
                        value:""
                    },
                    {
                        title:"联系地址",
                        value:""
                    },
                    {
                        title:"主页地址",
                        value:""
                    },
                    {
                        title:"QQ号码",
                        value:""
                    },
                    {
                        title:"其他联系人",
                        value:""
                    },
                    {
                        title:"其他邮编",
                        value:""
                    },
                    {
                        title:"注册时间",
                        value:""
                    },
                    {
                        title:"公司简介",
                        value:""
                    },
                    {
                        title:"公司备注",
                        value:""
                    }
                ]
            }
        }


    }
</script>
