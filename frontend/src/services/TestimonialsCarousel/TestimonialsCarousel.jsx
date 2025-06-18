import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // imports default styles
import { useApi } from '../../../hooks/useApi';
import { getTestimonials } from '../../../services/api';
import Spinner from '../../common/Spinner/Spinner';
import styles from './TestimonialsCarousel.module.css';

const TestimonialsCarousel = () => {
  const { data: testimonials, loading, error } = useApi(getTestimonials);

  if (loading) return <Spinner />;
  if (error || !testimonials) return null; // Don't show the section if there's an error

  return (
    <div className={styles.carouselSection}>
      <h2 className={styles.title}>Lo que dicen nuestros clientes</h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6000}
        className={styles.carouselWrapper}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.slide}>
            <p className={styles.quote}>"{testimonial.quote}"</p>
            <p className={styles.author}>- {testimonial.author}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;