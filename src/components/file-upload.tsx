import { useRef, useState } from "react";

export const FileUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<File[]>([]);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const fileArray = Array.from(event.target.files);

      setFiles((prevFiles) => [...prevFiles, ...fileArray]);
    }
  };

  function formatFileSize(bytes: number) {
    const kilobytes = bytes / 1024;
    const megabytes = bytes / 1024 ** 2;

    if (bytes < 1024 * 1024) {
      return `${parseFloat(kilobytes.toFixed(2))} KB`;
    } else {
      return `${parseFloat(megabytes.toFixed(2))} MB`;
    }
  }

  return (
    <div className="flex flex-col items-center m-10 ">
      <div
        className="flex flex-col items-center border-2 gap-y-3 border-dashed rounded-xl p-10 max-w-[450px] w-full cursor-pointer"
        onClick={handleClick}
      >
        <img src="file.png" alt="File Upload" className="size-12" />
        <input
          type="file"
          accept=".csv"
          className="hidden"
          ref={inputRef}
          onChange={handleFileChange}
        />
        <h2 className="font-semibold">
          Create or import a custom classification
        </h2>
        <p className="-mb-2 text-sm text-neutral-500">
          Maximum file size: 50 MB
        </p>
        <p className="text-sm text-neutral-500">Supported format: .CSV</p>
      </div>
      {files.length > 0 && (
        <ul className="mt-4 max-w-[450px] w-full space-y-2">
          {files.map((file, index) => (
            <li
              key={index}
              className="flex flex-col w-full px-2 py-3 text-sm border text-neutral-500 rounded-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <div className="p-1 border rounded-xl">
                    <div className="p-1 bg-green-100 rounded-lg">
                      <img
                        src="csv-file.png"
                        alt="CSV logo"
                        className="size-9"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-black">{file.name}</h3>
                    <p className="text-xs">
                      {file.type === "text/csv" && "CSV"} •{" "}
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <a
                  href={URL.createObjectURL(file)}
                  download={file.name}
                  className="text-blue-500 hover:underline"
                >
                  Download
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
