// 自动按需引入 Vant 组件
import {
  Tabbar,
  TabbarItem,
  Button,
  Field,
  Switch,
  Toast,
  Cell,
  CellGroup,
  CountDown,
  Area,
  Popup,
  IndexBar,
  IndexAnchor,
  Icon,
  Loading,
  Overlay,
  Card,
  Tag,
  SwipeCell,
  Panel,
  PullRefresh,
  Empty,
  NavBar,
  Uploader,
  ActionSheet,
  NumberKeyboard,
  ImagePreview,
  Image as VanImage
} from "vant";
let vantUIs = [
  Tabbar,
  TabbarItem,
  Button,
  Field,
  Switch,
  Toast,
  Cell,
  CellGroup,
  CountDown,
  Area,
  Popup,
  IndexBar,
  IndexAnchor,
  Icon,
  Loading,
  Overlay,
  Card,
  Tag,
  SwipeCell,
  Panel,
  PullRefresh,
  Empty,
  NavBar,
  Uploader,
  ActionSheet,
  NumberKeyboard,
  ImagePreview,
  VanImage
];

export default {
  install(Vue) {
    vantUIs.forEach(vantUI => [
      Vue.component(vantUI.name, vantUI)
      // Vue.use(vantUI)    // 也可以使用 Vue.use()
    ]);
  }
};
