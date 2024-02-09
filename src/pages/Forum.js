import React from 'react';
import ForumPosts from './ForumPosts'; // Assuming the file path is correct

export default function Forum() {
  const posts = [
    {author: 'Newbie User', date: 'Feb 9, 2024', content: 'This is the first post on this website. Please read more to find information', avatarUrl: 'https://gravatar.com/avatar/bac2ce289e7c01d9be9564edab0f9b82?s=400&d=robohash&r=x' },
    {author: 'Intermediate User', date: 'Feb 10, 2024', content: 'Another post here.', avatarUrl: 'https://gravatar.com/avatar/bac2ce289e7c01d9be9564edab0f9b82?s=400&d=robohash&r=x'},
    {author: 'Allice Chong', date: 'Feb 14, 2024', content: 'Another post here.', avatarUrl: 'https://gravatar.com/avatar/f03e82041209bdaebe6db843ba500c19?s=400&d=robohash&r=x' },
    {author: 'Ben Willson', date: 'Feb 18, 2024', content: 'Another post here.', avatarUrl: 'https://gravatar.com/avatar/0e86711bba5dabdc3265aa6f073a407c?s=400&d=robohash&r=x' },
    {author: 'Carla Watson', date: 'Feb 22, 2024', content: 'Another post here.', avatarUrl: 'https://gravatar.com/avatar/0e94010b90c4ff6dee4755e400371677?s=400&d=robohash&r=x' },
  ];


  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 16 }}>
      {posts.map((post) => (
        <ForumPosts
          author={post.author}
          date={post.date}
          content={post.content}
          avatarUrl={post.avatarUrl}
        />
      ))}
    </div>
  );
};
