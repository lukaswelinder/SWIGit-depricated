// helpers & middleware 

angular.module('swigit.ctrl',[])
  .factory('data',['$http','$state',function($http, $state) {
    
    var db = {};
    
    var fetch_one = function() {
      console.log($state.params);

      if($state.params.url_slug in db)
        return db[$state.params.url_slug];

      return $http.get('/_api/posts',{
          headers: {
            'Content-Type': 'application/json'
          },
          data: params,
        }).then(function(res) {

        });
    };

    var fetch_index = function() {
      return $http.get('/_api/posts')
        .then(function(res) {
          // parse data to db using slug as object key
          // return data for promise-chaining
        });
    };

   return {
    db: db,
    fetch_one: fetch_one,
    fetch_index: fetch_index
   };

  }]);