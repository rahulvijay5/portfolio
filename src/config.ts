const buildConfig = () => {
  const blogId = process.env.NEXT_PUBLIC_BLOG_ID;
  if (!blogId) throw new Error("NEXT_PUBLIC_BLOG_ID is missing");
  
  const name = process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME || "";
  const copyright = process.env.NEXT_PUBLIC_BLOG_COPYRIGHT || "Rahul";
  const defaultTitle =
    process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE || "Rahul Vijay";
  const defaultDescription =
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ||
    "Personal Site about Code, Travel and Life.";
  
  const ogImageUrl =
    process.env.NEXT_PUBLIC_OG_IMAGE_URL ||
    `${process.env.NEXT_PUBLIC_BASE_URL}/images/avatar.png`;

  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    blog: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: defaultDescription,
      },
    },
    ogImageSecret:
      process.env.OG_IMAGE_SECRET ||
      "secret_used_for_signing_and_verifying_the_og_image_url",
    ogImage: ogImageUrl,
    wisp: {
      blogId,
    },
  };
};

export const config = buildConfig();
