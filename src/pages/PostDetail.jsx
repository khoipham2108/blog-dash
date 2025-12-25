import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const PostDetail = () => {
    // Yêu cầu: Lấy postId từ URL [cite: 198]
    const { postId } = useParams();
    
    // Yêu cầu: Fetch chi tiết post [cite: 199]
    const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    if (loading) return <div className="loading">Loading details...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="post-detail-container">
            <Link to="/dashboard" className="back-link">← Back to Dashboard</Link>
            {post && (
                <article className="detail-card">
                    <span className="post-id">Post #{post.id}</span>
                    <h1>{post.title}</h1>
                    <hr />
                    <p className="post-body">{post.body}</p>
                    <p className="post-body">{post.body} {post.body}</p> {/* Duplicate text for visual */}
                </article>
            )}
        </div>
    );
};

export default PostDetail;