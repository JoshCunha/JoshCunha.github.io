<template>
    <Taskbar :home="false" :content="['Work Experience']"/>
    <div class="work-experience">
        <span class="header">Work Experience</span>
        <DataTable :value="experience" v-model:expandedRows="expandedRows" class="include-border">
            <Column field="position" header="Position" />
            <Column field="company" header="Company" />
            <Column field="date" header="Date" />
            <Column :expander="true" headerStyle="width: 38px" />
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
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import workExperience from '../../jsondata/work-experience.json';
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
.work-experience {
    display: flex;
    flex-direction: column;
    margin: 5% 7% 10% 7%;

    .header {
        max-width: 500px;
        font-family: Helvetica;
        font-weight: bold;
        font-size: 40px;
        margin-bottom: 10px;
        color: #272727;
        text-align: left;
    }

    .subheader {
        text-align: left;
        font-weight: bold;
        font-size: 15px;
        font-family: Helvetica;
        margin-top: 5px;
        color: #272727;
    }

    .expanded {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        margin-right: 15px;
        
        .general-data {
            display: flex;
            flex-direction: row;

            .role {
                font-weight: bold;
            }

            .date {
                font-weight: bold;
                margin-left: auto;
            }
        }
    }
}
</style>