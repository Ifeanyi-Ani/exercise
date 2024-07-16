import {
  TableCell,
  TableFooter as Footer,
  TableRow,
} from "@/components/ui/table";

const TableFooter = () => {
  return (
    <Footer>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell className="text-right">$2,500.00</TableCell>
      </TableRow>
    </Footer>
  );
};
export default TableFooter;
