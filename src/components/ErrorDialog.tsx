"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "./ui/dialog";

type Props = {
  error: any;
  href: string;
};

export default function ErrorDialog(props: Props) {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Dialog open={true}>
        <DialogContent>
          <DialogHeader>Error</DialogHeader>
          <DialogDescription>{props.error}</DialogDescription>
          <DialogFooter>
            <Button>
              <Link href={props.href}>Go Back</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
