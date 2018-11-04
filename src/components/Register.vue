<template lang="html">
  <div class="">
    <el-form :model="registerValidateForm" label-width="100px"  ref="registerValidateForm">
          <el-form-item
            prop="email"
            label="Username"
            :rules="rules.email"
          >
            <el-input v-model="registerValidateForm.email"></el-input>
          </el-form-item>
          <el-form-item
          prop="password"
          label="Password"
          :rules = "rules.password"
          >
            <el-input type="password" v-model="registerValidateForm.password"></el-input>
          </el-form-item>
          <el-form-item
          prop="checkPass"
          label="Re-type Password"
          :rules = "rules.checkPass"
          >
            <el-input type="password" v-model="registerValidateForm.checkPass"></el-input>
          </el-form-item>
          <el-button type="primary" @click="submitForm('registerValidateForm')">Register</el-button>
          <el-button @click="resetForm('registerValidateForm')">Reset</el-button>
    </el-form>
  </div>
</template>
·
<script>
import * as types from '../store/types'
import api from '../axios'
export default {
    name: 'login',
    data() {
        let validatePass1 = (rule, value, callback) => {
            // 6-16
            let reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,16}$/;
            if (!reg.test(value)) {
                callback(new Error('密码长度需6-16位，且包含字母和字符'))
            } else {
                callback()
            }
        };
        let validatePass2 = (rule, value, callback) => {
            value === '' ? callback(new Error('Validate password error')) :
                value !== this.registerValidateForm.password ? callback(new Error('Validate password error!')) :
                callback()
        };
        return {
            registerValidateForm: {
                email: '',
                password: '',
                checkPass: '',
                first: 'first'
            },
            rules: {
                email: [{
                        required: true,
                        message: 'Email required',
                        trigger: 'blur'
                    },
                    {
                        type: 'email',
                        message: 'Email required',
                        trigger: 'blur'
                    }
                ],
                password: [{
                        required: true,
                        message: 'Password required',
                        trigger: 'blur'
                    },
                    {
                        validator: validatePass1,
                        trigger: 'blur'
                    }
                ],
                checkPass: [{
                        required: true,
                        message: 'Password required',
                        trigger: 'blur'
                    },
                    {
                        validator: validatePass2,
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    methods: {
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let opt = this.registerValidateForm;
                    api.userRegister(opt).then(({
                        data
                    }) => {
                        if (data.success) {
                            this.$message({
                                type: 'success',
                                message: `Success`
                            })
                            //  Register 设计为了 Login 的组件，所以成功跳转时刷新一次页面
                            this.$router.go(0)
                            this.$router.push('/login')
                        } else {
                            this.$message({
                                type: 'info',
                                message: 'Info'
                            })
                        }
                    }).catch((err) => {
                        console.log(err);
                    })
                } else {
                    console.log('Error Submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style lang="css">
</style>
