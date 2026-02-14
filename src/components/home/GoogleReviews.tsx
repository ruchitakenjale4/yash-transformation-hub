import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
  {
    name: "Amit Deshmukh",
    rating: 5,
    text: "The leadership training transformed how I manage my team. Dr. Yash's insights on emotional intelligence have made me a better leader and communicator.",
    date: "2 weeks ago",
  },
  {
    name: "Kavita Joshi",
    rating: 5,
    text: "I was skeptical at first, but the results speak for themselves. My productivity and mental clarity have improved significantly after the coaching sessions.",
    date: "1 month ago",
  },
];

export function GoogleReviews() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-6 object-contain"
            />
            <span className="text-muted-foreground font-semibold tracking-wide">Reviews</span>
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

        <div className="max-w-4xl mx-auto px-12 mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="glass-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 h-full group hover:-translate-y-1">
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
                    <div className="premium-divider mb-3" />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {review.name}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {review.date}
                        </p>
                      </div>
                      <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                        alt="Google"
                        className="h-4 object-contain opacity-60"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://share.google/fZlf51Ri3kg5oqWn8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More Reviews <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
