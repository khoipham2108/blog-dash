import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const PostList = () => {
    // Yêu cầu: Gọi API lấy posts [cite: 192]
    const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) return <div className="loading">Loading posts...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="post-list">
            <h2>Latest Posts</h2>
            <div className="grid-container">
                {posts && posts.slice(0, 10).map(post => (
                    <div key={post.id} className="post-card">
                        <h4>{post.title}</h4>
                        <p>{post.body.substring(0, 60)}...</p>
                        {/* Link tới trang chi tiết [cite: 194] */}
                        <Link to={`/dashboard/post/${post.id}`} className="read-more">
                            Read More →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;