<template>
    <div class="suit-container">
        <div v-if="!isFaceCard && suit == 'C'" class="non-face-card">
            <div class="suit-col">
                <Club
                    v-for="index in firstLastCols"
                    :key="index"
                    :size="50"
                    class="suit-item"
                    :class="addFlip(index, firstLastCols)"
                />
            </div>
            <div v-if="!isFaceCard" class="suit-col">
                <Club
                    v-for="index in middleCol"
                    :key="index"
                    :size="50"
                    class="suit-item"
                    :class="addFlip(index, middleCol)"
                />
            </div>
            <div v-if="!isFaceCard" class="suit-col">
                <Club
                    v-for="index in firstLastCols"
                    :key="index"
                    :size="50"
                    class="suit-item"
                    :class="addFlip(index, firstLastCols)"
                />
            </div>
        </div>
        <div v-if="!isFaceCard && suit == 'D'" class="non-face-card">
            <div class="suit-col">
                <Diamond
                    v-for="index in firstLastCols"
                    :key="index"
                    :size="50"
                    class="suit-item"
                    :class="addFlip(index, firstLastCols)"
                />
            </div>
            <div v-if="!isFaceCard" class="suit-col">
                <Diamond
                    v-for="index in middleCol"
                    :key="index"
                    :size="50"
                    class="suit-item"
                    :class="addFlip(index, middleCol)"
                />
            </div>
            <div v-if="!isFaceCard" class="suit-col">
                <Diamond
                    v-for="index in firstLastCols"
                    :key="index"
                    :size="50"
                    class="suit-item"
                    :class="addFlip(index, firstLastCols)"
                />
            </div>
        </div>
        <div v-if="!isFaceCard && suit == 'H'" class="non-face-card">
            <div class="suit-col">
                <Heart
                    v-for="index in firstLastCols"
                    :key="index"
                    :size="50"
                    class="suit-item"
                    :class="addFlip(index, firstLastCols)"
                />
            </div>
            <div v-if="!isFaceCard" class="suit-col">
                <Heart
                    v-for="index in middleCol"
                    :key="index"
                    :size="50"
                    class="suit-item"
                    :class="addFlip(index, middleCol)"
                />
            </div>
            <div v-if="!isFaceCard" class="suit-col">
                <Heart
                    v-for="index in firstLastCols"
                    :key="index"
                    :size="50"
                    class="suit-item"
                    :class="addFlip(index, firstLastCols)"
                />
            </div>
        </div>
        <div v-if="!isFaceCard && suit == 'S'" class="non-face-card">
            <div class="suit-col">
                <Spade
                    v-for="index in firstLastCols"
                    :key="index"
                    :size="50"
                    class="suit-item"
                    :class="addFlip(index, firstLastCols)"
                />
            </div>
            <div v-if="!isFaceCard" class="suit-col">
                <Spade
                    v-for="index in middleCol"
                    :key="index"
                    :size="50"
                    class="suit-item"
                    :class="addFlip(index, middleCol)"
                />
            </div>
            <div v-if="!isFaceCard" class="suit-col">
                <Spade
                    v-for="index in firstLastCols"
                    :key="index"
                    :size="50"
                    class="suit-item"
                    :class="addFlip(index, firstLastCols)"
                />
            </div>
        </div>
        <div v-if="isFaceCard" class="face-card">
            <Jack v-if="value == 'J'" />
            <Queen v-if="value == 'Q'" />
            <King v-if="value == 'K'" />
        </div>
    </div>
</template>

<script>
import Club from "./suits/Club.vue";
import Diamond from "./suits/Diamond.vue";
import Heart from "./suits/Heart.vue";
import Spade from "./suits/Spade.vue";
import Jack from "./suits/Jack.vue";
import Queen from "./suits/Queen.vue";
import King from "./suits/King.vue";

export default {
    name: "SuitDisplay",
    components: {
        Club,
        Diamond,
        Heart,
        Spade,
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
        display: flex;
        width: 100%;
        height: 100%;
    }
}
</style>