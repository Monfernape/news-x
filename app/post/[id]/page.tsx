import { MoreArticles } from "@/components/MoreArticles";
import Image from "next/image";

export default function Deatil() {
  return (
    <div className="flex flex-col py-4 gap-6 w-full">
      <div className="flex items-center gap-2 justify-center">
        <div className="bg-chip py-1 px-3 rounded-lg">
          <p className="font-poppin text-xs">Category</p>
        </div>
        <p className="font-poppin text-sm tetx-font-light">Date</p>
      </div>

      <p className="font-poppin text-5xl text-center">Title</p>
      <Image src="" alt="" className="w-full h-64 rounded" />
      <p className="font-poppin text-sm">Description</p>
      <MoreArticles />
    </div>
  );
}
