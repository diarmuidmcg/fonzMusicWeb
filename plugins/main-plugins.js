import HomePage from '@/components/homePageComponents/homePage';
export default {
  install(Vue) {
    // install components globally here
    Vue.component(HomePage.name, HomePage)
  }
}
