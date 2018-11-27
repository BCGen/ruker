interface Window {
  [key: string]: any
}

interface CSRF_TOKEN_TYPE extends Element {
  content: String
}

declare const _: import('lodash').__
declare const axios: import('axios').AxiosInstance
declare const Popper: typeof import('popper.js').default
declare const Swiper: typeof import('swiper').default
declare const Vue: import('vue').VueConstructor
