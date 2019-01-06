<template>
  <v-container>
    <v-layout
      text-xs-center
      column
      v-if="todos.length"
    >
      <h1 class="font-weight-regular mb-3">TODOs</h1>
      <v-list two-line>
        <template v-for="(todo, index) of todos">

          <v-divider
            v-if="index"
            :inset="true"
            :key="index"
            class="mr-3"
          ></v-divider>

          <v-list-tile :key="todo.id">
            <v-list-tile-action>
              <v-checkbox
                v-model="todo.checked"
                @click.prevent="checkTodo(todo)"
              ></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{todo.title}}</v-list-tile-title>
              <v-list-tile-sub-title>
                <v-tooltip bottom>
                  <template slot="activator">{{todo.description}}</template>
                  <span>{{todo.description}}</span>
                </v-tooltip>
              </v-list-tile-sub-title>
            </v-list-tile-content>

          </v-list-tile>

        </template>
      </v-list>
    </v-layout>
    <v-layout
      text-xs-center
      column
      v-if="!todos.length"
    >
      <h1 class="font-weight-regular">No TODOs</h1>
    </v-layout>
    <v-layout row wrap right>
      <NewTodo></NewTodo>
    </v-layout>
  </v-container>
</template>

<script>
import NewTodo from '@/components/NewTodo'
import { mapActions, mapGetters } from 'vuex'

export default {
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters(['todos'])
  },
  methods: {
    ...mapActions(['checkTodo'])
  },
  components: {
    NewTodo
  }
}
</script>

<style lang="stylus">

</style>
