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
            ],
            input:''
        }
    },
    methods:{
        add(){
            this.lists.push({
                id: Date.now(),
                name: this.input,
                isCompleted: false
            });
            this.input = '';
            
        }
    },
    computed:{
        todoComplete(){
            return this.lists.filter(data => data.isCompleted)
        },
        todoUnComplete(){
            return this.lists.filter(data => !data.isCompleted)
        }
    }
}
</script>
<template>
    <div class="p-3">
        <h1 class="text-4xl font-bold mb-3">{{title}}</h1>
        <form action="" class="mb-3">
            <input type="text" v-model="input" class="border border-teal-600 rounded-lg p-2 mr-3">
            <input type="submit" class="btn" @click.prevent="add()">
        </form>
        <h2 v-show="todoUnComplete.length > 0">未完成</h2>
        <ul class="w-[400px] space-y-3">
            <li v-for="list in todoUnComplete" :key="list.id" class="w-full flex bg-teal-200 p-3 rounded-lg">
                <div class="grow">{{list.name}}</div>
                <form action="" class="w-5 text-center">
                    <input type="checkbox" v-model="list.isCompleted">    
                </form>
            </li>
        </ul>
        <div class="py-3"></div>
        <h2 v-show="todoComplete.length > 0">已完成</h2>
        <ul class="w-[400px] space-y-3">
            <li v-for="list in todoComplete" :key="list.id" class="w-full flex bg-teal-200 p-3 rounded-lg">
                <div class="grow">{{list.name}}</div>
                <form action="" class="w-5 text-center">
                    <input type="checkbox" v-model="list.isCompleted">    
                </form>
            </li>
        </ul>
       
    </div>

</template>