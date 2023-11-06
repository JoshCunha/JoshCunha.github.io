<template>
    <div>
        <Club v-if="suit == 'C'" :size="size" />
        <Diamond v-if="suit == 'D'" :size="size" />
        <Heart v-if="suit == 'H'" :size="size" />
        <Spade v-if="suit == 'S'" :size="size" />
    </div>
</template>

<script>
import Club from "./Club.vue";
import Diamond from "./Diamond.vue";
import Heart from "./Heart.vue";
import Spade from "./Spade.vue";

export default {
    name: "SuitPicker",
    props: {
        suit: {
            type: String,
            default: "S"
        },
        size: {
            type: Number,
            default: 20
        }
    },
    components: {
        Club,
        Diamond,
        Heart,
        Spade
    }
}
</script>