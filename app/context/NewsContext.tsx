"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type NewsContextType = {
  searchQuery: string;
  setSearchQuery: (value: {
    query: string;
    fromDate: string;
    toDate: string;
    section: string;
  }) => void;
  fromDate: string;
  toDate: string; // Add the toDate property
  selectedCategory: string;
  section: string;
  setSelectedCategory: (category: string) => void;
};

const NewsContext = createContext<NewsContextType | null>(null);

export function NewsProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState({
    query: "",
    fromDate: "",
    toDate: "",
    section: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <NewsContext.Provider
      value={{
        searchQuery: searchQuery.query,
        fromDate: searchQuery.fromDate,
        toDate: searchQuery.toDate,
        section: searchQuery.section,
        setSearchQuery: (value: {
          query: string;
          fromDate: string;
          toDate: string;
          section: string;
        }) => setSearchQuery(value),
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export function useNewsContext() {
  const context = useContext(NewsContext);

  if (!context) {
    throw new Error("useNewsContext must be used within a NewsProvider");
  }
  return context;
}
