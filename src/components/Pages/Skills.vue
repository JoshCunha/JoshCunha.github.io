<template>
    <div class="page">
        <Taskbar :home="false" :content="['Skills and Technologies']" />
        <div class="skills-technologies">
            <span class="header">Skills and Technologies</span>
            <DataTable :value="skills" v-model:expandedRows="expandedRows" class="include-border no-head" responsiveLayout="scroll">
                <Column field="skill" />
                <Column :expander="true" headerStyle="width: 36px" />
                <template #expansion="slotProps">
                    <div class="expanded">
                        <span class="title">{{slotProps.data.skill}}</span>
                        <ul id="more-info">
                            <li v-for="item, index in getItems(slotProps.data)" :key="index">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </template>
            </DataTable>
            <span class="subheader">
                Click the <i class="pi pi-chevron-right" /> to expand a row
            </span>
        </div>
    </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Taskbar from '../Taskbar.vue';
import skillAndTech from '../../data/skills.json';

export default {
    name: "Skills",
    components: {
        Taskbar,
        DataTable,
        Column
    },
    data() {
        return {
            skills: [],
            expandedRows: []
        }
    },
    methods: {
        getItems(data) {
            for (let skill in this.skills) {
                if (this.skills[skill].skill == data.skill) {
                    return this.skills[skill].points;
                }
            }
        }
    },
    created() {
        this.skills = skillAndTech.data;
    }
}
</script>

<style lang="scss">
.page {
    height: 100%;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    background: var(--background-color-primary);
}
.skills-technologies {
    display: flex;
    flex-direction: column;
    width: auto;
    margin: 5% 7% 10% 7%;

    .header {
        max-width: 500px;
        font-family: Helvetica;
        font-weight: bold;
        font-size: 40px;
        margin-bottom: 10px;
        color: var(--contrast-color-primary);
        text-align: left;
    }

    .subheader {
        text-align: left;
        font-weight: bold;
        font-size: 15px;
        font-family: Helvetica;
        margin-top: 5px;
        color: var(--contrast-color-primary);
    }

    tr {
        td:nth-child(2n) {
            width: 28px;
        }
    }

    @media screen and (max-width: 900px) {
        tr {
            td:nth-child(2n) {
                width: auto;
            }
        }
    }

    .expanded {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        margin-right: 15px;

        .title {
            font-weight: bold;
        }
    }
}

@media screen and (max-width: 1000px) {
    .skills-technologies {
        margin: 50px 7% 5% 7%;
    }
}
</style>