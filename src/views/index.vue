<style lang="less" xmlns:router-link="http://www.w3.org/1999/xlink">
    .index{
        width: 100%;
        box-sizing: border-box;
        background: #fff;
        .logo{
            text-align: center;
            width: 100%;
            img{
                width: 100%;
                height: 220px;
            }
            p{
                position: absolute;
                top: 100px;
                left: 30px;
                font-size: 16px;
                font-family: "Yu Gothic UI Semibold";
            }
        }
        .div1{
            height: 100px;
            text-align: center;


          .img1{
              margin-top: 10px;
              margin-left: 35px;
              width: 50px;
              height: 50px;
              background:#2093fe;
              border-radius: 20px;
              text-align: center;
              img{
                  width: 80%;
                  height: 80%;
                  margin-top: 5px;
              }
          }
            p{
                line-height: 40px;
            }
        }

    }


</style>
<template>
    <div class="index">
        <div class="logo">
            <img src="../assets/top.png" alt="logo">
            <p>企业精准招聘管理系统</p>
        </div>
        <van-row type="flex" class="div1">

            <van-col span="8" style="border-bottom: 1px solid gainsboro;border-right: 1px solid gainsboro"><div class="img1"><img src="../assets/2.png" alt=""></div><p>企业信息</p></van-col>
            <van-col span="8" style="border-bottom: 1px solid gainsboro;border-right: 1px solid gainsboro"><div class="img1"><img src="../assets/5.png" alt=""></div><p>专场招聘</p></van-col>
            <van-col span="8" style="border-bottom: 1px solid gainsboro;"><div class="img1"><img src="../assets/3.png" alt=""></div><p>双选会</p></van-col>
        </van-row>
        <van-row type="flex" class="div1">
            <van-col span="8" style="border-bottom: 1px solid gainsboro;border-right: 1px solid gainsboro"><div class="img1"><img src="../assets/4.png" alt=""></div><p>校外招聘</p></van-col>
            <van-col span="8" style="border-bottom: 1px solid gainsboro;border-right: 1px solid gainsboro"><div class="img1"><img src="../assets/1.png" alt=""></div><p>面试</p></van-col>
        
        </van-row>
        <router-view/>

    </div>
</template>
<script>
    export default {
        name:"index"
    }
</script>

