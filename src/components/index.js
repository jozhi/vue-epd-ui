import Button from './Button/Button.vue'
import Input from './Input/Input.vue'
import Select from './Select/Select.vue'
import Modal from './Modal/Modal.vue'
import Table from './Table/Table.vue'
import TableColumn from './Table/TableColumn.vue'

const components = {
    Button,
    Input,
    Select,
    Modal,
    Table,
    TableColumn,
}

var VuePlugin = {}
VuePlugin.install = function(Vue) {
    for (let cptItem in components) {
        Vue.component('epd'+cptItem, components[cptItem]);
    }
}
export default VuePlugin