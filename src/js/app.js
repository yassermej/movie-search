var Vue = require('vue');
Vue.config.debug = true;
Vue.use(require('vue-resource'));

new Vue({
  el: '#container',
  data: {
    searchTerm: '',
    searchString: ''
  },
  methods: {
    startSearch: function() {
      console.group("Vue Data");
      this.$set('searchString', this.searchTerm)
      console.log("searching: " + this.searchString);
      console.groupEnd("Vue Data");
    },
    clear: function() {
      console.log("Clearing!");
      this.$set('searchTerm', '');
      this.$set('searchString', '');
    }
  },
  components: {
    doubanMovieSearch: require('./components/douban-movie-search')
  }
});
