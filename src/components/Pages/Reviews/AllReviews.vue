<template>
    <Taskbar :home="false" :content="['Reviews']" />
    <div class="music-reviews">
        <span class="title">Music Reviews</span>
        <div class="reviews-header">
            <Search @searchUpdate="updateSearch" />
            <span class="sort-by">Sort By: </span>
            <Dropdown
                @updateDropdown="newSort"
                class="sort-dropdown"
                defaultSelect="Newest"
                :options="sortOptions"
                :placeholder="'Highest Rated'"
            />
        </div>
        <div class="reviews-container">
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
    </div>
</template>

<script>
import moment from 'moment';
import Taskbar from '../../Taskbar.vue';
import Review from './Review.vue';
import Dropdown from '../../Dropdown.vue';
import Search from '../../Search.vue';
import reviewJson from '../../../jsondata/reviews.json';

export default {
    name: "AllReviews",
    components: {
        Taskbar,
        Review,
        Dropdown,
        Search
    },
    data() {
        return {
            allReviews: [],
            sortedReviews: [],
            sortOptions: [
                { name: "Newest", code: "new" },
                { name: "Oldest", code: "old" },
                { name: "A-Z", code: "AZ" },
                { name: "Z-A", code: "ZA" },
                { name: "Highest Rated", code: "high" },
                { name: "Lowest Rated", code: "low" },
            ],
            currentSort: "new"
        }
    },
    methods: {
        newSort(code) {
            if (!(this.currentSort == code)) {
                this.sortList(code);
            }
        },
        sortList(code) {
            this.currentSort = code;
            switch(code) {
                case "new":
                    this.sortedReviews = this.sortedReviews.sort((a,b) => moment(b.date).diff(a.date));
                    break;
                case "old":
                    this.sortedReviews = this.sortedReviews.sort((a,b) => moment(a.date).diff(b.date));
                    break;
                case "AZ":
                    this.sortedReviews = this.sortedReviews.sort((a,b) => a.album.localeCompare(b.album));
                    break;
                case "ZA":
                    this.sortedReviews = this.sortedReviews.sort((a,b) => b.album.localeCompare(a.album));
                    break;
                case "high":
                    this.sortedReviews = this.sortedReviews.sort((a,b) => b.rating - a.rating);
                    break;
                case "low":
                    this.sortedReviews = this.sortedReviews.sort((a,b) => a.rating - b.rating);
                    break;
            }
        },
        updateSearch(text) {
            this.sortedReviews = this.allReviews.filter(post => {
                return post.album.toLowerCase().includes(text.toLowerCase()) ||
                    post.artist.toLowerCase().includes(text.toLowerCase());
            })
            this.sortList(this.currentSort);
        }
    },
    created() {
        this.allReviews = reviewJson.data;
        this.sortedReviews = this.allReviews.sort((a,b) => moment(b.date).diff(a.date));
    }
}
</script>

<style lang="scss">
.music-reviews {
    display: flex;
    flex-direction: column;
    margin: 5% 7% 5% 7%;

    .title {
        font-family: Helvetica;
        font-weight: bold;
        font-size: 35px;
        text-align: left;
        color: #272727;
    }

    .reviews-header {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 15px;

        .sort-by {
            margin: 8px 10px 0px 5%;
            font-style: Helvetica;
            font-weight: bold;
            color: #272727;
            font-size: 20px;
        }
    }

    .reviews-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
}
</style>