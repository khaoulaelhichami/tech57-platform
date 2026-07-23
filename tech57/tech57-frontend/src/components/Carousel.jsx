import { useState } from "react";

/**
 * Carrousel générique par "pages" d'éléments (ex: 3 cartes à la fois sur desktop).
 * props :
 *  - items : tableau de données
 *  - renderItem : (item) => JSX
 *  - itemsPerPage : nombre d'éléments visibles simultanément (défaut 3)
 */
export default function Carousel({ items, renderItem, itemsPerPage = 3 }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

  function prev() {
    setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  }

  function next() {
    setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
  }

  const debut = page * itemsPerPage;
  const visibles = items.slice(debut, debut + itemsPerPage);

  if (items.length === 0) {
    return <p className="text-muted text-center">Contenu à venir.</p>;
  }

  return (
    <div className="position-relative">
      <div className="row g-4">
        {visibles.map((item, i) => (
          <div className={`col-md-${12 / itemsPerPage}`} key={item.id ?? i}>
            {renderItem(item)}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <>
          <button
            type="button"
            className="btn btn-tech57 rounded-circle position-absolute top-50 start-0 translate-middle-y d-none d-md-flex align-items-center justify-content-center"
            style={{ width: 40, height: 40, left: -20 }}
            onClick={prev}
            aria-label="Précédent"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            type="button"
            className="btn btn-tech57 rounded-circle position-absolute top-50 end-0 translate-middle-y d-none d-md-flex align-items-center justify-content-center"
            style={{ width: 40, height: 40, right: -20 }}
            onClick={next}
            aria-label="Suivant"
          >
            <i className="bi bi-chevron-right"></i>
          </button>

          <div className="d-flex justify-content-center gap-2 mt-4">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                className="rounded-circle border-0 p-0"
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: i === page ? "var(--tech57-blue)" : "#dee2e6",
                }}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
