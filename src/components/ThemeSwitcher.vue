<template>
    <div class="toggle-container">
        <i 
            @click="toggleTheme"
            class="pi theme-icon"
            :class="userTheme === 'light-theme' ? 'pi-moon' : 'pi-sun'"
        />
    </div>
</template>

<script>
export default {
    name: "ThemeSwitcher",
    mounted() {
        const initUserTheme = this.getTheme() || this.getMediaPreference();
        this.setTheme(initUserTheme);
    },

    data() {
        return {
            userTheme: 'light-theme'
        };
    },

    methods: {
        toggleTheme() {
            const activeTheme = localStorage.getItem('user_theme');
            if (activeTheme === 'light-theme') {
                this.setTheme('dark-theme');
            } else {
                this.setTheme('light-theme');
            }
        },

        getTheme() {
            return localStorage.getItem('user_theme');
        },

        setTheme(theme) {
            localStorage.setItem('user_theme', theme);
            this.userTheme = theme;
            document.documentElement.className = theme;
        },

        getMediaPreference() {
            const hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
            return hasDarkPreference ? "dark-theme" : "light-theme";
        }
    }
}
</script>

<style lang="scss">
.toggle-container {
    margin: auto 10px auto auto;

    .theme-icon {
        font-weight: bold;
        font-size: 25px;
        color: var(--contrast-color-secondary);

        &:hover {
            color: var(--contrast-color-primary);
            cursor: pointer;
        }
    }
}
</style>