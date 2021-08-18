<template>
    <div class="taskbar">
        <div class="taskbar-item" @click="scrollTo(0)">
            <svg
                class="home icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
            </svg>
        </div>
        <div class="taskbar-item" @click="scrollTo(1)">
            <span class="taskbar-element">ABOUT</span>
        </div>
        <div class="taskbar-item" @click="scrollTo(2)">
            <span class="taskbar-element">MUSIC</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Taskbar",
    props: {},
    methods: {
        scrollTo(id) {
            this.$emit('updatePage', id);
        }
    }
}
</script>

<style lang="scss">
.taskbar {
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    width: 100%;
    background: #c3acce;
    height: 45px;
    box-shadow: 0px 1px 3px #272727;

    .taskbar-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        &:hover {
            background: #b585cc;
            cursor: pointer;
        }

        .taskbar-element {
            margin-left: 10px;
            margin-right: 10px;
            color: #331e36;
            font-weight: bold;
            font-family: Helvetica;
            font-size: 22px;
        }
    }

    .icon {
        height: 35px;
        width: 35px;
        color: #331e36;
        margin-left: 10px;
        margin-right: 10px;
    }
}
</style>