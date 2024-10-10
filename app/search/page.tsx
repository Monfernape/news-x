import React from "react";
import { Posts } from "@/app/components/Posts";
import { getGuardianNewsArticles } from "@/lib/api.service";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: {
    query: string;
    fromDate: string;
    toDate: string;
  };
}) => {
  const query = {
    searchQuery: searchParams.query,
    fromDate: searchParams.fromDate,
    toDate: searchParams.toDate,
  };
  const data = await getGuardianNewsArticles(query);
  return <Posts articles={data} />;
};

export default SearchPage;
