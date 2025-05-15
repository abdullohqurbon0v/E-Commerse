// import React from 'react';
// import { catalogs } from '../data/catalog';
// import { Link } from 'react-router-dom';

// const CatalogSidebar = ({ isOpen, onClose }) => {
//   return (
//     <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//       <div className="p-4 border-b flex justify-between items-center">
//         <h2 className="text-xl font-semibold">Каталог</h2>
//         <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
//       </div>
//       <div className="p-4 space-y-4 overflow-y-auto">
//         {catalogs.map(cat => (
//           <Link to={`/catalogs/${cat.slug}`} key={cat.id} onClick={onClose} className="block hover:bg-gray-100 p-3 rounded-lg transition">
//             <div className="flex items-center gap-4">
//               <img src={cat.image} alt={cat.title} className="w-16 h-16 object-cover rounded" />
//               <div>
//                 <h3 className="font-semibold">{cat.title}</h3>
//                 <p className="text-sm text-gray-500">{cat.description}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CatalogSidebar;
