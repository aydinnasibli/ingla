// pages/BlogPost.jsx - Enhanced individual blog post page
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogData from '../data/blogData';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const courses = [
        { id: 1, name: "IELTS", link: "/ielts" },
        { id: 2, name: "Duolingo", link: "/duolingo" },
        { id: 3, name: "SAT", link: "#sat" },
        { id: 4, name: "YÖS", link: "/yos" },
    ];
    useEffect(() => {
        // Find the post that matches the slug
        const currentPost = blogData.find(post => post.slug === slug);
        setPost(currentPost);

        // Find related posts (posts with matching tags)
        if (currentPost && currentPost.tags) {
            const related = blogData
                .filter(p =>
                    p.slug !== slug &&
                    p.tags &&
                    p.tags.some(tag => currentPost.tags.includes(tag))
                )
                .slice(0, 3); // Get up to 3 related posts
            setRelatedPosts(related);
        }

        setLoading(false);

        // Scroll to top when post changes
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <div className="bg-red-50 border border-red-100 rounded-lg p-8">
                    <h1 className="text-3xl font-bold mb-4 text-red-800">Post Not Found</h1>
                    <p className="text-lg text-gray-700 mb-6">Sorry, the post you're looking for doesn't exist.</p>
                    <Link
                        to="/blog"
                        className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
                    >
                        Geri Dön
                    </Link>
                </div>
            </div>
        );
    }

    return (

        <>
            <article className="max-w-4xl mx-auto px-4 py-10">
                {/* Navigation */}
                <Link
                    to="/blog"
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium mb-8 group transition duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Geri Dön
                </Link>

                {/* Hero section */}
                <div className="mb-10">
                    {post.image && (
                        <div className="relative h-80 md:h-96 overflow-hidden rounded-xl mb-8">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                            />
                        </div>
                    )}

                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-gray-500 mb-4">
                        <time dateTime={post.date} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {new Date(post.date).toLocaleDateString('az-AZ', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>

                        {post.readTime && (
                            <span className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {post.readTime} min read
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>

                    {post.subtitle && (
                        <p className="text-xl text-gray-600 mb-6">{post.subtitle}</p>
                    )}
                </div>

                {/* Content */}
                <div
                    className="prose prose-lg max-w-none mb-10"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="border-t border-gray-200 pt-8 mt-12">
                        <h3 className="text-lg font-semibold mb-4"></h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 transition duration-200"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}




            </article>
            <section className="py-16 px-6 text-center relative">
                {/* Title Section */}
                <h3 className="text-yellow-600 font-semibold text-lg">XARİCDƏ TƏHSİL KURSLARI</h3>
                <h2 className="text-3xl font-bold mt-2">Təhsilin üçün imtahan kursları</h2>

                {/* Courses Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <button
                            key={course.id}
                            onClick={() => navigate(course.link)}
                            className="bg-gradient-to-br from-yellow-500 to-white text-black font-bold text-lg py-16 rounded-xl flex items-center justify-center transition-transform transform hover:scale-105"
                        >
                            {course.name}
                        </button>
                    ))}
                </div>


            </section>
        </>
    );
};

export default BlogPost;