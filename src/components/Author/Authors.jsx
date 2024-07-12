import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import author1 from '../../assets/author1.jpg';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './styles.css';

// import required modules
import { Keyboard, Navigation, Autoplay } from 'swiper/modules';

const authors = [
  { img: author1, name: 'Author Name 1' },
  { img: author1, name: 'Author Name 2' },
  { img: author1, name: 'Author Name 3' },
  { img: author1, name: 'Author Name 4' },
  { img: author1, name: 'Author Name 5' },
  { img: author1, name: 'Author Name 6' },
  { img: author1, name: 'Author Name 7' },
  { img: author1, name: 'Author Name 8' },
  { img: author1, name: 'Author Name 9' },
  { img: author1, name: 'Author Name 10' },
  { img: author1, name: 'Author Name 11' },
  { img: author1, name: 'Author Name 12' }
];

export default function Authors() {
  return (
    <div data-aos="fade-up">
      <div className="text-gray-700 text-lg lg:text-xl font-bold my-2 flex flex-row gap-1 cursor-pointer">
        <span>Popular Authors</span>
        <IoIosArrowDropdownCircle className="relative top-1 transform transition-transform" />
      </div>
      <Swiper
        slidesPerView={2} // Default to 2 slides for small screens
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3000, // Delay between transitions in milliseconds
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1024: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
        }}
        navigation={true}
        modules={[Keyboard, Navigation, Autoplay]}
        className="mySwiper max-h-96"
      >
        {authors.map((author, index) => (
          <SwiperSlide key={index}>
            <div className="p-2 flex flex-col gap-1 hover:scale-105 hover:cursor-pointer hover:text-black transition duration-200 ease-in-out">
              <img src={author.img} alt={`Slide ${index + 1}`} className="opacity-90 bg-blue-50" />
              <span className="text-md font-bold text-center text-gray-800">{author.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
