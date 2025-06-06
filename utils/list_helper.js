
  const dummy = (blogs) => {
    return 1;
  };
  
  const totalLikes = (blogs) => {
    return blogs.reduce((sum, blog) => sum + blog.likes, 0);
  };
  
  const mostLikes = (blogs) => {
    if (blogs.length === 0) {
      return null;
    }
  
    const authorLikes = {};
  
    blogs.forEach((blog) => {
      authorLikes[blog.author] = (authorLikes[blog.author] || 0) + blog.likes;
    });
  
    const topAuthor = Object.keys(authorLikes).reduce((maxAuthor, author) => {
      return authorLikes[author] > authorLikes[maxAuthor] ? author : maxAuthor;
    });

  
  
    return {
      author: topAuthor,
      likes: authorLikes[topAuthor],
    };
  };
  
  module.exports = {
    dummy,
    totalLikes,
    mostLikes,
  };
  