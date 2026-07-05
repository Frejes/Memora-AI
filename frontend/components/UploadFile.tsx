"use client";

import { useRef } from "react";
import { uploadFile } from "@/lib/upload";

type UploadFileProps = {
  onUploadSuccess?: (filename: string) => void;
};

export default function UploadFile({
  onUploadSuccess,
}: UploadFileProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const chooseFile = () => {
    inputRef.current?.click();
  };

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.length) return;

    const file = e.target.files[0];

    try {
      const result = await uploadFile(file);

      alert(result.message);

      // Notify Dashboard
      if (onUploadSuccess) {
        onUploadSuccess(file.name);
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    }

    e.target.value = "";
  };

  return (
    <>
      <button
        onClick={chooseFile}
        className="w-full rounded-lg border border-white/10 p-3"
      >
        Upload File
      </button>

      <input
        type="file"
        ref={inputRef}
        hidden
        onChange={handleUpload}
      />
    </>
  );
}