<template>
    <div class="search-bar">
        <i class="pi pi-search search-icon" />
        <input class="search-input" type="text" @input="emitSearch" v-model="search" :placeholder="searchPlaceholder" />
    </div>
</template>

<script>
export default {
    name: "Search",
    props: {
        searchPlaceholder: {
            type: String,
            default: "Search..."
        }
    },
    data() {
        return {
            search: ""
        }
    },
    methods: {
        emitSearch() {
            this.$emit("searchUpdate", this.search);
        }
    }
}
</script>

<style lang="scss">
.search-bar {
    display: flex;
    flex-direction: row;
    width: fit-content;
    min-width: 200px;
    min-height: 40px;
    border-radius: 10px;
    background: var(--item-background-color);
    border: 1px solid var(--active-color);

    .search-icon {
        font-weight: bold;
        color: var(--contrast-color-primary);
        margin: 10px 0px 0px 10px;
    }

    .search-input {
        border: none;
        background: none;
        width: fit-content;
        height: 30px;
        margin: 4px 2px 0px 3px;
    }
}
input:focus {
    outline: none;
}
</style>