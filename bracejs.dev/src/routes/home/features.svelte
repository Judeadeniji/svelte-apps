<script>
  import Section from "$lib/presets/section.svelte";
  import Heading from "$lib/presets/header.svelte";
  import Center from "$lib/presets/center.svelte";
  import Paragraph from "$lib/presets/para.svelte";
  import Code from "$lib/presets/code.svelte";
  import FullBleed from "$lib/presets/fullbleed.svelte";
  import CTA from "$lib/presets/cta.svelte";
  import BlogCard from "$lib/global/blog-item.svelte";
  import IconChevron from "$lib/icons/chevron.svelte";

  const recentPosts = [{
    title: "Introducing Brace: The New JavaScript Framework",
    icon: "labs",
    date: "May 15, 2023",
    url: "/blog/introducing-brace",
  },
    {
      title: "Brace Conference 2023: A Recap of the Event",
      icon: "blog",
      date: "April 28, 2023",
      url: "/blog/brace-conference-recap",
    },
    {
      title: "Benchmarking Performance in Brace: Tips and Best Practices",
      icon: "labs",
      date: "March 12, 2023",
      url: "/blog/benchmarking-in-brace",
    },
    {
      title: "Getting Started with Brace: A Step-by-Step Guide",
      icon: "blog",
      date: "February 5, 2023",
      url: "/blog/getting-started-with-brace",
    },
  ];

</script>

<Section background="left-card">
  <Center>
    <Heading>
      I've Got the Big Benjies
    </Heading>
    <Paragraph>
      Brace lets you build user interfaces out of individual pieces
      called components. Create your own Brace components like{' '}
      <Code>Thumbnail</Code>, <Code>LikeButton</Code>, and{' '}
      <Code>Video</Code>. Then combine them into entire screens, pages,
      and apps.
    </Paragraph>
  </Center>
  <FullBleed>
  </FullBleed>
  <Center>
    <Paragraph>
      Whether you work on your own or with thousands of other
      developers, using Brace feels the same. It is designed to let you
      seamlessly combine components written by independent people,
      teams, and organizations.
    </Paragraph>
  </Center>
  <CTA color='gray' icon='code' href="/">
    <p class="inline mx-3 dark:text-white">
      Just Testing
    </p>
  </CTA>
</Section>
<Section background="right-card">
  <div class="max-w-7xl mx-auto flex flex-col lg:flex-row px-5">
    <div class="max-w-3xl lg:max-w-7xl gap-5 flex flex-col lg:flex-row lg:px-5">
      <div class="w-full lg:w-6/12 max-w-3xl flex flex-col items-start justify-start lg:pl-5 lg:pr-10">
        <Heading>Upgrade when the future is ready</Heading>
        <Paragraph>
          Brace approaches changes with care. Every Brace commit is
          tested on business-critical surfaces with over a billion
          users. Over 100,000 Brace components at Meta help validate
          every migration strategy.
        </Paragraph>
        <div class="order-last pt-5">
          <Paragraph>
            The Brace team is always researching how to improve Brace.
            Some research takes years to pay off. Brace has a high bar
            for taking a research idea into production. Only proven
            approaches become a part of Brace.
          </Paragraph>
          <div class="hidden lg:flex justify-start w-full">
            <CTA color="gray" icon="news" href="/blog">
              Read more Brace news
            </CTA>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-6/12">
        <p class="uppercase tracking-wide font-bold text-sm text-tertiary dark:text-tertiary-dark flex flex-row gap-2 items-center mt-5 lg:-mt-2 w-full">
          <IconChevron />
          Latest Brace News
        </p>
        <div class="flex-col sm:flex-row flex-wrap flex gap-5 text-left my-5">
          <div class="flex-1 min-w-[40%]">
            <BlogCard {...recentPosts[0]} />
          </div>
          <div class="flex-1 min-w-[40%]">
            <BlogCard {...recentPosts[1]} />
          </div>
          <div class="flex-1 min-w-[40%]">
            <BlogCard {...recentPosts[2]} />
          </div>
          <div class="hidden sm:flex-1 sm:inline">
            <BlogCard {...recentPosts[3]} />
          </div>
        </div>
        <div class="flex lg:hidden justify-start w-full">
          <CTA color="gray" icon="news" href="/blog">
            <span class="dark:text-primary-dark">Read more Brace news</span>
          </CTA>
        </div>
      </div>
    </div>
  </div>
</Section>