<template>
    <div>
        <div class="header">
            <span v-if="open" @click="open = !open"> Collapse

            </span>
            <span v-else @click="open = !open"> Collapse

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

</style>
