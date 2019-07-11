<template>
  <b-card>
    <div slot="header">
      <strong>編輯</strong> 角色
    </div>
    <b-form @click.prevent.native>
      <b-form-group validated
                    label="Id"
                    label-for="Id">
        <b-form-input id="Id" type="text" v-model="role.id" disabled></b-form-input>
      </b-form-group>
      <b-form-group validated
                    label="guard name"
                    label-for="guard_name">
        <b-form-input id="guard_name" type="text"  v-model="role.guard_name" disabled></b-form-input>
      </b-form-group>
      <b-form-group validated
                    label="角色名稱"
                    label-for="name">
        <b-form-input id="name" type="text"  v-model="role.name"></b-form-input>
      </b-form-group>
      <b-form-group validated
                    label="created_at"
                    label-for="created_at">
        <b-form-input id="created_at" type="text"  v-model="role.created_at" disabled></b-form-input>
      </b-form-group>
      <b-form-group validated
                    label="updated_at"
                    label-for="updated_at">
        <b-form-input id="updated_at" type="text"  v-model="role.updated_at" disabled></b-form-input>
      </b-form-group>




      <b-form-group>
        <template slot="label">
          <b>權限:</b><br>
          <b-form-checkbox
              v-model="allSelected"
              :indeterminate="indeterminate"
              aria-describedby="permissions"
              aria-controls="permissions"
              @change="toggleAll"
          >
            {{ allSelected ? '取消全選' : '全選' }}
          </b-form-checkbox>
        </template>

        <b-form-checkbox-group
            id="permissions"
            v-model="selected"
            :options="permissions"
            name="permissions"
            class="ml-4"
            aria-label="Individual flavours"
        ></b-form-checkbox-group>
      </b-form-group>


      <div>{{selected}}</div>






      <div slot="footer">
        <b-button type="submit" size="sm" variant="primary" @click="submitRoleNPermission"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
        <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
      </div>
    </b-form>
  </b-card>
</template>

<script>
  import { role, permission } from '@/api/auth'

  export default {
    name: "EditRole",
    data () {
      return {
        selected: [], // Must be an array reference!
        permissions: [],
        allSelected: false,
        indeterminate: false,
        role: {
          created_at: "",
          guard_name: "",
          id: 0,
          name: "",
          updated_at: "",
        },
      }
    },
    mounted() {
      this.getRole()
      this.getPermissions()
    },
    methods: {
      getRole () {
        const roleId = this.$route.params.id;
        role.axiosGetRole(roleId)
          .then(data => {
            this.role = data.results.role;
            this.selected = data.results.permissions || [];

            console.log('this.role',this.role)
            console.log('this.selected',this.selected)
          })
      },
      getPermissions () {
        permission.axiosGetPermissions()
          .then(data => {
            this.permissions.length = 0
            data.results.permissions.map(permission => {
              this.permissions.push({text: permission.name, value: permission.id})
            })
            console.log(this.permissions)
          })
      },
      toggleAll(checked) {
        this.selected = checked ? this.permissions.map(permission => this.selected.push(permission.value)) : []
      },
      submitRoleNPermission (event) {
        event.stopPropagation()
        event.preventDefault()

        const patchData = {
          permissions: this.selected,
          role: this.role.id
        }
        permission.axiosPatchPermissions(patchData)

        const roleData = {
          name: this.role.name
        }
        role.axiosPutRole(this.role.id, roleData)

        Promise.all([
          permission.axiosPatchPermissions(patchData),
          role.axiosPutRole(this.role.id, roleData)
        ]).then(function (values) {
          // console.log(values);
          const [data1, data2] = values
          console.log('resA.data.status', data1.status)
          console.log('resB.data.status', data2.status)
          if (data1.status === 1 && data2.status === 1) {
            alert('更新成功')
          }
        })

      }
    },
    watch: {
      selected(newVal, oldVal) {
        // Handle changes in individual permission checkboxes
        if (newVal.length === 0) {
          this.indeterminate = false
          this.allSelected = false
        } else if (newVal.length === this.permissions.length) {
          this.indeterminate = false
          this.allSelected = true
        } else {
          this.indeterminate = true
          this.allSelected = false
        }
      }
    }
  }
</script>

<style scoped>

</style>
