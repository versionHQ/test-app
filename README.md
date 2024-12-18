# Overview

[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)

A React test web app for the mulit-agent RAG system.

**Visit:**

- Marketing:   [Landing page](https://home.versi0n.io)
- Client app:  [Production](https://versi0n.io/)
- Backend:     [Orchestration framework / multi-agent RAG](https://github.com/versionHQ/multi-agent-system)


## UI
<p align="center">
    <img alt="UI" src="https://res.cloudinary.com/dfeirxlea/image/upload/v1733414200/pj_m_home/tqgg3xfpk5x4i6rh3egv.png" width="60%">
&nbsp;&nbsp;&nbsp;
   <img src="https://res.cloudinary.com/dfeirxlea/image/upload/v1728302420/pj_m_home/xy58a7imyquuvkgukqxt.png" width="25%" alt="messaging workflow">
</p>

<hr />

## Key Features

A mulit-agent system that tailors messaging workflow, predicts its performance, and deploys it on third-party tools.

1. Select a type of outbound.

2. Select a LLM for the agent.

3. Submit a landing URL of the product you want to launch the outbound campaign.

4. The agents analyze the URL. Check the analysis and approve/refine them.

5. We call the API, let the agents create outbound campaigns.

6. Approve and deploy them or comment to refine.


## Technologies Used

- A simple React app


## Project Structure

```
.
public/                  # Orchestration frameworks on Pydantic
│   └── ...
│
src/                     # React app
│   ├── components/
│   ├── App.js
│   ├── index.js
│   └── main.scss
│
└── package.json         # Dependencies
```

## Setup

1. Install the `npm` package manager:
   ```
   brew install npm
   ```

2. Install dependencies:
   ```
   npm i
   ```

   * When the upstream dependency conflict happens, try:
   ```
   npm i --legacy-peer-deps
   ```

3. Set up environment variables:
   Create a `.env` file in the project root and add necessary k, v pairs:
   ```
   REACT_APP_YOUR_KEY_NAME=your-key-value
   ```

## Usage

1. Start the React app:
   ```
   npm start
   ```
   The app will be available at `http://localhost:3000`.

2. Add new features.

3. Frontend (production) is available at `https://versi0n.io`. Currently we are on beta.


## Testing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-amazing-feature`)
3. Pull the latest version of source code from the main branch (`git pull origin main`) *Address conflicts if any.
4. Commit your changes (`git add .` / `git commit -m 'Add your-amazing-feature'`)
5. Push to the branch (`git push origin feature/your-amazing-feature`)
6. Open a pull request

7. Flag with `#! REFINEME` for any improvements and `#! FIXME` for any errors.


### Package Management with npm

- Add a package: `npm i <package> --save` or `npm i <package> --save-dev`
- Remove a package: `npm uninstall <package>`

* To reinstall all the dependencies, 
   ```
   rm -rf package-lock.json node_modules
   npm i
   ```

## Trouble Shooting

Common issues and solutions:
- API key errors: Ensure all API keys in the `.env` file are correct and up to date. Then restart the React app to apply the updated value.
- Database connection issues: Check if the Chroma DB is properly initialized and accessible.
- Issues related to dependencies: Add `--legacy-peer-deps` to address the dependency conflict. Or, after removing node_modules and package-lock.json, run `npm upgrade`. 


## Overall Project Structure

|  | Marketing landing page | Client app (beta) | Orchestration/agent system | Analyics
| :---: | :---: | :---: | :---: | :---: |
| Github |  [repo_1](https://github.com/krik8235/pj_m_dev_home)  | [repo_2](https://github.com/krik8235/client-app) | [multi-agent-system](https://github.com/versionHQ/multi-agent-system) | [repo_b](https://github.com/versionHQ/clutering-analysis) |
| Website | [home](https://home.versi0n.io) | [client app](https://versi0n.io) | - | - |

