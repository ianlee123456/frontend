<template>
  <b-card>
    <div slot="header" v-html="caption"></div>
    <slot name="top">this is header top</slot>
    <b-table
        :show-empty="showEmpty" empty-text="No records" :dark="dark" :hover="hover"
        :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm"
        :items="items" :fields="captions" :current-page="currentPage" :per-page="perPage">
      <template slot="status" slot-scope="data">
        <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
      </template>
      <template slot="buttons" slot-scope="row">
          <router-link :to="`/auth/roles/${row.item.id}`">
            <b-button variant="outline-primary" class="btn-sm mb-1 mr-1"> 編輯 </b-button>
          </router-link>
          <b-button variant="outline-primary" class="btn-sm mb-1"> 刪除 </b-button>
        </template>
    </b-table>
    <nav>
      <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
  </b-card>
</template>

<script>


export default {
  name: 'CrudTable',
  inheritAttrs: false,
  props: {
    showEmpty: {
      type: Boolean,
      default: false
    },
    caption: {
      type: String,
      default: 'Table'
    },
    hover: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    tableData: {
      type: [Array, Function],
      default: () => []
    },
    fields: {
      type: [Array, Object],
      default: () => []
    },
    perPage: {
      type: Number,
      default: 5
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      currentPage: 1,
    }
  },
  computed: {
    items: function() {
      const items =  this.tableData
      return Array.isArray(items) ? items : items()
    },
    totalRows: function () { return this.getRowCount() },
    captions: function() { return this.fields }
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    getRowCount: function () {
      return this.items.length
    }
  }
}
</script>
