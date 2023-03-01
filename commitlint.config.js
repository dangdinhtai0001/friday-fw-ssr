module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Không được phép để trống dòng trống giữa phần header và body
    "body-leading-blank": [1, "always"],
    // Số lượng ký tự tối đa cho mỗi dòng trong phần body
    "body-max-line-length": [2, "always", 100],
    // Không được phép để trống dòng trống giữa phần body và footer
    "footer-leading-blank": [1, "always"],
    // Số lượng ký tự tối đa cho mỗi dòng trong phần footer
    "footer-max-line-length": [2, "always", 100],
    // Số lượng ký tự tối đa cho phần header
    "header-max-length": [2, "always", 100],
    // Chữ cái của phần scope phải là chữ thường
    "scope-case": [2, "always", "lower-case"],
    // Chữ cái đầu tiên của phần subject phải là chữ thường
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    // Phần subject không được phép để trống
    "subject-empty": [2, "never"],
    // Phần subject không được kết thúc bằng dấu chấm
    "subject-full-stop": [2, "never", "."],
    // Chữ cái của phần type phải là chữ thường
    "type-case": [2, "always", "lower-case"],
    // Phần type không được phép để trống
    "type-empty": [2, "never"],
    // Các giá trị cho phần type phải nằm trong danh sách đã cho
    "type-enum": [
      2,
      "always",
      [
        "build", // Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
        "chore",
        "ci", // Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
        "docs", // Documentation only changes
        "feat", // A new feature
        "fix", // A bug fix
        "perf", // A code change that improves performance
        "refactor", //A code change that neither fixes a bug nor adds a feature
        "revert",
        "style", // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
        "test", //  Adding missing tests or correcting existing tests
        "translation",
        "security",
        "changeset",
      ],
    ],
  },
};
