import { TableCell, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";

const TableBodyRow = ({ item }: { item: any }) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{item.fullName}</TableCell>
      <TableCell>
        <Link className="text-sky-800" to={`/company/${item.id}`}>
          {item.businessName}
        </Link>
      </TableCell>
      <TableCell>{item.subServices.length}</TableCell>
      {/* <TableCell className="text-right">text</TableCell> */}
    </TableRow>
  );
};
export default TableBodyRow;
