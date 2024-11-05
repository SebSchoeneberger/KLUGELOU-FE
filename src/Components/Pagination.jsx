// function Pagination({ currentPage, totalPages, onPageChange }) {
//   const pageNumbers = [];

//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div className="flex gap-2 text-black">
//       <button
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         className={`w-8 h-8 flex justify-center items-center rounded-full ${
//           currentPage === 1
//             ? "bg-[#919EAB] border-[#919EAB]"
//             : "bg-transparent border border-black"
//         }`}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="size-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15.75 19.5 8.25 12l7.5-7.5"
//           />
//         </svg>
//       </button>

//       {pageNumbers.map((number) => (
//         <button
//           key={number}
//           onClick={() => onPageChange(number)}
//           className={`w-8 h-8 rounded-full bg-transparent border ${
//             currentPage === number ? "border-[#A46C07]" : "border-black"
//           }`}
//         >
//           {number}
//         </button>
//       ))}

//       <button
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className={`w-8 h-8 rounded-full flex justify-center items-center ${
//           currentPage === totalPages
//             ? "bg-[#919EAB] border-[#919EAB]"
//             : "bg-transparent border border-black"
//         }`}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="size-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="m8.25 4.5 7.5 7.5-7.5 7.5"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// }

// export default Pagination;
