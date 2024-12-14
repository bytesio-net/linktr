# Linktr


You can use this repository to self-host your link tree. You just need to modify following files
```
app/config/index.tsx        # Linktree config
public/app/linktr/static/   # for images like icon
```

## Tech Stack
- Remix v2
- TailwindCSS
- Cloudfalre Page

## Application Config
Edit the `app/config/index.tsx` config file
### Schema
```ts
# RouteLink
{
  route: string;
  label: string;
  disabled?: boolean;
}

# Config
{
  icon: {
    light: string;
    dark?: string;
  };
  title: string;
  username?: string;
  announcements?: string;
  meta: {
    [key:string]: string
  }
  routes: {
    X?: RouteLink;
    facebook?: RouteLink;
    instagram?: RouteLink;
    threads?: RouteLink;
    whatsapp?: RouteLink;
    shop?: RouteLink;
    [key: string]: RouteLink | undefined; # default color theme
  };
}
```

## Deployment
This Project used [Cloudflare Page](https://pages.cloudflare.com) as hosting. You just need to connect your forked repository then update the changes, it will be trigger the deployment.

## Development
### Run development server
```sh
npm run dev
```

### Run Wrangler

```sh
npm run build
npm run start
```

### Build
```sh
npm run build
```