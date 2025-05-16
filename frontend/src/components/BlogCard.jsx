const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white shadow p-4 rounded border">
      {blog.imageUrl && (
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}
      <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
      <p className="text-sm text-gray-500 mb-2">
        by {blog.author} • {new Date(blog.createdAt).toLocaleString()}
      </p>
      <p className="text-gray-700">{blog.content}</p>
    </div>
  );
};

export default BlogCard;