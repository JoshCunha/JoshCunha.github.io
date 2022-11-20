<template>
    <div class="content">
        <div class="top">
            <span class="title">About Me</span>
            <span class="subtitle">An online resume. Showcasing my work experience, skills, and education.</span>
        </div>
        <div class="about-section">
            <span class="header">Work Experience</span>
            <DataTable :value="experience" class="include-border" breakpoint="2px">
                <Column field="position" header="Position" />
                <Column field="company" header="Company" />
                <Column field="date" header="Date" />
            </DataTable>
            <div @click="goToWork" class="learn-more">Learn More...</div>
        </div>
        <div class="about-section skills">
            <span class="header">Skills and Technologies</span>
            <DataTable :value="skills" class="include-border no-head" breakpoint="3px">
                <Column field="skill" />
            </DataTable>
            <div @click="goToSkills" class="learn-more">Learn More...</div>
        </div>
        <div class="about-section">
            <span class="header">Education</span>
            <span class="subheader">
                Candidate for Bachelor of Applied Science, University of Waterloo 2018-2023
            </span>
            <span class="subheader indent">
                Cumulative Average: 89.04%
            </span>
        </div>
    </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import workExperience from '../../jsondata/work-experience.json';
import skillAndTech from '../../jsondata/skills.json';

export default {
    name: "AboutMe",
    components: {
        DataTable,
        Column
    },
    data() {
        return {
            experience: [],
            skills: []
        }
    },
    methods: {
        goToWork() {
            this.$router.push({ path: '/workexperience' });
        },

        goToSkills() {
            this.$router.push({ path: '/skills' })
        }
    },
    created() {
        this.experience = workExperience.data;
        this.skills = skillAndTech.data.slice(0, 4);
        this.skills.push({"skill": "And Much More!"});
    }
}
</script>

<style lang="scss">
.content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--background-color-primary);
    
    .top {
        display: flex;
        flex-direction: column;
        margin-top: 10vh;
        margin-left: 10%;

        .title {
            font-family: Helvetica;
            font-weight: bold;
            font-size: 40px;
            color: var(--contrast-color-primary);
            text-align: left;
        }

        .subtitle {
            max-width: 500px;
            font-family: Helvetica;
            font-weight: bold;
            font-size: 20px;
            color: var(--contrast-color-primary);
            text-align: left;
        }
    }

    .about-section {
        display: flex;
        flex-direction: column;
        margin: 3% 10% 0px 10%;

        .header {
            max-width: 500px;
            font-family: Helvetica;
            font-weight: bold;
            font-size: 25px;
            margin-bottom: 10px;
            color: var(--contrast-color-primary);
            text-align: left;
        }

        .subheader {
            font-family: Helvetica;
            font-weight: bold;
            font-size: 17px;
            color: var(--contrast-color-primary);
            text-align: left;
            margin-bottom: 5px;
        }

        .learn-more {
            color: var(--link-color);
            text-align: left;
            margin-top: 3px;
            font-family: Helvetica;
            font-weight: bold;

            &:hover {
                color: var(--link-hover);
                cursor: pointer;
            }
        }

        @media screen and (max-width: 900px) {
            &.skills {
                .p-datatable .p-datatable-tbody > tr > td {
                    justify-content: left;
                }
            }
        }
    }
}
</style>