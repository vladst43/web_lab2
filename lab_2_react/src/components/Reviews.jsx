import { useEffect, useState } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to load reviews');
        }

        return response.json();
      })
      .then((data) => {
        setReviews(data);
        setError('');
      })
      .catch((fetchError) => {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
      <h2 className="text-2xl font-semibold text-slate-800 mb-4">
        Employer Reviews
      </h2>

      {loading && <p className="text-slate-700">Loading reviews...</p>}

      {error && <p className="font-semibold text-red-700">{error}</p>}

      {!loading && !error && (
        <div className="space-y-4">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <h3 className="font-semibold text-slate-900">{review.name}</h3>
              <p className="mt-1 text-sm italic text-slate-500">
                {review.email}
              </p>
              <p className="mt-3 leading-7 text-slate-700">{review.body}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;
