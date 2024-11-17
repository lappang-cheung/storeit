"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { getFiles } from "@/lib/actions/file.actions";
import { Models } from "node-appwrite";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Models.Document[]>([]);
  const [open, setOpen] = useState(false);

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  useEffect(() => {
    const fetchFile = async () => {
      const files = await getFiles({ searchText: query });
      setResults(files.document);
      setOpen(true);
    };

    fetchFile();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setQuery("");
    }
  }, [searchQuery]);

  return (
    <div className="search">
      <div className="search-input-wrapper">
        <Image
          src="/assets/icons/search.svg"
          alt="Search"
          width={24}
          height={24}
        />
        <Input
          value={query}
          placeholder="Search .."
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
        />
        {open && <ul className="search-result">RESULTS</ul>}
      </div>
    </div>
  );
};
export default Search;
