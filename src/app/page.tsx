// src/app/page.tsx
import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { Hero } from "@/app/_components/hero";
import { Support } from "@/app/_components/support";
import SupportAssociation from "./_components/SupportAssociation";
import BusyWith from "./_components/BusyWith";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main className="pt-0">
      <Hero />
      <Container>
        <Support />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <SupportAssociation />
        
      </Container>
      <BusyWith />
    </main>
  );
}
