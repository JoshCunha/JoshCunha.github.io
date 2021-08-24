<template>
    <div>
        <div @click="toggleDropdown" class="dropdown-button">
            <span class="button-text">{{ dropdownText }}</span>
            <i class="pi icon" :class="showDropdown ? 'pi-angle-down' : 'pi-angle-right'" />
        </div>
        <div v-if="showDropdown" class="dropdown-items-container">
            <span
                v-for="item in options"
                class="dropdown-item"
                :key="item[optionCode]"
                @click="selectItem(item)"
            >{{ item[optionName] }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dropdown",
    props: {
        placeholder: {
            type: String,
            default: "Select..."
        },
        defaultSelect: {
            type: String,
            required: false
        },
        options: {
            type: Array,
            required: true
        },
        optionName: {
            type: String,
            default: "name"
        },
        optionCode: {
            type: String,
            default: "code"
        }
    },
    data() {
        return {
            showDropdown: false,
            dropdownDisplay: ""
        }
    },
    computed: {
        dropdownText() {
            return this.dropdownDisplay 
            ? this.dropdownDisplay 
            : this.defaultSelect ? this.defaultSelect : this.placeholder;
        }
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        selectItem(item) {
            this.dropdownDisplay = item[this.optionName];
            this.$emit('updateDropdown', item[this.optionCode]);
            this.toggleDropdown();
        }
    }
}
</script>

<style lang="scss">
.dropdown-button {
    display: flex;
    flex-direction: row;
    width: fit-content;
    min-width: 200px;
    min-height: 40px;
    border-radius: 10px;
    background: #f0f0f0;
    border: 1px solid #808080;

    .button-text {
        color: #272727;
        margin: 11px 0px 0px 10px;
    }

    .icon {
        font-weight: bold;
        margin: 11px 10px 0px auto;
        height: 20px;
        width: 20px;
        color: #272727;
    }

    &:hover {
        background: #e0e0e0;
        cursor: pointer;
    }
}

.dropdown-items-container {
    display: flex;
    flex-direction: column;
    background: #f0f0f0;
    width: fit-content;
    min-width: 200px;
    position: absolute;
    border-radius: 10px;

    .dropdown-item {
        padding: 4px 4px;
        border-radius: inherit;

        &:hover {
            cursor: pointer;
            background: #e0e0e0;
        }
    }
}
</style>