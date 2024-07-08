This is a template for **Palindrome Systems** web design, created by Jay Reinier. It uses [Next.js](https://nextjs.org) for the site framework and [Sanity](https://www.sanity.io) for the content framework. CSS styling is done in [Tailwind CSS](https://tailwindcss.com).

For questions, email [jtreinier@gmail.com](mailto:jtreinier@gmail.com).

# Documentation

## Setup
- Clone this repository by typing `gh repo clone j-palindrome/jackhamill.digital`. Then open the folder in VS Code to start editing.
  - Type `npm install` in the root directory to edit the folder, then `npm run dev` to start development.
  - The webpage will run on the page `localhost:3000`, a server just running on the laptop. Navigate to `localhost:3000` in Chrome to see the changes you make update live.

## Next.js
- [Next.js](https://nextjs.org/docs) is the format in which websites are stored. It uses [React.js](https://react.dev), one of the most popular frameworks for web development. You'll want to know the basics of React components, and how they work, in order to edit the site.
- All web pages are stored in the `app` directory, nested according to their paths.
  - The `news/events` and `news/posts` pages show individual posts, but both events and posts are displayed in parallel on the `news` page.
- There are several parts of each page which are assembled together:
  - `page.tsx` is the "leaf" of the route, containing any content only on that page.
  - `layout.tsx` is the "frame" of the route, containing any nested page content. Learn more [here](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts).
  - `client.tsx` is for backgrounds and interactive content (Next.js renders it in the browser, or "client," rather than assembling it on the server and sending it directly to the browser.) Learn more [here](https://nextjs.org/docs/app/building-your-application/rendering/client-components).

## Dynamic Backgrounds
- In particular, you can edit the dynamic backgrounds provided in `Hydra`. Hydra is available [here](https://hydra.ojack.xyz/?sketch_id=alexandre_1) with interactive documentation that lets you know its functions. It is a simple way to create interesting textures in WebGL. To edit the Hydra-based backgrounds, edit the `client.tsx` components in the folder of the page you are looking for.
  - The Hydra components are wrapped by a library I made called [reactive-frames](https://www.npmjs.com/package/reactive-frames). The library "wraps" various other creative code libraries such as Processing or Hydra, to make it easier to include them in Next.js websites.
  - In Reactive, each component has a `name` which is its ID. You can call it anything as long as no two components are called the same thing.
  - To edit a particular component, edit the `draw` component. The `draw` function takes two arguments: `(self, context)`. 
    - `self` is the thing itself: the [Hydra instance](https://hydra.ojack.xyz/docs/docs/learning/extending-hydra/hydra-in-a-webpage/), or the Processing instance. 
    - `context` is the overall context which is an object structured as: `{ time, props, elements }`.
      - `time` is the time (in seconds) the animation has been going.
      - `elements` is another global object which stores all of the active elements in that particular `Reactive` context. Each object is retrievable by its `name` prop.
      - `props` is a general, global object you can edit and recall as the animation progresses, for example storing global variables or images.
  - For working with Hydra, edit functions as if you were using "non-global mode" (described above in the docs).

## Styling
- Styling for websites is done with [Tailwind CSS](https://tailwindcss.com), a CSS solution which involves short classes that you string together to make a full style for an object. 
- Any custom classes are listed in `app/globals.css`, and often they combine different Tailwind utilities. 
- Tailwind is just a collection of classes, and very easy to learn. If you want to change the styling of any object, just change the classes. 

## Content
- Content is updated through the [Sanity.io CDN](https://jackhamill.sanity.studio). Content is grouped into the following pages:
  - **Settings:** Global styles, colors, fonts, and website name / logo.
  - **About:** Bio, links to socials, headshot, resume/CV listings.
  - **Events:** Upcoming events.
  - **Posts:** Blog/news posts.
  - **Projects:** Your work samples, listed in the portfolio.
  - **Services:** Services are there to group projects, events, and posts into different "segments" or skills, like tags or categories. Choose 2-3 skills that people would hire you for, and group your work into these categories. You can describe the service for more context.
- To upload content to Sanity, just hit "Publish" after finishing edits in the platform. Changes will show up on the published site after a minute or so. 

## Publishing
- The site is up and running at [Vercel](https://vercel.com) right now. Any time the GitHub database is edited, the website will update. 