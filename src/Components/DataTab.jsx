import React from "react";

const DataTable = ({ info }) => {
  return (
    <div className="w-full h-full border rounded">
      <table className="w-full">
        <thead>
          <tr className="text-2xl border-b border-gray-500 rounded bg-slate-500 text-slate-50 max-md:text-lg">
            <th className="py-6 pl-8 text-left">Sr</th>
            <th className="py-6 pl-8 text-left">Date With Time</th>
            <th className="py-6 pl-8 text-left">Timer</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item, index) => {
            return (
              <tr
                className="text-lg border-b border-gray-500 last:border-none bg-sky-600 text-slate-100 max-md:text-sm"
                key={index}
              >
                <td className="py-6 pl-8 text-left">{index + 1}</td>
                <td className="py-6 pl-8 text-left">
                  {new Date(item.date).toLocaleString()}
                </td>
                <td className="py-6 pl-8 text-left">
                  {item.seconds.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
