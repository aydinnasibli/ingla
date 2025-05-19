// client/src/pages/AdminPanel.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import blogData from '../data/blogData';

const AdminPanel = () => {
    const [posts, setPosts] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        slug: '',
        date: '',
        image: '',
        category: '',
        excerpt: '',
        content: '',
        tags: []
    });
    const [tagInput, setTagInput] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [notification, setNotification] = useState({ show: false, message: '', type: '' });
    const navigate = useNavigate();

    // Fix 1: Updated useEffect to ensure data consistency when loading from localStorage
    useEffect(() => {
        // Load blog data from localStorage if available, otherwise use the imported data
        const savedBlogData = localStorage.getItem('blogData');
        if (savedBlogData) {
            try {
                const parsedData = JSON.parse(savedBlogData);
                // Ensure all IDs are strings
                const normalizedData = parsedData.map(post => ({
                    ...post,
                    id: String(post.id) // Convert all IDs to strings
                }));
                setPosts(normalizedData);
            } catch (error) {
                console.error("Error parsing saved blog data:", error);
                // Use the imported data as fallback, ensuring IDs are strings
                const normalizedData = blogData.map(post => ({
                    ...post,
                    id: String(post.id)
                }));
                setPosts(normalizedData);
                localStorage.setItem('blogData', JSON.stringify(normalizedData));
            }
        } else {
            // Use the imported data, ensuring IDs are strings
            const normalizedData = blogData.map(post => ({
                ...post,
                id: String(post.id)
            }));
            setPosts(normalizedData);
            localStorage.setItem('blogData', JSON.stringify(normalizedData));
        }
    }, []);

    // Show notification
    const showNotification = (message, type = 'success') => {
        setNotification({ show: true, message, type });
        setTimeout(() => {
            setNotification({ show: false, message: '', type: '' });
        }, 3000);
    };

    // Filter posts based on search term
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Generate slug from title
    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^\w\s]/gi, '')
            .replace(/\s+/g, '-');
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'title' && !isEditing) {
            // Auto-generate slug for new posts
            setFormData({
                ...formData,
                [name]: value,
                slug: generateSlug(value)
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    // Handle tag input
    const handleAddTag = (e) => {
        e.preventDefault();
        if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
            setFormData({
                ...formData,
                tags: [...formData.tags, tagInput.trim()]
            });
            setTagInput('');
        }
    };

    // Handle tag removal
    const handleRemoveTag = (tagToRemove) => {
        setFormData({
            ...formData,
            tags: formData.tags.filter(tag => tag !== tagToRemove)
        });
    };

    // Preview the post
    const handlePreview = () => {
        // Save current form data to localStorage for preview
        localStorage.setItem('previewPost', JSON.stringify(formData));
        // Open in a new tab
        window.open(`/blog/${formData.slug}/preview`, '_blank');
    };

    // Start editing a post
    const handleEdit = (post) => {
        setFormData({
            ...post,
            tags: post.tags || []
        });
        setIsEditing(true);
        setIsAdding(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // View a post
    const handleView = (slug) => {
        navigate(`/blog/${slug}`);
    };

    const handleAddNew = () => {
        const today = new Date().toISOString().slice(0, 10);

        // Get numeric values of existing IDs, handling potential empty array
        const existingIds = posts.length > 0
            ? posts.map(post => parseInt(String(post.id).replace(/\D/g, '') || '0', 10))
            : [0];

        // Find the next available ID (max + 1)
        const nextId = String(Math.max(...existingIds) + 1);

        setFormData({
            id: nextId,
            title: '',
            slug: '',
            date: today,
            image: '',
            category: '',
            excerpt: '',
            content: '',
            tags: []
        });

        setIsAdding(true);
        setIsEditing(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = (postId) => {
        if (window.confirm('Bu yazını silmək istədiyinizə əminsiniz?')) {
            // Convert the postId to string for consistent comparison
            const strId = String(postId);
            const updatedPosts = posts.filter(post => String(post.id) !== strId);

            // Update state and localStorage simultaneously
            setPosts(updatedPosts);
            localStorage.setItem('blogData', JSON.stringify(updatedPosts));

            showNotification('Yazı uğurla silindi!');
        }
    };
    const handleSave = (e) => {
        e.preventDefault();

        // Ensure the ID is stored as a string
        const postToSave = {
            ...formData,
            id: String(formData.id),
            date: formData.date || new Date().toISOString().slice(0, 10)
        };

        let updatedPosts;

        if (isEditing) {
            // Update existing post - find by string ID and replace
            updatedPosts = posts.map(post =>
                String(post.id) === String(postToSave.id) ? postToSave : post
            );
            showNotification('Yazı uğurla yeniləndi!');
        } else if (isAdding) {
            // Check if the ID already exists
            const existingIds = posts.map(post => String(post.id));
            if (existingIds.includes(String(postToSave.id))) {
                // Generate a new unique ID if there's a conflict
                const numericIds = posts.map(post =>
                    parseInt(String(post.id).replace(/\D/g, '') || '0', 10)
                );
                postToSave.id = String(Math.max(...numericIds) + 1);
            }
            updatedPosts = [...posts, postToSave];
            showNotification('Yeni yazı uğurla əlavə edildi!');
        }

        // Update state and localStorage with the new data
        setPosts(updatedPosts);
        localStorage.setItem('blogData', JSON.stringify(updatedPosts));

        // Reset form
        setFormData({
            id: '',
            title: '',
            slug: '',
            date: '',
            image: '',
            category: '',
            excerpt: '',
            content: '',
            tags: []
        });

        setIsEditing(false);
        setIsAdding(false);
    };

    // Cancel editing/adding
    const handleCancel = () => {
        setIsEditing(false);
        setIsAdding(false);
        setFormData({
            id: '',
            title: '',
            slug: '',
            date: '',
            image: '',
            category: '',
            excerpt: '',
            content: '',
            tags: []
        });
    };

    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
            {/* Notification */}
            {notification.show && (
                <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                    } text-white`}>
                    <div className="flex items-center">
                        {notification.type === 'success' ? (
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        )}
                        {notification.message}
                    </div>
                </div>
            )}

            <div className="mb-6 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
                    <div className="w-24 h-1 bg-yellow-500 mt-2 mb-4"></div>
                    <p className="text-gray-600">Bloq yazılarını idarə edin</p>
                </div>
                <div className="flex gap-2">
                    <Link
                        to="/blog"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition flex items-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Blogaya Geri Dön
                    </Link>
                </div>
            </div>

            {/* Form Section */}
            {(isEditing || isAdding) && (
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        {isEditing ? (
                            <>
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                </svg>
                                Yazını Düzəlt
                            </>
                        ) : (
                            <>
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                                Yeni Yazı
                            </>
                        )}
                    </h2>

                    <form onSubmit={handleSave} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Başlıq</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tarix</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Kateqoriya</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Şəkil URL</label>
                            <input
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                placeholder="https://example.com/image.jpg"
                            />
                            {formData.image && (
                                <div className="mt-2">
                                    <img
                                        src={formData.image}
                                        alt="Preview"
                                        className="h-20 w-auto object-cover rounded-md border border-gray-300"
                                    />
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Qısa məzmun</label>
                            <textarea
                                name="excerpt"
                                value={formData.excerpt}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                rows="2"
                                required
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Məzmun (HTML)</label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 font-mono"
                                rows="10"
                                required
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Etiketlər</label>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag(e))}
                                    className="w-full border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder="Etiket əlavə et"
                                />
                                <button
                                    onClick={handleAddTag}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-r-md"
                                    type="button"
                                >
                                    Əlavə et
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {formData.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-50 text-blue-800 px-2 py-1 rounded-full text-sm font-medium flex items-center"
                                    >
                                        {tag}
                                        <button
                                            onClick={() => handleRemoveTag(tag)}
                                            className="ml-1 text-blue-600 hover:text-blue-800"
                                            type="button"
                                        >
                                            &times;
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end space-x-3 pt-4">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg flex items-center"
                            >
                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                Ləğv Et
                            </button>
                            <button
                                type="button"
                                onClick={handlePreview}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
                                disabled={!formData.title || !formData.content}
                            >
                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                Önizləmə
                            </button>
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center"
                            >
                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                {isEditing ? 'Yenilə' : 'Əlavə Et'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Management Controls */}
            <div className="flex flex-wrap justify-between items-center mb-6">
                {/* Add New Button */}
                {!isEditing && !isAdding && (
                    <button
                        onClick={handleAddNew}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        Yeni Yazı Əlavə Et
                    </button>
                )}

                {/* Search */}
                {!isEditing && !isAdding && (
                    <div className="relative mt-2 sm:mt-0">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Axtar..."
                            className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                    </div>
                )}
            </div>

            {/* Posts List */}
            {!isEditing && !isAdding && (
                <>
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Yazı</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarix</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kateqoriya</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Əməliyyatlar</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredPosts.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                                            {searchTerm ? 'Heç bir nəticə tapılmadı.' : 'Heç bir yazı yoxdur.'}
                                        </td>
                                    </tr>
                                ) : (
                                    filteredPosts.map((post) => (
                                        <tr key={post.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    {post.image && (
                                                        <div className="flex-shrink-0 h-10 w-10 mr-4">
                                                            <img className="h-10 w-10 rounded-md object-cover" src={post.image} alt="" />
                                                        </div>
                                                    )}
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">{post.title}</div>
                                                        <div className="text-sm text-gray-500 truncate max-w-xs">{post.slug}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(post.date).toLocaleDateString('az-AZ')}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                    {post.category || 'Ümumi'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => handleView(post.slug)}
                                                        className="text-blue-600 hover:text-blue-900 flex items-center"
                                                        title="Bax"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => handleEdit(post)}
                                                        className="text-yellow-600 hover:text-yellow-900 flex items-center"
                                                        title="Düzəliş et"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(post.id)}
                                                        className="text-red-600 hover:text-red-900 flex items-center"
                                                        title="Sil"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Info Block */}
                    <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-blue-700">
                                    Bütün dəyişiklər avtomatik olaraq yerli yaddaşda saxlanılır. Səhifəni yeniləsəniz belə məlumatlar itməyəcək.
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default AdminPanel;