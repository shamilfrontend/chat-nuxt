export const state = () => ({
  user: {
    name: 'shamil',
    room: '777'
  },

  messages: [
    {
      text: 'Salam popolam'
    },
    {
      text: 'va al Salam popolam'
    },
  ],
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  clearData(state) {
    state.user = {};
    state.messages = [];
  },
};

export const actions = {
  SOCKET_newMessage(ctx, data) {
    console.log('message received', data);
  }
};
