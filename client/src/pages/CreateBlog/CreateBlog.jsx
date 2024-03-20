import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCoverImageChange = (e) => {
    // Set cover image state to the file object
    setCoverImage(e.target.files[0]);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSave = async () => {
    console.log("Title:", title);
    console.log("Cover Image:", coverImage);
    console.log("Content:", content);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('coverImage', coverImage);
      formData.append('content', content);
  
      const response = await fetch('/api/blog', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        console.log('Blog post saved successfully.');
        // Optionally, you can redirect the user to another page or show a success message.
      } else {
        console.error('Failed to save blog post:', response.statusText);
        // Handle error, show error message to user, etc.
      }
    } catch (error) {
      console.error('An error occurred while saving the blog post:', error.message);
      // Handle error, show error message to user, etc.
    }
  };
  


  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
      />
      <br />
      <label htmlFor="coverImage" className="block mb-2">
        Upload Cover Image:
      </label>
      <input
        type="file"
        id="coverImage"
        accept="image/*"
        onChange={handleCoverImageChange}
        className="w-full border border-green-300 rounded-md p-2 mb-4"
      />
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        placeholder="Write something..."
        className=" mb-4"
        style={{ height: '300px' }} 
      />
      <br />
      <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
        Save
      </button>
    </div>
  );
};

export default BlogEditor;
