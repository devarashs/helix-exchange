import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-9xl font-extrabold text-primary">404</h1>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Page Not Found
        </h2>
        <p className="text-muted-foreground text-lg">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild variant="default" size="lg" className="mt-8">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
