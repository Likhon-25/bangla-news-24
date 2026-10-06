const Loading = () => {
  return (
    <main
      aria-label="সংবাদ লোড হচ্ছে"
      className="mx-auto w-full max-w-7xl px-4 py-6"
    >
      <p className="sr-only" role="status">
        সংবাদ লোড হচ্ছে...
      </p>

      <div aria-hidden="true" className="motion-safe:animate-pulse">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <section className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                <div className="aspect-[4/3] w-full bg-gray-200" />
                <div className="space-y-4 p-5 sm:p-6">
                  <div className="h-4 w-24 rounded bg-red-100" />
                  <div className="h-6 w-full rounded bg-gray-200 sm:h-7" />
                  <div className="h-6 w-4/5 rounded bg-gray-200 sm:h-7" />
                  <div className="space-y-2 pt-1">
                    <div className="h-4 w-full rounded bg-gray-100" />
                    <div className="h-4 w-5/6 rounded bg-gray-100" />
                  </div>
                </div>
              </div>

              <div className="grid overflow-hidden rounded-lg border border-gray-200 bg-white sm:grid-cols-2 md:grid-cols-1">
                {Array.from({ length: 4 }, (_, index) => (
                  <div
                    key={index}
                    className="space-y-3 border-b border-gray-200 p-4 last:border-b-0"
                  >
                    <div className="h-4 w-20 rounded bg-red-100" />
                    <div className="h-5 w-full rounded bg-gray-200" />
                    <div className="h-5 w-4/5 rounded bg-gray-200" />
                  </div>
                ))}
              </div>
            </section>

            {Array.from({ length: 2 }, (_, sectionIndex) => (
              <section key={sectionIndex}>
                <div className="mb-4 flex items-center gap-3 border-b-2 border-red-600 pb-2">
                  <div className="h-6 w-36 rounded bg-gray-200" />
                  <div className="h-4 w-20 rounded bg-gray-100" />
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {Array.from({ length: 3 }, (_, cardIndex) => (
                    <div
                      key={cardIndex}
                      className="overflow-hidden rounded-lg border border-gray-200 bg-white"
                    >
                      <div className="aspect-[16/10] w-full bg-gray-200" />
                      <div className="space-y-3 p-4">
                        <div className="h-4 w-20 rounded bg-red-100" />
                        <div className="h-5 w-full rounded bg-gray-200" />
                        <div className="h-5 w-4/5 rounded bg-gray-200" />
                        <div className="h-4 w-2/3 rounded bg-gray-100" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="h-fit rounded-lg border border-gray-200 bg-white p-5">
            <div className="mb-5 h-6 w-36 rounded bg-gray-200" />
            <div className="space-y-5">
              {Array.from({ length: 7 }, (_, index) => (
                <div key={index} className="flex gap-3">
                  <div className="h-5 w-5 shrink-0 rounded bg-red-100" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-full rounded bg-gray-200" />
                    <div className="h-4 w-4/5 rounded bg-gray-100" />
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Loading;
