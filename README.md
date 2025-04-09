# @swipswup/password-utilities (Class 2 Example)

> A small library that creates a strong password and checks if a given password is strong.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
   - [Examples](#examples)
- [Contribution](#contribution)
- [Security](#security)
- [License](#license)

## Installation

Install via npm:

```bash
npm install @swipswup/password-utilities
```
Install via yarn:

```bash
yarn add @swipswup/password-utilities
```

## Usage

```js
import passwordUtilities from '@swipswup/password-utilities';

const strongPassword = generateStrongPassword();
console.log(isStrongPassword(strongPassword));

// Create a strong password with a given length
const strongPasswordWith20Chars = generateStrongPassword(20);
```

## Contribution

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Security

Please refer to our [SECURITY.md](./SECURITY.md) for information about our security policies, how to report vulnerabilities, and our approach to handling security concerns.

## 

## License

This project is licensed under the [MIT License](./LICENSE.md).


