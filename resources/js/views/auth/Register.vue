<template>
      <div class="flex flex-wrap w-full justify-center items-center pt-56">
        <div class="flex flex-wrap max-w-xl">
              <form @submit.prevent="saveUser">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="user.name">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model="user.email">
                    </div>
                     <div class="form-group">
                        <label>Password</label>
                        <input type="text" class="form-control" v-model="user.password">
                    </div>
                    <div class="form-group">
                        <label>Confirm Password</label>
                        <input type="text" class="form-control" v-model="user.password_confirmation">
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>

        </div> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:{}
        }
    },
    methods:{
        saveUser(){
                this.axios
                    .post('http://localhost:8000/api/users', this.user)
                    .then(response => (
                        this.$router.push({ name: 'userRegister' })

                    ))
                     // console.log(response);
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
    }
}
</script>
