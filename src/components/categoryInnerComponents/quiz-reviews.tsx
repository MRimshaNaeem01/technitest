import { Star } from "lucide-react";

export type Review = {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
};

type QuizReviewsProps = {
  reviews: Review[];
};

export function QuizReviews({ reviews }: QuizReviewsProps) {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto w-full max-w-[1440px] px-8 xl:px-10 2xl:px-12">
        <div className="rounded-xl bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-black">Reviews</h2>
              <span className="flex items-center gap-1 rounded-md bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
                <Star className="size-4 fill-brand" />
                4.9
              </span>
            </div>
            <select className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-500 outline-none">
              <option>Most Relevant</option>
              <option>Newest First</option>
              <option>Highest Rated</option>
            </select>
          </div>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-200 text-sm font-medium text-gray-600">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-black">
                        {review.name}
                      </span>
                      <span className="text-xs text-gray-400">
                        {review.date}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-3.5 fill-indigo-500 text-indigo-500"
                        />
                      ))}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[#5F5F6B]">
                      {review.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
