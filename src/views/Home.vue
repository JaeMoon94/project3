<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs12 text-xs-center>
      <h1>Todo List!</h1>
      <p>Job to Do: {{ todoList.length }} / Finished: {{ countDone }} / Job Left: {{ todoList.length -  countDone}}</p>
    </v-flex>
    <v-flex xs6 pa-2>
      <List
        :todoList="todoList"
        @statusControl="statusControl"
        @listDelete="listDelete"
      />
    </v-flex>
    <v-flex xs6 pa-2>
      <ListAdd
        @listAdd="listAdd"
        @listEdit="listEdit"
      />
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import List from "../components/List"
import ListAdd from "../components/ListAdd"

export default {
  components: {
    List,
    ListAdd
  },
  data() {
    return {
      todoList: []
    }
  },
  created() {
    console.log(this)
  },
  computed: {
    countDone() {
      let count = 0
      this.todoList.forEach(list => {
        if (list.status === "done") count++
      })
      return count
    }
  },
  methods: {
    listAdd(memo) {
      this.todoList.push({ memo: memo, status: "created" })
    },
    statusControl(index, status) {
      this.todoList[index].status = status
    },
    listDelete(index) {
      this.todoList.splice(index, 1)
    },
    listEdit(memo, index) {
      this.todoList[index].memo = memo
    }
  }
}
</script>