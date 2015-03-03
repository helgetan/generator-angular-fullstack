module.exports.tasks = {
  imagemin: {
    dist: {
      files: [{
        expand: true,
        cwd: '<%%= yeoman.client %>/assets/images',
        src: '{,*/}*.{png,jpg,jpeg,gif}',
        dest: '<%%= yeoman.dist %>/client/assets/images'
      }]
    }
  },

  concurrent: {
    assetsDist: ['imagemin']
  }
};
