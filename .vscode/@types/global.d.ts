// @ts-ignore
import { __ } from "lodash";
// @ts-ignore
import PopperType from "popper.js";
// @ts-ignore
import { VueConstructor, ComponentOptions } from "vue";
// @ts-ignore
import { AxiosInstance } from "axios";

declare global {
  interface Window {
    [key: string]: any;
  }

  const _: __;
  const Popper: typeof PopperType;
  const axios: AxiosInstance;
  const Vue: VueConstructor;
  const VueComponentOptions: ComponentOptions<any>;

  interface CSRF_TOKEN_TYPE extends Element {
    content: String;
  }
}
