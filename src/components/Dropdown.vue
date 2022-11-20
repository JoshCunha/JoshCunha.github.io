<template>
    <div>
        <div @click="toggleDropdown" class="dropdown-button">
            <span class="button-text">{{ dropdownText }}</span>
            <i class="pi icon" :class="showDropdown ? 'pi-angle-down' : 'pi-angle-right'" />
        </div>
        <div v-if="showDropdown" class="dropdown-items-container">
            <div v-for="(item,i) in options" :key="item[optionCode]" class="dd-for-wrapper">
                <span
                    class="dropdown-item"
                    @click="selectItem(item)"
                >
                    {{ item[optionName] }}
                </span>
                <span v-if="i !== options.length - 1" class="dd-divider" />
            </div>
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
    background: var(--item-background-color);
    border: 1px solid var(--active-color);

    .button-text {
        color: var(--contrast-color-primary);
        margin: 11px 0px 0px 10px;
    }

    .icon {
        font-weight: bold;
        margin: 11px 10px 0px auto;
        height: 20px;
        width: 20px;
        color: var(--contrast-color-primary);
    }

    &:hover {
        background: var(--item-shaded-color);
        cursor: pointer;
    }
}

.dropdown-items-container {
    background: var(--item-background-color);
    width: fit-content;
    min-width: 200px;
    position: absolute;
    border-radius: 10px;

    .dd-for-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        border-radius: inherit;

        .dropdown-item {
            padding: 10px 4px;
            border-radius: inherit;
            color: var(--contrast-color-primary);

            &:hover {
                cursor: pointer;
                background: var(--item-shaded-color);
            }
        }

        .dd-divider {
            width: 100%;
            height: 1px;
            background-color: var(--active-color);
        }
    }
}
</style>