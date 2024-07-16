import {
  TableHead,
  TableHeader as Header,
  TableRow,
} from "@/components/ui/table";

const TableHeader = () => {
  return (
    <Header>
      <TableRow className="">
        <TableHead className="text-center">Name</TableHead>
        <TableHead className="text-center">Business Name</TableHead>
        <TableHead className="text-center">Subservice(count)</TableHead>
        {/* <TableHead className="text-right">Action</TableHead> */}
      </TableRow>
    </Header>
  );
};
export default TableHeader;
