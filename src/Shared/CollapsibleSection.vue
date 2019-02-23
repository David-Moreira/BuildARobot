<template>
    <div>
        <div class="header">
            <span v-if="open" @click="open = !open"> &#8661; Collapse

            </span>
            <span v-else @click="open = !open"> &#8661; Collapse

            </span>
            <slot v-if="open">
                <div>
                    Default Content
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CollapsibleSection",
        data (){
            return {
            open: true     
            }
        }
    }
</script>

<style>
    .header span{
        background-color:grey;
        display:block;
        padding:3px;
    }
        .header span:hover{
        cursor:pointer;
        }
</style>
