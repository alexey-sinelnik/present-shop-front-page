import HashLoader from "react-spinners/HashLoader";
import { SpinnerWrapper } from "@/styles/components/spinner";

export default function SpinnerComponent() {
    return (
        <SpinnerWrapper>
            <HashLoader speedMultiplier={3} color="#555" />
        </SpinnerWrapper>
    );
}
