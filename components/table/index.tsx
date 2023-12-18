import { TableProps } from "@/common/types/cart";
import { StyledTable } from "@/styles/components/cart";

export default function TableComponent(props: TableProps) {
    return <StyledTable {...props} />;
}
