<script>
export default {
    data(){
        return {
            title: 'Todo List',
            lists:[
                {
                    id:1,
                    name:'寄信',
                    isCompleted: true
                },
                {
                    id:2,
                    name:'洗碗',
                    isCompleted: false
                }
            ]
        }
    }
}
</script>
<template>
    <div class="p-3">
        <h1 class="text-4xl font-bold">{{title}}</h1>
        <ul>
            <li v-for="list in lists" :key="list.id">
                {{list.name}}
                <input type="checkbox" v-model="list.isCompleted">    
            </li>
        </ul>
    </div>

</template>