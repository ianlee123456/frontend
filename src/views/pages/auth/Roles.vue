<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col>
        <div>
          <RoleCrudTable :show-empty="true" :table-data="roles" striped caption="角色" :fields="fields">
            <template slot="top">
              <router-link to="/auth/roles/add">
                <b-button variant="outline-primary" class="mb-3"> 新增 </b-button>
              </router-link>
            </template>
          </RoleCrudTable>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import RoleCrudTable from '@/views/base/RoleCrudTable.vue'
  import { role } from '@/api/auth'

  export default {
    name: "Roles",
    data () {
      return {
        roles: [],
        fields: {
          id: { label: 'Id' },
          name: { label: 'Name' },
          buttons: { label: 'buttons' },
        }
      }
    },
    components: {
      RoleCrudTable
    },
    mounted() {
      role.axiosGetRoles().then(data => {
        console.log(data)
        this.roles = data.results.roles
      });
    },
    methods: {
      addRole () {
        role.axiosAddRole()
      }
    }
  }
</script>

<style scoped>

</style>
