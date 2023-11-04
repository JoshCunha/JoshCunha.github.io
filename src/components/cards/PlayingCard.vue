<template>
    <div class="card-wrapper">
        <div v-if="!visible" class="card-back" />
        <div v-if="visible" class="card-front">
            <div class="card-num">
                {{ handleTen(cardValue) }}
                <Club v-if="cardSuit == 'C'" />
                <Diamond v-if="cardSuit == 'D'" />
                <Heart v-if="cardSuit == 'H'" />
                <Spade v-if="cardSuit == 'S'" />
            </div>
            <SuitDisplay :value="cardValue" :suit="cardSuit" />
            <div class="card-num upsidedown">
                {{ handleTen(cardValue) }}
                <Club v-if="cardSuit == 'C'" />
                <Diamond v-if="cardSuit == 'D'" />
                <Heart v-if="cardSuit == 'H'" />
                <Spade v-if="cardSuit == 'S'" />
            </div>
        </div>
    </div>
</template>

<script>
import Club from "./suits/Club.vue";
import Diamond from "./suits/Diamond.vue";
import Heart from "./suits/Heart.vue";
import Spade from "./suits/Spade.vue";
import SuitDisplay from "./SuitDisplay.vue";

export default {
    name: "PlayingCard",
    components: {
        Club,
        Diamond,
        Heart,
        Spade,
        SuitDisplay
    },
    props: {
        cardID: {
            type: Number,
            default: -1
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        cardValue() {
            let val = this.cardID % 13;
            if (val == 0) {
                return "A";
            } else if (val >= 10) {
                switch (val) {
                    case 10:
                        return "J";
                    case 11:
                        return "Q";
                    case 12:
                        return "K";
                }
            } else {
                return val + 1;
            }
            return 0;
        },

        cardSuit() {
            let res = Math.floor(this.cardID/13);
            switch (res) {
                case 0:
                    return "S";
                case 1:
                    return "C";
                case 2:
                    return "H";
                case 3:
                    return "D"
            }
            return "N";
        }
    },
    methods: {
        handleTen(val) {
            if (val == 10) {
                return "I0"
            } else {
                return val
            }
        }
    }
}
</script>

<style lang="scss">
.card-wrapper {
    width: 200px;
    height: 300px;
    border-radius: 10px;
    padding: 5px;
    background-color: white;
    box-shadow: 0px 0px 10px black;

    .card-back {
        height: 100%;
        width: 100%;
        border-radius: 10px;
        background-color: #e5e5f7;
        opacity: 0.8;
        background-image:  linear-gradient(135deg, #444cf7 25%, transparent 25%), linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%);
        background-position:  10px 0, 10px 0, 0 0, 0 0;
        background-size: 10px 10px;
        background-repeat: repeat;
    }

    .card-front {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;

        .card-num {
            font-family: Arial, Helvetica, sans-serif;
            width: 20px;
            font-size: 20px;
            font-weight: 900;
            display: flex;
            flex-direction: column;
        }

        .upsidedown {
            margin-left: auto;
            transform: rotate(180deg);
        }
    }
}
</style>