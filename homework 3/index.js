const posts = [
    {
      id: 1,
      title: "post1",
      category: "sport"
    },
    {
      id: 2,
      title: "post2",
      category: "sport"
    },
    {
      id: 3,
      title: "post3",
      category: "movies"
    }
  ];

  class PostService {

    constructor(post){
        this.post = post;
    }

   getPostsGroupedByCategory(){
    const result = {
        sport: this.post.filter( (e) => {
            if(e.category === 'sport'){
                return e;
            }
        }),
        movies: this.post.filter( (e) => {
            if(e.category === 'movies'){
                return e;
            }
        })
    }

    return result;
    
   }

   countTotalPostsPerCategory(){
        const result = this.getPostsGroupedByCategory();
        const moviesLength = result.movies.length;
        const sportLength = result.sport.length;
            console.log('Movies Lenght: ', moviesLength, 'Sport Length: ', sportLength);
   }

   insertPost(title, category){
    const obj = {
                    id: this.post.length + 1,
                    title: title,
                    category: category
                };

        this.post.push(obj);

   }

   DeletePost(id){
        const delet = this.post.filter( (e) => {
            if(e.id !== id) return e
        })

        return delet;

   }

   getPostTitles(){
        const titles = this.post.map( (e) => {
            return e.id, e.title;
        })

       return titles;
   }

   setStatus(status, id){
       const map = this.post.map( (post) => {
            if(post.id === id){
                return {
                    ...post,
                    active: status
                }
            }
            return post
        })

        return map;
   }

   updatePostTitle(title, id){
        const map = this.post.map( (post) => {
            if(post.id === id){
                return {
                    ...post,
                    title : title
                }
            }
            return post;
        })

        return map;
   }

  }

  const newPost = new PostService(posts);
    newPost.getPostsGroupedByCategory();
    newPost.countTotalPostsPerCategory();
    newPost.insertPost('post4', 'sport');
    newPost.DeletePost(2);
    newPost.getPostTitles();
    newPost.setStatus('active', 3);
    newPost.updatePostTitle(`new Title`, 4);