"use client";

type Props = {
  files: string[];
  onSelectFile: (prompt: string) => void;
};

export default function FileList({
  files,
  onSelectFile,
}: Props) {
  return (
    <div className="mt-6">
      <h3 className="mb-3 text-sm font-semibold text-gray-400">
        Uploaded Files
      </h3>

      {files.length === 0 ? (
        <p className="text-xs text-gray-500">
          No files uploaded
        </p>
      ) : (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="rounded-lg border border-white/10 bg-[#111827] p-3"
            >
              <p className="font-medium">📄 {file}</p>

              <div className="mt-3 space-y-2">

                <button
                  onClick={() =>
                    onSelectFile(`Summarize ${file}`)
                  }
                  className="w-full rounded bg-cyan-600 px-2 py-1 text-sm"
                >
                  📋 Summarize
                </button>

                <button
                  onClick={() =>
                    onSelectFile(
                      `What skills are mentioned in ${file}?`
                    )
                  }
                  className="w-full rounded bg-gray-700 px-2 py-1 text-sm"
                >
                  🧠 Skills
                </button>

                <button
                  onClick={() =>
                    onSelectFile(
                      `What projects are mentioned in ${file}?`
                    )
                  }
                  className="w-full rounded bg-gray-700 px-2 py-1 text-sm"
                >
                  💼 Projects
                </button>

              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}