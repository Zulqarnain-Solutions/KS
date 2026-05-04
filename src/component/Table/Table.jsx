import React from "react";
import Spinner from "./../Spinner/Spinner.jsx";

export default function Table({ tableHeading, children, isLoading }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-left  divide-y divide-gray-200">
        <thead className="bg-gray-100 text-sm text-gray-600">
          <tr>
            {tableHeading.map((Heading) => (
              <th key={Heading.header} className="p-4 ">
                {Heading.header}
              </th>
            ))}
          </tr>
        </thead>
        {isLoading ? (
          <td colSpan={tableHeading.length} className="p-10 text-center">
            <div className="w-full flex items-center justify-center">
              <Spinner />
            </div>
          </td>
        ) : (
          children
        )}
        <tbody></tbody>
      </table>
    </div>

    // <div className="w-full overflow-x-auto rounded-xl border border-gray-200">
    //   <table className="w-full text-sm text-left text-gray-700">
    //     <thead className="bg-gray-100 text-xs uppercase tracking-wide text-gray-500">
    //       <tr>
    //         {columns.map((col) => (
    //           <th key={col.accessor} className="px-4 py-3">
    //             {col.header}
    //           </th>
    //         ))}
    //       </tr>
    //     </thead>

    //     <tbody className="divide-y divide-gray-200">
    //       {data.length === 0 ? (
    //         <tr>
    //           <td
    //             colSpan={columns.length}
    //             className="text-center py-6 text-gray-400"
    //           >
    //             No data available
    //           </td>
    //         </tr>
    //       ) : (
    //         data.map((row, rowIndex) => (
    //           <tr
    //             key={rowIndex}
    //             className="hover:bg-gray-50 transition"
    //           >
    //             {columns.map((col) => (
    //               <td key={col.accessor} className="px-4 py-3">
    //                 {col.render
    //                   ? col.render(row[col.accessor], row)
    //                   : row[col.accessor]}
    //               </td>
    //             ))}
    //           </tr>
    //         ))
    //       )}
    //     </tbody>
    //   </table>
    // </div>
  );
}

/* <td  
            colSpan={tableHeading.length}
            className='p-10 text-center'>  No Data to  Display
            </td> */
