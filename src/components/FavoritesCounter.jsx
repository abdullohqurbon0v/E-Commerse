import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';


const FavoritesCounter = () => {
  const { favorites } = useFavorites();

  return (
    <Link to="/favorites" className="relative inline-block">
      <Heart size={24} className="text-gray-600 hover:text-red-500 cursor-pointer" />
      {favorites.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 text-xs font-bold">
          {favorites.length}
        </span>
      )}
    </Link>
  );
};

export default FavoritesCounter;
