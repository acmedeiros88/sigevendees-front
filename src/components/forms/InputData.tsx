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
    Select,
    Textarea
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
    read_on?: boolean;
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

const InputNumber = ({ descLabel, descPlaceholder, columSpanBase, columSpanMD, columSpanLG }: InputProps) => {
    return (
        <ItemGrid
            props={{
                descLabel: descLabel,
                columSpanBase: columSpanBase,
                columSpanMD: columSpanMD,
                columSpanLG: columSpanLG
            }}>
            <NumberInput min={1}>
                <NumberInputField placeholder={descPlaceholder} />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </ItemGrid>
    );
};

const InputText = ({ descLabel, descPlaceholder, columSpanBase, columSpanMD, columSpanLG, read_on }: InputProps) => {
    return (
        <ItemGrid
            props={{
                descLabel: descLabel,
                columSpanBase: columSpanBase,
                columSpanMD: columSpanMD,
                columSpanLG: columSpanLG
            }}>
            <Input placeholder={descPlaceholder} readOnly={read_on} />
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

const InputTextarea = ({ descLabel }: { descLabel: string }) => {
    return (
        <FormControl>
            <FormLabel fontSize='sm' whiteSpace='nowrap'>{descLabel}</FormLabel>
            <Textarea size='2xl' resize='none' />
        </FormControl>
    );
};

const ButtonSubmit = ({ margin_top }: { margin_top: number }) => {
    return (
        <Flex mt={margin_top} gap='2'>
            <Button>Salvar</Button>
            <Button>Cancelar</Button>
        </Flex>
    );
};

export { InputText, InputNumber, InputSelect, InputTextarea, ButtonSubmit };