import { Link } from "react-router-dom";
import { Sparkles, Target, Eye, Heart, CheckCircle, ArrowRight, Award, GraduationCap, Users, Briefcase, Brain, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import drYashPhoto from "@/assets/dr-yash.png";
const values = [{
  icon: Brain,
  title: "Science-Backed & Holistic",
  description: "Combining modern psychology, coaching, and leadership training for comprehensive transformation."
}, {
  icon: Heart,
  title: "Deep, Lasting Impact",
  description: "We go beyond surface-level motivation and focus on true breakthroughs that stick."
}, {
  icon: Target,
  title: "Customized for You",
  description: "Every session, workshop, and coaching experience is tailored to individual needs."
}, {
  icon: Users,
  title: "A Community for Growth",
  description: "Y.A.S.H. is more than a service—it's a movement towards self-mastery and excellence."
}];
const expertise = [{
  icon: Heart,
  title: "Psychological Counseling & Emotional Mastery",
  description: "Overcoming self-doubt, stress, and limiting beliefs"
}, {
  icon: Brain,
  title: "Mindset & Personal Growth Coaching",
  description: "Shifting from a fixed mindset to a growth-oriented, success-driven perspective"
}, {
  icon: Users,
  title: "Leadership & Corporate Training",
  description: "Enhancing team performance, emotional intelligence, and leadership effectiveness"
}, {
  icon: Briefcase,
  title: "Career & Business Coaching",
  description: "Providing clarity, confidence, and actionable strategies for professional growth"
}, {
  icon: Lightbulb,
  title: "Holistic Well-being",
  description: "Integrating modern psychology with self-care strategies for a balanced, fulfilled life"
}];
const credentials = ["BAMS (Bachelor of Ayurvedic Medicine and Surgery)", "Postgraduate Diploma in Psychological Counseling", "Certified Life Coach", "NLP Practitioner", "Certified Career Coach", "Certified Business Coach", "Diploma in Modern Applied Psychology"];
const whoWeServe = [{
  icon: Briefcase,
  title: "Corporate Professionals & Leaders",
  description: "Strengthening leadership skills, emotional intelligence, and workplace efficiency"
}, {
  icon: GraduationCap,
  title: "Students & Young Adults",
  description: "Developing confidence, self-awareness, and career clarity"
}, {
  icon: Rocket,
  title: "Entrepreneurs & Business Owners",
  description: "Cultivating vision, decision-making skills, and sustainable growth strategies"
}, {
  icon: Heart,
  title: "Individuals Committed to Self-Improvement",
  description: "Breaking negative patterns, overcoming fears, and stepping into personal power"
}];
const drYashMission = ["Empower individuals to take charge of their mental, emotional, and professional well-being", "Break limiting beliefs and develop a growth-oriented mindset", "Combine psychology, coaching, and leadership training to drive real change", "Help people master their emotions, careers, and personal lives through practical, actionable strategies"];
const whyDrYash = [{
  title: "1,000+ Lives Transformed",
  description: "Guided individuals from self-doubt to clarity, confidence, and success"
}, {
  title: "Scientific & Holistic Approach",
  description: "Blends modern psychology, coaching, and strategic development"
}, {
  title: "Personalized Growth Plans",
  description: "Every session and program is tailored to the individual's journey"
}, {
  title: "Results-Oriented & Impact-Driven",
  description: "Focuses on real breakthroughs, not just surface-level motivation"
}];
export default function About() {
  return <Layout>
      <title>
        About Y.A.S.H. | Holistic Personal Development & Transformational
        Coaching
      </title>
      <meta name="description" content="Learn about Y.A.S.H. and Dr. Yash Rajesh Kenjale's mission to help individuals achieve holistic well-being through transformational coaching and personal development." />

      {/* Hero Section */}
      <section className="pt-12 pb-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-gold font-medium mb-4">
              <Sparkles size={18} />
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering You to{" "}
              <span className="text-gradient">Unleash the Infinity</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Yugandhar Academic Services for Harmony (Y.A.S.H.), we believe
              that true transformation is not a luxury—it is essential. In
              today's fast-paced world, individuals and organizations often find
              themselves stuck in cycles of stress, self-doubt, and stagnation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Y.A.S.H. exists to break those patterns, empower individuals to
              take charge of their lives, and help them unlock their highest
              potential. Rooted in the philosophy of self-mastery, holistic
              well-being, and strategic growth, we integrate modern psychology,
              coaching methodologies, and leadership training to create lasting
              impact.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-hero-gradient text-primary-foreground">
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed">
                To establish health in every aspect of life and see individuals
                operating at their highest potential—not just in their careers,
                but in their overall well-being and personal fulfillment.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To create empowering spaces where people can explore, heal, and
                grow, strengthening every aspect of their mental, emotional, and
                professional health so they can unleash their infinite
                potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold font-medium mb-4">
              <Sparkles size={18} />
              What We Do
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              High-Impact Coaching & Training
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              At Y.A.S.H., we specialize in high-impact coaching, training, and
              psychological consulting to create breakthroughs in personal and
              professional life. We believe that true success is not just about
              external achievements—it is about inner mastery, emotional
              intelligence, and the ability to navigate life's challenges with
              confidence and resilience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Y.A.S.H. */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold font-medium mb-4">
              <Sparkles size={18} />
              Why Y.A.S.H.?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transformation is Personal, So is Our Approach
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We don't believe in one-size-fits-all solutions. At Y.A.S.H., we
              don't just inspire change—we create it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg hover:border-gold/30 transition-all text-center">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>)}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-muted rounded-2xl">
              <p className="font-display text-xl md:text-2xl text-foreground italic mb-2">
                "Because your potential is limitless. Because you are meant for
                more."
              </p>
              <p className="text-gold font-semibold">
                Because it's time to Unleash the Infinity. 🚀
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Yash Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 text-gold font-medium mb-4">
                <Sparkles size={18} />
                Meet the Founder
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Dr. Yash Rajesh Kenjale
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Dr. Yash Rajesh Kenjale is a visionary coach, psychological
                counselor, and transformation expert dedicated to helping
                individuals break free from limiting patterns and unleash their
                infinite potential.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With a strong foundation in psychology, coaching, and leadership
                development, Dr. Yash has empowered more than{" "}
                <strong className="text-foreground">1,000+ individuals</strong>{" "}
                to achieve breakthroughs in their personal growth, careers, and
                emotional well-being.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With a background in Ayurvedic medicine (BAMS) and a
                Postgraduate Diploma in Psychological Counseling, Dr. Yash
                combines scientific knowledge with practical coaching
                methodologies to create powerful, results-driven programs.
              </p>

              <h4 className="font-semibold text-foreground mb-3">
                Credentials & Expertise:
              </h4>
              <ul className="grid grid-cols-1 gap-2 mb-6">
                {credentials.map((credential, index) => <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-1" />
                    <span className="text-muted-foreground text-sm">
                      {credential}
                    </span>
                  </li>)}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl bg-hero-gradient overflow-hidden">
                  <img src={drYashPhoto} alt="Dr. Yash Rajesh Kenjale - Founder of Y.A.S.H." className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-4 -left-4 px-6 py-4 bg-hero-gradient rounded-xl shadow-lg text-primary-foreground">
                  <p className="font-display font-bold text-5xl">1000+</p>
                  <p className="text-primary-foreground/90 text-lg font-semibold">
                    Lives Transformed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Yash Journey */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-gold mb-4 font-bold text-2xl">
                <Sparkles size={18} />
                His Journey
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6 md:text-3xl">
                From Shy Dreamer to Empowering Leader
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Yash's journey is one of self-discovery, resilience, and
                transformation. Once a reserved child who struggled with
                self-expression, he discovered the power of mindset,
                communication, and self-mastery at an early age.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At just{" "}
                <strong className="text-foreground">15 years old</strong>, he
                conducted his first corporate training, speaking to an audience
                twice his age. Since then, he has led corporate trainings,
                career coaching sessions, and emotional well-being programs,
                helping individuals overcome self-doubt, fear, and stagnation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Through his work at Yugandhar Academic Services for Harmony
                (Y.A.S.H.), Dr. Yash has designed high-impact coaching programs
                that integrate modern psychology, emotional intelligence, and
                strategic personal growth techniques. His approach is not just
                about temporary motivation—it is about creating deep, lasting
                transformation.
              </p>
            </div>

            {/* Mission & Approach */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-muted rounded-xl">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  His Mission & Approach
                </h3>
                <ul className="space-y-3">
                  {drYashMission.map((item, index) => <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-gold text-xs font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {item}
                      </span>
                    </li>)}
                </ul>
              </div>

              <div className="p-6 bg-hero-gradient rounded-xl text-primary-foreground">
                <h3 className="font-display text-xl font-semibold mb-4">
                  Why Work with Dr. Yash?
                </h3>
                <ul className="space-y-4">
                  {whyDrYash.map((item, index) => <li key={index}>
                      <p className="font-semibold text-gold text-sm">
                        {item.title}
                      </p>
                      <p className="text-primary-foreground/80 text-sm">
                        {item.description}
                      </p>
                    </li>)}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">Connect with Dr. Yash</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold font-medium mb-4">
              <Sparkles size={18} />
              Who We Serve
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              For Those Who Refuse to Settle
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our programs are designed for those who refuse to settle for
              mediocrity and seek meaningful, sustainable change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whoWeServe.map((item, index) => <div key={index} className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg hover:border-gold/30 transition-all">
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              It's Time to Break Barriers & Rewrite Your Story
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              At Y.A.S.H., we don't just inspire change—we create it. Ready to
              break through your limitations, tap into your potential, and lead
              a life of purpose, confidence, and fulfillment?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/services">
                  Explore Our Services <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}