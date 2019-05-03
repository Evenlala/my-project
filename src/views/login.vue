
<template>
    <div class="login">
    <div class="head">
        <div class="tit">企业用户绑定</div>
    </div>
     <p>微信公众号：乐山师范学院</p>
        <div style="background-color: white">
            <van-cell-group >
                <van-field
                        v-model="userName" required clearable label="用户名" placeholder="请输入用户名"
                        @click-right-icon="$toast('question')"

                />

                <van-field
                        v-model="passWord" type="password" label="密码" placeholder="请输入密码" required
                />
            </van-cell-group>
            <van-button type="primary" class="login_btn" @click="login" >登录</van-button>
            <router-view/>
        </div>


    </div>
</template>
<script>
    export default {
        name:"login",
        data() {
            return {
                userName: '',
                passWord: '',
                /*isBtnLoading: false*/
            }
        },
       /* created () {
            if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
                this.userName = JSON.parse( localStorage.getItem('user')).userName;
                this.password = JSON.parse( localStorage.getItem('user')).passWord;
            }
        },*/
        computed: {
            btnText() {
                if (this.isBtnLoading) return '登录中...';
                return '登录';
            }
        },
        methods: {
            login() {
               /* if (!this.userName) {
                    this.$message.error('请输入用户名');
                    return;
                }
                if (!this.password) {
                    this.$message.error('请输入密码');
                    return;
                }*/
               /*this.axios.get('http://localhost:8022/user?username='+this.userName+'&password='+this.passWord).then((res)=>{
                    if(res.data.length>0){
                        var ses=window.localStorage;
                        var d=JSON.stringify(res.data[0]);
                        ses.setItem('data',d);
                        this.$router.push('/')
                    }else{
                        console.log('请输入正确的账号密码')
                    }
                })/!*.catch(error=>console.log(error))*!/*/
                /*if(window.sessionStorage.data){
                    next()
                }else{
                    alert('session为空，请先登录')
                    next('/login')
                }*/
                this.$axios.interceptors.request.use(
                    config => {
                        const token = localStorage.getItem('token')
                        if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加
                            config.headers.Authorization = `Bearer ${token}`;
                        }
                        return config;
                    },
                    err => {
                        return Promise.reject(err);
                    });
                // http response 拦截器 ,拦截401状态（token过期），重新登录
                this.$axios.interceptors.response.use(
                    response => {
                        return response;
                    },
                    error => {
                        if (error.response) {
                            switch (error.response.status) {
                                case 401:
                                    // 返回 401 清除token信息并跳转到登录页面
                                    localStorage.removeItem('token')
                                    router.replace({
                                        path: 'Login',
                                        query: {redirect: router.currentRoute.fullPath}
                                    })
                            }
                        }
                        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
                    });
            }
        }
    }

</script>
<style lang="less">
   .head{
       width: 100%;
       height: 200px;
       text-align: center;
       background: #ebeff2;

       .tit{
           height: 100%;
           line-height: 200px;
           font-size: 16px;
       }

   }
    p{
        font-size: 12px;
        color: gray;
        line-height: 20px;
    }
    button{
        width: 90%;
        margin-left: 5%;
        margin-top: 30px;
    }


</style>
