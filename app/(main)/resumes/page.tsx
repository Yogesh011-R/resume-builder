import { Button } from "@/components/ui/button";
import { PlusSquare } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your resume",
};

const ResumesPage = ({}) => {
  return (
    <section className="max-w-7xl mx-auto space-y-6 px-3 py-6">
      <Button asChild className="mx-auto flex w-fit gap-2">
        <Link href={"/editor"}>
          <PlusSquare />
          New Resume
        </Link>
      </Button>
    </section>
  );
};

export default ResumesPage;
