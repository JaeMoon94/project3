<template>
  <div>
    <v-card
      class="pa-3 mb-3"
      :class="{'done': list.status === 'done'}"
      v-for="(list, index) in todoList"
      :key="index"
    >
      <p>{{ list.memo }}</p>
      <v-btn
        v-if="list.status === 'created'"
        @click="$emit('statusControl', index, 'done')"
        text small color="green"
      >
        <i class="fas fa-check"></i>Done
      </v-btn>
      <v-btn
        v-else
        @click="$emit('statusControl', index, 'created')"
        text small color="blue"
      >
        <i class="fas fa-redo-alt"></i>Reverse
      </v-btn>
      <v-btn 
        @click="$emit('listDelete', index)"
        text small color="red"
      >
        <i class="fas fa-trash-alt"></i>Delete
      </v-btn>
      <v-btn
        @click="listEdit(list.memo, index)"
        v-if="list.status === 'created'"
        text small color="yellow"
      >
        <i class="fas fa-edit"></i>Edit
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { eventBus } from "../main"
export default {
  props: ["todoList"],
  methods: {
    listEdit(memo, index) {
      eventBus.listEdit(memo, index)
    }
  }
}
</script>

<style scoped>
.done {
  background-color: rgba(0, 0, 0, 0.1);
}
.done p {
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
}
</style>