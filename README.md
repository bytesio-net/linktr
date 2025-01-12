# Linktr

- Remix v2
- TailwindCSS
- Cloudflare Pages

This repository allows you to self-host your own link tree. To get started, you only need to modify a few files:

```
app/config/index.tsx        # Linktree configuration
public/app/linktr/static/   # Folder for images like icons
```

## Table of Contents
1. [Application](#application)
   - [Routes](#routes)
   - [Configuration](#configuration)
2. [Deployment](#deployment)
   - [Routing to Your Website](#routing-to-your-website)
3. [Development](#development)
   - [Running the Development Server](#running-the-development-server)
   - [Running Wrangler](#running-wrangler)
   - [Building the Application](#building-the-application)

## Application

### Routes
The following routes render the same Linktr component:
```
/
/linktr
```

Static files are located at `public/app/linktr/static/**`.  
After the build process, they will be available in `build/client/app/linktr/static`.

### Configuration
You can edit the configuration in the `app/config/index.tsx` file.

#### Schema
```ts
// RouteLink
{
  route: string;
  label: string;
  disabled?: boolean;
}

// Config
{
  icon: {
    light: string;
    dark?: string;
  };
  title: string;
  username?: string;
  announcements?: string;
  meta: {
    [key: string]: string;
  },
  share?: {
    label: boolean
    description?: string
    url?: string
  },
  routes: {
    X?: RouteLink;
    facebook?: RouteLink;
    instagram?: RouteLink;
    threads?: RouteLink;
    whatsapp?: RouteLink;
    bashop?: RouteLink;
    [key: string]: RouteLink | undefined;
  };
}
```

---

## Deployment
This project uses [Cloudflare Pages](https://pages.cloudflare.com) for hosting.  
To deploy, simply fork the repository, make your changes, and pubash them to trigger deployment.

### Routing to Your Website
To rewrite paths for your website, use the following patterns:
```
/linktr*                     # For the main path (the * is needed for compatibility with some browsers like Instagram's in-app browser)
/app/linktr/assets/*         # For JS assets
/app/linktr/static/*         # For images and other static files
```

We will provide worker codes to let you can multi origin in further if using Cloudfalre Free.


## Development

### Running the Development Server
```bash
npm run dev
```

### Running Wrangler
```bash
npm run build
npm run start
```

### Building the Application
```bash
npm run build
```