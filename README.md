<div align="center">
  <h2>Fun Token Price Explorer</h2>
    <p align="center">
        Compare between two crypto tokens and their relative price against the USD. <a href="https://fun-assignment.vercel.app">Try it out here</a>
    </p>
</div>

<div align="center">
<img src="https://github.com/user-attachments/assets/1121f018-1d5a-4a3c-b4fe-8f4f53b8dace" width="800">
</div>

## Development Environment
First create a `.env.local` file and add `VITE_FUN_API_KEY=API_KEY`

Then install the relevant packages
```bash
npm i
```

Finally, start the development server
```bash
npm run dev
```

## Main Features
- [x] View source token value against the USD
- [x] View target token value against the USD
- [x] Compare between two tokens and their values against USD
- [x] Convenient “Swap” button that swaps source and target token 
- [x] Automatic refresh of coin prices every 15 seconds.
- [x] Error handling, loading states and retry button


<img src="https://github.com/user-attachments/assets/6a44181e-05ce-4f00-b5c4-09fa8897c725" width="800">


## Assumptions
- I was given two API endpoints, one for fetching token details and one for fetching the price. While I could have hardcoded the token information for the four tokens and skipped the first API call, I chose to implement both. I assumed the intention of the project was to simulate a real-world integration, where dynamic token data would typically come from an API.
- Unit tests / end-to-end tests are not necessary for this task.
- Used TypeScript to minimize chance of introducing bugs.

## Libraries and Reasoning
- **TanStack Query**: One of my favourites at work. Tremendously useful for this project use case as it can gracefully handle errors, caching, refetching and invalidating queries.
- **HeroUI**: I chose this primarily to experiment with a new UI library that I haven’t used before. From the conversations, it seemed that it is a necessary skill is to understand and integrate with other codebases, which in this case, may include a foreign UI library. I am also time-constrained so the UI library helped me build a lot faster.
- **Moment**: Straightforward for displaying dates in various formats.
- **Tailwind**: Another classic CSS framework and also I needed it as part of the HeroUI.

## Final Remarks
I really enjoyed building this. Throughout the entire process I kept thinking about what other features I could add to improve upon this. Perhaps using another API to fetch more token types and diversify offerings. Or maybe offering more granular insights about the prices of each coin to enrich the user experience. Scalability was another question I thought about. With an actual project and more time on my hand, I would have focused on refining the UI/UX, smoothing out interactions, and elevating visual polish. Additionally, I would have added in unit tests and end-to-end testing. However, I knew I had to keep to the scope of the task. Nothing more and nothing less.
