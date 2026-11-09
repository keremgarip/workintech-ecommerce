import {useState} from "react";

export default function ImageWithPlaceholder({
    src,
    alt = "",
    className = "",
    wrapperClassName = "",
}) {
    const [loaded, setLoaded] = useState(false);
    const [failed, setFailed] = useState(false);

    return (
    <div
      className={`relative overflow-hidden bg-gray-100 ${wrapperClassName}`}
    >
      {!loaded && !failed && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}

      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
          Image unavailable
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`
            w-full h-full
            transition-opacity duration-300
            ${loaded ? "opacity-100" : "opacity-0"}
            ${className}
          `}
        />
      )}
    </div>
  );
}