import { OptimizedImage } from "./OptimizedImage";

type MediaVisualProps = {
  image: string;
  alt: string;
  video?: string;
  poster?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function MediaVisual({
  image,
  alt,
  video,
  poster,
  className = "",
  priority = false,
  sizes,
}: MediaVisualProps) {
  if (!video) {
    return <OptimizedImage src={image} alt={alt} className={className} priority={priority} sizes={sizes} />;
  }

  return (
    <div className={`relative overflow-hidden bg-zinc-900 ${className}`}>
      <video
        className="h-full w-full object-cover"
        src={video}
        poster={poster ?? image}
        autoPlay
        muted
        loop
        playsInline
        preload={priority ? "auto" : "metadata"}
        aria-label={alt}
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%,rgba(0,0,0,0.34))]" />
    </div>
  );
}
