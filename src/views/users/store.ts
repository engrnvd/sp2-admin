import { defineStore } from 'pinia'
import { FetchRequest } from '@/helpers/fetch-request'
import { toFormData } from '@/helpers/misc'
import { useNotify } from '@/U/composables/Notifiy'

const notify = useNotify()
const form = {
  name: '',
  email: '',
  password: '',
  is_admin: '',
}

export const useUsersStore = defineStore('users', {
  state: () => ({
    form: { ...form },
    req: new FetchRequest('users', 'GET').withProps({
      pagination: true,
      delay: 500,
      params: {
        sort: 'id',
        sortType: 'desc',
      },
    }),
    createReq: new FetchRequest('users', 'POST')
  }),
  getters: {},
  actions: {
    load() {
      this.req.send()
    },
    create() {
      return this.createReq.send({
        body: toFormData(this.form)
      }).then(res => {
        this.req.data = this.req.data || { data: [] }
        // @ts-ignore
        this.req.data.data = this.req.data.data || []
        // @ts-ignore
        this.req.data.data.unshift(res)
        // @ts-ignore
        this.req.data.data.pop()
        this.resetForm()

        notify.success('Success', 'User created')
      })
    },
    resetForm() {
      this.form = { ...form }
    },
  },
})
