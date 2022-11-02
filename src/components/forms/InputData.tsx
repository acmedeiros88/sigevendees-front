import React, { ReactNode } from 'react';
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    GridItem,
    Input,
    NumberInput,
    NumberInputField,
    Select,
    Textarea
} from '@chakra-ui/react';

export interface OptionItem {
    descricao: string;
    value: number;
}

interface InputProps {
    descLabel: string;
    descPlaceholder?: string;
    columSpanBase: number;
    columSpanMD: number;
    columSpanLG: number;
    read_on?: boolean;
}

interface GridProps extends InputProps {
    children: ReactNode;
}

interface SelectProps extends InputProps {
    options: readonly OptionItem[];
}

const ItemGrid = ({ columSpanBase, columSpanMD, columSpanLG, descLabel, children }: GridProps) => {
    return (
        <GridItem colSpan={{ base: columSpanBase, md: columSpanMD, lg: columSpanLG }}>
            <FormControl>
                <FormLabel fontSize='sm' whiteSpace='nowrap'>{descLabel}</FormLabel>
                {children}
            </FormControl>
        </GridItem>
    );
}

const InputNumber = ({ descLabel, descPlaceholder, columSpanBase, columSpanMD, columSpanLG }: InputProps) => {
    return (
        <ItemGrid
            descLabel={descLabel}
            columSpanBase={columSpanBase}
            columSpanMD={columSpanMD}
            columSpanLG={columSpanLG}
        >
            <NumberInput min={1}>
                <NumberInputField placeholder={descPlaceholder} />
            </NumberInput>
        </ItemGrid>
    );
};

const InputText = ({ descLabel, descPlaceholder, columSpanBase, columSpanMD, columSpanLG, read_on }: InputProps) => {
    return (
        <ItemGrid
            descLabel={descLabel}
            columSpanBase={columSpanBase}
            columSpanMD={columSpanMD}
            columSpanLG={columSpanLG}
        >
            <Input placeholder={descPlaceholder} readOnly={read_on} />
        </ItemGrid>
    );
};

const InputSelect = ({ descLabel, descPlaceholder, columSpanBase, columSpanMD, columSpanLG, options }: SelectProps) => {
    return (
        <ItemGrid
            descLabel={descLabel}
            columSpanBase={columSpanBase}
            columSpanMD={columSpanMD}
            columSpanLG={columSpanLG}
        >
            <Select placeholder={descPlaceholder != null ? descPlaceholder : 'Selecionar...'}>
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