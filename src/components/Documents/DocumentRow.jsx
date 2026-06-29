import Button from "../Common/Button";

function DocumentRow({ document }) {
  return (
    <tr className="border-b border-slate-200 hover:bg-slate-50">
      <td className="px-6 py-4">{document.name}</td>
      <td className="px-6 py-4">{document.category}</td>
      <td className="px-6 py-4">{document.uploaded}</td>
      <td className="px-6 py-4">
        <Button variant="outline">Download</Button>
      </td>
    </tr>
  );
}

export default DocumentRow;