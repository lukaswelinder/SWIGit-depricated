// helpers & middleware

angular.module('swigit.ctrl',[])

.factory('dataCtrl',['$http',function($http) {
    
    var db = {arr:[], hash:{}, cursor: 0};

    var GET = function(params) {
      return $http({method:'GET', url:'/_api/posts', data:params});
    };
    


// slug formatter:
// var url_slug = title
//                   .toLowerCase()
//                   .replace(/[^\w ]+/g,'')
//                   .replace(/ +/g,'_');
    
  var fetch_post = function(params) {
    if(params.url_slug in db.hash)
      return db[params.url_slug];
    return GET(params)
      .then(function(res) {
        db.hash[res.data.url_slug] = res.data;
        return db;
      });
  };

  var fetch_index = function() {
    // if(db.arr.length === db.cursor)
    //   return db;
    return GET({cursor: db.cursor})
      .then(function(res) {
        console.log(res.data);
        db.arr.push(res.data); // CHANGE THIS LATER
        db.arr.reduce(function(curr,val) {
            curr[val.url_slug] = val;
            return curr;
          }, db.hash);
        db.cursor = db.arr.length;
        console.log(db);
        return db;
      });
  };

 return {
  db: db,
  fetch_post: fetch_post,
  fetch_index: fetch_index
 };

  }]);








  // for(var i = 0; i < res.data.length; i++) {
  //           var title = res.data[i].title;                
  //           var author = res.data[i].author;
  //           var published = res.data[i].published;
  //           var content = res.data[i].content ? String(res.data[i].content).replace(/<[^>]+>/gm, '') : '';
  //           var url_slug = title
  //                           .toLowerCase()
  //                           .replace(/[^\w ]+/g,'')
  //                           .replace(/ +/g,'_');
  //           db.push({
  //             url_slug: url_slug,
  //             title: title,
  //             author: author,
  //             published: published,
  //             content: content
  //           });
  //           hash[url_slug] = db[i];
  //         }