import React, { useState } from 'react';
import './ContactForm.css';
import logo from '../assets/Bitmap.png';

const initialState = {
  name: '',
  lastName: '',
  mail: '',
  phone: '',
  budget: '',
  description: '',
};

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required.';
    if (!form.lastName) newErrors.lastName = 'Last Name is required.';
    if (!form.mail) newErrors.mail = 'Email is required.';
    if (!form.phone) newErrors.phone = 'Phone is required.';
    if (!form.budget) newErrors.budget = 'Budget is required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, lastName: true, mail: true, phone: true, budget: true, description: true });
      return;
    }
    setSubmitting(true);
    setErrors({});
    const payload = {
      fname: form.name,
      lname: form.lastName,
      email: form.mail,
      phone: form.phone,
      budget: form.budget,
      description: form.description,
    };
    try {
      const res = await fetch('http://3.7.81.243:3253/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSuccess(true);
        setForm(initialState);
        setTouched({});
      }
    } catch (err) {
      setErrors({ form: 'Submission failed!' });
    }
    setSubmitting(false);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <small>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
      </small>
      <div className="form-row">
        <div className="form-field">
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required className={touched.name && !form.name ? 'input-error' : ''} />
          {touched.name && errors.name && <div className="field-error">{errors.name}</div>}
        </div>
        <div className="form-field">
          <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required className={touched.lastName && !form.lastName ? 'input-error' : ''} />
          {touched.lastName && errors.lastName && <div className="field-error">{errors.lastName}</div>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <input name="mail" placeholder="Mail" value={form.mail} onChange={handleChange} required type="email" className={touched.mail && !form.mail ? 'input-error' : ''} />
          {touched.mail && errors.mail && <div className="field-error">{errors.mail}</div>}
        </div>
        <div className="form-field">
          <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required className={touched.phone && !form.phone ? 'input-error' : ''} />
          {touched.phone && errors.phone && <div className="field-error">{errors.phone}</div>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <select name="budget" value={form.budget} onChange={handleChange} required className={touched.budget && !form.budget ? 'input-error' : ''}>
            <option value="">Budget</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {touched.budget && errors.budget && <div className="field-error">{errors.budget}</div>}
        </div>
        <div className="form-field">
          <input name="description" placeholder="Description" value={form.description} onChange={handleChange}  />
          
        </div>
      </div>
      <div className="form-row center">
        <button type="submit" disabled={submitting} style={{ background: '#ff6a00', color: '#fff', border: 'none', borderRadius: '25px', padding: '16px 60px', fontSize: '1.2rem', cursor: 'pointer' }}>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
      {errors.form && <div className="error-message">{errors.form}</div>}
      {success && <div className="success-message">Thank you! Your message has been sent.</div>}
    </form>
  );
};

export default ContactForm; 