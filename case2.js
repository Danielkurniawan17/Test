var comment = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                 {
                     commentId: 111,
                     commentContent: 'Haai juga hai jugaa'
                 },
                 {
                commentId: 112,
                commentContent: 'Haai juga hai jugaa'
                 }
            ]
        },
        {
         commentId: 12,
         commentContent: 'Hai juga',
         replies: [
            {
                commentId: 121,
                commentContent: 'Haai juga hai jugaa'
            }
            ]
        }
    ]
    },
        {
            commentId: 2,
            commentContent: 'Halooo'
    }
 ]
 function countComment(comment) {
  let count = 0;
  for (let i = 0; i < comment.length; i++) {
    count++;
    if (comment[i].replies) {
      count += countComment(comment[i].replies);
    }
  }
  return count;
}
console.log(countComment(comment));
