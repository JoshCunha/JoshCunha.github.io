<template>
    <div class="content">
        <div class="top">
            <span class="title">Music</span>
            <span class="subtitle">A compilation of reviews done by me for the albums I've listened to</span>
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
import musicReviews from '../../jsondata/reviews.json';

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
        this.sortedReviews = allReviews.sort((a,b) => moment(b.date).diff(a.date)).slice(0, 5);
    }
}
</script>

<style lang="scss">
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
        color: #272727;
    }

    .review-block {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: 505px;
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