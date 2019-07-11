<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col>
        <b-card>
          <div slot="header">
            <strong>新增</strong> 權限
          </div>
          <b-form @click.prevent>
            <b-form-group
                label="權限名稱"
                label-for="permissionName"
                description="請輸入權限名稱"
                :label-cols="2"
            >
              <b-form-input id="permissionName" type="text" v-model="permissionName" placeholder="Enter .." autocomplete="username email"></b-form-input>
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
  import { permission } from '@/api/auth'

  export default {
    name: "AddPermission",
    data () {
      return {
        permissionName: ''
      }
    },
    methods: {
      addRole () {
        const data = {
          permissionName: this.permissionName
        }
        permission.axiosAddPermission(data)
          .then(data => {
            console.log(data);
            console.log('data.status === 1', data.status === 1)
            if (data.status === 1) {
              //  this.$notify.success('This is success message');
              alert('新增權限成功')
            }
          })
      }
    }
  }
</script>

<style scoped>

</style>
