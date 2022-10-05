import { defineStore } from 'pinia'
import { FetchRequest } from '@/helpers/fetch-request'
import { toFormData } from '@/helpers/misc'

const form = {
  name: '',
  email: '',
  password: '',
  is_admin: '',
}

export const useUsersStore = defineStore('users', {
  state: () => ({
    form: { ...form },
    req: new FetchRequest('users', 'GET').withProps({ pagination: true, delay: 500 }),
    createReq: new FetchRequest('users', 'POST')
  }),
  getters: {},
  actions: {
    load() {
      this.req.send()
    },
    create() {
      this.createReq.send({
        body: toFormData(this.form)
      }).then(res => {
        this.resetForm()
      })
    },
    resetForm() {
      this.form = { ...form }
    },
  },
})
