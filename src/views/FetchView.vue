<template lang="">
    <div>
        <!-- {{$store.state.aboutMe}} -->
     Projects
     <div v-for="project in projectData()" :key="project.name">
        <h1>{{project.name}}</h1>
    </div>
     
    </div>
</template>
<script>
export default {
    methods:{
    projectData(){
        return this.$store.state.projects
    }
    },
    computed:{
        // not linked to getAboutMe on store pg, completely diff
        getAboutMe(){
     return this.$store.dispatch('getAboutMe')
        }
    },
    mounted(){
        this.getAboutMe
    }
}
</script>
<style lang="">
    
</style>