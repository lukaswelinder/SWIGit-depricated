// helpers & middleware 

angular.module('swigit.ctrl',[])
  .factory('dataCtrl',['$http',function($http) {
    
    var db = {};
    
    var fetch_post = function(params) {
      console.log(params);

      if(params.url_slug in db)
        return db[params.url_slug];

      return $http.get('/_api/posts',{
          headers: {
            'Content-Type': 'application/json'
          },
          data: params,
        }).then(function(res) {
          return res.data;
        });
    };

    var fetch_index = function() {
      return $http.get('/_api/posts')
        .then(function(res) {
          // parse dataCtrl to db using slug as object key
          // return dataCtrl for promise-chaining
        });
    };

   return {
    db: db,
    fetch_post: fetch_post,
    fetch_index: fetch_index
   };

  }]);