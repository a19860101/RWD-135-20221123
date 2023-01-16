<script>
export default{
    props:{
        title: String,
        lists: Array
    }
}
</script>
<template>
    <div>
        <h2 v-if="lists.length > 0">{{title}}</h2>
        <ul class="w-[400px] space-y-3">
            <li v-for="list in lists" :key="list.id" class="w-full flex bg-teal-200 p-3 rounded-lg">
                <div class="grow">
                    {{list.name}}

                    <span class="rounded bg-rose-500 px-1 text-sm" v-if="list.tag==='重要'">{{list.tag}}</span>
                    <span class="rounded bg-amber-500 px-1 text-sm" v-if="list.tag==='急件'">{{list.tag}}</span>
                    <span class="rounded bg-blue-500 px-1 text-sm" v-if="list.tag==='普通'">{{list.tag}}</span>
                </div>
                <form action="" class="w-5 text-center">
                    <input type="checkbox" v-model="list.isCompleted">    
                </form>
            </li>
        </ul>
    </div>

</template>
