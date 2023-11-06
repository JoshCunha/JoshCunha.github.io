<template>
    <div class="page">
        <PlayingCard :visible="true" :cardID="10" />
        <PlayingCard :visible="true" :cardID="23" />
        <PlayingCard :visible="true" :cardID="36" />
        <PlayingCard :visible="true" :cardID="50" />
        <PlayingCard :visible="false" :cardID="50" />
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
    display: flex;
    flex-direction: row;
    gap: 10px;
}
</style>