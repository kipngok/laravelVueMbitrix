<template>
    <div > 
   <div>
<b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Products</b-nav-item>
        <b-nav-item href="/category">Categories</b-nav-item>
        <b-nav-item href="#">Pricing</b-nav-item>
         <b-nav-item href="/login">Login</b-nav-item>
        <b-nav-item href="/register">Register</b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
<div class="container">
    <router-view> </router-view>
</div>
        
    </div>
</template>
 
<script>
    
    export default {
        name:'App',
    };
</script>