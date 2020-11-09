const tests = [
    `{
  "@context": "https://schema.org",
  "@type": "Recipe",
  "author": "John Smith",
  "cookTime": "PT1H",
  "datePublished": "2009-05-08",
  "description": "This classic banana bread recipe comes from my mom -- the walnuts add a nice texture and flavor to the banana bread.",
  "recipeIngredient": [
    "3 or 4 ripe bananas, smashed",
    "1 egg",
    "3/4 cup of sugar"
  ],
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/Comment",
    "userInteractionCount": "140"
  },
  "name": "Mom's World Famous Banana Bread",
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "240 calories",
    "fatContent": "9 grams fat"
  },
  "prepTime": "PT15M",
  "recipeInstructions": "Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add the flour last. Pour the mixture into a loaf pan and bake for one hour.",
  "recipeYield": "1 loaf",
  "suitableForDiet": "https://schema.org/LowFatDiet"
}`,
    `<div itemscope itemtype="http://schema.org/Recipe">
  <span itemprop="name">Mom's World Famous Banana Bread</span>
  By <span itemprop="author">John Smith</span>,
  <meta itemprop="datePublished" content="2009-05-08">May 8, 2009
  <span itemprop="description">This classic banana bread recipe comes
  from my mom -- the walnuts add a nice texture and flavor to the banana
  bread.</span>
  Prep Time: <meta itemprop="prepTime" content="PT15M">15 minutes
  Cook time: <meta itemprop="cookTime" content="PT1H">1 hour
  Yield: <span itemprop="recipeYield">1 loaf</span>
  Tags: <link itemprop="suitableForDiet" href="http://schema.org/LowFatDiet" />Low fat
  <div itemprop="nutrition"
    itemscope itemtype="http://schema.org/NutritionInformation">
    Nutrition facts:
    <span itemprop="calories">240 calories</span>,
    <span itemprop="fatContent">9 grams fat</span>
  </div>
  Ingredients:
  - <span itemprop="recipeIngredient">3 or 4 ripe bananas, smashed</span>
  - <span itemprop="recipeIngredient">1 egg</span>
  - <span itemprop="recipeIngredient">3/4 cup of sugar</span>
  ...
  Instructions:
  <span itemprop="recipeInstructions">
  Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add
  the flour last. Pour the mixture into a loaf pan and bake for one hour.
  </span>
  140 comments:
  <div itemprop="interactionStatistic" itemscope itemtype="http://schema.org/InteractionCounter">
    <meta itemprop="interactionType" content="http://schema.org/CommentAction" />
    <meta itemprop="userInteractionCount" content="140" />
  </div>
  From Janel, May 5 -- thank you, great recipe!
  ...
</div>`,
    `<div vocab="http://schema.org/" typeof="Recipe">
  <span property="name">Mom's World Famous Banana Bread</span>
  By <span property="author">John Smith</span>,
  <meta property="datePublished" content="2009-05-08">May 8, 2009
  <span property="description">This classic banana bread recipe comes
  from my mom -- the walnuts add a nice texture and flavor to the banana
  bread.</span>
  Prep Time: <meta property="prepTime" content="PT15M">15 minutes
  Cook time: <meta property="cookTime" content="PT1H">1 hour
  Yield: <span property="recipeYield">1 loaf</span>
  Tags: <link property="suitableForDiet" href="http://schema.org/LowFatDiet" />Low Fat
  <div property="nutrition" typeof="NutritionInformation">
    Nutrition facts:
    <span property="calories">240 calories</span>,
    <span property="fatContent">9 grams fat</span>
  </div>
  Ingredients:
  - <span property="recipeIngredient">3 or 4 ripe bananas, smashed</span>
  - <span property="recipeIngredient">1 egg</span>
  - <span property="recipeIngredient">3/4 cup of sugar</span>
  ...
  Instructions:
  <span property="recipeInstructions">
  Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add
  the flour last. Pour the mixture into a loaf pan and bake for one hour.
  </span>
  140 comments:
  <div property="interactionStatistic" typeof="InteractionCounter">
    <meta property="interactionType" content="http://schema.org/CommentAction" />
    <meta property="userInteractionCount" content="140" />
  </div>
  From Janel, May 5 -- thank you, great recipe!
  ...
</div>`,
    `{
  "@context": "https://schema.org/",
  "@id": "http://example.org/recipe",
  "@type": "Recipe",
  "name": "Mom's World Famous Banana Bread",
  "cookTime": "wwwwwwPT1H"
}`,
    `{
  "@context": "https://schema.org/",
  "@type": "Recipe",
  "@id": "http://example.org/recipe",
  "mainEntityOfPage": "http://example.ampproject.org/recipe-metadata.html",
  "name": "Grandma's Holiday Apple Pie",
  "image": {
    "@type": "ImageObject",
    "url": "leader.jpg",
    "height": 200,
    "width": 200
  },
  "author": {
    "@type":"Person",
    "name":"Carol Smith"
  },
  "datePublished": "2009-11-05",
  "description": "This is my grandmother's apple pie recipe. I like to add a dash of nutmeg.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.0",
    "reviewCount": "35"
  },
  "prepTime": "PT30M",
  "cookTime": "PT1H",
  "totalTime": "PT1H30M",
  "recipeYield": "1 9\\" pie (8 servings)",
  "nutrition": {
    "@type": "NutritionInformation",
    "servingSize": "1 medium slice",
    "calories": "250 cal",
    "fatContent": "12 g"
  },
  "ingredients": [
    "apples",
    "White sugar"
  ],
  "recipeInstructions": "1. Cut and peel apples\\n 2. Mix sugar and cinnamon. Use additional sugar for tart apples.\\n...",
  "publisher": {
    "@type": "Organization",
    "name": "ServiceB",
    "logo": {
      "@type": "ImageObject",
      "url": "http://cdn.ampproject.org/logo.jpg",
      "width": 600,
      "height": 60
    }
  }
}`,
    `{
  "@context": "https://schema.org/",
  "@id": "http://example.org/recipe",
  "@type": "Recipe",
  "name": "Banana Bread Recipe",
  "description": "The best banana bread recipe you’ll ever find! Learn how to use up all those extra bananas.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "123"
  },
  "video": {
    "@type": "VideoObject",
    "name": "How To Make Banana Bread",
    "description": "This is how you make banana bread, in 5 easy steps.",
    "contentUrl": "video123.mp4"
  }
}
`,
    `{
  "@context": "https://schema.org/",
  "@type": "Dataset",
  "@id": "http://example.org/dataset",
  "name": "NCDC Storm Events Database",
  "description": "Storm Data is provided by the National Weather Service (NWS) and contain statistics on..."
}`
]