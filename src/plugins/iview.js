// 按需引入iview
import Vue from 'vue'
import 'iview/dist/styles/iview.css'


import { Circle , Switch , Dropdown, DropdownMenu, DropdownItem ,Message , Page , Modal, Divider, Poptip, Button, Tabs, TabPane ,Icon,
Progress, Input, Form, FormItem, DatePicker} from 'iview';


Vue.component('iCircle', Circle);
Vue.component('iSwitch', Switch);
Vue.component('Dropdown', Dropdown);
Vue.component('DropdownMenu', DropdownMenu);
Vue.component('DropdownItem', DropdownItem);
Vue.component('Divider',Divider);
Vue.component('Page', Page);
Vue.component('Modal', Modal);
Vue.component('Poptip', Poptip);
Vue.component('Button', Button);
Vue.component('Tabs', Tabs);
Vue.component('TabPane', TabPane);
Vue.component('Icon', Icon);
Vue.component('IProgress',Progress);
Vue.component('Input', Input);
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('DatePicker', DatePicker);
 


Vue.prototype.$Message = Message;