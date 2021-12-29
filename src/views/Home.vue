<template>
    <mdb-container fluid>
      <mdb-row>
        <mdb-col md="12"><Menu /></mdb-col>
      </mdb-row>  
      <mdb-row>
        <mdb-col md="3"><Card /></mdb-col>
        <mdb-col md="9"><Terminal /></mdb-col>
      </mdb-row>
    </mdb-container>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Card from '@/components/Card.vue'
import Terminal from '@/components/Terminal.vue'

import {mdbContainer, mdbRow, mdbCol} from 'mdbvue';

export default {
  name: 'home',
  components: {
    Menu,
    Card,
    Terminal,
    mdbContainer,
    mdbRow,
    mdbCol
  }
}
</script>
