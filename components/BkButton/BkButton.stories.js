import { action } from '@storybook/addon-actions'

import BkButton from './BkButton.vue'

export default {
    title: 'BkButton',
}

export const normal = () => ({
    components: { BkButton },
    template: '<bk-button @clicked="buttonClicked">Click here</bk-button>',
    methods: { buttonClicked: action('button clicked') },
})
