import Card from "../Common/Card";
import DocumentRow from "./DocumentRow";

function DocumentsTable({ documents }) {
  return (
    <Card>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="px-6 py-4">Document</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">Uploaded</th>
            <th className="px-6 py-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {documents.map((doc) => (
            <DocumentRow key={doc.id} document={doc} />
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default DocumentsTable;