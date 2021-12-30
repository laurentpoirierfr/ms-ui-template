<template>
  <mdb-navbar color="primary" dark>
    <mdb-navbar-brand href="https://mdbootstrap.com/">
     Datahub
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <!-- ====================================================== -->
        <mdb-nav-item href="#" active>Home</mdb-nav-item>
        <!-- ====================================================== -->
        <mdb-dropdown tag="li" class="nav-item" v-for="menu in menus" :key="menu.name">
          <mdb-dropdown-toggle tag="a" navLink color="primary" slot="toggle" waves-fixed>
            {{ menu.name }}
          </mdb-dropdown-toggle> 
          <!-- ====================================================== -->
          <mdb-dropdown-menu v-for="item in menu.items" :key="item.name">
            <mdb-dropdown-item  v-bind:href="item.href">
              {{ item.name }}
            </mdb-dropdown-item>
          </mdb-dropdown-menu>
          <!-- ====================================================== -->
        </mdb-dropdown>
        <!-- ====================================================== -->
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>


<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbDropdownItem,
} from "mdbvue";

export default {
  name: "NavbarPage",
  data() {
    return {
      menus: [
        { 
          name : "Help",
          items: [
            { name: "Swagger", href: "/api-docs" }
          ]
        }
      ]
    };
  },
  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.axios.get("/api/v1/menu").then((res) => {
        this.menus = res.data;
      });
    },
  },
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
  },
};
</script>