export function ProgressBar({
  completed,
  total,
  asOf,
}: {
  completed: number;
  total: number;
  asOf: string;
}) {
  const percent = Math.min(100, Math.round((completed / total) * 100));

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-sm text-stone-600">
          <span className="font-semibold text-ink">
            {completed.toLocaleString()} miles
          </span>{" "}
          of {total.toLocaleString()} completed
        </p>
        <p className="text-sm font-semibold tabular-nums text-pine-700">
          {percent}%
        </p>
      </div>
      <div
        className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-stone-200"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${completed} of ${total} miles walked`}
      >
        <div
          className="h-full rounded-full bg-pine-700"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-stone-500">
        {asOf} — live position available on the trail tracker
      </p>
    </div>
  );
}