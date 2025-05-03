// const { test, describe } = require('node:test')
// const assert = require('node:assert')
// const listHelper = require('../utils/list_helper')

// test('dummy returns one', () => {
//   const blogs = []
//   const result = listHelper.dummy(blogs)
//   assert.strictEqual(result, 1)
// })


// describe('totalLikes', () => {
//   test('of an empty list is zero', () => {
//     const blogs = [];
//     const result = listHelper.totalLikes(blogs);
//     assert.strictEqual(result, 0);
//   });

//   test('when list has only one blog, equals the likes of that', () => {
//     const blogs = [
//       { title: "Test Blog", author: "Author", likes: 5 }
//     ];
//     const result = listHelper.totalLikes(blogs);
//     assert.strictEqual(result, 5);
//   });

//   test('of a bigger list is calculated correctly', () => {
//     const blogs = [
//         {
//           _id: "5a422a851b54a676234d17f7",
//           title: "React patterns",
//           author: "Michael Chan",
//           url: "https://reactpatterns.com/",
//           likes: 7,
//           __v: 0
//         },
//         {
//           _id: "5a422aa71b54a676234d17f8",
//           title: "Go To Statement Considered Harmful",
//           author: "Edsger W. Dijkstra",
//           url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
//           likes: 5,
//           __v: 0
//         },
//         {
//           _id: "5a422b3a1b54a676234d17f9",
//           title: "Canonical string reduction",
//           author: "Edsger W. Dijkstra",
//           url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
//           likes: 12,
//           __v: 0
//         },
//         {
//           _id: "5a422b891b54a676234d17fa",
//           title: "First class tests",
//           author: "Robert C. Martin",
//           url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
//           likes: 10,
//           __v: 0
//         },
//         {
//           _id: "5a422ba71b54a676234d17fb",
//           title: "TDD harms architecture",
//           author: "Robert C. Martin",
//           url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
//           likes: 0,
//           __v: 0
//         },
//         {
//           _id: "5a422bc61b54a676234d17fc",
//           title: "Type wars",
//           author: "Robert C. Martin",
//           url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
//           likes: 2,
//           __v: 0
//         }  
//     ];
//     const result = listHelper.totalLikes(blogs);
//     assert.strictEqual(result, 36); // 10 + 5 + 8
//   });
// });


const { test, describe } = require('node:test');
const assert = require('node:assert');
const listHelper = require('../utils/list_helper');

describe('mostLikes', () => {
  test('of an empty list is null', () => {
    const blogs = [];
    const result = listHelper.mostLikes(blogs);
    assert.strictEqual(result, null);
  });

  test('when list has only one blog, returns that author', () => {
    const blogs = [
      { title: "Single Blog", author: "Alice", likes: 7 },
    ];
    const result = listHelper.mostLikes(blogs);
    assert.deepStrictEqual(result, { author: "Alice", likes: 7 });
  });

  test('of a bigger list is calculated correctly', () => {
    const blogs = [
      { title: "Blog 1", author: "Alice", likes: 10 },
      { title: "Blog 2", author: "Bob", likes: 5 },
      { title: "Blog 3", author: "Alice", likes: 8 },
      { title: "Blog 4", author: "Bob", likes: 12 },
      { title: "Blog 5", author: "Charlie", likes: 15 },
    ];
    const result = listHelper.mostLikes(blogs);
    assert.deepStrictEqual(result, { author: "Charlie", likes: 15 });
  });
});
