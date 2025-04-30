


import React from "react";
import TrendingPost from "../components/TrendingPost";
import RecentSection from "../components/RecentSection";
import PopularSection from "../components/PopularSection";
import EnvironmentSection from "../components/EnvironmentSection";
import CategoryList from "../components/CategoryList";
import FeaturedSection from "../components/FeaturedSection";
import BusinessNews from "../components/BusinessNews";
import MostSharedList from "../components/MostSharedList";
import EntertainmentNews from "../components/EntertainmentNews";
import SportsNews from "../components/SportsNews";
import NewsList from "../components/NewsList";
import UpcomingMatches from "../components/UpcomingMatches";
import NewsCarousel from "../components/NewsCarousel";
import NewsSlider from "../components/NewsSlider";
import NewsCard from "../components/NewsCard";
import SocialMediaWidget from "../components/socialMedia";
import News from "../components/News";
import FeaturedNews from "../components/FeaturedNews";
import Carousel from "../components/Carousel";
import VideoNews from "../components/VideoNews";
import Workspace from "../components/Workspace";
import PopularPosts from "../components/PopularPosts";
import NewsparkAd from "../components/NewsparkAd";
import NewsparkBanner from "../components/NewsparkBanner";
import NewsLetter from "../components/NewsLetter";
import Categories from "../components/Categories";
import NewsLists from "../components/NewsLists";

const Home = ({ posts, categories }) => {
  return (
    <div className="container mx-auto px-4 font-sans">
      <section className="bg-white space-y-10 py-10">

        {/* News Slider */}
        <div>
          <NewsSlider />
        </div>

        {/* News Card & Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.01] duration-300">
              <NewsCard />
            </div>
          </div>
          <div>
            <News />
          </div>
        </div>

        {/* Featured News */}
        <div>
          <FeaturedNews />
        </div>

        {/* Featured Section & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Featured Section</h2>
              <FeaturedSection posts={posts} />
            </div>
            <hr className="border-t border-gray-300 dark:border-gray-600" />
            <div>
              <NewsLists />
            </div>
          </div>

          <div className="space-y-6">
            <SocialMediaWidget />
            <div className="hidden lg:block">
              <MostSharedList />
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div>
          <Carousel />
        </div>

        {/* Workspace & Popular Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <Workspace
                thumb="/thumb.jpg"
                thumbWidth={640}
                thumbHeight={360}
                thumbAlt="Demo Video"
                video="/demo.mp4"
                videoWidth={1280}
                videoHeight={720}
              />
            </div>
          </div>
          <div>
            <PopularPosts />
          </div>
        </div>

        {/* Entertainment, Sports, Business & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-10">
            <EntertainmentNews />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SportsNews />
              <NewsList />
            </div>
            <div>
              <NewsparkBanner />
            </div>
            <BusinessNews />
          </div>

          <div className="space-y-6">
            <MostSharedList />
            <UpcomingMatches />
            <hr className="border-t border-gray-400 dark:border-gray-700" style={{ borderStyle: 'dotted' }} />
            <NewsLetter />
            <Categories />
            <NewsparkAd />
          </div>
        </div>

      </section>

      
{/*  

      <RecentSection posts={posts} />
      <PopularSection posts={posts} />
      <div className="flex">
      <EnvironmentSection posts={posts} />
      <div className="w-1/3 ">
      <CategoryList categories={categories} />
      </div>
      </div>
*/}
    </div>
  );
};

export default Home;
