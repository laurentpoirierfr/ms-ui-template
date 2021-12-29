<template>
  <div id="card">
    <mdb-card>
      <mdb-card-image
        :src="require('@/assets/card.png')"
        alt="app.name"
      ></mdb-card-image>
      <!-- <mdb-card-image src="./images/card.png"  alt="app.name"></mdb-card-image> -->
      <mdb-card-body>
        <mdb-card-title>{{ application.name }}</mdb-card-title>
        <mdb-card-text>{{ application.description }}</mdb-card-text>
        <mdb-card-text>Version : {{ application.version }}</mdb-card-text>
        <mdb-card-text>Profile : {{ application.profile }}</mdb-card-text>

        <mdb-btn color="primary" v-on:click="initialize()">{{ status }}</mdb-btn>

      </mdb-card-body>
    </mdb-card>
  </div>
</template>

<script>
import {
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn,
} from "mdbvue";

export default {
  name: "Card",
  data() {
    return {
      application: {
        name: "Application Name",
        description: "Description",
        version: "0.0.0",
        profile: "proto",
      }, 
      status : "DOWN"
    };
  },
  mounted() {

    this.initialize();
  },
  methods: {

    initialize(){
    this.axios.get("/actuator/info").then((res) => {
      this.application = res.data.application;
    });


      this.axios.get("/actuator/health").then((res) => {
        this.status = res.data.status;
      });
    }
  },
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

#card {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  margin-top: 10px;

  text-align: center;
  color: #2c3e50;
  width: 350px;
}
</style>