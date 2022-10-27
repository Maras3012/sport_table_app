import React from 'react';
import { CommentSection } from 'react-comments-section';
import 'react-comments-section/dist/index.css';

const Comments = () => {
  const user = localStorage.getItem('user');

  const data = [
    {
      userId: '02',
      comId: '017',
      fullName: 'Admin',
      text: 'Only comments about sport are allowed🤔',
      avatarUrl: 'https://ui-avatars.com/api/name=Admin&background=random',
      replies: [],
    },
  ];
  return (
    <CommentSection
      currentUser={{
        currentUserId: '01',
        currentUserImg: `https://ui-avatars.com/api/name=${user}&background=random`,
        currentUserProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
        currentUserFullName: user,
      }}
      commentData={data}
    />
  );
};

export default Comments;
