<template>
    <div class="card-wrapper">
        <div v-if="!visible" class="card-back" />
        <div v-if="visible" class="card-front">
            <div class="card-num">
                {{ getValue(cardID) }}
                <Diamond />
            </div>
            <div class="card-num upsidedown">
                {{ getValue(cardID) }}
                <Diamond />
            </div>
        </div>
    </div>
</template>

<script>
import Diamond from "./suits/Diamond.vue";

export default {
    name: "PlayingCard",
    components: {
        Diamond
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
    methods: {
        getValue(card_id) {
            let val = card_id % 13;
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
                return val;
            }
        },

        getSuit(card_id) {
            let res = card_id/13;
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
            font-size: 30px;
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