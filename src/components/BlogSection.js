import React, { useEffect, useState } from 'react';
import './BlogSection.css';
import blogBg from '../assets/Rectangleabout-bg.png';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://3.7.81.243:3253/api/blog/', {
          method: 'GET',
        });
        const data = await res.json();
        console.log('data11', data); 
        setBlogs(data.data || []);
      } catch (error) {
        console.error('blogs111', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="blog-section">
      <img src={blogBg} alt="Blog background" className="blog-bg" />
      <h2 className="blog-title">Our Blog</h2>
      {loading ? (
        <div className="blog-loading">Loading...</div>
      ) : (
        <div className="blog-grid">
          {blogs.map((blog, idx) => (
            <div className="blog-card" key={blog.id || idx}>
              <div className="blog-img-box">
                <img src={blog.image_url} alt={blog.name} />
              </div>
              <h3 className="blog-card-title">{blog.name}</h3>
              <p className="blog-card-excerpt">{blog.short_description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogSection; 