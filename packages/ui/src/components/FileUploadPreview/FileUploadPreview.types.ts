export type FileUploadPreviewProps = {
    file?: File | null;
    onFileChange?: (file: File | null) => void;
    disabled?: boolean;
};