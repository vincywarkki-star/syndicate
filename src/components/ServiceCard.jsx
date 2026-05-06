import React from 'react';

// പഴയ വീഡിയോ/ഫോട്ടോ ലോജിക് പൂർണ്ണമായും ഒഴിവാക്കി
const ServiceCard = ({ title, description, wpNumber, ceoLink }) => {
  return (
    <div style={styles.card}>
      {/* Syndicate Logo: Two Red Triangles */}
      <div style={styles.logoContainer}>
        <div style={styles.triangle}></div>
        <div style={styles.triangle}></div>
      </div>

      <h2 style={styles.title}>{title}</h2>
      <p style={styles.text}>{description}</p>

      {/* Action Buttons */}
      <div style={styles.btnGroup}>
        <a href={ceoLink} target="_blank" rel="noreferrer" style={styles.ceoBtn}>
          CEO
        </a>
        <a href={`https://wa.me/${wpNumber}`} target="_blank" rel="noreferrer" style={styles.wpBtn}>
          WP
        </a>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#000',
    border: '1px solid #ff0000',
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '280px',
    margin: '15px',
    boxShadow: '0px 4px 20px rgba(255, 0, 0, 0.15)',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '20px',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeft: '12px solid transparent',
    borderRight: '12px solid transparent',
    borderBottom: '22px solid #ff0000',
  },
  title: {
    color: '#fff',
    fontSize: '1.6rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '10px 0',
  },
  text: {
    color: '#888',
    fontSize: '0.85rem',
    marginBottom: '25px',
    lineHeight: '1.4',
  },
  btnGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
  },
  ceoBtn: {
    color: '#ff0000',
    textDecoration: 'none',
    border: '1px solid #ff0000',
    padding: '7px 18px',
    borderRadius: '3px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
  },
  wpBtn: {
    backgroundColor: '#ff0000',
    color: '#fff',
    textDecoration: 'none',
    padding: '7px 18px',
    borderRadius: '3px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
  }
};

export default ServiceCard;