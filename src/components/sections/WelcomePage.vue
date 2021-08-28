<template>
    <div class="content">
        <div class="intro-box">
            <span class="title">
                Welcome! I'm Josh.
            </span>
            <span class="subtitle">
                Software developer and engineering student based in Ontario, Canada.
            </span>
        </div>
        <div class="footer-content">
            <div class="position">
                <span class="header">Current Position:</span>
                <span class="subheader">3B Computer Engineering</span>
                <span class="subheader">School Term</span>
            </div>
            <div class="socials">
                <div class="logo-container">
                    <svg
                        @click="mailMe"
                        class="icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </svg>
                </div>
                <div class="logo-container">
                    <svg
                        @click="toGithub"
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </div>
                <div class="logo-container">
                    <svg
                        @click="toLinkedIn"
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WelcomePage",

    methods: {
        mailMe() {
            window.open('mailto:jmcunha@uwaterloo.ca');
        },

        toGithub(event) {
            let url = "https://github.com/JoshCunha"
            event.ctrlKey ? window.open(url) : window.location.href = url;
        },

        toLinkedIn(event) {
            let url = "https://www.linkedin.com/in/joshcunha/"
            event.ctrlKey ? 
                window.open(url) :
                window.location.href = url;
        }
    }
}
</script>

<style lang="scss">
.content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    .intro-box {
        display: flex;
        flex-direction: column;
        margin-left: 20%;

        .title {
            margin-top: 20vh;
            font-family: Helvetica;
            font-size: 50px;
            font-weight: bold;
            color: #272727;
            text-align: left;
            margin-bottom: 20px;
        }

        .subtitle {
            max-width: 800px;
            font-family: Helvetica;
            font-weight: bold;
            font-size: 40px;
            color: #272727;
            text-align: left
        }
    }

    .footer-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: auto 15% 15vh 15%;

        .position {
            display: flex;
            flex-direction: column;

            .header {
                font-family: Helvetica;
                font-size: 25px;
                font-weight: bold;
                color: #272727;
                text-align: left;
                margin-bottom: 10px;
            }

            .subheader {
                font-family: Helvetica;
                font-size: 20px;
                font-weight: bold;
                color: #272727;
                max-width: 250px;
                text-align: left;
            }
        }

        .socials {
            margin-left: auto;
            margin-top: auto;
            display: flex;
            flex-direction: row;

            .logo-container {
                height: fit-content;

                .icon {
                    height: 35px;
                    width: 35px;
                    color: #8d909b;
                    margin: 10px;

                    &:hover {
                        cursor: pointer;
                        color: #272727;
                }
                }
            }
        }
    }

    @media screen and (max-width: 605px) {
        .intro-box {
            margin-left: 10vw;
            margin-right: 10vw;

            .title {
                text-align: center;
                margin-top: 10vh;
            }

            .subtitle {
                text-align: center;
                font-size: 30px;
            }
        }

        .footer-content {
            .position {
                width: 100%;
                justify-content: center;
                align-items: center;
                margin-bottom: 20px;
            }

            .socials {
                width: 100%;
                justify-content: center;
                align-items: center;
                margin-bottom: 20px;
            }
        }
    }
}
</style>