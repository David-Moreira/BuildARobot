<template>
<div>
    <h1>
        {{part.title}}
    </h1>
    <div>{{part.description}}</div>
    <img :src="part.src"/>
    
</div>    

</template>

<script>
import parts from '../data/parts';

export default {
    name:"PartInfo",
    computed:{
        part(){
            return parts[this.$route.params.partType].find(part => part.id == this.$route.params.id);
        }
    }
}
</script>

<style scoped>

</style>
