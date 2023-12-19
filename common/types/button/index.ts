import { ReactNode } from "react";

export type ButtonComponentProps = {
    children: ReactNode;
};

export type StyledPrimaryButtonProps = {
    size?: string;
    primary?: boolean | number;
    block?: boolean | number;
    black?: boolean | number;
    white?: boolean;
    outline?: boolean | number;
    hover?: boolean | number;
};

export type MobileMenuButtonProps = {
    mobile: boolean;
};
