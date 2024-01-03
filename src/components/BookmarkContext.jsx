import { createContext, useContext, useEffect, useState } from "react";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBookmarks);
  }, [bookmarks]);

  const addBookmark = (meal) => {
    setBookmarks((prevBookmarks) => {
      const newBookmarks = [...prevBookmarks, meal];
      localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  const removeBookmark = (meal) => {
    setBookmarks((prevBookmarks) => {
      const newBookmarks = prevBookmarks.filter(
        (bookmark) => bookmark.idMeal !== meal.idMeal
      );
      localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarkContext = () => {
  return useContext(BookmarkContext);
};
