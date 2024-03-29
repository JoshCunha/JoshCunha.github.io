<template>
    <Modal ref="reviewModal">
        <template #body>
            <div class="review-modal-body">
                <div class="review-modal-header">
                    <div class="art-container">
                        <img class="album-art-modal" :src="image" width="250" height="250" />
                    </div>
                    <div class="modal-data">
                        <span class="album-title">{{ title }}</span>
                        <span class="album-artist">{{ artist }}</span>
                        <div class="footer-data">
                            <i v-for="n in rating" :key="n" class="pi pi-star golden" />
                            <i v-for="n in (5-rating)" :key="n" class="pi pi-star-o empty" />
                            <div class="music-links">
                                <svg
                                    v-if="spotifyLink"
                                    @click="toSpotify"
                                    class="spotify-icon"
                                    fill="currentColor"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                >
                                    <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/>
                                </svg>
                                <svg
                                    v-if="appleLink"
                                    @click="toAppleMusic"
                                    class="apple-icon"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="review-content">
                    <p class="review-paragraph" v-html="reviewBlock" />
                </div>
            </div>
        </template>
    </Modal>
</template>

<script>
import Modal from '../../Modal.vue';

export default {
    name: "ReviewModal",
    components: {
        Modal
    },
    props: {
        image: {
            type: String,
            default: "https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f"
        },
        title: {
            type: String,
            default: "My Beautiful Dark Twisted Fantasy"
        },
        artist: {
            type: String,
            default: "Kanye West"
        },
        reviewBlock: {
            type: String,
            default: "No Review"
        },
        rating: {
            type: Number,
            default: 0
        },
        spotifyLink: {
            type: String,
            required: false
        },
        appleLink: {
            type: String,
            required: false
        }
    },
    methods: {
        openModal() {
            this.$refs.reviewModal.showModal();
        },

        toSpotify() {
            window.open(this.spotifyLink);
        },

        toAppleMusic() {
            window.open(this.appleLink);
        }
    }
}
</script>

<style lang="scss">
.review-modal-body {
    display: flex;
    flex-direction: column;
    height: 100%;

    .review-modal-header {
        display: flex;
        flex-direction: row;

        .art-container {
            width: fit-content;
            margin-left: 20px;

            .album-art-modal {
                border-radius: 5px;
                box-shadow: 0px 0px 5px var(--active-color);
            }
        }

        .modal-data {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 20px 20px 5px;

            .album-title {
                font-family: Helvetica;
                font-weight: bold;
                color: var(--contrast-color-primary);
                font-size: 30px;
                text-align: left;
                margin-bottom: 10px;
            }

            .album-artist {
                font-family: Helvetica;
                font-weight: bold;
                color: var(--contrast-color-primary);
                font-size: 25px;
                text-align: left;
                margin-bottom: 10px;
            }

            .footer-data {
                margin-top: auto;
                margin-left: 0px;
            }
        }
    }

    .review-content {
        display: flex;
        max-height: 250px;
        height: 250px;
        background: var(--item-shaded-color);
        margin: 20px;
        border: 1px solid var(--inactive-color);
        border-radius: 10px;

        .review-paragraph {
            margin: 5px;
            max-height: 100%;
            overflow-y: auto;
            text-align: left;
            color: var(--contrast-color-primary);
        }
    }
}

.footer-data {
    display: flex;
    flex-direction: row;
    margin: 0px 10px;

    .golden {
        margin-top: 3px;
        color: #f3d34a;
    }
    .empty {
        margin-top: 3px;
        color: var(--contrast-color-primary);
    }

    .music-links {
        display: flex;
        flex-direction: row;
        margin-left: auto;

        .spotify-icon {
            color: var(--inactive-color);

            &:hover {
                color: var(--active-color);
                cursor: pointer;
            }
        }

        .apple-icon {
            color: var(--inactive-color);
            margin-top: -2px;
            margin-left: 5px;

            &:hover {
                color: var(--active-color);
                cursor: pointer;
            }
        }
    }
}

@media screen and (max-width: 850px) {
    .modal-content {
        min-width: 300px;
        height: fit-content !important;
    
        .review-modal-body {
            .review-modal-header {
                flex-wrap: wrap;
                .art-container {
                    margin-left: auto;
                    margin-right: auto;
                    .album-art-modal {
                        justify-content: center;
                        align-items: center;
                        width: 240px;
                        height: 240px;
                    }
                }

                .modal-data {
                    margin-top: 5px;

                    .album-title {
                        font-size: 25px;
                    }
                    .album-artist {
                        font-size: 20px;
                    }
                }
            }

            .review-content {
                height: 150px !important;
                margin: 5px;
            }
        }
    }
}
</style>