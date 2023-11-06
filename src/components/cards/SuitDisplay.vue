<template>
    <div class="suit-container">
        <div v-if="!isFaceCard" class="non-face-card">
            <div class="suit-col">
                <SuitPicker
                    v-for="index in firstLastCols"
                    :key="index"
                    :size="50"
                    :suit="suit"
                    class="suit-item"
                    :class="addFlip(index, firstLastCols)"
                />
            </div>
            <div class="suit-col">
                <SuitPicker
                    v-for="index in middleCol"
                    :key="index"
                    :size="50"
                    :suit="suit"
                    class="suit-item"
                    :class="addFlip(index, middleCol)"
                />
            </div>
            <div class="suit-col">
                <SuitPicker
                    v-for="index in firstLastCols"
                    :key="index"
                    :size="50"
                    :suit="suit"
                    class="suit-item"
                    :class="addFlip(index, firstLastCols)"
                />
            </div>
        </div>
        <div v-if="isFaceCard" class="face-card">
            <Jack v-if="value == 'J'" :altColour="suit == 'H' || suit == 'D'" />
            <Queen v-if="value == 'Q'" :altColour="suit == 'H' || suit == 'D'" />
            <King v-if="value == 'K'" :altColour="suit == 'H' || suit == 'D'" />
            <SuitPicker class="face-suit-tr" :size="35" :suit="suit" />
            <SuitPicker class="face-suit-bl" :size="35" :suit="suit" />
        </div>
    </div>
</template>

<script>
import SuitPicker from "./suits/SuitPicker.vue";
import Jack from "./suits/Jack.vue";
import Queen from "./suits/Queen.vue";
import King from "./suits/King.vue";

export default {
    name: "SuitDisplay",
    components: {
        SuitPicker,
        Jack,
        Queen,
        King
    },
    props: {
        value: {
            type: [Number, String],
            default: "A"
        },
        suit: {
            type: String,
            default: "S"
        }
    },
    computed: {
        isFaceCard() {
            return (this.value == 'J' || this.value == 'Q' || this.value == 'K');
        },
        firstLastCols() {
            if (typeof this.value == "number") {
                if (this.value <= 3) {
                    return 0;
                } else if (this.value <= 5) {
                    return 2;
                } else if (this.value <= 8) {
                    return 3;
                } else {
                    return 4;
                }
            }
            return 0;
        },
        middleCol() {
            if (typeof this.value == "number") {
                if (this.value <= 3) {
                    return this.value;
                } else if (this.value % 2 != 0) {
                    return 1;
                } else if (this.value >= 8) {
                    return 2;
                }
            } else if (this.value == 'A') {
                return 1;
            }
            return 0;
        }
    },
    methods: {
        addFlip(index, total) {
            if (index > Math.ceil(total/2)) {
                return "upsidedown";
            }
            return "";
        }
    }
}
</script>

<style lang="scss">
.suit-container {
    width: 100%;
    height: 100%;

    .non-face-card {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;

        .suit-col {
            height: 100%;
            margin: auto;
            display: flex;
            flex-direction: column;

            .suit-item {
                margin: auto;
            }
        }
    }

    .face-card {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;

        .face-suit-tr {
            position: absolute;
            top: 40px;
            right: 0px;
        }

        .face-suit-bl {
            position: absolute;
            rotate: 180deg;
            bottom: 40px;
            left: 0px
        }
    }
}
</style>