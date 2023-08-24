<template>
    <div class="jobs">
        <div class="job" v-for="job in jobs" :key="job">
            <router-link :to="{name: 'job-detail', params: {'id': job.id}}">
                <h3>{{ job.title }}</h3>
            </router-link>
        </div>
    </div>
</template>


<script>
export default {
    props: [],
    data(){
        return {
            jobs: []
        }
    },
    mounted(){
        fetch("http://localhost:3000/jobs")
        .then(res => res.json())
        .then(data => this.jobs = data)
        .catch(error => console.log(error.message))
    }
}
</script>
