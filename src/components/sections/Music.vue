<template>
    <div class="content">
        <div class="top">
            <span class="title">Music</span>
            <span class="subtitle">A compilation of reviews for albums I've listened to</span>
        </div>
        <div class="recent-reviews">
            <span class="title">Recent Reviews</span>
            <div class="review-block">
                <Review 
                    v-for="review,index in sortedReviews"
                    :key="index"
                    :image="review.image"
                    :title="review.album"
                    :artist="review.artist"
                    :shortReview="review.shortReview"
                    :reviewBlock="review.review"
                    :spotifyLink="review.spotifyLink"
                    :appleLink="review.appleLink"
                    :rating="review.rating"
                />
            </div>
            <div @click="toAllReviews" class="see-all">See All...</div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import Review from '../Pages/Reviews/Review.vue';
import musicReviews from '../../data/reviews.json';

export default {
    name: "Music",

    components: {
        Review
    },

    data() {
        return {
            sortedReviews: []
        }
    },

    methods: {
        toAllReviews() {
            this.$router.push({ path: '/reviews' });
        }
    },

    created() {
        let allReviews = musicReviews.data;
        this.sortedReviews = allReviews.sort((a,b) => moment(b.date).diff(a.date));
    }
}
</script>

<style lang="scss">
.content {
    background: var(--background-color-primary);
}
.recent-reviews {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: auto 10%;
    padding: 15px 0px;

    .title {
        font-family: Helvetica;
        font-weight: bold;
        font-size: 30px;
        text-align: left;
        color: var(--contrast-color-primary);
    }

    .review-block {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: 505px;
        overflow: hidden;
        gap: 10px;
        padding: 5px;
    }

    .see-all {
        color: var(--link-color);
        text-align: left;
        margin-top: 10px;
        font-family: Helvetica;
        font-weight: bold;

        &:hover {
            color: var(--link-hover);
            cursor: pointer;
        }
    }
}
</style>