<template>
    <div class="container">
    	<sidebar></sidebar>
        <router-view> </router-view>
    </div>


</template>
 
<script>
import sidebar from "../components/sidebar.vue";
    export default {
        name:'AppLayout',
        components: { sidebar
  		},
    };
</script>