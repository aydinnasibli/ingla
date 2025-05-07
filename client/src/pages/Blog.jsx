import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/blogData';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [hoveredPost, setHoveredPost] = useState(null);

    useEffect(() => {
        setPosts(blogData);
    }, []);

    return (
        <div className="container mx-auto px-4 py-12 bg-gray-50">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Blog</h1>
                <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">Stay updated with our latest thoughts, ideas and discoveries</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                    <div
                        key={post.id}
                        className="border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                        onMouseEnter={() => setHoveredPost(post.id)}
                        onMouseLeave={() => setHoveredPost(null)}
                    >
                        {post.image && (
                            <div className="relative overflow-hidden h-56">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className={`w-full h-full object-cover transition-transform duration-500 ${hoveredPost === post.id ? 'scale-110' : 'scale-100'
                                        }`}
                                />
                                <div className="absolute top-0 right-0 bg-yellow-500 text-white px-3 py-1 m-2 rounded-full text-xs font-semibold">
                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                </div>
                            </div>
                        )}
                        <div className="p-6">
                            <div className="flex items-center mb-3">
                                <div className="h-2 w-8 bg-yellow-500 rounded mr-2"></div>
                                <span className="text-sm text-gray-500 uppercase tracking-wider">
                                    {post.category || 'General'}
                                </span>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-yellow-600 transition-colors">{post.title}</h2>
                            <p className="text-gray-600 mb-5 line-clamp-3">{post.excerpt}</p>
                            <div className="flex justify-between items-center">
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="inline-flex items-center bg-white border-2 border-yellow-500 text-yellow-600 px-4 py-2 rounded-full font-medium hover:bg-yellow-500 hover:text-white transition-colors"
                                >
                                    Oxu
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </Link>
                                {/* <div className="flex items-center text-gray-500 text-sm">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                    {post.views || '128'}
                                </div> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <button className="bg-white border-2 border-yellow-500 text-yellow-600 px-6 py-3 rounded-full font-medium hover:bg-yellow-500 hover:text-white transition-colors">
                    Load More Articles
                </button>
            </div>
        </div>
    );
};

export default Blog;