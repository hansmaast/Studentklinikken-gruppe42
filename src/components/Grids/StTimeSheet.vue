<template>
    <div class="timeSheetContainer">
        <header>
            <div class="left">Uke nr</div>
            <div class="center">{{new Date().toLocaleDateString()}}</div>
            <div class="right">Dag</div>
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
                    <td class="dayData" @click="displayModal(hour.mon)">{{ hour.mon.name }}</td>
                    <td class="dayData" @click="displayModal(hour.tue)">{{ hour.tue.name }}</td>
                    <td class="dayData" @click="displayModal(hour.wed)">{{ hour.wed.name}}</td>
                    <td class="dayData" @click="displayModal(hour.thu)">{{ hour.thu.name }}</td>
                    <td class="dayData" @click="displayModal(hour.fri)">{{ hour.fri.name }}</td>
                    <td class="dayData" @click="displayModal(hour.sat)">{{ hour.sat.name }}</td>
                    <td class="dayData" @click="displayModal(hour.sun)">{{ hour.sun.name }}</td>
                </div>
            </div>
        </div>
        <div v-if="showModal" class="modal">
            <img
                    src="../../../public/icon/xIcon.svg"
                    @click="showModal = false"
                    id="closeBtn"
            />
            <div class="modalInfoContainer">
                <div class="modalUserInfo">
                    <h4>{{this.user.name}}</h4>
                    <p>{{this.user.phoneNumber}}</p>
                    <p>{{this.user.email}}</p>
                </div>
                <div class="modalNote">
                    <h4>Notat</h4>
                    <p>{{this.user.notes}}</p>
                </div>
                <div class="modalUserNote">
                    <h5>Melding fra kunde</h5>
                    <p>{{this.user.booking[0].note}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {hours} from "../../userData/timesheet";

    export default {
        name: "st-timesheet",
        methods: {
            alert(message) {
                alert(message)
            },
            displayModal(user) {
                this.showModal = true;
                this.user = user;
            }
        },
        data() {
            return {
                hours: hours,
                showModal: false,
                user: {}
            };
        }
    }
</script>
<style scoped>
    .modal {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 380px;
        width: 370px;
        background-color: #FCFCFC;
        margin: 0;
        border: 1px solid;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .modalInfoContainer {
        top: 0;
        width: 100%;
        padding: 0 30px;
        box-sizing: border-box;
    }

     h5, h4, p {
        text-align: left;
    }

    .modalUserInfo {}

    .modalNote {
        border-top: 1px solid;
        border-bottom: 1px  solid;
    }

    .modalUserNote {}

    #closeBtn {
        position: absolute;
        right: 0;
        margin: 10px;
        background-color: black;
        padding: 5px;
        border-radius: 50%;
    }

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
        /*border: 1px solid;*/
        transition:  0.2s ease;
    }

    .hourRow:nth-child(even) {
        background-color: aliceblue;
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

    .dayData:hover {
        cursor: pointer;
    }
</style>