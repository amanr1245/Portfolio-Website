import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-serif font-light mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Page not found</p>
        <Link href="/" className="text-accent-pink hover:underline">
          Go back home
        </Link>
      </div>
    </div>
  );
}
