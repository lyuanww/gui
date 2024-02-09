import React, {useState} from 'react';
import { Button, Modal, TextField } from '@mui/material';
import ForumPosts from './ForumPosts'; // Assuming the file path is correct


export default function Forum() {
  const [showModal, setShowModal] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const posts = [
    {author: 'Newbie User', date: 'Feb 9, 2024', content: 'This is my first post on this website! Had so much fun farming at GUI last Friday!! Will be joining in more activities :)', avatarUrl: 'https://gravatar.com/avatar/bac2ce289e7c01d9be9564edab0f9b82?s=400&d=robohash&r=x'},
    {author: 'Intermediate User', date: 'Feb 10, 2024', content: 'Exciting stuff! Have never done any woodworking before so it was a great new experience!', avatarUrl: 'https://gravatar.com/avatar/bac2ce289e7c01d9be9564edab0f9b82?s=400&d=robohash&r=x'},
    {author: 'Allice Chong', date: 'Feb 14, 2024', content: 'Went for my 3rd volunteer session last week and I feel more passionate about the environment everytime I go!', avatarUrl: 'https://gravatar.com/avatar/f03e82041209bdaebe6db843ba500c19?s=400&d=robohash&r=x' },
    {author: 'Ben Willson', date: 'Feb 18, 2024', content: 'Before volunteering here, I didnt even know I was so enthusiastic about farming! ', avatarUrl: 'https://gravatar.com/avatar/0e86711bba5dabdc3265aa6f073a407c?s=400&d=robohash&r=x' },
    {author: 'Carla Watson', date: 'Feb 22, 2024', content: 'Had so much fun with my friends... will be back again!', avatarUrl: 'https://gravatar.com/avatar/0e94010b90c4ff6dee4755e400371677?s=400&d=robohash&r=x' },
  ];

  const handleAddPost = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button color="primary" onClick={() => setShowModal(true)}>
        Add New Post
      </Button>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          background: 'white', padding: '16px', borderRadius: '8px',
        }}>
          <h2>Add New Post</h2>
          <Button> Add Image </Button>
  
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Enter your post content"
            value={newPostContent} 
            onChange={(e) => setNewPostContent()}
            style={{ marginBottom: 15 }}
          />
          <Button variant="contained" color="primary" onClick={handleAddPost} style={{ marginRight: 8 }}>
            Add Post
          </Button>
          <Button variant="outlined" color="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </div>
      </Modal>

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
    </div>
  );
};