<template>
  <v-app app dark>
    <v-navigation-drawer
      app
      v-model="drawer"
      mobile-break-point="992"
    >
      <v-list subheader>
        <v-subheader>Список людей в комнате</v-subheader>
        <v-list-tile
          v-for="(item, index) in users"
          :key="item.id"
          avatar
          @click.prevent
        >
          <v-list-tile-avatar>
            <img
              :src="index % 2 ? boyAvatar : girlAvatar"
              :alt="item.name"
            >
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon :color="item.id === user.id ? 'teal' : 'grey'">chat_bubble</v-icon>
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
      <div style="height: 100%;">
        <nuxt/>
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
        boyAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        girlAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        users2: [
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
      ...mapState(['user', 'users']),
    },

    methods: {
      ...mapMutations(['clearData']),

      exit() {
        this.$socket.emit('userLeft', this.user.id, () => {
          this.$router.push('/?message=leftChat');
          this.clearData();
        });
      }
    }
  }
</script>
