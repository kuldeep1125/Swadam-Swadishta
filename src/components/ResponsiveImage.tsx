import type { ImgHTMLAttributes } from "react";
import manifest from "@/lib/image-manifest.json";

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "width" | "height"> & {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

type ImageAsset = { width: number; height: number; variants: { src: string; width: number }[] };

// [ADDED] Responsive local images for static export; pass the original asset path and its rendered sizes.
export function ResponsiveImage({ src, alt, width, height, sizes = "(max-width: 767px) 100vw, 50vw", priority = false, loading, ...props }: ResponsiveImageProps) {
  const asset = (manifest as Record<string, ImageAsset>)[src];
  const variants = asset?.variants;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      src={variants?.[variants.length - 1].src ?? src}
      srcSet={variants?.map((variant) => `${variant.src} ${variant.width}w`).join(", ")}
      sizes={variants ? sizes : undefined}
      width={width ?? asset?.width ?? 1200}
      height={height ?? asset?.height ?? 900}
      alt={alt}
      loading={priority ? "eager" : loading ?? "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
