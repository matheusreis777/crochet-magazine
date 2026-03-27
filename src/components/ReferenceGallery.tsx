import { useState, useEffect } from "react";
import type { ReferenceImage } from "../data/referenceImages";

export default function ReferenceGallery({
  images,
  title = "Referências do Modelo",
}: {
  images: ReferenceImage[];
  title?: string;
}) {
  const [modalImg, setModalImg] = useState<ReferenceImage | null>(null);
  const [failedUrls, setFailedUrls] = useState<Set<string>>(new Set());

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!modalImg) return;
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [modalImg]);

  // ESC to close
  useEffect(() => {
    if (!modalImg) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalImg(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalImg]);

  const visibleImages = images.filter((img) => !failedUrls.has(img.url));

  if (visibleImages.length === 0) return null;

  return (
    <>
      <div className="ref-gallery">
        <div className="ref-gallery-header">
          <h3 className="serif ref-gallery-title">{title}</h3>
          <span className="ref-gallery-count">
            {visibleImages.length} imagens
          </span>
        </div>
        <div className="ref-gallery-grid">
          {visibleImages.map((img, i) => (
            <button
              key={i}
              className="ref-gallery-item"
              onClick={() => setModalImg(img)}
              type="button"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="ref-gallery-img"
                onError={() =>
                  setFailedUrls((prev) => new Set(prev).add(img.url))
                }
              />
              <div className="ref-gallery-overlay">
                <span>🔍 Ampliar</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {modalImg && (
        <div
          className="ref-modal-overlay"
          onClick={() => setModalImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="ref-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="ref-modal-close"
              onClick={() => setModalImg(null)}
              type="button"
              aria-label="Fechar"
            >
              ✕
            </button>
            <img src={modalImg.url} alt={modalImg.alt} />
            <p className="ref-modal-alt">{modalImg.alt}</p>
            {modalImg.credit && (
              <p className="ref-modal-credit">{modalImg.credit}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
