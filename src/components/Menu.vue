<template>
  <mdb-navbar color="primary" dark>
    <mdb-navbar-brand href="https://mdbootstrap.com/">
      [AvA]
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <!-- ====================================================== -->
        <mdb-nav-item href="#" active>Home</mdb-nav-item>
        <!-- ====================================================== -->
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle
            tag="a"
            navLink
            color="primary"
            slot="toggle"
            waves-fixed
            >Actions</mdb-dropdown-toggle
          >
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Start</mdb-dropdown-item>
            <mdb-dropdown-item>Stop</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <!-- ====================================================== -->
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle
            tag="a"
            navLink
            color="primary"
            slot="toggle"
            waves-fixed
            >Help</mdb-dropdown-toggle
          >
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Swagger</mdb-dropdown-item>
            <mdb-dropdown-item>Azure</mdb-dropdown-item>
            <mdb-dropdown-item>Quality</mdb-dropdown-item>
          </mdb-dropdown-menu>
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