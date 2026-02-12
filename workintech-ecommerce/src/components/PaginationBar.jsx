export default function PaginationBar({page, pageCount, onPrev, onNext, onGo}) {
    if (pageCount <= 1) return null;
    return (
        <div className="flex items-center justify-between mt-8">
      <button
        onClick={onPrev}
        disabled={page <= 1}
        className="px-4 py-2 border border-[#ECECEC] rounded disabled:opacity-50"
      >
        Previous
      </button>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">
          Page <b>{page}</b> / <b>{pageCount}</b>
        </span>

        {/* İstersen hızlı geçiş: */}
        <select
          value={page}
          onChange={(e) => onGo(Number(e.target.value))}
          className="border border-[#ECECEC] rounded px-2 py-1"
        >
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={onNext}
        disabled={page >= pageCount}
        className="px-4 py-2 border border-[#ECECEC] rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
    );
}