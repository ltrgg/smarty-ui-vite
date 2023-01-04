import { App } from "vue";
import jsxButton from "./jsxButton";
import SFCButton from "./SFCButton.vue";
import myButton from "./button/Button";
export default {
  install(App: App): void {
    //为了app.use全部引入组件
    App.component(jsxButton.name, jsxButton);
    App.component(SFCButton.name, SFCButton);
    App.component(myButton.name, myButton);
  },
};
export { jsxButton, SFCButton, myButton };
