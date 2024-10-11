// docs/.vitepress/config.mjs
import { defineConfig } from "file:///C:/Users/Hai%20Dang/node_modules/vitepress/dist/node/index.js";
var config_default = defineConfig(
  {
    title: "dang7rickroll's website",
    // description: "Một programmer gà",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        //    { text: 'Home', link: '/' },
        { text: "Posts", link: "/posts/" },
        { text: "About", link: "/about" },
        { text: "Markdown Editor", link: "/markdowneditor.md" },
        { text: "Music", link: "/music" }
      ],
      // sidebar: [
      //   {
      //     text: 'CP',
      //     items: [
      //       { text: 'Tổ hợp (Combinatorics)', link: 'posts/CP/combinatorics.md'},
      //       { text: 'Gray Code', link: 'posts/CP/graycode.md'},
      //     ]
      //   },
      // ],
      socialLinks: [
        { icon: "github", link: "https://github.com/theadanielskocher" },
        { icon: "facebook", link: "https://facebook.com/godnient" }
      ],
      search: {
        provider: "local"
      },
      footer: {
        message: "Powered by Vitepress & Surge",
        copyright: "Developed by Nguyen Dinh Hai Dang"
      }
    },
    markdown: {
      math: true
    },
    lastUpdated: false
  }
);
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIYWkgRGFuZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEhhaSBEYW5nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubWpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9IYWklMjBEYW5nL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubWpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xuXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHRpdGxlOiBcImRhbmc3cmlja3JvbGwncyB3ZWJzaXRlXCIsXG4gLy8gZGVzY3JpcHRpb246IFwiTVx1MUVEOXQgcHJvZ3JhbW1lciBnXHUwMEUwXCIsXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lLWNvbmZpZ1xuICAgIG5hdjogW1xuICAvLyAgICB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXG4gICAgICB7IHRleHQ6ICdQb3N0cycsIGxpbms6ICcvcG9zdHMvJyB9LFxuICAgICAgeyB0ZXh0OiAnQWJvdXQnLCBsaW5rOiAnL2Fib3V0JyB9LFxuICAgICAgeyB0ZXh0OiAnTWFya2Rvd24gRWRpdG9yJywgbGluazogJy9tYXJrZG93bmVkaXRvci5tZCd9LFxuICAgICAgeyB0ZXh0OiAnTXVzaWMnLCBsaW5rOiAnL211c2ljJ31cbiAgICBdLFxuXG4gICAgLy8gc2lkZWJhcjogW1xuICAgIC8vICAge1xuICAgIC8vICAgICB0ZXh0OiAnQ1AnLFxuICAgIC8vICAgICBpdGVtczogW1xuICAgIC8vICAgICAgIHsgdGV4dDogJ1RcdTFFRDUgaFx1MUVFM3AgKENvbWJpbmF0b3JpY3MpJywgbGluazogJ3Bvc3RzL0NQL2NvbWJpbmF0b3JpY3MubWQnfSxcbiAgICAvLyAgICAgICB7IHRleHQ6ICdHcmF5IENvZGUnLCBsaW5rOiAncG9zdHMvQ1AvZ3JheWNvZGUubWQnfSxcbiAgICAvLyAgICAgXVxuICAgIC8vICAgfSxcbiAgICAvLyBdLFxuXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdGhlYWRhbmllbHNrb2NoZXInIH0sXG4gICAgICB7IGljb246ICdmYWNlYm9vaycsIGxpbms6ICdodHRwczovL2ZhY2Vib29rLmNvbS9nb2RuaWVudCd9XG4gICAgXSxcblxuICAgICAgc2VhcmNoOiB7XG4gICAgICAgIHByb3ZpZGVyOiAnbG9jYWwnXG4gICAgICB9LFxuXG4gICAgICBmb290ZXI6IHtcbiAgICAgICAgbWVzc2FnZTogJ1Bvd2VyZWQgYnkgVml0ZXByZXNzICYgU3VyZ2UnLFxuICAgICAgICBjb3B5cmlnaHQ6ICdEZXZlbG9wZWQgYnkgTmd1eWVuIERpbmggSGFpIERhbmcnXG4gICAgICB9XG4gIH0sXG5cblxuICAgbWFya2Rvd246IHtcbiAgICAgICAgbWF0aCA6IHRydWVcbiAgIH0sXG5cbiAgbGFzdFVwZGF0ZWQ6IGZhbHNlXG5cbn1cbilcblxuXG5cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVIsU0FBUyxvQkFBb0I7QUFJdFQsSUFBTyxpQkFBUTtBQUFBLEVBQWE7QUFBQSxJQUMxQixPQUFPO0FBQUE7QUFBQSxJQUVQLGFBQWE7QUFBQTtBQUFBLE1BRVgsS0FBSztBQUFBO0FBQUEsUUFFSCxFQUFFLE1BQU0sU0FBUyxNQUFNLFVBQVU7QUFBQSxRQUNqQyxFQUFFLE1BQU0sU0FBUyxNQUFNLFNBQVM7QUFBQSxRQUNoQyxFQUFFLE1BQU0sbUJBQW1CLE1BQU0scUJBQW9CO0FBQUEsUUFDckQsRUFBRSxNQUFNLFNBQVMsTUFBTSxTQUFRO0FBQUEsTUFDakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVlBLGFBQWE7QUFBQSxRQUNYLEVBQUUsTUFBTSxVQUFVLE1BQU0sdUNBQXVDO0FBQUEsUUFDL0QsRUFBRSxNQUFNLFlBQVksTUFBTSxnQ0FBK0I7QUFBQSxNQUMzRDtBQUFBLE1BRUUsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBLE1BQ1o7QUFBQSxNQUVBLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDSjtBQUFBLElBR0MsVUFBVTtBQUFBLE1BQ0wsTUFBTztBQUFBLElBQ1o7QUFBQSxJQUVELGFBQWE7QUFBQSxFQUVmO0FBQ0E7IiwKICAibmFtZXMiOiBbXQp9Cg==
