var _ = require('lodash');

function BaseModel() {
	
	this.all = function(){
		return this.getTable();
	};

	this.create = function(data, cb){
        var postByTitle = _.find(this.all(), function(post) {
            return post.title == data.title;
        });
        if (postByTitle){
            return cb("The title " + data.title + " is already in use") 
        };

        // for (var i=0; i<this.all().length; i++) {
        //     if (this.all()[i].title == data.title) {
        //         return cb( "The title " + data.title + " is already in use" );
        //     }
        // }

		data.id = this.all()[ this.all().length-1 ].id+1;
		data.created_at = new Date();
		data.updated_at = new Date();

		this.all().push(data);
		cb(null, data);
	};
	
	this.findById = function(id, cb){
        var post = _.find(this.all(), function(post) {
            return post.id == id;
        });
        return cb(post ? null : "A post with id " + id + " could not be found.", post);

        // for (var i=0; i<this.all().length; i++) {
        //     if (this.all()[i].id == id) {
        //         return cb(null, this.all()[i]);
        //     }
        // }
        // cb( "A post with id " + id + " could not be found." );
	};
	
	this.update = function(id, data, cb){
        var postByTitle = _.find(this.all(), function(post) {
            return post.title == data.title;
        });
        if (postByTitle && postByTitle.id != id){
            return cb("The title " + data.title + " is already in use") 
        };

        // for (var i=0; i<this.all().length; i++) {
        //     if (this.all()[i].title == data.title) {
        //         return cb("The title " + data.title + " is already in use");
        //     }
        // }

		data.updated_at = new Date();

        var post = _.find(this.all(), function(post) {
            return post.id == id;
        });
        if (!post){
            return cb( "A post with id " + id + " could not be found." ) 
        };
        for(var prop in data){
            if (data[prop]){
                post[prop] = data[prop]
            }
        }
        return cb(null, post);

        // for (var i=0; i<this.all().length; i++) {
        //     if (this.all()[i].id == id) {
        //         for(var prop in data){
        //             if (data[prop]){
        //                 this.all()[i][prop] = data[prop]
        //             }
        //         }
        //         return cb(null, this.all()[i]);
        //     }
        // }
        // cb( "A post with id " + id + " could not be found." );
	};
	
	this.del = function(id, cb){
        var removed = _.remove(this.all(), function(post) {
            return post.id == id;
        });
        return cb(removed.length > 0 ? null : "A post with id " + id + " could not be found.", removed);

        // for (var i=0; i<this.all().length; i++) {
        //     if (this.all()[i].id == id) {
        //         this.all().splice(i,1); // Alternatively: delete all[i];
        //     return cb(null);
        //     }
        // }
        // cb( "A post with id " + id + " could not be found." );
	};

}

module.exports = BaseModel;