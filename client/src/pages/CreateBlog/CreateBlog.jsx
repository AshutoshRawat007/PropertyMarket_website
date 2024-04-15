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
    setCoverImage(e.target.files[0]);
  };
  const handleContentChange = (value) => {
    setContent(value);
  };
  const handleSave = async () => {
    // console.log("Title:", title);
    // console.log("Cover Image:", coverImage);
    // console.log("Content:", content);
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('coverImage', coverImage);
      formData.append('content', content);

      const baseUrl = process.env.REACT_APP_BASE_URL;
  
      const response = await fetch(`${baseUrl}/createblog`, {
        method: 'POST',
        body: formData,
        credentials:'include'
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
    <div className="pb-10 pt-10 mb-8 flex flex-col items-center justify-start w-full overflow-auto bg-gray-50_01"> {/* Similar background color */}
      <form className="py-8 px-4 bg-white rounded-lg shadow-md w-full max-w-7xl mx-auto"> {/* Container styling */}
        <h2 className="text-center mt-2 text-xl font-semibold">Let's Create Blog</h2> {/* Heading with similar font weight */}
        <div className="my-4">
          <label htmlFor="propertyName" className="text-lg mt-4 block text-gray-700">Title</label> {/* Label styling */}
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            className="input-field border-b-2 border-gray-700 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
          />
        </div>
        <br />
        <label htmlFor="coverImage" className="text-lg mt-4 block text-gray-700">
          Upload Cover Image:
        </label>
        <input
          type="file"
          id="coverImage"
          onChange={handleCoverImageChange}
          className="input-field border-b-2 border-green-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
        />
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          placeholder="Write something..."
          className="mb-4"
          style={{ height: '300px' }}
        />
        <br />
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};


export default BlogEditor;
