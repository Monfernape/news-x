"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type NewsContextType = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const NewsContext = createContext<NewsContextType | null>(null);

export function NewsProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <NewsContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
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
