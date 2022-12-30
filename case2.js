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
 for (var i = 1; i < 8; i++) {
    console.log(comment.commentContent);
    console.log(i)
  }
   