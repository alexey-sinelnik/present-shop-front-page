import { ButtonComponentProps } from "@/common/types/button";

export default function PrimaryButtonComponent({
    children
}: ButtonComponentProps) {
    return <button>{children}</button>;
}
