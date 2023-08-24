<template>
    <div class="job">
        <h1>Job detail page.</h1>
        <h1>id: {{ id }}</h1>

        <div v-if="job">
            <h2>{{ job.title }}</h2>
            <p>{{ job.description }}</p>
        </div>
        <div v-else>
            <p>Job is loading...</p>
        </div>

    </div>
</template>

<script>
export default {
    props: ['id'],
    name: "JobsDetailView",
    data(){
        return {
            job: null
        }
    },
    mounted(){
        fetch("http://localhost:3000/jobs/" + this.id)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(error => console.log(error.message))
    }
}
</script>

<style>
</style>
