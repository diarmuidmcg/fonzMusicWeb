import Vue from 'vue'
import HomePage from '@/components/homePageComponents/homePage';

const components = { HomePage }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
