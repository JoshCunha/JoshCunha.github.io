<template>
    <Taskbar :home="false" :content="['Skills and Technologies']" />
    <div class="skills-technologies">
        <span class="header">Skills and Technologies</span>
        <DataTable :value="skills" v-model:expandedRows="expandedRows" class="include-border no-head">
            <Column field="skill" />
            <Column :expander="true" headerStyle="width: 38px" />
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
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Taskbar from '../Taskbar.vue';
import skillAndTech from '../../jsondata/skills.json';

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
.skills-technologies {
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
    }

    tr {
        td:nth-child(2n) {
            width: 38px;
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
</style>