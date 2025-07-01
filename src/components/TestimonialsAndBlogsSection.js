import React, { useEffect, useState, useRef } from 'react';
import './TestimonialsAndBlogsSection.css';
import bgShape from '../assets/Rectangletestimonial-bg.png'; // Decorative background shape

const testimonials = [
  {
    name: 'Josh brollins',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
  },
  {
    name: 'Josh brollins',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    quote: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
  },
  {
    name: 'Jane Doe',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'This company is amazing! Highly recommended.',
  },
  {
    name: 'John Smith',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    quote: 'Professional and reliable service every time.',
  },
];

const CARDS_TO_SHOW = 3;
const AUTO_SCROLL_INTERVAL = 3000;

const TestimonialsAndBlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    fetch('http://3.7.81.243:3253/api/blog/?page=0&limit=4')
      .then(res => res.json())
      .then(data => setBlogs(data.data || []));
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleViewAll = (e) => {
    e.preventDefault();
    if (!showAll) {
      fetch('http://3.7.81.243:3253/api/blog/?page=0&limit=100')
        .then(res => res.json())
        .then(data => setBlogs(data.data || []));
      setShowAll(true);
    } else {
      fetch('http://3.7.81.243:3253/api/blog/?page=0&limit=4')
        .then(res => res.json())
        .then(data => setBlogs(data.data || []));
      setShowAll(false);
    }
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < CARDS_TO_SHOW; i++) {
      visible.push(testimonials[(testimonialIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="testimonials-blogs-section">
      <img src={bgShape} alt="Background shape" className="testimonials-bg-shape" />
      <div className="testimonials-blogs-content">
        <div className="testimonials-block">
          <h2 className="testimonials-title">Testimonials</h2>
          <div className="testimonials-list">
            {getVisibleTestimonials().map((t, idx) => (
              <div className="testimonial-card" key={idx}>
                <span className="quote-mark">&#8220;</span>
                <div className="testimonial-user">
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                  <span className="testimonial-name">{t.name}</span>
                </div>
                <p className="testimonial-quote">{t.quote}</p>
                <span className="quote-mark right">&#8221;</span>
              </div>
            ))}
          </div>
        </div>
        <div className="blogs-block">
          <div className="blogs-header">
            <h2 className="blogs-title">Blogs</h2>
            <a href="#" className="blogs-viewall" onClick={handleViewAll}>{showAll ? 'Show Less' : 'View All'} &rarr;</a>
          </div>
          <div className="blogs-list">
            {blogs.map((blog, idx) => (
              <div className="blog-card" key={blog.id || idx}>
                <div className="blog-img-box">
                  <img src={blog.image_url} alt={blog.name} />
                </div>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{blog.name}</h3>
                  <div className="blog-card-meta">
                    <span className="blog-date">{blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ''}</span> by <span className="blog-author">{blog.writer_name}</span>
                  </div>
                  <p className="blog-card-excerpt">{blog.short_description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndBlogsSection; 