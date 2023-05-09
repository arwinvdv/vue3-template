export default {
  methods: {
    customFunctionThatIsNotMinified(variable) {
      if (variable) {
        return 'test';
      }
      return 'test2';
    },
  },
};
