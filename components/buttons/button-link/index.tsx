import { StyledButtonLink } from "@/styles/components/button";

export default function ButtonLink(props: any) {
    return (
        <StyledButtonLink {...props} href={props.link}>
            {props.children}
        </StyledButtonLink>
    );
}
