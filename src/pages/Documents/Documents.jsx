import DocumentsHeader from "../../components/documents/DocumentsHeader";
import DocumentsTable from "../../components/documents/DocumentsTable";

import { documents } from "../../data/documentData";

function Documents() {
  return (
    <div className="space-y-6">
      <DocumentsHeader />
      <DocumentsTable documents={documents} />
    </div>
  );
}

export default Documents;