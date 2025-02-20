import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  image: string;
  slug: string;
}

const posts: BlogPost[] = [
  {
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a new React project with TypeScript and best practices for type safety.",
    date: "2024-01-15",
    readingTime: "5 min read",
    category: "Development",
    image: "/blog1.jpg",
    slug: "getting-started-react-typescript",
  },
  {
    title: "Modern CSS Techniques",
    excerpt: "Explore modern CSS features and how they can improve your web development workflow.",
    date: "2024-01-10",
    readingTime: "4 min read",
    category: "CSS",
    image: "/blog2.jpg",
    slug: "modern-css-techniques",
  },
  {
    title: "State Management in 2024",
    excerpt: "A comprehensive guide to different state management solutions in modern web development.",
    date: "2024-01-05",
    readingTime: "7 min read",
    category: "Architecture",
    image: "/blog3.jpg",
    slug: "state-management-2024",
  },
];

const Blog = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Articles
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Thoughts, tutorials, and insights about web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <Card className="h-full">
                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readingTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <time dateTime={post.date} className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;