import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AttentionCrisisSection } from "@/components/home/AttentionCrisisSection";
import { DetoxFrameworkSection } from "@/components/home/DetoxFrameworkSection";
import { TransformationStoriesSection } from "@/components/home/TransformationStoriesSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { AboutDrYashSection } from "@/components/home/AboutDrYashSection";
import { DigitalDetoxTestSection } from "@/components/home/DigitalDetoxTestSection";
import { CorporateTrainingSection } from "@/components/home/CorporateTrainingSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function Home() {
  return (
    <Layout>
      <title>YASH Infinity — Mind Detox & Peak Performance Coach</title>
      <meta
        name="description"
        content="Dr. Yash Kenjale — Mind Detox coaching and training programs helping students, professionals, and organizations reclaim focus, clarity, and peak performance."
      />
      <HeroSection />
      <AttentionCrisisSection />
      <DetoxFrameworkSection />
      <TransformationStoriesSection />
      <ProgramsSection />
      <AboutDrYashSection />
      <DigitalDetoxTestSection />
      <CorporateTrainingSection />
      <FinalCTASection />
    </Layout>
  );
}
