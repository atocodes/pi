import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Product } from "../types";
import { Button } from "@/components/ui/button";

export default function ConfirmDeleteProduct({
  open,
  product,
  onOpenChange,
  onDelete,
}: {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDelete: (id: string) => Promise<void>;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Delete Product "{product.name}"</DialogTitle>
        </DialogHeader>
        <p>Are you sure you want to delete the product</p>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={() => onDelete(product.id!)}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
