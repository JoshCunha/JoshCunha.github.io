<template>
    <div class="content">
        <div class="top">
            <span class="title">Music</span>
            <span class="subtitle">A compilation of reviews done by me for the albums I've listened to</span>
            <span class="subtitle">Just a little bit of fun and, of course, everything is just my opinion and personal preference</span>
        </div>
        <div class="recent-reviews">
            <span class="title">Recent Reviews</span>
            <div class="review-block">
                <Review />
                <Review />
                <Review />
                <Review />
            </div>
            <div class="see-all">See All...</div>
        </div>
    </div>
</template>

<script>
import Review from '../Pages/Reviews/Review.vue';

export default {
    name: "Music",

    components: {
        Review
    }
}
</script>

<style lang="scss">
.recent-reviews {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 5vh 10%;

    .title {
        font-family: Helvetica;
        font-weight: bold;
        font-size: 30px;
        text-align: left;
        color: #272727;
        margin-bottom: 15px;
    }

    .review-block {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: 485px;
        overflow: hidden;
    }

    .see-all {
        color: #3da5d9;
        text-align: left;
        margin-top: 10px;
        font-family: Helvetica;
        font-weight: bold;

        &:hover {
            color: #4281a4;
            cursor: pointer;
        }
    }
}
</style>