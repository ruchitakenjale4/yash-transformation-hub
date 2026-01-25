import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Dr. Yash's coaching sessions have been life-changing. His approach to mindset transformation helped me overcome years of self-doubt and achieve clarity in my career.",
    date: "2 months ago",
  },
  {
    name: "Rahul Mehta",
    rating: 5,
    text: "The Digital D.E.T.O.X. program was exactly what I needed. I've gained better control over my emotions and developed a growth-oriented perspective.",
    date: "3 months ago",
  },
  {
    name: "Sneha Patil",
    rating: 5,
    text: "Incredible experience! The holistic approach combining psychology and practical strategies made a real difference in both my personal and professional life.",
    date: "1 month ago",
  },
];

export function GoogleReviews() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-6 object-contain"
            />
            <span className="text-muted-foreground font-medium">Reviews</span>
          </div>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="text-muted-foreground">
            Based on reviews from our clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-foreground mb-4 text-sm leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {review.name}
                  </p>
                  <p className="text-muted-foreground text-xs">{review.date}</p>
                </div>
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google"
                  className="h-4 object-contain opacity-60"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://share.google/fZlf51Ri3kg5oqWn8"
              target="_blank"
              rel="noopener noreferrer"
            >
              See All Reviews on Google <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
