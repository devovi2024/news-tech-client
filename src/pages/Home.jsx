import TrendingPost from "../components/TrendingPost";
import RecentSection from "../components/RecentSection";
import PopularSection from "../components/PopularSection";
import EnvironmentSection from "../components/EnvironmentSection";
import CategoryList from "../components/CategoryList"; 

const Home = ({ posts, categories }) => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <TrendingPost posts={posts} />
      <RecentSection posts={posts} />
      <PopularSection posts={posts} />
      <EnvironmentSection posts={posts} />
      <CategoryList categories={categories} />
    </div>
  );
};

export default Home;
