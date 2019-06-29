<template>
  <v-app app dark>
    <v-navigation-drawer
      app
      v-model="drawer"
    >
      <v-list subheader>
        <v-subheader>Список людей в комнате</v-subheader>
        <v-list-tile
          v-for="user in users"
          :key="user.id"
          avatar
          @click.prevent
        >
          <v-list-tile-avatar>
            <img :src="user.avatar" :alt="user.name">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ user.name }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon :color="user.active ? 'teal' : 'grey'">chat_bubble</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <v-toolbar-side-icon
        @click="drawer = !drawer"
      />
      <v-btn icon @click="exit">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Чат комнаты {{ user.room }}</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <div>
        <nuxt />
      </div>
    </v-content>
  </v-app>
</template>

<script>
  import {mapState, mapMutations} from 'vuex';

  export default {
    data() {
      return {
        drawer: true,
        users: [
          {
            id: 0,
            name: 'Jason Api',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            active: true,
          },
          {
            id: 1,
            name: 'Ranee Carlson',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            active: true,
          },
          {
            id: 2,
            name: 'Cindy Baker',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
          },
          {
            id: 3,
            name: 'Ali Connors',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
          }
        ]
      };
    },

    computed: {
      ...mapState(['user']),
    },

    methods: {
      ...mapMutations(['clearData']),

      exit() {
        this.$router.push('/?leftChat');
        this.clearData();
      }
    }
  }
</script>
