<template>
  <v-layout
    row
    justify-center
  >
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-btn
        slot="activator"
        fab
        color="primary"
        bottom
        right
        fixed
      >
        <v-icon dark>add</v-icon>
      </v-btn>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>New TODO</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              flat
              :disabled="!valid"
              @click="createTodo()"
            >Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-form
          v-model="valid"
          ref="form"
        >
          <v-container>
            <v-layout
              column
            >
              <v-flex
                xs12
                md4
              >
                <v-text-field
                  v-model="title"
                  :rules="titleRules"
                  :counter="TITLE_MAX_LEN"
                  label="TODO Title"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex
                xs12
                md4
              >
                <v-textarea
                  v-model="description"
                  :rules="descriptionRules"
                  :counter="DESCRIPTION_MAX_LEN"
                  label="TODO Description"
                  auto-grow
                ></v-textarea>
              </v-flex>

            </v-layout>
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script type="text/javascript">

const TITLE_MAX_LEN = 20
const DESCRIPTION_MAX_LEN = 300

export default {
  data () {
    return {
      dialog: false,
      valid: false,
      title: '',
      description: '',
      titleRules: [
        v => !!v || 'Title is required',
        v => {
          return (v && v.length <= TITLE_MAX_LEN) ||
            'Title must be less than ' + TITLE_MAX_LEN + ' characters'
        }
      ],
      descriptionRules: [
        v => {
          return v.length <= DESCRIPTION_MAX_LEN ||
            'Description must be less than ' + DESCRIPTION_MAX_LEN +
            ' characters'
        }
      ],
      TITLE_MAX_LEN,
      DESCRIPTION_MAX_LEN
    }
  },
  methods: {
    createTodo () {
      const todo = {
        title: this.title,
        description: this.description
      }
      this.$store.dispatch('addTodo', todo)
      this.dialog = false
    }
  },
  watch: {
    dialog () {
      this.$refs.form.resetValidation()
      this.title = ''
      this.description = ''
    }
  }
}

</script>
