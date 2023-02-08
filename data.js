data = {
  users: [
    {
      memId: int,
      memDesc: str,
      memDOB: Date,
      memLoc: Geolocation,
      memHobbies: [],
      memFollowers: [],
      memFollowing: [],
      memMatched: [],
    },
  ],
  posts: [
    {
      postID: str,
      postOwnerID: memID,
      postTitle: str,
      postURL: urlencoded,
      likes: [], //likes could just be counts of member ID? but then how remembered...
      comments: [],
    },
  ],
  likes: [
    {
      likeOwnerID: int,
    },
  ],
  comments: [
    {
      commentOwnerID: str,
      commentText: str,
      commentReplies: [],
      commentLikes: [],
    },
  ],
  hobby: [
    {
      hobbyID: str,
      hobbyName: str,
      hobbyPosts:[],

    },
  ],

  group:[
    {GroupID:str,
    groupName:str,
    groupMemberID:[]    
}
  ],

};
