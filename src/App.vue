<template>
  <v-app>
    <v-toolbar
      app
      color="primary"
      dark
    >
      <v-toolbar-title
        class="headline text-uppercase"
        row
      >
        <span class="font-weight-light">My</span>
        <span class="font-weight-bold"> TODO </span>
        <span class="font-weight-light">list</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
        >
          <v-icon>menu</v-icon>
        </v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      dark
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile tag="div">
          <v-list-tile-content>
            Navigation
          </v-list-tile-content>

          <v-list-tile-action v-if="!mini">
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.url"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content dark>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      mini: false,
      items: [
        {
          icon: 'home',
          title: 'Home',
          url: '/'
        },
        {
          icon: 'info',
          title: 'About',
          url: '/about'
        }
      ]
    }
  }
}
</script>
