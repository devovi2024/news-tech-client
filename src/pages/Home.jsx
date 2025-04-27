import React from "react";
import TrendingPost from "../components/TrendingPost";
import RecentSection from "../components/RecentSection";
import PopularSection from "../components/PopularSection";
import EnvironmentSection from "../components/EnvironmentSection";
import CategoryList from "../components/CategoryList";
import SliderCard from "../components/SliderCard";

const Home = ({ posts, categories }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Welcome to the Home Page</h1>
      <TrendingPost posts={posts} />
      <RecentSection posts={posts} />
      <PopularSection posts={posts} />
      <EnvironmentSection posts={posts} />
      <CategoryList categories={categories} />
    </div>
  );
};

export default Home;
