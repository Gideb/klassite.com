import { memo } from "react";
import blob from "../../assets/images/blob.svg";

const BLOB_CONFIG = [
  {
    className: "-top-20 -left-20 w-[600px] h-[600px]",
    color: "purple",
  },
  {
    className: "bottom-0 right-0 w-[700px] h-[800px]",
    color: "default",
  },
  {
    className: "top-40 -right-20 w-[200px] h-[300px]",
    color: "default",
  },
];

const BlobBackground = memo(() => {
  return (
    <>
      {BLOB_CONFIG.map((config, index) => (
        <img
          key={index}
          src={blob}
          alt=""
          aria-hidden="true"
          className={`absolute ${config.className} z-0 pointer-events-none select-none object-contain ${
            index === 0
              ? "animate-blobfluid"
              : index === 1
                ? "animate-blobfluid-slow"
                : "animate-blobfluid-fast"
          }`}
          style={{ opacity: 0.08 }}
        />
      ))}
    </>
  );
});

BlobBackground.displayName = "BlobBackground";

export default BlobBackground;
