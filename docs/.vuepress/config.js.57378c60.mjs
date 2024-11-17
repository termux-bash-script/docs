// docs/.vuepress/config.js
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
var config_default = defineUserConfig({
  lang: "en-US",
  title: "VuePress",
  description: "My first VuePress Site",
  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",
    navbar: ["/", "/get-started"]
  }),
  bundler: viteBundler()
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2RhdGEvZGF0YS9jb20udGVybXV4L2ZpbGVzL2hvbWUvdnVlL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvaG9tZS92dWUvZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9kYXRhL2RhdGEvY29tLnRlcm11eC9maWxlcy9ob21lL3Z1ZS9kb2NzLy52dWVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tICdAdnVlcHJlc3MvdGhlbWUtZGVmYXVsdCdcbmltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tICd2dWVwcmVzcy9jbGknXG5pbXBvcnQgeyB2aXRlQnVuZGxlciB9IGZyb20gJ0B2dWVwcmVzcy9idW5kbGVyLXZpdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICBsYW5nOiAnZW4tVVMnLFxuXG4gIHRpdGxlOiAnVnVlUHJlc3MnLFxuICBkZXNjcmlwdGlvbjogJ015IGZpcnN0IFZ1ZVByZXNzIFNpdGUnLFxuXG4gIHRoZW1lOiBkZWZhdWx0VGhlbWUoe1xuICAgIGxvZ286ICdodHRwczovL3Z1ZWpzLnByZXNzL2ltYWdlcy9oZXJvLnBuZycsXG5cbiAgICBuYXZiYXI6IFsnLycsICcvZ2V0LXN0YXJ0ZWQnXSxcbiAgfSksXG5cbiAgYnVuZGxlcjogdml0ZUJ1bmRsZXIoKSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlVLFNBQVMsb0JBQW9CO0FBQzlWLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsbUJBQW1CO0FBRTVCLElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBRWIsT0FBTyxhQUFhO0FBQUEsSUFDbEIsTUFBTTtBQUFBLElBRU4sUUFBUSxDQUFDLEtBQUssY0FBYztBQUFBLEVBQzlCLENBQUM7QUFBQSxFQUVELFNBQVMsWUFBWTtBQUN2QixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=