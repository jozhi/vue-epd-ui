import Button from './Button/Button.vue'
import Input from './Input/Input.vue'
import Select from './Select/Select.vue'
import Modal from './Modal/Modal.vue'
import Table from './Table/Table.vue'
import TableColumn from './Table/TableColumn.vue'
import Editor from './Editor/Editor.vue'

const components = {
    Button,
    Input,
    Select,
    Modal,
    Table,
    TableColumn,
    Editor
}

var VuePlugin = {}

 // 按照规则注册组件，最终是在main.js中通过use入
VuePlugin.install = function(Vue) {
    for (let cptItem in components) {
        Vue.component('epd'+cptItem, components[cptItem]);
    }
}
export default VuePlugin