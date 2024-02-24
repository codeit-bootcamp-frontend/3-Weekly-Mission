import { ModalInterface } from "../interfaces";
import {
    FieldErrors,
    FieldValues,
    FormState,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormSetError,
    UseFormWatch,
} from "react-hook-form";

export type ShowModal = (modalValue: ModalInterface) => void;

export type CloseModal = () => void;

export type SharedUserIdType = string | string[] | undefined | null;

export type SharedFolderIdType = string | string[] | undefined | null;

export type UseFormReturn<TFieldValues extends FieldValues = FieldValues> = {
    watch: UseFormWatch<TFieldValues>;
    setError: UseFormSetError<TFieldValues>;
    formState: FormState<TFieldValues>;
    handleSubmit: UseFormHandleSubmit<TFieldValues>;
    register: UseFormRegister<TFieldValues>;
};

export type FormStateProxy<TFieldValues extends FieldValues = FieldValues> = {
    errors: FieldErrors<TFieldValues>;
};
