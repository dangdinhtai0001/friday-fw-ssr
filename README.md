[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/summary/new_code?id=dangdinhtai0001_friday-fw-ssr)

## Quy tắc khi commit

### Tiền tố

- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `docs`: Documentation only changes
- `feat`: A new feature
- `fix`: A bug fix
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `test`: Adding missing tests or correcting existing tests

sample:

```bash
git commit -m "fix: clear code & fix lỗi không build được"
```

React-flexbox-grid đang bị lỗi như sau: https://github.com/roylee0704/react-flexbox-grid/issues/173

### Một số hook 

[@Reactivers/hooks](https://hooks.reactivers.com/)
