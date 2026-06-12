import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPage.css';

const Privacy = () => (
  <div className="legal-page">
    <Link to="/" className="legal-back">← Back to home</Link>
    <header className="legal-header">
      <h1 className="legal-title">Privacy Policy</h1>
      <p className="legal-meta">Persona Sports · Last Updated: June 13, 2026 · Effective Date: June 13, 2026</p>
    </header>
    <div className="legal-content">
      <h2>1. INTRODUCTION</h2>
      <p>Persona Sports ("we", "us", "our") operates the Persona Sports mobile application (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.</p>
      <p>By using the App, you consent to the data practices described in this policy. If you do not agree, please do not use the App.</p>

      <h2>2. INFORMATION WE COLLECT</h2>
      <h3>2.1 Information You Provide</h3>
      <ul>
        <li><strong>Account Information:</strong> When you create an account, we collect your email address and password. Your password is securely hashed and stored by our authentication provider (Supabase). We never have access to your plaintext password.</li>
        <li><strong>Profile Information:</strong> You may optionally provide a username and display name. These are used to personalise your experience within the App.</li>
        <li><strong>Favourites:</strong> When you mark teams as favourites, we store your club preferences tied to your user account.</li>
      </ul>
      <h3>2.2 Information Generated Through Use</h3>
      <ul>
        <li><strong>Chat Messages:</strong> Your conversations with the AI are processed in real-time to generate responses. Chat messages are stored temporarily in your device's memory for the duration of your session (up to 12 hours) and are not permanently stored on our servers or in any database.</li>
        <li><strong>AI Usage Data:</strong> We log anonymised usage metrics including token counts (input, output, thinking), whether external sources were used to answer your query, and the number of sources consulted. This data is used for monitoring service quality and managing costs. It does not contain the content of your messages.</li>
        <li><strong>Message Limits:</strong> We track your message count locally on your device to enforce fair usage limits. This data is stored on your device only and is not transmitted to our servers.</li>
      </ul>
      <h3>2.3 Information Collected Automatically</h3>
      <ul>
        <li><strong>Device Information:</strong> Standard technical data such as device type, operating system version, and app version may be collected through our hosting and analytics infrastructure.</li>
        <li><strong>Error Logs:</strong> If the App encounters an error, diagnostic information may be logged to help us identify and fix issues.</li>
      </ul>

      <h2>3. HOW WE USE YOUR INFORMATION</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide and maintain the App's core functionality, including AI-powered sports chat.</li>
        <li>Personalise your experience (e.g., displaying your username, remembering your favourite teams).</li>
        <li>Generate AI responses using third-party AI services (Google Gemini API). Before your first AI chat, the App asks for your explicit consent to send chat messages and team and sport names to Google Gemini. Your consent choice and the date it was given are recorded on your account, or on your device if you use the App as a guest on iOS. No chat data is sent to Google until you have given this consent.</li>
        <li>Retrieve current sports information from public web sources to provide accurate, up-to-date responses.</li>
        <li>Monitor and analyse usage patterns to improve App performance and reliability.</li>
        <li>Enforce fair usage limits to ensure service availability for all users.</li>
        <li>Communicate with you about your account if necessary.</li>
      </ul>

      <h2>4. HOW WE SHARE YOUR INFORMATION</h2>
      <h3>4.1 Third-Party Service Providers</h3>
      <p>We use the following third-party services to operate the App:</p>
      <ul>
        <li><strong>Supabase:</strong> Provides authentication, database, and serverless function hosting. Your account data is stored on Supabase infrastructure. Supabase's privacy policy applies to their handling of this data.</li>
        <li><strong>Google Gemini API:</strong> When you use the AI chat, your chat messages and the relevant team and sport names are sent to Google's Gemini AI service to generate responses. We do not send your email, username, or password to Google. This data is shared with Google only under Google's API terms, which require a level of protection for your information equal to that described in this Privacy Policy. Google's processing of this data is also governed by Google's own privacy policy.</li>
        <li><strong>ScrapingDog:</strong> Used to retrieve publicly available sports information from the web to provide current and accurate AI responses. No personal user data is shared with this service.</li>
      </ul>
      <p>We share personal data only with third-party service providers that are contractually required to provide the same or an equal level of protection for your data as set out in this Privacy Policy and applicable law.</p>
      <h3>4.2 We Do Not Sell Your Data</h3>
      <p>We do not sell, trade, or rent your personal information to third parties.</p>
      <h3>4.3 Legal Requirements</h3>
      <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</p>

      <h2>5. DATA RETENTION</h2>
      <ul>
        <li><strong>Account Data:</strong> Your account information is retained for as long as your account is active. You may request deletion of your account and associated data at any time.</li>
        <li><strong>Chat Messages:</strong> Not stored on our servers. Conversations exist only in your device's memory during the active session and are automatically cleared.</li>
        <li><strong>AI Usage Logs:</strong> Retained for service monitoring purposes. These logs do not contain personally identifiable information or message content.</li>
        <li><strong>Favourites:</strong> Retained as long as your account is active.</li>
        <li><strong>Local Data:</strong> Message limit counters stored on your device can be cleared by clearing the App's data or uninstalling the App.</li>
      </ul>

      <h2>6. DATA SECURITY</h2>
      <p>We implement appropriate technical and organisational measures to protect your personal information, including:</p>
      <ul>
        <li>Encrypted data transmission (HTTPS/TLS) for all communications between the App and our servers.</li>
        <li>Secure password hashing through our authentication provider.</li>
        <li>Row-Level Security (RLS) on our database to ensure users can only access their own data.</li>
        <li>Service-level authentication for all internal API communications.</li>
      </ul>
      <p>While we strive to protect your information, no method of electronic storage or transmission is 100% secure. We cannot guarantee absolute security.</p>

      <h2>7. YOUR RIGHTS</h2>
      <p>Depending on your jurisdiction, you may have the following rights:</p>
      <ul>
        <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
        <li><strong>Correction:</strong> Request correction of inaccurate personal data.</li>
        <li><strong>Deletion:</strong> Request deletion of your account and associated personal data.</li>
        <li><strong>Portability:</strong> Request your data in a portable format.</li>
        <li><strong>Objection:</strong> Object to certain processing of your personal data.</li>
      </ul>
      <p>To exercise any of these rights, please contact us at the email address provided below.</p>

      <h2>8. CHILDREN'S PRIVACY</h2>
      <p>The App is not intended for use by children under the age of 13 (or the applicable minimum age in your jurisdiction). We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete that information promptly.</p>

      <h2>9. ADVERTISING</h2>
      <p>The App may display advertisements. Currently, ads are served through our own infrastructure and do not involve third-party advertising networks or tracking. If this changes in the future, this policy will be updated accordingly.</p>

      <h2>10. CHANGES TO THIS POLICY</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy within the App and updating the "Last Updated" date. Your continued use of the App after such changes constitutes your acceptance of the revised policy.</p>

      <h2>11. CONTACT US</h2>
      <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
      <p><strong>Email:</strong> <a href="mailto:support@svarapp.com">support@svarapp.com</a><br /><strong>Website:</strong> <a href="https://svarapp.com" target="_blank" rel="noopener noreferrer">https://svarapp.com</a></p>
    </div>
  </div>
);

export default Privacy;
