import type React from "react";

export type GroupinFormationProps = {
    isClicked: boolean;
    isDisabledButton: boolean;
    creditValue: number;
    parcelValues: number;
    numberMaxQtd: number;
    
    iconPromo?: React.ReactElement<React.SVGProps<SVGSVGElement>>;

    insuranceHave?: boolean
    insuranceSelected?: boolean;
    insuranceOnSelect: () => void;
}