<template>
    <div class="list-container">
        <DataTable :value="reviewsIn" class="include-border clickable-rows" @row-click="openReview" breakpoint="2px">
            <Column field="album" header="Album" :sortable="true">
                <template #body="slotProps">
                    <div class="album-col">
                        <img class="list-img" :src="slotProps.data.image" />
                        <span class="album-title">{{ slotProps.data.album }}</span>
                    </div>
                </template>
            </Column>
            <Column field="artist" header="Artist" :sortable="true" />
            <Column field="rating" header="Rating" headerStyle="width: 125px" :sortable="true">
                <template #body="slotProps">
                    <div class="rating-col">
                        <i v-for="n in slotProps.data.rating" :key="n" class="pi pi-star golden" />
                        <i v-for="n in (5-slotProps.data.rating)" :key="n" class="pi pi-star-o empty" />
                    </div>
                </template>
            </Column>
            <Column field="date" header="Date Reviewed" headerStyle="width: 150px" :sortable="true">
                <template #body="slotProps">
                    <span>{{ formattedDate(slotProps.data.date) }}</span>
                </template>
            </Column>
        </DataTable>
    </div>
    <ReviewModal
        ref="reviewModal"
        :title="sendTitle"
        :artist="sendArtist"
        :reviewBlock="sendReview"
        :image="sendImage"
        :spotifyLink="sendSpotify"
        :appleLink="sendApple"
        :rating="sendRate"
    />
</template>

<script>
import moment from 'moment';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ReviewModal from './ReviewModal.vue';

export default {
    name: "ReviewList",
    components: {
        DataTable,
        Column,
        ReviewModal
    },
    props: {
        reviewsIn: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            sendTitle: "",
            sendArtist: "",
            sendReview: "",
            sendImage: "",
            sendSpotify: "",
            sendApple: "",
            sendRate: 0
        }
    },
    methods: {
        toLink(link) {
            window.open(link);
        },
        openReview(event) {
            console.log(event);
            this.sendTitle = event.data.album;
            this.sendArtist = event.data.artist;
            this.sendReview = event.data.review;
            this.sendImage = event.data.image;
            this.sendSpotify = event.data.spotifyLink;
            this.sendApple = event.data.appleLink;
            this.sendRate = event.data.rating;
            this.$refs.reviewModal.openModal();
        },
        formattedDate(date) {
            return moment(date).format('MMM Do YYYY');
        } 
    }
}
</script>

<style lang="scss">
.list-container {
    margin-top: 20px;

    .album-col {
        display: flex;
        flex-direction: row;

        .list-img {
            width: 50px;
            border-radius: 5px;
            box-shadow: 0px 0px 2px #808080;
        }

        .album-title {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 20px;
        }

        @media screen and (max-width: 900px) {
            .list-img {
                display: none;
            }

            .album-title {
                text-align: right;
            }
        }
    }

    .rating-col {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .golden {
            color: #f3d34a;
            text-shadow: 0px 0px 2px #272727;
        }
        .empty {
            color: #272727;
            text-shadow: 0px 0px 2px #272727;
        }
    }
}
</style>