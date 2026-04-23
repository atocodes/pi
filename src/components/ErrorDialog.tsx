"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ErrorDialogProps = {
  open: boolean;
  onOpenChange?: (open: boolean) => void;

  title?: string;
  message?: string;

  onRetry?: () => void;
  retryLabel?: string;

  onClose?: () => void;
};

export function ErrorDialog({
  open,
  onOpenChange,
  title = "Something went wrong",
  message = "An unexpected error occurred. Please try again.",
  onRetry,
  retryLabel = "Retry",
  onClose,
}: ErrorDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-red-600">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="text-sm text-muted-foreground">
          {message}
        </div>

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={() => {
              onOpenChange!(false);
              onClose?.();
            }}
          >
            Close
          </Button>

          {onRetry && (
            <Button
              onClick={() => {
                onRetry();
                onOpenChange!(false);
              }}
            >
              {retryLabel}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}