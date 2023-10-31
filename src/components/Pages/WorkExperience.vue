<template>
    <div class="page">
        <Taskbar :home="false" :content="['Work Experience']"/>
        <div class="work-experience">
            <span class="header">Work Experience</span>
            <DataTable :value="experience" v-model:expandedRows="expandedRows" class="include-border" breakpoint="2px">
                <Column field="position" header="Position" />
                <Column field="company" header="Company" />
                <Column field="date" header="Date" />
                <Column :expander="true" headerStyle="width: 46px" />
                <template #expansion="slotProps">
                    <div class="expanded">
                        <div class="general-data">
                            <span class="role">{{slotProps.data.position}} at {{slotProps.data.company}}</span>
                            <span class="date">{{slotProps.data.date}}</span>
                        </div>
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
import workExperience from '../../data/work-experience.json';
import Taskbar from '../Taskbar.vue';

export default {
    name: "WorkExperience",
    components: {
        Taskbar,
        DataTable,
        Column
    },
    data() {
        return {
            experience: [],
            expandedRows: []
        }
    },
    methods: {
        getItems(data) {
            for (let info in workExperience.data) {
                if (workExperience.data[info].company == data.company) {
                    return workExperience.data[info].points;
                }
            }
        }
    },
    created() {
        this.experience = workExperience.data;
    }
}
</script>

<style lang="scss">
.page {
    height: 100%;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    background: var(--background-color-primary);
}
.work-experience {
    width: auto;
    display: flex;
    flex-direction: column;
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

    .expanded {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        margin-right: 15px;
        
        .general-data {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            .role {
                font-weight: bold;
            }

            .date {
                font-weight: bold;
                margin-left: auto;
            }

            @media screen and (max-width: 581px) {
                .date {
                    margin-left: 0px;
                    margin-top: 5px;
                }
            }
        }
    }
}

@media screen and (max-width: 1000px) {
    .work-experience {
        margin: 50px 7% 5% 7%;
    }
}
</style>