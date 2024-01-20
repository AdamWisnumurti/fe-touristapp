# Data Cakra - FE Adam Wisnumurti

A Next.js project with Typescript, Tailwind CSS, and Axios for API calls.

## Description

This is a template for setting up a Next.js project with a powerful combination of technologies, including Tailwind CSS for styling, and Axios for making API requests. This project structure promotes clean code organization and fast development.

## Project Structure

The project follows a common code structure that separates code into different directories for better organization:

.
├── public
│   └── ...
├── src
│   ├── modules
│   │   ├── global
│   │   │   ├── component
│   │   │   ├── context
│   │   │   ├── layouts
│   │   │   ├── data
│   │   │   ├── hook
│   │   │   ├── type
│   │   │   └── util
│   │   ├── module-1
│   │   │   ├── component
│   │   │   ├── container
│   │   │   ├── data
│   │   │   ├── hook
│   │   │   ├── type
│   │   │   └── util
│   │   ├── module-2
│   │   │   ├── componentx1
│   │   │   ├── container
│   │   │   ├── data
│   │   │   ├── hook
│   │   │   ├── type
│   │   │   └── util
│   │   └── ...
│   ├── pages
│   │   └── module-1's page
│   │   └── module-2's page
│   │   └── ...
│   ├── services
│   │   └── api-base
│   │   └── api-1
│   │   └── api-2
│   │   └── ...
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...


- `component`: Contains React components related to the module. These are typically reusable UI elements.
- `container`: Houses container components that manage the state and behavior of the related components.
- `data`: Deals with data-related logic, including API calls, data fetching, and manipulation.
- `hook`: Contains custom React hooks specific to the module for shared logic or state management.
- `type`: Defines TypeScript types/interfaces related to the module for better code organization and type safety.
- `util`: Holds utility functions or helper modules specific to the module.
- `pages`: React components that correspond to different routes.
- `services`: Helper functions, API calls, and other services.
- `layouts`: Shared layout components for consistent page structure.

## Features

- Next.js with TypeScript for server-rendered React applications and static typing.
- Tailwind CSS for utility-first styling.
- Axios for making API calls.
- Routing with Next.js's built-in routing system.
- Responsive design out-of-the-box with Tailwind CSS.
- Easy configuration and customization of styles with SCSS.
- Fast development and hot-reloading with Next.js.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AdamWisnumurti/fe-touristapp.git
   cd tds-fe
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser** and go to [http://localhost:3000](http://localhost:3000) to see the project in action.


## Add a New Module

  To create a new module, you can use the following command:
  
  ```bash
  Copy code
  npm run create-template module-name
  ```
  
  This script will set up the basic structure for a new module, including the component, container, data, hook, type, and util directories.

## Global Components:

Global components are stored in the global module. These components can be reused across different modules.

## Contributing

Contributions are welcome! Follow these steps to contribute:

- 1. Create a branch: git checkout -b feature-name
- 2. Make your changes and commit them: git commit -m 'Description of your changes'
- 3. Push to the branch: git push origin feature-name
- 4. Before pushing to git, please build your local changes to make sure the code is clean to get deployment (Optional)
- 5. Open a pull request to branch dev

For major changes, please open an issue first to discuss what you would like to change.

## Customization

- You can customize the call component "@module-1/..." in path of tsconfig.json.
- You can customize the Tailwind CSS styles in the `tailwind.config.js` file.
- Add your own components, pages, and styles in their respective directories.

## API Calls with Axios

- Axios is set up for making API calls in the `services/api.js` file. You can modify the base URL and add your API endpoints.

## Deployment

To deploy this project, follow the deployment instructions for Next.js applications. You may choose platforms like Vercel, Netlify, or your preferred hosting solution.

## Built With

- [Next.js](https://nextjs.org/) - The React framework for server-rendered applications.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [Axios](https://axios-http.com/) - A promise-based HTTP client for making API requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Axios Documentation](https://axios-http.com/docs)

Feel free to customize this template with additional information relevant to this project, such as project structure details, folder organization, and more.