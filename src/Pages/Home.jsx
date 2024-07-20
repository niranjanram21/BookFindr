import React from 'react';
import Hero from '../components/Hero';
import SearchResults from '../components/SearchResults';
import Filters from '../components/Filters';
import FilteredSearchResults from '../components/FilteredSearchResults';
import PopularBooks from '../components/PopularBooks';
import Authors from '../components/Author/Authors';
import About from './About';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = (title) => {
    return (

        <>
            <Header />
            <div className='px-4 py-2 lg:px-20 lg:py-4'>
                <section id="heroSection">
                    <Hero />
                </section>
                <section id="searchResultsSection">
                    <SearchResults />
                </section>
                <section id="filtersSection">
                    <Filters />
                </section>
                <section id="filteredSearchResultsSection">
                    <FilteredSearchResults />
                </section>
                <section id="popularBooksSection">
                    <PopularBooks title="Popular Books" />
                </section>
                <section id="authorsSection">
                    <Authors />
                </section>
                <section id="aboutSection">
                    <About />
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Home;
