import { useParams } from "react-router-dom";
import RelatedPosts from "../components/RelatedPosts";
import CommentsSection from "../components/CommentsSection";
import CategoryList from "../components/CategoryList";

const PostDetails = ({ posts, categories }) => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found.</div>;
  }

  const initialComments = [
    {
      id: 1,
      postId: post.id,
      content: "Great post! Learned a lot.",
      author: "John Doe",
      date: "2025-04-27 10:00",
    },
    {
      id: 2,
      postId: post.id,
      content: "Thanks for the insights!",
      author: "Jane Smith",
      date: "2025-04-27 11:00",
    },
  ];

  return (
    <div className="post-details">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div className="author">
        <h3>By: {post.author}</h3>
        <p>{post.date}</p>
      </div>

      {/* Related Posts Section */}
      <RelatedPosts posts={posts} currentPostId={post.id} currentPostCategory={post.category} />

      {/* Comments Section */}
      <CommentsSection comments={initialComments} postId={post.id} />

      {/* Category List (show all available categories) */}
      <CategoryList categories={categories} />
    </div>
  );
};

export default PostDetails;
