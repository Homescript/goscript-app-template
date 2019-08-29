# goscript-app-template


**Create a .env file with these variables:**

```bash
API_KEY=
SERVICE_ID=
```

If you want to use the custom Ui to connect to different GoScript Servers add this additional .env
```bash
GOSCRIPT_API_HOST=http://localhost/apis
# OR
GOSCRIPT_API_HOST=https://api-cd.goscript.com
```

# Getting Started
Before doing anything, create a `.env` file in the same folder as the `package.json` file and add these two variables:

```bash
API_KEY=
SERVICE_ID=
```

Set the values to the ones displayed in the GoScript webapp.

Next, we need to install the required npm packages. Run this command:

```bash
npm install
```

Then, run this command to load the application.

```bash
npm start
```