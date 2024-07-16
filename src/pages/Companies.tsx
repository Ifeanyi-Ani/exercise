import { useEffect, useState } from "react";
import baseUrl from "@/apis/baseUrl";
import { Table, TableBody, TableCaption } from "@/components/ui/table";
import TableHeader from "@/components/ui/tables/TableHeader";
import TableFooter from "@/components/ui/tables/TableFooter";
import TableBodyRow from "@/components/ui/tables/TableBody";

const Companies = () => {
  const [business, setBusiness] = useState<any>([]);
  const [isLoading, setisLoading] = useState(true);
  const getData = async () => {
    try {
      const response = await baseUrl.get("/vendors");
      setBusiness(response.data);
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    if (isLoading) {
      getData();
      setisLoading(false);
    }
  }, [isLoading, business]);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <Table>
      <TableCaption>A list of Businesses.</TableCaption>
      <TableHeader />
      <TableBody>
        {business?.data?.map((item: any) => (
          <TableBodyRow item={item} key={item.id} />
        ))}
      </TableBody>
    </Table>
  );
};
export default Companies;
