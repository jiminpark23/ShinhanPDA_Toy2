<template>
    <div class="page">
        <header><h1>Vue Fire todo1</h1></header>
        <main>
        <div class="todos">
            <div class="write">
                <input 
                    ref="writeArea"
                    type="text" 
                    v-model="todoItem" 
                    @keyup.enter="addItem"
                />
                <button class="btn add" @click="addItem">Add</button>
            </div>
            <ul class="list">
            <li v-for="(item, i) in todos" :key="i">
                <i @click="checkItem(i)"
                    :class="[item.state === 'yet' ? 'far' : 'fas', 'fa-check-square']">
                </i>         <!--yet일 때: far, done일 때: fas-->
                <span>
                    {{item.text}}
                    <b>
                        <a href="">Edit</a>
                        <a href="">Del</a>
                    </b>
                </span>
            </li>
            </ul>
        </div>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addItemText: '',
            todos:[
                {text: '공부하기', state: 'yet'},
                {text: '운동하기', state: 'done'},
                {text: '글쓰기', state: 'done'},
            ]
        }
    },
    methods: {
        addItem() {
            if (this.addItemText === '') return;
            this.todos.push({
                text: this.addItemText, 
                state: 'yet'
            }),
            this.addItemText = ''
        },
        checkItem(index) {
            if (this.todos[index].state === 'yet') {
                this.todos[index].state = 'done'
            } else if (this.todos[index].state === 'done'){
                this.todos[index].state = 'yet'
            }
        },
    },
    mounted() {
        this.$refs.writeArea.focus();
    }
}
</script>

<style>

</style>