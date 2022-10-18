import {
    FormControl,
    FormLabel,
    GridItem,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from "@chakra-ui/react";
import { Property } from 'csstype';
import { ReactNode } from "react";

interface InputProps {
    descLabel: string;
    columSpanBase: number;
    columSpanMD: number;
    columSpanLG: number;
    scale: string;
    spaceWhite: Property.WhiteSpace;
    children: ReactNode;
};


const ItemGrid = ({ descLabel, columSpanBase, columSpanMD, columSpanLG, scale, spaceWhite, children }: InputProps) => {
    return (
        <GridItem colSpan={{ base: columSpanBase, md: columSpanMD, lg: columSpanLG }}>
            <FormControl>
                <FormLabel fontSize={scale} whiteSpace={spaceWhite}>{descLabel}</FormLabel>
                {children}
            </FormControl>
        </GridItem>
    );
}

const InputNumber = ({ descLabel, columSpanBase, columSpanMD, columSpanLG, scale, spaceWhite }: InputProps) => {
    return (
        <ItemGrid
            descLabel={descLabel}
            columSpanBase={columSpanBase}
            columSpanMD={columSpanMD}
            columSpanLG={columSpanLG}
            scale={scale}
            spaceWhite={spaceWhite}
        >

            <NumberInput min={1}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

        </ItemGrid>
    );
};

const InputText = ({ descLabel, columSpanBase, columSpanMD, columSpanLG, scale, spaceWhite }: InputProps) => {
    return (
        <ItemGrid
            descLabel={descLabel}
            columSpanBase={columSpanBase}
            columSpanMD={columSpanMD}
            columSpanLG={columSpanLG}
            scale={scale}
            spaceWhite={spaceWhite}
        >
            <Input />

        </ItemGrid>
    );
};

export { InputText, InputNumber };