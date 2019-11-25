<template>
    <div class="timeSheetContainer">
        <header>
            <div class="left">Left</div>
            <div class="center">Display Date</div>
            <div class="right">Right</div>
        </header>
        <div class="tableContainer">
            <div class="tableHead">
                <th class="hourData">Time</th>
                <th class="dayData">Monday</th>
                <th class="dayData">Tuesday</th>
                <th class="dayData">Wednesday</th>
                <th class="dayData">Thursday</th>
                <th class="dayData">Friday</th>
                <th class="dayData">Saturday</th>
                <th class="dayData">Sunday</th>
            </div>
            <div class="tableBody">
                <div class="hourRow" v-for="hour in this.hours">
                    <td class="hourData">{{ hour.time }}</td>
                    <td class="dayData">{{ hour.mon }}</td>
                    <td class="dayData">{{ hour.tue }}</td>
                    <td class="dayData">{{ hour.wed }}</td>
                    <td class="dayData">{{ hour.thu }}</td>
                    <td class="dayData">{{ hour.fri }}</td>
                    <td class="dayData">{{ hour.sat }}</td>
                    <td class="dayData">{{ hour.sun }}</td>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {hours} from "../../userData/timesheet";

    export default {
        name: "st-timesheet",
        data() {
            return {
                hours: hours
            };
        }
    }
</script>
<style scoped>
    .timeSheetContainer {
        border-radius: 15px;
        width: 90%;
        height: 70%;
        max-width: 1200px;
        max-height: 1100px;
        overflow: hidden;
        padding: 40px;
        border: 1px solid;
    }

    .timeSheetContainer > header,
    .tableContainer {
        width: 100%;
        border-bottom: 1px solid;
    }

    .timeSheetContainer > header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        padding: 2% 0;
    }

    .tableContainer {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 0.1fr 1fr;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-end;
    }

    .tableHead,
    .hourRow {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    }

    .tableHead {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-right: 15px;
        border-bottom: 1px solid;
        align-items: center;
        align-self: center;
    }

    th {
        height: 50%;
    }

    .tableBody {
        width: 100%;
        height: 80%;
        display: flex;
        flex-flow: column;
        overflow-y: scroll;
        align-self: flex-start;
        padding: 10px 0;
    }

    .hourRow {
        height: 100px;
        border-bottom: 2px solid rgba(1, 1, 0, 0.1);
    }

    .hourData {
    }

    .dayData {
        border: 1px solid;
        border-radius: 10px;
    }

    th,
    td {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px 10px;
        padding: 10px;
        box-sizing: border-box;
    }

    .imgContainer > img {
        width: 100%;
        height: 100%;
    }
</style>