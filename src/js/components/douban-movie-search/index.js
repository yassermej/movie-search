module.exports = {
  template: require('./template.html'),
  data: function() {
    return {
        result: []
    };
  },
  props: {
    searchString: {
      type: String,
      required: true
    }
  },
  methods: {
    search: function() {
      this.$http.jsonp(
        'http://api.douban.com/v2/movie/search?q=' + this.searchString,
        function(data) {
          this.$set('result', data);
        },
        {'jsonp': 'callback'}
      );
    }
  },
  watch: {
    searchString: function () {
      if (!!this.searchString) {
        this.search();
      } else {
        this.$set('result', {});
      }
    }
  },
  created: function() {
    if (!!this.searchString) {
      this.search();
    }
  }
};
