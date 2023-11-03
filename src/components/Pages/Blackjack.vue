<template>
    <div class="page">
        <PlayingCard :visible="true" :cardID="7" />
    </div>
</template>

<script>
import PlayingCard from "../cards/PlayingCard.vue";

export default {
    name: "Blackjack",
    components: {
        PlayingCard
    }
}
</script>

<style lang="scss">
.page {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: green;
}
</style>