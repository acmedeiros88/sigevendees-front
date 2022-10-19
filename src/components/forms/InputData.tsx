import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    GridItem,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface OptionItemProps {
    descricao: string;
    value: number;
};

interface InputProps {
    descLabel: string;
    descPlaceholder?: string;
    columSpanBase: number;
    columSpanMD: number;
    columSpanLG: number;
};

interface GridProps {
    props: InputProps;
    children: ReactNode;
};

interface SelectProps {
    props: InputProps;
    options: readonly OptionItemProps[];
};

const ItemGrid = ({ props, children }: GridProps) => {
    return (
        <GridItem colSpan={{ base: props.columSpanBase, md: props.columSpanMD, lg: props.columSpanLG }}>
            <FormControl>
                <FormLabel fontSize='sm' whiteSpace='nowrap'>{props.descLabel}</FormLabel>
                {children}
            </FormControl>
        </GridItem>
    );
}

const InputNumber = ({ descLabel, columSpanBase, columSpanMD, columSpanLG }: InputProps) => {
    return (
        <ItemGrid
            props={{
                descLabel: descLabel,
                columSpanBase: columSpanBase,
                columSpanMD: columSpanMD,
                columSpanLG: columSpanLG
            }}>

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

const InputText = ({ descLabel, descPlaceholder, columSpanBase, columSpanMD, columSpanLG }: InputProps) => {
    return (
        <ItemGrid
            props={{
                descLabel: descLabel,
                columSpanBase: columSpanBase,
                columSpanMD: columSpanMD,
                columSpanLG: columSpanLG
            }}>
            <Input placeholder={descPlaceholder} />

        </ItemGrid>
    );
};

const InputSelect = ({ props, options }: SelectProps) => {
    return (
        <ItemGrid
            props={{
                descLabel: props.descLabel,
                columSpanBase: props.columSpanBase,
                columSpanMD: props.columSpanMD,
                columSpanLG: props.columSpanLG
            }}>

            <Select placeholder='Selecionar...'>
                {options.map((item) => (
                    <option key={item.value} value={item.value}>{item.descricao}</option>
                ))}
            </Select>

        </ItemGrid>
    );
};

const ButtonSubmit = ({ margin_top, space }: { margin_top: number, space: string }) => {
    return (
        <Flex mt={margin_top} gap={space}>
            <Button>Salvar</Button>
            <Button>Cancelar</Button>
        </Flex>
    );
};

export { InputText, InputNumber, InputSelect, ButtonSubmit };