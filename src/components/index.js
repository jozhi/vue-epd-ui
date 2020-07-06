import Button from './Button/Button.vue'
import Input from './Input/Input.vue'
import Select from './Select/Select.vue'
import Modal from './Modal/Modal.vue'

const components = {
    Button,
    Input,
    Select,
    Modal,
}

var VuePlugin = {}
VuePlugin.install = function(Vue) {
    for (let cptItem in components) {
        Vue.component('ep'+cptItem, components[cptItem]);
    }
}
export default VuePlugin