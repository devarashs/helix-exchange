"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md space-y-6">
        <Alert variant="destructive">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle className="text-lg font-semibold">Error</AlertTitle>
          <AlertDescription className="mt-2">
            {error.message || "Something went wrong!"}
          </AlertDescription>
        </Alert>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            We ran into a problem
          </h2>
          <p className="text-muted-foreground">
            Our team has been notified. Please try again or contact support if
            the problem persists.
          </p>

          <div className="pt-4">
            <Button onClick={() => reset()} size="lg" className="px-8">
              Try again
            </Button>
          </div>

          {error.digest && (
            <p className="text-xs text-muted-foreground mt-6">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
