import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
    // ... (datos del blog sin cambios)
];

const InsightsPage = () => {

  useEffect(() => {
    document.title = 'Insights e Inspiración | Blog de Liberación Energética';
    document.querySelector('meta[name="description"]').setAttribute('content', 'Artículos, consejos y recursos para cultivar tu bienestar energético. Aprende sobre chakras, manejo del estrés y crecimiento espiritual.');
  }, []);

  return (
    <div>
        <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
            <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}>Cultivando tu Bienestar Energético</h1>
            
            <div style={{ display: 'grid', gap: '2.5rem' }}>
                {blogPosts.map(post => (
                    <article key={post.slug}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{post.title}</h2>
                        <p style={{ color: '#4B5563', lineHeight: '1.6' }}>{post.excerpt}</p>
                        <Link to={`/inspiracion/${post.slug}`} style={{ fontWeight: '600', color: '#10B981' }}>
                            Leer más &rarr;
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    </div>
  );
};

export default InsightsPage;