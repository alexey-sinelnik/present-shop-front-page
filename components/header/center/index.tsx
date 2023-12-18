import { CenterComponentProps } from "@/common/types/header";
import { StyledCenterComponent } from "@/styles/components/header";

export default function CenterComponent({ children }: CenterComponentProps) {
    return <StyledCenterComponent>{children}</StyledCenterComponent>;
}
