<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col>
        <AdminCrudTable :show-empty="true" :table-data="admins" striped caption="用戶管理" :fields="fields">
          <template slot="top" slot-scope="row">
            <router-link to="/auth/roles/add">
              <b-button variant="outline-primary" class="mb-3"> 新增 </b-button>
            </router-link>
          </template>
        </AdminCrudTable>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import AdminCrudTable from '@/views/base/AdminCrudTable.vue'
  import { admin } from '@/api/auth/index'

  export default {
    name: "Admins",
    data () {
      return {
        admins: [],
        fields: {
          id: { label: '編號' },
          name: { label: '名稱' },
          email: { label: '信箱' },
          created_at: { label: '建立時間' },
          updated_at: { label: '最後更新' },
          buttons: { label: '操作' },
        }
      }
    },
    components: {
      AdminCrudTable
    },
    mounted() {
      admin.testBase();

      admin.axiosGetAdmins().then(data => {
        console.log(data)
        this.admins = data.results.admins
      });
    },
    methods: {
      test () {
        alert('test')
      },
      addAdmin () {

      }
    }
  }
</script>

<style scoped>

</style>
