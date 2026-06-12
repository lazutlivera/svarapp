import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPage.css';

const DeleteAccount = () => (
  <div className="legal-page">
    <Link to="/" className="legal-back">← Back to home</Link>
    <header className="legal-header">
      <h1 className="legal-title">Delete Account</h1>
    </header>
    <div className="legal-content">
      <p>To delete your Persona Sports account and all associated data, open the app, go to your Profile and tap 'Delete Account'. Alternatively, email <a href="mailto:support@svarapp.com">support@svarapp.com</a> to request account deletion. All data will be permanently removed within 30 days.</p>
    </div>
  </div>
);

export default DeleteAccount;
