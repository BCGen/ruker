import { __ } from 'lodash'
import PopperType from 'popper.js'
import { VueConstructor, ComponentOptions } from 'vue'
import { AxiosInstance } from 'axios'

declare global {
  interface Window {
    [key: string]: any
  }

  const _: __
  const Popper: typeof PopperType
  const axios: AxiosInstance
  const Vue: VueConstructor
  const VueComponentOptions: ComponentOptions<any>

  interface CSRF_TOKEN_TYPE extends Element {
    content: String
  }
}
