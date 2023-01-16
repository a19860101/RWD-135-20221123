<script>
import Todo from './Todo.vue'
export default {
    data(){
        return {
            title: 'Todo List',
            lists:[
                {
                    id:1,
                    name:'寄信',
                    isCompleted: true,
                    tag:'急件'
                },
                {
                    id:2,
                    name:'洗碗',
                    isCompleted: false,
                    tag:'重要'
                },
                {
                    id:3,
                    name:'念書-段考重點',
                    isCompleted: false,
                    tag:'重要'
                },
                {
                    id:4,
                    name:'整理書房',
                    isCompleted: false,
                    tag:'普通'
                }
            ],
            input:'',
            tag:''
        }
    },
    components:{
        Todo
    },
    methods:{
        add(){
            this.lists.push({
                id: Date.now(),
                name: this.input,
                isCompleted: false,
                tag:this.tag
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
        },
        tagList(){
            return new Set(this.lists.map(data=>data.tag));
        }
    }
}
</script>
<template>
    <div class="p-3">
        <h1 class="text-4xl font-bold mb-3">{{title}}</h1>
        <form action="" class="mb-3">
            <input type="text" v-model="input" class="border border-teal-600 rounded-lg p-2 mr-3">
            <select name="" id="" v-model="tag" class="border border-teal-600 rounded-lg p-2 mr-3">
                <option value="">請選擇</option>
                <option :value="tag" v-for="tag in tagList" :key="tag">{{tag}}</option>
            </select>
            <input type="submit" class="btn" @click.prevent="add()">
        </form>
        <Todo title="未完成" :lists="todoUnComplete"></Todo>
        <Todo title="已完成" :lists="todoComplete"></Todo>
       
    </div>

</template>