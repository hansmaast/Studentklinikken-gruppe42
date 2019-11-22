<template>
    <div class="mainContainer">
        <div class="contentContainer">
            <h1>Ansatte</h1>
            <div class="infoCardContainer">
              <employeeCard
                      v-for="ansatt in this.ansattData"
                      :name="ansatt.name"
                      :profession="ansatt.profession"
                      :phone-nr="ansatt.phoneNr"
                      :email="ansatt.email"
              />
            </div>
        </div>
    </div>
</template>

<script>
  import EmployeeCard from "@/views/ansatt/EmployeeCard";
  import { ansattData } from "../../userData/ansattData";

  export default {
        name: "Login",
        components: {EmployeeCard},
        data() {
            return {
              ansattData: ansattData
            };
        }
    };
</script>

<style scoped>
    h3,
    h5,
    p {
        margin: 10px 0 0 0;
        font-size: 18px;
        font-weight: bold;
    }

    h3 {
        font-size: 21px;
    }

    h5 {
        font-weight: normal;
    }

    .contentContainer {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 40px 80px;
        box-sizing: border-box;
    }

    .infoCardContainer {
        width: 100%;
        display: flex;
        flex-direction: row;
      flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        padding: 20px 0;
    }

    .ansattImg > img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1100px) {
        .infoCardContainer {
            flex-direction: column;
          flex-wrap: nowrap;
          justify-content: center;
        }

        .contentContainer {
            align-items: center;
        }
    }
</style>
