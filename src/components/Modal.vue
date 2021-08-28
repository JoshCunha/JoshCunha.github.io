<template>
    <transition name="fade">
        <div class="modal" v-if="show">
            <div class="modal-backdrop" @click="hideModal" />
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header" />
                    <span v-if="title" class="modal-title">{{ title }}</span>
                    <i v-if="closeButton" @click="hideModal" class="pi pi-times close-button" />
                </div>

                <div class="modal-body">
                    <slot name="body" />
                </div>
                <div class="modal-footer">
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "Modal",
    props: {
        title: {
            type: String,
            required: false
        },
        closeButton: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            show: false
        }
    },
    methods: {
        showModal() {
            this.show = true;
        },
        hideModal() {
            this.show = false;
        }
    }
}
</script>

<style lang="scss">
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;

    .modal-backdrop {
        background: rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
    }

    .modal-content {
        background: white;
        position: relative;
        width: 60%;
        height: 575px;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        z-index: 2;

        .modal-header {
            display: flex;

            .modal-title {
                font-style: Helvetica;
                font-weight: bold;
                font-size: 30px;
                margin: 10px 0px 0px 3%;
                color: #272727;
            }

            .close-button {
                margin: 10px 10px 0px auto;
                font-weight: bold;
                color: #808080;

                &:hover {
                    color: #272727;
                    cursor: pointer;
                }
            }
        }
    }

    .modal-body {
        height: 100%;
        width: 100%;
    }
}
</style>