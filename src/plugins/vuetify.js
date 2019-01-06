import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#8bc34a',
    secondary: '#2196f3',
    accent: '#03bca4',
    error: '#e91e63',
    warning: '#ffc107',
    info: '#03a9f4',
    success: '#4caf50'
  },
  customProperties: true,
  iconfont: 'md'
})
