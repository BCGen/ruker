interface Window {
  axios: import('axios').AxiosStatic
  Vue: import('vue').VueConstructor
}

interface CSRF_TOKEN_TYPE extends Element {
  content: String
}

var axios: typeof window.axios
var Vue: typeof window.Vue

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
