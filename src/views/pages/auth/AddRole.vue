<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col>
        <b-card>
          <div slot="header">
            <strong>新增</strong> 角色
          </div>
          <b-form @click.prevent>
            <b-form-group
                label="角色名稱"
                label-for="roleName"
                description="請輸入角色名稱"
                :label-cols="2"
            >
              <b-form-input id="roleName" type="text" v-model="roleName" placeholder="Enter .." autocomplete="username email"></b-form-input>
            </b-form-group>
            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary" @click="addRole"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
              <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import { role } from '@/api/auth'

  export default {
    name: "AddRole",
    data () {
      return {
        roleName: ''
      }
    },
    methods: {
      addRole () {
        const data = {
          roleName: this.roleName
        }
        role.axiosAddRole(data)
          .then(data => {
            console.log(data);
            console.log('data.status === 1', data.status === 1)
            if (data.status === 1) {
            //  this.$notify.success('This is success message');
              alert('新增角色成功')
            }
          })
      }
    }
  }
</script>

<style scoped>

</style>
