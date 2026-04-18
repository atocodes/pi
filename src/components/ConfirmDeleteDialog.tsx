import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Product } from "../features/products/types";
import { Button } from "@/components/ui/button";
import { Customer } from "@/features/cutomers/types";
import { Batch } from "@/features/batches";

export default function ConfirmDeleteDailog({
  open,
  id,
  name,
  onOpenChange,
  onDelete,
}: {
  id: string;
  name: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDelete: (id: string) => Promise<void>;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Delete "{name}"</DialogTitle>
        </DialogHeader>
        <p>Are you sure you want to delete</p>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={() => onDelete(id)}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
